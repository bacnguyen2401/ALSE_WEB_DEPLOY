//import { setInterval } from "timers/promises";

var mo_mawb;
var ajaxGet = "";
var ajaxGet2 = "";
var ajaxGet3 = "";
var ajaxGet4 = "";
var JsonData = "";
var d = "";
var interval;
var minutes = 4;
var seconds = 59;
var jsonYNghiaTrangThai = {};
var html_help_thead = "";
var html_help_tbody = "";
var tomauWH = "";

window.onload = function () {
    countdown('countdown');
    if ($("#username").attr("wugroup") != "24") {
        $(".div-trangthaihangnhap-button").show();

    } else {
        $(".div-trangthaihangnhap-button").remove();
    }


}

function countdown(element) {
    interval = setInterval(function () {
        var el = document.getElementById(element);
        if (seconds == 0) {
            if (minutes == 0) {
                el.innerHTML = "Reloading...!";
                clearInterval(interval);
                location.reload();
                //fncLoad();
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
        el.innerHTML = '<a href=\"#\" onclick=\"location.reload();return false;\">Refresh</a>: ' + minute_text + ' ' + seconds + ' ' + second_text;
        seconds--;
    }, 1000);
}

$(document).ready(function () {

    fncLoad();
    fncClick();
    fncChanges();
    fncModalActions();
    $("#input-tungayloc").val(moment().format("DD/MM/YYYY"));
    $("#input-denngayloc").val(moment().format("DD/MM/YYYY"));

    $("#input-tungaylocHQGS").val(moment().format("DD/MM/YYYY"));
    $("#input-denngaylocHQGS").val(moment().format("DD/MM/YYYY"));

    $("#input-tungayBaoCaoHQ").val(moment().format("DD/MM/YYYY"));
    $("#input-denngayBaoCaoHQ").val(moment().format("DD/MM/YYYY"));
    $("#btn-refresh").click(function () {
        location.reload();
    });


    //getInOut();
});



function fncLoad() {
    // Get All Hàng Nhập

    //+ ARRIVAL NOTICE
    //+ DELYVERY PLAN
    //+ LOADING ON TRUCK
    //+ TRUCKING ALSE
    //+ ALSE WAREHOUSE
    //+ CLEAR CUSTOM
    //+ DELYVERING
    //+ COMPLETE

    // tô mầu cột  orderD , orderT


    $.ajax({
        type: "POST",
        url: "QuanLyHangNhap.aspx/listAllImport",
        contentType: "application/json;charsert=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d.danhSachFWDs);
            //console.log(d);

            var ArrivalNotice = d.ArrivalNotice.length;
            var DelyveryPlan = d.DelyveryPlan.length;
            var CargoReady = d.CargoReady.length;
            var LoadingOnTruck = d.LoadingOnTruck.length;
            var AlseWarehouse = d.AlseWarehouse.length;
            var ClearCustom = d.ClearCustom.length;
            var Delyvering = d.Delyvering.length;
            var Complete = d.Complete.length;
            var TruckingALSE = d.TruckingALSE.length;

            //show table if length array > 0 
            //ArrivalNotice
            if (ArrivalNotice > 0) {
                $("#tbl_ArrivalNotice").show();
                var html_ArrivalNotice = "";
                $("#tbl_ArrivalNotice tbody").empty();
                $.each(d.ArrivalNotice, function (item, val) {
                    var tomaucotMaWb = "";
                    var tomaucotfltDateTime = "";
                    var tomaucotOrderDatetime = "";
                    var flt = new Date(val.NgayGioBayTBArrivalNotice);
                    var currentDate = new Date();
                    var tmdate = new Date();
                    tmdate.setDate(tmdate.getDate() + 1);
                    tmdate.setHours(14, 0, 0, 0000);
                    if (flt >= currentDate && flt <= tmdate) {
                        tomaucotMaWb = 'backgroup-color-ftldatetime';
                    }

                    if (flt < currentDate) {
                        tomaucotfltDateTime = 'backgroup-color-ftldatetime';
                    }

                    var orderdt = new Date(val.NgayGioYeuCauTraHangArrivalNotice);

                    var hieudtgiaobayttdt = 0;
                    var hieudtgiaobayttdt = (orderdt - flt) / 3600000;

                    if (convertDate(val.NgayGioYeuCauTraHangArrivalNotice)[1] != "" && hieudtgiaobayttdt <= 11) {
                        tomaucotOrderDatetime = 'backgroup-color-ngaygiotrahang';
                    }
                    var textHQGS = "";
                    var colorHQGS = "";
                    if (val.DVHQ_NBA == "True") {
                        colorHQGS = "classHQGS";
                        textHQGS = "</br>" + "<span  class=\"" + colorHQGS + "\">HQGS tại NBA</span>";
                    }

                    var textPhatDO = "";
                    var colorHQGS = "";
                    if (val.DO == "True") {
                        colorHQGS = "classHQGS";
                        textPhatDO = "</br>" + "<span  class=\"" + colorHQGS + "\">Phát DO tại NBA</span>";
                    }

                    tomauWH = "";
                    if (val.MaKho == "") {
                        tomauWH = "tomauWH";
                    }

                    html_ArrivalNotice += "<tr makho=\"" + val.MaKho + "\" fwd=\"" + val.FWDSArrivalNotice.replace(".", "-") + "\" class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.FWDSArrivalNotice.replace(".", "-") + " tr-makho-" + val.MaKho + " tr-hqgs-" + val.DVHQ_NBA + " tr-do-" + val.DO + "\">";
                    html_ArrivalNotice += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_ArrivalNotice += "<td class=\"td-img\" attrMAWB=\"" + val.MawbArrivalNotice + "\"  attrHAWB=\"" + val.HawbArrivalNotice + "\" attrSoKien=\"" + val.SoKienTBArrivalNotice + "\">" + "<img src=\"images/mail_web.png\"  />" + "</td>";
                    html_ArrivalNotice += "<td class=\"td-mawb1  mawban " + tomaucotMaWb + "\" attrMAWB=\"" + val.MawbArrivalNotice + "\" attrHAWB=\"" + val.HawbArrivalNotice + "\">" + val.MawbArrivalNotice + textPhatDO + "</td>";
                    html_ArrivalNotice += "<td class=\"td-hawb  " + tomauWH + "\">" + val.HawbArrivalNotice + textHQGS + "</td>";
                    html_ArrivalNotice += "<td class=\"td-pcs\">" + val.SoKienTBArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td class=\"td-cm\">" + val.GMArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td class=\"td-cm\">" + val.CMArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td class=\"td-flt\">" + val.ChuyenBayTBArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td class=\"td-date fltdate " + tomaucotfltDateTime + "\">" + convertDate(val.NgayGioBayTBArrivalNotice)[1] + "</td>";
                    html_ArrivalNotice += "<td class=\"td-time flttime " + tomaucotfltDateTime + "\">" + (convertDate(val.NgayGioBayTBArrivalNotice)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTBArrivalNotice)[3]) + "</td>";
                    html_ArrivalNotice += "<td class=\"td-date ngayyctrahang " + tomaucotOrderDatetime + "\">" + convertDate(val.NgayGioYeuCauTraHangArrivalNotice)[1] + "</td>";
                    html_ArrivalNotice += "<td class=\"td-time gioyctrahang " + tomaucotOrderDatetime + "\">" + (convertDate(val.NgayGioYeuCauTraHangArrivalNotice)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangArrivalNotice)[3]) + "</td>";
                    html_ArrivalNotice += "<td>" + val.HTSoKienThucArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td>" + val.HTSoCanThucArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td>" + val.SoKienThucArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td>" + val.LACKArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td class=\"td-fwd\">" + val.FWDSArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    html_ArrivalNotice += "<td>" + val.TinhTrangTB + "</td>";
                    html_ArrivalNotice += "<td>" + val.Invoice + "</td>";
                    html_ArrivalNotice += "<td>" + val.GhiChuTBArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td>" + val.CNEEMAWB + "</td>";
                    html_ArrivalNotice += "</tr>";
                });

                $("#tbl_ArrivalNotice tbody").append(html_ArrivalNotice);
            }
            //show table if length array > 0 
            //DELYVERY PLAN
            if (DelyveryPlan > 0) {
                $("#tbl_DelyvryPlan").show();
                var html_DelyvryPlan = "";
                $("#tbl_DelyvryPlan tbody").empty();
                $.each(d.DelyveryPlan, function (item, val) {

                    var currentDate = new Date();

                    var flt = new Date(val.NgayGioBayTBDelyveryPlan);
                    var tomaucotFLTdt = "";

                    var orderdt = new Date(val.NgayGioYeuCauTraHangDelyveryPlan);
                    var dtgiao = new Date(val.NgayGioGiaoDelyveryPlan);
                    var tomaucotOrderdt = "";
                    var hieuorder = (orderdt - currentDate) / 3600000;

                    if (flt < currentDate) {
                        tomaucotFLTdt = 'backgroup-color-ftldatetime';
                    }

                    if (convertDate(val.NgayGioYeuCauTraHangDelyveryPlan)[1] != "" && convertDate(val.NgayGioYeuCauTraHangDelyveryPlan)[3] != "00:00") {
                        if (hieuorder >= 0 && hieuorder <= 1.5) {
                            tomaucotOrderdt = 'backgroup-color-red';
                        } else if ((hieuorder > 1.5) && hieuorder <= 4.5) {
                            tomaucotOrderdt = 'backgroup-color-yellow';
                        }
                    }

                    if (convertDate(val.NgayGioGiaoDelyveryPlan)[1] != "") {
                        var hieudtgiaobayttdt = (dtgiao - flt) / 3600000;

                    } else {
                        var hieudtgiaobayttdt = (orderdt - flt) / 3600000;

                    }

                    if (hieudtgiaobayttdt <= 11) {
                        if (convertDate(val.NgayGioYeuCauTraHangDelyveryPlan)[1] != "") {
                            tomaucotOrderdt = 'backgroup-color-ngaygiotrahang';
                        }
                    }

                    var textHQGS = "";
                    var colorHQGS = "";
                    if (val.DVHQ_NBA == "True") {
                        colorHQGS = "classHQGS";
                        textHQGS = "</br>" + "<span  class=\"" + colorHQGS + "\">HQGS tại NBA</span>";
                    }

                    var textPhatDO = "";
                    var colorHQGS = "";
                    if (val.DO == "True") {
                        colorHQGS = "classHQGS";
                        textPhatDO = "</br>" + "<span  class=\"" + colorHQGS + "\">Phát DO tại NBA</span>";
                    }


                    tomauWH = "";
                    if (val.MaKho == "") {
                        tomauWH = "tomauWH";
                    }

                    html_DelyvryPlan += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.FWDSDelyveryPlan.replace(".", "-") + " tr-makho-" + val.MaKho + " tr-hqgs-" + val.DVHQ_NBA + " tr-do-" + val.DO + "\">";
                    html_DelyvryPlan += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_DelyvryPlan += "<td class=\"td-img\" attrMAWB=\"" + val.MawbDelyveryPlan + "\"  attrHAWB=\"" + val.HawbDelyveryPlan + "\" attrSoKien=\"" + val.SoKienTBDelyveryPlan + "\">" + "<img src=\"images/DELIVERY PLAN.png\"  />" + "</td>";
                    html_DelyvryPlan += "<td class=\"td-mawb1 font-weight-css\" attrMAWB=\"" + val.MawbDelyveryPlan + "\" attrHAWB=\"" + val.HawbDelyveryPlan + "\">" + val.MawbDelyveryPlan + textPhatDO + "</td>";
                    html_DelyvryPlan += "<td class=\"td-hawb font-weight-css  " + tomauWH + "\">" + val.HawbDelyveryPlan + textHQGS + "</td>";
                    html_DelyvryPlan += "<td class=\"td-pcs\">" + val.SoKienTBDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td class=\"td-cm\">" + val.GMDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td class=\"td-cm\">" + val.CMDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td class=\"td-flt\">" + val.ChuyenBayTBDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td class=\"td-date fltdate " + tomaucotFLTdt + "\">" + convertDate(val.NgayGioBayTBDelyveryPlan)[1] + "</td>";
                    html_DelyvryPlan += "<td class=\"td-time flttime " + tomaucotFLTdt + "\">" + (convertDate(val.NgayGioBayTBDelyveryPlan)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTBDelyveryPlan)[3]) + "</td>";
                    html_DelyvryPlan += "<td class=\"td-date ngayyctrahang " + tomaucotOrderdt + "\">" + convertDate(val.NgayGioYeuCauTraHangDelyveryPlan)[1] + "</td>";
                    html_DelyvryPlan += "<td class=\"td-time gioyctrahang " + tomaucotOrderdt + "\">" + (convertDate(val.NgayGioYeuCauTraHangDelyveryPlan)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangDelyveryPlan)[3]) + "</td>";
                    html_DelyvryPlan += "<td>" + val.HTSoKienThucDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td>" + val.HTSoCanThucDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td>" + val.SoKienThucDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td>" + val.LACKDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td class=\"td-fwd\">" + val.FWDSDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    html_DelyvryPlan += "<td>" + val.TinhTrangTB + "</td>";
                    html_DelyvryPlan += "<td>" + val.Invoice + "</td>";
                    html_DelyvryPlan += "<td>" + val.GhiChuTBDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td>" + val.CNEEMAWB + "</td>";
                    //html_DelyvryPlan += "<td class=\"statdate\">" + convertDate(val.NgayGioGiaoDelyveryPlan)[1] + "</td>";
                    //html_DelyvryPlan += "<td class=\"stattime\">" + (convertDate(val.NgayGioGiaoDelyveryPlan)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoDelyveryPlan)[3]) + "</td>";
                    //html_DelyvryPlan += "<td class=\"ngaybaytt\">" + convertDate(val.NgayGioBayTTDelyveryPlan)[1] + "</td>";
                    //html_DelyvryPlan += "<td class=\"giobaytt\">" + (convertDate(val.NgayGioBayTTDelyveryPlan)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoDelyveryPlan)[3]) + "</td>";
                    html_DelyvryPlan += "</tr>";
                });

                $("#tbl_DelyvryPlan tbody").append(html_DelyvryPlan);

            }
            //show table if length array > 0 
            //Cargo ready
            if (CargoReady > 0) {
                $("#tbl-CargoReady").show();
                var html_CargoReady = "";
                $("#tbl-CargoReady tbody").empty();
                //console.log(d.LoadingOnTruck);
                $.each(d.CargoReady, function (item, val) {

                    var textHQGS = "";
                    var colorHQGS = "";
                    if (val.DVHQ_NBA == "True") {
                        colorHQGS = "classHQGS";
                        textHQGS = "</br>" + "<span  class=\"" + colorHQGS + "\">HQGS tại NBA</span>";
                    }

                    var textPhatDO = "";
                    var colorHQGS = "";
                    if (val.DO == "True") {
                        colorHQGS = "classHQGS";
                        textPhatDO = "</br>" + "<span  class=\"" + colorHQGS + "\">Phát DO tại NBA</span>";
                    }

                    tomauWH = "";
                    if (val.MaKho == "") {
                        tomauWH = "tomauWH";
                    }

                    html_CargoReady += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.FWDSCargoReady.replace(".", "-") + " tr-makho-" + val.MaKho + " tr-hqgs-" + val.DVHQ_NBA + " tr-do-" + val.DO + "\">";
                    html_CargoReady += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_CargoReady += "<td class=\"td-img\" attrMAWB=\"" + val.MawbCargoReady + "\"  attrHAWB=\"" + val.HawbCargoReady + "\" attrSoKien=\"" + val.SoKienDSVCMDCargoReady + "\">" + "<img src=\"images/CARGO_READY.png\"  />" + "</td>"; //
                    html_CargoReady += "<td class=\"td-mawb1 font-weight-css\" attrMAWB=\"" + val.MawbCargoReady + "\" attrHAWB=\"" + val.HawbCargoReady + "\">" + val.MawbCargoReady + textPhatDO + "</td>";
                    html_CargoReady += "<td class=\"td-hawb font-weight-css  " + tomauWH + "\">" + val.HawbCargoReady + textHQGS + "</span>" + "</td>";
                    html_CargoReady += "<td class=\"td-pcs\">" + val.SoKienTBCargoReady + "</td>";
                    html_CargoReady += "<td class=\"td-cm\">" + val.GMCargoReady + "</td>";
                    html_CargoReady += "<td class=\"td-cm\">" + val.CMCargoReady + "</td>";
                    html_CargoReady += "<td class=\"td-flt\">" + val.ChuyenBayTBCargoReady + "</td>";
                    html_CargoReady += "<td class=\"td-date\">" + convertDate(val.NgayGioBayTBCargoReady)[1] + "</td>";
                    html_CargoReady += "<td class=\"td-time\">" + (convertDate(val.NgayGioBayTBCargoReady)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTBCargoReady)[3]) + "</td>";
                    html_CargoReady += "<td class=\"td-date ngayyctrahang\">" + convertDate(val.NgayGioYeuCauTraHangCargoReady)[1] + "</td>";
                    html_CargoReady += "<td class=\"td-time gioyctrahang\">" + (convertDate(val.NgayGioYeuCauTraHangCargoReady)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangCargoReady)[3]) + "</td>";
                    html_CargoReady += "<td class=\"td-date font-weight-css\">" + convertDate(val.NgayGioXeVeCargoReady)[1] + "</td>";
                    html_CargoReady += "<td class=\"td-time font-weight-css\">" + (convertDate(val.NgayGioXeVeCargoReady)[3] == "00:00" ? "" : convertDate(val.NgayGioXeVeCargoReady)[3]) + "</td>";
                    html_CargoReady += "<td>" + val.BKSXeVeCargoReady + "</td>";
                    html_CargoReady += "<td>" + val.SoKienDSVCMDCargoReady + "</td>";
                    html_CargoReady += "<td>" + val.SoCanDSVCMDCargoReady + "</td>";
                    html_CargoReady += "<td class=\"td-fwd\">" + val.FWDSCargoReady + "</td>";
                    html_CargoReady += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    html_CargoReady += "<td>" + val.TinhTrangTB + "</td>";
                    html_CargoReady += "<td>" + val.Invoice + "</td>";
                    html_CargoReady += "<td>" + val.GhiChuTBCargoReady + "</td>";
                    html_CargoReady += "<td>" + val.CNEEMAWB + "</td>";
                    //html_LoadingOnTruck += "<td class=\"statdate\">" + convertDate(val.NgayGioGiaoLoadingOnTruck)[1] + "</td>";
                    //html_LoadingOnTruck += "<td class=\"stattime\">" + (convertDate(val.NgayGioGiaoLoadingOnTruck)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoLoadingOnTruck)[3]) + "</td>";
                    //html_LoadingOnTruck += "<td class=\"ngaybaytt\">" + convertDate(val.NgayGioBayTTLoadingOnTruck)[1] + "</td>";
                    //html_LoadingOnTruck += "<td class=\"giobaytt\">" + (convertDate(val.NgayGioBayTTLoadingOnTruck)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTTLoadingOnTruck)[3]) + "</td>";
                    html_CargoReady += "</tr>";
                });

                $("#tbl-CargoReady tbody").append(html_CargoReady);

            }

            //Loading On Truck
            if (LoadingOnTruck > 0) {
                $("#tbl_LoadingOnTruck").show();
                var html_LoadingOnTruck = "";
                $("#tbl_LoadingOnTruck tbody").empty();
                //console.log(d.TruckingAlse);
                $.each(d.LoadingOnTruck, function (item, val) {
                    var textHQGS = "";
                    var colorHQGS = "";
                    if (val.DVHQ_NBA == "True") {
                        colorHQGS = "classHQGS";
                        textHQGS = "</br>" + "<span  class=\"" + colorHQGS + "\">HQGS tại NBA</span>";
                    }

                    var textPhatDO = "";
                    var colorHQGS = "";
                    if (val.DO == "True") {
                        colorHQGS = "classHQGS";
                        textPhatDO = "</br>" + "<span  class=\"" + colorHQGS + "\">Phát DO tại NBA</span>";
                    }

                    tomauWH = "";
                    if (val.MaKho == "") {
                        tomauWH = "tomauWH";
                    }

                    html_LoadingOnTruck += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.FWDSLoadingOnTruck.replace(".", "-") + " tr-makho-" + val.MaKho + " tr-hqgs-" + val.DVHQ_NBA + " tr-do-" + val.DO + "\">";
                    html_LoadingOnTruck += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-img\"  attrMAWB=\"" + val.MawbLoadingOnTruck + "\"  attrHAWB=\"" + val.HawbLoadingOnTruck + "\" attrSoKien=\"" + val.SoKienDSVCMDLoadingOnTruck + "\">" + "<img src=\"images/truck.png\"  />" + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-mawb1 font-weight-css\" attrMAWB=\"" + val.MawbLoadingOnTruck + "\" attrHAWB=\"" + val.HawbLoadingOnTruck + "\">" + val.MawbLoadingOnTruck + textPhatDO + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-hawb font-weight-css  " + tomauWH + "\">" + val.HawbLoadingOnTruck + textHQGS + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-pcs\">" + val.SoKienTBLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-cm\">" + val.GMLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-cm\">" + val.CMLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-flt\">" + val.ChuyenBayTBLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-date\">" + convertDate(val.NgayGioBayTBLoadingOnTruck)[1] + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-time\">" + (convertDate(val.NgayGioBayTBLoadingOnTruck)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTBLoadingOnTruck)[3]) + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-date ngayyctrahang\">" + convertDate(val.NgayGioYeuCauTraHangLoadingOnTruck)[1] + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-time gioyctrahang\">" + (convertDate(val.NgayGioYeuCauTraHangLoadingOnTruck)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangLoadingOnTruck)[3]) + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-date font-weight-css\">" + convertDate(val.NgayGioXeVeLoadingOnTruck)[1] + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-time font-weight-css\">" + (convertDate(val.NgayGioXeVeLoadingOnTruck)[3] == "00:00" ? "" : convertDate(val.NgayGioXeVeLoadingOnTruck)[3]) + "</td>";
                    html_LoadingOnTruck += "<td>" + val.BKSXeVeLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td>" + val.SoKienDSVCMDLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td>" + val.SoCanDSVCMDLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-fwd\">" + val.FWDSLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    html_LoadingOnTruck += "<td>" + val.TinhTrangTB + "</td>";
                    html_LoadingOnTruck += "<td>" + val.Invoice + "</td>";
                    html_LoadingOnTruck += "<td>" + val.GhiChuTBLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td>" + val.CNEEMAWB + "</td>";
                    //html_TruckingAlse += "<td class=\"statdate\">" + convertDate(val.NgayGioGiaoTruckingAlse)[1] + "</td>";
                    //html_TruckingAlse += "<td class=\"stattime\">" + (convertDate(val.NgayGioGiaoTruckingAlse)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoTruckingAlse)[3]) + "</td>";
                    //html_TruckingAlse += "<td class=\"ngaybaytt\">" + convertDate(val.NgayGioBayTTTruckingAlse)[1] + "</td>";
                    //html_TruckingAlse += "<td class=\"giobaytt\">" + (convertDate(val.NgayGioBayTTTruckingAlse)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTTTruckingAlse)[3]) + "</td>";
                    html_LoadingOnTruck += "</tr>";
                });

                $("#tbl_LoadingOnTruck tbody").append(html_LoadingOnTruck);

            }

            //TRUCKING ALSE
            if (TruckingALSE > 0) {
                $("#tbl_TruckingAlse").show();
                var html_TruckingAlse = "";
                $("#tbl_TruckingAlse tbody").empty();
                //console.log(d.TruckingAlse);
                $.each(d.TruckingALSE, function (item, val) {
                    var textHQGS = "";
                    var colorHQGS = "";
                    if (val.DVHQ_NBA == "True") {
                        colorHQGS = "classHQGS";
                        textHQGS = "</br>" + "<span  class=\"" + colorHQGS + "\">HQGS tại NBA</span>";
                    }

                    var textPhatDO = "";
                    var colorHQGS = "";
                    if (val.DO == "True") {
                        colorHQGS = "classHQGS";
                        textPhatDO = "</br>" + "<span  class=\"" + colorHQGS + "\">Phát DO tại NBA</span>";
                    }

                    tomauWH = "";
                    if (val.MaKho == "") {
                        tomauWH = "tomauWH";
                    }

                    html_TruckingAlse += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.FWDSTruckingALSE.replace(".", "-") + " tr-makho-" + val.MaKho + " tr-hqgs-" + val.DVHQ_NBA + " tr-do-" + val.DO + "\">";
                    html_TruckingAlse += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_TruckingAlse += "<td class=\"td-img\" attrMAWB=\"" + val.MawbTruckingALSE + "\"  attrHAWB=\"" + val.HawbTruckingALSE + "\" attrSoKien=\"" + val.SoKienDSVCMDTruckingALSE + "\">" + "<img src=\"images/TRUCKING ALSE.png\"  />" + "</td>";
                    html_TruckingAlse += "<td class=\"td-mawb1 font-weight-css\" attrMAWB=\"" + val.MawbTruckingALSE + "\" attrHAWB=\"" + val.HawbTruckingALSE + "\">" + val.MawbTruckingALSE + textPhatDO + "</td>";
                    html_TruckingAlse += "<td class=\"td-hawb font-weight-css  " + tomauWH + "\">" + val.HawbTruckingALSE + textHQGS + "</td>";
                    html_TruckingAlse += "<td class=\"td-pcs\">" + val.SoKienTBTruckingALSE + "</td>";
                    html_TruckingAlse += "<td class=\"td-cm\">" + val.GMTruckingALSE + "</td>";
                    html_TruckingAlse += "<td class=\"td-cm\">" + val.CMTruckingALSE + "</td>";
                    html_TruckingAlse += "<td class=\"td-flt\">" + val.ChuyenBayTBTruckingALSE + "</td>";
                    html_TruckingAlse += "<td class=\"td-date\">" + convertDate(val.NgayGioBayTBTruckingALSE)[1] + "</td>";
                    html_TruckingAlse += "<td class=\"td-time\">" + (convertDate(val.NgayGioBayTBTruckingALSE)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTBTruckingALSE)[3]) + "</td>";
                    html_TruckingAlse += "<td class=\"td-date ngayyctrahang\">" + convertDate(val.NgayGioYeuCauTraHangTruckingALSE)[1] + "</td>";
                    html_TruckingAlse += "<td class=\"td-time gioyctrahang\">" + (convertDate(val.NgayGioYeuCauTraHangTruckingALSE)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangTruckingALSE)[3]) + "</td>";
                    html_TruckingAlse += "<td class=\"td-date font-weight-css\">" + convertDate(val.NgayGioXeVeTruckingALSE)[1] + "</td>";
                    html_TruckingAlse += "<td class=\"td-time font-weight-css\">" + (convertDate(val.NgayGioXeVeTruckingALSE)[3] == "00:00" ? "" : convertDate(val.NgayGioXeVeTruckingALSE)[3]) + "</td>";
                    html_TruckingAlse += "<td>" + val.BKSXeVeTruckingALSE + "</td>";
                    html_TruckingAlse += "<td>" + val.SoKienDSVCMDTruckingALSE + "</td>";
                    html_TruckingAlse += "<td>" + val.SoCanDSVCMDTruckingALSE + "</td>";
                    html_TruckingAlse += "<td class=\"td-fwd\">" + val.FWDSTruckingALSE + "</td>";
                    html_TruckingAlse += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    html_TruckingAlse += "<td>" + val.TinhTrangTB + "</td>";
                    html_TruckingAlse += "<td>" + val.Invoice + "</td>";
                    html_TruckingAlse += "<td>" + val.GhiChuTBTruckingALSE + "</td>";
                    html_TruckingAlse += "<td>" + val.CNEEMAWB + "</td>";
                    //html_TruckingAlse += "<td class=\"statdate\">" + convertDate(val.NgayGioGiaoTruckingAlse)[1] + "</td>";
                    //html_TruckingAlse += "<td class=\"stattime\">" + (convertDate(val.NgayGioGiaoTruckingAlse)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoTruckingAlse)[3]) + "</td>";
                    //html_TruckingAlse += "<td class=\"ngaybaytt\">" + convertDate(val.NgayGioBayTTTruckingAlse)[1] + "</td>";
                    //html_TruckingAlse += "<td class=\"giobaytt\">" + (convertDate(val.NgayGioBayTTTruckingAlse)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTTTruckingAlse)[3]) + "</td>";
                    html_TruckingAlse += "</tr>";
                });

                $("#tbl_TruckingAlse tbody").append(html_TruckingAlse);
            }
            //show table if length array > 0 
            //ALSE WAREHOUSE
            if (AlseWarehouse > 0) {
                $("#tbl_AlseWarehouse").show();
                var html_AlseWarehouse = "";
                $("#tbl_AlseWarehouse tbody").empty();
                $.each(d.AlseWarehouse, function (item, val) {

                    var currentDate = new Date();
                    var tomauorderdtWAREHOUSE = "";
                    var orderdt = new Date(val.NgayGioYeuCauTraHangAlseWarehouse);
                    var hieuorder = (orderdt - currentDate) / 3600000;
                    var dtgiao = new Date(val.NgayGioGiaoAlseWarehouse);
                    var bayttdt = new Date(val.NgayGioBayTTAlseWarehouse);

                    if (convertDate(val.NgayGioYeuCauTraHangAlseWarehouse)[1] != "" && convertDate(val.NgayGioYeuCauTraHangAlseWarehouse)[3] != "00:00") {
                        if (hieuorder <= 0) {
                            tomauorderdtWAREHOUSE = 'backgroup-color-red';
                        } else if ((hieuorder > 0) && hieuorder <= 3) {
                            tomauorderdtWAREHOUSE = 'backgroup-color-yellow';
                        }
                    }
                    if (convertDate(val.NgayGioGiaoAlseWarehouse)[1] != "") {
                        var hieudtgiaobayttdt = (dtgiao - bayttdt) / 3600000;
                    } else {
                        var hieudtgiaobayttdt = (orderdt - bayttdt) / 3600000;
                    }
                    //console.log(hieudtgiaobayttdt);
                    if (hieudtgiaobayttdt <= 11) {

                        tomauorderdtWAREHOUSE = 'backgroup-color-ngaygiotrahang';
                    }

                    var textHQGS = "";
                    var colorHQGS = "";
                    if (val.DVHQ_NBA == "True") {
                        colorHQGS = "classHQGS";
                        textHQGS = "</br>" + "<span  class=\"" + colorHQGS + "\">HQGS tại NBA</span>";
                    }

                    var textPhatDO = "";
                    var colorHQGS = "";
                    if (val.DO == "True") {
                        colorHQGS = "classHQGS";
                        textPhatDO = "</br>" + "<span  class=\"" + colorHQGS + "\">Phát DO tại NBA</span>";
                    }

                    tomauWH = "";
                    if (val.MaKho == "") {
                        tomauWH = "tomauWH";
                    }
                    // thêm cw
                    html_AlseWarehouse += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.FWDSAlseWarehouse.replace(".", "-") + " tr-makho-" + val.MaKho + " tr-hqgs-" + val.DVHQ_NBA + " tr-do-" + val.DO + "\">";
                    html_AlseWarehouse += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_AlseWarehouse += "<td class=\"td-img\" attrMAWB=\"" + val.MawbAlseWarehouse + "\"  attrHAWB=\"" + val.HawbAlseWarehouse + "\" attrSoKien=\"" + val.SoKienThucAlseWarehouse + "\">" + "<img src=\"images/alsewh.png\"  />" + "</td>";
                    html_AlseWarehouse += "<td class=\"td-mawb1 font-weight-css\" attrMAWB=\"" + val.MawbAlseWarehouse + "\" attrHAWB=\"" + val.HawbAlseWarehouse + "\">" + val.MawbAlseWarehouse + textPhatDO + "</td>";
                    html_AlseWarehouse += "<td class=\"td-hawb font-weight-css  " + tomauWH + "\">" + val.HawbAlseWarehouse + textHQGS + "</td>";
                    html_AlseWarehouse += "<td class=\"td-pcs\">" + val.SoKienThucAlseWarehouse + "</td>";
                    html_AlseWarehouse += "<td class=\"td-cm\">" + val.SoCanThucAlseWarehouse + "</td>";
                    html_AlseWarehouse += "<td class=\"td-cm\">" + val.CW + "</td>";
                    html_AlseWarehouse += "<td class=\"td-flt\">" + val.ChuyenBayTTAlseWarehouse + "</td>";
                    html_AlseWarehouse += "<td class=\"td-date ngaybaytt\">" + convertDate(val.NgayGioBayTTAlseWarehouse)[1] + "</td>";
                    html_AlseWarehouse += "<td class=\"td-time giobaytt\">" + (convertDate(val.NgayGioBayTTAlseWarehouse)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTTAlseWarehouse)[3]) + "</td>";
                    html_AlseWarehouse += "<td class=\"td-date ngayyctrahang " + tomauorderdtWAREHOUSE + "\">" + convertDate(val.NgayGioYeuCauTraHangAlseWarehouse)[1] + "</td>";
                    html_AlseWarehouse += "<td class=\"td-time gioyctrahang " + tomauorderdtWAREHOUSE + "\">" + (convertDate(val.NgayGioYeuCauTraHangAlseWarehouse)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangAlseWarehouse)[3]) + "</td>";
                    html_AlseWarehouse += "<td class=\"td-date font-weight-css\">" + convertDate(val.NgayGioXeVeAlseWarehouse)[1] + "</td>";
                    html_AlseWarehouse += "<td class=\"td-time font-weight-css\">" + (convertDate(val.NgayGioXeVeAlseWarehouse)[3] == "00:00" ? "" : convertDate(val.NgayGioXeVeAlseWarehouse)[3]) + "</td>";
                    html_AlseWarehouse += "<td class=\"td-truckID\">" + val.BKSXeVeAlseWarehouse + "</td>";
                    html_AlseWarehouse += "<td class=\"td-code\">" + val.CodeAlseWarehouse + "</td>";
                    html_AlseWarehouse += "<td class=\"td-fwd\">" + val.FWDSAlseWarehouse + "</td>";
                    html_AlseWarehouse += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    html_AlseWarehouse += "<td>" + val.TinhTrangTB + "</td>";
                    html_AlseWarehouse += "<td>" + notspecialcharacters(val.Invoice) + "</td>";
                    html_AlseWarehouse += "<td>" + val.GhiChuAlseWarehouse + "</td>";
                    html_AlseWarehouse += "<td>" + val.CNEEMAWB + "</td>";
                    //html_AlseWarehouse += "<td class=\"statdate\">" + convertDate(val.NgayGioGiaoAlseWarehouse)[1] + "</td>";
                    //html_AlseWarehouse += "<td class=\"stattime\">" + (convertDate(val.NgayGioGiaoAlseWarehouse)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoAlseWarehouse)[3]) + "</td>";
                    html_AlseWarehouse += "</tr>";
                });

                $("#tbl_AlseWarehouse tbody").append(html_AlseWarehouse);

                //$('.statdate').remove();
                //$('.stattime').remove();
            }
            //show table if length array > 0 
            //CLEAR CUSTOM
            if (ClearCustom > 0) {
                $("#tbl_ClearCustom").show();
                var html_ClearCustom = "";
                $("#tbl_ClearCustom tbody").empty();
                $.each(d.ClearCustom, function (item, val) {

                    var tomauNgayGioYeuCauTraHang = "";

                    var currentDate = new Date();
                    var orderdt = new Date(val.NgayGioYeuCauTraHangClearCustom);
                    var hieuorder = (orderdt - currentDate) / 3600000;

                    if (convertDate(val.NgayGioBayTTClearCustom)[1] != "" && convertDate(val.NgayGioBayTTClearCustom)[3] != "00:00") {
                        if (hieuorder < 0) {
                            tomauNgayGioYeuCauTraHang = "backgroup-color-red";
                        } else if ((hieuorder >= 0) && hieuorder <= 3) {
                            tomauNgayGioYeuCauTraHang = "backgroup-color-yellow";
                        }
                    }

                    var dtgiao = new Date(val.NgayGioGiaoClearCustom);
                    var bayttdt = new Date(val.NgayGioBayTTClearCustom);

                    if (convertDate(val.NgayGioGiaoClearCustom)[1] != "") {
                        var hieudtgiaobayttdt = (dtgiao - bayttdt) / 3600000;
                    } else {
                        var hieudtgiaobayttdt = (orderdt - bayttdt) / 3600000;
                    }


                    if (hieudtgiaobayttdt <= 11) {
                        tomauNgayGioYeuCauTraHang = "backgroup-color-ngaygiotrahang";
                    }
                    var textHQGS = "";
                    var colorHQGS = "";
                    if (val.DVHQ_NBA == "True") {
                        colorHQGS = "classHQGS";
                        textHQGS = "</br>" + "<span  class=\"" + colorHQGS + "\">HQGS tại NBA</span>";
                    }

                    var textPhatDO = "";
                    var colorHQGS = "";
                    if (val.DO == "True") {
                        colorHQGS = "classHQGS";
                        textPhatDO = "</br>" + "<span  class=\"" + colorHQGS + "\">Phát DO tại NBA</span>";
                    }

                    tomauWH = "";
                    if (val.MaKho == "") {
                        tomauWH = "tomauWH";
                    }


                    html_ClearCustom += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.MaDonViNhanClearCustom.replace(".", "-") + " tr-makho-" + val.MaKho + " tr-hqgs-" + val.DVHQ_NBA + " tr-do-" + val.DO + "\">";
                    html_ClearCustom += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_ClearCustom += "<td class=\"td-img\" attrMAWB=\"" + val.MawbClearCustom + "\"  attrHAWB=\"" + val.HawbClearCustom + "\" attrSoKien=\"" + val.SoKienThucClearCustom + "\">" + "<img src=\"images/hoanthanhhaiquan.png\"  />" + "</td>";
                    html_ClearCustom += "<td class=\"td-mawb font-weight-css somawb\" attrMAWB=\"" + val.MawbClearCustom + "\" attrHAWB=\"" + val.HawbClearCustom + "\">" + val.MawbClearCustom + textPhatDO + "</td>";
                    html_ClearCustom += "<td class=\"td-hawb font-weight-css  " + tomauWH + "\">" + val.HawbClearCustom + textHQGS + "</span>" + "</td>";
                    html_ClearCustom += "<td class=\"td-pcs\">" + val.SoKienThucClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"td-cm\">" + val.SoCanThucClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"td-cm\">" + val.CW + "</td>";
                    html_ClearCustom += "<td class=\"td-flt\">" + val.ChuyenBayTTClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"td-date ngaybaytt\">" + convertDate(val.NgayGioBayTTClearCustom)[1] + "</td>";
                    html_ClearCustom += "<td class=\"td-time giobaytt\">" + (convertDate(val.NgayGioBayTTClearCustom)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTTClearCustom)[3]) + "</td>";
                    html_ClearCustom += "<td class=\"td-date ngayyctrahang " + tomauNgayGioYeuCauTraHang + "\">" + convertDate(val.NgayGioYeuCauTraHangClearCustom)[1] + "</td>";
                    html_ClearCustom += "<td class=\"td-time gioyctrahang " + tomauNgayGioYeuCauTraHang + "\">" + (convertDate(val.NgayGioYeuCauTraHangClearCustom)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangClearCustom)[3]) + "</td>";
                    html_ClearCustom += "<td class=\"td-date font-weight-css\">" + convertDate(val.NgayGioGiaoClearCustom)[1] + "</td>";
                    html_ClearCustom += "<td class=\"td-time font-weight-css\">" + (convertDate(val.NgayGioGiaoClearCustom)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoClearCustom)[3]) + "</td>";
                    html_ClearCustom += "<td class=\"td-code\">" + val.CodeClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"td-fwd\">" + val.MaDonViNhanClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    html_ClearCustom += "<td>" + val.TinhTrangTB + "</td>";
                    html_ClearCustom += "<td>" + val.Invoice + "</td>";
                    html_ClearCustom += "<td>" + val.GhiChuClearCustom + "</td>";
                    html_ClearCustom += "<td>" + val.CNEEMAWB + "</td>";
                    //html_ClearCustom += "<td class=\"statdate\">" + convertDate(val.NgayGioGiaoClearCustom)[1] + "</td>";
                    //html_ClearCustom += "<td class=\"stattime\">" + (convertDate(val.NgayGioGiaoClearCustom)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoClearCustom)[3]) + "</td>";
                    html_ClearCustom += "</tr>";
                });
                $("#tbl_ClearCustom tbody").append(html_ClearCustom);

            }
            //show table if length array > 0 
            //DELYVERING
            if (Delyvering > 0) {
                $("#tbl_Delyvering").show();
                var html_Delyvering = "";
                $("#tbl_Delyvering tbody").empty();
                $.each(d.Delyvering, function (item, val) {

                    var tomauNgayGioYeuCauTraHang = "";
                    var tomauSTA = "";



                    var statdt = new Date(val.NgayGioGiaoDelyvering);
                    var orderdt = new Date(val.NgayGioYeuCauTraHangDelyvering);
                    var hieuorder = (statdt - orderdt) / 3600000;
                    var hieuSTA = (statdt - orderdt);
                    if (hieuSTA > 0) {
                        tomauSTA += "backgroup-color-red";
                    } else if (hieuSTA == 0) {
                        tomauSTA += "backgroup-color-yellow"
                    }


                    if (convertDate(val.NgayGioYeuCauTraHangDelyvering)[1] != "" && convertDate(val.NgayGioYeuCauTraHangDelyvering)[3] != "00:00") {
                        if (hieuorder > 0) {
                            tomauNgayGioYeuCauTraHang = "backgroup-color-red";
                        }
                    }

                    var dtgiao = new Date(val.NgayGioGiaoDelyvering);
                    var bayttdt = new Date(val.NgayGioBayTTDelyvering);
                    var hieudtgiaobayttdt = (dtgiao - bayttdt) / 3600000;
                    if (hieudtgiaobayttdt <= 11) {
                        tomauNgayGioYeuCauTraHang = "";
                        tomauNgayGioYeuCauTraHang = "backgroup-color-ngaygiotrahang";
                    }

                    var textHQGS = "";
                    var colorHQGS = "";
                    if (val.DVHQ_NBA == "True") {
                        colorHQGS = "classHQGS";
                        textHQGS = "</br>" + "<span  class=\"" + colorHQGS + "\">HQGS tại NBA</span>";
                    }

                    var textPhatDO = "";
                    var colorHQGS = "";
                    if (val.DO == "True") {
                        colorHQGS = "classHQGS";
                        textPhatDO = "</br>" + "<span  class=\"" + colorHQGS + "\">Phát DO tại NBA</span>";
                    }

                    tomauWH = "";
                    if (val.MaKho == "") {
                        tomauWH = "tomauWH";
                    }


                    //console.log(convertDate(val.NgayGioGiaoDelyvering));
                    html_Delyvering += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.MaDonViNhanDelyvering.replace(".", "-") + " tr-makho-" + val.MaKho + " tr-hqgs-" + val.DVHQ_NBA + " tr-do-" + val.DO + "\">";
                    html_Delyvering += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_Delyvering += "<td class=\"td-img\" attrMAWB=\"" + val.MawbDelyvering + "\"  attrHAWB=\"" + val.HawbDelyvering + "\" attrSoKien=\"" + val.SoKienThucDelyvering + "\">" + "<img src=\"images/DELYVERING.png\"  />" + "</td>";
                    html_Delyvering += "<td class=\"td-mawb font-weight-css somawb\" attrMAWB=\"" + val.MawbDelyvering + "\" attrHAWB=\"" + val.HawbDelyvering + "\">" + val.MawbDelyvering + textPhatDO + "</td>";
                    html_Delyvering += "<td class=\"td-hawb font-weight-css  " + tomauWH + "\">" + val.HawbDelyvering + textHQGS + "</td>";
                    html_Delyvering += "<td class=\"td-pcs\">" + val.SoKienThucDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-cm\">" + val.SoCanThucDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-cm\">" + val.CW + "</td>";
                    html_Delyvering += "<td class=\"td-flt\">" + val.ChuyenBayTTDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-date ngaybaytt\">" + convertDate(val.NgayGioBayTTDelyvering)[1] + "</td>";
                    html_Delyvering += "<td class=\"td-time giobaytt\">" + (convertDate(val.NgayGioBayTTDelyvering)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTTDelyvering)[3]) + "</td>";
                    html_Delyvering += "<td class=\"td-date ngayyctrahang " + tomauNgayGioYeuCauTraHang + "\">" + convertDate(val.NgayGioYeuCauTraHangDelyvering)[1] + "</td>";
                    html_Delyvering += "<td class=\"td-time gioyctrahang " + tomauNgayGioYeuCauTraHang + "\">" + (convertDate(val.NgayGioYeuCauTraHangDelyvering)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangDelyvering)[3]) + "</td>";
                    html_Delyvering += "<td class=\"td-date font-weight-css " + tomauSTA + "\">" + convertDate(val.NgayGioGiaoDelyvering)[1] + "</td>";
                    html_Delyvering += "<td class=\"td-time font-weight-css " + tomauSTA + "\">" + (convertDate(val.NgayGioGiaoDelyvering)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoDelyvering)[3]) + "</td>";
                    html_Delyvering += "<td class=\"td-truckID\">" + val.BKSXeGiaoDelyvering + "<br/> <span class=\"color-red\">" + val.SoDienThoaiLaiXeGiao + "</span> </td>";
                    html_Delyvering += "<td class=\"td-code\">" + val.CodeDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-fwd\">" + val.MaDonViNhanDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    html_Delyvering += "<td>" + val.TinhTrangTB + "</td>";
                    html_Delyvering += "<td>" + val.Invoice + "</td>";
                    html_Delyvering += "<td>" + val.GhiChuDelyvering + "</td>";
                    html_Delyvering += "<td>" + val.CNEEMAWB + "</td>";
                    html_Delyvering += "</tr>";

                });
                $("#tbl_Delyvering tbody").append(html_Delyvering);
                //statdate
                //stattime
            }
            //show table if length array > 0 
            //COMPLETE
            if (Complete > 0) {
                $("#tbl_Complete").show();
                var html_Complete = "";
                $("#tbl_Complete tbody").empty();
                $.each(d.Complete, function (item, val) {

                    var tomaucotorderDTComplete = "";
                    var tomaucotngaygiogiaoxongComplete = "";

                    var ngaygioGiaoXongDate = new Date(val.NgayGioGiaoXongComplete);
                    var ngaygioBayTT = new Date(val.NgayGioBayTTComplete);
                    var ngaygioGiao = new Date(val.NgayGioGiaoComplete);
                    var hieuorder = ((ngaygioGiaoXongDate - ngaygioBayTT) / 3600000);
                    var hieudtgiaobayttdt = (ngaygioGiao - ngaygioBayTT) / 3600000;

                    if (fncDiff2Hour(val.NgayGioYeuCauTraHangComplete, val.NgayGioGiaoComplete) > 0) {
                        tomaucotorderDTComplete = "classtomauCompletetest-pink";
                    }

                    if (hieuorder > 24) {
                        tomaucotngaygiogiaoxongComplete = "classtomauCompletetest-pink";
                    }

                    if (hieudtgiaobayttdt <= 11) {
                        tomaucotorderDTComplete = "classtomauCompletetest-xanh";
                    }

                    var textHQGS = "";
                    var colorHQGS = "";
                    if (val.DVHQ_NBA == "True") {
                        colorHQGS = "classHQGS";
                        textHQGS = "</br>" + "<span  class=\"" + colorHQGS + "\">HQGS tại NBA</span>";
                    }

                    var textPhatDO = "";
                    var colorHQGS = "";
                    if (val.DO == "True") {
                        colorHQGS = "classHQGS";
                        textPhatDO = "</br>" + "<span  class=\"" + colorHQGS + "\">Phát DO tại NBA</span>";
                    }

                    tomauWH = "";
                    if (val.MaKho == "") {
                        tomauWH = "tomauWH";
                    }

                    var textGetOut = "";
                    if (val.GetOutAlsc == "True") {
                        textGetOut = '<span class=\"colorText\">Get out</span>';
                    }
                    var tomauMAWBHAWB = "";
                    if (val.MaKho == "ALSC" && val.GetOutAlsc != "True") {
                        tomauMAWBHAWB = "backgroupRed";
                    }

                    if (val.MawbComplete == val.HawbComplete) {
                        textGetOut = '<span class=\"colorText\">Get out</span>';
                        tomauMAWBHAWB = "";
                    }

                    html_Complete += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.MaDonViNhanComplete.replace(".", "-") + " tr-makho-" + val.MaKho + " tr-hqgs-" + val.DVHQ_NBA + " tr-do-" + val.DO + "\">";
                    html_Complete += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_Complete += "<td class=\"td-img\" attrMAWB=\"" + val.MawbComplete + "\"  attrHAWB=\"" + val.HawbComplete + "\" attrSoKien=\"" + val.SoKienThucComplete + "\">" + "<img src=\"images/COMPLETE.png\"  /> </br>" + textGetOut + "" + "</td>";
                    html_Complete += "<td class=\"td-mawb " + tomauMAWBHAWB + " font-weight-css\" attrMAWB=\"" + val.MawbComplete + "\" attrHAWB=\"" + val.HawbComplete + "\">" + val.MawbComplete + textPhatDO + "</td >";
                    html_Complete += "<td class=\"td-hawb " + tomauMAWBHAWB + " font-weight-css  " + tomauWH + "\">" + val.HawbComplete + textHQGS + "</td>";
                    html_Complete += "<td class=\"td-pcs\">" + val.SoKienThucComplete + "</td>";
                    html_Complete += "<td class=\"td-cm\">" + val.SoCanThucComplete + "</td>";
                    html_Complete += "<td class=\"td-cm\">" + val.CW + "</td>";
                    html_Complete += "<td class=\"td-flt\">" + val.ChuyenBayTTComplete + "</td>";
                    html_Complete += "<td class=\"td-date ngaybaytt\">" + convertDate(val.NgayGioBayTTComplete)[1] + "</td>";
                    html_Complete += "<td class=\"td-time giobaytt\">" + (convertDate(val.NgayGioBayTTComplete)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTTComplete)[3]) + "</td>";
                    html_Complete += "<td class=\"td-date ngayyctrahang " + tomaucotorderDTComplete + "\">" + convertDate(val.NgayGioYeuCauTraHangComplete)[1] + "</td>";
                    html_Complete += "<td class=\"td-time gioyctrahang " + tomaucotorderDTComplete + "\">" + (convertDate(val.NgayGioYeuCauTraHangComplete)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangComplete)[3]) + "</td>";
                    html_Complete += "<td class=\"td-date font-weight-css ngaygiaoxong " + tomaucotngaygiogiaoxongComplete + "\">" + convertDate(val.NgayGioGiaoXongComplete)[1] + "</td>";
                    html_Complete += "<td class=\"td-time font-weight-css giogiaoxong " + tomaucotngaygiogiaoxongComplete + " \">" + (convertDate(val.NgayGioGiaoXongComplete)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoXongComplete)[3]) + "</td>";
                    html_Complete += "<td class=\"td-truckID\">" + val.BKSXeGiaoComplete + "</td>";
                    html_Complete += "<td class=\"td-code\">" + val.CodeComplete + "</td>";
                    html_Complete += "<td class=\"td-fwd\">" + val.MaDonViNhanComplete + "</td>";
                    html_Complete += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    html_Complete += "<td>" + val.TinhTrangTB + "</td>";
                    html_Complete += "<td>" + val.Invoice + "</td>";
                    html_Complete += "<td>" + val.GhiChuComplete + "</td>";
                    html_Complete += "<td>" + val.CNEEMAWB + "</td>";
                    //html_Complete += "<td class=\"td-time font-weight-css statdate\">" + convertDate(val.NgayGioGiaoComplete)[1] + "</td>";
                    //html_Complete += "<td class=\"td-time font-weight-css stattime\">" + (convertDate(val.NgayGioGiaoComplete)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoComplete)[3]) + "</td>";
                    html_Complete += "</tr>";
                });

                $("#tbl_Complete tbody").append(html_Complete);

                //$('.statdate').remove();
                //$('.stattime').remove();
            }
            $("#div-checkbox").empty();
            var html_DanhSachFWDS = "";
            html_DanhSachFWDS += "<label class=\"checkbox-inline  lable-title\">FWD: </label>";
            html_DanhSachFWDS += "<label class=\"checkbox-inline color-white\"><input type=\"checkbox\" class=\"cb-qll cb-qll-child\" checked id=\"cb-ALL\" value=\"ALL\" />" + "ALL" + "</label>";
            var count = 0;
            $.each(d.danhSachFWDs, function (item, val) {
                if (count == 0) {
                    if (val.fwd == "GTT" || val.fwd == "GTV" || val.fwd == "GTE" || val.fwd == "GTS") {
                        html_DanhSachFWDS += "<label class=\"checkbox-inline color-white\"><input type=\"checkbox\" class=\"cb-qll cb-qll-child\" checked id=\"cb-GTT\" value=\"GTT\" />GTT</label>";
                        count++;
                    } else {
                        html_DanhSachFWDS += "<label class=\"checkbox-inline color-white\"><input type=\"checkbox\" class=\"cb-qll cb-qll-child\" checked id=\"cb-" + val.fwd.replace(".", "-") + "\" value=\"" + val.fwd.replace(".", "-") + "\" />" + val.fwd + "</label>";
                    }
                } else {
                    if (val.fwd != "GTT" && val.fwd != "GTV" && val.fwd != "GTE" && val.fwd != "GTS") {
                        html_DanhSachFWDS += "<label class=\"checkbox-inline color-white\"><input type=\"checkbox\" class=\"cb-qll cb-qll-child\" checked id=\"cb-" + val.fwd.replace(".", "-") + "\" value=\"" + val.fwd.replace(".", "-") + "\" />" + val.fwd + "</label>";
                    }

                }
            })
            $("#div-checkbox").append(html_DanhSachFWDS);

        },
        error: function (errormessage) {
            console.log("Lỗi : " + errormessage.responseText);
        }
    });

    $.ajax({
        type: "POST",
        url: "QuanLyHangNhap.aspx/listThongKeHangNhap",
        contentType: "application/json;charsert=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            $.each(d.Arrivals, function (item, val) {
                $("#shptArrival").text(val.ShptArrival);
                $("#PcsArrival").text(val.PcsArrival);
                $("#KgsArrival").text(val.KgsArrival);
            });

            $.each(d.Plan, function (item, val) {
                $("#shptPlan").text(val.ShptPlan);
                $("#PcsPlan").text(val.PcsPlan);
                $("#KgsPlan").text(val.KgsPlan);
            });

            $.each(d.PlanToDay, function (item, val) {
                $("#shptPlanToDay").text(val.ShptPlanToDay);
                $("#PcsPlanToDay").text(val.PcsPlanToDay);
                $("#KgsPlanToDay").text(val.KgsPlanToDay);
            });

            $.each(d.Alse, function (item, val) {
                $("#shptAlse").text(val.ShptAlse);
                $("#PcsAlse").text(val.PcsAlse);
                $("#KgsAlse").text(val.KgsAlse);
            });

            $.each(d.Clear, function (item, val) {
                $("#shptClear").text(val.ShptClear);
                $("#PcsClear").text(val.PcsClear);
                $("#KgsClear").text(val.KgsClear);
            });

            $.each(d.Delivering, function (item, val) {
                $("#shptDelivering").text(val.ShptDelivering);
                $("#PcsDelivering").text(val.PcsDelivering);
                $("#KgsDelivering").text(val.KgsDelivering);
            });

            $.each(d.AlseYDayIn, function (item, val) {
                $("#shptAlseYDayIn").text(val.ShptAlseYDayIn);
                $("#PcsAlseYDayIn").text(val.PcsAlseYDayIn);
                $("#KgsAlseYDayIn").text(val.KgsAlseYDayIn);
            });
            $.each(d.AlseToDayIn, function (item, val) {
                $("#shptAlseToDayIn").text(val.ShptAlseToDayIn);
                $("#PcsAlseToDayIn").text(val.PcsAlseToDayIn);
                $("#KgsAlseToDayIn").text(val.KgsAlseToDayIn);
            });

            $.each(d.AlseYDayOut, function (item, val) {
                $("#shptAlseYDayOut").text(val.ShptAlseYDayOut);
                $("#PcsAlseYDayOut").text(val.PcsAlseYDayOut);
                $("#KgsAlseYDayOut").text(val.KgsAlseYDayOut);
            });

            $.each(d.AlseToDayOut, function (item, val) {
                $("#shptAlseToDayOut").text(val.ShptAlseToDayOut);
                $("#PcsAlseToDayOut").text(val.PcsAlseToDayOut);
                $("#KgsAlseToDayOut").text(val.KgsAlseToDayOut);
            });


        },
        error: function (errormessage) {
            console.log("Lỗi : " + errormessage.responseText);
        }
    });

    jsonYNghiaTrangThai = {
        "sotrangthai": 9,
        "trangthai1": {
            "tentrangthai": "ARRIVAL NOTICE",
            "anh": "images/mail_web.png",
            "ynghia": "Hiển thị những lô hàng được thông báo hàng đến và xa với kế hoạch lấy hàng.",
            "dieukien": "Những lô hàng mà có giờ hạ cánh sau 14h ngày hôm nay.\nHoặc những lô có Ngày giờ giao hàng trong khoảng trước ngày hiện tại hoặc  trước khi đến ngày hiện tại hơn 24h."
        },
        "trangthai2": {
            "tentrangthai": "DELIVERY PLAN",
            "anh": "images/DELIVERY PLAN.png",
            "ynghia": "Hiển thị những lô hàng được thông báo hàng đến và có kế hoạch lấy hàng để trả hàng kịp thời.",
            "dieukien": "Những lô hàng mà có giờ hạ cánh trước 14h ngày hôm nay.\nHoặc những lô có Ngày giờ giao hàng trong khoảng sau ngày hiện tại hoặc trước khi đến ngày hiện tại dưới 24h."
        },
        "trangthai3": {
            "tentrangthai": "CARGO READY",
            "anh": "images/CARGO_READY.png",
            "ynghia": "Hiển thị những lô hàng đã về đến Nội bài và kho hàng Nội bài đã khai thác hàng hóa xong.",
            "dieukien": "Những lô hàng đã về đến Nội bài và kho hàng đã truyển DSVCMĐ( bill) về.."
        },
        "trangthai4": {
            "tentrangthai": "LOADING ON TRUCK",
            "anh": "images/truck.png",
            //"ynghia": "Hiển thị những lô hàng đang tạo truyền ds VCMĐ (bill) + Mở TK OLA.",
            "ynghia": "Hiển thị những lô hàng đang ghép vào chuyến xe để khai TK OLA.",
            //"dieukien": "Những lô hàng mà đang thực hiện (truyền DSVC MĐ và truyền TK OLA).\nVà có ngày giờ xe Về VSIP trước giờ thực tế."
            "dieukien": "Những lô hàng mà được ghép vào chuyến xe và thực hiện khai báo  TK OLA. "
        },
        "trangthai5": {
            "tentrangthai": "TRUCK TO ALSE",
            "anh": "images/TRUCKING ALSE.png",
            "ynghia": "Hiển thị những lô hàng đang trên đường vận chuyển về tới kho ALSE.",
            //"dieukien": "Những lô hàng mà đang thực hiện (truyền DSVC MĐ và truyền TK OLA).\nVà có ngày giờ xe Về VSIP sau giờ thực tế."
            "dieukien": "Những lô hàng được Duyệt thông tin xe bắt đầu xuất phát từ Nội bài.Và có ngày giờ xe về VSIP trước giờ thực tế."
        },
        "trangthai6": {
            "tentrangthai": "ALSE WAREHOUSE",
            "anh": "images/alsewh.png",
            "ynghia": "Hiển thị những lô hàng đã được chuyển về tới kho ALSE và được khai thác xong.",
            "dieukien": "Những lô hàng mà đã được Duyệt chuyến xe về."
        },
        "trangthai7": {
            "tentrangthai": "CUSTOM CLEARANCE",
            "anh": "images/hoanthanhhaiquan.png",
            "ynghia": "Hiển thị những lô hàng đã được thông quan và qua khu vực giám sát.",
            "dieukien": "Những lô hàng mà đã được Duyệt PXK."
        },
        "trangthai8": {
            "tentrangthai": "DELIVERING",
            "anh": "images/DELYVERING.png",
            "ynghia": "Hiển thị những lô hàng đang thực hiện giao hàng.",
            "dieukien": "Những lô hàng mà đã được Duyệt PXK và tạo Phiếu Giao hàng."
        },
        "trangthai9": {
            "tentrangthai": "COMPLETE",
            "anh": "images/COMPLETE.png",
            "ynghia": "Hiển thị những lô hàng đã được giao xong.",
            "dieukien": "Những lô hàng mà đã được duyệt Phiếu Giao hàng."
        }
    };
    // console.log(jsonYNghiaTrangThai);

    // Load kiểm tồn

    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyHangNhap.aspx/loadKiemTon",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var html_filedinhkem = "";
            //console.log(d);
            var html_KiemTon = "";
            html_KiemTon += "<p><a href=\"DNNCHECK.aspx?Tab=KiemTonHangNhap\" target=\"_blank\">" + "Chưa kiểm tồn:  " + d + "</a><p>";
            $("#div-kiemton").empty();
            $("#div-kiemton").append(html_KiemTon);

        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })

}

