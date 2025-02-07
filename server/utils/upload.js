//we cant store files and images in mongodb directly
//refer npm site and study about the following
//we are sending the file(FormData) data which is always in binary form 
//we have to parse or handle the formdata
//we'll use "multer" library which is used for uploading files(is a middleware)
//npm i multer
//we have install multer-gridfs storage engine also
//GridFS storage engine for Multer to store uploaded files directly to MongoDb
//npm install multer-gridfs-storage --save
//multer is not compatible with altest version of mongodb use the specified version

import multer from 'multer'
import { GridFsStorage } from 'multer-gridfs-storage'
import dotenv from 'dotenv'
dotenv.config();
const storage =new GridFsStorage({
    url:'mongodb+srv://hrishikeshingole532:7umMG4ExuEb5ErcK@clone-whatsapp.ojou6tq.mongodb.net/?retryWrites=true&w=majority&appName=clone-whatsapp',
    options:{useUnifiedTopology:true,useNewUrlParser:true},
    file:(request,file)=>{
       

        const match=["image/png","image/jpg"];
        if(match.indexOf(file.mimeType)===-1){
            return `${Date.now()}-file-${file.originalname}`
        }

        return {
            bucketName:"photos",
            filename:`${Date.now()}-file-${file.originalname}`
        }
    }
    
});

export default multer({storage});


