var ajaxGet = { "get": "1" };
var jsonData = JSON.stringify({ ajaxGet });
var qs_mawb;
var ajaxGet;
var jsonDataDelete;
var e_today = new Date();
var e_tomorow11 = new Date();
var e_flt_d = [];
var e_flt_t = [];
var e_flt_dt;
var cal_diff_plan = 0;
var m_hawb = "";
var m_dim = "";
var sum_hawb_gw = 0;
var sum_hawb_dim = 0.0;
var temp_tooltip_html = "";
var temp_dim = "";
var arr_dim = [];
var arr_modelno = [];
var sum_pcs = 0;
var total_pcs = 0;
var temp_modelno = "";
var text_pcs = "";
var class_text_pcs = "";
var count_dim = [];
var total_dim = [];
$(document).ready(function () {
    if ($("#username").attr("wugroup") == "32") {
        $("#div-button").remove();
    }
    if ($("#username").attr("wugroup") == "34") {
        $("#MainContent_iNGTK").remove();
        $("#MainContent_iNDL").remove();
    }

    e_tomorow11 = addDateTime(e_today, 1, 11, 0, 0, 0);
    fncLoadKH();
    //$('.tooltip1').tooltipster();
    $("#tablexz").on("click", ".td-kh-sh", function () {
        $(".tr-sub").hide();
        $("#tr-sub-" + $(this).attr("mawb")).show();
        if ($(this).hasClass("hasshow")) {
            $("#tr-sub-" + $(this).attr("mawb")).hide();
            $(this).removeClass("hasshow");
        } else {
            $(this).addClass("hasshow");
        }
        // edit clicktd-sub-cipl
        $(".tr-sub").on("click", "#btn-edit", function () {
            event.stopPropagation();
            window.location.href = "/InputExcel2.aspx?MAWB=" + $(this).closest("tr").attr("mawb");
        })
        // end edit click
        // click delete
        $(".tr-sub").on("click", "#btn-delete", function () {
            event.stopPropagation();
            qs_mawb = $(this).closest("tr").attr("mawb");
            ajaxGet = { "get": qs_mawb };
            jsonDataDelete = JSON.stringify({ ajaxGet });
            //console.log(jsonDataDelete);

            if (confirm("Are you sure you want to delete this item?")) {
                fncDeleteKH();
                $(this).closest("tbody").empty();
                fncLoadKH();
                //console.log(jsonDataDelete);
            } else {
                return false;
            }
        })
        //end click delete

        // click sub hawb
        $(".tr-sub").on("click", ".td-sub-hawb", function () {
            event.stopPropagation();
            showTooltip($(this), "hawb");
        })
        // end click sub hawb
    })

    $("#tablexz").on("click", ".td-mawb", function () {
        showTooltip($(this), "mawb");
    })
    //

})
var thix;
var m_mawb = "";
var tooltip_head = "";
var tooltip_content = "";
function showTooltip(thisx, type) {
    // reset
    temp_tooltip_html = "";
    sum_hawb_gw = 0.0;
    sum_hawb_dim = 0.0;
    cw = 0.0;
    temp_dim = "";
    arr_dim = [];
    sum_pcs = 0;
    total_pcs = 0;
    temp_modelno = "";
    text_pcs = "";
    class_text_pcs = "";
    count_dim = {};
    total_dim = {};
    m_hawb = "";
    m_mawb = "";
    $(".tooltip_templates").remove();
    $(".td-mawb").removeAttr("data-tooltip-content");
    $(".td-mawb").removeAttr("tooltipstered");
    $(".td-sub-hawb").removeAttr("data-tooltip-content");
    $(".td-sub-hawb").removeAttr("tooltipstered");
    // end reset

    if (type == "hawb") {
        m_hawb = thisx.text();
        tooltip_head = "HAWB: " + m_hawb;
        thix = thisx.closest("tbody").find(".tr-sub-hawb-" + m_hawb);
        tooltip_content = m_hawb;
    } else {
        m_mawb = thisx.text();
        tooltip_head = "MAWB: " + m_mawb;

        thix = $("tr.tr-sub-mawb-" + m_mawb);

        tooltip_content = m_mawb;

    }







    thix.each(function () {
        m_dim = $(this).closest("tr").find(".td-sub-dim").text();
        if ($(this).hasClass("khvc-color-du") && m_dim != "") {

            sum_hawb_gw += parseFloat($(this).closest("tr").find(".td-sub-gw").text()); // tính trọng lượng gw
            sum_hawb_dim += tachdim(m_dim.replace(/ /g, "")); // tính trọng lượng theo dim
            if (arr_dim.indexOf(m_dim) < 0) { // loại bỏ nếu trùng dim trong array dim
                temp_dim += "<tr><td colspan=\"3\" class=\"tooltip-dim\" dim=\"" + m_dim + "\">" + m_dim + "</td></tr>";
                arr_dim.push(m_dim);

            }

            sum_pcs += 1;
            count_dim[m_dim] = (count_dim[m_dim] || 0) + 1;
        }
        if (m_dim != "" && $(this).hasClass("khvc-color-thua") == false) {
            total_dim[m_dim] = (total_dim[m_dim] || 0) + 1;
        }
        if (temp_modelno != $(this).attr("modelno")) { // nếu model no temp khác với model no hiện tại thì cộng số kiện
            total_pcs += parseInt($(this).attr("pallet")); // cộng số kiện
            temp_modelno = $(this).attr("modelno"); // set model no temp = model no hiện tại
            //arr_modelno.push(temp_modelno);
        }
    })

    if (parseFloat(sum_pcs) / parseFloat(total_pcs) == 1) {
        text_pcs = "SUFFICIENT";
        class_text_pcs = "xanh";
    } else {
        text_pcs = "INSUFFICIENT";
        class_text_pcs = "vang";
    }

    //console.log(arr_dim);
    if (sum_hawb_gw >= sum_hawb_dim) {
        cw = sum_hawb_gw;
    } else {
        cw = sum_hawb_dim;
    }
    temp_tooltip_html += "<div class=\"tooltip_templates\">";
    temp_tooltip_html += "<span id=\"tooltip_content_" + tooltip_content + "\">";
    temp_tooltip_html += "<table class=\"table table-bordered tbl-hawb-expand\">";
    temp_tooltip_html += "<tbody>";
    temp_tooltip_html += "<tr>";
    temp_tooltip_html += "<td class=\"td-khvc-dam td-tooltip-hawb\" colspan=\"3\">" + tooltip_head + "</td>";
    temp_tooltip_html += "</tr>";
    temp_tooltip_html += "<tr>";
    temp_tooltip_html += "<td class=\"td-khvc-dam td-tooltip-cantrai\">" + "PCS " + "<span class=\"span-text-pcs-" + class_text_pcs + "\">(" + text_pcs + ")</span>" + "</td>";
    temp_tooltip_html += "<td>" + sum_pcs + "/" + total_pcs + "</td>";
    temp_tooltip_html += "<td>" + "pcs" + "</td>";
    temp_tooltip_html += "</tr>";
    temp_tooltip_html += "<tr>";
    temp_tooltip_html += "<td class=\"td-khvc-dam td-tooltip-cantrai\">" + "GROSS WEIGHT " + "</td>";
    temp_tooltip_html += "<td>" + numberTextWithCommas(sum_hawb_gw.toFixed(2)) + "</td>";
    temp_tooltip_html += "<td>" + "kgs" + "</td>";
    temp_tooltip_html += "</tr>";
    temp_tooltip_html += "<tr>";
    temp_tooltip_html += "<td class=\"td-khvc-dam td-tooltip-cantrai\">" + "VOLUME WEIGHT " + "</td>";
    temp_tooltip_html += "<td>" + numberTextWithCommas(sum_hawb_dim.toFixed(2)) + "</td>";
    temp_tooltip_html += "<td>" + "kgs" + "</td>";
    temp_tooltip_html += "</tr>";
    temp_tooltip_html += "<tr>";
    temp_tooltip_html += "<td class=\"td-khvc-dam td-tooltip-cw td-tooltip-cantrai\">" + "CHARGEABLE WEIGHT " + "</td>";
    temp_tooltip_html += "<td class=\"td-khvc-dam td-tooltip-cw\">" + numberTextWithCommas(cw.toFixed(2)) + "</td>";
    temp_tooltip_html += "<td class=\"td-khvc-dam td-tooltip-cw\">" + "kgs" + "</td>";
    temp_tooltip_html += "</tr>";
    temp_tooltip_html += "<tr>";
    temp_tooltip_html += "<td colspan=\"3\" class=\"td-khvc-dam\">" + "DIMEMSION" + "</td>";
    temp_tooltip_html += "</tr>";
    temp_tooltip_html += temp_dim;
    temp_tooltip_html += "</tbody>";
    temp_tooltip_html += "</table>";
    temp_tooltip_html += "</span>";
    temp_tooltip_html += "</div>";
    $(temp_tooltip_html).insertAfter("#tablexz"); // thêm tooltip vào sau tablexz
    $(".tooltip_templates").hide(); // ẩn tooltip
    var tooltip_dim = "";
    var dim_class = "";
    $(".tbl-hawb-expand .tooltip-dim").each(function () {
        tooltip_dim = $(this).attr("dim");
        //dim_class = "khvc-text-thieu";
        //if ((parseInt(count_dim[tooltip_dim]) / parseInt(total_dim[tooltip_dim])) >= 1) {
        //    dim_class = "khvc-text-du";

        //} 
        $(this).text(tooltip_dim + " / " + (total_dim[tooltip_dim] < 10 ? "0" + total_dim[tooltip_dim] : total_dim[tooltip_dim]))
        //$(this).addClass(dim_class);
    })

    thisx.attr("data-tooltip-content", "#tooltip_content_" + tooltip_content);
    thisx.tooltipster({
        theme: 'tooltipster-noir',
        trigger: 'click',
        contentAsHTML: true,
        interactive: true,
    });

}


