import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
export async function connect() {
//     console.log("1");
//    // console.log();
//     console.log("2");
    try {
        mongoose.connect("mongodb+srv://abhishek:abhitiw@next-auth-app.ggmtt4b.mongodb.net/?retryWrites=true&w=majority&appName=next-auth-app");
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}