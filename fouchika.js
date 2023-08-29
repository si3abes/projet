const questions = [
    {
      question: "ism sa7bit fouchika?",
      options: ["fathila", "jamila  ", "ibtisem"],
      answer: 0
    },
    {
      question: "",
      options: ["300", "320", "420"],
      answer: 0
    },
    {
      question: "chnawa role te3ou fi nedi a7ibe2 freid",
      options: ["osteth jemi3i", "amin il 5asne", "amin il mal "],
      answer: 2
    },
    {
      question: "9addech ta sab9a l3amk la5thir 'ijjennen'",
      options: ["180", "30", "20", "40"],
      answer: 1
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