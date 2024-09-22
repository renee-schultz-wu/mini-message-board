const express = require("express");
const path = require("node:path");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
app.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard" , messages: messages });
});


app.get("/new", (req, res) => {
    res.render("form", {})
})

app.post("/new", (req, res) => {
    messages.push({ text: req.body.message, user: req.body.username, added: new Date() });
    res.redirect("/")
})




const PORT = 3000;
app.listen(PORT, () => console.log(`My first Express app - listening on port ${PORT}!`));