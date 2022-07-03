import * as rl from 'readline-sync';
import {HotelManager} from "./src/hotelManager";
import {Hotel} from "./src/hotel";
import {User} from "./src/user";

let hotelManager = new HotelManager();
let choice = -1;

function showList() {
    console.log('---Hiện thị thông tin khách hàng---');
    let user = hotelManager.showList();
    for (const hotel of user) {
        console.log(`Họ tên: ${hotel.user.fullName}\tNgày sinh: ${hotel.user.dateOfBirth}\t
                Số cmnd: ${hotel.user.id}\tSố Ngày thuê: ${hotel.numOfDay}\tLoại phòng: ${hotel.kindOfRoom}\tGiá: ${hotel.price}`);
    }
}

function inputHotel() {
    let don = +rl.question('Nhập số ngày thuê phòng: ');
    let kindOfRoom = rl.question('Nhập loại phòng: ');
    let price = +rl.question('Nhập giá phòng: ');
    let user = inputUser()
    return new Hotel(don, kindOfRoom, price, user);

}

function inputUser() {
    let name = rl.question('Nhập tên khách hàng: ');
    let dob = rl.question('Nhập ngày sinh: ');
    let id = rl.question('Nhập số cmnd: ');
    return  new User(name, dob, id);
}
function addNewHotel() {
    let hotel = inputHotel();
    hotelManager.addNewUser(hotel);
}

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
        case 1 : {
            showList();
            break;
        }
        case 2 : {
            console.log('---Thêm thông tin khách hàng---');
            addNewHotel();
            break;
        }
        case 3 : {
            console.log('---Sửa thông tin khách hàng---');
            let index = rl.question('Nhập tên khách hàng muốn sửa: ');
            let hotel = inputHotel();
            hotelManager.update(index,hotel);
            break;
        }
        case 4 : {
            console.log('---Xoá thông tin khách hàng---');
            let index = rl.question('Nhập tên khánh hàng muốn xoá: ');
            hotelManager.delete(index);
            break;
        }
        case 5 : {
            console.log('---Tìm kiếm thông tin khách hàng---');
            let name = rl.question('Nhập tên khách hàng muốn tìm: ');
            let userName = hotelManager.findByName(name);
            if (userName) {
                console.log(userName);
            }else {
                console.log('không tìm thấy khách hàng này');
            }
            break;
        }
    }
}while (choice != 0);