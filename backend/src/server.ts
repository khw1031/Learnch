import { app } from "./app";

app.set("port", process.env.PORT || 7000);
app.set("env", process.env.NODE_ENV || "development");

app.get("/", (req, res) => {
  res.json({
    hello: "world",
  });
});

app.post("/api/ping", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(app.get("port"), () => {
  console.log(`running at http://localhost:${app.get("port")}`);
});
