const { Router } = require("express")

const newRouter = new Router;

newRouter.get("/", (req, res) => {
    res.render("form", {})
})

newRouter.post("/", (req, res) => {
    console.log(req.body.message)
    messages.push({ text: req.body.message, user: req.body.username, added: new Date() });

})



module.exports = newRouter;