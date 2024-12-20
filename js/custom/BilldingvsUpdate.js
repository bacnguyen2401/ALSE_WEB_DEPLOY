﻿$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();
});

function fncLoad() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "BilldingvsUpdate.aspx/listAllExportDHL",
        contentType: "application/json;charsert=utf-8",
        dataType: "json",
        data: jsonData,
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);

            //Add thêm ngày và giờ để tô màu flt thêm ngày và 11 giờ trưa hôm sau
            var startdate = new Date();
            var new_date = moment(startdate);
            new_date.add(1, 'days');
            new_date.set('hour', 11);
            new_date.set('minute', 00);
            new_date.set('second', 00);

            // Header Title
            var thead = "";
            thead += "<thead>";
            thead += "<tr class=\"tr-thead tr-fixed\">";
            thead += "<td class=\"td-no \"              >No.</td>";
            thead += "<td class=\"td-img  \"            >STATUS</td>";
            thead += "<td class=\"td-mawb  \"           >MAWB</td>";
            thead += "<td class=\"td-pcs  \"            >PCS</td>";
            thead += "<td class=\"td-gw  \"             >G.W</td>";
            thead += "<td class=\"td-fltNo  \"          >FLT.NO</td>";
            thead += "<td class=\"td-fltD \"     >FLT.D</td>";
            thead += "<td class=\"td-fltT \"     >FLT.T</td>";
            thead += "<td class=\"\">NBA</td>";
            thead += "<td class=\"\"           >ALSE</td>";
            thead += "<td class=\"td-dest hx-dest\"     >DEST</td>";
            thead += "<td class=\"td-sliD  \"           >SLI.D</td>";
            thead += "<td class=\"td-sliT  \"           >SLI.T</td>";
            thead += "<td class=\"td-truckId  \"        >Truck ID</td>";
            thead += "<td class=\"td-truckD  \"         >Truck.D</td>";
            thead += "<td class=\"td-truckT  \"         >Truck.T</td>";
            thead += "<td class=\"td-fwd hx-fwd\"       >FWD</td>";
            thead += "<td class=\"td-wh  \"             >W.H</td>";
            thead += "<td class=\"td-remark  \"         >REMARK</td>";
            thead += "</tr>";
            thead += "</thead>";
            $(".tbl-header-fixed thead").remove();
            var tableOffset;

            if (d.Booking.length > 0) {
                $("#tbl-Booking").prepend(thead);
                tableOffset = $("#tbl-Booking").offset().top;
                fncScrollFixed("tbl-Booking", 1, 0);
            } else if (d.PreAccept.length > 0) {
                $("#tbl-PreAccept").prepend(thead);
                tableOffset = $("#tbl-PreAccept").offset().top;
                fncScrollFixed("tbl-PreAccept", 1, 0);
            } else if (d.Accepted.length > 0) {
                $("#tbl-Accepted").prepend(thead);
                tableOffset = $("#tbl-Accepted").offset().top;
                fncScrollFixed("tbl-Accepted", 1, 0);
            } else if (d.LoadingOnTruck.length > 0) {
                $("#tbl-LoadOnTrucking").prepend(thead);
                tableOffset = $("#tbl-LoadOnTrucking").offset().top;
                fncScrollFixed("tbl-LoadOnTrucking", 1, 0);
            } else if (d.TruckingToNBA.length > 0) {
                $("#tbl-TruckingToNBA").prepend(thead);
                tableOffset = $("#tbl-TruckingToNBA").offset().top;
                fncScrollFixed("tbl-TruckingToNBA", 1, 0);
            } else if (d.AirPort.length > 0) {
                $("#tbl-AirPort").prepend(thead);
                tableOffset = $("#tbl-AirPort").offset().top;
                fncScrollFixed("tbl-AirPort", 1, 0);
            } else if (d.Complete.length > 0) {
                $("#tbl-Complete").prepend(thead);
                tableOffset = $("#tbl-Complete").offset().top;
                fncScrollFixed("tbl-Complete", 1, 0);
            }
            //$("#header-fixed ").empty();
            //var $fixedHeader;
            //$("#header-fixed").append(thead);
            //var offset;
            //$(window).bind("scroll", function () {
            //     offset = $(this).scrollTop();
            //    $fixedHeader = $("#header-fixed ");
            //    if (offset >= tableOffset && $fixedHeader.is(":hidden")) {
            //        $fixedHeader.show();
            //    }
            //    else if (offset < tableOffset) {
            //        $fixedHeader.hide();
            //    }
            //});
            //Booking List
            var html_tableBooking = "";
            $("#tbl-Booking tbody").empty();
            $.each(d.Booking, function (item, val) {

                // tô màu fltDT 
                var tomaufltDT = "";
                var momentDtflt = moment(val.flightDateTimeBooking);
                if (new_date - momentDtflt._d > 0) {
                    tomaufltDT = "setbacgroupFltdAndFltNo";
                }

                var tachwh = val.warehouseBooking.split("|");

                if (parseInt(tachwh[1]) != 0) {
                    tomau_td_bksxexuat = "setbackgroupBKS";
                }
                if (parseInt(tachwh[0]) != 0) {
                    tomau_td_wh = "setbackgroupBKS";
                }

                html_tableBooking += "<tr class=\"tr-hover tr-makho-view  tr-makho-" + val.warehouseBooking + "\">";
                html_tableBooking += "<td class=\"td-no \"              >" + (item + 1) + "</td>";
                html_tableBooking += "<td class=\"td-img  \"            >" + "<img src=\"images/booking.png\"  />" + "</td>";
                html_tableBooking += "<td class=\"td-mawb  \"           >" + val.mawbBooking + "</td>";
                html_tableBooking += "<td class=\"td-pcs  \"            >" + val.pcsBooking + "</td>";
                html_tableBooking += "<td class=\"td-gw  \"             >" + val.gwBooking + "</td>";
                html_tableBooking += "<td class=\"td-fltNo  \"          >" + val.flightNoBooking + "</td>";
                html_tableBooking += "<td class=\"td-fltD fltdate " + tomaufltDT + "\">" + convertDate(val.flightDateTimeBooking)[9] + "</td>";
                html_tableBooking += "<td class=\"td-fltT flttime " + tomaufltDT + "\">" + convertDate(val.flightDateTimeBooking)[3] + "</td>";
                html_tableBooking += "<td class=\"td-NBA  \"            >" + convertDate(val.cutotBooking)[2] + "</td>";
                html_tableBooking += "<td class=\"td-ALSE  \"           >" + convertDate(val.cuteBooking)[2] + "</td>";
                html_tableBooking += "<td class=\"td-dest hx-dest\"     ></td>";
                html_tableBooking += "<td class=\"td-sliD  \"           ></td>";
                html_tableBooking += "<td class=\"td-sliT  \"           ></td>";
                html_tableBooking += "<td class=\"td-truckId  \"        ></td>";
                html_tableBooking += "<td class=\"td-truckD  \"         ></td>";
                html_tableBooking += "<td class=\"td-truckT  \"         ></td>";
                html_tableBooking += "<td class=\"td-fwd hx-fwd\"       >" + val.fwdBooking + "</td>";
                html_tableBooking += "<td class=\"td-wh  \"             >" + val.warehouseBooking + "</td>";
                html_tableBooking += "<td class=\"td-remark  \"         ></td>";
                html_tableBooking += "</tr>";
            });
            $("#tbl-Booking tbody").append(html_tableBooking);

            // Pre accept list
            var html_tablePreaccept = "";
            $("#tbl-PreAccept tbody").empty();
            //console.log(d.PreAccept);

            $.each(d.PreAccept, function (item, val) {


                // tô màu td-NBA
                var tomau_td_gioxuat = "";
                var tomau_td_kmawb = "";

                var ngaygio_cutot_r_ymdhm = new Date(val.cutotPreAccept);
                var ngaygioexp_r = new Date(val.exportDateTimePreAccept);

                var diff = "";
                var diff_note = "";
                if (new Date(ngaygio_cutot_r_ymdhm) > new Date(ngaygioexp_r)) {
                    diff = new Date(ngaygio_cutot_r_ymdhm) - new Date(ngaygioexp_r);
                    diff_note = "td-NBA";
                } else {
                    diff = new Date(ngaygioexp_r) - new Date(ngaygio_cutot_r_ymdhm);
                    diff_note = "exp";
                }
                var diff_minutes = diff / 1000 / 60;

                var diff2 = "";
                var diff2_note = "";
                if (new Date() > new Date(ngaygio_cutot_r_ymdhm)) {
                    diff2 = new Date() - new Date(ngaygio_cutot_r_ymdhm);
                    diff2_note = "date";
                }
                else {
                    diff2 = new Date(ngaygio_cutot_r_ymdhm) - new Date();
                    diff2_note = "td-NBA";
                }
                var diff2_minutes = diff2 / 1000 / 60;


                if (val.cutotPreAccept != "" && (val.sliDateTimePreAccept != "20") || (val.sliDateTimePreAccept != "200")) {
                    if (diff_note == "td-NBA" && diff_minutes <= 120) {
                        tomau_td_gioxuat = 'background-color-gioxuat';
                    } else if (diff_note == "td-NBA" && diff_minutes > 120 && diff_minutes <= 300) {
                        tomau_td_gioxuat = 'background-color-gioxuat1';
                    }
                }

                if (val.cutotPreAccept != "") {
                    if (diff2_note == "date") {
                        tomau_td_kmawb = 'setbackgroupAndColor';
                    }
                    else if (diff2_note == "td-NBA" && diff2_minutes < 120) {
                        tomau_td_kmawb = 'setbackgroupAndColor1';
                    }
                }
                // Tô màu ALSE

                var tomau_td_ALSE = "";
                var tomau_td_sli = "";
                var ngaygio_cute_r_ymdhm = new Date(val.cutePreAccept);
                var ngaygiosli_r = new Date(val.sliDateTimePreAccept);

                var diff = "";
                var diff_note = "";
                if (new Date(ngaygio_cute_r_ymdhm) > new Date(ngaygiosli_r)) {
                    diff = new Date(ngaygio_cute_r_ymdhm) - new Date(ngaygiosli_r);
                    diff_note = "td-ALSE";
                } else {
                    diff = new Date(ngaygiosli_r) - new Date(ngaygio_cute_r_ymdhm);
                    diff_note = "sli";
                }
                var diff_minutes = diff / 1000 / 60;

                var diff2 = "";
                var diff2_note = "";
                if (new Date() > new Date(ngaygio_cute_r_ymdhm)) {
                    diff2 = new Date() - new Date(ngaygio_cute_r_ymdhm);
                    diff2_note = "date";
                }
                else {
                    diff2 = new Date(ngaygio_cute_r_ymdhm) - new Date();
                    diff2_note = "td-ALSE";
                }
                var diff2_minutes = diff2 / 1000 / 60;

                if (val.cutePreAccept != "") {
                    if (diff2_note == "date") {
                        tomau_td_ALSE = "setbackgroupAndColor";
                    }
                    else if (diff2_note == "td-ALSE" && diff2_minutes < 120) {
                        tomau_td_ALSE = "setbackgroupAndColor1";
                    }
                }

                if (val.cutePreAccept != "") {
                    if (diff_note == "sli") {
                        tomau_td_sli = "background-color-gioxuat";
                    } else if (diff_note == "td-ALSE" && diff_minutes <= 120) {
                        tomau_td_sli = "background-color-gioxuat1";
                    }
                }

                // tô màu bks xe và wh
                var tomau_td_bksxexuat = "";
                var tomau_td_wh = "";
                var tachwh = val.warehousePreAccept.split("|");

                if (parseInt(tachwh[1]) != 0) {
                    tomau_td_bksxexuat = "setbackgroupBKS";
                }
                if (parseInt(tachwh[0]) != 0) {
                    tomau_td_wh = "setbackgroupBKS";
                }

                // tô màu fltDT 
                var tomaufltDT = "";
                var momentDtflt = moment(val.flightDateTimePreAccept);
                if (new_date - momentDtflt._d > 0) {
                    tomaufltDT = "setbacgroupFltdAndFltNo";
                }


                html_tablePreaccept += "<tr class=\"tr-hover tr-makho-view tr-makho-" + val.warehousePreAccept + " \">";
                html_tablePreaccept += "<td class=\"td-no\">" + (item + 1) + "</td>";
                html_tablePreaccept += "<td class=\"td-img  \"    >" + "<img src=\"images/pre-accept.png\"/>" + "</td>";
                html_tablePreaccept += "<td class=\"td-mawb kmawb  " + tomau_td_kmawb + " \">" + val.mawbPreAccept + "</td>";
                html_tablePreaccept += "<td class=\"td-pcs  \"    >" + val.pcsPreAccept + "</td>";
                html_tablePreaccept += "<td class=\"td-gw  \">" + val.gwPreAccept + "</td>";
                html_tablePreaccept += "<td class=\"td-fltNo  \"  >" + val.flightNoPreAccept + "</td>";
                html_tablePreaccept += "<td class=\"td-fltD fltdate " + tomaufltDT + "\">" + convertDate(val.flightDateTimePreAccept)[9] + "</td>";
                html_tablePreaccept += "<td class=\"td-fltT flttime " + tomaufltDT + "\">" + convertDate(val.flightDateTimePreAccept)[3] + "</td>";
                html_tablePreaccept += "<td class=\"td-NBA \"    >" + convertDate(val.cutotPreAccept)[2] + "</td>";
                html_tablePreaccept += "<td class=\"td-ALSE  " + tomau_td_ALSE + " \">" + convertDate(val.cutePreAccept)[2] + "</td>";
                html_tablePreaccept += "<td class=\"td-dest hx-dest\">" + val.destPreAccept + "</td>";
                html_tablePreaccept += "<td class=\"td-sliD ngaylamsli\">" + convertDate(val.sliDateTimePreAccept)[9] + "</td>";
                html_tablePreaccept += "<td class=\"td-sliT  giolamsli   " + tomau_td_sli + "\">" + convertDate(val.sliDateTimePreAccept)[3] + "</td>";
                html_tablePreaccept += "<td class=\"td-truckId hx-bksxexuat " + tomau_td_bksxexuat + "\">" + val.numberPlatePreAccept + "</td>";
                html_tablePreaccept += "<td class=\"td-truckD ngayxuat\">" + convertDate(val.exportDateTimePreAccept)[9] + "</td>";
                html_tablePreaccept += "<td class=\"td-truckT gioxuat    " + tomau_td_gioxuat + "  \">" + convertDate(val.exportDateTimePreAccept)[3] + "</td>";
                html_tablePreaccept += "<td class=\"td-fwd hx-fwd\"    >" + val.fwdPreAccept + "</td>";
                html_tablePreaccept += "<td class=\"td-wh hx-warehouse " + tomau_td_wh + "\">" + val.warehousePreAccept + "</td>";
                html_tablePreaccept += "<td class=\"td-remark  \" style=\"width:70px\">" + val.remarkPreAccept + "</td>";
                html_tablePreaccept += "</tr>";
            });
            $("#tbl-PreAccept tbody").append(html_tablePreaccept);

            // Accepted List
            var html_tableAccepted = "";
            $("#tbl-Accepted tbody").empty();
            $.each(d.Accepted, function (item, val) {

                // TÔ MÀU CUT NBA
                var tomau_td_gioxuat = "";
                var tomau_td_kmawb = "";

                var ngaygio_cutot_r_ymdhm = new Date(val.cutotAccepted);
                var ngaygioexp_r = new Date(val.exportDateTimeAccepted);

                var diff = "";
                var diff_note = "";
                if (ngaygio_cutot_r_ymdhm > ngaygioexp_r) {
                    diff = ngaygio_cutot_r_ymdhm - ngaygioexp_r;
                    diff_note = "td-NBA";
                } else {
                    diff = ngaygioexp_r - ngaygio_cutot_r_ymdhm;
                    diff_note = "exp";
                }
                var diff_minutes = diff / 1000 / 60;

                var diff2 = "";
                var diff2_note = "";
                if (new Date() > ngaygio_cutot_r_ymdhm) {
                    diff2 = new Date() - ngaygio_cutot_r_ymdhm;
                    diff2_note = "date";
                }
                else {
                    diff2 = ngaygio_cutot_r_ymdhm - new Date();
                    diff2_note = "td-NBA";
                }
                var diff2_minutes = diff2 / 1000 / 60;

                if (val.cutotAccepted != "" && (val.exportDateTimeAccepted != "20") || (val.exportDateTimeAccepted != "200")) {
                    if (diff_note == "td-NBA" && diff_minutes <= 120) {
                        tomau_td_gioxuat = "background-color-gioxuat";
                    } else if (diff_note == "td-NBA" && diff_minutes > 120 && diff_minutes <= 300) {
                        tomau_td_gioxuat = "background-color-gioxuat1";
                    }
                }

                if (val.cutotAccepted != "") {
                    if (diff2_note == "date") {
                        var tomau_td_kmawb = 'setbackgroupAndColor';
                    }
                    else if (diff2_note == "td-NBA" && diff2_minutes < 120) {
                        var tomau_td_kmawb = 'setbackgroupAndColor1';
                    }
                }

                // Tô màu ALSE

                var tomau_td_ALSE = "";
                var tomau_td_sli = "";

                var ngaygio_cute_r_ymdhm = val.cuteAccepted;
                var ngaygiosli_r = val.sliDateTimeAccepted;

                var diff = "";
                var diff_note = "";
                if (new Date(ngaygio_cute_r_ymdhm) > new Date(ngaygiosli_r)) {
                    diff = new Date(ngaygio_cute_r_ymdhm) - new Date(ngaygiosli_r);
                    diff_note = "td-ALSE";
                } else {
                    diff = new Date(ngaygiosli_r) - new Date(ngaygio_cute_r_ymdhm);
                    diff_note = "sli";
                }
                var diff_minutes = diff / 1000 / 60;

                var diff2 = "";
                var diff2_note = "";
                if (new Date() > new Date(ngaygio_cute_r_ymdhm)) {
                    diff2 = new Date() - new Date(ngaygio_cute_r_ymdhm);
                    diff2_note = "date";
                }
                else {
                    diff2 = new Date(ngaygio_cute_r_ymdhm) - new Date();
                    diff2_note = "td-ALSE";
                }
                var diff2_minutes = diff2 / 1000 / 60;

                //if ($(this).text().trim() != "") {
                if (diff2_note == "date") {
                    tomau_td_ALSE = "setbackgroupAndColor";
                }
                else if (diff2_note == "td-ALSE" && diff2_minutes < 120) {
                    tomau_td_ALSE = "setbackgroupAndColor1";
                }
                //}

                if (val.cuteAccepted != "") {
                    if (diff_note == "sli") {
                        tomau_td_sli = 'background-color-gioxuat';
                    } else if (diff_note == "td-ALSE" && diff_minutes <= 120) {
                        tomau_td_sli = 'background-color-gioxuat1';
                    }
                }

                // tô màu bks xe và wh
                var tomau_td_bksxexuat = "";
                var tomau_td_wh = "";
                var tachwh = val.warehouseAccepted.split("|");

                if (parseInt(tachwh[1]) != 0) {
                    tomau_td_bksxexuat = "setbackgroupBKS";
                }
                if (parseInt(tachwh[0]) != 0) {
                    tomau_td_wh = "setbackgroupBKS";
                }

                // tô màu fltDT 
                var tomaufltDT = "";
                var momentDtflt = moment(val.flightDateTimeAccepted);
                if (new_date - momentDtflt._d > 0) {
                    tomaufltDT = "setbacgroupFltdAndFltNo";
                }

                html_tableAccepted += "<tr class=\"tr-hover tr-makho-view tr-makho-" + val.warehouseAccepted + " \">";
                html_tableAccepted += "<td class=\"td-no\">" + (item + 1) + "</td>";
                html_tableAccepted += "<td class=\"td-img  \"    >" + "<img src=\"images/blog_accept.png\" />" + "</td>";
                html_tableAccepted += "<td class=\"td-mawb kmawb " + tomau_td_kmawb + "\">" + val.mawbAccepted;
                html_tableAccepted += "</br>";
                html_tableAccepted += "<span class=\"span-duyet span-DuyetCoDOC\">" + (val.DuyetCoDOC == "True" ? "Có Doc" : "") + "</span>";
                html_tableAccepted += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.DuyetGiaoDoc == "True" ? "Đã giao" : "") + "</span>";
                html_tableAccepted += "</td>";
                html_tableAccepted += "<td class=\"td-pcs  \"    >" + val.pcsAccepted + "</td>";
                html_tableAccepted += "<td class=\"td-gw  \">" + val.gwAccepted + "</td>";
                html_tableAccepted += "<td class=\"td-fltNo  \"  >" + val.flightNoAccepted + "</td>";
                html_tableAccepted += "<td class=\"td-fltD fltdate " + tomaufltDT + "\">" + convertDate(val.flightDateTimeAccepted)[9] + "</td>";
                html_tableAccepted += "<td class=\"td-fltT flttime " + tomaufltDT + "\">" + convertDate(val.flightDateTimeAccepted)[3] + "</td>";
                html_tableAccepted += "<td class=\"td-NBA \"    >" + convertDate(val.cutotAccepted)[2] + "</td>";
                html_tableAccepted += "<td class=\"td-ALSE   " + tomau_td_ALSE + "\">" + convertDate(val.cuteAccepted)[2] + "</td>";
                html_tableAccepted += "<td class=\"td-dest hx-dest\">" + val.destPreAccepted + "</td>";
                html_tableAccepted += "<td class=\"td-sliD ngaylamsli\">" + convertDate(val.sliDateTimeAccepted)[9] + "</td>";
                html_tableAccepted += "<td class=\"td-sliT  giolamsli   " + tomau_td_sli + "\">" + convertDate(val.sliDateTimeAccepted)[3] + "</td>";
                html_tableAccepted += "<td class=\"td-truckId hx-bksxexuat " + tomau_td_bksxexuat + "\">" + val.numberPlateAccepted + "</td>";
                html_tableAccepted += "<td class=\"td-truckD ngayxuat\">" + convertDate(val.exportDateTimeAccepted)[9] + "</td>";
                html_tableAccepted += "<td class=\"td-truckT gioxuat " + tomau_td_gioxuat + " \">" + convertDate(val.exportDateTimeAccepted)[3] + "</td>";
                html_tableAccepted += "<td class=\"td-fwd hx-fwd\"    >" + val.fwdAccepted + "</td>";
                html_tableAccepted += "<td class=\"td-wh hx-warehouse " + tomau_td_wh + "\">" + val.warehouseAccepted + "</td>";
                html_tableAccepted += "<td class=\"td-remark  \">" + val.remarkAccepted + "</td>";
                html_tableAccepted += "</tr>";
            });
            $("#tbl-Accepted tbody").append(html_tableAccepted);

            //LoadOnTrucking list
            var html_tableLoadOnTrucking = "";
            $("#tbl-LoadOnTrucking tbody").empty();
            $.each(d.LoadingOnTruck, function (item, val) {

                // TÔ MÀU CUT NBA
                var tomau_td_gioxuat = "";
                var tomau_td_kmawb = "";

                var ngaygio_cutot_r_ymdhm = val.cutotLoadingOnTruck;
                var ngaygioexp_r = val.exportDateTimeLoadingOnTruck;

                var diff = "";
                var diff_note = "";
                if (new Date(ngaygio_cutot_r_ymdhm) > new Date(ngaygioexp_r)) {
                    diff = new Date(ngaygio_cutot_r_ymdhm) - new Date(ngaygioexp_r);
                    diff_note = "td-NBA";
                } else {
                    diff = new Date(ngaygioexp_r) - new Date(ngaygio_cutot_r_ymdhm);
                    diff_note = "exp";
                }
                var diff_minutes = diff / 1000 / 60;

                var diff2 = "";
                var diff2_note = "";
                if (new Date() > new Date(ngaygio_cutot_r_ymdhm)) {
                    diff2 = new Date() - new Date(ngaygio_cutot_r_ymdhm);
                    diff2_note = "date";
                }
                else {
                    diff2 = new Date(ngaygio_cutot_r_ymdhm) - new Date();
                    diff2_note = "td-NBA";
                }
                var diff2_minutes = diff2 / 1000 / 60;

                if (val.cutotLoadingOnTruck != "" && (val.exportDateTimeLoadingOnTruck != "20") || (val.exportDateTimeLoadingOnTruck != "200")) {
                    if (diff_note == "td-NBA" && diff_minutes <= 120) {
                        tomau_td_gioxuat = "background-color-gioxuat";
                    } else if (diff_note == "td-NBA" && diff_minutes > 120 && diff_minutes <= 300) {
                        tomau_td_gioxuat = "background-color-gioxuat1";
                    }
                }

                if (val.cutotLoadingOnTruck != "") {
                    if (diff2_note == "date") {
                        tomau_td_kmawb = 'setbackgroupAndColor';
                    }
                    else if (diff2_note == "td-NBA" && diff2_minutes < 120) {
                        tomau_td_kmawb = 'setbackgroupAndColor1';
                    }
                }

                // Tô màu ALSE
                var tomau_td_ALSE = "";
                var tomau_td_sli = "";

                var ngaygio_cute_r_ymdhm = val.cuteLoadingOnTruck;
                var ngaygiosli_r = val.sliDateTimeLoadingOnTruck;

                var diff = "";
                var diff_note = "";
                if (new Date(ngaygio_cute_r_ymdhm) > new Date(ngaygiosli_r)) {
                    diff = new Date(ngaygio_cute_r_ymdhm) - new Date(ngaygiosli_r);
                    diff_note = "td-ALSE";
                } else {
                    diff = new Date(ngaygiosli_r) - new Date(ngaygio_cute_r_ymdhm);
                    diff_note = "sli";
                }
                var diff_minutes = diff / 1000 / 60;

                var diff2 = "";
                var diff2_note = "";
                if (new Date() > new Date(ngaygio_cute_r_ymdhm)) {
                    diff2 = new Date() - new Date(ngaygio_cute_r_ymdhm);
                    diff2_note = "date";
                }
                else {
                    diff2 = new Date(ngaygio_cute_r_ymdhm) - new Date();
                    diff2_note = "td-ALSE";
                }
                var diff2_minutes = diff2 / 1000 / 60;

                if (val.cuteLoadingOnTruck != "") {
                    if (diff2_note == "date") {
                        tomau_td_ALSE = "setbackgroupAndColor";
                    }
                    else if (diff2_note == "td-ALSE" && diff2_minutes < 120) {
                        tomau_td_ALSE = "setbackgroupAndColor1";
                    }
                }

                if (val.cuteLoadingOnTruck != "") {
                    if (diff_note == "sli") {
                        tomau_td_sli = "background-color-gioxuat";
                    } else if (diff_note == "td-ALSE" && diff_minutes <= 120) {
                        tomau_td_sli = "background-color-gioxuat1";
                    }
                }

                // tô màu bks xe và wh
                var tomau_td_bksxexuat = "";
                var tomau_td_wh = "";
                var tachwh = val.warehouseLoadingOnTruck.split("|");

                if (parseInt(tachwh[1]) != 0) {
                    tomau_td_bksxexuat = "setbackgroupBKS";
                }
                if (parseInt(tachwh[0]) != 0) {
                    tomau_td_wh = "setbackgroupBKS";
                }

                // tô màu fltDT 
                var tomaufltDT = "";
                var momentDtflt = moment(val.flightDateTimeLoadingOnTruck);
                if (new_date - momentDtflt._d > 0) {
                    tomaufltDT = "setbacgroupFltdAndFltNo";
                }

                html_tableLoadOnTrucking += "<tr class=\"tr-hover tr-makho-view tr-makho-" + val.warehouseLoadingOnTruck + " \">";
                html_tableLoadOnTrucking += "<td class=\"td-no\">" + (item + 1) + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-img  \"    >" + "<img src=\"images/truck.png\" />" + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-mawb kmawb " + tomau_td_kmawb + "\">" + val.mawbLoadingOnTruck;
                html_tableLoadOnTrucking += "</br>";
                html_tableLoadOnTrucking += "<span class=\"span-duyet span-DuyetCoDOC\">" + (val.DuyetCoDOC == "True" ? "Có Doc" : "") + "</span>";
                html_tableLoadOnTrucking += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.DuyetGiaoDoc == "True" ? "Đã giao" : "") + "</span>";
                html_tableLoadOnTrucking += "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-pcs  \"    >" + val.pcsLoadingOnTruck + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-gw  \">" + val.gwLoadingOnTruck + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-fltNo  \"  >" + val.flightNoLoadingOnTruck + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-fltD fltdate " + tomaufltDT + "\">" + convertDate(val.flightDateTimeLoadingOnTruck)[9] + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-fltT flttime " + tomaufltDT + "\">" + convertDate(val.flightDateTimeLoadingOnTruck)[3] + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-NBA \"    >" + convertDate(val.cutotLoadingOnTruck)[2] + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-ALSE  " + tomau_td_ALSE + "\">" + convertDate(val.cuteLoadingOnTruck)[2] + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-dest hx-dest\">" + val.destLoadingOnTruck + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-sliD  ngaylamsli\">" + convertDate(val.sliDateTimeLoadingOnTruck)[9] + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-sliT  giolamsli  " + tomau_td_sli + "\">" + convertDate(val.sliDateTimeLoadingOnTruck)[3] + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-truckId hx-bksxexuat " + tomau_td_bksxexuat + "\">" + val.numberPlateLoadingOnTruck + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-truckD ngayxuat\">" + convertDate(val.exportDateTimeLoadingOnTruck)[9] + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-truckT gioxuat  " + tomau_td_gioxuat + " \">" + convertDate(val.exportDateTimeLoadingOnTruck)[3] + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-fwd hx-fwd\"    >" + val.fwdLoadingOnTruck + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-wh hx-warehouse " + tomau_td_wh + "\">" + val.warehouseLoadingOnTruck + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-remark  \">" + val.remarkLoadingOnTruck + "</td>";
                html_tableLoadOnTrucking += "</tr>";
            });
            $("#tbl-LoadOnTrucking tbody").append(html_tableLoadOnTrucking);

            //TruckingToNBA list
            var html_tableTruckingToNBA = "";
            $("#tbl-TruckingToNBA tbody").empty();
            $.each(d.TruckingToNBA, function (item, val) {

                // TÔ MÀU CUT NBA
                var tomau_td_gioxuat = "";
                var tomau_td_NBA = "";

                var ngaygio_cutot_r_ymdhm = val.cutotTruckingToNBA;
                var ngaygioexp_r = val.exportDateTimeTruckingToNBA;

                var diff = "";
                var diff_note = "";
                if (new Date(ngaygio_cutot_r_ymdhm) > new Date(ngaygioexp_r)) {
                    diff = new Date(ngaygio_cutot_r_ymdhm) - new Date(ngaygioexp_r);
                    diff_note = "td-NBA";
                } else {
                    diff = new Date(ngaygioexp_r) - new Date(ngaygio_cutot_r_ymdhm);
                    diff_note = "exp";
                }
                var diff_minutes = diff / 1000 / 60;

                var diff2 = "";
                var diff2_note = "";
                if (new Date() > new Date(ngaygio_cutot_r_ymdhm)) {
                    diff2 = new Date() - new Date(ngaygio_cutot_r_ymdhm);
                    diff2_note = "date";
                }
                else {
                    diff2 = new Date(ngaygio_cutot_r_ymdhm) - new Date();
                    diff2_note = "td-NBA";
                }
                var diff2_minutes = diff2 / 1000 / 60;

                if (val.cutotTruckingToNBA != "" && (ngaygioexp_r.trim() != "20") || (ngaygioexp_r.trim() != "200")) {
                    if (diff_note == "td-NBA" && diff_minutes <= 120) {
                        tomau_td_gioxuat = "background-color-gioxuat";
                    } else if (diff_note == "td-NBA" && diff_minutes > 120 && diff_minutes <= 300) {
                        tomau_td_gioxuat = "background-color-gioxuat1";
                    }
                }

                if (diff2_note == "date") {
                    tomau_td_NBA = "setbackgroupAndColor";
                } else if (diff2_note == "td-NBA" && diff2_minutes < 120) {
                    tomau_td_NBA = "setbackgroupAndColor1";
                }

                // Tô màu ALSE
                var tomau_td_sli = "";

                var ngaygio_cute_r_ymdhm = val.cuteTruckingToNBA;
                var ngaygiosli_r = val.sliDateTimeTruckingToNBA;

                var diff = "";
                var diff_note = "";
                if (new Date(ngaygio_cute_r_ymdhm) > new Date(ngaygiosli_r)) {
                    diff = new Date(ngaygio_cute_r_ymdhm) - new Date(ngaygiosli_r);
                    diff_note = "td-ALSE";
                } else {
                    diff = new Date(ngaygiosli_r) - new Date(ngaygio_cute_r_ymdhm);
                    diff_note = "sli";
                }
                var diff_minutes = diff / 1000 / 60;

                var diff2 = "";
                var diff2_note = "";
                if (new Date() > new Date(ngaygio_cute_r_ymdhm)) {
                    diff2 = new Date() - new Date(ngaygio_cute_r_ymdhm);
                    diff2_note = "date";
                }
                else {
                    diff2 = new Date(ngaygio_cute_r_ymdhm) - new Date();
                    diff2_note = "td-ALSE";
                }
                var diff2_minutes = diff2 / 1000 / 60;

                if (val.cuteTruckingToNBA.trim() != "") {
                    if (diff_note == "sli") {
                        tomau_td_sli = "background-color-gioxuat";
                    } else if (diff_note == "td-ALSE" && diff_minutes <= 120) {
                        tomau_td_sli = "background-color-gioxuat1";
                    }
                }
                // tô màu bks xe và wh
                var tomau_td_bksxexuat = "";
                var tomau_td_wh = "";
                var tachwh = val.warehouseTruckingToNBA.split("|");

                if (parseInt(tachwh[1]) != 0) {
                    tomau_td_bksxexuat = "setbackgroupBKS";
                }
                if (parseInt(tachwh[0]) != 0) {
                    tomau_td_wh = "setbackgroupBKS";
                }

                // tô màu fltDT 
                var tomaufltDT = "";
                var momentDtflt = moment(val.flightDateTimeTruckingToNBA);
                if (new_date - momentDtflt._d > 0) {
                    tomaufltDT = "setbacgroupFltdAndFltNo";
                }

                html_tableTruckingToNBA += "<tr class=\"tr-hover tr-makho-view tr-makho-" + val.warehouseTruckingToNBA + " \">";
                html_tableTruckingToNBA += "<td class=\"td-no\">" + (item + 1) + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-img cell-showmodal\"    >" + "<img src=\"images/lorrygreen.png\" />" + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-mawb kmawb\">" + val.mawbTruckingToNBA;
                html_tableTruckingToNBA += "</br>";
                html_tableTruckingToNBA += "<span class=\"span-duyet span-DuyetCoDOC\">" + (val.DuyetCoDOC == "True" ? "Có Doc" : "") + "</span>";
                html_tableTruckingToNBA += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.DuyetGiaoDoc == "True" ? "Đã giao" : "") + "</span>";
                html_tableTruckingToNBA += "</td>";
                html_tableTruckingToNBA += "<td class=\"td-pcs  \"    >" + val.pcsTruckingToNBA + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-gw  \">" + val.gwTruckingToNBA + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-fltNo  \"  >" + val.flightNoTruckingToNBA + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-fltD fltdate " + tomaufltDT + "\">" + convertDate(val.flightDateTimeTruckingToNBA)[9] + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-fltT flttime " + tomaufltDT + "\">" + convertDate(val.flightDateTimeTruckingToNBA)[3] + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-NBA " + tomau_td_NBA + "\">" + convertDate(val.cutotTruckingToNBA)[2] + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-ALSE  \">" + convertDate(val.cuteTruckingToNBA)[2] + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-dest hx-dest\">" + val.destTruckingToNBA + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-sliD  ngaylamsli\">" + convertDate(val.sliDateTimeTruckingToNBA)[9] + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-sliT giolamsli " + tomau_td_sli + "\">" + convertDate(val.sliDateTimeTruckingToNBA)[3] + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-truckId hx-bksxexuat " + tomau_td_bksxexuat + "\">" + val.numberPlateTruckingToNBA + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-truckD ngayxuat\">" + convertDate(val.exportDateTimeTruckingToNBA)[9] + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-truckT gioxuat " + tomau_td_gioxuat + "\">" + convertDate(val.exportDateTimeTruckingToNBA)[3] + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-fwd hx-fwd\"    >" + val.fwdTruckingToNBA + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-wh hx-warehouse " + tomau_td_wh + "\">" + val.warehouseTruckingToNBA + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-remark  \">" + val.remarkTruckingToNBA + "</td>";
                html_tableTruckingToNBA += "</tr>";
            });
            $("#tbl-TruckingToNBA tbody").append(html_tableTruckingToNBA);

            //AirPort list
            var html_tableAirPort = "";
            $("#tbl-AirPort tbody").empty();
            $.each(d.AirPort, function (item, val) {

                // tô màu td-NBA
                var tomau_td_gioxuat = "";
                var tomau_td_NBA = "";
                var ngaygio_cutot_r_ymdhm = new Date(val.cutotAirPort);
                var ngaygioexp_r = new Date(val.exportDateTimeAirPort);

                var diff = "";
                var diff_note = "";
                if (new Date(ngaygio_cutot_r_ymdhm) > new Date(ngaygioexp_r)) {
                    diff = new Date(ngaygio_cutot_r_ymdhm) - new Date(ngaygioexp_r);
                    diff_note = "td-NBA";
                } else {
                    diff = new Date(ngaygioexp_r) - new Date(ngaygio_cutot_r_ymdhm);
                    diff_note = "exp";
                }
                var diff_minutes = diff / 1000 / 60;

                var diff2 = "";
                var diff2_note = "";
                if (new Date() > new Date(ngaygio_cutot_r_ymdhm)) {
                    diff2 = new Date() - new Date(ngaygio_cutot_r_ymdhm);
                    diff2_note = "date";
                }
                else {
                    diff2 = new Date(ngaygio_cutot_r_ymdhm) - new Date();
                    diff2_note = "td-NBA";
                }
                var diff2_minutes = diff2 / 1000 / 60;


                if (val.cutotPreAccept != "" && (val.sliDateTimePreAccept != "20") || (val.sliDateTimePreAccept != "200")) {
                    if (diff_note == "td-NBA" && diff_minutes <= 120) {
                        tomau_td_gioxuat = 'background-color-gioxuat';
                    } else if (diff_note == "td-NBA" && diff_minutes > 120 && diff_minutes <= 300) {
                        tomau_td_gioxuat = 'background-color-gioxuat1';
                    }
                }

                if (diff2_note == "date") {
                    tomau_td_NBA = "setbackgroupAndColor";
                } else if (diff2_note == "td-NBA" && diff2_minutes < 120) {
                    tomau_td_NBA = "setbackgroupAndColor1";
                }

                // Tô màu ALSE
                var tomau_td_sli = "";

                var ngaygio_cute_r_ymdhm = val.cuteAirPort;
                var ngaygiosli_r = val.sliDateTimeAirPort;

                var diff = "";
                var diff_note = "";
                if (new Date(ngaygio_cute_r_ymdhm) > new Date(ngaygiosli_r)) {
                    diff = new Date(ngaygio_cute_r_ymdhm) - new Date(ngaygiosli_r);
                    diff_note = "td-ALSE";
                } else {
                    diff = new Date(ngaygiosli_r) - new Date(ngaygio_cute_r_ymdhm);
                    diff_note = "sli";
                }
                var diff_minutes = diff / 1000 / 60;

                var diff2 = "";
                var diff2_note = "";
                if (new Date() > new Date(ngaygio_cute_r_ymdhm)) {
                    diff2 = new Date() - new Date(ngaygio_cute_r_ymdhm);
                    diff2_note = "date";
                }
                else {
                    diff2 = new Date(ngaygio_cute_r_ymdhm) - new Date();
                    diff2_note = "td-ALSE";
                }
                var diff2_minutes = diff2 / 1000 / 60;

                if (val.cuteAirPort.trim() != "") {
                    if (diff_note == "sli") {
                        $(this).parent().find(".giolamsli").addClass('background-color-gioxuat');
                        tomau_td_sli = "background-color-gioxuat";
                    } else if (diff_note == "td-ALSE" && diff_minutes <= 120) {
                        tomau_td_sli = "background-color-gioxuat1";
                    }
                }

                // tô màu bks xe và wh
                var tomau_td_bksxexuat = "";
                var tomau_td_wh = "";
                var tachwh = val.warehouseAirPort.split("|");

                if (parseInt(tachwh[1]) != 0) {
                    tomau_td_bksxexuat = "setbackgroupBKS";
                }
                if (parseInt(tachwh[0]) != 0) {
                    tomau_td_wh = "setbackgroupBKS";
                }

                // tô màu fltDT 
                var tomaufltDT = "";
                var momentDtflt = moment(val.flightDateTimeAirPort);
                if (new_date - momentDtflt._d > 0) {
                    tomaufltDT = "setbacgroupFltdAndFltNo";
                }

                html_tableAirPort += "<tr class=\"tr-hover tr-makho-view  tr-makho-" + val.warehouseAirPort + " \">";
                html_tableAirPort += "<td class=\"td-no\">" + (item + 1) + "</td>";
                html_tableAirPort += "<td class=\"td-img cell-showmodal\"    >" + "<img src=\"images/Airport.png\" />" + "</td>";
                html_tableAirPort += "<td class=\"td-mawb  \">" + val.mawbAirPort;
                html_tableAirPort += "</br>";
                html_tableAirPort += "<span class=\"span-duyet span-DuyetCoDOC\">" + (val.DuyetCoDOC == "True" ? "Có Doc" : "") + "</span>";
                html_tableAirPort += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.DuyetGiaoDoc == "True" ? "Đã giao" : "") + "</span>";
                html_tableAirPort += "</td>";
                html_tableAirPort += "<td class=\"td-pcs  \"    >" + val.pcsAirPort + "</td>";
                html_tableAirPort += "<td class=\"td-gw  \">" + val.gwAirPort + "</td>";
                html_tableAirPort += "<td class=\"td-fltNo  \"  >" + val.flightNoAirPort + "</td>";
                html_tableAirPort += "<td class=\"td-fltD fltdate " + tomaufltDT + "\">" + convertDate(val.flightDateTimeAirPort)[9] + "</td>";
                html_tableAirPort += "<td class=\"td-fltT flttime " + tomaufltDT + "\">" + convertDate(val.flightDateTimeAirPort)[3] + "</td>";
                html_tableAirPort += "<td class=\"td-NBA " + tomau_td_NBA + "\"    >" + convertDate(val.cutotAirPort)[2] + "</td>";
                html_tableAirPort += "<td class=\"td-ALSE  \">" + convertDate(val.cuteAirPort)[2] + "</td>";
                html_tableAirPort += "<td class=\"td-dest hx-dest\">" + val.destAirPort + "</td>";
                html_tableAirPort += "<td class=\"td-sliD  ngaylamsli\">" + convertDate(val.sliDateTimeAirPort)[9] + "</td>";
                html_tableAirPort += "<td class=\"td-sliT  giolamsli " + tomau_td_sli + "\">" + convertDate(val.sliDateTimeAirPort)[3] + "</td>";
                html_tableAirPort += "<td class=\"td-truckId hx-bksxexuat " + tomau_td_bksxexuat + "\">" + val.numberPlateAirPort + "</td>";
                html_tableAirPort += "<td class=\"td-truckD ngayxuat\">" + convertDate(val.exportDateTimeAirPort)[9] + "</td>";
                html_tableAirPort += "<td class=\"td-truckT gioxuat " + tomau_td_gioxuat + "\">" + convertDate(val.exportDateTimeAirPort)[3] + "</td>";
                html_tableAirPort += "<td class=\"td-fwd hx-fwd\"    >" + val.fwdAirPort + "</td>";
                html_tableAirPort += "<td class=\"td-wh hx-warehouse " + tomau_td_wh + "\">" + val.warehouseAirPort + "</td>";
                html_tableAirPort += "<td class=\"td-remark  \">" + val.remarkAirPort + "</td>";
                html_tableAirPort += "</tr>";
            });
            $("#tbl-AirPort tbody").append(html_tableAirPort);

            //ComPlete list
            var html_tableComPlete = "";
            $("#tbl-Complete tbody").empty();
            $.each(d.Complete, function (item, val) {

                // tô màu ngày xuất
                var tomauNgayXuat = "";
                var com_today = new Date();
                var com_ngayxuat = new Date(val.exportDateTimeComplete);
                if (com_ngayxuat < com_today) {
                    tomauNgayXuat = "com-ngayxuat-not-today-d0ecbd";
                }

                // tô màu td-NBA
                var tomau_td_gioxuat = "";
                var ngaygio_cutot_r_ymdhm = new Date(val.cutotComplete);
                var ngaygioexp_r = new Date(val.exportDateTimeComplete);

                var diff = "";
                var diff_note = "";
                if (new Date(ngaygio_cutot_r_ymdhm) > new Date(ngaygioexp_r)) {
                    diff = new Date(ngaygio_cutot_r_ymdhm) - new Date(ngaygioexp_r);
                    diff_note = "td-NBA";
                } else {
                    diff = new Date(ngaygioexp_r) - new Date(ngaygio_cutot_r_ymdhm);
                    diff_note = "exp";
                }
                var diff_minutes = diff / 1000 / 60;

                var diff2 = "";
                var diff2_note = "";
                if (new Date() > new Date(ngaygio_cutot_r_ymdhm)) {
                    diff2 = new Date() - new Date(ngaygio_cutot_r_ymdhm);
                    diff2_note = "date";
                }
                else {
                    diff2 = new Date(ngaygio_cutot_r_ymdhm) - new Date();
                    diff2_note = "td-NBA";
                }
                var diff2_minutes = diff2 / 1000 / 60;


                if (val.cutotPreAccept != "" && (val.sliDateTimePreAccept != "20") || (val.sliDateTimePreAccept != "200")) {
                    if (diff_note == "td-NBA" && diff_minutes <= 120) {
                        tomau_td_gioxuat = 'background-color-gioxuat';
                    } else if (diff_note == "td-NBA" && diff_minutes > 120 && diff_minutes <= 300) {
                        tomau_td_gioxuat = 'background-color-gioxuat1';
                    }
                }

                // Tô màu ALSE
                var tomau_td_sli = "";

                var ngaygio_cute_r_ymdhm = val.cuteComplete;
                var ngaygiosli_r = val.sliDateTimeComplete;

                var diff = "";
                var diff_note = "";
                if (new Date(ngaygio_cute_r_ymdhm) > new Date(ngaygiosli_r)) {
                    diff = new Date(ngaygio_cute_r_ymdhm) - new Date(ngaygiosli_r);
                    diff_note = "td-ALSE";
                } else {
                    diff = new Date(ngaygiosli_r) - new Date(ngaygio_cute_r_ymdhm);
                    diff_note = "sli";
                }
                var diff_minutes = diff / 1000 / 60;

                var diff2 = "";
                var diff2_note = "";
                if (new Date() > new Date(ngaygio_cute_r_ymdhm)) {
                    diff2 = new Date() - new Date(ngaygio_cute_r_ymdhm);
                    diff2_note = "date";
                }
                else {
                    diff2 = new Date(ngaygio_cute_r_ymdhm) - new Date();
                    diff2_note = "td-ALSE";
                }
                var diff2_minutes = diff2 / 1000 / 60;

                if (val.cuteComplete.trim() != "") {
                    if (diff_note == "sli") {
                        $(this).parent().find(".giolamsli").addClass('background-color-gioxuat');
                        tomau_td_sli = "background-color-gioxuat";
                    } else if (diff_note == "td-ALSE" && diff_minutes <= 120) {
                        tomau_td_sli = "background-color-gioxuat1";
                    }
                }

                // tô màu bks xe và wh
                var tomau_td_bksxexuat = "";
                var tomau_td_wh = "";
                var tachwh = val.warehouseComplete.split("|");

                if (parseInt(tachwh[1]) != 0) {
                    tomau_td_bksxexuat = "setbackgroupBKS";
                }
                if (parseInt(tachwh[0]) != 0) {
                    tomau_td_wh = "setbackgroupBKS";
                }

                // tô màu fltDT 
                var tomaufltDT = "";
                var momentDtflt = moment(val.flightDateTimeComplete);
                if (new_date - momentDtflt._d > 0) {
                    tomaufltDT = "setbacgroupFltdAndFltNo";
                }

                html_tableComPlete += "<tr class=\"tr-hover tr-makho-view tr-makho-" + val.warehouseComplete + "\">";
                html_tableComPlete += "<td class=\"td-no\">" + (item + 1) + "</td>";
                html_tableComPlete += "<td class=\"td-img cell-showmodal\"    >" + "<img src=\"images/falcon.png\" />" + "</td>";
                html_tableComPlete += "<td class=\"td-mawb  \">" + val.mawbComplete;
                html_tableComPlete += "</br>";
                html_tableComPlete += "<span class=\"span-duyet span-DuyetCoDOC\">" + (val.DuyetCoDOC == "True" ? "Có Doc" : "") + "</span>";
                html_tableComPlete += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.DuyetGiaoDoc == "True" ? "Đã giao" : "") + "</span>";
                html_tableComPlete += "</td>";
                html_tableComPlete += "<td class=\"td-pcs \"    >" + val.pcsComplete + "</td>";
                html_tableComPlete += "<td class=\"td-gw  \">" + val.gwComplete + "</td>";
                html_tableComPlete += "<td class=\"td-fltNo fltdate \"  >" + val.flightNoComplete + "</td>";
                html_tableComPlete += "<td class=\"td-fltD " + tomaufltDT + " \">" + convertDate(val.flightDateTimeComplete)[9] + "</td>";
                html_tableComPlete += "<td class=\"td-fltT " + tomaufltDT + "  \">" + convertDate(val.flightDateTimeComplete)[3] + "</td>";
                html_tableComPlete += "<td class=\"td-NBA\"    >" + convertDate(val.cutotComplete)[2] + "</td>";
                html_tableComPlete += "<td class=\"td-ALSE  \">" + convertDate(val.cuteComplete)[2] + "</td>";
                html_tableComPlete += "<td class=\"td-dest hx-dest\">" + val.destComplete + "</td>";
                html_tableComPlete += "<td class=\"td-sliD ngaylamsli\">" + convertDate(val.sliDateTimeComplete)[9] + "</td>";
                html_tableComPlete += "<td class=\"td-sliT giolamsli " + tomau_td_sli + "\">" + convertDate(val.sliDateTimeComplete)[3] + "</td>";
                html_tableComPlete += "<td class=\"td-truckId fix-line-css hx-bksxexuat " + tomau_td_bksxexuat + "\">" + val.numberPlateComplete + "</td>";
                html_tableComPlete += "<td class=\"td-truckD ngayxuat " + tomauNgayXuat + " \">" + convertDate(val.exportDateTimeComplete)[9] + "</td>";
                html_tableComPlete += "<td class=\"td-truckT gioxuat " + tomau_td_gioxuat + "\">" + convertDate(val.exportDateTimeComplete)[3] + "</td>";
                html_tableComPlete += "<td class=\"td-fwd hx-fwd\"    >" + val.fwdComplete + "</td>";
                html_tableComPlete += "<td class=\"td-wh hx-warehouse " + tomau_td_wh + "\">" + val.warehouseComplete + "</td>";
                html_tableComPlete += "<td class=\"td-remark  \">" + val.remarkComplete + "</td>";
                html_tableComPlete += "</tr>";
            });
            $("#tbl-Complete tbody").append(html_tableComPlete);
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    });
}

function fncClick() {

}

function fncChange() {

}