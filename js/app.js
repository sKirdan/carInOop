function carStartListener(){
    var randomNamber = Math.random()

    if (randomNamber > 0.5){
        console.log('car have started')

        startButton.classList.add('hide')

        function engineCrashed(){
            startButton.classList.remove('hide')
            console.log('engine crashed')
        }
        window.setTimeout(engineCrashed, 2000)
        console.log('we wait crash')
    }else{
        console.log('something wrong')
    }
}

var startButton = document.querySelector('#start-car')
startButton.addEventListener('click', carStartListener)