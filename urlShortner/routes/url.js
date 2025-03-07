const express =require('express')
const {
    shortUrl,
    openUrl,
    allUrl
}=require('../controller/url')

const router=express.Router()


router.post('/', shortUrl)

router.get('/:shortId', openUrl)

router.post('/allUrl', allUrl)


module.exports = router;