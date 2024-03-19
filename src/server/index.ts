import express from "express";
import { api } from "./api";
import helmet from "helmet";
import compression from "compression";
import path from "path";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(helmet());
app.use(compression());
app.use(api);

app.use(express.static(path.join(__dirname, "../")));
app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "../", "index.html"));
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
