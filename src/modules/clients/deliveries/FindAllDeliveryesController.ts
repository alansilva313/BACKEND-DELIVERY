import { FindAllDeliveriesUseCase } from './FindAllDeliveryesUseCase';

import {Request, Response} from 'express'

export class FindAllDeveriesController {
    async handle(request: Request, response: Response){
        const { id_client } = request;

        const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();

        const deliveries = await findAllDeliveriesUseCase.execute(id_client);

   console.log(deliveries)
        return response.json(deliveries);

    }
}