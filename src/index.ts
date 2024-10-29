// Demi data dl run for local 
import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import JSQuestion from "./model/JSQuestion";
import TypescriptQuestion from "./model/TypescriptQuestion";
import { AnswerType } from "./types/answerType";
import JSAnswer from './model/JSAnswer';
import { body, check, validationResult } from "express-validator";
import cors from 'cors';

dotenv.config();

const app: Express = express();
app.use(cors());
 
const port = process.env.PORT || 3000;

const answerRequestValidator = [
    body().isArray().withMessage("Request body must be an array"),
    body('*.questionId').exists().withMessage("questionId is required!").isInt().withMessage('questionId must be an integer'),
    body('*.answerIndex').exists().withMessage("answerIndex is required!").isInt().withMessage('questionId must be an integer'),
]

app.use(express.json());


app.get("/js-questions", (req: Request, res: Response) => {
    res.json({
       data: JSQuestion
    });
});

app.post("/js-questions", answerRequestValidator, (req: Request, res: Response) => {
    
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const requestData:AnswerType[] = req.body;
    let score:number = 0;

    for(let i = 0; i < requestData.length;i++){
        for(let j = 0;j<JSAnswer.length;j++){
            if(JSAnswer[j].questionId === requestData[i].questionId && JSAnswer[j].answerIndex===requestData[i].answerIndex){
                score+=1;
            }
        }
    }

    res.json({
       data: {
        score,
        totalScore: JSAnswer.length,
       }
    });
});

app.get("/typescript-questions", (req: Request, res: Response) => {
    res.json({
       data: TypescriptQuestion
    });
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})