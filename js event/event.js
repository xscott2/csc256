//creates function pop up window on page load
window.addEventListener("load", function(){
    //set time out if desired
    setTimeout(
        function open(event){
            //select document
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});
//create on click functionality
document.getElementById("close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});
function closeWin(){

    document.querySelector(".popup").style.display = "none";

    return false;}