const app = require("express");
const router = app.Router();

const UserControllers = require('../../3-controller/user')

router.get("/", async (req, res) => {
  try {
    const users = await UserControllers.getAllUsersController()
    res.json(users)
  } catch (error) {
    res.json(error)
  }
});
router.get("/:id", async (req, res) => {
  try {
    const users = await UserControllers.getOneUserController({ ...req.params })
    res.json(users)
  } catch (error) {
    res.json(error)
  }
});
router.post("/", async (req, res) => {
  try {
    const users = await UserControllers.getAllUsersController({ ...req.body })
    res.json(users)
  } catch (error) {
    res.json(error)
  }
});
router.put("/:id", async (req, res) => {
  try {
    const users = await UserControllers.getAllUsersController({ ...req.params, ...req.body })
    res.json(users)
  } catch (error) {
    res.json(error)
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const users = await UserControllers.getAllUsersController({ ...req.params })
    res.json(users)
  } catch (error) {
    res.json(error)
  }
});

module.exports = router;
