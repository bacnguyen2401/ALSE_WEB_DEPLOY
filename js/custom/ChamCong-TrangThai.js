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
})

function fncLoad() {
    fncLoadThead();
    fncLoadTrangThaiChamCong();
    fncModalClose();
    tsc_username = $("#username").attr("userid");
    $(".input-tsc-ngay").mask("99/99/9999", { placeholder: "dd/MM/yyyy" });
    $(".input-tsc-gio").mask("99:99", { placeholder: "hh:mm" });

    if (tsc_username == "1" || tsc_username == "12" || tsc_username == "94" || tsc_username == "103") {
        $("#btn-ctc-thenchamcong").show();
    }
    $("#select-kpi-thang").val(dt.getMonth() + 1);
    $("#select-kpi-nam").val(dt.getFullYear());
}
function fncClick() {
    fncChiTietCong();
    fncThemSuaCong();
    $("#btn-kpi-noibai").click(function () {
        $(".btn-kpi-xem").attr("NBA");
        fncLoadKPI("NBA");
        $("#myModalKPI").modal("show");

    })
    $(".btn-kpi-xem").click(function () {
        fncLoadKPI($(this).attr("donvi"));
    })
}
function fncChange() {
}
function fncLoadThead() {
    html_thead = "";
    html_thead += "<tr>";
    html_thead += "<td class=\"td-sothutu\">#</td>";
    html_thead += "<td class=\"\">Họ Tên</td>";
    html_thead += "<td class=\"td-sodienthoai\">SĐT</td>";
    html_thead += "<td class=\"td-ngaysinh\">Ngày Sinh</td>";
    html_thead += "<td class=\"td-chucvu\">Chức Vụ</td>";
    html_thead += "<td class=\"td-trangthai\">Trạng Thái</td>";
    html_thead += "<td class=\"td-date\">Giờ Chấm Công</td>";
    html_thead += "<td class=\"td-thoigian\">TG</td>";
    html_thead += "</tr>";
    $(".tbl-chamcong-trangthai thead").empty();
    $(".tbl-chamcong-trangthai thead").append(html_thead);
}
function fncLoadTrangThaiChamCong() {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "TrangThai.aspx/LoadTrangThaiChamCong",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
             //console.log(d);
            currentDate = new Date();
            $.each(d, function (index, item) {
                switch (item.BoPhan) {
                    case "TL":
                        fncAddDataToTable("#tbl-trangthai-tailieu", item);
                        break;
                    case "KT":
                        fncAddDataToTable("#tbl-trangthai-khaithac", item);
                        break;
                    case "XN":
                        fncAddDataToTable("#tbl-trangthai-xenang", item);
                        break;
                    case "HXNB":
                        fncAddDataToTable("#tbl-trangthai-noibai", item);
                        break;
                    case "HNNB":
                        fncAddDataToTable("#tbl-trangthai-noibai", item);
                        break;
                    case "YP":
                        fncAddDataToTable("#tbl-trangthai-yenphong", item);
                        break;
                    case "VP":
                        fncAddDataToTable("#tbl-trangthai-vanphong", item);
                        break;
                    case "Tracing":
                        fncAddDataToTable("#tbl-trangthai-vanphong", item);
                        break;
                    case "THOIVU":
                        fncAddDataToTable("#tbl-trangthai-thoivu", item);
                    case "BOCXEP":
                        fncAddDataToTable("#tbl-trangthai-bocxep", item);
                        break;
                    case "TLTC":
                        fncAddDataToTable("#tbl-trangthai-trucca", item);
                        break;
                    case "HP":
                        fncAddDataToTable("#tbl-trangthai-haiphong", item);
                        break;
                    case "TN":
                        fncAddDataToTable("#tbl-trangthai-thainguyen", item);
                        break;
                    case "QM":
                        fncAddDataToTable("#tbl-trangthai-quangminh", item);
                        break;
                    case "HDVS":
                        fncAddDataToTable("#tbl-trangthai-handlingvsip", item);
                        break;
                }
                $(".div-row-trangthai").show();
            })
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}
function fncAddDataToTable(table_name, item) {
    html_tbody = "";
    html_tbody += "<tr>";
    html_tbody += "<td>" + ($(table_name + " tbody tr").length + 1) + "</td>";
    html_tbody += "<td class=\"td-hoten\" nhanvienid=\"" + item.NhanVienID + "\">" + item.TenNhanVien + "</td>";
    html_tbody += "<td class=\"td-sdt\">" + item.SDT + "</td>";
    html_tbody += "<td>" + convertDate(item.NgaySinh)[1] + "</td>";
    html_tbody += "<td>" + item.TenChucDanh + "</td>";
    //html_tbody += "<td>" + item.BoPhan              + "</td>";
    //html_tbody += "<td>" + item.NgayNghiViec        + "</td>";
    html_tbody += "<td " + (item.LoaiChamCongCuoi == "0" ? "class=\"td-working\"> WORKING" : "> OFF") + "</td>";
    html_tbody += "<td>" + convertDate(item.NgayGioChamCongCuoi)[2] + "</td>";
    html_tbody += "<td>" + fncDiff2Time(item.NgayGioChamCongCuoi, currentDate) + "</td>";
    html_tbody += "</tr>";
    $(table_name + " tbody").append(html_tbody);
}
function fncChiTietCong() {
    $(".tbl-chamcong-trangthai tbody").on("click", ".td-hoten", function () {
        var gdate = new Date();
        fncLoadChiTietCong(gdate.getMonth() + 1, gdate.getFullYear(), $(this).attr("nhanvienid"));
        $("#span-chitietcong-thang").text((gdate.getMonth() + 1).toString() + " ");
        $("#span-chitietcong-nam").text(gdate.getFullYear());
        $("#span-chitietcong-tennhanvien").text($(this).text().toUpperCase() + " ");
        $("#select-ctc-thang").val(gdate.getMonth() + 1);
        $("#select-ctc-nam").val(gdate.getFullYear());
        $("#btn-ctc-xemchamcong").attr("nhanvienid", $(this).attr("nhanvienid"));
        $("#btn-ctc-thenchamcong").attr("nhanvienid", $(this).attr("nhanvienid"));
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
            var dateNextMonth = new Date(ctc_nam, ctc_thang  , 1, 0, 0, 0);
            var dateCurrenttMonth = new Date(ctc_nam, ctc_thang -1, 1, 0, 0, 0);
            $.each(d.chiTietCongs, function (index, item) {
                monthCheck = (new Date(item.NgayGioChamCong)).getMonth() + 1;
             
                if ((new Date(item.NgayGioChamCong)).getDate() == 30){
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
                            html_modal_GhiChu = "<td>"  +"</td>";
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
                html_chiTietCongLogs += "<td>" + (index + 1)+ "</td>";
              
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
        if (tsc_username == "1" || tsc_username == "12" || tsc_username == "94" || tsc_username == "103") {
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
        if (tsc_username == "1" || tsc_username == "12" || tsc_username == "94"|| tsc_username == "103") {
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
        if (tsc_username == "1" || tsc_username == "12" || tsc_username == "94" || tsc_username == "103") {
            if ($(this).attr("chamcongid") != 0 && confirm("Bạn chắc chắn muốn xóa chấm công này?")) {
                fncLuuThemSuaCong("3"
                    , $(this).attr("nhanvienid")
                    , $(this).attr("chamcongid")
                    , $("#select-tsc-loaichamcong").val()
                    , dmy2ymd($("#input-tsc-ngaychamcong").val()) + " " + $("#input-tsc-giochamcong").val()
                    , $("#input-tsc-lydo").val());
            }
        } else {
            alert("Bạn không có quyền làm việc này!");
        }
    })
    $("#btn-tsc-luu").click(function () {
        if (tsc_username == "1" || tsc_username == "12" || tsc_username == "94" || tsc_username == "103") {
            fncLuuThemSuaCong(($(this).attr("chamcongid") == "0" ? "1" : "2")
                , $(this).attr("nhanvienid")
                , $(this).attr("chamcongid")
                , $("#select-tsc-loaichamcong").val()
                , dmy2ymd($("#input-tsc-ngaychamcong").val()) + " " + $("#input-tsc-giochamcong").val()
                , $("#input-tsc-lydo").val());
           
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
    if (momentStartDate < momentDate6 && momentEndDate < momentDate6 ) {
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

    // trường hợp ngày đêm bằng 1 Bắc nguyễn
    if (nghingay == 1 && nghidem == 1) {
        nghingay = 1;
        nghidem = 0;
    }
    //else if (nghingay == 0 && nghidem == 1) {
    //    nghingay = 0;
    //    nghidem = 1;
    //}

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


/// START Hiển thị KPI
//// START KPI Nội Bài


function fncLoadKPI(donvi) {
   


    // BEGIN AJAX LOAD 
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet3 = { "get1": donvi, "get2": $("#select-kpi-thang").val(), "get3": $("#select-kpi-nam").val() };
    jsonData = JSON.stringify({ ajaxGet3 });
    $.ajax({
        type: "POST",
        url: "TrangThai.aspx/kPINoiBais",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            html_kpi_tbody = "";
            var html_kpi_tbody_total = "";
            var Total_HX_MAWB_TaiLieu       = 0;
            var Total_HX_PCS_ChupAnh        = 0;
            var Total_HX_KG_CheckHang       = 0;
            var Total_HX_KG_CayHang         = 0;
            var Total_HX_Doc_GiaoDoc        = 0;
            var Total_HN_HAWB_TaiLieu       = 0;
            var Total_HN_SoKien_KhaiThac    = 0;
            var Total_HLG_MAWB_LamDoc       = 0;
            var Total_TK_AirLine_GiaoTKVCDL = 0;
            var Total_MAWB_HangDG           = 0;
            $.each(d, function (index, item) {
                Total_HX_MAWB_TaiLieu       += parseFloat(item.HX_MAWB_TaiLieu      );
                Total_HX_PCS_ChupAnh        += parseFloat(item.HX_PCS_ChupAnh       );
                Total_HX_KG_CheckHang       += parseFloat(item.HX_KG_CheckHang      );
                Total_HX_KG_CayHang         += parseFloat(item.HX_KG_CayHang        );
                Total_HX_Doc_GiaoDoc        += parseFloat(item.HX_Doc_GiaoDoc       );
                Total_HN_HAWB_TaiLieu       += parseFloat(item.HN_HAWB_TaiLieu      );
                Total_HN_SoKien_KhaiThac    += parseFloat(item.HN_SoKien_KhaiThac   );
                Total_HLG_MAWB_LamDoc       += parseFloat(item.HLG_MAWB_LamDoc      );
                Total_TK_AirLine_GiaoTKVCDL += parseFloat(item.TK_AirLine_GiaoTKVCDL);
                Total_MAWB_HangDG           += parseFloat(item.MAWB_HangDG          );
                html_kpi_tbody += "<tr>";
                html_kpi_tbody += "<td>" + (index + 1) + "</td>";
                html_kpi_tbody += "<td class=\"td-kpi-hoten\">" + item.HoTen + "</td>";
                html_kpi_tbody += "<td>" + numberTextWithCommas(item.HX_MAWB_TaiLieu) + "</td>";
                html_kpi_tbody += "<td>" + numberTextWithCommas(item.HX_PCS_ChupAnh) + "</td>";
                html_kpi_tbody += "<td>" + numberTextWithCommas(item.HX_KG_CheckHang) + "</td>";
                html_kpi_tbody += "<td>" + numberTextWithCommas(item.HX_KG_CayHang) + "</td>";
                html_kpi_tbody += "<td>" + numberTextWithCommas(item.HX_Doc_GiaoDoc) + "</td>";
                html_kpi_tbody += "<td>" + numberTextWithCommas(item.HN_HAWB_TaiLieu) + "</td>";
                html_kpi_tbody += "<td>" + numberTextWithCommas(item.HN_SoKien_KhaiThac) + "</td>";
                html_kpi_tbody += "<td>" + numberTextWithCommas(item.HLG_MAWB_LamDoc) + "</td>";
                html_kpi_tbody += "<td>" + numberTextWithCommas(item.TK_AirLine_GiaoTKVCDL) + "</td>";
                html_kpi_tbody += "<td>" + numberTextWithCommas(item.MAWB_HangDG) + "</td>";
                html_kpi_tbody += "</tr>";
            })
            html_kpi_tbody_total += "<tr class=\"tr-total\">";
          
            html_kpi_tbody_total += "<td colspan=\"2\" >" + "TỔNG" + "</td>";
            html_kpi_tbody_total += "<td>" + numberWithCommas(Total_HX_MAWB_TaiLieu) + "</td>";
            html_kpi_tbody_total += "<td>" + numberWithCommas(Total_HX_PCS_ChupAnh) + "</td>";
            html_kpi_tbody_total += "<td>" + numberWithCommas(Total_HX_KG_CheckHang) + "</td>";
            html_kpi_tbody_total += "<td>" + numberWithCommas(Total_HX_KG_CayHang) + "</td>";
            html_kpi_tbody_total += "<td>" + numberWithCommas(Total_HX_Doc_GiaoDoc) + "</td>";
            html_kpi_tbody_total += "<td>" + numberWithCommas(Total_HN_HAWB_TaiLieu) + "</td>";
            html_kpi_tbody_total += "<td>" + numberWithCommas(Total_HN_SoKien_KhaiThac) + "</td>";
            html_kpi_tbody_total += "<td>" + numberWithCommas(Total_HLG_MAWB_LamDoc) + "</td>";
            html_kpi_tbody_total += "<td>" + numberWithCommas(Total_TK_AirLine_GiaoTKVCDL) + "</td>";
            html_kpi_tbody_total += "<td>" + numberWithCommas(Total_MAWB_HangDG) + "</td>";
            html_kpi_tbody_total += "</tr>";
            $("#tbl-kpi tbody").empty();
            $("#tbl-kpi tbody").append( html_kpi_tbody + html_kpi_tbody_total );
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {

    });
    /// END AJAX LOAD
}
//// END KPI Nội Bài
/// END Hiển Thị KPI
