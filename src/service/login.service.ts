import connection from '../models/connection';
import LoginModel from '../models/login.model';
import Login from '../interfaces/login.interface';
import User from '../interfaces/user.interface';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async findUser(login: Login): Promise< User | undefined> {
    const user = await this.model.findUser(login);
    return user;
  }    
}