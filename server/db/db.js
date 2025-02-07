import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;

const Connection=async()=>{
    const URL='mongodb+srv://hrishikeshingole532:Hrushi123@clone-whatsapp.ojou6tq.mongodb.net/?retryWrites=true&w=majority&appName=clone-whatsapp'
    try{
        //useUnfiedTopolgy:true means to tell mongodb that use everything latest
        await mongoose.connect(URL,{
            useUnifiedTopology:true
        })

        console.log('database connected successfully');

    }catch(error){
        console.log('error while connection mongodb',error.message);
    }
}

export default Connection;