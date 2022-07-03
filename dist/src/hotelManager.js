"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelManager = void 0;
class HotelManager {
    constructor() {
    }
    showList() {
        return HotelManager.hotelList;
    }
    addNewUser(hotel) {
        HotelManager.hotelList.push(hotel);
    }
    update(name, hotel) {
        let index = this.findByName(name);
        if (index !== -1) {
            HotelManager.hotelList[index] = hotel;
            return true;
        }
        return false;
    }
    delete(name) {
        let index = this.findByName(name);
        if (index !== -1) {
            HotelManager.hotelList.splice(index, 1);
        }
    }
    findByName(name) {
        let index = -1;
        for (let i = 0; i < HotelManager.hotelList.length; i++) {
            if (HotelManager.hotelList[i].user.fullName == name) {
                index = i;
                break;
            }
        }
        return index;
    }
}
exports.HotelManager = HotelManager;
HotelManager.hotelList = [];
