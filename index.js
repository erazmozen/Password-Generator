const samples = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

document.getElementById("gen-pass").addEventListener("click", sendMulti);
document.getElementById("clear-pass").addEventListener("click", clearPass);

function sendMulti(ev) {
  let multiNum = document.getElementById("multiplier");

  return genPass(multiNum.value);
}

function clearPass() {
  passOneDiv.textContent = "_______________";
  passTwoDiv.textContent = "_______________";
}

const passOneDiv = document.getElementById("password-one");
const passTwoDiv = document.getElementById("password-two");

function genPass(multiplier) {
  console.log("radi li genPass?");

  passwordOne = [];
  passwordTwo = [];

  if (multiplier < 1) {
    return alert("Samo pozitivni brojevi!");
  }

  for (let i = 0; i < multiplier; i++) {
    let randomChar = Math.floor(Math.random() * samples.length);
    passwordOne += samples[randomChar];
  }

  for (let i = 0; i < multiplier * 2; i++) {
    let randomChar = Math.floor(Math.random() * samples.length);
    passwordTwo += samples[randomChar];
  }

  passOneDiv.textContent = passwordOne;
  passTwoDiv.textContent = passwordTwo;
}

function copyToClip(passToCopy) {
  console.log(passToCopy);
  let text = passToCopy;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Text copied to clipboard");
    })
    .catch((err) => {
      alert("Error in copying text: ", err);
    });
}

const form = document.getElementById("multi-form");
