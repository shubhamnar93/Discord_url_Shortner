const mongoose=require('mongoose')

async function connetMongoose(url){
    mongoose.connect(url)
}

module.exports ={connetMongoose}