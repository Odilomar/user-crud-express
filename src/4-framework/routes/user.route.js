const app = require("express");
const router = app.Router();

router.get("/", (req, res) => {
  res.send("GET ALL not implemented!");
});
router.get("/:id", (req, res) => {
  res.send("GET ONE not implemented!");
});
router.post("/", (req, res) => {
  res.send("CREATE not implemented!");
});
router.put("/:id", (req, res) => {
  res.send("UPDATE ONE not implemented!");
});
router.delete("/:id", (req, res) => {
  res.send("DELETE ONE not implemented!");
});

module.exports = router;
