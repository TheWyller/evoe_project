import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  DeleteDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Supporters } from "./supporters.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deleted_at: Date;

  @Column({ default: false })
  isAdm: boolean;

  @OneToMany((type) => Supporters, (supporters) => supporters.user, {
    eager: true,
  })
  supporters: Supporters[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
