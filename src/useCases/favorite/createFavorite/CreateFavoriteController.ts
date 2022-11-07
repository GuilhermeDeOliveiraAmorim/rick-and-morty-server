import { Request, Response } from "express";
import { CreateFavoriteUseCase } from "./CreateFavoriteUseCase";

class CreateFavoriteController {
    async handle(request: Request, response: Response) {
        const {
            episode,
            gender,
            id_api,
            image,
            location,
            name,
            origin,
            species,
            status,
            type,
            userId,
        } = request.body;

        console.log(request.body);

        const favoriteUseCase = new CreateFavoriteUseCase();

        const favorite = await favoriteUseCase.execute({
            episode,
            gender,
            id_api,
            image,
            location,
            name,
            origin,
            species,
            status,
            type,
            userId,
        });

        return response.json(favorite);
    }
}

export { CreateFavoriteController };
