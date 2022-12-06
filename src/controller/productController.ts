import { Request, Response } from 'express';
import ProductService from '../service/productService';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAllProdutcts = async (_req: Request, res: Response) => {
    const products = await this.productService.getAllProducts();
    res.status(200).json(products);
  };

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;
    console.log(product);
    const createProduct = await this.productService.createProduct(product);
    res.status(201).json({ item: createProduct });
  };
}
