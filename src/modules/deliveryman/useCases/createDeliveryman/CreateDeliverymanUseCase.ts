import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";
interface CreateDeliveryman {
    username: string
    password: string
}

export class CreateDeliverymanUseCase {

    async execute({ username, password }: CreateDeliveryman){
        // validar se o usuário existe
        const clientExist = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    equals: username,
                    
                }
            },
        });


        if(clientExist){
            throw new Error("Deliveryman already exists");

        }

        const hashPassword = await hash(password, 10);

       await prisma.deliveryman.create({
        data: {
            username,
            password: hashPassword
        }
       })
    }
}