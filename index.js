import express from "express"
const app=express()
const PORT=process.env.PORT||3000
import router from "./src/routes/router.js"
import { connectDB } from "./src/db/connection.js"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import path from "path"

app.use(express.static(path.join(__dirname,"../front/dist")))
app.get("/",(req,res)=>{
    res.sendFile("index.html",{root:path.join(__dirname,"../front/dist")})
})

app.use(cors({
    origin:"*",
    methods:["GET","DELETE","PUT","POST","OPTIONS"]
}))

app.use("/api",router)

await connectDB(process.env.MONGO_URI)
app.listen(PORT,()=>console.log(`Server runnign in port ${PORT}`))

export default app
