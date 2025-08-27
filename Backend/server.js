import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inggest/index.js"

const app = express();
const PORT = process.env.PORT;

await connectDB();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())


app.get("/", (req, res) => res.send("Api is Working "));
app.use("/api/inngest", serve({ client: inngest, functions }));

app.listen(PORT, () => console.log(`Server Is Running On Port ${PORT}`));
