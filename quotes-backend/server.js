import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));

app.get("/quote", async (req, res) => {
    try {
        const response = await fetch("https://zenquotes.io/api/random");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch quote" });
    }
});

// Ensure it works on Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
