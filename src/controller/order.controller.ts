import { Request, Response } from 'express';

import OrderService from '../service/order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }
  // altera controller como arrow function, para que o app entendda que  está no constructor pertence a essa função, caso contrario o App, nao reconhece a função
  // explicado pelo Caio Lima T5A
  
  public getAllOrders = async (_req: Request, res: Response): Promise<Response> => {
    const orders = await this.orderService.getAllOrders();
    return res.status(200).json(orders);
  };
}