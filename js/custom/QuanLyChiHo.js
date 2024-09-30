var jsonData;
var ajaxGet;
var ajaxGet1;
var ajaxGet2;
var ajaxGet3;
var html_option;
var chiHo;
var arrayNCC;
$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();
    fncModal();

    // load ncc
    loadNCC();
});

function fncLoad() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });

    $.ajax({
        type: "POST",
        url: "QuanLyChiHo.aspx/ReChiHo",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            html_body = "";
            //console.log(d)

            $.each(d, function (key, val) {
                html_body += "<tr>";
                html_body += "<td>" + (key + 1) + "</td>";
                html_body += "<td>" + val.NCU + "</td>";
                html_body += "<td>" + val.LoaiHinh + "</td>";
                html_body += "<td>" + convertDate(val.NgayCK)[1] + "</td>";
                html_body += "<td>" + val.KhachHang + "</td>";
                html_body += "<td>" + val.AWBBILL + "</td>";
                html_body += "<td>" + val.KiHieuHD + "</td>";
                html_body += "<td>" + val.SoHD + "</td>";
                html_body += "<td>" + convertDate(val.NgayHD)[1] + "</td>";
                html_body += "<td>" + val.TenNguoiBan + "</td>";
                //html_body += "<td>" + val.PhiChungTuNhap + "</td>";
                html_body += "<td>" + fncTachPhanNghin(val.SoTruocThue) + "đ" + "</td>";
                html_body += "<td>" + fncTachPhanNghin(val.ThanhTien) + "đ" + "</td>";
                html_body += "<td>" + val.Check_ChiHo + "</td>";
                html_body += "<td>" + val.GhiChu + "</td>";
                html_body += "<td>" + val.TrangThaiDNTT + "</td>";
                html_body += "<td>" + val.TrangThaiDoiChieuKhach + "</td>";
                html_body += "<td>" + val.IdNhap + "</td>";
                html_body += "<td><button type=\"button\" class=\"btn btn-warning btn-chiho-sua\" attrID=\"" + val.Id + "\">Sửa</button>  <button type=\"button\" class=\"btn btn-danger btn-chiho-xoa\" attrID=\"" + val.Id + "\">Xóa</button></td>";
                html_body += "</tr>";
            });

            $("#tbl-chiho tbody").empty().append(html_body);
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }

    });
}

