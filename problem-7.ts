
class Car {
    constructor(
        public make: string,
        public model: string,
        public year: number,
    ){}

    getCarAge() {
        const currentYear = new Date().getFullYear()
        const carAge = currentYear - this.year
        console.log(carAge, `(assuming current year is ${currentYear})`);
    }
}

const car = new Car("Honda", "Civic", 2015);
car.getCarAge();