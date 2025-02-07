import express from'express';
import { newMessage,getMessages } from '../controller/message-controller.js';
import { getConversation } from '../controller/conversation-controller.js';
import { newConversation } from '../controller/conversation-controller.js';
import { addUser,getUsers } from '../controller/user-controller.js';
import { uploadFile } from '../controller/image-controller.js';
import { getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js'
const route=express.Router();


route.post('/add',addUser)
route.get('/users',getUsers);


route.post('/conversation/add',newConversation);
route.post('/conversation/get',getConversation);


route.post('/message/add',newMessage)
route.get('/message/get/:id',getMessages)

//api also takes the third argument which is middleware
//middleware's work is if we have to do something before calling the api function like above 
route.post('/file/upload',upload.single("file"), uploadFile)
route.get('/file/:filename',getImage);

export default route;