function fncClick() {
    //In lưu kho
    $("#btn-kiemton").click(function () {
        var ajaxGet = { "get": "" };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyHangNhap.aspx/reLuuKho",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            //timeout: 120000,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                var html_print = "";

                $.each(d, function (key, val) {
                    html_print += "<tr>";
                    html_print += "<td>" + (key + 1) + "</td>";
                    html_print += "<td>" + val.MAWB + "</td>";
                    html_print += "<td>" + val.HAWB + "</td>";
                    html_print += "<td>" + val.SoKienTB + "</td>";
                    html_print += "<td>" + val.GM + "</td>";
                    html_print += "<td>" + val.FWD + "</td>";
                    html_print += "</tr>";
                });

                $("#main-luukho-table tbody").empty().append(html_print);
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });

        window.print();
    });
    // tài file báo cáo hải quan
    $("#btn-BaoCaoHQ").click(function () {
        var g_tungay = dmy2ymd($("#input-tungayBaoCaoHQ").val());
        var g_denngay = dmy2ymd($("#input-denngayBaoCaoHQ").val());
        var g_tenfile = "BaoCaoHQ_" + convertDate($("#input-tungayBaoCaoHQ").datepicker("getDate"))[8] + "_" + convertDate($("#input-denngayBaoCaoHQ").datepicker("getDate"))[8] + " ";
        var ajaxGet5 = { "get1": g_tungay, "get2": g_denngay, "get3": g_tenfile, "get4": $("#input-tungayBaoCaoHQ").val(), "get5": $("#input-denngayBaoCaoHQ").val() };
        jsonData = JSON.stringify({ ajaxGet5 });
        $.ajax({
            type: "POST",
            url: "QuanLyHangNhap.aspx/HaiQuan_Report",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            //timeout: 120000,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                window.open("../DownloadFile.aspx?Root=Other&Folder=BAOCAO&FileName=" + g_tenfile + ".xlsx");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
    });

    // Hiển thị popup báo cáo HQ
    $("#btn-baocaoHQ").click(function () {
        $("#modalBaoCaoHQ").modal("show");
    })

    // Hiển thị điện XNL
    $("#btn-guiXML").click(function () {
        ajaxGet = { "get": "" };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyHangNhap.aspx/reDienXML",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d)
                var html_xml = "";
                var html_check = "";
                $.each(d, function (key, val) {
                    html_xml += "<tr>";
                    html_xml += "<td>" + (key + 1) + "</td>";
                    html_xml += "<td>" + val.MAWB + "</td>";
                    html_xml += "<td>" + val.HAWB + "</td>";
                    html_xml += "<td>" + val.TieuDe + "</td>";
                    html_xml += "<td>" + convertDate(val.NgayCapNhat)[1] + "</td>";
                    html_xml += "<td>" + (val.DaGui == "True" ? "<span class=\"daguixml\">Đã gửi</span>" : "<span class=\"chuaguixml\">Chưa gửi</span>") + "</td>";
                    html_xml += "</tr>";
                });
                $("#tbl-dienXML tbody").empty().append(html_xml);
                $('#tbl-dienXML').DataTable({
                    "destroy": true,
                });
            },
            error: function (responsive) {
                alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
            }
        }).done(function () {
            //$("#div-wait").hide();
        })

        $("#modalShowXML").modal("show");

    });
    // Click td-img show danh sách mawb, hawb , pcs 
    $(".container").on("dblclick", '.td-img', function () {
        var _Mawb = $(this).attr("attrmawb");
        var _HAWB = $(this).attr("attrhawb");
        var _PCS = $(this).attr("attrsokien");

        $(".information-mawb").empty().append("MAWB: " + _Mawb);
        $(".information-hawb").empty().append("HAWB:  " + _HAWB);
        $(".information-pcs").empty().append("PCS: " + _PCS);
        $("#qrcode").empty();
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            width: 150,
            height: 150
        });
        qrcode.makeCode(_Mawb + "  " + _HAWB + " " + _PCS);

        setTimeout(function () {
            window.print();
            window.close();
        }, 250);
    });

    // Click hawb show danh sách mawb, hawb , pcs , gw
    $(".container").on("click", '.td-hawb', function () {

    })

    // Tải xuống ảnh 
    $("#modalShowImg").on("click", "#a-dinhkem-taixuong", function () {
        window.open("../DownloadFile.aspx?Root=HoaDonNhap&Folder=" + $(this).closest("tr").attr("folder") + "&FileName=" + $(this).closest("tr").attr("filename"));
    })

    // Click MAWB show images
    $(".container").on("click", '.td-mawb', function () {
        var _Mawb = $(this).attr("attrMAWB");
        var _Hawb = $(this).attr("attrHawb");
        $("#modalShowImg").modal("show");
        $("#table-filedinhkem tbody").empty();
        $("#div-filedinhkem-list").append("<tr id=\"tr-filedinhkem-loading\"><td colspan=\"6\"> <img alt=\"\" src=\"images/squares.gif\" id=\"img-checklist-box-loading\"/></td> </tr>");

        ajaxGet = { "get": _Mawb };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyHangNhap.aspx/reFileDinhKemDGR",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                var html_filedinhkem = "";
                console.log(d);
                $.each(d, function (item, val) {
                    html_filedinhkem += "<tr filename=\"" + val.filename + "\" folder=\"" + _Mawb + "\">";
                    html_filedinhkem += "<td>" + (item + 1) + "</td>";
                    html_filedinhkem += "<td>" + "" + "</td>";
                    html_filedinhkem += "<td>" + fncConvertOverSizeText(val.filename) + "</td>";
                    html_filedinhkem += "<td>" + fncConvertSize(val.filesize) + "</td>";
                    html_filedinhkem += "<td>" + "<a class=\"label label-info\" id=\"a-dinhkem-xem\">Xem</a>" + "</td>";
                    html_filedinhkem += "<td>" + "<a class=\"label label-info\" id=\"a-dinhkem-taixuong\">Tải xuống</a>" + "</td>";
                    html_filedinhkem += "</tr>";
                })

                setTimeout(function () {
                    $("#tr-filedinhkem-loading").remove();

                    $("#table-filedinhkem tbody").append(html_filedinhkem);
                    $("#myModalLabelActivity").append("<span> (Có " + d.length + " file đính kèm)</span>")
                }, 400);
            },
            error: function (responsive) {
                alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
            }
        }).done(function () {
            //$("#div-wait").hide();
        })
    });

    // Kết xuất excel HQGS
    $("#btn-XuatHQGS").click(function () {

    });

    $("#btn-LocHQGS").click(function () {
        var g_tungay = dmy2ymd($("#input-tungaylocHQGS").val());
        var g_denngay = dmy2ymd($("#input-denngaylocHQGS").val());

        console.log(g_tungay + " " + g_denngay);

        ajaxGet2 = { "get1": g_tungay, "get2": g_denngay };
        var jsonData = JSON.stringify({ ajaxGet2 });
        //console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyHangNhap.aspx/reHQGS",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                var html_HQGS = "";
                $.each(d, function (key, val) {
                    html_HQGS += "<tr>";
                    html_HQGS += "<td>" + val.FWDs + "</td>";
                    html_HQGS += "<td>" + val.HAWB + "</td>";
                    html_HQGS += "</tr>";
                });
                $("#tbl-HQGS tbody").empty().append(html_HQGS);
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })

    });
    // Click show HQGS
    $("#btn-HQGS").click(function () {
        $("#modalHQGS").modal("show");

    });

    //Send Mail
    $("#btn-sendMail").click(function () {
        var conf = confirm("Bạn có muốn gửi mail tự động không?")
        if (conf) {
            ajaxGet = { "get": "" };
            var jsonData = JSON.stringify({ ajaxGet });
            //console.log(jsonData);
            $.ajax({
                type: "POST",
                url: "QuanLyHangNhap.aspx/SendEmailGTTvsGTV",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    console.log(d);
                    if (d == "ok") {
                        alert("Bạn đã gửi mail thành công!");
                    }
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
            })
        } else {
        }
    });
    //End send mail
    // Lưu câp nhật giao hàng
    $("#btn-capnhatgiaohang-luu").click(function () {
        var arrInvoice = [];
        var arrInvoiceKH = [];
        // Trả về số Invoice 
        ajaxGet = { "get": "" };
        var jsonData = JSON.stringify({ ajaxGet });
        //console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyHangNhap.aspx/reInvoive",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                $.each(d, function (key, val) {
                    arrInvoice.push(val.Invoice);
                })
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })

        // Trả về số Invoice kế hoạch
        ajaxGet = { "get": "" };
        var jsonData = JSON.stringify({ ajaxGet });
        //console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyHangNhap.aspx/reInvoiveKH",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                $.each(d, function (key, val) {
                    arrInvoiceKH.push(val.Invoice);
                })
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })
        //console.log(arrInvoiceKH);
        var spreadsheet = $("#spreadsheetGiaoHang").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var DataInput = [];
        var cells;
        var cell_Sokien = "";
        var cell_Invoice = "";
        var cell_Ngaygiao = "";
        var cell_Giogiao = "";
        var cell_Diachigiao = "";
        var cell_Nguoinhanhang = "";
        var cell_Sodienthoai = "";
        var cell_Mancc = "";
        var cell_Remark = "";

        var DataInputInsert = [];
        var DataInputUpdate = [];

        //console.log(data);
        data.forEach(function (dataItem, dataIndex) {
            cell_Sokien = "";
            cell_Invoice = "";
            cell_Ngaygiao = "";
            cell_Giogiao = "";
            cell_Diachigiao = "";
            cell_Nguoinhanhang = "";
            cell_Sodienthoai = "";
            cell_Mancc = "";
            cell_Remark = "";
            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Sokien = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Invoice = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Ngaygiao = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                                cell_Giogiao = Decimal2Time(cells[cellIndex].value * 24);
                            }
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Diachigiao = cells[cellIndex].value;
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Nguoinhanhang = cells[cellIndex].value;
                        }
                        break;
                    case 6:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Sodienthoai = cells[cellIndex].value;
                        }
                        break;
                    case 7:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Mancc = cells[cellIndex].value;
                        }
                        break;
                    case 8:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Remark = cells[cellIndex].value;
                        }
                        break;
                }
            })

            if (arrInvoice.indexOf(cell_Invoice.toString()) >= 0) {
                var conf = confirm("Số INVOICE " + cell_Invoice + " đã được cập nhật bạn có muốn thay hay nhập thêm?");
                if (conf) {
                    DataInputUpdate.push(
                        {
                            "ID": ""
                            , "SoKien": cell_Sokien
                            , "INVOICE": cell_Invoice
                            , "NgayGioGiao": String(cell_Ngaygiao).trim().replace(/ /g, '') + " " + String(cell_Giogiao).trim().replace(/ /g, '')
                            , "DiaChiGiaoHang": cell_Diachigiao
                            , "NguoiNhanHang": cell_Nguoinhanhang
                            , "SoDienThoaiNguoiNhan": cell_Sodienthoai
                            , "SoBU": cell_Mancc
                            , "REMARK": cell_Remark
                            , "HienThi": ""
                            , "NguoiTao": ""
                            , "NgayTao": ""
                            , "NguoiSua": ""
                            , "NgaySua": ""
                        });
                } else {
                    DataInputInsert.push(
                        {
                            "ID": ""
                            , "SoKien": cell_Sokien
                            , "INVOICE": cell_Invoice
                            , "NgayGioGiao": String(cell_Ngaygiao).trim().replace(/ /g, '') + " " + String(cell_Giogiao).trim().replace(/ /g, '')
                            , "DiaChiGiaoHang": cell_Diachigiao
                            , "NguoiNhanHang": cell_Nguoinhanhang
                            , "SoDienThoaiNguoiNhan": cell_Sodienthoai
                            , "SoBU": cell_Mancc
                            , "REMARK": cell_Remark
                            , "HienThi": ""
                            , "NguoiTao": ""
                            , "NgayTao": ""
                            , "NguoiSua": ""
                            , "NgaySua": ""
                        });
                }
            } else {
                if (arrInvoiceKH.indexOf(cell_Invoice.toString()) == -1) {
                    alert("Số INV " + cell_Invoice + " này không cập nhật được do không khớp với Kế hoạch khách hàng. Đề nghị bạn kiểm tra lại.");
                } else {
                    DataInputInsert.push(
                        {
                            "ID": ""
                            , "SoKien": String(cell_Sokien).trim().replace(/ /g, '')
                            , "INVOICE": cell_Invoice
                            , "NgayGioGiao": String(cell_Ngaygiao).trim().replace(/ /g, '') + " " + String(cell_Giogiao).trim().replace(/ /g, '')
                            , "DiaChiGiaoHang": cell_Diachigiao
                            , "NguoiNhanHang": cell_Nguoinhanhang
                            , "SoDienThoaiNguoiNhan": cell_Sodienthoai
                            , "SoBU": cell_Mancc
                            , "REMARK": cell_Remark
                            , "HienThi": ""
                            , "NguoiTao": ""
                            , "NgayTao": ""
                            , "NguoiSua": ""
                            , "NgaySua": ""
                        });
                }
            }
        });

        //console.log(DataInputUpdate);
        //console.log(DataInputInsert);

        ////console.log(DataInput);
        var jsonData = JSON.stringify({ DataInputInsert });
        //$("#div-wait").show();
        $.ajax({
            type: "POST",
            url: "QuanLyHangNhap.aspx/InsertUpdateGiaoHang",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })


        ////console.log(DataInput);
        var jsonData = JSON.stringify({ DataInputUpdate });
        //$("#div-wait").show();
        $.ajax({
            type: "POST",
            url: "QuanLyHangNhap.aspx/InsertUpdateGiaoHang1",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;

            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })

        Swal.fire({
            title: "Thêm danh sách hàng thành công!",
            text: "Hệ thống sẽ tự tải lại sau 2s",
            type: 'success',
            timer: 2000,
        })
        $("#modalCapNhatGiaoHang").modal("hide");
    });

    // Cập nhật giao hàng
    $("#btn-capnhatgiaohang").click(function () {
        $("#modalCapNhatGiaoHang").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheetGiaoHang").empty();
        $("#spreadsheetGiaoHang").kendoSpreadsheet({
            columns: 10,
            rows: 50,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheetGiaoHang").data("kendoSpreadsheet");
        var sheet = spreadsheet.activeSheet();
        sheet.range(kendo.spreadsheet.SHEETREF).clear();
        $(window).trigger("resize");
        spreadsheet.fromJSON({
            sheets: [{
                name: "KeHoach",
                //mergedCells: [
                //    "A1:G1"
                //],
                rows: [{
                    height: 40,
                    cells: [
                        { value: "Số kiện", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "INVOICE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Ngày giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Giờ giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Địa chỉ giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Người nhận hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số điện thoại", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "BU", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Remark", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// Số kiện
                        width: 150
                    },
                    {// Invoice
                        width: 150
                    },
                    {// Ngày giao hàng
                        width: 150
                    },
                    {// giờ giao hàng
                        width: 150
                    },
                    {// địa chỉ giao hàng
                        width: 150
                    },
                    {// Người nhận hàng
                        width: 150
                    }
                    ,
                    {// Số điện thoại
                        width: 150
                    }
                    ,
                    {// Mã NCC
                        width: 150
                    }
                    ,
                    {// Remark
                        width: 150
                    }
                ]
            }]
        });
    });
    // Hiển thị POD
    $("#btn-showPOD").click(function () {
        window.location = "PODView.aspx"
    });
    // Hiển thị GTK
    $("#btn-showGTK").click(function () {
        $("#modalShowGTK").modal("show");
        LoadTableGTTvsGTV("", "");
    });
    // Hiển thị GTK Lọc
    $("#modalShowGTK").on("click", "#btn-Loc", function () {
        var _tungay = dmy2ymd($("#input-tungayloc").val());
        var _denngay = dmy2ymd($("#input-denngayloc").val());
        LoadTableGTTvsGTV(_tungay, _denngay);
    })
    // Cập nhật ngày giờ kế hoạch giao hàng
    $("#modalShowGTK").on("click", ".td-invoice", function () {
        $("#input-ngaygiao").val(moment().format("DD/MM/YYYY"));
        $("#input-giogiao").val(moment().format("hh:mm"));
        var attrID = $(this).attr("attrId");
        var attrInvoice = $(this).attr("attrInvoice");
        $("#btnCapNhatNgayGio").attr("attrInv", attrInvoice);
        if (attrID == "") {
            alert("Chưa cập nhật thông tin giao hàng lô hàng này vui lòng kiểm tra lại!");

        } else {

            var ajaxGet = { "get": attrInvoice };
            jsonData = JSON.stringify({ ajaxGet });
            $.ajax({
                type: "POST",
                url: "QuanLyHangNhap.aspx/reInvoiceByInvoice",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;

                    $.each(function (key, val) {
                        $("#input-ngaygiao").val(convertDate(val.NgayGioGiao)[1]);
                        $("#input-giogiao").val(convertDate(val.NgayGioGiao)[3]);
                        $("#input-nguoinhanhang").val(val.NguoiNhanHang);
                        $("#input-diachigiaohang").val(val.DiaChiGiaoHang);
                        $("#input-sodienthoai").val(val.SoDienThoaiNguoiNhan);
                        $("#input-bu").val(val.SoBU);
                    });
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
            })

            $("#exampleModal").modal("show");
            $("#exampleModalLabel").empty().append("Cập nhật ngày giờ giao hàng có số INVOICE: " + attrInvoice + "");


        }
    });
    $("#btnCapNhatNgayGio").click(function () {
        var attrInv = $(this).attr("attrInv");
        var ngaygiao = dmy2ymd($("#input-ngaygiao").val());
        var giogiao = $("#input-giogiao").val();
        var ngaygiogiao = ngaygiao + " " + giogiao;
        var nguoinhanhang = $("#input-nguoinhanhang").val();
        var diachigiao = $("#input-diachigiaohang").val();
        var sodienthoai = $("#input-sodienthoai").val();
        var bu = $("#input-bu").val();
        var ajaxGet6 = { "get1": attrInv, "get2": ngaygiogiao, "get3": nguoinhanhang, "get4": diachigiao, "get5": sodienthoai, "get6": bu };
        jsonData = JSON.stringify({ ajaxGet6 });
        $.ajax({
            type: "POST",
            url: "QuanLyHangNhap.aspx/CapNhatNgaygGioKeHoach",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                if (d == "ok") {
                    $("#exampleModal").modal("hide");
                    alert("Cập nhật thành công!");
                }

            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })
    });

    //----------------------------
    $("#btn-ynghiatrangthai").click(function () {
        $("#h4-thanhtoan-view-tieude").text("Ý NGHĨA TRẠNG THÁI");
        $("#tbl-help thead").empty();
        $("#tbl-help tbody").empty();
        html_help_thead = "";
        html_help_tbody = "";
        html_help_thead += "<tr>";
        html_help_thead += "<td>" + "STT" + "</td>";
        html_help_thead += "<td>" + "Trạng thái" + "</td>";
        html_help_thead += "<td>" + "Ý nghĩa trạng thái" + "</td>";
        html_help_thead += "<td>" + "Điều kiện" + "</td>";
        html_help_thead += "</tr>";
        for (var i = 1; i <= jsonYNghiaTrangThai.sotrangthai; i++) {
            html_help_tbody += "<tr>";
            html_help_tbody += "<td>" + i + "</td>";
            html_help_tbody += "<td class=\"text-align-left td-img\">" + "<img src=\"" + jsonYNghiaTrangThai["trangthai" + i].anh + "\"  />" + "</td>"; //+ jsonYNghiaTrangThai["trangthai" + i].tentrangthai 
            html_help_tbody += "<td class=\"text-align-left\">" + jsonYNghiaTrangThai["trangthai" + i].ynghia + "</td>";
            html_help_tbody += "<td class=\"text-align-left\">" + jsonYNghiaTrangThai["trangthai" + i].dieukien + "</td>";
            html_help_tbody += "</tr>";
        }
        $("#tbl-help thead").append(html_help_thead);
        $("#tbl-help tbody").append(html_help_tbody);
        $("#myModalViewHelp").modal("show");
    })
    $("#btn-ynghiacanhbaomau").click(function () {
        $("#h4-thanhtoan-view-tieude").text("Ý NGHĨA TRẠNG THÁI");
        $("#tbl-help thead").empty();
        $("#tbl-help tbody").empty();
        html_help_thead = "";
        html_help_tbody = "";
        html_help_thead += "<tr>";
        html_help_thead += "<td>" + "" + "</td>";
        html_help_thead += "<td>" + "" + "</td>";
        html_help_thead += "<td>" + "" + "</td>";
        html_help_thead += "<td>" + "" + "</td>";
        html_help_thead += "</tr>";
        for (trangthai in jsonYNghiaTrangThai) {
            html_help_tbody += "<tr>";
            html_help_tbody += "<td>" + "" + "</td>";
            html_help_tbody += "<td>" + "" + "</td>";
            html_help_tbody += "<td>" + "" + "</td>";
            html_help_tbody += "<td>" + "" + "</td>";
            html_help_tbody += "</tr>";
        }
        $("#myModalViewHelp").modal("show");
    })
}


function fncChanges() {
    //$(".cb-hq").change(function () {
    //    var cb_value = $(this).val();
    //    //alert(cb_value);
    //    if (cb_value == "ALL") {
    //        if (this.checked) {
    //            $(".tr-makho-view").show();
    //            $(".cb-hq-child").prop("checked", true);
    //        } else {
    //            $(".tr-makho-view").hide();
    //            $(".cb-hq-child").prop("checked", false);
    //        }
    //    } else {
    //        if (cb_value == "HQGS") {
    //            if (this.checked) {
    //                $(".tr-hqgs-True").show();

    //                $(".hide-show-table").each(function () {
    //                    if ($(this).find("tbody tr[style=\"display: none;\"]").length != $(this).find("tbody tr").length) {
    //                        $(this).find("thead").show();
    //                    }
    //                })

    //            } else {
    //                $(".tr-hqgs-True").hide();
    //                // toannh
    //                $(".hide-show-table").each(function () {
    //                    if ($(this).find("tbody tr[style=\"display: none;\"]").length == $(this).find("tbody tr").length) {
    //                        $(this).find("thead").hide();
    //                    }
    //                })
    //            }
    //        }

    //        if (cb_value == "DO") {
    //            if (this.checked) {
    //                $(".tr-do-True").show();

    //                $(".hide-show-table").each(function () {
    //                    if ($(this).find("tbody tr[style=\"display: none;\"]").length != $(this).find("tbody tr").length) {
    //                        $(this).find("thead").show();
    //                    }
    //                })

    //            } else {
    //                $(".tr-do-True").hide();
    //                // toannh
    //                $(".hide-show-table").each(function () {
    //                    if ($(this).find("tbody tr[style=\"display: none;\"]").length == $(this).find("tbody tr").length) {
    //                        $(this).find("thead").hide();
    //                    }
    //                })
    //            }
    //        }

    //    }

    //});
    //$("#select-hq").change(function () {
    //    var cb_value = $(this).val();
    //    //console.log(arrWH);
    //    if (cb_value == "ALL") {
    //        $(".tr-makho-view").show();
    //    } else {
    //        $(".tr-makho-view").hide();
    //        $(".tr-hqgs-True").show();

    //    }
    //});

    ////////////////////////////////////// checkbox
    $(".cb-qll").change(function () {
        var cb_value = $(this).val();

        if (cb_value == "ALL") {
            if (this.checked) {
                $(".tr-qll-view").show();
                $(".cb-qll-child").prop("checked", true);

                // show header
                $("#thead-ArrivalNotice").show();
                $("#thead-DelyvryPlan").show();
                $("#thead-TruckingAlse").show();
                $("#thead-AlseWarehouse").show();
                $("#thead-ClearCustom").show();
                $("#thead-Delyvering").show();
                $("#thead-Complete").show();
            } else {
                $(".tr-qll-view").hide();
                $(".cb-qll-child").prop("checked", false);

                $("#thead-ArrivalNotice").hide();
                $("#thead-DelyvryPlan").hide();
                $("#thead-TruckingAlse").hide();
                $("#thead-AlseWarehouse").hide();
                $("#thead-ClearCustom").hide();
                $("#thead-Delyvering").hide();
                $("#thead-Complete").hide();
            }
        } else {
            if (this.checked) {
                if (cb_value == "GTT") {
                    $(".tr-qll-fwd-GTT").show();
                    $(".tr-qll-fwd-GTE").show();
                    $(".tr-qll-fwd-GTS").show();
                    $(".tr-qll-fwd-GTV").show();
                } else {
                    $(".tr-qll-fwd-" + cb_value).show();
                    $(".hide-show-table").each(function () {
                        if ($(this).find("tbody tr[style=\"display: none;\"]").length != $(this).find("tbody tr").length) {
                            $(this).find("thead").show();
                        }
                    })
                }


            } else {
                if (cb_value == "GTT") {
                    $(".tr-qll-fwd-GTT").hide();
                    $(".tr-qll-fwd-GTE").hide();
                    $(".tr-qll-fwd-GTS").hide();
                    $(".tr-qll-fwd-GTV").hide();
                } else {
                    $(".tr-qll-fwd-" + cb_value).hide();
                    $(".hide-show-table").each(function () {
                        if ($(this).find("tbody tr[style=\"display: none;\"]").length == $(this).find("tbody tr").length) {
                            $(this).find("thead").hide();
                        }
                    })
                }

            }
        }
    })

    ////////////////////////////////////// \\checkbox
    ////////////////////////////////////// checkbox mã kho
    $(".cb-makho").change(function () {
        var cb_value = $(this).val();

        if (cb_value == "ALL") {
            if (this.checked) {
                $(".tr-makho-view").show();
                $(".cb-makho-child").prop("checked", true);

                // show header
                $("#thead-ArrivalNotice").show();
                $("#thead-DelyvryPlan").show();
                $("#thead-TruckingAlse").show();
                $("#thead-AlseWarehouse").show();
                $("#thead-ClearCustom").show();
                $("#thead-Delyvering").show();
                $("#thead-Complete").show();
            } else {
                $(".tr-makho-view").hide();
                $(".cb-makho-child").prop("checked", false);

                // show header
                $("#thead-ArrivalNotice").hide();
                $("#thead-DelyvryPlan").hide();
                $("#thead-TruckingAlse").hide();
                $("#thead-AlseWarehouse").hide();
                $("#thead-ClearCustom").hide();
                $("#thead-Delyvering").hide();
                $("#thead-Complete").hide();
            }
        } else {
            if (this.checked) {
                $(".tr-makho-" + cb_value).show();
                if (cb_value != "CPN") {
                    $(".tr-hqgs-True").hide();
                    $(".tr-do-True").hide();
                }


                $(".hide-show-table").each(function () {
                    if ($(this).find("tbody tr[style=\"display: none;\"]").length != $(this).find("tbody tr").length) {
                        $(this).find("thead").show();
                    }
                })

            } else {
                $(".tr-makho-" + cb_value).hide();
                // toannh
                $(".hide-show-table").each(function () {
                    if ($(this).find("tbody tr[style=\"display: none;\"]").length == $(this).find("tbody tr").length) {
                        $(this).find("thead").hide();
                    }
                })
            }
        }
    })
    ////////////////////////////////////// \\checkbox
}

function fncModalActions() {
    $('#modalCapNhatGiaoHang').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
        clearInterval(interval);
    });

    $('#modalCapNhatGiaoHang').on('hidden.bs.modal', function () {
        interval = setInterval(function () {
            var el = document.getElementById('countdown');
            if (seconds == 0) {
                if (minutes == 0) {
                    el.innerHTML = "Reloading...!";
                    clearInterval(interval);
                    location.reload();
                    //fncLoad();
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
            el.innerHTML = '<a href=\"#\" onclick=\"location.reload();return false;\">Refresh</a>: ' + minute_text + ' ' + seconds + ' ' + second_text;
            seconds--;
        }, 1000);
    });

    $('#modalShowGTK').on('shown.bs.modal', function () {
        clearInterval(interval);
    });

    $('#modalShowGTK').on('hidden.bs.modal', function () {
        interval = setInterval(function () {
            var el = document.getElementById('countdown');
            if (seconds == 0) {
                if (minutes == 0) {
                    el.innerHTML = "Reloading...!";
                    clearInterval(interval);
                    location.reload();
                    //fncLoad();
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
            el.innerHTML = '<a href=\"#\" onclick=\"location.reload();return false;\">Refresh</a>: ' + minute_text + ' ' + seconds + ' ' + second_text;
            seconds--;
        }, 1000);
    });
}

function LoadTableGTTvsGTV(tungay, denngay) {
    var ajaxGet2 = { "get1": tungay, "get2": denngay };
    jsonData = JSON.stringify({ ajaxGet2 });
    //$("#div-wait").show();
    $.ajax({
        type: "POST",
        url: "QuanLyHangNhap.aspx/rehangNhapGTKGTVs",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            var html_tbody = "";
            var html_thead = "";
            html_thead += "<tr>";
            html_thead += "<td>STT</td>";
            html_thead += "<td>STATUS</td>";
            html_thead += "<td>Invoice</td>";
            html_thead += "<td>HAWB</td>";
            html_thead += "<td>MAWB</td>";
            html_thead += "<td>SoKien</td>";
            html_thead += "<td>TrongLuong</td>";
            html_thead += "<td>Nhà cung cấp</td>";
            html_thead += "<td>Địa chỉ giao</td>";
            html_thead += "<td>Người nhận</td>";
            html_thead += "<td>Số ĐT</td>";
            html_thead += "<td>Ngày yc trả</td>";
            html_thead += "<td>Giờ yc trả</td>";
            html_thead += "<td>GhiChuHangTra</td>";
            html_thead += "<td>ChuyenBayTT</td>";
            html_thead += "<td>NgayBayTT</td>";
            html_thead += "<td>GioBayTT</td>";
            html_thead += "<td>FWDS</td>";
            html_thead += "<td>Ghi chú</td>";
            html_thead += "</tr>";
            $.each(d, function (key, val) {
                html_tbody += "<tr>";
                html_tbody += "<td>" + (key + 1) + "</td>";
                switch (val.TrangThai) {
                    case "ARRIVAL NOTICE":
                        //html_tbody += "<td class=\"td-img\">" + "<img src=\"images/mail_web.png\"  />" + "</td>";
                        html_tbody += "<td>ARRIVAL NOTICE</td>";
                        break;
                    case "DELIVERY PLAN":
                        //html_tbody += "<td class=\"td-img\">" + "<img src=\"images/DELIVERY PLAN.png\"  />" + "</td>";
                        html_tbody += "<td>DELIVERY PLAN</td>";
                        break;
                    case "LOADING ON TRUCK":
                        //html_tbody += "<td class=\"td-img\">" + "<img src=\"images/truck.png\"  />" + "</td>";
                        html_tbody += "<td>LOADING ON TRUCK</td>";
                        break;
                    case "TRUCKING ALSE":
                        //html_tbody += "<td class=\"td-img\">" + "<img src=\"images/TRUCKING ALSE.png\"  />" + "</td>";
                        html_tbody += "<td>TRUCKING ALSE</td>";
                        break;
                    case "ALSE WAREHOUSE":
                        //html_tbody += "<td class=\"td-img\">" + "<img src=\"images/alsewh.png\"  />" + "</td>";
                        html_tbody += "<td>ALSE WAREHOUSE</td>";
                        break;
                    case "CLEAR CUSTOM":
                        //html_tbody += "<td class=\"td-img\">" + "<img src=\"images/hoanthanhhaiquan.png\"  />" + "</td>";
                        html_tbody += "<td>CLEAR CUSTOM</td>";
                        break;
                    case "DELIVERING":
                        //html_tbody += "<td class=\"td-img\">" + "<img src=\"images/DELYVERING.png\"  />" + "</td>";
                        html_tbody += "<td>DELIVERING</td>";
                        break;
                    case "COMPLETE":
                        //html_tbody += "<td class=\"td-img\">" + "<img src=\"images/COMPLETE.png\"  />" + "</td>";
                        html_tbody += "<td>COMPLETE</td>";
                        break;
                    default:
                        html_tbody += "<td class=\"td-img\">" + "<img src=\"\"  />" + "</td>";
                        html_tbody += "<td></td>";
                }

                html_tbody += "<td class=\"textleft td-invoice\" attrInvoice=\"" + val.Invoice + "\"  attrId=\"" + val.ID + "\">" + val.Invoice + "</td>";
                html_tbody += "<td class=\"textleft\">" + val.HAWB + "</td>";
                html_tbody += "<td class=\"textleft\">" + val.MAWB + "</td>";
                html_tbody += "<td class=\"textleft\">" + val.SoKien + "</td>";
                html_tbody += "<td class=\"textleft\">" + val.TrongLuong + "</td>";
                html_tbody += "<td class=\"textleft\">" + val.NCC_update_tu_KH + "</td>";
                html_tbody += "<td class=\"textleft\">" + val.DiaChiGiaoHang + "</td>";
                html_tbody += "<td class=\"textleft\">" + val.NguoiNhan_update_tu_KH + "</td>";
                html_tbody += "<td class=\"textleft\">" + val.SoDTNguoiNhan_update_tu_KH + "</td>";
                html_tbody += "<td class=\"textleft\">" + convertDate(val.NgayYeuCauTraHang)[1] + "</td>";
                html_tbody += "<td class=\"textleft\">" + val.GioYeuCauTraHang + "</td>";
                html_tbody += "<td class=\"textleft\">" + val.GhiChuHangTra + "</td>";
                html_tbody += "<td class=\"textleft\">" + val.ChuyenBayTT + "</td>";
                html_tbody += "<td class=\"textleft\">" + convertDate(val.NgayBayTT)[1] + "</td>";
                html_tbody += "<td class=\"textleft\">" + val.GioBayTT + "</td>";
                html_tbody += "<td class=\"textleft\">" + val.FWDS + "</td>";
                html_tbody += "<td class=\"textleft\">" + val.GhiChuTB + "</td>";
                html_tbody += "</tr>";
            });

            $("#tableGTK thead").empty().append(html_thead);
            $("#tableGTK tbody").empty().append(html_tbody);

            //$("#tableGTK").DataTable({
            //    responsive: true,
            //    destroy: true,
            //    static: true,
            //    scrollX: true,
            //    "paging": false,
            //});
        },
        error: function () {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Thử lại hoặc liên hệ IT',
                'error'
            )
        }
    }).done(function () {
    })
}

////
function fncConvertOverSizeText(text) {
    if (text.length > 20) {
        text = text.substring(0, 10) + "..." + text.substring((text.length - 10), text.length);
    }
    return text;
}
function fncConvertSize(size) {
    var size_float = parseFloat(size);
    var size_return = "";
    if (size_float <= 1000000) {
        size_return = (size_float / 1024).toFixed(2) + " KB";
    } else {
        size_return = (size_float / 1048576).toFixed(2) + " MB";
    }

    return size_return;
}
//async function getInOut() {

//    //fetch('http://tracuu.alsc.com.vn/api/CustomDetailApi?mawb=16057252252&hawb=RAF23070103', {
//    //    mode: 'no-cors',
//    //    method: 'GET',
//    //    headers: {
//    //        'Access-Control-Allow-Origin': '*',
//    //        "Access-Control-Allow-Credentials": true,
//    //        'method': 'GET',
//    //        "Content-Type": "application/json",
//    //    },
//    //}).then(res => res.json()
//    //).then(data => console.log(data));

//    //const response = await fetch("http://tracuu.alsc.com.vn/api/CustomDetailApi?mawb=16057252252&hawb=RAF23070103", {
//    //    mode: 'no-cors',
//    //    headers: {
//    //        'Access-Control-Allow-Origin': '*',
//    //        "Access-Control-Allow-Credentials": true,
//    //        'method': 'GET',
//    //        'contentType': 'application/json'
//    //    }
//    //});

//    //const movies = await response.json();
//    //console.log(movies);

//    //var url = "http://tracuu.alsc.com.vn/api/CustomDetailApi?mawb=16057252252&hawb=RAF23070103";
//    //$.ajax({
//    //    type: "POST",
//    //    url: url,
//    //    contentType: "application/json;charsert=utf-8",
//    //    dataType: "json",
//    //    async: false,
//    //    mode: 'no-cors',
//    //    headers: {
//    //        'Access-Control-Allow-Origin': '*',
//    //        "Access-Control-Allow-Credentials": true,
//    //        'method': 'GET',
//    //        "Content-Type": "application/json",
//    //    },
//    //    success: function (responsive) {
//    //        d = responsive.d;
//    //        cosole.log(d)
//    //    },
//    //    error: function () {
//    //        Swal.fire(
//    //            'Có lỗi xảy ra!',
//    //            'Thử lại hoặc liên hệ IT',
//    //            'error'
//    //        )
//    //    }
//    //}).done(function () {
//    //})
//}