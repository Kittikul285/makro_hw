exports.getProductsLanding = (req, res, next) =>{
    res.json({message: "Get Product Landing Page"});
};

exports.getProducts = (req, res, next) =>{
    const {search, promotion, brand, category} = req.query;
    // res.json({message: "Get Filtered Products"});
    res.json({search,promotion,brand,category})
};

exports.getProductById = (req, res, next) =>{
    res.json({message: "Get Product By Id"});
}