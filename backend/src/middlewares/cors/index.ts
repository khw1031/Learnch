import { RequestHandler } from "express";
import CORS from "cors";
import origin from "./origin";

const env = process.env.NODE_ENV || "development";

export const cors: () => RequestHandler = () =>
  CORS({
    credentials: true,
    origin: origin[env],
  });
