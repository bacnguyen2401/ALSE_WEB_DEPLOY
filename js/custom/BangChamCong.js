var htmlngay = [];
var htmldem = [];
var html = "";
var dt = new Date();
var bcc_thang_moc = 12;

var htmlrong = "";
$(document).ready(function () {
    bcc_nam = getParameterByName("Nam");
    bcc_thang = getParameterByName("Thang");

    if (bcc_nam == "") {
        bcc_nam = dt.getFullYear();
        bcc_thang = dt.getMonth() + 1;
        bcc_thang_moc = bcc_thang;
    }
    if (bcc_nam == dt.getFullYear()) {
        bcc_thang_moc = dt.getMonth() + 1;
    }
    for (var sl = 2015; sl <= dt.getFullYear(); sl++) {
        $("select#bcc-sl-chonnam").append("<option value=\"" + sl + "\">" + sl + "</option>");
    }
    for (var sl = 1; sl <= bcc_thang_moc; sl++) {
        $("select#bcc-sl-chonthang").append("<option value=\"" + sl + "\">" + sl + "</option>");
    }
    $("select#bcc-sl-chonnam").val(bcc_nam);
    $("select#bcc-sl-chonthang").val(bcc_thang);

    $("#bcc-div").on("change", "#bcc-sl-chonnam", function () {
        if ($(this).val() != dt.getFullYear()) {
            $("select#bcc-sl-chonthang option").remove();
            for (var sl = 1; sl <= 12; sl++) {

                $("select#bcc-sl-chonthang").append("<option value=\"" + sl + "\">" + sl + "</option>");
            }
            $("select#bcc-sl-chonthang").val(12);
        } else {
            $("select#bcc-sl-chonthang option").remove();
            for (var sl = 1; sl <= (dt.getMonth() + 1); sl++) {

                $("select#bcc-sl-chonthang").append("<option value=\"" + sl + "\">" + sl + "</option>");
            }
            $("select#bcc-sl-chonthang").val(dt.getMonth() + 1);
        }
    })

    for (var i = 0; i < 31; i++) {
        htmlngay[i] = "<td class=\"bcc-td-ngay\"></td>";
        htmldem[i] = "<td class=\"bcc-td-ngay\"></td>";
    }

    for (var i = 0; i < 48; i++) {
        htmlrong += "<td>" + "</td>";
    }
    htmlrong = "<tr>" + htmlrong + "</tr>";
    ConvertDs2Table("VSIP");
    $(".convertnumber").number(true, 2);
    $("tbody .bcc-td-ngay").number(true, 2);

    $(".convertnumber").each(function () {
        if ($(this).text() == "0.00") {
            $(this).text("");
        }
    })
    $("tbody .bcc-td-ngay").each(function () {
        if ($(this).text() == "0.00") {
            $(this).text("");
        }
        $(this).attr("style", "width:35px;height:25px;");
    })
    $(".bcc-cangiua").each(function () {
        $(this).attr("style", (!($(this).attr("style")) ? '' : $(this).attr("style")) + "vertical-align: middle; text-align:center; font-size:80%;");

    })
    $(".bcc-td-kq").each(function () {
        $(this).attr("style", (!($(this).attr("style")) ? '' : $(this).attr("style")) + "height:75px;width:35px;");

    })

    $("#bcc-div").on("change", "#bcc-sl-chonnhom", function () {

        html = "";
        for (var i = 0; i < 31; i++) {
            htmlngay[i] = "<td class=\"bcc-td-ngay\"></td>";
            htmldem[i] = "<td class=\"bcc-td-ngay\"></td>";
        }
        ConvertDs2Table($("select#bcc-sl-chonnhom option:selected").val());
        $(".convertnumber").number(true, 2);
        $("tbody .bcc-td-ngay").number(true, 2);

        $(".convertnumber").each(function () {
            if ($(this).text() == "0.00") {
                $(this).text("");
            }
        })
        $("tbody .bcc-td-ngay").each(function () {
            if ($(this).text() == "0.00") {
                $(this).text("");
            }
            $(this).attr("style", "width:35px;height:25px;");
        })
        $(".bcc-cangiua").each(function () {
            $(this).attr("style", (!($(this).attr("style")) ? '' : $(this).attr("style")) + "vertical-align: middle; text-align:center; font-size:80%;");

        })
        $(".bcc-td-kq").each(function () {
            $(this).attr("style", (!($(this).attr("style")) ? '' : $(this).attr("style")) + "height:75px;width:35px;");

        })
        $("#bcc-tenbang").text("BẢNG CHẤM CÔNG " + $(this).val().toUpperCase() + " THÁNG " + bcc_thang + " NĂM " + bcc_nam);
    })
    $("#bcc-div-chonthoigian").on("click", "#bcc-btn-xemcong", function () {

        window.location.href = "/ChamCong/BangChamCong.aspx?Nam="
            + $("select#bcc-sl-chonnam").val()
            + "&Thang=" + $("select#bcc-sl-chonthang").val();
    })
    $("#bcc-tbl-bangcong").on("click", "td.tennv", function (e) {
        e.stopPropagation();
        $(this).closest("tbody").find(".bcc-tr-bg").each(function () {
            $(this).removeClass("bcc-tr-bg");

        })

        $(this).closest("tr").addClass("bcc-tr-bg");
        $(this).closest("tr").next().addClass("bcc-tr-bg");
    })
    //$('table#bcc-tbl-bangcong').floatThead({
    //    position: 'fixed'
    //});

    //$("#bcc-dsnv-chamsaicong").on("click", ".btn-edit", function (e) {
    //    var nvid = $(this).closest("tr").find(".tennv").attr("nvid");

    //    window.location("google.com");
    //    ///BCCwU.aspx?NVID=" + nvid + "&View=1
    //})

    $("#bcc-tenbang").text("BẢNG CHẤM CÔNG " + $("#bcc-sl-chonnhom").val().toUpperCase() + " THÁNG " + bcc_thang + " NĂM " + bcc_nam);
})
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function ConvertDs2Table(nhom) {

    var nvid;
    var tennv;
    var ngay;
    var cangay;
    var cadem;
    var bophan;
    var noilamviec;
    var tongcongngay = 0;
    var tongcongdem = 0;
    var tongcong = 0;
    var stt = 0;
    var nhomtach;

    $("table#bcc-tbl-dscong tbody tr").each(function () {

        if ($(this).is(':first-child')) { // la dong dau
            nvid = $(this).find(".nvid").text();
            tennv = $(this).find(".tennv").text();
            ngay = $(this).find(".ngay").text();
            cangay = $(this).find(".cangay").text();
            cadem = $(this).find(".cadem").text();
            bophan = $(this).find(".bophan").text();
            noilamviec = $(this).find(".noilamviec").text();

            htmlngay[ngay - 1] = "<td class=\"bcc-td-ngay bcc-cangiua\">" + cangay + "</td>";
            htmldem[ngay - 1] = "<td class=\"bcc-td-ngay bcc-cangiua\">" + cadem + "</td>";
            tongcongngay += parseFloat((cangay || 0));
            tongcongdem += parseFloat((cadem || 0));
            tongcong += parseFloat((cangay || 0)) + parseFloat((cadem || 0));
        } // end la dong dau
        else if ($(this).is(':last-child')) { // la dong cuoi
            if ($(this).find(".noilamviec").text().trim() == nhom) {
                ///
                if (nvid == $(this).find(".nvid").text()) { // neu cung nvid
                    nvid = $(this).find(".nvid").text();
                    tennv = $(this).find(".tennv").text();
                    ngay = $(this).find(".ngay").text();
                    cangay = $(this).find(".cangay").text();
                    cadem = $(this).find(".cadem").text();
                    bophan = $(this).find(".bophan").text();
                    noilamviec = $(this).find(".noilamviec").text();

                    htmlngay[ngay - 1] = "<td class=\"bcc-td-ngay bcc-cangiua\">" + cangay + "</td>";
                    htmldem[ngay - 1] = "<td class=\"bcc-td-ngay bcc-cangiua\">" + cadem + "</td>";
                    tongcongngay += parseFloat((cangay || 0));
                    tongcongdem += parseFloat((cadem || 0));
                    tongcong += parseFloat((cangay || 0)) + parseFloat((cadem || 0));

                } // end neu cung nvid
                else { // neu khac nvid
                    if (noilamviec.trim() == nhom) {
                        stt += 1;
                        html += htmlrong;
                        html += "<tr>";
                        html += "<td rowspan=\"2\" class=\"stt bcc-cangiua\">" + stt + "</td>";
                        html += "<td rowspan=\"2\" class=\"tennv bcc-cangiua\">" + tennv + "</td>";
                        html += "<td rowspan=\"2\">" + "" + "</td>";
                        html += "<td>" + "Ngày" + "</td>";

                        for (var i = 0; i < 31; i++) {

                            html += htmlngay[i];
                        }
                        html += "<td class=\"convertnumber bcc-cangiua\">" + tongcongngay + "</td>";
                        html += "<td class=\"convertnumber bcc-cangiua\">" + tongcongngay / 8 + "</td>";
                        html += "<td rowspan=\"2\" class=\"convertnumber bcc-cangiua\">" + tongcong + "</td>";
                        html += "<td rowspan=\"2\" class=\"convertnumber bcc-cangiua\">" + tongcong / 8 + "</td>";

                        for (var i = 0; i < 8; i++) {
                            html += "<td rowspan=\"2\">" + "" + "</td>";
                        }
                        html += "<td rowspan=\"2\" class=\"tennv bcc-cangiua\">" + tennv + "</td>";
                        html += "</tr>";
                        html += "<tr>";
                        html += "<td class=\"bcc-cangiua\">" + "Đêm" + "</td>";
                        for (var i = 0; i < 31; i++) {
                            html += htmldem[i];
                        }
                        html += "<td class=\"convertnumber bcc-cangiua\">" + tongcongdem + "</td>";
                        html += "<td class=\"convertnumber bcc-cangiua\">" + tongcongdem / 8 + "</td>";
                        html += "</tr>";
                    }
                    tongcong = 0;
                    tongcongngay = 0;
                    tongcongdem = 0;
                    // xu ly xong nhan vien truoc
                    nvid = $(this).find(".nvid").text();
                    tennv = $(this).find(".tennv").text();
                    ngay = $(this).find(".ngay").text();
                    cangay = $(this).find(".cangay").text();
                    cadem = $(this).find(".cadem").text();
                    bophan = $(this).find(".bophan").text();
                    noilamviec = $(this).find(".noilamviec").text();

                    for (var i = 0; i < 31; i++) {
                        htmlngay[i] = "<td class=\"bcc-td-ngay bcc-cangiua\"></td>";
                        htmldem[i] = "<td class=\"bcc-td-ngay bcc-cangiua\"></td>";
                    }
                    htmlngay[ngay - 1] = "<td class=\"bcc-td-ngay bcc-cangiua\">" + cangay + "</td>";
                    htmldem[ngay - 1] = "<td class=\"bcc-td-ngay bcc-cangiua\">" + cadem + "</td>";
                    tongcongngay += parseFloat((cangay || 0));
                    tongcongdem += parseFloat((cadem || 0));
                    tongcong += parseFloat((cangay || 0)) + parseFloat((cadem || 0));
                } // end neu khac nvid

                ///
                stt += 1;
                html += "<tr>";
                html += "<td rowspan=\"2\" class=\"stt bcc-cangiua\">" + stt + "</td>";
                html += "<td rowspan=\"2\" class=\"tennv bcc-cangiua\">" + tennv + "</td>";
                html += "<td rowspan=\"2\">" + "" + "</td>";
                html += "<td class\" bcc-cangiua\">" + "Ngày" + "</td>";

                for (var i = 0; i < 31; i++) {

                    html += htmlngay[i];
                }
                html += "<td class=\"convertnumber bcc-cangiua\">" + tongcongngay + "</td>";
                html += "<td class=\"convertnumber bcc-cangiua\">" + tongcongngay / 8 + "</td>";
                html += "<td rowspan=\"2\" class=\"convertnumber bcc-cangiua\">" + tongcong + "</td>";
                html += "<td rowspan=\"2\" class=\"convertnumber bcc-cangiua\">" + tongcong / 8 + "</td>";

                for (var i = 0; i < 8; i++) {
                    html += "<td rowspan=\"2\">" + "" + "</td>";
                }
                html += "<td rowspan=\"2\" class=\"tennv bcc-cangiua\">" + tennv + "</td>";
                html += "</tr>";
                html += "<tr>";
                html += "<td class=\" bcc-cangiua\">" + "Đêm" + "</td>";
                for (var i = 0; i < 31; i++) {
                    html += htmldem[i];
                }
                html += "<td class=\"convertnumber bcc-cangiua\">" + tongcongdem + "</td>";
                html += "<td class=\"convertnumber bcc-cangiua\">" + tongcongdem / 8 + "</td>";
                html += "</tr>";
            }
            $("#bcc-tbl-bangcong tbody").empty();
            $("#bcc-tbl-bangcong tbody").append(html);
        } // end la dong cuoi
        else {  // truong hop khac

            if (nvid == $(this).find(".nvid").text()) { // neu cung nvid
                nvid = $(this).find(".nvid").text();
                tennv = $(this).find(".tennv").text();
                ngay = $(this).find(".ngay").text();
                cangay = $(this).find(".cangay").text();
                cadem = $(this).find(".cadem").text();
                bophan = $(this).find(".bophan").text();
                noilamviec = $(this).find(".noilamviec").text();

                htmlngay[ngay - 1] = "<td class=\"bcc-td-ngay bcc-cangiua\">" + cangay + "</td>";
                htmldem[ngay - 1] = "<td class=\"bcc-td-ngay bcc-cangiua\">" + cadem + "</td>";
                tongcongngay += parseFloat((cangay || 0));
                tongcongdem += parseFloat((cadem || 0));
                tongcong += parseFloat((cangay || 0)) + parseFloat((cadem || 0));

            } // end neu cung nvid
            else { // neu khac nvid
                if (noilamviec.trim() == nhom) {
                    stt += 1;
                    html += htmlrong;
                    html += "<tr>";
                    html += "<td rowspan=\"2\" class=\"stt bcc-cangiua\">" + stt + "</td>";
                    html += "<td rowspan=\"2\" class=\"tennv bcc-cangiua\">" + tennv + "</td>";
                    html += "<td rowspan=\"2\">" + "" + "</td>";
                    html += "<td class=\" bcc-cangiua\">" + "Ngày" + "</td>";

                    for (var i = 0; i < 31; i++) {

                        html += htmlngay[i];
                    }
                    html += "<td class=\"convertnumber bcc-cangiua\">" + tongcongngay + "</td>";
                    html += "<td class=\"convertnumber bcc-cangiua\">" + tongcongngay / 8 + "</td>";
                    html += "<td rowspan=\"2\" class=\"convertnumber bcc-cangiua\">" + tongcong + "</td>";
                    html += "<td rowspan=\"2\" class=\"convertnumber bcc-cangiua\">" + tongcong / 8 + "</td>";

                    for (var i = 0; i < 8; i++) {
                        html += "<td rowspan=\"2\">" + "" + "</td>";
                    }
                    html += "<td rowspan=\"2\" class=\"tennv bcc-cangiua\">" + tennv + "</td>";
                    html += "</tr>";
                    html += "<tr>";
                    html += "<td class=\" bcc-cangiua\">" + "Đêm" + "</td>";
                    for (var i = 0; i < 31; i++) {
                        html += htmldem[i];
                    }
                    html += "<td class=\"convertnumber bcc-cangiua\">" + tongcongdem + "</td>";
                    html += "<td class=\"convertnumber bcc-cangiua\">" + tongcongdem / 8 + "</td>";
                    html += "</tr>";
                }
                tongcong = 0;
                tongcongngay = 0;
                tongcongdem = 0;
                // xu ly xong nhan vien truoc
                nvid = $(this).find(".nvid").text();
                tennv = $(this).find(".tennv").text();
                ngay = $(this).find(".ngay").text();
                cangay = $(this).find(".cangay").text();
                cadem = $(this).find(".cadem").text();
                bophan = $(this).find(".bophan").text();
                noilamviec = $(this).find(".noilamviec").text();

                for (var i = 0; i < 31; i++) {
                    htmlngay[i] = "<td class=\"bcc-td-ngay bcc-cangiua\"></td>";
                    htmldem[i] = "<td class=\"bcc-td-ngay bcc-cangiua\"></td>";
                }
                htmlngay[ngay - 1] = "<td class=\"bcc-td-ngay bcc-cangiua\">" + cangay + "</td>";
                htmldem[ngay - 1] = "<td class=\"bcc-td-ngay bcc-cangiua\">" + cadem + "</td>";
                tongcongngay += parseFloat((cangay || 0));
                tongcongdem += parseFloat((cadem || 0));
                tongcong += parseFloat((cangay || 0)) + parseFloat((cadem || 0));
            } // end neu khac nvid

        } // end truong hop khac

    })
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