import express from "express";
import cors from "cors";
import router from "./routes/marineroute.route.js";

const PORT = 8010;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
