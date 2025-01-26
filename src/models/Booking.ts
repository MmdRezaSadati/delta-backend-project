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

@Table({ tableName: "bookings" , schema: "delta_project", timestamps: false })
export class Booking extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id!: number;

  @ForeignKey(() => House)
  @Column(DataType.BIGINT)
  house_id!: number;

  @Column(DataType.RANGE(DataType.DATE))
  reserved_dates!: [Date, Date];

  @Column(DataType.JSONB)
  traveler_details!: object;
}
