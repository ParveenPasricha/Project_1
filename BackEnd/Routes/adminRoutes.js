const express = require("express");
const { createAdmin, getAdmin, updateAdmin, deleteAdmin } = require("../Controller/adminController");
const router = express.Router();

router.post("/addpost", createAdmin);
router.get("/course", getAdmin);
router.put("/update/:id", updateAdmin);
router.delete("/delete/:id", deleteAdmin);


module.exports = router;