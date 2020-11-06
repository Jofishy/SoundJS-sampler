const filepath = "./audio/";
const sounds = [
    {name:"bass",src:"808.wav"},
    {name:"hat",src:"closed.wav"},
    {name:"snare",src:"snare.wav"}
]

const availableButtons = ["q","w","e","r","t"].reverse();

const sources = [];
const playing = [];

createjs.Sound.addEventListener("fileload", handleLoad);
createjs.Sound.registerSounds(sounds, filepath);

function handleLoad(event){
    console.log("loaded:",event);
    sources.push(event.src);

    if (sources.length == sounds.length){
        handleLoaded();
    }
}

function handleLoaded(){
    sources.forEach((src)=>{
        createPad().addEventListener("click", ()=>{
            handleSound(src)
        });

        const key = availableButtons.pop();
        if (key){
            document.addEventListener("keydown", (e)=>{
                if (key === e.key){
                    handleSound(src);
                }
            });
        }
    });
}

Array.prototype.search = function(x){
    return this.findIndex((elem)=>{return elem == x;});
}

function handleSound(src){
    if (playing.search(src) == -1){
        const sound = playSound(src);
        playing.push(src);

        sound.on("complete", ()=>{
            const i = playing.search(src);

            playing.splice(i);
        });
    }
}

function playSound(src){
    return createjs.Sound.play(src);
}

function createPad(){
    const button = document.createElement("button");
    document.querySelector(".sampler").appendChild(button);

    return button;
}
