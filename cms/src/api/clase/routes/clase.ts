import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::clase.clase', {
  config: {
    find: {
      auth: false, // Sin autenticación
    },
    findOne: {
      auth: false, // Sin autenticación
    },
  },
});