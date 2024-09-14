// 1 - Створення словника:

interface IDictionary {
  [name: string]: number
}

const goods: IDictionary = {
  clothes: 30,
  food: 20,
  devices: 40,
  furniture: 10
}
console.log(goods);


const dishes: IDictionary = {
  pizza: 5,
  salads: 10,
  garnish: 8,
  deserts: 3
}
console.log(dishes);


// 2 - Словник із змішаними значеннями:

interface IAges {
  [name: string]: number | string
}

const users: IAges = {
  john: '25',
  kiwi: 15,
  nick: '20',
}
console.log(users);


const pets: IAges = {
  dog: 2,
  cat: 3,
  parrot: 8,
  turtule: 20
}
console.log(pets);


// 3 - Ви розробляєте функцію, яка приймає масив чисел і повертає його ж
// але ви хочете гарантувати, що функція не змінює вхідний масив. 

function doSomethingWithArray(input: readonly number[]): number[] {
  return [...input]
}

const nums:number[] = [1, 2, 3]
doSomethingWithArray(nums)

// 4 - Створіть interface наступного об'єкту

interface User  {
  name: string,
  age: number,
  cars: ICar[]
  getTotalMileage(): number
}

interface ICar {
  brand: string
  model: string
  year: number
  mileage: number
  getCarInfo(): string
}

const user: User = {
  name: "Олександр",
  age: 32,
  cars: [
    {
      brand: "Honda",
      model: "Civic",
      year: 2018,
      mileage: 40000,
      getCarInfo() {
        return `${this.brand} ${this.model} (${this.year}), пробіг: ${this.mileage} км;`
      }
    },
    {
      brand: "BMW",
      model: "X5",
      year: 2020,
      mileage: 20000,
      getCarInfo() {
        return `${this.brand} ${this.model} (${this.year}), пробіг: ${this.mileage} км;`
      }
    }
  ],
  getTotalMileage() {
    return this.cars.reduce((total, car) => total + car.mileage, 0);
  }
};

console.log(`Загальний пробіг автомобілів користувача: ${user.getTotalMileage()} км`)
