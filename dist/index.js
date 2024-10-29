"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const JSQuestion_1 = __importDefault(require("./model/JSQuestion"));
const TypescriptQuestion_1 = __importDefault(require("./model/TypescriptQuestion"));
const JSAnswer_1 = __importDefault(require("./model/JSAnswer"));
const express_validator_1 = require("express-validator");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const answerRequestValidator = [
    (0, express_validator_1.body)().isArray().withMessage("Request body must be an array"),
    (0, express_validator_1.body)('*.questionId').exists().withMessage("questionId is required!").isInt().withMessage('questionId must be an integer'),
    (0, express_validator_1.body)('*.answerIndex').exists().withMessage("answerIndex is required!").isInt().withMessage('questionId must be an integer'),
];
app.use(express_1.default.json());
app.get("/js-questions", (req, res) => {
    res.json({
        data: JSQuestion_1.default
    });
});
app.post("/js-questions", answerRequestValidator, (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const requestData = req.body;
    let score = 0;
    for (let i = 0; i < requestData.length; i++) {
        for (let j = 0; j < JSAnswer_1.default.length; j++) {
            if (JSAnswer_1.default[j].questionId === requestData[i].questionId && JSAnswer_1.default[j].answerIndex === requestData[i].answerIndex) {
                score += 1;
            }
        }
    }
    res.json({
        data: {
            score,
            totalScore: JSAnswer_1.default.length,
        }
    });
});
app.get("/typescript-questions", (req, res) => {
    res.json({
        data: TypescriptQuestion_1.default
    });
});
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
