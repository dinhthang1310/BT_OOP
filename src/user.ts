export class User {
    private _fullName : string;
    private _dateOfBirth : string;
    private _id : string;

    constructor(fullName: string, dateOfBirth: string, id: string) {
        this._fullName = fullName;
        this._dateOfBirth = dateOfBirth;
        this._id = id;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get dateOfBirth(): string {
        return this._dateOfBirth;
    }

    set dateOfBirth(value: string) {
        this._dateOfBirth = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }
}