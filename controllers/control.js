const db = require("../db/queries");

async function getALLMessages(req, res) {
    const data = await db.getALLMessages();
    res.render("index", {messages: data})
    // res.send(data)
}

async function addNewMessage(req, res) {
    await db.addNewMessage(req.body.message, req.body.username);
    res.redirect("/");
}

async function viewById(req, res) {
    const id = Object.keys(req.query)[0];
    const msg = await db.viewById(id);
    res.render("message",  {message:msg[0]})
}

module.exports = { getALLMessages, addNewMessage, viewById }