const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')


function rotate() {
    const date = new Date()
    const hourDeg = date.getHours() * 360 / 12 + date.getMinutes() / 60 * 30 + 90
    const minDeg = date.getMinutes() * 360 / 60 + date.getSeconds() / 60 * 6 + 90
    const secondDeg = date.getSeconds() * 360 / 60 + 90

    hourHand.style.transform = `rotate(${hourDeg}deg)`
    minHand.style.transform = `rotate(${minDeg}deg)`
    secondHand.style.transform = `rotate(${secondDeg}deg)`

}
setInterval(rotate, 1000);

// function timeoutHandler() {
//     rotate()
//     setTimeout(timeoutHandler, 1000)
// }
// setTimeout(timeoutHandler, 1000)


// function animationHandler() {
//     rotate()
//     window.requestAnimationFrame(animationHandler)
// }

// window.requestAnimationFrame(animationHandler)
rotate()