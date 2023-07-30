var counter = 0
var en_haiku = document.getElementById("haiku-en")
var jp_haiku = document.getElementById("haiku-jp")
var haikus = $('#haikus')
setInterval(change, 9000);
function change() {
    haikus.fadeOut(function(){
        jp_haiku.innerText = (haiku_arr[counter]["haiku"])
        en_haiku.innerText = (haiku_arr[counter]["translation"])
        counter++
        if(counter >= haiku_arr.length) { counter = 0; }
        haikus.fadeIn()
    });
}