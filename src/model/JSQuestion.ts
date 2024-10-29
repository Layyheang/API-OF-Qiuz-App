import { QuestionType } from "../types/questionType";

const JSQuestions: QuestionType[] = [
    {
        id: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        answer: [
            "<javascript>",
            "<script>",
            "<scripting>",
            "<js>"
        ]
    },
    {
        id: 2,
        question: 'What is the correct JavaScript syntax to change the content of the HTML element below? <br> <p id="demo">This is a demonstration.</p>',
        answer: [
            '#demo.innerHTML = "Hello World!";',
            'document.getElementByName("p").innerHTML = "Hello World!";',
            'document.getElement("p").innerHTML = "Hello World!";',
            'document.getElementById("demo").innerHTML = "Hello World!";'
        ]
    },
    {
        id: 3,
        question: 'Where is the correct place to insert a JavaScript?',
        answer: [
            'Both the <head> section and the <body> section are correct',
            'The <head> section',
            'The <body> section',
        ]
    },
    {
        id: 4,
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answer: [
            '<script href="xxx.js">',
            '<script name="xxx.js">',
            '<script src="xxx.js">',
        ]
    },
    {
        id: 5,
        question: 'The external JavaScript file must contain the <script> tag.',
        answer: [
            'False',
            'True',
        ]
    },
    {
        id: 6,
        question: 'How do you write "Hello World" in an alert box?',
        answer: [
            'alertBox("Hello World");',
            'msg("Hello World");',
            'alert("Hello World");',
            'msgBox("Hello World");',
        ]
    },
    {
        id: 7,
        question: 'How do you create a function in JavaScript?',
        answer: [
            'function myFunction()',
            'function = myFunction()',
            'function:myFunction()',
        ]
    },
    {
        id: 8,
        question: 'How do you call a function named "myFunction"?',
        answer: [
            'call function myFunction()',
            'call myFunction()',
            ' myFunction()',
        ]
    },
    {
        id: 9,
        question: 'How to write an IF statement in JavaScript?',
        answer: [
            'if i == 5 then',
            'if i = 5 then',
            'if (i == 5)',
            'if i = 5',
        ]
    },
    {
        id: 10,
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        answer: [
            'if (i != 5)',
            'if (i <> 5)',
            'if i =! 5 then',
            'if i <> 5',
        ]
    },
    {
        id: 11,
        question: 'How does a WHILE loop start?',
        answer: [
            'while i = 1 to 10',
            'while (i <= 10)',
            'while (i <= 10; i++)',
        ]
    },
    {
        id: 12,
        question: 'How does a FOR loop start?',
        answer: [
            'for (i = 0; i <= 5)',
            'for (i <= 5; i++)',
            'for i = 1 to 5',
            'for (i = 0; i <= 5; i++)',
        ]
    },
    {
        id: 13,
        question: 'How can you add a comment in a JavaScript?',
        answer: [
            " 'This is a comment",
            ' //This is a comment',
            '<!--This is a comment-->',
        ]
    },
    {
        id: 14,
        question: 'How to insert a comment that has more than one line?',
        answer: [
            "//This comment has <br> more than one line//",
            '/*This comment has <br> more than one line*/',
            '<!--This comment has <br> more than one line -->',
        ]
    },
    {
        id: 15,
        question: 'What is the correct way to write a JavaScript array?',
        answer: [
            'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
            'var colors = ["red", "green", "blue"]',
            'var colors = "red", "green", "blue"',
            'var colors = (1:"red", 2:"green", 3:"blue")'
        ]
    },
    {
        id: 16,
        question: 'How do you round the number 7.25, to the nearest integer?',
        answer: [
            'round(7.25)',
            'Math.rnd(7.25)',
            'Math.round(7.25)',
            'rnd(7.25)'
        ]
    },
    {
        id: 17,
        question: 'How do you find the number with the highest value of x and y?',
        answer: [
            'Math.max(x, y)',
            'top(x, y)',
            'ceil(x, y)',
            'Math.ceil(x, y)'
        ]
    },
    {
        id: 18,
        question: 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
        answer: [
            'w2 = window.new("http://www.w3schools.com");',
            'w2 = window.open("http://www.w3schools.com");',
        ]
    },
    {
        id: 19,
        question: 'JavaScript is the same as Java.',
        answer: [
            'True',
            'False',
        ]
    },
    {
        id: 20,
        question: "How can you detect the client's browser name?",
        answer: [
            'navigator.appName',
            'browser.name',
            'client.navName',
        ]
    },
    {
        id: 21,
        question: "Which event occurs when the user clicks on an HTML element?",
        answer: [
            'onmouseover',
            'onmouseclick',
            'onchange',
            'onclick',
        ]
    },
    {
        id: 22,
        question: "How do you declare a JavaScript variable?",
        answer: [
            'v carName',
            'variable carName',
            'var carName',
        ]
    },
    {
        id: 23,
        question: "Which operator is used to assign a value to a variable?",
        answer: [
            'x',
            '*',
            '=',
            '-',
        ]
    },
    {
        id: 24,
        question: "What will the following code return: Boolean(10 > 9)",
        answer: [
            'false',
            'NaN',
            'true',
        ]
    },
    {
        id: 25,
        question: "Is JavaScript case-sensitive?",
        answer: [
            'No',
            'Yes'
        ]
    }
];

export default JSQuestions;


