import jwt, { SignOptions } from 'jsonwebtoken';

const secret = 'seusecretdetoken';

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

interface SignData {
  id: number,
  username: string, 
}

const tokenCreate = (infos: SignData) => {
  const token = jwt.sign({ data: infos }, secret, jwtConfig);
  return token;
}; 

export default tokenCreate;
