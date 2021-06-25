import { ListUsersController } from './controllers/ListUsersController';
import { ListTagsController } from './controllers/ListTagController';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { Router } from "express";
import { ensureAuthenticated } from './middlewares/ensureAuthenticate';
import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/users", createUserController.handle);
router.get("/users",ensureAuthenticated,ensureAdmin,listUsersController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login",authenticateUserController.handle);
router.post("/compliment",
ensureAuthenticated,
createComplimentController.handle);
router.get("/users/compliments/send", ensureAuthenticated,listUserSendComplimentsController.handle);
router.get("/users/compliments/receive",ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.get("/tags",ensureAuthenticated, listTagsController.handle);

export {router}