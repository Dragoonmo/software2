const express=require("express")
const router=express.Router()
const courss_controller=require('../controller/courssController')
const imageUploader = require('../helper/image_uploader')

router.post('/add-courss',courss_controller.add_courss)
router.post('/add-new_courss',courss_controller.add_new_coursss)
router.get('/show_all_courses',courss_controller.show_all_courss)
router.get('/show_all_courses_ad',courss_controller.show_all_courss_ad)
router.get('/show_courses_id/:id',courss_controller.show_courss_id)
router.post('/delete/:id',courss_controller.destroy_cours)
router.get('/show_req',courss_controller.show_all__req)
router.get('/show_coursss',courss_controller.show_av_courss)

module.exports=router