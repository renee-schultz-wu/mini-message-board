const express = require("express");
const path = require("node:path");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const { getALLMessages, addNewMessage, viewById } = require("./controllers/control")

  
app.get("/", getALLMessages);


app.get("/new", (req, res) => {
    res.render("form", {});
})

app.post("/new", addNewMessage)



app.get("/view", viewById)


const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));