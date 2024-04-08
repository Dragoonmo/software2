const express=require("express")
const router=express.Router()
const imageUploader = require('../helper/image_uploader')

const clinic=require("../controller/clinic")
router.get('/add_to_clinic/:id',clinic.add_doc_to_cli)
router.get('/showall',clinic.show_all)
router.get('/showall_without_clinc',clinic.show_all_vet_without_clinic)
router.get('/show_under',clinic.show_all_under)
router.get('/show_vet_without_time',clinic.show_vet_without_time)
router.get('/show_vet_with_time',clinic.show_vet_with_time)
router.get('/showc/:id',clinic.showd_c)
router.get('/del_vet/:id',clinic.set_tozero)
router.get('/show_av_time/:date/:id',clinic.show_av_time)
router.get('/show_all_animal',clinic.show_all_animal)
router.get('/show_info_clinic',clinic.show_info_clinic)
router.get('/show_next_appointment',clinic.show_next_appointment)
router.get('/show_shift_time/:id',clinic.show_shift_time)
router.get('/get_time',clinic.get_time)
router.get('/show_appointment_vet',clinic.show_appointment_vet)


router.post('/add_new_vet',imageUploader.upload.single('image'),clinic.singup_vet_from_admin)
router.post('/add_new_admin_for_clinic/:id',clinic.add_new_admin_for_clinic)
router.post('/add_shift/:id',clinic.add_shift_time)
router.post('/add_shift_days/:id',clinic.add_shift_time_diff)
router.post('/make_appointment/:id',clinic.make_appointment)
router.post('/add_info_to_clinic',clinic.add_info_to_clinic)
router.post('/add_new_clinic',clinic.add_new_clinic)
router.post('/update_time_shift/:id',clinic.update_time_shift)
router.post('/add_de/:id/:ii',clinic.add_de)


module.exports=router 