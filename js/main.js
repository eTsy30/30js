const sqare = document.querySelector(".sqare")

document.addEventListener('keypress', (event) => {
    let e = event.keyCode

    playSound(e)
})

function playSound(numberKey) {
    const audio = new Audio()
    audio.src = `audio/${numberKey}.wav`
    audio.play()
    console.log(audio.src);
}

// sqare.addEventListener('click', (event) => {
//     // let e = event.keyCode
//     console.log(event);
//     // playSound(e)
// })