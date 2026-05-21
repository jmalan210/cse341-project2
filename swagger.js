const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'W03 Project 2',
        description: 'API documentation for my project'
    },
    servers: [
        {
            url: 'https://cse341-project2-uguq.onrender.com'
        }
    ]
};

const outputFile = './swagger.json';
const endpointsFiles = [
    './server.js'
    // './routes/recipes.js',
    // './routes/users.js'
];

swaggerAutogen(outputFile, endpointsFiles, doc)
    .then(() => {
        require('./server');
    });