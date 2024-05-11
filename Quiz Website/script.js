const questions = [
    {
        'que': 'Which of the following is a markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    }
    ,
    {
        'que': 'What year was JavaScript launched',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'none of the above',
        'correct': 'b'
    },

    {
        'que': 'What does CSS stands for',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading style sheet',
        'c': 'Jason object Notation',
        'd': 'none of the above',
        'correct': 'b'
    }
    ,
    {
        'que': 'What is the full form of OOP',
        'a': 'Object of Programming',
        'b': 'Object of philosphy',
        'c': 'Object Oriented Programming',
        'd': 'none of the above',
        'correct': 'c'
    }
    ,{
        'que': 'Which of the following is a framework of javaScript',
        'a': 'ReactJs',
        'b': 'Nummy',
        'c': 'Swift',
        'd': 'all of these',
        'correct': 'a'
    }
    
]
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById('queBox');
const optionInput = document.querySelectorAll('.optionss')
console.log(optionInput);
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    console.log(data);
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    }
    else wrong++;

    index++;
    loadQuestion(index);
    return;

}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if (input.checked)
                answer = input.value;

        })
    return answer;
}

const reset = () => {
    optionInput.forEach((input) => {
        input.checked = false;
    })
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> ThankYou for palying the Quiz </h3>
    <h2> ${right}/${total} are correct </h2>
    <h1>😊😊😊😊😊😊😊</h1>
    </div>`;

}
loadQuestion();
