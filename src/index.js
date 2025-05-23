import express from "express";
import dotenv from "dotenv";
import testRoutes from "./routes/testRoutes.js";
/// <reference types="node" />
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api", testRoutes);

app.get("/", (req, res) => {
	res.send("Support App Server is running 🚀");
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
