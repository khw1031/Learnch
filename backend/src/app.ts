import express from "express";

class App {
  public app: express.Application = express();

  constructor() {
    this.init();
    this.setMiddleware();
  }

  private init = () => {
    this.app.disable("x-powered-by");
  };

  private setMiddleware = () => {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  };
}

const { app } = new App();

export { app };
