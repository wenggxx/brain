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
      con.query("SELECT * FROM news LIMIT 10", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
      });
    });
  });

app.get('/api/trivia', (req, res) => {
      con.connect(function(err) {
      if (err) throw err;
      con.query(
        `WITH cte AS (SELECT id
             FROM trivia
             ORDER BY RAND()
             LIMIT 1)
        SELECT
          JSON_PRETTY(
            JSON_OBJECT(
                  'question', question,
                  'explanation', explanation,
                  'choices', choices
                )
          ) AS _result
        FROM (SELECT t.question,
                    t.explanation,
                    JSON_ARRAYAGG(
                            JSON_OBJECT(
                                    'choice', c.choice,
                                    'is_correct', c.is_correct
                            )
                    ) AS choices
              FROM trivia t
                      JOIN cte ON (t.id = cte.id)
                      LEFT JOIN trivia_choice c ON t.id = c.trivia_id
              GROUP BY t.id, t.question, t.explanation) AS p`, function (err, result, fields) {
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