require("dotenv").config()

const mongoose = require ("mongoose")
const User = require("../models/User.model")


mongoose.connect(process.env.MONGODB_URI)
    .then(x => {
        console.log("connected to db named", x.connections[0].name)
        return User.create({
            email: "m@m.com",
            password: "m",
            name: "m"
        })
    })
    .then(createdUser => {
        console.log("This is the new user", createdUser)
    })
    .catch(err => console.log(err))
