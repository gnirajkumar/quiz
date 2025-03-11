document.addEventListener("DOMContentLoaded", function () {
  const classSelectElem = document.getElementById("classSelect");
  const subjectSelectElem = document.getElementById("subjectSelect");
  const topicSelectElem = document.getElementById("topicSelect");
  const startQuizButton = document.getElementById("startQuiz");

  console.log("Script loaded and DOM fully loaded");

  // When the class is changed, populate the subject select box:
  classSelectElem.addEventListener("change", function () {
    const classValue = this.value;
    console.log("Class selected:", classValue);
    // Reset subjects and topics
    subjectSelectElem.innerHTML = '<option value="">Select Subject</option>';
    topicSelectElem.innerHTML = '<option value="">Select Topic</option>';
    
    subjectSelectElem.disabled = true;
    topicSelectElem.disabled = true;
    startQuizButton.disabled = true;

    if (classValue && data[classValue]) {
      console.log("Populating subjects for class:", classValue);
      // Populate subjects
      for (let subject in data[classValue]) {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        subjectSelectElem.appendChild(option);
      }
      subjectSelectElem.disabled = false;
    }
  });

  // When the subject is changed, populate the topic select box:
  subjectSelectElem.addEventListener("change", function () {
    const classValue = classSelectElem.value;
    const subjectValue = this.value;
    console.log("Subject selected:", subjectValue);
    // Reset topics
    topicSelectElem.innerHTML = '<option value="">Select Topic</option>';
    topicSelectElem.disabled = true;
    startQuizButton.disabled = true;

    if (classValue && subjectValue && data[classValue][subjectValue]) {
      console.log("Populating topics for subject:", subjectValue);
      // Populate topics
      for (let topic of data[classValue][subjectValue]) {
        const option = document.createElement("option");
        option.value = topic;
        option.textContent = topic;
        topicSelectElem.appendChild(option);
      }
      topicSelectElem.disabled = false;
    }
  });

  // Enable Start Quiz button when a topic is selected:
  topicSelectElem.addEventListener("change", function () {
    const classValue = classSelectElem.value;
    const subjectValue = subjectSelectElem.value;
    const topicValue = this.value;
    console.log("Topic selected:", topicValue);

    if (classValue && subjectValue && topicValue) {
      startQuizButton.disabled = false;
    } else {
      startQuizButton.disabled = true;
    }
  });

  // Start Quiz button click event:
  startQuizButton.addEventListener("click", function () {
    const selectedClass = classSelectElem.value;
    const selectedSubject = subjectSelectElem.value;
    const selectedTopic = topicSelectElem.value;
    
    if (selectedClass && selectedSubject && selectedTopic) {
      localStorage.setItem("selectedClass", selectedClass);
      localStorage.setItem("selectedSubject", selectedSubject);
      localStorage.setItem("selectedTopic", selectedTopic);
      window.location.href = "quiz.html";
    } else {
      alert("Please select Class, Subject, and Topic!");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const classSelectElem = document.getElementById("classSelect");
  const subjectSelectElem = document.getElementById("subjectSelect");
  const topicSelectElem = document.getElementById("topicSelect");
  const startQuizButton = document.getElementById("startQuiz");

  // When the class is changed, populate the subject select box:
  classSelectElem.addEventListener("change", function () {
    const classValue = this.value;
    // Reset subjects and topics
    subjectSelectElem.innerHTML = '<option value="">Select Subject</option>';
    topicSelectElem.innerHTML = '<option value="">Select Topic</option>';
    
    subjectSelectElem.disabled = true;
    topicSelectElem.disabled = true;
    startQuizButton.disabled = true;

    if (classValue && data[classValue]) {
      // Populate subjects
      for (let subject in data[classValue]) {
        const option = document.createElement("option");
        option.value = subject;
        option.textContent = subject;
        subjectSelectElem.appendChild(option);
      }
      subjectSelectElem.disabled = false;
    }
  });

  // When the subject is changed, populate the topic select box:
  subjectSelectElem.addEventListener("change", function () {
    const classValue = classSelectElem.value;
    const subjectValue = this.value;
    // Reset topics
    topicSelectElem.innerHTML = '<option value="">Select Topic</option>';
    topicSelectElem.disabled = true;
    startQuizButton.disabled = true;

    if (classValue && subjectValue && data[classValue][subjectValue]) {
      // Populate topics
      for (let topic of data[classValue][subjectValue]) {
        const option = document.createElement("option");
        option.value = topic;
        option.textContent = topic;
        topicSelectElem.appendChild(option);
      }
      topicSelectElem.disabled = false;
    }
  });

  // Enable Start Quiz button when a topic is selected:
  topicSelectElem.addEventListener("change", function () {
    const classValue = classSelectElem.value;
    const subjectValue = subjectSelectElem.value;
    const topicValue = this.value;

    if (classValue && subjectValue && topicValue) {
      startQuizButton.disabled = false;
    } else {
      startQuizButton.disabled = true;
    }
  });

  // Start Quiz button click event:
  startQuizButton.addEventListener("click", function () {
    const selectedClass = classSelectElem.value;
    const selectedSubject = subjectSelectElem.value;
    const selectedTopic = topicSelectElem.value;
    
    if (selectedClass && selectedSubject && selectedTopic) {
      localStorage.setItem("selectedClass", selectedClass);
      localStorage.setItem("selectedSubject", selectedSubject);
      localStorage.setItem("selectedTopic", selectedTopic);
      window.location.href = "quiz.html";
    } else {
      alert("Please select Class, Subject, and Topic!");
    }
  });
});
