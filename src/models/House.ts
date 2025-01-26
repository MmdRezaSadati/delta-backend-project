import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

@Table({ tableName: "houses" , schema: "delta_project", timestamps: false })
export class House extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id!: number;

  @Column(DataType.TEXT)
  title!: string;

  @Column(DataType.TEXT)
  address!: string;

  @Column(DataType.ARRAY(DataType.TEXT))
  photos!: string[];

  @Column(DataType.DECIMAL)
  rate!: number;

  @Column(DataType.DECIMAL)
  price!: number;

  @Column(DataType.ARRAY(DataType.TEXT))
  tags!: string[];

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  last_updated!: Date;

  @Column(DataType.INTEGER)
  capacity!: number;

  @Column(DataType.JSONB)
  location!: object;

  @Column(DataType.JSONB)
  categories!: object;

  @Column(DataType.INTEGER)
  bathrooms!: number;

  @Column(DataType.INTEGER)
  parking!: number;

  @Column(DataType.INTEGER)
  rooms!: number;

  @Column(DataType.TEXT)
  yard_type!: string;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  num_comments!: number;

  @Column(DataType.TEXT)
  transaction_type!: "rental" | "mortgage" | "reservation" | "direct_purchase";
}
