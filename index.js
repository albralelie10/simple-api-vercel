import express from "express"
const app=express()
const PORT=process.env.PORT||3000


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

app.listen(PORT,()=>console.log(`Server runnign in port ${PORT}`))