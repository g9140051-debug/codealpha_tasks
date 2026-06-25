document.getElementById("topBtn")
.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
let topBtn = document.getElementById("topBtn");

window.onscroll = function(){
    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }
};
function darkMode(){
    document.body.classList.toggle("dark");
}
console.log("Portfolio Loaded");