import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .min(6)
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { data } = req.body;

    const userExists = await User.findOne({ where: { email: data.email } });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { id, email } = await User.create({
      email: data.email,
      password: data.password,
    });

    return res.json({ id, email });
  }
}

export default new UserController();
