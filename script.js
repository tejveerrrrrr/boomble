const questions = [
    { img: "images/pic1.jpeg", answer: "tejs birthday" },
    { img: "images/pic2.jpeg", answer: "first hockey game" },
    { img: "images/pic3.jpeg", answer: "first date" },
    { img: "images/pic4.jpeg", answer: "water lantern festival" },
    { img: "images/pic5.jpeg", answer: "halloween" }
  ];
  
  let current = 0;
  
  function startGame() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("game").style.display = "block";
  
    current = 0;
    document.getElementById("photo").src = questions[0].img;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
  }
  
  function checkAnswer() {
    const input = document.getElementById("answer").value.toLowerCase().trim();
    const feedback = document.getElementById("feedback");
  
    const correct = questions[current].answer.toLowerCase();
  

    if (input && (correct.includes(input) || input.includes(correct))) {
      current++;
  
      if (current < questions.length) {
        document.getElementById("photo").src = questions[current].img;
        document.getElementById("answer").value = "";
        feedback.textContent = "";
      } else {
        showFinalQuestion();
      }
    } else {
      feedback.textContent = "Try again";
    }
  }
  
  function showFinalQuestion() {
    document.querySelector(".container").innerHTML = `
      <h1>Will you be my Valentine (forever)?</h1>
      <button onclick="yes()">YES!!! (Correct Answer)</button>
      <button id="no">No >:( </button>
    `;
  
    const noBtn = document.getElementById("no");
    noBtn.addEventListener("mouseover", () => {
      noBtn.style.position = "absolute";
      noBtn.style.left = Math.random() * 80 + "vw";
      noBtn.style.top = Math.random() * 80 + "vh";
    });
  }
  
  function yes() {
    document.body.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        text-align: center;
        font-family: Arial, sans-serif;
        padding: 20px;
        background: linear-gradient(135deg, #ffd6e8, #fff0f6);
      ">
        <h1>I Love You Boombi 💖</h1>
  
        <img 
          src="images/final_pic.jpeg"
          alt="Us"
          style="
            width: 300px;
            max-width: 90%;
            border-radius: 20px;
            margin: 20px 0;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          "
        />
  
        <p style="max-width: 500px; font-size: 1.1rem;">
          Every memory in this little game is my favourite because they're with you.
          Thank you for choosing me to be your best friend, your (like my dad would say) life partner,
          and forever Valentine. I'm yours tomorrow, today, and always. Mwah.
        </p>
      </div>
    `;
  }
  
  /* Enter key support ⌨️ */
  document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("answer");
    if (input) {
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          checkAnswer();
        }
      });
    }
  });
  