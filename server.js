const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    console.log("Hello");
    const filePath = __dirname + "/index.html";
    console.log(filePath);
    res.sendFile(filePath);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(
        `Express server running on port ${PORT}, http://localhost:${PORT}`
    );
});
