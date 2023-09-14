const router = require("express").Router()
const User = require("../models/User");
const CrytoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register

router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CrytoJS.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
    });
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });
//LOGIN

router.post('/login', async (req, res) => {
   try{
    const user = await User.findOne({
        username:req.body.username
    });
    if(!user){
      return res.status(401).json("Wrong User Name");
   } 
    const hashedPassword = CrytoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
    );
    const Originalpassword = hashedPassword.toString(CrytoJS.enc.Utf8);

    Originalpassword !==req.body.password && res.status(401).json("Wrong credentials!")
    
    const accessToken = jwt.sign({
        id:user._id,
        isAdmin:user.isAdmin,
    },process.env.JWT_SEC,
    {expiresIn:"3d"}
    )
    const{ password, ...others} = user._doc;

    res.status(200).json({...others,accessToken});
}
   catch(err){
    res.status(500).json(err)
   }

});

router.post("/login",async(req,res)=>{
  try {
       const user =await User.findOne({
          username:req.body.username
       });

       if(!user){
          return res.status(401).json("Wrong User Name");
       } 
       
       const hashPassword  = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
       const originalPassword = hashPassword.toString(CryptoJS.enc.Utf8);

       const inputPassword = req.body.password ;

       if(originalPassword !== inputPassword){
          return  res.status(401).json("Wrong Password");
       }

       const accessToken = jwt.sign({
              id:user._id,
              isAdmin:user.isAdmin
              },
              process.env.JWT_SEC ,
              {expiresIn:"3d"}
          )

      const {password,...others} = user._doc
      res.status(200).json({...others,accessToken})
  } catch (error) {
      res.status(500).json(error)
  }
})


module.exports = router;