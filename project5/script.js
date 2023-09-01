
let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let inputText = document.getElementById("input");


function qrGenerator(){
    if(inputText.value){
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
        imgBox.classList.add("showImg");
    }
else{
    inputText.classList.add("error");
    setTimeout(()=>{
        inputText.classList.remove("error");

    },1000)
}
}