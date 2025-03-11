const data = {
  "Class 1": {
    "Mathematics": ["Numbers", "Addition", "Subtraction"],  
    "Science": ["Plants", "Animals", "Weather"],
    "English": ["Alphabet", "Words", "Sentences"]
  },
  "Class 2": {
    "Mathematics": ["Multiplication", "Division", "Fractions"],
    "Science": ["Human Body", "Space", "Forces"],
    "English": ["Grammar", "Reading", "Writing"]
  },
  "Class 3": {
    "Mathematics": ["Numbers", "Addition", "Subtraction", "Multiplication", "Division", "Fraction", "Geomatrical Shapes", "Measurement", "Money", "Time", "Data Handling", "Paterns"],
    "Science": ["Matter", "Energy", "Ecosystems"],
    "English": ["Poetry", "Stories", "Comprehension"]
  },
  "Class 4": {
    "Mathematics": ["Algebra", "Measurement", "Data Handling"],
    "Science": ["Electricity", "Magnetism", "Sound"],
    "English": ["Essays", "Letters", "Reports"]
  },
  "Class 5": {
    "Mathematics": ["Probability", "Statistics", "Angles"],
    "Science": ["Light", "Chemistry", "Biology"],
    "English": ["Debates", "Speeches", "Drama"]
  }
};

