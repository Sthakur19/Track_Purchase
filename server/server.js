const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const PORT = 8000;
const isAuthenticated = require('./middeleware')
const jwt = require("jsonwebtoken")
const jwt_secret = "wsgrjdksueplkdqasndh"

// Create a connection
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "track_purchase",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.use(cors());

app.use(express.json());

app.post("/login",(req,res)=>{
  const {email,password} = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to database:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    // Perform MySQL query
    connection.query(`SELECT * FROM users WHERE email='${email}' and password='${password}'`, (queryError, results) => {
      // Release the connection back to the pool
      connection.release();

      if (queryError) {
        console.error("Error executing query:", queryError);
        res.status(500).json({ error: "Error executing query" });
        return;
      }

      if(results.length==0){
        return   res.json({ message: "User does not exist!" });
      }

      const token = jwt.sign({id:results[0].id,email:results[0].email},jwt_secret)

      // Send query results as JSON response
      res.json({ data: token });
    });
  });
})

app.get("/products", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to database:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    // Perform MySQL query
    connection.query("SELECT * FROM products", (queryError, results) => {
      // Release the connection back to the pool
      connection.release();

      if (queryError) {
        console.error("Error executing query:", queryError);
        res.status(500).json({ error: "Error executing query" });
        return;
      }

      // Send query results as JSON response
      res.json({ data: results });
    });
  });
});

app.post("/purchase",isAuthenticated, (req, res) => {
  const { product_id, user_id } = req.body;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to database:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    // Perform MySQL query
    connection.query(
      `INSERT INTO purchases(user_id,product_id,purchase_date) values(${req.user_id},${product_id},${getTimeStamp()})`,
      (queryError, results) => {
        // Release the connection back to the pool
        connection.release();

        if (queryError) {
          console.error("Error executing query:", queryError);
          res.status(500).json({ error: "Error executing query" });
          return;
        }

        // Send query results as JSON response
        res.json({ data: results });
      }
    );
  });
});

app.get("/purchase/:user_id",isAuthenticated, (req, res) => {
  const { user_id } = req.params;
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to database:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    // Perform MySQL query
    connection.query(
      `SELECT b.name,b.description,b.unitPrice,DATE_FORMAT(purchase_date, '%d-%m-%y %H:%m:%s') as purchase_date FROM purchases as a LEFT JOIN products as b ON a.product_id=b.id WHERE a.user_id=${req.user_id}`,
      (queryError, results) => {
        // Release the connection back to the pool
        connection.release();

        if (queryError) {
          console.error("Error executing query:", queryError);
          res.status(500).json({ error: "Error executing query" });
          return;
        }

        // Send query results as JSON response
        res.json({ data: results });
      }
    );
  });
});
function getTimeStamp() {
  const currentDate = new Date();

  // Get year, month, and day components
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 to month because it's zero-based
  const day = String(currentDate.getDate()).padStart(2, "0");

  // Get hours, minutes, and seconds components
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");

  // Construct the formatted date string
  const formattedDate = `'${year}-${month}-${day} ${hours}:${minutes}:${seconds}'`;
  return formattedDate;
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
