import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAllUsers(): Promise<User[]> {
    const Users = await this.model.getAllUsers();
    return Users;
  }

  public createUser(user: Omit<User, 'id'>): Promise<Omit<User, 'id'>> {
    return this.model.createUser(user);
  }
}