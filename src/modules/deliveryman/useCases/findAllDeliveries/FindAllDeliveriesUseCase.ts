import { prisma } from "../../../../database/prismaClient";




export class FindAllDeliveriesDeliverymanUseCase {
    async execute(id_deliveryman: string){
        const deliveries = await prisma.deliveryman.findMany({
            where: {
                id: id_deliveryman
            },

            include: {
                deliveries: true
            }
        })

        console.log(deliveries)
        return deliveries;
    }
}