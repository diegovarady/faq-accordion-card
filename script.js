const contain = document.getElementById("contain"),
      question = document.getElementById("question"),
      faq = document.getElementById("faq"),
      parag = document.getElementsByTagName("p");

contain.addEventListener("click", e => {
    const t = e.target;
    
    if (t.id === "question") {
        if (t.children[0].style.fontWeight === "400") {
            t.children[0].style.fontWeight = "700";
            t.children[1].style.transform = "rotate(180deg)";
            t.children[2].style.display = "inline-block";
        } else {
            t.children[0].style.fontWeight = "400";
            t.children[1].style.transform = "";
            t.children[2].style.display = "none";
        }        
    } else if (t.id === "faq") {
        if (t.style.fontWeight === "400") {
            t.style.fontWeight = "700";
            t.nextElementSibling.style.transform = "rotate(180deg)"; 
            t.parentElement.children[2].style.display = "inline-block";
        } else {
            t.style.fontWeight = "400";
            t.nextElementSibling.style.transform = ""; 
            t.parentElement.children[2].style.display = "none";
        }        
    } else if (t.id === "svg") {
        if (t.previousElementSibling.style.fontWeight === "400") {
            t.previousElementSibling.style.fontWeight = "700";
            t.style.transform = "rotate(180deg)";
            t.nextElementSibling.style.display = "inline-block";
        } else {
            t.previousElementSibling.style.fontWeight = "400";
            t.style.transform = "";
            t.nextElementSibling.style.display = "none";
        }
        
    }    
})