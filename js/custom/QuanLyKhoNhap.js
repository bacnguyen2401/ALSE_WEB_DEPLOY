var ajaxGet;
var jsonData;
var customersList;
var _items;
var qlkn_export_header;
var qlkn_import_header;
var qlkn_storage_header;
var wug = "";
var datatableGet;
var objLoHang = {};
var lohang = [];
var userid;

$(document).ready(function () {
    $("#input-qlkn-start-date").val(moment().format("DD/MM/YYYY"));
    $("#input-qlkn-end-date").val(moment().format("DD/MM/YYYY"));

    userid = $("#username").attr("userid");
    

    fncLoad();
    fncClick();
    fncLoadCustomer();
    fncChange();


});

function returnHTML(_items) {
    //console.log(_items);
    var html_temp = "";
    html_temp += "<tr  >";
    var i = 0;
    var temp_class = "";
    _items.forEach(function (_item) {
        if (i == 1 || i == 2) {
            temp_class = "class=\"text-align-left\"";
        } else {
            temp_class = "";
        }
        html_temp += "<td " + temp_class + ">" + _item + "</td>";
        i = i + 1;
    })
    html_temp += "</tr>";
    return html_temp;
}



function fncLoad() {
    $("#truyvan-dnn").hide();
    wug = $("#username").attr("wugroup");
    $("#ta-danhsach-dnn").val("");


    $('#modalThemProductCode').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });


    $('#modalQuantity').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });
}

function fncLoadTheadTruyVan() {
    html_thead_truyvan = "";
    html_thead_truyvan += "<tr>";
    html_thead_truyvan += "<th rowspan=\"2\">No</th>";
    html_thead_truyvan += "<th rowspan=\"2\">" + (wug == "10" ? "INV No." : "DNN No.") + "</th>";
    html_thead_truyvan += "<th rowspan=\"2\">PO</th>";
    html_thead_truyvan += "<th colspan=\"2\">RCD - Truck arrival ALSE</th>";
    html_thead_truyvan += "<th colspan=\"2\">SLI</th>";
    html_thead_truyvan += "<th colspan=\"2\">APT - Truck departure ALSE --> Airport</th>";
    html_thead_truyvan += "<th rowspan=\"2\">PCS</th>";
    html_thead_truyvan += "<th rowspan=\"2\">GW</th>";
    html_thead_truyvan += ((wug == "4" || wug == "1") ? "<th colspan=\"2\">CÂN XONG</th>" : "");
    html_thead_truyvan += "<th rowspan=\"2\">FWD</th>";
    html_thead_truyvan += "<th rowspan=\"2\">Vị Trí</th>";
    html_thead_truyvan += "</tr>";
    html_thead_truyvan += "<tr>";
    html_thead_truyvan += "<th>Date</th>";
    html_thead_truyvan += "<th>Time</th>";
    html_thead_truyvan += "<th>Date</th>";
    html_thead_truyvan += "<th>Time</th>";
    html_thead_truyvan += "<th>Date</th>";
    html_thead_truyvan += "<th>Time</th>";
    html_thead_truyvan += ((wug == "4" || wug == "1") ? "<th>Date</th><th>Time</th>" : "");
    html_thead_truyvan += "</tr>";
    $("#tbl1 thead").empty();
    $("#tbl1 thead").append(html_thead_truyvan);
}

