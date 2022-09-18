//! https://github.com/clarusway/clarusway-full-stack-tr-12-22/blob/main/javascript/coding-challenges/CC-05/README.md

//* JS-CC-005 : Vowels in a string

//? Create a function that'll return an integer of the number of vowels found in a string.

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", () => {
  let text = input.value;
  let count = 0;
  if (!input.value) {
    alert("please write a word...");
    input.focus();
  }
  for (letter of text.split("")) {
    switch (letter.toLowerCase()) {
      case "a":
      case "e":
      case "u":
      case "ü":
      case "ı":
      case "i":
      case "o":
      case "ö":
        count++;
    }
  }
  result.innerText = `${input.value} da ${count} sesli harf vardır.`;
  input.value = "";
  input.focus();
});

input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    btn.click();
  }
});

window.addEventListener("load", ()=>{
    input.focus();

})