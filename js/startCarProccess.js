function startCarProccess(containerId) {
    function render(){
        var container = document.getElementById(containerId)
        container.innerHTML = `
        <div class = 'car'>
            <div class="info-panel">
                <lable>status:</lable> <span data-role='status'> off</span>
            </div>
            <div class="controls">
                <input data-role='start-car' type='button' value='start'>
                <hr>
                <label>Gear box: </label> <span data-role='gear-box-value'>N</span>
            </div> 
        </div>
        `;      
    }

    function carStartListener() {
        var randomNamber = Math.random()

        if (randomNamber > 0.5) {
            carStarted()
        } else {
            carCannotBeStarted()
        }
    }

    function drawStatus(status) {
        processEls(statusLabels, function (statusLabel) {
            statusLabel.innerHTML = status
        })
    }

    function devLog(messege) {
        console.log(messege)

    }

    function carStarted() {
        drawStatus('car have started')
        devLog('car have started')

        processEls(startButtons, function (startButton) {
            startButton.classList.add("hide")
        })

        gearBoxStarted()

        plannedCrashStarted()

        devLog('we wait crash')
    }

    function processEls(arrayOfEls, proccessor) {
        for (var i = 0; i < arrayOfEls.length; i++) {
            var item = arrayOfEls[i];
            proccessor(item)
        }
    }

    function carCannotBeStarted() {
        devLog('something wrong')
        drawStatus('Car cant be started. Try again')
    }

    function gearBoxStarted() {
        var gearBoxValue = 1
        processEls(gearBoxValueLabels, function (gearBoxValueLabel) {
            gearBoxValueLabel.innerHTML = gearBoxValue
        })

        function incrementGearBoxValue() {
            if (gearBoxValue < 5) {
                gearBoxValue++
                processEls(gearBoxValueLabels, function (gearBoxValueLabel) {
                    gearBoxValueLabel.innerHTML = gearBoxValue
                })

            }
        }
        gearBoxInterval = window.setInterval(incrementGearBoxValue, 1000)
    }

    function plannedCrashStarted() {
        function engineCrashed() {
            devLog('engine crashed')
            drawStatus('Engine have crashed. Car stopped')

            processEls(startButtons, function (startButton) {
                startButton.classList.remove("hide")
            })
            processEls(gearBoxValueLabels, function (gearBoxValueLabel) {
                gearBoxValueLabel.innerHTML = 'N'
            })

            window.clearInterval(gearBoxInterval)
        }
        window.setTimeout(engineCrashed, 3000)
    }
    render();
    var gearBoxInterval
    var startButtons = document.getElementById(containerId).querySelectorAll("[data-role ='start-car']")
    var statusLabels = document.getElementById(containerId).querySelectorAll("[data-role = 'status']")
    var gearBoxValueLabels = document.getElementById(containerId).querySelectorAll("[data-role ='gear-box-value']")

    processEls(startButtons, function (startButton) {
        startButton.addEventListener("click", carStartListener)
    })


}



