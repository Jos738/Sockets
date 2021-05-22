const socketController = (socket) => {
  //console.log('Cliente conectado',socket.id);

   socket.on('disconnect', () => {
    console.log('Cliente desconectado');
   });
  
  socket.on('mensaje-enviado', (payload,callback) => {
    console.log(payload);
    const id = 123456789;
    callback(id);
    //socket.emit('respuesta-servidor', 'Recibi tu informacion');
    socket.broadcast.emit("respuesta-servidor",payload);
  })
  
};


export{socketController}