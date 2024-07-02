const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Use json
app.use(express.json());

// Set up a route to serve the index.html file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// -----
const data = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
];

// Get
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = data.find((u) => u.id === id);
    console.log(user);
    res.json(user);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