function tachdim(dim) {
    var dim_temp = "";
    var dimtt = 0.0;
    dim_temp = dim.split("x");
    dimtt = (parseFloat(dim_temp[0]) * parseFloat(dim_temp[1]) * parseFloat(dim_temp[2])) / 6000;

    // console.log(dimtt);
    return dimtt;
}

function fncLoadKH() {
    $.ajax({
        type: "POST",
        url: "QuanLyKHVC2.aspx/reKwes",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: KHSuccess,
        error: KHError
    })
}
function fncDeleteKH() {
    $.ajax({
        type: "POST",
        url: "QuanLyKHVC2.aspx/updateKweswMawb",
        data: jsonDataDelete,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: DeletePantosSuccess,
        error: DeletePantosError
    })
}

function KHSuccess(responsive) {
    var d = responsive.d;
    var pallet_num = 0;
    //console.log(d);
    var htmlse = "";
    if (d.length > 0) {
        $.each(d[0].sekwe, function (item, val) {
            htmlse += "<tr id=\"mawb-" + val.mawb + "\" mawb=\"" + val.mawb + "\" class=\"tr-plan\">";
            htmlse += "<td class=\"td-kh-sh\" mawb=\"" + val.mawb + "\">" + "<img src=\"images/plan.png\" />" + "</td>";
            htmlse += "<td class=\"td-mawb td-khvc-dam\">" + val.mawb + "</td>";
            htmlse += "<td class=\"td-pcs\">" + val.pcs + "</td>";
            htmlse += "<td class=\"td-gw\">" + val.gw + "</td>";
            htmlse += "<td class=\"td-flightno\">" + val.flightno + "</td>";
            htmlse += "<td class=\"td-flightdate td-khvc-dam td-flightdt\">" + val.flightdate + "</td>";
            htmlse += "<td class=\"td-flighttime td-khvc-dam td-flightdt\">" + val.flighttime + "</td>";
            htmlse += "<td class=\"td-cutot\">" + val.cutot + "</td>";
            htmlse += "<td class=\"td-cute\">" + val.cute + "</td>";
            htmlse += "<td class=\"td-dest\">" + val.dest + "</td>";
            htmlse += "<td class=\"td-show-tooltip td-process\">"
            htmlse += "<div class=\"progress\">";
            htmlse += "<div class=\"progress-bar progress-bar-info progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:0%\">";
            htmlse += "Processing...";
            htmlse += "</div>";
            htmlse += "</div>";
            htmlse += "</td>";
            htmlse += "<td class=\"td-fwd\">" + val.fwd + "</td>";
            htmlse += "<td class=\"td-warehouse\">" + val.warehouse + "</td>";
            htmlse += "<td class=\"td-remark\">" + val.remark + "</td>";

            htmlse += "</tr>";
        })
        var htmldesethead = "";
        htmldesethead += "<thead  class=\"thead-default\">";
        htmldesethead += "<tr>";
        htmldesethead += "<td>" + "NO" + "</td>";
        htmldesethead += "<td>" + "SHIPPER" + "</td>";
        htmldesethead += "<td>" + "CNEE" + "</td>";
        htmldesethead += "<td>" + "PALLET" + "</td>";
        htmldesethead += "<td>" + "CTN" + "</td>";
        htmldesethead += "<td>" + "HAWB" + "</td>";
        htmldesethead += "<td>" + "PLT ID" + "</td>";
        htmldesethead += "<td>" + "GW" + "</td>";
        htmldesethead += "<td>" + "DIM" + "</td>";
        htmldesethead += "<td>" + "DATE CRT" + "</td>";
        htmldesethead += "<td>" + "TIME CRT" + "</td>";
        htmldesethead += "</tr>";
        htmldesethead += "</thead>";
        $("#tablexz tbody").append(htmlse);
        var dese_mawb = "";
        var htmldese = "";
        var count = 0;
        var no = 0;
        var end = 0;
        var m_pcs;
        var m_pro;
        var m_per = "";
        var m_per_text = "";

        $.each(d[0].desekwe, function (item, val) {
            if (dese_mawb !== val.mawb) {
                // end vòng cũ
                no = 0;

                if (dese_mawb != "") {
                    htmldese += "</tbody>";
                    htmldese += "</table>";
                    htmldese += "</td>";
                    htmldese += "</tr>";

                    $(htmldese).insertAfter($("#mawb-" + dese_mawb));
                    htmldese = ""; // reset htmldese
                    count = 0;
                }

                // insert after

                if (val.palletid !== "") {
                    count += 1;
                }
                //if (val.modelno)

                no += 1;
                dese_mawb = val.mawb;
                m_pcs = $("#mawb-" + dese_mawb).find(".td-pcs").text().trim();
                // vong moi
                htmldese += "<tr id=\"tr-sub-" + dese_mawb + "\" class=\"tr-sub\" mawb=\"" + dese_mawb + "\">";
                htmldese += "<td colspan=\"2\">";
                htmldese += "<input id=\"btn-edit\" class=\"btn btn-info btn-sm btn-khvc\" type=\"button\" value=\"Edit\" />";
                htmldese += "<input id=\"btn-delete\" class=\"btn btn-danger btn-sm btn-khvc\" type=\"button\" value=\"Delete\" />";
                htmldese += "</td>";
                htmldese += "<td colspan=\"13\">";
                htmldese += "<table id=\"tbl-sub-" + dese_mawb + " \" class=\"table table-bordered tbl-sub\" totalpcs=\"" + m_pcs + "\" mawb=\"" + dese_mawb + "\">";
                htmldese += htmldesethead;
                htmldese += "<tbody>";
                htmldese += "<tr id=\"id-sub-" + val.id
                    + "\" pallet=\"" + val.pallet
                    + "\" modelno=\"" + val.cnee.replace(/\./g, "")
                    + "\" palletid=\"" + val.palletid
                    + "\" "
                    + "class=\"tr-sub-hawb-" + val.hawb + " "
                    + " tr-sub-mawb-" + dese_mawb + "\""
                    + ">";
                htmldese += "<td>" + no + "</td>";
                htmldese += "<td class=\"td-sub-cipl\">" + val.shipper + "</td>";
                htmldese += "<td class=\"" + val.cnee.replace(/\./g, "") + "\">" + val.cnee + "</td>";
                htmldese += "<td class=\"td-sub-pallet\">" + val.pallet + "</td>";
                htmldese += "<td class=\"td-sub-ctn\">" + val.ctn + "</td>";
                htmldese += "<td class=\"td-sub-hawb\">" + val.hawb + "</td>";
                htmldese += "<td class=\"td-sub-palletid\">" + val.palletid + "</td>";
                htmldese += "<td class=\"td-sub-gw\">" + val.gw + "</td>";
                htmldese += "<td class=\"td-sub-dim\">" + val.kichthuoc + "</td>";
                htmldese += "<td class=\"td-sub-ngaynhap\">" + val.ngaynhap + "</td>";
                htmldese += "<td class=\"td-sub-gionhap\">" + val.gionhap + "</td>";
                htmldese += "</tr>";
            } else {
                if (val.palletid !== "") {
                    count += 1;
                }

                no += 1;
                dese_mawb = val.mawb;
                htmldese += "<tr id=\"id-sub-" + val.id
                    + "\" pallet=\"" + val.pallet
                    + "\" modelno=\"" + val.cnee.replace(/\./g, "")
                    + "\" palletid=\"" + val.palletid
                    + "\" "
                    + "class=\"tr-sub-hawb-" + val.hawb + " "
                    + " tr-sub-mawb-" + dese_mawb + "\""
                    + ">";
                htmldese += "<td>" + no + "</td>";
                htmldese += "<td class=\"" + val.cnee.replace(/\./g, "") + "\">" + val.shipper + "</td>";
                htmldese += "<td class=\"td-sub-cipl\">" + val.cnee + "</td>";
                htmldese += "<td class=\"td-sub-pallet\">" + val.pallet + "</td>";
                htmldese += "<td class=\"td-sub-ctn\">" + val.ctn + "</td>";
                htmldese += "<td class=\"td-sub-hawb\">" + val.hawb + "</td>";
                htmldese += "<td class=\"td-sub-palletid\">" + val.palletid + "</td>";
                htmldese += "<td class=\"td-sub-gw\">" + val.gw + "</td>";
                htmldese += "<td class=\"td-sub-dim\">" + val.kichthuoc + "</td>";
                htmldese += "<td class=\"td-sub-ngaynhap\">" + val.ngaynhap + "</td>";
                htmldese += "<td class=\"td-sub-gionhap\">" + val.gionhap + "</td>";
                htmldese += "</tr>";
            }
            if (item === (d[0].desekwe.length - 1)) { // nếu dòng cuối cùng của sub table là duy nhất
                htmldese += "</tbody>";
                htmldese += "</table>";
                htmldese += "</td>";
                htmldese += "</tr>";

                $(htmldese).insertAfter($("#mawb-" + dese_mawb));
            }
        });
        $("#tr-loading").hide();
        $(".tr-sub").hide();
        $("#tablexz tbody tr.tr-plan").each(function () {
            e_flt_d = $(this).find(".td-flightdate").text().split("/");
            e_flt_t = $(this).find(".td-flighttime").text().split(":");
            e_flt_dt = new Date(e_flt_d[2], (parseInt(e_flt_d[1]) - 1), e_flt_d[0], e_flt_t[0], e_flt_t[1], 0, 0);
            cal_diff_plan = parseFloat(e_tomorow11 - e_flt_dt) / 60000;
            if (cal_diff_plan > 0) {

                $(this).find(".td-flightdt").addClass("khvc-flight-alert");
            }

        })
        fncHightlightRow();
        //console.log(d[0].se);
        //console.log(itemDese);
    } else {
        $("#tablexz").remove();
    }

}
function KHError(responsive) {
    alert("Có lỗi xảy ra!");
}

