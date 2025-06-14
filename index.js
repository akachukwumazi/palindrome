const palindrome = document.getElementById("palindrome");
const  checkBtn = document.getElementById("checkBtn");
const  outPut = document.getElementById("outPut");
let result = "";

function correctWrong(){
    if (outPut.textContent === "correct") {
    outPut.style.color = "green";
    return
}
else{
    outPut.style.color = "red";
    return
}

}

function inputValid() {
    outPut.style.display = "none"
    if (result.length === -1 ) {
        palindrome.style.border = "none";
        checkBtn.style.display = "none"
    } 
    else if (result.length >= 3) {
        palindrome.style.border = "solid 2px green";
        // checkBtn.style.display = "block"
        checkBtn.disabled = false

    } else {
        palindrome.style.border = "solid 2px red";
        // checkBtn.style.display = "none"
        checkBtn.disabled = true

    }
}

palindrome.addEventListener("input", () => {
    let checking = palindrome.value;
    result = checking.toLowerCase().replace(/[^a-z0-9]/g, '');
    inputValid();
});



checkBtn.onclick = () =>{
    let checking = palindrome.value;
     result = checking.toLowerCase().replace(/[^a-z0-9]/g, '');
    const firstCheck = result.split("").reverse().join("");

    if (firstCheck === result){
        outPut.textContent = "correct";
        correctWrong();
    } else{
        outPut.textContent = "wrong try again";
        correctWrong();
    };

    outPut.style.display = "block"


}; 

