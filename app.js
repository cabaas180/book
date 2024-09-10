import express from "express";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware for serving static files
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Use the routes defined in 'posts.js'
app.use("/", postRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
