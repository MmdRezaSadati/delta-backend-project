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
import { House } from "./House";
import { User } from "./User";

@Table({ tableName: "comments" , schema: "delta_project", timestamps: false })
export class Comment extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id!: number;

  @ForeignKey(() => House)
  @Column(DataType.BIGINT)
  house_id!: number;

  @BelongsTo(() => House)
  house!: House;

  @ForeignKey(() => User)
  @Column(DataType.BIGINT)
  user_id!: number;

  @BelongsTo(() => User)
  user!: User;

  @Column(DataType.TEXT)
  title!: string;

  @Column(DataType.TEXT)
  caption!: string;

  @Column(DataType.DECIMAL)
  rating!: number;

  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })
  created_at!: Date;

  @ForeignKey(() => Comment)
  @Column(DataType.BIGINT)
  parent_comment_id!: number;

  @BelongsTo(() => Comment)
  parent_comment!: Comment;
}
