const express = require("express")
const db = require("../utils/db")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
        const cars  = await db("cars".select())

        res.json(cars)
    } catch (err) {
        next(err)
    }
})