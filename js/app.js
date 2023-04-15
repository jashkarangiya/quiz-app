const question = [{
        'que': "Which of the following is not a character of One Piece?",
        'a': "Vinsmoke Sanji",
        "b": "Nami",
        "c": "Levi Ackerman",
        "d": "Xebec D shanks.",
        'correct': "c"
    },
    {
        'que': "Who was Naruto love?",
        'a': "Sasuke Uchicha",
        "b": "Sakura Haruno",
        "c": "Hinata Hyuga",
        "d": "TenTen",
        'correct': "c"
    },
    {
        'que': "Who breaks Wall Maria?",
        'a': "Eren Yeager",
        "b": "Reiner Braun",
        "c": "Zeke Yeager",
        "d": "Levi Ackerman",
        'correct': "b"
    },
    {
        'que': "What color was Tanjiro's Sword?",
        'a': "Black",
        "b": "Pink",
        "c": "Yellow",
        "d": "Red",
        'correct': "a"
    },
    {
        'que': "Who was Light Yagami's final opponent?",
        'a': "L",
        "b": "B",
        "c": "Mello",
        "d": "Near",
        'correct': "d"
    }
]

let index = 0;
let total = question.length;
let right = 0,
    wrong = 0;

const quesBox = document.getElementById('quesBox');
const optionsInput = document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }

    reset();


    const data = question[index];
    // console.l
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = question[index]
    const ans = getAnswer()

    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}


const getAnswer = () => {
    let answer;
    optionsInput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;

            }
        }
    )
    return answer;
}

const reset = () => {
    optionsInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    var gif
    if (right == 0) {
        gif = "./image/the-owl-house-owl-house.gif"
    } else if (right > 0 && right < 3) {
        gif = "./image/deathnote.gif"
    } else {
        gif = "image/dancing-levi-hugebacher.gif"
    }
    document.getElementById("box").innerHTML = `
    <div class="Result">
    <h1>Quiz Result</h1>
    <h3>Thank you for playing quiz!!</h3>
    <h4>${right} / ${total} are correct!!</h4> <br>
    <img src=${gif} alt="GIF"class="center">
    </div>
    `
}


// Initial call
loadQuestion();