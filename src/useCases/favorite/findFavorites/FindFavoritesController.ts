import { Request, Response } from "express";
import { FindFavoritesUseCase } from "./FindFavoritesUseCase";

class FindFavoritesController {
    async handle(request: Request, response: Response) {
        const userId = request.params.id;

        console.log(request);

        const favoritesUseCase = new FindFavoritesUseCase();

        const favorite = await favoritesUseCase.execute({
            userId,
        });

        return response.json(favorite);
    }
}

export { FindFavoritesController };
