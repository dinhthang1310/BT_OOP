"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor(numOfDay, kindOfRoom, price, user) {
        this._numOfDay = numOfDay;
        this._kindOfRoom = kindOfRoom;
        this._price = price;
        this._user = user;
    }
    get numOfDay() {
        return this._numOfDay;
    }
    set numOfDay(value) {
        this._numOfDay = value;
    }
    get kindOfRoom() {
        return this._kindOfRoom;
    }
    set kindOfRoom(value) {
        this._kindOfRoom = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
}
exports.Hotel = Hotel;
