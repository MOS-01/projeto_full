import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

import { Contact } from "./contact.entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @CreateDateColumn({ type: "date" })
  creatdAt: string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];
}
export { User };
