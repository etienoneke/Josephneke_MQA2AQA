// ES6 class for Person
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Creating instances of Person
  const person1 = new Person("Neke", 20);
  const person2 = new Person("Joseph", 30);
  
  person1.sayHello(); // Output: Hello, my name is Neke and I am 20 years old.
  person2.sayHello(); // Output: Hello, my name is Joseph and I am 30 years old.
  
  // ES6 class for Computer
  class Computer {
    constructor(manufacturer, model) {
      this.manufacturer = manufacturer;
      this.model = model;
      this.isPoweredOn = false;
    }
  
    powerOn() {
      if (!this.isPoweredOn) {
        this.isPoweredOn = true;
        console.log(`${this.manufacturer} ${this.model} is now powered on.`);
      } else {
        console.log(`${this.manufacturer} ${this.model} is already powered on.`);
      }
    }
  
    powerOff() {
      if (this.isPoweredOn) {
        this.isPoweredOn = false;
        console.log(`${this.manufacturer} ${this.model} is now powered off.`);
      } else {
        console.log(`${this.manufacturer} ${this.model} is already powered off.`);
      }
    }
  }
  
  // Creating instances of Computer
  const computer1 = new Computer("Dell", "XPS");
  const computer2 = new Computer("HP", "Pavilion");
  
  computer1.powerOn(); // Output: Dell XPS is now powered on.
  computer2.powerOff(); // Output: HP Pavilion is already powered off.
  