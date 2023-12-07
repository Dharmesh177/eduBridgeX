// const express = require('express')
// const router = express.Router();
const event = require('../models/eventsModel')


const addEvent = async (req, res, next) => {

    res.set('Access-Control-Allow-Origin', '*');

    try {
        // const { name, mentorId, speaker, time, duration, description, image } = req.body;
        const { name, mentor, speaker, time, duration, description, image } = req.body;
        let newevent = new event();
        newevent.name = name;
        // newevent.mentorId = mentorId;
        newevent.mentor = mentor;
        newevent.speaker = speaker;
        newevent.time = time;
        newevent.duration = duration;
        newevent.description = description;
        newevent.image = image;
        await newevent.save();
        res.status(200).json({
            success: true,
            message: "Event is saved"
        })
    }
    catch (err) {
        console.log("Error while saving new event : ", err);
        res.status(400).json({
            success: false,
            message: "Event can not be saved"
        })
    }


}
const getAllevent = async (req, res, next) => {

    let events;
    try {
        events = await event.find();
    }
    catch (err) {
        console.log("Error while fetching All events: ", err);
        res.status(400).json({
            success: false,
            message: "Error in fetching all events"
        })
    }
    if (!events) {
        return res.status(404).json({
            success: false,
            message: "Events can not be found"
        })
    }
    res.status(200).json({
        success: true,
        events
    })
}
const getEventById = async (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    // let myevent;
    // try {
    //     let id = req.params
    //     myevent = event.findOne({ _id: id })
    //         .populate('mentor')
    // }
    // catch (err) {
    //     res.status(400).json({
    //         success: false,
    //         message: "Error while fetching specific event"
    //     })
    // }
    // if (!myevent) {
    //     return res.status(404).json({
    //         success: false,
    //         message: "Event can not be found"
    //     })
    // }
    // res.status(200).json({
    //     success: true,
    //     myevent
    // })
    const { id } = req.params

    if (id) {
        console.log(id);
        event.findOne({ _id: id })
            .exec((error, event) => {
                if (error) {
                    return res.status(400).send({ error: error })
                }
                if (event) {
                    console.log({ event });
                    return res.status(200).send({ event })
                }

            })
    } else {
        return res.status(200).send({ error: "params required" })
    }
}
const deleteEventById = async (req, res, next) => {
    try {
        let id = req.params
        event.deleteOne({ _id: id })
        res.status(200).json({
            success: true,
            message: "Event deleted"
        })
    }
    catch (err) {
        console.log("Error while deleting event : ", err);
        res.status(400).json({ success: false, message: err.message })
    }

}
const getEventByMentorId = async (req, res, next) => {

    const { id } = req.params

    if (id) {
        console.log(id);
        event.findOne({ mentor : id })
            .populate('mentor')
            .exec((error, event) => {
                if (error) {
                    return res.status(400).send({ error: error })
                }
                if (event) {
                    console.log({ event });
                    return res.status(200).send({ event })
                }

            })
    } else {
        return res.status(200).send({ error: "params required" })
    }
}

module.exports = { addEvent, getAllevent, getEventById, getEventByMentorId, deleteEventById };
