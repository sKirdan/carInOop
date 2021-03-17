function carStartListener(){
    var randomNamber = Math.random()

    if (randomNamber > 0.5){
        alert('car have started')

        startButton.classList.add('hide')

        function engineCrashed(){
            startButton.classList.remove('hide')
            alert('engine crashed')
        }
        window.setTimeout(engineCrashed, 5000)
        alert('we wait crash')
    }else{
        alert('something wrong')
    }
}

var startButton = document.querySelector('#start-car')
startButton.addEventListener('click', carStartListener)