"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
var Hotel = /** @class */ (function () {
    function Hotel(numOfDay, kindOfRoom, price, user) {
        this._numOfDay = numOfDay;
        this._kindOfRoom = kindOfRoom;
        this._price = price;
        this._user = user;
    }
    Object.defineProperty(Hotel.prototype, "numOfDay", {
        get: function () {
            return this._numOfDay;
        },
        set: function (value) {
            this._numOfDay = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hotel.prototype, "kindOfRoom", {
        get: function () {
            return this._kindOfRoom;
        },
        set: function (value) {
            this._kindOfRoom = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hotel.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hotel.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: false,
        configurable: true
    });
    return Hotel;
}());
exports.Hotel = Hotel;
//# sourceMappingURL=hotel.js.map