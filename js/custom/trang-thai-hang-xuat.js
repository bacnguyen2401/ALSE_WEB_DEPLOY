var x_year = new Date();
x_yearnow = x_year.getFullYear();
x_monthnow = x_year.getMonth() + 1;
var data_complete;
var comde;
var mo_mawb;
var list_fwd = [];
var like = false;
var this_text = "";
// document ready
$(document).ready(function () {
    //$(".modal").modal("show");
    fncHienHeader();
    // check box
    $(".cbx-c").change(function () {
        var cbx_name = $(this).attr("name");

        switch (cbx_name) {
            case "show-vsip":
                list_fwd = ["DHL", "AGI", "SCK", "EI"];
                like = false;

                break;
            case "show-hp":
                list_fwd = ["PT"];
                like = true;

                break;
        }

        if (this.checked) { // checked
            fncReturnShowOrHide_Check("show");
            if (cbx_name == "show-hp") {
                $("#div-xz").show();
            }
        } //end checked
        else { // unchecked
            fncReturnShowOrHide_Check("hide");
            if (cbx_name == "show-hp") {
                $("#div-xz").hide();
            }
        }// end unchecked
    })
    // end checkbox
    // start fnc return show or hide check
    function fncReturnShowOrHide_Check(showorhide) {
        $(".hx-fwd").each(function () {
            if (like == true) {
                this_text = $(this).text().substring(0, list_fwd[0].length);
            } else {
                this_text = $(this).text();
            }

            if (list_fwd.indexOf(this_text) > -1) {
                if (showorhide == "show") {
                    $(this).closest("tr").show();
                }
                else {
                    $(this).closest("tr").hide();
                }
            }
        })
    }
    // end fnc return show or hide check
    // start to mau ngayxuat nho hon ngay hien tai
    $("#MainContent_ASPxGridView5 .ngayxuat").each(function (index) {
        var com_ngayxuat_ngay = $(this).text().split("/")[0];
        var com_ngayxuat_thang = parseInt($(this).text().split("/")[1]) - 1;
        var com_ngayxuat_nam = "20" + $(this).text().split("/")[2];
        var com_ngayxuat = new Date(com_ngayxuat_nam, com_ngayxuat_thang, com_ngayxuat_ngay);
        var com_today = x_year.setHours(0, 0, 0, 0);

        if (com_ngayxuat < com_today) {
            $(this).addClass("com-ngayxuat-not-today-d0ecbd");
        }
    })
    // end to mau ngayxuat nho hon ngay hien tai
    //modal click
    $(".tbl-custom").on("click", ".cell-showmodal", function () {
        var mo_tr = $(this).closest("tr");
        var mo_table = $(this).closest("table");
        var mo_table_id = mo_table.attr("id");
        if (mo_table_id == "MainContent_ASPxGridView1_DXMainTable") {
            $("#modal-btn-trucking").hide();
            $("#modal-btn-complete").show();
            $("#modal-btn-airport").show();
        }
        if (mo_table_id == "MainContent_ASPxGridView7_DXMainTable") {
            $("#modal-btn-airport").hide();
            $("#modal-btn-trucking").show();
            $("#modal-btn-complete").show();
        }
        if (mo_table_id == "MainContent_ASPxGridView5_DXMainTable") {
            $("#modal-btn-complete").hide();
            $("#modal-btn-airport").show();
            $("#modal-btn-trucking").show();
        }

        mo_mawb = mo_tr.find(".mo-mawb").text();
        var mo_sokien = mo_tr.find(".mo-sokien").text();
        var mo_trongluong = mo_tr.find(".mo-trongluong").text();
        var mo_chuyenbay = mo_tr.find(".mo-chuyenbay").text();
        var mo_ngaybay = mo_tr.find(".mo-ngaybay").text();
        var mo_giobay = mo_tr.find(".mo-giobay").text();
        var mo_cutnba = mo_tr.find(".mo-cutnba").text();
        var mo_cutalse = mo_tr.find(".mo-cutalse").text();
        var mo_diemden = mo_tr.find(".mo-diemden").text();
        var mo_ngaylamsli = mo_tr.find(".mo-ngaylamsli").text();
        var mo_giolamsli = mo_tr.find(".mo-giolamsli").text();
        var mo_bksxexuat = mo_tr.find(".mo-bksxexuat").text();
        var mo_ngayxuat = mo_tr.find(".mo-ngayxuat").text();
        var mo_gioxuat = mo_tr.find(".mo-gioxuat").text();
        var mo_daily = mo_tr.find(".mo-daily").text();
        var mo_wh = mo_tr.find(".mo-wh").text();
        var mo_ghichu = mo_tr.find(".mo-ghichu").text();

        $("#mo-mawb").text(mo_mawb)
            .attr("style", "background-color:red; font-weight:bold;");
        $("#mo-sokien").text(mo_sokien);
        $("#mo-trongluong").text(mo_trongluong);
        $("#mo-chuyenbay").text(mo_chuyenbay);
        $("#mo-ngaybay").text(mo_ngaybay);
        $("#mo-giobay").text(mo_giobay);
        $("#mo-cutnba").text(mo_cutnba);
        $("#mo-cutalse").text(mo_cutalse);
        $("#mo-diemden").text(mo_diemden);
        $("#mo-ngaylamsli").text(mo_ngaylamsli);
        $("#mo-giolamsli").text(mo_giolamsli);
        $("#mo-bksxexuat").text(mo_bksxexuat);
        $("#mo-ngayxuat").text(mo_ngayxuat);
        $("#mo-gioxuat").text(mo_gioxuat);
        $("#mo-daily").text(mo_daily);
        $("#mo-wh").text(mo_wh);
        $("#mo-ghichu").text(mo_ghichu);
        //console.log(mo_mawb);
        $("#modal-changestatus").modal("show");
    })

    //end modal click
    // modal complete
    $("#modal-changestatus").on("click", ".btn-changestatus", function (e) {
        e.preventDefault();
        comde = { "mawb": mo_mawb, "status": $(this).val() };
        var jsonData = JSON.stringify({ comde });
        //console.log(jsonData);

        $.ajax({
            type: "POST",
            url: "TrangThaiHangXuat.aspx/ChangeStatus",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            susscess: function () {
                alert("Thành công!");
            },
            failure: function (response) {
                alert(response.d);
            }
        })
        $(".modal").modal("hide");
        //alert("Đã cập nhật thành công!");
        $("#modal-updating").modal("show");
        location.reload();
    })

    // end modal complete
    var currentDate = new Date();
    var phut = currentDate.getMinutes();
    var gio = currentDate.getHours();
    var gmonth = (currentDate.getMonth() + 1);
    //
    if ($(".lbUID").text() == "5" || $(".lbUID").text() == "6" || $(".lbUID").text() == "58") {
        $(".slide-uctb").remove();
    } else {
        $(".slide-uctb").css("visibility", "visible");
    }

    //

    if (phut < 10) {
        phut = "0" + phut;
    }
    if (gio < 10) {
        gio = "0" + gio;
    }
    var gdate = currentDate.getDate();

    if (gdate < 10) {
        gdate = "0" + gdate;
    }
    if (gmonth < 10) {
        gmonth = "0" + gmonth;
    }

    var date = currentDate.getFullYear() + "" + gmonth + "" + gdate + "" + gio + "" + phut;
    var thanghaiso = currentDate.getMonth() + 1;
    if (thanghaiso < 10) {
        var thanghaiso = "0" + thanghaiso;
    }
    var dttd = currentDate.getFullYear() + "" + thanghaiso + "" + gdate + "1100";
    var cong5h = parseFloat(dttd) + 10000;

    // TÔ MÀU CUT NBA
    $(".cutot").each(function () {
        var ngaygio_cutot_r = $(this).text();//
        var ngaygio_cutot_r_split = ngaygio_cutot_r.split(" "); // dd/mm/yyyy
        var ngaygio_cutot_r_ymdhm = ngaygio_cutot_r_split[0].split("/")[2] + "/"
            + ngaygio_cutot_r_split[0].split("/")[1] + "/"
            + ngaygio_cutot_r_split[0].split("/")[0] + " "
            + ngaygio_cutot_r_split[1]
            ; // yyyy/mm/dd hh:mm
        var ngaygio_cutot_r_year = ngaygio_cutot_r_split[0].split("/")[2];//
        var ngaygio_cutot_r_noyear = ngaygio_cutot_r.replace(("/" + ngaygio_cutot_r_year), "");//
        $(this).text(ngaygio_cutot_r_noyear);//

        var ngayexp_split = $(this).closest("tr").find(".ngayxuat").text().split("/"); //
        var gioexp_r = $(this).closest("tr").find(".gioxuat").text(); //
        var ngayexp_r = "20" + ngayexp_split[2] + "/" + ngayexp_split[1] + "/" + ngayexp_split[0]; //
        if (gioexp_r.length < 4) { //
            gioexp_r = "0" + gioexp_r; //
        } //
        var ngaygioexp_r = ngayexp_r + " " + gioexp_r; //
        var diff = "";
        var diff_note = "";
        if (new Date(ngaygio_cutot_r_ymdhm) > new Date(ngaygioexp_r)) {
            diff = new Date(ngaygio_cutot_r_ymdhm) - new Date(ngaygioexp_r);
            diff_note = "cutot";
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
            diff2_note = "cutot";
        }
        var diff2_minutes = diff2 / 1000 / 60;

        if (ngaygio_cutot_r.toString().trim() != "" && (ngaygioexp_r.trim() != "20") || (ngaygioexp_r.trim() != "200")) {
            if (diff_note == "cutot" && diff_minutes <= 120) {
                $(this).parent().find(".gioxuat").css('background-color', 'pink');
            } else if (diff_note == "cutot" && diff_minutes > 120 && diff_minutes <= 300) {
                $(this).parent().find(".gioxuat").css('background-color', '#F6F6B1');
            }
        }

        if ($(this).closest('table').attr('id') == "MainContent_ASPxGridView1_DXMainTable" || $(this).closest('table').attr('id') == "MainContent_ASPxGridView7_DXMainTable") {
            if (diff2_note == "date") {
                $(this).css('background-color', 'red');
                $(this).css('color', 'white');
            } else if (diff2_note == "cutot" && diff2_minutes < 120) {
                $(this).css('background-color', 'yellow');
            }
        }

        if ($(this).closest('table').attr('id') == "MainContent_ASPxGridView1_DXMainTable" || $(this).closest('table').attr('id') == "MainContent_ASPxGridView7_DXMainTable") {
            if (diff2_note == "date") {
                $(this).css('background-color', 'red');
                $(this).css('color', 'white');
            } else if (diff2_note == "cutot" && diff2_minutes < 120) {
                $(this).css('background-color', 'yellow');
            }
        }

        if ($(this).closest('table').attr('id') == "MainContent_ASPxGridView2_DXMainTable" || $(this).closest('table').attr('id') == "MainContent_ASPxGridView3_DXMainTable" || $(this).closest('table').attr('id') == "MainContent_ASPxGridView4_DXMainTable" || $(this).closest('table').attr('id') == "MainContent_ASPxGridView6_DXMainTable") {
            var mawb_r = $(this).parent().find(".kmawb").text();
            if ($(this).text().trim() != "") {
                if (diff2_note == "date") {
                    $(this).parent().find(".kmawb").css('background-color', 'red');
                    $(this).parent().find(".kmawb").css('color', 'white');
                }
                else if (diff2_note == "cutot" && diff2_minutes < 120) {
                    $(this).parent().find(".kmawb").css('background-color', 'yellow');
                }
                //console.log(mawb_r + ": " + diff2_note + " " + diff2_minutes);
            }
        }
        /////
    })
    //END TÔ MÀU CẮT NBA

    // TÔ MÀU CUT ALSE
    var mmmxxx = 0;
    $(".cute").each(function () {
        var ngaygio_cute_r = $(this).text();//

        var ngaygio_cute_r_split = ngaygio_cute_r.split(" "); // dd/mm/yyyy
        var ngaygio_cute_r_ymdhm = ngaygio_cute_r_split[0].split("/")[2] + "/"
            + ngaygio_cute_r_split[0].split("/")[1] + "/"
            + ngaygio_cute_r_split[0].split("/")[0] + " "
            + ngaygio_cute_r_split[1]
            ; // yyyy/mm/dd hh:mm

        var ngaygio_cute_r_year = ngaygio_cute_r_split[0].split("/")[2];//
        var ngaygio_cute_r_noyear = ngaygio_cute_r.replace(("/" + ngaygio_cute_r_year), "");//
        $(this).text(ngaygio_cute_r_noyear);
        var ngaysli_split = $(this).closest("tr").find(".ngaylamsli").text().split("/"); //
        var giosli_r = $(this).closest("tr").find(".giolamsli").text(); //
        var ngaysli_r = "20" + ngaysli_split[2] + "/" + ngaysli_split[1] + "/" + ngaysli_split[0]; //

        var ngaygiosli_r = ngaysli_r + " " + giosli_r; //

        var diff = "";
        var diff_note = "";
        if (new Date(ngaygio_cute_r_ymdhm) > new Date(ngaygiosli_r)) {
            diff = new Date(ngaygio_cute_r_ymdhm) - new Date(ngaygiosli_r);
            diff_note = "cute";
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
            diff2_note = "cute";
        }
        var diff2_minutes = diff2 / 1000 / 60;

        if ($(this).closest('table').attr('id') == "MainContent_ASPxGridView2_DXMainTable" || $(this).closest('table').attr('id') == "MainContent_ASPxGridView3_DXMainTable" || $(this).closest('table').attr('id') == "MainContent_ASPxGridView4_DXMainTable" || $(this).closest('table').attr('id') == "MainContent_ASPxGridView6_DXMainTable") { //
            if ($(this).text().trim() != "") {
                if (diff2_note == "date") {
                    $(this).css('background-color', 'red');
                    $(this).css('color', 'white');
                }
                else if (diff2_note == "cute" && diff2_minutes < 120) {
                    $(this).css('background-color', 'yellow');
                }
            }
        }

        if (ngaygio_cute_r.trim() != "") {
            if (diff_note == "sli") {
                $(this).parent().find(".giolamsli").css('background-color', 'pink');
                //console.log(diff_minutes + " " + $(this).parent().find(".giolamsli").text() + " " + diff_note);
            } else if (diff_note == "cute" && diff_minutes <= 120) {
                $(this).parent().find(".giolamsli").css('background-color', '#F6F6B1');
            }
        }
    })
    // END TÔ MÀU CẮT ALSE

    $(".hx-warehouse").each(function (indx) {
        var hxwarehouse = $(this).text().trim();
        var tachwh = hxwarehouse.split('|');
        //var tachwh1 = tachwh[0].split('.');

        if (parseInt(tachwh[1]) != 0) {
            $(this).parent().find(".hx-bksxexuat").css('background-color', 'rgb(246, 246, 177)');
        }
        if (parseInt(tachwh[0]) != 0) {
            $(this).css('background-color', 'rgb(246, 246, 177)');
        }
        $(this).text(tachwh[2]);
    })

    $(".grid-view").each(function () {
        $(this).find(".fltdate").each(function (ind) {
            var fd = "20" + $(this).text().substring(6, 8) + "" + $(this).text().substring(3, 5) + "" + $(this).text().substring(0, 2);

            var ft = $(this).parent().find(".flttime");
            var dest = $(this).parent().find(".hx-dest");
            var fwd = $(this).parent().find(".hx-fwd");
            var fta = ft.text().replace(":", "");
            var dt = parseFloat(fd + "" + fta);
            //console.log(ft.text());
            // console.log("day la dong thu " + ind + ": " + dt + " " + cong5h);
            var hieu2 = cong5h - dt;
            // console.log("day la dong thu " + ind + ": " + dt + " " + cong5h);
            if (hieu2 > 0) {
                $(this).css('background-color', '#78C6FA');
                $(this).parent().find(".flttime").css('background-color', '#78C6FA');
            }
            //console.log(dest.text() + ' ' + fwd.text().trim());
        })
    });
    // xoa to mau o complete, booking

    // start load trang thai hang xuat

    var comdex = { "mawb": "15700625962", "status": "1" };
    var jsonDataStatus = JSON.stringify({ comdex });
    $.ajax({
        type: "POST",
        url: "TrangThaiHangXuat.aspx/getExportStatus",
        data: jsonDataStatus,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: ExportStatusSuccess,
        error: ExportStatusError
    })
    $.ajax({
        type: "POST",
        url: "TrangThaiHangXuat.aspx/getNoti",
        data: jsonDataStatus,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: ExportNotiSuccess,
        error: ExportStatusError
    })
    function ExportStatusSuccess(response) {
        //alert(1);
        var item = response.d;
        $.each(item, function (index, val) {
            $("#bn-total-pcs").text(numberTextWithCommas(val.bn_Total_pcs));
            $("#bn-total-kgs").text(numberTextWithCommas(val.bn_Total_kgs));
            $("#bn-include-skid").text(numberTextWithCommas(val.bn_Include_skid));
            $("#bn-include-carton").text(numberTextWithCommas(val.bn_Include_carton));
            $("#bn-mawb-pcs").text(numberTextWithCommas(val.bn_Mawb_pcs));
            $("#bn-mawb-kgs").text(numberTextWithCommas(val.bn_Mawb_kgs));
            //$("#bn-volume-cbm").text(numberTextWithCommas(val.bn_Volume_cbm));
            $("#bn-expyesterday-pcs").text(numberTextWithCommas(val.bn_ExpYesterday_pcs));
            $("#bn-expyesterday-kgs").text(numberTextWithCommas(val.bn_ExpYesterday_kgs));
            $("#bn-exptoday-pcs").text(numberTextWithCommas(val.bn_ExpToday_pcs));
            $("#bn-exptoday-kgs").text(numberTextWithCommas(val.bn_ExpToday_kgs));
            $("#dhl-pcs").text(numberTextWithCommas(val.dhl_pcs));
            $("#dhl-kgs").text(numberTextWithCommas(val.dhl_kgs));
            $("#agi-pcs").text(numberTextWithCommas(val.agi_pcs));
            $("#agi-kgs").text(numberTextWithCommas(val.agi_kgs));
            $("#sck-pcs").text(numberTextWithCommas(val.sck_pcs));
            $("#sck-kgs").text(numberTextWithCommas(val.sck_kgs));
            $("#ei-pcs").text(numberTextWithCommas(val.ei_pcs));
            $("#ei-kgs").text(numberTextWithCommas(val.ei_kgs));
            $("#bn-inyesterday-pcs").text(numberTextWithCommas(val.bn_InYesterday_pcs));
            $("#bn-inyesterday-kgs").text(numberTextWithCommas(val.bn_InYesterday_kgs));
            $("#bn-intoday-pcs").text(numberTextWithCommas(val.bn_InToday_pcs));
            $("#bn-intoday-kgs").text(numberTextWithCommas(val.bn_InToday_kgs));

            // hp
            $("#hp-total-pcs").text(numberTextWithCommas(val.hp_Total_pcs));
            $("#hp-total-kgs").text(numberTextWithCommas(val.hp_Total_kgs));
            $("#hp-expyesterday-pcs").text(numberTextWithCommas(val.hp_ExpYesterday_pcs));
            $("#hp-expyesterday-kgs").text(numberTextWithCommas(val.hp_ExpYesterday_kgs));
            $("#hp-exptoday-pcs").text(numberTextWithCommas(val.hp_ExpToday_pcs));
            $("#hp-exptoday-kgs").text(numberTextWithCommas(val.hp_ExpToday_kgs));
            $("#pt-pcs").text(numberTextWithCommas(val.pt_pcs));
            $("#pt-kgs").text(numberTextWithCommas(val.pt_kgs));
            $("#hp-intoday-pcs").text(numberTextWithCommas(val.hp_InToday_pcs));
            $("#hp-intoday-kgs").text(numberTextWithCommas(val.hp_InToday_kgs));
            $("#hp-inyesterday-pcs").text(numberTextWithCommas(val.hp_InYesterday_pcs));
            $("#hp-inyesterday-kgs").text(numberTextWithCommas(val.hp_InYesterday_kgs));
        })
        $("#tr-loading").hide();
        //console.log(item);
    }
    function ExportNotiSuccess(response) {
        //console.log(response.d);

        var item = response.d;
        var noti_noti = "";
        var noti_mist = "";
        //noti_li += "";
        $.each(item, function (index, val) {
            if (val.noti_type == "noti") {
                noti_noti += "<li data-update=\"item" + (index + 1) + "\">";
                noti_noti += val.noti_content;
                noti_noti += "</li>";
            }
            else {
                noti_mist += "<li data-update=\"item" + (index + 1) + "\">";
                noti_mist += val.noti_content;
                noti_mist += "</li>";
            }
        })
        //console.log(noti_mist);
        $("#webTicker-noti").append(noti_noti);
        $("#webTicker-mistake").append(noti_mist);
        $('#webTicker-noti').webTicker({
            speed: 70,
            duplicate: true,
        });
        $('#webTicker-mistake').webTicker({
            speed: 70,
            duplicate: true,
        });
    }
    function ExportStatusError(response) {
        console.log(response.error);
    }

    $("#td-exp-today").on("click", function () {
        $("#div-wait").show();
        ajaxGet = { "get": "" };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "TrangThaiHangXuat.aspx/getSanLuong",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                var d = responsive.d;
                var slnhq = d.slnhq;

                var slth = d.slt;
                $("#sl-ngay-vsip-xuatkho-sokien").text(numberTextWithCommas(slnhq.bn_expyesterday_pcs));
                $("#sl-ngay-vsip-xuatkho-trongluong").text(numberTextWithCommas(slnhq.bn_expyesterday_kgs));
                $("#sl-ngay-hph-xuatkho-sokien").text(numberTextWithCommas(slnhq.hp_expyesterday_pcs));
                $("#sl-ngay-hph-xuatkho-trongluong").text(numberTextWithCommas(slnhq.hp_expyesterday_kgs));

                $("#sl-ngay-vsip-nhapkho-sokien").text(numberTextWithCommas(slnhq.bn_inyesterday_pcs));
                $("#sl-ngay-vsip-nhapkho-trongluong").text(numberTextWithCommas(slnhq.bn_inyesterday_kgs));
                $("#sl-ngay-hph-nhapkho-sokien").text(numberTextWithCommas(slnhq.hp_inyesterday_pcs));
                $("#sl-ngay-hph-nhapkho-trongluong").text(numberTextWithCommas(slnhq.hp_inyesterday_kgs));
                var sum_sl = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                var ngayxuat;
                //x_yearnow
                var _lastyear = x_yearnow - 1;
                $.each(slth, function (index, item) {
                    $("#sl-thang-" + item.Kho + "-" + item.Thang).text(numberTextWithCommas(item.TrongLuong));
                    sum_sl[parseInt(item.Thang) - 1] += parseFloat(item.TrongLuong);
                })

                $.each(sum_sl, function (index, item) {
                    if (item != 0) {
                        $("#sl-thang-tong-" + (index + 1)).text(numberWithCommas(item));

                    }
                    //console.log(item);
                })

                //console.log(slnhq);
            },
            error: function () {
            }
        }).done(function () {
            $("#div-wait").hide();
            $("#myModalSanLuong").modal("show");
        });
    })

    // end load trang thai hang xuat
});

