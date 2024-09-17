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
var jsonYNghiaTrangThai = {};
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
                el.innerHTML = "countdown's over!";
                clearInterval(interval);
                location.reload();
                return;
            } else {
                minutes--;
                seconds = 60;
            }
        }
        if (minutes > 0) {
            var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
        } else {
            var minute_text = '';
        }
        var second_text = seconds > 1 ? 'seconds' : 'second';
        el.innerHTML = 'Auto Refresh: ' + minute_text + ' ' + seconds + ' ' + second_text + ' remaining';
        seconds--;
    }, 1000);
}

$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChanges();
    $("#btn-refresh").click(function () {
        location.reload();
    });
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
        url: "QuanLyHangNhapKhachHang.aspx/listAllImport",
        contentType: "application/json;charsert=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d.danhSachFWDs);
            //console.log(d);

            var ArrivalNotice = d.ArrivalNotice.length;
            var DelyveryPlan = d.DelyveryPlan.length;
            var LoadingOnTruck = d.LoadingOnTruck.length;
            var TruckingAlse = d.TruckingAlse.length;
            var AlseWarehouse = d.AlseWarehouse.length;
            var ClearCustom = d.ClearCustom.length;
            var Delyvering = d.Delyvering.length;
            var Complete = d.Complete.length;

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
                        textHQGS = "HQGS tại NBA";
                        colorHQGS = "classHQGS";
                    }

                    html_ArrivalNotice += "<tr makho=\"" + val.MaKho + "\" fwd=\"" + val.FWDSArrivalNotice.replace(".", "-") + "\" class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.FWDSArrivalNotice.replace(".", "-") + " tr-makho-" + val.MaKho + "\">";
                    html_ArrivalNotice += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_ArrivalNotice += "<td class=\"td-img\">" + "<img src=\"images/mail_web.png\"  />" + "</td>";
                    html_ArrivalNotice += "<td class=\"td-mawb mawban " + tomaucotMaWb + "\">" + val.MawbArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td class=\"td-hawb\">" + val.HawbArrivalNotice + "</br>" + "<span  class=\"" + colorHQGS + "\">" + textHQGS + "</span>" + "</td>";
                    html_ArrivalNotice += "<td class=\"td-pcs\">" + val.SoKienTBArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td class=\"td-cm\">" + val.GMArrivalNotice + "</td>";
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
                    html_ArrivalNotice += "<td class=\"td-wh\">" + val.MaKho + "</td>";
                    html_ArrivalNotice += "<td>" + val.TinhTrangTB + "</td>";
                    html_ArrivalNotice += "<td>" + val.GhiChuTBArrivalNotice + "</td>";
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
                        textHQGS = "HQGS tại NBA";
                        colorHQGS = "classHQGS";
                    }


                    html_DelyvryPlan += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.FWDSDelyveryPlan.replace(".", "-") + " tr-makho-" + val.MaKho + "\">";
                    html_DelyvryPlan += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_DelyvryPlan += "<td class=\"td-img\">" + "<img src=\"images/DELIVERY PLAN.png\"  />" + "</td>";
                    html_DelyvryPlan += "<td class=\"td-mawb font-weight-css\">" + val.MawbDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td class=\"td-hawb font-weight-css\">" + val.HawbDelyveryPlan + "</br>" + "<span class=\"" + colorHQGS + "\">" + textHQGS + "</span>" + "</td>";
                    html_DelyvryPlan += "<td class=\"td-pcs\">" + val.SoKienTBDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td class=\"td-cm\">" + val.GMDelyveryPlan + "</td>";
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
                    html_DelyvryPlan += "<td class=\"td-wh\">" + val.MaKho + "</td>";
                    html_DelyvryPlan += "<td>" + val.TinhTrangTB + "</td>";
                    html_DelyvryPlan += "<td>" + val.GhiChuTBDelyveryPlan + "</td>";
                    //html_DelyvryPlan += "<td class=\"statdate\">" + convertDate(val.NgayGioGiaoDelyveryPlan)[1] + "</td>";
                    //html_DelyvryPlan += "<td class=\"stattime\">" + (convertDate(val.NgayGioGiaoDelyveryPlan)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoDelyveryPlan)[3]) + "</td>";
                    //html_DelyvryPlan += "<td class=\"ngaybaytt\">" + convertDate(val.NgayGioBayTTDelyveryPlan)[1] + "</td>";
                    //html_DelyvryPlan += "<td class=\"giobaytt\">" + (convertDate(val.NgayGioBayTTDelyveryPlan)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoDelyveryPlan)[3]) + "</td>";
                    html_DelyvryPlan += "</tr>";
                });

                $("#tbl_DelyvryPlan tbody").append(html_DelyvryPlan);

            }
            //show table if length array > 0 
            //LOADING ON TRUCK
            if (LoadingOnTruck > 0) {
                $("#tbl-LoadingOnTruck").show();
                var html_LoadingOnTruck = "";
                $("#tbl-LoadingOnTruck tbody").empty();
                //console.log(d.LoadingOnTruck);
                $.each(d.LoadingOnTruck, function (item, val) {

                    var textHQGS = "";
                    var colorHQGS = "";
                    if (val.DVHQ_NBA == "True") {
                        textHQGS = "HQGS tại NBA";
                        colorHQGS = "classHQGS";
                    }

                    html_LoadingOnTruck += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.FWDSLoadingOnTruck.replace(".", "-") + " tr-makho-" + val.MaKho + "\">";
                    html_LoadingOnTruck += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-img\">" + "<img src=\"images/truck.png\"  />" + "</td>"; //
                    html_LoadingOnTruck += "<td class=\"td-mawb font-weight-css\">" + val.MawbLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-hawb font-weight-css\">" + val.HawbLoadingOnTruck + "</br>" + "<span class=\"" + colorHQGS + "\">" + textHQGS + "</span>" + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-pcs\">" + val.SoKienTBLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-cm\">" + val.GMLoadingOnTruck + "</td>";
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
                    html_LoadingOnTruck += "<td class=\"td-wh\">" + val.MaKho + "</td>";
                    html_LoadingOnTruck += "<td>" + val.TinhTrangTB + "</td>";
                    html_LoadingOnTruck += "<td>" + val.GhiChuTBLoadingOnTruck + "</td>";
                    //html_LoadingOnTruck += "<td class=\"statdate\">" + convertDate(val.NgayGioGiaoLoadingOnTruck)[1] + "</td>";
                    //html_LoadingOnTruck += "<td class=\"stattime\">" + (convertDate(val.NgayGioGiaoLoadingOnTruck)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoLoadingOnTruck)[3]) + "</td>";
                    //html_LoadingOnTruck += "<td class=\"ngaybaytt\">" + convertDate(val.NgayGioBayTTLoadingOnTruck)[1] + "</td>";
                    //html_LoadingOnTruck += "<td class=\"giobaytt\">" + (convertDate(val.NgayGioBayTTLoadingOnTruck)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTTLoadingOnTruck)[3]) + "</td>";
                    html_LoadingOnTruck += "</tr>";
                });

                $("#tbl-LoadingOnTruck tbody").append(html_LoadingOnTruck);

            }

            //TRUCKING ALSE
            if (TruckingAlse > 0) {
                $("#tbl_TruckingAlse").show();
                var html_TruckingAlse = "";
                $("#tbl_TruckingAlse tbody").empty();
                //console.log(d.TruckingAlse);
                $.each(d.TruckingAlse, function (item, val) {

                    var textHQGS = "";
                    var colorHQGS = "";
                    if (val.DVHQ_NBA == "True") {
                        textHQGS = "HQGS tại NBA";
                        colorHQGS = "classHQGS";
                    }

                    html_TruckingAlse += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.FWDSTruckingAlse.replace(".", "-") + " tr-makho-" + val.MaKho + "\">";
                    html_TruckingAlse += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_TruckingAlse += "<td class=\"td-img\">" + "<img src=\"images/TRUCKING ALSE.png\"  />" + "</td>";
                    html_TruckingAlse += "<td class=\"td-mawb font-weight-css\">" + val.MawbTruckingAlse + "</td>";
                    html_TruckingAlse += "<td class=\"td-hawb font-weight-css\">" + val.HawbTruckingAlse + "</br>" + "<span class=\"" + colorHQGS + "\">" + textHQGS + "</span>" + "</td>";
                    html_TruckingAlse += "<td class=\"td-pcs\">" + val.SoKienTBTruckingAlse + "</td>";
                    html_TruckingAlse += "<td class=\"td-cm\">" + val.GMTruckingAlse + "</td>";
                    html_TruckingAlse += "<td class=\"td-flt\">" + val.ChuyenBayTBTruckingAlse + "</td>";
                    html_TruckingAlse += "<td class=\"td-date\">" + convertDate(val.NgayGioBayTBTruckingAlse)[1] + "</td>";
                    html_TruckingAlse += "<td class=\"td-time\">" + (convertDate(val.NgayGioBayTBTruckingAlse)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTBTruckingAlse)[3]) + "</td>";
                    html_TruckingAlse += "<td class=\"td-date ngayyctrahang\">" + convertDate(val.NgayGioYeuCauTraHangTruckingAlse)[1] + "</td>";
                    html_TruckingAlse += "<td class=\"td-time gioyctrahang\">" + (convertDate(val.NgayGioYeuCauTraHangTruckingAlse)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangTruckingAlse)[3]) + "</td>";
                    html_TruckingAlse += "<td class=\"td-date font-weight-css\">" + convertDate(val.NgayGioXeVeTruckingAlse)[1] + "</td>";
                    html_TruckingAlse += "<td class=\"td-time font-weight-css\">" + (convertDate(val.NgayGioXeVeTruckingAlse)[3] == "00:00" ? "" : convertDate(val.NgayGioXeVeTruckingAlse)[3]) + "</td>";
                    html_TruckingAlse += "<td>" + val.BKSXeVeTruckingAlse + "</td>";
                    html_TruckingAlse += "<td>" + val.SoKienDSVCMDTruckingAlse + "</td>";
                    html_TruckingAlse += "<td>" + val.SoCanDSVCMDTruckingAlse + "</td>";
                    html_TruckingAlse += "<td class=\"td-fwd\">" + val.FWDSTruckingAlse + "</td>";
                    html_TruckingAlse += "<td class=\"td-wh\">" + val.MaKho + "</td>";
                    html_TruckingAlse += "<td>" + val.TinhTrangTB + "</td>";
                    html_TruckingAlse += "<td>" + val.GhiChuTBTruckingAlse + "</td>";
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
                        textHQGS = "HQGS tại NBA";
                        colorHQGS = "classHQGS";
                    }

                    html_AlseWarehouse += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.FWDSAlseWarehouse.replace(".", "-") + " tr-makho-" + val.MaKho + "\">";
                    html_AlseWarehouse += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_AlseWarehouse += "<td class=\"td-img\">" + "<img src=\"images/alsewh.png\"  />" + "</td>";
                    html_AlseWarehouse += "<td class=\"td-mawb font-weight-css\">" + val.MawbAlseWarehouse + "</td>";
                    html_AlseWarehouse += "<td class=\"td-hawb font-weight-css\">" + val.HawbAlseWarehouse + "</br>" + "<span class=\"" + colorHQGS + "\">" + textHQGS + "</span>" + "</td>";
                    html_AlseWarehouse += "<td class=\"td-pcs\">" + val.SoKienThucAlseWarehouse + "</td>";
                    html_AlseWarehouse += "<td class=\"td-cm\">" + val.SoCanThucAlseWarehouse + "</td>";
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
                    html_AlseWarehouse += "<td class=\"td-wh\">" + val.MaKho + "</td>";
                    html_AlseWarehouse += "<td>" + val.TinhTrangTB + "</td>";
                    html_AlseWarehouse += "<td>" + val.GhiChuAlseWarehouse + "</td>";
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
                        textHQGS = "HQGS tại NBA";
                        colorHQGS = "classHQGS";
                    }


                    html_ClearCustom += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.MaDonViNhanClearCustom.replace(".", "-") + " tr-makho-" + val.MaKho + "\">";
                    html_ClearCustom += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_ClearCustom += "<td class=\"td-img\">" + "<img src=\"images/hoanthanhhaiquan.png\"  />" + "</td>";
                    html_ClearCustom += "<td class=\"td-mawb font-weight-css somawb\">" + val.MawbClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"td-hawb font-weight-css\">" + val.HawbClearCustom + "</br>" + "<span class=\"" + colorHQGS + "\">" + textHQGS + "</span>" + "</td>";
                    html_ClearCustom += "<td class=\"td-pcs\">" + val.SoKienThucClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"td-cm\">" + val.SoCanThucClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"td-flt\">" + val.ChuyenBayTTClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"td-date ngaybaytt\">" + convertDate(val.NgayGioBayTTClearCustom)[1] + "</td>";
                    html_ClearCustom += "<td class=\"td-time giobaytt\">" + (convertDate(val.NgayGioBayTTClearCustom)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTTClearCustom)[3]) + "</td>";
                    html_ClearCustom += "<td class=\"td-date ngayyctrahang " + tomauNgayGioYeuCauTraHang + "\">" + convertDate(val.NgayGioYeuCauTraHangClearCustom)[1] + "</td>";
                    html_ClearCustom += "<td class=\"td-time gioyctrahang " + tomauNgayGioYeuCauTraHang + "\">" + (convertDate(val.NgayGioYeuCauTraHangClearCustom)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangClearCustom)[3]) + "</td>";
                    html_ClearCustom += "<td class=\"td-date font-weight-css\">" + convertDate(val.NgayGioGiaoClearCustom)[1] + "</td>";
                    html_ClearCustom += "<td class=\"td-time font-weight-css\">" + (convertDate(val.NgayGioGiaoClearCustom)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoClearCustom)[3]) + "</td>";
                    html_ClearCustom += "<td class=\"td-code\">" + val.CodeClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"td-fwd\">" + val.MaDonViNhanClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"td-wh\">" + val.MaKho + "</td>";
                    html_ClearCustom += "<td>" + val.TinhTrangTB + "</td>";
                    html_ClearCustom += "<td>" + val.GhiChuClearCustom + "</td>";
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

                    var statdt = new Date(val.NgayGioGiaoDelyvering);
                    var orderdt = new Date(val.NgayGioYeuCauTraHangDelyvering);
                    var hieuorder = (statdt - orderdt) / 3600000;

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
                        textHQGS = "HQGS tại NBA";
                        colorHQGS = "classHQGS";
                    }

                    //console.log(convertDate(val.NgayGioGiaoDelyvering));
                    html_Delyvering += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.MaDonViNhanDelyvering.replace(".", "-") + " tr-makho-" + val.MaKho + "\">";
                    html_Delyvering += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_Delyvering += "<td class=\"td-img\">" + "<img src=\"images/DELYVERING.png\"  />" + "</td>";
                    html_Delyvering += "<td class=\"td-mawb font-weight-css somawb\">" + val.MawbDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-hawb font-weight-css\">" + val.HawbDelyvering + "</br>" + "<span class=\"" + colorHQGS + "\">" + textHQGS + "</span>" + "</td>";
                    html_Delyvering += "<td class=\"td-pcs\">" + val.SoKienThucDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-cm\">" + val.SoCanThucDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-flt\">" + val.ChuyenBayTTDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-date ngaybaytt\">" + convertDate(val.NgayGioBayTTDelyvering)[1] + "</td>";
                    html_Delyvering += "<td class=\"td-time giobaytt\">" + (convertDate(val.NgayGioBayTTDelyvering)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTTDelyvering)[3]) + "</td>";
                    html_Delyvering += "<td class=\"td-date ngayyctrahang " + tomauNgayGioYeuCauTraHang + "\">" + convertDate(val.NgayGioYeuCauTraHangDelyvering)[1] + "</td>";
                    html_Delyvering += "<td class=\"td-time gioyctrahang " + tomauNgayGioYeuCauTraHang + "\">" + (convertDate(val.NgayGioYeuCauTraHangDelyvering)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangDelyvering)[3]) + "</td>";
                    html_Delyvering += "<td class=\"td-date font-weight-css \">" + convertDate(val.NgayGioGiaoDelyvering)[1] + "</td>";
                    html_Delyvering += "<td class=\"td-time font-weight-css \">" + (convertDate(val.NgayGioGiaoDelyvering)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoDelyvering)[3]) + "</td>";
                    html_Delyvering += "<td class=\"td-truckID\">" + val.BKSXeGiaoDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-code\">" + val.CodeDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-fwd\">" + val.MaDonViNhanDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-wh\">" + val.MaKho + "</td>";
                    html_Delyvering += "<td>" + val.TinhTrangTB + "</td>";
                    html_Delyvering += "<td>" + val.GhiChuDelyvering + "</td>";
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
                        textHQGS = "HQGS tại NBA";
                        colorHQGS = "classHQGS";
                    }


                    html_Complete += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.MaDonViNhanComplete.replace(".", "-") + " tr-makho-" + val.MaKho + "\">";
                    html_Complete += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_Complete += "<td class=\"td-img\">" + "<img src=\"images/COMPLETE.png\"  />" + "</td>";
                    html_Complete += "<td class=\"td-mawb font-weight-css\">" + val.MawbComplete + "</td>";
                    html_Complete += "<td class=\"td-hawb font-weight-css\">" + val.HawbComplete + "</br>" + "<span class=\"" + colorHQGS + "\">" + textHQGS + "</span>" + "</td>";
                    html_Complete += "<td class=\"td-pcs\">" + val.SoKienThucComplete + "</td>";
                    html_Complete += "<td class=\"td-cm\">" + val.SoCanThucComplete + "</td>";
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
                    html_Complete += "<td class=\"td-wh\">" + val.MaKho + "</td>";
                    html_Complete += "<td>" + val.TinhTrangTB + "</td>";
                    html_Complete += "<td>" + val.GhiChuComplete + "</td>";
                    //html_Complete += "<td class=\"td-time font-weight-css statdate\">" + convertDate(val.NgayGioGiaoComplete)[1] + "</td>";
                    //html_Complete += "<td class=\"td-time font-weight-css stattime\">" + (convertDate(val.NgayGioGiaoComplete)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoComplete)[3]) + "</td>";
                    html_Complete += "</tr>";
                });

                $("#tbl_Complete tbody").append(html_Complete);

                //$('.statdate').remove();
                //$('.stattime').remove();
            }
            //$("#div-checkbox").empty();
            //var html_DanhSachFWDS = "";
            //html_DanhSachFWDS += "<label class=\"checkbox-inline  lable-title\">FWD: </label>";
            //html_DanhSachFWDS += "<label class=\"checkbox-inline color-white\"><input type=\"checkbox\" class=\"cb-qll cb-qll-child\" checked id=\"cb-ALL\" value=\"ALL\" />" + "ALL" + "</label>";
            //$.each(d.danhSachFWDs, function (item, val) {
            //    html_DanhSachFWDS += "<label class=\"checkbox-inline color-white\"><input type=\"checkbox\" class=\"cb-qll cb-qll-child\" checked id=\"cb-" + val.fwd.replace(".", "-") + "\" value=\"" + val.fwd.replace(".", "-") + "\" />" + val.fwd + "</label>";
            //})
            //$("#div-checkbox").append(html_DanhSachFWDS);

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
}

function fncClick() {
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
}


function fncChanges(){
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
}