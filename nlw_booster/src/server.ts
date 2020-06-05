// "IMPORTS"
import "dotenv";

import express from "express";
import path from "path";
import cors from "cors";
import routes from "./routes";

const app = express();

// "MIDDLEWARES"
app.use(cors());
app.use(express.json());
app.use(routes);

// "UPLOADS STATICS"
app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

// "LISTENERS"
app.listen(process.env.PORT || 3333, () => console.log(`Server is running`));
