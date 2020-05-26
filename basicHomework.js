function sayHello(person) {
    return "Hello, " + person;
}
function addCerts() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++) {
        this.certs.push(args[i]);
    }
}
var user = "Super Student";
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
    }
    Employee.prototype.name = function () {
        return "Hello, my name is " + this.firstName + " " + this.lastName + ".";
    };
    Employee.prototype.yourAge = function () {
        return (this.firstName +
            " is " +
            this.age +
            " years old and lives in " +
            this.state +
            ".");
    };
    Employee.prototype.address = function () {
        return ("The more exact address for " +
            this.firstName +
            " is " +
            this.zipCode +
            " in " +
            this.state +
            ".");
    };
    Employee.prototype.personsOccupation = function () {
        return (this.firstName +
            " is a " +
            this.occupation +
            " in the great state of " +
            this.state);
    };
    Employee.prototype.weeklyWage = function (numOfHoursWorked) {
        if (numOfHoursWorked) {
            return numOfHoursWorked * this.hourlyWage;
        }
        else {
            return 40 * this.hourlyWage;
        }
    };
    Employee.newPerson = function (x) {
        var newPerson = {
            age: 30,
            phoneNumber: "333-333-3333"
        };
        if (x.age) {
            newPerson.age = x.age;
        }
        if (x.phoneNumber) {
            newPerson.phoneNumber = x.phoneNumber;
        }
        return newPerson;
    };
    return Employee;
}());
var person0 = Employee.newPerson({
    firstName: "Johhny",
    lastName: "Walker",
    age: 23,
    phoneNumber: "444-444-444"
});
var johnnyAppleseed = new Employee("Johnny", "Appleseed", 5, "828-874-2234", "NC", "28764", "Doctor", 15.5);
var bigfoot = new Employee("Big", "Foot", 234, "888-888-8888", "Maine", "23555", "Nature Enthusiast", 5.5);
var lochness = new Employee("Lochness", "Monster", 589, "111-111-1111", "Indiana", "45454", "Scuba Diver", 20.0);
var abominable = new Employee("Abominable", "Snowman", 80, "555-555-5555", "Florida", "56473", "Ice cream salesman", 4.5);
document.getElementById("firstDiv").innerHTML = sayHello(user);
document.getElementById("secondDiv").innerHTML = johnnyAppleseed.name();
document.getElementById("thirdDiv").innerHTML = bigfoot.personsOccupation();
document.getElementById("fourthDiv").innerHTML =
    "Lochness makes $" + lochness.weeklyWage() + " a week.";
// lochness.weeklyWage().toString();
document.getElementById("fifthDiv").innerHTML = abominable.address();
