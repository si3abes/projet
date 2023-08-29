const questions = [
    {
      question: "9addedch min m8arfa talk klehe sbou3i",
      options: ["il 7okke il kol", "m8arfe ", "zouz m8aref"],
      answer: 2
    },
    {
      question: "9addech 5the fi spot ta3 dandouk",
      options: ["190", "200", "100"],
      answer: 1
    },
    {
      question: "9addech chahritou fi 2008",
      options: ["120", "100", "129.96"],
      answer: 2
    },
    {
      question: "chawa zad lil lablebi ki tla3 mich tayb",
      options: ["9ariis", "hrisa 3arbi ", "korkom", "kamoun"],
      answer: 3
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionElements = document.querySelectorAll(".option span");
  const submitButton = document.getElementById("submitBtn");
  const resultElement = document.getElementById("result");
  
  function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    optionElements.forEach((option, index) => {
      option.textContent = current.options[index];
    });
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
      const userAnswer = parseInt(selectedOption.value);
      if (userAnswer === questions[currentQuestion].answer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }
   
  }

  
 

  
  function showResult() {
    quiz.style.display = "none";
    resultElement.textContent = `You scored ${score} out of ${questions.length} questions.`;
    resultElement.style.display = "block";
  }
  
  submitButton.addEventListener("click", checkAnswer);
  
  loadQuestion();