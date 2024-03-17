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
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = { pool };
