const Database = require("better-sqlite3");
const db = new Database("/tmp/grid.db");

db.exec(`CREATE TABLE IF NOT EXISTS grid (
  x INT,
  y INT,
  color TEXT
)`);

const rowCount = db.prepare(`SELECT COUNT(*) AS count FROM grid`).get().count;

const grid = [];
for (let x = 0; x <= 19; x++)
  for (let y = 0; y <= 19; y++) grid.push({ x: x, y: y, color: "white" });

const insertTransaction = db.transaction((row) => {
  for (const row of grid)
    db.prepare(`INSERT INTO grid (x, y, color) VALUES (?, ?, ?)`).run(
      row.x,
      row.y,
      row.color,
    );
});

if (rowCount === 0) {
  insertTransaction();
}

module.exports = db;