const questions = {
  "Class 1": {
    "Mathematics": {
      "Numbers":[
        { question: "What is 1 + 1?", options: ["1", "2", "3", "4"], correct: 1, explanation: "1 + 1 equals 2." },
        { question: "What is 2 + 2?", options: ["2", "3", "4", "5"], correct: 2, explanation: "2 + 2 equals 4." },
        { question: "What is 5 + 3?", options: ["7", "8", "9", "10"], correct: 1, explanation: "5 + 3 equals 8." },
        { question: "What is 0 + 6?", options: ["5", "6", "7", "8"], correct: 1, explanation: "0 + 6 equals 6." }
      ],

      "Addition": [
        { question: "What is 1 + 1?", options: ["1", "2", "3", "4"], correct: 1, explanation: "1 + 1 equals 2." },
        { question: "What is 2 + 2?", options: ["2", "3", "4", "5"], correct: 2, explanation: "2 + 2 equals 4." },
        { question: "What is 5 + 3?", options: ["7", "8", "9", "10"], correct: 1, explanation: "5 + 3 equals 8." },
        { question: "What is 0 + 6?", options: ["5", "6", "7", "8"], correct: 1, explanation: "0 + 6 equals 6." },
        { question: "What is 7 + 1?", options: ["7", "8", "9", "10"], correct: 1, explanation: "7 + 1 equals 8." },
        { question: "What is 1 + 1?", options: ["1", "2", "3", "4"], correct: 1, explanation: "1 + 1 equals 2." },
        { question: "What is 2 + 2?", options: ["2", "3", "4", "5"], correct: 2, explanation: "2 + 2 equals 4." },
        { question: "What is 5 + 3?", options: ["7", "8", "9", "10"], correct: 1, explanation: "5 + 3 equals 8." },
        { question: "What is 0 + 6?", options: ["5", "6", "7", "8"], correct: 1, explanation: "0 + 6 equals 6." },
        { question: "What is 7 + 1?", options: ["7", "8", "9", "10"], correct: 1, explanation: "7 + 1 equals 8." },
        { question: "What is 3 + 2?", options: ["4", "5", "6", "7"], correct: 1, explanation: "3 + 2 equals 5." },
        { question: "What is 4 + 4?", options: ["6", "7", "8", "9"], correct: 2, explanation: "4 + 4 equals 8." },
        { question: "What is 6 + 3?", options: ["8", "9", "10", "11"], correct: 1, explanation: "6 + 3 equals 9." },
        { question: "What is 1 + 7?", options: ["7", "8", "9", "10"], correct: 1, explanation: "1 + 7 equals 8." },
        { question: "What is 2 + 5?", options: ["6", "7", "8", "9"], correct: 1, explanation: "2 + 5 equals 7." },
        { question: "What is 3 + 6?", options: ["8", "9", "10", "11"], correct: 1, explanation: "3 + 6 equals 9." },
        { question: "What is 4 + 1?", options: ["4", "5", "6", "7"], correct: 1, explanation: "4 + 1 equals 5." },
        { question: "What is 5 + 5?", options: ["9", "10", "11", "12"], correct: 1, explanation: "5 + 5 equals 10." },
        { question: "What is 6 + 2?", options: ["7", "8", "9", "10"], correct: 1, explanation: "6 + 2 equals 8." },
        { question: "What is 7 + 3?", options: ["9", "10", "11", "12"], correct: 1, explanation: "7 + 3 equals 10." },
        { question: "What is 8 + 1?", options: ["8", "9", "10", "11"], correct: 1, explanation: "8 + 1 equals 9." },
        { question: "What is 9 + 0?", options: ["8", "9", "10", "11"], correct: 1, explanation: "9 + 0 equals 9." },
        { question: "What is 2 + 4?", options: ["5", "6", "7", "8"], correct: 1, explanation: "2 + 4 equals 6." },
        { question: "What is 3 + 5?", options: ["7", "8", "9", "10"], correct: 1, explanation: "3 + 5 equals 8." },
        { question: "What is 4 + 2?", options: ["5", "6", "7", "8"], correct: 1, explanation: "4 + 2 equals 6." },
        { question: "What is 5 + 3?", options: ["7", "8", "9", "10"], correct: 1, explanation: "5 + 3 equals 8." },
        { question: "What is 6 + 1?", options: ["6", "7", "8", "9"], correct: 1, explanation: "6 + 1 equals 7." },
        { question: "What is 7 + 2?", options: ["8", "9", "10", "11"], correct: 1, explanation: "7 + 2 equals 9." },
        { question: "What is 8 + 3?", options: ["10", "11", "12", "13"], correct: 1, explanation: "8 + 3 equals 11." },
        { question: "What is 9 + 1?", options: ["9", "10", "11", "12"], correct: 1, explanation: "9 + 1 equals 10." },
        { question: "What is 1 + 2?", options: ["2", "3", "4", "5"], correct: 1, explanation: "1 + 2 equals 3." },
        { question: "What is 2 + 3?", options: ["4", "5", "6", "7"], correct: 1, explanation: "2 + 3 equals 5." },
        { question: "What is 3 + 4?", options: ["6", "7", "8", "9"], correct: 1, explanation: "3 + 4 equals 7." },
        { question: "What is 4 + 5?", options: ["8", "9", "10", "11"], correct: 1, explanation: "4 + 5 equals 9." },
        { question: "What is 5 + 6?", options: ["10", "11", "12", "13"], correct: 1, explanation: "5 + 6 equals 11." },
        { question: "What is 6 + 7?", options: ["12", "13", "14", "15"], correct: 1, explanation: "6 + 7 equals 13." },
        { question: "What is 7 + 8?", options: ["14", "15", "16", "17"], correct: 1, explanation: "7 + 8 equals 15." },
        { question: "What is 8 + 9?", options: ["16", "17", "18", "19"], correct: 1, explanation: "8 + 9 equals 17." },
        { question: "What is 9 + 2?", options: ["10", "11", "12", "13"], correct: 1, explanation: "9 + 2 equals 11." },
        { question: "What is 1 + 3?", options: ["3", "4", "5", "6"], correct: 1, explanation: "1 + 3 equals 4." },
        { question: "What is 2 + 4?", options: ["5", "6", "7", "8"], correct: 1, explanation: "2 + 4 equals 6." },
        { question: "What is 3 + 5?", options: ["7", "8", "9", "10"], correct: 1, explanation: "3 + 5 equals 8." },
        { question: "What is 4 + 6?", options: ["9", "10", "11", "12"], correct: 1, explanation: "4 + 6 equals 10." },
        { question: "What is 5 + 7?", options: ["11", "12", "13", "14"], correct: 1, explanation: "5 + 7 equals 12." },
        { question: "What is 6 + 8?", options: ["13", "14", "15", "16"], correct: 1, explanation: "6 + 8 equals 14." },
        { question: "What is 7 + 9?", options: ["15", "16", "17", "18"], correct: 1, explanation: "7 + 9 equals 16." },
        { question: "What is 8 + 2?", options: ["9", "10", "11", "12"], correct: 1, explanation: "8 + 2 equals 10." },
        { question: "What is 9 + 3?", options: ["11", "12", "13", "14"], correct: 1, explanation: "9 + 3 equals 12." },
        { question: "What is 1 + 4?", options: ["4", "5", "6", "7"], correct: 1, explanation: "1 + 4 equals 5." },
        { question: "What is 2 + 5?", options: ["6", "7", "8", "9"], correct: 1, explanation: "2 + 5 equals 7." },
        { question: "What is 3 + 6?", options: ["8", "9", "10", "11"], correct: 1, explanation: "3 + 6 equals 9." },
        { question: "What is 4 + 7?", options: ["10", "11", "12", "13"], correct: 1, explanation: "4 + 7 equals 11." },
        { question: "What is 5 + 8?", options: ["12", "13", "14", "15"], correct: 1, explanation: "5 + 8 equals 13." },
        { question: "What is 6 + 9?", options: ["14", "15", "16", "17"], correct: 1, explanation: "6 + 9 equals 15." },
        { question: "What is 7 + 1?", options: ["7", "8", "9", "10"], correct: 1, explanation: "7 + 1 equals 8." },
        { question: "What is 8 + 4?", options: ["11", "12", "13", "14"], correct: 1, explanation: "8 + 4 equals 12." },
        { question: "What is 9 + 5?", options: ["13", "14", "15", "16"], correct: 1, explanation: "9 + 5 equals 14." },
        { question: "What is 1 + 5?", options: ["5", "6", "7", "8"], correct: 1, explanation: "1 + 5 equals 6." },
        { question: "What is 2 + 6?", options: ["7", "8", "9", "10"], correct: 1, explanation: "2 + 6 equals 8." },
        { question: "What is 3 + 7?", options: ["9", "10", "11", "12"], correct: 1, explanation: "3 + 7 equals 10." },
        { question: "What is 4 + 8?", options: ["11", "12", "13", "14"], correct: 1, explanation: "4 + 8 equals 12." },
        { question: "What is 5 + 9?", options: ["13", "14", "15", "16"], correct: 1, explanation: "5 + 9 equals 14." },
        { question: "What is 6 + 1?", options: ["6", "7", "8", "9"], correct: 1, explanation: "6 + 1 equals 7." },
        { question: "What is 7 + 2?", options: ["8", "9", "10", "11"], correct: 1, explanation: "7 + 2 equals 9." },
        { question: "What is 8 + 3?", options: ["10", "11", "12", "13"], correct: 1, explanation: "8 + 3 equals 11." },
        { question: "What is 9 + 4?", options: ["12", "13", "14", "15"], correct: 1, explanation: "9 + 4 equals 13." },
        { question: "What is 1 + 6?", options: ["6", "7", "8", "9"], correct: 1, explanation: "1 + 6 equals 7." },
        { question: "What is 2 + 7?", options: ["8", "9", "10", "11"], correct: 1, explanation: "2 + 7 equals 9." },
        { question: "What is 3 + 8?", options: ["10", "11", "12", "13"], correct: 1, explanation: "3 + 8 equals 11." },
        { question: "What is 4 + 9?", options: ["12", "13", "14", "15"], correct: 1, explanation: "4 + 9 equals 13." },
        { question: "What is 5 + 1?", options: ["5", "6", "7", "8"], correct: 1, explanation: "5 + 1 equals 6." },
        { question: "What is 6 + 2?", options: ["7", "8", "9", "10"], correct: 1, explanation: "6 + 2 equals 8." },
        { question: "What is 7 + 3?", options: ["9", "10", "11", "12"], correct: 1, explanation: "7 + 3 equals 10." },
        { question: "What is 8 + 4?", options: ["11", "12", "13", "14"], correct: 1, explanation: "8 + 4 equals 12." },
        { question: "What is 9 + 5?", options: ["13", "14", "15", "16"], correct: 1, explanation: "9 + 5 equals 14." },
        { question: "What is 1 + 7?", options: ["7", "8", "9", "10"], correct: 1, explanation: "1 + 7 equals 8." },
        { question: "What is 2 + 8?", options: ["9", "10", "11", "12"], correct: 1, explanation: "2 + 8 equals 10." },
        { question: "What is 3 + 9?", options: ["11", "12", "13", "14"], correct: 1, explanation: "3 + 9 equals 12." },
        { question: "What is 4 + 1?", options: ["4", "5", "6", "7"], correct: 1, explanation: "4 + 1 equals 5." },
        { question: "What is 5 + 2?", options: ["6", "7", "8", "9"], correct: 1, explanation: "5 + 2 equals 7." },
        { question: "What is 6 + 3?", options: ["8", "9", "10", "11"], correct: 1, explanation: "6 + 3 equals 9." },
        { question: "What is 7 + 4?", options: ["10", "11", "12", "13"], correct: 1, explanation: "7 + 4 equals 11." },
        { question: "What is 8 + 5?", options: ["12", "13", "14", "15"], correct: 1, explanation: "8 + 5 equals 13." },
        { question: "What is 9 + 6?", options: ["14", "15", "16", "17"], correct: 1, explanation: "9 + 6 equals 15." },
        { question: "What is 1 + 8?", options: ["8", "9", "10", "11"], correct: 1, explanation: "1 + 8 equals 9." },
        { question: "What is 2 + 9?", options: ["10", "11", "12", "13"], correct: 1, explanation: "2 + 9 equals 11." },
        { question: "What is 3 + 1?", options: ["3", "4", "5", "6"], correct: 1, explanation: "3 + 1 equals 4." },
        { question: "What is 4 + 2?", options: ["5", "6", "7", "8"], correct: 1, explanation: "4 + 2 equals 6." },
        { question: "What is 5 + 3?", options: ["7", "8", "9", "10"], correct: 1, explanation: "5 + 3 equals 8." },
        { question: "What is 6 + 4?", options: ["9", "10", "11", "12"], correct: 1, explanation: "6 + 4 equals 10." },
        { question: "What is 7 + 5?", options: ["11", "12", "13", "14"], correct: 1, explanation: "7 + 5 equals 12." },
        { question: "What is 8 + 6?", options: ["13", "14", "15", "16"], correct: 1, explanation: "8 + 6 equals 14." },
        { question: "What is 9 + 7?", options: ["15", "16", "17", "18"], correct: 1, explanation: "9 + 7 equals 16." },
        { question: "What is 1 + 9?", options: ["9", "10", "11", "12"], correct: 1, explanation: "1 + 9 equals 10." },
        { question: "What is 2 + 1?", options: ["2", "3", "4", "5"], correct: 1, explanation: "2 + 1 equals 3." },
        { question: "What is 3 + 2?", options: ["4", "5", "6", "7"], correct: 1, explanation: "3 + 2 equals 5." },
        { question: "What is 4 + 3?", options: ["6", "7", "8", "9"], correct: 1, explanation: "4 + 3 equals 7." },
      ],
      "Subtraction": [
        { question: "What is 5 - 3?", options: ["1", "2", "3", "4"], correct: 1, explanation: "5 - 3 equals 2." },
        { question: "What is 7 - 4?", options: ["2", "3", "4", "5"], correct: 1, explanation: "7 - 4 equals 3." },
        { question: "What is 9 - 6?", options: ["2", "3", "4", "5"], correct: 1, explanation: "9 - 6 equals 3." },
        { question: "What is 8 - 2?", options: ["5", "6", "7", "8"], correct: 1, explanation: "8 - 2 equals 6." },
        { question: "What is 6 - 1?", options: ["4", "5", "6", "7"], correct: 1, explanation: "6 - 1 equals 5." },
        { question: "What is 10 - 5?", options: ["4", "5", "6", "7"], correct: 1, explanation: "10 - 5 equals 5." },
        { question: "What is 4 - 2?", options: ["1", "2", "3", "4"], correct: 1, explanation: "4 - 2 equals 2." },
        { question: "What is 3 - 1?", options: ["1", "2", "3", "4"], correct: 1, explanation: "3 - 1 equals 2." },
        { question: "What is 8 - 3?", options: ["4", "5", "6", "7"], correct: 1, explanation: "8 - 3 equals 5." },
        { question: "What is 7 - 2?", options: ["4", "5", "6", "7"], correct: 1, explanation: "7 - 2 equals 5." },
        { question: "What is 6 - 4?", options: ["1", "2", "3", "4"], correct: 1, explanation: "6 - 4 equals 2." },
        { question: "What is 5 - 1?", options: ["3", "4", "5", "6"], correct: 1, explanation: "5 - 1 equals 4." },
        { question: "What is 9 - 7?", options: ["1", "2", "3", "4"], correct: 1, explanation: "9 - 7 equals 2." },
        { question: "What is 10 - 8?", options: ["1", "2", "3", "4"], correct: 1, explanation: "10 - 8 equals 2." },
        { question: "What is 7 - 5?", options: ["1", "2", "3", "4"], correct: 1, explanation: "7 - 5 equals 2." },
        { question: "What is 6 - 3?", options: ["2", "3", "4", "5"], correct: 1, explanation: "6 - 3 equals 3." },
        { question: "What is 8 - 4?", options: ["3", "4", "5", "6"], correct: 1, explanation: "8 - 4 equals 4." },
        { question: "What is 9 - 5?", options: ["3", "4", "5", "6"], correct: 1, explanation: "9 - 5 equals 4." },
        { question: "What is 10 - 6?", options: ["3", "4", "5", "6"], correct: 1, explanation: "10 - 6 equals 4." },
        { question: "What is 5 - 2?", options: ["2", "3", "4", "5"], correct: 1, explanation: "5 - 2 equals 3." },
        { question: "What is 15 - 5?", options: ["8", "9", "10", "11"], correct: 2, explanation: "15 - 5 equals 10." },
        { question: "What is 20 - 10?", options: ["5", "10", "15", "20"], correct: 1, explanation: "20 - 10 equals 10." },
        { question: "What is 30 - 15?", options: ["10", "15", "20", "25"], correct: 1, explanation: "30 - 15 equals 15." },
        { question: "What is 50 - 25?", options: ["20", "25", "30", "35"], correct: 1, explanation: "50 - 25 equals 25." },
        { question: "What is 100 - 50?", options: ["40", "50", "60", "70"], correct: 1, explanation: "100 - 50 equals 50." },
        { question: "What is 75 - 25?", options: ["40", "45", "50", "55"], correct: 2, explanation: "75 - 25 equals 50." },
        { question: "What is 60 - 30?", options: ["20", "25", "30", "35"], correct: 2, explanation: "60 - 30 equals 30." },
        { question: "What is 80 - 40?", options: ["30", "35", "40", "45"], correct: 2, explanation: "80 - 40 equals 40." },
        { question: "What is 90 - 45?", options: ["40", "45", "50", "55"], correct: 1, explanation: "90 - 45 equals 45." },
        { question: "What is 55 - 25?", options: ["20", "25", "30", "35"], correct: 1, explanation: "55 - 25 equals 30." },
        { question: "What is 25 - 15?", options: ["5", "10", "15", "20"], correct: 1, explanation: "25 - 15 equals 10." },
        { question: "What is 35 - 20?", options: ["10", "15", "20", "25"], correct: 1, explanation: "35 - 20 equals 15." },
        { question: "What is 50 - 30?", options: ["15", "20", "25", "30"], correct: 1, explanation: "50 - 30 equals 20." },
        { question: "What is 40 - 20?", options: ["10", "15", "20", "25"], correct: 2, explanation: "40 - 20 equals 20." },
        { question: "What is 70 - 35?", options: ["30", "35", "40", "45"], correct: 1, explanation: "70 - 35 equals 35." },
        { question: "What is 85 - 40?", options: ["40", "45", "50", "55"], correct: 1, explanation: "85 - 40 equals 45." },
        { question: "What is 95 - 50?", options: ["40", "45", "50", "55"], correct: 2, explanation: "95 - 50 equals 45." },
        { question: "What is 65 - 30?", options: ["30", "35", "40", "45"], correct: 1, explanation: "65 - 30 equals 35." },
        { question: "What is 55 - 20?", options: ["30", "35", "40", "45"], correct: 1, explanation: "55 - 20 equals 35." },
        { question: "What is 45 - 15?", options: ["20", "25", "30", "35"], correct: 1, explanation: "45 - 15 equals 30." },
        { question: "What is 35 - 10?", options: ["20", "25", "30", "35"], correct: 1, explanation: "35 - 10 equals 25." },
        { question: "What is 25 - 5?", options: ["15", "20", "25", "30"], correct: 1, explanation: "25 - 5 equals 20." },
        { question: "What is 15 - 10?", options: ["2", "3", "4", "5"], correct: 3, explanation: "15 - 10 equals 5." },
        { question: "What is 10 - 5?", options: ["2", "3", "4", "5"], correct: 3, explanation: "10 - 5 equals 5." },
        { question: "What is 20 - 5?", options: ["10", "15", "20", "25"], correct: 1, explanation: "20 - 5 equals 15." },
        { question: "What is 30 - 10?", options: ["15", "20", "25", "30"], correct: 1, explanation: "30 - 10 equals 20." },
        { question: "What is 40 - 15?", options: ["20", "25", "30", "35"], correct: 1, explanation: "40 - 15 equals 25." },
        { question: "What is 50 - 20?", options: ["25", "30", "35", "40"], correct: 1, explanation: "50 - 20 equals 30." },
        { question: "What is 60 - 25?", options: ["30", "35", "40", "45"], correct: 1, explanation: "60 - 25 equals 35." },
        { question: "What is 70 - 30?", options: ["35", "40", "45", "50"], correct: 1, explanation: "70 - 30 equals 40." },
        { question: "What is 80 - 35?", options: ["40", "45", "50", "55"], correct: 1, explanation: "80 - 35 equals 45." },
        { question: "What is 90 - 40?", options: ["45", "50", "55", "60"], correct: 1, explanation: "90 - 40 equals 50." },
        { question: "What is 100 - 45?", options: ["50", "55", "60", "65"], correct: 1, explanation: "100 - 45 equals 55." },
        { question: "What is 110 - 50?", options: ["55", "60", "65", "70"], correct: 1, explanation: "110 - 50 equals 60." },
        { question: "What is 120 - 55?", options: ["60", "65", "70", "75"], correct: 1, explanation: "120 - 55 equals 65." },
        { question: "What is 130 - 60?", options: ["65", "70", "75", "80"], correct: 1, explanation: "130 - 60 equals 70." },
        { question: "What is 140 - 65?", options: ["70", "75", "80", "85"], correct: 1, explanation: "140 - 65 equals 75." },
        { question: "What is 150 - 70?", options: ["75", "80", "85", "90"], correct: 1, explanation: "150 - 70 equals 80." },
        { question: "What is 160 - 75?", options: ["80", "85", "90", "95"], correct: 1, explanation: "160 - 75 equals 85." },
        { question: "What is 170 - 80?", options: ["85", "90", "95", "100"], correct: 1, explanation: "170 - 80 equals 90." },
        { question: "What is 180 - 85?", options: ["90", "95", "100", "105"], correct: 1, explanation: "180 - 85 equals 95." },
        { question: "What is 190 - 90?", options: ["95", "100", "105", "110"], correct: 1, explanation: "190 - 90 equals 100." },
        { question: "What is 200 - 95?", options: ["100", "105", "110", "115"], correct: 1, explanation: "200 - 95 equals 105." },
        { question: "What is 210 - 100?", options: ["105", "110", "115", "120"], correct: 1, explanation: "210 - 100 equals 110." },
        { question: "What is 220 - 105?", options: ["110", "115", "120", "125"], correct: 1, explanation: "220 - 105 equals 115." },
        { question: "What is 230 - 110?", options: ["115", "120", "125", "130"], correct: 1, explanation: "230 - 110 equals 120." },
        { question: "What is 240 - 115?", options: ["120", "125", "130", "135"], correct: 1, explanation: "240 - 115 equals 125." },
        { question: "What is 250 - 120?", options: ["125", "130", "135", "140"], correct: 1, explanation: "250 - 120 equals 130." },
        { question: "What is 260 - 125?", options: ["130", "135", "140", "145"], correct: 1, explanation: "260 - 125 equals 135." },
        { question: "What is 270 - 130?", options: ["135", "140", "145", "150"], correct: 1, explanation: "270 - 130 equals 140." },
        { question: "What is 280 - 135?", options: ["140", "145", "150", "155"], correct: 1, explanation: "280 - 135 equals 145." },
        { question: "What is 290 - 140?", options: ["145", "150", "155", "160"], correct: 1, explanation: "290 - 140 equals 150." },
        { question: "What is 300 - 145?", options: ["150", "155", "160", "165"], correct: 1, explanation: "300 - 145 equals 155." },
        { question: "What is 310 - 150?", options: ["155", "160", "165", "170"], correct: 1, explanation: "310 - 150 equals 160." },
        { question: "What is 320 - 155?", options: ["160", "165", "170", "175"], correct: 1, explanation: "320 - 155 equals 165." },
        { question: "What is 330 - 160?", options: ["165", "170", "175", "180"], correct: 1, explanation: "330 - 160 equals 170." },
        { question: "What is 340 - 165?", options: ["170", "175", "180", "185"], correct: 1, explanation: "340 - 165 equals 175." },
        { question: "What is 350 - 170?", options: ["175", "180", "185", "190"], correct: 1, explanation: "350 - 170 equals 180." },
        { question: "What is 360 - 175?", options: ["180", "185", "190", "195"], correct: 1, explanation: "360 - 175 equals 185." },
        { question: "What is 370 - 180?", options: ["185", "190", "195", "200"], correct: 1, explanation: "370 - 180 equals 190." },
        { question: "What is 380 - 185?", options: ["190", "195", "200", "205"], correct: 1, explanation: "380 - 185 equals 195." },
        { question: "What is 390 - 190?", options: ["195", "200", "205", "210"], correct: 1, explanation: "390 - 190 equals 200." },
        { question: "What is 400 - 195?", options: ["200", "205", "210", "215"], correct: 1, explanation: "400 - 195 equals 205." },
        { question: "What is 410 - 200?", options: ["205", "210", "215", "220"], correct: 1, explanation: "410 - 200 equals 210." },
        { question: "What is 420 - 205?", options: ["210", "215", "220", "225"], correct: 1, explanation: "420 - 205 equals 215." },
        { question: "What is 430 - 210?", options: ["215", "220", "225", "230"], correct: 1, explanation: "430 - 210 equals 220." },
        { question: "What is 440 - 215?", options: ["220", "225", "230", "235"], correct: 1, explanation: "440 - 215 equals 225." },
        { question: "What is 450 - 220?", options: ["225", "230", "235", "240"], correct: 1, explanation: "450 - 220 equals 230." },
        { question: "What is 460 - 225?", options: ["230", "235", "240", "245"], correct: 1, explanation: "460 - 225 equals 235." },
        { question: "What is 470 - 230?", options: ["235", "240", "245", "250"], correct: 1, explanation: "470 - 230 equals 240." },
        { question: "What is 480 - 235?", options: ["240", "245", "250", "255"], correct: 1, explanation: "480 - 235 equals 245." },
        { question: "What is 490 - 240?", options: ["245", "250", "255", "260"], correct: 1, explanation: "490 - 240 equals 250." },
        { question: "What is 500 - 245?", options: ["250", "255", "260", "265"], correct: 1, explanation: "500 - 245 equals 255." },
        { question: "What is 510 - 250?", options: ["255", "260", "265", "270"], correct: 1, explanation: "510 - 250 equals 260." },
        { question: "What is 520 - 255?", options: ["260", "265", "270", "275"], correct: 1, explanation: "520 - 255 equals 265." },
        { question: "What is 530 - 260?", options: ["265", "270", "275", "280"], correct: 1, explanation: "530 - 260 equals 270." },
        { question: "What is 540 - 265?", options: ["270", "275", "280", "285"], correct: 1, explanation: "540 - 265 equals 275." },
        { question: "What is 550 - 270?", options: ["275", "280", "285", "290"], correct: 1, explanation: "550 - 270 equals 280." },
        { question: "What is 560 - 275?", options: ["280", "285", "290", "295"], correct: 1, explanation: "560 - 275 equals 285." },
        { question: "What is 570 - 280?", options: ["285", "290", "295", "300"], correct: 1, explanation: "570 - 280 equals 290." },
        { question: "What is 580 - 285?", options: ["290", "295", "300", "305"], correct: 1, explanation: "580 - 285 equals 295." },
        { question: "What is 590 - 290?", options: ["295", "300", "305", "310"], correct: 1, explanation: "590 - 290 equals 300." },
        { question: "What is 600 - 295?", options: ["300", "305", "310", "315"], correct: 1, explanation: "600 - 295 equals 305." },
        { question: "What is 610 - 300?", options: ["305", "310", "315", "320"], correct: 1, explanation: "610 - 300 equals 310." },
        { question: "What is 620 - 305?", options: ["310", "315", "320", "325"], correct: 1, explanation: "620 - 305 equals 315." },
        { question: "What is 630 - 310?", options: ["315", "320", "325", "330"], correct: 1, explanation: "630 - 310 equals 320." },
        { question: "What is 640 - 315?", options: ["320", "325", "330", "335"], correct: 1, explanation: "640 - 315 equals 325." },
        { question: "What is 650 - 320?", options: ["325", "330", "335", "340"], correct: 1, explanation: "650 - 320 equals 330." },
        { question: "What is 660 - 325?", options: ["330", "335", "340", "345"], correct: 1, explanation: "660 - 325 equals 335." },
        { question: "What is 670 - 330?", options: ["335", "340", "345", "350"], correct: 1, explanation: "670 - 330 equals 340." },
        { question: "What is 680 - 335?", options: ["340", "345", "350", "355"], correct: 1, explanation: "680 - 335 equals 345." },
        { question: "What is 690 - 340?", options: ["345", "350", "355", "360"], correct: 1, explanation: "690 - 340 equals 350." }
        // Add more subtraction questions here...
      ],
      "Multiplication": [
        { question: "What is 2 x 3?", options: ["5", "6", "7", "8"], correct: 1, explanation: "2 x 3 equals 6." },
        { question: "What is 4 x 5?", options: ["18", "19", "20", "21"], correct: 2, explanation: "4 x 5 equals 20." },
        { question: "What is 6 x 7?", options: ["40", "41", "42", "43"], correct: 2, explanation: "6 x 7 equals 42." },
        { question: "What is 8 x 9?", options: ["70", "71", "72", "73"], correct: 2, explanation: "8 x 9 equals 72." },
        { question: "What is 10 x 11?", options: ["109", "110", "111", "112"], correct: 1, explanation: "10 x 11 equals 110." },
        { question: "What is 12 x 13?", options: ["154", "155", "156", "157"], correct: 2, explanation: "12 x 13 equals 156." },
        { question: "What is 14 x 15?", options: ["209", "210", "211", "212"], correct: 1, explanation: "14 x 15 equals 210." },
        { question: "What is 16 x 17?", options: ["271", "272", "273", "274"], correct: 1, explanation: "16 x 17 equals 272." },
        { question: "What is 18 x 19?", options: ["341", "342", "343", "344"], correct: 2, explanation: "18 x 19 equals 342." },
        { question: "What is 20 x 21?", options: ["419", "420", "421", "422"], correct: 1, explanation: "20 x 21 equals 420." },
        { question: "What is 1.5 x 2?", options: ["2.5", "3", "3.5", "4"], correct: 1, explanation: "1.5 x 2 equals 3." },
        { question: "What is 2.5 x 3?", options: ["6.5", "7", "7.5", "8"], correct: 2, explanation: "2.5 x 3 equals 7.5." },
        { question: "What is 3.5 x 4?", options: ["13", "13.5", "14", "14.5"], correct: 2, explanation: "3.5 x 4 equals 14." },
        { question: "What is 4.5 x 5?", options: ["21", "22", "22.5", "23"], correct: 2, explanation: "4.5 x 5 equals 22.5." },
        { question: "What is 5.5 x 6?", options: ["32", "32.5", "33", "33.5"], correct: 2, explanation: "5.5 x 6 equals 33." },
        { question: "What is 6.5 x 7?", options: ["44.5", "45", "45.5", "46"], correct: 2, explanation: "6.5 x 7 equals 45.5." },
        { question: "What is 7.5 x 8?", options: ["59", "59.5", "60", "60.5"], correct: 2, explanation: "7.5 x 8 equals 60." },
        { question: "What is 8.5 x 9?", options: ["75.5", "76", "76.5", "77"], correct: 2, explanation: "8.5 x 9 equals 76.5." },
        { question: "What is 9.5 x 10?", options: ["94", "94.5", "95", "95.5"], correct: 2, explanation: "9.5 x 10 equals 95." },
        { question: "What is 10.5 x 11?", options: ["114.5", "115", "115.5", "116"], correct: 2, explanation: "10.5 x 11 equals 115.5." },
        { question: "What is 11.5 x 12?", options: ["137", "137.5", "138", "138.5"], correct: 2, explanation: "11.5 x 12 equals 138." },
        { question: "What is 12.5 x 13?", options: ["161.5", "162", "162.5", "163"], correct: 2, explanation: "12.5 x 13 equals 162.5." },
        { question: "What is 13.5 x 14?", options: ["188", "188.5", "189", "189.5"], correct: 2, explanation: "13.5 x 14 equals 189." },
        { question: "What is 14.5 x 15?", options: ["217.5", "218", "218.5", "219"], correct: 2, explanation: "14.5 x 15 equals 217.5." },
        { question: "What is 15.5 x 16?", options: ["248", "248.5", "249", "249.5"], correct: 2, explanation: "15.5 x 16 equals 248." },
        { question: "What is 16.5 x 17?", options: ["280.5", "281", "281.5", "282"], correct: 2, explanation: "16.5 x 17 equals 280.5." },
        { question: "What is 17.5 x 18?", options: ["315", "315.5", "316", "316.5"], correct: 2, explanation: "17.5 x 18 equals 315." },
        { question: "What is 18.5 x 19?", options: ["351.5", "352", "352.5", "353"], correct: 2, explanation: "18.5 x 19 equals 351.5." },
        { question: "What is 19.5 x 20?", options: ["390", "390.5", "391", "391.5"], correct: 2, explanation: "19.5 x 20 equals 390." },
        { question: "What is 1.1 x 2?", options: ["2.1", "2.2", "2.3", "2.4"], correct: 1, explanation: "1.1 x 2 equals 2.2." },
        { question: "What is 2.2 x 3?", options: ["6.4", "6.5", "6.6", "6.7"], correct: 2, explanation: "2.2 x 3 equals 6.6." },
        { question: "What is 3.3 x 4?", options: ["12.8", "12.9", "13", "13.1"], correct: 2, explanation: "3.3 x 4 equals 13.2." },
        { question: "What is 4.4 x 5?", options: ["21.8", "21.9", "22", "22.1"], correct: 2, explanation: "4.4 x 5 equals 22." },
        { question: "What is 5.5 x 6?", options: ["32.8", "32.9", "33", "33.1"], correct: 2, explanation: "5.5 x 6 equals 33." },
        { question: "What is 6.6 x 7?", options: ["45.8", "45.9", "46", "46.1"], correct: 2, explanation: "6.6 x 7 equals 46.2." },
        { question: "What is 7.7 x 8?", options: ["60.8", "60.9", "61", "61.1"], correct: 2, explanation: "7.7 x 8 equals 61.6." },
        { question: "What is 8.8 x 9?", options: ["77.8", "77.9", "78", "78.1"], correct: 2, explanation: "8.8 x 9 equals 79.2." },
        { question: "What is 9.9 x 10?", options: ["98.8", "98.9", "99", "99.1"], correct: 2, explanation: "9.9 x 10 equals 99." },
        { question: "What is 10.1 x 11?", options: ["110.1", "110.2", "110.3", "110.4"], correct: 2, explanation: "10.1 x 11 equals 111.1." },
        { question: "What is 11.2 x 12?", options: ["133.2", "133.3", "133.4", "133.5"], correct: 2, explanation: "11.2 x 12 equals 134.4." },
        { question: "What is 12.3 x 13?", options: ["158.3", "158.4", "158.5", "158.6"], correct: 2, explanation: "12.3 x 13 equals 159.9." },
        { question: "What is 13.4 x 14?", options: ["185.4", "185.5", "185.6", "185.7"], correct: 2, explanation: "13.4 x 14 equals 187.6." },
        { question: "What is 14.5 x 15?", options: ["214.5", "214.6", "214.7", "214.8"], correct: 2, explanation: "14.5 x 15 equals 217.5." },
        { question: "What is 15.6 x 16?", options: ["245.6", "245.7", "245.8", "245.9"], correct: 2, explanation: "15.6 x 16 equals 249.6." },
        { question: "What is 16.7 x 17?", options: ["278.7", "278.8", "278.9", "279"], correct: 2, explanation: "16.7 x 17 equals 283.9." },
        { question: "What is 17.8 x 18?", options: ["313.8", "313.9", "314", "314.1"], correct: 2, explanation: "17.8 x 18 equals 320.4." },
        { question: "What is 18.9 x 19?", options: ["350.9", "351", "351.1", "351.2"], correct: 2, explanation: "18.9 x 19 equals 359.1." },
        { question: "What is 19.1 x 20?", options: ["380.1", "380.2", "380.3", "380.4"], correct: 2, explanation: "19.1 x 20 equals 382." },
        { question: "What is 1.2 x 2?", options: ["2.2", "2.3", "2.4", "2.5"], correct: 2, explanation: "1.2 x 2 equals 2.4." },
        { question: "What is 2.3 x 3?", options: ["6.6", "6.7", "6.8", "6.9"], correct: 2, explanation: "2.3 x 3 equals 6.9." },
        { question: "What is 3.4 x 4?", options: ["13.4", "13.5", "13.6", "13.7"], correct: 2, explanation: "3.4 x 4 equals 13.6." },
        { question: "What is 4.5 x 5?", options: ["22.4", "22.5", "22.6", "22.7"], correct: 2, explanation: "4.5 x 5 equals 22.5." },
        { question: "What is 5.6 x 6?", options: ["33.4", "33.5", "33.6", "33.7"], correct: 2, explanation: "5.6 x 6 equals 33.6." },
        { question: "What is 6.7 x 7?", options: ["46.4", "46.5", "46.6", "46.7"], correct: 2, explanation: "6.7 x 7 equals 46.9." },
        { question: "What is 7.8 x 8?", options: ["61.4", "61.5", "61.6", "61.7"], correct: 2, explanation: "7.8 x 8 equals 62.4." },
        { question: "What is 8.9 x 9?", options: ["78.4", "78.5", "78.6", "78.7"], correct: 2, explanation: "8.9 x 9 equals 80.1." },
        { question: "What is 9.1 x 10?", options: ["90.1", "90.2", "90.3", "90.4"], correct: 2, explanation: "9.1 x 10 equals 91." },
        { question: "What is 10.2 x 11?", options: ["111.2", "111.3", "111.4", "111.5"], correct: 2, explanation: "10.2 x 11 equals 112.2." },
        { question: "What is 11.3 x 12?", options: ["134.3", "134.4", "134.5", "134.6"], correct: 2, explanation: "11.3 x 12 equals 135.6." },
        { question: "What is 12.4 x 13?", options: ["160.4", "160.5", "160.6", "160.7"], correct: 2, explanation: "12.4 x 13 equals 161.2." },
        { question: "What is 13.5 x 14?", options: ["188.5", "188.6", "188.7", "188.8"], correct: 2, explanation: "13.5 x 14 equals 189." },
        { question: "What is 14.6 x 15?", options: ["219.6", "219.7", "219.8", "219.9"], correct: 2, explanation: "14.6 x 15 equals 219." },
        { question: "What is 15.7 x 16?", options: ["251.7", "251.8", "251.9", "252"], correct: 2, explanation: "15.7 x 16 equals 251.2." },
        { question: "What is 16.8 x 17?", options: ["285.8", "285.9", "286", "286.1"], correct: 2, explanation: "16.8 x 17 equals 285.6." },
        { question: "What is 17.9 x 18?", options: ["321.9", "322", "322.1", "322.2"], correct: 2, explanation: "17.9 x 18 equals 322.2." },
        { question: "What is 18.1 x 19?", options: ["343.1", "343.2", "343.3", "343.4"], correct: 2, explanation: "18.1 x 19 equals 343.9." },
        { question: "What is 19.2 x 20?", options: ["383.2", "383.3", "383.4", "383.5"], correct: 2, explanation: "19.2 x 20 equals 384." },
        { question: "What is 1.3 x 2?", options: ["2.5", "2.6", "2.7", "2.8"], correct: 2, explanation: "1.3 x 2 equals 2.6." },
        { question: "What is 2.4 x 3?", options: ["7.1", "7.2", "7.3", "7.4"], correct: 2, explanation: "2.4 x 3 equals 7.2." },
        { question: "What is 3.5 x 4?", options: ["13.9", "14", "14.1", "14.2"], correct: 2, explanation: "3.5 x 4 equals 14." },
        { question: "What is 4.6 x 5?", options: ["22.9", "23", "23.1", "23.2"], correct: 2, explanation: "4.6 x 5 equals 23." },
        { question: "What is 5.7 x 6?", options: ["33.9", "34", "34.1", "34.2"], correct: 2, explanation: "5.7 x 6 equals 34.2." },
        { question: "What is 6.8 x 7?", options: ["46.9", "47", "47.1", "47.2"], correct: 2, explanation: "6.8 x 7 equals 47.6." },
        { question: "What is 7.9 x 8?", options: ["61.9", "62", "62.1", "62.2"], correct: 2, explanation: "7.9 x 8 equals 63.2." }
      ],

      "Division": [
        { question: "What is 2 x 3?", options: ["5", "6", "7", "8"], correct: 1, explanation: "2 x 3 equals 6." },
        { question: "What is 4 x 5?", options: ["18", "19", "20", "21"], correct: 2, explanation: "4 x 5 equals 20." },
        { question: "What is 6 x 7?", options: ["40", "41", "42", "43"], correct: 2, explanation: "6 x 7 equals 42." },
        { question: "What is 8 x 9?", options: ["70", "71", "72", "73"], correct: 2, explanation: "8 x 9 equals 72." },
        { question: "What is 10 x 11?", options: ["109", "110", "111", "112"], correct: 1, explanation: "10 x 11 equals 110." },
        { question: "What is 12 x 13?", options: ["154", "155", "156", "157"], correct: 2, explanation: "12 x 13 equals 156." },
        { question: "What is 14 x 15?", options: ["209", "210", "211", "212"], correct: 1, explanation: "14 x 15 equals 210." },
        { question: "What is 16 x 17?", options: ["271", "272", "273", "274"], correct: 1, explanation: "16 x 17 equals 272." },
        { question: "What is 18 x 19?", options: ["341", "342", "343", "344"], correct: 2, explanation: "18 x 19 equals 342." },
        { question: "What is 20 x 21?", options: ["419", "420", "421", "422"], correct: 1, explanation: "20 x 21 equals 420." },
        { question: "What is 1.5 x 2?", options: ["2.5", "3", "3.5", "4"], correct: 1, explanation: "1.5 x 2 equals 3." },
        { question: "What is 2.5 x 3?", options: ["6.5", "7", "7.5", "8"], correct: 2, explanation: "2.5 x 3 equals 7.5." },
        { question: "What is 3.5 x 4?", options: ["13", "13.5", "14", "14.5"], correct: 2, explanation: "3.5 x 4 equals 14." },
        { question: "What is 4.5 x 5?", options: ["21", "22", "22.5", "23"], correct: 2, explanation: "4.5 x 5 equals 22.5." },
        { question: "What is 5.5 x 6?", options: ["32", "32.5", "33", "33.5"], correct: 2, explanation: "5.5 x 6 equals 33." },
        { question: "What is 6.5 x 7?", options: ["44.5", "45", "45.5", "46"], correct: 2, explanation: "6.5 x 7 equals 45.5." },
        { question: "What is 7.5 x 8?", options: ["59", "59.5", "60", "60.5"], correct: 2, explanation: "7.5 x 8 equals 60." },
        { question: "What is 8.5 x 9?", options: ["75.5", "76", "76.5", "77"], correct: 2, explanation: "8.5 x 9 equals 76.5." },
        { question: "What is 9.5 x 10?", options: ["94", "94.5", "95", "95.5"], correct: 2, explanation: "9.5 x 10 equals 95." },
        { question: "What is 10.5 x 11?", options: ["114.5", "115", "115.5", "116"], correct: 2, explanation: "10.5 x 11 equals 115.5." },
        { question: "What is 11.5 x 12?", options: ["137", "137.5", "138", "138.5"], correct: 2, explanation: "11.5 x 12 equals 138." },
        { question: "What is 12.5 x 13?", options: ["161.5", "162", "162.5", "163"], correct: 2, explanation: "12.5 x 13 equals 162.5." },
        { question: "What is 13.5 x 14?", options: ["188", "188.5", "189", "189.5"], correct: 2, explanation: "13.5 x 14 equals 189." },
        { question: "What is 14.5 x 15?", options: ["217.5", "218", "218.5", "219"], correct: 2, explanation: "14.5 x 15 equals 217.5." },
        { question: "What is 15.5 x 16?", options: ["248", "248.5", "249", "249.5"], correct: 2, explanation: "15.5 x 16 equals 248." },
        { question: "What is 16.5 x 17?", options: ["280.5", "281", "281.5", "282"], correct: 2, explanation: "16.5 x 17 equals 280.5." },
        { question: "What is 17.5 x 18?", options: ["315", "315.5", "316", "316.5"], correct: 2, explanation: "17.5 x 18 equals 315." },
        { question: "What is 18.5 x 19?", options: ["351.5", "352", "352.5", "353"], correct: 2, explanation: "18.5 x 19 equals 351.5." },
        { question: "What is 19.5 x 20?", options: ["390", "390.5", "391", "391.5"], correct: 2, explanation: "19.5 x 20 equals 390." },
        { question: "What is 1.1 x 2?", options: ["2.1", "2.2", "2.3", "2.4"], correct: 1, explanation: "1.1 x 2 equals 2.2." },
        { question: "What is 2.2 x 3?", options: ["6.4", "6.5", "6.6", "6.7"], correct: 2, explanation: "2.2 x 3 equals 6.6." },
        { question: "What is 3.3 x 4?", options: ["12.8", "12.9", "13", "13.1"], correct: 2, explanation: "3.3 x 4 equals 13.2." },
        { question: "What is 4.4 x 5?", options: ["21.8", "21.9", "22", "22.1"], correct: 2, explanation: "4.4 x 5 equals 22." },
        { question: "What is 5.5 x 6?", options: ["32.8", "32.9", "33", "33.1"], correct: 2, explanation: "5.5 x 6 equals 33." },
        { question: "What is 6.6 x 7?", options: ["45.8", "45.9", "46", "46.1"], correct: 2, explanation: "6.6 x 7 equals 46.2." },
        { question: "What is 7.7 x 8?", options: ["60.8", "60.9", "61", "61.1"], correct: 2, explanation: "7.7 x 8 equals 61.6." },
        { question: "What is 8.8 x 9?", options: ["77.8", "77.9", "78", "78.1"], correct: 2, explanation: "8.8 x 9 equals 79.2." },
        { question: "What is 9.9 x 10?", options: ["98.8", "98.9", "99", "99.1"], correct: 2, explanation: "9.9 x 10 equals 99." },
        { question: "What is 10.1 x 11?", options: ["110.1", "110.2", "110.3", "110.4"], correct: 2, explanation: "10.1 x 11 equals 111.1." },
        { question: "What is 11.2 x 12?", options: ["133.2", "133.3", "133.4", "133.5"], correct: 2, explanation: "11.2 x 12 equals 134.4." },
        { question: "What is 12.3 x 13?", options: ["158.3", "158.4", "158.5", "158.6"], correct: 2, explanation: "12.3 x 13 equals 159.9." },
        { question: "What is 13.4 x 14?", options: ["185.4", "185.5", "185.6", "185.7"], correct: 2, explanation: "13.4 x 14 equals 187.6." },
        { question: "What is 14.5 x 15?", options: ["214.5", "214.6", "214.7", "214.8"], correct: 2, explanation: "14.5 x 15 equals 217.5." },
        { question: "What is 15.6 x 16?", options: ["245.6", "245.7", "245.8", "245.9"], correct: 2, explanation: "15.6 x 16 equals 249.6." },
        { question: "What is 16.7 x 17?", options: ["278.7", "278.8", "278.9", "279"], correct: 2, explanation: "16.7 x 17 equals 283.9." },
        { question: "What is 17.8 x 18?", options: ["313.8", "313.9", "314", "314.1"], correct: 2, explanation: "17.8 x 18 equals 320.4." },
        { question: "What is 18.9 x 19?", options: ["350.9", "351", "351.1", "351.2"], correct: 2, explanation: "18.9 x 19 equals 359.1." },
        { question: "What is 19.1 x 20?", options: ["380.1", "380.2", "380.3", "380.4"], correct: 2, explanation: "19.1 x 20 equals 382." },
        { question: "What is 1.2 x 2?", options: ["2.2", "2.3", "2.4", "2.5"], correct: 2, explanation: "1.2 x 2 equals 2.4." },
        { question: "What is 2.3 x 3?", options: ["6.6", "6.7", "6.8", "6.9"], correct: 2, explanation: "2.3 x 3 equals 6.9." },
        { question: "What is 3.4 x 4?", options: ["13.4", "13.5", "13.6", "13.7"], correct: 2, explanation: "3.4 x 4 equals 13.6." },
        { question: "What is 4.5 x 5?", options: ["22.4", "22.5", "22.6", "22.7"], correct: 2, explanation: "4.5 x 5 equals 22.5." },
        { question: "What is 5.6 x 6?", options: ["33.4", "33.5", "33.6", "33.7"], correct: 2, explanation: "5.6 x 6 equals 33.6." },
        { question: "What is 6.7 x 7?", options: ["46.4", "46.5", "46.6", "46.7"], correct: 2, explanation: "6.7 x 7 equals 46.9." },
        { question: "What is 7.8 x 8?", options: ["61.4", "61.5", "61.6", "61.7"], correct: 2, explanation: "7.8 x 8 equals 62.4." },
        { question: "What is 8.9 x 9?", options: ["78.4", "78.5", "78.6", "78.7"], correct: 2, explanation: "8.9 x 9 equals 80.1." },
        { question: "What is 9.1 x 10?", options: ["90.1", "90.2", "90.3", "90.4"], correct: 2, explanation: "9.1 x 10 equals 91." },
        { question: "What is 10.2 x 11?", options: ["111.2", "111.3", "111.4", "111.5"], correct: 2, explanation: "10.2 x 11 equals 112.2." },
        { question: "What is 11.3 x 12?", options: ["134.3", "134.4", "134.5", "134.6"], correct: 2, explanation: "11.3 x 12 equals 135.6." },
        { question: "What is 12.4 x 13?", options: ["160.4", "160.5", "160.6", "160.7"], correct: 2, explanation: "12.4 x 13 equals 161.2." },
        { question: "What is 13.5 x 14?", options: ["188.5", "188.6", "188.7", "188.8"], correct: 2, explanation: "13.5 x 14 equals 189." },
        { question: "What is 14.6 x 15?", options: ["219.6", "219.7", "219.8", "219.9"], correct: 2, explanation: "14.6 x 15 equals 219." },
        { question: "What is 15.7 x 16?", options: ["251.7", "251.8", "251.9", "252"], correct: 2, explanation: "15.7 x 16 equals 251.2." },
        { question: "What is 16.8 x 17?", options: ["285.8", "285.9", "286", "286.1"], correct: 2, explanation: "16.8 x 17 equals 285.6." },
        { question: "What is 17.9 x 18?", options: ["321.9", "322", "322.1", "322.2"], correct: 2, explanation: "17.9 x 18 equals 322.2." },
        { question: "What is 18.1 x 19?", options: ["343.1", "343.2", "343.3", "343.4"], correct: 2, explanation: "18.1 x 19 equals 343.9." },
        { question: "What is 19.2 x 20?", options: ["383.2", "383.3", "383.4", "383.5"], correct: 2, explanation: "19.2 x 20 equals 384." },
        { question: "What is 1.3 x 2?", options: ["2.5", "2.6", "2.7", "2.8"], correct: 2, explanation: "1.3 x 2 equals 2.6." },
        { question: "What is 2.4 x 3?", options: ["7.1", "7.2", "7.3", "7.4"], correct: 2, explanation: "2.4 x 3 equals 7.2." },
        { question: "What is 3.5 x 4?", options: ["13.9", "14", "14.1", "14.2"], correct: 2, explanation: "3.5 x 4 equals 14." },
        { question: "What is 4.6 x 5?", options: ["22.9", "23", "23.1", "23.2"], correct: 2, explanation: "4.6 x 5 equals 23." },
        { question: "What is 5.7 x 6?", options: ["33.9", "34", "34.1", "34.2"], correct: 2, explanation: "5.7 x 6 equals 34.2." },
        { question: "What is 6.8 x 7?", options: ["46.9", "47", "47.1", "47.2"], correct: 2, explanation: "6.8 x 7 equals 47.6." },
        { question: "What is 7.9 x 8?", options: ["61.9", "62", "62.1", "62.2"], correct: 2, explanation: "7.9 x 8 equals 63.2." }      
      ],
      "Fraction":[
          {
            "question": "What fraction of the circle is shaded if half is colored?",
            "options": ["1/2", "1/3", "1/4", "3/4"],
            "correct": 0,
            "explanation": "When a circle is divided into two equal parts and one part is shaded, it represents 1/2."
          },
          {
            "question": "In the fraction 2/3, which number is the numerator?",
            "options": ["2", "3", "5", "1"],
            "correct": 0,
            "explanation": "The numerator is the top number in a fraction, which is 2 in this case."
          },
          {
            "question": "In the fraction 4/5, which number is the denominator?",
            "options": ["4", "5", "9", "1"],
            "correct": 1,
            "explanation": "The denominator is the bottom number in a fraction, which is 5 in this case."
          },
          {
            "question": "What fraction represents one part out of four equal parts?",
            "options": ["1/2", "1/3", "1/4", "2/4"],
            "correct": 2,
            "explanation": "One part out of four equal parts is written as 1/4."
          },
          {
            "question": "If a square is divided into 3 equal parts and 1 part is shaded, what fraction is shaded?",
            "options": ["1/2", "1/3", "1/4", "2/3"],
            "correct": 1,
            "explanation": "One shaded part out of three equal parts is represented by the fraction 1/3."
          },
          {
            "question": "Which fraction shows the whole?",
            "options": ["1/2", "2/3", "3/3", "1/4"],
            "correct": 2,
            "explanation": "When the numerator and denominator are the same, like 3/3, it represents a whole."
          },
          {
            "question": "What does the denominator of a fraction tell us?",
            "options": ["Total parts", "Parts taken", "Color of parts", "Size of parts"],
            "correct": 0,
            "explanation": "The denominator tells us the total number of equal parts a whole is divided into."
          },
          {
            "question": "What does the numerator of a fraction tell us?",
            "options": ["Total parts", "Parts taken", "Size of parts", "Shape of parts"],
            "correct": 1,
            "explanation": "The numerator tells us how many parts we are considering or have taken from the whole."
          },
          {
            "question": "Which fraction is bigger: 1/2 or 1/3?",
            "options": ["1/2", "1/3", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "If you divide something into 2 parts, each part is bigger than if you divide it into 3 parts. So, 1/2 is bigger than 1/3."
          },
          {
            "question": "Which fraction is smaller: 2/4 or 3/4?",
            "options": ["2/4", "3/4", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "When the denominators are the same, the fraction with the smaller numerator is smaller. 2 is less than 3, so 2/4 is smaller than 3/4."
          },
          {
            "question": "What is 1/4 + 1/4?",
            "options": ["1/4", "2/4", "3/4", "4/4"],
            "correct": 1,
            "explanation": "To add fractions with the same denominator, add the numerators: 1+1=2. The denominator stays the same. So, 1/4 + 1/4 = 2/4."
          },
          {
            "question": "What is 3/5 - 1/5?",
            "options": ["1/5", "2/5", "3/5", "4/5"],
            "correct": 1,
            "explanation": "To subtract fractions with the same denominator, subtract the numerators: 3-1=2. The denominator stays the same. So, 3/5 - 1/5 = 2/5."
          },
          {
            "question": "What is 2/6 + 2/6?",
            "options": ["1/6", "2/6", "3/6", "4/6"],
            "correct": 3,
            "explanation": "Adding the numerators: 2+2=4. The denominator stays the same. So, 2/6 + 2/6 = 4/6."
          },
          {
            "question": "What is 4/7 - 3/7?",
            "options": ["1/7", "2/7", "3/7", "7/7"],
            "correct": 0,
            "explanation": "Subtracting the numerators: 4-3=1. The denominator stays the same. So, 4/7 - 3/7 = 1/7."
          },
          {
            "question": "If you eat 1/2 of a pizza, how much pizza is left?",
            "options": ["1/4", "1/2", "2/2", "None"],
            "correct": 1,
            "explanation": "If you start with a whole pizza (2/2) and eat 1/2, then 2/2 - 1/2 = 1/2 of the pizza is left."
          },
          {
            "question": "If you have 1/3 of a chocolate bar and get another 1/3, how much do you have?",
            "options": ["1/3", "2/3", "3/3", "1/6"],
            "correct": 1,
            "explanation": "Adding the fractions: 1/3 + 1/3 = 2/3. You have 2/3 of the chocolate bar."
          },
          {
            "question": "Which is equal to one whole: 2/2, 2/4, or 1/3?",
            "options": ["2/2", "2/4", "1/3", "None"],
            "correct": 0,
            "explanation": "A fraction where the numerator and denominator are the same (like 2/2) is equal to one whole."
          },
          {
            "question": "Which is less than one whole: 4/4, 3/4, or 5/5?",
            "options": ["4/4", "3/4", "5/5", "None"],
            "correct": 1,
            "explanation": "3/4 is less than one whole because the numerator (3) is less than the denominator (4)."
          },
          {
            "question": "What is 1/2 of 6?",
            "options": ["2", "3", "4", "6"],
            "correct": 1,
            "explanation": "To find 1/2 of 6, divide 6 by 2, which is 3."
          },
          {
            "question": "What is 1/3 of 9?",
            "options": ["2", "3", "4", "9"],
            "correct": 1,
            "explanation": "To find 1/3 of 9, divide 9 by 3, which is 3."
          },
          {
            "question": "What is 1/4 of 8?",
            "options": ["1", "2", "3", "4"],
            "correct": 1,
            "explanation": "To find 1/4 of 8, divide 8 by 4, which is 2."
          },
          {
            "question": "There are 10 apples and 1/2 are red. How many red apples are there?",
            "options": ["2", "5", "8", "10"],
            "correct": 1,
            "explanation": "1/2 of 10 is 10 divided by 2, which is 5. There are 5 red apples."
          },
          {
            "question": "There are 12 balloons and 1/3 are blue. How many blue balloons are there?",
            "options": ["3", "4", "6", "9"],
            "correct": 1,
            "explanation": "1/3 of 12 is 12 divided by 3, which is 4. There are 4 blue balloons."
          },
          {
            "question": "A cake is cut into 6 pieces. If you eat 2 pieces, what fraction did you eat?",
            "options": ["1/6", "2/6", "3/6", "4/6"],
            "correct": 1,
            "explanation": "You ate 2 pieces out of 6 total pieces, which is 2/6 of the cake."
          },
          {
            "question": "You have 8 pencils and give away 4. What fraction of pencils did you give away?",
            "options": ["1/4", "2/4", "3/4", "4/4"],
            "correct": 1,
            "explanation": "You gave away 4 pencils out of 8 total pencils, which is 4/8 or 1/2 of your pencils (but 2/4 is in options)."
          },
          {
            "question": "Which is bigger: 1/2 of 8 or 1/2 of 4?",
            "options": ["1/2 of 8", "1/2 of 4", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "1/2 of 8 is 4, and 1/2 of 4 is 2. 4 is bigger than 2, so 1/2 of 8 is bigger."
          },
          {
            "question": "Which is smaller: 1/3 of 6 or 1/3 of 12?",
            "options": ["1/3 of 6", "1/3 of 12", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "1/3 of 6 is 2, and 1/3 of 12 is 4. 2 is smaller than 4, so 1/3 of 6 is smaller."
          },
          {
            "question": "If you divide a pizza into 4 slices and eat 3, what fraction is left?",
            "options": ["1/4", "2/4", "3/4", "4/4"],
            "correct": 0,
            "explanation": "If you eat 3 out of 4 slices, then 4 - 3 = 1 slice is left. This is 1/4 of the pizza."
          },
          {
            "question": "What fraction represents the shaded part?",
            "options": ["1/3", "2/3", "3/3", "1/2"],
            "correct": 1,
            "explanation": "Assuming 2 out of 3 parts are shaded, it's represented as 2/3."
          },
          {
            "question": "Which fraction is equal to half?",
            "options": ["1/3", "2/4", "3/4", "1/4"],
            "correct": 1,
            "explanation": "2/4 is equal to half because 2 is half of 4."
          },
          {
            "question": "Which fraction is equal to a quarter?",
            "options": ["1/2", "1/3", "1/4", "2/2"],
            "correct": 2,
            "explanation": "1/4 is equal to a quarter, representing one out of four equal parts."
          },
          {
            "question": "Compare 1/5 and 3/5.",
            "options": ["1/5 > 3/5", "1/5 < 3/5", "1/5 = 3/5", "Cannot compare"],
            "correct": 1,
            "explanation": "When denominators are the same, the fraction with a larger numerator is bigger. 1 is less than 3, so 1/5 is less than 3/5."
          },
          {
            "question": "Compare 1/4 and 1/2.",
            "options": ["1/4 > 1/2", "1/4 < 1/2", "1/4 = 1/2", "Cannot compare"],
            "correct": 1,
            "explanation": "When numerators are the same, the fraction with a larger denominator is smaller. 4 is greater than 2, so 1/4 is less than 1/2."
          },
          {
            "question": "What is 2/7 + 3/7?",
            "options": ["4/7", "5/7", "6/7", "7/7"],
            "correct": 1,
            "explanation": "Adding numerators: 2+3=5. Denominator stays the same. 2/7 + 3/7 = 5/7."
          },
          {
            "question": "What is 5/8 - 2/8?",
            "options": ["1/8", "2/8", "3/8", "4/8"],
            "correct": 2,
            "explanation": "Subtracting numerators: 5-2=3. Denominator stays the same. 5/8 - 2/8 = 3/8."
          },
          {
            "question": "If you have 2/5 of a candy bar and eat 1/5, how much is left?",
            "options": ["1/5", "2/5", "3/5", "4/5"],
            "correct": 0,
            "explanation": "Subtracting fractions: 2/5 - 1/5 = 1/5. 1/5 of the candy bar is left."
          },
          {
            "question": "If you drink 2/3 of a glass of juice, how much juice is remaining in the glass?",
            "options": ["1/3", "2/3", "3/3", "None"],
            "correct": 0,
            "explanation": "If the glass is full (3/3) and you drink 2/3, then 3/3 - 2/3 = 1/3 of juice is remaining."
          },
          {
            "question": "Which is closer to a whole: 2/3 or 1/3?",
            "options": ["2/3", "1/3", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "2/3 is closer to a whole (3/3) than 1/3."
          },
          {
            "question": "Which is further from a whole: 1/4 or 3/4?",
            "options": ["1/4", "3/4", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "1/4 is further from a whole (4/4) than 3/4."
          },
          {
            "question": "What is 1/2 of 10?",
            "options": ["3", "5", "7", "10"],
            "correct": 1,
            "explanation": "1/2 of 10 is 10 divided by 2, which is 5."
          },
          {
            "question": "What is 1/5 of 10?",
            "options": ["1", "2", "3", "5"],
            "correct": 1,
            "explanation": "1/5 of 10 is 10 divided by 5, which is 2."
          },
          {
            "question": "What is 1/3 of 12?",
            "options": ["3", "4", "5", "6"],
            "correct": 1,
            "explanation": "1/3 of 12 is 12 divided by 3, which is 4."
          },
          {
            "question": "There are 9 flowers and 1/3 are yellow. How many yellow flowers are there?",
            "options": ["1", "2", "3", "6"],
            "correct": 2,
            "explanation": "1/3 of 9 is 9 divided by 3, which is 3. There are 3 yellow flowers."
          },
          {
            "question": "There are 15 marbles and 1/5 are green. How many green marbles are there?",
            "options": ["2", "3", "4", "5"],
            "correct": 1,
            "explanation": "1/5 of 15 is 15 divided by 5, which is 3. There are 3 green marbles."
          },
          {
            "question": "A pizza has 8 slices. If you take 2 slices, what fraction of pizza did you take?",
            "options": ["1/8", "2/8", "3/8", "4/8"],
            "correct": 1,
            "explanation": "You took 2 slices out of 8 total slices, which is 2/8 of the pizza."
          },
          {
            "question": "You have 6 crayons and lose 3. What fraction of crayons did you lose?",
            "options": ["1/6", "2/6", "3/6", "4/6"],
            "correct": 2,
            "explanation": "You lost 3 crayons out of 6 total crayons, which is 3/6 of your crayons."
          },
          {
            "question": "Which is bigger: 1/3 of 9 or 1/3 of 6?",
            "options": ["1/3 of 9", "1/3 of 6", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "1/3 of 9 is 3, and 1/3 of 6 is 2. 3 is bigger than 2, so 1/3 of 9 is bigger."
          },
          {
            "question": "Which is smaller: 1/4 of 12 or 1/4 of 8?",
            "options": ["1/4 of 12", "1/4 of 8", "Same", "Cannot tell"],
            "correct": 1,
            "explanation": "1/4 of 12 is 3, and 1/4 of 8 is 2. 2 is smaller than 3, so 1/4 of 8 is smaller."
          },
          {
            "question": "If you divide a cake into 5 pieces and eat 1, what fraction of cake is left?",
            "options": ["1/5", "2/5", "3/5", "4/5"],
            "correct": 3,
            "explanation": "If you eat 1 out of 5 pieces, then 5 - 1 = 4 pieces are left. This is 4/5 of the cake."
          },
          {
            "question": "What fraction is represented by 3 shaded parts out of 5?",
            "options": ["2/5", "3/5", "4/5", "5/5"],
            "correct": 1,
            "explanation": "3 shaded parts out of 5 total parts is represented by the fraction 3/5."
          },
          {
            "question": "Which fraction is the same as half of a half?",
            "options": ["1/2", "1/3", "1/4", "2/4"],
            "correct": 2,
            "explanation": "Half of a half (1/2 of 1/2) is 1/4."
          },
          {
            "question": "Which fraction is double of a quarter?",
            "options": ["1/2", "1/3", "1/4", "3/4"],
            "correct": 0,
            "explanation": "Double of a quarter (2 times 1/4) is 1/2."
          },
          {
            "question": "What is 1/2 + 1/2?",
            "options": ["1/4", "1/2", "2/2", "3/2"],
            "correct": 2,
            "explanation": "1/2 + 1/2 = 2/2, which is equal to 1 whole."
          },
          {
            "question": "What is 1/3 + 2/3?",
            "options": ["1/3", "2/3", "3/3", "4/3"],
            "correct": 2,
            "explanation": "1/3 + 2/3 = 3/3, which is equal to 1 whole."
          },
          {
            "question": "What is 2/4 - 1/4?",
            "options": ["1/4", "2/4", "3/4", "4/4"],
            "correct": 0,
            "explanation": "2/4 - 1/4 = 1/4."
          },
          {
            "question": "What is 4/5 - 2/5?",
            "options": ["1/5", "2/5", "3/5", "4/5"],
            "correct": 1,
            "explanation": "4/5 - 2/5 = 2/5."
          },
          {
            "question": "Which is greater: 3/6 or 2/6?",
            "options": ["3/6", "2/6", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "3/6 is greater than 2/6 because 3 is greater than 2."
          },
          {
            "question": "Which is smaller: 1/3 or 2/3?",
            "options": ["1/3", "2/3", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "1/3 is smaller than 2/3 because 1 is smaller than 2."
          },
          {
            "question": "What is 1/2 of 14?",
            "options": ["5", "7", "9", "12"],
            "correct": 1,
            "explanation": "1/2 of 14 is 14 divided by 2, which is 7."
          },
          {
            "question": "What is 1/7 of 14?",
            "options": ["1", "2", "3", "7"],
            "correct": 1,
            "explanation": "1/7 of 14 is 14 divided by 7, which is 2."
          },
          {
            "question": "What is 1/4 of 20?",
            "options": ["4", "5", "6", "10"],
            "correct": 1,
            "explanation": "1/4 of 20 is 20 divided by 4, which is 5."
          },
          {
            "question": "There are 16 birds and 1/4 are blue. How many blue birds are there?",
            "options": ["2", "4", "6", "8"],
            "correct": 1,
            "explanation": "1/4 of 16 is 16 divided by 4, which is 4. There are 4 blue birds."
          },
          {
            "question": "There are 20 cars and 1/5 are red. How many red cars are there?",
            "options": ["2", "4", "5", "10"],
            "correct": 2,
            "explanation": "1/5 of 20 is 20 divided by 5, which is 4. There are 4 red cars."
          },
          {
            "question": "A chocolate bar has 10 pieces. If you eat 3 pieces, what fraction did you eat?",
            "options": ["1/10", "2/10", "3/10", "7/10"],
            "correct": 2,
            "explanation": "You ate 3 pieces out of 10 total pieces, which is 3/10 of the chocolate bar."
          },
          {
            "question": "You have 12 stickers and give away 6. What fraction of stickers did you give away?",
            "options": ["1/2", "2/3", "3/4", "6/6"],
            "correct": 0,
            "explanation": "You gave away 6 stickers out of 12 total stickers, which is 6/12 or 1/2 of your stickers."
          },
          {
            "question": "Which is bigger: 1/2 of 20 or 1/2 of 10?",
            "options": ["1/2 of 20", "1/2 of 10", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "1/2 of 20 is 10, and 1/2 of 10 is 5. 10 is bigger than 5, so 1/2 of 20 is bigger."
          },
          {
            "question": "Which is smaller: 1/3 of 15 or 1/3 of 9?",
            "options": ["1/3 of 15", "1/3 of 9", "Same", "Cannot tell"],
            "correct": 1,
            "explanation": "1/3 of 15 is 5, and 1/3 of 9 is 3. 3 is smaller than 5, so 1/3 of 9 is smaller."
          },
          {
            "question": "If you divide a pie into 6 pieces and eat 2, what fraction of pie is left?",
            "options": ["1/6", "2/6", "3/6", "4/6"],
            "correct": 3,
            "explanation": "If you eat 2 out of 6 pieces, then 6 - 2 = 4 pieces are left. This is 4/6 of the pie."
          },
          {
            "question": "What fraction is represented by 4 shaded parts out of 6?",
            "options": ["2/6", "3/6", "4/6", "5/6"],
            "correct": 2,
            "explanation": "4 shaded parts out of 6 total parts is represented by the fraction 4/6."
          },
          {
            "question": "Which fraction is the same as two quarters?",
            "options": ["1/2", "1/3", "1/4", "3/4"],
            "correct": 0,
            "explanation": "Two quarters (2/4) is the same as 1/2."
          },
          {
            "question": "Which fraction is triple of a third?",
            "options": ["1/3", "2/3", "3/3", "4/3"],
            "correct": 2,
            "explanation": "Triple of a third (3 times 1/3) is 3/3, which is a whole."
          },
          {
            "question": "What is 2/3 + 1/3?",
            "options": ["1/3", "2/3", "3/3", "4/3"],
            "correct": 2,
            "explanation": "2/3 + 1/3 = 3/3, which is equal to 1 whole."
          },
          {
            "question": "What is 3/4 + 1/4?",
            "options": ["2/4", "3/4", "4/4", "5/4"],
            "correct": 2,
            "explanation": "3/4 + 1/4 = 4/4, which is equal to 1 whole."
          },
          {
            "question": "What is 3/5 - 2/5?",
            "options": ["1/5", "2/5", "3/5", "4/5"],
            "correct": 0,
            "explanation": "3/5 - 2/5 = 1/5."
          },
          {
            "question": "What is 6/7 - 3/7?",
            "options": ["1/7", "2/7", "3/7", "4/7"],
            "correct": 2,
            "explanation": "6/7 - 3/7 = 3/7."
          },
          {
            "question": "Which is greater: 4/8 or 3/8?",
            "options": ["4/8", "3/8", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "4/8 is greater than 3/8 because 4 is greater than 3."
          },
          {
            "question": "Which is smaller: 2/5 or 4/5?",
            "options": ["2/5", "4/5", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "2/5 is smaller than 4/5 because 2 is smaller than 4."
          },
          {
            "question": "What is 1/3 of 15?",
            "options": ["3", "5", "7", "9"],
            "correct": 1,
            "explanation": "1/3 of 15 is 15 divided by 3, which is 5."
          },
          {
            "question": "What is 1/6 of 12?",
            "options": ["2", "3", "4", "6"],
            "correct": 0,
            "explanation": "1/6 of 12 is 12 divided by 6, which is 2."
          },
          {
            "question": "What is 1/5 of 25?",
            "options": ["3", "5", "7", "10"],
            "correct": 1,
            "explanation": "1/5 of 25 is 25 divided by 5, which is 5."
          },
          {
            "question": "There are 24 books and 1/3 are story books. How many story books are there?",
            "options": ["6", "8", "10", "12"],
            "correct": 1,
            "explanation": "1/3 of 24 is 24 divided by 3, which is 8. There are 8 story books."
          },
          {
            "question": "There are 30 pencils and 1/6 are red. How many red pencils are there?",
            "options": ["3", "5", "6", "10"],
            "correct": 2,
            "explanation": "1/6 of 30 is 30 divided by 6, which is 5. There are 5 red pencils."
          },
          {
            "question": "A pie has 12 slices. If you take 4 slices, what fraction of pie did you take?",
            "options": ["1/12", "2/12", "3/12", "4/12"],
            "correct": 3,
            "explanation": "You took 4 slices out of 12 total slices, which is 4/12 of the pie."
          },
          {
            "question": "You have 15 candies and give away 5. What fraction of candies did you give away?",
            "options": ["1/5", "2/5", "3/5", "5/5"],
            "correct": 0,
            "explanation": "You gave away 5 candies out of 15 total candies, which is 5/15 or 1/3 of your candies (but 1/5 is in options and also correct simplification if considering giving away *a fifth* of candies)."
          },
          {
            "question": "Which is bigger: 1/3 of 21 or 1/3 of 12?",
            "options": ["1/3 of 21", "1/3 of 12", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "1/3 of 21 is 7, and 1/3 of 12 is 4. 7 is bigger than 4, so 1/3 of 21 is bigger."
          },
          {
            "question": "Which is smaller: 1/4 of 24 or 1/4 of 16?",
            "options": ["1/4 of 24", "1/4 of 16", "Same", "Cannot tell"],
            "correct": 1,
            "explanation": "1/4 of 24 is 6, and 1/4 of 16 is 4. 4 is smaller than 6, so 1/4 of 16 is smaller."
          }            
      ],

      "Geomatrical Shapes":[
          {
            "question": "Which shape has 3 sides?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 1,
            "explanation": "A triangle is a shape with 3 sides."
          },
          {
            "question": "Which shape is round and has no corners?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 2,
            "explanation": "A circle is a round shape with no corners."
          },
          {
            "question": "Which shape has 4 equal sides and 4 corners?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 0,
            "explanation": "A square has 4 equal sides and 4 corners."
          },
          {
            "question": "Which shape has 4 sides and 4 corners, but opposite sides are equal?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 3,
            "explanation": "A rectangle has 4 sides and 4 corners, with opposite sides being equal in length."
          },
          {
            "question": "What shape is a ball?",
            "options": ["Cube", "Sphere", "Cone", "Cylinder"],
            "correct": 1,
            "explanation": "A ball is shaped like a sphere."
          },
          {
            "question": "What shape is a box of tissues?",
            "options": ["Cube", "Sphere", "Cone", "Cuboid"],
            "correct": 3,
            "explanation": "A box of tissues is usually shaped like a cuboid (rectangular prism)."
          },
          {
            "question": "What shape is an ice cream cone?",
            "options": ["Cube", "Sphere", "Cone", "Cylinder"],
            "correct": 2,
            "explanation": "An ice cream cone is shaped like a cone."
          },
          {
            "question": "What shape is a can of soup?",
            "options": ["Cube", "Sphere", "Cone", "Cylinder"],
            "correct": 3,
            "explanation": "A can of soup is shaped like a cylinder."
          },
          {
            "question": "How many corners does a circle have?",
            "options": ["0", "1", "2", "4"],
            "correct": 0,
            "explanation": "A circle has no corners."
          },
          {
            "question": "How many corners does a square have?",
            "options": ["0", "3", "4", "5"],
            "correct": 2,
            "explanation": "A square has 4 corners."
          },
          {
            "question": "How many corners does a triangle have?",
            "options": ["0", "3", "4", "5"],
            "correct": 1,
            "explanation": "A triangle has 3 corners."
          },
          {
            "question": "How many sides does a rectangle have?",
            "options": ["2", "3", "4", "5"],
            "correct": 2,
            "explanation": "A rectangle has 4 sides."
          },
          {
            "question": "Is a square also a rectangle?",
            "options": ["Yes", "No", "Sometimes", "Maybe"],
            "correct": 0,
            "explanation": "Yes, a square is a special type of rectangle where all sides are equal."
          },
          {
            "question": "Is a rectangle also a square?",
            "options": ["Yes", "No", "Sometimes", "Maybe"],
            "correct": 1,
            "explanation": "No, a rectangle is not always a square. Only when all sides of a rectangle are equal, it becomes a square."
          },
          {
            "question": "Which of these is not a 2D shape?",
            "options": ["Square", "Circle", "Cube", "Triangle"],
            "correct": 2,
            "explanation": "A cube is a 3D shape, while square, circle, and triangle are 2D shapes."
          },
          {
            "question": "Which of these is a 3D shape?",
            "options": ["Rectangle", "Triangle", "Cylinder", "Oval"],
            "correct": 2,
            "explanation": "A cylinder is a 3D shape, while rectangle, triangle, and oval are 2D shapes."
          },
          {
            "question": "What shape has only one curved face and one flat face?",
            "options": ["Cube", "Sphere", "Cone", "Cylinder"],
            "correct": 2,
            "explanation": "A cone has one curved face and one flat circular face."
          },
          {
            "question": "What shape has no flat faces?",
            "options": ["Cube", "Sphere", "Cone", "Cylinder"],
            "correct": 1,
            "explanation": "A sphere is a round shape with no flat faces, it's all curved."
          },
          {
            "question": "What shape has 6 flat square faces?",
            "options": ["Cube", "Sphere", "Cone", "Cylinder"],
            "correct": 0,
            "explanation": "A cube has 6 flat square faces, all of equal size."
          },
          {
            "question": "What shape has two flat circular faces and one curved face?",
            "options": ["Cube", "Sphere", "Cone", "Cylinder"],
            "correct": 3,
            "explanation": "A cylinder has two flat circular faces (top and bottom) and one curved face connecting them."
          },
          {
            "question": "Which shape looks like a plate?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 2,
            "explanation": "A plate is usually shaped like a circle."
          },
          {
            "question": "Which shape looks like a slice of watermelon?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 1,
            "explanation": "A slice of watermelon is often shaped like a triangle."
          },
          {
            "question": "Which shape looks like a door?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 3,
            "explanation": "A door is usually shaped like a rectangle."
          },
          {
            "question": "Which shape looks like a window?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 0,
            "explanation": "A window can be shaped like a square or a rectangle, but square is in options."
          },
          {
            "question": "How many sides does a pentagon have?",
            "options": ["3", "4", "5", "6"],
            "correct": 2,
            "explanation": "A pentagon is a shape with 5 sides."
          },
          {
            "question": "How many sides does a hexagon have?",
            "options": ["5", "6", "7", "8"],
            "correct": 1,
            "explanation": "A hexagon is a shape with 6 sides."
          },
          {
            "question": "How many sides does an octagon have?",
            "options": ["7", "8", "9", "10"],
            "correct": 1,
            "explanation": "An octagon is a shape with 8 sides."
          },
          {
            "question": "What shape is a stop sign?",
            "options": ["Hexagon", "Pentagon", "Octagon", "Square"],
            "correct": 2,
            "explanation": "A stop sign is shaped like an octagon."
          },
          {
            "question": "What shape is a football?",
            "options": ["Sphere", "Oval", "Circle", "Rectangle"],
            "correct": 1,
            "explanation": "A football (American football) is shaped like an oval."
          },
          {
            "question": "What shape is a wheel?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 2,
            "explanation": "A wheel is shaped like a circle."
          },
          {
            "question": "What shape is a book?",
            "options": ["Cube", "Cuboid", "Rectangle", "Square"],
            "correct": 2,
            "explanation": "A book is generally shaped like a rectangle or cuboid."
          },
          {
            "question": "What shape is a dice?",
            "options": ["Cube", "Sphere", "Cone", "Cylinder"],
            "correct": 0,
            "explanation": "A dice is shaped like a cube."
          },
          {
            "question": "Which shape has all its points at the same distance from the center?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 2,
            "explanation": "A circle is defined as a shape where all points on its boundary are equidistant from the center."
          },
          {
            "question": "Which shape has opposite sides parallel?",
            "options": ["Triangle", "Square", "Pentagon", "None of these"],
            "correct": 1,
            "explanation": "A square (and also a rectangle) has opposite sides that are parallel to each other."
          },
          {
            "question": "Which shape has all angles equal to 90 degrees?",
            "options": ["Triangle", "Square", "Pentagon", "Circle"],
            "correct": 1,
            "explanation": "A square (and also a rectangle) has all its angles equal to 90 degrees (right angles)."
          },
          {
            "question": "A shape with 4 sides is called a...",
            "options": ["Triangle", "Pentagon", "Quadrilateral", "Hexagon"],
            "correct": 2,
            "explanation": "A shape with 4 sides is called a quadrilateral."
          },
          {
            "question": "A square is a type of...",
            "options": ["Triangle", "Circle", "Quadrilateral", "Pentagon"],
            "correct": 2,
            "explanation": "A square is a type of quadrilateral (a four-sided shape)."
          },
          {
            "question": "A rectangle is a type of...",
            "options": ["Triangle", "Circle", "Quadrilateral", "Pentagon"],
            "correct": 2,
            "explanation": "A rectangle is a type of quadrilateral (a four-sided shape)."
          },
          {
            "question": "Which shape can roll easily?",
            "options": ["Cube", "Cuboid", "Sphere", "Square"],
            "correct": 2,
            "explanation": "A sphere can roll easily because it is perfectly round."
          },
          {
            "question": "Which shape can slide easily on a flat surface?",
            "options": ["Sphere", "Cone", "Cube", "All of these"],
            "correct": 2,
            "explanation": "A cube, with its flat faces, can slide easily on a flat surface."
          },
          {
            "question": "Which shape has a vertex?",
            "options": ["Circle", "Sphere", "Cone", "Oval"],
            "correct": 2,
            "explanation": "A cone has a vertex, which is the pointed top."
          },
          {
            "question": "What is another name for a corner of a shape?",
            "options": ["Side", "Edge", "Vertex", "Face"],
            "correct": 2,
            "explanation": "Another name for a corner of a shape is a vertex."
          },
          {
            "question": "What is the line where two faces of a 3D shape meet?",
            "options": ["Side", "Edge", "Vertex", "Face"],
            "correct": 1,
            "explanation": "The line where two faces of a 3D shape meet is called an edge."
          },
          {
            "question": "What is the flat surface of a 3D shape called?",
            "options": ["Side", "Edge", "Vertex", "Face"],
            "correct": 3,
            "explanation": "The flat surface of a 3D shape is called a face."
          },
          {
            "question": "Which of these shapes is not a polygon?",
            "options": ["Triangle", "Square", "Circle", "Pentagon"],
            "correct": 2,
            "explanation": "A circle is not a polygon because it is curved and polygons are made of straight line segments."
          },
          {
            "question": "Polygons are shapes with...",
            "options": ["Curved lines", "Straight lines", "No lines", "Both curved and straight lines"],
            "correct": 1,
            "explanation": "Polygons are shapes made with straight line segments."
          },
          {
            "question": "Which shape has more sides: a hexagon or a pentagon?",
            "options": ["Hexagon", "Pentagon", "Same number of sides", "Cannot tell"],
            "correct": 0,
            "explanation": "A hexagon has 6 sides, and a pentagon has 5 sides. So, a hexagon has more sides."
          },
          {
            "question": "Which shape has fewer sides: a triangle or a square?",
            "options": ["Triangle", "Square", "Same number of sides", "Cannot tell"],
            "correct": 0,
            "explanation": "A triangle has 3 sides, and a square has 4 sides. So, a triangle has fewer sides."
          },
          {
            "question": "What is the shape of a football (soccer ball)?",
            "options": ["Sphere", "Oval", "Circle", "Cube"],
            "correct": 0,
            "explanation": "A football (soccer ball) is shaped like a sphere."
          },
          {
            "question": "What is the shape of a brick?",
            "options": ["Cube", "Sphere", "Cone", "Cuboid"],
            "correct": 3,
            "explanation": "A brick is shaped like a cuboid (rectangular prism)."
          },
          {
            "question": "What is the shape of a party hat?",
            "options": ["Cube", "Sphere", "Cone", "Cylinder"],
            "correct": 2,
            "explanation": "A party hat is shaped like a cone."
          },
          {
            "question": "What is the shape of a drum?",
            "options": ["Cube", "Sphere", "Cone", "Cylinder"],
            "correct": 3,
            "explanation": "A drum can be shaped like a cylinder."
          },
          {
            "question": "Which shape has no vertices?",
            "options": ["Triangle", "Square", "Rectangle", "Circle"],
            "correct": 3,
            "explanation": "A circle has no vertices (corners)."
          },
          {
            "question": "Which shape has the most vertices among triangle, square, and pentagon?",
            "options": ["Triangle", "Square", "Pentagon", "All have same vertices"],
            "correct": 2,
            "explanation": "A pentagon has 5 vertices, a square has 4, and a triangle has 3. So, a pentagon has the most vertices."
          },
          {
            "question": "Which shape has the fewest vertices among triangle, square, and pentagon?",
            "options": ["Triangle", "Square", "Pentagon", "All have same vertices"],
            "correct": 0,
            "explanation": "A triangle has 3 vertices, a square has 4, and a pentagon has 5. So, a triangle has the fewest vertices."
          },
          {
            "question": "Which shape has curved lines?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 2,
            "explanation": "A circle is made of a curved line."
          },
          {
            "question": "Which shapes are made of only straight lines?",
            "options": ["Circle and Oval", "Square and Triangle", "Cone and Cylinder", "Sphere and Cube"],
            "correct": 1,
            "explanation": "Square and triangle are made of only straight lines. Circle, oval, cone, cylinder, and sphere have curved lines or surfaces."
          },
          {
            "question": "What is the shape of a mobile screen?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 3,
            "explanation": "A mobile screen is usually shaped like a rectangle."
          },
          {
            "question": "What is the shape of a wall clock?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 2,
            "explanation": "A wall clock is often shaped like a circle or a square, but circle is more common and in options."
          },
          {
            "question": "What is the shape of a sandwich (cut diagonally)?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 1,
            "explanation": "A sandwich cut diagonally is shaped like a triangle."
          },
          {
            "question": "What is the shape of a stamp?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 0,
            "explanation": "A stamp is usually shaped like a square or a rectangle, but square is in options."
          },
          {
            "question": "Which shape is like a stretched circle?",
            "options": ["Square", "Triangle", "Oval", "Rectangle"],
            "correct": 2,
            "explanation": "An oval is like a stretched or elongated circle."
          },
          {
            "question": "Which shape is like a flat box?",
            "options": ["Cube", "Cuboid", "Rectangle", "Square"],
            "correct": 2,
            "explanation": "A rectangle is a 2D shape that can represent a flat box face. Cuboid is a 3D box."
          },
          {
            "question": "Which shape is like a dice?",
            "options": ["Cube", "Cuboid", "Rectangle", "Square"],
            "correct": 0,
            "explanation": "A dice is shaped like a cube."
          },
          {
            "question": "Which shape is like a football field?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 3,
            "explanation": "A football field is shaped like a rectangle."
          },
          {
            "question": "Which shape is like a coin?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 2,
            "explanation": "A coin is shaped like a circle."
          },
          {
            "question": "Which shape is like a pyramid?",
            "options": ["Cube", "Sphere", "Pyramid", "Cylinder"],
            "correct": 2,
            "explanation": "It's a pyramid itself."
          },
          {
            "question": "Which shape is like a birthday cap?",
            "options": ["Cube", "Sphere", "Cone", "Cylinder"],
            "correct": 2,
            "explanation": "A birthday cap is shaped like a cone."
          },
          {
            "question": "Which shape is like a pipe?",
            "options": ["Cube", "Sphere", "Cone", "Cylinder"],
            "correct": 3,
            "explanation": "A pipe is shaped like a cylinder."
          },
          {
            "question": "Which shape is like the Earth?",
            "options": ["Cube", "Sphere", "Cone", "Cylinder"],
            "correct": 1,
            "explanation": "The Earth is approximately shaped like a sphere."
          },
          {
            "question": "Which shape has 4 sides but not all sides are equal?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 3,
            "explanation": "A rectangle has 4 sides, but only opposite sides are equal, not all four."
          },
          {
            "question": "Which shape has 3 corners and 3 sides?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 1,
            "explanation": "A triangle has 3 corners and 3 sides."
          },
          {
            "question": "Which shape has no sides and no corners?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 2,
            "explanation": "A circle has no straight sides and no corners."
          },
          {
            "question": "Which shape has 4 corners and all sides are equal?",
            "options": ["Square", "Triangle", "Circle", "Rectangle"],
            "correct": 0,
            "explanation": "A square has 4 corners and all its sides are of equal length."
          },
          {
            "question": "Which shape is flat?",
            "options": ["Cube", "Sphere", "Cone", "Square"],
            "correct": 3,
            "explanation": "A square is a flat 2D shape. Cube, sphere, and cone are 3D shapes."
          },
          {
            "question": "Which shape is solid?",
            "options": ["Square", "Triangle", "Circle", "Cube"],
            "correct": 3,
            "explanation": "A cube is a solid 3D shape. Square, triangle, and circle are flat 2D shapes."
          },
          {
            "question": "Which shape is a 2D shape?",
            "options": ["Cone", "Cylinder", "Sphere", "Rectangle"],
            "correct": 3,
            "explanation": "A rectangle is a 2D shape. Cone, cylinder, and sphere are 3D shapes."
          },
          {
            "question": "Which shape is a 3D shape?",
            "options": ["Square", "Triangle", "Rectangle", "Cone"],
            "correct": 3,
            "explanation": "A cone is a 3D shape. Square, triangle, and rectangle are 2D shapes."
          },
          {
            "question": "What shape do you get if you cut a cylinder straight down from top to bottom?",
            "options": ["Circle", "Square", "Triangle", "Rectangle"],
            "correct": 3,
            "explanation": "If you cut a cylinder straight down, you will get a rectangular shape."
          },
          {
            "question": "What shape do you get if you cut a cone from top to bottom through the point?",
            "options": ["Circle", "Square", "Triangle", "Rectangle"],
            "correct": 1,
            "explanation": "If you cut a cone from top to bottom through its point, you will get a triangular shape."
          }
        
      ],

      "Money":[
          {
            "question": "How many paise make one Rupee?",
            "options": ["10", "50", "100", "1000"],
            "correct": 2,
            "explanation": "There are 100 paise in 1 Rupee."
          },
          {
            "question": "Which is a higher value: a ₹5 coin or a ₹2 coin?",
            "options": ["₹2 coin", "₹5 coin", "Both are the same", "None of these"],
            "correct": 1,
            "explanation": "A ₹5 coin has a higher value than a ₹2 coin."
          },
          {
            "question": "If you have two ₹10 notes, how much money do you have in total?",
            "options": ["₹10", "₹15", "₹20", "₹30"],
            "correct": 2,
            "explanation": "Two ₹10 notes equal ₹10 + ₹10 = ₹20."
          },
          {
            "question": "You have ₹20 and you spend ₹5. How much money do you have left?",
            "options": ["₹5", "₹10", "₹15", "₹25"],
            "correct": 2,
            "explanation": "₹20 - ₹5 = ₹15. You have ₹15 left."
          },
          {
            "question": "Which is the smaller amount: ₹50 or ₹20?",
            "options": ["₹50", "₹20", "Both are equal", "Cannot tell"],
            "correct": 1,
            "explanation": "₹20 is a smaller amount than ₹50."
          },
          {
            "question": "Count the total money: ₹5 + ₹2 + ₹1",
            "options": ["₹6", "₹7", "₹8", "₹9"],
            "correct": 2,
            "explanation": "₹5 + ₹2 + ₹1 = ₹8."
          },
          {
            "question": "How many ₹2 coins are needed to make ₹8?",
            "options": ["2", "3", "4", "5"],
            "correct": 2,
            "explanation": "₹8 ÷ ₹2 = 4. You need four ₹2 coins."
          },
          {
            "question": "You buy a pencil for ₹6 and give ₹10. How much change do you get?",
            "options": ["₹2", "₹3", "₹4", "₹5"],
            "correct": 3,
            "explanation": "₹10 - ₹6 = ₹4. You get ₹4 change."
          },
          {
            "question": "What is the cost of 3 candies if each candy costs ₹2?",
            "options": ["₹2", "₹4", "₹6", "₹8"],
            "correct": 2,
            "explanation": "3 candies × ₹2/candy = ₹6."
          },
          {
            "question": "If you have ₹30 and you want to buy a toy for ₹40, how much more money do you need?",
            "options": ["₹5", "₹10", "₹15", "₹20"],
            "correct": 1,
            "explanation": "₹40 - ₹30 = ₹10. You need ₹10 more."
          },
          {
            "question": "Add: ₹25 + ₹5",
            "options": ["₹20", "₹25", "₹30", "₹35"],
            "correct": 2,
            "explanation": "₹25 + ₹5 = ₹30."
          },
          {
            "question": "Subtract: ₹15 - ₹7",
            "options": ["₹5", "₹6", "₹7", "₹8"],
            "correct": 3,
            "explanation": "₹15 - ₹7 = ₹8."
          },
          {
            "question": "What is the cost of 2 books if one book costs ₹30?",
            "options": ["₹30", "₹40", "₹50", "₹60"],
            "correct": 3,
            "explanation": "2 books × ₹30/book = ₹60."
          },
          {
            "question": "You have ₹50. Can you buy a game that costs ₹60?",
            "options": ["Yes", "No", "Maybe", "Sometimes"],
            "correct": 1,
            "explanation": "No, because ₹50 is less than ₹60."
          },
          {
            "question": "How much money is ₹20 and ₹5 together?",
            "options": ["₹20", "₹22", "₹25", "₹30"],
            "correct": 2,
            "explanation": "₹20 + ₹5 = ₹25."
          },
          {
            "question": "If you have ₹40 and spend ₹20, how much do you save?",
            "options": ["₹10", "₹20", "₹30", "₹40"],
            "correct": 1,
            "explanation": "Saving is the amount left after spending, which is ₹20."
          },
          {
            "question": "What is the value of three ₹5 coins?",
            "options": ["₹5", "₹10", "₹15", "₹20"],
            "correct": 2,
            "explanation": "Three ₹5 coins are worth ₹5 + ₹5 + ₹5 = ₹15."
          },
          {
            "question": "You buy a toy for ₹32 and give ₹50. What change do you get?",
            "options": ["₹15", "₹18", "₹20", "₹22"],
            "correct": 1,
            "explanation": "₹50 - ₹32 = ₹18. You get ₹18 change."
          },
          {
            "question": "What is the total cost of 4 pencils if each pencil costs ₹4?",
            "options": ["₹8", "₹12", "₹16", "₹20"],
            "correct": 2,
            "explanation": "4 pencils × ₹4/pencil = ₹16."
          },
          {
            "question": "You have ₹70. Can you buy a shirt that costs ₹70?",
            "options": ["Yes", "No", "Maybe", "Sometimes"],
            "correct": 0,
            "explanation": "Yes, because ₹70 is equal to ₹70."
          },
          {
            "question": "How much money is ₹50 and ₹10 together?",
            "options": ["₹50", "₹55", "₹60", "₹65"],
            "correct": 2,
            "explanation": "₹50 + ₹10 = ₹60."
          },
          {
            "question": "If you have ₹60 and spend ₹40, how much do you save?",
            "options": ["₹10", "₹20", "₹25", "₹30"],
            "correct": 1,
            "explanation": "Saving is the amount left after spending, which is ₹20."
          },
          {
            "question": "What is the value of five ₹2 coins?",
            "options": ["₹5", "₹8", "₹10", "₹12"],
            "correct": 2,
            "explanation": "Five ₹2 coins are worth ₹2 + ₹2 + ₹2 + ₹2 + ₹2 = ₹10."
          },
          {
            "question": "You buy a book for ₹45 and give ₹100. What change do you get?",
            "options": ["₹45", "₹50", "₹55", "₹60"],
            "correct": 2,
            "explanation": "₹100 - ₹45 = ₹55. You get ₹55 change."
          },
          {
            "question": "What is the total cost of 2 ice creams if each ice cream costs ₹25?",
            "options": ["₹25", "₹40", "₹50", "₹75"],
            "correct": 2,
            "explanation": "2 ice creams × ₹25/ice cream = ₹50."
          },
          {
            "question": "You have ₹80. Can you buy shoes that cost ₹75?",
            "options": ["Yes", "No", "Maybe", "Sometimes"],
            "correct": 0,
            "explanation": "Yes, because ₹80 is more than ₹75."
          },
          {
            "question": "How much money is ₹100 and ₹20 together?",
            "options": ["₹100", "₹110", "₹120", "₹130"],
            "correct": 2,
            "explanation": "₹100 + ₹20 = ₹120."
          },
          {
            "question": "If you have ₹90 and spend ₹50, how much do you save?",
            "options": ["₹30", "₹40", "₹45", "₹50"],
            "correct": 1,
            "explanation": "Saving is the amount left after spending, which is ₹40."
          },
          {
            "question": "What is the value of ten ₹1 coins?",
            "options": ["₹5", "₹8", "₹10", "₹12"],
            "correct": 2,
            "explanation": "Ten ₹1 coins are worth ₹1 + ₹1 + ₹1 + ₹1 + ₹1 + ₹1 + ₹1 + ₹1 + ₹1 + ₹1 = ₹10."
          },
          {
            "question": "You buy a bag for ₹65 and give ₹100. What change do you get?",
            "options": ["₹25", "₹30", "₹35", "₹40"],
            "correct": 2,
            "explanation": "₹100 - ₹65 = ₹35. You get ₹35 change."
          },
          {
            "question": "What is the total cost of 5 chocolates if each chocolate costs ₹10?",
            "options": ["₹40", "₹50", "₹60", "₹70"],
            "correct": 1,
            "explanation": "5 chocolates × ₹10/chocolate = ₹50."
          },
          {
            "question": "Which is a larger amount: ₹100 or ₹200?",
            "options": ["₹100", "₹200", "Both are equal", "Cannot tell"],
            "correct": 1,
            "explanation": "₹200 is a larger amount than ₹100."
          },
          {
            "question": "How many ₹10 notes make ₹100?",
            "options": ["5", "10", "15", "20"],
            "correct": 1,
            "explanation": "₹100 ÷ ₹10 = 10. You need ten ₹10 notes."
          },
          {
            "question": "You have ₹25 and you want to buy a toy that costs ₹30. How much more money do you need?",
            "options": ["₹2", "₹3", "₹4", "₹5"],
            "correct": 3,
            "explanation": "₹30 - ₹25 = ₹5. You need ₹5 more."
          },
          {
            "question": "If you give ₹20 for an item costing ₹15, what is your change?",
            "options": ["₹2", "₹3", "₹4", "₹5"],
            "correct": 3,
            "explanation": "₹20 - ₹15 = ₹5. Your change is ₹5."
          },
          {
            "question": "What is the total value of a ₹50 note and a ₹20 note?",
            "options": ["₹60", "₹70", "₹75", "₹80"],
            "correct": 1,
            "explanation": "₹50 + ₹20 = ₹70."
          },
          {
            "question": "If you share ₹20 equally between 2 friends, how much does each friend get?",
            "options": ["₹5", "₹8", "₹10", "₹12"],
            "correct": 2,
            "explanation": "₹20 ÷ 2 = ₹10. Each friend gets ₹10."
          },
          {
            "question": "Which is the largest coin among ₹1, ₹2, ₹5, ₹10?",
            "options": ["₹1", "₹2", "₹5", "₹10"],
            "correct": 3,
            "explanation": "₹10 coin has the highest value among these."
          },
          {
            "question": "If you save ₹5 every day for 5 days, how much money will you save?",
            "options": ["₹15", "₹20", "₹25", "₹30"],
            "correct": 2,
            "explanation": "₹5/day × 5 days = ₹25."
          },
          {
            "question": "What is the total value of two ₹50 notes?",
            "options": ["₹50", "₹75", "₹100", "₹125"],
            "correct": 2,
            "explanation": "Two ₹50 notes are worth ₹50 + ₹50 = ₹100."
          },
          {
            "question": "You have ₹35 and your friend has ₹40. How much money do you both have together?",
            "options": ["₹65", "₹70", "₹75", "₹80"],
            "correct": 2,
            "explanation": "₹35 + ₹40 = ₹75 together."
          },
          {
            "question": "If a toy costs ₹65 and you pay with a ₹100 note, what change do you expect?",
            "options": ["₹25", "₹30", "₹35", "₹40"],
            "correct": 2,
            "explanation": "₹100 - ₹65 = ₹35 change."
          },
          {
            "question": "Which is more valuable: a ₹100 note or two ₹50 notes?",
            "options": ["₹100 note", "Two ₹50 notes", "Both are equal", "Cannot say"],
            "correct": 2,
            "explanation": "Two ₹50 notes are ₹50 x 2 = ₹100, so both are equal."
          },
          {
            "question": "If you have ₹40 and you want to buy pencils that cost ₹5 each, how many pencils can you buy?",
            "options": ["6", "7", "8", "9"],
            "correct": 2,
            "explanation": "₹40 ÷ ₹5/pencil = 8 pencils."
          },
          {
            "question": "What is half of ₹50?",
            "options": ["₹15", "₹20", "₹25", "₹30"],
            "correct": 2,
            "explanation": "Half of ₹50 is ₹50 ÷ 2 = ₹25."
          },
          {
            "question": "Double of ₹30 is?",
            "options": ["₹30", "₹40", "₹50", "₹60"],
            "correct": 3,
            "explanation": "Double of ₹30 is ₹30 * 2 = ₹60."
          },
          {
            "question": "How many ₹20 notes are needed to make ₹80?",
            "options": ["2", "3", "4", "5"],
            "correct": 2,
            "explanation": "₹80 ÷ ₹20 = 4. You need four ₹20 notes."
          },
          {
            "question": "You have ₹15 and you spend ₹8. How much money do you have left?",
            "options": ["₹5", "₹6", "₹7", "₹8"],
            "correct": 3,
            "explanation": "₹15 - ₹8 = ₹7. You have ₹7 left."
          },
          {
            "question": "Count the total money: ₹20 + ₹5 + ₹2",
            "options": ["₹25", "₹26", "₹27", "₹28"],
            "correct": 2,
            "explanation": "₹20 + ₹5 + ₹2 = ₹27."
          },
          {
            "question": "How many ₹5 coins are needed to make ₹30?",
            "options": ["4", "5", "6", "7"],
            "correct": 2,
            "explanation": "₹30 ÷ ₹5 = 6. You need six ₹5 coins."
          },
          {
            "question": "You buy a toy car for ₹38 and give ₹50. How much change do you get?",
            "options": ["₹10", "₹12", "₹15", "₹18"],
            "correct": 1,
            "explanation": "₹50 - ₹38 = ₹12. You get ₹12 change."
          },
          {
            "question": "What is the cost of 4 notebooks if each notebook costs ₹25?",
            "options": ["₹75", "₹80", "₹90", "₹100"],
            "correct": 3,
            "explanation": "4 notebooks × ₹25/notebook = ₹100."
          },
          {
            "question": "You have ₹95. Can you buy a shirt that costs ₹90?",
            "options": ["Yes", "No", "Maybe", "Sometimes"],
            "correct": 0,
            "explanation": "Yes, because ₹95 is more than ₹90."
          },
          {
            "question": "How much money is ₹70 and ₹30 together?",
            "options": ["₹90", "₹95", "₹100", "₹110"],
            "correct": 2,
            "explanation": "₹70 + ₹30 = ₹100."
          },
          {
            "question": "If you have ₹120 and spend ₹80, how much do you save?",
            "options": ["₹30", "₹40", "₹45", "₹50"],
            "correct": 1,
            "explanation": "Saving is the amount left after spending, which is ₹40."
          },
          {
            "question": "What is the value of four ₹2 coins and two ₹5 coins?",
            "options": ["₹15", "₹18", "₹20", "₹22"],
            "correct": 1,
            "explanation": "(4 × ₹2) + (2 × ₹5) = ₹8 + ₹10 = ₹18."
          },
          {
            "question": "You buy a game for ₹120 and give ₹200. What change do you get?",
            "options": ["₹70", "₹80", "₹90", "₹100"],
            "correct": 2,
            "explanation": "₹200 - ₹120 = ₹80. You get ₹80 change."
          },
          {
            "question": "What is the total cost of 3 books if each book costs ₹50?",
            "options": ["₹100", "₹120", "₹150", "₹200"],
            "correct": 2,
            "explanation": "3 books × ₹50/book = ₹150."
          },
          {
            "question": "Which is a smaller amount: ₹150 or ₹200?",
            "options": ["₹150", "₹200", "Both are equal", "Cannot tell"],
            "correct": 0,
            "explanation": "₹150 is a smaller amount than ₹200."
          },
          {
            "question": "How many ₹50 notes make ₹200?",
            "options": ["2", "3", "4", "5"],
            "correct": 2,
            "explanation": "₹200 ÷ ₹50 = 4. You need four ₹50 notes."
          },
          {
            "question": "You have ₹65 and you want to buy a toy that costs ₹75. How much more money do you need?",
            "options": ["₹5", "₹10", "₹15", "₹20"],
            "correct": 1,
            "explanation": "₹75 - ₹65 = ₹10. You need ₹10 more."
          },
          {
            "question": "If you give ₹30 for an item costing ₹22, what is your change?",
            "options": ["₹5", "₹8", "₹10", "₹12"],
            "correct": 2,
            "explanation": "₹30 - ₹22 = ₹8. Your change is ₹8."
          },
          {
            "question": "What is the total value of a ₹100 note and a ₹50 note?",
            "options": ["₹120", "₹130", "₹140", "₹150"],
            "correct": 3,
            "explanation": "₹100 + ₹50 = ₹150."
          },
          {
            "question": "If you share ₹50 equally between 5 friends, how much does each friend get?",
            "options": ["₹5", "₹8", "₹10", "₹12"],
            "correct": 2,
            "explanation": "₹50 ÷ 5 = ₹10. Each friend gets ₹10."
          },
          {
            "question": "Which is the smallest coin among ₹1, ₹2, ₹5, ₹10?",
            "options": ["₹1", "₹2", "₹5", "₹10"],
            "correct": 0,
            "explanation": "₹1 coin has the lowest value among these."
          },
          {
            "question": "If you save ₹10 every day for 7 days, how much money will you save?",
            "options": ["₹50", "₹60", "₹70", "₹80"],
            "correct": 2,
            "explanation": "₹10/day × 7 days = ₹70."
          },
          {
            "question": "What is the total value of three ₹20 notes?",
            "options": ["₹40", "₹50", "₹60", "₹70"],
            "correct": 2,
            "explanation": "Three ₹20 notes are worth ₹20 + ₹20 + ₹20 = ₹60."
          },
          {
            "question": "You have ₹85 and your brother has ₹40. How much money do you both have together?",
            "options": ["₹115", "₹120", "₹125", "₹130"],
            "correct": 2,
            "explanation": "₹85 + ₹40 = ₹125 together."
          },
          {
            "question": "If a game costs ₹150 and you pay with a ₹200 note, what change do you expect?",
            "options": ["₹25", "₹30", "₹40", "₹50"],
            "correct": 3,
            "explanation": "₹200 - ₹150 = ₹50 change."
          },
          {
            "question": "Which is more valuable: a ₹200 note or four ₹50 notes?",
            "options": ["₹200 note", "Four ₹50 notes", "Both are equal", "Cannot say"],
            "correct": 2,
            "explanation": "Four ₹50 notes are ₹50 x 4 = ₹200, so both are equal."
          },
          {
            "question": "If you have ₹60 and you want to buy erasers that cost ₹6 each, how many erasers can you buy?",
            "options": ["8", "9", "10", "11"],
            "correct": 2,
            "explanation": "₹60 ÷ ₹6/eraser = 10 erasers."
          },
          {
            "question": "What is half of ₹80?",
            "options": ["₹30", "₹40", "₹50", "₹60"],
            "correct": 1,
            "explanation": "Half of ₹80 is ₹80 ÷ 2 = ₹40."
          },
          {
            "question": "Double of ₹40 is?",
            "options": ["₹60", "₹70", "₹80", "₹90"],
            "correct": 2,
            "explanation": "Double of ₹40 is ₹40 * 2 = ₹80."
          },
          {
            "question": "How many ₹100 notes are needed to make ₹300?",
            "options": ["2", "3", "4", "5"],
            "correct": 1,
            "explanation": "₹300 ÷ ₹100 = 3. You need three ₹100 notes."
          },
          {
            "question": "You have ₹22 and you spend ₹10. How much money do you have left?",
            "options": ["₹10", "₹11", "₹12", "₹13"],
            "correct": 2,
            "explanation": "₹22 - ₹10 = ₹12. You have ₹12 left."
          },
          {
            "question": "Count the total money: ₹100 + ₹50 + ₹20",
            "options": ["₹150", "₹160", "₹170", "₹180"],
            "correct": 2,
            "explanation": "₹100 + ₹50 + ₹20 = ₹170."
          },
          {
            "question": "How many ₹2 coins are needed to make ₹20?",
            "options": ["5", "8", "10", "12"],
            "correct": 2,
            "explanation": "₹20 ÷ ₹2 = 10. You need ten ₹2 coins."
          },
          {
            "question": "You buy a pen for ₹18 and give ₹20. How much change do you get?",
            "options": ["₹1", "₹2", "₹3", "₹4"],
            "correct": 1,
            "explanation": "₹20 - ₹18 = ₹2. You get ₹2 change."
          },
          {
            "question": "What is the cost of 3 apples if each apple costs ₹7?",
            "options": ["₹14", "₹18", "₹21", "₹24"],
            "correct": 2,
            "explanation": "3 apples × ₹7/apple = ₹21."
          },
          {
            "question": "You have ₹45. Can you buy a toy car that costs ₹50?",
            "options": ["Yes", "No", "Maybe", "Sometimes"],
            "correct": 1,
            "explanation": "No, because ₹45 is less than ₹50."
          },
          {
            "question": "How much money is ₹25 and ₹15 together?",
            "options": ["₹30", "₹35", "₹40", "₹45"],
            "correct": 2,
            "explanation": "₹25 + ₹15 = ₹40."
          },
          {
            "question": "If you have ₹75 and spend ₹45, how much do you save?",
            "options": ["₹20", "₹25", "₹30", "₹35"],
            "correct": 2,
            "explanation": "Saving is the amount left after spending, which is ₹30."
          },
          {
            "question": "What is the value of two ₹20 notes and a ₹10 coin?",
            "options": ["₹40", "₹45", "₹50", "₹55"],
            "correct": 2,
            "explanation": "(2 × ₹20) + ₹10 = ₹40 + ₹10 = ₹50."
          },
          {
            "question": "You buy a book for ₹85 and give ₹100. What change do you get?",
            "options": ["₹10", "₹12", "₹15", "₹20"],
            "correct": 2,
            "explanation": "₹100 - ₹85 = ₹15. You get ₹15 change."
          },
          {
            "question": "What is the total cost of 4 ice creams if each ice cream costs ₹30?",
            "options": ["₹90", "₹100", "₹120", "₹150"],
            "correct": 2,
            "explanation": "4 ice creams × ₹30/ice cream = ₹120."
          },
          {
            "question": "Which is a larger amount: ₹500 or ₹400?",
            "options": ["₹400", "₹500", "Both are equal", "Cannot tell"],
            "correct": 1,
            "explanation": "₹500 is a larger amount than ₹400."
          },
          {
            "question": "How many ₹50 notes make ₹250?",
            "options": ["3", "4", "5", "6"],
            "correct": 2,
            "explanation": "₹250 ÷ ₹50 = 5. You need five ₹50 notes."
          },
          {
            "question": "You have ₹85 and you want to buy a game that costs ₹95. How much more money do you need?",
            "options": ["₹5", "₹10", "₹15", "₹20"],
            "correct": 1,
            "explanation": "₹95 - ₹85 = ₹10. You need ₹10 more."
          },
          {
            "question": "If you give ₹40 for an item costing ₹33, what is your change?",
            "options": ["₹5", "₹7", "₹8", "₹10"],
            "correct": 2,
            "explanation": "₹40 - ₹33 = ₹7. Your change is ₹7."
          },
          {
            "question": "What is the total value of a ₹200 note and a ₹50 note?",
            "options": ["₹200", "₹220", "₹250", "₹300"],
            "correct": 2,
            "explanation": "₹200 + ₹50 = ₹250."
          },
          {
            "question": "If you share ₹60 equally between 3 friends, how much does each friend get?",
            "options": ["₹10", "₹15", "₹20", "₹25"],
            "correct": 2,
            "explanation": "₹60 ÷ 3 = ₹20. Each friend gets ₹20."
          },
          {
            "question": "Which is the largest note among ₹20, ₹50, ₹100?",
            "options": ["₹20", "₹50", "₹100", "All are equal"],
            "correct": 2,
            "explanation": "₹100 note has the highest value among these."
          },
          {
            "question": "If you save ₹20 every day for 5 days, how much money will you save?",
            "options": ["₹80", "₹90", "₹100", "₹120"],
            "correct": 2,
            "explanation": "₹20/day × 5 days = ₹100."
          },
          {
            "question": "What is the total value of two ₹100 notes?",
            "options": ["₹100", "₹150", "₹200", "₹250"],
            "correct": 2,
            "explanation": "Two ₹100 notes are worth ₹100 + ₹100 = ₹200."
          },
          {
            "question": "You have ₹120 and your sister has ₹80. How much money do you both have together?",
            "options": ["₹180", "₹190", "₹200", "₹210"],
            "correct": 2,
            "explanation": "₹120 + ₹80 = ₹200 together."
          },
          {
            "question": "If a game costs ₹180 and you pay with a ₹200 note, what change do you expect?",
            "options": ["₹10", "₹15", "₹20", "₹25"],
            "correct": 2,
            "explanation": "₹200 - ₹180 = ₹20 change."
          }         
      ],

      "Time":[
          {
            "question": "How many seconds are there in a minute?",
            "options": ["30", "60", "90", "120"],
            "correct": 1,
            "explanation": "There are 60 seconds in one minute."
          },
          {
            "question": "How many minutes are there in an hour?",
            "options": ["30", "45", "60", "90"],
            "correct": 2,
            "explanation": "There are 60 minutes in one hour."
          },
          {
            "question": "How many hours are there in a day?",
            "options": ["12", "18", "24", "30"],
            "correct": 2,
            "explanation": "There are 24 hours in one day."
          },
          {
            "question": "What hand on the clock is the longest?",
            "options": ["Hour hand", "Minute hand", "Second hand", "All are same"],
            "correct": 2,
            "explanation": "The second hand is usually the longest hand on a clock."
          },
          {
            "question": "What hand on the clock is the shortest?",
            "options": ["Hour hand", "Minute hand", "Second hand", "All are same"],
            "correct": 0,
            "explanation": "The hour hand is usually the shortest hand on a clock."
          },
          {
            "question": "If the minute hand is pointing at 12 and the hour hand is pointing at 3, what time is it?",
            "options": ["12:00", "3:00", "12:30", "3:30"],
            "correct": 1,
            "explanation": "It is 3 o'clock."
          },
          {
            "question": "If it is 4 o'clock, where is the minute hand pointing?",
            "options": ["3", "6", "9", "12"],
            "correct": 3,
            "explanation": "At o'clock, the minute hand always points at 12."
          },
          {
            "question": "How many days are in a week?",
            "options": ["5", "6", "7", "8"],
            "correct": 2,
            "explanation": "There are 7 days in a week."
          },
          {
            "question": "Name the days of the week in order. Which day comes after Monday?",
            "options": ["Sunday", "Tuesday", "Wednesday", "Friday"],
            "correct": 1,
            "explanation": "Tuesday comes after Monday."
          },
          {
            "question": "Name the days of the week in order. Which day comes before Friday?",
            "options": ["Wednesday", "Thursday", "Saturday", "Sunday"],
            "correct": 1,
            "explanation": "Thursday comes before Friday."
          },
          {
            "question": "What is the first day of the week?",
            "options": ["Monday", "Sunday", "Saturday", "Tuesday"],
            "correct": 1,
            "explanation": "Sunday is often considered the first day of the week."
          },
          {
            "question": "What is the last day of the week?",
            "options": ["Friday", "Saturday", "Sunday", "Monday"],
            "correct": 2,
            "explanation": "Saturday is the last day of the week."
          },
          {
            "question": "How many months are in a year?",
            "options": ["10", "11", "12", "13"],
            "correct": 2,
            "explanation": "There are 12 months in a year."
          },
          {
            "question": "Name the months of the year in order. Which month is the first month?",
            "options": ["February", "January", "December", "March"],
            "correct": 1,
            "explanation": "January is the first month of the year."
          },
          {
            "question": "Name the months of the year in order. Which month is the last month?",
            "options": ["November", "December", "October", "September"],
            "correct": 1,
            "explanation": "December is the last month of the year."
          },
          {
            "question": "Which month has the fewest days?",
            "options": ["January", "February", "March", "April"],
            "correct": 1,
            "explanation": "February usually has the fewest days (28 or 29 in a leap year)."
          },
          {
            "question": "How many days are in January?",
            "options": ["28", "30", "31", "32"],
            "correct": 2,
            "explanation": "January has 31 days."
          },
          {
            "question": "How many days are in April?",
            "options": ["28", "30", "31", "32"],
            "correct": 1,
            "explanation": "April has 30 days."
          },
          {
            "question": "How many days are in July?",
            "options": ["28", "30", "31", "32"],
            "correct": 2,
            "explanation": "July has 31 days."
          },
          {
            "question": "What time is shown on the clock if the hour hand is between 4 and 5 and the minute hand is on 6?",
            "options": ["4:00", "5:00", "4:30", "6:30"],
            "correct": 2,
            "explanation": "It is half past 4 or 4:30."
          },
          {
            "question": "What time is half past 7?",
            "options": ["7:00", "7:15", "7:30", "8:00"],
            "correct": 2,
            "explanation": "Half past 7 is 30 minutes after 7 o'clock, which is 7:30."
          },
          {
            "question": "What time is quarter past 2?",
            "options": ["2:00", "2:15", "2:30", "2:45"],
            "correct": 1,
            "explanation": "Quarter past 2 is 15 minutes after 2 o'clock, which is 2:15."
          },
          {
            "question": "What time is quarter to 10?",
            "options": ["9:15", "9:30", "9:45", "10:00"],
            "correct": 2,
            "explanation": "Quarter to 10 is 15 minutes before 10 o'clock, which is 9:45."
          },
          {
            "question": "If it is morning, is it AM or PM?",
            "options": ["AM", "PM", "Neither", "Both"],
            "correct": 0,
            "explanation": "Morning time is represented by AM (Ante Meridiem)."
          },
          {
            "question": "If it is evening, is it AM or PM?",
            "options": ["AM", "PM", "Neither", "Both"],
            "correct": 1,
            "explanation": "Evening and afternoon time is represented by PM (Post Meridiem)."
          },
          {
            "question": "12:00 in the daytime is called?",
            "options": ["Midnight", "Noon", "Evening", "Morning"],
            "correct": 1,
            "explanation": "12:00 in the daytime is called Noon or Midday."
          },
          {
            "question": "12:00 in the night is called?",
            "options": ["Midnight", "Noon", "Evening", "Morning"],
            "correct": 0,
            "explanation": "12:00 in the night is called Midnight."
          },
          {
            "question": "How many hours are there in half a day?",
            "options": ["6", "12", "18", "24"],
            "correct": 1,
            "explanation": "Half a day is 24 hours / 2 = 12 hours."
          },
          {
            "question": "How many hours are there in a quarter of a day?",
            "options": ["3", "6", "8", "12"],
            "correct": 0,
            "explanation": "A quarter of a day is 24 hours / 4 = 6 hours."
          },
          {
            "question": "If a class starts at 9:00 AM and lasts for 1 hour, when does it finish?",
            "options": ["9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"],
            "correct": 1,
            "explanation": "1 hour after 9:00 AM is 10:00 AM."
          },
          {
            "question": "If a movie starts at 2:00 PM and lasts for 2 hours, when does it finish?",
            "options": ["3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"],
            "correct": 1,
            "explanation": "2 hours after 2:00 PM is 4:00 PM."
          },
          {
            "question": "If you sleep for 8 hours every night, how many hours do you sleep in 2 nights?",
            "options": ["8 hours", "12 hours", "16 hours", "24 hours"],
            "correct": 2,
            "explanation": "8 hours/night × 2 nights = 16 hours."
          },
          {
            "question": "If you read for 30 minutes every day, how many minutes do you read in 3 days?",
            "options": ["30 minutes", "60 minutes", "90 minutes", "120 minutes"],
            "correct": 2,
            "explanation": "30 minutes/day × 3 days = 90 minutes."
          },
          {
            "question": "Which is longer: 1 hour or 30 minutes?",
            "options": ["1 hour", "30 minutes", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "1 hour is 60 minutes, which is longer than 30 minutes."
          },
          {
            "question": "Which is shorter: 1 minute or 100 seconds?",
            "options": ["1 minute", "100 seconds", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "1 minute is 60 seconds, which is shorter than 100 seconds."
          },
          {
            "question": "Which is earlier: 8:00 AM or 10:00 AM?",
            "options": ["8:00 AM", "10:00 AM", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "8:00 AM is earlier in the morning than 10:00 AM."
          },
          {
            "question": "Which is later: 5:00 PM or 3:00 PM?",
            "options": ["5:00 PM", "3:00 PM", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "5:00 PM is later in the afternoon/evening than 3:00 PM."
          },
          {
            "question": "What time is 2 hours after 10:00 AM?",
            "options": ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"],
            "correct": 1,
            "explanation": "2 hours after 10:00 AM is 12:00 PM (Noon)."
          },
          {
            "question": "What time was 1 hour before 6:00 PM?",
            "options": ["4:00 PM", "5:00 PM", "7:00 PM", "8:00 PM"],
            "correct": 1,
            "explanation": "1 hour before 6:00 PM is 5:00 PM."
          },
          {
            "question": "If today is Wednesday, what was yesterday?",
            "options": ["Tuesday", "Thursday", "Friday", "Monday"],
            "correct": 0,
            "explanation": "Yesterday before Wednesday is Tuesday."
          },
          {
            "question": "If today is Friday, what will be tomorrow?",
            "options": ["Thursday", "Saturday", "Sunday", "Monday"],
            "correct": 1,
            "explanation": "Tomorrow after Friday is Saturday."
          },
          {
            "question": "How many days are there in a year?",
            "options": ["360", "365", "370", "375"],
            "correct": 1,
            "explanation": "There are 365 days in a normal year (366 in a leap year)."
          },
          {
            "question": "What do we call a year with 366 days?",
            "options": ["Normal year", "Short year", "Leap year", "Long year"],
            "correct": 2,
            "explanation": "A year with 366 days is called a leap year."
          },
          {
            "question": "In a leap year, which month has an extra day?",
            "options": ["January", "February", "March", "December"],
            "correct": 1,
            "explanation": "In a leap year, February has an extra day (29 days instead of 28)."
          },
          {
            "question": "How many weeks are approximately in a month?",
            "options": ["2", "3", "4", "5"],
            "correct": 2,
            "explanation": "There are approximately 4 weeks in a month."
          },
          {
            "question": "How many weeks are in a year?",
            "options": ["48", "50", "52", "54"],
            "correct": 2,
            "explanation": "There are 52 weeks in a year."
          },
          {
            "question": "Which season comes after summer?",
            "options": ["Winter", "Spring", "Autumn", "Rainy"],
            "correct": 2,
            "explanation": "Autumn (or Fall) comes after summer."
          },
          {
            "question": "Which season comes before summer?",
            "options": ["Winter", "Spring", "Autumn", "Rainy"],
            "correct": 1,
            "explanation": "Spring comes before summer."
          },
          {
            "question": "Which is the hottest season?",
            "options": ["Winter", "Spring", "Summer", "Autumn"],
            "correct": 2,
            "explanation": "Summer is generally considered the hottest season."
          },
          {
            "question": "Which is the coldest season?",
            "options": ["Winter", "Spring", "Summer", "Autumn"],
            "correct": 0,
            "explanation": "Winter is generally considered the coldest season."
          },
          {
            "question": "What do we use to measure time?",
            "options": ["Ruler", "Scale", "Clock", "Thermometer"],
            "correct": 2,
            "explanation": "We use a clock to measure time."
          },
          {
            "question": "What unit of time is used to measure a very short duration, like blinking your eye?",
            "options": ["Hours", "Minutes", "Seconds", "Milliseconds"],
            "correct": 2,
            "explanation": "Seconds are used to measure short durations, but milliseconds are even shorter and more appropriate for very quick actions."
          },
          {
            "question": "What unit of time is used to measure the duration of a school day?",
            "options": ["Seconds", "Minutes", "Hours", "Days"],
            "correct": 2,
            "explanation": "Hours are used to measure the duration of a school day."
          },
          {
            "question": "What unit of time is used to measure how long you sleep at night?",
            "options": ["Seconds", "Minutes", "Hours", "Days"],
            "correct": 2,
            "explanation": "Hours are used to measure sleep duration."
          },
          {
            "question": "What unit of time is used to measure how long it takes to travel to another country?",
            "options": ["Minutes", "Hours", "Days", "Years"],
            "correct": 2,
            "explanation": "Days are used to measure longer durations like travel to another country."
          },
          {
            "question": "What unit of time is used to measure age?",
            "options": ["Days", "Weeks", "Months", "Years"],
            "correct": 3,
            "explanation": "Years are used to measure age."
          },
          {
            "question": "If it is 3:15 PM now, what time will it be in 30 minutes?",
            "options": ["3:30 PM", "3:45 PM", "4:00 PM", "4:15 PM"],
            "correct": 1,
            "explanation": "30 minutes after 3:15 PM is 3:45 PM."
          },
          {
            "question": "If it is 10:45 AM now, what time will it be in 15 minutes?",
            "options": ["10:50 AM", "11:00 AM", "11:15 AM", "11:30 AM"],
            "correct": 1,
            "explanation": "15 minutes after 10:45 AM is 11:00 AM."
          },
          {
            "question": "If it is 7:30 PM now, what time will it be in 1 hour?",
            "options": ["8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"],
            "correct": 2,
            "explanation": "1 hour after 7:30 PM is 8:30 PM."
          },
          {
            "question": "If it was 11:00 AM 2 hours ago, what time is it now?",
            "options": ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
            "correct": 1,
            "explanation": "2 hours after 11:00 AM is 1:00 PM."
          },
          {
            "question": "If it will be 6:00 PM in 3 hours, what time is it now?",
            "options": ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
            "correct": 1,
            "explanation": "3 hours before 6:00 PM is 3:00 PM."
          },
          {
            "question": "How many months have 31 days?",
            "options": ["5", "6", "7", "8"],
            "correct": 2,
            "explanation": "Seven months have 31 days: January, March, May, July, August, October, and December."
          },
          {
            "question": "How many months have 30 days?",
            "options": ["3", "4", "5", "6"],
            "correct": 1,
            "explanation": "Four months have 30 days: April, June, September, and November."
          },
          {
            "question": "Which month comes after June?",
            "options": ["May", "July", "August", "September"],
            "correct": 1,
            "explanation": "July comes after June."
          },
          {
            "question": "Which month comes before October?",
            "options": ["August", "September", "November", "December"],
            "correct": 1,
            "explanation": "September comes before October."
          },
          {
            "question": "What is the 12th month of the year?",
            "options": ["October", "November", "December", "January"],
            "correct": 2,
            "explanation": "December is the 12th and last month of the year."
          },
          {
            "question": "What is the 3rd month of the year?",
            "options": ["January", "February", "March", "April"],
            "correct": 2,
            "explanation": "March is the 3rd month of the year."
          },
          {
            "question": "If today is 5th of May, what will be the date after 7 days?",
            "options": ["10th May", "11th May", "12th May", "13th May"],
            "correct": 2,
            "explanation": "7 days after 5th May is 12th May (5 + 7 = 12)."
          },
          {
            "question": "If today is 20th of June, what was the date 5 days ago?",
            "options": ["14th June", "15th June", "16th June", "17th June"],
            "correct": 1,
            "explanation": "5 days before 20th June was 15th June (20 - 5 = 15)."
          },
          {
            "question": "How many days are there in two weeks?",
            "options": ["7", "10", "14", "21"],
            "correct": 2,
            "explanation": "2 weeks × 7 days/week = 14 days."
          },
          {
            "question": "How many hours are there in 2 days?",
            "options": ["24", "36", "48", "60"],
            "correct": 2,
            "explanation": "2 days × 24 hours/day = 48 hours."
          },
          {
            "question": "How many minutes are there in 2 hours?",
            "options": ["60", "90", "120", "150"],
            "correct": 2,
            "explanation": "2 hours × 60 minutes/hour = 120 minutes."
          },
          {
            "question": "How many seconds are there in 3 minutes?",
            "options": ["60", "120", "180", "240"],
            "correct": 2,
            "explanation": "3 minutes × 60 seconds/minute = 180 seconds."
          },
          {
            "question": "If you start your homework at 4:00 PM and finish at 5:00 PM, how long did you spend on homework?",
            "options": ["30 minutes", "45 minutes", "1 hour", "1 hour 30 minutes"],
            "correct": 2,
            "explanation": "From 4:00 PM to 5:00 PM is 1 hour."
          },
          {
            "question": "If you start playing at 5:30 PM and play for half an hour, when do you finish playing?",
            "options": ["5:45 PM", "6:00 PM", "6:15 PM", "6:30 PM"],
            "correct": 1,
            "explanation": "Half an hour (30 minutes) after 5:30 PM is 6:00 PM."
          },
          {
            "question": "If you wake up at 7:00 AM and leave for school at 7:45 AM, how much time do you have to get ready?",
            "options": ["15 minutes", "30 minutes", "45 minutes", "1 hour"],
            "correct": 2,
            "explanation": "From 7:00 AM to 7:45 AM is 45 minutes."
          },
          {
            "question": "If a class is 40 minutes long and starts at 10:00 AM, when does it end?",
            "options": ["10:30 AM", "10:40 AM", "10:45 AM", "11:00 AM"],
            "correct": 1,
            "explanation": "40 minutes after 10:00 AM is 10:40 AM."
          },
          {
            "question": "If you travel for 3 hours and start at 9:00 AM, when do you arrive?",
            "options": ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"],
            "correct": 1,
            "explanation": "3 hours after 9:00 AM is 12:00 PM (Noon)."
          },
          {
            "question": "What is 60 minutes equal to?",
            "options": ["Half an hour", "One hour", "Two hours", "One day"],
            "correct": 1,
            "explanation": "60 minutes is equal to one hour."
          },
          {
            "question": "What is 24 hours equal to?",
            "options": ["Half a day", "One day", "One week", "One month"],
            "correct": 1,
            "explanation": "24 hours is equal to one day."
          },
          {
            "question": "What is 7 days equal to?",
            "options": ["One day", "One week", "One month", "One year"],
            "correct": 1,
            "explanation": "7 days is equal to one week."
          },
          {
            "question": "What is 12 months equal to?",
            "options": ["One week", "One month", "One year", "One decade"],
            "correct": 2,
            "explanation": "12 months is equal to one year."
          },
          {
            "question": "Which is longer: 1 year or 10 months?",
            "options": ["1 year", "10 months", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "1 year is 12 months, which is longer than 10 months."
          },
          {
            "question": "Which is shorter: 1 week or 10 days?",
            "options": ["1 week", "10 days", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "1 week is 7 days, which is shorter than 10 days."
          },
          {
            "question": "Which is earlier: 7:00 AM or 7:00 PM?",
            "options": ["7:00 AM", "7:00 PM", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "7:00 AM is in the morning, which is earlier than 7:00 PM in the evening."
          },
          {
            "question": "Which is later: 11:00 PM or 11:00 AM?",
            "options": ["11:00 PM", "11:00 AM", "Same", "Cannot tell"],
            "correct": 0,
            "explanation": "11:00 PM is at night, which is later than 11:00 AM in the morning."
          },
          {
            "question": "What time will it be 30 minutes after 2:30 PM?",
            "options": ["2:45 PM", "3:00 PM", "3:15 PM", "3:30 PM"],
            "correct": 1,
            "explanation": "30 minutes after 2:30 PM is 3:00 PM."
          },
          {
            "question": "What time was 15 minutes before 9:15 AM?",
            "options": ["8:45 AM", "9:00 AM", "9:30 AM", "9:45 AM"],
            "correct": 1,
            "explanation": "15 minutes before 9:15 AM is 9:00 AM."
          },
          {
            "question": "If your birthday is in June, which season is it usually in?",
            "options": ["Winter", "Spring", "Summer", "Autumn"],
            "correct": 2,
            "explanation": "June is in the summer season in many parts of the world."
          },
          {
            "question": "If Christmas is in December, which season is it usually in?",
            "options": ["Winter", "Spring", "Summer", "Autumn"],
            "correct": 0,
            "explanation": "December is in the winter season in many parts of the world."
          },
          {
            "question": "If flowers bloom in Spring, which season is it?",
            "options": ["Winter", "Spring", "Summer", "Autumn"],
            "correct": 1,
            "explanation": "Flowers blooming is a characteristic of the Spring season."
          },
          {
            "question": "If leaves fall from trees in Autumn, which season is it?",
            "options": ["Winter", "Spring", "Summer", "Autumn"],
            "correct": 3,
            "explanation": "Leaves falling from trees is a characteristic of the Autumn (or Fall) season."
          },
          {
            "question": "What is the time 3 hours after 10:00 AM?",
            "options": ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"],
            "correct": 1,
            "explanation": "Counting 3 hours from 10:00 AM leads to 1:00 PM."
          },
          {
            "question": "What time was 4 hours before 8:00 PM?",
            "options": ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
            "correct": 2,
            "explanation": "Counting back 4 hours from 8:00 PM leads to 4:00 PM."
          },
          {
            "question": "If you start playing at 4:15 PM and play for 45 minutes, when do you finish?",
            "options": ["4:45 PM", "5:00 PM", "5:15 PM", "5:30 PM"],
            "correct": 1,
            "explanation": "45 minutes after 4:15 PM is 5:00 PM."
          },
          {
            "question": "If you start cooking at 6:00 PM and cook for 1 hour and 15 minutes, when is dinner ready?",
            "options": ["7:00 PM", "7:15 PM", "7:30 PM", "7:45 PM"],
            "correct": 1,
            "explanation": "1 hour and 15 minutes after 6:00 PM is 7:15 PM."
          },
          {
            "question": "If you go to bed at 9:30 PM and wake up after 9 hours, when do you wake up?",
            "options": ["6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM"],
            "correct": 2,
            "explanation": "9 hours after 9:30 PM is 6:30 AM."
          },
          {
            "question": "What is the time 2 hours and 30 minutes after 11:00 AM?",
            "options": ["1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM"],
            "correct": 1,
            "explanation": "2 hours after 11:00 AM is 1:00 PM, and another 30 minutes makes it 1:30 PM."
          },
          {
            "question": "What time was 1 hour and 45 minutes before 4:00 PM?",
            "options": ["1:15 PM", "2:00 PM", "2:15 PM", "2:30 PM"],
            "correct": 2,
            "explanation": "1 hour before 4:00 PM is 3:00 PM, and another 45 minutes before 3:00 PM is 2:15 PM."
          },
          {
            "question": "If school starts at 8:30 AM and finishes at 3:00 PM, how long is the school day?",
            "options": ["5 hours", "5 hours 30 minutes", "6 hours", "6 hours 30 minutes"],
            "correct": 2,
            "explanation": "From 8:30 AM to 3:00 PM is 6 hours and 30 minutes."
          },
          {
            "question": "If you travel for 4 hours and 15 minutes and start at 10:00 AM, when do you arrive?",
            "options": ["1:15 PM", "2:00 PM", "2:15 PM", "2:30 PM"],
            "correct": 2,
            "explanation": "4 hours after 10:00 AM is 2:00 PM, and another 15 minutes makes it 2:15 PM."
          }
         
      ],

      "Data Handling":[
          {
            "question": "Look at the pictograph. Each apple represents 2 fruits. How many fruits do 3 apples represent?",
            "options": [ "2", "6", "5", "3" ],
            "correct": 1,
            "explanation": "Each apple is 2 fruits, so 3 apples are 2 + 2 + 2 = 6 fruits."
          },
          {
            "question": "In a bar graph showing favorite colors, the bar for blue is the tallest. What does this mean?",
            "options": [ "Blue is the least liked color.", "Blue is liked by no one.", "Blue is liked by only one person.", "Blue is the most liked color." ],
            "correct": 3,
            "explanation": "The tallest bar in a bar graph represents the highest value, so blue is the most liked color."
          },
          {
            "question": "If you use tally marks to count 5 items, how would you write it?",
            "options": [ "||||", "///// ", "11111", "|||||" ],
            "correct": 3,
            "explanation": "Tally marks for 5 are written as four vertical lines with a diagonal line across them: |||||."
          },
          {
            "question": "A pictograph shows suns for sunny days. If there are 4 suns, and each sun means 1 day, how many sunny days are there?",
            "options": [ "5", "4", "3", "2" ],
            "correct": 1,
            "explanation": "If each sun represents 1 day, then 4 suns represent 4 sunny days."
          },
          {
            "question": "A bar graph shows the number of students who like cats, dogs, and fish. If the dog bar is shorter than the cat bar, which pet is liked less?",
            "options": [ "Fish", "Cats", "All are liked equally", "Dogs" ],
            "correct": 3,
            "explanation": "A shorter bar means a smaller number, so dogs are liked less than cats."
          },
          {
            "question": "What does a pictograph use to show data?",
            "options": [ "Numbers", "Words", "Pictures", "Lines" ],
            "correct": 2,
            "explanation": "Pictographs use pictures to represent data."
          },
          {
            "question": "What does a bar graph use to show data?",
            "options": [ "Pictures", "Bars", "Numbers", "Tally marks" ],
            "correct": 1,
            "explanation": "Bar graphs use bars of different lengths to represent data."
          },
          {
            "question": "If you counted 7 birds, how many tally marks would you use?",
            "options": [ "||||||||", "|||||||", "||||||", "|||||" ],
            "correct": 1,
            "explanation": "Tally marks for 7 are |||||||."
          },
          {
            "question": "A pictograph shows stars for clear nights. If each star is 2 nights, and there are 2 stars, how many clear nights are there?",
            "options": [ "8", "6", "4", "2" ],
            "correct": 2,
            "explanation": "Each star is 2 nights, so 2 stars are 2 + 2 = 4 clear nights."
          },
          {
            "question": "In a bar graph of favorite fruits, the bar for bananas reaches up to the number 10. How many students like bananas?",
            "options": [ "5", "8", "10", "12" ],
            "correct": 2,
            "explanation": "The height of the bar shows the number of students, so 10 students like bananas."
          },
          {
            "question": "What is the title of a graph for?",
            "options": [ "To make it colorful", "To tell what the graph is about", "To confuse people", "To take up space" ],
            "correct": 1,
            "explanation": "The title of a graph tells you what information the graph is showing."
          },
          {
            "question": "If you have data about the number of rainy days in four months, what is a good way to show this data?",
            "options": [ "Write it in a sentence", "Draw a picture", "Make a bar graph", "Sing a song" ],
            "correct": 2,
            "explanation": "A bar graph is a good way to compare numbers of items, like rainy days in different months."
          },
          {
            "question": "If you see tally marks like |||, how many items are counted?",
            "options": [ "5", "4", "3", "2" ],
            "correct": 2,
            "explanation": "||| represents 3 tally marks, so 3 items are counted."
          },
          {
            "question": "A pictograph uses car pictures to show how many cars are of different colors. If there are 5 red car pictures, and each picture is 1 car, how many red cars are there?",
            "options": [ "6", "5", "4", "3" ],
            "correct": 1,
            "explanation": "If each car picture represents 1 car, then 5 car pictures represent 5 red cars."
          },
          {
            "question": "In a bar graph showing favorite subjects, the bar for Math is shorter than the bar for English. Which subject is less popular?",
            "options": [ "English", "Science", "All are equally popular", "Math" ],
            "correct": 3,
            "explanation": "A shorter bar means less popular, so Math is less popular than English."
          },
          {
            "question": "What do we call the lines that help us read the numbers on the side of a bar graph?",
            "options": [ "Bar lines", "Number lines", "Scale", "Graph lines" ],
            "correct": 2,
            "explanation": "The scale on a bar graph helps us read the numbers represented by the bars."
          },
          {
            "question": "Which of these is NOT a way to handle data?",
            "options": [ "Collecting data", "Drawing pictures of data", "Ignoring data", "Showing data in graphs" ],
            "correct": 2,
            "explanation": "Ignoring data is not handling it; data handling involves collecting, representing, and interpreting data."
          },
          {
            "question": "If you counted 10 flowers, how many tally marks groups of 5 would you have?",
            "options": [ "One", "Two", "Three", "Four" ],
            "correct": 0,
            "explanation": "10 tally marks would be written as ||||| |||||, which is two groups of 5."
          },
          {
            "question": "A pictograph shows houses for different types of homes. If each house picture is 3 homes, and there are 2 house pictures, how many homes are there?",
            "options": [ "9", "6", "5", "3" ],
            "correct": 1,
            "explanation": "Each house picture is 3 homes, so 2 house pictures are 3 + 3 = 6 homes."
          },
          {
            "question": "In a bar graph of favorite animals, the bar for elephants is very short. What does this tell you about elephants?",
            "options": [ "Elephants are very popular.", "Elephants are not liked by many.", "Elephants are only liked by a few.", "Elephants are liked by everyone." ],
            "correct": 1,
            "explanation": "A very short bar means very few people like elephants compared to other animals in the graph."
          },
          {
            "question": "What is the first step in data handling?",
            "options": [ "Drawing graphs", "Collecting data", "Reading graphs", "Explaining data" ],
            "correct": 1,
            "explanation": "The first step in data handling is to collect the data you want to use."
          },
          {
            "question": "Which graph is best for comparing the heights of different students?",
            "options": [ "Pictograph", "Bar graph", "Circle graph", "Line graph" ],
            "correct": 1,
            "explanation": "Bar graphs are excellent for comparing quantities like heights."
          },
          {
            "question": "If you see tally marks like |||| ||, how many items are counted?",
            "options": [ "5", "6", "7", "8" ],
            "correct": 2,
            "explanation": "||||| || represents 5 + 2 = 7 tally marks, so 7 items are counted."
          },
          {
            "question": "A pictograph shows trees for types of trees in a park. If each tree picture is 10 trees, and there are 3 tree pictures, how many trees are there?",
            "options": [ "40", "30", "20", "10" ],
            "correct": 1,
            "explanation": "Each tree picture is 10 trees, so 3 tree pictures are 10 + 10 + 10 = 30 trees."
          },
          {
            "question": "In a bar graph showing favorite games, the bar for football is the longest. Which game is the most favorite?",
            "options": [ "Basketball", "Cricket", "Football", "Tennis" ],
            "correct": 2,
            "explanation": "The longest bar represents the most favorite item, so football is the most favorite game."
          },
          {
            "question": "What is the purpose of showing data in graphs?",
            "options": [ "To make it harder to understand", "To make it easier to see patterns", "To hide the data", "To make it look messy" ],
            "correct": 1,
            "explanation": "Graphs help us see patterns and understand data more easily than just looking at numbers."
          },
          {
            "question": "Which of these is a way to collect data?",
            "options": [ "Drawing", "Counting", "Singing", "Dancing" ],
            "correct": 1,
            "explanation": "Counting is a basic way to collect data, like counting how many students like each color."
          },
          {
            "question": "If you counted 12 pencils, how many tally marks groups of 5 and how many singles would you have?",
            "options": [ "One group of 5 and 7 singles", "Two groups of 5 and 2 singles", "Three groups of 5", "Twelve groups of 1" ],
            "correct": 1,
            "explanation": "12 tally marks would be ||||| ||||| ||, which is two groups of 5 and 2 single tally marks."
          },
          {
            "question": "A pictograph shows books for types of books in a library. If each book picture is 5 books, and there are 4 book pictures, how many books are there?",
            "options": [ "5", "10", "15", "20" ],
            "correct": 3,
            "explanation": "Each book picture is 5 books, so 4 book pictures are 5 + 5 + 5 + 5 = 20 books."
          },
          {
            "question": "In a bar graph of favorite fruits, the bar for grapes is very tall. What does this tell you about grapes?",
            "options": [ "Grapes are liked by everyone.", "Grapes are not liked by anyone.", "Grapes are liked by many.", "Grapes are liked by only a few." ],
            "correct": 2,
            "explanation": "A very tall bar means many people like grapes."
          },
          {
            "question": "What do we call the bottom line of a bar graph where we write the names of items?",
            "options": [ "Vertical line", "Horizontal line", "Title line", "Scale line" ],
            "correct": 1,
            "explanation": "The horizontal line at the bottom of a bar graph is where we usually label the categories or items."
          },
          {
            "question": "Which type of graph uses pictures to represent data?",
            "options": [ "Bar graph", "Line graph", "Pictograph", "Table" ],
            "correct": 2,
            "explanation": "Pictographs are specifically designed to use pictures to represent data."
          },
          {
            "question": "If you see tally marks like ||||| ||||| ||||, how many items are counted?",
            "options": [ "10", "12", "13", "15" ],
            "correct": 2,
            "explanation": "||||| ||||| |||| represents 5 + 5 + 3 = 13 tally marks, so 13 items are counted."
          },
          {
            "question": "A pictograph shows flowers for types of flowers in a garden. If each flower picture is 4 flowers, and there are 3 flower pictures, how many flowers are there?",
            "options": [ "4", "7", "12", "16" ],
            "correct": 2,
            "explanation": "Each flower picture is 4 flowers, so 3 flower pictures are 4 + 4 + 4 = 12 flowers."
          },
          {
            "question": "In a bar graph showing favorite colors, the bar for green is very short. Which color is liked the least?",
            "options": [ "Red", "Blue", "Green", "Yellow" ],
            "correct": 2,
            "explanation": "The shortest bar represents the least liked item, so green is liked the least."
          },
          {
            "question": "What is the vertical line on the side of a bar graph called?",
            "options": [ "Horizontal axis", "Vertical axis", "Base line", "Item line" ],
            "correct": 1,
            "explanation": "The vertical line on the side of a bar graph is called the vertical axis, often showing the scale of numbers."
          },
          {
            "question": "Which of these is NOT a type of graph we learned about?",
            "options": [ "Bar graph", "Pictograph", "Triangle graph", "Circle graph" ],
            "correct": 2,
            "explanation": "While bar graphs, pictographs, and circle graphs are common, \"triangle graph\" is not a standard type for basic data handling."
          },
          {
            "question": "If you counted 18 apples, how many tally marks groups of 5 and how many singles would you have?",
            "options": [ "Two groups of 5 and 8 singles", "Three groups of 5 and 3 singles", "Four groups of 5", "Eighteen singles" ],
            "correct": 1,
            "explanation": "18 tally marks would be ||||| ||||| ||||| |||, which is three groups of 5 and 3 single tally marks."
          },
          {
            "question": "A pictograph shows balloons for colors of balloons at a party. If each balloon picture is 2 balloons, and there are 5 balloon pictures, how many balloons are there?",
            "options": [ "5", "7", "10", "12" ],
            "correct": 2,
            "explanation": "Each balloon picture is 2 balloons, so 5 balloon pictures are 2 + 2 + 2 + 2 + 2 = 10 balloons."
          },
          {
            "question": "In a bar graph of favorite subjects, the bar for Science is taller than the bar for Social Studies. Which subject is more popular?",
            "options": [ "Science", "Social Studies", "Math", "English" ],
            "correct": 0,
            "explanation": "A taller bar means more popular, so Science is more popular than Social Studies."
          },
          {
            "question": "What do we use tally marks for?",
            "options": [ "Drawing pictures", "Counting quickly", "Making graphs colorful", "Writing names" ],
            "correct": 1,
            "explanation": "Tally marks are a quick way to count items as you collect data."
          },
          {
            "question": "Which graph is best for showing parts of a whole, like how much of a pizza is eaten?",
            "options": [ "Bar graph", "Pictograph", "Circle graph", "Line graph" ],
            "correct": 2,
            "explanation": "Circle graphs (or pie charts) are best for showing parts of a whole. (Note: While not explicitly mentioned for Class 3 in the prompt, it's a related concept and good for understanding data representation)."
          },
          {
            "question": "If you see tally marks like ||||| ||||| ||||| |, how many items are counted?",
            "options": [ "10", "12", "13", "16" ],
            "correct": 3,
            "explanation": "||||| ||||| ||||| | represents 5 + 5 + 5 + 1 = 16 tally marks, so 16 items are counted."
          },
          {
            "question": "A pictograph shows smiley faces for happy students. If each smiley face is 4 students, and there are 2 smiley faces, how many happy students are there?",
            "options": [ "2", "4", "6", "8" ],
            "correct": 3,
            "explanation": "Each smiley face is 4 students, so 2 smiley faces are 4 + 4 = 8 happy students."
          },
          {
            "question": "In a bar graph of favorite sports, the bar for swimming is in the middle height. What does this tell you about swimming?",
            "options": [ "Swimming is the most favorite.", "Swimming is the least favorite.", "Swimming is liked by some students.", "Swimming is liked by all students." ],
            "correct": 2,
            "explanation": "A bar of middle height means swimming is liked by a moderate number of students, neither the most nor the least favorite."
          },
          {
            "question": "What is the horizontal line at the bottom of a bar graph called?",
            "options": [ "Vertical axis", "Horizontal axis", "Scale", "Title" ],
            "correct": 1,
            "explanation": "The horizontal line is called the horizontal axis or x-axis."
          },
          {
            "question": "Which of these is NOT a way to represent data visually?",
            "options": [ "Bar graph", "Pictograph", "Tally marks", "Writing in paragraph" ],
            "correct": 3,
            "explanation": "Writing in a paragraph is not a visual representation of data; graphs and pictographs are visual. Tally marks are a form of data recording, but less visual as a final representation compared to graphs."
          },
          {
            "question": "If you counted 23 cars, how many tally marks groups of 5 and how many singles would you have?",
            "options": [ "Four groups of 5 and 3 singles", "Five groups of 5", "Two groups of 10 and 3 singles", "Twenty-three singles" ],
            "correct": 0,
            "explanation": "23 tally marks would be ||||| ||||| ||||| ||||| |||, which is four groups of 5 and 3 single tally marks."
          },
          {
            "question": "A pictograph shows books read by students. Each book picture is 2 books. If a student has 4 book pictures, how many books did they read?",
            "options": [ "2", "4", "6", "8" ],
            "correct": 3,
            "explanation": "Each book picture is 2 books, so 4 book pictures are 2 + 2 + 2 + 2 = 8 books."
          },
          {
            "question": "In a bar graph of favorite ice cream flavors, the bar for chocolate is the tallest, and the bar for vanilla is the shortest. Which flavor is the least favorite?",
            "options": [ "Chocolate", "Strawberry", "Vanilla", "All are equally liked" ],
            "correct": 2,
            "explanation": "The shortest bar represents the least favorite item, so vanilla is the least favorite ice cream flavor."
          }       
      ],

      "Paterns":[
          {
            "question": "What comes next in the pattern: Circle, Square, Circle, Square, _____?",
            "options": ["Triangle", "Circle", "Rectangle", "Star"],
            "correct": 1,
            "explanation": "The pattern is Circle, Square, repeating. So, a Circle comes next."
          },
          {
            "question": "Complete the pattern: 1, 2, 3, 1, 2, 3, _____",
            "options": ["4", "3", "2", "1"],
            "correct": 3,
            "explanation": "The pattern is 1, 2, 3, repeating. So, 1 comes next."
          },
          {
            "question": "What shape is missing in the pattern: Star, Moon, _____, Star, Moon?",
            "options": ["Heart", "Moon", "Star", "Sun"],
            "correct": 1,
            "explanation": "The pattern is Star, Moon, repeating. So, Moon is missing."
          },
          {
            "question": "Find the next number: 2, 4, 6, 8, _____",
            "options": ["11", "12", "9", "10"],
            "correct": 3,
            "explanation": "The pattern is adding 2 each time (even numbers). So, 10 comes next."
          },
          {
            "question": "What comes next: Red, Blue, Yellow, Red, Blue, _____?",
            "options": ["Green", "Red", "Yellow", "Blue"],
            "correct": 2,
            "explanation": "The pattern is Red, Blue, Yellow, repeating. So, Yellow comes next."
          },
          {
            "question": "Complete the sequence: A, B, C, A, B, _____",
            "options": ["D", "C", "B", "A"],
            "correct": 1,
            "explanation": "The pattern is A, B, C, repeating. So, C comes next."
          },
          {
            "question": "What is the missing shape: Up arrow, Down arrow, Right arrow, Up arrow, Down arrow, _____?",
            "options": ["Left arrow", "Up arrow", "Right arrow", "Down arrow"],
            "correct": 2,
            "explanation": "The pattern is Up arrow, Down arrow, Right arrow, repeating. So, Right arrow is missing."
          },
          {
            "question": "Find the next number: 5, 10, 15, 20, _____",
            "options": ["22", "24", "25", "30"],
            "correct": 2,
            "explanation": "The pattern is adding 5 each time (multiples of 5). So, 25 comes next."
          },
          {
            "question": "What color comes next: Green, Orange, Green, Orange, _____?",
            "options": ["Red", "Green", "Orange", "Blue"],
            "correct": 2,
            "explanation": "The pattern is Green, Orange, repeating. So, Orange comes next."
          },
          {
            "question": "Complete the pattern: Apple, Banana, Apple, Banana, _____",
            "options": ["Orange", "Banana", "Apple", "Grapes"],
            "correct": 2,
            "explanation": "The pattern is Apple, Banana, repeating. So, Apple comes next."
          },
          {
            "question": "What shape is next: Triangle, Triangle, Square, Triangle, Triangle, Square, _____?",
            "options": ["Circle", "Triangle", "Square", "Rectangle"],
            "correct": 1,
            "explanation": "The pattern is Triangle, Triangle, Square, repeating. So, Triangle comes next."
          },
          {
            "question": "Find the next number: 10, 20, 30, 40, _____",
            "options": ["45", "55", "50", "60"],
            "correct": 2,
            "explanation": "The pattern is adding 10 each time (multiples of 10). So, 50 comes next."
          },
          {
            "question": "What comes next: Cat, Dog, Cat, Dog, _____?",
            "options": ["Fish", "Cat", "Dog", "Bird"],
            "correct": 1,
            "explanation": "The pattern is Cat, Dog, repeating. So, Cat comes next."
          },
          {
            "question": "Complete the sequence: Red, Red, Blue, Red, Red, Blue, _____",
            "options": ["Yellow", "Red", "Blue", "Green"],
            "correct": 1,
            "explanation": "The pattern is Red, Red, Blue, repeating. So, Red comes next."
          },
          {
            "question": "What shape is missing: Heart, Star, _____, Heart, Star?",
            "options": ["Circle", "Heart", "Star", "Diamond"],
            "correct": 2,
            "explanation": "The pattern is Heart, Star, repeating. So, Star is missing."
          },
          {
            "question": "Find the next number: 3, 6, 9, 12, _____",
            "options": ["14", "15", "16", "18"],
            "correct": 1,
            "explanation": "The pattern is adding 3 each time (multiples of 3). So, 15 comes next."
          },
          {
            "question": "What color comes next: Purple, Pink, Purple, Pink, _____?",
            "options": ["White", "Purple", "Pink", "Black"],
            "correct": 2,
            "explanation": "The pattern is Purple, Pink, repeating. So, Pink comes next."
          },
          {
            "question": "Complete the pattern: Ball, Bat, Ball, Bat, _____",
            "options": ["Stumps", "Bat", "Ball", "Gloves"],
            "correct": 2,
            "explanation": "The pattern is Ball, Bat, repeating. So, Ball comes next."
          },
          {
            "question": "What shape is next: Square, Circle, Triangle, Square, Circle, _____?",
            "options": ["Rectangle", "Square", "Triangle", "Circle"],
            "correct": 2,
            "explanation": "The pattern is Square, Circle, Triangle, repeating. So, Triangle comes next."
          },
          {
            "question": "Find the next number: 4, 8, 12, 16, _____",
            "options": ["18", "22", "20", "24"],
            "correct": 2,
            "explanation": "The pattern is adding 4 each time (multiples of 4). So, 20 comes next."
          },
          {
            "question": "What comes next: Sun, Cloud, Sun, Cloud, _____?",
            "options": ["Rain", "Sun", "Cloud", "Moon"],
            "correct": 1,
            "explanation": "The pattern is Sun, Cloud, repeating. So, Sun comes next."
          },
          {
            "question": "Complete the sequence: 1, 3, 5, 7, _____",
            "options": ["8", "9", "10", "11"],
            "correct": 1,
            "explanation": "The pattern is adding 2 each time (odd numbers). So, 9 comes next."
          },
          {
            "question": "What shape is missing: Rectangle, Circle, _____, Rectangle, Circle?",
            "options": ["Square", "Rectangle", "Circle", "Triangle"],
            "correct": 2,
            "explanation": "The pattern is Rectangle, Circle, repeating. So, Circle is missing."
          },
          {
            "question": "Find the next number: 6, 12, 18, 24, _____",
            "options": ["28", "32", "30", "36"],
            "correct": 2,
            "explanation": "The pattern is adding 6 each time (multiples of 6). So, 30 comes next."
          },
          {
            "question": "What color comes next: Yellow, Green, Yellow, Green, _____?",
            "options": ["Blue", "Yellow", "Green", "Red"],
            "correct": 2,
            "explanation": "The pattern is Yellow, Green, repeating. So, Green comes next."
          },
          {
            "question": "Complete the pattern: Book, Pencil, Book, Pencil, _____",
            "options": ["Eraser", "Pencil", "Book", "Sharpener"],
            "correct": 2,
            "explanation": "The pattern is Book, Pencil, repeating. So, Book comes next."
          },
          {
            "question": "What shape is next: Heart, Heart, Moon, Heart, Heart, Moon, _____?",
            "options": ["Star", "Heart", "Moon", "Circle"],
            "correct": 1,
            "explanation": "The pattern is Heart, Heart, Moon, repeating. So, Heart comes next."
          },
          {
            "question": "Find the next number: 7, 14, 21, 28, _____",
            "options": ["30", "32", "35", "42"],
            "correct": 2,
            "explanation": "The pattern is adding 7 each time (multiples of 7). So, 35 comes next."
          },
          {
            "question": "What comes next: Tree, Flower, Tree, Flower, _____?",
            "options": ["Grass", "Tree", "Flower", "Bush"],
            "correct": 1,
            "explanation": "The pattern is Tree, Flower, repeating. So, Tree comes next."
          },
          {
            "question": "Complete the sequence: 2, 5, 8, 11, _____",
            "options": ["12", "13", "14", "15"],
            "correct": 2,
            "explanation": "The pattern is adding 3 each time. So, 14 comes next."
          },
          {
            "question": "What shape is missing: Oval, Square, _____, Oval, Square?",
            "options": ["Circle", "Oval", "Square", "Rectangle"],
            "correct": 2,
            "explanation": "The pattern is Oval, Square, repeating. So, Square is missing."
          },
          {
            "question": "Find the next number: 8, 16, 24, 32, _____",
            "options": ["36", "40", "44", "48"],
            "correct": 1,
            "explanation": "The pattern is adding 8 each time (multiples of 8). So, 40 comes next."
          },
          {
            "question": "What color comes next: Blue, Red, Blue, Red, _____?",
            "options": ["Yellow", "Blue", "Red", "Green"],
            "correct": 2,
            "explanation": "The pattern is Blue, Red, repeating. So, Red comes next."
          },
          {
            "question": "Complete the pattern: Car, Bus, Car, Bus, _____",
            "options": ["Bike", "Bus", "Car", "Truck"],
            "correct": 2,
            "explanation": "The pattern is Car, Bus, repeating. So, Car comes next."
          },
          {
            "question": "What shape is next: Moon, Star, Circle, Moon, Star, _____?",
            "options": ["Square", "Moon", "Circle", "Star"],
            "correct": 2,
            "explanation": "The pattern is Moon, Star, Circle, repeating. So, Circle comes next."
          },
          {
            "question": "Find the next number: 9, 18, 27, 36, _____",
            "options": ["40", "45", "48", "54"],
            "correct": 1,
            "explanation": "The pattern is adding 9 each time (multiples of 9). So, 45 comes next."
          },
          {
            "question": "What comes next: Cloud, Rain, Cloud, Rain, _____?",
            "options": ["Sun", "Cloud", "Rain", "Snow"],
            "correct": 1,
            "explanation": "The pattern is Cloud, Rain, repeating. So, Cloud comes next."
          },
          {
            "question": "Complete the sequence: 4, 7, 10, 13, _____",
            "options": ["14", "15", "16", "17"],
            "correct": 2,
            "explanation": "The pattern is adding 3 each time. So, 16 comes next."
          },
          {
            "question": "What shape is missing: Diamond, Circle, _____, Diamond, Circle?",
            "options": ["Square", "Diamond", "Circle", "Heart"],
            "correct": 2,
            "explanation": "The pattern is Diamond, Circle, repeating. So, Circle is missing."
          },
          {
            "question": "Find the next number: 11, 22, 33, 44, _____",
            "options": ["50", "55", "66", "77"],
            "correct": 1,
            "explanation": "The pattern is adding 11 each time (multiples of 11). So, 55 comes next."
          },
          {
            "question": "What color comes next: Black, White, Black, White, _____?",
            "options": ["Gray", "Black", "White", "Red"],
            "correct": 2,
            "explanation": "The pattern is Black, White, repeating. So, White comes next."
          },
          {
            "question": "Complete the pattern: Table, Chair, Table, Chair, _____",
            "options": ["Sofa", "Chair", "Table", "Desk"],
            "correct": 2,
            "explanation": "The pattern is Table, Chair, repeating. So, Table comes next."
          },
          {
            "question": "What shape is next: Circle, Triangle, Heart, Circle, Triangle, _____?",
            "options": ["Square", "Circle", "Heart", "Triangle"],
            "correct": 2,
            "explanation": "The pattern is Circle, Triangle, Heart, repeating. So, Heart comes next."
          },
          {
            "question": "Find the next number: 12, 24, 36, 48, _____",
            "options": ["50", "55", "60", "72"],
            "correct": 2,
            "explanation": "The pattern is adding 12 each time (multiples of 12). So, 60 comes next."
          },
          {
            "question": "What comes next: Book, Eraser, Book, Eraser, _____?",
            "options": ["Pencil", "Book", "Eraser", "Sharpener"],
            "correct": 1,
            "explanation": "The pattern is Book, Eraser, repeating. So, Book comes next."
          },
          {
            "question": "Complete the sequence: 5, 8, 11, 14, _____",
            "options": ["15", "16", "17", "18"],
            "correct": 2,
            "explanation": "The pattern is adding 3 each time. So, 17 comes next."
          },
          {
            "question": "What shape is missing: Pentagon, Hexagon, _____, Pentagon, Hexagon?",
            "options": ["Square", "Pentagon", "Hexagon", "Circle"],
            "correct": 2,
            "explanation": "The pattern is Pentagon, Hexagon, repeating. So, Hexagon is missing."
          },
          {
            "question": "Find the next number: 20, 30, 40, 50, _____",
            "options": ["55", "60", "65", "70"],
            "correct": 1,
            "explanation": "The pattern is adding 10 each time. So, 60 comes next."
          },
          {
            "question": "What color comes next: Red, Green, Blue, Red, Green, _____?",
            "options": ["Yellow", "Red", "Blue", "Green"],
            "correct": 2,
            "explanation": "The pattern is Red, Green, Blue, repeating. So, Blue comes next."
          },
          {
            "question": "Complete the pattern: Shirt, Pant, Shirt, Pant, _____",
            "options": ["Shoes", "Pant", "Shirt", "Hat"],
            "correct": 2,
            "explanation": "The pattern is Shirt, Pant, repeating. So, Shirt comes next."
          },
          {
            "question": "What shape is next: Star, Circle, Square, Star, Circle, _____?",
            "options": ["Rectangle", "Star", "Square", "Circle"],
            "correct": 2,
            "explanation": "The pattern is Star, Circle, Square, repeating. So, Square comes next."
          }
        
      ]
    },

    "Science": {
      "Plants": [
        { question: "What is the main part of a plant?", options: ["Root", "Stem", "Leaf", "Flower"], correct: 2, explanation: "The main part of a plant is the leaf." },
        { question: "What do plants need to grow?", options: ["Water", "Sunlight", "Soil", "All of the above"], correct: 3, explanation: "Plants need water, sunlight, and soil to grow." }
      ],
      "Animals": [
        { question: "Which animal is known as the king of the jungle?", options: ["Elephant", "Lion", "Tiger", "Giraffe"], correct: 1, explanation: "The lion is known as the king of the jungle." },
        { question: "Which animal is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Rhinoceros"], correct: 1, explanation: "The blue whale is the largest mammal." }
      ],
      "Weather": [
        { question: "What do we call water falling from the sky?", options: ["Rain", "Snow", "Hail", "All of the above"], correct: 3, explanation: "All of the above are forms of precipitation." },
        { question: "What is a bright flash of light during a storm?", options: ["Thunder", "Lightning", "Rainbow", "Wind"], correct: 1, explanation: "Lightning is a bright flash of light during a storm." }
      ]
    },
    "English": {
      "Alphabet": [
        { question: "What is the first letter of the alphabet?", options: ["A", "B", "C", "D"], correct: 0, explanation: "The first letter of the alphabet is A." },
        { question: "What is the last letter of the alphabet?", options: ["X", "Y", "Z", "W"], correct: 2, explanation: "The last letter of the alphabet is Z." }
      ],
      "Words": [
        { question: "What is a synonym for 'happy'?", options: ["Sad", "Joyful", "Angry", "Scared"], correct: 1, explanation: "Joyful is a synonym for 'happy'." },
        { question: "What is an antonym for 'big'?", options: ["Large", "Huge", "Small", "Tall"], correct: 2, explanation: "Small is an antonym for 'big'." }
      ],
      "Sentences": [
        { question: "What is a sentence?", options: ["A single word", "A group of words that make sense", "A punctuation mark", "A paragraph"], correct: 1, explanation: "A sentence is a group of words that make sense." },
        { question: "What ends a sentence?", options: ["Comma", "Question mark", "Period", "Exclamation mark"], correct: 2, explanation: "A period ends a sentence." }
      ]
    }
  },
  "Class 2": {
    "Mathematics": {
      "Multiplication": [
        { question: "What is 2 x 2?", options: ["2", "4", "6", "8"], correct: 1, explanation: "2 x 2 equals 4." },
        { question: "What is 3 x 3?", options: ["6", "9", "12", "15"], correct: 1, explanation: "3 x 3 equals 9." },
        { question: "What is 4 x 5?", options: ["10", "15", "20", "25"], correct: 2, explanation: "4 x 5 equals 20." },
        { question: "What is 6 x 2?", options: ["10", "12", "14", "16"], correct: 1, explanation: "6 x 2 equals 12." },
        { question: "What is 7 x 3?", options: ["16", "18", "21", "24"], correct: 2, explanation: "7 x 3 equals 21." }
      ],
      "Division": [
        { question: "What is 10 ÷ 2?", options: ["2", "3", "4", "5"], correct: 3, explanation: "10 ÷ 2 equals 5." },
        { question: "What is 9 ÷ 3?", options: ["2", "3", "4", "5"], correct: 1, explanation: "9 ÷ 3 equals 3." },
        { question: "What is 15 ÷ 5?", options: ["2", "3", "4", "5"], correct: 3, explanation: "15 ÷ 5 equals 3." },
        { question: "What is 20 ÷ 4?", options: ["2", "3", "4", "5"], correct: 2, explanation: "20 ÷ 4 equals 5." },
        { question: "What is 18 ÷ 6?", options: ["2", "3", "4", "5"], correct: 1, explanation: "18 ÷ 6 equals 3." }
      ], 
      "Fractions": [
        { question: "What is 1/2 of 4?", options: ["1", "2", "3", "4"], correct: 1, explanation: "1/2 of 4 equals 2." },
        { question: "What is 1/3 of 9?", options: ["2", "3", "4", "5"], correct: 1, explanation: "1/3 of 9 equals 3." },
        { question: "What is 2/4 of 8?", options: ["2", "4", "6", "8"], correct: 2, explanation: "2/4 of 8 equals 4." },
        { question: "What is 3/5 of 15?", options: ["3", "6", "9", "12"], correct: 2, explanation: "3/5 of 15 equals 9." },
        { question: "What is 4/6 of 24?", options: ["4", "8", "12", "16"], correct: 2, explanation: "4/6 of 24 equals 12." }
      ]
    },
    "Science": {
      "Human Body": [
        { question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Lungs"], correct: 2, explanation: "The skin is the largest organ in the human body." },
        { question: "What is the main function of the heart?", options: ["Pumping blood", "Digesting food", "Breathing", "Thinking"], correct: 0, explanation: "The main function of the heart is pumping blood." }
      ],
      "Space": [
        { question: "What is the closest planet to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], correct: 0, explanation: "Mercury is the closest planet to the Sun." },
        { question: "What is the largest planet in our solar system?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 0, explanation: "Jupiter is the largest planet in our solar system." }
      ],
      "Forces": [
        { question: "What force keeps us on the ground?", options: ["Gravity", "Magnetism", "Friction", "Tension"], correct: 0, explanation: "Gravity is the force that keeps us on the ground." },
        { question: "What force makes objects fall to the ground?", options: ["Lift", "Thrust", "Drag", "Gravity"], correct: 3, explanation: "Gravity makes objects fall to the ground." }
      ]
    },
    "English": {
      "Grammar": [
        { question: "What is a noun?", options: ["Person, place, or thing", "Action word", "Describing word", "Pronoun"], correct: 0, explanation: "A noun is a person, place, or thing." },
        { question: "What is a verb?", options: ["Person, place, or thing", "Action word", "Describing word", "Pronoun"], correct: 1, explanation: "A verb is an action word." }
      ],
      "Reading": [
        { question: "What is the process of understanding written words?", options: ["Writing", "Reading", "Speaking", "Listening"], correct: 1, explanation: "Reading is the process of understanding written words." },
        { question: "What do you use to read a book?", options: ["Eyes", "Ears", "Nose", "Mouth"], correct: 0, explanation: "You use your eyes to read a book." }
      ],
      "Writing": [
        { question: "What is the process of putting words on paper?", options: ["Reading", "Writing", "Speaking", "Listening"], correct: 1, explanation: "Writing is the process of putting words on paper." },
        { question: "What do you use to write with?", options: ["Pencil", "Eraser", "Ruler", "Calculator"], correct: 0, explanation: "You use a pencil to write with." }
      ]
    }
  },
  "Class 3": {
    "Mathematics": {
      "Numbers": [
        { question: "Write the number 345 in words.", options: ["Three hundred forty-five", "Three hundred fifty-four", "Four hundred thirty-five", "Three hundred forty-four"], correct: 0, explanation: "The number 345 in words is 'Three hundred forty-five'." },
        { question: "Write the number 789 in words.", options: ["Seven hundred eighty-nine", "Seven hundred ninety-eight", "Eight hundred seventy-nine", "Seven hundred eighty-eight"], correct: 0, explanation: "The number 789 in words is 'Seven hundred eighty-nine'." },
        { question: "Write the number 102 in words.", options: ["One hundred two", "One hundred twenty", "Two hundred one", "One hundred twelve"], correct: 0, explanation: "The number 102 in words is 'One hundred two'." },
        { question: "Write the number 456 in words.", options: ["Four hundred fifty-six", "Four hundred sixty-five", "Five hundred forty-six", "Four hundred fifty-five"], correct: 0, explanation: "The number 456 in words is 'Four hundred fifty-six'." },
        { question: "Write the number 999 in words.", options: ["Nine hundred ninety-nine", "Nine hundred ninety-eight", "Nine hundred eighty-nine", "Nine hundred ninety"], correct: 0, explanation: "The number 999 in words is 'Nine hundred ninety-nine'." },
        { question: "Write the number 123 in words.", options: ["One hundred twenty-three", "One hundred thirty-two", "Two hundred thirteen", "One hundred twenty-two"], correct: 0, explanation: "The number 123 in words is 'One hundred twenty-three'." },
        { question: "Write the number 678 in words.", options: ["Six hundred seventy-eight", "Six hundred eighty-seven", "Seven hundred sixty-eight", "Six hundred seventy-seven"], correct: 0, explanation: "The number 678 in words is 'Six hundred seventy-eight'." },
        { question: "Write the number 234 in words.", options: ["Two hundred thirty-four", "Two hundred forty-three", "Three hundred twenty-four", "Two hundred thirty-three"], correct: 0, explanation: "The number 234 in words is 'Two hundred thirty-four'." },
        { question: "Write the number 890 in words.", options: ["Eight hundred ninety", "Eight hundred ninety-one", "Nine hundred eighty", "Eight hundred eighty-nine"], correct: 0, explanation: "The number 890 in words is 'Eight hundred ninety'." },
        { question: "Write the number 567 in words.", options: ["Five hundred sixty-seven", "Five hundred seventy-six", "Six hundred fifty-seven", "Five hundred sixty-six"], correct: 0, explanation: "The number 567 in words is 'Five hundred sixty-seven'." },
        { question: "What is the place value of 5 in the number 456?", options: ["5", "50", "500", "5000"], correct: 1, explanation: "The place value of 5 in 456 is 50." },
        { question: "What is the place value of 7 in the number 789?", options: ["7", "70", "700", "7000"], correct: 2, explanation: "The place value of 7 in 789 is 700." },
        { question: "What is the place value of 3 in the number 123?", options: ["3", "30", "300", "3000"], correct: 0, explanation: "The place value of 3 in 123 is 3." },
        { question: "What is the place value of 9 in the number 999?", options: ["9", "90", "900", "9000"], correct: 2, explanation: "The place value of 9 in 999 is 900." },
        { question: "What is the place value of 2 in the number 234?", options: ["2", "20", "200", "2000"], correct: 2, explanation: "The place value of 2 in 234 is 200." },
        { question: "What is the place value of 8 in the number 890?", options: ["8", "80", "800", "8000"], correct: 2, explanation: "The place value of 8 in 890 is 800." },
        { question: "What is the place value of 6 in the number 678?", options: ["6", "60", "600", "6000"], correct: 2, explanation: "The place value of 6 in 678 is 600." },
        { question: "What is the place value of 4 in the number 345?", options: ["4", "40", "400", "4000"], correct: 1, explanation: "The place value of 4 in 345 is 40." },
        { question: "What is the place value of 1 in the number 102?", options: ["1", "10", "100", "1000"], correct: 2, explanation: "The place value of 1 in 102 is 100." },
        { question: "What is the place value of 0 in the number 102?", options: ["0", "10", "100", "1000"], correct: 1, explanation: "The place value of 0 in 102 is 10." },
        { question: "Write the number 345 in expanded form.", options: ["300 + 40 + 5", "300 + 50 + 4", "30 + 40 + 5", "300 + 45"], correct: 0, explanation: "The expanded form of 345 is 300 + 40 + 5." },
        { question: "Write the number 789 in expanded form.", options: ["700 + 80 + 9", "700 + 90 + 8", "70 + 80 + 9", "700 + 89"], correct: 0, explanation: "The expanded form of 789 is 700 + 80 + 9." },
        { question: "Write the number 102 in expanded form.", options: ["100 + 2", "100 + 20", "10 + 2", "100 + 0 + 2"], correct: 3, explanation: "The expanded form of 102 is 100 + 0 + 2." },
        { question: "Write the number 456 in expanded form.", options: ["400 + 50 + 6", "400 + 60 + 5", "40 + 50 + 6", "400 + 56"], correct: 0, explanation: "The expanded form of 456 is 400 + 50 + 6." },
        { question: "Write the number 999 in expanded form.", options: ["900 + 90 + 9", "900 + 99", "90 + 90 + 9", "900 + 90"], correct: 0, explanation: "The expanded form of 999 is 900 + 90 + 9." },
        { question: "Write the number 123 in expanded form.", options: ["100 + 20 + 3", "100 + 30 + 2", "10 + 20 + 3", "100 + 23"], correct: 0, explanation: "The expanded form of 123 is 100 + 20 + 3." },
        { question: "Write the number 678 in expanded form.", options: ["600 + 70 + 8", "600 + 80 + 7", "60 + 70 + 8", "600 + 78"], correct: 0, explanation: "The expanded form of 678 is 600 + 70 + 8." },
        { question: "Write the number 234 in expanded form.", options: ["200 + 30 + 4", "200 + 40 + 3", "20 + 30 + 4", "200 + 34"], correct: 0, explanation: "The expanded form of 234 is 200 + 30 + 4." },
        { question: "Write the number 890 in expanded form.", options: ["800 + 90", "800 + 90 + 0", "80 + 90", "800 + 9"], correct: 1, explanation: "The expanded form of 890 is 800 + 90 + 0." },
        { question: "Write the number 567 in expanded form.", options: ["500 + 60 + 7", "500 + 70 + 6", "50 + 60 + 7", "500 + 67"], correct: 0, explanation: "The expanded form of 567 is 500 + 60 + 7." },
        { question: "What number comes after 345?", options: ["344", "346", "347", "348"], correct: 1, explanation: "The number that comes after 345 is 346." },
        { question: "What number comes after 789?", options: ["788", "790", "791", "792"], correct: 1, explanation: "The number that comes after 789 is 790." },
        { question: "What number comes after 102?", options: ["101", "103", "104", "105"], correct: 1, explanation: "The number that comes after 102 is 103." },
        { question: "What number comes after 456?", options: ["455", "457", "458", "459"], correct: 1, explanation: "The number that comes after 456 is 457." },
        { question: "What number comes after 999?", options: ["998", "1000", "1001", "1002"], correct: 1, explanation: "The number that comes after 999 is 1000." },
        { question: "What number comes after 123?", options: ["122", "124", "125", "126"], correct: 1, explanation: "The number that comes after 123 is 124." },
        { question: "What number comes after 678?", options: ["677", "679", "680", "681"], correct: 1, explanation: "The number that comes after 678 is 679." },
        { question: "What number comes after 234?", options: ["233", "235", "236", "237"], correct: 1, explanation: "The number that comes after 234 is 235." },
        { question: "What number comes after 890?", options: ["889", "891", "892", "893"], correct: 1, explanation: "The number that comes after 890 is 891." },
        { question: "What number comes after 567?", options: ["566", "568", "569", "570"], correct: 1, explanation: "The number that comes after 567 is 568." },
        { question: "What number comes before 345?", options: ["344", "346", "347", "348"], correct: 0, explanation: "The number that comes before 345 is 344." },
        { question: "What number comes before 789?", options: ["788", "790", "791", "792"], correct: 0, explanation: "The number that comes before 789 is 788." },
        { question: "What number comes before 102?", options: ["101", "103", "104", "105"], correct: 0, explanation: "The number that comes before 102 is 101." },
        { question: "What number comes before 456?", options: ["455", "457", "458", "459"], correct: 0, explanation: "The number that comes before 456 is 455." },
        { question: "What number comes before 999?", options: ["998", "1000", "1001", "1002"], correct: 0, explanation: "The number that comes before 999 is 998." },
        { question: "What number comes before 123?", options: ["122", "124", "125", "126"], correct: 0, explanation: "The number that comes before 123 is 122." },
        { question: "What number comes before 678?", options: ["677", "679", "680", "681"], correct: 0, explanation: "The number that comes before 678 is 677." },
        { question: "What number comes before 234?", options: ["233", "235", "236", "237"], correct: 0, explanation: "The number that comes before 234 is 233." },
        { question: "What number comes before 890?", options: ["889", "891", "892", "893"], correct: 0, explanation: "The number that comes before 890 is 889." },
        { question: "What number comes before 567?", options: ["566", "568", "569", "570"], correct: 0, explanation: "The number that comes before 567 is 566." },
        { question: "What is the smallest 3-digit number?", options: ["100", "101", "102", "103"], correct: 0, explanation: "The smallest 3-digit number is 100." },
        { question: "What is the largest 3-digit number?", options: ["998", "999", "1000", "1001"], correct: 1, explanation: "The largest 3-digit number is 999." },
        { question: "What is the sum of 123 and 456?", options: ["578", "579", "580", "581"], correct: 1, explanation: "The sum of 123 and 456 is 579." },
        { question: "What is the sum of 789 and 210?", options: ["998", "999", "1000", "1001"], correct: 1, explanation: "The sum of 789 and 210 is 999." },
        { question: "What is the sum of 345 and 678?", options: ["1022", "1023", "1024", "1025"], correct: 1, explanation: "The sum of 345 and 678 is 1023." },
        { question: "What is the sum of 234 and 567?", options: ["800", "801", "802", "803"], correct: 1, explanation: "The sum of 234 and 567 is 801." },
        { question: "What is the sum of 890 and 123?", options: ["1012", "1013", "1014", "1015"], correct: 1, explanation: "The sum of 890 and 123 is 1013." },
        { question: "What is the sum of 456 and 789?", options: ["1244", "1245", "1246", "1247"], correct: 1, explanation: "The sum of 456 and 789 is 1245." },
        { question: "What is the sum of 678 and 234?", options: ["911", "912", "913", "914"], correct: 1, explanation: "The sum of 678 and 234 is 912." },
        { question: "What is the sum of 567 and 890?", options: ["1456", "1457", "1458", "1459"], correct: 1, explanation: "The sum of 567 and 890 is 1457." },
        { question: "What is the difference between 789 and 456?", options: ["332", "333", "334", "335"], correct: 1, explanation: "The difference between 789 and 456 is 333." },
        { question: "What is the difference between 678 and 345?", options: ["332", "333", "334", "335"], correct: 2, explanation: "The difference between 678 and 345 is 333." },
        { question: "What is the difference between 567 and 234?", options: ["332", "333", "334", "335"], correct: 2, explanation: "The difference between 567 and 234 is 333." },
        { question: "What is the difference between 456 and 123?", options: ["332", "333", "334", "335"], correct: 2, explanation: "The difference between 456 and 123 is 333." },
        { question: "What is the difference between 345 and 102?", options: ["242", "243", "244", "245"], correct: 1, explanation: "The difference between 345 and 102 is 243." },
        { question: "What is the difference between 234 and 789?", options: ["554", "555", "556", "557"], correct: 1, explanation: "The difference between 234 and 789 is 555." },
        { question: "What is the difference between 123 and 678?", options: ["554", "555", "556", "557"], correct: 2, explanation: "The difference between 123 and 678 is 555." },
        { question: "What is the difference between 890 and 567?", options: ["322", "323", "324", "325"], correct: 2, explanation: "The difference between 890 and 567 is 323." },
        { question: "What is the difference between 999 and 456?", options: ["542", "543", "544", "545"], correct: 1, explanation: "The difference between 999 and 456 is 543." },
        { question: "What is the difference between 678 and 123?", options: ["554", "555", "556", "557"], correct: 2, explanation: "The difference between 678 and 123 is 555." },
        { question: "Multiply 123 by 2.", options: ["244", "245", "246", "247"], correct: 2, explanation: "123 multiplied by 2 is 246." },
        { question: "Multiply 234 by 3.", options: ["700", "701", "702", "703"], correct: 2, explanation: "234 multiplied by 3 is 702." },
        { question: "Multiply 345 by 4.", options: ["1378", "1379", "1380", "1381"], correct: 2, explanation: "345 multiplied by 4 is 1380." },
        { question: "Multiply 456 by 5.", options: ["2278", "2279", "2280", "2281"], correct: 2, explanation: "456 multiplied by 5 is 2280." },
        { question: "Multiply 567 by 6.", options: ["3400", "3401", "3402", "3403"], correct: 2, explanation: "567 multiplied by 6 is 3402." },
        { question: "Multiply 678 by 7.", options: ["4744", "4745", "4746", "4747"], correct: 2, explanation: "678 multiplied by 7 is 4746." }
      
      ],
   "Addition": [
       { question: "What is 10 + 5?", options: ["13", "14", "15", "16"], correct: 2, explanation: "10 + 5 equals 15." },
       { question: "What is 20 + 30?", options: ["40", "50", "60", "70"], correct: 1, explanation: "20 + 30 equals 50." },
       { question: "What is 45 + 25?", options: ["60", "65", "70", "75"], correct: 2, explanation: "45 + 25 equals 70." },
       { question: "What is 100 + 200?", options: ["200", "250", "300", "350"], correct: 2, explanation: "100 + 200 equals 300." },
       { question: "What is 150 + 150?", options: ["250", "300", "350", "400"], correct: 1, explanation: "150 + 150 equals 300." },
       { question: "What is 75 + 25?", options: ["90", "95", "100", "105"], correct: 2, explanation: "75 + 25 equals 100." },
       { question: "What is 60 + 40?", options: ["90", "95", "100", "105"], correct: 2, explanation: "60 + 40 equals 100." },
       { question: "What is 80 + 20?", options: ["90", "95", "100", "105"], correct: 2, explanation: "80 + 20 equals 100." },
       { question: "What is 90 + 10?", options: ["90", "95", "100", "105"], correct: 2, explanation: "90 + 10 equals 100." },
       { question: "What is 55 + 45?", options: ["90", "95", "100", "105"], correct: 2, explanation: "55 + 45 equals 100." },
       { question: "What is 25 + 75?", options: ["90", "95", "100", "105"], correct: 2, explanation: "25 + 75 equals 100." },
       { question: "What is 35 + 65?", options: ["90", "95", "100", "105"], correct: 2, explanation: "35 + 65 equals 100." },
       {question: "What is 50 + 50?", options: ["90", "95", "100", "105"], correct: 2, explanation: "50 + 50 equals 100." },
       { question: "What is 40 + 60?", options: ["90", "95", "100", "105"], correct: 2, explanation: "40 + 60 equals 100." },
      { question: "What is 70 + 30?", options: ["90", "95", "100", "105"], correct: 2, explanation: "70 + 30 equals 100." },
      { question: "What is 85 + 15?", options: ["90", "95", "100", "105"], correct: 2, explanation: "85 + 15 equals 100." },
      { question: "What is 95 + 5?", options: ["90", "95", "100", "105"], correct: 2, explanation: "95 + 5 equals 100." },
      { question: "What is 65 + 35?", options: ["90", "95", "100", "105"], correct: 2, explanation: "65 + 35 equals 100." },
      { question: "What is 55 + 55?", options: ["90", "95", "100", "105"], correct: 2, explanation: "55 + 55 equals 110." },
      { question: "What is 45 + 55?", options: ["90", "95", "100", "105"], correct: 2, explanation: "45 + 55 equals 100." },
      { question: "What is 35 + 75?", options: ["90", "95", "100", "105"], correct: 2, explanation: "35 + 75 equals 110." },
      { question: "What is 25 + 85?", options: ["90", "95", "100", "105"], correct: 2, explanation: "25 + 85 equals 110." },
      { question: "What is 15 + 95?", options: ["90", "95", "100", "105"], correct: 2, explanation: "15 + 95 equals 110." },
      { question: "What is 5 + 105?", options: ["90", "95", "100", "105"], correct: 2, explanation: "5 + 105 equals 110." },
      { question: "What is 10 + 100?", options: ["90", "95", "100", "110"], correct: 3, explanation: "10 + 100 equals 110." },
      { question: "What is 20 + 90?", options: ["90", "95", "100", "110"], correct: 3, explanation: "20 + 90 equals 110." },
      { question: "What is 30 + 80?", options: ["90", "95", "100", "110"], correct: 3, explanation: "30 + 80 equals 110." },
      { question: "What is 40 + 70?", options: ["90", "95", "100", "110"], correct: 3, explanation: "40 + 70 equals 110." },
      { question: "What is 50 + 60?", options: ["90", "95", "100", "110"], correct: 3, explanation: "50 + 60 equals 110." },
      { question: "What is 60 + 50?", options: ["90", "95", "100", "110"], correct: 3, explanation: "60 + 50 equals 110." },
      { question: "What is 70 + 40?", options: ["90", "95", "100", "110"], correct: 3, explanation: "70 + 40 equals 110." },
      { question: "What is 80 + 30?", options: ["90", "95", "100", "110"], correct: 3, explanation: "80 + 30 equals 110." },
      { question: "What is 90 + 20?", options: ["90", "95", "100", "110"], correct: 3, explanation: "90 + 20 equals 110." },
      { question: "What is 100 + 10?", options: ["90", "95", "100", "110"], correct: 3, explanation: "100 + 10 equals 110." },
      { question: "What is 110 + 0?", options: ["90", "95", "100", "110"], correct: 3, explanation: "110 + 0 equals 110." },
      { question: "What is 120 + 10?", options: ["120", "125", "130", "135"], correct: 2, explanation: "120 + 10 equals 130." },
      { question: "What is 130 + 20?", options: ["140", "150", "160", "170"], correct: 1, explanation: "130 + 20 equals 150." },
      { question: "What is 140 + 30?", options: ["160", "170", "180", "190"], correct: 2, explanation: "140 + 30 equals 170." },
      { question: "What is 150 + 40?", options: ["180", "190", "200", "210"], correct: 1, explanation: "150 + 40 equals 190." },
      { question: "What is 160 + 50?", options: ["200", "210", "220", "230"], correct: 2, explanation: "160 + 50 equals 210." },
      { question: "What is 170 + 60?", options: ["220", "230", "240", "250"], correct: 1, explanation: "170 + 60 equals 230." },
      { question: "What is 180 + 70?", options: ["240", "250", "260", "270"], correct: 2, explanation: "180 + 70 equals 250." },
      { question: "What is 190 + 80?", options: ["260", "270", "280", "290"], correct: 1, explanation: "190 + 80 equals 270." },
      { question: "What is 200 + 90?", options: ["280", "290", "300", "310"], correct: 2, explanation: "200 + 90 equals 290." },
      { question: "What is 210 + 100?", options: ["300", "310", "320", "330"], correct: 1, explanation: "210 + 100 equals 310." },
      { question: "What is 220 + 110?", options: ["320", "330", "340", "350"], correct: 1, explanation: "220 + 110 equals 330." },
      { question: "What is 230 + 120?", options: ["340", "350", "360", "370"], correct: 1, explanation: "230 + 120 equals 350." },
       { question: "What is 240 + 130?", options: ["350", "360", "370", "380"], correct: 1, explanation: "240 + 130 equals 370." },
       { question: "What is 250 + 140?", options: ["360", "370", "380", "390"], correct: 1, explanation: "250 + 140 equals 390." },
       { question: "What is 260 + 150?", options: ["370", "380", "390", "400"], correct: 1, explanation: "260 + 150 equals 410." },
       { question: "What is 270 + 160?", options: ["380", "390", "400", "410"], correct: 1, explanation: "270 + 160 equals 430." },
       { question: "What is 280 + 170?", options: ["390", "400", "410", "420"], correct: 1, explanation: "280 + 170 equals 450." },
       { question: "What is 290 + 180?", options: ["400", "410", "420", "430"], correct: 1, explanation: "290 + 180 equals 470." },
       { question: "What is 300 + 190?", options: ["410", "420", "430", "440"], correct: 1, explanation: "300 + 190 equals 490." },
       { question: "What is 310 + 200?", options: ["420", "430", "440", "450"], correct: 1, explanation: "310 + 200 equals 510." },
       { question: "What is 320 + 210?", options: ["430", "440", "450", "460"], correct: 1, explanation: "320 + 210 equals 530." },
       { question: "What is 330 + 220?", options: ["440", "450", "460", "470"], correct: 1, explanation: "330 + 220 equals 550." },
       { question: "What is 340 + 230?", options: ["450", "460", "470", "480"], correct: 1, explanation: "340 + 230 equals 570." },
       { question: "What is 350 + 240?", options: ["460", "470", "480", "490"], correct: 1, explanation: "350 + 240 equals 590." },
       { question: "What is 360 + 250?", options: ["470", "480", "490", "500"], correct: 1, explanation: "360 + 250 equals 610." },
       { question: "What is 370 + 260?", options: ["480", "490", "500", "510"], correct: 1, explanation: "370 + 260 equals 630." },
       { question: "What is 380 + 270?", options: ["490", "500", "510", "520"], correct: 1, explanation: "380 + 270 equals 650." },
       { question: "What is 390 + 280?", options: ["500", "510", "520", "530"], correct: 1, explanation: "390 + 280 equals 670." },
       { question: "What is 400 + 290?", options: ["510", "520", "530", "540"], correct: 1, explanation: "400 + 290 equals 690." },
       { question: "What is 410 + 300?", options: ["520", "530", "540", "550"], correct: 1, explanation: "410 + 300 equals 710." },
       { question: "What is 420 + 310?", options: ["530", "540", "550", "560"], correct: 1, explanation: "420 + 310 equals 730." },
       { question: "What is 430 + 320?", options: ["540", "550", "560", "570"], correct: 1, explanation: "430 + 320 equals 750." },
       { question: "What is 440 + 330?", options: ["550", "560", "570", "580"], correct: 1, explanation: "440 + 330 equals 770." },
       { question: "What is 450 + 340?", options: ["560", "570", "580", "590"], correct: 1, explanation: "450 + 340 equals 790." },
       { question: "What is 460 + 350?", options: ["570", "580", "590", "600"], correct: 1, explanation: "460 + 350 equals 810." },
       { question: "What is 470 + 360?", options: ["580", "590", "600", "610"], correct: 1, explanation: "470 + 360 equals 830." },
       { question: "What is 480 + 370?", options: ["590", "600", "610", "620"], correct: 1, explanation: "480 + 370 equals 850." },
       { question: "What is 490 + 380?", options: ["600", "610", "620", "630"], correct: 1, explanation: "490 + 380 equals 870." },
       { question: "What is 500 + 390?", options: ["610", "620", "630", "640"], correct: 1, explanation: "500 + 390 equals 890." },
       { question: "What is 510 + 400?", options: ["620", "630", "640", "650"], correct: 1, explanation: "510 + 400 equals 910." },
       { question: "What is 520 + 410?", options: ["630", "640", "650", "660"], correct: 1, explanation: "520 + 410 equals 930." },
       { question: "What is 530 + 420?", options: ["640", "650", "660", "670"], correct: 1, explanation: "530 + 420 equals 950." },
       { question: "What is 540 + 430?", options: ["650", "660", "670", "680"], correct: 1, explanation: "540 + 430 equals 970." },
       { question: "What is 550 + 440?", options: ["660", "670", "680", "690"], correct: 1, explanation: "550 + 440 equals 990." },
       { question: "What is 560 + 450?", options: ["670", "680", "690", "700"], correct: 1, explanation: "560 + 450 equals 1010." },
       { question: "What is 570 + 460?", options: ["680", "690", "700", "710"], correct: 1, explanation: "570 + 460 equals 1030." },
       { question: "What is 580 + 470?", options: ["690", "700", "710", "720"], correct: 1, explanation: "580 + 470 equals 1050." },
       { question: "What is 590 + 480?", options: ["700", "710", "720", "730"], correct: 1, explanation: "590 + 480 equals 1070." },
       { question: "What is 600 + 490?", options: ["710", "720", "730", "740"], correct: 1, explanation: "600 + 490 equals 1090." },
       { question: "What is 610 + 500?", options: ["720", "730", "740", "750"], correct: 1, explanation: "610 + 500 equals 1110." },
       { question: "What is 620 + 510?", options: ["730", "740", "750", "760"], correct: 1, explanation: "620 + 510 equals 1130." },
       { question: "What is 630 + 520?", options: ["740", "750", "760", "770"], correct: 1, explanation: "630 + 520 equals 1150." },
       { question: "What is 640 + 530?", options: ["750", "760", "770", "780"], correct: 1, explanation: "640 + 530 equals 1170." },
       { question: "What is 650 + 540?", options: ["760", "770", "780", "790"], correct: 1, explanation: "650 + 540 equals 1190." },
       { question: "What is 660 + 550?", options: ["770", "780", "790", "800"], correct: 1, explanation: "660 + 550 equals 1210." },
       { question: "What is 670 + 560?", options: ["780", "790", "800", "810"], correct: 1, explanation: "670 + 560 equals 1230." },
               
      ],

      "Substraction": [
        { question: "What is 15 - 5?", options: ["8", "9", "10", "11"], correct: 2, explanation: "15 - 5 equals 10." },
        { question: "What is 20 - 10?", options: ["5", "10", "15", "20"], correct: 1, explanation: "20 - 10 equals 10." },
        { question: "What is 30 - 15?", options: ["10", "15", "20", "25"], correct: 1, explanation: "30 - 15 equals 15." },
        { question: "What is 50 - 25?", options: ["20", "25", "30", "35"], correct: 1, explanation: "50 - 25 equals 25." },
        { question: "What is 100 - 50?", options: ["40", "50", "60", "70"], correct: 1, explanation: "100 - 50 equals 50." },
        { question: "What is 75 - 25?", options: ["40", "45", "50", "55"], correct: 2, explanation: "75 - 25 equals 50." },
        { question: "What is 60 - 30?", options: ["20", "25", "30", "35"], correct: 2, explanation: "60 - 30 equals 30." },
        { question: "What is 80 - 40?", options: ["30", "35", "40", "45"], correct: 2, explanation: "80 - 40 equals 40." },
        { question: "What is 90 - 45?", options: ["40", "45", "50", "55"], correct: 1, explanation: "90 - 45 equals 45." },
        { question: "What is 55 - 25?", options: ["20", "25", "30", "35"], correct: 1, explanation: "55 - 25 equals 30." },
        { question: "What is 25 - 15?", options: ["5", "10", "15", "20"], correct: 1, explanation: "25 - 15 equals 10." },
        { question: "What is 35 - 20?", options: ["10", "15", "20", "25"], correct: 1, explanation: "35 - 20 equals 15." },
        { question: "What is 50 - 30?", options: ["15", "20", "25", "30"], correct: 1, explanation: "50 - 30 equals 20." },
        { question: "What is 40 - 20?", options: ["10", "15", "20", "25"], correct: 2, explanation: "40 - 20 equals 20." },
        { question: "What is 70 - 35?", options: ["30", "35", "40", "45"], correct: 1, explanation: "70 - 35 equals 35." },
        { question: "What is 85 - 40?", options: ["40", "45", "50", "55"], correct: 1, explanation: "85 - 40 equals 45." },
        { question: "What is 95 - 50?", options: ["40", "45", "50", "55"], correct: 2, explanation: "95 - 50 equals 45." },
        { question: "What is 65 - 30?", options: ["30", "35", "40", "45"], correct: 1, explanation: "65 - 30 equals 35." },
        { question: "What is 55 - 20?", options: ["30", "35", "40", "45"], correct: 1, explanation: "55 - 20 equals 35." },
        { question: "What is 45 - 15?", options: ["20", "25", "30", "35"], correct: 1, explanation: "45 - 15 equals 30." },
        { question: "What is 35 - 10?", options: ["20", "25", "30", "35"], correct: 1, explanation: "35 - 10 equals 25." },
        { question: "What is 25 - 5?", options: ["15", "20", "25", "30"], correct: 1, explanation: "25 - 5 equals 20." },
        { question: "What is 15 - 10?", options: ["2", "3", "4", "5"], correct: 3, explanation: "15 - 10 equals 5." },
        { question: "What is 10 - 5?", options: ["2", "3", "4", "5"], correct: 3, explanation: "10 - 5 equals 5." },
        { question: "What is 20 - 5?", options: ["10", "15", "20", "25"], correct: 1, explanation: "20 - 5 equals 15." },
        { question: "What is 30 - 10?", options: ["15", "20", "25", "30"], correct: 1, explanation: "30 - 10 equals 20." },
        { question: "What is 40 - 15?", options: ["20", "25", "30", "35"], correct: 1, explanation: "40 - 15 equals 25." },
        { question: "What is 50 - 20?", options: ["25", "30", "35", "40"], correct: 1, explanation: "50 - 20 equals 30." },
        { question: "What is 60 - 25?", options: ["30", "35", "40", "45"], correct: 1, explanation: "60 - 25 equals 35." },
        { question: "What is 70 - 30?", options: ["35", "40", "45", "50"], correct: 1, explanation: "70 - 30 equals 40." },
        { question: "What is 80 - 35?", options: ["40", "45", "50", "55"], correct: 1, explanation: "80 - 35 equals 45." },
        { question: "What is 90 - 40?", options: ["45", "50", "55", "60"], correct: 1, explanation: "90 - 40 equals 50." },
        { question: "What is 100 - 45?", options: ["50", "55", "60", "65"], correct: 1, explanation: "100 - 45 equals 55." },
        { question: "What is 110 - 50?", options: ["55", "60", "65", "70"], correct: 1, explanation: "110 - 50 equals 60." },
        { question: "What is 120 - 55?", options: ["60", "65", "70", "75"], correct: 1, explanation: "120 - 55 equals 65." },
        { question: "What is 130 - 60?", options: ["65", "70", "75", "80"], correct: 1, explanation: "130 - 60 equals 70." },
        { question: "What is 140 - 65?", options: ["70", "75", "80", "85"], correct: 1, explanation: "140 - 65 equals 75." },
        { question: "What is 150 - 70?", options: ["75", "80", "85", "90"], correct: 1, explanation: "150 - 70 equals 80." },
        { question: "What is 160 - 75?", options: ["80", "85", "90", "95"], correct: 1, explanation: "160 - 75 equals 85." },
        { question: "What is 170 - 80?", options: ["85", "90", "95", "100"], correct: 1, explanation: "170 - 80 equals 90." },
        { question: "What is 180 - 85?", options: ["90", "95", "100", "105"], correct: 1, explanation: "180 - 85 equals 95." },
        { question: "What is 190 - 90?", options: ["95", "100", "105", "110"], correct: 1, explanation: "190 - 90 equals 100." },
        { question: "What is 200 - 95?", options: ["100", "105", "110", "115"], correct: 1, explanation: "200 - 95 equals 105." },
        { question: "What is 210 - 100?", options: ["105", "110", "115", "120"], correct: 1, explanation: "210 - 100 equals 110." },
        { question: "What is 220 - 105?", options: ["110", "115", "120", "125"], correct: 1, explanation: "220 - 105 equals 115." },
        { question: "What is 230 - 110?", options: ["115", "120", "125", "130"], correct: 1, explanation: "230 - 110 equals 120." },
        { question: "What is 240 - 115?", options: ["120", "125", "130", "135"], correct: 1, explanation: "240 - 115 equals 125." },
        { question: "What is 250 - 120?", options: ["125", "130", "135", "140"], correct: 1, explanation: "250 - 120 equals 130." },
        { question: "What is 260 - 125?", options: ["130", "135", "140", "145"], correct: 1, explanation: "260 - 125 equals 135." },
        { question: "What is 270 - 130?", options: ["135", "140", "145", "150"], correct: 1, explanation: "270 - 130 equals 140." },
        { question: "What is 280 - 135?", options: ["140", "145", "150", "155"], correct: 1, explanation: "280 - 135 equals 145." },
        { question: "What is 290 - 140?", options: ["145", "150", "155", "160"], correct: 1, explanation: "290 - 140 equals 150." },
        { question: "What is 300 - 145?", options: ["150", "155", "160", "165"], correct: 1, explanation: "300 - 145 equals 155." },
        { question: "What is 310 - 150?", options: ["155", "160", "165", "170"], correct: 1, explanation: "310 - 150 equals 160." },
        { question: "What is 320 - 155?", options: ["160", "165", "170", "175"], correct: 1, explanation: "320 - 155 equals 165." },
        { question: "What is 330 - 160?", options: ["165", "170", "175", "180"], correct: 1, explanation: "330 - 160 equals 170." },
        { question: "What is 340 - 165?", options: ["170", "175", "180", "185"], correct: 1, explanation: "340 - 165 equals 175." },
        { question: "What is 350 - 170?", options: ["175", "180", "185", "190"], correct: 1, explanation: "350 - 170 equals 180." },
        { question: "What is 360 - 175?", options: ["180", "185", "190", "195"], correct: 1, explanation: "360 - 175 equals 185." },
        { question: "What is 370 - 180?", options: ["185", "190", "195", "200"], correct: 1, explanation: "370 - 180 equals 190." },
        { question: "What is 380 - 185?", options: ["190", "195", "200", "205"], correct: 1, explanation: "380 - 185 equals 195." },
        { question: "What is 390 - 190?", options: ["195", "200", "205", "210"], correct: 1, explanation: "390 - 190 equals 200." },
        { question: "What is 400 - 195?", options: ["200", "205", "210", "215"], correct: 1, explanation: "400 - 195 equals 205." },
        { question: "What is 410 - 200?", options: ["205", "210", "215", "220"], correct: 1, explanation: "410 - 200 equals 210." },
        { question: "What is 420 - 205?", options: ["210", "215", "220", "225"], correct: 1, explanation: "420 - 205 equals 215." },
        { question: "What is 430 - 210?", options: ["215", "220", "225", "230"], correct: 1, explanation: "430 - 210 equals 220." },
        { question: "What is 440 - 215?", options: ["220", "225", "230", "235"], correct: 1, explanation: "440 - 215 equals 225." },
        { question: "What is 450 - 220?", options: ["225", "230", "235", "240"], correct: 1, explanation: "450 - 220 equals 230." },
        { question: "What is 460 - 225?", options: ["230", "235", "240", "245"], correct: 1, explanation: "460 - 225 equals 235." },
        { question: "What is 470 - 230?", options: ["235", "240", "245", "250"], correct: 1, explanation: "470 - 230 equals 240." },
        { question: "What is 480 - 235?", options: ["240", "245", "250", "255"], correct: 1, explanation: "480 - 235 equals 245." },
        { question: "What is 490 - 240?", options: ["245", "250", "255", "260"], correct: 1, explanation: "490 - 240 equals 250." },
        { question: "What is 500 - 245?", options: ["250", "255", "260", "265"], correct: 1, explanation: "500 - 245 equals 255." },
        { question: "What is 510 - 250?", options: ["255", "260", "265", "270"], correct: 1, explanation: "510 - 250 equals 260." },
        { question: "What is 520 - 255?", options: ["260", "265", "270", "275"], correct: 1, explanation: "520 - 255 equals 265." },
        { question: "What is 530 - 260?", options: ["265", "270", "275", "280"], correct: 1, explanation: "530 - 260 equals 270." },
        { question: "What is 540 - 265?", options: ["270", "275", "280", "285"], correct: 1, explanation: "540 - 265 equals 275." },
        { question: "What is 550 - 270?", options: ["275", "280", "285", "290"], correct: 1, explanation: "550 - 270 equals 280." },
        { question: "What is 560 - 275?", options: ["280", "285", "290", "295"], correct: 1, explanation: "560 - 275 equals 285." },
        { question: "What is 570 - 280?", options: ["285", "290", "295", "300"], correct: 1, explanation: "570 - 280 equals 290." },
        { question: "What is 580 - 285?", options: ["290", "295", "300", "305"], correct: 1, explanation: "580 - 285 equals 295." },
        { question: "What is 590 - 290?", options: ["295", "300", "305", "310"], correct: 1, explanation: "590 - 290 equals 300." },
        { question: "What is 600 - 295?", options: ["300", "305", "310", "315"], correct: 1, explanation: "600 - 295 equals 305." },
        { question: "What is 610 - 300?", options: ["305", "310", "315", "320"], correct: 1, explanation: "610 - 300 equals 310." },
        { question: "What is 620 - 305?", options: ["310", "315", "320", "325"], correct: 1, explanation: "620 - 305 equals 315." },
        { question: "What is 630 - 310?", options: ["315", "320", "325", "330"], correct: 1, explanation: "630 - 310 equals 320." },
        { question: "What is 640 - 315?", options: ["320", "325", "330", "335"], correct: 1, explanation: "640 - 315 equals 325." },
        { question: "What is 650 - 320?", options: ["325", "330", "335", "340"], correct: 1, explanation: "650 - 320 equals 330." },
        { question: "What is 660 - 325?", options: ["330", "335", "340", "345"], correct: 1, explanation: "660 - 325 equals 335." },
        { question: "What is 670 - 330?", options: ["335", "340", "345", "350"], correct: 1, explanation: "670 - 330 equals 340." },
        { question: "What is 680 - 335?", options: ["340", "345", "350", "355"], correct: 1, explanation: "680 - 335 equals 345." },
        { question: "What is 690 - 340?", options: ["345", "350", "355", "360"], correct: 1, explanation: "690 - 340 equals 350." },

      ],
    
    "Multiplication": [
        { question: "What is 2 x 3?", options: ["5", "6", "7", "8"], correct: 1, explanation: "2 x 3 equals 6." },
        { question: "What is 4 x 5?", options: ["18", "19", "20", "21"], correct: 2, explanation: "4 x 5 equals 20." },
        { question: "What is 6 x 7?", options: ["40", "41", "42", "43"], correct: 2, explanation: "6 x 7 equals 42." },
        { question: "What is 8 x 9?", options: ["70", "71", "72", "73"], correct: 2, explanation: "8 x 9 equals 72." },
        { question: "What is 10 x 11?", options: ["109", "110", "111", "112"], correct: 1, explanation: "10 x 11 equals 110." },
        { question: "What is 12 x 13?", options: ["154", "155", "156", "157"], correct: 2, explanation: "12 x 13 equals 156." },
        { question: "What is 14 x 15?", options: ["209", "210", "211", "212"], correct: 1, explanation: "14 x 15 equals 210." },
        { question: "What is 16 x 17?", options: ["271", "272", "273", "274"], correct: 1, explanation: "16 x 17 equals 272." },
        { question: "What is 18 x 19?", options: ["341", "342", "343", "344"], correct: 2, explanation: "18 x 19 equals 342." },
        { question: "What is 20 x 21?", options: ["419", "420", "421", "422"], correct: 1, explanation: "20 x 21 equals 420." },
        { question: "What is 1.5 x 2?", options: ["2.5", "3", "3.5", "4"], correct: 1, explanation: "1.5 x 2 equals 3." },
        { question: "What is 2.5 x 3?", options: ["6.5", "7", "7.5", "8"], correct: 2, explanation: "2.5 x 3 equals 7.5." },
        { question: "What is 3.5 x 4?", options: ["13", "13.5", "14", "14.5"], correct: 2, explanation: "3.5 x 4 equals 14." },
        { question: "What is 4.5 x 5?", options: ["21", "22", "22.5", "23"], correct: 2, explanation: "4.5 x 5 equals 22.5." },
        { question: "What is 5.5 x 6?", options: ["32", "32.5", "33", "33.5"], correct: 2, explanation: "5.5 x 6 equals 33." },
        { question: "What is 6.5 x 7?", options: ["44.5", "45", "45.5", "46"], correct: 2, explanation: "6.5 x 7 equals 45.5." },
        { question: "What is 7.5 x 8?", options: ["59", "59.5", "60", "60.5"], correct: 2, explanation: "7.5 x 8 equals 60." },
        { question: "What is 8.5 x 9?", options: ["75.5", "76", "76.5", "77"], correct: 2, explanation: "8.5 x 9 equals 76.5." },
        { question: "What is 9.5 x 10?", options: ["94", "94.5", "95", "95.5"], correct: 2, explanation: "9.5 x 10 equals 95." },
        { question: "What is 10.5 x 11?", options: ["114.5", "115", "115.5", "116"], correct: 2, explanation: "10.5 x 11 equals 115.5." },
        { question: "What is 11.5 x 12?", options: ["137", "137.5", "138", "138.5"], correct: 2, explanation: "11.5 x 12 equals 138." },
        { question: "What is 12.5 x 13?", options: ["161.5", "162", "162.5", "163"], correct: 2, explanation: "12.5 x 13 equals 162.5." },
        { question: "What is 13.5 x 14?", options: ["188", "188.5", "189", "189.5"], correct: 2, explanation: "13.5 x 14 equals 189." },
        { question: "What is 14.5 x 15?", options: ["217.5", "218", "218.5", "219"], correct: 2, explanation: "14.5 x 15 equals 217.5." },
        { question: "What is 15.5 x 16?", options: ["248", "248.5", "249", "249.5"], correct: 2, explanation: "15.5 x 16 equals 248." },
        { question: "What is 16.5 x 17?", options: ["280.5", "281", "281.5", "282"], correct: 2, explanation: "16.5 x 17 equals 280.5." },
        { question: "What is 17.5 x 18?", options: ["315", "315.5", "316", "316.5"], correct: 2, explanation: "17.5 x 18 equals 315." },
        { question: "What is 18.5 x 19?", options: ["351.5", "352", "352.5", "353"], correct: 2, explanation: "18.5 x 19 equals 351.5." },
        { question: "What is 19.5 x 20?", options: ["390", "390.5", "391", "391.5"], correct: 2, explanation: "19.5 x 20 equals 390." },
        { question: "What is 1.1 x 2?", options: ["2.1", "2.2", "2.3", "2.4"], correct: 1, explanation: "1.1 x 2 equals 2.2." },
        { question: "What is 2.2 x 3?", options: ["6.4", "6.5", "6.6", "6.7"], correct: 2, explanation: "2.2 x 3 equals 6.6." },
        { question: "What is 3.3 x 4?", options: ["12.8", "12.9", "13", "13.1"], correct: 2, explanation: "3.3 x 4 equals 13.2." },
        { question: "What is 4.4 x 5?", options: ["21.8", "21.9", "22", "22.1"], correct: 2, explanation: "4.4 x 5 equals 22." },
        { question: "What is 5.5 x 6?", options: ["32.8", "32.9", "33", "33.1"], correct: 2, explanation: "5.5 x 6 equals 33." },
        { question: "What is 6.6 x 7?", options: ["45.8", "45.9", "46", "46.1"], correct: 2, explanation: "6.6 x 7 equals 46.2." },
        { question: "What is 7.7 x 8?", options: ["60.8", "60.9", "61", "61.1"], correct: 2, explanation: "7.7 x 8 equals 61.6." },
        { question: "What is 8.8 x 9?", options: ["77.8", "77.9", "78", "78.1"], correct: 2, explanation: "8.8 x 9 equals 79.2." },
        { question: "What is 9.9 x 10?", options: ["98.8", "98.9", "99", "99.1"], correct: 2, explanation: "9.9 x 10 equals 99." },
        { question: "What is 10.1 x 11?", options: ["110.1", "110.2", "110.3", "110.4"], correct: 2, explanation: "10.1 x 11 equals 111.1." },
        { question: "What is 11.2 x 12?", options: ["133.2", "133.3", "133.4", "133.5"], correct: 2, explanation: "11.2 x 12 equals 134.4." },
        { question: "What is 12.3 x 13?", options: ["158.3", "158.4", "158.5", "158.6"], correct: 2, explanation: "12.3 x 13 equals 159.9." },
        { question: "What is 13.4 x 14?", options: ["185.4", "185.5", "185.6", "185.7"], correct: 2, explanation: "13.4 x 14 equals 187.6." },
        { question: "What is 14.5 x 15?", options: ["214.5", "214.6", "214.7", "214.8"], correct: 2, explanation: "14.5 x 15 equals 217.5." },
        { question: "What is 15.6 x 16?", options: ["245.6", "245.7", "245.8", "245.9"], correct: 2, explanation: "15.6 x 16 equals 249.6." },
        { question: "What is 16.7 x 17?", options: ["278.7", "278.8", "278.9", "279"], correct: 2, explanation: "16.7 x 17 equals 283.9." },
        { question: "What is 17.8 x 18?", options: ["313.8", "313.9", "314", "314.1"], correct: 2, explanation: "17.8 x 18 equals 320.4." },
        { question: "What is 18.9 x 19?", options: ["350.9", "351", "351.1", "351.2"], correct: 2, explanation: "18.9 x 19 equals 359.1." },
        { question: "What is 19.1 x 20?", options: ["380.1", "380.2", "380.3", "380.4"], correct: 2, explanation: "19.1 x 20 equals 382." },
        { question: "What is 1.2 x 2?", options: ["2.2", "2.3", "2.4", "2.5"], correct: 2, explanation: "1.2 x 2 equals 2.4." },
        { question: "What is 2.3 x 3?", options: ["6.6", "6.7", "6.8", "6.9"], correct: 2, explanation: "2.3 x 3 equals 6.9." },
        { question: "What is 3.4 x 4?", options: ["13.4", "13.5", "13.6", "13.7"], correct: 2, explanation: "3.4 x 4 equals 13.6." },
        { question: "What is 4.5 x 5?", options: ["22.4", "22.5", "22.6", "22.7"], correct: 2, explanation: "4.5 x 5 equals 22.5." },
        { question: "What is 5.6 x 6?", options: ["33.4", "33.5", "33.6", "33.7"], correct: 2, explanation: "5.6 x 6 equals 33.6." },
        { question: "What is 6.7 x 7?", options: ["46.4", "46.5", "46.6", "46.7"], correct: 2, explanation: "6.7 x 7 equals 46.9." },
        { question: "What is 7.8 x 8?", options: ["61.4", "61.5", "61.6", "61.7"], correct: 2, explanation: "7.8 x 8 equals 62.4." },
        { question: "What is 8.9 x 9?", options: ["78.4", "78.5", "78.6", "78.7"], correct: 2, explanation: "8.9 x 9 equals 80.1." },
        { question: "What is 9.1 x 10?", options: ["90.1", "90.2", "90.3", "90.4"], correct: 2, explanation: "9.1 x 10 equals 91." },
        { question: "What is 10.2 x 11?", options: ["111.2", "111.3", "111.4", "111.5"], correct: 2, explanation: "10.2 x 11 equals 112.2." },
        { question: "What is 11.3 x 12?", options: ["134.3", "134.4", "134.5", "134.6"], correct: 2, explanation: "11.3 x 12 equals 135.6." },
        { question: "What is 12.4 x 13?", options: ["160.4", "160.5", "160.6", "160.7"], correct: 2, explanation: "12.4 x 13 equals 161.2." },
        { question: "What is 13.5 x 14?", options: ["188.5", "188.6", "188.7", "188.8"], correct: 2, explanation: "13.5 x 14 equals 189." },
        { question: "What is 14.6 x 15?", options: ["219.6", "219.7", "219.8", "219.9"], correct: 2, explanation: "14.6 x 15 equals 219." },
        { question: "What is 15.7 x 16?", options: ["251.7", "251.8", "251.9", "252"], correct: 2, explanation: "15.7 x 16 equals 251.2." },
        { question: "What is 16.8 x 17?", options: ["285.8", "285.9", "286", "286.1"], correct: 2, explanation: "16.8 x 17 equals 285.6." },
        { question: "What is 17.9 x 18?", options: ["321.9", "322", "322.1", "322.2"], correct: 2, explanation: "17.9 x 18 equals 322.2." },
        { question: "What is 18.1 x 19?", options: ["343.1", "343.2", "343.3", "343.4"], correct: 2, explanation: "18.1 x 19 equals 343.9." },
        { question: "What is 19.2 x 20?", options: ["383.2", "383.3", "383.4", "383.5"], correct: 2, explanation: "19.2 x 20 equals 384." },
        { question: "What is 1.3 x 2?", options: ["2.5", "2.6", "2.7", "2.8"], correct: 2, explanation: "1.3 x 2 equals 2.6." },
        { question: "What is 2.4 x 3?", options: ["7.1", "7.2", "7.3", "7.4"], correct: 2, explanation: "2.4 x 3 equals 7.2." },
        { question: "What is 3.5 x 4?", options: ["13.9", "14", "14.1", "14.2"], correct: 2, explanation: "3.5 x 4 equals 14." },
        { question: "What is 4.6 x 5?", options: ["22.9", "23", "23.1", "23.2"], correct: 2, explanation: "4.6 x 5 equals 23." },
        { question: "What is 5.7 x 6?", options: ["33.9", "34", "34.1", "34.2"], correct: 2, explanation: "5.7 x 6 equals 34.2." },
        { question: "What is 6.8 x 7?", options: ["46.9", "47", "47.1", "47.2"], correct: 2, explanation: "6.8 x 7 equals 47.6." },
        { question: "What is 7.9 x 8?", options: ["61.9", "62", "62.1", "62.2"], correct: 2, explanation: "7.9 x 8 equals 63.2." }
    ],  

      "Division": [
        { question: "What is 12 ÷ 3?", options: ["3", "4", "5", "6"], correct: 1, explanation: "12 ÷ 3 equals 4." },
        { question: "What is 15 ÷ 5?", options: ["2", "3", "4", "5"], correct: 1, explanation: "15 ÷ 5 equals 3." },
        { question: "What is 20 ÷ 4?", options: ["4", "5", "6", "7"], correct: 1, explanation: "20 ÷ 4 equals 5." },
        { question: "What is 18 ÷ 6?", options: ["2", "3", "4", "5"], correct: 1, explanation: "18 ÷ 6 equals 3." },
        { question: "What is 25 ÷ 5?", options: ["4", "5", "6", "7"], correct: 1, explanation: "25 ÷ 5 equals 5." },
        { question: "What is 30 ÷ 6?", options: ["4", "5", "6", "7"], correct: 1, explanation: "30 ÷ 6 equals 5." },
        { question: "What is 35 ÷ 7?", options: ["4", "5", "6", "7"], correct: 1, explanation: "35 ÷ 7 equals 5." },
        { question: "What is 40 ÷ 8?", options: ["4", "5", "6", "7"], correct: 1, explanation: "40 ÷ 8 equals 5." },
        { question: "What is 45 ÷ 9?", options: ["4", "5", "6", "7"], correct: 1, explanation: "45 ÷ 9 equals 5." },
        { question: "What is 50 ÷ 10?", options: ["4", "5", "6", "7"], correct: 1, explanation: "50 ÷ 10 equals 5." },
        { question: "What is 60 ÷ 12?", options: ["4", "5", "6", "7"], correct: 1, explanation: "60 ÷ 12 equals 5." },
        { question: "What is 70 ÷ 14?", options: ["4", "5", "6", "7"], correct: 1, explanation: "70 ÷ 14 equals 5." },
        { question: "What is 80 ÷ 16?", options: ["4", "5", "6", "7"], correct: 1, explanation: "80 ÷ 16 equals 5." },
        { question: "What is 90 ÷ 18?", options: ["4", "5", "6", "7"], correct: 1, explanation: "90 ÷ 18 equals 5." },
        { question: "What is 100 ÷ 20?", options: ["4", "5", "6", "7"], correct: 1, explanation: "100 ÷ 20 equals 5." },
        { question: "What is 110 ÷ 22?", options: ["4", "5", "6", "7"], correct: 1, explanation: "110 ÷ 22 equals 5." },
        { question: "What is 120 ÷ 24?", options: ["4", "5", "6", "7"], correct: 1, explanation: "120 ÷ 24 equals 5." },
        { question: "What is 130 ÷ 26?", options: ["4", "5", "6", "7"], correct: 1, explanation: "130 ÷ 26 equals 5." },
        { question: "What is 140 ÷ 28?", options: ["4", "5", "6", "7"], correct: 1, explanation: "140 ÷ 28 equals 5." },
        { question: "What is 150 ÷ 30?", options: ["4", "5", "6", "7"], correct: 1, explanation: "150 ÷ 30 equals 5." },
        { question: "What is 160 ÷ 32?", options: ["4", "5", "6", "7"], correct: 1, explanation: "160 ÷ 32 equals 5." },
        { question: "What is 170 ÷ 34?", options: ["4", "5", "6", "7"], correct: 1, explanation: "170 ÷ 34 equals 5." },
        { question: "What is 180 ÷ 36?", options: ["4", "5", "6", "7"], correct: 1, explanation: "180 ÷ 36 equals 5." },
        { question: "What is 190 ÷ 38?", options: ["4", "5", "6", "7"], correct: 1, explanation: "190 ÷ 38 equals 5." },
        { question: "What is 200 ÷ 40?", options: ["4", "5", "6", "7"], correct: 1, explanation: "200 ÷ 40 equals 5." },
        { question: "What is 210 ÷ 42?", options: ["4", "5", "6", "7"], correct: 1, explanation: "210 ÷ 42 equals 5." },
        { question: "What is 220 ÷ 44?", options: ["4", "5", "6", "7"], correct: 1, explanation: "220 ÷ 44 equals 5." },
        { question: "What is 230 ÷ 46?", options: ["4", "5", "6", "7"], correct: 1, explanation: "230 ÷ 46 equals 5." },
        { question: "What is 240 ÷ 48?", options: ["4", "5", "6", "7"], correct: 1, explanation: "240 ÷ 48 equals 5." },
        { question: "What is 250 ÷ 50?", options: ["4", "5", "6", "7"], correct: 1, explanation: "250 ÷ 50 equals 5." },
        { question: "What is 260 ÷ 52?", options: ["4", "5", "6", "7"], correct: 1, explanation: "260 ÷ 52 equals 5." },
        { question: "What is 270 ÷ 54?", options: ["4", "5", "6", "7"], correct: 1, explanation: "270 ÷ 54 equals 5." },
        { question: "What is 280 ÷ 56?", options: ["4", "5", "6", "7"], correct: 1, explanation: "280 ÷ 56 equals 5." },
        { question: "What is 290 ÷ 58?", options: ["4", "5", "6", "7"], correct: 1, explanation: "290 ÷ 58 equals 5." },
        { question: "What is 300 ÷ 60?", options: ["4", "5", "6", "7"], correct: 1, explanation: "300 ÷ 60 equals 5." },
        { question: "What is 310 ÷ 62?", options: ["4", "5", "6", "7"], correct: 1, explanation: "310 ÷ 62 equals 5." },
        { question: "What is 320 ÷ 64?", options: ["4", "5", "6", "7"], correct: 1, explanation: "320 ÷ 64 equals 5." },
        { question: "What is 330 ÷ 66?", options: ["4", "5", "6", "7"], correct: 1, explanation: "330 ÷ 66 equals 5." },
        { question: "What is 340 ÷ 68?", options: ["4", "5", "6", "7"], correct: 1, explanation: "340 ÷ 68 equals 5." },
        { question: "What is 350 ÷ 70?", options: ["4", "5", "6", "7"], correct: 1, explanation: "350 ÷ 70 equals 5." },
        { question: "What is 360 ÷ 72?", options: ["4", "5", "6", "7"], correct: 1, explanation: "360 ÷ 72 equals 5." },
        { question: "What is 370 ÷ 74?", options: ["4", "5", "6", "7"], correct: 1, explanation: "370 ÷ 74 equals 5." },
        { question: "What is 380 ÷ 76?", options: ["4", "5", "6", "7"], correct: 1, explanation: "380 ÷ 76 equals 5." },
        { question: "What is 390 ÷ 78?", options: ["4", "5", "6", "7"], correct: 1, explanation: "390 ÷ 78 equals 5." },
        { question: "What is 400 ÷ 80?", options: ["4", "5", "6", "7"], correct: 1, explanation: "400 ÷ 80 equals 5." },
        { question: "What is 410 ÷ 82?", options: ["4", "5", "6", "7"], correct: 1, explanation: "410 ÷ 82 equals 5." },
        { question: "What is 420 ÷ 84?", options: ["4", "5", "6", "7"], correct: 1, explanation: "420 ÷ 84 equals 5." },
        { question: "What is 430 ÷ 86?", options: ["4", "5", "6", "7"], correct: 1, explanation: "430 ÷ 86 equals 5." },
        { question: "What is 440 ÷ 88?", options: ["4", "5", "6", "7"], correct: 1, explanation: "440 ÷ 88 equals 5." },
        { question: "What is 450 ÷ 90?", options: ["4", "5", "6", "7"], correct: 1, explanation: "450 ÷ 90 equals 5." },
        { question: "What is 460 ÷ 92?", options: ["4", "5", "6", "7"], correct: 1, explanation: "460 ÷ 92 equals 5." },
        { question: "What is 470 ÷ 94?", options: ["4", "5", "6", "7"], correct: 1, explanation: "470 ÷ 94 equals 5." },
        { question: "What is 480 ÷ 96?", options: ["4", "5", "6", "7"], correct: 1, explanation: "480 ÷ 96 equals 5." },
        { question: "What is 490 ÷ 98?", options: ["4", "5", "6", "7"], correct: 1, explanation: "490 ÷ 98 equals 5." },
        { question: "What is 500 ÷ 100?", options: ["4", "5", "6", "7"], correct: 1, explanation: "500 ÷ 100 equals 5." },
        { question: "What is 5.0 ÷ 1.0?", options: ["4", "5", "6", "7"], correct: 1, explanation: "5.0 ÷ 1.0 equals 5." },
        { question: "What is 6.0 ÷ 1.2?", options: ["4", "5", "6", "7"], correct: 1, explanation: "6.0 ÷ 1.2 equals 5." },
        { question: "What is 7.0 ÷ 1.4?", options: ["4", "5", "6", "7"], correct: 1, explanation: "7.0 ÷ 1.4 equals 5." },
        { question: "What is 8.0 ÷ 1.6?", options: ["4", "5", "6", "7"], correct: 1, explanation: "8.0 ÷ 1.6 equals 5." },
        { question: "What is 9.0 ÷ 1.8?", options: ["4", "5", "6", "7"], correct: 1, explanation: "9.0 ÷ 1.8 equals 5." },
        { question: "What is 10.0 ÷ 2.0?", options: ["4", "5", "6", "7"], correct: 1, explanation: "10.0 ÷ 2.0 equals 5." },
        { question: "What is 11.0 ÷ 2.2?", options: ["4", "5", "6", "7"], correct: 1, explanation: "11.0 ÷ 2.2 equals 5." },
        { question: "What is 12.0 ÷ 2.4?", options: ["4", "5", "6", "7"], correct: 1, explanation: "12.0 ÷ 2.4 equals 5." },
        { question: "What is 13.0 ÷ 2.6?", options: ["4", "5", "6", "7"], correct: 1, explanation: "13.0 ÷ 2.6 equals 5." },
        { question: "What is 14.0 ÷ 2.8?", options: ["4", "5", "6", "7"], correct: 1, explanation: "14.0 ÷ 2.8 equals 5." },
        { question: "What is 15.0 ÷ 3.0?", options: ["4", "5", "6", "7"], correct: 1, explanation: "15.0 ÷ 3.0 equals 5." },
        { question: "What is 16.0 ÷ 3.2?", options: ["4", "5", "6", "7"], correct: 1, explanation: "16.0 ÷ 3.2 equals 5." },
        { question: "What is 17.0 ÷ 3.4?", options: ["4", "5", "6", "7"], correct: 1, explanation: "17.0 ÷ 3.4 equals 5." },
        { question: "What is 18.0 ÷ 3.6?", options: ["4", "5", "6", "7"], correct: 1, explanation: "18.0 ÷ 3.6 equals 5." },
        { question: "What is 19.0 ÷ 3.8?", options: ["4", "5", "6", "7"], correct: 1, explanation: "19.0 ÷ 3.8 equals 5." },
        { question: "What is 20.0 ÷ 4.0?", options: ["4", "5", "6", "7"], correct: 1, explanation: "20.0 ÷ 4.0 equals 5." },
        { question: "What is 21.0 ÷ 4.2?", options: ["4", "5", "6", "7"], correct: 1, explanation: "21.0 ÷ 4.2 equals 5." },
        { question: "What is 22.0 ÷ 4.4?", options: ["4", "5", "6", "7"], correct: 1, explanation: "22.0 ÷ 4.4 equals 5." },
        { question: "What is 23.0 ÷ 4.6?", options: ["4", "5", "6", "7"], correct: 1, explanation: "23.0 ÷ 4.6 equals 5." },
        { question: "What is 24.0 ÷ 4.8?", options: ["4", "5", "6", "7"], correct: 1, explanation: "24.0 ÷ 4.8 equals 5." },
        { question: "What is 25.0 ÷ 5.0?", options: ["4", "5", "6", "7"], correct: 1, explanation: "25.0 ÷ 5.0 equals 5." },
        { question: "What is 26.0 ÷ 5.2?", options: ["4", "5", "6", "7"], correct: 1, explanation: "26.0 ÷ 5.2 equals 5." },
        { question: "What is 27.0 ÷ 5.4?", options: ["4", "5", "6", "7"], correct: 1, explanation: "27.0 ÷ 5.4 equals 5." },
        { question: "What is 28.0 ÷ 5.6?", options: ["4", "5", "6", "7"], correct: 1, explanation: "28.0 ÷ 5.6 equals 5." },
        { question: "What is 29.0 ÷ 5.8?", options: ["4", "5", "6", "7"], correct: 1, explanation: "29.0 ÷ 5.8 equals 5." },
        { question: "What is 30.0 ÷ 6.0?", options: ["4", "5", "6", "7"], correct: 1, explanation: "30.0 ÷ 6.0 equals 5." },
        { question: "What is 31.0 ÷ 6.2?", options: ["4", "5", "6", "7"], correct: 1, explanation: "31.0 ÷ 6.2 equals 5." },
        { question: "What is 32.0 ÷ 6.4?", options: ["4", "5", "6", "7"], correct: 1, explanation: "32.0 ÷ 6.4 equals 5." }
      ],

      "Fraction": [
        { question: "What is 1/2 + 1/2?", options: ["1/2", "1", "1 1/2", "2"], correct: 1, explanation: "1/2 + 1/2 equals 1." },
        { question: "What is 1/3 + 1/3?", options: ["1/3", "2/3", "1", "1 1/3"], correct: 2, explanation: "1/3 + 1/3 equals 2/3." },
        { question: "What is 1/4 + 1/4?", options: ["1/4", "1/2", "3/4", "1"], correct: 2, explanation: "1/4 + 1/4 equals 1/2." },
        { question: "What is 1/5 + 1/5?", options: ["1/5", "2/5", "1/2", "1"], correct: 2, explanation: "1/5 + 1/5 equals 2/5." },
        { question: "What is 1/6 + 1/6?", options: ["1/6", "1/3", "1/2", "1"], correct: 2, explanation: "1/6 + 1/6 equals 1/3." },
        { question: "What is 1/2 - 1/4?", options: ["1/4", "1/2", "3/4", "1"], correct: 1, explanation: "1/2 - 1/4 equals 1/4." },
        { question: "What is 2/3 - 1/3?", options: ["1/3", "2/3", "1", "1 1/3"], correct: 1, explanation: "2/3 - 1/3 equals 1/3." },
        { question: "What is 3/4 - 1/4?", options: ["1/4", "1/2", "3/4", "1"], correct: 2, explanation: "3/4 - 1/4 equals 1/2." },
        { question: "What is 4/5 - 2/5?", options: ["1/5", "2/5", "3/5", "4/5"], correct: 2, explanation: "4/5 - 2/5 equals 2/5." },
        { question: "What is 5/6 - 1/6?", options: ["1/6", "2/6", "4/6", "5/6"], correct: 1, explanation: "5/6 - 1/6 equals 4/6." },
        { question: "What is 1/2 x 1/2?", options: ["1/4", "1/2", "3/4", "1"], correct: 1, explanation: "1/2 x 1/2 equals 1/4." },
        { question: "What is 1/3 x 1/3?", options: ["1/9", "1/6", "1/3", "2/3"], correct: 1, explanation: "1/3 x 1/3 equals 1/9." },
        { question: "What is 1/4 x 1/4?", options: ["1/16", "1/8", "1/4", "1/2"], correct: 1, explanation: "1/4 x 1/4 equals 1/16." },
        { question: "What is 1/5 x 1/5?", options: ["1/25", "1/10", "1/5", "1/2"], correct: 1, explanation: "1/5 x 1/5 equals 1/25." },
        { question: "What is 1/6 x 1/6?", options: ["1/36", "1/12", "1/6", "1/3"], correct: 1, explanation: "1/6 x 1/6 equals 1/36." },
        { question: "What is 1/2 ÷ 1/2?", options: ["1/4", "1/2", "1", "2"], correct: 2, explanation: "1/2 ÷ 1/2 equals 1." },
        { question: "What is 1/3 ÷ 1/3?", options: ["1/9", "1/3", "1", "3"], correct: 2, explanation: "1/3 ÷ 1/3 equals 1." },
        { question: "What is 1/4 ÷ 1/4?", options: ["1/16", "1/4", "1", "4"], correct: 2, explanation: "1/4 ÷ 1/4 equals 1." },
        { question: "What is 1/5 ÷ 1/5?", options: ["1/25", "1/5", "1", "5"], correct: 2, explanation: "1/5 ÷ 1/5 equals 1." },
        { question: "What is 1/6 ÷ 1/6?", options: ["1/36", "1/6", "1", "6"], correct: 2, explanation: "1/6 ÷ 1/6 equals 1." },
        { question: "What is 2/3 + 1/3?", options: ["1/3", "2/3", "1", "1 1/3"], correct: 2, explanation: "2/3 + 1/3 equals 1." },
        { question: "What is 3/4 + 1/4?", options: ["1/4", "1/2", "3/4", "1"], correct: 2, explanation: "3/4 + 1/4 equals 1." },
        { question: "What is 4/5 + 1/5?", options: ["1/5", "2/5", "4/5", "1"], correct: 2, explanation: "4/5 + 1/5 equals 1." },
        { question: "What is 5/6 + 1/6?", options: ["1/6", "2/6", "5/6", "1"], correct: 2, explanation: "5/6 + 1/6 equals 1." },
        { question: "What is 1/2 - 1/3?", options: ["1/6", "1/3", "1/2", "2/3"], correct: 1, explanation: "1/2 - 1/3 equals 1/6." },
        { question: "What is 2/3 - 1/4?", options: ["1/12", "1/3", "5/12", "7/12"], correct: 3, explanation: "2/3 - 1/4 equals 5/12." },
        { question: "What is 3/4 - 1/5?", options: ["1/20", "1/4", "11/20", "13/20"], correct: 3, explanation: "3/4 - 1/5 equals 11/20." },
        { question: "What is 4/5 - 1/6?", options: ["1/30", "1/5", "19/30", "23/30"], correct: 3, explanation: "4/5 - 1/6 equals 19/30." },
        { question: "What is 5/6 - 1/7?", options: ["1/42", "1/6", "29/42", "34/42"], correct: 3, explanation: "5/6 - 1/7 equals 29/42." },
        { question: "What is 1/2 x 2/3?", options: ["1/6", "1/3", "1/2", "2/3"], correct: 1, explanation: "1/2 x 2/3 equals 1/3." },
        { question: "What is 2/3 x 3/4?", options: ["1/4", "1/2", "1", "1 1/2"], correct: 1, explanation: "2/3 x 3/4 equals 1/2." },
        { question: "What is 3/4 x 4/5?", options: ["1/5", "1/2", "3/5", "3/4"], correct: 1, explanation: "3/4 x 4/5 equals 3/5." },
        { question: "What is 4/5 x 5/6?", options: ["1/6", "2/3", "4/5", "5/6"], correct: 1, explanation: "4/5 x 5/6 equals 2/3." },
        { question: "What is 5/6 x 6/7?", options: ["1/7", "5/7", "6/7", "1"], correct: 1, explanation: "5/6 x 6/7 equals 5/7." },
        { question: "What is 1/2 ÷ 2/3?", options: ["1/3", "2/3", "3/4", "3/2"], correct: 1, explanation: "1/2 ÷ 2/3 equals 3/4." },
        { question: "What is 2/3 ÷ 3/4?", options: ["1/2", "2/3", "3/4", "4/3"], correct: 1, explanation: "2/3 ÷ 3/4 equals 8/9." },
        { question: "What is 3/4 ÷ 4/5?", options: ["1/2", "3/4", "4/5", "5/4"], correct: 1, explanation: "3/4 ÷ 4/5 equals 15/16." },
        { question: "What is 4/5 ÷ 5/6?", options: ["1/2", "4/5", "5/6", "6/5"], correct: 1, explanation: "4/5 ÷ 5/6 equals 24/25." },
        { question: "What is 5/6 ÷ 6/7?", options: ["1/2", "5/6", "6/7", "7/6"], correct: 1, explanation: "5/6 ÷ 6/7 equals 35/36." },
        { question: "What is 1/2 + 1/3?", options: ["1/6", "1/2", "2/3", "5/6"], correct: 1, explanation: "1/2 + 1/3 equals 5/6." },
        { question: "What is 2/3 + 1/4?", options: ["1/12", "1/3", "5/12", "11/12"], correct: 1, explanation: "2/3 + 1/4 equals 11/12." },
        { question: "What is 3/4 + 1/5?", options: ["1/20", "1/4", "11/20", "19/20"], correct: 1, explanation: "3/4 + 1/5 equals 19/20." },
        { question: "What is 4/5 + 1/6?", options: ["1/30", "1/5", "19/30", "29/30"], correct: 1, explanation: "4/5 + 1/6 equals 29/30." },
        { question: "What is 5/6 + 1/7?", options: ["1/42", "1/6", "29/42", "41/42"], correct: 1, explanation: "5/6 + 1/7 equals 41/42." },
        { question: "What is 1/2 - 1/4?", options: ["1/4", "1/2", "3/4", "1"], correct: 1, explanation: "1/2 - 1/4 equals 1/4." },
        { question: "What is 2/3 - 1/3?", options: ["1/3", "2/3", "1", "1 1/3"], correct: 1, explanation: "2/3 - 1/3 equals 1/3." },
        { question: "What is 3/4 - 1/4?", options: ["1/4", "1/2", "3/4", "1"], correct: 1, explanation: "3/4 - 1/4 equals 1/2." },
        { question: "What is 4/5 - 2/5?", options: ["1/5", "2/5", "3/5", "4/5"], correct: 1, explanation: "4/5 - 2/5 equals 2/5." },
        { question: "What is 5/6 - 1/6?", options: ["1/6", "2/6", "4/6", "5/6"], correct: 1, explanation: "5/6 - 1/6 equals 4/6." },
        { question: "What is 1/2 x 1/2?", options: ["1/4", "1/2", "3/4", "1"], correct: 1, explanation: "1/2 x 1/2 equals 1/4." },
        { question: "What is 1/3 x 1/3?", options: ["1/9", "1/6", "1/3", "2/3"], correct: 1, explanation: "1/3 x 1/3 equals 1/9." },
        { question: "What is 1/4 x 1/4?", options: ["1/16", "1/8", "1/4", "1/2"], correct: 1, explanation: "1/4 x 1/4 equals 1/16." },
        { question: "What is 1/5 x 1/5?", options: ["1/25", "1/10", "1/5", "1/2"], correct: 1, explanation: "1/5 x 1/5 equals 1/25." },
        { question: "What is 1/6 x 1/6?", options: ["1/36", "1/12", "1/6", "1/3"], correct: 1, explanation: "1/6 x 1/6 equals 1/36." },
        { question: "What is 1/2 ÷ 1/2?", options: ["1/4", "1/2", "1", "2"], correct: 2, explanation: "1/2 ÷ 1/2 equals 1." },
        { question: "What is 1/3 ÷ 1/3?", options: ["1/9", "1/3", "1", "3"], correct: 2, explanation: "1/3 ÷ 1/3 equals 1." },
        { question: "What is 1/4 ÷ 1/4?", options: ["1/16", "1/4", "1", "4"], correct: 2, explanation: "1/4 ÷ 1/4 equals 1." },
        { question: "What is 1/5 ÷ 1/5?", options: ["1/25", "1/5", "1", "5"], correct: 2, explanation: "1/5 ÷ 1/5 equals 1." },
        { question: "What is 1/6 ÷ 1/6?", options: ["1/36", "1/6", "1", "6"], correct: 2, explanation: "1/6 ÷ 1/6 equals 1." },
        { question: "What is 2/3 + 1/3?", options: ["1/3", "2/3", "1", "1 1/3"], correct: 2, explanation: "2/3 + 1/3 equals 1." },
        { question: "What is 3/4 + 1/4?", options: ["1/4", "1/2", "3/4", "1"], correct: 2, explanation: "3/4 + 1/4 equals 1." },
        { question: "What is 4/5 + 1/5?", options: ["1/5", "2/5", "4/5", "1"], correct: 2, explanation: "4/5 + 1/5 equals 1." },
        { question: "What is 5/6 + 1/6?", options: ["1/6", "2/6", "5/6", "1"], correct: 2, explanation: "5/6 + 1/6 equals 1." },
        { question: "What is 1/2 - 1/3?", options: ["1/6", "1/3", "1/2", "2/3"], correct: 1, explanation: "1/2 - 1/3 equals 1/6." },
        { question: "What is 2/3 - 1/4?", options: ["1/12", "1/3", "5/12", "7/12"], correct: 3, explanation: "2/3 - 1/4 equals 5/12." },
        { question: "What is 3/4 - 1/5?", options: ["1/20", "1/4", "11/20", "13/20"], correct: 3, explanation: "3/4 - 1/5 equals 11/20." }   
      ],

      "Geomatrical Shapes": [
        { question: "How many sides does a triangle have?", options: ["2", "3", "4", "5"], correct: 1, explanation: "A triangle has 3 sides." },
        { question: "How many sides does a square have?", options: ["3", "4", "5", "6"], correct: 1, explanation: "A square has 4 sides." },
        { question: "How many sides does a rectangle have?", options: ["3", "4", "5", "6"], correct: 1, explanation: "A rectangle has 4 sides." },
        { question: "How many sides does a pentagon have?", options: ["4", "5", "6", "7"], correct: 1, explanation: "A pentagon has 5 sides." },
        { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correct: 1, explanation: "A hexagon has 6 sides." },
        { question: "How many sides does an octagon have?", options: ["6", "7", "8", "9"], correct: 2, explanation: "An octagon has 8 sides." },
        { question: "What shape is a stop sign?", options: ["Triangle", "Square", "Octagon", "Hexagon"], correct: 2, explanation: "A stop sign is an octagon." },
        { question: "What shape is a pizza slice?", options: ["Circle", "Triangle", "Square", "Rectangle"], correct: 1, explanation: "A pizza slice is a triangle." },
        { question: "What shape is a dice?", options: ["Sphere", "Cube", "Cylinder", "Cone"], correct: 1, explanation: "A dice is a cube." },
        { question: "What shape is a ball?", options: ["Cube", "Sphere", "Cylinder", "Cone"], correct: 1, explanation: "A ball is a sphere." },
        { question: "How many faces does a cube have?", options: ["4", "5", "6", "7"], correct: 2, explanation: "A cube has 6 faces." },
        { question: "How many edges does a cube have?", options: ["8", "10", "12", "14"], correct: 2, explanation: "A cube has 12 edges." },
        { question: "How many vertices does a cube have?", options: ["6", "8", "10", "12"], correct: 1, explanation: "A cube has 8 vertices." },
        { question: "How many faces does a cylinder have?", options: ["1", "2", "3", "4"], correct: 2, explanation: "A cylinder has 3 faces." },
        { question: "How many edges does a cylinder have?", options: ["0", "1", "2", "3"], correct: 0, explanation: "A cylinder has 0 edges." },
        { question: "How many vertices does a cylinder have?", options: ["0", "1", "2", "3"], correct: 0, explanation: "A cylinder has 0 vertices." },
        { question: "How many faces does a cone have?", options: ["1", "2", "3", "4"], correct: 1, explanation: "A cone has 2 faces." },
        { question: "How many edges does a cone have?", options: ["0", "1", "2", "3"], correct: 1, explanation: "A cone has 1 edge." },
        { question: "How many vertices does a cone have?", options: ["0", "1", "2", "3"], correct: 1, explanation: "A cone has 1 vertex." },
        { question: "How many faces does a sphere have?", options: ["0", "1", "2", "3"], correct: 1, explanation: "A sphere has 1 face." },
        { question: "How many edges does a sphere have?", options: ["0", "1", "2", "3"], correct: 0, explanation: "A sphere has 0 edges." },
        { question: "How many vertices does a sphere have?", options: ["0", "1", "2", "3"], correct: 0, explanation: "A sphere has 0 vertices." },
        { question: "What shape is a book?", options: ["Cube", "Sphere", "Rectangle", "Cone"], correct: 2, explanation: "A book is a rectangle." },
        { question: "What shape is a clock?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 1, explanation: "A clock is a circle." },
        { question: "What shape is a door?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 3, explanation: "A door is a rectangle." },
        { question: "What shape is a window?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 0, explanation: "A window is a square." },
        { question: "What shape is a slice of bread?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 0, explanation: "A slice of bread is a square." },
        { question: "What shape is a traffic cone?", options: ["Cube", "Sphere", "Cylinder", "Cone"], correct: 3, explanation: "A traffic cone is a cone." },
        { question: "What shape is a can of soda?", options: ["Cube", "Sphere", "Cylinder", "Cone"], correct: 2, explanation: "A can of soda is a cylinder." },
        { question: "What shape is a pyramid?", options: ["Cube", "Sphere", "Cylinder", "Pyramid"], correct: 3, explanation: "A pyramid is a pyramid." },
        { question: "How many faces does a pyramid have?", options: ["3", "4", "5", "6"], correct: 2, explanation: "A pyramid has 5 faces." },
        { question: "How many edges does a pyramid have?", options: ["6", "8", "10", "12"], correct: 1, explanation: "A pyramid has 8 edges." },
        { question: "How many vertices does a pyramid have?", options: ["4", "5", "6", "7"], correct: 1, explanation: "A pyramid has 5 vertices." },
        { question: "What shape is a piece of cheese?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 2, explanation: "A piece of cheese is a triangle." },
        { question: "What shape is a slice of cake?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 2, explanation: "A slice of cake is a triangle." },
        { question: "What shape is a coin?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 1, explanation: "A coin is a circle." },
        { question: "What shape is a picture frame?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 3, explanation: "A picture frame is a rectangle." },
        { question: "What shape is a computer screen?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 3, explanation: "A computer screen is a rectangle." },
        { question: "What shape is a piece of paper?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 3, explanation: "A piece of paper is a rectangle." },
        { question: "What shape is a slice of pie?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 2, explanation: "A slice of pie is a triangle." },
        { question: "What shape is a slice of watermelon?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 2, explanation: "A slice of watermelon is a triangle." },
        { question: "What shape is a slice of pizza?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 2, explanation: "A slice of pizza is a triangle." },
        { question: "What shape is a slice of lemon?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 1, explanation: "A slice of lemon is a circle." },
        { question: "What shape is a slice of orange?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 1, explanation: "A slice of orange is a circle." },
        { question: "What shape is a slice of apple?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 2, explanation: "A slice of apple is a triangle." },
        { question: "What shape is a slice of cucumber?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 1, explanation: "A slice of cucumber is a circle." },
        { question: "What shape is a slice of tomato?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 1, explanation: "A slice of tomato is a circle." },
        { question: "What shape is a slice of carrot?", options: ["Square", "Circle", "Triangle", "Rectangle"], correct: 1, explanation: "A slice of carrot is a circle." }
      ],
      "Measurement":[
        { question: "How many centimeters are in 1 meter?", options: ["10 cm", "100 cm", "1000 cm", "10000 cm"], correct: 1, explanation: "There are 100 centimeters in 1 meter." },
        { question: "How many millimeters are in 1 centimeter?", options: ["10 mm", "100 mm", "1000 mm", "10000 mm"], correct: 0, explanation: "There are 10 millimeters in 1 centimeter." },
        { question: "How many meters are in 1 kilometer?", options: ["10 m", "100 m", "1000 m", "10000 m"], correct: 2, explanation: "There are 1000 meters in 1 kilometer." },
        { question: "Which unit would you use to measure the length of a pencil?", options: ["Kilometer", "Meter", "Centimeter", "Millimeter"], correct: 2, explanation: "Centimeter is appropriate for measuring the length of a pencil." },
        { question: "Which unit would you use to measure the distance between two cities?", options: ["Kilometer", "Meter", "Centimeter", "Millimeter"], correct: 0, explanation: "Kilometer is appropriate for measuring the distance between two cities." },
        { question: "Which unit would you use to measure the thickness of a coin?", options: ["Kilometer", "Meter", "Centimeter", "Millimeter"], correct: 3, explanation: "Millimeter is appropriate for measuring the thickness of a coin." },
        { question: "Which unit would you use to measure the length of a classroom?", options: ["Kilometer", "Meter", "Centimeter", "Millimeter"], correct: 1, explanation: "Meter is appropriate for measuring the length of a classroom." },
        { question: "How many grams are in 1 kilogram?", options: ["10 g", "100 g", "1000 g", "10000 g"], correct: 2, explanation: "There are 1000 grams in 1 kilogram." },
        { question: "Which unit would you use to measure the weight of an apple?", options: ["Kilogram", "Gram", "Milligram", "Ton"], correct: 1, explanation: "Gram is appropriate for measuring the weight of an apple." },
        { question: "Which unit would you use to measure the weight of a car?", options: ["Kilogram", "Gram", "Milligram", "Ton"], correct: 0, explanation: "Kilogram is appropriate for measuring the weight of a car." },
        { question: "How many milliliters are in 1 liter?", options: ["10 ml", "100 ml", "1000 ml", "10000 ml"], correct: 2, explanation: "There are 1000 milliliters in 1 liter." },
        { question: "Which unit would you use to measure the amount of water in a glass?", options: ["Liter", "Milliliter", "Kiloliter", "Centiliter"], correct: 1, explanation: "Milliliter is appropriate for measuring the amount of water in a glass." },
        { question: "Which unit would you use to measure the amount of water in a bathtub?", options: ["Liter", "Milliliter", "Kiloliter", "Centiliter"], correct: 0, explanation: "Liter is appropriate for measuring the amount of water in a bathtub." },
        { question: "Which is longer: 1 meter or 50 centimeters?", options: ["1 meter", "50 centimeters", "Both are equal", "Cannot be compared"], correct: 0, explanation: "1 meter is equal to 100 centimeters, so 1 meter is longer than 50 centimeters." },
        { question: "Which is heavier: 1 kilogram or 500 grams?", options: ["1 kilogram", "500 grams", "Both are equal", "Cannot be compared"], correct: 0, explanation: "1 kilogram is equal to 1000 grams, so 1 kilogram is heavier than 500 grams." },
        { question: "Which is more: 1 liter or 500 milliliters?", options: ["1 liter", "500 milliliters", "Both are equal", "Cannot be compared"], correct: 0, explanation: "1 liter is equal to 1000 milliliters, so 1 liter is more than 500 milliliters." },
        { question: "Convert 5 meters to centimeters.", options: ["5 cm", "50 cm", "500 cm", "5000 cm"], correct: 2, explanation: "5 meters = 5 × 100 = 500 centimeters." },
        { question: "Convert 300 centimeters to meters.", options: ["0.3 m", "3 m", "30 m", "300 m"], correct: 1, explanation: "300 centimeters = 300 ÷ 100 = 3 meters." },
        { question: "Convert 2 kilometers to meters.", options: ["2 m", "20 m", "200 m", "2000 m"], correct: 3, explanation: "2 kilometers = 2 × 1000 = 2000 meters." },
        { question: "Convert 4000 meters to kilometers.", options: ["0.4 km", "4 km", "40 km", "400 km"], correct: 1, explanation: "4000 meters = 4000 ÷ 1000 = 4 kilometers." },
        { question: "Convert 7 kilograms to grams.", options: ["7 g", "70 g", "700 g", "7000 g"], correct: 3, explanation: "7 kilograms = 7 × 1000 = 7000 grams." },
        { question: "Convert 6000 grams to kilograms.", options: ["0.6 kg", "6 kg", "60 kg", "600 kg"], correct: 1, explanation: "6000 grams = 6000 ÷ 1000 = 6 kilograms." },
        { question: "Convert 3 liters to milliliters.", options: ["3 ml", "30 ml", "300 ml", "3000 ml"], correct: 3, explanation: "3 liters = 3 × 1000 = 3000 milliliters." },
        { question: "Convert 8000 milliliters to liters.", options: ["0.8 L", "8 L", "80 L", "800 L"], correct: 1, explanation: "8000 milliliters = 8000 ÷ 1000 = 8 liters." },
        { question: "If a pencil is 15 centimeters long, what is its length in millimeters?", options: ["1.5 mm", "15 mm", "150 mm", "1500 mm"], correct: 2, explanation: "15 centimeters = 15 × 10 = 150 millimeters." },
        { question: "If a rope is 9 meters long, what is its length in centimeters?", options: ["9 cm", "90 cm", "900 cm", "9000 cm"], correct: 2, explanation: "9 meters = 9 × 100 = 900 centimeters." },
        { question: "If a book weighs 250 grams, what is its weight in kilograms?", options: ["0.25 kg", "2.5 kg", "25 kg", "250 kg"], correct: 0, explanation: "250 grams = 250 ÷ 1000 = 0.25 kilograms." },
        { question: "If a water bottle contains 1.5 liters, what is the volume in milliliters?", options: ["15 ml", "150 ml", "1500 ml", "15000 ml"], correct: 2, explanation: "1.5 liters = 1.5 × 1000 = 1500 milliliters." },
        { question: "Which is shorter: 20 cm or 0.2 m?", options: ["20 cm", "0.2 m", "Both are equal", "Cannot be compared"], correct: 2, explanation: "20 cm = 0.2 m, so both are equal." },
        { question: "Which is lighter: 500 g or 0.5 kg?", options: ["500 g", "0.5 kg", "Both are equal", "Cannot be compared"], correct: 2, explanation: "500 g = 0.5 kg, so both are equal." },
        { question: "Which is less: 250 ml or 0.25 L?", options: ["250 ml", "0.25 L", "Both are equal", "Cannot be compared"], correct: 2, explanation: "250 ml = 0.25 L, so both are equal." },
        { question: "If a ribbon is 1.5 meters long, how many centimeters is it?", options: ["15 cm", "150 cm", "1500 cm", "15000 cm"], correct: 1, explanation: "1.5 meters = 1.5 × 100 = 150 centimeters." },
        { question: "If a bag of flour weighs 2.5 kilograms, how many grams is it?", options: ["25 g", "250 g", "2500 g", "25000 g"], correct: 2, explanation: "2.5 kilograms = 2.5 × 1000 = 2500 grams." },
        { question: "If a jug holds 3.5 liters, how many milliliters is it?", options: ["35 ml", "350 ml", "3500 ml", "35000 ml"], correct: 2, explanation: "3.5 liters = 3.5 × 1000 = 3500 milliliters." },
        { question: "What is the standard unit for measuring length?", options: ["Gram", "Liter", "Meter", "Second"], correct: 2, explanation: "The standard unit for measuring length is meter." },
        { question: "What is the standard unit for measuring mass?", options: ["Gram", "Liter", "Meter", "Second"], correct: 0, explanation: "The standard unit for measuring mass is gram." },
        { question: "What is the standard unit for measuring capacity?", options: ["Gram", "Liter", "Meter", "Second"], correct: 1, explanation: "The standard unit for measuring capacity is liter." },
        { question: "What is the standard unit for measuring time?", options: ["Gram", "Liter", "Meter", "Second"], correct: 3, explanation: "The standard unit for measuring time is second." },
        { question: "How many seconds are in 1 minute?", options: ["30 seconds", "60 seconds", "90 seconds", "120 seconds"], correct: 1, explanation: "There are 60 seconds in 1 minute." },
        { question: "How many minutes are in 1 hour?", options: ["30 minutes", "45 minutes", "60 minutes", "90 minutes"], correct: 2, explanation: "There are 60 minutes in 1 hour." },
        { question: "How many hours are in 1 day?", options: ["12 hours", "18 hours", "24 hours", "36 hours"], correct: 2, explanation: "There are 24 hours in 1 day." },
        { question: "How many days are in 1 week?", options: ["5 days", "6 days", "7 days", "8 days"], correct: 2, explanation: "There are 7 days in 1 week." },
        { question: "How many months are in 1 year?", options: ["10 months", "11 months", "12 months", "13 months"], correct: 2, explanation: "There are 12 months in 1 year." },
        { question: "Which tool is used to measure length?", options: ["Scale", "Ruler", "Clock", "Thermometer"], correct: 1, explanation: "A ruler is used to measure length." },
        { question: "Which tool is used to measure weight?", options: ["Scale", "Ruler", "Clock", "Thermometer"], correct: 0, explanation: "A scale is used to measure weight." },
        { question: "Which tool is used to measure time?", options: ["Scale", "Ruler", "Clock", "Thermometer"], correct: 2, explanation: "A clock is used to measure time." },
        { question: "Which tool is used to measure temperature?", options: ["Scale", "Ruler", "Clock", "Thermometer"], correct: 3, explanation: "A thermometer is used to measure temperature." },
        { question: "If a child is 125 cm tall, what is their height in meters?", options: ["0.125 m", "1.25 m", "12.5 m", "125 m"], correct: 1, explanation: "125 cm = 125 ÷ 100 = 1.25 meters." },
        { question: "If a box weighs 3500 g, what is its weight in kilograms?", options: ["0.35 kg", "3.5 kg", "35 kg", "350 kg"], correct: 1, explanation: "3500 g = 3500 ÷ 1000 = 3.5 kilograms." },
        { question: "If a container holds 2500 ml of water, what is the volume in liters?", options: ["0.25 L", "2.5 L", "25 L", "250 L"], correct: 1, explanation: "2500 ml = 2500 ÷ 1000 = 2.5 liters." },
        { question: "Which is longer: 1.5 m or 150 cm?", options: ["1.5 m", "150 cm", "Both are equal", "Cannot be compared"], correct: 2, explanation: "1.5 m = 150 cm, so both are equal." },
        { question: "Which is heavier: 2.5 kg or 2500 g?", options: ["2.5 kg", "2500 g", "Both are equal", "Cannot be compared"], correct: 2, explanation: "2.5 kg = 2500 g, so both are equal." },
        { question: "Which is more: 3.5 L or 3500 ml?", options: ["3.5 L", "3500 ml", "Both are equal", "Cannot be compared"], correct: 2, explanation: "3.5 L = 3500 ml, so both are equal." },
        { question: "If a journey takes 2 hours and 30 minutes, how many minutes is that in total?", options: ["120 minutes", "150 minutes", "180 minutes", "210 minutes"], correct: 1, explanation: "2 hours = 120 minutes, 120 + 30 = 150 minutes." },
        { question: "If a class starts at 9:15 AM and ends at 10:45 AM, how long is the class?", options: ["1 hour", "1 hour 15 minutes", "1 hour 30 minutes", "2 hours"], correct: 2, explanation: "From 9:15 AM to 10:45 AM is 1 hour and 30 minutes." },
        { question: "Which is the smallest unit of length?", options: ["Kilometer", "Meter", "Centimeter", "Millimeter"], correct: 3, explanation: "Millimeter is the smallest unit of length among the given options." },
        { question: "Which is the largest unit of length?", options: ["Kilometer", "Meter", "Centimeter", "Millimeter"], correct: 0, explanation: "Kilometer is the largest unit of length among the given options." },
        { question: "Which is the smallest unit of weight?", options: ["Kilogram", "Gram", "Milligram", "Ton"], correct: 2, explanation: "Milligram is the smallest unit of weight among the given options." },
        { question: "Which is the largest unit of weight?", options: ["Kilogram", "Gram", "Milligram", "Ton"], correct: 3, explanation: "Ton is the largest unit of weight among the given options." },
        { question: "Which is the smallest unit of capacity?", options: ["Kiloliter", "Liter", "Milliliter", "Centiliter"], correct: 2, explanation: "Milliliter is the smallest unit of capacity among the given options." },
        { question: "Which is the largest unit of capacity?", options: ["Kiloliter", "Liter", "Milliliter", "Centiliter"], correct: 0, explanation: "Kiloliter is the largest unit of capacity among the given options." },
        { question: "If a pencil is 12 cm long and another pencil is 8 cm long, what is their total length?", options: ["4 cm", "20 cm", "96 cm", "120 cm"], correct: 1, explanation: "12 cm + 8 cm = 20 cm." },
        { question: "If a rope is 5 m long and another rope is 3 m long, what is their total length?", options: ["2 m", "8 m", "15 m", "500 cm"], correct: 1, explanation: "5 m + 3 m = 8 m." },
        { question: "If a bag weighs 2 kg and another bag weighs 500 g, what is their total weight in kilograms?", options: ["2.5 kg", "2.05 kg", "2.005 kg", "2500 kg"], correct: 0, explanation: "2 kg + 500 g = 2 kg + 0.5 kg = 2.5 kg." },
        { question: "If a bottle contains 1.5 L of water and another bottle contains 750 ml, what is the total volume in liters?", options: ["2.25 L", "2.5 L", "7.5 L", "15.75 L"], correct: 0, explanation: "1.5 L + 750 ml = 1.5 L + 0.75 L = 2.25 L." },
        { question: "If a ribbon is 3 m long and you cut off 75 cm, how much ribbon is left?", options: ["2.25 m", "2.5 m", "2.75 m", "3.75 m"], correct: 0, explanation: "3 m - 75 cm = 3 m - 0.75 m = 2.25 m." },
        { question: "If a container has 2 L of water and you pour out 500 ml, how much water is left?", options: ["1.5 L", "1.75 L", "1.95 L", "2.5 L"], correct: 0, explanation: "2 L - 500 ml = 2 L - 0.5 L = 1.5 L." },
        { question: "If a bag of flour weighs 3 kg and you use 750 g, how much flour is left?", options: ["2.25 kg", "2.5 kg", "2.75 kg", "3.75 kg"], correct: 0, explanation: "3 kg - 750 g = 3 kg - 0.75 kg = 2.25 kg." },
        { question: "Which of these is NOT a unit of length?", options: ["Meter", "Centimeter", "Gram", "Millimeter"], correct: 2, explanation: "Gram is a unit of mass, not length." },
        { question: "Which of these is NOT a unit of weight?", options: ["Kilogram", "Gram", "Liter", "Milligram"], correct: 2, explanation: "Liter is a unit of capacity, not weight." },
        { question: "Which of these is NOT a unit of capacity?", options: ["Liter", "Milliliter", "Centimeter", "Kiloliter"], correct: 2, explanation: "Centimeter is a unit of length, not capacity." },
        { question: "Which of these is NOT a unit of time?", options: ["Second", "Minute", "Meter", "Hour"], correct: 2, explanation: "Meter is a unit of length, not time." },
        { question: "If a pencil is 15 cm long and a pen is 12 cm long, how much longer is the pencil than the pen?", options: ["3 cm", "27 cm", "180 cm", "3 mm"], correct: 0, explanation: "15 cm - 12 cm = 3 cm." },
        { question: "If a book weighs 750 g and a notebook weighs 250 g, how much heavier is the book than the notebook?", options: ["500 g", "0.5 kg", "1000 g", "0.25 kg"], correct: 0, explanation: "750 g - 250 g = 500 g." },
        { question: "If a jug holds 2 L and a glass holds 250 ml, how many glasses can be filled from the jug?", options: ["4", "8", "10", "20"], correct: 1, explanation: "2 L = 2000 ml, 2000 ÷ 250 = 8 glasses." },
        { question: "If a class starts at 10:30 AM and lasts for 45 minutes, when does it end?", options: ["11:00 AM", "11:15 AM", "11:30 AM", "12:15 PM"], correct: 1, explanation: "10:30 AM + 45 minutes = 11:15 AM." },
        { question: "If a movie starts at 3:15 PM and ends at 5:45 PM, how long is the movie?", options: ["2 hours", "2 hours 15 minutes", "2 hours 30 minutes", "3 hours"], correct: 2, explanation: "From 3:15 PM to 5:45 PM is 2 hours and 30 minutes." },
        { question: "Which is the correct order of units from smallest to largest?", options: ["mm, cm, m, km", "km, m, cm, mm", "mm, m, cm, km", "cm, mm, m, km"], correct: 0, explanation: "The correct order from smallest to largest is: millimeter (mm), centimeter (cm), meter (m), kilometer (km)." },
        { question: "Which is the correct order of units from smallest to largest?", options: ["kg, g, mg", "mg, g, kg", "g, mg, kg", "g, kg, mg"], correct: 1, explanation: "The correct order from smallest to largest is: milligram (mg), gram (g), kilogram (kg)." },
        { question: "Which is the correct order of units from smallest to largest?", options: ["L, ml, kl", "ml, L, kl", "kl, L, ml", "L, kl, ml"], correct: 1, explanation: "The correct order from smallest to largest is: milliliter (ml), liter (L), kiloliter (kl)." },
        { question: "Which is the correct order of units from smallest to largest?", options: ["second, minute, hour, day", "day, hour, minute, second", "minute, second, hour, day", "second, hour, minute, day"], correct: 0, explanation: "The correct order from smallest to largest is: second, minute, hour, day." },
        { question: "If a train travels at 60 kilometers per hour, how far will it travel in 2 hours?", options: ["30 km", "60 km", "90 km", "120 km"], correct: 3, explanation: "60 km/h × 2 h = 120 km." },
        { question: "If a car travels at 50 kilometers per hour, how long will it take to travel 150 kilometers?", options: ["2 hours", "3 hours", "4 hours", "5 hours"], correct: 1, explanation: "150 km ÷ 50 km/h = 3 hours." },
        { question: "If a recipe calls for 250 ml of milk and you want to make half the recipe, how much milk do you need?", options: ["125 ml", "150 ml", "200 ml", "500 ml"], correct: 0, explanation: "Half of 250 ml is 125 ml." },
        { question: "If a recipe calls for 300 g of flour and you want to make double the recipe, how much flour do you need?", options: ["150 g", "450 g", "600 g", "900 g"], correct: 2, explanation: "Double of 300 g is 600 g." },
        { question: "Which of these would be measured in kilograms?", options: ["Length of a pencil", "Volume of water", "Weight of a person", "Time of a race"], correct: 2, explanation: "The weight of a person would be measured in kilograms." },
        { question: "Which of these would be measured in liters?", options: ["Length of a rope", "Volume of juice", "Weight of a book", "Time of a movie"], correct: 1, explanation: "The volume of juice would be measured in liters." },
        { question: "Which of these would be measured in meters?", options: ["Height of a building", "Volume of a swimming pool", "Weight of a car", "Time of a journey"], correct: 0, explanation: "The height of a building would be measured in meters." },
        { question: "Which of these would be measured in hours?", options: ["Length of a road", "Volume of a container", "Weight of a bag", "Duration of a flight"], correct: 3, explanation: "The duration of a flight would be measured in hours." },
        { question: "If a box is 30 cm long, 20 cm wide, and 15 cm high, what is its height in millimeters?", options: ["15 mm", "150 mm", "1500 mm", "15000 mm"], correct: 1, explanation: "15 cm = 15 × 10 = 150 millimeters." },
        { question: "If a water tank holds 5000 liters, what is its capacity in kiloliters?", options: ["0.5 kl", "5 kl", "50 kl", "500 kl"], correct: 1, explanation: "5000 liters = 5000 ÷ 1000 = 5 kiloliters." },
        { question: "If a truck weighs 3.5 tons, what is its weight in kilograms?", options: ["35 kg", "350 kg", "3500 kg", "35000 kg"], correct: 2, explanation: "3.5 tons = 3.5 × 1000 = 3500 kilograms." },
        { question: "If a journey takes 3 days, how many hours is that?", options: ["24 hours", "36 hours", "48 hours", "72 hours"], correct: 3, explanation: "3 days = 3 × 24 = 72 hours." },
        { question: "If a race takes 2 hours and 15 minutes, how many minutes is that?", options: ["135 minutes", "145 minutes", "155 minutes", "165 minutes"], correct: 0, explanation: "2 hours = 120 minutes, 120 + 15 = 135 minutes." },
        { question: "If a box is 40 cm long, 30 cm wide, and 20 cm high, what is its volume?", options: ["90 cubic cm", "900 cubic cm", "9000 cubic cm", "24000 cubic cm"], correct: 3, explanation: "Volume = length × width × height = 40 × 30 × 20 = 24000 cubic cm." },
        { question: "If a rectangular field is 25 m long and 15 m wide, what is its perimeter?", options: ["40 m", "65 m", "80 m", "375 m"], correct: 2, explanation: "Perimeter = 2 × (length + width) = 2 × (25 + 15) = 2 × 40 = 80 m." },
        { question: "If a rectangular field is 25 m long and 15 m wide, what is its area?", options: ["40 square m", "65 square m", "80 square m", "375 square m"], correct: 3, explanation: "Area = length × width = 25 × 15 = 375 square m." },
        { question: "If a square has sides of 10 cm each, what is its perimeter?", options: ["10 cm", "20 cm", "30 cm", "40 cm"], correct: 3, explanation: "Perimeter of a square = 4 × side = 4 × 10 = 40 cm." },
        { question: "If a square has sides of 10 cm each, what is its area?", options: ["10 square cm", "40 square cm", "100 square cm", "400 square cm"], correct: 2, explanation: "Area of a square = side × side = 10 × 10 = 100 square cm." },
        { question: "Which unit would you use to measure the area of a football field?", options: ["Meter", "Square meter", "Cubic meter", "Kilometer"], correct: 1, explanation: "Square meter is used to measure area." },
        { question: "Which unit would you use to measure the volume of a swimming pool?", options: ["Meter", "Square meter", "Cubic meter", "Kilometer"], correct: 2, explanation: "Cubic meter is used to measure volume." },
        { question: "If a circle has a radius of 7 cm, what is its diameter?", options: ["3.5 cm", "7 cm", "14 cm", "49 cm"], correct: 2, explanation: "Diameter = 2 × radius = 2 × 7 = 14 cm." },
        { question: "If a circle has a diameter of 10 cm, what is its radius?", options: ["5 cm", "10 cm", "20 cm", "100 cm"], correct: 0, explanation: "Radius = diameter ÷ 2 = 10 ÷ 2 = 5 cm." },
        { question: "Which shape has all sides equal?", options: ["Rectangle", "Square", "Triangle", "Circle"], correct: 1, explanation: "A square has all sides equal." },
        { question: "Which shape has all sides equal and all angles equal to 90 degrees?", options: ["Rectangle", "Square", "Triangle", "Circle"], correct: 1, explanation: "A square has all sides equal and all angles equal to 90 degrees." },
        { question: "Which shape has opposite sides equal and all angles equal to 90 degrees?", options: ["Rectangle", "Square", "Triangle", "Circle"], correct: 0, explanation: "A rectangle has opposite sides equal and all angles equal to 90 degrees." },
        { question: "Which shape has 3 sides?", options: ["Rectangle", "Square", "Triangle", "Circle"], correct: 2, explanation: "A triangle has 3 sides." },
        { question: "Which shape has no sides?", options: ["Rectangle", "Square", "Triangle", "Circle"], correct: 3, explanation: "A circle has no sides." },
        { question: "If a rectangle has a length of 8 cm and a width of 5 cm, what is its perimeter?", options: ["13 cm", "26 cm", "40 cm", "80 cm"], correct: 1, explanation: "Perimeter = 2 × (length + width) = 2 × (8 + 5) = 2 × 13 = 26 cm." },
        { question: "If a rectangle has a length of 8 cm and a width of 5 cm, what is its area?", options: ["13 square cm", "26 square cm", "40 square cm", "80 square cm"], correct: 2, explanation: "Area = length × width = 8 × 5 = 40 square cm." }
      ],

      "Money": [
        { question: "How many paise are there in 1 rupee?", options: ["10", "50", "100", "1000"], correct: 2, explanation: "There are 100 paise in 1 rupee." },
        { question: "What is the value of this coin: ₹5?", options: ["1 Rupee", "2 Rupees", "5 Rupees", "10 Rupees"], correct: 2, explanation: "This coin is worth 5 Rupees." },
        { question: "What is the value of this note: ₹20?", options: ["10 Rupees", "20 Rupees", "50 Rupees", "100 Rupees"], correct: 1, explanation: "This note is worth 20 Rupees." },
        { question: "If you have two ₹10 notes, how much money do you have?", options: ["₹10", "₹15", "₹20", "₹25"], correct: 2, explanation: "Two ₹10 notes make ₹10 + ₹10 = ₹20." },
        { question: "If you have a ₹50 note and you spend ₹20, how much money is left?", options: ["₹20", "₹30", "₹50", "₹70"], correct: 1, explanation: "₹50 - ₹20 = ₹30 is left." },
        { question: "Which is more: ₹5 or ₹10?", options: ["₹5", "₹10", "Both are equal", "Cannot say"], correct: 1, explanation: "₹10 is more than ₹5." },
        { question: "Which is less: ₹20 or ₹50?", options: ["₹20", "₹50", "Both are equal", "Cannot say"], correct: 0, explanation: "₹20 is less than ₹50." },
        { question: "Count the money: ₹10 + ₹5 + ₹2", options: ["₹15", "₹16", "₹17", "₹20"], correct: 2, explanation: "₹10 + ₹5 + ₹2 = ₹17." },
        { question: "Count the money: ₹20 + ₹10 + ₹1", options: ["₹25", "₹30", "₹31", "₹35"], correct: 2, explanation: "₹20 + ₹10 + ₹1 = ₹31." },
        { question: "Count the money: ₹50 + ₹20 + ₹5", options: ["₹65", "₹70", "₹75", "₹80"], correct: 2, explanation: "₹50 + ₹20 + ₹5 = ₹75." },
        { question: "How many ₹1 coins make ₹5?", options: ["2", "3", "4", "5"], correct: 3, explanation: "Five ₹1 coins make ₹5." },
        { question: "How many ₹2 coins make ₹10?", options: ["2", "5", "10", "20"], correct: 1, explanation: "Five ₹2 coins make ₹10." },
        { question: "How many ₹5 coins make ₹25?", options: ["2", "3", "4", "5"], correct: 3, explanation: "Five ₹5 coins make ₹25." },
        { question: "You have ₹10 and you buy a chocolate for ₹7. How much change do you get back?", options: ["₹2", "₹3", "₹4", "₹5"], correct: 1, explanation: "₹10 - ₹7 = ₹3 change." },
        { question: "You have ₹20 and you buy a pencil for ₹5. How much change do you get back?", options: ["₹5", "₹10", "₹15", "₹20"], correct: 2, explanation: "₹20 - ₹5 = ₹15 change." },
        { question: "You have ₹50 and you buy a book for ₹30. How much change do you get back?", options: ["₹10", "₹20", "₹25", "₹30"], correct: 1, explanation: "₹50 - ₹30 = ₹20 change." },
        { question: "What is the total cost of two apples if each apple costs ₹5?", options: ["₹5", "₹10", "₹15", "₹20"], correct: 1, explanation: "2 apples × ₹5/apple = ₹10." },
        { question: "What is the total cost of three bananas if each banana costs ₹2?", options: ["₹2", "₹4", "₹6", "₹8"], correct: 2, explanation: "3 bananas × ₹2/banana = ₹6." },
        { question: "What is the total cost of four candies if each candy costs ₹1?", options: ["₹2", "₹3", "₹4", "₹5"], correct: 2, explanation: "4 candies × ₹1/candy = ₹4." },
        { question: "If you buy a toy for ₹25 and give ₹50, how much change will you receive?", options: ["₹15", "₹20", "₹25", "₹30"], correct: 2, explanation: "₹50 - ₹25 = ₹25 change." },
        { question: "If you buy a pen for ₹12 and give ₹20, how much change will you receive?", options: ["₹5", "₹8", "₹10", "₹12"], correct: 1, explanation: "₹20 - ₹12 = ₹8 change." },
        { question: "If you buy an ice cream for ₹35 and give ₹50, how much change will you receive?", options: ["₹10", "₹15", "₹20", "₹25"], correct: 1, explanation: "₹50 - ₹35 = ₹15 change." },
        { question: "Add: ₹15 + ₹5", options: ["₹10", "₹15", "₹20", "₹25"], correct: 2, explanation: "₹15 + ₹5 = ₹20." },
        { question: "Add: ₹25 + ₹10", options: ["₹30", "₹35", "₹40", "₹45"], correct: 1, explanation: "₹25 + ₹10 = ₹35." },
        { question: "Add: ₹40 + ₹20", options: ["₹50", "₹60", "₹70", "₹80"], correct: 1, explanation: "₹40 + ₹20 = ₹60." },
        { question: "Subtract: ₹20 - ₹8", options: ["₹8", "₹10", "₹12", "₹15"], correct: 2, explanation: "₹20 - ₹8 = ₹12." },
        { question: "Subtract: ₹30 - ₹15", options: ["₹10", "₹15", "₹20", "₹25"], correct: 1, explanation: "₹30 - ₹15 = ₹15." },
        { question: "Subtract: ₹50 - ₹25", options: ["₹15", "₹20", "₹25", "₹30"], correct: 2, explanation: "₹50 - ₹25 = ₹25." },
        { question: "What is the cost of 2 notebooks if one notebook costs ₹20?", options: ["₹20", "₹30", "₹40", "₹50"], correct: 2, explanation: "2 notebooks × ₹20/notebook = ₹40." },
        { question: "What is the cost of 3 erasers if one eraser costs ₹5?", options: ["₹5", "₹10", "₹15", "₹20"], correct: 2, explanation: "3 erasers × ₹5/eraser = ₹15." },
        { question: "What is the cost of 5 pencils if one pencil costs ₹3?", options: ["₹8", "₹10", "₹12", "₹15"], correct: 3, explanation: "5 pencils × ₹3/pencil = ₹15." },
        { question: "You have ₹30. Can you buy a toy car that costs ₹35?", options: ["Yes", "No", "Maybe", "Not sure"], correct: 1, explanation: "No, because ₹30 is less than ₹35." },
        { question: "You have ₹40. Can you buy a book that costs ₹30?", options: ["Yes", "No", "Maybe", "Not sure"], correct: 0, explanation: "Yes, because ₹40 is more than ₹30." },
        { question: "You have ₹100. Can you buy a shirt that costs ₹90?", options: ["Yes", "No", "Maybe", "Not sure"], correct: 0, explanation: "Yes, because ₹100 is more than ₹90." },
        { question: "How much money is ₹10 and ₹20 together?", options: ["₹20", "₹25", "₹30", "₹35"], correct: 2, explanation: "₹10 + ₹20 = ₹30." },
        { question: "How much money is ₹5 and ₹50 together?", options: ["₹50", "₹55", "₹60", "₹65"], correct: 1, explanation: "₹5 + ₹50 = ₹55." },
        { question: "How much money is ₹2 and ₹100 together?", options: ["₹100", "₹102", "₹110", "₹120"], correct: 1, explanation: "₹2 + ₹100 = ₹102." },
        { question: "If you have ₹20 and spend ₹10, how much do you save?", options: ["₹5", "₹10", "₹15", "₹20"], correct: 1, explanation: "Saving is the amount left after spending, which is ₹10." },
        { question: "If you have ₹50 and spend ₹30, how much do you save?", options: ["₹10", "₹20", "₹25", "₹30"], correct: 1, explanation: "Saving is the amount left after spending, which is ₹20." },
        { question: "If you have ₹100 and spend ₹60, how much do you save?", options: ["₹20", "₹30", "₹40", "₹50"], correct: 2, explanation: "Saving is the amount left after spending, which is ₹40." },
        { question: "What is the value of two ₹5 coins?", options: ["₹5", "₹10", "₹15", "₹20"], correct: 1, explanation: "Two ₹5 coins are worth ₹5 + ₹5 = ₹10." },
        { question: "What is the value of three ₹2 coins?", options: ["₹2", "₹4", "₹6", "₹8"], correct: 2, explanation: "Three ₹2 coins are worth ₹2 + ₹2 + ₹2 = ₹6." },
        { question: "What is the value of four ₹10 notes?", options: ["₹20", "₹30", "₹40", "₹50"], correct: 2, explanation: "Four ₹10 notes are worth ₹10 + ₹10 + ₹10 + ₹10 = ₹40." },
        { question: "You buy a pen for ₹8 and a notebook for ₹15. What is the total cost?", options: ["₹18", "₹20", "₹23", "₹25"], correct: 2, explanation: "₹8 + ₹15 = ₹23 total cost." },
        { question: "You buy a book for ₹45 and a pencil for ₹5. What is the total cost?", options: ["₹40", "₹45", "₹50", "₹55"], correct: 2, explanation: "₹45 + ₹5 = ₹50 total cost." },
        { question: "You buy a toy for ₹60 and a candy for ₹2. What is the total cost?", options: ["₹58", "₹60", "₹62", "₹65"], correct: 2, explanation: "₹60 + ₹2 = ₹62 total cost." },
        { question: "If you have ₹25 and spend ₹12, how much money do you have left?", options: ["₹10", "₹12", "₹13", "₹15"], correct: 2, explanation: "₹25 - ₹12 = ₹13 left." },
        { question: "If you have ₹60 and spend ₹35, how much money do you have left?", options: ["₹20", "₹25", "₹30", "₹35"], correct: 2, explanation: "₹60 - ₹35 = ₹25 left." },
        { question: "If you have ₹80 and spend ₹45, how much money do you have left?", options: ["₹25", "₹30", "₹35", "₹40"], correct: 2, explanation: "₹80 - ₹45 = ₹35 left." },
        { question: "Which is the bigger amount: ₹100 or ₹50?", options: ["₹50", "₹100", "Both are same", "None"], correct: 1, explanation: "₹100 is a bigger amount than ₹50." },
        { question: "Which is the smaller amount: ₹20 or ₹5?", options: ["₹5", "₹20", "Both are same", "None"], correct: 0, explanation: "₹5 is a smaller amount than ₹20." },
        { question: "Which amount is equal to ₹50: ₹20 + ₹20 + ₹10 or ₹50 + ₹10?", options: ["₹20 + ₹20 + ₹10", "₹50 + ₹10", "Both are equal", "None"], correct: 0, explanation: "₹20 + ₹20 + ₹10 = ₹50, which is equal to ₹50." },
        { question: "How many ₹5 notes are needed to make ₹100?", options: ["10", "20", "25", "50"], correct: 1, explanation: "₹100 ÷ ₹5 = 20 notes." },
        { question: "How many ₹10 notes are needed to make ₹50?", options: ["2", "5", "10", "20"], correct: 1, explanation: "₹50 ÷ ₹10 = 5 notes." },
        { question: "How many ₹20 notes are needed to make ₹100?", options: ["2", "5", "10", "20"], correct: 1, explanation: "₹100 ÷ ₹20 = 5 notes." },
        { question: "You have ₹30 and want to buy a toy for ₹40. How much more money do you need?", options: ["₹5", "₹10", "₹15", "₹20"], correct: 1, explanation: "₹40 - ₹30 = ₹10 more needed." },
        { question: "You have ₹60 and want to buy a book for ₹80. How much more money do you need?", options: ["₹10", "₹20", "₹30", "₹40"], correct: 1, explanation: "₹80 - ₹60 = ₹20 more needed." },
        { question: "You have ₹25 and want to buy a game for ₹50. How much more money do you need?", options: ["₹15", "₹20", "₹25", "₹30"], correct: 2, explanation: "₹50 - ₹25 = ₹25 more needed." },
        { question: "If you give ₹20 to buy an item costing ₹18, what is your change?", options: ["₹1", "₹2", "₹3", "₹4"], correct: 1, explanation: "₹20 - ₹18 = ₹2 change." },
        { question: "If you give ₹50 to buy an item costing ₹42, what is your change?", options: ["₹5", "₹8", "₹10", "₹12"], correct: 1, explanation: "₹50 - ₹42 = ₹8 change." },
        { question: "If you give ₹100 to buy an item costing ₹75, what is your change?", options: ["₹15", "₹20", "₹25", "₹30"], correct: 2, explanation: "₹100 - ₹75 = ₹25 change." },
        { question: "What is the total value of a ₹20 note and a ₹5 coin?", options: ["₹20", "₹22", "₹25", "₹30"], correct: 2, explanation: "₹20 + ₹5 = ₹25." },
        { question: "What is the total value of a ₹50 note and a ₹2 coin?", options: ["₹50", "₹52", "₹55", "₹60"], correct: 1, explanation: "₹50 + ₹2 = ₹52." },
        { question: "What is the total value of a ₹100 note and a ₹1 coin?", options: ["₹100", "₹101", "₹110", "₹120"], correct: 1, explanation: "₹100 + ₹1 = ₹101." },
        { question: "If you have ₹30 and you want to share it equally between 2 friends, how much does each friend get?", options: ["₹10", "₹15", "₹20", "₹25"], correct: 1, explanation: "₹30 ÷ 2 = ₹15 each." },
        { question: "If you have ₹40 and you want to share it equally between 4 friends, how much does each friend get?", options: ["₹5", "₹10", "₹15", "₹20"], correct: 0, explanation: "₹40 ÷ 4 = ₹10 each." },
        { question: "If you have ₹50 and you want to share it equally between 5 friends, how much does each friend get?", options: ["₹5", "₹10", "₹15", "₹20"], correct: 1, explanation: "₹50 ÷ 5 = ₹10 each." },
        { question: "Which is the largest coin among ₹1, ₹2, ₹5?", options: ["₹1", "₹2", "₹5", "All are equal"], correct: 2, explanation: "₹5 coin has the highest value among these." },
        { question: "Which is the smallest coin among ₹1, ₹2, ₹5?", options: ["₹1", "₹2", "₹5", "All are equal"], correct: 0, explanation: "₹1 coin has the lowest value among these." },
        { question: "Which note has a higher value: ₹20 or ₹10?", options: ["₹10", "₹20", "Both are equal", "Cannot say"], correct: 1, explanation: "₹20 note has a higher value than ₹10 note." },
        { question: "If you save ₹10 every day for 5 days, how much money will you save?", options: ["₹10", "₹20", "₹30", "₹50"], correct: 3, explanation: "₹10/day × 5 days = ₹50." },
        { question: "If you save ₹5 every day for 7 days, how much money will you save?", options: ["₹25", "₹30", "₹35", "₹40"], correct: 2, explanation: "₹5/day × 7 days = ₹35." },
        { question: "If you save ₹20 every day for 3 days, how much money will you save?", options: ["₹40", "₹50", "₹60", "₹70"], correct: 2, explanation: "₹20/day × 3 days = ₹60." },
        { question: "What is the total value of two ₹20 notes and one ₹10 note?", options: ["₹40", "₹50", "₹60", "₹70"], correct: 2, explanation: "(2 × ₹20) + ₹10 = ₹40 + ₹10 = ₹50." },
        { question: "What is the total value of one ₹50 note and three ₹5 coins?", options: ["₹55", "₹60", "₹65", "₹70"], correct: 2, explanation: "₹50 + (3 × ₹5) = ₹50 + ₹15 = ₹65." },
        { question: "What is the total value of one ₹100 note and two ₹2 coins?", options: ["₹100", "₹102", "₹104", "₹105"], correct: 1, explanation: "₹100 + (2 × ₹2) = ₹100 + ₹4 = ₹104." },
        { question: "You have ₹20 and your friend has ₹30. How much money do you both have together?", options: ["₹40", "₹50", "₹55", "₹60"], correct: 1, explanation: "₹20 + ₹30 = ₹50 together." },
        { question: "You have ₹45 and your sister has ₹25. How much money do you both have together?", options: ["₹60", "₹65", "₹70", "₹75"], correct: 2, explanation: "₹45 + ₹25 = ₹70 together." },
        { question: "You have ₹70 and your brother has ₹30. How much money do you both have together?", options: ["₹80", "₹90", "₹100", "₹110"], correct: 2, explanation: "₹70 + ₹30 = ₹100 together." },
        { question: "If a toy costs ₹45 and you pay with a ₹50 note, what change do you expect?", options: ["₹2", "₹3", "₹5", "₹8"], correct: 2, explanation: "₹50 - ₹45 = ₹5 change." },
        { question: "If a book costs ₹85 and you pay with a ₹100 note, what change do you expect?", options: ["₹10", "₹15", "₹20", "₹25"], correct: 1, explanation: "₹100 - ₹85 = ₹15 change." },
        { question: "If a game costs ₹120 and you pay with a ₹200 note, what change do you expect?", options: ["₹60", "₹70", "₹80", "₹90"], correct: 2, explanation: "₹200 - ₹120 = ₹80 change." },
        { question: "Which is more valuable: a ₹50 note or five ₹10 notes?", options: ["₹50 note", "Five ₹10 notes", "Both are equal", "Cannot say"], correct: 2, explanation: "Five ₹10 notes are ₹10 x 5 = ₹50, so both are equal." },
        { question: "Which is more valuable: a ₹20 note or ten ₹2 coins?", options: ["₹20 note", "Ten ₹2 coins", "Both are equal", "Cannot say"], correct: 2, explanation: "Ten ₹2 coins are ₹2 x 10 = ₹20, so both are equal." },
        { question: "Which is more valuable: a ₹100 note or twenty ₹5 coins?", options: ["₹100 note", "Twenty ₹5 coins", "Both are equal", "Cannot say"], correct: 2, explanation: "Twenty ₹5 coins are ₹5 x 20 = ₹100, so both are equal." },
        { question: "If you have ₹20 and you want to buy pencils that cost ₹4 each, how many pencils can you buy?", options: ["4", "5", "6", "7"], correct: 1, explanation: "₹20 ÷ ₹4/pencil = 5 pencils." },
        { question: "If you have ₹30 and you want to buy erasers that cost ₹3 each, how many erasers can you buy?", options: ["5", "10", "15", "20"], correct: 1, explanation: "₹30 ÷ ₹3/eraser = 10 erasers." },
        { question: "If you have ₹50 and you want to buy candies that cost ₹2 each, how many candies can you buy?", options: ["10", "20", "25", "30"], correct: 2, explanation: "₹50 ÷ ₹2/candy = 25 candies." },
        { question: "What is half of ₹20?", options: ["₹5", "₹10", "₹15", "₹20"], correct: 1, explanation: "Half of ₹20 is ₹20 ÷ 2 = ₹10." },
        { question: "What is half of ₹50?", options: ["₹15", "₹20", "₹25", "₹30"], correct: 2, explanation: "Half of ₹50 is ₹50 ÷ 2 = ₹25." },
        { question: "What is half of ₹100?", options: ["₹25", "₹40", "₹50", "₹60"], correct: 2, explanation: "Half of ₹100 is ₹100 ÷ 2 = ₹50." },
        { question: "Double of ₹10 is?", options: ["₹10", "₹15", "₹20", "₹25"], correct: 2, explanation: "Double of ₹10 is ₹10 * 2 = ₹20." },
        { question: "Double of ₹25 is?", options: ["₹40", "₹45", "₹50", "₹55"], correct: 2, explanation: "Double of ₹25 is ₹25 * 2 = ₹50." },
        { question: "Double of ₹50 is?", options: ["₹75", "₹80", "₹90", "₹100"], correct: 3, explanation: "Double of ₹50 is ₹50 * 2 = ₹100." }
      ]
    },

    "Science": {
      "Electricity": [
        { question: "What is the flow of electric charge?", options: ["Voltage", "Current", "Resistance", "Power"], correct: 1, explanation: "Current is the flow of electric charge." },
        { question: "What is the unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], correct: 1, explanation: "Ampere is theunit of electric current." }
      ],
      "Magnetism": [
        { question: "What is the property of attracting iron?", options: ["Electricity", "Magnetism", "Gravity", "Friction"], correct: 1, explanation: "Magnetism is the property of attracting iron." },
        { question: "What is the property of repelling like poles?", options: ["Electricity", "Magnetism", "Gravity", "Friction"], correct: 1, explanation: "Magnetism is the property of repelling like poles." }
      ],
      "Sound": [
        { question: "What is the medium through which sound travels?", options: ["Air", "Water", "Vacuum", "Solid"], correct: 0, explanation: "Air is the medium through which sound travels." },
        { question: "What is the unit of frequency?", options: ["Hertz", "Watt", "Volt", "Ampere"], correct: 0, explanation: "Hertz is the unit of frequency." }
      ]
    },

    "English": {
      "Poetry": [
        { question: "What is a poem?", options: ["A story", "A song", "A speech", "A piece of writing"], correct: 3, explanation: "A poem is a piece of writing." },
        { question: "What is the name of the person who writes poems?", options: ["Author", "Poet", "Writer", "Singer"], correct: 1, explanation: "A poet is a person who writes poems." }
      ],
      "Stories": [
        { question: "What is a story?", options: ["A poem", "A song", "A speech", "A piece of writing"], correct: 3, explanation: "A story is a piece of writing." },
        { question: "What is the name of the person who writes stories?", options: ["Author", "Poet", "Writer", "Singer"], correct: 0, explanation: "An author is a person who writes stories." }
      ],
      "Comprehension": [
        { question: "What is the process of understanding written words?", options: ["Writing", "Reading", "Speaking", "Listening"], correct: 1, explanation: "Reading is the process of understanding written words." },
        { question: "What do you use to read a book?", options: ["Eyes", "Ears", "Nose", "Mouth"], correct: 0, explanation: "You use your eyes to read a book." }
      ]
    }
  },
  "Class 4": {
    "Mathematics": {
      "Algebra": [
        { question: "What is the value of x in the equation 2x + 3 = 9?", options: ["2", "3", "4", "5"], correct: 2, explanation: "The value of x in the equation 2x + 3 = 9 is 3." },
        { question: "What is the value of y in the equation 4y - 5 = 11?", options: ["3", "4", "5", "6"], correct: 3, explanation: "The value of y in the equation 4y - 5 = 11 is 4." }
      ],
      "Measurement": [
        { question: "How many centimeters are in a meter?", options: ["10", "100", "1000", "10000"], correct: 1, explanation: "There are 100 centimeters in a meter." },
        { question: "How many millimeters are in a centimeter?", options: ["10", "100", "1000", "10000"], correct: 0, explanation: "There are 10 millimeters in a centimeter." }
      ],
      "Data Handling": [
        { question: "What is the average of 5, 10, and 15?", options: ["5", "10", "15", "20"], correct: 1, explanation: "The average of 5, 10, and 15 is 10." },
        { question: "What is the mode of 2, 3, 3, 4, 5?", options: ["2", "3", "4", "5"], correct: 1, explanation: "The mode of 2, 3, 3, 4, 5 is 3." }
      ]
    },
    "Science": {
      "Electricity": [
        { question: "What is the flow of electric charge?", options: ["Voltage", "Current", "Resistance", "Power"], correct: 1, explanation: "Current is the flow of electric charge." },
        { question: "What is the unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], correct: 1, explanation: "Ampere is theunit of electric current." }
      ],
      "Magnetism": [
        { question: "What is the property of attracting iron?", options: ["Electricity", "Magnetism", "Gravity", "Friction"], correct: 1, explanation: "Magnetism is the property of attracting iron." },
        { question: "What is the property of repelling like poles?", options: ["Electricity", "Magnetism", "Gravity", "Friction"], correct: 1, explanation: "Magnetism is the property of repelling like poles." }
      ],
      "Sound": [
        { question: "What is the medium through which sound travels?", options: ["Air", "Water", "Vacuum", "Solid"], correct: 0, explanation: "Air is the medium through which sound travels." },
        { question: "What is the unit of frequency?", options: ["Hertz", "Watt", "Volt", "Ampere"], correct: 0, explanation: "Hertz is the unit of frequency." }
      ]
    },
    "English": {
      "Essays": [
        { question: "What is an essay?", options: ["A story", "A poem", "A speech", "A piece of writing"], correct: 3, explanation: "An essay is a piece of writing." },
        { question: "What is the name of the person who writes essays?", options: ["Author", "Poet", "Writer", "Singer"], correct: 2, explanation: "A writer is a person who writes essays." }
      ],
      "Letters": [
        { question: "What is a letter?", options: ["A story", "A poem", "A speech", "A piece of writing"], correct: 3, explanation: "A letter is a piece of writing." },
        { question: "What is the name of the person who writes letters?", options: ["Author", "Poet", "Writer", "Singer"], correct: 2, explanation: "A writer is a person who writes letters." }
      ],
      "Reports": [
        { question: "What is a report?", options: ["A story", "A poem", "A speech", "A piece of writing"], correct: 3, explanation: "A report is a piece of writing." },
        { question: "What is the name of the person who writes reports", options: ["Author", "Poet", "Writer", "Singer"], correct: 2, explanation: "A writer is a person who writes reports." },
      ]
    },
  },  
  "Class 5": {
    "Mathematics": {
      "Probability": [
        { question: "What is the likelihood of an event happening?", options: ["Probability", "Statistics", "Angles", "Fractions"], correct: 0, explanation: "Probability is the likelihood of an event happening." },
        { question: "What is the chance of rolling a 6 on a fair die?", options: ["1/6", "1/5", "1/4", "1/3"], correct: 0, explanation: "The chance of rolling a 6 on a fair die is 1/6." }
      ],
      "Statistics": [
        { question: "What is the collection and analysis of data?", options: ["Probability", "Statistics", "Angles", "Fractions"], correct: 1, explanation: "Statistics is the collection and analysis of data." },
        { question: "What is the mean of 2, 4, and 6?", options: ["4", "5", "6", "7"], correct: 1, explanation: "The mean of 2, 4, and 6 is 4." }
      ],
      "Angles": [
        { question: "What is the measure of a right angle?", options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"], correct: 0, explanation: "A right angle measures 90 degrees." },
        { question: "What is the sum of the angles in a triangle?", options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"], correct: 1, explanation: "The sum of the angles in a triangle is 180 degrees." }
      ]
    },
    "Science": {
      "Light": [
        { question: "What is the fastest thing in the universe?", options: ["Light", "Sound", "Gravity", "Electricity"], correct: 0, explanation: "Light is the fastest thing in the universe." },
        { question: "What is the bending of light rays?", options: ["Reflection", "Refraction", "Diffraction", "Dispersion"], correct: 1, explanation: "Refraction is the bending of light rays." }
      ],
      "Chemistry": [
        { question: "What is the study of matter and its properties?", options: ["Physics", "Chemistry", "Biology", "Geology"], correct: 1, explanation: "Chemistry is the study of matter and its properties." },
        { question: "What is the smallest unit of an element?", options: ["Molecule", "Atom", "Cell", "Particle"], correct: 1, explanation: "An atom is the smallest unit of an element." }
      ],
      "Biology": [
        { question: "What is the study of living organisms?", options: ["Physics", "Chemistry", "Biology", "Geology"], correct: 2, explanation: "Biology is the study of living organisms." },
        { question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Skin", "Lungs"], correct: 2, explanation: "The skin is the largest organ in the human body." }
      ]
    },
    "English": {
      "Debates": [
        { question: "What is a debate?", options: ["A story", "A poem", "A speech", "A discussion"], correct: 3, explanation: "A debate is a discussion." },
        { question: "What is the purpose of a debate?", options: ["To inform", "To entertain", "To persuade", "To educate"], correct: 2, explanation: "The purpose of a debate is to persuade." }
      ],
      "Speeches": [
        { question: "What is a speech?", options: ["A story", "A poem", "A debate", "A discussion"], correct: 3, explanation: "A speech is a discussion." },
        { question: "What is the purpose of a speech?", options: ["To inform", "To entertain", "To persuade", "To educate"], correct: 0, explanation: "The purpose of a speech is to inform." }
      ],
      "Drama": [
        { question: "What is drama?", options: ["A story", "A poem", "A debate", "A play"], correct: 3, explanation: "Drama is a play." },
        { question: "What is the purpose of drama?", options: ["To inform", "To entertain", "To persuade", "To educate"], correct: 1, explanation: "The purpose of drama is to entertain." }
      ]
    }
  }
};