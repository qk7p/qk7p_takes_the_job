import express from "express";
import { Directus } from "@directus/sdk";

const SERVER_MAIL = "server@qk7p.ru";
const SERVER_PASS = "+Qsx8:%['w72Utm/H`g.<H.U)%?56ef5";

const PORT = 5000;
const directus = new Directus("http://127.0.0.1:8055");

function loginServer() {
  try {
    directus.auth.login({ email: SERVER_MAIL, password: SERVER_PASS });
    console.log("Server logined");
  } catch (e) {
    console.log(e);
  }
}

const app = express();
app.use(express.json());

try {
  app.listen(PORT, () => console.log("Server started at " + PORT));
  loginServer();
} catch (e) {
  console.log(e.message);
}

app.post("/items", async (res, req) => {
  console.log(req);
});
