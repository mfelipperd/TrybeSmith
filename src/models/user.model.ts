import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAllUsers(): Promise<User[]> {
    const users = await this.connection
      .execute('SELECT * FROM Trybesmith.Users');
    const [rows] = users;
    return rows as User[];
  }

  public async createUser(user: Omit<User, 'id'>):
  Promise<Omit<User, 'id'>> {
    const { username, classe, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)', 
      [username, classe, level, password],
    );
    return { username, classe, level, password };
  }
}