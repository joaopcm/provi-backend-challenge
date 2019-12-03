import Endpoint from '../models/Endpoint';
import EndpointField from '../models/EndpointsField';
import EndpointFieldValue from '../models/EndpointsFieldValue';
import EndpointOrder from '../models/EndpointsOrder';

class EndpointController {
  async store(req, res) {
    const { slug } = req.params;
    const { data } = req.body;

    const endpoint = await Endpoint.findOne({
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
      where: { slug },
    });

    if (typeof data === 'object') {
      // ...
    } else {
      await EndpointFieldValue.create({
        user_id: req.userId,
        endpoints_field_id: endpoint.getDataValue('fields')[0].id,
        value: data,
      });
    }

    return res.json({ ok: 'ok' });
  }
}

export default new EndpointController();
