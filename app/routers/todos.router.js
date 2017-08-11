const { Router } = require("express");

const attachTo = (app, data) => {
    const router = new Router;

    router
        .get("/", (req, res) => {
            return data.todos.getAll()
                .then((todos) => {
                    return res.render("todos/all", {
                        context: todos,
                    });
                });
        })
        .get("/form", (req, res) => {
            return res.render("todos/form", {
                context: {
                    categories: ["work", "domestic"]
                }
            });
        })
        .post("/", (req, res) => {
            const item = req.body;

            // validate items
            return data.todos.create(item)
                .then((dbItem) => {
                    return res.redirect("/todos");
                })
                .catch((err) => {
                    // connect-flash
                    req.flash("error", err);
                    res.redirect("/todos/form");
                });
        });

    app.use("/todos", router);
};

module.exports = { attachTo };