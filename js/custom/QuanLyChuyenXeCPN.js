var jsonData;
var ajaxGet;
var ajaxGet4;
var d;
var html_body;

$(document).ready(function () {
    fncLoad();
    fncChange();
    fncClick();
    fncModal();
});

function fncLoad() {
    // Đây là load
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyChuyenXeCPN.aspx/reChuyenXe",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (reponsive) {
            d = reponsive.d;
            html_body = "";

            $.each(d, function (key, val) {
                html_body += "<tr>";
                html_body += "<td>" + (key + 1) + "</td>";
                html_body += "<td>" + val.MaTheoDoi + "</td>";
                html_body += "<td>" + val.BKSXe + "</td>";
                html_body += "<td>" + convertDate(val.NgayGioThucTe)[1] + "</td>";
                html_body += "<td>" + convertDate(val.NgayGioThucTe)[3] + "</td>";
                html_body += "<td>" + val.TaiTrong + "</td>";
                html_body += "<td>" + val.DonViVanTai + "</td>";
                html_body += "<td>" + val.SoNiemPhong + "</td>";
                html_body += "<td>" + convertDate(val.NgayGioGiaoHangXong)[1] + "</td>";
                html_body += "<td>" + convertDate(val.NgayGioGiaoHangXong)[3] + "</td>";
                html_body += "<td>" + val.DonDieuPhoi + "</td>";
                html_body += "<td>" + val.FullName2 + "</td>";
                html_body += "<td>" + convertDate(val.NgayTao)[1] + "</td>";
                html_body += "<td> <button type=\"button\" attrMaTheoDoi=\"" + val.MaTheoDoi + "\" class=\"btn btn-success btn-duyet\">Duyệt</button>  <button type=\"button\" attrMaTheoDoi=\"" + val.MaTheoDoi + "\" class=\"btn btn-primary btn-xem\">Xem</button> <button attrMaTheoDoi=\"" + val.MaTheoDoi + "\" type=\"button\" class=\"btn btn-warning btn-sua\">Sửa</button> <button attrMaTheoDoi=\"" + val.MaTheoDoi + "\" type=\"button\" class=\"btn btn-danger btn-xoa\">Xóa</button></td>";
                html_body += "</tr>";
            });

            $("#tbl_chuyenxecpn tbody").empty().append(html_body);
        }, error: function (err) {
            console.log(err.Message);
        }
    }).done(function () {
    });
}

function fncChange() {
    // Đây là change 1 
}

