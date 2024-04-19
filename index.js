
const express = require("express");
const app = express();
const port = 9090
const fs = require("fs")



const productRoute = require("./routes/productRoute")
const aboutRoute = require("./routes/aboutRoute")
const serviceRoute = require("./routes/serviceRoute")
const homeRoute = require("./routes/homeRoute")


app.use(productRoute)
app.use(aboutRoute)
app.use(serviceRoute)
app.use(homeRoute)

app.use(express.json())






app.listen( port, () => {
    console.log(`starting server. http://localhost:${port} `)
})