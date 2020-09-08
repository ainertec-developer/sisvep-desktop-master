import { Router } from 'express';
// import { celebrate } from 'celebrate';
import { productController } from '../useCases/Product';
// import { IValidateUser } from './routesDTO';

export class ProductRoutes {
  constructor(private routes: Router) {}

  getRoutes() {
    // this.routes.get('/users', (request, response) => {
    //   return userController.index(request, response);
    // });
    // this.routes.get('/users/:name', (request, response) => {
    //   return userController.show(request, response);
    // });
    this.routes.post('/products', (request, response) => {
      return productController.store(request, response);
    });
    // this.routes.put('/users/:id', (request, response) => {
    //   return userController.update(request, response);
    // });

    // this.routes.delete('/users/:id', (request, response) => {
    //   return userController.remove(request, response);
    // });
  }
}