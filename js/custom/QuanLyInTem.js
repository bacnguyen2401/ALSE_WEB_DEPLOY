var jsonData;
var ajaxGet;
var ajaxGet2;
var html_body;
var dataSource = [];

$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();
    fncModal();
    fncPDF();
});

function fncLoad() {
    loadTable();
}

function fncClick() {
    $("#tbl-table-intem").on("click", ".td-trangthai", function () {
        var _mawb = $(this).attr("attrtrmawb");

        ajaxGet = { "get": _mawb };

        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyIntem.aspx/reKuenagelByMawb",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d)
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })


        var currentRow = $(this).closest('tr');
        // Tạo một dòng <tr> mới với các <td> mới bên trong
        var newRow = $('<tr><td>New Row, Cell 1</td><td>New Row, Cell 2</td></tr>');

        // Thêm dòng mới ngay bên ngoài dòng hiện tại
        currentRow.after(newRow);
    })

    $("#tbl-table-intem").on("click", ".btn-xoa", function () {
        var _mawb = $(this).attr("attrMawb");
        //var _hawb = $(this).attr("attrHawb");
        ajaxGet2 = { "get1": _mawb, "get2": "" }
        jsonData = JSON.stringify({ ajaxGet2 });
        $.ajax({
            type: "POST",
            url: "QuanLyIntem.aspx/DeleteInTem",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "ok") {
                    Swal.fire(
                        'Thêm mới!',
                        'Bạn đã thêm thành công',
                        'success'
                    )
                    fncLoad();
                }
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })
    });

    $("#tbl-table-intem").on("click", ".btn-sua", function () {
        var _mawb = $(this).attr("attrMawb");
        //var _hawb = $(this).attr("attrHawb");
        dataSource = [];
        ajaxGet2 = { "get1": _mawb, "get2": "" }
        jsonData = JSON.stringify({ ajaxGet2 });
        $.ajax({
            type: "POST",
            url: "QuanLyIntem.aspx/reKuNaGelsByMawbHawb",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                $.each(d, function (key, val) {
                    dataSource.push({
                        "BarcodeMawb": val.BarcodeMawb,
                        "MawbNumber": val.MawbNumber,
                        "DesMawb": val.DesMawb,
                        "MawbQt": val.MawbQt,
                        "SSCC": val.SSCC,
                        "HawbNumber": val.HawbNumber,
                        "DesHawb": val.DesHawb,
                        "HawbCount": val.HawbCount,
                        "HawbQt": val.HawbQt,
                        "Id": val.Id
                    })
                });

            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })

        $("#modalTaoKeHoach").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheet").empty();
        $("#spreadsheet").kendoSpreadsheet({
            columns: 10,
            rows: 100,
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
                        { value: "Barcode MAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "MAWB Number", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Des MAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "MAWB QT", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "SSCC", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "HAWB Number", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Des HAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "HAWB Count", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "HAWB Qty", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// Barcode MAWB
                        width: 150
                    },
                    {// MAWB Number
                        width: 100
                    },
                    {// Des MAWB
                        width: 50
                    },
                    {// MAWB QT
                        width: 50
                    },
                    {// SSCC
                        width: 150
                    },
                    {// HAWB Number
                        width: 100
                    },
                    {// Des HAWB
                        width: 50
                    },
                    {// HAWB Count
                        width: 50
                    },
                    {// HAWB Qty
                        width: 50
                    },
                ]
            }]
        });
    });

    $("#btn-kehoach-luu").click(function () {
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var keHoachIntems = [];
        var cells;
        var cell_BarcodeMawb = "";
        var cell_Mawb = "";
        var cell_DesMawb = "";
        var cell_MawbQty = "";
        var cell_SSCC = "";
        var cell_Hawb = "";
        var cell_DesHawb = "";
        var cell_HawbCount = "";
        var cell_HawbQty = "";
        var cell_Id = "";

        data.forEach(function (dataItem, dataIndex) {
            cell_TMS = "";
            cell_BarcodeMawb = "";
            cell_Mawb = "";
            cell_DesMawb = "";
            cell_MawbQty = "";
            cell_SSCC = "";
            cell_Hawb = "";
            cell_DesHawb = "";
            cell_HawbCount = "";
            cell_HawbQty = "";
            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_BarcodeMawb = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Mawb = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DesMawb = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_MawbQty = cells[cellIndex].value;
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SSCC = cells[cellIndex].value;
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Hawb = cells[cellIndex].value;
                        }
                        break;
                    case 6:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DesHawb = cells[cellIndex].value;
                        }
                        break;
                    case 7:
                        if (cells[cellIndex].value !== undefined) {
                            cell_HawbCount = cells[cellIndex].value;
                        }
                        break;
                    case 8:
                        if (cells[cellIndex].value !== undefined) {
                            cell_HawbQty = cells[cellIndex].value;
                        }
                        break;
                    case 9:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Id = cells[cellIndex].value;
                        }
                        break;
                }
            })
            keHoachIntems.push(
                {
                    "iu": ""
                    , "Id": String(cell_Id).trim().replace(/ /g, '')
                    , "BarcodeMawb": String(cell_BarcodeMawb).trim().replace(/ /g, '').replace("*", "")
                    , "MawbNumber": String(cell_Mawb).trim().replace(/ /g, '').replace("-", "")
                    , "DesMawb": String(cell_DesMawb).trim().replace(/ /g, '')
                    , "MawbQt": String(cell_MawbQty).trim().replace(/ /g, '')
                    , "SSCC": String(cell_SSCC).trim().replace(/ /g, '').replace("*", "")
                    , "HawbNumber": String(cell_Hawb).trim().replace(/ /g, '')
                    , "DesHawb": String(cell_DesHawb).trim().replace(/ /g, '')
                    , "HawbCount": String(cell_HawbCount).trim().replace(/ /g, '')
                    , "HawbQt": String(cell_HawbQty).trim().replace(/ /g, '')
                }
            );
        })

        //console.log(keHoachIntems)

        var jsonData = JSON.stringify({ keHoachIntems });
        $.ajax({
            type: "POST",
            url: "QuanLyIntem.aspx/IUIntem",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d)
                if (d == "ok") {
                    Swal.fire(
                        'Thêm mới!',
                        'Bạn đã thêm thành công',
                        'success'
                    )
                    fncLoad();
                    $("#modalTaoKeHoach").modal("hide");
                }
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })
    });

    $("#btn-taothongtin").click(function () {
        $("#modalTaoKeHoach").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheet").empty();
        $("#spreadsheet").kendoSpreadsheet({
            columns: 10,
            rows: 100,
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
                        { value: "Barcode MAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "MAWB Number", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Des MAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "MAWB QT", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "SSCC", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "HAWB Number", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Des HAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "HAWB Count", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "HAWB Qty", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// Barcode MAWB
                        width: 150
                    },
                    {// MAWB Number
                        width: 100
                    },
                    {// Des MAWB
                        width: 50
                    },
                    {// MAWB QT
                        width: 50
                    },
                    {// SSCC
                        width: 150
                    },
                    {// HAWB Number
                        width: 100
                    },
                    {// Des HAWB
                        width: 50
                    },
                    {// HAWB Count
                        width: 50
                    },
                    {// HAWB Qty
                        width: 50
                    },
                ]
            }]
        });
    });
}

