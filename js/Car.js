function Car(containerId) {
    that = this;
    this._engine = new Engine;
    this._gearBox = new GearBox;

    this._view = new CarView();

    this._view.addEventListener("start" ,function(){
        that.start()
    });
    

    this._logger = new Logger;
    this._view.render(containerId);

}

Car.prototype = {
    start: function () {

        var startResult = this._engine.start()
        if(startResult){
            this._view.drawStatus('Car have started')
            this._view.onCarStarted()
            this._gearBox.start()
        }else{
            this._logger.log('Something wrong')
            this._view.drawStatus('Car cant be started. Try again')
        }
    },

    _carStarted: function () { 
        this._logger.log('ok')
        this._view.drawStatus('Car cant be started. Try again')
    },
    _carCannotBeStarted: function () {
        this._logger.log('ko')
    },

}