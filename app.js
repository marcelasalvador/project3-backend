require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: "*"
}))

app.use(express.json())


const authRouter = require("./routes/auth.routes")

const PORT = process.env.PORT;


app.use("/auth", authRouter)


mongoose.connect(process.env.MONGODB_URI)
  .then(x => {
    console.log('connected to db', x.connections[0].name)
    app.listen(PORT, () => {
      console.log('Server started on port ' + PORT)
    });
  })
  .catch(err => console.log('error starting server', err))