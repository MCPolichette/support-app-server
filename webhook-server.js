import express from "express";
import { exec } from "child_process";

const app = express();
app.use(express.json());

const PORT = 3001;

app.post("/github-webhook", (req, res) => {
	const payload = req.body;

	// Optional: Add basic validation
	if (payload.ref === "refs/heads/main") {
		console.log("🔁 Pulling latest code...");
		exec(
			"cd ~/projects/support-app-server && git pull && npm install && pm2 restart support-app",
			(err, stdout, stderr) => {
				if (err) {
					console.error("❌ Error:", err);
					return res.status(500).send("Pull failed");
				}
				console.log("✅ Pull + Restart complete");
				console.log(stdout);
				return res.status(200).send("Updated successfully");
			}
		);
	} else {
		res.status(200).send("Ignored – not main branch");
	}
});

app.listen(PORT, () => {
	console.log(`📡 Webhook server listening on port ${PORT}`);
});
