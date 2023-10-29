'use strict';

/**
 * product-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-blog.product-blog');
