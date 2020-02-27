import express, { Application } from "express";
import cookieParser from "cookie-parser";
import { healthChecker, cors } from "./middlewares";

class App {
  public app: Application = express();

  constructor() {
    this.init();
    this.setMiddleware();
    this.setRoutes();
  }

  private init = (): void => {
    this.app.disable("x-powered-by");
  };

  private setMiddleware = (): void => {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(cors());
  };

  private setRoutes = (): void => {
    this.app.get("/", healthChecker);
  };
}

export const { app } = new App();
