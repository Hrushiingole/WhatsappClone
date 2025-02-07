

import Conversation from "../model/Conversation.js";


export const newConversation=async(request,response)=>{
    try{
        const senderId=request.body.senderId;
        const receiverId=request.body.receiverId;
        const exist =await Conversation.findOne({members:{$all:[receiverId,senderId]}})//$all will check if all the elements of array are matched or not
        if(exist){
            return response.status(200).json('conversation already exist');
        }
        const newConversation=new Conversation({
            members:[senderId,receiverId]
        })
        await newConversation.save();
        return response.status(200).json('conversation saved successfully')

    }catch(error){
        return response.status(500).json({error:error.message});
    }
}
export const getConversation=async(request,response)=>{
    try{
        const senderId=request.body.senderId;
        const receiverId=request.body.receiverId;

        const conversation =await Conversation.findOne({members:{$all:[senderId,receiverId]}})
        return response.status(200).json(conversation)
    }catch(error){
        return response.status(500).json({error:error.message});
    }
}
