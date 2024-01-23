exports.register = (req, res, next)=>{
    const {email, password} = req.body
    res.json({email,password});
    // res.json({message: "Register"});
};

exports.login = (req, res, next)=>{
    const {email, password} = req.body
    res.json({email,password});
    // res.json({message: "Login"});
};

exports.forgetPassword = (req, res, next) =>{
    const {email} = req.body
    res.json({email});
    // res.json({message: "Forget Password"});
};

exports.verifyForgetPassword = (req, res, next)=>{

    const {token}=req.params;
    // res.json({message: "Verify forget password"});
    res.json({token});
};

exports.resetPassword = (req, res, next)=>{
    const {token}=req.params;
    const {password} = req.body
    res.json({token, password});
    // res.json({message: "Reset Password"});
};