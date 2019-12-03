import * as Yup from 'yup';

import User from '../models/User';

export default async (req, res, next) => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ error: 'Validation failed' });
  }

  const { email } = req.body;

  const user = await User.findOne({ where: { email } });

  if (user) {
    return res.status(400).json({ error: 'User already exists' });
  }

  return next();
};
