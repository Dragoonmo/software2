const express=require("express")
const router=express.Router()
const courss_controller=require('../controller/courssController')
const imageUploader = require('../helper/image_uploader')

router.post('/add-animal',courss_controller.add_courss)
router.get('/show_all_animal',courss_controller.show_all_courss)
router.get('/show_all_animal_ad',courss_controller.show_all_courss_ad)
router.get('/show_animal_id/:id',courss_controller.show_courss_id)
router.post('/delete/:id',courss_controller.destroy_cours)
router.get('/show_req',courss_controller.show_all__req)

module.exports=router