import { prisma } from '../../../../database/prismaClient';
import { hash } from 'bcrypt'


interface CreateClient {
    username: string
    password: string
}

export class CreateClientUseCase {

    async execute({ username, password }: CreateClient){
        // validar se o usuário existe
        const clientExist = await prisma.clients.findFirst({
            where: {
                username: username
            },
        });


        if(clientExist){
            throw new Error("Client already exists");

        }

        const hashPassword = await hash(password, 10);

       await prisma.clients.create({
        data: {
            username,
            password: hashPassword
        }
       })
    }
}

