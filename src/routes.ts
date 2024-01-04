import { Router, request, response } from 'express'
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateDeliverymanController } from '../src/modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCase/createDelivery/CreateDeliveryController';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { FindAllWithoutEndDateController } from './modules/deliveries/useCase/findAllWithoutEndDate/FindAllWithoutEndDateController';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { UpdateDeliverymanController } from './modules/deliveries/updateDeliveryman/useCases/UpdateDeliverymanController';
import { FindAllDeveriesController } from './modules/clients/deliveries/FindAllDeliveryesController';
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesController';
import { UpdateEndDateController } from './modules/deliveries/useCase/updateEndDate/UpdateEndDateController';
const routes = Router();






routes.get("/readdeliveries/", ensureAuthenticateDeliveryman, (request, response) => {
     new FindAllWithoutEndDateController().handle(request, response);
})

routes.post("/authdeliveryman/", (request, response) => {
    new AuthenticateDeliverymanController().handle(request, response)
})

routes.post("/authenticate/", (request, response) => {
    new AuthenticateClientController().handle(request, response);
})

routes.post("/deliveryman/", (request, response) => {
    new CreateDeliverymanController().handle(request, response);
})

routes.post("/client/", (request, response) => {
    new CreateClientController().handle(request, response);
})

routes.post("/delivery/", ensureAuthenticateClient, (request, response) => {
 new CreateDeliveryController().handle(request, response);
})


routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, (request, response) => {
    new UpdateDeliverymanController().handle(request, response);
});



routes.get("/client/deliveries/", ensureAuthenticateClient, (request, response) => {
    new FindAllDeveriesController().handle(request, response);
})

routes.get("/delivery/deliveryman/", ensureAuthenticateDeliveryman, (request, response) => {
    new FindAllDeliveriesDeliverymanController().handle(request, response);
})

routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, (request, response) => {
    new UpdateEndDateController().handle(request, response);
})




export {routes}