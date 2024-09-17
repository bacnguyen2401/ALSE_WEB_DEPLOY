var g_tungay = "";
var g_denngay = "";
var nhanviens;
$(document).ready(function () {
    ///-------------///
    var d_now_20180131 = new Date();
    $("#input-quanlyloi-tungay").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth(), 1));
    $("#input-quanlyloi-denngay").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth() + 1, 0));
    g_tungay = dmy2ymd($("#input-quanlyloi-tungay").val());
    g_denngay = dmy2ymd($("#input-quanlyloi-denngay").val());
    ///-------------///
    fncLoadNhanVien();
    ///-------------///
    fncLoad(g_tungay, g_denngay, "0");
    fncLoadDanhMucHuongDan();
    ///-------------///
    fncClick();
    ///-------------///
    fncOnChange();
})

function fncLoadDanhMucHuongDan() {
    /// <summary>
    /// Load danh mục hướng dẫn rồi đổ vào select
    /// </summary>
    // get dữ liệu

    var ajaxGet = { "get": "0" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "/QuanLyLoi.aspx/ListDanhMucHuongDan",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,

        success: function (responsive) {
            var d = responsive.d;
            var maSoOption = "";
            maSoOption += "<option value=\"0\">" + "KHÔNG THUỘC DANH MỤC XỬ LÝ BẤT THƯỜNG" + "</option>";
            $.each(d, function (index, item) {
                maSoOption += "<option  value=\"" + item.Id + "\">" + item.MaSo + " " + item.NoiDung + "</option>";
            });
            $("#select-quanlyloi-maso").empty();
            $("#select-quanlyloi-maso").append(maSoOption);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    })
}

