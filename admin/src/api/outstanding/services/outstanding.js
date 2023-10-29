'use strict';

/**
 * outstanding service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::outstanding.outstanding');
