function carStartListener() {
    var randomNamber = Math.random()

    if (randomNamber > 0.5) {
        carStarted()
    } else {
        carCannotBeStarted()
    }
}
function drawLabel(status) {
    statusLable.innerHTML = status;

}
function devLog(messege) {
    console.log(messege)
}
function carStarted() {
    drawLabel('car have started')
    devLog('car have started')

    startButton.classList.add('hide')

    gearBoxStarted()

    plannedCrashStarted()
    devLog('we wait crash')
}
function carCannotBeStarted() {
    devLog('something wrong')
    drawLabel('Car cant be started. Try again')
}
function gearBoxStarted() {
    var gearBoxValue = 1
    gearBoxValueLable.innerHTML = gearBoxValue
    function incrementGearBoxValue() {
        if (gearBoxValue < 5) {
            gearBoxValue++
            gearBoxValueLable.innerHTML = gearBoxValue
        }
    }
    gearBoxInterval = window.setInterval(incrementGearBoxValue, 1000)
}
function plannedCrashStarted() {
    function engineCrashed() {
        startButton.classList.remove('hide')
        devLog('engine crashed')
        drawLabel('Engine have crashed. Car stopped')
        gearBoxValueLable.innerHTML = 'N'
        window.clearInterval(gearBoxInterval)
    }
    window.setTimeout(engineCrashed, 3000)
}
var gearBoxInterval
var startButton = document.querySelector('#start-car')
var statusLable = document.querySelector('#status')
var gearBoxValueLable = document.querySelector('#gear-box-value')
startButton.addEventListener('click', carStartListener)