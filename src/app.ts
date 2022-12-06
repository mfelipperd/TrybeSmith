import express from 'express';
import ProductController from './controller/productController';
import { amountValidation, nameValidation } from './schemas/product.schemas';
import { levelValidation, 
  usernameValidation, classeValidation, passwordValidation } from './schemas/user.schemas';
import UserController from './controller/user.controller';
import OrderController from './controller/order.controller';
import loginSchemas from './schemas/login.schemas';
import LoginController from './controller/login.controller';

const app = express();
const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderController();
const loginController = new LoginController();

app.use(express.json());

app.get('/products', productController.getAllProdutcts);
app.post('/products', nameValidation, amountValidation, productController.createProduct);
app.get('/orders', orderController.getAllOrders);
app.post(
  '/users', 
  usernameValidation, 
  classeValidation, 
  levelValidation, 
  passwordValidation,

  userController.createUsers,
);

app.post('/login', loginSchemas.loginValidation, loginController.login);
export default app;
