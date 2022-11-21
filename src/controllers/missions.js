const { default: mongoose } = require('mongoose');
const Mission = require('../models/missions')

exports.postMissions = async (req, res, next) => {
    const { title, data, description } = req.body;
    try {
        const mission = await Mission.create({ title, data, description})
        res.status(200).json(mission)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }


    next();
}

exports.getMissions = async (req, res, next) => {

    const missions = await Mission.find({}).sort({ createdAt: -1 })

    res.status(200).json(missions)

    next();
}

exports.patchMissions = async (req, res, next) => {
    const {id} = req.params;

    //cek valid ID 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            message: "No such Missions " + id
        })
    }

    const mission = await Mission.findOneAndUpdate({_id: id}, {...req.body})
    next();

    if (!mission) {
        res.status(404).json({
            message: "No such Missions"
        })
    }

    res.status(200).json(mission)
    next();

}

exports.deleteMissions = async (req, res, next) => {
    const { id } = req.params;

    //cek valid ID 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            message: "No such Missions"
        })
    }

    const mission = await Mission.findOneAndDelete({ _id: id })

    if (!mission) {
        res.status(404).json({
            message: "No such Missions"
        })
    }

    res.status(200).json(mission)
    next();
}