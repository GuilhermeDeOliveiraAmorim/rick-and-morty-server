import { Request, Response, Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateFavoriteController } from "./useCases/favorite/createFavorite/CreateFavoriteController";
import { FindFavoriteController } from "./useCases/favorite/findFavorite/FindFavoriteController";
import { AuthenticateUserController } from "./useCases/user/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./useCases/user/createUser/CreateUserController";
import { RefreshTokenUserController } from "./useCases/user/refreshTokenUser/RefreshTokenUserController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const refreshTokenUserController = new RefreshTokenUserController();
const createFavoriteController = new CreateFavoriteController();
const findFavoriteController = new FindFavoriteController();

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/refresh", refreshTokenUserController.handle);
router.post("/favorite", createFavoriteController.handle);

router.get("/favorite/:id", findFavoriteController.handle);

router.get("/teste", ensureAuthenticated, (request, response) => {
    return response.json([
        { id: 1, name: "A" },
        { id: 2, name: "B" },
        { id: 3, name: "C" },
    ]);
});

export { router };
