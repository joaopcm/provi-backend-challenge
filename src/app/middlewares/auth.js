import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

import User from '../models/User';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer') {
    return res.status(401).json({ error: 'Token malformed' });
  }

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    const user = await User.findByPk(decoded.id);

    if (user) {
      req.userId = decoded.id;

      return next();
    }

    throw new Error('User not found');
  } catch (_) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
