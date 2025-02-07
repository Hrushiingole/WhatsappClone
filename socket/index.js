import { Server } from "socket.io";


const io=new Server(9000,{
    cors:{
        origin:'http://localhost:3000'//this is so that we should not get the cors error
    }
});

let users=[];
const addUser=(userData,socketId)=>{
    !users.some(user=>user.sub==userData.sub) && users.push({...userData,socketId});

}

const getUser=(userId)=>{
    console.log(users);
    return users.find(user=>user.sub === userId);
}
//socket contains all the information that comes from fronted
io.on('connection',(socket)=>{
console.log('user connected');
    socket.on("addUsers",userData=>{
        addUser(userData,socket.id)//each socket has its unique id
        io.emit("getUsers",users)//emit is used to send info from backend to fronted or from frontyed to backend
        //in above we are sending info from backend to fronted
        //similarly ".on" is used to receive the info from the fronted or backend
    });///this will be executed whenever we hit addUsers on socket server


    socket.on('sendMessage',data=>{
        const user=getUser(data.receiverId);
        // console.log(user);
        io.to(user.socketId).emit('getMessage',data);
    })


})