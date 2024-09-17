var html_thead = "";
var html_tbody = "";
var html_thead_truyvan = "";
var html_thead_truyvan_chitiet = "";
var ajaxGet;
var d;
var danhsachDNN = "";
var wug = "";
$(document).ready(function () {
    fncChange();
    fncClick();
    fncLoad();

})

function fncLoad() {
    wug = $("#username").attr("wugroup");
    $("#ta-danhsach-dnn").val("");
    console.log(wug)
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
    html_thead_truyvan += ((wug == "5" || wug == "3" || wug == "1") ? "<th rowspan=\"2\">Ghi chú</th>" : "");
    html_thead_truyvan += ((wug == "4" || wug == "1") ? "<th colspan=\"3\">CÂN XONG</th>" : "");
    html_thead_truyvan += "</tr>";
    html_thead_truyvan += "<tr>";
    html_thead_truyvan += "<th>Date</th>";
    html_thead_truyvan += "<th>Time</th>";
    html_thead_truyvan += "<th>Date</th>";
    html_thead_truyvan += "<th>Time</th>";
    html_thead_truyvan += "<th>Date</th>";
    html_thead_truyvan += "<th>Time</th>";
    html_thead_truyvan += ((wug == "4" || wug == "1") ? "<th>DIM</th><th>Date</th><th>Time</th>" : "");
    html_thead_truyvan += "</tr>";
    $("#tbl1 thead").empty();
    $("#tbl1 thead").append(html_thead_truyvan);
}
function fncLoadTheadTruyVanChiTiet() {
    html_thead_truyvan_chitiet = "";
    html_thead_truyvan_chitiet += "<tr>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">No</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">MAWB</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">" + (wug == "10" ? "INV No." : "DNN No.") + "</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">PCS No.</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">PCS</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">GW</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">DIM</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">POSITION</th>";
    html_thead_truyvan_chitiet += "<th colspan=\"2\">RCD - Truck arrival ALSE</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">FWD</th>";
    html_thead_truyvan_chitiet += "</tr>";
    html_thead_truyvan_chitiet += "<tr>";
    html_thead_truyvan_chitiet += "<th>Date</th>";
    html_thead_truyvan_chitiet += "<th>Time</th>";
    html_thead_truyvan_chitiet += "</tr>";

    $("#tbl1 thead").empty();
    $("#tbl1 thead").append(html_thead_truyvan_chitiet);
}

function fncLoadTheadTruyVanDIMChiTiet() {
    html_thead_truyvan_chitiet = "";
    html_thead_truyvan_chitiet += "<tr>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">No</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">" + (wug == "10" ? "INV No." : "DNN No.") + "</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">PCS No.</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">PCS</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">GW</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">L</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">W</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">H</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">POSITION</th>";
    html_thead_truyvan_chitiet += "<th colspan=\"2\">RCD - Truck arrival ALSE</th>";
    html_thead_truyvan_chitiet += "<th rowspan=\"2\">FWD</th>";
    html_thead_truyvan_chitiet += "</tr>";
    html_thead_truyvan_chitiet += "<tr>";
    html_thead_truyvan_chitiet += "<th>Date</th>";
    html_thead_truyvan_chitiet += "<th>Time</th>";
    html_thead_truyvan_chitiet += "</tr>";

    $("#tbl1 thead").empty();
    $("#tbl1 thead").append(html_thead_truyvan_chitiet);
}

