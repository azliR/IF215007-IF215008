class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	fullName() {
		return this.firstName + ' ' + this.lastName;
	}
}

const person = new Person('Rizal', 'Hadiyansah');
console.log(person.fullName());