function fncHightlightRow() {
    var m_pallet = 0;
    var m_modelno = "";
    var m_hawb = "";
    var count_model = 0;
    var m_palletid = "";
    var len = "";
    var count_total = 0;
    var total_pcs = 0;
    var m_mawb = "";
    var m_gw = 0;
    var html_temp_tooltip = "";
    var m_pallet = 0;
    html_temp_tooltip += "<div class=\"tooltip_templates\">";
    var tr_sub_temp = "<tr class=\"tr-sub-temp\"><td colspan=\"10\"></td></tr>"
    $(".tbl-sub").each(function () {
        count_model = 0;
        count_total = 0;
        m_gw = 0;
        total_pcs = $(this).attr("totalpcs");
        m_mawb = $(this).attr("mawb");
        html_temp_tooltip += "<span id=\"tooltip-content\">";

        $(this).find("tbody tr").each(function () {
            m_pallet = $(this).attr("pallet");
            m_palletid = $(this).attr("palletid");


            if ((m_modelno != $(this).attr("modelno")
                || m_hawb != $(this).find(".td-sub-hawb").text())) { // nếu khác model hoặc hawb

                count_model = 0;
                $(".class-temp").removeClass("class-temp");
                if ($(this).is(":first-child") == false) { // không phải dòng đầu
                    $(tr_sub_temp).insertBefore($(this)); // thêm dòng ngăn cách 
                }

                m_modelno = $(this).attr("modelno");
                m_hawb = $(this).find(".td-sub-hawb").text();
            }


            //
            $(this).addClass("class-temp");

            m_pallet = $(this).find(".td-sub-pallet").text();
            if (m_palletid !== "" && m_palletid !== null) {
                count_model += 1;
                if (count_model <= m_pallet) {
                    count_total += 1;
                    m_gw += parseInt($(this).find(".td-sub-gw").text());

                    $(this).find(".td-sub-pallet").text(count_model + "/" + m_pallet);
                }
            } else {
                $(this).find(".td-sub-pallet").text("0" + "/" + m_pallet);
            }
            if (count_model == m_pallet) {
                $(".class-temp").addClass("khvc-color-du")
                    .removeClass("class-temp");

                //count_total += 1;
            } else if (count_model > m_pallet) {
                $(this).addClass("khvc-color-thua");
                $(this).find(".td-sub-pallet").text("");
            } else {
                //$(this).addClass("class-temp");
            }
        }) // end each tr

        //
        m_pro = (100 * (count_total / total_pcs)).toFixed(0);
        m_per = "";
        m_per_text = "";

        if (m_pro >= 100) {
            m_per = "100";
            m_per_text = "100%";
            $("#mawb-" + m_mawb).find(".progress-bar").removeClass("progress-bar-info").addClass("progress-bar-warning");
        } else {
            m_per = m_pro;
            m_per_text = count_total + "/" + total_pcs;
        }

        $("#mawb-" + m_mawb).find(".td-gw").text(numberWithCommas(m_gw));
        $("#mawb-" + m_mawb).find(".progress-bar").attr("style", "width:" + m_per + "%")
            .attr("aria-valuenow", m_per)
            .text(m_per_text);
    })
    html_temp_tooltip += "</div>";
}

function DeletePantosSuccess(response) {
    alert(response.d);
}
function DeletePantosError(response) {
    alert("Có lỗi xảy ra!");
}