import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  DataType,
} from "sequelize-typescript";
import { User } from "./User";
import { House } from "./House";

@Table({ tableName: "favorites" })
export class Favorite extends Model {
  @ForeignKey(() => User)
  @PrimaryKey
  @Column(DataType.BIGINT)
  user_id!: number;

  @ForeignKey(() => House)
  @PrimaryKey
  @Column(DataType.BIGINT)
  house_id!: number;
}