function fncClick() {

    fncTruyVanClick();

    $("#themExcelProductCode").click(function () {
        $("#modalThemProductCode").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheet").empty();
        $("#spreadsheet").kendoSpreadsheet({
            columns: 5,
            rows: 800,
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
                        { value: "PaletID", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Product Code", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Quantity", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Date Product", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Time Product", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PO", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }

                    ]
                }],
                columns: [
                    {// PaletID
                        width: 150
                    },
                    {// ProductCode
                        width: 150
                    },
                    {// Quantity
                        width: 150
                    },
                    { //DateProduct
                        width: 150
                    },
                    { //TimeProduct
                        width: 150
                    },
                    {// PO
                        width: 200
                    }
                ]
            }]
        });
    });



    $("#btn-ProductCode-luu").click(function () {
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var DataInput = [];
        var cells;

        var cell_PaletID = "";
        var cell_ProductCode = "";
        var cell_Quantity = "";
        var cell_DateProduct = "";
        var cell_TimeProduct = "";
        var cell_PO = "";

        data.forEach(function (dataItem, dataIndex) {
            cell_PaletID = "";
            cell_ProductCode = "";
            cell_Quantity = "";
            cell_DateProduct = "";
            cell_TimeProduct = "";
            cell_PO = "";

            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PaletID = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_ProductCode = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Quantity
                            cell_Quantity = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DateProduct = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            cell_TimeProduct = Decimal2Time(cells[cellIndex].value * 24);
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PO = cells[cellIndex].value;
                        }
                        break;
                }
            });

            DataInput.push(
                {
                    "Id": ""
                    //, "PaletID": String(cell_PaletID).trim().replace(/ /g, '')
                    , "PaletID": String(cell_PaletID).trim()
                    , "ProductCode": String(cell_ProductCode).trim().replace(/ /g, '')
                    , "Quantity": String(cell_Quantity).trim().replace(/ /g, '')
                    , "DateProduct": String(cell_DateProduct).trim().replace(/ /g, '') + " " + String(cell_TimeProduct).trim().replace(/ /g, '')
                    //, "PO": String(cell_PO).trim().replace(/ /g, '')
                    , "PO": String(cell_PO).trim()
                }
            );
        });
        var jsonData = JSON.stringify({ DataInput });
        //console.log(jsonData);

        $.ajax({
            type: "POST",
            url: "QuanLyKhoHang.aspx/insertProductCode",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
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
            $("#modalThemProductCode").modal("hide");
        })

    });


    $("#themExcelQty").click(function () {
        $("#modalQuantity").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheetQuantity").empty();
        $("#spreadsheetQuantity").kendoSpreadsheet({
            columns: 5,
            rows: 800,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheetQuantity").data("kendoSpreadsheet");
        var sheet = spreadsheet.activeSheet();
        sheet.range(kendo.spreadsheet.SHEETREF).clear();
        $(window).trigger("resize");
        spreadsheet.fromJSON({
            sheets: [{
                name: "KeHoachQty",
                //mergedCells: [
                //    "A1:G1"
                //],
                rows: [{
                    height: 40,
                    cells: [
                        { value: "PaletID", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Quantity", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PO", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }

                    ]
                }],
                columns: [
                    {// PaletID
                        width: 150
                    },
                    {// Quantity
                        width: 150
                    },
                    {// PO
                        width: 150
                    },
                ]
            }]
        });
    });


    $("#btn-ProductCode-luuQty").click(function () {
        var spreadsheet = $("#spreadsheetQuantity").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var DataInput = [];
        var cells;

        var cell_PaletID = "";
        var cell_Quantity = "";
        var cell_PO = "";

        data.forEach(function (dataItem, dataIndex) {
            cell_PaletID = "";
            cell_Quantity = "";
            cell_PO = "";

            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PaletID = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Quantity
                            cell_Quantity = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PO
                            cell_PO = cells[cellIndex].value;
                        }
                        break;
                }
            });

            DataInput.push(
                {
                    "Id": ""
                    , "PaletID": String(cell_PaletID).trim().replace(/ /g, '')
                    , "Quantity": String(cell_Quantity).trim().replace(/ /g, '')
                    , "PO": String(cell_PO).trim().replace(/ /g, '')
                }
            );
        });
        var jsonData = JSON.stringify({ DataInput });
        //console.log(jsonData);

        $.ajax({
            type: "POST",
            url: "QuanLyKhoHang.aspx/updateQuatity",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
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
            $("#modalQuantity").modal("hide");
        })

    });


    $("#searchTheoDNN").click(function () {
        $("#truyvan-dnn").toggle();
    });


    // click
    $("#div-qlkn").on("click", ".input-qlkn-show-data", function () {
        var _value = $(this).attr("value");
        var _tungay = dmy2ymd($("#input-qlkn-start-date").val());
        var _denngay = dmy2ymd($("#input-qlkn-end-date").val());
        var _customer = $("#select-qlkn-customers").val();

        _items = { "get1": _value, "get2": _tungay, "get3": _denngay, "get4": _customer };

        qlkn_export_header = ["No", "DN or PN", "Palet ID", "PO", "PCS", "GW", "DIM", "Position", "Date", "Time", "FWD", "ProductCode", "Quantity", "DateProduct", "BKS", "Remark"];
        qlkn_import_header = ["No", "DN or PN", "Palet ID", "PO", "PCS", "GW", "DIM", "Position", "Date", "Time", "FWD", "ProductCode", "Quantity", "DateProduct", "Remark"];
        qlkn_storage_header = ["No", "DN or PN", "Palet ID", "PO", "PCS", "GW", "DIM", "Position", "Date", "Time", "FWD", "ProductCode", "Quantity", "DateProduct", "Remark"];
        //console.log(_items);
        returnTable(_items, _value);

    });

    $("#taiExcel").click(function () {
        var _tungay = dmy2ymd($("#input-qlkn-start-date").val());
        var _denngay = dmy2ymd($("#input-qlkn-end-date").val());
        var _tungay1 = dmy2ymd($("#input-qlkn-start-date").val()).split("/");
        var _denngay1 = dmy2ymd($("#input-qlkn-end-date").val()).split("/");
        var g_tungay = _tungay1[2] + _tungay1[1] + _tungay1[0];
        var g_denngay = _denngay1[2] + _denngay1[1] + _denngay1[0];
        var g_tenfile = "KHO_HANG_" + g_tungay + "-" + g_denngay;
        // load dữ liệu
        var ajaxGet4 = { "get1": _tungay, "get2": _denngay, "get3": "", "get4": g_tenfile };
        jsonData = JSON.stringify({ ajaxGet4 });
        $.ajax({
            type: "POST",
            url: "QuanLyKhoHang.aspx/LoadDataExcel",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            //timeout: 120000,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                window.open("DownloadFile.aspx?Root=ThanhToan&Folder=BAOCAO&FileName=" + g_tenfile + ".xlsx");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
    });
    $("#taiExcelTable").click(function () {
        var nameExcel = "KHO_HANG_BANG_" + $("#tbl-rqlkt_filter input").val();
        lohang = [];
        $('#tbl-rqlkt > tbody  > tr').each(function (index, tr) {
            objLoHang = {};
            var tr = document.getElementsByTagName("tr")[index + 1];
            var td = tr.getElementsByTagName("td").length;
            for (var i = 0; i < td; i++) {
                var td_text = tr.getElementsByTagName("td")[i].innerHTML;
                if (i == 0) {
                    objLoHang.ID = td_text;
                }
                if (i == 1) {
                    objLoHang.DNN = td_text;
                }
                if (i == 2) {
                    objLoHang.PALETID = td_text;
                }
                if (i == 3) {
                    objLoHang.PO = td_text;
                }
                if (i == 4) {
                    objLoHang.PCS = td_text;
                }
                if (i == 5) {
                    objLoHang.GW = td_text;
                }
                if (i == 6) {
                    objLoHang.DIM = td_text;
                }
                if (i == 7) {
                    objLoHang.POSITION = td_text;
                }
                if (i == 8) {
                    objLoHang.DATE = td_text;
                }
                if (i == 9) {
                    objLoHang.TIME = td_text;
                }
                if (i == 10) {
                    objLoHang.FWD = td_text;
                }
                if (i == 11) {
                    objLoHang.PRODUCTCODE = td_text;
                }
                if (i == 12) {
                    objLoHang.QUANTITY = td_text;
                }
                if (i == 13) {
                    objLoHang.DATEPRODUCT = td_text;
                }
                if (i == 14) {
                    objLoHang.REMARK = td_text;
                }
            }
            lohang.push(objLoHang);
        });

        jsondata = JSON.stringify({ lohang, filename: nameExcel });
        //console.log(jsondata);
        $.ajax({
            type: "POST",
            url: "QuanLyKhoHang.aspx/excelToTableLoHang",
            data: jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                window.open("DownloadFile.aspx?Root=ThanhToan&Folder=BAOCAO&FileName=" + nameExcel + ".xlsx");
            },
            error: function (error) {
                console.log(error.responseText);
            }
        }).done(function () {
            //$("#div-wait").hide();
        });
    });
}

