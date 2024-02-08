import { config } from "dotenv";

config();

export const REACT_APP_DB_DOMAIN = process.env.REACT_APP_DB_DOMAIN || "http://localhost:3010";
