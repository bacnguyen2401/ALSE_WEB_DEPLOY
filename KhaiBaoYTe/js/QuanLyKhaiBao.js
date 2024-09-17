
var html_thead = "";
var html_tbody = "";
var ajaxGet;
var d;
$(document).ready(function () {
    fncChange();
    fncClick();
    fncLoad();
})

function fncLoad() {

    // BEGIN AJAX LOAD 
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyKhaiBao.aspx/danhSachKhaiBao",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            console.log(d);
            html_tbody = "";
            $.each(d, function (index, item) {
                html_tbody += "<tr>";
                html_tbody += "<td>" + (index +1)+ "</td>";
                html_tbody += "<td>" + convertDate(item.NgayKhaiBao)[4] + "</td>";
                html_tbody += "<td class=\"td-hoten\">" + item.HoTen+ "</td>";
                html_tbody += "<td>" + item.NamSinh+ "</td>";
                html_tbody += "<td>" + item.CongTy+ "</td>";
                html_tbody += "<td>" + item.SDT + "</td>";
                html_tbody += "<td class=\"td-quoctich\">" + item.QuocTich+ "</td>";
                html_tbody += "<td>" +showIcon(item.DauHieu1)+ "</td>";
                html_tbody += "<td>" +showIcon(item.DauHieu2)+ "</td>";
                html_tbody += "<td>" +showIcon(item.DauHieu3)+ "</td>";
                html_tbody += "<td>" +showIcon(item.DauHieu4)+ "</td>";
                html_tbody += "<td>" +showIcon(item.DauHieu5)+ "</td>";
                html_tbody += "<td>" +showIcon(item.DauHieu6)+ "</td>";
                html_tbody += "<td>" +showIcon(item.TiepXuc1)+ "</td>";
                html_tbody += "<td>" +showIcon(item.TiepXuc2)+ "</td>";
                html_tbody += "<td>" +showIcon(item.TiepXuc3)+ "</td>";
                html_tbody += "<td>" +showIcon(item.TiepXuc4)+ "</td>";
                html_tbody += "</tr>";
            })
            $("#tbl-QuanLyKhaiBao tbody").empty();
            $("#tbl-QuanLyKhaiBao tbody").append(html_tbody);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {

    });
    /// END AJAX LOAD


}
function fncClick() {

}
function fncChange() {

}
