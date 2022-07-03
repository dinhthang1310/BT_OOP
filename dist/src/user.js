"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(fullName, dateOfBirth, id) {
        this._fullName = fullName;
        this._dateOfBirth = dateOfBirth;
        this._id = id;
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(value) {
        this._fullName = value;
    }
    get dateOfBirth() {
        return this._dateOfBirth;
    }
    set dateOfBirth(value) {
        this._dateOfBirth = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
exports.User = User;
