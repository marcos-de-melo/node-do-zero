import dotenv from 'dotenv';
import postgres from "postgres";
dotenv.config();

const { PGHOST,PGPORT, PGUSER, PGPASSWORD, PGDATABASE } = process.env;

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`;
console.log(URL);

// export const sql = postgres(URL, {ssl: {rejectUnauthorized: false}});
export const sql = postgres(URL, {ssl: false});
