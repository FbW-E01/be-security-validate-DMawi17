import express from "express";
import { validationResult } from "express-validator";
import validator from "./user.validation.js";

const app = express();
app.use(express.json());

let sightings = [];
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})
    .post("/birds", validator, (req, res) => {
        let isValid = validationResult(req);
        !isValid.isEmpty()
            ? res.status(400).json({ error: isValid.errors.map((e) => e.msg) })
            : res.json("Validated!!");
        sightings.push(req.body);
    })
    .get("/birds", (req, res) => {
        res.json(sightings);
    });

app.listen(3000, (e) =>
    e ? console.log(e) : console.log(`\nServer started on port: 3000`)
);
