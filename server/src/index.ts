import express from "express";
import type { Application, Request, Response } from "express";

import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

const app: Application = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setting View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

app.get('/', (req: Request, res: Response) => {
    res.render("welcome");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});