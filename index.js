import express from "express";
import cors from "cors";

import { addNewAnimals, getAllAnimals } from "./src/animals.js";

const PORT = 3002;

const app = express();
app.use(cors());
app.use(express.json()); // This tells express that our POST will be JSON

app.get("/animals", getAllAnimals);
app.post("/animals", addNewAnimals);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}...`);
});
