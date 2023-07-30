const whiteKeys = document.querySelectorAll(".white-key");
const blackKeys = document.querySelectorAll(".black-key");

blackKeys.forEach((black, index) => {
  black.addEventListener('click', () => {
    let sound = new Audio(`./sounds/black-keys/${index}.mp3`);
    playSound(sound);
  });
});

whiteKeys.forEach((white, index) => {
  white.addEventListener('click', () => {
    let sound = new Audio(`./sounds/white-keys/${index}.mp3`);
    playSound(sound);
  });
});

function playSound(sound) {
  sound.pause();
  sound.currentTime = 0;
  sound.play();
}

// Add keys

// Use Keys !

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const eleven = document.getElementById("eleven");
const twelve = document.getElementById("twelve");
const thirteen = document.getElementById("thirteen");
const fourteen = document.getElementById("fourteen");
const fifteen = document.getElementById("fifteen");
const sixteen = document.getElementById("sixteen");
const seventeen = document.getElementById("seventeen");
const eighteen = document.getElementById("eighteen");
const nineteen = document.getElementById("nineteen");
const twenty = document.getElementById("twenty");
const twentyone = document.getElementById("twentyone");

const bone = document.getElementById("b1");
const btwo  = document.getElementById("b2");
const bthree = document.getElementById("b3");
const bfour = document.getElementById("b4");
const bfive = document.getElementById("b5");
const bsix = document.getElementById("b6");
const bseven = document.getElementById("b7");
const beight = document.getElementById("b8");
const bnine = document.getElementById("b9");
const bten = document.getElementById("b10");
const beleven = document.getElementById("b11");
const btwelve = document.getElementById("b12");
const bthirteen = document.getElementById("b13");
const bfourteen = document.getElementById("b14");
const bfifteen = document.getElementById("b15");


addEventListener("keyup", (e) => {
  if (e.key === "q") {
    one.classList.remove("white-active");
  }
  if (e.key === "w") {
    two.classList.remove("white-active");
  }
  if (e.key === "e") {
    three.classList.remove("white-active");
  }
  if (e.key === "r") {
    four.classList.remove("white-active");
  }
  if (e.key === "t") {
    five.classList.remove("white-active");
  }
  if (e.key === "y") {
    six.classList.remove("white-active");
  }
  if (e.key === "u") {
    seven.classList.remove("white-active");
  }
  if (e.key === "i") {
    eight.classList.remove("white-active");
  }
  if (e.key === "o") {
    nine.classList.remove("white-active");
  }
  if (e.key === "p") {
    ten.classList.remove("white-active");
  }
  if (e.key === "[") {
    eleven.classList.remove("white-active");
  }
  if (e.key === "z") {
    twelve.classList.remove("white-active");
  }
  if (e.key === "x") {
    thirteen.classList.remove("white-active");
  }
  if (e.key === "c") {
    fourteen.classList.remove("white-active");
  }
  if (e.key === "v") {
    fifteen.classList.remove("white-active");
  }
  if (e.key === "b") {
    sixteen.classList.remove("white-active");
  }
  if (e.key === "n") {
    seventeen.classList.remove("white-active");
  }
  if (e.key === "m") {
    eighteen.classList.remove("white-active");
  }
  if (e.key === ",") {
    nineteen.classList.remove("white-active");
  }
  if (e.key === ".") {
    twenty.classList.remove("white-active");
  }
  if (e.key === "/") {
    twentyone.classList.remove("white-active");
  }

  //black keys
  
  if (e.key === "2") {
    bone.classList.remove("black-active");
  }
  if (e.key === "3") {
    btwo.classList.remove("black-active");
  }
  if (e.key === "5") {
    bthree.classList.remove("black-active");
  }
  if (e.key === "6") {
    bfour.classList.remove("black-active");
  }
  if (e.key === "7") {
    bfive.classList.remove("black-active");
  }
  if (e.key === "9") {
    bsix.classList.remove("black-active");
  }
  if (e.key === "0") {
    bseven.classList.remove("black-active");
  }
  if (e.key === "a") {
    beight.classList.remove("black-active");
  }
  if (e.key === "s") {
    bnine.classList.remove("black-active");
  }


  
  if (e.key === "d") {
    bten.classList.remove("black-active");
  }
  if (e.key === "g") {
    beleven.classList.remove("black-active");
  }
  if (e.key === "h") {
    btwelve.classList.remove("black-active");
  }
  if (e.key === "k") {
    bthirteen.classList.remove("black-active");
  }
  if (e.key === "l") {
    bfourteen.classList.remove("black-active");
  }
  if (e.key === ";") {
    bfifteen.classList.remove("black-active");
  }
});

addEventListener("keydown", (e) => {
  if (e.key === "q") {
    one.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/0.mp3"));
  }

  if (e.key === "w") {
    two.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/1.mp3"));
  }
  if (e.key === "e") {
    three.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/2.mp3"));
  }
  if (e.key === "r") {
    four.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/3.mp3"));
  }
  if (e.key === "t") {
    five.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/4.mp3"));
  }
  if (e.key === "y") {
    six.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/5.mp3"));
  }
  if (e.key === "u") {
    seven.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/6.mp3"));
  }
  if (e.key === "i") {
    eight.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/7.mp3"));
  }
  if (e.key === "o") {
    nine.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/8.mp3"));
  }

  if (e.key === "p") {
    ten.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/9.mp3"));
  }
  if (e.key === "[") {
    eleven.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/10.mp3"));
  }
  if (e.key === "z") {
    twelve.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/11.mp3"));
  }
  if (e.key === "x") {
    thirteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/12.mp3"));
  }
  if (e.key === "c") {
    fourteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/13.mp3"));
  }
  if (e.key === "v") {
    fifteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/14.mp3"));
  }
  if (e.key === "b") {
    sixteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/15.mp3"));
  }
  if (e.key === "n") {
    seventeen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/16.mp3"));
  }
  if (e.key === "m") {
    eighteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/17.mp3"));
  }
  if (e.key === ",") {
    nineteen.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/18.mp3"));
  }
  if (e.key === ".") {
    twenty.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/19.mp3"));
  }
  if (e.key === "/") {
    twentyone.classList.add("white-active");
    playSound(new Audio("./sounds/white-keys/20.mp3"));
  }

  //black keys

  if (e.key === "2") {
    bone.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/0.mp3"));
  }
  if (e.key === "3") {
    btwo.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/1.mp3"));
  }
  if (e.key === "5") {
    bthree.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/2.mp3"));
  }
  if (e.key === "6") {
    bfour.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/3.mp3"));
  }
  if (e.key === "7") {
    bfive.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/4.mp3"));
  }
  if (e.key === "9") {
    bsix.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/5.mp3"));
  }
  if (e.key === "0") {
    bseven.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/6.mp3"));
  }
  if (e.key === "a") {
    beight.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/7.mp3"));
  }
  if (e.key === "s") {
    bnine.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/8.mp3"));
  }
  if (e.key === "d") {
    bten.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/9.mp3"));
  }
  if (e.key === "g") {
    beleven.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/10.mp3"));
  }
  if (e.key === "h") {
    btwelve.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/11.mp3"));
  }
  if (e.key === "k") {
    bthirteen.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/12.mp3"));
  }
  if (e.key === "l") {
    bfourteen.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/13.mp3"));
  }
  if (e.key === ";") {
    bfifteen.classList.add("black-active");
    playSound(new Audio("./sounds/black-keys/14.mp3"));
  }
  
});
