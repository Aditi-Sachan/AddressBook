class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // Getter and Setter for First Name
    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        let nameRegex = /^[A-Z]{1}[a-z]{2,}$/;
        if (nameRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "Invalid First Name! It should start with a capital letter and have a minimum of 3 characters.";
        }
    }

    // Getter and Setter for Last Name
    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let nameRegex = /^[A-Z]{1}[a-z]{2,}$/;
        if (nameRegex.test(lastName)) {
            this._lastName = lastName;
        } else {
            throw "Invalid Last Name! It should start with a capital letter and have a minimum of 3 characters.";
        }
    }

    // Getter and Setter for Address
    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = /^[A-Za-z0-9\s]{4,}$/;
        if (addressRegex.test(address)) {
            this._address = address;
        } else {
            throw "Invalid Address! It should have a minimum of 4 characters.";
        }
    }

    // Getter and Setter for City
    get city() {
        return this._city;
    }
    set city(city) {
        let cityStateRegex = /^[A-Za-z]{4,}$/;
        if (cityStateRegex.test(city)) {
            this._city = city;
        } else {
            throw "Invalid City! It should have a minimum of 4 characters.";
        }
    }

    // Getter and Setter for State
    get state() {
        return this._state;
    }
    set state(state) {
        let cityStateRegex = /^[A-Za-z]{4,}$/;
        if (cityStateRegex.test(state)) {
            this._state = state;
        } else {
            throw "Invalid State! It should have a minimum of 4 characters.";
        }
    }

    // Getter and Setter for Zip
    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let zipRegex = /^[1-9]{1}[0-9]{5}$/;
        if (zipRegex.test(zip)) {
            this._zip = zip;
        } else {
            throw "Invalid Zip! It should be a 6-digit number and should not start with 0.";
        }
    }

    // Getter and Setter for Phone Number
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneRegex = /^[0-9]{10}$/;
        if (phoneRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        } else {
            throw "Invalid Phone Number! It should be a 10-digit number.";
        }
    }

    // Getter and Setter for Email
    get email() {
        return this._email;
    }
    set email(email) {
        let emailRegex = /^[a-zA-Z0-9]+([._+-]?[a-zA-Z0-9])*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,3}$/;
        if (emailRegex.test(email)) {
            this._email = email;
        } else {
            throw "Invalid Email! Please enter a valid email.";
        }
    }

    // toString Method
    toString() {
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Address: ${this.address}, City: ${this.city}, State: ${this.state}, Zip: ${this.zip}, Phone Number: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// Create an Array to Store Multiple Contacts
let addressBookArray = [];

try {
    let contact1 = new Contact(
        "John",
        "Doe",
        "123 Street",
        "London",
        "State",
        "123456",
        "9876543210",
        "john.doe@example.com"
    );
    addressBookArray.push(contact1);

    let contact2 = new Contact(
        "Alice",
        "Smith",
        "456 Avenue",
        "Paris",
        "State",
        "987654",
        "9123456789",
        "alice.smith@example.com"
    );
    addressBookArray.push(contact2);

    // Invalid Contact - Should Throw an Error
    let contact3 = new Contact(
        "james", // Invalid first name
        "Brown",
        "789 Boulevard",
        "Berlin",
        "State",
        "876543",
        "9123456789",
        "james.brown@example.com"
    );
    addressBookArray.push(contact3);

} catch (error) {
    console.error(error);
}

// Display Valid Contacts
console.log("\n Valid Contacts in Address Book:");
addressBookArray.forEach(contact => console.log(contact.toString()));

