import express from "express";
const router = express.Router();

router.get("/ping", (req, res) => {
	res.json({ message: "pong 🏓" });
});

router.post("/echo", (req, res) => {
	res.json({ youSent: req.body });
});

export default router;
