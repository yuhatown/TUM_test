const dotenv = require('dotenv')
dotenv.config();

const config = {
    development: {
        host: 'localhost',
        user: 'yuha',
        password: process.env.DATABASE_PASSWORD,
        database: 'tum_near'
    },
    test: {
        host: 'localhost',
        user: 'yuha',
        password: process.env.DATABASE_PASSWORD,
        database: 'tum_near'
    }, 
}

module.exports = config;