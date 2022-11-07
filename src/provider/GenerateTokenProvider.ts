import { sign } from "jsonwebtoken";

class GenerateTokenProvider {
    async execute(userId: string) {
        const token = sign(
            {},
            "2a08b7mXMHw@cbvHMOGzduRYj@l0C3da5E4wOF9yDY74Y4Y8xKcE7FBy",
            {
                subject: userId,
                expiresIn: "20s",
            }
        );

        return token;
    }
}

export { GenerateTokenProvider };
