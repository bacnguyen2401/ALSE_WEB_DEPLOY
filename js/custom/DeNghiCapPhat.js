var d;
var dataJSON;
var ajaxGet;
var ajaxGet2;
var ajaxGet3;
var jsonData;
var idInsert;
var idTruongBoPhan;

$(document).ready(function () {
    fnLoad();
    fnClick();
    fnChange();
    fnModalDeNghiCapPhatHide();

});

function fnLoad() {
    var html_Load_De_Nghi_Cap_Phat = "";
    html_Load_De_Nghi_Cap_Phat += "<table class=\"table table-bordered\" id=\"tbl-LoadDeNghiCapPhat\">";
    html_Load_De_Nghi_Cap_Phat += "<thead>";
    html_Load_De_Nghi_Cap_Phat += "</thead>";
    html_Load_De_Nghi_Cap_Phat += "<tbody>";
    html_Load_De_Nghi_Cap_Phat += "</tbody>";
    html_Load_De_Nghi_Cap_Phat += "</table>";
    $("#div-denghicapphat-body").empty();
    $("#div-denghicapphat-body").append(html_Load_De_Nghi_Cap_Phat);
    ajaxGet = { "get": "" };
    dataJSON = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "DeNghiCapPhat.aspx/ReDeNghiCapPhat",
        data: dataJSON,
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            var html_theah = "";
            var html_tbody = "";
            html_theah += "<tr>"
            html_theah += "<td>Trạng thái</td>"
            html_theah += "<td>Họ và tên</td>"
            html_theah += "<td>Đơn vị bộ phận</td>"
            html_theah += "<td>Ngày đề nghị</td>"
            html_theah += "<td>Trưởng bộ phận xác nhận</td>"
            html_theah += "<td>Chức năng</td>"
            html_theah += "</tr>"

            $("#tbl-LoadDeNghiCapPhat thead").empty();
            $("#tbl-LoadDeNghiCapPhat thead").append(html_theah);

            $.each(d, function (item, val) {

                var DonViBoPhan = "";
                switch (val.DonViBoPhan) {
                    case "P.KT":
                        DonViBoPhan = "Phòng Khai Thác"
                        break;
                    case "P.TH":
                        DonViBoPhan = "Phòng Tổng Hợp"
                        break;
                    default:
                        DonViBoPhan = "Phòng Kế Toán"
                }

                var trangThaiCapPhat = "";
                if (val.DaCapVatTu == "True") {
                    trangThaiCapPhat = "<span class=\"tomau-dacapvattu\">Đã cấp vật tư</span>"
                } else {
                    if (val.TruongBoPhanXacNhan == "False") {
                        trangThaiCapPhat = "<span class=\"tomau-chuaduyet\">Chưa được duyệt</span>"
                    } else {
                        trangThaiCapPhat = "<span class=\"tomau-daduyet\">Đã duyệt</span>"
                    }
                }

                html_tbody += "<tr>";
                html_tbody += "<td>" + trangThaiCapPhat + "</td>";
                html_tbody += "<td>" + val.HoTen + "</td>";
                html_tbody += "<td>" + DonViBoPhan + "</td>";
                html_tbody += "<td>" + convertDate(val.NgayDeNghi)[1] + "</td>";
                html_tbody += "<td>" + val.FullName2 + "</td>";
                //html_tbody += "<td class=\"td-xem-cap-phat\" attrIdXemCapPhat=\"" + val.Id + "\">Xem</td>";
                html_tbody += "<td><button type=\"button\"  class=\"td-xem-cap-phat btn btn-xs btn-danger\" attrIdXemCapPhat=\"" + val.Id + "\">Xem</button></td>";
                html_tbody += "</tr>";
            });

            $("#tbl-LoadDeNghiCapPhat tbody").empty();
            $("#tbl-LoadDeNghiCapPhat tbody").append(html_tbody);
        },
        error: function (errormessage) {
            console.log("Lỗi :" + errormessage);
        }
    });
}