function fncLoadDanhMucHuongDanById(dmid) {
    /// <summary>
    /// Load danh mục hướng dẫn bằng danh mục hướng dẫn Id
    /// Sử dụng trong trường hợp tạo mới
    /// </summary>
    /// <param name="dmid"></param>
    // ajax lấy về data của danh mục hướng dẫn by dmid
    var ajaxGet = { "get": dmid };
    jsonData = JSON.stringify({ ajaxGet });
    var dmhd;
    $.ajax({
        type: "POST",
        url: "/QuanLyLoi.aspx/DanhMucHuongDanById",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,

        success: function (responsive) {
            dmhd = responsive.d;
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    })
    return dmhd;
}

function fncLoadNhanVien() {
    /// <summary>
    /// Load danh sách nhân viên từ server
    /// </summary>
    // get danh sách nhân viên từ db
    var ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    var nhanvienlist = [];
    $.ajax({
        type: "POST",
        url: "/QuanLyLoi.aspx/ListDanhSachNhanVien",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,

        success: function (responsive) {
            var d = responsive.d;
            // Tạo biến khai báo list nhân viên, định dạng JSON
            $.each(d, function (index, item) {
                nhanvienlist.push({
                    "value": item.Id,
                    "text": item.HoTen
                });
            })
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    // load danh sách nhân viên ta textbox sử dụng boostrap tag input
    nhanviens = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: nhanvienlist,
    });
    nhanviens.initialize();
    elt = $('.input-quanlyloi-nhanvien');

    elt.tagsinput({
        itemValue: 'value',
        itemText: 'text',
        typeaheadjs: {
            name: 'nhanviens',
            displayKey: 'text',
            source: nhanviens.ttAdapter()
        }
    });
}

/// Load danh sách lỗi và các thông tin liên quan
function fncLoad(g_tungay, g_denngay, quanlyloiId) {
    var ajaxGet3 = { "get1": g_tungay, "get2": g_denngay, "get3": "0" };
    jsonData = JSON.stringify({ ajaxGet3 });
    $.ajax({
        type: "POST",
        url: "/QuanLyLoi.aspx/DanhSachLoi",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,

        success: function (responsive) {
            var d = responsive.d;
            console.log(d);
            var tbody = "";
            console.table(d.dsloi);

            $.each(d.dsloi, function (index, value) {
                tbody += "<tr id=\"tr-quanlyloi-" + value.Id + "\">";
                tbody += "<td>" + (index + 1) + "</td>";
                tbody += "<td>" + "<span class=\"span-trangthai-btn btn-quanlyloi-trangthai\" quanlyloi-id=\"" + value.Id + "\">Pending</span>" + "</td>";
                tbody += "<td>" + convertDate(value.NgayPhatSinh)[4] + "</td>";
                tbody += "<td>" + value.MaSo + "</td>";
                tbody += "<td class=\"td-quanlyloi-noidung\">" + value.NoiDung + "</td>";
                tbody += "<td>" + value.BoPhan + "</td>";
                tbody += "<td>" + value.NguoiTao + "</td>";
                tbody += "<td>" + convertDate(value.NgayTao)[2] + "</td>";
                // tbody += "<td>" + "<input type=\"button\" class=\"btn btn-sm btn-warning btn-quanlyloi-sua\" quanlyloi-id=\""+value.Id+"\" value=\"Sửa\">"+ "</td>";

                tbody += "</tr>";
                tbody += "<tr class=\"tr-quanlyloi-extend\" id=\"tr-quanlyloi-extend-" + value.Id + "\">";
                tbody += "<td colspan=\"2\">";
                tbody += "<input type=\"button\" class=\"btn btn-sm btn-warning btn-quanlyloi-sua btn-quanlyloi-action\" quanlyloisua-nguoitaoId=\"" + value.NguoiTaoID + "\" quanlyloi-id=\"" + value.Id + "\" value=\"Sửa\"></br></br>";
                tbody += "<input type=\"button\" class=\"btn btn-sm btn-danger btn-quanlyloi-xoa btn-quanlyloi-action\" quanlyloixoa-nguoitaoId=\"" + value.NguoiTaoID + "\" quanlyloi-id=\"" + value.Id + "\" value=\"Xóa\">";
                tbody += "</td>";
                tbody += "<td colspan=\"6\">";
                tbody += "<table class=\"table table-bordered table-bordered-primary  table-hover tbl-quanlyloi-extend\">";
                tbody += "<tr>";
                tbody += "<td>" + "Vị trí phát sinh" + "</td>" + "<td id=\"td-quanlyloi-vitriphatsinh-" + value.Id + "\">" + value.ViTriPhatSinh + "</td>";
                tbody += "</tr>";
                tbody += "<tr>";
                tbody += "<td>" + "Người vi phạm lỗi" + "</td>" + "<td id=\"td-quanlyloi-nguoiviphamloi-" + value.Id + "\">" + "" + "</td>";
                tbody += "</tr>";
                tbody += "<tr>";
                tbody += "<td>" + "Cán bộ giám sát" + "</td>" + "<td id=\"td-quanlyloi-canbogiamsat-" + value.Id + "\">" + "" + "</td>";
                tbody += "</tr>";
                tbody += "<tr>";
                tbody += "<td>" + "Người phát hiện" + "</td>" + "<td id=\"td-quanlyloi-nguoiphathien-" + value.Id + "\">" + "" + "</td>";
                tbody += "</tr>";
                tbody += "<tr id=\"tr-quanlyloi-khachhangviphamloi-" + value.Id + "\">";
                tbody += "<td>" + "Khách hàng vi phạm lỗi" + "</td>" + "<td id=\"td-quanlyloi-khachhangviphamloi-" + value.Id + "\">" + "" + "</td>";
                tbody += "</tr>";
                tbody += "<tr>";
                tbody += "<td>" + "Nguyên nhân" + "</td>" + "<td>" + value.NguyenNhan + "</td>";
                tbody += "</tr>";
                tbody += "<tr>";
                tbody += "<td>" + "Xử lý" + "</td>" + "<td>" + value.XuLy + "</td>";
                tbody += "</tr>";
                tbody += "<tr>";
                tbody += "<td>" + "Trách nhiệm xử lý" + "</td>" + "<td id=\"td-quanlyloi-trachnhiemxuly-" + value.Id + "\">" + "" + "</td>";
                tbody += "</tr>";
                tbody += "<tr>";
                tbody += "<td>" + "Trách nhiệm kiểm tra" + "</td>" + "<td id=\"td-quanlyloi-trachnhiemkiemtra-" + value.Id + "\">" + "" + "</td>";
                tbody += "</tr>";
                tbody += "<tr>";
                tbody += "<td>" + "Cá nhân/ Đơn vị nhận báo cáo" + "</td>" + "<td>" + value.CaNhanDonViNhanBaoCao + "</td>";
                tbody += "</tr>";
                tbody += "<tr>";
                tbody += "<td>" + "Trách nhiệm theo dõi" + "</td>" + "<td id=\"td-quanlyloi-trachnhiemtheodoi-" + value.Id + "\">" + "" + "</td>";
                tbody += "</tr>";
                tbody += "</table>";

                tbody += "<table class=\"table table-bordered table-bordered-info  tbl-quanlyloi-extend\" id=\"tbl-quanlyloi-pheduyet-" + value.Id + "\">";
                tbody += "<tbody>";
                tbody += "<tr>";
                tbody += "<td>QMR Phê Duyệt</td>";
                tbody += "<td >";

                tbody += "<select class=\"form-control select-quanlyloi-pheduyet\" id=\"select-quanlyloi-pheduyet-" + value.Id + "\" quanlyloiid=\"" + value.Id + "\">";
                tbody += "<option value=\"1\">Đồng ý phương án xử lý và đóng sự vụ</option>";
                tbody += "<option value=\"0\">Không đồng ý phương án xử lý </option>";
                tbody += "</select>";
                tbody += "</td>";
                tbody += "</tr>";
                tbody += "<tr class=\"tr-quanlyloi-kdy-lydo tr-quanlyloi-kdy-lydo-" + value.Id + "\">";
                tbody += "<td>" + "Lý do: " + "</td>";
                tbody += "<td>" + "<input type=\"text\" class=\"input-sm form-control\" id=\"inp-quanlyloi-kdy-lydo-" + value.Id + "\"/>" + "</td>";
                tbody += "</tr>";
                tbody += "<tr class=\"tr-quanlyloi-kdy-lydo tr-quanlyloi-kdy-lydo-" + value.Id + "\">";
                tbody += "<td>" + "Yêu cầu xử lý lại và hoàn thành khắc phục phòng ngừa trước ngày: " + "</td>";
                tbody += "<td>" + "<input type=\"text\" class=\"input-sm form-control input-quanlyloi-ngay-lydo datepicker quanlyloiid inp-quanlyloi-kdy-ngay\" id=\"inp-quanlyloi-kdy-ngay-" + value.Id + "\"/>" + "</td>";
                tbody += "</tr>";
                tbody += "<tr class=\"\" id=\"tr-quanlyloi-pheduyet-xacnhan-" + value.Id + "\">";
                tbody += "<td colspan=\"2\">" + "<input type=\"button\" class=\"btn btn-sm btn-success btn-quanlyloi-pheduyet-xacnhan\" id=\"btn-quanlyloi-pheduyet-kiemtra-" + value.Id + "\" quanlyloiid=\"" + value.Id + "\" value=\"Xác nhận\"/> " + "</td>";
                tbody += "</tr>";
                tbody += "</tbody>";
                tbody += "</table>";

                tbody += "<table class=\"table table-bordered table-bordered-success tbl-quanlyloi-extend tbl-quanlyloi-extend-kiemtra display-none\" id=\"tbl-quanlyloi-kiemtra-" + value.Id + "\">";
                tbody += "<tbody>";
                tbody += "<tr>";
                tbody += "<td>Kiểm tra xác nhận việc thực hiện</td>";
                tbody += "<td >";
                tbody += "<select class=\"form-control select-quanlyloi-kiemtra\" quanlyloiid=\"" + value.Id + "\" id=\"select-quanlyloi-kiemtra-" + value.Id + "\">";
                tbody += "<option value=\"1\">Đạt yêu cầu</option>";
                tbody += "<option value=\"0\">Không đạt yêu cầu </option>";
                tbody += "</select>";
                tbody += "</td>";
                tbody += "</tr>";
                tbody += "<tr class=\"tr-quanlyloi-kd-kiemtra-bienphap\" id=\"tr-quanlyloi-kd-kiemtra-bienphap-" + value.Id + "\">";
                tbody += "<td>" + "Biện pháp tiếp theo: " + "</td>";
                tbody += "<td>" + "<input type=\"text\" class=\"input-sm form-control \" id=\"inp-quanlyloi-kd-bienphap-" + value.Id + "\"/>" + "</td>";
                tbody += "</tr>";
                tbody += "<tr class=\"tr-quanlyloi-kd-kiemtra tr-quanlyloi-kd-kiemtra-" + value.Id + "\">";
                tbody += "<td>" + "Ngày kiểm tra: " + "</td>";
                tbody += "<td>" + "<input type=\"text\" class=\"input-sm form-control input-quanlyloi-ngay-lydo datepicker inp-quanlyloi-ngaykiemtra\" id=\"inp-quanlyloi-ngaykiemtra-" + value.Id + "\"/>" + "</td>";
                tbody += "</tr>";
                tbody += "<tr class=\"tr-quanlyloi-kd-kiemtra \">";
                tbody += "<td colspan=\"2\">" + "<input type=\"button\" class=\"btn btn-sm btn-success btn-quanlyloi-pheduyet-kiemtra-xacnhan\" id=\"btn-quanlyloi-pheduyet-kiemtra-xacnhan-" + value.Id + "\" quanlyloiid=\"" + value.Id + "\" value=\"Xác nhận\"/> " + "</td>";

                tbody += "</tbody>";
                tbody += "</table>";

                tbody += "<table class=\"table table-bordered table-bordered-danger tbl-quanlyloi-extend display-none\" id=\"tbl-quanlyloi-dongsuvu-" + value.Id + "\">";
                tbody += "<tbody>";
                tbody += "<tr>";
                tbody += "<td>";
                tbody += "<input type=\"button\" value=\"Xác nhận đóng sự vụ\" class=\" btn btn-danger btn-quanlyloi-pheduyet-dong-xacnhan\" id=\"btn-quanlyloi-pheduyet-dong-xacnhan-" + value.Id + "\" quanlyloiid=\"" + value.Id + "\"/>";
                tbody += "</td>";
                tbody += "</tr>";
                tbody += "</tbody>";
                tbody += "</table>";
                tbody += "<span class=\"span-quanlyloi-capnhat\">Cập nhật bởi: <span>" + value.NguoiSua + "</span> lúc <span>" + convertDate(value.NgaySua)[5] + "</span></span>";
                tbody += "</td>";
                tbody += "</tr>";
            })
            //console.log(tbody);
            $("#tbl-quanlyloi-danhsach tbody").empty();
            $("#tbl-quanlyloi-danhsach tbody").append(tbody);

            //TODO load danh sách người vi phạm
            //console.log(d.dsvipham);
            var nguoiviphamloiData = "";
            var canbogiamsatData = "";
            var nguoiphathienData = "";
            var trachnhiemxulyData = "";
            var trachnhiemkiemtraData = "";
            var trachnhiemtheodoiData = "";

            $.each(d.dsnhanvien, function (index1, item) {
                nguoiviphamloiData = $("#td-quanlyloi-nguoiviphamloi-" + item.DanhSachId).text().trim();
                canbogiamsatData = $("#td-quanlyloi-canbogiamsat-" + item.DanhSachId).text().trim();
                nguoiphathienData = $("#td-quanlyloi-nguoiphathien-" + item.DanhSachId).text().trim();
                trachnhiemxulyData = $("#td-quanlyloi-trachnhiemxuly-" + item.DanhSachId).text().trim();
                trachnhiemkiemtraData = $("#td-quanlyloi-trachnhiemkiemtra-" + item.DanhSachId).text().trim();
                trachnhiemtheodoiData = $("#td-quanlyloi-trachnhiemtheodoi-" + item.DanhSachId).text().trim();

                switch (item.Loai) {
                    case "ViPhamLoi":
                        $("#td-quanlyloi-nguoiviphamloi-" + item.DanhSachId).empty();
                        $("#td-quanlyloi-nguoiviphamloi-" + item.DanhSachId).append(((nguoiviphamloiData == "") ? "" : (nguoiviphamloiData + ", ")) + item.TenNhanVien);
                        break;
                    case "CanBoGiamSat":
                        $("#td-quanlyloi-canbogiamsat-" + item.DanhSachId).empty();
                        $("#td-quanlyloi-canbogiamsat-" + item.DanhSachId).append(((canbogiamsatData == "") ? "" : (canbogiamsatData + ", ")) + item.TenNhanVien);
                        break;
                    case "NguoiPhatHien":
                        $("#td-quanlyloi-nguoiphathien-" + item.DanhSachId).empty();
                        $("#td-quanlyloi-nguoiphathien-" + item.DanhSachId).append(((nguoiphathienData == "") ? "" : (nguoiphathienData + ", ")) + item.TenNhanVien);
                        break;
                    case "TrachNhiemXuLy":
                        $("#td-quanlyloi-trachnhiemxuly-" + item.DanhSachId).empty();
                        $("#td-quanlyloi-trachnhiemxuly-" + item.DanhSachId).append(((trachnhiemxulyData == "") ? "" : (trachnhiemxulyData + ", ")) + item.TenNhanVien);
                        break;
                    case "TrachNhiemKiemTra":
                        $("#td-quanlyloi-trachnhiemkiemtra-" + item.DanhSachId).empty();
                        $("#td-quanlyloi-trachnhiemkiemtra-" + item.DanhSachId).append(((trachnhiemkiemtraData == "") ? "" : (trachnhiemkiemtraData + ", ")) + item.TenNhanVien);
                        break;
                    case "TrachNhiemTheoDoi":
                        $("#td-quanlyloi-trachnhiemtheodoi-" + item.DanhSachId).empty();
                        $("#td-quanlyloi-trachnhiemtheodoi-" + item.DanhSachId).append(((trachnhiemtheodoiData == "") ? "" : (trachnhiemtheodoiData + ", ")) + item.TenNhanVien);
                        break;
                    case "ViPhamLoi_KH":
                        $("#td-quanlyloi-khachhangviphamloi-" + item.DanhSachId).append(item.MaKhachHang);

                        break;
                    default:
                        break;
                }
            })

            var trPheDuyet = "";
            var trKiemTra = "";
            var trDongSuVu = "";
            $.each(d.dspheduyet, function (index2, item2) {
                if (item2.PhuongAnXuLy != "") {


                    if (item2.PhuongAnXuLy == "0") {
                        $(".tr-quanlyloi-kdy-lydo-" + item2.DanhSachId).show();
                        $("<span>Không đồng ý phương án xử lý</span>").insertBefore($("#select-quanlyloi-pheduyet-" + item2.DanhSachId));
                        $("#select-quanlyloi-pheduyet-" + item2.DanhSachId).remove();
                        $("<span>" + item2.LyDo + "</span>").insertBefore($("#inp-quanlyloi-kdy-lydo-" + item2.DanhSachId));
                        $("#inp-quanlyloi-kdy-lydo-" + item2.DanhSachId).remove();
                        $("<span>" + convertDate(item2.NgayYeuCauXuLyXong)[1] + "</span>").insertBefore($("#inp-quanlyloi-kdy-ngay-" + item2.DanhSachId));
                        $("#inp-quanlyloi-kdy-ngay-" + item2.DanhSachId).remove();


                        //
                        $("#tbl-quanlyloi-kiemtra-" + item2.DanhSachId).removeClass("display-none");
                        if (item2.KiemTraXacNhan == "") {

                            $("#btn-quanlyloi-pheduyet-kiemtra-xacnhan-" + item2.DanhSachId).attr("pheduyetid", item2.Id);
                            $(".inp-quanlyloi-ngaykiemtra").datepicker({
                                showWeek: true,
                                firstDay: 1,
                                changeMonth: true,
                                changeYear: true,
                                dateFormat: 'dd/mm/yy',
                            });
                        } else {
                            $("#btn-quanlyloi-pheduyet-kiemtra-xacnhan-" + item2.DanhSachId).closest(".tr-quanlyloi-kd-kiemtra ").remove();
                            if (item2.KiemTraXacNhan == "1") {
                                $("<span>Đạt yêu cầu</span>").insertBefore($("#select-quanlyloi-kiemtra-" + item2.DanhSachId));

                            } else {
                                $("<span>Không đạt yêu cầu</span>").insertBefore($("#select-quanlyloi-kiemtra-" + item2.DanhSachId));
                                $("#tr-quanlyloi-kd-kiemtra-bienphap-" + item2.DanhSachId).show();
                                $("<span>" + item2.BienPhapTiepTheo + "</span>").insertBefore($("#inp-quanlyloi-kd-bienphap-" + item2.DanhSachId));
                                $("#inp-quanlyloi-kd-bienphap-" + item2.DanhSachId).remove();
                            }
                            $("#select-quanlyloi-kiemtra-" + item2.DanhSachId).remove();
                            $("<span>" + convertDate(item2.NgayKiemTra)[1] + "</span>").insertBefore($("#inp-quanlyloi-ngaykiemtra-" + item2.DanhSachId));
                            $("#inp-quanlyloi-ngaykiemtra-" + item2.DanhSachId).remove();
                            trKiemTra = "<tr>";
                            trKiemTra += "<td>" + "Người kiểm tra:" + "</td>";
                            trKiemTra += "<td>" + item2.NguoiKiemTra + "</td>";
                            trKiemTra += "</tr>";
                            trKiemTra += "<tr>";
                            trKiemTra += "<td>" + "Ngày giờ cập nhật:" + "</td>";
                            trKiemTra += "<td>" + convertDate(item2.NgayKiemTra)[5] + "</td>";
                            trKiemTra += "</tr>";
                            $("#tbl-quanlyloi-kiemtra-" + item2.DanhSachId + " tbody").append(trKiemTra);




                            /// show 3
                            $("#tbl-quanlyloi-dongsuvu-" + item2.DanhSachId).removeClass("display-none");
                            if (item2.XacNhanDongSuVu == "") {
                                $("#btn-quanlyloi-pheduyet-dong-xacnhan-" + item2.DanhSachId).attr("pheduyetid", item2.Id);
                            } else {
                                $("#tbl-quanlyloi-dongsuvu-" + item2.DanhSachId + " tbody").empty();
                                trDongSuVu = "<tr>";
                                trDongSuVu += "<td colspan=\"2\">" + "Đã đóng sự vụ" + "</td>";

                                trDongSuVu += "</tr>";
                                trDongSuVu += "<tr>";
                                trDongSuVu += "<td>" + "Người đóng sự vụ:" + "</td>";
                                trDongSuVu += "<td>" + item2.NguoiKiemTra + "</td>";
                                trDongSuVu += "</tr>";
                                trDongSuVu += "<tr>";
                                trDongSuVu += "<td>" + "Ngày giờ cập nhật:" + "</td>";
                                trDongSuVu += "<td>" + convertDate(item2.NgayKiemTra)[5] + "</td>";
                                trDongSuVu += "</tr>";
                                $("#tbl-quanlyloi-dongsuvu-" + item2.DanhSachId + " tbody").append(trDongSuVu);
                            }

                            ///

                        }





                    }
                    else {
                        $("<span>Đồng ý phương án xử lý và đóng sự vụ</span>").insertBefore($("#select-quanlyloi-pheduyet-" + item2.DanhSachId));
                        $("#select-quanlyloi-pheduyet-" + item2.DanhSachId).remove();
                        $(".tr-quanlyloi-kdy-lydo-" + item2.DanhSachId).remove();
                        $("#tbl-quanlyloi-kiemtra-" + item2.DanhSachId).remove();
                        $("#tbl-quanlyloi-dongsuvu-" + item2.DanhSachId).remove();
                    }

                    $("#tr-quanlyloi-pheduyet-xacnhan-" + item2.DanhSachId).remove();
                    trPheDuyet = "<tr>";
                    trPheDuyet += "<td>" + "Người phê duyệt:" + "</td>";
                    trPheDuyet += "<td>" + item2.NguoiPheDuyet + "</td>";
                    trPheDuyet += "</tr>";
                    trPheDuyet += "<tr>";
                    trPheDuyet += "<td>" + "Ngày giờ cập nhật:" + "</td>";
                    trPheDuyet += "<td>" + convertDate(item2.NgayPheDuyet)[5] + "</td>";
                    trPheDuyet += "</tr>";
                    $("#tbl-quanlyloi-pheduyet-" + item2.DanhSachId + " tbody").append(trPheDuyet);
                } else {

                }



            });
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
        if (quanlyloiId != "0") {
            $("#tr-quanlyloi-extend-" + quanlyloiId).show();
            $("#tr-quanlyloi-" + quanlyloiId + " .btn-quanlyloi-trangthai").attr("tr-extend", "1");
        }
    });
}
/// Chỉnh sửa lỗi
function fncLoadLoiById(loiid) {
    /// <summary>
    /// Load lỗi bằng id sau đó đổ ra  modal edit
    /// Sử dụng trong trường hợp chỉnh sửa
    /// </summary>
    /// <param name="loiid"></param>

    //TODO get thông tin lỗi từ db với id = loiid
    var ajaxGet3 = { "get1": g_tungay, "get2": g_denngay, "get3": loiid };
    jsonData = JSON.stringify({ ajaxGet3 });
    $.ajax({
        type: "POST",
        url: "/QuanLyLoi.aspx/DanhSachLoi",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,

        success: function (responsive) {
            var d = responsive.d;
            var tbody = "";
            //console.log(d);
            $("#select-quanlyloi-maso").attr("sua", "1");
            $("#select-quanlyloi-maso").val(d.dsloi[0].MaSo);
            $("#textarea-noidung").val((d.dsloi[0].NoiDung).replace(/<[\/]br>/g, ""));
            $("#textarea-vitriphatsinh").val((d.dsloi[0].ViTriPhatSinh).replace(/<[\/]br>/g, ""));
            $("#textarea-nguyennhan").val((d.dsloi[0].NguyenNhan).replace(/<[\/]br>/g, ""));
            $("#textarea-xuly").val((d.dsloi[0].XuLy).replace(/<[\/]br>/g, ""));
            $("#textarea-canhandonvinhanbaocao").val((d.dsloi[0].CaNhanDonViNhanBaoCao).replace(/<[\/]br>/g, ""));
            $("#input-quanlyloi-ngayphatsinh").datepicker("setDate", new Date(d.dsloi[0].NgayPhatSinh));
            $.each(d.dsnhanvien, function (index, item) {
                switch (item.Loai) {
                    case "ViPhamLoi":
                        $("#input-quanlyloi-nguoiviphamloi").tagsinput("add", { "value": item.NhanVienId, "text": item.TenNhanVien });
                        break;
                    case "CanBoGiamSat":
                        $("#input-quanlyloi-canbogiamsat").tagsinput("add", { "value": item.NhanVienId, "text": item.TenNhanVien });
                        break;
                    case "NguoiPhatHien":
                        $("#input-quanlyloi-nguoiphathien").tagsinput("add", { "value": item.NhanVienId, "text": item.TenNhanVien });
                        break;
                    case "TrachNhiemXuLy":
                        $("#input-quanlyloi-trachnhiemxuly").tagsinput("add", { "value": item.NhanVienId, "text": item.TenNhanVien });
                        break;
                    case "TrachNhiemKiemTra":
                        $("#input-quanlyloi-trachnhiemkiemtra").tagsinput("add", { "value": item.NhanVienId, "text": item.TenNhanVien });
                        break;
                    case "TrachNhiemTheoDoi":
                        $("#input-quanlyloi-trachnhiemtheodoi").tagsinput("add", { "value": item.NhanVienId, "text": item.TenNhanVien });
                        break;
                    case "ViPhamLoi_KH":
                        $("#input-quanlyloi-khachhangviphamloi").val(item.MaKhachHang);
                        break;
                    default:
                        break;
                }
                //console.log(item);
            })
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });

    //TODO get danh sách vi phạm với @DanhSachId = loiid

    // Khởi tạo tag input

    //var cities = new Bloodhound({
    //    datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
    //    queryTokenizer: Bloodhound.tokenizers.whitespace,
    //    prefetch: 'js/custom/cities.json'
    //});
    //cities.initialize();

    //elt = $('#input-tag');
    //elt.tagsinput({
    //    itemValue: 'value',
    //    itemText: 'text',
    //    typeaheadjs: {
    //        name: 'cities',
    //        displayKey: 'text',
    //        source: cities.ttAdapter()
    //    }
    //});
    //TODO Có được danh sách nhân viên vi phạm lỗi thì thêm vào bằng lệnh dưới
    //elt.tagsinput('add', { "value": 1, "text": "Amsterdam" });

    //Todo show modal edit
}

// Button click
function fncClick() {
    $("#btn-quanlyloi-them").click(function () {
        $("#btn-quanlyloi-luu").attr("qllid", "0");
        $("#myModalViewQuanLyLoi").modal("show");
    })
    //
    $("#btn-quanlyloi-xem").click(function () {
        g_tungay = dmy2ymd($("#input-quanlyloi-tungay").val());
        g_denngay = dmy2ymd($("#input-quanlyloi-denngay").val());
        fncLoad(g_tungay, g_denngay, "0");
    })
    $("#btn-quanlyloi-huongdan").click(function () {
        $("#myModalViewQuanLyLoiHuongDan").modal("show");
    })
    //
    $("#tbl-quanlyloi-danhsach tbody").on("click", ".btn-quanlyloi-trangthai", function () {
        var quanlyloiId = $(this).attr("quanlyloi-id");
        if ($(this).attr("tr-extend") == "0" || $(this).attr("tr-extend") == undefined) {
            $(".tr-quanlyloi-extend").hide();
            $("#tr-quanlyloi-extend-" + quanlyloiId).show();
            $(this).attr("tr-extend", "1");
            fncScrollUp("#tr-quanlyloi-" + quanlyloiId);
        } else {
            $(".tr-quanlyloi-extend").hide();
            $(this).attr("tr-extend", "0");
        }
    })
    //
    $("#btn-quanlyloi-luu").click(function () {
        var qllId = $(this).attr("qllid");
        var ImportQLL = { dsloi: {}, dsnhanvien: [] };
        var SCOPE_IDENTITY = "";
        //!qllId = 0 => Thêm mới
        //!qllId != 0 => Sửa
        if ($("#input-quanlyloi-ngayphatsinh").val().trim() != "" && $("#input-quanlyloi-ngayphatsinh").val() != undefined) {
            $.each($("#input-quanlyloi-nguoiviphamloi").tagsinput('items'), function (index, item) {
                ImportQLL.dsnhanvien.push({ "Id": "", "DanhSachId": qllId, "NhanVienId": item.value, "TenNhanVien": "", "MaKhachHang": "", "Loai": "ViPhamLoi" });
            })
            $.each($("#input-quanlyloi-canbogiamsat").tagsinput('items'), function (index, item) {
                ImportQLL.dsnhanvien.push({ "Id": "", "DanhSachId": qllId, "NhanVienId": item.value, "TenNhanVien": "", "MaKhachHang": "", "Loai": "CanBoGiamSat" });
            })
            $.each($("#input-quanlyloi-nguoiphathien").tagsinput('items'), function (index, item) {
                ImportQLL.dsnhanvien.push({ "Id": "", "DanhSachId": qllId, "NhanVienId": item.value, "TenNhanVien": "", "MaKhachHang": "", "Loai": "NguoiPhatHien" });
            })
            $.each($("#input-quanlyloi-trachnhiemxuly").tagsinput('items'), function (index, item) {
                ImportQLL.dsnhanvien.push({ "Id": "", "DanhSachId": qllId, "NhanVienId": item.value, "TenNhanVien": "", "MaKhachHang": "", "Loai": "TrachNhiemXuLy" });
            })
            $.each($("#input-quanlyloi-trachnhiemkiemtra").tagsinput('items'), function (index, item) {
                ImportQLL.dsnhanvien.push({ "Id": "", "DanhSachId": qllId, "NhanVienId": item.value, "TenNhanVien": "", "MaKhachHang": "", "Loai": "TrachNhiemKiemTra" });
            })
            $.each($("#input-quanlyloi-trachnhiemtheodoi").tagsinput('items'), function (index, item) {
                ImportQLL.dsnhanvien.push({ "Id": "", "DanhSachId": qllId, "NhanVienId": item.value, "TenNhanVien": "", "MaKhachHang": "", "Loai": "TrachNhiemTheoDoi" });
            })
            var khvpl = $("#input-quanlyloi-khachhangviphamloi").val();
            if (khvpl != null && khvpl != "") {
                ImportQLL.dsnhanvien.push({ "Id": "", "DanhSachId": qllId, "NhanVienId": "", "TenNhanVien": "", "MaKhachHang": khvpl, "Loai": "ViPhamLoi_KH" });
            }
            ImportQLL.dsloi.Id = qllId;
            ImportQLL.dsloi.MaSo = $("#select-quanlyloi-maso").val();
            ImportQLL.dsloi.BoPhan = $("#select-quanlyloi-bophan").val()
            ImportQLL.dsloi.NgayPhatSinh = dmy2ymd($("#input-quanlyloi-ngayphatsinh").val());
            ImportQLL.dsloi.NoiDung = ($("#textarea-noidung").val()).replace(/\n/g, "</br>");
            ImportQLL.dsloi.ViTriPhatSinh = ($("#textarea-vitriphatsinh").val()).replace(/\n/g, "</br>");
            ImportQLL.dsloi.NguyenNhan = ($("#textarea-nguyennhan").val()).replace(/\n/g, "</br>");
            ImportQLL.dsloi.XuLy = ($("#textarea-xuly").val()).replace(/\n/g, "</br>");
            ImportQLL.dsloi.CaNhanDonViNhanBaoCao = ($("#textarea-canhandonvinhanbaocao").val()).replace(/\n/g, "</br>");
            jsonData = JSON.stringify({ ImportQLL });
            $.ajax({
                type: "POST",
                url: "QuanLyLoi.aspx/IUQuanLyLoi",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    SCOPE_IDENTITY = d;
                    Swal.fire(
                        'Đã lưu!',
                        'Lưu dữ liệu thành công.',
                        'success'
                    )
                    $('#myModalViewQuanLyLoi').modal('hide');
                },
                error: function (request, status, error) {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Lỗi chưa được lưu. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                    console.log(request.responseText);
                }
            }).done(function () {
                g_tungay = dmy2ymd($("#input-quanlyloi-tungay").val());
                g_denngay = dmy2ymd($("#input-quanlyloi-denngay").val());
                fncLoad(g_tungay, g_denngay, SCOPE_IDENTITY);
                fncScrollUp("#tr-quanlyloi-" + SCOPE_IDENTITY);
            })
        } else {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Ngày phát sinh không thể bỏ trống!',
                'error'
            )
        }
    })
    $("#tbl-quanlyloi-danhsach tbody").on("click", ".btn-quanlyloi-sua", function () {
        var nguoiTaoId = $(this).attr("quanlyloisua-nguoitaoid");
        var username = $("#username").attr("userid");
        if (nguoiTaoId === username || username === "29" || username === "12" || username === "8" || username === "21" || username === "74" || username === "117"|| username === "1"|| username === "196") {
            fncLoadLoiById($(this).attr("quanlyloi-id"));
            $("#btn-quanlyloi-luu").attr("qllid", $(this).attr("quanlyloi-id"));
            $("#myModalViewQuanLyLoi").modal("show");
        } else {
            alert("Bạn không có quyền sửa lỗi này vui lòng liên hệ trực ca!")
        }
    })
    $("#tbl-quanlyloi-danhsach tbody").on("click", ".btn-quanlyloi-xoa", function () {
        var nguoiTaoId = $(this).attr("quanlyloixoa-nguoitaoid");
        var username = $("#username").attr("userid");
        if (nguoiTaoId === username || username === "29" || username === "12" || username === "8" || username === "21" || username === "74" || username === "117"|| username === "1"|| username === "196") {
            var xoa_quanlyloi_id = $(this).attr("quanlyloi-id");
            Swal.fire({
                title: 'Bạn chắc chắn muốn xóa thông báo lỗi này?',
                text: "Hành động này không thể khôi phục lại!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',

                confirmButtonText: 'Đồng ý, xóa lỗi!',
                cancelButtonText: 'Hủy'
            }).then(function () {
                var ajaxGet = { "get": xoa_quanlyloi_id };
                jsonData = JSON.stringify({ ajaxGet });
                $.ajax({
                    type: "POST",
                    url: "/QuanLyLoi.aspx/DQuanLyLoi",
                    data: jsonData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,

                    success: function (responsive) {
                        var d = responsive.d;
                        Swal.fire(
                            'Đã xóa!',
                            'Lỗi đã được xóa.',
                            'success'
                        )
                    },
                    error: function () {
                        Swal.fire(
                            'Có lỗi xảy ra!',
                            'Lỗi chưa được xóa. Thử lại hoặc liên hệ IT',
                            'error'
                        )
                    }
                }).done(function () {
                    g_tungay = dmy2ymd($("#input-quanlyloi-tungay").val());
                    g_denngay = dmy2ymd($("#input-quanlyloi-denngay").val());
                    fncLoad(g_tungay, g_denngay, "0");
                })
            })
        } else {
            alert("Bạn không có quyền sửa lỗi này vui lòng liên hệ trực ca!")
        }
    })
    $("#tbl-quanlyloi-danhsach tbody").on("click", ".btn-quanlyloi-pheduyet-xacnhan", function (e) {
        e.stopPropagation();

        var quanlyloiid = $(this).attr("quanlyloiid");
        var PheDuyet = {
            Id: "",
            DanhSachId: "",
            PhuongAnXuLy: "",
            LyDo: "",
            NgayYeuCauXuLyXong: "",
            NguoiPheDuyet: "",
            NgayPheDuyet: "",
            NgaySuaPheDuyet: "",
            KiemTraXacNhan: "",
            BienPhapTiepTheo: "",
            NgayKiemTra: "",
            NguoiKiemTra: "",
            NgayCapNhatKiemTra: "",
            NgaySuaCapNhatKiemTra: "",
            XacNhanDongSuVu: "",
            NguoiXacNhanDongSuVu: "",
            NgayXacNhanDongSuVu: "",
        };
        PheDuyet.DanhSachId = quanlyloiid;
        PheDuyet.PhuongAnXuLy = $("#select-quanlyloi-pheduyet-" + quanlyloiid).val();
        if ($("#select-quanlyloi-pheduyet-" + quanlyloiid).val() == 0) {
            PheDuyet.LyDo = $("#inp-quanlyloi-kdy-lydo-" + quanlyloiid).val();
            PheDuyet.NgayYeuCauXuLyXong = dmy2ymd($("#inp-quanlyloi-kdy-ngay-" + quanlyloiid).val());
        }
        jsonData = JSON.stringify({ PheDuyet });

        //console.log(1);
        //console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyLoi.aspx/IUPheDuyet",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                console.log(responsive.d);
            },
            error: function (request, status, error) {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Lỗi chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
                console.log(request.responseText);
            }
        }).done(function () {

            fncLoad(g_tungay, g_denngay, quanlyloiid);
            fncScrollUp("#tr-quanlyloi-" + quanlyloiid);
        });
    })
    $("#tbl-quanlyloi-danhsach tbody").on("click", ".btn-quanlyloi-pheduyet-kiemtra-xacnhan", function (e) {
        e.stopPropagation();

        var quanlyloiid = $(this).attr("quanlyloiid");
        var PheDuyet = {
            Id: "",
            DanhSachId: "",
            PhuongAnXuLy: "",
            LyDo: "",
            NgayYeuCauXuLyXong: "",
            NguoiPheDuyet: "",
            NgayPheDuyet: "",
            NgaySuaPheDuyet: "",
            KiemTraXacNhan: "",
            BienPhapTiepTheo: "",
            NgayKiemTra: "",
            NguoiKiemTra: "",
            NgayCapNhatKiemTra: "",
            NgaySuaCapNhatKiemTra: "",
            XacNhanDongSuVu: "",
            NguoiXacNhanDongSuVu: "",
            NgayXacNhanDongSuVu: "",
        };
        PheDuyet.Id = $(this).attr("pheduyetid");
        PheDuyet.KiemTraXacNhan = $("#select-quanlyloi-kiemtra-" + quanlyloiid).val();
        if ($("#select-quanlyloi-kiemtra-" + quanlyloiid).val() == 0) {
            PheDuyet.BienPhapTiepTheo = $("#inp-quanlyloi-kd-bienphap-" + quanlyloiid).val();

        }
        PheDuyet.NgayYeuCauXuLyXong = dmy2ymd($("#inp-quanlyloi-ngaykiemtra-" + quanlyloiid).val());
        jsonData = JSON.stringify({ PheDuyet });

        //console.log(1);
        console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyLoi.aspx/IUPheDuyet",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                console.log(responsive.d);
            },
            error: function (request, status, error) {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Lỗi chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
                console.log(request.responseText);
            }
        }).done(function () {

            fncLoad(g_tungay, g_denngay, quanlyloiid);
            fncScrollUp("#tr-quanlyloi-" + quanlyloiid);
        });
    })
    $("#tbl-quanlyloi-danhsach tbody").on("click", ".btn-quanlyloi-pheduyet-dong-xacnhan", function (e) {
        e.stopPropagation();

        var quanlyloiid = $(this).attr("quanlyloiid");
        var PheDuyet = {
            Id: "",
            DanhSachId: "",
            PhuongAnXuLy: "",
            LyDo: "",
            NgayYeuCauXuLyXong: "",
            NguoiPheDuyet: "",
            NgayPheDuyet: "",
            NgaySuaPheDuyet: "",
            KiemTraXacNhan: "",
            BienPhapTiepTheo: "",
            NgayKiemTra: "",
            NguoiKiemTra: "",
            NgayCapNhatKiemTra: "",
            NgaySuaCapNhatKiemTra: "",
            XacNhanDongSuVu: "",
            NguoiXacNhanDongSuVu: "",
            NgayXacNhanDongSuVu: "",
        };
        PheDuyet.Id = $(this).attr("pheduyetid");
        PheDuyet.XacNhanDongSuVu = "1";
        jsonData = JSON.stringify({ PheDuyet });

        //console.log(1);
        console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyLoi.aspx/IUPheDuyet",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                console.log(responsive.d);
            },
            error: function (request, status, error) {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Lỗi chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
                console.log(request.responseText);
            }
        }).done(function () {

            fncLoad(g_tungay, g_denngay, quanlyloiid);
            fncScrollUp("#tr-quanlyloi-" + quanlyloiid);
        });
    })
};

