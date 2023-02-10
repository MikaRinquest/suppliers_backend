const express = require("express");
const router = express.Router();
const con = require("../database/connection");

// Get all suppliers
router.get("/", (req, res) => {
  try {
    let sql = "SELECT * FROM Suppliers";
    con.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Get one supplier
router.get("/:id", (req, res) => {
  try {
    let sql = `SELECT * FROM Suppliers WHERE supplierID = ${req.params.id}`;
    con.query(sql, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

// Add a supplier
router.post("/", (req, res) => {
  try {
    let sql = "INSERT INTO Suppliers SET ?";
    let {
      supplierName,
      supplierType,
      supplierLocation,
      supplierNumber,
      contactName,
      contactNumber,
      contactEmail,
    } = req.body;

    let supplier = {
      supplierName,
      supplierType,
      supplierLocation,
      supplierNumber,
      contactName,
      contactNumber,
      contactEmail,
    };
    con.query(sql, supplier, (err, result) => {
      if (err) throw err;
      res.json(`Supplier ${supplierName} has been added `);
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

module.exports = router;
