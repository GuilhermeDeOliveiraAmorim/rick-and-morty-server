import { client } from "../../../prisma/client";

interface IFavoriteRequest {
    favoriteId: string;
}

class FindFavoriteUseCase {
    async findFavoriteById({ favoriteId }: IFavoriteRequest) {
        const favorite = await client.rickAndMorty.findFirst({
            where: {
                id: favoriteId,
            },
        });

        return favorite;
    }
}

export { FindFavoriteUseCase };
