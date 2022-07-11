import bodyParser from "body-parser";
import express from "express";
import adminRouter from "./routes/admin.routes";
import cors from "cors";
function blah() {
  console.log("blah");
}
class App {
  constructor() {
    this.express = express();
    this.#middlewares();
    this.#routes();
  }

  #middlewares() {
    this.express.use(express.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.use(cors());
  }

  #routes() {
    this.express.use("/admin", adminRouter);
  }
}

export default new App().express;
