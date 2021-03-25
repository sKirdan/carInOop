function Car(containerId) {
    this._engine = new Engine;
    this._gearBox = new GearBox;

    this._view = new CarView();

    this._logger = new Logger;
    this._view.render(containerId);

}

Car.prototype = {
    start: function () {
        var randomNamber = Math.random()

        if (randomNamber > 0.5) {
            this._carStarted()
        } else {
            this._carCannotBeStarted()
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