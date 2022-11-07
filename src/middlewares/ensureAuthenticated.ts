import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).json({
            message: "Token is missing or invalid",
        });
    }

    const [, token] = authToken.split(" ");

    try {
        verify(
            token,
            "2a08b7mXMHw@cbvHMOGzduRYj@l0C3da5E4wOF9yDY74Y4Y8xKcE7FBy"
        );

        return next();
    } catch (error) {
        return response.status(401).json({
            message: "Token is invalid",
        });
    }
}
