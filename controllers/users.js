//@route    POST api/users
//@desc     register a user
//@access   Public
exports.createUser = async (req, res, next) => {

    // console.log(req.body);

    res.status(201).json({
        msg: `user ${req.body.name} has been registered`
    });

    next();
}