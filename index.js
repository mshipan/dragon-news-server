const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.port || 6020;

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon News Api");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // 0 for All news
  if (id === 0) {
    res.send(news);
  } else {
    const selectedCategories = news.filter(
      (n) => parseInt(n.category_id) === id
    );
    res.send(selectedCategories);
  }
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log(`Dragon News Server is listening on port ${port}`);
});
