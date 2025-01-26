import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from "sequelize-typescript";

@Table({ tableName: "social_media_links", schema: "delta_project", timestamps: false })
export class SocialMediaLink extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id!: number;

  @Column(DataType.TEXT)
  platform!: string;

  @Column(DataType.TEXT)
  url!: string;
}
