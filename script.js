let input = document.querySelector("#input");
let btns = document.querySelector("#btns");
let todolists = document.querySelector(".todolists");

btns.addEventListener("click", function () {
  let lists = document.createElement("para");
  lists.classList.add("parastyle");
  lists.innerText = input.value;
  todolists.appendChild(lists);
  input.value = " ";
});
