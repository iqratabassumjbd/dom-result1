for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonClicked = this.innerHTML;
    // let buttonAudio;
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);
    // switch (buttonClicked) {
    //   case "w":
    //     buttonAudio = new Audio("./sounds/crash.mp3");
    //     buttonAudio.play();
    //     break;
    //   case "a":
    //     buttonAudio = new Audio("./sounds/kick-bass.mp3");
    //     buttonAudio.play();
    //     break;
    //   case "s":
    //     buttonAudio = new Audio("./sounds/snare.mp3");
    //     buttonAudio.play();
    //     break;
    //   case "d":
    //     buttonAudio = new Audio("./sounds/tom-1.mp3");
    //     buttonAudio.play();
    //     break;
    //   case "j":
    //     buttonAudio = new Audio("./sounds/tom-2.mp3");
    //     buttonAudio.play();
    //     break;
    //   case "k":
    //     buttonAudio = new Audio("./sounds/tom-3.mp3");
    //     buttonAudio.play();
    //     break;
    //   case "l":
    //     buttonAudio = new Audio("./sounds/tom-4.mp3");
    //     buttonAudio.play();
    //     break;
    //   default:
    //     console.log("not in range");
    // }
    // alert("I got click");
    // let audio = new Audio("./sounds/crash.mp3");
    // audio.play();
    // console.log(this.innerHTML);
    // console.log((this.style.color = "blue"));
  });
  document
    .querySelectorAll(".drum")
    [i].addEventListener("touchstart", function () {
      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
}

// long method to add audio
// document.querySelector(".w").addEventListener("click", function () {
//   // alert("I got click");
//   let audio = new Audio("./sounds/crash.mp3");
//   audio.play();
// });

// document.querySelector(".a").addEventListener("click", function () {
//   let audio = new Audio("./sounds/kick-bass.mp3");
//   audio.play();
// });
// document.querySelector(".s").addEventListener("click", function () {
//   let audio = new Audio("./sounds/snare.mp3");
//   audio.play();
// });
// document.querySelector(".d").addEventListener("click", function () {
//   let audio = new Audio("./sounds/tom-1.mp3");
//   audio.play();
// });
// document.querySelector(".j").addEventListener("click", function () {
//   let audio = new Audio("./sounds/tom-2.mp3");
//   audio.play();
// });
// document.querySelector(".k").addEventListener("click", function () {
//   // alert("I got click");
//   let audio = new Audio("./sounds/tom-3.mp3");
//   audio.play();
// });
// document.querySelector(".l").addEventListener("click", function () {
//   // alert("I got click");
//   let audio = new Audio("./sounds/tom-4.mp3");
//   audio.play();
// });

// function add(num1, num2) {
//   return num1 + num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// function calculator(num1, num2, operator) {
//   return operator(num1, num2);
// }

// function calling
// calculator(4,5,multiply);

// javascript objects
// let bellBOy1Name = "Timmy";
// let bellBOy1Age = "2 years older";
// let bellBOy1Permit = "true";
// let bellBOy1language = ["english", "french"];
// console.log(bellBOy1Age);
// let bellBOy2Name = "jimmy";
// let bellBOy2Age = "1 years older";
// let bellBOy2Permit = "true";
// let bellBOy2language = ["english", "roman"];
// except of that we can use this
// let bellBOy1 = {
//   name: "timmy",
//   age: "2 years older",
//   permit: "true",
//   language: ["english", "french"],
// };
// console.log(bellBOy1.age);
// let bellBOy2 = {
//   name: "jimmy",
//   age: "1 years older",
//   permit: "true",
//   language: ["english", "Roman"],
// };
// console.log(bellBOy2.permit);
// except of that we use constructor function
function BellBoy(name, age, permit, language) {
  this.name = name;
  this.age = age;
  this.permit = permit;
  this.language = language;
}
let bellBOy1 = new BellBoy("timmy", "2 years", "ture", "english,french");
console.log(bellBOy1.language);
let bellBOy2 = new BellBoy("jimmy", "1 years", "ture", "english,Roman");
console.log(bellBOy2.permit);

function HouseKeeper(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}
let HouseKeeperBoy = new HouseKeeper("jonny", "20 years old", "4 years");
console.log(HouseKeeperBoy.experience);
let HouseKeeperBoy1 = new HouseKeeper("moiz", "18 years old", "1 years");
console.log(HouseKeeperBoy.name);

document.addEventListener("keydown", function (event) {
  // console.log(event);
  // console.log(event.key);
  let keypressed = event.key;
  // let keyboard1;
  makeSound(keypressed);
  buttonAnimation(keypressed);
  // switch (keypressed) {
  //   case "w":
  //     keyboard1 = new Audio("./sounds/crash.mp3");
  //     keyboard1.play();
  //     break;
  //   case "a":
  //     keyboard1 = new Audio("./sounds/kick-bass.mp3");
  //     keyboard1.play();
  //     break;
  //   case "s":
  //     keyboard1 = new Audio("./sounds/snare.mp3");
  //     keyboard1.play();
  //     break;
  //   case "d":
  //     keyboard1 = new Audio("./sounds/tom-1.mp3");
  //     keyboard1.play();
  //     break;
  //   case "j":
  //     keyboard1 = new Audio("./sounds/tom-2.mp3");
  //     keyboard1.play();
  //     break;
  //   case "k":
  //     keyboard1 = new Audio("./sounds/tom-3.mp3");
  //     keyboard1.play();
  //     break;
  //   case "l":
  //     keyboard1 = new Audio("./sounds/tom-4.mp3");
  //     keyboard1.play();
  //     break;
  //   default:
  //     console.log("not in range");
  // }
});

// through single switch for button clicked and kepressed
let keyboard1;
function makeSound(key) {
  switch (key) {
    case "w":
      keyboard1 = new Audio("./sounds/crash.mp3");
      keyboard1.play();
      break;
    case "a":
      keyboard1 = new Audio("./sounds/kick-bass.mp3");
      keyboard1.play();
      break;
    case "s":
      keyboard1 = new Audio("./sounds/snare.mp3");
      keyboard1.play();
      break;
    case "d":
      keyboard1 = new Audio("./sounds/tom-1.mp3");
      keyboard1.play();
      break;
    case "j":
      keyboard1 = new Audio("./sounds/tom-2.mp3");
      keyboard1.play();
      break;
    case "k":
      keyboard1 = new Audio("./sounds/tom-3.mp3");
      keyboard1.play();
      break;
    case "l":
      keyboard1 = new Audio("./sounds/tom-4.mp3");
      keyboard1.play();
      break;
    default:
      console.log("not in range");
  }
}
function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);
}

// document.addEventListener("touchmove", function (touch) {
//   console.log(touch.key);
//   let keytouch = touch.key;
//   makeSound(keytouch);
// });
