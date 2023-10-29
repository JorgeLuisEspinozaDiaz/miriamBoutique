'use strict';

/**
 * outstanding router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::outstanding.outstanding');
