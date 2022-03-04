const express = require("express");
const cors = require("cors");
const app = express();
var db = require("./database.js");

app.use(cors());

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server Listening on port :", PORT);
});

// Root endpoint
app.get("/", (req, res, next) => {
  res.json({ message: "Root call success" });
});

app.get("/items", (req, res, next) => {
  // var sql = "select * from OrderTable";

  var sql = `SELECT restaurant, itemName,sum(quantity) as totalOrders, productPrice,totalProduct, orderDate
  FROM OrderTable 
  WHERE orderDate  BETWEEN DATE('now') AND DATE('now','1 day') 
  group by itemName
  order by orderDate, totalOrders DESC`;

  var params = [];
  var arr = [[]];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    for (var i = 0; i < rows.length; i++) {
      // console.log(rows);
      var temp = [];
      temp[0] = rows[i].restaurant;
      temp[1] = rows[i].itemName;
      temp[2] = rows[i].totalOrders;
      temp[3] = rows[i].productPrice;
      temp[4] = rows[i].totalProduct;
      temp[5] = rows[i].orderDate;
      temp[6] = false;
      temp[7] = false;
      arr[i] = temp;
    }
    res.send(arr);
  });
});

// Default response for any other request
app.use(function (req, res, next) {
  res.status(404);
  if (req.accepts("html")) {
    res.render("404", { url: req.url });
    return;
  }
});
