import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import productRoutes from "./routes/productRoutes";
import pool from "./config/database";
import userRoutes from "./routes/userRoutes";
import orderRoutes from "./routes/orderRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import morgan from "morgan";

const app = express();

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
app.use(express.json());

const port = process.env.PORT || 3001;


const api = process.env.API_URL;

(async () => {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Database connected:", result.rows[0]);
  } catch (err) {
    console.error("Error connecting to the database", err);
  }
})();

app.use("/products", productRoutes);
app.use(`${api}/users`, userRoutes);
app.use(`${api}/orders`, orderRoutes);
app.use(`${api}/orders`, orderRoutes);
app.use(`${api}/category`, categoryRoutes);

app.listen(port, () => {
  console.log(`starting app on: ${port}`);
});
export default app;
