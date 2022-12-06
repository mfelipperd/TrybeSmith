import OrderP from '../interfaces/orderP.interface';
import Product from '../interfaces/product.interface';
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductsModel from '../models/product.model';
// referencia https://github.com/tryber/sd-015-a-project-trybesmith/pull/1
// consegui fazer apenas olhando o pull do Caio
export default class OrderService {
  private orderModel: OrderModel;

  private productMoldel: ProductsModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productMoldel = new ProductsModel(connection);
  } 

  public async getAllOrders(): Promise<OrderP []> {
    const orders = await this.orderModel.getAllOrders();
    
    const result = orders.map(async (i) => {
      if (i.id) {
        const arrayProducts: Product[] = await this.productMoldel.getProductById(i.id);
        const products = arrayProducts.map((product: Product) => product.id);
        return { ...i, products } as OrderP;
      }
      return { ...i, products: [] } as OrderP;
    });
    const ordersArray = await Promise.all(result);
    console.log(ordersArray);
    return ordersArray;
  }
}