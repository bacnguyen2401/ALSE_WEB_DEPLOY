var table;
var datas;
var dataResultTotal = [];
$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();
    fncShowHideModal();
    fncEvent();
});

function fncLoad() {
    loadDataKeHoach("ALL");
}

function fncClick() {
    // click print tem DHL
    $("#btn-print-dhl").click(function () {
        var _mawb = $(this).attr("attrMAWBDHL");
        var _ip = $("#dhl-ip").val();
        var _printName = $("#dhl-ten").val();
        var _soluong = $("#dhl-soluong").val();
        var _pltId = $("#dhl-pltid").val();
        var _viTri = $("#dhl-vitri").val();

        fncIntemDHL(_pltId, _viTri, _ip, _printName, _soluong);

        $("#dhl-pltid").val("");
        $("#dhl-vitri").val("");
    });

    $(".btn-in-tem-automatic").click(function () {
        $("#ModalDHL").modal("show");

        $("#dhl-ip").val(localStorage.getItem("ipDHL"));
        $("#dhl-ten").val(localStorage.getItem("tenDHL"));
        $("#dhl-soluong").val(localStorage.getItem("soluongDHL"));
    });

    $(".btn-print-kehoach").click(function () {
        window.print();
    });

    $(".btn-kehoach-list").click(function () {
        loadDataKeHoach($(this).val());
    })

    $(".btn-export-excel").click(function () {
        var g_tenfile = "Report_Kehoach";

        jsonData = JSON.stringify({ datas });
        console.log(jsonData)
        $.ajax({
            type: "POST",
            url: "KeHoachDetails.aspx/KeHoach_Report",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            //timeout: 120000,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                window.open("../DownloadFile.aspx?Root=Other&Folder=BAOCAO&FileName=" + g_tenfile + ".xlsx");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
    });
}

function fncChange() {
    $(".ip-search").on("keyup", function () {
        console.log(datas)
        var input = $(this).val().toString();
        // tăng width input
        if (input.length > 20) {
            document.getElementById("input-search").style.width = "600px";
        } else {
            document.getElementById("input-search").style.width = "200px";
        }

        // Show data
        dataResultTotal = [];
        if (input != "") {
            var inputSplit = input.split(" ");
            for (var i = 0; i < inputSplit.length; i++) {
                for (var j = 0; j < datas.length; j++) {
                    if (datas[j].SoMawb === inputSplit[i] || datas[j].SoHawb === inputSplit[i]) {
                        dataResultTotal.push(datas[j]);
                    }
                }
            }
            showTalbe(dataResultTotal);
        } else {
            showTalbe(datas);
        }
    });
}

function fncShowHideModal() {
    $("#ModalDHL").on('hidden.bs.modal', function () {

        localStorage.setItem("ipDHL", $("#dhl-ip").val());
        localStorage.setItem("tenDHL", $("#dhl-ten").val());
        localStorage.setItem("soluongDHL", $("#dhl-soluong").val());
     
        $("#dhl-pltid").val("");
        $("#dhl-vitri").val("");


    })
}


function loadDataKeHoach(get) {
    $("#loading").removeClass("displaynone");

    var ajaxGet = { "get": get };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/reListKeHoach",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        //timeout: 120000,
        success: function (responsive) {
            d = responsive.d;
            datas = d;
            showTalbe(d)
            //if (!$.fn.dataTable.isDataTable('#tbl-chi-tiet-kehoach')) {
            //    table = $('#tbl-chi-tiet-kehoach').DataTable({
            //        paging: false
            //    });
            //}
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
        $("#loading").addClass("displaynone");
    });
}

function showTalbe(d) {
    html_body = "";
    //console.log(d)
    var totalSoKien = 0;
    var totalTrongLuong = 0;
    $.each(d, function (key, val) {
        //console.log(convertDate(val.NgayNhap + " " + val.GioNhap)[2])
        html_body += "<tr>";
        html_body += "<td>" + val.SoMawb + "</td>";
        html_body += "<td>" + val.SoHawb + "</td>";
        html_body += "<td>" + val.SoShipment + "</td>";
        html_body += "<td>" + val.SoDNN + "</td>";
        html_body += "<td>" + val.SoKien + "</td>";
        html_body += "<td>" + val.TrongLuong + "</td>";
        html_body += "<td>" + val.KichThuoc + "</td>";
        html_body += "<td>" + convertDate(val.NgayNhap + " " + val.GioNhap)[2] + "</td>";
        html_body += "<td>" + convertDate(val.NgayGioCanXong)[2] + "</td>";
        html_body += "<td>" + val.ViTri + "</td>";
        html_body += "<td>" + val.FWD + "</td>";
        html_body += "<td>" + val.Kien + "</td>";
        html_body += "<td>" + val.barcode_id + "</td>";
        html_body += "<td>" + val.InTemDHL + "</td>";
        html_body += "<td>" + val.GhiChuDNN + "</td>";
        html_body += "</tr>";
        totalSoKien += parseInt(val.SoKien)
        totalTrongLuong += parseInt(val.TrongLuong)
    });
    $("#tbl-chi-tiet-kehoach tbody").empty().append(html_body);
    $("#totalSoKien").empty().append(numberWithCommas(totalSoKien));
    $("#totalTrongLuong").empty().append(numberWithCommas(totalTrongLuong));
}


var tableToExcel = (function () {
    var uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines /></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
        , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
        , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
    return function (table, name) {
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
        window.location.href = uri + base64(format(template, ctx))
    }
})()

function fncIntemDHL(PltID, ViTri, IP, NAME, SOLUONG) {
    var ajaxGet5 = { "get1": PltID, "get2": ViTri, "get3": IP, "get4": SOLUONG, "get5": NAME };
    jsonData = JSON.stringify({ ajaxGet5 });
    $.ajax({
        type: "POST",
        url: "KeHoachDetails.aspx/ReLabelMAWBDHL",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            if (d == "ok") {
                Swal.fire({
                    title: "In tem thành công!",
                    text: "Hệ thống sẽ tự tải lại sau 2s",
                    type: 'success',
                    timer: 2000,
                })
            } else {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Thử lại hoặc liên hệ IT',
                    'error'
                )
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

    });
}

function fncEvent() {
    var input = document.getElementById("dhl-pltid");
    var input1 = document.getElementById("dhl-vitri");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("btn-print-dhl").click();
        }
    });

    input1.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("btn-print-dhl").click();
        }
    });
}