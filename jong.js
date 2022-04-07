function setnewimage(item, nsrclk) {
   document.getElementById(item).src = nsrclk;
  
}
function setoldimage(item, osrclk) {
    document.getElementById(item).src = osrclk;
}
let progress = document.getElementById("progress");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = ( window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%"
}
let singin = document.getElementById("sing");
let sing = document.getElementById("sn");
let submit = document.getElementById("submit");
let body = document.body
singin.onclick = function block(){
    sing.style.display = "block"

}
submit.onclick = function hidden(){
    sing.style.display = "none"
}
// document.getElementById("inputsign").onsubmit = function () {
//     let phoneInput = document.getElementById("phonein").value;
//     let phoneRe = /\d{3}\s\d{3}-\d{3}\s\d{3}/; // +212 363-253 257
//     let validationResult = phoneRe.test(phoneInput);
//     console.log(validationResult);
//     return false
//     // if (validationResult === false) {
//     //     return false;
//     // }
//     // return true;
// }