import Endpoint from '../models/Endpoint';
import EndpointField from '../models/EndpointsField';
import EndpointFieldValue from '../models/EndpointsFieldValue';
import EndpointOrder from '../models/EndpointsOrder';

class EndpointController {
  async store(req, res) {
    const { slug } = req.params;
    const { data } = req.body;

    // const endpoint = await Endpoint.findByPk(req.endpointId, {
    //   attributes: ['id', 'slug'],
    //   include: [
    //     {
    //       model: EndpointField,
    //       as: 'fields',
    //       attributes: ['id', 'title'],
    //       include: [
    //         {
    //           model: EndpointFieldValue,
    //           as: 'values',
    //           order: [['created_at', 'desc']],
    //           limit: 1,
    //           where: {
    //             user_id: req.userId,
    //           },
    //           attributes: ['value', 'updated_at'],
    //         },
    //       ],
    //     },
    //     {
    //       model: EndpointOrder,
    //       as: 'order',
    //       attributes: ['order'],
    //     },
    //   ],
    // });

    const fields = await EndpointField.findAll({
      where: {
        endpoint_id: req.endpointId,
      },
      attributes: ['id', 'title', 'created_at', 'updated_at'],
    });

    if (fields.length > 1) {
      if (typeof data !== 'object')
        return res.status(400).json({ error: 'Data object malformed' });
    } else if (typeof data !== 'string')
      return res.status(400).json({ error: 'Data object malformed' });

    if (fields.length > 1) {
      // ...
    } else {
      const fieldValue = await EndpointFieldValue.findOne({
        where: {
          endpoints_field_id: fields[0].getDataValue('id'),
          user_id: req.userId,
        },
        order: [['created_at', 'desc']],
      });

      if (!fieldValue || fieldValue.getDataValue('value') !== data) {
        await EndpointFieldValue.create({
          endpoints_field_id: fields[0].getDataValue('id'),
          value: data,
          user_id: req.userId,
        });
      }
    }

    return res.json(fields);
  }
}

export default new EndpointController();
