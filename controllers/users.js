const User = require('../models/User');
const { validationResult } = require('express-validator');

//@route    POST api/users
//@desc     register a user
//@access   Public
exports.createUser = async (req, res, next) => {

    // console.log(req.body);
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body; 
    
    //create user
    const user = await User.create({
        name, 
        email,
        password,
    });     //create data in our database
    
    res.status(201).json({
        success: true,
        data: user
    })
}