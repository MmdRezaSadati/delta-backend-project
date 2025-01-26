import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from "sequelize-typescript";

@Table({ tableName: "users", schema: "delta_project", timestamps: false  })
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id!: number;

  @Column(DataType.TEXT)
  role!: "buyer" | "seller" | "admin";

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  membership_date!: Date;

  @Column(DataType.TEXT)
  profile_picture!: string;

  @Column(DataType.TEXT)
  password!: string;
}
