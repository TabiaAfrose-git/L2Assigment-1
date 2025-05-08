    function formatString(input: string,toUpper?: boolean): string{
        if(toUpper === false){
            return input.toLowerCase();
        }
        return input.toUpperCase();
    }//console.log(formatString("Hello",false));


    function filterByRating(items: { title: string; rating: number }[]): any{
        console.log(items.filter(item =>
            item.rating >= 4
        ));

    }
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 },
        { title: "Book E", rating: 4.3 },
        { title: "Book F", rating: 1.7 }
    ];//filterByRating(books);


    function concatenateArrays<T>(...arrays: T[][]): T[] {
        const result: T[] = [];
        for (const array of arrays) {
        result.push(...array);
        }
        return result;
    }//console.log(concatenateArrays(["a", "b"], ["c"])); //console.log(concatenateArrays([1, 2], [3, 4], [5]));


    class Vehicle{
    private make: string;
    private year: number;
        constructor( make: string, year: number){
            this.make = make;
            this.year = year;
        }
        getInfo(): string{
            return(` Make: ${this.make}, Year: ${this.year}`);
        }
    }
    class Car extends Vehicle{
        private model: string;
        constructor(make:string, year:number, model: string){
            super(make,year);
            this.model = model;
        }
        getModel(): string{
        return(` "Model: ${this.model}"`);
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    //console.log(myCar.getInfo()); //console.log(myCar.getModel());


    function processValue(value: string | number): number{
        if (typeof value === "string")return value.length;
        else return value * 2;
    }//console.log(processValue(10));



    interface Product {
        name: string;
        price: number;
    }
    function getMostExpensiveProduct(products: Product[]): any{
        let value;
        products.forEach(product =>{
            Math.max(product.price)
            value = product
        })
        console.log(value);
    }
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];//getMostExpensiveProduct(products);


    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string{
        if(day  === Day.Saturday || day === Day.Sunday){
            return "Weekend";
        }
        return "Weekday"
    }//console.log(getDayType(Day.Saturday));


    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (n < 0) {
              reject(new Error("Number is negative !!! "));
            } else {
              resolve(n * n);
            }
          }, 1000);
        });
      }
    //   squareAsync(-10)
    //   .then(result => console.log(result))
    //   .catch(error => console.error(error));













