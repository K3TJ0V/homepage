let name;

document.getElementById("submit-button").onclick = function () {
  name = document.getElementById("name-input").value;
  console.log("hello", name);
};
