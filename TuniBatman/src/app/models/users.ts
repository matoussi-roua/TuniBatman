import { Alerts } from "./alerts";

export class Users {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    age: number;
    city: string;
    role: string;
    createdAlerts: Alerts[];
    submittedAlerts: Alerts[];
    trainingSessions: number[];
    image: string;

    constructor(
        id: number,
        username: string,
        email: string,
        firstName: string,
        lastName: string,
        age: number,
        city: string,
        role: string,
        createdAlerts: Alerts[],
        submittedAlerts: Alerts[],
        trainingSessions: number[],
        image: string
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.city = city;
        this.role = role;
        this.createdAlerts = createdAlerts;
        this.submittedAlerts = submittedAlerts;
        this.trainingSessions = trainingSessions;
        this.image = image;
    }
}
  