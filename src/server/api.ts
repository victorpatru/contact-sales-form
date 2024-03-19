import { remultExpress } from "remult/remult-express";
import { Task } from "../shared/task";
import { createPostgresConnection } from "remult/postgres";
import "dotenv/config";

export const api = remultExpress({
  entities: [Task],
  dataProvider: createPostgresConnection({
    connectionString: process.env["DB_CONNECTION_STRING"] || "",
  }),
});
