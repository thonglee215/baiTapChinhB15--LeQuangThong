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
       + Tạo hàm tinhTien
       + Tạo hàm tienDien
     
       B2: Trong hàm tinhTien, lập công thức và kiểm tra điều kiện
       50kw đầu => tongTien = 500 * kw sử dụng
       50kw kế => tongTien = 500 * 50 + 650 * (kw sử dụng - 50)
       100kw kế => tongTien = 500 * 50 + 650 * 50  + 850 * (kw sử dụng - 100)
       150kw kế => tongTien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 (kw sử dụng - 200)
       còn lại => tongTien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (kw sử dụng - 350)
     
       B3: Trong hàm tienDien 
       + DOM tới thẻ cần lấy dữ liệu của form và lấy value
       + Gọi hàm tinhTien và áp các giá trị vào
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
        return gia_50_dau * 50 + gia_50_ke * 50 + gia_100_ke * 100 + gia_150_ke * (kw - 200);
    }
    else if (kw > 350) {
        return gia_50_dau * 50 + gia_50_ke * 50 + gia_100_ke * 100 + gia_150_ke * 150 + gia_con_lai * (kw - 350);
    } else {
        alert("Số chữ điện không hợp lệ");
        return;
    }
}

function tienDien() {
    var name = document.getElementById("hoVaTen1").value;
    var kw = Number(document.getElementById("soChuDien").value);
    tongTien = 0;
    tongTien = tinhTien(kw, KW_50_DAU, KW_50_KE, KW_100_KE, KW_150_KE, KW_CON_LAI);
    document.getElementById("ketQua2").innerHTML = "Tổng tiền điện của khách hàng " + name + " trong tháng này là: " + tongTien.toLocaleString() + " VNĐ"
}
document.getElementById("calc2").onclick = tienDien;

/**  BÀI 3
Khối 1: Input
      name, thuNhap, soNguoi

 Khối 2: Các bước xử lý
     B1: 
       + Tạo hàm tinhThue
       + Tạo hàm tienThue

     B2: Trong hàm tinhThue, lập công thức và kiểm tra điều kiện
       Nếu tongThuNhap đến 60 => tongThue = tongThuNhap * 5%
       Nếu tongThuNhap trên 60 đến 120 => tongThue = tongThuNhap * 10%
       Nếu tongThuNhap trên 120 đến 210 => tongThue = tongThuNhap * 15%
       Nếu tongThuNhap trên 210 đến 384 => tongThue = tongThuNhap * 20%
       Nếu tongThuNhap trên 384 đến 624 => tongThue = tongThuNhap * 25%
       Nếu tongThuNhap trên 624 đến 960 => tongThue = tongThuNhap * 30%
       Nếu tongThuNhap trên 960 => tongThue = tongThuNhap * 35%
     
     B3: Trong hàm tienThue 
       + DOM tới thẻ cần lấy dữ liệu của form và lấy value
       + tongThuNhap = thuNhap - 4 - soNguoi * 1.6
       + Gọi hàm tongThuNhap, tinhThue và áp các giá trị vào
 Khối 3: Thông báo output
       name, tienThue
*/
var DEN_60 = 0.05;
var TU_60__120 = 0.1;
var TU_120__210 = 0.15;
var TU_210__384 = 0.2;
var TU_384__624 = 0.25;
var TU_624__960 = 0.3;
var TREN_960 = 0.35;

function tinhThue(tongThuNhap, den60, tu60_120, tu120_210, tu210_384, tu384_624, tu624_960, tren960) {

    if (tongThuNhap <= 60e+6) {
        return tongThuNhap * den60;

    } else if (tongThuNhap > 60e+6 && tongThuNhap <= 120e+6) {
        return tongThuNhap * tu60_120;
    }
    else if (tongThuNhap > 120e+6 && tongThuNhap <= 210e+6) {
        return tongThuNhap * tu120_210;
    }
    else if (tongThuNhap > 210e+6 && tongThuNhap <= 384e+6) {
        return tongThuNhap * tu210_384;
    }
    else if (tongThuNhap > 384e+6 && tongThuNhap <= 624e+6) {
        return tongThuNhap * tu384_624;
    }
    else if (tongThuNhap > 624e+6 && tongThuNhap <= 960e+6) {
        return tongThuNhap * tu624_960;
    }
    else if (tongThuNhap > 960e+6) {
        return tongThuNhap * tren960;
    }

}

