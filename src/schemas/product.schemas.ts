import { Request, Response, NextFunction } from 'express';

export const nameValidation = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const nome = data.name;
  if (!nome) return res.status(400).json({ error: 'Name is required' });
  if (typeof (nome) !== 'string') return res.status(422).json({ error: 'Name must be a string' });
  if (nome.length <= 2) {
    return res.status(422).json({ error: 'Name must be longer than 2 characters' });
  } 
  next();
};

export const amountValidation = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const p = data.amount;
  if (!p) return res.status(400).json({ error: 'Amount is required' });
  if (typeof (p) !== 'string') return res.status(422).json({ error: 'Amount must be a string' });
  if (p.length <= 2) {
    return res.status(422).json({ error: 'Amount must be longer than 2 characters' });
  } 
  next();
};
