import { body } from "express-validator";

const validator = [
    body("species")
        .isLength({ min: 3, max: 80 })
        .withMessage("Char Length b/n 3 & 80"),
    body("notes").isLength({ max: 140 }).withMessage("140 char max!"),

    // Alphanumeric
    body("estimatedAmount").isNumeric().withMessage("NaN!"),
    body("species")
        .isAlpha("en-US", { ignore: " " })
        .withMessage("only letters (no numbers or symbols)"),
];

export default validator;
