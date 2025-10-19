// loading the buttons into the javascript file
const bgnr = document.getElementById("bgnr");
const inter = document.getElementById("middle");
const pro = document.getElementById("pro");
const expert = document.getElementById("expert");
const label = document.getElementById("PushupCnt");
const resetbtn = document.getElementById("resetbtn")

//  making the list of pushups for all skill levels

const bgnr_array = ["knee pushups","normal pushups"]
const inter_array = ["diamond pushups","normal pushups","explosive pushups","wide pushups"]
const pro_array = ["clap pushups","one arm pushups","wall handstand pushups"]
const expert_array = ["handstand pushups","3 clap pushups","normal pushups","one arm pushups"]

// get random pushup type out of list function
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];

}
// get clicked function 
bgnr.onclick = function(){
    // getting the random pushup
    let ran_pushup = getRandomItem(bgnr_array)
    // making easier pushup reps higher
    switch(ran_pushup){
        case 'knee pushups':
            // doing math and adding the type of pushups and reps to the label
            pushupnum = Math.random() * (20 - 5) + 5;
            label.textContent = `${Math.floor(pushupnum)}: ${ran_pushup}`
            break;
        case 'normal pushups':
            // doing math and adding the type of pushups and reps to the label
                pushupnum = Math.random() * (10 - 5) + 5;
                label.textContent = `${Math.floor(pushupnum)}: ${ran_pushup}`
                break;
        default:
              console.log("")
              break;
} 
}
// clicking function
inter.onclick = function(){
    // getting random number 
    let ran_pushup = getRandomItem(inter_array)
    // making easier pushup reps higher
    switch(ran_pushup){
        case 'normal pushups':
            // doing math and adding the type of pushups and reps to the label
            pushupnum = Math.random() * (20 - 15) + 5;
            label.textContent = `${Math.floor(pushupnum)}: ${ran_pushup}`
            break;
        case 'wide pushups':
            // doing math and adding the type of pushups and reps to the label
                pushupnum = Math.random() * (15 - 8) + 8;
                label.textContent = `${Math.floor(pushupnum)}: ${ran_pushup}`
                break;
        case 'explosive pushups':

            // doing math and adding the type of pushups and reps to the label
            pushupnum = Math.random() * ( 10 - 5) + 5;
            label.textContent = `${Math.floor(pushupnum)}: ${ran_pushup}`
            break;
        case 'diamond pushups':
            // doing math and adding the type of pushups and reps to the label
            pushupnum = Math.random() * (8 - 4) + 4;
            label.textContent = `${Math.floor(pushupnum)}: ${ran_pushup}`
            break;
        

        default:
            console.log("")
           break;
}    
}   


// clicking function
pro.onclick = function(){
    //getting random number
    let ran_pushup = getRandomItem(pro_array)

    // making easier pushup types higher reps
    switch(ran_pushup){
        case 'clap pushups':
            // doing math and adding the type of pushups and reps to the label
            pushupnum = Math.random() * (25 - 15) + 15;
            label.textContent = `${Math.floor(pushupnum)}: ${ran_pushup}`
            break;
        case 'one arm pushups':
            // doing math and adding the type of pushups and reps to the label
                pushupnum = Math.random() * (8 - 3) + 3;
                label.textContent = `${Math.floor(pushupnum)}: ${ran_pushup}`
                break;
        case 'wall handstand pushups':
            // doing math and adding the type of pushups and reps to the label
            pushupnum = Math.random() * (5 - 2) + 2;
            label.textContent = `${Math.floor(pushupnum)}: ${ran_pushup}`
            break;          
        default:
            console.log("")
            break;

}
// clicking function
expert.onclick = function(){
    //random pushup
    let ran_pushup = getRandomItem(expert_array)
    //making easier pushups types more reps
    switch(ran_pushup){
        case 'normal pushups':
            // doing math and adding the type of pushups and reps to the label
            pushupnum = Math.random() * (70 - 30) + 15;
            label.textContent = `${Math.floor(pushupnum)}: ${ran_pushup}`
            break;
        case 'one arm pushups':
            // doing math and adding the type of pushups and reps to the label
                pushupnum = Math.random() * (20 - 8) + 8;
                label.textContent = `${Math.floor(pushupnum)}: ${ran_pushup}`
                break;
        case 'handstand pushups':
            // doing math and adding the type of pushups and reps to the label
            pushupnum = Math.random() * (15 - 3) + 3;
            label.textContent = `${Math.floor(pushupnum)}: ${ran_pushup}`
            break; 
        case '3 clap pushups':
            // doing math and adding the type of pushups and reps to the label
            pushupnum = Math.random() * (15 - 3) + 3;
            label.textContent = `${Math.floor(pushupnum)}: ${ran_pushup}`
            break;               
        default:
            console.log("")
            break;
}}
}
// making reset button work
resetbtn.onclick = function() {

    label.textContent = 0;
}