function fnClick() {
    // load modal đề nghị cấp phát
    $("#btn-denghicapphat").click(function () {

        var html_de_nghi_cap_phat = "";
        var html_table_de_nghi_cap_phat = "";

        html_de_nghi_cap_phat += "<div class=\"row\">";
        html_de_nghi_cap_phat += "<div class=\"form-group col-sm-4 has-success\">";
        html_de_nghi_cap_phat += "<div class=\"input-group\">";
        html_de_nghi_cap_phat += "<button type =\"button\" class=\"btn btn-info\" id=\"btn-Add-Denghicapphat\" > Thêm mới đề nghị cấp phát</button >";
        html_de_nghi_cap_phat += "</div>";
        html_de_nghi_cap_phat += "</div>";
        html_de_nghi_cap_phat += "</div>";
        html_de_nghi_cap_phat += "<div class=\"row\">";
        html_de_nghi_cap_phat += "<div class=\"form-group col-sm-4  has-success\">";
        html_de_nghi_cap_phat += "<div class=\"input-group\">";
        html_de_nghi_cap_phat += "<span class=\"input-group-addon\" id=\"\">Đơn vị bộ phận</span>";
        html_de_nghi_cap_phat += "<select class=\"form-control input-sm\" id=\"select-DonViBoPhan\">";
        html_de_nghi_cap_phat += "<option value=\"P.KT\">Phòng Khai Thác</option>";
        html_de_nghi_cap_phat += "<option value=\"P.TH\">Phòng Tổng Hợp</option>";
        html_de_nghi_cap_phat += "<option value=\"P.KTT\">Phòng Kế Toán</option>";
        html_de_nghi_cap_phat += "</select>";
        html_de_nghi_cap_phat += "</div>";
        html_de_nghi_cap_phat += "</div>";
        html_de_nghi_cap_phat += "<div class=\"form-group col-sm-4  has-success\">";
        html_de_nghi_cap_phat += "<div class=\"input-group\">";
        html_de_nghi_cap_phat += "<span class=\"input-group-addon\" id=\"\">Đơn vị tính</span>";
        html_de_nghi_cap_phat += "<select class=\"form-control input-sm\" id=\"select-LoaiCapPhat\">";
        html_de_nghi_cap_phat += "<option value=\"Định kì\">Định kì</option>"
        html_de_nghi_cap_phat += "<option value=\"Đột xuất\">Đột xuất</option>";
        html_de_nghi_cap_phat += "</select>";
        html_de_nghi_cap_phat += "</div>";
        html_de_nghi_cap_phat += "</div>";
        html_de_nghi_cap_phat += "<div class=\"form-group col-sm-4 has-success\">";
        html_de_nghi_cap_phat += "<div class=\"input-group\">";
        html_de_nghi_cap_phat += "<span class=\"input-group-addon\" id=\"\">Ngày đề nghị</span>";
        html_de_nghi_cap_phat += "<input type=\"text\" class=\"form-control input-sm  datepicker\" id=\"inputNgayDeNghi\" />";
        html_de_nghi_cap_phat += "</div>";
        html_de_nghi_cap_phat += "</div>";
        html_de_nghi_cap_phat += "</div>";
        html_de_nghi_cap_phat += "<div class=\"row\">";
        html_de_nghi_cap_phat += "<div class=\"form-group col-sm-4  has-success\">";
        html_de_nghi_cap_phat += "<div class=\"input-group\">";
        html_de_nghi_cap_phat += "<span class=\"input-group-addon\" id=\"\">Trưởng bộ phận</span>";
        html_de_nghi_cap_phat += "<select class=\"form-control input-sm\" id=\"select-TruongBoPhan\">";
        html_de_nghi_cap_phat += "<option value=\"8\">Mr.Tiến</option>"
        html_de_nghi_cap_phat += "<option value=\"12\">Mr.Long</option>";
        html_de_nghi_cap_phat += "<option value=\"94\">Mr.Hiếu</option>";
        html_de_nghi_cap_phat += "<option value=\"19\">Mrs.Hằng</option>";
        html_de_nghi_cap_phat += "<option value=\"30\">Mrs.Hạnh</option>";
        html_de_nghi_cap_phat += "<option value=\"84\">Mrs.Nga</option>";
        html_de_nghi_cap_phat += "<option value=\"142\">Mr.Bắc</option>";
        html_de_nghi_cap_phat += "</select>";
        html_de_nghi_cap_phat += "</div>";
        html_de_nghi_cap_phat += "</div>";
        html_de_nghi_cap_phat += "</div>";


        //$("#div-them-moi-de-nghi-cap-phat").empty();
        $(".modal-body-DeNghiCapPhat").empty();
        $(".modal-body-DeNghiCapPhat").append(html_de_nghi_cap_phat);

        $(".modal-title-denghicapphat").text("Thêm đề nghị cấp phát vật tư");
        $("#ModalDeNghiCapPhat").modal("show");
        $("#inputNgayDeNghi").datepicker();
        $("#inputNgayDeNghi").datepicker("setDate", new Date);

    });

    // click thêm đề nghị cấp phát vật tư
    $(".modal-body-DeNghiCapPhat").on("click", "#btn-Add-Denghicapphat", function () {
        var g_Ngaydenghi = dmy2ymd($("#inputNgayDeNghi").val());
        var select_DonViBoPhan = $("#select-DonViBoPhan").val();
        var txtLoaiCapPhat = $("#select-LoaiCapPhat").val();
        var txtTruongbophan = $("#select-TruongBoPhan").val();

        if (g_Ngaydenghi == "") {
            Swal.fire({
                title: "Ngày đề nghị không được trống!",
                text: "",
                type: 'error',

            })
            return false;
        }

        //if (txtHoTen == "") {
        //    Swal.fire({
        //        title: "Họ và tên không được trống!",
        //        text: "",
        //        type: 'error',

        //    })
        //    return false;
        //}
        var obj = {};
        obj.HoTen = "";
        obj.DonViBoPhan = select_DonViBoPhan;
        obj.LoaiCapPhat = txtLoaiCapPhat;
        obj.NgayDeNghi = g_Ngaydenghi;
        obj.NguoiDeNghi = "";
        obj.TruongBoPhan = txtTruongbophan;
        obj.TruongBoPhanXacNhan = "";
        obj.DaCapVatTu = "";
        obj.NguoiCapVatTu = "";

        dataJSON = JSON.stringify({ "deNghiCapPhat_Class": obj });
        //console.log(dataJSON);
        $.ajax({
            type: "POST",
            url: "DeNghiCapPhat.aspx/insertDeNghiCapPhat",
            data: dataJSON,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                var html_table_de_nghi_cap_phat = "";
                html_table_de_nghi_cap_phat += "<table class=\"table table-bordered\" id=\"tbl-show-de-nghi-cap-phat\">";
                html_table_de_nghi_cap_phat += "<thead>";
                html_table_de_nghi_cap_phat += "</thead>";
                html_table_de_nghi_cap_phat += "<tbody>";
                html_table_de_nghi_cap_phat += "</tbody>";
                html_table_de_nghi_cap_phat += "</table>";
                $(".modal-body-DeNghiCapPhat").empty();
                $(".modal-body-DeNghiCapPhat").append(html_table_de_nghi_cap_phat);

                d = responsive.d;
                idInsert = d.deNghiCapPhat.IdInsert;
                idTruongBoPhan = d.deNghiCapPhat.TruongBoPhanId;
                var userid = $("#username").attr("userid");
                //console.log(d);
                var donvibophan = "";
                if (d.deNghiCapPhat.DonViBoPhan == "P.KT") {
                    donvibophan = "Phòng Khai Thác";
                } else if (d.deNghiCapPhat.DonViBoPhan == "P.TH") {
                    donvibophan = "Phòng Tổng Hợp";
                }
                else if (d.deNghiCapPhat.DonViBoPhan == "P.KTT") {
                    donvibophan = "Phòng Kế Toán";
                }
                var tbody_show_table = "";
                var thead_show_table = "";
                var tbody_show_table_chi_tiet = "";
                var thead_show_table_chi_tiet = "";
                var html_de_nghi_cap_phat_chi_tiet = "";
                var myTag = "";
                var html_btn_pheduyet = "";
                $("#div-show-de-nghi-cap-phat").append(html_btn_pheduyet);
                tbody_show_table += "<tr>";
                tbody_show_table += "<td>Họ và tên</td>";
                tbody_show_table += "<td>" + d.deNghiCapPhat.HoTen + "</td>";
                tbody_show_table += "</tr>";
                tbody_show_table += "<tr>";
                tbody_show_table += "<td>Đơn vị bộ phận</td>";
                tbody_show_table += "<td>" + donvibophan + "</td>";
                tbody_show_table += "</tr>";
                tbody_show_table += "<tr>";
                tbody_show_table += "<td>Loại cấp phát</td>";
                tbody_show_table += "<td>" + d.deNghiCapPhat.LoaiCapPhat + "</td>";
                tbody_show_table += "</tr>";
                tbody_show_table += "<tr>";
                tbody_show_table += "<td>Ngày đề nghị</td>";
                tbody_show_table += "<td>" + convertDate(d.deNghiCapPhat.NgayDeNghi)[1] + "</td>";
                tbody_show_table += "</tr>";
                tbody_show_table += "<tr>";
                tbody_show_table += "<td>Trưởng bộ phận</td>";
                tbody_show_table += "<td>" + fncZeroTraVeRong(d.deNghiCapPhat.TruongBoPhan) + "</td>";
                tbody_show_table += "</tr>";
                tbody_show_table += "<tr>";
                tbody_show_table += "<td>Người cấp vật tư</td>";
                tbody_show_table += "<td>" + d.deNghiCapPhat.NguoiCapVatTu_ + "</td>";
                tbody_show_table += "</tr>";

                $("#tbl-show-de-nghi-cap-phat tbody").empty();
                $("#tbl-show-de-nghi-cap-phat tbody").append(tbody_show_table);

                html_de_nghi_cap_phat_chi_tiet += "<h4>Thêm chi tiết vật tư: (" + d.deNghiCapPhat.IdInsert + ")</h4>";
                html_de_nghi_cap_phat_chi_tiet += "<button type=\"button\" class=\"btn btn-info\" id=\"btn-ThemDong\">Thêm dòng</button>";
                html_de_nghi_cap_phat_chi_tiet += "<table class=\"table table-bordered\" id=\"tbl-de-nghi-cap-phat-chi-tiet\">";
                html_de_nghi_cap_phat_chi_tiet += "<thead>";
                html_de_nghi_cap_phat_chi_tiet += "</thead>";
                html_de_nghi_cap_phat_chi_tiet += "<tbody>";
                html_de_nghi_cap_phat_chi_tiet += "</tbody>";
                html_de_nghi_cap_phat_chi_tiet += "</table>";
                html_de_nghi_cap_phat_chi_tiet += "<div id=\"button-them-chi-tiet\" class=\"text-center\">";
                html_de_nghi_cap_phat_chi_tiet += "<button type=\"button\" id=\"btn-them-moi-chi-tiet\" class=\"btn btn-primary\">Lưu</button>";
                html_de_nghi_cap_phat_chi_tiet += "</div>";

                $(".modal-body-DeNghiCapPhat").append(html_de_nghi_cap_phat_chi_tiet);

                thead_show_table_chi_tiet += "<tr>";
                thead_show_table_chi_tiet += "<td>Tên vật tư</td>";
                thead_show_table_chi_tiet += "<td>Đơn vị tính</td>";
                thead_show_table_chi_tiet += "<td>Số lượng yêu cầu</td>";
                thead_show_table_chi_tiet += "<td>Ghi chú</td>";
                thead_show_table_chi_tiet += "<td>Chức năng</td>";
                thead_show_table_chi_tiet += "</tr>";

                $("#tbl-de-nghi-cap-phat-chi-tiet thead").empty();
                $("#tbl-de-nghi-cap-phat-chi-tiet thead").append(thead_show_table_chi_tiet);

                tbody_show_table_chi_tiet = "";

                tbody_show_table_chi_tiet += "<tr class=\"tr-xoaTable\">";
                tbody_show_table_chi_tiet += "<td>";
                tbody_show_table_chi_tiet += "<select class=\"form-control input-sm select-vattu\" name=\"states[]\">";
                tbody_show_table_chi_tiet += "<option value=\"\"></option>";
                tbody_show_table_chi_tiet += "</select>";
                tbody_show_table_chi_tiet += "</td>";
                tbody_show_table_chi_tiet += "<td class=\"DonViTinhVatTu\"></td>";
                tbody_show_table_chi_tiet += "<td contenteditable=\"true\" class=\"SoLuongYeuCau\"></td>";
                tbody_show_table_chi_tiet += "<td contenteditable=\"true\" class=\"GhiChu\"></td>";
                tbody_show_table_chi_tiet += "<td class=\"xoaTable\">Xóa</td>";
                tbody_show_table_chi_tiet += "</tr>";
                $("#tbl-de-nghi-cap-phat-chi-tiet tbody").empty();
                $("#tbl-de-nghi-cap-phat-chi-tiet tbody").append(tbody_show_table_chi_tiet);
                loadOptionSelect();

                $(".modal-body-DeNghiCapPhat").on("click", "#btn-ThemDong", function () {
                    //$("#tbl-de-nghi-cap-phat-chi-tiet tbody").empty();
                    $("#tbl-de-nghi-cap-phat-chi-tiet tbody").append(tbody_show_table_chi_tiet);
                    loadOptionSelect();

                });
                // Chỉ cho phép nhập số
                $('.SoLuongYeuCau').keyup(function (e) {

                    FormatCurrency(this);
                });
                $('.SoLuongYeuCau').keypress(function (e) {
                    return CheckNumeric();
                });
                // END Chỉ cho phép nhập số.
            },
            error: function (errormessage) {
                console.log("Lỗi :" + errormessage);
            }
        });
    });
    $(".modal-body-DeNghiCapPhat").on("click", ".xoaTable", function () {
        var conf = confirm("Bạn có muốn xóa vật tư này không ? ");
        if (conf == true) {
            $(this).parents(".tr-xoaTable").remove();
        }
    });

    $(".modal-body-DeNghiCapPhat").on("click", "#btn-them-moi-chi-tiet", function () {
        var capPhatVatTuChiTiet = [];

        $("#tbl-de-nghi-cap-phat-chi-tiet tbody tr").each(function (index, item) {
            capPhatVatTuChiTiet.push({
                "DeNghiCapPhatId": idInsert,
                "VatTuId": $(this).find('select.select-vattu').val(),
                "SoLuongYeuCau": $(this).find('td.SoLuongYeuCau').text(),
                "SoLuongThucTe": $(this).find('td.SoLuongThucTe').text(),
                "GhiChu": $(this).find('td.GhiChu').text(),
            });
        });
        //console.log(capPhatVatTuChiTiet);
        dataJSON = JSON.stringify({ capPhatVatTuChiTiet });
        //console.log(dataJSON);
        $.ajax({
            type: "POST",
            url: "DeNghiCapPhat.aspx/insertDeNghiCapPhatChiTiet",
            data: dataJSON,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "ok") {
                    $("#ModalDeNghiCapPhat").modal("hide");
                    fnLoad();
                    Swal.fire({
                        title: "Thêm thành công chi tiết vật tư !",
                        text: "",
                        type: 'success',
                        timer: 2000,
                    })
                }
            },
            error: function (errormessage) {
                console.log("Lỗi :" + errormessage);
            }
        });
    });



    $("#div-denghicapphat-body").on("click", ".td-xem-cap-phat", function () {
        //console.log($(this).attr("attrIdXemCapPhat"));
        $(".modal-title-denghicapphat").text("Thông tin đề nghị cấp phát");
        $("#ModalDeNghiCapPhat").modal("show");
        ajaxGet = { "get": $(this).attr("attrIdXemCapPhat") };
        dataJSON = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "DeNghiCapPhat.aspx/ReDeNghiCapPhatChiTiet",
            data: dataJSON,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);

                var IdTruongBoPhan = d.deNghiCapPhat_Classes.TruongBoPhan;
                var IdNguoiCapVatTu = d.deNghiCapPhat_Classes.NguoiCapVatTu;
                var IdNguoiTao = d.deNghiCapPhat_Classes.NguoiTao;
                var userid = $("#username").attr("userid");
                var arrIdCapvatTu = ["1", "103"];

                var html_table_de_nghi_cap_phat = "";
                html_table_de_nghi_cap_phat += "<table class=\"table table-bordered\" id=\"tbl-show-de-nghi-cap-phat\">";
                html_table_de_nghi_cap_phat += "<thead>";
                html_table_de_nghi_cap_phat += "</thead>";
                html_table_de_nghi_cap_phat += "<tbody>";
                html_table_de_nghi_cap_phat += "</tbody>";
                html_table_de_nghi_cap_phat += "</table>";
                if (IdTruongBoPhan == userid && d.deNghiCapPhat_Classes.TruongBoPhanXacNhan == "False") {
                    html_table_de_nghi_cap_phat += "<button type=\"button\" class=\"btn btn-success\" id=\"btn-Phe-Duyet\" attrPheDuyet=\"" + d.deNghiCapPhat_Classes.Id + "\">Phê duyệt</button>"
                    html_table_de_nghi_cap_phat += "<button type=\"button\" class=\"btn btn-success\" id=\"btn-Khong-Phe-Duyet\" attrPheDuyet=\"" + d.deNghiCapPhat_Classes.Id + "\">Không Phê duyệt</button>"

                }

                html_table_de_nghi_cap_phat += "<hr/>";


                html_table_de_nghi_cap_phat += "<h4>Chi tiết vật tư: (" + d.deNghiCapPhat_Classes.Id + ")</h4>";
                html_table_de_nghi_cap_phat += "<table class=\"table table-bordered\" id=\"tbl-de-nghi-cap-phat-chi-tiet\">";
                html_table_de_nghi_cap_phat += "<thead>";
                html_table_de_nghi_cap_phat += "</thead>";
                html_table_de_nghi_cap_phat += "<tbody>";
                html_table_de_nghi_cap_phat += "</tbody>";
                html_table_de_nghi_cap_phat += "</table>";


                //console.log(d.deNghiCapPhat_Classes.Id);
                if (arrIdCapvatTu.indexOf(userid) > -1 && d.deNghiCapPhat_Classes.TruongBoPhanXacNhan == "True" && d.deNghiCapPhat_Classes.DaCapVatTu == "False") {
                    html_table_de_nghi_cap_phat += "<div class=\"row\">";
                    html_table_de_nghi_cap_phat += "<div class=\"form-group col-sm-4 has-success\">";
                    html_table_de_nghi_cap_phat += "<div class=\"input-group\">";
                    html_table_de_nghi_cap_phat += "<span class=\"input-group-addon\" id=\"\">Ngày cấp phát</span>";
                    html_table_de_nghi_cap_phat += "<input type=\"text\" class=\"form-control input-sm datepicker\" id=\"inputNgayCapPhat\" />";
                    html_table_de_nghi_cap_phat += "</div>";
                    html_table_de_nghi_cap_phat += "</div>";
                    html_table_de_nghi_cap_phat += "<div>";
                    html_table_de_nghi_cap_phat += "<button type=\"button\" id=\"btn-Cap-Vat-Tu\" attrIdDeNghiCapPhat=\"" + d.deNghiCapPhat_Classes.Id + "\" class=\"btn btn-primary btn-sm\">Cấp vật tư</button>";
                    html_table_de_nghi_cap_phat += "</div>";
                    html_table_de_nghi_cap_phat += "</div>";
                }
                html_table_de_nghi_cap_phat += "</div>";

                if (userid == IdNguoiTao && d.deNghiCapPhat_Classes.TruongBoPhanXacNhan == "False") {
                    html_table_de_nghi_cap_phat += "<button type=\"button\" class=\"btn btn-primary text-center\" id=\"suaCapPhatTheoId\">Cập nhật</button>"
                }

                $(".modal-body-DeNghiCapPhat").empty();
                $(".modal-body-DeNghiCapPhat").append(html_table_de_nghi_cap_phat);

                $("#inputNgayCapPhat").datepicker();
                $("#inputNgayCapPhat").datepicker("setDate", new Date);

                //console.log(d.deNghiCapPhat_Classes.DonViBoPhan);
                var donvibophan = "";
                if (d.deNghiCapPhat_Classes.DonViBoPhan == "P.KT") {
                    donvibophan = "Phòng Khai Thác";
                } else if (d.deNghiCapPhat_Classes.DonViBoPhan == "P.TH") {
                    donvibophan = "Phòng Tổng Hợp";
                }
                else if (d.deNghiCapPhat_Classes.DonViBoPhan == "P.KTT") {
                    donvibophan = "Phòng Kế Toán";
                }
                var tbody_show_table = "";
                var thead_show_table = "";
                var tbody_show_table_chi_tiet = "";
                var thead_show_table_chi_tiet = "";
                var html_de_nghi_cap_phat_chi_tiet = "";
                var myTag = "";

                tbody_show_table += "<tr>";
                tbody_show_table += "<td>Họ và tên</td>";
                tbody_show_table += "<td colspan=\"2\">" + d.deNghiCapPhat_Classes.HoTen + "</td>";
                tbody_show_table += "</tr>";
                tbody_show_table += "<tr>";
                tbody_show_table += "<td>Đơn vị bộ phận</td>";
                tbody_show_table += "<td colspan=\"2\">" + donvibophan + "</td>";
                tbody_show_table += "</tr>";
                tbody_show_table += "<tr>";
                tbody_show_table += "<td>Loại cấp phát</td>";
                tbody_show_table += "<td colspan=\"2\">" + d.deNghiCapPhat_Classes.LoaiCapPhat + "</td>";
                tbody_show_table += "</tr>";
                tbody_show_table += "<tr>";
                tbody_show_table += "<td>Ngày đề nghị</td>";
                tbody_show_table += "<td colspan=\"2\">" + convertDate(d.deNghiCapPhat_Classes.NgayDeNghi)[1] + "</td>";
                tbody_show_table += "</tr>";
                tbody_show_table += "<tr>";
                tbody_show_table += "<td>Trưởng bộ phận</td>";
                tbody_show_table += "<td>" + d.deNghiCapPhat_Classes.FullName2 + "</td>";
                tbody_show_table += "<td>" + (d.deNghiCapPhat_Classes.TruongBoPhanXacNhan == "False" ? "Chưa phê duyệt" : "Đã phê duyệt") + "</td>";
                tbody_show_table += "</tr>";
                tbody_show_table += "<tr>";
                tbody_show_table += "<td>Người cấp vật tư</td>";
                tbody_show_table += "<td>" + d.deNghiCapPhat_Classes.NguoiCapVatTu_ + "</td>";
                tbody_show_table += "<td>" + (d.deNghiCapPhat_Classes.DaCapVatTu == "False" ? "Chưa cấp" : "Đã cấp") + "</td>";
                tbody_show_table += "</tr>";


                $("#tbl-show-de-nghi-cap-phat tbody").empty();
                $("#tbl-show-de-nghi-cap-phat tbody").append(tbody_show_table);


                var thead_show_table_chi_tiet = "";
                thead_show_table_chi_tiet += "<tr>";
                thead_show_table_chi_tiet += "<td>Tên vật tư</td>";
                thead_show_table_chi_tiet += "<td>Đơn vị tính</td>";
                thead_show_table_chi_tiet += "<td>Số lượng yêu cầu</td>";
                if (arrIdCapvatTu.indexOf(userid) > -1 || IdTruongBoPhan == userid) {
                    thead_show_table_chi_tiet += "<td>Số lượng tồn kho</td>";
                    thead_show_table_chi_tiet += "<td>Số lượng thực tế</td>";
                }
                thead_show_table_chi_tiet += "<td>Ghi chú</td>";
                if ((userid == IdNguoiTao || arrIdCapvatTu.indexOf(userid) > -1) && d.deNghiCapPhat_Classes.TruongBoPhanXacNhan == "False") {
                    thead_show_table_chi_tiet += "<td>Chức năng</td>";
                }
                thead_show_table_chi_tiet += "</tr>";

                $("#tbl-de-nghi-cap-phat-chi-tiet thead").empty();
                $("#tbl-de-nghi-cap-phat-chi-tiet thead").append(thead_show_table_chi_tiet);

                tbody_show_table_chi_tiet = "";
                $.each(d.deNghiCapPhatChiTiets, function (item, val) {
                    tbody_show_table_chi_tiet += "<tr class=\"tr-xoaTable\">";
                    tbody_show_table_chi_tiet += "<td>";
                    tbody_show_table_chi_tiet += "<select class=\"form-control input-sm select-vattu\" disabled>";
                    tbody_show_table_chi_tiet += "<option value=\"" + val.IdVatTu + "\">" + val.TenVatTu + "</option>";
                    tbody_show_table_chi_tiet += "</select>";
                    tbody_show_table_chi_tiet += "</td>";
                    tbody_show_table_chi_tiet += "<td class=\"DonViTinhVatTu\">" + val.DonViTinh + "</td>";
                    tbody_show_table_chi_tiet += "<td contenteditable=\"true\" class=\"SoLuongYeuCau\">" + val.SoLuongYeuCau + "</td>";
                    if (arrIdCapvatTu.indexOf(userid) > -1 || IdTruongBoPhan == userid) {
                        tbody_show_table_chi_tiet += "<td class=\"SoLuongTonKho\">" + val.TonKho + "</td>";
                        tbody_show_table_chi_tiet += "<td contenteditable=\"true\" class=\"SoLuongThucTe\">" + val.SoLuongThucTe + "</td>";
                    }
                    tbody_show_table_chi_tiet += "<td  class=\"GhiChu\">" + val.GhiChu + "</td>";
                    if ((userid == IdNguoiTao || arrIdCapvatTu.indexOf(userid) > -1) && d.deNghiCapPhat_Classes.TruongBoPhanXacNhan == "False") {
                        tbody_show_table_chi_tiet += "<td class=\"xoaTable\">Xóa</td>";
                    }
                    tbody_show_table_chi_tiet += "<td class=\"IdChiTiet\">" + val.IdChiTiet + "</td>";
                    tbody_show_table_chi_tiet += "</tr>";

                });

                $("#tbl-de-nghi-cap-phat-chi-tiet tbody").empty();
                $("#tbl-de-nghi-cap-phat-chi-tiet tbody").append(tbody_show_table_chi_tiet);

                if (userid == IdNguoiTao) {
                    $(".select-vattu").prop('disabled', false);
                }

                var _Option = "";
                $.each(d.vatTus, function (index, item) {
                    _Option += "<option value=\"" + item.Id + "\" DonViTinh=\"" + item.DonViTinh + "\">" + item.TenVatTu + "</option>";
                });
                $(".select-vattu").append(_Option);

                $(".select-vattu").change(function () {
                    var element = $(this).find('option:selected');
                    mytag = element.attr("DonViTinh");
                    $(this).parents("tr").find(".DonViTinhVatTu").text(mytag);
                });
                $(".select-vattu").select2({
                    //closeOnSelect: false,
                    //allowHtml: true,
                    //allowClear: true,
                    //tags: true
                });

                // Chỉ cho phép nhập số
                $('.SoLuongYeuCau').keyup(function (e) {

                    FormatCurrency(this);
                });
                $('.SoLuongYeuCau').keypress(function (e) {
                    return CheckNumeric();
                });
                $('.SoLuongThucTe').keyup(function (e) {

                    FormatCurrency(this);
                });
                $('.SoLuongThucTe').keypress(function (e) {
                    return CheckNumeric();
                });
                // END Chỉ cho phép nhập số.

            },
            error: function (errormessage) {
                console.log("Lỗi :" + errormessage);
            }
        });
    });

    $(".modal-body-DeNghiCapPhat").on("click", "#btn-Phe-Duyet", function () {
        ajaxGet = { "get": $(this).attr("attrPheDuyet") }
        dataJSON = JSON.stringify({ ajaxGet });
        //console.log(dataJSON);
        $.ajax({
            type: "POST",
            url: "DeNghiCapPhat.aspx/updateDeNghiCapPhat",
            data: dataJSON,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "ok") {
                    $(".modal-body-DeNghiCapPhat").find("#btn-Phe-Duyet").hide();
                    $(".modal-body-DeNghiCapPhat").find("#btn-Khong-Phe-Duyet").hide();
                    $(".modal-body-DeNghiCapPhat").find(".select-vattu").prop('disabled', 'disabled');
                    Swal.fire({
                        title: "Phê duyệt thành công !",
                        text: "",
                        type: 'success',
                        timer: 2000,
                    });
                    fnLoad();
                    $("#ModalDeNghiCapPhat").modal("hide");
                }
            },
            error: function (errormessage) {
                console.log("Lỗi :" + errormessage);
            }
        });
    });

    $(".modal-body-DeNghiCapPhat").on("click", "#btn-Cap-Vat-Tu", function () {

        var capPhatVatTuChiTiet = [];
        var idCapPhatChiTiet = $(this).attr("attrIdDeNghiCapPhat");
        var g_NgayCapPhat = dmy2ymd($("#inputNgayCapPhat").val());
        var boolCheck = true;
        $("#tbl-de-nghi-cap-phat-chi-tiet tbody tr").each(function (index, item) {
            capPhatVatTuChiTiet.push({
                "Id": $(this).find('td.IdChiTiet').text(),
                "DeNghiCapPhatId": idCapPhatChiTiet,
                "VatTuId": $(this).find('.select-vattu').val(),
                "SoLuongYeuCau": $(this).find('td.SoLuongYeuCau').text(),
                "SoLuongThucTe": $(this).find('td.SoLuongThucTe').text(),
                "GhiChu": "",
                "NgayTaoSua": g_NgayCapPhat,
            });

            if (parseInt($(this).find('td.SoLuongThucTe').text()) > parseInt($(this).find('td.SoLuongTonKho').text())) {
                boolCheck = false;
                return boolCheck;
            }
        });

        if (boolCheck == false) {
            alert("Số lượng thực tế không được lớn hơn số lượng tồn kho");
        } else {
            dataJSON = JSON.stringify({ capPhatVatTuChiTiet });
            console.log(dataJSON);
            $.ajax({
                type: "POST",
                url: "DeNghiCapPhat.aspx/updateCapVatTu",
                data: dataJSON,
                contentType: "application/json;charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    if (d == "ok") {
                        $(".modal-body-DeNghiCapPhat").find("#btn-Cap-Vat-Tu").hide();
                        Swal.fire({
                            title: "Cấp vật tư thành công !",
                            text: "",
                            type: 'success',
                            timer: 2000,
                        });
                        fnLoad();
                        $("#ModalDeNghiCapPhat").modal("hide");
                    }
                },
                error: function (errormessage) {
                    console.log("Lỗi :" + errormessage);
                }
            });
        }
    });

    $(".modal-body-DeNghiCapPhat").on("click", "#suaCapPhatTheoId", function () {
        var capPhatVatTuChiTiet = [];
        $("#tbl-de-nghi-cap-phat-chi-tiet tbody tr").each(function (index, item) {
            capPhatVatTuChiTiet.push({
                "Id": $(this).find('td.IdChiTiet').text(),
                "DeNghiCapPhatId": "",
                "VatTuId": $(this).find('.select-vattu').val(),
                "SoLuongYeuCau": $(this).find('td.SoLuongYeuCau').text(),
                "SoLuongThucTe": $(this).find('td.SoLuongThucTe').text(),
                "GhiChu": $(this).find('td.GhiChu').text(),
            });

        });
        dataJSON = JSON.stringify({ capPhatVatTuChiTiet });
        console.log(dataJSON);

        $.ajax({
            type: "POST",
            url: "DeNghiCapPhat.aspx/updategetById",
            data: dataJSON,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "ok") {
                    Swal.fire({
                        title: "Cập nhật thành công !",
                        text: "",
                        type: 'success',
                        timer: 2000,
                    });
                    fnLoad();
                    $("#ModalDeNghiCapPhat").modal("hide");
                }
            },
            error: function (errormessage) {
                console.log("Lỗi :" + errormessage);
            }
        });
    });
}
function fnChange() {

}
function fnModalDeNghiCapPhatHide() {
    $('#ModalDeNghiCapPhat').on('hide.bs.modal', function (e) {
        fnLoad();
        $("#inputNgayDeNghi").val("");
        //$("#txtHoTen").val("");
        $("#txtLoaiCapPhat").val("");
        $("#select-NguoiCapVatTu").val("1");
        $("#select-TruongBoPhan").val("8");
        $("#select-DonViBoPhan").val("P.KT");
        $("#select-LoaiCapPhat").val("Định kì");
    });
}

function loadOptionSelect() {
    var _Option = "";
    $.each(d.VatTu, function (index, item) {
        _Option += "<option value=\"" + item.Id + "\" DonViTinh=\"" + item.DonViTinh + "\">" + item.TenVatTu + "</option>";
    });
    $(".select-vattu").append(_Option);

    $(".select-vattu").change(function () {
        var element = $(this).find('option:selected');
        mytag = element.attr("DonViTinh");
        $(this).parents("tr").find(".DonViTinhVatTu").text(mytag);
    });

    $(".select-vattu").select2({
        //closeOnSelect: false,
        allowHtml: true,
        //allowClear: true,
        //tags: true
    });
}

