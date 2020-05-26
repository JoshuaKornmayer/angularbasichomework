function sayHello(person: string): string {
  return "Hello, " + person;
}

function addCerts(...args) {
  for (let i = 0; i < args.length; i++) {
    this.certs.push(args[i]);
  }
}

interface EmployeeOptions {
  firstName: string;
  lastName: string;
  age?: number;
  phoneNumber?: string;
}

var user = "Super Student";

class Employee implements EmployeeOptions {
  firstName: string;
  lastName: string;
  age: number;
  phoneNumber: string;
  state: string;
  zipCode: string;
  occupation: string;
  hourlyWage: number;
  certs: string[];

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    phoneNumber: string,
    state: string,
    zipCode: string,
    occupation: string,
    hourlyWage: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.state = state;
    this.zipCode = zipCode;
    this.occupation = occupation;
    this.hourlyWage = hourlyWage;
  }

  name(): string {
    return "Hello, my name is " + this.firstName + " " + this.lastName + ".";
  }

  yourAge(): string {
    return (
      this.firstName +
      " is " +
      this.age +
      " years old and lives in " +
      this.state +
      "."
    );
  }

  address(): string {
    return (
      "The more exact address for " +
      this.firstName +
      " is " +
      this.zipCode +
      " in " +
      this.state +
      "."
    );
  }

  personsOccupation(): string {
    return (
      this.firstName +
      " is a " +
      this.occupation +
      " in the great state of " +
      this.state
    );
  }

  weeklyWage(numOfHoursWorked?: number): number {
    if (numOfHoursWorked) {
      return numOfHoursWorked * this.hourlyWage;
    } else {
      return 40 * this.hourlyWage;
    }
  }

  static newPerson(x: EmployeeOptions): { age: number; phoneNumber: string } {
    let newPerson = {
      age: 30,
      phoneNumber: "333-333-3333",
    };
    if (x.age) {
      newPerson.age = x.age;
    }
    if (x.phoneNumber) {
      newPerson.phoneNumber = x.phoneNumber;
    }
    return newPerson;
  }
}

let person0 = Employee.newPerson({
  firstName: "Johhny",
  lastName: "Walker",
  age: 23,
  phoneNumber: "444-444-444",
});

let johnnyAppleseed = new Employee(
  "Johnny",
  "Appleseed",
  5,
  "828-874-2234",
  "NC",
  "28764",
  "Doctor",
  15.5
);

let bigfoot = new Employee(
  "Big",
  "Foot",
  234,
  "888-888-8888",
  "Maine",
  "23555",
  "Nature Enthusiast",
  5.5
);

let lochness = new Employee(
  "Lochness",
  "Monster",
  589,
  "111-111-1111",
  "Indiana",
  "45454",
  "Scuba Diver",
  20.0
);

let abominable = new Employee(
  "Abominable",
  "Snowman",
  80,
  "555-555-5555",
  "Florida",
  "56473",
  "Ice cream salesman",
  4.5
);

document.getElementById("firstDiv").innerHTML = sayHello(user);
document.getElementById("secondDiv").innerHTML = johnnyAppleseed.name();
document.getElementById("thirdDiv").innerHTML = bigfoot.personsOccupation();
document.getElementById("fourthDiv").innerHTML =
  "Lochness makes $" + lochness.weeklyWage() + " a week.";
// lochness.weeklyWage().toString();
document.getElementById("fifthDiv").innerHTML = abominable.address();
