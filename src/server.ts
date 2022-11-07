import "express-async-errors";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

import { router } from "./routes";

const app = express();

const corsOptions = {
    origin: ["http://localhost:3001"],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use(router);

app.use(
    (
        error: Error,
        request: Request,
        response: Response,
        next: NextFunction
    ) => {
        return response.json({
            status: "Error",
            message: error.message,
        });
    }
);

app.listen(3000, () => console.log("Server listening on port 3000"));
