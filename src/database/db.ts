/* config env */
let path = "../../.env";

require("dotenv").config({
  path: `${__dirname}/${path}`,
});

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
