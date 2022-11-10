import { client } from "../../../prisma/client";

interface IFavoriteRequest {
    userId: string;
}

class FindFavoritesUseCase {
    async execute({ userId }: IFavoriteRequest) {
        const favorites = await client.rickAndMorty.findMany({
            where: {
                userId: userId,
            },
        });

        return favorites;
    }
}

export { FindFavoritesUseCase };
