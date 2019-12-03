import Endpoint from '../models/Endpoint';

class EndpointController {
  async store(req, res) {
    return res.json({ message: 'hello world!' });
  }
}

export default new EndpointController();
