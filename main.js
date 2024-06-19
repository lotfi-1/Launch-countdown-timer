/** @format */

let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let dat = new Date();

const genDate = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener("load", () => {
      let numDates;
      while (true) {
        const userInput = prompt(`Enter a number of dates to countdown`);
        numDates = parseInt(userInput, 10);
        if (!isNaN(numDates)) {
          resolve(numDates);
          break;
        }
      }
    });
  });
};

// Usage:
genDate().then((dateAdd) => {
  let defD = dateAdd - 1;
  console.log(defD, dateAdd, dat.getDate());
  let defH = 23 - dat.getHours();
  let defM = 60 - dat.getMinutes();
  let defS = 60 - dat.getSeconds();
  days.textContent = defD >= 0 ? (defD < 10 ? `0${defD}` : defD) : `00`;
  hours.textContent = defD >= 0 ? (defH < 10 ? `0${defH}` : defH) : `00`;
  min.textContent = defD >= 0 ? (defM < 10 ? `0${defM}` : defM) : `00`;
  sec.textContent = defD >= 0 ? (defS < 10 ? `0${defS}` : defS) : `00`;
  if (
    days.textContent === "00" &&
    hours.textContent === "00" &&
    min.textContent === "00" &&
    sec.textContent === "00"
  ) {
    let clock = document.querySelector(".clock");
    clock.remove();
  } else {
    let ident = setInterval(function () {
      if (
        days.textContent === "00" &&
        hours.textContent === "00" &&
        min.textContent === "00" &&
        sec.textContent === "00"
      ) {
        clearInterval(ident);
        // let clock= document.querySelector(".clock");
        // clock.remove();
      }
      if (
        hours.textContent === "00" &&
        min.textContent === "00" &&
        sec.textContent === "00" &&
        +days.textContent > 0
      ) {
        days.textContent =
          days.textContent <= 10
            ? `0${days.textContent - 1}`
            : days.textContent - 1;
        hours.textContent = 24;
      }
      if (
        min.textContent === "00" &&
        sec.textContent === "00" &&
        +hours.textContent > 0
      ) {
        hours.textContent =
          hours.textContent <= 10
            ? `0${hours.textContent - 1}`
            : hours.textContent - 1;
        min.textContent = 60;
      }
      if (sec.textContent === "00" && +min.textContent > 0) {
        sec.textContent = 59;
        min.textContent =
          min.textContent <= 10
            ? `0${min.textContent - 1}`
            : min.textContent - 1;
      } else sec.textContent = sec.textContent <= 10 ? (sec.textContent - 1 >= 0 ? `0${sec.textContent - 1}` : `00`) : sec.textContent - 1;
    }, 1000);
  }
});
