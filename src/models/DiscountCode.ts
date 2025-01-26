import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from "sequelize-typescript";

@Table({ tableName: "discount_codes" })
export class DiscountCode extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id!: number;

  @Column(DataType.TEXT)
  code!: string;

  @Column(DataType.DECIMAL)
  discount_percentage!: number;

  @Column(DataType.DATE)
  valid_until!: Date;
}
