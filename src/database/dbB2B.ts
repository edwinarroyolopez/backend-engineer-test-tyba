/* config env */
const env = process.env.NODE_ENV;
let envPath = "../../.env.dev";
console.log(env);
switch (env) {
  case "prod":
    envPath = "../../.env";
    break;
  case "test":
    envPath = "../../.env.test";
    break;
  case "dev":
    envPath = "../../.env.dev";
    break;
  default:
    break;
}

require("dotenv").config({
  path: `${__dirname}/${envPath}`,
}); /* create my environments vars */

import { Pool } from "pg";
const { DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME, DB_SCHEMA } = process.env;
export const SCHEMA = DB_SCHEMA;

const posgresUrl = `postgresql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
export const pool = new Pool({ connectionString: posgresUrl });

//console.log('posgresUrl', posgresUrl)

export const queryHandler = async (...args: any): Promise<any> => {
  let client: any;
  try {
    client = await pool.connect();
    return await client.query(...args);
  } catch (error) {
    console.log("error: ", error);

    throw error;
  } finally {
    if (client) {
      console.log("db release");
      client.release(true);
    }
  }
};
