var ajaxGet;
var jsonData;
var percent10;
var percent11;
var percent12;
var percent13;
var kho10;
var kho11;
var kho12;
var kho13;
var html_body = "";
var jsonData;
var ajaxGet2;
var html_body_append;
var keyword



$(document).ready(function () {
    load();
    fncClick();
})
function fncClick() {
    // Click tìm kiếm
    $(".btn-timkiem").click(function (e) {
        e.preventDefault();
        keyword = $(".value-keyword").val();
        ajaxGet2 = { "get1": $(this).attr("attrKho"), "get2": keyword };
        jsonData = JSON.stringify({ ajaxGet2 });

        $.ajax({
            type: "POST",
            url: "QuanLyKhoFM.aspx/reTimKiem",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                html_body_append = "";
                html_body_append = appendHtml(d);
                $(".btn-kho tbody").empty().append(html_body_append);
            },
            error: function (err) {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {

        });

    })
}

function load() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });

    $.ajax({
        type: "POST",
        url: "QuanLyKhoFM.aspx/reRows",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            $(".txtkho10").append(d.ReRows.RowKho10);

            $(".txtkho11").append(d.ReRows.RowKho11);

            $(".txtkho12").append(d.ReRows.RowKho12);

            $(".txtkho13").append(d.ReRows.RowKho13);

            percent10 = parseInt(d.ReRows.RowKho10) / 2500 * 100;
            percent11 = parseInt(d.ReRows.RowKho11) / 800 * 100;
            percent12 = parseInt(d.ReRows.RowKho12) / 500 * 100;
            percent13 = parseInt(d.ReRows.RowKho13) / 550 * 100;

            $(".percent10").append(percent10.toFixed(2));

            $(".percent11").append(percent11.toFixed(2));

            $(".percent12").append(percent12.toFixed(2));

            $(".percent13").append(percent13.toFixed(2));
            kho10 = d.reKho10s;
            kho11 = d.reKho11s;
            kho12 = d.reKho12s;
            kho13 = d.reKho13s;

        },
        error: function (err) {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Thử lại hoặc liên hệ IT',
                'error'
            )
        }
    }).done(function () {

    })

    // Toggle click button
    $(".click-toggle").click(function (e) {
        e.preventDefault();
        $(".value-keyword").val("")
        var kho = $(this).attr("attrKho");
        $(".btn-timkiem").attr("attrKho", kho);
        var nameKho = $(this).text();
        $(".toggle-warehouse").toggle();
        if ($(".toggle-warehouse").is(':visible')) {
            // do something
            $(".titleKho").empty().append(nameKho);
            html_body_append = "";
            switch (kho) {
                case "10":
                    html_body_append = appendHtml(kho10);
                    break;
                case "11":
                    html_body_append = appendHtml(kho11);
                    break;
                case "12":
                    html_body_append = appendHtml(kho12);
                    break;
                case "13":
                    html_body_append = appendHtml(kho13);
                    break;
            }

            $(".btn-kho tbody").empty().append(html_body_append);
        }
    })
}

function appendHtml(input) {
    html_body = "";
    $.each(input, function (key, val) {
        html_body += "<tr>";
        html_body += "<td>" + (key + 1) + "</td>";
        html_body += "<td class=\"td_left\">" + val.TenHang + "</td>";
        html_body += "<td class=\"td_left\">" + val.MaHang + "</td>";
        html_body += "<td class=\"td_left\">" + val.ChiTiet + "</td>";
        html_body += "<td>" + val.SoKien + "</td>";
        html_body += "<td>" + val.TrongLuong + "</td>";
        html_body += "<td>" + val.Vitri + "</td>";
        html_body += "</tr>";
    });

    return html_body;
}

