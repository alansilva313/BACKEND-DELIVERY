import { Response, Request} from 'express'
import { FindAllWithoutEndDateUseCase } from './FindAllWithiutEndDateUseCase'




export class FindAllWithoutEndDateController {
    async handle(request: Request, response: Response){
           const findAllWithoutEndDateUseCase = new FindAllWithoutEndDateUseCase();

           const deliveries = await findAllWithoutEndDateUseCase.execute();


           return response.status(200).json({ message: 'success', success: true, data: deliveries})

    }
}