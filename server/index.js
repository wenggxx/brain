const express = require('express');
var mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Sample route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

var con = mysql.createConnection({
  host: process.env.mysql_host,
  user: process.env.mysql_user,
  password: process.env.mysql_password,
  database: process.env.mysql_database
});

con.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("Connected!");
});

app.get('/api/home', (req, res) => {
      con.connect(function(err) {
      if (err) throw err;
      con.query(`        
        SELECT JSON_OBJECT(
          'news', (
            SELECT JSON_ARRAYAGG(
              JSON_OBJECT(
                'id', n.id,
                'title', n.title,
                'create_dts', n.create_dts,
                'image_url', n.image_url,
                'description', n.description,
                'author', n.author,
                'source', n.source,
                'summary', n.summary,
                'body', n.body
              )
            )
            FROM (
              SELECT * FROM news ORDER BY create_dts DESC LIMIT 10
            ) AS n
          ),
          'trendings', (
            SELECT JSON_ARRAYAGG(
              JSON_OBJECT(
                'message', t.message
              )
            )
            FROM (
              SELECT * FROM trending ORDER BY create_dts DESC LIMIT 5
            ) AS t
          )
        ) AS result;`, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
      });
    });
  });

app.get('/api/trivia', (req, res) => {
      con.connect(function(err) {
      if (err) throw err;
      con.query(
        `SELECT
          JSON_PRETTY(
            JSON_OBJECT(
              'question', t.question,
              'explanation', t.explanation,
              'choices', JSON_ARRAYAGG(
                JSON_OBJECT(
                  'choice', c.choice,
                  'is_correct', c.is_correct
                )
              )
            )
          ) AS _result
        FROM (
          SELECT *
          FROM trivia
          ORDER BY create_dts DESC
          LIMIT 50
        ) AS t
        LEFT JOIN trivia_choice c ON t.id = c.trivia_id
        GROUP BY t.id, t.question, t.explanation;`, function (err, result, fields) {
        if (err) throw err;
        res.json(result);
      });
    });
  });
 
app.get('/api/news/:id', (req, res) => {
  const newsId = req.params.id;
  con.query(
    "SELECT * FROM news n WHERE n.id = ?",
    [newsId],
    function (err, result, fields) {
      if (err) {
        res.status(500).json({ error: 'Database error' });
        return;
      }
      res.json(result);
    }
  );
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));