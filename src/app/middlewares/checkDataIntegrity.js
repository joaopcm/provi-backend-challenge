import cep from 'cep-promise';

const cpfAndCnpjRegex = /(^\d{3}\.\d{3}\.\d{3}-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$)/;

export default async (req, res, next) => {
  const { slug } = req.params;
  const { data } = req.body;

  switch (slug) {
    case 'cpf':
      if (!cpfAndCnpjRegex.test(data)) {
        return res
          .status(400)
          .json({ error: 'You must provide a valif CPF/CNPJ' });
      }
      break;

    case 'address': {
      const response = await cep(data.cep);

      if (!data.complement) req.body.complement = 'Test';

      if (response.state !== data.state) {
        return res.status(400).json({
          error: 'You must provide a valid state',
        });
      }

      if (response.city !== data.city) {
        return res.status(400).json({
          error: 'You must provide a valid city',
        });
      }

      if (response.street !== data.street) {
        return res.status(400).json({
          error: 'You must provide a valid street',
        });
      }

      break;
    }

    default:
      break;
  }

  return next();
};
