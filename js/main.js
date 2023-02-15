/**  BÀI 1
Khối 1: Input
      toan, ly, hoa, zone, obj, fp 

 Khối 2: Các bước xử lý
     B1: Lấy giá trị từ form khi người dùng click button
       + Tạo hàm tuyenSinh
     B2: Trong hàm tuyenSinh
       + DOM tới thẻ cần lấy dữ liệu của form và lấy value
     B3: Lập công thức và kiểm tra điều kiện
       Trong trường hợp zone = "A" thì zone = 2, ="B" thì zone = 1, ="C" thì zone = 0.5, = X thì zone = 0;
       Trong trường hợp obj = 1 thì obj = 2.5, =2 thì obj = 1.5, =3 thì obj = 1;
       ketQua = toan + ly + hoa + zone + obj
       Nếu điểm toan, ly, hoa <0 và >10; fp <=0 và >30 => yêu cầu nhập lại
       Ngược lại nếu, toan = 0 or ly = 0 or hoa = 0 => Thí sinh rớt
       Ngược lại nếu, ketQua >= FP => Thí sinh đậu
       Ngược lại nếu, ketQua <FP =>> thì sinh rớt
 Khối 3: Thông báo output
       ketQua
*/

function kiemTraDiemSan(diem) {
    if (diem > 30 || diem <= 0) {
        return false;
    }
    else {
        return true;
    }
}

function kiemTraDiem(diem) {
    if (diem > 10 || diem < 0) {
        return false;
    }
    else {
        return true;
    }
}

function kiemTraDiem0(diem) {
    if (diem == 0) {
        return false;
    }
    else {
        return true;
    }
}

function diemCong1(cong) {
    switch (cong) {
        case "X":
            cong = 0;
            break;
        case "A":
            cong = 2;
            break;
        case "B":
            cong = 1
            break;
        case "C":
            cong = 0.5
            break;
    }
    return cong;
};

function diemCong2(cong) {
    switch (cong) {
        case 1:
            cong = 2.5;
            break;
        case 2:
            cong = 1.5;
            break;
        case 3:
            cong = 1;
            break;
    }
    return cong;
};

function toTal(cong1, cong2, mon1, mon2, mon3) {
    var tong = cong1 + cong2 + mon1 + mon2 + mon3;
    return tong;
}

function kq(ketQua, fp) {
    if (ketQua >= fp) {
        return true;
    } else {
        return false;
    }
}

// function ketQua(tong, ){}

function tuyenSinh() {
    var fp = Number(document.getElementById("diemChuan").value);
    var toan = Number(document.getElementById("diemToan").value);
    var ly = Number(document.getElementById("diemLy").value);
    var hoa = Number(document.getElementById("diemHoa").value);
    var zone = document.getElementById("khuVuc").value;
    var obj = Number(document.getElementById("doiTuong").value);

    var dc1 = diemCong1(zone);
    var dc2 = diemCong2(obj);
    var tong = toTal(dc1, dc2, toan, ly, hoa);

    if (kiemTraDiem(toan) == false || kiemTraDiem(ly) == false || kiemTraDiem(hoa) == false) {
        ;
        alert("Điểm thi không hợp lệ.");
    }
    else if (kiemTraDiemSan(fp) == false) {
        alert("Điểm sàn không hợp lệ.");
    }
    else if (kiemTraDiem0(toan) == false || kiemTraDiem0(ly) == false || kiemTraDiem0(hoa) == false) {
        document.getElementById("ketQua1").innerHTML = "Thí sinh đã trượt vì có môn điểm bằng 0";
    }
    else if (kq(tong, fp)) {
        document.getElementById("ketQua1").innerHTML = "Thí sinh đã đậu. Điểm của thí sinh là: " + tong;
    }
    else {
        document.getElementById("ketQua1").innerHTML = "Thí sinh đã trượt. Điểm của thí sinh là: " + tong;
    }

}
document.getElementById("calc1").onclick = tuyenSinh;

/**  BÀI 2
Khối 1: Input
      name, kw 

 Khối 2: Các bước xử lý
     B1: Lấy giá trị từ form khi người dùng click button
       + Tạo hàm tienDien
     B2: Trong hàm tienDien
       + DOM tới thẻ cần lấy dữ liệu của form và lấy value
     B3: Lập công thức và kiểm tra điều kiện
       50kw đầu => tongTien = 500 * kw sử dụng
       50kw kế => tongTien = 500 * 50 + 650 * (kw sử dụng - 50)
       100kw kế => tongTien = 500 * 50 + 650 * 50  + 850 * (kw sử dụng - 100)
       150kw kế => tongTien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 (kw sử dụng - 200)
       còn lại => tongTien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (kw sử dụng - 350)
 Khối 3: Thông báo output
       name, tongTien
*/
var KW_50_DAU = 500;
var KW_50_KE = 650;
var KW_100_KE = 850;
var KW_150_KE = 1100;
var KW_CON_LAI = 1300;

function tinhTien(kw, gia_50_dau, gia_50_ke, gia_100_ke, gia_150_ke, gia_con_lai) {
    if (kw > 0 && kw <= 50) {
        return gia_50_dau * kw;
    } else if (kw > 50 && kw <= 100) {
        return gia_50_dau * 50 + gia_50_ke * (kw - 50);
    }
    else if (kw > 100 && kw <= 200) {
        return gia_50_dau * 50 + gia_50_ke * 50 + gia_100_ke * (kw - 100);
    }
    else if (kw > 200 && kw <= 350) {
        return gia_50_dau * 50 + gia_50_ke * 50 + gia_100_ke * 100 + gia_150_ke * (kw - 200 );
    }
    else if (kw > 350) {
        return gia_50_dau * 50 + gia_50_ke * 50 + gia_100_ke * 100 + gia_150_ke * 150 + gia_con_lai * (kw - 350);
    } else {
        alert("Số chữ điện không hợp lệ");
        return;
    }
}

function tienDien(){
    var name = document.getElementById("hoVaTen").value;
    var kw = Number(document.getElementById("soChuDien").value);
    tongTien = 0;
    tongTien = tinhTien (kw, KW_50_DAU, KW_50_KE, KW_100_KE, KW_150_KE, KW_CON_LAI );
    document.getElementById("ketQua2").innerHTML = "Tổng tiền điện của khách hàng " + name + " trong tháng này là: " + tongTien.toLocaleString() + " VNĐ"
}
document.getElementById("calc2").onclick = tienDien;

