import Endpoint from '../models/Endpoint';
import EndpointField from '../models/EndpointsField';
import EndpointFieldValue from '../models/EndpointsFieldValue';
import EndpointOrder from '../models/EndpointsOrder';

export default async (req, res, next) => {
  const { slug } = req.params;
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({ error: 'Validation failed' });
  }

  const endpoints = await Endpoint.findAll({
    attributes: ['id', 'slug'],
    include: [
      {
        model: EndpointField,
        as: 'fields',
        attributes: ['id', 'title'],
        include: [
          {
            model: EndpointFieldValue,
            as: 'values',
            order: [['created_at', 'desc']],
            limit: 1,
            where: {
              user_id: req.userId,
            },
          },
        ],
      },
      {
        model: EndpointOrder,
        as: 'order',
        attributes: ['id', 'order'],
      },
    ],
  });

  console.log(endpoints);

  const endpoint = await Endpoint.findOne({
    where: { slug },
  });

  // ...

  if (!endpoint) {
    return res.status(404).json({ error: 'End-point not found' });
  }

  req.endpointId = endpoint.id;

  return next();
};
