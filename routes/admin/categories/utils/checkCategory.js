const {check,validationResult} =require('express-validator')

const checkCategory = [
    check('name', 'Category is required').not().isEmpty(),
  ]

  const verifyCategory = (req,res,next)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()){
      req.flash('errors', errors.errors[0].msg)
      return res.redirect('/api/admin/add-category')
    }else{next()}
  }
module.exports = {checkCategory,verifyCategory}