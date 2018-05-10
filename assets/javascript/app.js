// Objects of questions and answers
var questions = {
    q1: "Which of these is not a programming  language?",
    q2: "Keyword to declare a variable in javascript?",
    q3: "What is the full form of DOM?",
    q4: "Which of these is a back-end programming language?"
};

var answers = {
    answer1: { 1: 'Python',
                2: 'C++',
                3: 'Mysql'
    },
    answer2: { 1: 'var',
                2: 'char',
                3: 'int'
    },
    answer3: { 1: 'Disc Operating System',
                2: 'Document Object Model',
                3: 'Data Object Model'
    },
    answer4: { 1: 'javaScript',
                2: 'CSS',
                3: 'Java'
    }
};

//Counter variables
var isCorrect = false;
var questCnt = 0;
var time = 0;
var corAnswer = 0;
var wrongCount = 0;

//used to reset the time
var interval;

//functions

function gamePlay(){
    // When the start button is clicked
    $('.strtBtn').on('click',function(){
        //hides the start button
        $('.startBtn').hide();

        // starts timer, starts ques 1
        timeCount();
        quest1();
        chooseCheckAnswer();
    });
}

function timeCount(){
    // sets time to 20 secs
    time = 20;
    // counts down
    interval = setInterval(timeRemaining,1000);
    // adds a new div to btn container with the text "Time remaining"
    $('.btnContainer').append("<div class='timeRem'>"+'Time Remaining: '+"<div class='timerCountDown'></div></div>");

}

// print  time remaining to the DOM and once its equal to 0, timer stops
function timeRemaining(){
    // decrement timeby 1
    time--;
    //prints time remaining
    $('.timerCountDown').text(time+' seconds');
    console.log(time);

    if(time === 0){
        console.log('time = '+time);
        //stops time at 0
        clearInterval(interval);
        //removes button answers
        $('button').remove();
        //removes questions
        $('.questionInput').remove();
        //display time's up
        $('.btnContainer').append('<div class="timeIsUp">Time is up</div>');
    }
}
function dispAns(){
    //first question
    if(questCnt == 1 && isCorrect === false)
    {
        //tracks the wrong answers
        wrongCount++;
        var newDiv = $('<div class="corAnsw">');
        correctAnswer = newDiv.text('WRONG!! the correct answer is '+answers.answer1[3]);
        $('.btnContainer').append(correctAnswer);
        // removes the correct answer after 5 secs
        //removes the time remaining and then calls the time remaining function to start the time again
        setTimeout(function(){
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');
            timeCount();
            quest2();
            chooseCheckAnswer();
        },3000);
    }
    // ques 1 and the nswer picked was correct
    else if(questCnt === 1 && isCorrect === true){
        //tracks right answer
        corAnswer++;
        //display correct
        var newDiv = $('<div class="corAnsw">');
        correctAnswer = newDiv.text('Correct!!');
        $('.btnContainer').append(correctAnswer);
        setTimeout(function(){
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');

            //reset time count
            timeCount();
            // create 2nd ques 
            quest2();
            chooseCheckAnswer();
        }, 3000);
    } 

    // second question
    else if(questCnt === 2 && isCorrect === false)
    {
        //tracks the wrong answers
        wrongCount++;
        var newDiv = $('<div class="corAnsw">');
        correctAnswer = newDiv.text('WRONG!! the correct answer is '+answers.answer2[1]);
        $('.btnContainer').append(correctAnswer);
        // removes the correct answer after 5 secs
        //removes the time remaining and then calls the time remaining function to start the time again
        setTimeout(function(){
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');
            timeCount();
            quest3();
            chooseCheckAnswer();
        },3000);
    }
    else if(questCnt === 2 && isCorrect === true){
        //tracks right answer
        corAnswer++;
        //display correct
        var newDiv = $('<div class="corAnsw">');
        correctAnswer = newDiv.text('Correct!!');
        $('.btnContainer').append(correctAnswer);
        setTimeout(function(){
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');

            //reset time count
            timeCount();
            // create 2nd ques 
            quest3();
            chooseCheckAnswer();
        }, 3000);
    } 
    else if(questCnt === 3 && isCorrect === false)
    {
        //tracks the wrong answers
        wrongCount++;
        var newDiv = $('<div class="corAnsw">');
        correctAnswer = newDiv.text('WRONG!! the correct answer is '+answers.answer2[2]);
        $('.btnContainer').append(correctAnswer);
        // removes the correct answer after 5 secs
        //removes the time remaining and then calls the time remaining function to start the time again
        setTimeout(function(){
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');
            timeCount();
            quest4();
            chooseCheckAnswer();
        },3000);
    }
    else if(questCnt === 3 && isCorrect === true){
        //tracks right answer
        corAnswer++;
        //display correct
        var newDiv = $('<div class="corAnsw">');
        correctAnswer = newDiv.text('Correct!!');
        $('.btnContainer').append(correctAnswer);
        setTimeout(function(){
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');

            //reset time count
            timeCount();
            // create 2nd ques 
            quest4();
            chooseCheckAnswer();
        }, 3000);
    }
    else if(questCnt === 4 && isCorrect === false)
    {
        //tracks the wrong answers
        wrongCount++;
        var newDiv = $('<div class="corAnsw">');
        correctAnswer = newDiv.text('WRONG!! the correct answer is '+answers.answer2[3]);
        $('.btnContainer').append(correctAnswer);
        // removes the correct answer after 5 secs
        //removes the time remaining and then calls the time remaining function to start the time again
        setTimeout(function(){
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');
            endGame();
        },3000);
    }
    else if(questCnt === 4 && isCorrect === true){
        //tracks right answer
        corAnswer++;
        //display correct
        var newDiv = $('<div class="corAnsw">');
        correctAnswer = newDiv.text('Correct!!');
        $('.btnContainer').append(correctAnswer);
        setTimeout(function(){
            isCorrect = false;
            $('div').remove('.corAnsw');
            $('div').remove('.timeRem');
            $('div').remove('.timeIsUp');

            endGame();
        }, 3000);
    }

}
function quest1(){
    questCnt++;
    $('.btnContainer').append('<div class="questionInput">'+questions.q1+'</div><br>'+
                              '<button class="answerVal btn-lg" value=0>'+answers.answer1[1]+'</button>'+
                              '<button class="answerVal btn-lg" value=0>'+answers.answer1[2]+'</button>'+
                              '<button class="answerVal btn-lg" value=1>'+answers.answer1[3]+'</button>');
}

