
/* ---------------- QUIZ ---------------- */
let questions = [
  {
    q: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Tool Multi Language"
    ],
    answer: "HyperText Markup Language"
  },
  {
    q: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Color Style System",
      "Computer Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  }
];

let current = 0;

function loadQuestion(){
  let q = questions[current];

  document.getElementById("question").innerText = q.q;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = function(){
      if(opt === q.answer){
        document.getElementById("result").innerText = "✅ Correct!";
      } else {
        document.getElementById("result").innerText = "❌ Wrong!";
      }
    };

    optionsDiv.appendChild(btn);
  });
}

function nextQuestion(){
  current++;

  if(current >= questions.length){
    document.getElementById("question").innerText = "🎉 Quiz Finished!";
    document.getElementById("options").innerHTML = "";
    return;
  }

  document.getElementById("result").innerText = "";
  loadQuestion();
}

loadQuestion();


/* ---------------- API ---------------- */
function getJoke(){
  fetch("https://official-joke-api.appspot.com/random_joke")
  .then(res => res.json())
  .then(data => {
    document.getElementById("joke").innerText =
    data.setup + " - " + data.punchline;
  });
}


/* ---------------- IMAGE CAROUSEL (FIXED) ---------------- */
let images = [
  "https://picsum.photos/300/200?random=1",
  "https://picsum.photos/300/200?random=2",
  "https://picsum.photos/300/200?random=3"
];

let i = 0;

function nextImage(){
  i = (i + 1) % images.length;
  document.getElementById("slider").src = images[i];
}