import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
  AfterUpdate,
  BeforeUpdate,
} from "typeorm";

import { Contact } from "./contact.entities";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: "140" })
  name: string;

  @Column({ type: "varchar", length: "45", unique: true })
  email: string;

  @Column({ type: "varchar", length: "14" })
  phone: string;

  @Column({ type: "varchar", length: "120" })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @DeleteDateColumn({ type: "date" })
  deletedAt: string;

  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const passwordNew = getRounds(this.password);
    if (!passwordNew) {
      this.password = hashSync(this.password, 10);
    }
  }
}
export { User };
