// Task 1 - Change Heading Text
    const changeBtn = document.getElementById("changeBtn");
    const heading = document.getElementById("heading");
  
    changeBtn.addEventListener("click", function() {
      heading.textContent = "Text Changed!";
      changeBtn.style.backgroundColor = "green";
    });