const cardList  = [
    card1 = {
        question: 'What does DOM stand for?',
        answer: 'Document Object Model'
    },
    card2 = {
        question: 'What are primitive data types?',
        answer: 'Number, string, Boolean'
    },
    card3 = {
        question: 'How can you acces an Element using its ID using JS?',
        answer: 'call getElementById on the document'
    },
    card4 = {
        question: 'What method do you use to create an element?',
        answer: 'createElement'
    }
]

const Question = document.getElementById('question_line')
const Answer = document.getElementById('answer_line')
const next = document.getElementById('next_button')

let i = 1

Question.style.display = 'block'

Question.innerHTML = cardList[0].question
Answer.innerHTML = cardList[0].answer

function next_func(){
    if(i < cardList.length){
        Question.innerHTML = cardList[i].question
        Answer.innerHTML = cardList[i].answer
        i++
    }
    else(alert("That's it, you finished all the questions!"))
}

function flipIt(){

    (Question.style.display === 'block') ? (Question.style.display = 'none', Answer.style.display = 'block') : (Question.style.display = 'block', Answer.style.display = 'none');
}