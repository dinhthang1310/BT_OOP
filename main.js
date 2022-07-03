"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rl = require("readline-sync");
var hotelManager_1 = require("./src/hotelManager");
var hotel_1 = require("./src/hotel");
var user_1 = require("./src/user");
var hotelManager = new hotelManager_1.HotelManager();
var choice = -1;
do {
    console.log('---Quản lý khách sạn---');
    console.log('1.Hiển thị thông tin khách thuê phòng');
    console.log('2.Thêm thông tin khách hàng ');
    console.log('3.Sửa thông tin khách hàng');
    console.log('4.Xoá thông tin khách hàng');
    console.log('5.Tìm kiếm thông tin khách hàng');
    console.log('0.Thoát');
    choice = +rl.question('Nhập lựa chọn...');
    switch (choice) {
        case 1: {
            console.log('---Hiện thị thông tin khách hàng---');
            var user = hotelManager.showList();
            for (var _i = 0, user_2 = user; _i < user_2.length; _i++) {
                var hotel = user_2[_i];
                console.log("H\u1ECD t\u00EAn: ".concat(hotel.user.fullName, "\tNg\u00E0y sinh: ").concat(hotel.user.dateOfBirth, "\t\n                S\u1ED1 cmnd: ").concat(hotel.user.id, "\tS\u1ED1 Ng\u00E0y thu\u00EA: ").concat(hotel.numOfDay, "\tLo\u1EA1i ph\u00F2ng: ").concat(hotel.kindOfRoom, "\tGi\u00E1: ").concat(hotel.price));
            }
            break;
        }
        case 2: {
            console.log('---Thêm thông tin khách hàng---');
            var name_1 = rl.question('Nhập tên khách hàng: ');
            var dob = rl.question('Nhập ngày sinh: ');
            var id = rl.question('Nhập số cmnd: ');
            var don = +rl.question('Nhập số ngày thuê phòng: ');
            var kindOfRoom = rl.question('Nhập loại phòng: ');
            var price = +rl.question('Nhập giá phòng: ');
            var user = new user_1.User(name_1, dob, id);
            var hotel = new hotel_1.Hotel(don, kindOfRoom, price, user);
            hotelManager.addNewUser(hotel);
            break;
        }
        case 3: {
            console.log('---Sửa thông tin khách hàng---');
            break;
        }
        case 4: {
            console.log('---Xoá thông tin khách hàng---');
            break;
        }
        case 5: {
            console.log('---Tìm kiếm thông tin khách hàng');
            break;
        }
    }
} while (choice != 0);
//# sourceMappingURL=main.js.map