const api = require('../config.js');
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

exports.auth = (req, res) => {
  const body = { "apiKey": "23567b218376f79d9415" };

  api.post("/auth", body)
    .then((response) => { res.send(response.data) })
    .catch((err) => { res.send(err) });
};

exports.getImages = (req, res) => {
  const headers = { "Authorization": req.headers.authorization };
  const params = req.query;
  const keyCached = "imagesList";

  if (myCache.has(keyCached)) {
    return res.send(myCache.get(keyCached));
  }

  api.get("/images",{ headers, params })
    .then((response) => {
      myCache.set(keyCached, response.data, 100);
      res.send(response.data);
    })
    .catch((err) => { res.send(err) });
};

exports.getImageDetail = (req, res) => {
  const headers = { "Authorization": req.headers.authorization };

  api.get("/images/" + req.params.id, { headers })
    .then((response) => { res.send(response.data) })
    .catch((err) => { res.send(err) });
};