function fncChange() {

    $('#div-qlkn').on('change', "#select_filter_connect", function () {
        $("#tbl-rqlkt_filter input").val(this.value);
    });

    $('#div-qlkn').on('change', ".cb-makho", function () {
        var cb_value = $(this).val();
        console.log(cb_value);

        if (cb_value == "ALL") {
            if (this.checked) {
                $(".tr-makho-view").show();
                $('.cb-makho-child').prop('checked', true);
                //$(".tr-thead").show();
            } else {
                $(".tr-makho-view").hide();
                $('.cb-makho-child').prop('checked', false);
                //$(".tr-thead").hide();
            }
        } else {

            if (this.checked) {
                $(".tr-makho-" + cb_value).show();

                $(".grid-view").each(function () {
                    if ($(this).find("tbody tr[style=\"display: none;\"]").length != $(this).find("tbody tr").length) {
                        //$(this).find("thead").show();
                    }
                });
            } else {
                $(".tr-makho-" + cb_value).hide();
                $(".grid-view").each(function () {
                    if ($(this).find("tbody tr[style=\"display: none;\"]").length == $(this).find("tbody tr").length) {
                        //$(this).find("thead").hide();
                    }
                })
            }
        }
    });
}

function fncLoadCustomer() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "./ReportQuanLyKhoThuong.aspx/LoadCustomers",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            if (d != null && d.length > 0) {
                customersList += "<option value=" + "ALL" + ">" + "ALL" + "</option>";

                $.each(d, function (item, val) {
                    customersList += "<option value=" + val.makh + ">" + val.tenkh + "</option>";
                });
                $("#select-qlkn-customers").empty();
                $("#select-qlkn-customers").append(customersList);
            } else {
            }
        },
        error: function () {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)");
        }
    }).done(function () {
        //$("#div-wait").hide();
    });
}

