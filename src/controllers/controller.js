import Book from "../model/books.js"

export const getAllData=async(req,res)=>{
    try{
        const books=await Book.find()
        return res.status(200).json({data:books})
    }catch(error){
        res.status(500).json({msg:"Server Error"})
    }
}