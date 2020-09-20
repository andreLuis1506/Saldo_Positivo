const User =  require('../models/User')

require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const mailer = require('../../modules/mailer');

module.exports ={
    async register(req, res){
      const { name, email, password, fixedIncome, income} = req.body;

      const user = await User.create({
        name,
        email,
        password,
        fixedIncome,
        income
      }).then(function(user){
        return res.status(201).json(user);

      }).catch(function(err){
        return res.status(400).json(err);
      });

    },
    
    async login(req, res){
      const { email, password} = req.body;

      const user = await User.findOne({where: {email: email } });

      if(!user){
        return res.status(404).json({auth: false, message: "User not found"})
      }

      if(user.email === email && user.password === password){
        const id = user.id;

        const token = jwt.sign({id}, process.env.SECRET,{
          expiresIn: 86400
        });

        return res.status(200).json({auth: true, message: 'Login success', token: token });

      }

      return res.status(400).json({auth: false, message: 'Login invalid'})
    },

    async forgotPassword (req, res){
      const {email} = req.body;

      const user = await User.findOne({
        where:{email}
      });

      if(!user){
        return res.status(400).json({message: "User not found"});
      }

      const token = jwt.sign({email}, process.env.FORGOTPASSWORD);

      console.log(token);

      mailer.sendMail({
        to: email,
        from: 'alsss.ads@gmail.com',
        template: './forgotPassword',
        subject: 'Email de recuperação de senha',
        context: { token }
      }).then(function(){
        return res.status(200).json({message: 'Email enviado'});
      }).catch(function(err){
        return res.status(400).json({err})
      })

    },

    async resetPassword(req, res){
      const { token, newPassword} = req.body;
      var email;

      jwt.verify(token, process.env.FORGOTPASSWORD, function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

         email = decoded.email
      })  

      if (!await User.findOne({where: {email:email}})){
        return res.status(400).json({message: 'User not found!'})
      }

      const user = await User.update({
        password: newPassword
      },
      {
        where: {email}
      }).then(function(user){
        return res.status(200).json(user)
      }).catch(function(err){
        return res.status(400).json(err)
      })

    }
}