// end document ready
var interval;
var minutes = 5;
var seconds = 0;
window.onload = function () {
    countdown('countdown');
}

function countdown(element) {
    interval = setInterval(function () {
        var el = document.getElementById(element);
        if (seconds == 0) {
            if (minutes == 0) {
                el.innerHTML = "Reloading...!";
                clearInterval(interval);
                location.reload();
                return;
            } else {
                minutes--;
                seconds = 60;
            }
        }
        if (minutes > 0) {
            var minute_text = minutes + (minutes > 1 ? ' m' : ' m');
        } else {
            var minute_text = '';
        }
        var second_text = seconds > 1 ? 's' : 's';
        el.innerHTML = '<a href=\"#\" onclick=\"fncRefresh();return false;\">Refresh</a>: ' + minute_text + ' ' + seconds + ' ' + second_text;
        seconds--;
    }, 1000);
}
function OnClickButtonU(s, e) {
    ASPxGridView6.PerformCallback('update');
}
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
function fncRefresh() {
    location.reload();
}
function fncHienHeader() {
    //6 2 3 4 1 7 5
    var count_row6 = $("#MainContent_ASPxGridView6_DXMainTable tbody .dxgvDataRow_Aqua").length;
    var count_row2 = $("#MainContent_ASPxGridView2_DXMainTable tbody .dxgvDataRow_Aqua").length;
    var count_row3 = $("#MainContent_ASPxGridView3_DXMainTable tbody .dxgvDataRow_Aqua").length;
    var count_row4 = $("#MainContent_ASPxGridView4_DXMainTable tbody .dxgvDataRow_Aqua").length;
    var count_row1 = $("#MainContent_ASPxGridView1_DXMainTable tbody .dxgvDataRow_Aqua").length;
    var count_row7 = $("#MainContent_ASPxGridView7_DXMainTable tbody .dxgvDataRow_Aqua").length;
    var count_row5 = $("#MainContent_ASPxGridView5_DXMainTable tbody .dxgvDataRow_Aqua").length;
    var thead = "";
    thead += "<thead>";
    thead += "<tr class=\"tr-thead\">";
    thead += "<td>STATUS</td>";
    thead += "<td>MAWB</td>";
    thead += "<td>PCS</td>";
    thead += "<td>G.W</td>";
    thead += "<td>FLT.NO</td>";
    thead += "<td>FLT.D</td>";
    thead += "<td>FLT.T</td>";
    thead += "<td>NBA</td>";
    thead += "<td>ALSE</td>";
    thead += "<td>DEST</td>";
    thead += "<td>SLI.D</td>";
    thead += "<td>SLI.T</td>";
    thead += "<td>Truck ID</td>";
    thead += "<td>Truck.D</td>";
    thead += "<td>Truck.T</td>";
    thead += "<td>FWD</td>";
    thead += "<td>W.H</td>";
    thead += "<td>REMARK</td>";
    thead += "</tr>";
    thead += "</thead>";
    if (count_row6 > 0) {
        $("#MainContent_ASPxGridView6_DXMainTable").prepend(thead);
    } else if (count_row2 > 0) {
        $("#MainContent_ASPxGridView2_DXMainTable").prepend(thead);
    } else if (count_row3 > 0) {
        $("#MainContent_ASPxGridView3_DXMainTable").prepend(thead);
    } else if (count_row4 > 0) {
        $("#MainContent_ASPxGridView4_DXMainTable").prepend(thead);
    } else if (count_row1 > 0) {
        $("#MainContent_ASPxGridView1_DXMainTable").prepend(thead);
    } else if (count_row7 > 0) {
        $("#MainContent_ASPxGridView7_DXMainTable").prepend(thead);
    } else if (count_row5 > 0) {
        $("#MainContent_ASPxGridView5_DXMainTable").prepend(thead);
    }
}