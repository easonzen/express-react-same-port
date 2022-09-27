const { Router } = require("express");
const userRouter = require("./user");
const companyRouter = require("./company");

const router = Router();

router.use("/user", userRouter);
router.use("/company", companyRouter);

module.exports = router;
