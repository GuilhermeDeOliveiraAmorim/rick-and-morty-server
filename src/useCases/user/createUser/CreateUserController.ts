import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const userUseCase = new CreateUserUseCase();

        const user = await userUseCase.execute({
            username,
            password,
        });

        return response.json(user);
    }
}

export { CreateUserController };
