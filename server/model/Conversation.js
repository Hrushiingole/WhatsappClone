import mongoose from 'mongoose';

const ConversationSchma=new mongoose.Schema({
    members:{
        type:Array

    },
    message:{
        type:String
    }},
    {
        timestamps:true
    }
);
const conversation=mongoose.model('Conversation',ConversationSchma);


export default conversation;