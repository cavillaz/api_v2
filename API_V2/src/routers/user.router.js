import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import UserScheme from "../schemes/user.schema.js";
import userMiddleware from "../middlewares/user.middlewares.js";

const router=Router();

router.post('/user',userMiddleware(UserScheme.createUser), UserController.createUser);
router.get('/user', UserController.showUser);
router.get('/user',UserController.showUserId);
router.put('/user',userMiddleware(UserScheme.createUser),UserController.updateUser);
router.delete('/user',UserController.deleteUser);
router.post('/user/login',UserController.loginUser);

export default router;