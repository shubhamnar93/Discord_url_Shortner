const mongoose= require('mongoose')

const urlSchema={
    url:{
        type:String,
        required: true,
    },
    shortId: {
        type: String,
        unique:true
    },
    visitHistory:[{timeStamps: {type:Number} }],
    createdBy:{
        type:String,
    }
}

const urls=mongoose.model('url', urlSchema)
module.exports=urls;