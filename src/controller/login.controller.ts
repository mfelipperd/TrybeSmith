import { Request, Response } from 'express';
import LoginService from '../service/login.service';
import tokenCreate from '../schemas/jwt.schemas';

export default class LoginController {
  constructor(private loginService = new LoginService()) { }

  public login = async (req: Request, res: Response) => {
    const MESSAGE = 'Username or password invalid';
    const login = req.body;
    const loginvalidate = await this.loginService.findUser(login);
    if (!loginvalidate) return res.status(401).json({ error: MESSAGE });
    const { id, username } = loginvalidate;
    
    const token = tokenCreate({ id, username });
    console.log(token);
    return res.status(200).json({ token });
  };
}