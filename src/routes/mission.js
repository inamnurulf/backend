const { request } = require('express');
const express = require('express')
const router=express.Router();
const missionsControllers= require('../controllers/missions');

//Create
router.get('/', (req,res,next)=>{
    res.json({
        message:"Listening to port"

    })
    next();
})

router.post('/mission', missionsControllers.postMissions)

router.get('/missions', missionsControllers.getMissions)

router.get('/mission/:id', missionsControllers.getMission)

router.patch('/mission/:id', missionsControllers.patchMissions)

router.delete('/mission/:id', missionsControllers.deleteMissions)

module.exports = router;