function returnTable(ajaxGet4, _loai) {
    jsonData = JSON.stringify({ ajaxGet4 });
    $.ajax({
        type: "POST",
        url: "QuanLyKhoHang.aspx/LoadData",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            var html_table = "";
            var html_header = "";
            var html_body = "";
            var tongPCS = 0;

            var tongWNCK1 = 0;
            var tongWNLK1 = 0;

            var tongWNCK2 = 0;
            var tongWNLK2 = 0;

            var tongK1 = 0;
            var tongK2 = 0;

            switch (_loai) {
                case "Export":
                    $("#title-show-khohang").empty().append("Export");
                    html_header = returnHTML(qlkn_export_header);
                    $.each(d, function (item, val) {
                        //html_body += returnHTML([
                        //    (item + 1)
                        //    , val.SoSHIPMENT
                        //    , val.SoDNN
                        //    , val.model
                        //    , val.Kien
                        //    , val.TrongLuong
                        //    , val.KichThuoc
                        //    , val.ViTri
                        //    , val.NgayNhap
                        //    , val.GioNhap
                        //    , val.FWD
                        //    , val.ProductCode
                        //    , val.Quantity
                        //    , convertDate(val.DateProduct)[5]
                        //    , val.BKS
                        //    , val.GhiChuDNN
                        //]);

                        //tongPCS += parseInt(val.Kien);
                        html_body += "<tr class=\"tr-makho-view tr-makho-" + val.FWD.replace('.', '') + "\">";
                        html_body += "<td> " + (item + 1) + "</td>";
                        html_body += "<td> " + val.SoSHIPMENT + "</td>";
                        html_body += "<td> " + val.SoDNN + "</td>";
                        if (userid == "1" || userid == "124") {
                            html_body += "<td> " + val.model + "</td>";
                        } else {
                            if (val.FWD == "SF.WNL") {
                                html_body += "<td></td>";
                            } else {
                                html_body += "<td> " + val.model + "</td>";
                            }
                        }
                        html_body += "<td> " + val.Kien + "</td>";
                        html_body += "<td> " + val.TrongLuong + "</td>";
                        html_body += "<td> " + val.KichThuoc + "</td>";
                        html_body += "<td> " + val.ViTri + "</td>";
                        html_body += "<td> " + val.NgayNhap + "</td>";
                        html_body += "<td> " + val.GioNhap + "</td>";
                        html_body += "<td> " + val.FWD + "</td>";
                        html_body += "<td> " + val.ProductCode + "</td>";
                        html_body += "<td> " + val.Quantity + "</td>";
                        html_body += "<td> " + convertDate(val.DateProduct)[5] + "</td>";
                        html_body += "<td> " + val.BKS+ "</td>";
                        html_body += "<td> " + val.GhiChuDNN + "</td>";
                        html_body += "</tr>";
                        tongPCS += parseInt(val.Kien);
                    });
                    break;
                case "Import":
                    $("#title-show-khohang").empty().append("Import");
                    html_header = returnHTML(qlkn_import_header);
                    $.each(d, function (item, val) {
                        //html_body += returnHTML([
                        //    (item + 1)
                        //    , val.SoSHIPMENT
                        //    , val.SoDNN
                        //    , val.model
                        //    , val.Kien
                        //    , val.TrongLuong
                        //    , val.KichThuoc
                        //    , val.ViTri
                        //    , val.NgayNhap
                        //    , val.GioNhap
                        //    , val.FWD
                        //    , val.ProductCode
                        //    , val.Quantity
                        //    , convertDate(val.DateProduct)[5]
                        //    , val.GhiChuDNN
                        //]);
                        //tongPCS += parseInt(val.Kien);
                        html_body += "<tr class=\"tr-makho-view tr-makho-" + val.FWD.replace('.', '') + "\">";
                        html_body += "<td> " + (item + 1) + "</td>";
                        html_body += "<td> " + val.SoSHIPMENT + "</td>";
                        html_body += "<td> " + val.SoDNN + "</td>";
                        if (userid == "1" || userid == "124") {
                            html_body += "<td> " + val.model + "</td>";
                        } else {
                            if (val.FWD == "SF.WNL") {
                                html_body += "<td></td>";
                            } else {
                                html_body += "<td> " + val.model + "</td>";
                            }
                        }
                        html_body += "<td> " + val.Kien + "</td>";
                        html_body += "<td> " + val.TrongLuong + "</td>";
                        html_body += "<td> " + val.KichThuoc + "</td>";
                        html_body += "<td> " + val.ViTri + "</td>";
                        html_body += "<td> " + val.NgayNhap + "</td>";
                        html_body += "<td> " + val.GioNhap + "</td>";
                        html_body += "<td> " + val.FWD + "</td>";
                        html_body += "<td> " + val.ProductCode + "</td>";
                        html_body += "<td> " + val.Quantity + "</td>";
                        html_body += "<td> " + convertDate(val.DateProduct)[5] + "</td>";
                        html_body += "<td> " + val.GhiChuDNN + "</td>";
                        html_body += "</tr>";
                        tongPCS += parseInt(val.Kien);
                    });
                    break;
                case "Storage":
                    $("#title-show-khohang").empty().append("Storage");
                    html_header = returnHTML(qlkn_storage_header);
                    $.each(d, function (item, val) {
                        //html_body += returnHTML([
                        //    (item + 1)
                        //    , val.SoSHIPMENT
                        //    , val.SoDNN
                        //    , val.model
                        //    , val.Kien
                        //    , val.TrongLuong
                        //    , val.KichThuoc
                        //    , val.ViTri
                        //    , val.NgayNhap
                        //    , val.GioNhap
                        //    , val.FWD
                        //    , val.ProductCode
                        //    , val.Quantity
                        //    , convertDate(val.DateProduct)[5]
                        //    , val.Qty
                        //    , val.GhiChuDNN
                        //]);

                        html_body += "<tr class=\"tr-makho-view tr-makho-" + val.FWD.replace('.', '') + "\">";
                        html_body += "<td> " + (item + 1) + "</td>";
                        html_body += "<td> " + val.SoSHIPMENT + "</td>";
                        html_body += "<td> " + val.SoDNN + "</td>";

                        if (userid == "1" || userid == "124") {
                            html_body += "<td> " + val.model + "</td>";
                        } else {
                            if (val.FWD == "SF.WNL") {
                                html_body += "<td></td>";
                            } else {
                                html_body += "<td> " + val.model + "</td>";
                            }
                        }
                      
                        html_body += "<td> " + val.Kien + "</td>";
                        html_body += "<td> " + val.TrongLuong + "</td>";
                        html_body += "<td> " + val.KichThuoc + "</td>";
                        html_body += "<td> " + val.ViTri + "</td>";
                        html_body += "<td> " + val.NgayNhap + "</td>";
                        html_body += "<td> " + val.GioNhap + "</td>";
                        html_body += "<td> " + val.FWD + "</td>";
                        html_body += "<td> " + val.ProductCode + "</td>";
                        html_body += "<td> " + val.Quantity + "</td>";
                        html_body += "<td> " + convertDate(val.DateProduct)[5] + "</td>";
                        html_body += "<td> " + val.GhiChuDNN + "</td>";
                        html_body += "</tr>";
                        tongPCS += parseInt(val.Kien);

                        if (val.ViTri == "K2" || val.ViTri.substring(0, 2) == "10" || val.ViTri == "cuoi kho to" || val.ViTri == "dau kho to") {
                            if (val.FWD == "SF.WNC") {
                                tongWNCK2 += parseInt(val.Kien);
                            } else if (val.FWD == "SF.WNL") {
                                tongWNLK2 += parseInt(val.Kien);
                            }
                            tongK2 += parseInt(val.Kien);
                        } else {
                            if (val.FWD == "SF.WNC") {
                                tongWNCK1 += parseInt(val.Kien);
                            } else if (val.FWD == "SF.WNL") {
                                tongWNLK1 += parseInt(val.Kien);
                            }
                            tongK1 += parseInt(val.Kien);
                        }
                    });
                    break;

            }
            $("#show-pcs").empty().append("PCS: " + tongPCS);

            $("#idwncK1").empty().append(tongWNCK1);
            $("#idwnlK1").empty().append(tongWNLK1);
            $("#idwncK2").empty().append(tongWNCK2);
            $("#idwnlK2").empty().append(tongWNLK2);

            $("#tongK1").empty().append(tongK1);
            $("#tongK2").empty().append(tongK2);
            //console.log("WNC kho 2: " + tongWNCK2);
            //console.log("WNL kho 2: " + tongWNLK2);
            //console.log("WNC kho 1: " + tongWNCK1);
            //console.log("WNL kho 1: " + tongWNLK1);

            html_table = "<table id=\"tbl-rqlkt\" class=\"table table-bordered grid-view\">";
            html_table += "<thead>";
            html_table += " </thead>";
            html_table += "<tbody>";
            html_table += "</tbody >";
            html_table += "</table>";



            $("#table-show").empty()
                .append(html_table);

            $("#tbl-rqlkt thead").empty()
                .append(html_header);
            $("#tbl-rqlkt tbody").empty()
                .append(html_body);

            datatableGet = $("#tbl-rqlkt").DataTable({
                "responsive": true,
                "paging": false,
                "dom": '<"top"iflp>rt',
            });
            var html_checkbox = "";

            html_checkbox += '<label class="checkbox-inline color-white">ALL</label>';
            html_checkbox += '<input type="checkbox" class="cb-makho" checked id="cb-makho-all" value="ALL" />';
            html_checkbox += '<label class="checkbox-inline color-white">SF.WNC</label>';
            html_checkbox += '<input type="checkbox" class="cb-makho cb-makho-child" checked id="cb-makho-SFWNC" value="SFWNC" />';
            html_checkbox += '<label class="checkbox-inline color-white">SF.WNL</label>';
            html_checkbox += '<input type="checkbox" class="cb-makho cb-makho-child" checked id="cb-makho-SFWNL" value="SFWNL" />';

            //$("#tbl-rqlkt_filter").append("<select id=\"select_filter_connect\"><option>SF.WNC</option><option>SF.WNL</option></select>");
            $("#tbl-rqlkt_filter").append(html_checkbox);

        },
        error: function () {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)");
        }
    }).done(function () {
        //$("#div-wait").hide();
    });

}


