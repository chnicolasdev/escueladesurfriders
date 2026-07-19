export default {
    kind: 'collectionType',
    collectionName: 'clases',
    info: {
      singularName: 'clase',
      pluralName: 'clases',
      displayName: 'Clase',
      description: 'Clases de surf ofrecidas por la escuela',
    },
    options: {
      draftAndPublish: true,
    },
    pluginOptions: {},
    attributes: {
      titulo: {
        type: 'string',
        required: true,
      },
      descripcion: {
        type: 'richtext',
      },
      nivel: {
        type: 'enumeration',
        enum: ['principiante', 'intermedio', 'avanzado'],
        required: true,
        default: 'principiante',
      },
      precio: {
        type: 'decimal',
        required: true,
      },
      duracion: {
        type: 'integer',
        required: true,
        min: 30,
      },
      imagen: {
        type: 'media',
        multiple: false,
        required: false,
        allowedTypes: ['images'],
      },
    },
  };