const db = require("./database");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
	console.log("Welcome in The Backend of Pixel Grid Full Stack Project");
});

app.get("/grid", (req, res) => {

	try {
		const grid = db.prepare(`SELECT * FROM grid`).all();
		res.status(200).json({
			grid: grid,
		});
	} catch (error) {
		res.status(500).json({
			error: "Error fetching grid data",
		});
	}
});

app.post("/setGridColor", (req, res) => {
	const { x, y, color } = req.body;
	if (!color) {
		return res.status(400).json({
			message: "Invalid color value",
		});
	}

	const row = db.prepare(`SELECT * FROM grid WHERE x = ? AND y = ?`).get(x, y);
	if (!row) {
		return res.status(400).json({
			message: "Invalid coordinates",
		});
	}

	const update = db
		.prepare(`UPDATE grid SET color = ? WHERE x = ? AND y = ?`)
		.run(color, x, y);
	const updatedGrid = db.prepare(`SELECT * FROM grid`).all();
	res.status(200).json({
		message: "Grid color updated",
		grid: updatedGrid,
	});
});