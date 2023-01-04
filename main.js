
var counter=-1

function playAudio(){
    let audio1 = document.getElementById("myAudio");
    audio1.play();
    setTimeout(function(){let audioCopy1 = audio1.cloneNode(true);
        audioCopy1.play()},1500)
    setTimeout(function(){let audioCopy2 = audio1.cloneNode(true);
        audioCopy2.play()},1500)

       
}
function isOnTab() {
    return document.visibilityState === "visible";
  }


function openTabs() {
    counter++
    if (counter<1) {
        alert("I told you not to press the button\nConsider this you final warning! >:(")
        return
    }


    playAudio()
    setTimeout(function(){
    for (let i = 0; i < 40; i++) {
        let newTab = window.open();
        newTab.location.href = "/prank.html";
      }
    
},500)
}


setInterval(()=>{if(isOnTab()){ 
    if(counter>0) {
        playAudio()
    }
}},2000)

