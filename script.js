
const handOptions = {
    "rock": "/asset/Rock.png",
    "paper": "/asset/Paper.png",
    "scissors": "/asset/Scissors.png"
  }
  
  let SCORE = 0;
  let COMSCORE = 0;
  
  const pickUserHand = (hand) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
  
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
  
    // set user Image
    document.getElementById("userPickImage").src = handOptions[hand];
  
    pickComputerHand(hand);
  };
  
  const pickComputerHand = (hand) => {
      let hands = ["rock", "paper", "scissors"];
      let cpHand = hands[Math.floor(Math.random() * hands.length)];
      
      // set computer image 
      document.getElementById("computerPickImage").src = handOptions[cpHand]
      
      referee(hand, cpHand);
  };
  
  const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
      setDecision("YOU LOSE!");
      setScoreforComputer(COMSCORE + 1);
    }
    if (userHand == "paper" && cpHand == "rock") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
      nextBtnShow();
    }
    if (userHand == "paper" && cpHand == "paper") {
      setDecision("It's a tie!");
    }
    if (userHand == "rock" && cpHand == "scissors") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
      nextBtnShow();
    }
    if (userHand == "rock" && cpHand == "paper") {
      setDecision("YOU LOSE!");
      setScoreforComputer(COMSCORE + 1);
    }
    if (userHand == "rock" && cpHand == "rock") {
      setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "scissors") {
      setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "rock") {
      setDecision("YOU LOSE!");
      setScoreforComputer(COMSCORE + 1);
    }
    if (userHand == "scissors" && cpHand == "paper") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
      nextBtnShow();
    }

  };
  
  const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
  
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
  }
  
  const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
  }
  
  const setScoreforComputer = (newScore) => {
    COMSCORE =newScore;
    document.querySelector(".comscore h2").innerText = newScore;
    localStorage.setItem("COMSCORE",1 + eval(localStorage.getItem("COMSCORE")));
    document.querySelector(".comscore h2").innerText = localStorage.getItem("COMSCORE");
  }

  const setScore = (newScore) => {
    SCORE = newScore;
    document.querySelector(".yourscore h2").innerText = newScore;
    localStorage.setItem("SCORE",1 + eval(localStorage.getItem("SCORE")));
    document.querySelector(".yourscore h2").innerText = localStorage.getItem("SCORE");
  }

  function nextBtnShow(){
    document.getElementById("nextBtnShow").style.display = "block";
  }

  function showRules(){
    document.getElementById("showRuleBox").style.display = "block";
  }

  function notShowRules(){
    document.getElementById("showRuleBox").style.display = "none";
  }

  window.onload = (event) => {
      document.querySelector(".yourscore h2").innerText = localStorage.getItem("SCORE");
      document.querySelector(".comscore h2").innerText = localStorage.getItem("COMSCORE");
  }