function fncClick() {
    $("#btn-chiho-excel-luu").click(function () {
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var DataInput = [];
        var cells;
        var cell_NCC;
        var cell_LoaiHinh;
        var cell_AWB;
        var cell_NgayCk;
        var cell_SoHD;
        var cell_NgayHd;
        var cell_SoTienThue;
        var cell_ThanhTien;
        var cell_KhachHang;
        var cell_GhiChu;
        var checkNCC = true;

        data.forEach(function (dataItem, dataIndex) {
            cells = "";
            cell_NCC = "";
            cell_LoaiHinh = "";
            cell_AWB = "";
            cell_NgayCk = "";
            cell_SoHD = "";
            cell_NgayHd = "";
            cell_SoTienThue = "";
            cell_ThanhTien = "";
            cell_KhachHang = "";
            cell_GhiChu = "";
            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_NCC = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_LoaiHinh = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_AWB = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_NgayCk = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoHD = cells[cellIndex].value;
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined) {
                            cell_NgayHd = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 6:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoTienThue = cells[cellIndex].value;
                        }
                        break;
                    case 7:
                        if (cells[cellIndex].value !== undefined) {
                            cell_ThanhTien = cells[cellIndex].value;
                        }
                        break;
                    case 8:
                        if (cells[cellIndex].value !== undefined) {
                            cell_KhachHang = cells[cellIndex].value;
                        }
                        break;
                    case 8:
                        if (cells[cellIndex].value !== undefined) {
                            cell_GhiChu = cells[cellIndex].value;
                        }
                        break;
                }
            })

            DataInput.push(
                {
                    "Id": "",
                    "NCU": String(cell_NCC).trim().replace(/ /g, ''),
                    "LoaiHinh": String(cell_LoaiHinh).trim().replace(/ /g, ''),
                    "NgayCK": String(cell_NgayCk).trim().replace(/ /g, ''),
                    "KhachHang": String(cell_KhachHang).trim().replace(/ /g, ''),
                    "AWBBILL": String(cell_AWB).trim().replace(/ /g, ''),
                    "Check_ChiHo": "",
                    "KiHieuHD": "",
                    "SoHD": String(cell_SoHD).trim().replace(/ /g, ''),
                    "NgayHD": String(cell_NgayHd).trim().replace(/ /g, ''),
                    "TenNguoiBan": "",
                    "PhiChungTuNhap": "",
                    "SoTruocThue": String(cell_SoTienThue).trim().replace(/ /g, ''),
                    "ThanhTien": String(cell_ThanhTien).trim().replace(/ /g, ''),
                    "HoaDonKhach": "",
                    "TrangThaiDNTT": "",
                    "TrangThaiDoiChieuKhach": "",
                    "IdNhap": "",
                    "GhiChu": String(cell_GhiChu).trim().replace(/ /g, '')
                }
            );
        })

        console.log(DataInput)
        for (var i = 0; i < DataInput.length; i++) {
            //Check nhà cung cấp có trong cơ sở dữ liệu không
            if (arrayNCC.indexOf(DataInput[i].NCU) == -1) {
                checkNCC = false;
                break;
            }
        }
        if (checkNCC) {
            $.ajax({
                type: "POST",
                url: "QuanLyChiHo.aspx/InsertChiHoExcel",
                data: JSON.stringify({ DataInput }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    //console.log(d)
                    if (d == "ok") {
                        fncLoad();
                        $("#modalQuanLyChiHoExcel").modal("hide");
                        swal.fire({
                            title: messageTitle,
                            text: "hệ thống sẽ tự tải lại sau 2s",
                            type: 'success',
                            timer: 2000,
                        })
                    }
                },
                error: function (responsive) {
                    alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
                }
            })
        } else {
            swal.fire({
                title: "Nhà cung cấp chưa có trong cơ sở dữ liệu",
                text: "hệ thống sẽ tự tải lại sau 5s",
                type: 'warning',
                timer: 5000,
            })
        }
    })

    $(".btn-chiho-kehoach-excel").click(function () {
        $("#modalQuanLyChiHoExcel").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheet").empty();
        $("#spreadsheet").kendoSpreadsheet({
            columns: 2,
            rows: 500,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var sheet = spreadsheet.activeSheet();
        sheet.range(kendo.spreadsheet.SHEETREF).clear();
        $(window).trigger("resize");
        spreadsheet.fromJSON({
            sheets: [{
                name: "KeHoach",
                //mergedCells: [
                //    "A1:G1"
                //],
                rows: [{
                    height: 40,
                    cells: [
                        { value: "NCC", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Loại hình", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "AWB/BILL", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Ngày chuyển khoản", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số hợp đồng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Ngày hợp đồng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số tiền thuế", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Thành tiền", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Khách hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Ghi chú", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// NCC
                        width: 100
                    },
                    {// Loại hình
                        width: 100
                    },
                    {// AWB/BILL
                        width: 100
                    },
                    {// Ngày chuyển khoản
                        width: 100
                    },
                    {//Số hợp đồng
                        width: 100
                    },
                    {//Ngày hợp đồng
                        width: 100
                    },
                    {//Số tiền thuế
                        width: 100
                    },
                    {//Thành tiền
                        width: 100
                    },
                    {//Khách hàng
                        width: 100
                    },
                    {//Ghi chú
                        width: 100
                    },
                ]
            }]
        });
    })

    $("#tbl-chiho").on("click", ".btn-chiho-xoa", function () {
        var Id = $(this).attr("attrID");
        var conf = confirm("Bạn có muốn xóa đơn chi hộ này không?")
        if (conf) {

            ajaxGet = { "get": Id };
            jsonData = JSON.stringify({ ajaxGet });

            $.ajax({
                type: "POST",
                url: "QuanLyChiHo.aspx/DeleteChiHo",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    if (d == "ok") {
                        fncLoad();
                        swal.fire({
                            title: "Xóa chi hộ thành công",
                            text: "hệ thống sẽ tự tải lại sau 2s",
                            type: 'warning',
                            timer: 2000,
                        })
                    }
                },
                error: function (responsive) {
                    alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
                }
            });
        }
    })

    $("#btn-luu-chiho").click(function () {
        if ($("#input-chiho-ncu").val() === "") {
            swal.fire({
                title: "Vui lòng chọn NCC",
                text: "hệ thống sẽ tự tải lại sau 5s",
                type: 'warning',
                timer: 5000,
            })
        } else {
            InsertUpdateChiHo("");
        }
    });
    $("#btn-capnhat-chiho").click(function () {
        if ($("#input-chiho-ncu").val() === "") {
            swal.fire({
                title: "Vui lòng chọn NCC",
                text: "hệ thống sẽ tự tải lại sau 5s",
                type: 'warning',
                timer: 5000,
            })
        }
        else {
            InsertUpdateChiHo($(this).attr("attrid"));

        }
    });

    $("#tbl-chiho").on("click", ".btn-chiho-sua", function () {
        $("#myModalViewChiHo").modal("show");
        $("#btn-capnhat-chiho").attr("attrid", $(this).attr("attrID"))
        $("#h4-chiho-view-tieude").empty().append("Cập nhật chi hộ");
        $("#btn-luu-chiho").hide();
        $("#btn-capnhat-chiho").show();
        loadNCC();
        loadKH();

        ajaxGet = { "get": $(this).attr("attrID") };
        jsonData = JSON.stringify({ ajaxGet });

        $.ajax({
            type: "POST",
            url: "QuanLyChiHo.aspx/reChiHoById",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d)
                $("#input-chiho-ncu").val(d.NCU);
                $("#select-chiho-loaihinh").val(d.PhiChungTuNhap);
                $("#input-chiho-ngaychuyenkhoan").val(convertDate(d.NgayCK)[1]);
                $("#input-chiho-khachhang").val(d.KhachHang);
                $("#input-chiho-awbbill").val(d.AWBBILL);
                $("#input-chiho-check").val(d.Check_ChiHo);
                $("#input-chiho-kihieuhd").val(d.KiHieuHD);
                $("#input-chiho-sohd").val(d.SoHD);
                $("#input-chiho-ngayhd").val(convertDate(d.NgayHD)[1]);
                $("#input-chiho-tennguoiban").val(d.TenNguoiBan);
                $("#input-chiho-sotienthue").val(fncTachPhanNghin(d.SoTruocThue));
                $("#input-chiho-thanhtien").val(fncTachPhanNghin(d.ThanhTien));
                $("#input-chiho-tt-dck").val(d.TrangThaiDoiChieuKhach);
                $("#input-chiho-tt-dntt").val(d.TrangThaiDNTT);
                $("#input-chiho-idnhap").val(d.IdNhap);
                $("#input-chiho-ghichu").val(d.GhiChu);
            },
            error: function (responsive) {
                alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
            }

        });

    });

    $(".btn-chiho-kehoach").click(function () {
        $("#myModalViewChiHo").modal("show");
        $("#h4-chiho-view-tieude").empty().append("Thêm mới chi hộ");
        $("#btn-luu-chiho").show();
        $("#btn-capnhat-chiho").hide();
        // ngày hiện tại deploy 20/09
        var d_now_20180131 = new Date();
        $("#input-chiho-ngaychuyenkhoan").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth() + 1, 0));
        $("#input-chiho-ngayhd").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth() + 1, 0));
        loadNCC();
        loadKH();
    });
}

