import expApp from "./app";


const PORT=process.env.PORT

expApp.listen(PORT,()=>{
    console.log(`El servidor se levanto correctamente el puerto: `,PORT)
})