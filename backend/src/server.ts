import { app } from "./app";

app.set("port", process.env.PORT || 7000);
app.set("env", process.env.NODE_ENV || "development");

app.listen(app.get("port"), () => {
  /* eslint-disable-next-line no-console */
  console.log(`running at http://localhost:${app.get("port")}`);
});
