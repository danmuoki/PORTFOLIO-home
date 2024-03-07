
  const quizData = [
    {
      question: "The largest ocean in the world?",
      options: ["Percific ocean","Atlantic ocean", "Indian ocean"],
      answer: "Percific ocean"
    },
    {
      question: "When was kenya earn its indipendence?",
      options: ["2008", "1995", "1960", "1963"],
      answer: "1963"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Saturn", "Jupiter", "Mars"],
      answer: "Jupiter"
    }
  ];

  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submitBtn');

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    const question = quizData[currentQuestion];
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
      const optionElement = document.createElement('label');
      optionElement.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
      optionsElement.appendChild(optionElement);
    });
  }

  function showResult() {
    resultContainer.style.display = 'block';
    resultContainer.querySelector('#score').textContent = `You scored ${score} out of ${quizData.length}.`;
  }

  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) return;
    if (selectedOption.value === quizData[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }

  loadQuestion();

  submitButton.addEventListener('click', checkAnswer);