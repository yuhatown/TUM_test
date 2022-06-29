import * as dotenv from 'dotenv'
dotenv.config({ path: '../.env' });

const test = {
    host: 'localhost',
    user: 'yuha',
    password: process.env.DATABASE_PASSWORD,
    database: 'tum_test'
};

export default test;