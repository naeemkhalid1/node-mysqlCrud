const router = require("express").Router();

const { userController } = require("../controllers");
const { queueController } = require("../controllers");

router.post("/detail", userController.createDetail);
router.get("/detail", userController.getUserDetail);
router.get("/detail/:id", userController.getDetail);
router.delete("/detail/:id", userController.deleteDetail);
router.put("/detail/:id", userController.updateDetail);

router.post("/queue", queueController.createQueueDetail);
router.get("/queue/:id", queueController.getQueueDetail);
router.delete("/queue/:id", queueController.deleteQueueDetail);
router.put("/queue/:id", queueController.updateQueueDetail);

module.exports = router;
