import express, { Application } from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
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
    const { app } = this;
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(cors());
    app.use(compression());
  };

  private setRoutes = (): void => {
    this.app.get("/", healthChecker);
  };
}

export const { app } = new App();
