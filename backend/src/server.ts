/* eslint-disable no-console */
import { app } from "./app";
import baseUrl from "./config/base-url";

app.set("port", process.env.PORT || 7000);
app.set("env", process.env.NODE_ENV || "development");

app.listen(app.get("port"), () => {
  console.log(`Learnch is running at ${baseUrl[app.get("env")]}`);
  console.log(`port: ${app.get("port")}`);
  console.log(`mode: ${app.get("env")} mode`);
});
