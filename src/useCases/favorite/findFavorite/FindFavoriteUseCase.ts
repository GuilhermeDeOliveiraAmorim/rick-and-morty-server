import { client } from "../../../prisma/client";

interface IFavoriteRequest {
    userId: string;
}

class FindFavoriteUseCase {
    async execute({ userId }: IFavoriteRequest) {
        const favorites = await client.rickAndMorty.findMany({
            where: {
                id: userId,
            },
        });

        return favorites;
    }
}

export { FindFavoriteUseCase };
