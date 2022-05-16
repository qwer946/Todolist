let input = document.querySelector("#input");
let btns = document.querySelector("#btns");
let todolists = document.querySelector(".todolists");

btns.addEventListener("click", function () {
  let lists = document.createElement("p"); // create para
  lists.classList.add("para"); //Classname
  lists.innerHTML = input.value;
  todolists.appendChild(lists); // adding lists > child , parent > todolists
  input.value = " ";

  lists.addEventListener("click", function () {
    lists.style.textDecoration = "line-through";
  });
  lists.addEventListener("dblclick", function () {
    lists.remove();
  });
});
