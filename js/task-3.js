const textInp = document.querySelector("#name-input");
const textOut = document.querySelector("#name-output");

textInp.addEventListener("input", (event) => {
   const trimmedValue = event.currentTarget.value.trim();
   if (trimmedValue !== "") {
      textOut.textContent = trimmedValue;
   } else {
      textOut.textContent = "Anonymous";
   }
});
