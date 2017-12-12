
class Car {
    constructor(){
        this.wheels = 4
        this.modelYear = 2007
        this.lights = "off"
        this.turnSignal = "off"
        this.speed = 0
    }
    powerLights(power) {
        if (power === "off"){
        this.lights = "off"
        } else if (power === "on") {
        this.lights = "on"
        } else {
            return "No lights present"
        }
    }
    signal(direction) {
        if (direction === "left"){
        this.turnSignal = "left"
    } else if (direction === "right") {
        this.turnSignal = "right"
        } else {
            return "Turn signal off"
        }
    }
    acceleration(fast){
        this.speed += fast
            }
    deceleration(slow){
        if (this.speed > 0){
        this.speed -= slow
    } else if (this.speed <=0) {
        return "Car is fully stopped!"
        }
    }
}

module.exports = Car;
