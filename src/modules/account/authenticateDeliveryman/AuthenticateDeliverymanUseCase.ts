import { prisma } from "../../../database/prismaClient"
import { compare } from 'bcrypt'
import { sign } from "jsonwebtoken"


interface IAuthenticateDeliveryman {
    username: string
    password: string
     
}

export class AuthenticateDeliverymanUseCase {
    async execute({username, password }: IAuthenticateDeliveryman){

        // Receber username, password

        // Verificar se username cadastrado
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        })

 

        if(!deliveryman){
            
            throw new Error("Username or password invalid!")
            
        }

     

        // Verificar se senha corresponde ao username
         const passwordMath = await compare(password, deliveryman.password);

   
         if(!passwordMath){
            throw new Error("Username or password invalid!")
         }


        // Gerar o token
        const SECRET: any = process.env.SECRET2;
  

        const token = sign({username}, SECRET, {
            subject: deliveryman.id,
            expiresIn: "1d"
        } );

        return token

      

    }
}