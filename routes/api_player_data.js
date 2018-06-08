const axios = require('axios');

module.exports = app => {
  app.get('/api/playerData', async (req,res) => {
    const request = await axios.get(`https://ow-api.com/v1/stats/pc/us/${req.query.battletag}/complete`);
    const { data } = request;
    res.send(data);
  });
}
