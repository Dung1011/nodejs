import express from "express";
import bodyParser from "body-parser";
import mysql from 'mysql2';  
import path from "path";
import { fileURLToPath } from "url";
import dotenv from 'dotenv';
dotenv.config();
let app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))



app.use(express.static('src/public'));
app.use('/uploads', express.static('src/public/uploads'));
// Tạo kết nối đến MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dung10',  
    database: 'dung10'
});


db.connect((err) => {
    if (err) {
        console.error('Kết nối MySQL thất bại:', err.message);
    } else {
        console.log(' Kết nối MySQL thành công!');
    }
});

// lấy dữ liệu bảng articles

  app.get("/api/categories", (req, res) => {
    db.query("SELECT * FROM categories", (err, results) => {
        if (err) {
            res.status(500).send("Lỗi truy vấn: " + err.message);
        } else {
            res.json(results);
        }
    });
});   

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,  "views", "homepage.html"));
});

app.get("/api/articles", (req, res) => {
  const query = `
      SELECT articles.*, categories.category_name 
      FROM articles
      JOIN categories ON articles.category_id = categories.category_id
      ORDER BY article_id DESC
      
  `;

  db.query(query, (err, results) => {
      if (err) {
          res.status(500).send("Lỗi truy vấn: " + err.message);
      } else {
          res.json(results);
      }
  });
});


  
  let port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Truy cập: http://localhost:${port}`);
    console.log(`API: http://localhost:${port}/api/articles`);
  });

  