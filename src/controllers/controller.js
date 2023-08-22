const DATA=[
    {name:"sansa"},{name:"gargame"},{name:"cleo"}
]

export const getAllData=async(req,res)=>{
    try{
        return res.status(200).json({data:DATA})

    }catch(error){
        res.status(500).json({msg:"Server Error"})
    }
}