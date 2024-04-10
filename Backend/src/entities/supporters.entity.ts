import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  DeleteDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity";

@Entity("supporters")
export class Supporters {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deleted_at: Date;

  @Column()
  userId: string;

  @ManyToOne((type) => User, (user) => user.supporters)
  user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
