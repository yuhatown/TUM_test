import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });
// dotenv.config();

const test = {
  host: "localhost",
  user: "yuha",
  password: process.env.DATABASE_PASSWORD,
  // password: 'test1234',
  database: "tum_test",
};

export default test;
