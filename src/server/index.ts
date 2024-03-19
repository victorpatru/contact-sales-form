import express from "express";
import { api } from "./api";

const PORT = process.env.PORT || 3005;
const app = express();

app.use(api);

app.use(express.static(process.cwd() + "/dist"));
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
