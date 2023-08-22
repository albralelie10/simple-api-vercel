import express from "express"
const app=express()
const PORT=process.env.PORT||3000
import router from "./src/routes/router.js"
import { connectDB } from "./src/db/connection.js"
import dotenv from "dotenv"
dotenv.config()

app.use("/api",router)

app.get("/",(req,res)=>{
    const htmlContent=`
    <html>
    <head>
        <title>Express en Versel</title>
    </head>
    <body>
        <span>Testing in vercel </span>
    </body>
    </html>
    `
    res.send(htmlContent)
})


await connectDB(process.env.MONGO_URI)
app.listen(PORT,()=>console.log(`Server runnign in port ${PORT}`))
