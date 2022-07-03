"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelManager = void 0;
var HotelManager = /** @class */ (function () {
    function HotelManager() {
    }
    HotelManager.prototype.showList = function () {
        return HotelManager.hotelList;
    };
    HotelManager.prototype.addNewUser = function (hotel) {
        HotelManager.hotelList.push(hotel);
    };
    HotelManager.hotelList = [];
    return HotelManager;
}());
exports.HotelManager = HotelManager;
//# sourceMappingURL=hotelManager.js.map