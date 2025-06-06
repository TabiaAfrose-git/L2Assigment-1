"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
} //console.log(formatString("Hello",false));
function filterByRating(items) {
    console.log(items.filter(item => item.rating >= 4));
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book E", rating: 4.3 },
    { title: "Book F", rating: 1.7 }
]; //filterByRating(books);
function concatenateArrays(...arrays) {
    const result = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
} //console.log(concatenateArrays(["a", "b"], ["c"])); //console.log(concatenateArrays([1, 2], [3, 4], [5]));
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return (` Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return (` "Model: ${this.model}"`);
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
//console.log(myCar.getInfo()); //console.log(myCar.getModel());
function processValue(value) {
    if (typeof value === "string")
        return value.length;
    else
        return value * 2;
} //console.log(processValue(10));
function getMostExpensiveProduct(products) {
    let value;
    products.forEach(product => {
        Math.max(product.price);
        value = product;
    });
    console.log(value);
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
]; //getMostExpensiveProduct(products);
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    }
    return "Weekday";
} //console.log(getDayType(Day.Saturday));
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Number is negative !!! "));
                }
                else {
                    resolve(n * n);
                }
            }, 1000);
        });
    });
}
//   squareAsync(-10)
//   .then(result => console.log(result))
//   .catch(error => console.error(error));
