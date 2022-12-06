import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from '../interfaces/order.interface';

const QUERY = 'SELECT * FROM Trybesmith.Orders';
export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllOrders():Promise<Order[]> {
    const [orders] = await this.connection
      .execute<RowDataPacket[]>(QUERY);
    return orders as Order[];
  }
}