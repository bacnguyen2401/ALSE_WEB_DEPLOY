$(document).ready(function () {
    fncChange();
    fncClick();
    fncLoad();
});

function fncLoad() {

}


function fncLoadTheadTruyVan() {
    html_thead_truyvan = "";
    html_thead_truyvan += "<tr>";
    html_thead_truyvan += "<th rowspan=\"2\">No</th>";
    html_thead_truyvan += "<th>HAWB</th>";
    html_thead_truyvan += "<th>Mã giao hàng</th>";
    html_thead_truyvan += "<th>Tải trọng</th>";
    html_thead_truyvan += "</tr>";
    $("#tbl1 thead").empty();
    $("#tbl1 thead").append(html_thead_truyvan);
}

function fncClick() {
    $("#btn-truyvan-dnn").click(function () {
        danhsachDNN = $("#ta-danhsach-dnn").val().replace(/(?:\r\n|\r|\n)/g, "<**>");
        // console.log(danhsachDNN);
        // BEGIN AJAX LOAD
        // TODO 1.
        // TODO 2.
        // TODO 3.
        ajaxGet2 = { "get1": "0", "get2": danhsachDNN };
        jsonData = JSON.stringify({ ajaxGet2 });
        $.ajax({
            type: "POST",
            url: "TruyVanPO.aspx/LoadTruyVan",
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
                    html_body += "<td>" + item.HAWB + "</td>";
                    html_body += "<td>" + item.MaGiaoHang + "</td>";
                    html_body += "<td>" + item.TaiTrong + "</td>";
                    html_body += "</tr>";
                })
                $("#tbl1 tbody").empty();
                $("#tbl1 tbody").append(html_body);
                $('#tbl1').DataTable();
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    })
}

function fncChange() {

}