function fncChange() {
    $("#myModalViewChiHo").on("change", "#input-chiho-ncu", function () {
        if ($(this).val() === "") {
            $("#input-chiho-kihieuhd").val("");
            $("#input-chiho-tennguoiban").val("");
        } else {
            fncLoadOrigin($(this).val());
        }
    });
}

function fncModal() {
    $('#modalQuanLyChiHoExcel').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });
    $('#myModalViewChiHo').on('hide.bs.modal', function () {
        $("#input-chiho-ncu").val("");
        $("#select-chiho-loaihinh").val("");
        $("#input-chiho-ngaychuyenkhoan").val("");
        $("#input-chiho-khachhang").val("");
        $("#input-chiho-awbbill").val("");
        $("#input-chiho-check").val("");
        $("#input-chiho-kihieuhd").val("");
        $("#input-chiho-sohd").val("");
        $("#input-chiho-ngayhd").val("");
        $("#input-chiho-tennguoiban").val("");
        $("#input-chiho-sotienthue").val("");
        $("#input-chiho-thanhtien").val("");
        $("#input-chiho-tt-dck").val("");
        $("#input-chiho-tt-dntt").val("");
        $("#input-chiho-tt-dck").val("");
        $("#input-chiho-idnhap").val("");
        $("#input-chiho-ghichu").val("");
    })
}

