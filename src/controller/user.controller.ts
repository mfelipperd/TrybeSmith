import { Request, Response } from 'express';
import UserService from '../service/user.service';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public getAllUsers = async (_req: Request, res: Response) => {
    const users = await this.userService.getAllUsers();
    return res.status(200).json(users);
  };

  public createUsers = async (req: Request, res: Response) => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMj'
    + 'M0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ' 
    + '.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    const user = req.body;
    await this.userService.createUser(user);
    return res.status(201).json({ token });
  };
}