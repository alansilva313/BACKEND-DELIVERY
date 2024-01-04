import { prisma } from "../../../../database/prismaClient";


interface IUpdateEndDate {
    id_delivery: string,
    id_deliveryman: string
}

export class UpdateEndDateUseCase {


    async execute({id_delivery, id_deliveryman}: IUpdateEndDate){
       
        const result = await prisma.deliveries.updateMany({
            where: {
                id: id_delivery,
                deliverymanId: id_deliveryman,
                end_at: new Date()
            },
            data: {
                deliverymanId: id_deliveryman
            }
        })

        return result
    
}

}