var number = 59;
            var intervalId;
            var count = 0;
            var choices;
            var correct = 0;
            var radioValue;

            // make an array or object of ques and answers
            var questions = ["Which of these is not a programming  language?",
                            "Keyword to declare a variable in javascript?",
                            "What is the full form of DOM?",
                            "Which of these is a back-end programming language?"
                            ];
                                
            var answers = [
                            ['Python','C++','Mysql','Mysql'],
                            ['var','char','int','var'],
                            ['Disc Operating System','Document Object Model','Data Object Model','Document Object Model'],
                            ['javaScript','CSS','Java','Java']
                        ];

            // click to start the game
                // make a button in jquery
            $(".test_status").html("<h1>Click the start button to load the game!!</h1>");
            $(".test").html("<button id='start-button'>START</button>");
            
            // on button click load the questions
            $("#start-button").on("click",function(){
                // start the timer
                timer();
                
                //load the question and options
                loadGame();    
            })

            function timer(){
                intervalId = setInterval(decrement, 1000);
            }

            function decrement(){
                number--;
                $(".timer").html("<h2>00:"+number+"</h2>");
                if(number === 0){
                    stop();
                    alert("TIME IS UP!!");
                    result();
                }
            }

            function stop(){
                clearInterval(intervalId);
            }

            function loadGame(){
                // display first question and then question++
                $(".test_status").html("<h1>Question "+(count+1)+" of "+questions.length+":</h1>");

                $(".test").html(questions[count]+"<br><br>");
                
                // when all the questions have been answered display result
                if(count > 3){
                    result();
                }

                
                else{
                //for(var i=0; i<3; i++){
                    $(".test").append("<input type='radio' name='choices' id='options' value='A'>"+answers[count][0]+"<br><br>");
                    $(".test").append("<input type='radio' name='choices' id='options' value='B'>"+answers[count][1]+"<br><br>");
                    $(".test").append("<input type='radio' name='choices' id='options' value='C'>"+answers[count][2]+"<br><br>");
                //}
                    $("input[type='radio']").click(function(){
                        radioValue = $("input[name='choices']:checked").val(); 
                    })
                
                // create the submit button
                $(".test").append("<button id='submit-button'>SUBMIT</button>");
                $("#submit-button").click(function(){
                    count++;
                    checkAnswer();
                });
                }
            }

            function result(){
                console.log(correct);
                stop();
                $(".timer").html("<h2>Results</h2>");
                $(".test").html("<h2>You got "+correct+" of "+questions.length+" questions correct!!</h2>")
            }           

            

            function checkAnswer(){
                if(count==1 && radioValue=='C'){
                    correct++;
                }

                if(count==2 && radioValue=='A'){
                    correct++;
                }

                if(count==3 && radioValue=='B'){
                    correct++;
                }

                if(count==4 && radioValue=='C'){
                    correct++;
                }

                loadGame();
            }