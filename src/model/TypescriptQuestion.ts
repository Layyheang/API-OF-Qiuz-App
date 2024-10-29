import { QuestionType } from "../types/questionType";

const TypescriptQuestion: QuestionType[] = [
    {
        id: 1,
        question: "What are the three main 'simple types' in TypeScript?",
        answer: [
            "Boolean, Number, String",
            "Array, Object, Boolean",
            "Object, Array, Symbol",
            "Object, String, Number"
        ]
    },
    {
        id: 2,
        question: "What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        answer: [
            'Explicit',
            'Implicit'
        ]
    },
    {
        id: 3,
        question: 'True or False: TypeScript can always correctly infer a variables type.',
        answer: [
            'False',
            'True',
        ]
    },
    {
        id: 4,
        question: 'You can disable implicit variable type assignment by enabling the compiler option:',
        answer: [
            'Implicit = FALSE',
            'autoTypeAssignment = FALSE',
            'noImplicitAny',
            'noAutoType',
        ]
    },
    {
        id: 5,
        question: "You can enable 'undefined' and 'null' types to be accounted for by enabling the compiler property:",
        answer: [
            'strictChecksRequired',
            'noFalseyInits',
            'strictNullChecks',
            'noAutoType',
        ]
    },
    {
        id: 6,
        question: "______ is similar to 'any', but a safer alternative when uncertain about the type.",
        answer: [
            'similar',
            'unknown',
            'never',
        ]
    },
    {
        id: 7,
        question: "What is the inherited type for the variable example in `const example = ['Dylan']`?",
        answer: [
            'string[]',
            'any[]',
            'string',
            'unknown[]',
        ]
    },
    {
        id: 8,
        question: "What does the 'readonly' access modifier do for an array variable assignment like: `const codeNames: readonly string[] = ['Coding', 'God']`?",
        answer: [
            'Makes it private and can only be used in the file its created',
            'Allows only adding but not deleting elements in the array',
            'Allows no changes and is there simply to be read from and not modified',
            'Makes you read it for better clean code',
        ]
    },
    {
        id: 9,
        question: "True or False: TypeScript will always correctly infer the type of an array.",
        answer: [
            'True',
            'False',
        ]
    },
    {
        id: 10,
        question: "True or False: a Tuple and an Array are the same thing when discussing types",
        answer: [
            'False',
            'True',
        ]
    },
    {
        id: 11,
        question: "Which is a successful example of this tuple `[number, string]`?",
        answer: [
            'const ourTuple = [101]',
            "const ourTuple = [101, 101, 'Coding God', 'Coding God']",
            "const ourTuple = ['Coding God', 101]",
            "const ourTuple = [101, 'Coding God']"
        ]
    },
    {
        id: 12,
        question: "Type Aliases are mostly used with ______.",
        answer: [
            "Numbers",
            "Booleans",
            "Strings",
        ]
    },
    {
        id: 13,
        question: "True or False: Interfaces are similar to type aliases, but only for object types?",
        answer: [
            "False",
            "True",
        ]
    },
    {
        id: 14,
        question: "________ an interface will have the same properties as that interface.",
        answer: [
            "Duplicating",
            "Extending",
            "Improving",
            "Idolizing",
        ]
    },
    {
        id: 15,
        question: "What are the two types of enums?",
        answer: [
            "Number and Number Array",
            "String and Boolean",
            "Number and Boolean",
            "String and Number",
        ]
    },
    {
        id: 16,
        question: "Numeric enums first value is defaulted to what?",
        answer: [
            "0",
            "5",
            "1",
            "10",
        ]
    },
    {
        id: 17,
        question: "True or False: 'keyof' can be used with index signatures to extract the index type.?",
        answer: [
            "Fasle",
            "True",
        ]
    },
    {
        id: 18,
        question: "True or False: Generics can not be assigned default values.",
        answer: [
            "True",
            "False",
        ]
    },
    {
        id: 19,
        question: "Definitely Typed is...",
        answer: [
            "the official name of TypeScript",
            "a project whose goal is to make types dynamic",
            "a project that provides a central repository of TypeScript definitions for NPM packages which do not have types",
            "a superset of TypeScript",
        ]
    },
    {
        id: 20,
        question: "What is the type of the parameter: `function ex(param1?: string){}`?",
        answer: [
            "string",
            "string|null",
            "unknown",
            "string|undefined",
        ]
    },
    {
        id: 21,
        question: "_____ is a return type for when nothing is returned.",
        answer: [
            "unknown",
            "void",
            "any",
            "any[]",
        ]
    },
    {
        id: 22,
        question: "Access modifiers control the ______ of properties and methods.",
        answer: [
            "mocking",
            "visibility",
            "inheritance",
            "type",
        ]
    },
    {
        id: 23,
        question: "True or False: public modifiers allow access to the class members from anywhere.",
        answer: [
            "False",
            "True",
        ]
    },
    {
        id: 24,
        question: "True or False: protected modifiers only are allowed in the inherited class.",
        answer: [
            "False",
            "True",
        ]
    },
    {
        id: 25,
        question: "When a class extends another class and replaces the members of its parent it is called what?",
        answer: [
            "inheriting",
            "extending",
            "overload",
            "override",
        ]
    }
];

export default TypescriptQuestion;


