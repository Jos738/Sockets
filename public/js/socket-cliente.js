
const socket = io();
const lblOnline =document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const txtmensaje = document.querySelector("#txtmensaje"); 
const btnEnvia = document.querySelector("#btnEnvia");
socket.on('connect',()=>{
  console.log('Conectado');
  lblOnline.style.display=''
  lblOffline.style.display='none'
})

socket.on('disconnect',()=>{
  console.log('Desconectado del servidor');
  lblOnline.style.display = "none";
  lblOffline.style.display = "";
})

socket.on('respuesta-servidor',(quedijo) => {
  console.log(quedijo);
})

btnEnviar.addEventListener('click', () => {
  const mensaje=txtmensaje.value;
  const payload = {
    mensaje,
    id: "123abc",
    fecha:new Date().getTime()
  }
  socket.emit('mensaje-enviado', payload, (id)=> {
    console.log('desde el server', id);
  })
})