function fncClick() {
    fncTruyVanClick();
    fncTruyVanChiTietClick();
    fncTruyVanDimClick();
}
function fncTruyVanDimClick() {
    $("#btn-truyvandim-dnn").click(function () {
        danhsachDNN = $("#ta-danhsach-dnn").val().replace(/(?:\r\n|\r|\n)/g, "<**>");
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet2 = { "get1": "1", "get2": danhsachDNN };
        jsonData = JSON.stringify({ ajaxGet2 });
        $.ajax({
            type: "POST",
            url: "TruyVanDNN.aspx/LoadTruyVanChiTiet",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                fncLoadTheadTruyVanDIMChiTiet();
                html_body = "";
                var totalPCS = 0;
                $.each(d, function (index, item) {
                    html_body += "<tr>";
                    html_body += "<td>" + (index + 1) + "</td>";
                    html_body += "<td>" + item.SoDNN + "</td>";
                    html_body += "<td>" + item.Kien + "</td>";
                    html_body += "<td>" + item.SoKien + "</td>";
                    html_body += "<td>" + item.TrongLuong + "</td>";
                    html_body += "<td>" + item.KichThuoc.split("x")[0] + "</td>";
                    html_body += "<td>" + item.KichThuoc.split("x")[1] + "</td>";
                    html_body += "<td>" + item.KichThuoc.split("x")[2] + "</td>";
                    html_body += "<td>" + item.ViTri + "</td>";
                    html_body += "<td>" + item.NgayNhap + "</td>";
                    html_body += "<td>" + item.GioNhap + "</td>";
                    html_body += "<td>" + item.FWD + "</td>";
                    html_body += "</tr>";
                    totalPCS += parseInt(item.SoKien);
                    if ((d.length - 1) == index) {
                    }
                })
                $("#totalPCSDNN").empty().append("Tổng số kiện : " + totalPCS);

                //console.log(html_body);
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

function fncTruyVanClick() {
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
                var totalPCS = 0;
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
                    if (wug == "5" || wug == "3" || wug == "1") {
                        html_body += "<td>" + item.GhiChuDNN + "</td>";
                    }
                    if (wug == "4" || wug == "1") {
                        if ((wug == "4" && item.FWD == "AGI") || wug == "1") {
                            html_body += "<td>" + item.KichThuoc + "</td>";
                            html_body += "<td>" + item.NgayCanXong + "</td>";
                            html_body += "<td>" + item.GioCanXong + "</td>";
                        }
                        else {
                            html_body += "<td></td>";
                            html_body += "<td></td>";
                        }
                    }

                    html_body += "</tr>";
                    totalPCS += parseInt(item.SoKien);
                })
                $("#totalPCSDNN").empty().append("Tổng số kiện: " + totalPCS);
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
function fncTruyVanChiTietClick() {
    $("#btn-truyvanchitiet-dnn").click(function () {
        danhsachDNN = $("#ta-danhsach-dnn").val().replace(/(?:\r\n|\r|\n)/g, "<**>");
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet2 = { "get1": "1", "get2": danhsachDNN };
        jsonData = JSON.stringify({ ajaxGet2 });
        $.ajax({
            type: "POST",
            url: "TruyVanDNN.aspx/LoadTruyVanChiTiet",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                fncLoadTheadTruyVanChiTiet();
                html_body = "";
                var totalPCS = 0;
                $.each(d, function (index, item) {
                    html_body += "<tr>";
                    html_body += "<td>" + (index + 1) + "</td>";
                    html_body += "<td>" + item.SoMAWB + "</td>";
                    html_body += "<td>" + item.SoDNN + "</td>";
                    html_body += "<td>" + item.Kien + "</td>";
                    html_body += "<td>" + item.SoKien + "</td>";
                    html_body += "<td>" + item.TrongLuong + "</td>";
                    html_body += "<td>" + item.KichThuoc + "</td>";
                    html_body += "<td>" + item.ViTri + "</td>";
                    html_body += "<td>" + item.NgayNhap + "</td>";
                    html_body += "<td>" + item.GioNhap + "</td>";
                    html_body += "<td>" + item.FWD + "</td>";
                    html_body += "</tr>";
                    totalPCS += parseInt(item.SoKien);
                    if ((d.length - 1) == index) {
                    }
                })
                $("#totalPCSDNN").empty().append("Tổng số kiện : " + totalPCS);

                //console.log(html_body);
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
function fncChange() {
}