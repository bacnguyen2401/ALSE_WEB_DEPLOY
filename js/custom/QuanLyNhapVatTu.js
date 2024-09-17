var d;
var dataJSON;
var ajaxGet;
var ajaxGet2;
var ajaxGet3;
var jsonData;

$(document).ready(function () {
    fnLoad();
    fnClick();
    fnChange();
    fnShowHideModal();
});

function fnLoad() {
    var html_load_Nhap_vat_tu = "";
    html_load_Nhap_vat_tu += "<table class=\"table table-bordered\" id=\"tbl-LoadNhapVatTu\">";
    html_load_Nhap_vat_tu += "<thead>";
    html_load_Nhap_vat_tu += "</thead>";
    html_load_Nhap_vat_tu += "<tbody>";
    html_load_Nhap_vat_tu += "</tbody>";
    html_load_Nhap_vat_tu += "</table>";

    $("#div-nhapvattu-body").empty();
    $("#div-nhapvattu-body").append(html_load_Nhap_vat_tu);

    var html_theah = "";

    html_theah += "<tr>";
    html_theah += "<td>Ngày nhập</td>";
    html_theah += "<td>Tên thiết bị</td>";
    html_theah += "<td>Số lượng nhập</td>";
    html_theah += "<td>Đơn vị tính</td>";
    html_theah += "<td>Người nhập vật tư</td>";
    html_theah += "<td>Chức năng</td>";
    html_theah += "</tr>";
    $("#tbl-LoadNhapVatTu thead").empty();
    $("#tbl-LoadNhapVatTu thead").append(html_theah);

    ajaxGet = { "get": "" };
    dataJSON = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyNhapVatTu.aspx/ReXuatNhapTon",
        data: dataJSON,
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            var html_tbody = "";
            var html_tr_td = "";

            var ngayNhap = "";
            var count = 0;
            $.each(d, function (item, val) {
                if (ngayNhap != convertDate(val.NgayXuatNhapTon)[1] && item != 0) {
                    html_tbody += "<tr>" + "<td rowspan=\"" + count + "\">" + ngayNhap + "</td>" + html_tr_td;
                    html_tr_td = "";
                    count = 0;
                }
                count++;
                ngayNhap = convertDate(val.NgayXuatNhapTon)[1];
                html_tr_td += "<td>" + val.TenVatTu + "</td>";
                html_tr_td += "<td>" + val.SoLuong + "</td>";
                html_tr_td += "<td>" + val.DonViTinh + "</td>";
                html_tr_td += "<td>" + val.FullName2 + "</td>";
                html_tr_td += "<td><button type=\"button\" id=\"btn-update-vattunhap\" updateId=" + val.Id + " class=\"btn btn-warning btn-sm\">Sửa</button>&nbsp;&nbsp;&nbsp;<button type=\"button\" id=\"btn-delete-vattunhap\" attrSoLuong=\"" + val.SoLuong + "\" vattuId=\"" + val.VatTuId + "\" deleteId=" + val.Id + " class=\"btn btn-danger btn-sm\">Xóa</button></td>";
                html_tr_td += "</tr>";
            });
            html_tbody += "<tr>" + "<td rowspan=\"" + count + "\">" + ngayNhap + "</td>" + html_tr_td;
            html_tr_td = "";
            $("#tbl-LoadNhapVatTu tbody").empty();
            $("#tbl-LoadNhapVatTu tbody").append(html_tbody);
        },
        error: function (errormessage) {
            console.log("Lỗi :" + errormessage);
        }
    });
}

