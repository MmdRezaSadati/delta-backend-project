import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { SocialMediaLink } from "../models/SocialMediaLink";
import { Blog } from "../models/Blog";
import { ContactUs } from "../models/ContactUs";
import { DiscountCode } from "../models/DiscountCode";
import { Booking } from "../models/Booking";
import { Favorite } from "../models/Favorite";
import { Accommodation } from "../models/Accommodation";
import { Comment } from "../models/Comment";
import { Location } from "../models/Location";
import { House } from "../models/House";
import { User } from "../models/User";
import { Category } from "../models/Category";

dotenv.config();
const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "3306"),
  dialect: "postgres",
  logging: false,
  models: [
    Category,
    User,
    House,
    Location,
    Comment,
    Accommodation,
    Favorite,
    Booking,
    DiscountCode,
    ContactUs,
    Blog,
    SocialMediaLink,
  ],
});
// console.log(sequelize)
export default sequelize;
