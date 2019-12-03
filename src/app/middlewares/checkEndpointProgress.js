import { Op } from 'sequelize';

import Endpoint from '../models/Endpoint';
import EndpointOrder from '../models/EndpointsOrder';
import EndpointField from '../models/EndpointsField';
import EndpointFieldValue from '../models/EndpointsFieldValue';

export default async (req, res, next) => {
  const { order: currentOrder } = await EndpointOrder.findOne({
    attributes: ['order'],
    where: {
      endpoint_id: req.endpointId,
    },
  });

  const beforeEndpointsWithNoAwnswers = await EndpointField.findAll({
    include: [
      {
        model: EndpointFieldValue,
        as: 'values',
        required: false,
        where: {
          id: null,
        },
      },
      {
        model: Endpoint,
        as: 'endpoint',
        include: {
          model: EndpointOrder,
          as: 'order',
          where: {
            order: {
              [Op.lt]: currentOrder,
            },
          },
        },
      },
    ],
  });

  const beforeEndpointsWithNoAwnswersFiltered = beforeEndpointsWithNoAwnswers.filter(
    item => item.endpoint
  );

  return res.json(beforeEndpointsWithNoAwnswers);

  if (beforeEndpointsWithNoAwnswersFiltered.length > 0) {
    return res.status(400).json({
      error: `Please, enter your ${beforeEndpointsWithNoAwnswersFiltered[0].endpoint.slug} data.`,
    });
  }

  return next();
};
