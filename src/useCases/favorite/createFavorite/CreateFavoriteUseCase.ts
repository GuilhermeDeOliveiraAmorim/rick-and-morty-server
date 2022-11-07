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
        userId,
    }: IFavoriteRequest) {
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
                userId,
            },
        });

        return favorite;
    }
}

export { CreateFavoriteUseCase };
