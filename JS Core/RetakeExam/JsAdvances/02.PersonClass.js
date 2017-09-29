class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let p = new Person('Daniel', 'Radev', 21, 'd.f.99@abv.bg');
console.log(p.firstName);
console.log(p.lastName);
console.log(p.age);
console.log(p.email);
console.log(p.toString());