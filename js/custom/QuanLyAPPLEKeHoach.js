var ajaxGet;
var d;
var html_body;
var trColor;
$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();
    fncModalAction();
});

function fncModalAction() {
    $('#modalThemKeHoach').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });
}

function fncLoad() {
    ajaxGet = { "get": "" };
    var jsonData = JSON.stringify({ ajaxGet });

    $.ajax({
        type: "POST",
        url: "QuanLyAPPLEKeHoach.aspx/aPPLEKeHoaches",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            html_body = "";
            $.each(d, function (key, val) {
                trColor = "";
                if (parseInt(val.CTN) > parseInt(val.CTNTT)) {
                    trColor = "backGroupAqua";
                }

                html_body += "<tr class=\"" + trColor + "\">";
                html_body += "<td>" + (key + 1) + "</td>";
                html_body += "<td>" + val.HAWB + "</td>";
                html_body += "<td>" + val.CONSIGNEE_NAME + "</td>";
                html_body += "<td>" + val.DN + "</td>";
                html_body += "<td>" + val.PLT + "</td>";
                html_body += "<td>" + val.GW + "</td>";
                html_body += "<td>" + val.GWTT + "</td>";
                html_body += "<td>" + val.CTN + "</td>";
                html_body += "<td>" + val.CTNTT + "</td>";
                html_body += "<td>" + val.STATUS + "</td>";
                html_body += "<td>" + convertDate(val.ESTIMATE_WH_ARRIVAL_TIME)[1] + "</td>";
                html_body += "<td>" + val.DEIVERY_TRUCK_PLATE + "</td>";
                html_body += "<td>" + val.DRIVER_NAME + "</td>";
                html_body += "<td>" + val.DRIVER_PHONE + "</td>";
                html_body += "<td>" + val.CARGO_ASSISTANT_NAME + "</td>";
                html_body += "<td>" + val.CARGO_ASSISTANT_PHONE + "</td>";
                html_body += "<td>";
                html_body += "<span class=\"btn-sua\" attrDN=\"" + val.DN + "\" attrHAWB=\"" + val.HAWB.trim() + "\">Sửa </span>"
                html_body += "<span class=\"btn-xoa\" attrId=\"" + val.Id + "\" attrDN=\"" + val.DN + "\" attrHAWB=\"" + val.HAWB.trim() + "\"> Xóa</span>"
                html_body += "</td>";
                html_body += "</tr>";
            });
            $("#tbl_kehoachapple tbody").empty().append(html_body);

        },
        error: function (error) {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Liên hệ IT',
                'error'
            )
        }
    }).done(function () {

    })

}

