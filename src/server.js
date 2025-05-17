import express from "express";
import cors from "cors";
import router from "./routes/marineroute.route.js";

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