function fncChange() {

}

function fncModal() {
    $('#modalTaoKeHoach').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });
}

function loadTable() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyInTem.aspx/reKuNaGels",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            html_body = "";
            $.each(d, function (key, val) {
                html_body += "<tr id=\"tr-" + val.MawbNumber + "\" >";
                html_body += "<td class=\"td-trangthai\" attrtrmawb=\"" + val.MawbNumber + "\">" + (key + 1) + "</td>";
                html_body += "<td>" + val.MawbNumber + "</td>";
                html_body += "<td>" + val.DesMawb + "</td>";
                html_body += "<td>" + val.MawbQt + "</td>";
                html_body += "<td>";
                html_body += "<button type=\"button\" class=\"btn btn-sm btn-primary btn-intem\">In tem</button>";
                html_body += " <button type=\"button\" attrMawb=\"" + val.MawbNumber + "\" class=\"btn btn-sm btn-warning btn-sua\">Sửa</button>";
                html_body += " <button type=\"button\" attrMawb=\"" + val.MawbNumber + "\" class=\"btn btn-sm btn-danger btn-xoa\">Xóa</button>";
                html_body += "</td>";
                html_body += "</tr>";
            });
            if (d.length == 0) {
                html_body += "<tr>";
                html_body += "<td colspan=\"6\">Không có dữ liệu</td>";
                html_body += "</tr>";
            }
            $("#tbl-table-intem tbody").empty().append(html_body);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {

    });
}
var arrTempData = {};
function fncPDF() {
    $("#f_UploadImage").change(function (e) {
        arrTempData = {};
        var count_item = 1;
        $.each(e.target.files, function (item, val) {
            arrTempData["file" + count_item] = val;
        })
    })

    $("#btn-read-pdf").click(function () {
        var formData = new FormData();
        for (var val in arrTempData) {
            formData.append("file", arrTempData[val]);
        }
        $.ajax({
            //url: 'inlabel.aspx/ProcessPdf',
            type: "POST",
            url: "AjaxReadFilePDF.ashx",
            data: formData,
            contentType: false,
            processData: false,
            async: false,
            success: function (response) {
                alert("Thêm mới kế hoạch thành công");
            },
            error: function (xhr, status, error) {
                alert('Error: ' + error);
                console.log("Tới đây 2")
            }
        });

        setTimeout(function () {
            loadTable();
        }, 1000)
    });
}