$(document).ready(function () {
    fncLoad();
    fncChange();
    fncClick();
    fncShowHideModal();
});

function fncLoad() {

}


function fncChange() {

}

function fncClick(){
    $(".btn-export-report").click(function () {
        var g_tungay = dmy2ymd($("#input-report-tu-ngay").val());
        var g_denngay = dmy2ymd($("#input-report-den-ngay").val());
        var g_customer = $("#select-report-other").val();
        var g_tenfile = "JUSDA_Download";
        if (g_customer == "JUSDA") {
            // load dữ liệu
            loadExcelJusda(g_tungay, g_denngay, g_tenfile);
        } else {
            loadExcelDHL(g_tungay, g_denngay);
        }
     
       

    });
}

function fncShowHideModal() {

}

function loadExcelJusda(g_tungay, g_denngay, g_tenfile) {
    var ajaxGet3 = { "get1": g_tungay, "get2": g_denngay, "get3": g_tenfile };
    jsonData = JSON.stringify({ ajaxGet3 });
    $.ajax({
        type: "POST",
        url: "BaoCaoOther.aspx/JUSDA_REPORT",
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
}

function loadExcelDHL(g_tungay, g_denngay) {
    var g_tenfile = "DHL_" + convertDate($("#input-report-tu-ngay").datepicker("getDate"))[8] + "_to_" + convertDate($("#input-report-den-ngay").datepicker("getDate"))[8];
    if (g_tungay == "" || g_denngay == "") {
        Swal.fire({
            title: "Ngày báo cáo không được trống!",
            text: "",
            type: 'error',

        })
        return false;
    }

    var ajaxGet3 = { "get1": g_tungay, "get2": g_denngay, "get3": g_tenfile };
    jsonData = JSON.stringify({ ajaxGet3 });
    $.ajax({
        type: "POST",
        url: "BaoCaoOther.aspx/DHL_REPORT",
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
}