var html_thead = "";
var html_tbody = "";
var ajaxGet;
var d;
var currentDate;
var ctc_tong_thoigianlamviec_ngay;
var ctc_tong_thoigianlamviec_dem;
var ctc_tong_thoigianlamviec;
var ctc_tong_cong_ngay;
var ctc_tong_cong_dem;
var ctc_tong_cong;
var ctc_tong_nghingay;
var ctc_tong_nghidem;
var ctc_thang = "";
var ctc_nam = "";
var tsc_username = "";
$(document).ready(function () {
    fncChange();
    fncClick();
    fncLoad();
});

function fncLoad() {

    var gdate = new Date();
    $("#select-ctc-thang-show").val(gdate.getMonth() + 1);
    $("#select-ctc-nam-show").val(gdate.getFullYear());
    var thang = $("#select-ctc-thang-show").val();
    var nam = $("#select-ctc-nam-show").val();
    LoadTable(thang, nam);
    tsc_username = $("#username").attr("userid");

    if (tsc_username == "1" || tsc_username == "12" || tsc_username == "94") {
        $("#btn-ctc-thenchamcong").show();
    };
}

function fncChange() {

}

function fncClick() {
    $("#btn_Loc").click(function () {
        var gdate = new Date();
        var thang = $("#select-ctc-thang-show").val();
        var nam = $("#select-ctc-nam-show").val();
        LoadTable(thang, nam);
    });

    fncChiTietCong();
    fncThemSuaCong();
}

