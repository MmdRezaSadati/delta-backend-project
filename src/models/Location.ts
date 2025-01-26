import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from "sequelize-typescript";

@Table({ tableName: "locations", schema: "delta_project", timestamps: false })
export class Location extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id!: number;

  @Column(DataType.TEXT)
  area_name!: string;

  @Column(DataType.DECIMAL)
  lat!: number;

  @Column(DataType.DECIMAL)
  lng!: number;
}
