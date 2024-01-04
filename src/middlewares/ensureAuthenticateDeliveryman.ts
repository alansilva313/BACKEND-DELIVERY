import { Request, Response,NextFunction, response } from "express";
import { verify } from "jsonwebtoken"


interface IPayload {
    sub: string
}

export async function ensureAuthenticateDeliveryman(request: Request, repsonse: Response,
    next: NextFunction){
        const authHeader = request.headers.authorization;
        
        if(!authHeader){
            return response.status(401).json({
                message: "Token missing!",
            })
        }

        // Bearer 956556526288262921
    
        const SECRET: any = process.env.SECRET2
        const [, token] = authHeader.split(" ")
        
        
        try{
           const { sub } =  verify(token, SECRET) as IPayload;

           request.id_deliveryman = sub

           return next();

        }catch(err){
            return repsonse.status(401).json({
                message: "Invalid Token!",
            })
        }


    }