import {Hotel} from "./hotel";

export class HotelManager {
    private static hotelList : Hotel[] = [];
    constructor() {
    }
    showList():Hotel[] {
        return HotelManager.hotelList;
    }
    addNewUser(hotel : Hotel) {
        HotelManager.hotelList.push(hotel);
    }
    update(name : string,hotel : Hotel) {
        let index = this.findByName(name);
        if (index !== -1) {
            HotelManager.hotelList[index] = hotel;
            return true;
        }
        return false;
    }
    delete(name : string) {
        let index = this.findByName(name);
        if (index !== -1) {
            HotelManager.hotelList.splice(index,1);
        }
    }
    findByName(name : string) {
        let index = -1;
        for (let i = 0;i < HotelManager.hotelList.length;i++) {
            if (HotelManager.hotelList[i].user.fullName == name) {
                index = i;
                break;
            }
        }
        return index;
    }
}