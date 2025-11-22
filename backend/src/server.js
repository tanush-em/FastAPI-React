import express from "express";
import dotenv from "dotenv";

import router from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})