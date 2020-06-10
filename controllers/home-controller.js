const { setResponseWithOk } = require('../utils/common-response');

module.exports = function HomeController() {
  this.call = async (req, res) => {
    const response = req.body;
    return setResponseWithOk(res, 200, 'Hola', 200, response);
  };
};
