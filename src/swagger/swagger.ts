import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'queue management system documentation',
      version: '1.0.0',
      description: '',
      contact: {
        name: 'JGCoder96',
      },
    },
  },
  apis: [`${path.join(__dirname, './**/*.yml')}`],
};

export const swaggerSpecification = swaggerJSDoc(options);
