const Users = require('../models/userModel')

const userCtrl = {
    searchUser: async (req, res) => {
        try {
            const users = await Users.find({username: {$regex: req.query.username}})
            .limit(10).select("fullname username avatar")
            
            res.json({users})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getSingleUser:async(req,res) => {
        try{
            
            const user = await Users.findById(req.params.id)
            if(!user) return res.status(400).json({msg:"User does not exist."})
            res.status(200).json({user});
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    updataUser:async(req,res) => {
        try{
            const {website,avatar,username,email,about} = req.body ;
            await Users.findOneAndUpdate({_id:req.user._id},{
                website,avatar,username,email,about
            })
            res.json({msg:"success!"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    getAlluser:async(req,res) => {
        try{
            const users = await  Users.find().sort({"createdAt":-1});
            res.status(200).json(users);
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    }
}
module.exports = userCtrl