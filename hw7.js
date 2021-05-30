class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume;
    #isStarted;
    #mileage;

    constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
        if (typeof brand !== 'string' || brand.length < 1 || brand.length > 50) {
            throw new Error ("Неверное название!");
        }
        if (typeof model !== 'string' || model.length < 1 || model.length > 50) {
            throw new Error ("Неверно указана модель!");
        }
        let date = new Date();
        if (typeof yearOfManufacturing !== 'number' || yearOfManufacturing < 1900 || yearOfManufacturing > date.getFullYear() || isNaN(yearOfManufacturing)) {
            throw new Error ("Неверно указан год!");
        }
        if (typeof maxSpeed!=='number' || maxSpeed < 100 || maxSpeed > 300 || isNaN(maxSpeed)) {
            throw new Error ("Неверно указана максимальная скорость!");
        }
        if (typeof maxFuelVolume !== 'number' || maxFuelVolume < 5 || maxFuelVolume > 20 || isNaN(maxFuelVolume)) {
            throw new Error ("Неверно указано значение литров!");
        }
        if(typeof fuelConsumption !=='number' || fuelConsumption < 1.2 || fuelConsumption > 3 || isNaN(fuelConsumption)) {
            throw new Error ("Неверное значениe!");
        }
        this.#brand = brand;
        this.#model = model;
        this.#yearOfManufacturing = yearOfManufacturing;
        this.#maxSpeed = maxSpeed;
        this.#maxFuelVolume = maxFuelVolume;
        this.#fuelConsumption = fuelConsumption;
        this.#currentFuelVolume = 0;
        this.#isStarted = false;
        this.#mileage = 0;
    }

    start() {
        if (this.#isStarted === true) {
            throw new Error ('Машина уже заведена');
        } else {
            this.#isStarted = true;
        }
    }

    shutDownEngine() {
        if (this.#isStarted === false) {
            throw new Error ('Машина ещё не заведена');
        } else {
            this.#isStarted = false;
        }
    }

    fillUpGasTank(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new Error ('Неверное количество топлива для заправки');
        } else if (value <= 0) {
            throw new Error ('Неверное количество топлива для заправки');
        } else if (value + this.#currentFuelVolume > this.#maxFuelVolume) {
            throw new Error ('Топливный бак переполнен');
        } else {
            this.#currentFuelVolume += value;
        }
    }

    drive(speed, hour) {
        if (typeof speed !== 'number' || isNaN(speed) || speed <= 0) {
            throw new Error ('Неверная скорость');
        } else if (typeof hour !== 'number' || isNaN(hour) || hour <= 0) {
            throw new Error ('Неверное количество часов');
        } else if (speed > this.#maxSpeed) {
            throw new Error ('Машина не может ехать так быстро');
        } else if (this.#isStarted === false) {
            throw new Error ('Машина должна быть заведена, чтобы ехать');
        } else if (speed * hour * this.#fuelConsumption / 100 > this.#currentFuelVolume) {
            throw new Error ('Недостаточно топлива')
        } else {
            this.#currentFuelVolume = parseFloat(this.#currentFuelVolume - speed*hour*this.#fuelConsumption/100).toFixed(2);
            this.#mileage += speed*hour;
        }   
    }

    get brand() {
        return this.#brand;
    }

    set brand(brand) {
        if (typeof brand !== 'string' || brand.length < 1 || brand.length > 50) {
            throw new Error ("Неверное название!");
        } else {
            this.#brand = brand;
        } 
    }

    get model() {
        return this.#model;
    }

    set model(model) {
        if (typeof model !== 'string' || model.length < 1 || model.length > 50) {
            throw new Error ("Неверно указана модель!");
        } else {
            this.#model = model;
        }
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set yearOfManufacturing(yearOfManufacturing) {
        let date = new Date();
        if (typeof yearOfManufacturing !== 'number' || yearOfManufacturing < 1900 || yearOfManufacturing > date.getFullYear() || isNaN(yearOfManufacturing)) {
            throw new Error ("Неверно указан год!");
        } else {
            this.#yearOfManufacturing = yearOfManufacturing;
        }
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxSpeed(maxSpeed) {
        if (typeof maxSpeed!=='number' || maxSpeed < 100 || maxSpeed > 300 || isNaN(maxSpeed)) {
            throw new Error ("Неверно указана максимальная скорость!");
        } else {
            this.#maxSpeed = maxSpeed;
        }
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set maxFuelVolume(maxFuelVolume) {
        if (typeof maxFuelVolume !== 'number' || maxFuelVolume < 5 || maxFuelVolume > 20 || isNaN(maxFuelVolume)) {
            throw new Error ("Неверно указано значение литров!");
        } else {
            this.#maxFuelVolume = maxFuelVolume;
        }
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    set fuelConsumption(fuelConsumption) {
        if(typeof fuelConsumption !=='number' || fuelConsumption < 1.2 || fuelConsumption > 3 || isNaN(fuelConsumption)) {
            throw new Error ("Неверное значениe!");
        } else {
            this.#fuelConsumption = fuelConsumption;
        }
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume
    }

    get isStarted() {
        return this.#isStarted
    }

    get mileage() {
        return this.#mileage
    }
}

module.exports = Car;