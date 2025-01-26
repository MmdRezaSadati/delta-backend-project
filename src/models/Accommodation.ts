import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import { House } from "./House";

@Table({ tableName: "accommodations", schema: "delta_project", timestamps: false  })
export class Accommodation extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id!: number;

  @ForeignKey(() => House)
  @Column(DataType.BIGINT)
  house_id!: number;

  @Column(DataType.TEXT)
  facility!: string;
}
