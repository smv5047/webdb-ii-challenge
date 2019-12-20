const express = require("express")
const carsRouter = require("./cars/cars-router")
const app = express()


const port = process.env.HOST || 4005
const host = process.env.PORT || "localhost"

app.use(express.json())
app.use("/api/cars", carsRouter)
app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`)
})