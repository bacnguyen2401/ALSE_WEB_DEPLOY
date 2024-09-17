var html_thead = "";
var html_tbody = "";
var html_tbody_thuchien = "";
var ajaxGet;
var d;
var arr_date = ["01/01/1900 12:00:00 AM", "1/1/1900 12:00:00 AM", "01/01/1900 00:00:00", "1/1/1900 00:00:00"];
var datenow;
var _userid = "";
var _stt_rejump = 0;
var huongdan_update = "Sửa lại nội dung tiến độ bằng cách kích đúp chuột (double click) vào nội dung tiến độ.";
$(document).ready(function () {
    fncChange();
    fncClick();
    fncLoad();
    fncModalClose();
})
function fncLoad() {
    var d_now = new Date();
    $("#input-bangtin-tungay").datepicker("setDate", new Date(d_now.getFullYear(), d_now.getMonth(), 1));
    $("#input-bangtin-denngay").datepicker("setDate", new Date(d_now.getFullYear(), d_now.getMonth() + 1, 0));
    $("#span-huongdan").text(huongdan_update);
    fncLoadTableBangTin(fncLoadBangTin(dmy2ymd($("#input-bangtin-tungay").val()), dmy2ymd($("#input-bangtin-denngay").val()), "0"));
    if ($("#username").attr("wugroup") == "1") {
        $("#btn-bangtin-bangiaoca").removeClass("display-none");
    }
}
function fncClick() {
    ThemCongViecClick();
    CapNhatClick();
    HoanThanhClick();
    XoaClick();
    LuuCongViecClick();
    SuaCongViecClick();
    LuuCapNhatClick();
    ThucHienDBClick();
    XoaThucHienClick();
    XemClick();
    HoanThanhClick();
    BanGiaoCaClick();
}
function fncChange() {
    CheckBoxClick();
    PhanLoaiClick();
}
function fncLoadDate() {
    $('.timepicker').timepicker({ 'timeFormat': 'H:i' });
    $("#input-bangtin-ngaybatdau").datepicker("setDate", new Date());
    $("#input-bangtin-giobatdau").timepicker("setTime", new Date());
    $("#input-bangtin-hanketthuc").datepicker("setDate", new Date());
    $("#input-bangtin-giohanketthuc").timepicker("setTime", new Date());
}
function fncLoadBangTin(tungay, denngay, bangtinId) {
    var returnd;

    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet3 = { "get1": tungay, "get2": denngay, "get3": bangtinId };
    jsonData = JSON.stringify({ ajaxGet3 });
    $.ajax({
        type: "POST",
        url: "BangTin.aspx/LoadBangTin",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            returnd = d;
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD

    return returnd;
}
function fncLoadThucHien(thuchienId, bangtinId) {
    var returnd;

    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet2 = { "get1": thuchienId, "get2": bangtinId };
    jsonData = JSON.stringify({ ajaxGet2 });
    $.ajax({
        type: "POST",
        url: "BangTin.aspx/LoadThucHien",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            returnd = d;
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD

    return returnd;
}
function fncLoadTableBangTin(d) {
    html_tbody = "";
    var _hoanthanh = "";
    var _uutien = "";
    var _hanketthuc_color;
    var _congviec_tong = 0;
    var _congviec_canhan = 0;
    var _congviec_nhom = 0;
    var _congviec_phanviec = 0;
    var _hoanthanh_color = "";
    _userid = $("#username").attr("userid");
    var _tr_class = "";
    var _check_complete = 0;
    var _first_complete_class = "";
    var _complete_class = "";
    var _phanloai = "";
    var _phanloai_class = "";
    $.each(d.listBangTin, function (index, item) {
        _hoanthanh = "";
        switch (item.HoanThanh) {
            case "0":
                _hoanthanh = "Chưa làm";
                _hoanthanh_color = "btn-primary";
                break;
            case "100":
                _hoanthanh = "Hoàn thành";
                _hoanthanh_color = "btn-success";
                break;
            default:
                _hoanthanh = "Đang làm";
                _hoanthanh_color = "btn-warning";
                break;
        }
        _uutien = "";
        var _uutien_class = "";
        var _uutien_text = "";
        switch (item.UuTien) {
            case "Thấp":
                _uutien_class = "btn-primary";
                _uutien_text = "Thấp";
                // _uutien = "<span class=\"btn btn-sms btn-primary\">" + item.UuTien + "</span>";
                break;
            case "Trung Bình":
                _uutien_class = "btn-warning";
                _uutien_text = "Trung bình";
                // _uutien = "<span class=\"btn btn-sms btn-warning\">" + item.UuTien + "</span>";
                break;
            case "Cao":
                _uutien_class = "btn-danger";
                _uutien_text = "Cao";
                //_uutien = "<span class=\"btn btn-sms btn-danger\">" + item.UuTien + "</span>";
                break;
        }
        _tr_class = "";
        if (item.CaNhanId == _userid) {
            _tr_class = "tr-canhan";
            if (item.HoanThanh != "100") {
                _congviec_canhan += 1;
                _congviec_tong += 1;
            }
        }
        if (item.CaNhanId != _userid && item.CaNhan != "") {
            _tr_class = "tr-phanviec";
            if (item.HoanThanh != "100") {
                _congviec_phanviec += 1;
                _congviec_tong += 1;
            }
        }

        if (item.BoPhan != "") {
            _tr_class = "tr-nhom";
            if (item.HoanThanh != "100") {
                _congviec_nhom += 1;
                _congviec_tong += 1;
            }
        }
        _hanketthuc_color = "";

        if (fncDiff2Date(item.HanKetThuc, new Date()) > 0 && item.HoanThanh != "100") {
            _hanketthuc_color = "background-color-red color-white";
        }
        if (fncDiff2Date(item.HanKetThuc, new Date()) < 0 && fncDiff2Date(item.HanKetThuc, new Date()) >= -1 && item.HoanThanh != "100") {
            _hanketthuc_color = "background-color-yellow ";
        }

        _complete_class = "";
        if (item.HoanThanh == "100") {
            if (_check_complete == 0) {
                _check_complete = 1;
            }
            _complete_class = "tr-complete"
        }
        _phanloai = "";
        _phanloai_class = "";
        if (item.PhanLoai != "") {
            _phanloai_class = "tr-phanloai-" + item.PhanLoai.toLowerCase();
            _phanloai = "<span class=\"span-phanloai-" + item.PhanLoai.toLowerCase() + "\">" + item.PhanLoai + "</span>" + "-";
        }

        html_tbody += "<tr class=\"tr-bt-view " + _complete_class + " " + _first_complete_class + " " + _phanloai_class + " " + _tr_class + "\">";
        html_tbody += "<td rowspan=\"2\" class=\"td-stt\">" + (index + 1) + "</td>";
        html_tbody += "<td class=\"td-trangthai\">";
        html_tbody += "<table>";
        html_tbody += "<tr>";
        html_tbody += "<td ><span class=\"btn " + _hoanthanh_color + " btn-sms btn-trangthai-hoanthanh\">" + _hoanthanh + "</span></td>";
        html_tbody += "</tr>";
        html_tbody += "<tr>";
        html_tbody += "<td>" + "<span class=\"btn btn-sms btn-warning\">" + item.HoanThanh + "%</span>" + "</td>";
        html_tbody += "</tr>";
        html_tbody += "<tr>";
        html_tbody += "<td>" + "<span class=\"btn btn-sms " + _uutien_class + "\">" + _uutien_text + "</span>" + "</td>";

        html_tbody += "</tr>";
        html_tbody += "</table>";
        html_tbody += "</td>";
        html_tbody += "<td class=\"td-ngaybatdau\">" + convertDate(item.NgayBatDau)[4] + "</br>" + convertDate(item.NgayBatDau)[3] + "</td>";
        html_tbody += "<td class=\"td-hanketthuc " + _hanketthuc_color + "\">" + convertDate(item.HanKetThuc)[4] + "</br>" + convertDate(item.HanKetThuc)[3] + "</td>";
        html_tbody += "<td class=\"td-noidung\">" + _phanloai + item.NoiDung + "</td>";
        html_tbody += "<td class=\"td-thuchien\" id=\"td-thuchien-" + item.Id + "\">";
        // table thực hiện
        html_tbody += "<table>";

        html_tbody += "</table>";
        // end table thực hiện
        html_tbody += "</td>";

        html_tbody += "<td class=\"td-bophan\">" + (item.BoPhan != "" ? item.BoPhan : item.CaNhan) + "</td>";
        html_tbody += "<td class=\"td-chucnang\">";
        html_tbody += "<table class=\"\">";
        html_tbody += "<tr>";
        html_tbody += "<td>";
        html_tbody += "<input type=\"button\" bangtin-id=\"" + item.Id + "\" value=\"Cập nhật\" class=\"btn btn-sms btn-warning btn-capnhat\" />";
        html_tbody += "</td>";
        html_tbody += "<td>";
        if (_userid == item.NguoiTaoId || item.SuaNoiDung == "True") {
            html_tbody += "<input type=\"button\" bangtin-id=\"" + item.Id + "\" value=\"Sửa\" class=\"btn btn-sms btn-primary btn-sua\" />";
        }

        html_tbody += "</td> ";
        html_tbody += "</tr>";
        html_tbody += "<tr>";
        html_tbody += "<td>";
        html_tbody += "<input type=\"button\" bangtin-id=\"" + item.Id + "\" value=\"Hoàn thành\" class=\"btn btn-sms btn-success btn-hoanthanh\" />";
        html_tbody += "</td>";
        html_tbody += "<td>";
        if (_userid == item.NguoiTaoId || item.SuaNoiDung == "True") {
            html_tbody += "<input type=\"button\" bangtin-id=\"" + item.Id + "\" value=\"Xóa\" class=\"btn btn-sms btn-danger btn-xoa\" />";
        }
        html_tbody += "</td>";
        html_tbody += "</tr>";
        html_tbody += "</table>";
        html_tbody += "</td>";
        html_tbody += "</tr>";
        html_tbody += "<tr class=\"tr-bt-view tr-bt-view-sub " + _phanloai_class + " " + _tr_class + "\">";
        html_tbody += "<td colspan=\"7\" class=\"td-taosua\">" + "Người tạo: " + item.NguoiTao + " lúc " + convertDate(item.NgayTao)[2];
        if (item.NguoiSua != "") {
            html_tbody += " | Người sửa " + item.NguoiSua + " lúc " + convertDate(item.NgaySua)[2];
        }
        html_tbody += "</td>";
        html_tbody += "</tr>";
    })

    $("#tbl-bangtin tbody").empty();
    $("#tbl-bangtin tbody").append(html_tbody);
    $("#span-congviec-tong").text(_congviec_tong);
    $("#span-congviec-canhan").text(_congviec_canhan);
    $("#span-congviec-nhom").text(_congviec_nhom);
    $("#span-congviec-phanviec").text(_congviec_phanviec);
    //console.log(d.listThucHien);
    $.each(d.listThucHien, function (index, item) {
        html_tbody_thuchien = "";
        html_tbody_thuchien += "<tr>";
        html_tbody_thuchien += "<td class=\"td-thuchien-user\">" + item.FullName + ": </td>";
        html_tbody_thuchien += "<td ";
        if (_userid == item.UserId) {
            html_tbody_thuchien += " class=\"td-thuchien-noidung\" ";
        }
        html_tbody_thuchien += "bangtin-id=\"" + item.BangTinId + "\" thuchien-id=\"" + item.Id + "\">" + item.NoiDung + "</td>";
        html_tbody_thuchien += "<td class=\"td-thuchien-ngaygio\" ngaytao=\"" + item.NgayTao + "\">" + convertDate(item.NgaySua)[2] + "</td>";
        html_tbody_thuchien += "</tr>";

        $("#td-thuchien-" + item.BangTinId + " table").append(html_tbody_thuchien);
    })
    $(".cb-bt").each(function () {
        var cb_value = $(this).val();
        if (cb_value != "all" && !this.checked) {
            $(".tr-" + cb_value).hide();
        }
    })
    var _phanloai_loc_value = $("#select-bangtin-phanloai-loc").val();
    if (_phanloai_loc_value != "") {
        $(".tr-bt-view").not(".tr-phanloai-" + _phanloai_loc_value.toLowerCase()).hide();
    }
    fncDanhLaiSoThuTu();
}
function ThemCongViecClick() {
    $("#btn-bangtin-them").click(function () {
        fncLoadDate();
        fncLoadDoiTuong();
        $("#select-bangtin-uutien").val("Trung Bình");
        $("#select-bangtin-doituong").val($("#username").attr("userid"));
        $("#myModalViewBangTin").modal("show");
    })
}
function SuaCongViecClick() {
    $("#tbl-bangtin").on("click", ".btn-sua", function () {
        fncLoadDoiTuong();
        var dSua = fncLoadBangTin("", "", $(this).attr("bangtin-id"));
        // console.log(dSua);
        $("#btn-bangtin-luu").attr("bangtin-id", $(this).attr("bangtin-id"));

        $("#input-bangtin-ngaybatdau").datepicker("setDate", new Date(dSua.listBangTin[0].NgayBatDau));
        $("#input-bangtin-giobatdau").timepicker("setTime", convertDate(dSua.listBangTin[0].NgayBatDau)[3]);
        $("#input-bangtin-hanketthuc").datepicker("setDate", new Date(dSua.listBangTin[0].HanKetThuc));
        $("#input-bangtin-giohanketthuc").timepicker("setTime", convertDate(dSua.listBangTin[0].HanKetThuc)[3]);
        $('.timepicker').timepicker({ 'timeFormat': 'H:i' });
        $("#select-bangtin-uutien").val(dSua.listBangTin[0].UuTien);
        $("#select-bangtin-phanloai").val(dSua.listBangTin[0].PhanLoai);
        $("#select-bangtin-doituong").val(dSua.listBangTin[0].BoPhan != "" ? dSua.listBangTin[0].BoPhan : dSua.listBangTin[0].CaNhan);
        $("#select-bangtin-hoanthanh").val(dSua.listBangTin[0].HoanThanh);
        $("#textarea-noidung").val(dSua.listBangTin[0].NoiDung.replace(/<\/br>/g, "\n"));
        //console.log(dSua.listBangTin[0].SuaNoiDung);
        if (dSua.listBangTin[0].SuaNoiDung == "True") {
            $("#cb-suanoidung").prop("checked", true);
        }
        $("#myModalViewBangTin").modal("show");
    })
}
function LuuCongViecClick() {
    $("#btn-bangtin-luu").on("click", function () {
        var _bophan = "";
        var _canhan = "";
        var _arrBoPhan = ["VSIP", "TTHQ", "NBA", "HPH"];
        if ($.inArray($("#select-bangtin-doituong").val(), _arrBoPhan) != -1) {
            _bophan = $("#select-bangtin-doituong").val();
        } else {
            _canhan = $("#select-bangtin-doituong").val();
        }

        if (fncDiff2Date(dmy2ymd($("#input-bangtin-ngaybatdau").val()) + " " + $("#input-bangtin-giobatdau").val(), dmy2ymd($("#input-bangtin-hanketthuc").val()) + " " + $("#input-bangtin-giohanketthuc").val()) > 0) {
            cBangTin = {
                "Id": $(this).attr("bangtin-id"),
                "HoanThanh": $("#select-bangtin-hoanthanh").val(),
                "UuTien": $("#select-bangtin-uutien").val(),
                "BoPhan": _bophan,
                "CaNhan": _canhan,
                "NgayBatDau": dmy2ymd($("#input-bangtin-ngaybatdau").val()) + " " + $("#input-bangtin-giobatdau").val(),
                "HanKetThuc": dmy2ymd($("#input-bangtin-hanketthuc").val()) + " " + $("#input-bangtin-giohanketthuc").val(),
                "SuaNoiDung": (($("#cb-suanoidung").checked) ? "1" : "0"),
                "NoiDung": $("#textarea-noidung").val().replace(/\n/g, "</br>"),
                "PhanLoai": $("#select-bangtin-phanloai").val(),
                "NguoiTao": "",
                "NgayTao": "",
                "NguoiSua": "",
                "NgaySua": "",
            }
            if ($("#textarea-noidung").val().replace(/\n/g, "</br>").trim() == "") {
                Swal.fire({
                    title: "ERROR!!!!",
                    text: "Task detail can not be empty",
                    icon: "error",
                });
            } else {
                jsonData = JSON.stringify({ cBangTin });
                $.ajax({
                    type: "POST",
                    url: "BangTin.aspx/IUBangTin",
                    data: jsonData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    success: function (responsive) {
                        d = responsive.d;
                        //console.log(d);
                        fncLoadTableBangTin(fncLoadBangTin(dmy2ymd($("#input-bangtin-tungay").val()), dmy2ymd($("#input-bangtin-denngay").val()), "0"));
                        $("#myModalViewBangTin").modal("hide");
                    },
                    error: function (request, status, error) {
                        console.log(request.responseText);
                    }
                }).done(function () {
                });
            }
        } else {
            Swal.fire({
                title: "ERROR!!!!",
                text: "Start date should not be less than due date",
                icon: "error",
            });
        }

        /// END AJAX LOAD
    });
}
function CapNhatClick() {
    $("#tbl-bangtin tbody").on("click", ".btn-capnhat", function () {
        var dSua = fncLoadBangTin("", "", $(this).attr("bangtin-id"));
        $("#textarea-noidung-capnhat").val(dSua.listBangTin[0].NoiDung.replace(/<\/br>/g, "\n"));
        $("#select-bangtin-hoanthanh-capnhat").val(dSua.listBangTin[0].HoanThanh);
        $("#btn-capnhat-luu").attr("bangtin-id", $(this).attr("bangtin-id"));

        $("#myModalViewCapNhat").modal("show");
    })
}
function LuuCapNhatClick() {
    $("#btn-capnhat-luu").click(function () {
        var _thuchienid = "";
        var _capnhatid = "";
        _thuchienid = $(this).attr("thuchien-id");
        _capnhatid = $(this).attr("bangtin-id");
        if ($("#textarea-capnhat").val().replace(/\n/g, "</br>").trim() == "") {
            Swal.fire({
                title: "LỖI!!!!",
                text: "Nội dung cập nhật không được trống",
                icon: "error",
            });
        } else {
            // BEGIN AJAX LOAD
            //TODO 1.
            //TODO 2.
            //TODO 3.
            cThucHien = {
                "Id": _thuchienid,
                "BangTinId": _capnhatid,
                "UserId": "",
                "FullName": "",
                "NoiDung": $("#textarea-capnhat").val().replace(/\n/g, "</br>"),
                "NgayTao": "",
                "NgaySua": "",
            };
            jsonData = JSON.stringify({ cThucHien });
            $.ajax({
                type: "POST",
                url: "BangTin.aspx/IUThucHien",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
            /// END AJAX LOAD
            // BEGIN AJAX LOAD
            //TODO 1.
            //TODO 2.
            //TODO 3.
            ajaxGet2 = { "get1": _capnhatid, "get2": $("#select-bangtin-hoanthanh-capnhat").val() };
            jsonData = JSON.stringify({ ajaxGet2 });
            $.ajax({
                type: "POST",
                url: "BangTin.aspx/IHoanThanh",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
            /// END AJAX LOAD

            fncLoadTableBangTin(fncLoadBangTin(dmy2ymd($("#input-bangtin-tungay").val()), dmy2ymd($("#input-bangtin-denngay").val()), "0"));
            $("#myModalViewCapNhat").modal("hide");
        }
    })
}
function HoanThanhClick() {
    $("#tbl-bangtin tbody").on("click", ".btn-hoanthanh", function () {
        bangtin_id = $(this).attr("bangtin-id");
        Swal.fire({
            title: 'XÁC NHẬN CÔNG VIỆC HOÀN THÀNH?',
            text: "Hành động này không thể khôi phục lại!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',

            confirmButtonText: 'Đồng ý, Xác nhận!',
            cancelButtonText: 'Hủy'
        }).then(function () {
            // BEGIN AJAX LOAD
            //TODO 1.
            //TODO 2.
            //TODO 3.
            ajaxGet2 = { "get1": bangtin_id, "get2": "100" };
            jsonData = JSON.stringify({ ajaxGet2 });
            $.ajax({
                type: "POST",
                url: "BangTin.aspx/IHoanThanh",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    //console.log(d);
                    fncLoadTableBangTin(fncLoadBangTin(dmy2ymd($("#input-bangtin-tungay").val()), dmy2ymd($("#input-bangtin-denngay").val()), "0"));
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
            /// END AJAX LOAD
        })
    })
}
function ThucHienDBClick() {
    $("#tbl-bangtin").on("dblclick", ".td-thuchien-noidung", function () {
        var dSua = fncLoadBangTin("", "", $(this).attr("bangtin-id"));
        $("#textarea-noidung-capnhat").val(dSua.listBangTin[0].NoiDung.replace(/<\/br>/g, "\n"));
        $("#select-bangtin-hoanthanh-capnhat").val(dSua.listBangTin[0].HoanThanh);
        var dSuaThucHien = fncLoadThucHien($(this).attr("thuchien-id"), $(this).attr("bangtin-id"));
        $("#textarea-capnhat").val(dSuaThucHien[0].NoiDung.replace(/<\/br>/g, "\n"));

        $("#btn-capnhat-luu").attr("bangtin-id", $(this).attr("bangtin-id"));
        $("#btn-capnhat-luu").attr("thuchien-id", $(this).attr("thuchien-id"));
        $("#btn-capnhat-xoa").attr("bangtin-id", $(this).attr("bangtin-id"));
        $("#btn-capnhat-xoa").attr("thuchien-id", $(this).attr("thuchien-id"));
        $("#btn-capnhat-xoa").removeClass("display-none");

        $("#myModalViewCapNhat").modal("show");
    })
}
function XoaClick() {
    $("#tbl-bangtin tbody").on("click", ".btn-xoa", function () {
        bangtin_id = $(this).attr("bangtin-id");
        Swal.fire({
            title: 'XÁC NHẬN XÓA CÔNG VIỆC?',
            text: "Hành động này không thể khôi phục lại!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Đồng ý, Xác nhận!',
            cancelButtonText: 'Hủy'
        }).then(function () {
            // BEGIN AJAX LOAD
            //TODO 1.
            //TODO 2.
            //TODO 3.
            ajaxGet = { "get": bangtin_id };
            jsonData = JSON.stringify({ ajaxGet });
            $.ajax({
                type: "POST",
                url: "BangTin.aspx/DBangTin",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    fncLoadTableBangTin(fncLoadBangTin(dmy2ymd($("#input-bangtin-tungay").val()), dmy2ymd($("#input-bangtin-denngay").val()), "0"));
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
            /// END AJAX LOAD
        })
    })
}
function XoaThucHienClick() {
    $("#btn-capnhat-xoa").click(function () {
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet = { "get": $(this).attr("thuchien-id") };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "BangTin.aspx/DThucHien",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                fncLoadTableBangTin(fncLoadBangTin(dmy2ymd($("#input-bangtin-tungay").val()), dmy2ymd($("#input-bangtin-denngay").val()), "0"));
                $("#myModalViewCapNhat").modal("hide");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    })
}
function XemClick() {
    $("#btn-bangtin-xem").click(function () {
        fncLoadTableBangTin(fncLoadBangTin(dmy2ymd($("#input-bangtin-tungay").val()), dmy2ymd($("#input-bangtin-denngay").val()), "0"));
    })
}
function fncModalClose() {
    $("#myModalViewBangTin").on('hidden.bs.modal', function () {
        $("#select-bangtin-uutien").val("Thấp");
        $("#select-bangtin-doituong").empty();
        $("#select-bangtin-hoanthanh").val("0");
        $("#cb-suanoidung").prop("checked", true);
        $("#textarea-noidung").val("");
        $("#btn-bangtin-luu").attr("bangtin-id", "0");
    })
    $("#myModalViewCapNhat").on('hidden.bs.modal', function () {
        $("#select-bangtin-hoanthanh-capnhat").val("0");
        $("#textarea-noidung-capnhat").val("");
        $("#textarea-capnhat").val("");
        $("#btn-capnhat-luu").attr("bangtin-id", "0");
        $("#btn-capnhat-luu").attr("thuchien-id", "0");
        $("#btn-capnhat-xoa").attr("bangtin-id", "0");
        $("#btn-capnhat-xoa").attr("thuchien-id", "0");
        $("#btn-capnhat-xoa").addClass("display-none");
    })
}
function fncLoadDoiTuong() {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "BangTin.aspx/LoadDoiTuong",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var doituong_html = "";
            //console.log(d);
            $.each(d, function (index, item) {
                doituong_html += "<option value=\"" + item._Value + "\">" + item._Text + "</option>";
            })
            $("#select-bangtin-doituong").empty();
            $("#select-bangtin-doituong").append(doituong_html);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}
function CheckBoxClick() {
    $(".cb-bt").change(function () {
        var cb_value = $(this).val();
        $("#select-bangtin-phanloai-loc").val("").trigger("change");
        $("#input-noidung-timkiem").val("");
        if (cb_value == "all") {
            if (this.checked) {
                $(".tr-bt-view").show();
                $(".cb-bt-child").prop("checked", true);
            } else {
                $(".tr-bt-view").hide();
                $(".cb-bt-child").prop("checked", false);
            }
        } else {
            if (this.checked) {
                if ($(".cb-bt-child:checked").length == 3) {
                    $("#cb-all").prop("checked", true);
                }
                $(".tr-" + cb_value).show();
            } else {
                $("#cb-all").prop("checked", false);
                $(".tr-" + cb_value).hide();
            }
        }
        fncDanhLaiSoThuTu();
    })
}
function fncDanhLaiSoThuTu() {
    _stt_rejump = 0;
    $(".tr-bt-view:visible").not(".tr-bt-view-sub").each(function () {
        _stt_rejump += 1;
        $(this).find(".td-stt").text(_stt_rejump);
    })
}
function PhanLoaiClick() {
    $("#select-bangtin-phanloai-loc").change(function () {
        var _phanloai_loc_value = $(this).val();
        $(".cb-bt").each(function () {
            var cb_value = $(this).val();
            if (cb_value == "all" && this.checked) {
                $(".tr-bt-view").show();
                return false;
            } else if (cb_value != "all" && this.checked) {
                $(".tr-" + cb_value).show();
            }
        })
        if (_phanloai_loc_value != "") {
            $(".tr-bt-view").not(".tr-phanloai-" + _phanloai_loc_value.toLowerCase()).hide();
        }
        fncDanhLaiSoThuTu();
    })
}
function NoiDungTimKiemCLick() {
    $("#btn-noidung-timkiem").click(function () {
        alert("Chức năng chưa chạy!");
    })
}
function BanGiaoCaClick() {
    $("#btn-bangtin-bangiaoca").click(function () {
        $("#myModalBanGiaoCa").modal("show");
    })
    $("#btn-guibangiaoca").click(function () {
        Swal.fire({
            title: 'XÁC NHẬN GỬI BÁO CÁO BÀN GIAO CA?',
            text: "Hành động này không thể khôi phục lại!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',

            confirmButtonText: 'Đồng ý, Xác nhận!',
            cancelButtonText: 'Hủy'
        }).then(function () {
            // BEGIN AJAX LOAD
            //TODO 1.
            //TODO 2.
            //TODO 3.
            ajaxGet3 = { "get1": $("#select-bangiaoca").val(), "get2": $("#select-bangiaoca-nguoibangiao").val(), "get3": $("#select-bangiaoca-nguoinhanca").val(), };
            jsonData = JSON.stringify({ ajaxGet3 });
            $.ajax({
                type: "POST",
                url: "BangTin.aspx/BanGiaoCa",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    $("#myModalBanGiaoCa").modal("hide");
                    if (d == "ok") {

                        Swal.fire({
                            title: "GỬI THÀNH CÔNG",
                            text: "Email đã được gửi đi",
                            icon: "success",
                        });
                    }
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
            /// END AJAX LOAD
        })
    })
}