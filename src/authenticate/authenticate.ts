import type {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

export function authenticate(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;

    if (!authorization) {
        res.status(401).send({error: "No authorization layer"});
        return;
    }
    const headers = authorization.split(' ');
    if (!(headers[0] === "Bearer")){
        res.status(401).send({error: "Not a Bearer"});
        return;
    }
    const token = headers[1]
    if (!token) {
        res.status(401).send({error: "No token provided"});
        return;
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET!)
        if (
            typeof payload === "string" ||
            typeof payload.userId !== "number"
        ) {
            return res.status(401).send({ error: "Invalid token payload" });
        }
        req.user = {userId:payload.userId};
        next();

    } catch {
        res.status(401).send({error: "Invalid token"});
    }
}