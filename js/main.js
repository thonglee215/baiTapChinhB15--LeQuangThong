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

function tuyenSinh() {
    var fp = Number(document.getElementById("diemChuan").value);
    var toan = Number(document.getElementById("diemToan").value);
    var ly = Number(document.getElementById("diemLy").value);
    var hoa = Number(document.getElementById("diemHoa").value);
    var zone = document.getElementById("khuVuc").value;
    var obj = Number(document.getElementById("doiTuong").value);
    switch (zone) {
        case "A":
            zone = 2;
            break;
        case "B":
            zone = 1
            break;
        case "C":
            zone = 0.5
            break;
    }
    switch (obj) {
        case 1:
            obj = 2.5;
            break;
        case 2:
            obj = 1.5;
            break;
        case 3:
            obj = 1;
            break;
    }

    var ketQua =toan + ly + hoa + obj + zone;

    if (toan < 0 || ly < 0 || hoa < 0 || fp <= 0 || fp > 30) {;
        alert("Điểm thi phải lớn hơn hoặc bằng 0 Và điểm chuẩn phải lớn hơn 0 và bé hơn 30.");
    }
    else if (toan == 0 || ly == 0 || hoa == 0) {
        document.getElementById("ketQua1").innerHTML = "Thí sinh đã trượt vì có môn điểm bằng 0";
    }else if (ketQua >= fp) {
        document.getElementById("ketQua1").innerHTML = "Thí sinh đã đậu. Điểm của thí sinh là: " + ketQua;
    }
    else{
        document.getElementById("ketQua1").innerHTML = "Thí sinh đã trượt. Điểm của thí sinh là: " + ketQua;
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