import { client } from "../../../prisma/client";

interface IFavoriteRequest {
    episode: number;
    gender: string;
    id_api: number;
    image: string;
    location: string;
    name: string;
    origin: string;
    species: string;
    status: string;
    type: string;
    rating: number;
    userId: string;
}

class CreateFavoriteUseCase {
    async execute({
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
        rating,
        userId,
    }: IFavoriteRequest) {
        const alreadyFavoriteThisOne = await client.rickAndMorty.findFirst({
            where: {
                userId: userId,
            },
        });

        if (!alreadyFavoriteThisOne) {
            const favoriteRating = await client.rickAndMorty.findFirst({
                where: {
                    id_api: id_api,
                },
            });

            if (favoriteRating) {
                rating = favoriteRating.rating + rating;
            }

            await client.rickAndMorty.updateMany({
                data: {
                    rating: rating,
                },
                where: {
                    id_api: id_api,
                },
            });
        }

        const favorite = await client.rickAndMorty.create({
            data: {
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
                rating,
                userId,
            },
        });

        return favorite;
    }
}

export { CreateFavoriteUseCase };
