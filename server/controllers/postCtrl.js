const Posts = require("../models/postModel");
const Users = require("../models/userModel");
const postCtrl = {
  createNewsPost: async (req, res) => {
    const newPost = new Posts(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //   allPost: async (req, res) => {
  //     try {
  //       const posts = await Posts.find().sort({"createdAt": -1});
  //       res.status(200).json(posts);
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }
  //   },

  singlePost: async (req, res) => {
    try {
      const post = await Posts.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  getUserPosts: async (req, res) => {
    try {
      const userposts = await Posts.find({ username: req.user.username }).sort({
        createdAt: -1,
      });

      res.status(200).json(userposts);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  allUsersPosts:async(req,res) => {
    try {
      const alluserspost =  await Posts.find({ _id :req.params.id}).sort({createdAt:-1,});
      res.status(200).json(alluserspost)
    }catch(err){
      return res.status(500).json(err);
    }
  },
  //不嗯用

  deletePost: async (req, res) => {
    try {
      const post = await Posts.findOneAndDelete({ _id: req.params.id });
      res.json(post);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updatePost: async (req, res) => {
    try {
      const { content } = req.body;

      const post = await Posts.findOneAndUpdate(
        { _id: req.params.id },
        { content }
      );
      res.json({
        newPost:{
         ...post._doc,
         content
        }
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = postCtrl;
