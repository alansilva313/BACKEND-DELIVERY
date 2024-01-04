
import { Request, Response} from 'express'
import { FindAllDeliveriesDeliverymanUseCase } from './FindAllDeliveriesUseCase'



export class FindAllDeliveriesDeliverymanController {
    async handle(request: Request, response: Response){

        const { id_deliveryman } = request;
         const findAllDeliveriesDeliveryman = new FindAllDeliveriesDeliverymanUseCase();

         const deliveries = await findAllDeliveriesDeliveryman.execute(id_deliveryman);

     
         return response.json(deliveries)
    }
}