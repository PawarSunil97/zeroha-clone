if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const moment = require("moment");
const bodyParser = require("body-parser");
const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { OrderModel } = require("./model/OrderModel");
const  userRoutes =require("./routes/userRoutes")
const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Your React frontend
}));
app.use(bodyParser.json());
app.use(express.json()); // Parse JSON request body
app.use('/api/getotp', userRoutes); // Prefix all OTP routes
const PORT = process.env.PORT || 3001;
const db_url = process.env.MONGO_URL;


main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(db_url);
}

app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPosition", async (req, res) => {
  const allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.get("/orders", async (req, res) => {
  const allOrders = await OrderModel.find({});
  res.json(allOrders);
});
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // Save the new order
    const newOrder = new OrderModel({
      name,
      qty,
      price,
      mode,
      time: req.body.time || moment().format("HH:mm:ss"),
    });
    await newOrder.save();

    // Find existing holding
    let holding = await HoldingModel.findOne({ name });

    if (mode === "BUY") {
      if (holding) {
        // Update average price and quantity for existing holding
        const totalQty = holding.qty + qty;
        const totalCost = holding.avg * holding.qty + price * qty;
        holding.avg = totalCost / totalQty;
        holding.qty = totalQty;
        holding.price = price; // latest price
      } else {
        // Create new holding for the stock
        holding = new HoldingModel({
          name,
          qty,
          avg: price,
          price,
          net: "0%", // set default values or calculate later
          day: "0%",
        });
      }
      await holding.save();
    } else if (mode === "Sell") {
      if (holding) {
        holding.qty -= qty;
        holding.price = price; // latest price
        if (holding.qty <= 0) {
          // Remove holding if qty zero or less
          await HoldingModel.deleteOne({ name });
        } else {
          await holding.save();
        }
      } else {
        return res.status(400).send("No holdings found to sell");
      }
    }

    res.send("Order and holdings updated");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});
app.listen(PORT, () => {
  console.log("Server running on PORT", PORT);
});