function loadNCC() {
    arrayNCC = [];
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });

    $.ajax({
        type: "POST",
        url: "QuanLyChiHoNCC.aspx/reNCC",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            html_option = "<option value=\"\"></option>"
            $.each(d, function (key, val) {
                html_option += "<option value=\"" + val.NCC + "\">" + val.NCC + "</option>"

                arrayNCC.push(val.NCC);
            });
            $("#sltNCC").empty().append(html_option);
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }

    });
}

function loadKH() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });

    $.ajax({
        type: "POST",
        url: "QuanLyChiHo.aspx/reKhachHang",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            html_option = "<option value=\"\"></option>"
            $.each(d, function (key, val) {
                html_option += "<option value=\"" + val.KhachHang + "\">" + val.KhachHang + "</option>"
            });
            $("#sltKhachHang").empty().append(html_option);
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }

    });
}

function fncLoadOrigin(input) {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": input };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyChiHoNCC.aspx/reNCCByNCC",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            $("#input-chiho-kihieuhd").val(d.KiHieuHoaDon1);
            $("#input-chiho-tennguoiban").val(d.TenCty);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}

function InsertUpdateChiHo(Id) {
    chiHo = {
        "Id": Id,
        "NCU": $("#input-chiho-ncu").val(),
        "LoaiHinh": $("#select-chiho-loaihinh").val(),
        "NgayCK": dmy2ymd($("#input-chiho-ngaychuyenkhoan").val()),
        "KhachHang": $("#input-chiho-khachhang").val(),
        "AWBBILL": $("#input-chiho-awbbill").val(),
        "Check_ChiHo": $("#input-chiho-check").val(),
        "KiHieuHD": $("#input-chiho-kihieuhd").val(),
        "SoHD": $("#input-chiho-sohd").val(),
        "NgayHD": dmy2ymd($("#input-chiho-ngayhd").val()),
        "TenNguoiBan": $("#input-chiho-tennguoiban").val(),
        "PhiChungTuNhap": "",
        "SoTruocThue": $("#input-chiho-sotienthue").val().replace(/,/g, ""),
        "ThanhTien": $("#input-chiho-thanhtien").val().replace(/,/g, ""),
        "HoaDonKhach": $("#input-chiho-tt-dck").val(),
        "TrangThaiDNTT": $("#input-chiho-tt-dntt").val(),
        "TrangThaiDoiChieuKhach": $("#input-chiho-tt-dck").val(),
        "IdNhap": $("#input-chiho-idnhap").val(),
        "GhiChu": $("#input-chiho-ghichu").val(),
    }

    var messageTitle = "Thêm mới chi hộ thành công!";
    if (Id != "") {
        messageTitle = "Cập nhật chi hộ thành công!";
    }

    //console.log(chiHo)

    //Check nhà cung cấp có trong cơ sở dữ liệu không
    ajaxGet = { "get": $("#input-chiho-ncu").val() };
    jsonData = JSON.stringify({ ajaxGet })
    $.ajax({
        type: "POST",
        url: "QuanLyChiHoNCC.aspx/checkNCC",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "1") {
                $.ajax({
                    type: "POST",
                    url: "QuanLyChiHo.aspx/InsertUpdateChiHo",
                    data: JSON.stringify({ chiHo }),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    success: function (responsive) {
                        d = responsive.d;
                        //console.log(d)
                        if (d == "ok") {
                            fncLoad();
                            $("#myModalViewChiHo").modal("hide");
                            swal.fire({
                                title: messageTitle,
                                text: "hệ thống sẽ tự tải lại sau 2s",
                                type: 'success',
                                timer: 2000,
                            })
                        }
                    },
                    error: function (responsive) {
                        alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
                    }
                })
            } else {
                swal.fire({
                    title: "Nhà cung cấp chưa có trong cơ sở dữ liệu",
                    text: "hệ thống sẽ tự tải lại sau 5s",
                    type: 'warning',
                    timer: 5000,
                })
            }
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }

    })




}

// Chỉ cho phép nhập số
$('.input-thanhtoan-number').keyup(function (e) {
    FormatCurrency(this);
});
$('.input-thanhtoan-number').keypress(function (e) {
    return CheckNumeric();
});
// END Chỉ cho phép nhập số