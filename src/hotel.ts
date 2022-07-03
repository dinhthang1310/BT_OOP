import {User} from "./user";

export class Hotel {
    private _numOfDay : number;
    private _kindOfRoom : string;
    private _price : number;
    private _user : User;

    constructor(numOfDay: number, kindOfRoom: string, price: number, user: User) {
        this._numOfDay = numOfDay;
        this._kindOfRoom = kindOfRoom;
        this._price = price;
        this._user = user;
    }

    get numOfDay(): number {
        return this._numOfDay;
    }

    set numOfDay(value: number) {
        this._numOfDay = value;
    }

    get kindOfRoom(): string {
        return this._kindOfRoom;
    }

    set kindOfRoom(value: string) {
        this._kindOfRoom = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }
}