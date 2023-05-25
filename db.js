



import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI =`mongodb://${USERNAME}:${PASSWORD}@ac-njq1qly-shard-00-00.m1pi3x0.mongodb.net:27017,ac-njq1qly-shard-00-01.m1pi3x0.mongodb.net:27017,ac-njq1qly-shard-00-02.m1pi3x0.mongodb.net:27017/?ssl=true&replicaSet=atlas-hibyb6-shard-0&authSource=admin&retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting the database ', error.massage);
    })
}

export default Connection;