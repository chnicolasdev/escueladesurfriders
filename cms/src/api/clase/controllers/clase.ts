import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::clase.clase', ({ strapi }) => ({
  async find(ctx) {
    // Permitir acceso sin autenticación
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },

  async findOne(ctx) {
    // Permitir acceso sin autenticación
    const { data, meta } = await super.findOne(ctx);
    return { data, meta };
  },
}));