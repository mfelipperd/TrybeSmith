import { Pool, RowDataPacket } from 'mysql2/promise';
import Login from '../interfaces/login.interface';
import User from '../interfaces/user.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async findUser(login: Login): Promise<User | undefined> {
    const { username, password } = login; 
    const [[user]] = await this.connection
      .execute<RowDataPacket []>(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
    );
    return user as User | undefined;
  }
}