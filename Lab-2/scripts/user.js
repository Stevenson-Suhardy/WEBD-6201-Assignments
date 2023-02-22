/**
 * Name: Stevenson Suhardy
 * Student ID: 100839397
 * Date Completed: February 21, 2023
 */

export class User {

    // Parameterized constructor
    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password=  password;
    }

    // Public method
    displayUser() {
        return `Name: ${this.firstName}${this.lastName}\nUsername: ${this.username}\nEmail: ${this.email}\nPassword: ${this.password}`
   }
}