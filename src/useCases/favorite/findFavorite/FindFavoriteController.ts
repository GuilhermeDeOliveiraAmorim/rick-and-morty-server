import { Request, Response } from "express";
import { FindFavoriteUseCase } from "./FindFavoriteUseCase";

interface IFavoriteRequest {
    favoriteId: string;
}
class FindFavoriteController {
    async handle(
        favoriteId: IFavoriteRequest,
        request: Request,
        response: Response
    ) {
        const favoriteUseCase = new FindFavoriteUseCase();

        const favorite = await favoriteUseCase.findFavoriteById({
            favoriteId: favoriteId.favoriteId,
        });

        return response.json(favorite);
    }
}

export { FindFavoriteController };