function quest2(){
    questCnt++;
    $('.btnContainer').append('<div class="questionInput">'+questions.q2+'</div><br>'+
                              '<button class="answerVal btn-lg" value=1>'+answers.answer1[1]+'</button>'+
                              '<button class="answerVal btn-lg" value=0>'+answers.answer1[2]+'</button>'+
                              '<button class="answerVal btn-lg" value=0>'+answers.answer1[3]+'</button>');
}

function quest3(){
    questCnt++;
    $('.btnContainer').append('<div class="questionInput">'+questions.q3+'</div><br>'+
                              '<button class="answerVal btn-lg" value=1>'+answers.answer1[1]+'</button>'+
                              '<button class="answerVal btn-lg" value=0>'+answers.answer1[2]+'</button>'+
                              '<button class="answerVal btn-lg" value=0>'+answers.answer1[3]+'</button>');
}

function quest4(){
    questCnt++;
    $('.btnContainer').append('<div class="questionInput">'+questions.q4+'</div><br>')+
                              '<button class="answerVal btn-lg" value=0>'+answers.answer1[1]+'</button>'+
                              '<button class="answerVal btn-lg" value=0>'+answers.answer1[2]+'</button>'+
                              '<button class="answerVal btn-lg" value=0>'+answers.answer1[3]+'</button>');
}
function endGame(){
    $('.btnContainer').append('<div class="gameOver">All done, here is how you did!</div>'+
                                '<div class="gameOver">Correct: '+corAnswer+'</div>'+'<div class="gameOver">Wrong: '+wrongCount+'</div>')
    resetGame();
}

function resetGame(){
    $('.btnContainer').append('<button class="reser btn-lg">reset</button>')
    $('.reset').on("click",function(){
        $('div').remove('.gameOver');
        $('button').remove('.reset');
        //reset counters
        questCnt = 0;
        corAnswer = 0;
        wrongCount = 0;
        isCorrect = false;

        timeCount();
        quest2();
        chooseCheckAnswer();
    });
}
function chooseCheckAnswer(){
    $('#button').on('click', function(){
        var checkRightAnswer = $(this).attr('value');
        console.log(checkRightAnswer);
        clearInterval(interval);
        if(checkRightAnswer == 1){
            
        }
    })
}