function LoadTable(thang, nam) {
    _header = ["STT", "Loại chấm công", "Ngày giờ chấm công", "Tên Nhân Viên"];

    ajaxGet2 = { "get1": thang, "get2": nam };
    jsonData = JSON.stringify({ ajaxGet2 });
    html_body = "";
    //console.log(jsonData);
    $.ajax({
        type: "POST",
        url: "BangChamCongLoi.aspx/reChamCongLoi",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            var cc_Id = 0;
            var cc_NhanVien;
            var cc_LoaiChamCong;
            var cc_NgayChamCong;
            var cc_TenNhanVien;
            var count = 0;
            var html_table1 = "";
            $.each(d, function (key, val) {
                html_header = returnHTML(_header);

                if (key == 0) {
                    cc_Id = val.ChamCongId;
                    cc_NhanVienId = val.NhanVienId;
                    cc_LoaiChamCong = val.LoaiChamCong;
                    cc_NgayChamCong = val.NgayGioChamCong;
                    cc_TenNhanVien = val.TenNhanVien;

                } else {
                    if (cc_NhanVienId != val.NhanVienId) {
                        cc_Id = 0;
                        cc_NhanVien = "";
                        cc_LoaiChamCong = "";
                        cc_NgayChamCong = "";
                        cc_TenNhanVien = "";

                        cc_Id = val.ChamCongId;
                        cc_NhanVienId = val.NhanVienId;
                        cc_LoaiChamCong = val.LoaiChamCong;
                        cc_NgayChamCong = val.NgayGioChamCong;
                        cc_TenNhanVien = val.TenNhanVien;
                    } else {
                        if ((parseInt(cc_LoaiChamCong) + parseInt(val.LoaiChamCong)) != 1) {
                            count++;
                            html_table1 += "<tr>";
                            html_table1 += "<td>" + count + "</td>";
                            html_table1 += "<td>" + (val.LoaiChamCong == "0" ? "Vào" : "Ra") + "</td>";
                            html_table1 += "<td>" + convertDate(val.NgayGioChamCong)[5] + "</td>";
                            html_table1 += "<td class=\"click-td\" idNhanVien=\"" + val.NhanVienId + "\">" + val.TenNhanVien + "</td>";
                            html_table1 += "</tr>";

                            cc_Id = val.ChamCongId;
                            cc_NhanVienId = val.NhanVienId;
                            cc_LoaiChamCong = val.LoaiChamCong;
                            cc_NgayChamCong = val.NgayGioChamCong;
                            cc_TenNhanVien = val.TenNhanVien;
                        } else {
                            cc_Id = val.ChamCongId;
                            cc_NhanVienId = val.NhanVienId;
                            cc_LoaiChamCong = val.LoaiChamCong;
                            cc_NgayChamCong = val.NgayGioChamCong;
                            cc_TenNhanVien = val.TenNhanVien;
                        }
                    }
                }


            });

            html_table = "<table id=\"tbl-chamcongloi\" class=\"table table-bordered\">";
            html_table += "<thead>";
            html_table += " </thead>";
            html_table += "<tbody>";
            html_table += "</tbody >";
            html_table += "</table>";
            $("#div-chamcongloi-data-table").empty()
                .append(html_table);

            $("#tbl-chamcongloi thead").empty();
            $("#tbl-chamcongloi thead").append(html_header);
            $("#tbl-chamcongloi tbody").empty();
            $("#tbl-chamcongloi tbody").append(html_table1);

            $("#tbl-chamcongloi").dataTable({
                "responsive": true,
                "paging": false,
                "retrieve": true,
            });
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
}




// return header
function returnHTML(_items) {
    var html_temp = "";
    html_temp += "<tr>";
    var i = 0;
    var temp_class = "";
    _items.forEach(function (_item) {
        if (i == 1 || i == 2) {
            temp_class = "class=\"text-align-left\"";
        } else if (i == 7) {
            temp_class = "class=\"text-soluong\"";
        } else {
            temp_class = "";
        }
        html_temp += "<td " + temp_class + ">" + _item + "</td>";
        i = i + 1;
    })
    html_temp += "</tr>";
    return html_temp;
}

function fncChiTietCong() {
    $(".container").on("click", ".click-td", function () {
        var gdate = new Date();
        fncLoadChiTietCong(gdate.getMonth() + 1, gdate.getFullYear(), $(this).attr("idnhanvien"));
        $("#span-chitietcong-thang").text((gdate.getMonth() + 1).toString() + " ");
        $("#span-chitietcong-nam").text(gdate.getFullYear());
        $("#span-chitietcong-tennhanvien").text($(this).text().toUpperCase() + " ");
        $("#select-ctc-thang").val(gdate.getMonth() + 1);
        $("#select-ctc-nam").val(gdate.getFullYear());
        $("#btn-ctc-xemchamcong").attr("nhanvienid", $(this).attr("idnhanvien"));
        $("#btn-ctc-thenchamcong").attr("nhanvienid", $(this).attr("idnhanvien"));
        $("#btn-ctc-thenchamcong").attr("ngaychamcong", gdate.getFullYear() + "/" + (gdate.getMonth() + 1) + "/" + "1");


        $("#myModalChiTietCong").modal("show");
    })
    $("#btn-ctc-xemchamcong").click(function () {
        fncLoadChiTietCong($("#select-ctc-thang").val(), $("#select-ctc-nam").val(), $(this).attr("nhanvienid"));
        $("#span-chitietcong-thang").text($("#select-ctc-thang").val() + " ");
        $("#span-chitietcong-nam").text($("#select-ctc-nam").val());
    })
}


function fncLoadChiTietCong(ctc_thang, ctc_nam, ctc_nhanvienid) {
    //console.log(ctc_thang, ctc_nam, ctc_nhanvienid);
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet4 = { "get1": ctc_thang, "get2": ctc_nam, "get3": ctc_nhanvienid, "get4": "" };
    jsonData = JSON.stringify({ ajaxGet4 });
    $.ajax({
        type: "POST",
        url: "TrangThai.aspx/LoadChiTietCong",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            // console.log(d);
            var html_modal_tbody = ""; var monthCheck; var ctc_ChamCongId; var ctc_LoaiChamCong; var ctc_NgayGioChamCong;
            var html_modal_CaLamViec = "";
            var html_modal_Vao = "";
            var html_modal_Ra = "";

            var html_modal_ThoiGianLamViec = "";
            var html_modal_ThoiGianNghi = "";
            var html_modal_Cong = "";
            var html_modal_GhiChu = "";
            var countLastMonth = 0;
            var countCurrentMonth = 0;
            var countNextMonth = 0;
            ctc_tong_thoigianlamviec_ngay = 0;
            ctc_tong_thoigianlamviec_dem = 0;
            ctc_tong_thoigianlamviec = 0;
            ctc_tong_cong_ngay = 0;
            ctc_tong_cong_dem = 0;
            ctc_tong_cong = 0;
            ctc_tong_nghingay = 0;
            ctc_tong_nghidem = 0;
            var dateNextMonth = new Date(ctc_nam, ctc_thang, 1, 0, 0, 0);
            var dateCurrenttMonth = new Date(ctc_nam, ctc_thang - 1, 1, 0, 0, 0);
            $.each(d.chiTietCongs, function (index, item) {
                monthCheck = (new Date(item.NgayGioChamCong)).getMonth() + 1;

                if ((new Date(item.NgayGioChamCong)).getDate() == 30) {
                    console.log(28);
                }
                if (fncDiff2Date(item.NgayGioChamCong, dateCurrenttMonth) <= 0 && countNextMonth < 1) {
                    if (countCurrentMonth == 0) { // dòng đầu tiên
                        if (ctc_LoaiChamCong == 0) { // nếu ngày chấm công cuối của tháng trước ra chấm VÀO(0)
                            html_modal_Vao = "<td class=\"td-cc\"  nhanvienid=\"" + ctc_nhanvienid + "\" loaichamcong=\"0\" chamcongid=\"" + ctc_ChamCongId + "\" ngaygiochamcong=\"" + ctc_NgayGioChamCong + "\">" + convertDate(ctc_NgayGioChamCong)[3] + "</td>";
                            html_modal_CaLamViec += "<td>" + convertDate(ctc_NgayGioChamCong)[4];

                            if (item.LoaiChamCong == 1) { // nếu loại chấm công ca thì hiển thị thành 1 ca làm việc
                                html_modal_CaLamViec += fncGopNgay(convertDate(ctc_NgayGioChamCong)[4], convertDate(item.NgayGioChamCong)[4]) + "</td>";
                                html_modal_Ra = "<td class=\"td-cc\"  nhanvienid=\"" + ctc_nhanvienid + "\" loaichamcong=\"1\" chamcongid=\"" + item.ChamCongId + "\" ngaygiochamcong=\"" + item.NgayGioChamCong + "\">" + convertDate(item.NgayGioChamCong)[3] + "</td>";
                                html_modal_ThoiGianLamViec = fncTinhGioLamViec((ctc_nam + "/" + ctc_thang + "/" + "1"), item.NgayGioChamCong); // thay thế ctc_NgayGioChamCong = 0h tháng này
                                html_modal_ThoiGianNghi = "";
                                html_modal_Cong = "";
                                html_modal_GhiChu = "<td>" + "</td>";
                            } else { // trước hợp chấm công lỗi vì 2 chấm công vào liên tiếp
                                html_modal_CaLamViec += " - " + "?" + "</td>";
                                html_modal_Ra = "<td class=\"td-cc\"  nhanvienid=\"" + ctc_nhanvienid + "\" loaichamcong=\"1\" ngaychamcong=\"" + ctc_NgayGioChamCong + "\" chamcongid=\"0\" >" + "?" + "</td>";
                                html_modal_ThoiGianLamViec = "<td>" + "0" + "</td>" + "<td>" + "0" + "</td>" + "<td>" + "0" + "</td>";
                                html_modal_ThoiGianNghi = "<td>" + "</td>" + "<td>" + "</td>";
                                html_modal_Cong = "<td>" + "</td>" + "<td>" + "</td>" + "<td>" + "</td>";
                                html_modal_GhiChu = "<td class=\"td-cc-ghichu\">" + "Lỗi" + "</td>";
                            }
                            html_modal_tbody += "<tr>" + html_modal_CaLamViec + html_modal_Vao + html_modal_Ra + html_modal_ThoiGianLamViec + html_modal_ThoiGianNghi + html_modal_Cong + html_modal_GhiChu + "</tr>";

                            if (item.LoaiChamCong == 0) {
                                html_modal_CaLamViec = "<td>" + convertDate(item.NgayGioChamCong)[4];
                                html_modal_Vao = "<td class=\"td-cc\"  nhanvienid=\"" + ctc_nhanvienid + "\" loaichamcong=\"0\" chamcongid=\"" + item.ChamCongId + "\" ngaygiochamcong=\"" + item.NgayGioChamCong + "\">" + convertDate(item.NgayGioChamCong)[3] + "</td>";
                            }

                        } else { // nếu ngày chấm công cuối của tháng trước ra chấm RA(1) => không hiển thị tháng trước nữa
                            if (item.LoaiChamCong == 0) {
                                html_modal_CaLamViec = "<td>" + convertDate(item.NgayGioChamCong)[4];
                                html_modal_Vao = "<td class=\"td-cc\"  nhanvienid=\"" + ctc_nhanvienid + "\" loaichamcong=\"0\" chamcongid=\"" + item.ChamCongId + "\" ngaygiochamcong=\"" + item.NgayGioChamCong + "\">" + convertDate(item.NgayGioChamCong)[3] + "</td>";
                                if (index == d.chiTietCongs.length - 1) { // nếu là dòng cuối
                                    html_modal_CaLamViec += "  " + "</td>";
                                    html_modal_Ra = "<td>" + "</td>";
                                    html_modal_ThoiGianLamViec = "<td>" + "" + "</td>" + "<td>" + "" + "</td>" + "<td>" + "" + "</td>";
                                    html_modal_ThoiGianNghi = "<td>" + "</td>" + "<td>" + "</td>";
                                    html_modal_Cong = "<td>" + "</td>" + "<td>" + "</td>" + "<td>" + "</td>";
                                    html_modal_GhiChu = "<td class=\"td-cc-ghichu\">" + "Đang làm việc" + "</td>";
                                    html_modal_tbody += "<tr>" + html_modal_CaLamViec + html_modal_Vao + html_modal_Ra + html_modal_ThoiGianLamViec + html_modal_ThoiGianNghi + html_modal_Cong + html_modal_GhiChu + "</tr>";
                                }
                            } else {  //Thông báo không có chấm vào hoăc chấm sai loại chấm công
                                html_modal_CaLamViec = "<td>" + "?";
                                html_modal_CaLamViec += " - " + convertDate(item.NgayGioChamCong)[4] + "</td>";
                                html_modal_Vao = "<td class=\"td-cc\"  nhanvienid=\"" + ctc_nhanvienid + "\" loaichamcong=\"0\" chamcongid=\"0\" ngaychamcong=\"" + item.NgayGioChamCong + "\">" + "?" + "</td>";
                                html_modal_Ra = "<td class=\"td-cc\"  nhanvienid=\"" + ctc_nhanvienid + "\" loaichamcong=\"1\"  chamcongid=\"" + item.ChamCongId + "\" ngaygiochamcong=\"" + item.NgayGioChamCong + "\">" + convertDate(item.NgayGioChamCong)[3] + "</td>";
                                html_modal_ThoiGianLamViec = "<td>" + "0" + "</td>" + "<td>" + "0" + "</td>" + "<td>" + "0" + "</td>";
                                html_modal_ThoiGianNghi = "<td>" + "</td>" + "<td>" + "</td>";
                                html_modal_Cong = "<td>" + "</td>" + "<td>" + "</td>" + "<td>" + "</td>";
                                html_modal_GhiChu = "<td class=\"td-cc-ghichu\">" + "Lỗi" + "</td>";
                                html_modal_tbody += "<tr>" + html_modal_CaLamViec + html_modal_Vao + html_modal_Ra + html_modal_ThoiGianLamViec + html_modal_ThoiGianNghi + html_modal_Cong + html_modal_GhiChu + "</tr>";
                            }
                        }
                    } else { // nếu không phải dòng đầu tiên
                        //TODO: Xảy ra các trước hợp sau:
                        // ctc_LoaiChamCong == 0 && item.LoaiChamCong == 0 ==> Thông báo không chấm ra hoặc chấm sai loại chấm công
                        if (ctc_LoaiChamCong == 0 && item.LoaiChamCong == 0) {
                            html_modal_CaLamViec += " - " + "?" + "</td>";
                            html_modal_Ra = "<td class=\"td-cc\"  nhanvienid=\"" + ctc_nhanvienid + "\" loaichamcong=\"1\" chamcongid=\"0\" ngaychamcong=\"" + ctc_NgayGioChamCong + "\">" + "?" + "</td>";
                            html_modal_ThoiGianLamViec = "<td>" + "0" + "</td>" + "<td>" + "0" + "</td>" + "<td>" + "0" + "</td>";
                            html_modal_ThoiGianNghi = "<td>" + "</td>" + "<td>" + "</td>";
                            html_modal_Cong = "<td>" + "</td>" + "<td>" + "</td>" + "<td>" + "</td>";
                            html_modal_GhiChu = "<td class=\"td-cc-ghichu\">" + "Lỗi" + "</td>";
                            html_modal_tbody += "<tr>" + html_modal_CaLamViec + html_modal_Vao + html_modal_Ra + html_modal_ThoiGianLamViec + html_modal_ThoiGianNghi + html_modal_Cong + html_modal_GhiChu + "</tr>";

                            html_modal_CaLamViec = "<td>" + convertDate(item.NgayGioChamCong)[4];
                            html_modal_Vao = "<td class=\"td-cc\"  nhanvienid=\"" + ctc_nhanvienid + "\"  loaichamcong=\"0\" chamcongid=\"" + item.ChamCongId + "\" ngaygiochamcong=\"" + item.NgayGioChamCong + "\">" + convertDate(item.NgayGioChamCong)[3] + "</td>";
                            if (index == d.chiTietCongs.length - 1) { // nếu là dòng cuối
                                html_modal_CaLamViec += "  " + "</td>";
                                html_modal_Ra = "<td>" + "</td>";
                                html_modal_ThoiGianLamViec = "<td>" + "" + "</td>" + "<td>" + "" + "</td>" + "<td>" + "" + "</td>";
                                html_modal_ThoiGianNghi = "<td>" + "</td>" + "<td>" + "</td>";
                                html_modal_Cong = "<td>" + "</td>" + "<td>" + "</td>" + "<td>" + "</td>";
                                html_modal_GhiChu = "<td class=\"td-cc-ghichu\">" + "Đang làm việc" + "</td>";
                                html_modal_tbody += "<tr>" + html_modal_CaLamViec + html_modal_Vao + html_modal_Ra + html_modal_ThoiGianLamViec + html_modal_ThoiGianNghi + html_modal_Cong + html_modal_GhiChu + "</tr>";
                            }
                        }

                        // ctc_LoaiChamCong == 0 && item.LoaiChamCong == 1 ==> Chấm công đúng => đóng vòng chấm công
                        if (ctc_LoaiChamCong == 0 && item.LoaiChamCong == 1) {

                            html_modal_CaLamViec += fncGopNgay(convertDate(ctc_NgayGioChamCong)[4], convertDate(item.NgayGioChamCong)[4]) + "</td>";
                            html_modal_Ra = "<td class=\"td-cc\"  nhanvienid=\"" + ctc_nhanvienid + "\"  loaichamcong=\"1\" chamcongid=\"" + item.ChamCongId + "\" ngaygiochamcong=\"" + item.NgayGioChamCong + "\">" + convertDate(item.NgayGioChamCong)[3] + "</td>";

                            if (fncDiff2Date(item.NgayGioChamCong, dateNextMonth) <= 0) { // ngày cuối, nếu sang tháng mới thì tính công đến 12h đêm

                                html_modal_ThoiGianLamViec = fncTinhGioLamViec(ctc_NgayGioChamCong, dateNextMonth);
                                countNextMonth += 1;
                            } else {
                                html_modal_ThoiGianLamViec = fncTinhGioLamViec(ctc_NgayGioChamCong, item.NgayGioChamCong);
                            }
                            html_modal_ThoiGianNghi = "";
                            html_modal_Cong = "";
                            html_modal_GhiChu = "<td>" + "</td>";
                            html_modal_tbody += "<tr>" + html_modal_CaLamViec + html_modal_Vao + html_modal_Ra + html_modal_ThoiGianLamViec + html_modal_ThoiGianNghi + html_modal_Cong + html_modal_GhiChu + "</tr>";
                        }
                        // ctc_LoaiChamCong == 1 && item.LoaiChamCong == 1 ==> Thông báo không có chấm vào hoăc chấm sai loại chấm công

                        if (ctc_LoaiChamCong == 1 && item.LoaiChamCong == 1) {
                            html_modal_CaLamViec = "<td>" + "?";
                            html_modal_CaLamViec += " - " + convertDate(item.NgayGioChamCong)[4] + "</td>";
                            html_modal_Vao = "<td class=\"td-cc\"  nhanvienid=\"" + ctc_nhanvienid + "\" loaichamcong=\"0\" chamcongid=\"0\" ngaychamcong=\"" + item.NgayGioChamCong + "\">" + "?" + "</td>";
                            html_modal_Ra = "<td class=\"td-cc\"  nhanvienid=\"" + ctc_nhanvienid + "\" loaichamcong=\"1\"  chamcongid=\"" + item.ChamCongId + "\" ngaygiochamcong=\"" + item.NgayGioChamCong + "\">" + convertDate(item.NgayGioChamCong)[3] + "</td>";
                            html_modal_ThoiGianLamViec = "<td>" + "0" + "</td>" + "<td>" + "0" + "</td>" + "<td>" + "0" + "</td>";
                            html_modal_ThoiGianNghi = "<td>" + "</td>" + "<td>" + "</td>";
                            html_modal_Cong = "<td>" + "</td>" + "<td>" + "</td>" + "<td>" + "</td>";
                            html_modal_GhiChu = "<td class=\"td-cc-ghichu\">" + "Lỗi" + "</td>";
                            html_modal_tbody += "<tr>" + html_modal_CaLamViec + html_modal_Vao + html_modal_Ra + html_modal_ThoiGianLamViec + html_modal_ThoiGianNghi + html_modal_Cong + html_modal_GhiChu + "</tr>";
                        }
                        // ctc_LoaiChamCong == 1 && item.LoaiChamCong == 0 ==> Khởi tạo vòng chấm công mới
                        if (ctc_LoaiChamCong == 1 && item.LoaiChamCong == 0) {
                            html_modal_CaLamViec = "<td>" + convertDate(item.NgayGioChamCong)[4];
                            html_modal_Vao = "<td class=\"td-cc\"  nhanvienid=\"" + ctc_nhanvienid + "\"  loaichamcong=\"0\" chamcongid=\"" + item.ChamCongId + "\" ngaygiochamcong=\"" + item.NgayGioChamCong + "\">" + convertDate(item.NgayGioChamCong)[3] + "</td>";
                            if (index == d.chiTietCongs.length - 1) { // dòng cuối
                                html_modal_CaLamViec += "  " + "</td>";
                                html_modal_Ra = "<td>" + "</td>";
                                html_modal_ThoiGianLamViec = "<td>" + "" + "</td>" + "<td>" + "" + "</td>" + "<td>" + "" + "</td>";
                                html_modal_ThoiGianNghi = "<td>" + "</td>" + "<td>" + "</td>";
                                html_modal_Cong = "<td>" + "</td>" + "<td>" + "</td>" + "<td>" + "</td>";
                                html_modal_GhiChu = "<td class=\"td-cc-ghichu\">" + "Đang làm việc" + "</td>";
                                html_modal_tbody += "<tr>" + html_modal_CaLamViec + html_modal_Vao + html_modal_Ra + html_modal_ThoiGianLamViec + html_modal_ThoiGianNghi + html_modal_Cong + html_modal_GhiChu + "</tr>";
                            }
                        }
                    }
                    countCurrentMonth += 1;

                    //if (fncDiff2Date(item.NgayGioChamCong, moment([ctc_nam, parseInt(ctc_thang) - 1, "1", 0, 0, 0]).add(1, "M").format("YYYY/MM/DD")) < 0) {
                    //    countNextMonth += 1;
                    //    //console.log(item.NgayGioChamCong,moment([ctc_nam, ctc_thang, "1", 0, 0, 0]).add(1, "m"));
                    //}
                }

                ctc_ChamCongId = item.ChamCongId;
                ctc_LoaiChamCong = item.LoaiChamCong;
                ctc_NgayGioChamCong = item.NgayGioChamCong;
                if (fncDiff2Date(ctc_NgayGioChamCong, dateNextMonth) <= 0) {
                    countNextMonth += 1;
                }
            })
            ///! Tính tổng
            html_modal_tbody += "<tr class=\"font-weight-bold\">";
            html_modal_tbody += "<td colspan=\"3\">" + "TỔNG" + "</td>";

            html_modal_tbody += "<td>" + (ctc_tong_thoigianlamviec_ngay != 0 ? ctc_tong_thoigianlamviec_ngay.toFixed(2) : "") + "</td>";
            html_modal_tbody += "<td>" + (ctc_tong_thoigianlamviec_dem != 0 ? ctc_tong_thoigianlamviec_dem.toFixed(2) : "") + "</td>";
            html_modal_tbody += "<td>" + ctc_tong_thoigianlamviec.toFixed(2) + "</td>";
            html_modal_tbody += "<td>" + (ctc_tong_nghingay != 0 ? ctc_tong_nghingay : "") + "</td>";
            html_modal_tbody += "<td>" + (ctc_tong_nghidem != 0 ? ctc_tong_nghidem : "") + "</td>";
            html_modal_tbody += "<td>" + (ctc_tong_cong_ngay != 0 ? ctc_tong_cong_ngay.toFixed(2) : "") + "</td>";
            html_modal_tbody += "<td>" + (ctc_tong_cong_dem != 0 ? ctc_tong_cong_dem.toFixed(2) : "") + "</td>";
            html_modal_tbody += "<td>" + ctc_tong_cong.toFixed(2) + "</td>";
            html_modal_tbody += "<td>" + "</td>";
            html_modal_tbody += "</tr>";
            $("#span-tongcong-tieng").text(ctc_tong_cong.toFixed(2).toString() + " tiếng");
            $("#span-tongcong").text((ctc_tong_cong / 8).toFixed(2).toString() + " công");

            $("#tbl-chitietcong tbody").empty();
            $("#tbl-chitietcong tbody").append(html_modal_tbody);

            var html_chiTietCongLogs = "";
            var rctcl_noidung = "";
            $.each(d.chiTietCongLogs, function (index, item) {
                html_chiTietCongLogs += "<tr>";
                html_chiTietCongLogs += "<td>" + (index + 1) + "</td>";

                html_chiTietCongLogs += "<td>" + convertDate(item.NgayTaoSua)[2] + "</td>";
                html_chiTietCongLogs += "<td>" + item.TenNguoiTaoSua + "</td>";
                switch (item.NoiDung) {
                    case "Thêm":
                        rctcl_noidung = "<span class=\"color-blue\">Thêm</span> chấm công " + "<span class=\"color-blue\">" + (item.LoaiChamCong == "0" ? "vào" : "ra") + "</span>" + " ngày " + "<span class=\"color-red\">" + convertDate(item.NgayGioChamCong)[2] + "</span>";
                        break;
                    case "Sửa":
                        rctcl_noidung = "<span class=\"color-green\">Sửa</span> chấm công " + "<span class=\"color-blue\">" + (item.LoaiChamCongCu == "0" ? "vào" : "ra") + "</span>" + " ngày " + "<span class=\"color-red\">" + convertDate(item.NgayGioChamCongCu)[2] + "</span>"
                            + " thành chấm công " + "<span class=\"color-blue\">" + (item.LoaiChamCong == "0" ? "vào" : "ra") + "</span>" + " ngày " + "<span class=\"color-red\">" + convertDate(item.NgayGioChamCong)[2] + "</span>";
                        break;
                    case "Xóa":
                        rctcl_noidung = "<span class=\"color-red\">Xóa</span> chấm công " + "<span class=\"color-blue\">" + (item.LoaiChamCong == "0" ? "vào" : "ra") + "</span>" + " ngày " + "<span class=\"color-red\">" + convertDate(item.NgayGioChamCong)[2] + "</span>";
                        break;
                }
                html_chiTietCongLogs += "<td class=\"td-ctcl-noidung\">" + rctcl_noidung + "</td>";
                html_chiTietCongLogs += "<td>" + item.LyDo + "</td>";

                html_chiTietCongLogs += "</tr>";
            })
            $("#tbl-chitietcong-log tbody").empty();
            $("#tbl-chitietcong-log tbody").append(html_chiTietCongLogs);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
}
function fncThemSuaCong() {
    $("#btn-ctc-thenchamcong").click(function () {
        if (tsc_username == "1" || tsc_username == "12" || tsc_username == "94") {
            $("#input-tsc-ngaychamcong").val(convertDate($(this).attr("ngaychamcong"))[1])
            $("#input-tsc-giochamcong").val("08:00:00");
            $("#select-tsc-loaichamcong").val("0");
            $("#btn-tsc-xoa").attr("chamcongid", "0");
            $("#btn-tsc-luu").attr("chamcongid", "0");

            $("#btn-tsc-xoa").attr("nhanvienid", $(this).attr("nhanvienid"));
            $("#btn-tsc-luu").attr("nhanvienid", $(this).attr("nhanvienid"));
            $("#myModalThemSuaCong-Title").text("THÊM CHẤM CÔNG");
            $("#myModalThemSuaCong").modal("show");
        }

    })

    $("#tbl-chitietcong tbody").on("click", ".td-cc", function () {
        var tsc_chamcongid = $(this).attr("chamcongid");
        if (tsc_username == "1" || tsc_username == "12" || tsc_username == "94") {
            if (tsc_chamcongid != 0) { // get data chấm công từ database
                fncLoadThemSuaCong(tsc_chamcongid);
            }
            else {// thêm mới dựa vào ngày
                $("#input-tsc-ngaychamcong").val(convertDate($(this).attr("ngaychamcong"))[1])
                $("#input-tsc-giochamcong").val($(this).attr("loaichamcong") == "0" ? "08:00:00" : "17:00:00");
                $("#select-tsc-loaichamcong").val($(this).attr("loaichamcong"));
                $("#btn-tsc-xoa").attr("chamcongid", "0");
                $("#btn-tsc-luu").attr("chamcongid", "0");

                $("#btn-tsc-xoa").attr("nhanvienid", $(this).attr("nhanvienid"));
                $("#btn-tsc-luu").attr("nhanvienid", $(this).attr("nhanvienid"));
                $("#myModalThemSuaCong-Title").text("THÊM CHẤM CÔNG");
                $("#myModalThemSuaCong").modal("show");

            }
        } else {
            //alert("Bạn không có quyền làm việc này!" );
        }
    })

    $("#btn-tsc-xoa").click(function () {
        if (tsc_username == "1" || tsc_username == "12" || tsc_username == "94") {
            if ($(this).attr("chamcongid") != 0 && confirm("Bạn chắc chắn muốn xóa chấm công này?")) {
                fncLuuThemSuaCong("3"
                    , $(this).attr("nhanvienid")
                    , $(this).attr("chamcongid")
                    , $("#select-tsc-loaichamcong").val()
                    , dmy2ymd($("#input-tsc-ngaychamcong").val()) + " " + $("#input-tsc-giochamcong").val()
                    , $("#input-tsc-lydo").val());

                fncLoad();
            }
        } else {
            alert("Bạn không có quyền làm việc này!");
        }
    })
    $("#btn-tsc-luu").click(function () {
        if (tsc_username == "1" || tsc_username == "12" || tsc_username == "94") {
            fncLuuThemSuaCong(($(this).attr("chamcongid") == "0" ? "1" : "2")
                , $(this).attr("nhanvienid")
                , $(this).attr("chamcongid")
                , $("#select-tsc-loaichamcong").val()
                , dmy2ymd($("#input-tsc-ngaychamcong").val()) + " " + $("#input-tsc-giochamcong").val()
                , $("#input-tsc-lydo").val());
            fncLoad();

        } else {
            alert("Bạn không có quyền làm việc này!");
        }
    })
}
function fncLuuThemSuaCong(ltsc_action, ltsc_nhanvienid, ltsc_chamcongid, ltsc_loaichamcong, ltsc_ngaygiochamcong, ltsc_lydo) {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.

    ajaxGet6 = {
        "get1": ltsc_action
        , "get2": ltsc_nhanvienid
        , "get3": ltsc_chamcongid
        , "get4": ltsc_loaichamcong
        , "get5": ltsc_ngaygiochamcong
        , "get6": ltsc_lydo

    };
    jsonData = JSON.stringify({ ajaxGet6 });
    $.ajax({
        type: "POST",
        url: "TrangThai.aspx/CapNhatChamCong",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            console.log(d);
            var ltsc_thongbao = "";
            if (d == "ok") {
                switch (ltsc_action) {
                    case "1":
                        ltsc_thongbao = "Thêm mới thành công";
                        break;
                    case "2":
                        ltsc_thongbao = "Sửa thành công";
                        break;
                    case "3":
                        ltsc_thongbao = "Xóa thành công";
                        break;
                }
                fncLoadChiTietCong($("#select-ctc-thang").val(), $("#select-ctc-nam").val(), ltsc_nhanvienid);
            } else {
                ltsc_thongbao = "Bạn không có quyền làm việc này hoặc đã có lỗi xảy ra!";
            }

            $("#myModalThemSuaCong").modal("hide");
            alert(ltsc_thongbao);

        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}
function fncLoadThemSuaCong(ltsc_chamcongid) {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet4 = { "get1": "", "get2": "", "get3": "", "get4": ltsc_chamcongid };
    jsonData = JSON.stringify({ ajaxGet4 });
    $.ajax({
        type: "POST",
        url: "TrangThai.aspx/LoadChiTietCong",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = (responsive.d.chiTietCongs)[0];
            //console.log(d);
            $("#input-tsc-ngaychamcong").val(convertDate(d.NgayGioChamCong)[1])
            $("#input-tsc-giochamcong").val(convertDate(d.NgayGioChamCong)[3])
            $("#select-tsc-loaichamcong").val(d.LoaiChamCong);
            $("#btn-tsc-xoa").attr("chamcongid", d.ChamCongId);
            $("#btn-tsc-luu").attr("chamcongid", d.ChamCongId);

            $("#btn-tsc-xoa").attr("nhanvienid", d.NhanVienId);
            $("#btn-tsc-luu").attr("nhanvienid", d.NhanVienId);

            $("#myModalThemSuaCong-Title").text("SỬA CHẤM CÔNG(" + d.ChamCongId + ")");
            $("#btn-tsc-xoa").show();
            $("#myModalThemSuaCong").modal("show");
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}
function fncModalClose() {
    $("#myModalChiTietCong").on('hidden.bs.modal', function () {
        $("#tbl-chitietcong tbody").empty();
        $("#btn-ctc-xemchamcong").attr("nhanvienid", "0");
    })

    $("#myModalThemSuaCong").on('hidden.bs.modal', function () {
        $("#input-tsc-ngaychamcong").val("")
        $("#input-tsc-giochamcong").val("")
        $("#select-tsc-loaichamcong").val("0");
        $("#btn-tsc-luu").attr("nhanvienid", "0");
        $("#btn-tsc-luu").attr("chamcongid", "0");
        $("#btn-tsc-xoa").attr("nhanvienid", "0");
        $("#btn-tsc-xoa").attr("chamcongid", "0");
        $("#input-tsc-lydo").val("");
        $("#myModalThemSuaCong-Title").text("");
        $("#btn-tsc-xoa").hide();
        $('body').addClass('modal-open');
    })
}
function fncGopNgay(ngay1, ngay2) {
    var ngaygop = "";
    if (ngay1 == ngay2) {
        ngaygop = "";
    } else {
        ngaygop = " - " + ngay2;
    }
    return ngaygop;
}
function fncTinhGioLamViec(startdate, enddate) {
    /// <summary>
    /// Tính toán số ngày chênh lệch giữa 2 ngày bằng moment js
    /// Định dạng ngày của statdate và enddate là yyyy/MM/dd
    /// </summary>
    /// <param name="statdate" type="Date">Ngày bắt đầu</param>
    /// <param name="enddate">Ngày kết thúc</param>
    // console.log(startdate, enddate);
    if (fncDiff2Date(startdate, moment([ctc_nam, parseInt(ctc_thang) - 1, "1", 0, 0, 0]).format("YYYY/MM/DD")) > 0) {
        console.log(startdate, moment([ctc_nam, parseInt(ctc_thang), "1", 0, 0, 0]).format("YYYY/MM/DD"));
        startdate = ctc_nam + "/" + ctc_thang + "/" + "1";
    }
    if (fncDiff2Date(enddate, moment([ctc_nam, parseInt(ctc_thang) - 1, "1", 0, 0, 0]).add(1, "M").format("YYYY/MM/DD")) < 0) {
        enddate = moment([ctc_nam, parseInt(ctc_thang) - 1, "1", 0, 0, 0]).add(1, "M").format("YYYY/MM/DD");
    }
    var cangay = 0;
    var cadem = 0;
    var nghingay = 0;
    var nghidem = 0;
    var momentStartDate = moment(startdate);
    var momentEndDate = moment(enddate);
    var momentDate6 = moment([momentStartDate.format("YYYY"), parseInt(momentStartDate.format("MM")) - 1, momentStartDate.format("DD"), 6, 0, 0]);
    var momentNextDate9 = moment([momentStartDate.format("YYYY"), parseInt(momentStartDate.format("MM")) - 1, momentStartDate.format("DD"), 9, 0, 0]).add(1, "d");
    var momentNextDate6 = moment([momentStartDate.format("YYYY"), parseInt(momentStartDate.format("MM")) - 1, momentStartDate.format("DD"), 6, 0, 0]).add(1, "d");
    var momentDate22 = moment([momentStartDate.format("YYYY"), parseInt(momentStartDate.format("MM")) - 1, momentStartDate.format("DD"), 22, 0, 0]);
    var momentDate23 = moment([momentStartDate.format("YYYY"), parseInt(momentStartDate.format("MM")) - 1, momentStartDate.format("DD"), 23, 0, 0]);
    var momentDate12 = moment([momentStartDate.format("YYYY"), parseInt(momentStartDate.format("MM")) - 1, momentStartDate.format("DD"), 12, 0, 0]);
    var momentDate1330 = moment([momentStartDate.format("YYYY"), parseInt(momentStartDate.format("MM")) - 1, momentStartDate.format("DD"), 13, 30, 0]);
    var rThoiGianLamViec = "";
    var rThoiGianNghi = "";
    var rCong = "";

    //console.log(momentStartDate, momentDate6, momentNextDate6);
    //TODO: Các trường hợp sau:
    /// 1. momentStartDate >= 6h và momentEndDate < 22h =>> ca ngày = momentEndDate - momentStartDate
    if (momentStartDate >= momentDate6 && momentEndDate < momentDate22) {
        cangay = moment.duration(momentEndDate.diff(momentStartDate)).asHours();
        cadem = 0;
    }
    /// 2. momentStartDate < 6h và momentEndDate >= 6h và momentEndDate < 22h =>> ca ngày = momentEndDate - 6 và ca đêm = 6 - momentStartDate
    if (momentStartDate < momentDate6 && momentEndDate >= momentDate6 && momentEndDate < momentDate22) {
        cangay = moment.duration(momentEndDate.diff(momentDate6)).asHours();
        cadem = moment.duration(momentDate6.diff(momentStartDate)).asHours();
    }
    /// 3. momentStartDate >= 6h và momentEndDate < 6h sáng hôm sau =>> ca ngày = 22 - momentStartDate và ca đêm = momentEndDate - 22
    if (momentStartDate >= momentDate6 && momentStartDate < momentDate22 && momentEndDate >= momentDate22 && momentEndDate < momentNextDate6) {
        cangay = moment.duration(momentDate22.diff(momentStartDate)).asHours();
        cadem = moment.duration(momentEndDate.diff(momentDate22)).asHours();;
    }
    /// 3.1 momentStartDate >= 6h && momentStartDate < momentDate22và momentEndDate > 6h sáng hôm sau =>> ca ngày = 22 - momentStartDate  + momentEndDate - momentNextDate6 và ca đêm = momentEndDate - 22
    if (momentStartDate >= momentDate6 && momentStartDate < momentDate22 && momentEndDate >= momentNextDate6) { //TODO: có thể còn thiếu trường hợp làm đến 22 h ngày hôm sau
        cangay = moment.duration(momentDate22.diff(momentStartDate)).asHours() + moment.duration(momentEndDate.diff(momentNextDate6)).asHours();
        cadem = moment.duration(momentEndDate.diff(momentDate22)).asHours();;
    }
    /// 4. momentStartDate < 6h và momentEndDate > 22h =>> ca ngày = 16 và ca đêm = (6 - momentStartDate)  + (momentEndDate - 22)
    if (momentStartDate < momentDate6 && momentEndDate >= momentDate22) {//TODO: Cũng cần check lại ở đây
        cangay = 16;
        cadem = moment.duration(momentDate6.diff(momentStartDate)).asHours() + moment.duration(momentEndDate.diff(momentDate22)).asHours();
    }
    /// 5. momentStartDate >= 22h và momentEndDate < 6h =>>  ca đêm = momentEndDate - momentStartDate
    if (momentStartDate >= momentDate22 && momentEndDate < momentNextDate6) {
        cangay = 0;
        cadem = moment.duration(momentEndDate.diff(momentStartDate)).asHours();
    }
    /// 6. momentStartDate >= 22h và momentEndDate > 6h ngày hôm sau =>>  ca đêm = 6 - momentStartDate và ca ngày = momentEndDate - 6
    if (momentStartDate >= momentDate22 && momentEndDate >= momentNextDate6) {
        cangay = moment.duration(momentEndDate.diff(momentNextDate6)).asHours();
        cadem = moment.duration(momentNextDate6.diff(momentStartDate)).asHours();
    }

    /// 8. momentStartDate < 22h và momentEndDate > 6h =>> ca ngày = (22 - momentStartDate) + (momentEndDate - 6) và ca đêm = 8
    if (momentStartDate >= momentDate6 && momentStartDate < momentDate22 && momentEndDate >= momentNextDate6) {
        cangay = moment.duration(momentDate22.diff(momentStartDate)).asHours() + moment.duration(momentEndDate.diff(momentNextDate6)).asHours();
        cadem = 8;
    }
    /// 9. momentStartDate < 6h và momentEndDate < 6h và momentEndDate < 22h =>> ca ngày = 0 và ca đêm = momentEndDate - momentStartDate
    if (momentStartDate < momentDate6 && momentEndDate < momentDate6) {
        cangay = 0;
        cadem = moment.duration(momentEndDate.diff(momentStartDate)).asHours();
    }
    if (momentStartDate < momentDate12 && momentEndDate >= momentDate1330) {
        nghingay = 1;
    }
    if (momentStartDate < momentDate22 && momentEndDate >= momentDate23) {
        nghidem = 1;
        if (momentEndDate >= momentNextDate9) {
            nghingay += 1;
        }
    }
    // trường hợp ca làm việc từ 9 tiếng trở lên và không vào thời gian nghỉ sẽ bị trừ 1 tiếng
    if (nghingay == 0 && nghidem == 0 && (cangay + cadem) >= 9) {
        if (cangay >= 1) {
            nghingay = 1;
        } else {
            nghidem = 1;
        }
    }

    /// thời gian nghỉ

    rThoiGianLamViec = "<td>" + (cangay != 0 ? cangay.toFixed(2).toString() : "") + "</td>";
    rThoiGianLamViec += "<td>" + (cadem != 0 ? cadem.toFixed(2).toString() : "") + "</td>";
    rThoiGianLamViec += "<td>" + (cangay + cadem).toFixed(2).toString() + "</td>";
    rThoiGianNghi = "<td>" + (nghingay != 0 ? nghingay : "") + "</td>" + "<td>" + (nghidem != 0 ? nghidem : "") + "</td>";
    rCong = "<td>" + (cangay != 0 ? (cangay - nghingay).toFixed(2).toString() : "") + "</td>";
    rCong += "<td>" + (cadem != 0 ? (cadem - nghidem).toFixed(2).toString() : "") + "</td>";
    rCong += "<td>" + (cangay + cadem - nghingay - nghidem).toFixed(2).toString() + "</td>";
    ctc_tong_thoigianlamviec_ngay += cangay;
    ctc_tong_thoigianlamviec_dem += cadem;
    ctc_tong_thoigianlamviec += cangay + cadem;

    ctc_tong_nghingay += nghingay;
    ctc_tong_nghidem += nghidem;
    ctc_tong_cong_ngay += cangay - nghingay;
    ctc_tong_cong_dem += cadem - nghidem;
    ctc_tong_cong += cangay + cadem - nghingay - nghidem;

    return rThoiGianLamViec + rThoiGianNghi + rCong;
}