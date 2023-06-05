import { Request, Response } from "express";
import { User } from "../entities/user.entities";
import {
  TuserCreate,
  TuserReturn,
  TuserUpdate,
} from "../interfaces/user.interface";
import { createUserService } from "../services/user/createUser.service";
import { updateUserService } from "../services/user/updateUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";
import { retriveUserService } from "../services/user/retriveUser.service";
import { TreturnListaContact } from "../interfaces/contact.interface";
import { retriveContactsUserService } from "../services/user/retriveContactsUser.service";
import { retriveProfileUserService } from "../services/user/retriveProfileUser.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const body: TuserCreate = req.body;

  const newUser: TuserReturn = await createUserService(body);

  return res.status(201).json(newUser);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: User = res.locals.user;
  const body: TuserUpdate = req.body;

  const userUpdate: TuserReturn = await updateUserService(user, body);

  return res.status(200).json(userUpdate);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: User = res.locals.user;
  await deleteUserService(user);

  return res.status(204).send();
};

const retriveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const findUser: User = res.locals.user;

  const user: TuserReturn = await retriveUserService(findUser);

  return res.status(200).json(user);
};

const retriveContactsUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.user.id;

  const listConstacts: TreturnListaContact = await retriveContactsUserService(
    userId
  );

  return res.status(200).json(listConstacts);
};

const retriveProfileUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: string = res.locals.user.id;

  const user: TuserReturn = await retriveProfileUserService(userId);

  return res.status(200).json(user);
};

export {
  createUserController,
  updateUserController,
  deleteUserController,
  retriveContactsUserController,
  retriveProfileUserController,
  retriveUserController,
};
