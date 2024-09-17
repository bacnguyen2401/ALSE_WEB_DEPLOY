var html_thead = "";
var html_tbody = "";
var ajaxGet5;
var d;
$(document).ready(function () {
    $("#btn-tracuu").click(function () {
        if (
            $("#taikhoan")
                .val()
                .trim() != "" &&
            $("#matkhau")
                .val()
                .trim() != "" &&
            $("#cmt")
                .val()
                .trim() != "" &&
            dmy2ymd(
                $("#ngaysinh")
                    .val()
                    .trim()
            ) != "" &&
            $("#maso")
                .val()
                .trim() != ""
        ) {
            ajaxGet5 = {
                get1: $("#taikhoan")
                    .val()
                    .trim(),
                get2: $("#matkhau")
                    .val()
                    .trim(),
                get3: $("#cmt")
                    .val()
                    .trim(),
                get4: dmy2ymd(
                    $("#ngaysinh")
                        .val()
                        .trim()
                ),
                get5: $("#maso")
                    .val()
                    .trim()
            };
            //alert(ajaxGet5);
            jsonData = JSON.stringify({ ajaxGet5 });
            $.ajax({
                type: "POST",
                url: "Default.aspx/TraCuu",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    // console.log(d);
                    if (d == null || d.Id == null) {
                        alert("Thông tin không đúng hoặc không có dữ liệu để tra cứu");
                    } else {
                        $("#div-ketqua")
                            .find(".panel-title")
                            .text("Chi tiết lương tháng " + d.Thang + "/" + d.Nam);
                        $("#td-TenNhanVien").text(d.TenNhanVien);
                        $("#td-ChucDanhQuyChuan").text(d.ChucDanhQuyChuan);
                        $(".td-TongThuNhap").text(numberWithCommas(d.TongThuNhap));
                        $("#td-LuongChuyenKhoanLan1").text(
                            numberWithCommas(numberWithCommas(d.LuongChuyenKhoanLan1))
                        );
                        $("#td-LuongConLaiDuocNhan").text(
                            numberWithCommas(numberWithCommas(d.LuongConLaiDuocNhan))
                        );
                        $("#td-ChucDanhQuyChuan").text(d.ChucDanhQuyChuan);
                        $("#td-NgayCongChuan").text(d.NgayCongChuan);
                        $("#td-CongThoiGian").text(d.CongThoiGian);
                        $("#td-CongDaoTao").text(d.CongDaoTao);
                        $("#td-CongHocViec").text(d.CongHocViec);
                        $("#td-CongThuViec").text(d.CongThuViec);
                        $("#td-LamViecNgayNghi").text(d.LamViecNgayNghi);
                        $("#td-LamViecNgayLe").text(d.LamViecNgayLe);
                        $("#td-HoiHopCongTac").text(d.HoiHopCongTac);
                        $("#td-HocTap").text(d.HocTap);
                        $("#td-NghiPhep").text(d.NghiPhep);
                        $("#td-NghiBu").text(d.NghiBu);
                        $("#td-NghiLe").text(d.NghiLe);
                        $("#td-NghiViec_NgungViecHuongLuong100").text(d.NghiViec_NgungViecHuongLuong100);
                        $("#td-NghiKhongLuong").text(d.NghiKhongLuong);
                        $("#td-TongCongNgay").text(d.TongCongNgay);
                        $("#td-TongCongDem").text(d.TongCongDem);
                        $("#td-TongCong").text(d.TongCong);
                        $("#td-HeSoChatLuong").text(numberWithCommas(d.HeSoChatLuong));
                        $("#td-LuongDongBaoHiem").text(numberWithCommas(d.LuongDongBaoHiem));
                        $("#td-LuongThucTe").text(numberWithCommas(d.LuongThucTe));
                        $("#td-LuongThemGio").text(numberWithCommas(d.LuongThemGio));
                        $("#td-LuongKhac").text(numberWithCommas(d.LuongKhac));
                        $("#td-PhuCap").text(numberWithCommas(d.PhuCap));
                        $("#td-TruyLinh").text(numberWithCommas(d.TruyLinh));
                        $("#td-TruyThu").text(numberWithCommas(d.TruyThu));
                        $("#td-TongThuNhap").text(numberWithCommas(d.TongThuNhap));
                        $("#td-PhuCapAnCaChiTienMat").text(numberWithCommas(d.PhuCapAnCaChiTienMat));
                        $("#td-LuongChuyenKhoanLan1").text(numberWithCommas(d.LuongChuyenKhoanLan1));
                        $("#td-KhauTruBaoHiem").text(numberWithCommas(d.KhauTruBaoHiem));
                        $("#td-KhauTruThueTNCN").text(numberWithCommas(d.KhauTruThueTNCN));
                        $("#td-KhauTruDoanPhi").text(numberWithCommas(d.KhauTruDoanPhi));
                        $("#td-LuongConLaiDuocNhan").text(numberWithCommas(d.LuongConLaiDuocNhan));                        
                        $("#p-GhiChu").text(d.GhiChu);

                        $(".td-luong").each(function () {
                            if ($(this).text() != "0") {
                                $(this).addClass("text-highlight");
                            }
                        })

                        $("#div-nhapthongtin").remove();
                        $("#div-ketqua").show();
                    }
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                    alert("Có lỗi xảy ra! Vui lòng liên lạc với nhân viên IT.");
                }
            }).done(function () {
                // $(".input-clear").val("");
            });
            /// END AJAX LOAD
        } else {
            alert("Vui lòng nhập đủ thông tin");
        }
    });
});
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // ví dụ: var x = 1234567 => numberTextWithCommas(x) = "1,234,567"
}
function dmy2ymd(dmy) {
    var ymd;
    if (dmy != null && $.trim(dmy) != "") {
        ymd = dmy.split("/")[2] + "/" + dmy.split("/")[1] + "/" + dmy.split("/")[0];
    } else {
        ymd = "";
    }

    return ymd;
}