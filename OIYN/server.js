const express = require("express");
const app = express();
const port = 2000;


app.use(express.static("public"))
app.use("/", require("./routes/index"));
app.use("/games", require("./routes/games"));
app.use("/login", require("./routes/login"));
app.use("/register", require("./routes/register"));
app.use("/index", require("./routes/index"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);