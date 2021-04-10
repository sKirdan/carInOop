function Engine(){
    console.log('engine created')
}

Engine.prototype.start = function(){
    var randomNamber = Math.random()

    if (randomNamber > 0.5) {
        return true
    } else {
        return false
    }
}