require("dotenv").config({ path: "./.env" });
import express from "express";
import cors from "cors";

import helmet from "helmet";
import { registerRoutes } from "./routes/v1/routes";

const PORT = 8000;

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeControllers();
  }

  private initializeMiddlewares(): void {
    const allowedOrigins: string[] = ["http://localhost:3000"];

    this.app.use(
      cors({
        origin: function (origin, callback) {
          if (!origin) return callback(null, true);

          if (allowedOrigins.indexOf(origin) === -1) {
            const msg = `The CORS policy for this site does not allow access from the specified Origin`;
            return callback(new Error(msg), false);
          }

          return callback(null, true);
        },
      })
    );
    this.app.use(express.json({ limit: "5mb" }));
    this.app.use(express.urlencoded({ extended: true, limit: "5mb" }));
    this.app.use(helmet());
  }
  private initializeControllers(): void {
    registerRoutes(this.app);
  }

  public listen(): void {
    this.app
      .listen(PORT, () => {
        console.log(
          `Application Running in ${process.env.NODE_ENV} mode on port ${PORT}!`
        );
      })
      .on("error", (err) => {
        console.log(`Server Encountered an error : ${err.message}`);
      });
  }
}
export default App;
