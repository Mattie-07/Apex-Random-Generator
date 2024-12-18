const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");

// const initializePassport = require("./passport-config");
// initializePassport(passport);
// const users = [];

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "Matthew" });
});
app.get("/login", (req, res) => {
  res.render("login.ejs", { name: "Matthew" });
});

app.post("/login", (req, res) => {});

app.get("/register", (req, res) => {
  res.render("register.ejs", { name: "Matthew" });
});

app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
  console.log(users);
});

app.listen(3001);
