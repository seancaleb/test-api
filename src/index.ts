import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("<h1>Test API</h1>");
});

app.get("/api/test", (req, res) => {
  return res.json({ message: "Test API" });
});

app.listen(3000, () => {
  console.log(`Application is listening at PORT: 3000`);
  console.log("Test API");
});
