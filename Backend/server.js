import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inggest/index.js";
import showRouter from "./Routes/showRoutes.js";
import bookingRouter from "./Routes/bookingRoute.js";
import adminRouter from "./Routes/adminRoute.js";
import userRouter from "./Routes/userRoute.js";
import { stripeWebhook } from "./controller/stripeWebhooks.js";
import bodyParser from "body-parser";

const app = express();

const PORT = process.env.PORT;

await connectDB();

// This must be before any bodyParser.json() middleware!
app.use(
  "/api/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhook
);

// app.use(
//   "/api/stripe",
//   express.raw({ type: "application/json" }),
//   stripeWebhook
// );

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());
app.use(bodyParser.json());



app.get("/", (req, res) => res.send("Api is Working "));
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/show", showRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/admin", adminRouter);
app.use("/api/user", userRouter);

app.listen(PORT, () =>
  console.log(`Server Is Running On Port http://localhost:${PORT}/`)
);
