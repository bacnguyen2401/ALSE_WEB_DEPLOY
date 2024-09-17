
$(document).ready(function () {
    var view = getParameterByName('View');
    if ($("#username").attr("wugroup") != "1" && $("#username").attr("wugroup") != "4") {
        $("#thNgayCanXong").remove();
        $("#thGioCanXong").remove();
    }


    if (view == 1) {
        $(".div-view0").remove();
        $(".xuatex").remove();
        $(".dnn-cu").remove();

    }
    else {
        $(".div-view1").remove();
        $(".dnn-moi").remove();

    }
    $('.KdataTablesDNN').DataTable({
        "responsive": true,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "iDisplayLength": -1,
        "language": {
            "search": "Filter data _INPUT_ in a Table",
            "searchPlaceholder": "Invoice, Date Crt,..."
        }

    });

})
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
function anhien(obj) {

    AddQueryString("View", obj);

    return false;
}
function anhien1(obj, jbo) {

    AddQueryString("View", obj);
    AddQueryString("All", jbo);

    return false;
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}