const btn1_ctn = document.getElementsByClassName("btn1_container")[0];
const one = document.getElementsByClassName("one")[0];
btn1_ctn.addEventListener("click", () => {
    one.classList.toggle("inactive1");
});

const btn2_ctn = document.getElementsByClassName("btn2_container")[0];
const two = document.getElementsByClassName("two")[0];
btn2_ctn.addEventListener("click", () => {
    two.classList.toggle("inactive2");
});

const btn3_ctn = document.querySelector(".btn3_container");
const main = document.querySelector(".main");
btn3_ctn.addEventListener("click", () => {
    main.classList.toggle("active");
});

const btn4_ctn = document.querySelector(".btn4_container");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
btn4_ctn.addEventListener("click", () => {
    button2.classList.toggle("move");
    button3.classList.toggle("push");
});