import {config} from "dotenv";

config()

export default {
    port: process.env.PORT ||3000,
    dbHost: process.env.DB_HOST||"",
    dbUser: process.env.DB_USER||"",
    dbPassword: process.env.DB_PASSWORD ||"",
    dbDatabase: process.env.DB_DATABASE || ""
}