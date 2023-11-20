let nameInput = document.getElementById("name");
let liveUpdate = document.getElementById("liveUpdate");

nameInput.addEventListener("input", function() {
  let inputText = nameInput.value.toUpperCase();
  liveUpdate.textContent = inputText;
  nameInput.value = inputText;
});
