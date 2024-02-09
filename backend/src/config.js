import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3010;
export const DB_HOST = process.env.DB_HOST || "database";
export const DB_PORT = process.env.DB_PORT || 3306;
export const DB_USER = process.env.DB_USER || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "root";
export const DB_DATABASE = process.env.DB_DATABASE || "viernes_audios";