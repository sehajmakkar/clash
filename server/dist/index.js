import express from "express";
import "dotenv/config";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import { sendEmail } from "./config/mail.js";
// Queues
import "./jobs/index.js";
import { emailQueue, emailQueueName } from "./jobs/EmailJob.js";
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Setting View Engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.get('/', async (req, res) => {
    const html = await ejs.renderFile(__dirname + `/views/emails/welcome.ejs`, { name: "Sehaj" });
    // await sendEmail("codewithsehaj@gmail.com", "Testing", html);
    await emailQueue.add(emailQueueName, {
        to: "codewithsehaj@gmail.com",
        subject: "Testing",
        body: html,
    });
    return res.json({ message: "Email Sent" });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
