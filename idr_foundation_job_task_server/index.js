const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { pool } = require("./src/DB/config");
require("dotenv").config();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://idr-foundation-job-task-client.vercel.app",
    ],
  })
);

app.get("/", async (req, res) => {
  try {
    const query = `
  WITH aggregated_duas AS (
    SELECT
      category,
      json_agg(jsonb_build_object(
        'dua_name', dua_name,
        'dua_description', dua_description,
        'reference', reference,
        'dua', dua,
        'audio_url', audio_url
      )) AS duas
    FROM
      dua
    GROUP BY
      category
  )
  SELECT
    c.id,
    c.cat_name_bn,
    c.cat_name_en,
    c.no_of_subcat,
    c.no_of_dua,
    c.cat_icon,
    jsonb_object_agg(sub_category_name, dua_data.duas) AS sub_category
  FROM
    category c
  CROSS JOIN
    unnest(c.sub_category) AS sub_category_name
  LEFT JOIN
    aggregated_duas dua_data ON dua_data.category = sub_category_name
  GROUP BY
    c.id, c.cat_name_bn, c.cat_name_en, c.no_of_subcat, c.no_of_dua, c.cat_icon;
`;
    const categorys = await pool.query(query);
    const duas = await pool.query(`
    SELECT category, COUNT(*) as count_of_duas
    FROM dua
    GROUP BY category;
  `);
    res.send({ categorys: categorys.rows, duas: duas.rows });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "internal server error" });
  }
});

app.get("/duas", async (req, res) => {
  try {
    const { category } = req.query;
    console.log(category);
    const query = `
      SELECT d.*
      FROM dua d
      WHERE d.category IN (
        SELECT UNNEST(c.sub_category)
        FROM category c
        WHERE c.cat_name_en = $1
      );
    `;
    const duas = await pool.query(query, [category]);
    console.log(duas);
    res.send({ duas: duas.rows });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: "internal server error" });
  }
});

// app.get("/insertdata", async (req, res) => {
//   try {
//     const query = `
//     INSERT INTO dua (dua_name, dua_description, reference, dua, audio_url, category)
//     VALUES ($1, $2, $3, $4, $5, $6)
//     RETURNING *;`;
//     const result = await pool.query(query, [
//       "Dua of a Muslim in the absence of another Muslim",
//       "There is none worthy of worship except Allah alone with no partner or associate. He is the Dominion and to Him be all praise, and He is able to do all things. O Allah, one can withhold what You have given and none can give what You have withheld, and no wealth or fortune can benefit anyone for from You comes all wealth and fortune.",
//       "Bukhari: 844",
//       "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ الْجَدِّ مِنْكَ الْجَدُّ",
//       "https://api.duaruqyah.com/duaaudiofinal/7.mp3",
//       "Those whose duas are accepted",
//     ]);
//     console.log(result);
//     res.send({ message: "insert data" });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ message: "internal server error" });
//   }
// });

app.listen(port, async () => {
  await pool.connect();
  console.log(`Example app listening on port ${port}`);
});
