// Exercise 45: cars


function build_car(manufacturer: string, model: string, ...options: [string, any][]) {

    let car: { manufacturer: string; model: string; [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    // Add optional properties to the car object
    options.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

// Call the function with the required information and additional options
let car1 = build_car('Toyota', 'Corolla', ['color', 'blue'], ['year', 2024]);
let car2 = build_car('Ford', 'Mustang', ['color', 'red'], ['engine', 'V8'], ['sunroof', true]);
let car3 = build_car('Tesla', 'Model S', ['autopilot', true]);

console.log(car1);
console.log(car2);
console.log(car3);
