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

function kiemTraDiemSan(diem){
    if (diem > 30 || diem <=0) {
        return false;
    }
    else {
        return true;
    }
}

function kiemTraDiem(diem){
    if (diem > 10 || diem < 0) {
        return false;
    }
    else {
        return true;
    }
}

function kiemTraDiem0(diem){
    if (diem == 0) {
        return false;
    }
    else {
        return true;
    }
}

function diemCong1(cong){
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

function diemCong2(cong){
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

function toTal(cong1, cong2, mon1, mon2, mon3){
    var tong= cong1 + cong2 + mon1 + mon2 + mon3;
    return tong;
}

function kq(ketQua, fp){
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
    
    if (kiemTraDiem(toan) == false || kiemTraDiem(ly) ==false || kiemTraDiem(hoa)==false) {;
        alert("Điểm thi không hợp lệ.");
    }
    else if (kiemTraDiemSan(fp) == false){
        alert("Điểm sàn không hợp lệ.");
    }
    else if (kiemTraDiem0(toan) == false || kiemTraDiem0(ly) == false || kiemTraDiem0(hoa) == false ) {
        document.getElementById("ketQua1").innerHTML = "Thí sinh đã trượt vì có môn điểm bằng 0";
    }
    else if (kq(tong, fp)) {
        document.getElementById("ketQua1").innerHTML = "Thí sinh đã đậu. Điểm của thí sinh là: " + tong;
    }
    else{
        document.getElementById("ketQua1").innerHTML = "Thí sinh đã trượt. Điểm của thí sinh là: " + tong;
    }

}
document.getElementById("calc1").onclick = tuyenSinh;

/**  BÀI 1
Khối 1: Input
      name, kw 

 Khối 2: Các bước xử lý
     B1: Lấy giá trị từ form khi người dùng click button
       + Tạo hàm tienDien
     B2: Trong hàm tienDien
       + DOM tới thẻ cần lấy dữ liệu của form và lấy value
     B3: Lập công thức và kiểm tra điều kiện
       Nếu kw 
 Khối 3: Thông báo output
       tongTien
*/