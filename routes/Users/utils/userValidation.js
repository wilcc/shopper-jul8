
const { check,validationResult } = require('express-validator');


const userValidation = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter email').isEmail(),
    check('password', 'Please include a valid password').isLength({min:6})
  ];

  const loginValidation = [
    check('email', 'Email is required').not().isEmpty(),
    check('password', 'Password is required').not().isEmpty()
  ]
  const verifyLogin = (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      req.flash('errors', 'All inputs must be filled')
      return res.redirect('/api/users/login')
    }else{next()}
  }
  module.exports = {userValidation,loginValidation,verifyLogin}