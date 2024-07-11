
const expr = require("express")
const app = expr() 
const tasks  = require("./routes/tasks")
const connectdb = require("./db/connect")
const notFound = require("./middleware/not-found")
require('dotenv').config()
app.use(expr.static('./public'))
app.use(expr.json())
// app.use(notFound)



app.use("/api/v1/tasks" , tasks)

const start = async ()=>{
  try{
    // console.log(process.env)
    await connectdb(process.env.MONGO_URI)
    app.listen(2000,()=>{
      console.log('server started on port 2000')
    })
  }
  catch(error){
    console.log("Errro Occured")
    console.log(error)
  }
}
start()
