import { Request, Response } from "express";
import { FindFavoriteUseCase } from "./FindFavoriteUseCase";

class FindFavoriteController {
    async handle(request: Request, response: Response) {
        const userId = request.query.userId;

        const favoriteUseCase = new FindFavoriteUseCase();

        const favorite = await favoriteUseCase.execute({
            userId: JSON.stringify(userId),
        });

        return response.json(favorite);
    }
}

export { FindFavoriteController };