function tienThue() {
    var name = document.getElementById("hoVaTen2").value;
    var tongThuNhap = Number(document.getElementById("thuNhap").value);
    var soNguoi = document.getElementById("soNguoi").value
    var tongThuNhap = tongThuNhap - 4e+6 - soNguoi * 1.6e+6
    var tienThue = tinhThue(tongThuNhap, DEN_60, TU_60__120, TU_120__210, TU_210__384, TU_384__624, TU_624__960, TREN_960);
    if (tienThue >= 0) {
        document.getElementById("ketQua3").innerHTML = "Họ và tên: " + name + "; Thuế thu nhập cá nhân: " + tienThue.toLocaleString() + " VNĐ"
    } else {
        alert("Thu nhập không hợp lệ hoặc bạn có quá nhiều người phụ thu");
    }
}
document.getElementById("calc3").onclick = tienThue;

/**  BÀI 4
Khối 1: Input
      khachHang, maKh, soKenh, soKetNoi

 Khối 2: Các bước xử lý
     B1: 
       + Tạo hàm tinhHoaDon
       + Tạo hàm tongHoaDon

     B2: Trong hàm tinhHoaDon, lập công thức và kiểm tra điều kiện
        Nếu soKetNoi <= 10 => tongHoaDon = hoaDon + dichVu + caoCap + soKenh
        Ngược lại => tongHoaDon = hoaDon + dichVu + dichVuPlus * (ketNoi - 10) + caoCap * soKenh
     
        B3: Trong hàm tongHoaDon 
       + DOM tới thẻ cần lấy dữ liệu của form và lấy value
       + Lập công thức và kiểm tra điều kiện
        Nếu khachHang = "Nhà dân" => Gọi hàm tinhHoaDon và nhập dữ liệu của Nhà dân như đã khai báo
        Nếu khachHang = "Doanh nghiệp" => Gọi hàm tinhHoaDon và nhập dữ liệu của Doanh nghiệp như đã khai báo   
        Nếu không phải 2 đối tượng trên => alert mời nhập lại

Khối 3: Thông báo output
    maKh, tongHoaDon
*/


var HOADON_ND = 4.5;
var DICHVU_ND = 20.5;
var CAOCAP_ND = 7.5;
var HOADON__DN = 15;
var DICHVU_DN = 75;
var DICHVU_PLUS = 5;
var CAOCAP_DN = 50;

document.getElementById("khachHang").addEventListener("change", hienSoKetNoi);

        function hienSoKetNoi() {
            var x = document.getElementById("khachHang");
            if (x.value == "Doanh nghiệp") {
              document.getElementById("soKetNoi").style.display = "block";
            } else {
              document.getElementById("soKetNoi").style.display = "none";
              document.getElementById("soKetNoi").value = 0;
            }
        }

function tinhHoaDon(hoaDon, dichVu, ketNoi, dichVuPlus, caoCap, soKenh) {
    if (ketNoi <= 10) {
        return hoaDon + dichVu + caoCap * soKenh;
    }
    else if (ketNoi > 10) {
        return hoaDon + dichVu + dichVuPlus * (ketNoi - 10) + caoCap * soKenh;
    }
}

function tongHoaDon() {
    var khachHang = document.getElementById("khachHang").value;
    var maKh = document.getElementById("maKH").value;
    var soKenh = document.getElementById("soKenh").value;
    var soKetNoi = document.getElementById("soKetNoi").value;

    switch (khachHang) {
        case "Nhà dân":
            var tongHoaDon = tinhHoaDon(HOADON_ND, DICHVU_ND, soKetNoi, DICHVU_PLUS, CAOCAP_ND, soKenh);
            break;

        case "Doanh nghiệp":
            var tongHoaDon = tinhHoaDon(HOADON__DN, DICHVU_DN, soKetNoi, DICHVU_PLUS, CAOCAP_DN, soKenh);
            break;

        case "Loại khách hàng":
            alert("Mời nhập loại khách hàng");
            break;
    }

    document.getElementById("ketQua4").innerHTML = "Mã khách hàng: " + maKh + " ; Tiền cáp: " + "$" + tongHoaDon.toLocaleString();
}
document.getElementById("calc4").onclick = tongHoaDon;








