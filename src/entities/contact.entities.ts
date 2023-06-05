import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import { User } from "./user.entities";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: "140" })
  name: string;

  @Column({ type: "varchar", length: "45" })
  email: string;

  @Column({ type: "varchar", length: "14" })
  phone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ type: "date" })
  deletedAt: string;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}

export { Contact };
