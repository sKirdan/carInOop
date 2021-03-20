function carStartListener(){
    var randomNamber = Math.random()

    if (randomNamber > 0.5){
        carStarted()
    }else{
        carCannotBeStarted()
    }
}
function drawLabel(status){
    statusLable.innerHTML = status;
    
}
function devLog(messege){
    console.log(messege)
}
function carStarted(){
    drawLabel('car have started')
    devLog('car have started')

    startButton.classList.add('hide')

    function engineCrashed(){
        startButton.classList.remove('hide')
        devLog('engine crashed')
        drawLabel('Engine have crashed. Car stopped')
    }
    window.setTimeout(engineCrashed, 2000)
    devLog('we wait crash')
}
function carCannotBeStarted(){
    devLog('something wrong')
    drawLabel('Car cant be started. Try again')
}

var startButton = document.querySelector('#start-car')
var statusLable = document.querySelector('#status')
startButton.addEventListener('click', carStartListener)