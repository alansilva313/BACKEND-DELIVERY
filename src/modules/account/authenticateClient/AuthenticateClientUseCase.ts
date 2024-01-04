import { prisma } from "../../../database/prismaClient"
import { compare } from 'bcrypt'
import { sign } from "jsonwebtoken"


interface IAuthenticateClient {
    username: string
    password: string
     
}

export class AuthenticateClientUseCase {
    async execute({username, password }: IAuthenticateClient){

        // Receber username, password

        // Verificar se username cadastrado
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })

 

        if(!client){
            
            throw new Error("Username or password invalid!")
            
        }

     

        // Verificar se senha corresponde ao username
         const passwordMath = await compare(password, client.password);

   
         if(!passwordMath){
            throw new Error("Username or password invalid!")
         }


        // Gerar o token
        const SECRET: any = process.env.SECRET;
  

        const token = sign({username}, SECRET, {
            subject: client.id,
            expiresIn: "1d"
        } );

        return token

      

    }
}