function fncClick() {
    // Thêm kế hoach show Modal
    $("#btn-themkehoach").click(function () {
        $("#modalThemKeHoach").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheet").empty();
        $("#spreadsheet").kendoSpreadsheet({
            columns: 15,
            rows: 30,
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
                        { value: "Số HAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Tên người nhận", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "phân loại", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số DN", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số lượng Pallets", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Trọng lượng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số lượng carton", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Tình trạng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Ngày dự kiến hàng về", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "BKS", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Tên lái xe", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "CMT/CCCD lái xe", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Tên phụ xe", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "CMD/CCCD phụ xe", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// HAWB
                        width: 150
                    },
                    {// CONSIGNEE NAME
                        width: 150
                    },
                    {// TYPE
                        width: 100
                    },
                    { // DN
                        width: 150
                    },
                    {// PLT
                        width: 50
                    },
                    {// GW
                        width: 50
                    },
                    {// CTN
                        width: 50
                    },
                    {//STATUS
                        width: 100
                    },
                    {// ESTIMATE WH ARRIVAL TIME
                        width: 150
                    },
                    {// DEIVERY TRUCK PLATE
                        width: 100
                    },
                    {// DRIVER NAME
                        width: 120
                    },
                    {// DRIVER PHONE
                        width: 120
                    },
                    {// CARGO ASSISTANT NAME
                        width: 100
                    },
                    {// CARGO ASSISTANT PHONE
                        width: 100
                    }
                ]
            }]
        });
    });

    ////////////////////////////////////// lưu thêm mới kế hoạch
    $("#btn-themkehoach-luu").click(function () {
        //$("#div-wait").show();
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var aPPLEKeHoach = [];
        var cells;
        var cell_HAWB = "";
        var cell_CONSIGNEE = "";
        var cell_TYPE = "";
        var cell_DN = "";
        var cell_PLT = "";
        var cell_GW = "";
        var cell_CTN = "";
        var cell_STATUS = "";
        var cell_DUEFOR = "";
        var cell_ACTUAL = "";
        var cell_ESTIMATE = "";
        var cell_DEIVERY = "";
        var cell_DRIVERNAME = "";
        var cell_DRIVERPHONE = "";
        var cell_CARGOASSITIANTNAME = "";
        var cell_CARGOASSITIANTPHONE = "";
        var cell_Id = "";
        //console.log(data);
        data.forEach(function (dataItem, dataIndex) {
            // clear biến value
            cell_HAWB = "";
            cell_CONSIGNEE = "";
            cell_TYPE = "";
            cell_DN = "";
            cell_PLT = "";
            cell_GW = "";
            cell_CTN = "";
            cell_STATUS = "";
            cell_DUEFOR = "";
            cell_ACTUAL = "";
            cell_ESTIMATE = "";
            cell_DEIVERY = "";
            cell_DRIVERNAME = "";
            cell_DRIVERPHONE = "";
            cell_CARGOASSITIANTNAME = "";
            cell_CARGOASSITIANTPHONE = "";
            cell_Id = "";
            // end clear biến value
            cells = dataItem.cells;
            //console.log(cells);
            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_HAWB = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_CONSIGNEE = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_TYPE = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DN = cells[cellIndex].value;
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PLT = cells[cellIndex].value;
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined) {
                            cell_GW = cells[cellIndex].value;
                        }
                        break;
                    case 6:
                        if (cells[cellIndex].value !== undefined) {
                            cell_CTN = cells[cellIndex].value;
                        }
                        break;
                    case 7:
                        if (cells[cellIndex].value !== undefined) {
                            if (cells[cellIndex].value !== undefined) {
                                cell_STATUS = cells[cellIndex].value;
                            }
                        }
                        break;
                    case 8:
                        if (cells[cellIndex].value !== undefined) {
                            cell_ESTIMATE = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 9:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DEIVERY = cells[cellIndex].value;
                        }
                        break;
                    case 10:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DRIVERNAME = cells[cellIndex].value;
                        }
                        break;
                    case 11:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DRIVERPHONE = cells[cellIndex].value;
                        }
                        break;
                    case 12:
                        if (cells[cellIndex].value !== undefined) {
                            cell_CARGOASSITIANTNAME = cells[cellIndex].value;
                        }
                        break;
                    case 13:
                        if (cells[cellIndex].value !== undefined) {
                            cell_CARGOASSITIANTPHONE = cells[cellIndex].value;
                        }
                        break;
                    case 14:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Id = cells[cellIndex].value;
                        }
                        break;
                }
            });
            aPPLEKeHoach.push(
                {
                    "Id": cell_Id
                    , "HAWB": String(cell_HAWB).trim().replace(/ /g, '')
                    , "CONSIGNEE_NAME": String(cell_CONSIGNEE)
                    , "Type": String(cell_TYPE).trim().replace(/ /g, '')
                    , "DN": String(cell_DN).trim().replace(/ /g, '')
                    , "ETD": ""
                    , "ETA": ""
                    , "PLT": String(cell_PLT).trim().replace(/ /g, '')
                    , "GW": String(cell_GW).trim().replace(/ /g, '')
                    , "CTN": String(cell_CTN).trim().replace(/ /g, '')
                    , "STATUS": String(cell_STATUS).trim().replace(/ /g, '')
                    , "DUE_FOR_CUSTOMS_CLEARANCE": ""
                    , "ACTUAL_CUSTOMS_CLEARANCE": ""
                    , "ESTIMATE_WH_ARRIVAL_TIME": String(cell_ESTIMATE).trim().replace(/ /g, '')
                    , "DEIVERY_TRUCK_PLATE": String(cell_DEIVERY).trim().replace(/ /g, '')
                    , "DRIVER_NAME": String(cell_DRIVERNAME)
                    , "DRIVER_PHONE": String(cell_DRIVERPHONE).trim().replace(/ /g, '')
                    , "CARGO_ASSISTANT_NAME": String(cell_CARGOASSITIANTNAME)
                    , "CARGO_ASSISTANT_PHONE": String(cell_CARGOASSITIANTPHONE).trim()
                }
            );
        })

        var jsonData = JSON.stringify({ aPPLEKeHoach });
        $.ajax({
            type: "POST",
            url: "QuanLyAPPLEKeHoach.aspx/insertKeHoachApple",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d)
                Swal.fire({
                    title: "Thêm danh sách hàng thành công!",
                    text: "Hệ thống sẽ tự tải lại sau 2s",
                    type: 'success',
                    timer: 2000,
                })
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
            //$("#div-wait").hide();
            $("#modalThemKeHoach").modal("hide");
            event.stopPropagation();
            fncLoad();
        })
    })
    ////////////////////////////////////// \\lưu thêm mới kế hoạch
    // Click show modal sửa
    $("#tbl_kehoachapple").on("click", ".btn-sua", function () {
        var HAWB = $(this).attr("attrhawb").trim();
        var DN = $(this).attr("attrdn").trim();
        var dataSource = [];
        var ajaxGet = { "get": DN };
        jsonData = JSON.stringify({ ajaxGet });
        console.log(DN)
        $.ajax({
            type: "POST",
            url: "QuanLyAPPLEKeHoach.aspx/aPPLEKeHoachesbyhawb",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                $.each(d, function (key, val) {
                    dataSource.push({
                        "HAWB": val.HAWB,
                        "TenNguoiNhan": val.CONSIGNEE_NAME,
                        "PhanLoai": val.TYPE,
                        "SoDN": val.DN,
                        "PLT": val.PLT,
                        "TrongLuong": val.GW,
                        "SoCTN": val.CTN,
                        "TinhTrang": val.STATUS,
                        "NgayDuKienHangVe": convertDate(val.ESTIMATE_WH_ARRIVAL_TIME)[1],
                        "BKS": val.DEIVERY_TRUCK_PLATE,
                        "LaiXe": val.DRIVER_NAME,
                        "CCCDLX": val.DRIVER_PHONE,
                        "TenPhuXe": val.CARGO_ASSISTANT_NAME,
                        "CCCDPX": val.CARGO_ASSISTANT_PHONE,
                        "Id": val.Id
                    });
                });
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })

        $(".modal-title").empty().append("Sửa kế hoạch");
        $("#modalThemKeHoach").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });

        $("#spreadsheet").empty();
        $("#spreadsheet").kendoSpreadsheet({
            columns: 15,
            rows: 30,
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
                dataSource: dataSource,
                rows: [{
                    height: 40,
                    cells: [
                        { value: "HAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "CONSIGNEE NAME", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "TYPE ", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "DN", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PLT", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "GW", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "CTN", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "STATUS", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "ESTIMATE WH ARRIVAL TIME", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "DEIVERY TRUCK PLATE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "DRIVER NAME", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "CMT/CCCD", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "CARGO ASSISTANT NAME", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "SĐT", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }

                    ]
                }],
                columns: [
                    {// HAWB
                        width: 150
                    },
                    {// CONSIGNEE NAME
                        width: 150
                    },
                    {// TYPE
                        width: 100
                    },
                    { // DN
                        width: 150
                    },
                    {// PLT
                        width: 50
                    },
                    {// GW
                        width: 50
                    },
                    {// CTN
                        width: 50
                    },
                    {//STATUS
                        width: 100
                    },
                    {// ESTIMATE WH ARRIVAL TIME
                        width: 150
                    },
                    {// DEIVERY TRUCK PLATE
                        width: 100
                    },
                    {// DRIVER NAME
                        width: 120
                    },
                    {// DRIVER PHONE
                        width: 120
                    },
                    {// CARGO ASSISTANT NAME
                        width: 100
                    },
                    {// CARGO ASSISTANT PHONE
                        width: 100
                    }
                ]
            }]
        });


    });
    // Click Xóa
    $("#tbl_kehoachapple").on("click", ".btn-xoa", function () {
        var Hawb = $(this).attr("attrhawb");
        var DN = $(this).attr("attrdn");
        var Id = $(this).attr("attrId");
        var conf = confirm("Bạn có muốn xóa lô có DN: " + DN);
        if (conf) {
            var ajaxGet = { "get": Id };
            jsonData = JSON.stringify({ ajaxGet });

            $.ajax({
                type: "POST",
                url: "QuanLyAPPLEKeHoach.aspx/deleteKeHoachApple",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    //console.log(d)
                    if (d == "ok") {
                        Swal.fire({
                            title: "Xóa thành công!",
                            text: "Hệ thống sẽ tự tải lại sau 2s",
                            type: 'success',
                            timer: 2000,
                        })
                    }
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
                fncLoad();
            })
        }
    });
}

function fncChange() {

}