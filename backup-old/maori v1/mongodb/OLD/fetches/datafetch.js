// const mongoose = require("mongoose")
const mongo = require("../../../js/OLD JS MONGO/mongo.js")
const uploadSchema = require("../schemas/upload-schema.js")
import mongoose from "mongoose"
// import mongo from "./mongo.js"
// import uploadSchema from "../schemas/upload-schema.js"

const onUpload = async () => {

    await exports().then(async (mongoose) => {

        console.log("[FETCH]: Fetching from Database");
        try {
            const output = await uploadSchema.findOne(({/*TODO: Hoe gaan we de zin zoeken om te fetchen? - Mels*/})).catch(error => {
                console.error(error)
            });

            if(!output) {
                // TODO: Een "Couldn't find this" Error message voor op de website toevoegen. - Mels
                console.log("[FETCH]: Couldn't find the sentence..")
                return;
            }
            const data = [output.originalSentence, output.maoriSentence]
        } finally {
            mongoose.connection.close() //End the connection with MongoDB
        }
    })

    let originalSentence = data[0]
    let maoriSentence = data[1]

};

onUpload()

//    TODO: Het weergeven van de zin(nen) - Mels