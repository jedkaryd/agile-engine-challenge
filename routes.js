'use strict';

const agileEngineService = require('./services/agileEngineService');

module.exports = function(app) {
  app.route('/auth')
    .post(agileEngineService.auth);

  app.route('/images')
    .get(agileEngineService.getImages);
    
  app.route('/images/:id')
    .get(agileEngineService.getImageDetail);
};
