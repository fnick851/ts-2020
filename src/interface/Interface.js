// interface VS type
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.age = 1;
        if (name) {
            this.fart = function () {
                console.log('farting');
            };
        }
    }
    Person.prototype.greet = function (phrase) {
        return phrase;
    };
    Person.prototype.smile = function () {
        console.log("smiling...");
    };
    return Person;
}());
var person = new Person('joe');
// interface VS abstract class: abstract class can have some concrete implementations built in
