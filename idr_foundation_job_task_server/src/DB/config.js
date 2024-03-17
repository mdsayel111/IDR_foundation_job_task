const { Client, Pool } = require("pg");
require("dotenv").config();
console.log(process.env.DB_PASS);

// const config = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: "idr_foundation_job_task",
// };

const pool = new Pool({
  connectionString:
    "postgres://sayel111:efEU7QRc13JERy2D21x3h2mIlWuvCOsS@dpg-cnr8vqq1hbls73dufvh0-a/idr_foundation_job_task_2r9z",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = { pool };
