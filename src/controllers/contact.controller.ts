import { Request, Response } from "express";
import { Contact } from "../entities/contact.entities";
import {
  TcreateContact,
  TreturnContact,
  TupdateContact,
} from "../interfaces/contact.interface";
import { createContactService } from "../services/contact/createContact.service";
import { updateContactService } from "../services/contact/updateContatc.service";
import { deleteContactService } from "../services/contact/deleteContact.service";
import { retriveContactService } from "../services/contact/retriveContact.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const body: TcreateContact = req.body;
  const userId: string = res.locals.user.id;

  const newContact: TreturnContact = await createContactService(userId, body);

  return res.status(201).json(newContact);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact: Contact = res.locals.contact;
  const body: TupdateContact = req.body;

  const updateContact: TreturnContact = await updateContactService(
    contact,
    body
  );

  return res.status(200).json(updateContact);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact: Contact = res.locals.contact;
  await deleteContactService(contact);

  return res.status(204).send();
};

const retriveContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contact: Contact = res.locals.contact;
  const retriveContact = await retriveContactService(contact);

  return res.status(200).json(retriveContact);
};

export {
  createContactController,
  updateContactController,
  deleteContactController,
  retriveContactController,
};