function fncClick() {
    $("#btn-duyet-quanlyxe").click(function () {
        var _matheodoi = $(this).attr("attrmatheodoi");
        var _ngaygiogiaohang = dmy2ymd($(".input-ngaygiaohang").val()) + " " + $(".input-giogiaohang ").val();
        var _ngaygiogiaohangxong = dmy2ymd($(".input-ngaygiaohangxong").val()) + " " + $(".input-giogiaohangxong").val();
        var _nguoinhan = $(".input-nguoinhan").val();

        ajaxGet4 = { "get1": _matheodoi, "get2": _ngaygiogiaohang, "get3": _ngaygiogiaohangxong, "get4": _nguoinhan }
        jsonData = JSON.stringify({ ajaxGet4 });
        $.ajax({
            type: "POST",
            url: "QuanLyChuyenXeCPN.aspx/UpdateDuyetChuyenXe",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d)
            }, error: function (err) {
                console.log(err.Message);
            }
        }).done(function () {
        });
    });

    $("#tbl_chuyenxecpn").on("click", ".btn-duyet", function () {
        var _matheodoi = $(this).attr("attrMaTheoDoi");
        $("#modalDuyetChuyenXe").modal("show");
        $("#btn-duyet-quanlyxe").attr("attrmatheodoi", _matheodoi)
        $(".input-ngaygiaohang").val(moment().format("DD/MM/YYYY"));
        $(".input-giogiaohang").val(moment().format("HH:mm"));
        $(".input-ngaygiaohangxong").val(moment().format("DD/MM/YYYY"));
        $(".input-giogiaohangxong").val(moment().format("HH:mm"));
    });

    $("#btn-capnhatgiaohang-luu").click(function () {
        var spreadsheet = $("#spreadsheetGiaoHang").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var DataInput = [];
        var cells;
        var cell_Sokien = "";
        var cell_Invoice = "";
        var cell_Ngaygiao = "";
        var cell_Giogiao = "";
        var cell_Diachigiao = "";
        var cell_Nguoinhanhang = "";
        var cell_Sodienthoai = "";
        var cell_Mancc = "";
        var cellId = "";
        var cell_Remark = "";
        var cell_SoTMS = "";
        var cell_GW = "";
        var cell_CBM = "";
        var cell_PIC = "";
        var cell_BU = "";
        var cell_Hawb = "";

        data.forEach(function (dataItem, dataIndex) {
            cell_Sokien = "";
            cell_Invoice = "";
            cell_Ngaygiao = "";
            cell_Giogiao = "";
            cell_Diachigiao = "";
            cell_Nguoinhanhang = "";
            cell_Sodienthoai = "";
            cell_Mancc = "";
            cell_Remark = "";
            cellId = "";
            cell_SoTMS = "";
            cell_GW = "";
            cell_CBM = "";
            cell_PIC = "";
            cell_BU = "";
            cell_Hawb = "";
            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Sokien = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cell_Hawb = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cell_SoTMS = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cell_Invoice = cells[cellIndex].value;
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cell_Diachigiao = cells[cellIndex].value;
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cell_BU = cells[cellIndex].value;
                        }
                        break;
                    case 6:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cell_Remark = cells[cellIndex].value;
                        }
                        break;
                    case 7:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cell_PIC = cells[cellIndex].value;
                        }
                        break;
                    case 8:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cellId = cells[cellIndex].value;
                        }
                        break;

                }
            })
            if (cellId != "") {

                DataInput.push({
                    Id: cellId,
                    SoTMS: cell_SoTMS,
                    SoInvoice: cell_Invoice,
                    BU: cell_BU,
                    PCS: cell_Sokien,
                    DiaChiGiaoHang: cell_Diachigiao,
                    GhiChu: cell_Remark,
                    PIC: cell_PIC,
                    HAWB: cell_Hawb
                });
            }

        })
        var jsonData = JSON.stringify({ DataInput });
        $.ajax({
            type: "POST",
            url: "QuanLyChuyenXeCPN.aspx/UpdateChuyenXe",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d)
            }, error: function (err) {
                console.log(err.Message);
            }
        }).done(function () {
        });
    })

    $("#tbl_chuyenxecpn").on("click", ".btn-sua", function () {
        var _matheodoi = $(this).attr("attrMaTheoDoi");
        ajaxGet = { "get": _matheodoi };
        jsonData = JSON.stringify({ ajaxGet });
        var dataSource = [];
        $.ajax({
            type: "POST",
            url: "CPNView.aspx/reCPNMaTheoDoi",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d)
                $.each(d, function (key, val) {
                    dataSource.push({
                        "SoKien": val.PCS,
                        "HAWB": val.HAWB,
                        //"GW": val.GW,
                        //"CBM": val.CBM,
                        "SoTMS": val.SoTMS,
                        "INVOICE": val.SoInvoice,
                        //"NgayGiaoHang": convertDate(val.NgayGioGiao)[5].split(" ")[0],
                        //"GioGiaoHang": convertDate(val.NgayGioGiao)[5].split(" ")[1],
                        "DiaChiGiaoHang": val.DiaChiGiaoHang,

                        "BU": val.BU,
                        "Remark": val.GhiChu,
                        "PIC": val.PIC,
                        //"NguoiNhanHang": val.NguoiNhanHang,
                        //"SoDienThoai": val.SoDienThoaiNguoiNhan,
                        "ID": val.Id
                    })
                });
            }, error: function (err) {
                console.log(err.Message);
            }
        }).done(function () {
        });

        $("#modalCapNhatGiaoHang").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheetGiaoHang").empty();
        $("#spreadsheetGiaoHang").kendoSpreadsheet({
            columns: 9,
            rows: 100,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheetGiaoHang").data("kendoSpreadsheet");
        //var sheet = spreadsheet.activeSheet();
        //sheet.range(kendo.spreadsheet.SHEETREF).clear();
        $(window).trigger("resize");
        spreadsheet.fromJSON({
            sheets: [{
                name: "KeHoach",
                //mergedCells: [
                //    "A1:G1"
                //],
                dataSource: dataSource,
                rows: [{
                    height: 40,
                    cells: [
                        { value: "Số kiện", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "HAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "GW", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "CBM", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số TMS", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "INVOICE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Ngày giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Giờ giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Địa chỉ giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "BU", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Remark", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PIC vận chuyển", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Người nhận hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Số điện thoại", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// Số kiện
                        width: 80
                    }
                    , {// HAWB
                        width: 120
                    }
                    , {// GW
                        width: 140
                    }
                    , {// CBM
                        width: 120
                    },
                    {// Số TMS
                        width: 150
                    },
                    {// Invoice
                        width: 150
                    },
                    {// Ngày giao hàng
                        width: 100
                    },
                    {// giờ giao hàng
                        width: 80
                    },
                    {// địa chỉ giao hàng
                        width: 150
                    },
                    {// Người nhận hàng
                        width: 150
                    }
                    ,
                    {// Số điện thoại
                        width: 100
                    }
                    ,
                    {// Mã NCC
                        width: 80
                    }
                    ,
                    {// Remark
                        width: 150
                    },
                    {// PIC vận chuyển
                        width: 150
                    }
                ]
            }]
        });

        var sheet = spreadsheet.activeSheet();
        sheet.range("C1:C100").format("@");  // Adjust the range based on your data
    })
    $("#tbl_chuyenxecpn").on("click", ".btn-xoa", function () {
        var _matheodoi = $(this).attr("attrMaTheoDoi");
        var conf = confirm("Bạn có muốn xóa chuyến xe có mã theo dõi " + _matheodoi + " này không ?");
        if (conf) {

            ajaxGet = { "get": _matheodoi };
            jsonData = JSON.stringify({ ajaxGet });
            $.ajax({
                type: "POST",
                url: "QuanLyChuyenXeCPN.aspx/DeleteMaTheoDoi",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (reponsive) {
                    d = reponsive.d;
                    fncLoad();
                }, error: function (err) {
                    console.log(err.Message);
                }
            }).done(function () {
            });

        }
    })

    $("#tbl_chuyenxecpn").on("click", ".btn-xem", function () {
        var _matheodoi = $(this).attr("attrMaTheoDoi");

        window.open('./CPNView.aspx?MaTheoDoi=' + _matheodoi + '', '_blank');
    })
}

function fncModal() {
    // Đây là modal 1
    $('#modalCapNhatGiaoHang').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });
}