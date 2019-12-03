import Endpoint from '../models/Endpoint';

export default async (req, res, next) => {
  const { slug } = req.params;
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({ error: 'Validation failed' });
  }

  const endpoint = await Endpoint.findOne({
    where: { slug },
  });

  if (!endpoint) {
    return res.status(404).json({ error: 'End-point not found' });
  }

  req.endpointId = endpoint.id;

  return next();
};
