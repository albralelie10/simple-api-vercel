import express from "express"
const app=express()
const PORT=process.env.PORT||3000
import router from "./src/routes/router.js"
import { connectDB } from "./src/db/connection.js"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"

app.use(cors({
    origin:"*",
    methods:["GET","DELETE","PUT","POST","OPTIONS"]
}))


app.use(express.static("web"))
app.use("/api",router)

await connectDB(process.env.MONGO_URI)
app.listen(PORT,()=>console.log(`Server runnign in port ${PORT}`))
