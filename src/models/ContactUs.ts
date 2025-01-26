import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from "sequelize-typescript";

@Table({ tableName: "contact_us" , schema: "delta_project", timestamps: false })
export class ContactUs extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id!: number;

  @Column(DataType.TEXT)
  title!: string;

  @Column(DataType.TEXT)
  message!: string;
}
