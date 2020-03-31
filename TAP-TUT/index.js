window.addEventListener('load',() => {
    const sounds = document.querySelectorAll(".sound") 
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#1000f7",
        "#f1cfe7",
        "#fffb09",
        "#547cff",
        "#ff3c00",
        "#daeba8",

    ];

    console.log(sounds);

    // Let's get going with the sound here
    pads.forEach((pad, index) =>{
      pad.addEventListener('click', function(){
          sounds[index].currentTime = 0;
          sounds[index].play();
          createBubbles(index);

      }); 
    });

    //Create a function that makes bubbles!!!!!!!!!
    const createBubbles = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
                visual.removeChild(this);
        });


    }
});


