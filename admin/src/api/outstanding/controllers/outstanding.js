'use strict';

/**
 * outstanding controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::outstanding.outstanding');
