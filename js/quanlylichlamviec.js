jQuery(document).ready(function () {
    var nvid = "";
    var temp_tbl_chitiet = "";
    var temp_tbl_br_thead = "";
    var temp_td = "";
    var temp_1 = "";
    var temp_2 = "";
    temp_td = "<td class=\"lydo\"></td><td class=\"canbo\"></td>";
    temp_tbl_br_thead = $("#tbl-br-chitiet").html().trim();
    temp_1 += "<tr class=\"tr-temp-chitiet\">";
    //temp_1 += "<td></td>";
    //temp_1 += "<td></td>";
    temp_1 += "<td colspan=\"5\">";
    temp_1 += "<table class=\"table table-bordered table-hover\">";
    temp_2 += "</td>";
    temp_2 += "</table>";
    temp_2 += "</tr>";

    var tongngay = "";
    var muon_count = "";
    var tyle = 0.00;
    var temp_thang = 0;
    var q_thang = getParameterByName("Thang");
    $("#tbl-dimuon-tongngay tbody tr").each(function () {
        nvid = $(this).attr("nvid");
        tongngay = $(this).find(".tongngay").text();
        muon_count = $("#tbl-dimuon-count tbody .nvid-" + nvid).find(".td-dimuon-solan").text();
        tyle = parseFloat(muon_count) / parseFloat(tongngay) * 100;
        $("#tbl-dimuon-count tbody .nvid-" + nvid).find(".td-dimuon-tongngay").text(tongngay);
        $("#tbl-dimuon-count tbody .nvid-" + nvid).find(".td-dimuon-tyle").text(tyle.toFixed(2) + "%");
    })


    $("table#tbl-dimuon-count tbody").on("click", "tr.tr-dimuon-count", function () {
        if ($(this).hasClass("tr-show")) {
            $(".tr-temp-chitiet").remove();            
            $(this).find("td:nth-child(1)").removeAttr("rowspan");
            $(this).find("td:nth-child(2)").removeAttr("rowspan");
            $(this).removeClass("tr-show");
        } else {
            
            $(".tr-temp-chitiet").remove();
            $(".tr-show").find("td:nth-child(1)").removeAttr("rowspan");
            $(".tr-show").find("td:nth-child(2)").removeAttr("rowspan");
            $(".tr-show").removeClass("tr-show");
            $(this).addClass("tr-show");
            $(this).find("td:nth-child(1)").attr("rowspan", 2);
            $(this).find("td:nth-child(2)").attr("rowspan", 2);
            $(this).addClass("tr-show");
            nvid = $(this).attr("nvid");
            temp_tbl_chitiet = temp_1;
            temp_tbl_chitiet += temp_tbl_br_thead;
            temp_tbl_chitiet += "<tbody>";
            temp_thang = 0;
            $("table#tbl-dimuon-chitiet tbody tr.nvid-" + nvid).each(function (j) {
                if (q_thang == 13 && temp_thang != $(this).find(".dimuon-thang").text()) {
                    temp_thang = $(this).find(".dimuon-thang").text();
                    temp_tbl_chitiet += "<tr>";
                    temp_tbl_chitiet += "<td colspan=\"5\">" + "Tháng " + temp_thang + "</td>";
                    temp_tbl_chitiet += "</tr>";
                }
                
                temp_tbl_chitiet += "<tr>";
                temp_tbl_chitiet += "<td>" + (j + 1) + "</td>";
                temp_tbl_chitiet += "<td>" + $(this).find(".dimuon-ngay").text() + "</td>";
                temp_tbl_chitiet += "<td>" + $(this).find(".dimuon-gio").text() + "</td>";
                temp_tbl_chitiet += temp_td;

                temp_tbl_chitiet += "</tr>";

            })
            temp_tbl_chitiet += "<tbody>";
            temp_tbl_chitiet += temp_2;
            //console.log(temp_tbl_chitiet);
            $(temp_tbl_chitiet).insertAfter($(this));
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 400);
        }
        
    })

})