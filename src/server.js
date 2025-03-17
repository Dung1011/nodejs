import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRoutes from './route/web.js';
import mysql from 'mysql2';  
import dotenv from 'dotenv';
dotenv.config();
let app = express();

// Config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

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


app.get('/test-mysql', (req, res) => {
    db.query('SELECT * FROM articles', (err, results) => {
        if (err) {
            res.status(500).send('Lỗi truy vấn: ' + err.message);
        } else {
            console.log("Dữ liệu lấy từ DB:", results); // Kiểm tra dữ liệu
            res.render("homepage", { articles: results }); 
        }
    });
});

let port = process.env.PORT || 6969;
app.listen(port, () => {
    console.log(`Truy cập: http://localhost:${port}/test-mysql` );
});

