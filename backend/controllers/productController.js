const router = require('express').Router();
const cloudinary = require('cloudinary');
const Product =require('../models/productModel');
const productModel = require('../models/productModel');

//create a add product router
router.post("/add",async(req,res)=>{
    console.log(req.body );
    
    //destructuring
    const {productName, productPrice ,productCategory, productDescription}=req.body;
    const {productImage} =req.files;

    //validation
    if(!productName||!productPrice||!productCategory||!productDescription||!productImage){
        return res.json({msg:"Please enter all fields"});
      }

    //   console.log(process.env.API_KEY)
    
    try{
        //upload image to cloudinary
        const uploadImage = await cloudinary.v2.uploader.upload(productImage.path, {
            folder: "products",
            crop: "scale",
        })
        
        //create a new product
        const newProduct = new productModel({
            name: productName,
            price:productPrice,
            category: productCategory,
            description: productDescription,
            image: uploadImage.secure_url,
    });
        await newProduct.save();
        res.json("Product registered Successfully");

    } catch(error){
        console.log(error)
        res.json("Product registration failed");
    }
    
});

module.exports = router;
