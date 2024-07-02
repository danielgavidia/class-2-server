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
const USERS = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
];

// Get
app.get("/api/users/:id", (req, res) => {
    const user = USERS.find((u) => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send("User not found!");
    res.status(200).json(user);
});

// Post
app.post("/api/users", (req, res) => {
    if (!req.body.name || !req.body.email)
        return res.status(404).send("Missing required fields!");
    const user = {
        id: USERS.length + 1,
        name: req.body.name,
        email: req.body.email,
    };
    USERS.push(user);
    res.status(200).json(user);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
