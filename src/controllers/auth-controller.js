exports.register = (req, res, next)=>{
    const {email, password} = req.body
    res.json({email,password});
    // res.json({message: "Register"});
};

exports.login = (req, res, next)=>{
    res.json({message: "Login"});
};

exports.forgetPassword = (req, res, next) =>{
    res.json({message: "Forget Password"});
};

exports.verifyForgetPassword = (req, res, next)=>{
    res.json({message: "Verify forget password"});
};

exports.resetPassword = (req, res, next)=>{
    res.json({message: "Reset Password"});
};