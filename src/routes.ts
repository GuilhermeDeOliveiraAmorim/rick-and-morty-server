import { Request, Response, Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateFavoriteController } from "./useCases/favorite/createFavorite/CreateFavoriteController";
import { FindFavoritesController } from "./useCases/favorite/findFavorites/FindFavoritesController";
import { AuthenticateUserController } from "./useCases/user/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./useCases/user/createUser/CreateUserController";
import { RefreshTokenUserController } from "./useCases/user/refreshTokenUser/RefreshTokenUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();
const createFavoriteController = new CreateFavoriteController();
const findFavoritesController = new FindFavoritesController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh", refreshTokenUserController.handle);
router.post("/add/favorite", createFavoriteController.handle);

router.get("/get/favorites/:id", findFavoritesController.handle);

router.get("/teste", ensureAuthenticated, (request, response) => {
    return response.json("OPA!");
});

export { router };
