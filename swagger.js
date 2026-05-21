const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'W03 Project 2',
        description: 'API documentation for my project'
    },
    host: 'localhost:3000',
    schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)
    .then(() => {
        require('./server');
    });