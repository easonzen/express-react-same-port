const { Router } = require("express");

const router = Router();

router.get("/all", (req, res) => {
  res.status(200).json([{ id: "1", name: "Eason", age: 18 }]);
});

router.get("/:id", (req, res) => {
  if (req.params.id === "1") {
    res.status(200).json({ id: "1", name: "Eason", age: 18 });
  } else {
    res.status(200).send("Not Found");
  }
});

module.exports = router;
