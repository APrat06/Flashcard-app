const cardLists  = [
    dev = [    
        card1 = {
            question: 'What does DOM stand for?',
            answer: 'Document Object Model'
        },
        card2 = {
            question: 'What are the different primitive data types?',
            answer: 'Number, string, Boolean, Null, Undefined'
        },
        card3 = {
            question: 'How can you acces an Element using its ID using JS?',
            answer: 'Call getElementById on the document'
        },
        card4 = {
            question: 'What method do you use to create an element?',
            answer: 'CreateElement'
        }
    ],
    other = [    
        card1 = {
            question: 'What color is an apple?',
            answer: 'green, red, yellow, grey'
        },
        card2 = {
            question: 'What is tea?',
            answer: 'A plant from which we make a drink'
        },
        card3 = {
            question: 'Name some cuttlery',
            answer: 'spoon, fork, knife'
        },
        card4 = {
            question: 'Why is the sky blue?',
            answer: 'Because of the absorbtion spectrum of N2'
        }
    ]

]

const Question = document.getElementById('question_line')
const Answer = document.getElementById('answer_line')
const btn_cat = document.getElementById("category")

let randomNumber = Math.floor(Math.random * cardLists[0].length)

Question.style.display = 'block'

Question.innerHTML = cardLists[0][0].question
Answer.innerHTML = cardLists[0][0].answer

function next_func(){

    const randomNumber = Math.floor(Math.random() * cardLists[0].length)

    if(btn_cat.innerHTML === "Switch to other"){
        Question.innerHTML = cardLists[0][randomNumber].question
        Answer.innerHTML = cardLists[0][randomNumber].answer
    } else{
        Question.innerHTML = cardLists[1][randomNumber].question
        Answer.innerHTML = cardLists[1][randomNumber].answer
    }
    
    Question.style.display = 'block'
    Answer.style.display = 'none'
}

function flipIt(){
    (Question.style.display === 'block') ? (Question.style.display = 'none', Answer.style.display = 'block') : (Question.style.display = 'block', Answer.style.display = 'none');
}

btn_cat.addEventListener('click', ()=>{

    Question.style.display = 'block'
    Answer.style.display = 'none'

    if(btn_cat.innerHTML === "Switch to other"){
        btn_cat.innerHTML = "Switch to dev"
        Question.innerHTML = cardLists[1][0].question
        Answer.innerHTML = cardLists[1][0].answer
    } else{
        btn_cat.innerHTML = "Switch to other"
        Question.innerHTML = cardLists[0][0].question
        Answer.innerHTML = cardLists[0][0].answer
    }
})