import connection from '../models/connection';
import ProductsModel from '../models/product.model';
import Product from '../interfaces/product.interface';

export default class ProductService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAllProducts(): Promise<Product[]> {
    const Products = await this.model.getAllProducts();
    return Products;
  }

  public createProduct(product: Product): Promise<Product> {
    return this.model.createProduct(product);
  }
}
