import EndpointField from '../models/EndpointsField';
import EndpointFieldValue from '../models/EndpointsFieldValue';

class EndpointController {
  async store(req, res) {
    const { data } = req.body;

    const fields = await EndpointField.findAll({
      where: {
        endpoint_id: req.endpointId,
      },
      attributes: ['id', 'title', 'created_at', 'updated_at'],
      include: [
        {
          model: EndpointFieldValue,
          as: 'values',
          where: {
            user_id: req.userId,
          },
        },
      ],
    });

    if (fields.length > 1) {
      if (typeof data !== 'object')
        return res.status(400).json({ error: 'Data object malformed' });
    } else if (typeof data !== 'string')
      return res.status(400).json({ error: 'Data object malformed' });

    // if data received from body is an object, means that we need to insert more than one field value into database
    if (fields.length > 1) {
      fields.map(field => {
        if (!data[field.getDataValue('title')]) {
          return res.status(400).json({
            error: `Please, provide ${field.getDataValue('title')} field`,
          });
        }

        return field;
      });

      Promise.all(
        fields.map(field => {
          // TODO - Add validation for check if the current value is the same

          if (
            field.getDataValue('value') !== data[field.getDataValue('title')]
          ) {
            return EndpointFieldValue.create({
              endpoints_field_id: field.getDataValue('id'),
              value: data[field.getDataValue('title')],
              user_id: req.userId,
            });
          }

          return field;
        })
      );
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
