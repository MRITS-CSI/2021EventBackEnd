const User = require('../Models/User')


export const CreateUser = async(req,res) => {
    try{
        const Data = await User.create(req.body)

        res.status(200).json(Data)


    }catch(err){
        res.status(404).json({
            status:'Error',
            message:err.message
        })
    }
}
export const GetUser = async(req,res) => {
    try{
        const Data = await User.find()

        res.status(200).json(Data)


    }catch(err){
        res.status(404).json({
            status:'Error',
            message:err.message
        })
    }
}