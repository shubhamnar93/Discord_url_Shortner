const urls=require('../models/url')
const shortid = require('shortid')


async function shortUrl(req, res){
    const url=req.body.url;
    const user= req.body.user
    const shortID= shortid()

    const result = await urls.create({url, visitHistory:[], shortId:shortID, createdBy:user})  

    return res.json({url:`http://localhost:3000/url/${result.shortId}`})
}

async function openUrl(req,res) {
    const id=req.params
    const result=await urls.findOneAndUpdate(
        id,
        { $push:{
        visitHistory:[{timeStamps:Date.now()}]
        }
    }
)
    res.redirect(result.url)
}

async function allUrl(req, res){
    const user=req.body.user
    const result= await urls.find({createdBy:user})
    return res.json(result)
}

module.exports={
    shortUrl,
    openUrl,
    allUrl
}