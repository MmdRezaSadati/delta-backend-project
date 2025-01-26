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
import { User } from "./User";
import { Category } from "./Category";

@Table({ tableName: "blogs", schema: "delta_project", timestamps: false  })
export class Blog extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id!: number;

  @Column(DataType.TEXT)
  title!: string;

  @Column(DataType.TEXT)
  caption!: string;

  @Column(DataType.TEXT)
  estimated_reading_time!: string;

  @ForeignKey(() => User)
  @Column(DataType.BIGINT)
  author_id!: number;

  @BelongsTo(() => User)
  author!: User;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at!: Date;

  @ForeignKey(() => Category)
  @Column(DataType.BIGINT)
  category_id!: number;

  @BelongsTo(() => Category)
  category!: Category;
}
