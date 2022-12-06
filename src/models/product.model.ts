import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import Product from '../interfaces/product.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = products;
    return rows as Product[];
  }

  public async getProductById(id: number): Promise<Product[]> {
    const [product] = await this.connection
      .execute<RowDataPacket []>('SELECT id FROM Trybesmith.Products WHERE orderId = ?', [id]);
    return product as Product[];
  }

  public async createProduct(product: Product):Promise<Product> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)', 
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, name, amount };
  }
}