function fncOnChange() {
    /// <summary>
    /// Danh sách lệnh on change
    /// </summary>
    //TODO 1. Chọn Id = 0 thì clear text
    //Todo 2. Nếu sửa thì chọn mã số không tự cập nhật

    $("#select-quanlyloi-maso").on("change", function () {
        var masoId = $(this).val();

        if ($("#select-quanlyloi-maso").attr("sua") == 0) {
            if (masoId == 0) {
                // clear các ô dữ liệu
                $(".maso-change-clear").val = "";
            } else {
                var danhmuchuongdan = fncLoadDanhMucHuongDanById(masoId);
                //console.log(danhmuchuongdan);
                // clear data modal
                $(".maso-change-clear").val("");
                // đổ dữ liệu ra modal
                $("#textarea-noidung").val((danhmuchuongdan.NoiDung).replace(/<[\/]br>/g, ""));
                $("#textarea-vitriphatsinh").val((danhmuchuongdan.ViTri).replace(/<[\/]br>/g, ""));
                $("#textarea-nguyennhan").val((danhmuchuongdan.NguyenNhan).replace(/<[\/]br>/g, ""));
                $("#textarea-xuly").val((danhmuchuongdan.CacBuocXuLy).replace(/<[\/]br>/g, ""));

                $("#textarea-canhandonvinhanbaocao").val((danhmuchuongdan.CaNhanDonViNhanBaoCao).replace(/<[\/]br>/g, ""));
            }
        }
    });
    $("#tbl-quanlyloi-danhsach").on("change", ".select-quanlyloi-pheduyet", function () {
        //console.log($(this).val());
        if ($(this).val() == "0") {
            $(".tr-quanlyloi-kdy-lydo-" + $(this).attr("quanlyloiid")).show();
        } else {
            $(".tr-quanlyloi-kdy-lydo-" + $(this).attr("quanlyloiid")).hide();
        }
        $(".inp-quanlyloi-kdy-ngay").datepicker({
            showWeek: true,
            firstDay: 1,
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd/mm/yy',
        });
    })
    $("#tbl-quanlyloi-danhsach").on("change", ".select-quanlyloi-kiemtra", function () {
        //console.log($(this).val());
        if ($(this).val() == "0") {
            $("#tr-quanlyloi-kd-kiemtra-bienphap-" + $(this).attr("quanlyloiid")).show();
        } else {
            $("#tr-quanlyloi-kd-kiemtra-bienphap-" + $(this).attr("quanlyloiid")).hide();
        }
        $(".inp-quanlyloi-ngaykiemtra").datepicker({
            showWeek: true,
            firstDay: 1,
            changeMonth: true,
            changeYear: true,
            dateFormat: 'dd/mm/yy',
        });
    })
}

// khi modal đóng chạy lệnh clear hết data cũ.
$("#myModalViewQuanLyLoi").on('hidden.bs.modal', function () {
    $(".maso-change-clear").val("");
    $(".input-quanlyloi-tagsinput").tagsinput("removeAll");//! Xóa tag
    $("#btn-quanlyloi-luu").attr("qllid", "0");//!reset mặc định id là 0
    $("#input-quanlyloi-khachhangviphamloi").val("");
    $("#select-quanlyloi-maso").val("0");
    $("#select-quanlyloi-maso").attr("sua", "0");
})