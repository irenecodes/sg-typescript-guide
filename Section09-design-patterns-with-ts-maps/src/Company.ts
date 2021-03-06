import faker from 'faker';
import {Mappable} from './CustomMap';

export class Company implements Mappable {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red';

    // initialize the info 
    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        // rmb to initialize as object 
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    // fulfilling the interface. strings can be html
    markerContent(): string {
        return `
        <div>
        <h1>User Name: ${this.companyName}</h1>
        <h3>Catch phrase: ${this.catchPhrase}</h3>
        </div>
        `
    }
}