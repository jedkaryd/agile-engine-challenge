const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://interview.agileengine.com',
  timeout: 1000
});

module.exports = instance;
