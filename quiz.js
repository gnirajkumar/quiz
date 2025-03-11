document.addEventListener("DOMContentLoaded", () => {
    const selectedClass = localStorage.getItem("selectedClass");
    const selectedSubject = localStorage.getItem("selectedSubject");
    const selectedTopic = localStorage.getItem("selectedTopic");

    if (!selectedClass || !selectedSubject || !selectedTopic || !questions[selectedClass][selectedSubject][selectedTopic]) {
        alert("Invalid selection. Please start the quiz again.");
        window.location.href = "index.html";
        return;
    }

    document.getElementById("quizTitle").innerText = `${selectedClass} - ${selectedSubject} - ${selectedTopic}`;

    let currentQuestionIndex = 0;
    let score = 0;
    let timeLeft = 4500; // 1-minute timer
    let timer;

    function loadQuestion() {
        if (currentQuestionIndex >= questions[selectedClass][selectedSubject][selectedTopic].length) {
            submitQuiz();
            return;
        }

        const question = questions[selectedClass][selectedSubject][selectedTopic][currentQuestionIndex];
        document.getElementById("questionText").innerText = question.question;

        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";

        question.options.forEach((option, index) => {
            const btn = document.createElement("div");
            btn.innerText = option;
            btn.classList.add("option");
            btn.onclick = () => checkAnswer(index, btn);
            optionsDiv.appendChild(btn);
        });

        document.getElementById("explanationBox").classList.add("hidden");
    }

    function checkAnswer(selectedIndex, btn) {
        const correctIndex = questions[selectedClass][selectedSubject][selectedTopic][currentQuestionIndex].correct;

        if (selectedIndex === correctIndex) {
            btn.classList.add("correct");
            score++;
        } else {
            btn.classList.add("wrong");
            showExplanation();
        }

        document.querySelectorAll(".option").forEach(option => option.onclick = null);
    }

    function showExplanation() {
        document.getElementById("explanationText").innerText = questions[selectedClass][selectedSubject][selectedTopic][currentQuestionIndex].explanation;
        document.getElementById("explanationBox").classList.remove("hidden");
    }

    document.getElementById("nextBtn").addEventListener("click", () => {
        currentQuestionIndex++;
        loadQuestion();
    });

    document.getElementById("backBtn").addEventListener("click", () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion();
        }
    });

    document.getElementById("submitQuiz").addEventListener("click", submitQuiz);

    function submitQuiz() {
        clearInterval(timer);
        alert(`Quiz Completed! Your Score: ${score}/${questions[selectedClass][selectedSubject][selectedTopic].length}`);
        window.location.href = "index.html";
    }

    document.getElementById("homeBtn").addEventListener("click", () => {
        window.location.href = "index.html";
    });

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timeLeft").innerText = `00:${timeLeft < 10 ? "0" + timeLeft : timeLeft}`;
        if (timeLeft === 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);

    loadQuestion();
});
