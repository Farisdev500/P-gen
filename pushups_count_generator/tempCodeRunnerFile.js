const bgnr = document.getElementById("bgnr")
const inter = document.getElementById("middle")
const pro = document.getElementById("pro")
const expert = document.getElementById("expert")
const label = document.getElementById("PushupCnt")


bgnr.onclick = function(){
    "hello"

}

inter.onclick = function(){
    "hello"

}

pro.onclick = function(){
    let pushupnum = Math.random() * (80 - 30) + 30;

    label.textContent = Math.floor(pushupnum);


}