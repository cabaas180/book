import express from "express";
const router = express.Router();

let posts = []; // Temporary storage for posts

// Route for displaying all posts
router.get("/", (req, res) => {
  res.render("posts.ejs", { posts });
});

// Route for rendering the add post form
router.get("/add-post", (req, res) => {
  res.render("add-post.ejs");
});

// Route for handling post submission
router.post("/submit", (req, res) => {
  const { title, content } = req.body;
  const post = { title, content };
  posts.push(post);
  res.redirect("/");
});

// Route to load the edit form
router.get("/edit/:id", (req, res) => {
  const postId = req.params.id;
  const post = posts[postId];
  res.render("edit.ejs", { post, postId });
});

// Route to handle the form submission for editing
router.post("/edit/:id", (req, res) => {
  const postId = req.params.id;
  posts[postId] = { title: req.body.title, content: req.body.content };
  res.redirect("/");
});

// Route to delete a post
router.post("/delete/:id", (req, res) => {
  const postId = req.params.id;
  posts.splice(postId, 1);
  res.redirect("/");
});

export default router;
