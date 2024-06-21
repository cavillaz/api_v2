import { Router } from "express";
import { createUser, createUserFK, deleteUser, showUser, showUserId, updateUser } from "../controllers/user.controller.js";

const router =Router();
router.post('/user',createUser);
router.post('/userFK',createUserFK);
router.get('/user',showUser);
router.get('/user/:id',showUserId);
router.put('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);


export default router;