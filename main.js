const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')

const timer = document.querySelector('.timer')

let time = 0
let countdown = 0
let displayCenti = 0
let displaySecs = 0
let isPlay = false
start.addEventListener('click', () => {
    if(isPlay == false){
        isPlay = true
        countdown = setInterval(() => {
            let centisecs = time % 60
            let secs = Math.floor((time / 60))
    
            if(secs > 5){
                isPlay = true
            }
            
            if(centisecs < 10){
                displayCenti = '0' + centisecs.toString()
            }else{
                displayCenti = centisecs
            }
    
            if(secs < 10){
                displaySecs = '00' + secs.toString()
            }else if(secs < 100){
                displaySecs = '0' + secs.toString()
            }else{
                displaySecs = secs
            }
    
            time++
    
            timer.innerHTML = `${displaySecs}:${displayCenti}`
        }, 10)
    }

    return
})

stop.addEventListener('click', () => {
    clearInterval(countdown)
    isPlay = false
})

reset.addEventListener('click', () => {
    clearInterval(countdown)
    timer.innerHTML = '000:00'
    time = 0
    isPlay = false
})