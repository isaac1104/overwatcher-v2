const axios = require('axios');

module.exports = app => {
  app.get('/api/playerData', async (req,res) => {
    const request = await axios.get(`https://ow-api.herokuapp.com/stats/pc/global/${req.query.battletag}`);
    const { data } = request;
    res.send(data);
  });
}

// https://ow-api.com/v1/stats/pc/us/sinatraa-11809/complete