function fnClick() {
    $("#btn-nhapvattu").click(function () {
        $(".modal-title-capvattu").text("Nhập vật tư");
        $("#ModalCapVatTu").modal("show");
        var html_nhap_vat_tu = "";
        var thead_nhap_vat_tu = "";
        var tbody_nhap_vat_tu = "";

        html_nhap_vat_tu += "<div class=\"row\">"
        html_nhap_vat_tu += "<div class=\"form-group col-sm-2 has-success\">";
        html_nhap_vat_tu += "<button type=\"button\" class=\"btn btn-info btn-sm \" id=\"btn-ThemDong\">Thêm dòng</button>";
        html_nhap_vat_tu += "</div>"
        html_nhap_vat_tu += "<div class=\"form-group col-sm-4 has-success\">";
        html_nhap_vat_tu += "<div class=\"input-group\">";
        html_nhap_vat_tu += "<span class=\"input-group-addon\" id=\"\">Ngày nhập vật tư</span>";
        html_nhap_vat_tu += "<input type=\"text\" class=\"form-control input-sm  datepicker\" id=\"inputNgayNhap\" />";
        html_nhap_vat_tu += "</div>";
        html_nhap_vat_tu += "</div>";
        html_nhap_vat_tu += "</div>"
        html_nhap_vat_tu += "<div class=\"row\">"
        html_nhap_vat_tu += "<table class=\"table table-bordered\" id=\"tbl-nhap-vat-tu\">";
        html_nhap_vat_tu += "<thead>";
        html_nhap_vat_tu += "</thead>";
        html_nhap_vat_tu += "<tbody>";
        html_nhap_vat_tu += "</tbody>";
        html_nhap_vat_tu += "</table>";
        html_nhap_vat_tu += "<div id=\"button-them-chi-tiet\" class=\"text-center\">";
        html_nhap_vat_tu += "<button type=\"button\" id=\"btn-nhap-vat-tu\" class=\"btn btn-primary\">Lưu</button>";
        html_nhap_vat_tu += "</div>";
        html_nhap_vat_tu += "</div>"


        $(".modal-body-capvattu").empty();
        $(".modal-body-capvattu").append(html_nhap_vat_tu);

        $("#inputNgayNhap").datepicker();
        $("#inputNgayNhap").datepicker("setDate", new Date);

        thead_nhap_vat_tu += "<tr>";
        thead_nhap_vat_tu += "<td>Tên vật tư</td>";
        thead_nhap_vat_tu += "<td>Đơn vị tính</td>";
        thead_nhap_vat_tu += "<td>Số lượng nhập</td>";
        thead_nhap_vat_tu += "<td>Chức năng</td>";
        thead_nhap_vat_tu += "</tr>";

        $("#tbl-nhap-vat-tu thead").empty();
        $("#tbl-nhap-vat-tu thead").append(thead_nhap_vat_tu);

        tbody_nhap_vat_tu += "<tr class=\"tr-xoaTable\">";
        tbody_nhap_vat_tu += "<td>";
        tbody_nhap_vat_tu += "<select class=\"form-control  select-vattu\">";
        tbody_nhap_vat_tu += "<option value=\"\"></option>";
        tbody_nhap_vat_tu += "</select>";
        tbody_nhap_vat_tu += "</td>";
        tbody_nhap_vat_tu += "<td class=\"DonViTinhVatTu\"></td>";
        tbody_nhap_vat_tu += "<td contenteditable=\"true\" class=\"SoLuongNhap\">0</td>";
        tbody_nhap_vat_tu += "<td class=\"xoaTable\">Xóa</td>";
        tbody_nhap_vat_tu += "</tr>";

        $("#tbl-nhap-vat-tu tbody").empty();
        $("#tbl-nhap-vat-tu tbody").append(tbody_nhap_vat_tu);
        ajaxGet = { "get": "" };
        dataJSON = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyNhapVatTu.aspx/ReVatTu",
            data: dataJSON,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                loadOptionSelect();

                $(".modal-body-capvattu").on("click", "#btn-ThemDong", function () {
                    $("#tbl-nhap-vat-tu tbody").append(tbody_nhap_vat_tu);
                    loadOptionSelect();
                });

            },
            error: function (errormessage) {
                console.log("Lỗi :" + errormessage);
            }
        });
    });


    $(".modal-body-capvattu").on("click", "#btn-nhap-vat-tu", function () {

        var xuatNhapTons = [];
        $("#tbl-nhap-vat-tu tbody tr").each(function (index, item) {
            xuatNhapTons.push({
                "VatTuId": $(this).find('.select-vattu').val(),
                "SoLuong": $(this).find('td.SoLuongNhap').text(),
                "NgayXuatNhapTon": dmy2ymd($("#inputNgayNhap").val()),
            });
        });
        dataJSON = JSON.stringify({ xuatNhapTons });
        //console.log(dataJSON);

        $.ajax({
            type: "POST",
            url: "QuanLyNhapVatTu.aspx/insertNhapVatTu",
            data: dataJSON,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "ok") {
                    $("#ModalCapVatTu").modal("hide");
                    fnLoad();
                    Swal.fire({
                        title: "Thêm thành công!",
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

    $(".modal-body-capvattu").on("click", ".xoaTable", function () {
        var conf = confirm("Bạn có muốn xóa vật tư này không ? ");
        if (conf == true) {
            $(this).parents(".tr-xoaTable").remove();
        }
    });

    $("#div-nhapvattu-body").on("click", "#btn-update-vattunhap", function () {
        //console.log($(this).attr("updateId"));

        $(".modal-title-capvattu").text("Sửa vật tư");
        $("#ModalCapVatTu").modal("show");
        var html_nhap_vat_tu = "";
        var thead_nhap_vat_tu = "";
        var tbody_nhap_vat_tu = "";

        html_nhap_vat_tu += "<div class=\"form-group col-sm-4 has-success\">";
        html_nhap_vat_tu += "<div class=\"input-group\">";
        html_nhap_vat_tu += "<span class=\"input-group-addon\" id=\"\">Ngày nhập vật tư</span>";
        html_nhap_vat_tu += "<input type=\"text\" class=\"form-control input-sm  datepicker\" id=\"inputNgayNhap\" />";
        html_nhap_vat_tu += "</div>";
        html_nhap_vat_tu += "</div>"
        html_nhap_vat_tu += "<table class=\"table table-bordered\" id=\"tbl-nhap-vat-tu\">";
        html_nhap_vat_tu += "<thead>";
        html_nhap_vat_tu += "</thead>";
        html_nhap_vat_tu += "<tbody>";
        html_nhap_vat_tu += "</tbody>";
        html_nhap_vat_tu += "</table>";
        html_nhap_vat_tu += "<div id=\"button-them-chi-tiet\" class=\"text-center\">";
        html_nhap_vat_tu += "<button type=\"button\" id=\"btn-cap-nhat\" class=\"btn btn-primary\" idCapNhat=\"" + $(this).attr("updateId") + "\">Cập nhật</button>";
        html_nhap_vat_tu += "</div>";

        $(".modal-body-capvattu").empty();
        $(".modal-body-capvattu").append(html_nhap_vat_tu);

        $("#inputNgayNhap").datepicker();
        $("#inputNgayNhap").datepicker("setDate", new Date);

        thead_nhap_vat_tu += "<tr>";
        thead_nhap_vat_tu += "<td>Tên vật tư</td>";
        thead_nhap_vat_tu += "<td>Đơn vị tính</td>";
        thead_nhap_vat_tu += "<td>Số lượng nhập</td>";
        thead_nhap_vat_tu += "</tr>";

        $("#tbl-nhap-vat-tu thead").empty();
        $("#tbl-nhap-vat-tu thead").append(thead_nhap_vat_tu);

        ajaxGet = { "get": $(this).attr("updateId") };
        dataJSON = JSON.stringify({ ajaxGet });

        $.ajax({
            type: "POST",
            url: "QuanLyNhapVatTu.aspx/ReGetbyIdXNT",
            data: dataJSON,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);

                tbody_nhap_vat_tu += "<tr class=\"tr-xoaTable\">";
                tbody_nhap_vat_tu += "<td class=\"TenVatTu\">" + d.TenVatTu + "</td>";
                tbody_nhap_vat_tu += "<td class=\"DonViTinhVatTu\">" + d.DonViTinh + "</td>";
                tbody_nhap_vat_tu += "<td contenteditable=\"true\" class=\"SoLuongNhap\">" + d.SoLuong + "</td>";
                tbody_nhap_vat_tu += "</tr>";

                $("#tbl-nhap-vat-tu tbody").empty();
                $("#tbl-nhap-vat-tu tbody").append(tbody_nhap_vat_tu);

                // Chỉ cho phép nhập số
                //$('.SoLuongNhap').keyup(function (e) {

                //    FormatCurrency(this);
                //});
                //$('.SoLuongNhap').keypress(function (e) {
                //    return CheckNumeric();
                //});
            },
            error: function (errormessage) {
                console.log("Lỗi :" + errormessage);
            }
        });


    });

    $(".modal-body-capvattu").on("click", "#btn-cap-nhat", function () {
        var ngayCapNhat = dmy2ymd($("#inputNgayNhap").val());
        var SoLuongCapNhat = $(".SoLuongNhap").text();
        var idCapNhat = $(this).attr("idcapnhat");

        xuatNhapTons = {
            "Id": idCapNhat,
            "SoLuong": SoLuongCapNhat,
            "NgayXuatNhapTon": ngayCapNhat
        }

        dataJSON = JSON.stringify({ xuatNhapTons });

        $.ajax({
            type: "POST",
            url: "QuanLyNhapVatTu.aspx/updateNhapVatTu",
            data: dataJSON,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "ok") {
                    $("#ModalCapVatTu").modal("hide");
                    fnLoad();
                    Swal.fire({
                        title: "Cập nhật thành công!",
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

    $("#div-nhapvattu-body").on("click", "#btn-delete-vattunhap", function () {
        var SoLuongShow = $(this).attr("attrsoluong");
        //console.log(SoLuongShow);
        ajaxGet1 = { "get": $(this).attr("deleteid") };
        Swal.fire({
            title: 'Bạn có muốn xóa vật tư này không ?',
            text: "Hành động này sẽ không thể khôi phục!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý!',
            cancelButtonText: 'Không đồng ý!'
        }).then((result) => {
            if (result.value) {
                ajaxGet = { "get": $(this).attr("vattuId") };
                dataJSON = JSON.stringify({ ajaxGet });
                //console.log(dataJSON);
                $.ajax({
                    type: "POST",
                    url: "QuanLyNhapVatTu.aspx/ReSoLuongTonKho",
                    data: dataJSON,
                    contentType: "application/json;charset=utf-8",
                    dataType: "json",
                    async: false,
                    success: function (responsive) {
                        d = responsive.d;
                        //console.log(d);
                        if (parseInt(d.SoLuong) <= parseInt(SoLuongShow)) {
                            Swal.fire({
                                type: 'error',
                                title: 'Không thể xóa vì số lượng tồn kho chỉ còn  '+ d.SoLuong +'  vui lòng kiểm tra lại',
                                showConfirmButton: false,
                                timer: 3000
                            });
                        } else {
                            dataJSON = JSON.stringify({ ajaxGet1 });
                            //console.log(dataJSON);
                            $.ajax({
                                type: "POST",
                                url: "QuanLyNhapVatTu.aspx/deleteNhapVatTu",
                                data: dataJSON,
                                contentType: "application/json;charset=utf-8",
                                dataType: "json",
                                async: false,
                                success: function (responsive) {
                                    d = responsive.d;
                                    if (d == "ok") {
                                        fnLoad();
                                        Swal.fire({
                                            title: "Xóa vật tư thành công!",
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
                        }
                    },
                    error: function (errormessage) {
                        console.log("Lỗi :" + errormessage);
                    }
                });
            }
        })
    });
}

function fnChange() {

}

function fnShowHideModal() {
    $('#ModalCapVatTu').on('hidden.bs.modal', function (e) {
        fnLoad();
        $(".modal-body-capvattu").empty();
    });
}


function loadOptionSelect() {
    var _Option = "";
    $.each(d, function (index, item) {
        _Option += "<option value=\"" + item.Id + "\" DonViTinh=\"" + item.DonViTinh + "\">" + item.TenVatTu + "</option>";
    });
    $(".select-vattu").append(_Option);

    $(".select-vattu").change(function () {
        var element = $(this).find('option:selected');
        mytag = element.attr("DonViTinh");
        $(this).parents("tr").find(".DonViTinhVatTu").text(mytag);
    });

    $(".select-vattu").select2({
        allowHtml: true,
    });
}