function fncTruyVanClick() {
    $("#btn-truyvan-dnn").click(function () {
        danhsachDNN = $("#ta-danhsach-dnn").val().replace(/(?:\r\n|\r|\n)/g, "<**>");
        // BEGIN AJAX LOAD
        // TODO 1.
        // TODO 2.
        // TODO 3.
        ajaxGet2 = { "get1": "0", "get2": danhsachDNN };
        jsonData = JSON.stringify({ ajaxGet2 });
        $.ajax({
            type: "POST",
            url: "TruyVanDNN.aspx/LoadTruyVan",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                fncLoadTheadTruyVan();
                html_body = "";
                $.each(d, function (index, item) {
                    html_body += "<tr>";
                    html_body += "<td>" + (index + 1) + "</td>";
                    html_body += "<td>" + item.SoDNN + "</td>";
                    html_body += "<td>" + item.PO + "</td>";
                    html_body += "<td>" + item.NgayNhap + "</td>";
                    html_body += "<td>" + item.GioNhap + "</td>";
                    html_body += "<td>" + item.NgayLamSLI + "</td>";
                    html_body += "<td>" + item.GioLamSLI + "</td>";
                    html_body += "<td>" + item.NgayXuat + "</td>";
                    html_body += "<td>" + item.GioXuat + "</td>";
                    html_body += "<td>" + item.SoKien + "</td>";
                    html_body += "<td>" + item.TrongLuong + "</td>";
                    if (wug == "4" || wug == "1") {
                        if ((wug == "4" && item.FWD == "AGI") || wug == "1") {
                            html_body += "<td>" + item.NgayCanXong + "</td>";
                            html_body += "<td>" + item.GioCanXong + "</td>";
                        }
                        else {
                            html_body += "<td></td>";
                            html_body += "<td></td>";
                        }
                    }
                    html_body += "<td>" + item.FWD + "</td>";
                    html_body += "<td>" + item.ViTri + "</td>";

                    html_body += "</tr>";
                })
                $("#tbl1 tbody").empty();
                $("#tbl1 tbody").append(html_body);
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    })
}