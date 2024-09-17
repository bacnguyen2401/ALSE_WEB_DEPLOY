var keHoachCPNs = [];

$(document).ready(function () {
    fncLoad();
    fncClick();
    fncModalShowHide();
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
        url: "ChuyenPhatNhanhCPN.aspx/listAllImport",
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
                    //html_ArrivalNotice += "<td class=\"td-mawb1  mawban " + tomaucotMaWb + "\" attrMAWB=\"" + val.MawbArrivalNotice + "\" attrHAWB=\"" + val.HawbArrivalNotice + "\">" + val.MawbArrivalNotice + textPhatDO + "</td>";
                    html_ArrivalNotice += "<td class=\"td-hawb  " + tomauWH + "\">" + val.HawbArrivalNotice + textHQGS + "</td>";
                    html_ArrivalNotice += "<td class=\"td-pcs\">" + val.SoKienTBArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td class=\"td-cm\">" + val.GMArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td class=\"td-CBM\">CBM</td>";
                    //html_ArrivalNotice += "<td class=\"td-flt\">" + val.ChuyenBayTBArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td class=\"td-date fltdate " + tomaucotfltDateTime + "\">" + convertDate(val.NgayGioNhanTBArrivalNotice)[1] + "</td>";
                    html_ArrivalNotice += "<td class=\"td-time flttime " + tomaucotfltDateTime + "\">" + (convertDate(val.NgayGioNhanTBArrivalNotice)[3] == "00:00" ? "" : convertDate(val.NgayGioNhanTBArrivalNotice)[3]) + "</td>";
                    html_ArrivalNotice += "<td class=\"\">Receiving W.H</td>";
                    html_ArrivalNotice += "<td class=\"\">BU</td>";
                    html_ArrivalNotice += "<td class=\"\">TMS</td>";
                    html_ArrivalNotice += "<td class=\"td-date ngayyctrahang " + tomaucotOrderDatetime + "\">" + convertDate(val.NgayGioYeuCauTraHangArrivalNotice)[1] + "</td>";
                    html_ArrivalNotice += "<td class=\"td-time gioyctrahang " + tomaucotOrderDatetime + "\">" + (convertDate(val.NgayGioYeuCauTraHangArrivalNotice)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangArrivalNotice)[3]) + "</td>";
                    //html_ArrivalNotice += "<td>" + val.HTSoKienThucArrivalNotice + "</td>";
                    //html_ArrivalNotice += "<td>" + val.HTSoCanThucArrivalNotice + "</td>";
                    //html_ArrivalNotice += "<td>" + val.SoKienThucArrivalNotice + "</td>";
                    //html_ArrivalNotice += "<td>" + val.LACKArrivalNotice + "</td>";
                    html_ArrivalNotice += "<td class=\"td-fwd\">" + val.FWDSArrivalNotice + "</td>";
                    //html_ArrivalNotice += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    //html_ArrivalNotice += "<td>" + val.TinhTrangTB + "</td>";
                    html_ArrivalNotice += "<td>" + val.Invoice + "</td>";
                    html_ArrivalNotice += "<td>" + val.GhiChuTBArrivalNotice + "</td>";
                    //html_ArrivalNotice += "<td>" + val.CNEEMAWB + "</td>";
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
                    //html_DelyvryPlan += "<td class=\"td-mawb1 font-weight-css\" attrMAWB=\"" + val.MawbDelyveryPlan + "\" attrHAWB=\"" + val.HawbDelyveryPlan + "\">" + val.MawbDelyveryPlan + textPhatDO + "</td>";
                    html_DelyvryPlan += "<td class=\"td-hawb font-weight-css  " + tomauWH + "\">" + val.HawbDelyveryPlan + textHQGS + "</td>";
                    html_DelyvryPlan += "<td class=\"td-pcs\">" + val.SoKienTBDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td class=\"td-cm\">" + val.GMDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td class=\"td-CBM\">CBM</td>";
                    //html_DelyvryPlan += "<td class=\"td-flt\">" + val.ChuyenBayTBDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td class=\"td-date fltdate " + tomaucotFLTdt + "\">" + convertDate(val.NgayGioNhanTBDelyveryPlan)[1] + "</td>";
                    html_DelyvryPlan += "<td class=\"td-time flttime " + tomaucotFLTdt + "\">" + (convertDate(val.NgayGioNhanTBDelyveryPlan)[3] == "00:00" ? "" : convertDate(val.NgayGioNhanTBDelyveryPlan)[3]) + "</td>";
                    html_DelyvryPlan += "<td class=\"td-date ngayyctrahang " + tomaucotOrderdt + "\">" + convertDate(val.NgayGioYeuCauTraHangDelyveryPlan)[1] + "</td>";
                    html_DelyvryPlan += "<td class=\"td-time gioyctrahang " + tomaucotOrderdt + "\">" + (convertDate(val.NgayGioYeuCauTraHangDelyveryPlan)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangDelyveryPlan)[3]) + "</td>";
                    html_DelyvryPlan += "<td class=\"\">Receiving W.H</td>";
                    html_DelyvryPlan += "<td class=\"\">BU</td>";
                    html_DelyvryPlan += "<td class=\"\">TMS</td>";
                    //html_DelyvryPlan += "<td>" + val.HTSoKienThucDelyveryPlan + "</td>";
                    //html_DelyvryPlan += "<td>" + val.HTSoCanThucDelyveryPlan + "</td>";
                    //html_DelyvryPlan += "<td>" + val.SoKienThucDelyveryPlan + "</td>";
                    //html_DelyvryPlan += "<td>" + val.LACKDelyveryPlan + "</td>";
                    html_DelyvryPlan += "<td class=\"td-fwd\">" + val.FWDSDelyveryPlan + "</td>";
                    //html_DelyvryPlan += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    //html_DelyvryPlan += "<td>" + val.TinhTrangTB + "</td>";
                    html_DelyvryPlan += "<td>" + val.Invoice + "</td>";
                    html_DelyvryPlan += "<td>" + val.GhiChuTBDelyveryPlan + "</td>";
                    //html_DelyvryPlan += "<td>" + val.CNEEMAWB + "</td>";
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
                    //html_CargoReady += "<td class=\"td-mawb1 font-weight-css\" attrMAWB=\"" + val.MawbCargoReady + "\" attrHAWB=\"" + val.HawbCargoReady + "\">" + val.MawbCargoReady + textPhatDO + "</td>";
                    html_CargoReady += "<td class=\"td-hawb font-weight-css  " + tomauWH + "\">" + val.HawbCargoReady + textHQGS + "</span>" + "</td>";
                    html_CargoReady += "<td class=\"td-pcs\">" + val.SoKienTBCargoReady + "</td>";
                    html_CargoReady += "<td class=\"td-cm\">" + val.GMCargoReady + "</td>";
                    html_CargoReady += "<td class=\"td-CBM\">CBM</td>";
                    //html_CargoReady += "<td class=\"td-flt\">" + val.ChuyenBayTBCargoReady + "</td>";
                    html_CargoReady += "<td class=\"td-date\">" + convertDate(val.NgayGioNhanTBCargoReady)[1] + "</td>";
                    html_CargoReady += "<td class=\"td-time\">" + (convertDate(val.NgayGioNhanTBCargoReady)[3] == "00:00" ? "" : convertDate(val.NgayGioNhanTBCargoReady)[3]) + "</td>";
                    html_CargoReady += "<td class=\"td-date ngayyctrahang\">" + convertDate(val.NgayGioYeuCauTraHangCargoReady)[1] + "</td>";
                    html_CargoReady += "<td class=\"td-time gioyctrahang\">" + (convertDate(val.NgayGioYeuCauTraHangCargoReady)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangCargoReady)[3]) + "</td>";
                    html_CargoReady += "<td class=\"\">Receiving W.H</td>";
                    html_CargoReady += "<td class=\"\">BU</td>";
                    html_CargoReady += "<td class=\"\">TMS</td>";
                    html_CargoReady += "<td class=\"td-date font-weight-css\">" + convertDate(val.NgayGioXeVeCargoReady)[1] + "</td>";
                    html_CargoReady += "<td class=\"td-time font-weight-css\">" + (convertDate(val.NgayGioXeVeCargoReady)[3] == "00:00" ? "" : convertDate(val.NgayGioXeVeCargoReady)[3]) + "</td>";
                    html_CargoReady += "<td>" + val.BKSXeVeCargoReady + "</td>";
                    //html_CargoReady += "<td>" + val.SoKienDSVCMDCargoReady + "</td>";
                    //html_CargoReady += "<td>" + val.SoCanDSVCMDCargoReady + "</td>";
                    html_CargoReady += "<td class=\"td-fwd\">" + val.FWDSCargoReady + "</td>";
                    //html_CargoReady += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    //html_CargoReady += "<td>" + val.TinhTrangTB + "</td>";
                    html_CargoReady += "<td>" + val.Invoice + "</td>";
                    html_CargoReady += "<td>" + val.GhiChuTBCargoReady + "</td>";
                    //html_CargoReady += "<td>" + val.CNEEMAWB + "</td>";
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
                    //html_LoadingOnTruck += "<td class=\"td-mawb1 font-weight-css\" attrMAWB=\"" + val.MawbLoadingOnTruck + "\" attrHAWB=\"" + val.HawbLoadingOnTruck + "\">" + val.MawbLoadingOnTruck + textPhatDO + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-hawb font-weight-css  " + tomauWH + "\">" + val.HawbLoadingOnTruck + textHQGS + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-pcs\">" + val.SoKienTBLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-cm\">" + val.GMLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td class=\"\">CBM</td>";
                    //html_LoadingOnTruck += "<td class=\"td-flt\">" + val.ChuyenBayTBLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-date\">" + convertDate(val.NgayGioNhanTBLoadingOnTruck)[1] + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-time\">" + (convertDate(val.NgayGioNhanTBLoadingOnTruck)[3] == "00:00" ? "" : convertDate(val.NgayGioNhanTBLoadingOnTruck)[3]) + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-date ngayyctrahang\">" + convertDate(val.NgayGioYeuCauTraHangLoadingOnTruck)[1] + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-time gioyctrahang\">" + (convertDate(val.NgayGioYeuCauTraHangLoadingOnTruck)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangLoadingOnTruck)[3]) + "</td>";
                    html_LoadingOnTruck += "<td class=\"\">Receiving W.H</td>";
                    html_LoadingOnTruck += "<td class=\"\">BU</td>";
                    html_LoadingOnTruck += "<td class=\"\">TMS</td>";
                    html_LoadingOnTruck += "<td class=\"td-date font-weight-css\">" + convertDate(val.NgayGioXeVeLoadingOnTruck)[1] + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-time font-weight-css\">" + (convertDate(val.NgayGioXeVeLoadingOnTruck)[3] == "00:00" ? "" : convertDate(val.NgayGioXeVeLoadingOnTruck)[3]) + "</td>";
                    html_LoadingOnTruck += "<td>" + val.BKSXeVeLoadingOnTruck + "</td>";
                    //html_LoadingOnTruck += "<td>" + val.SoKienDSVCMDLoadingOnTruck + "</td>";
                    //html_LoadingOnTruck += "<td>" + val.SoCanDSVCMDLoadingOnTruck + "</td>";
                    html_LoadingOnTruck += "<td class=\"td-fwd\">" + val.FWDSLoadingOnTruck + "</td>";
                    //html_LoadingOnTruck += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    //html_LoadingOnTruck += "<td>" + val.TinhTrangTB + "</td>";
                    html_LoadingOnTruck += "<td>" + val.Invoice + "</td>";
                    html_LoadingOnTruck += "<td>" + val.GhiChuTBLoadingOnTruck + "</td>";
                    //html_LoadingOnTruck += "<td>" + val.CNEEMAWB + "</td>";
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
                    //html_TruckingAlse += "<td class=\"td-mawb1 font-weight-css\" attrMAWB=\"" + val.MawbTruckingALSE + "\" attrHAWB=\"" + val.HawbTruckingALSE + "\">" + val.MawbTruckingALSE + textPhatDO + "</td>";
                    html_TruckingAlse += "<td class=\"td-hawb font-weight-css  " + tomauWH + "\">" + val.HawbTruckingALSE + textHQGS + "</td>";
                    html_TruckingAlse += "<td class=\"td-pcs\">" + val.SoKienTBTruckingALSE + "</td>";
                    html_TruckingAlse += "<td class=\"td-cm\">" + val.GMTruckingALSE + "</td>";
                    html_TruckingAlse += "<td class=\"\">CBM</td>";
                    //html_TruckingAlse += "<td class=\"td-flt\">" + val.ChuyenBayTBTruckingALSE + "</td>";
                    html_TruckingAlse += "<td class=\"td-date\">" + convertDate(val.NgayGioNhanTBTruckingALSE)[1] + "</td>";
                    html_TruckingAlse += "<td class=\"td-time\">" + (convertDate(val.NgayGioNhanTBTruckingALSE)[3] == "00:00" ? "" : convertDate(val.NgayGioNhanTBTruckingALSE)[3]) + "</td>";
                    html_TruckingAlse += "<td class=\"td-date ngayyctrahang\">" + convertDate(val.NgayGioYeuCauTraHangTruckingALSE)[1] + "</td>";
                    html_TruckingAlse += "<td class=\"td-time gioyctrahang\">" + (convertDate(val.NgayGioYeuCauTraHangTruckingALSE)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangTruckingALSE)[3]) + "</td>";
                    html_TruckingAlse += "<td class=\"\">Receiving W.H</td>";
                    html_TruckingAlse += "<td class=\"\">BU</td>";
                    html_TruckingAlse += "<td class=\"\">TMS</td>";
                    html_TruckingAlse += "<td class=\"td-date font-weight-css\">" + convertDate(val.NgayGioXeVeTruckingALSE)[1] + "</td>";
                    html_TruckingAlse += "<td class=\"td-time font-weight-css\">" + (convertDate(val.NgayGioXeVeTruckingALSE)[3] == "00:00" ? "" : convertDate(val.NgayGioXeVeTruckingALSE)[3]) + "</td>";
                    html_TruckingAlse += "<td>" + val.BKSXeVeTruckingALSE + "</td>";
                    //html_TruckingAlse += "<td>" + val.SoKienDSVCMDTruckingALSE + "</td>";
                    //html_TruckingAlse += "<td>" + val.SoCanDSVCMDTruckingALSE + "</td>";
                    html_TruckingAlse += "<td class=\"td-fwd\">" + val.FWDSTruckingALSE + "</td>";
                    //html_TruckingAlse += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    //html_TruckingAlse += "<td>" + val.TinhTrangTB + "</td>";
                    html_TruckingAlse += "<td>" + val.Invoice + "</td>";
                    html_TruckingAlse += "<td>" + val.GhiChuTBTruckingALSE + "</td>";
                    //html_TruckingAlse += "<td>" + val.CNEEMAWB + "</td>";
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
                    html_AlseWarehouse += "<tr class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + val.FWDSAlseWarehouse.replace(".", "-") + " tr-makho-" + val.MaKho + " tr-hqgs-" + val.DVHQ_NBA + " tr-do-" + val.DO + "\">";
                    html_AlseWarehouse += "<td class=\"td-no\">" + (item + 1) + "</td>";
                    html_AlseWarehouse += "<td class=\"td-img\" attrMAWB=\"" + val.MawbAlseWarehouse + "\"  attrHAWB=\"" + val.HawbAlseWarehouse + "\" attrSoKien=\"" + val.SoKienThucAlseWarehouse + "\">" + "<img src=\"images/alsewh.png\"  />" + "</td>";
                    //html_AlseWarehouse += "<td class=\"td-mawb1 font-weight-css\" attrMAWB=\"" + val.MawbAlseWarehouse + "\" attrHAWB=\"" + val.HawbAlseWarehouse + "\">" + val.MawbAlseWarehouse + textPhatDO + "</td>";
                    html_AlseWarehouse += "<td class=\"td-hawb font-weight-css  " + tomauWH + "\">" + val.HawbAlseWarehouse + textHQGS + "</td>";
                    html_AlseWarehouse += "<td class=\"td-pcs\">" + val.SoKienThucAlseWarehouse + "</td>";
                    html_AlseWarehouse += "<td class=\"td-cm\">" + val.SoCanThucAlseWarehouse + "</td>";
                    html_AlseWarehouse += "<td class=\"\">CBM</td>";
                    //html_AlseWarehouse += "<td class=\"td-flt\">" + val.ChuyenBayTTAlseWarehouse + "</td>";
                    html_AlseWarehouse += "<td class=\"td-date ngaybaytt\">" + convertDate(val.NgayGioBayTTAlseWarehouse)[1] + "</td>";
                    html_AlseWarehouse += "<td class=\"td-time giobaytt\">" + (convertDate(val.NgayGioBayTTAlseWarehouse)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTTAlseWarehouse)[3]) + "</td>";
                    html_AlseWarehouse += "<td class=\"td-date ngayyctrahang " + tomauorderdtWAREHOUSE + "\">" + convertDate(val.NgayGioYeuCauTraHangAlseWarehouse)[1] + "</td>";
                    html_AlseWarehouse += "<td class=\"td-time gioyctrahang " + tomauorderdtWAREHOUSE + "\">" + (convertDate(val.NgayGioYeuCauTraHangAlseWarehouse)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangAlseWarehouse)[3]) + "</td>";
                    html_AlseWarehouse += "<td class=\"\">Receiving W.H</td>";
                    html_AlseWarehouse += "<td class=\"\">BU</td>";
                    html_AlseWarehouse += "<td class=\"\">TMS</td>";
                    html_AlseWarehouse += "<td class=\"td-date font-weight-css\">" + convertDate(val.NgayGioXeVeAlseWarehouse)[1] + "</td>";
                    html_AlseWarehouse += "<td class=\"td-time font-weight-css\">" + (convertDate(val.NgayGioXeVeAlseWarehouse)[3] == "00:00" ? "" : convertDate(val.NgayGioXeVeAlseWarehouse)[3]) + "</td>";
                    html_AlseWarehouse += "<td class=\"td-truckID\">" + val.BKSXeVeAlseWarehouse + "</td>";
                    html_AlseWarehouse += "<td class=\"td-code\">" + val.CodeAlseWarehouse + "</td>";
                    html_AlseWarehouse += "<td class=\"td-fwd\">" + val.FWDSAlseWarehouse + "</td>";
                    //html_AlseWarehouse += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    //html_AlseWarehouse += "<td>" + val.TinhTrangTB + "</td>";
                    html_AlseWarehouse += "<td>" + notspecialcharacters(val.Invoice) + "</td>";
                    html_AlseWarehouse += "<td>" + val.GhiChuAlseWarehouse + "</td>";
                    //html_AlseWarehouse += "<td>" + val.CNEEMAWB + "</td>";
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
                    //html_ClearCustom += "<td class=\"td-mawb font-weight-css somawb\" attrMAWB=\"" + val.MawbClearCustom + "\" attrHAWB=\"" + val.HawbClearCustom + "\">" + val.MawbClearCustom + textPhatDO + "</td>";
                    html_ClearCustom += "<td class=\"td-hawb font-weight-css  " + tomauWH + "\">" + val.HawbClearCustom + textHQGS + "</span>" + "</td>";
                    html_ClearCustom += "<td class=\"td-pcs\">" + val.SoKienThucClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"td-cm\">" + val.SoCanThucClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"\">CBM</td>";
                    //html_ClearCustom += "<td class=\"td-flt\">" + val.ChuyenBayTTClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"td-date ngaybaytt\">" + convertDate(val.NgayGioBayTTClearCustom)[1] + "</td>";
                    html_ClearCustom += "<td class=\"td-time giobaytt\">" + (convertDate(val.NgayGioBayTTClearCustom)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTTClearCustom)[3]) + "</td>";
                    html_ClearCustom += "<td class=\"td-date ngayyctrahang " + tomauNgayGioYeuCauTraHang + "\">" + convertDate(val.NgayGioYeuCauTraHangClearCustom)[1] + "</td>";
                    html_ClearCustom += "<td class=\"td-time gioyctrahang " + tomauNgayGioYeuCauTraHang + "\">" + (convertDate(val.NgayGioYeuCauTraHangClearCustom)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangClearCustom)[3]) + "</td>";
                    html_ClearCustom += "<td class=\"\">Receiving W.H</td>";
                    html_ClearCustom += "<td class=\"\">BU</td>";
                    html_ClearCustom += "<td class=\"\">TMS</td>";
                    html_ClearCustom += "<td class=\"td-date font-weight-css\">" + convertDate(val.NgayGioGiaoClearCustom)[1] + "</td>";
                    html_ClearCustom += "<td class=\"td-time font-weight-css\">" + (convertDate(val.NgayGioGiaoClearCustom)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoClearCustom)[3]) + "</td>";
                    html_ClearCustom += "<td class=\"td-code\">" + val.CodeClearCustom + "</td>";
                    html_ClearCustom += "<td class=\"td-fwd\">" + val.MaDonViNhanClearCustom + "</td>";
                    //html_ClearCustom += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    //html_ClearCustom += "<td>" + val.TinhTrangTB + "</td>";
                    html_ClearCustom += "<td>" + val.Invoice + "</td>";
                    html_ClearCustom += "<td>" + val.GhiChuClearCustom + "</td>";
                    //html_ClearCustom += "<td>" + val.CNEEMAWB + "</td>";
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
                    //html_Delyvering += "<td class=\"td-mawb font-weight-css somawb\" attrMAWB=\"" + val.MawbDelyvering + "\" attrHAWB=\"" + val.HawbDelyvering + "\">" + val.MawbDelyvering + textPhatDO + "</td>";
                    html_Delyvering += "<td class=\"td-hawb font-weight-css  " + tomauWH + "\">" + val.HawbDelyvering + textHQGS + "</td>";
                    html_Delyvering += "<td class=\"td-pcs\">" + val.SoKienThucDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-cm\">" + val.SoCanThucDelyvering + "</td>";
                    html_Delyvering += "<td class=\"\">CBM</td>";
                    //html_Delyvering += "<td class=\"td-flt\">" + val.ChuyenBayTTDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-date ngaybaytt\">" + convertDate(val.NgayGioBayTTDelyvering)[1] + "</td>";
                    html_Delyvering += "<td class=\"td-time giobaytt\">" + (convertDate(val.NgayGioBayTTDelyvering)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTTDelyvering)[3]) + "</td>";
                    html_Delyvering += "<td class=\"td-date ngayyctrahang " + tomauNgayGioYeuCauTraHang + "\">" + convertDate(val.NgayGioYeuCauTraHangDelyvering)[1] + "</td>";
                    html_Delyvering += "<td class=\"td-time gioyctrahang " + tomauNgayGioYeuCauTraHang + "\">" + (convertDate(val.NgayGioYeuCauTraHangDelyvering)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangDelyvering)[3]) + "</td>";
                    html_Delyvering += "<td class=\"\">Receiving W.H</td>";
                    html_Delyvering += "<td class=\"\">BU</td>";
                    html_Delyvering += "<td class=\"\">TMS</td>";
                    html_Delyvering += "<td class=\"td-date font-weight-css " + tomauSTA + "\">" + convertDate(val.NgayGioGiaoDelyvering)[1] + "</td>";
                    html_Delyvering += "<td class=\"td-time font-weight-css " + tomauSTA + "\">" + (convertDate(val.NgayGioGiaoDelyvering)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoDelyvering)[3]) + "</td>";
                    html_Delyvering += "<td class=\"td-truckID\">" + val.BKSXeGiaoDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-code\">" + val.CodeDelyvering + "</td>";
                    html_Delyvering += "<td class=\"td-fwd\">" + val.MaDonViNhanDelyvering + "</td>";
                    //html_Delyvering += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    //html_Delyvering += "<td>" + val.TinhTrangTB + "</td>";
                    html_Delyvering += "<td>" + val.Invoice + "</td>";
                    html_Delyvering += "<td>" + val.GhiChuDelyvering + "</td>";
                    //html_Delyvering += "<td>" + val.CNEEMAWB + "</td>";
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
                    //html_Complete += "<td class=\"td-mawb " + tomauMAWBHAWB + " font-weight-css\" attrMAWB=\"" + val.MawbComplete + "\" attrHAWB=\"" + val.HawbComplete + "\">" + val.MawbComplete + textPhatDO + "</td >";
                    html_Complete += "<td class=\"td-hawb " + tomauMAWBHAWB + " font-weight-css  " + tomauWH + "\">" + val.HawbComplete + textHQGS + "</td>";
                    html_Complete += "<td class=\"td-pcs\">" + val.SoKienThucComplete + "</td>";
                    html_Complete += "<td class=\"td-cm\">" + val.SoCanThucComplete + "</td>";
                    html_Complete += "<td class=\"\">CBM</td>";
                    //html_Complete += "<td class=\"td-flt\">" + val.ChuyenBayTTComplete + "</td>";
                    html_Complete += "<td class=\"td-date ngaybaytt\">" + convertDate(val.NgayGioBayTTComplete)[1] + "</td>";
                    html_Complete += "<td class=\"td-time giobaytt\">" + (convertDate(val.NgayGioBayTTComplete)[3] == "00:00" ? "" : convertDate(val.NgayGioBayTTComplete)[3]) + "</td>";
                    html_Complete += "<td class=\"td-date ngayyctrahang " + tomaucotorderDTComplete + "\">" + convertDate(val.NgayGioYeuCauTraHangComplete)[1] + "</td>";
                    html_Complete += "<td class=\"td-time gioyctrahang " + tomaucotorderDTComplete + "\">" + (convertDate(val.NgayGioYeuCauTraHangComplete)[3] == "00:00" ? "" : convertDate(val.NgayGioYeuCauTraHangComplete)[3]) + "</td>";
                    html_Complete += "<td class=\"\">Receiving W.H</td>";
                    html_Complete += "<td class=\"\">BU</td>";
                    html_Complete += "<td class=\"\">TMS</td>";
                    html_Complete += "<td class=\"td-date font-weight-css ngaygiaoxong " + tomaucotngaygiogiaoxongComplete + "\">" + convertDate(val.NgayGioGiaoXongComplete)[1] + "</td>";
                    html_Complete += "<td class=\"td-time font-weight-css giogiaoxong " + tomaucotngaygiogiaoxongComplete + " \">" + (convertDate(val.NgayGioGiaoXongComplete)[3] == "00:00" ? "" : convertDate(val.NgayGioGiaoXongComplete)[3]) + "</td>";
                    html_Complete += "<td class=\"td-truckID\">" + val.BKSXeGiaoComplete + "</td>";
                    html_Complete += "<td class=\"td-code\">" + val.CodeComplete + "</td>";
                    html_Complete += "<td class=\"td-fwd\">" + val.MaDonViNhanComplete + "</td>";
                    //html_Complete += "<td class=\"td-wh " + tomauWH + "\">" + val.MaKho + "</td>";
                    //html_Complete += "<td>" + val.TinhTrangTB + "</td>";
                    html_Complete += "<td>" + val.Invoice + "</td>";
                    html_Complete += "<td>" + val.GhiChuComplete + "</td>";
                    //html_Complete += "<td>" + val.CNEEMAWB + "</td>";
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
            $.each(d.danhSachFWDs, function (item, val) {
                html_DanhSachFWDS += "<label class=\"checkbox-inline color-white\"><input type=\"checkbox\" class=\"cb-qll cb-qll-child\" checked id=\"cb-" + val.fwd.replace(".", "-") + "\" value=\"" + val.fwd.replace(".", "-") + "\" />" + val.fwd + "</label>";
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
    $("#btn-kehoach-luu").click(function () {
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var keHoachCPNs = [];
        var cells;
        var cell_TMS = "";
        var cell_HAWB = "";
        var cell_SoKien = "";
        var cell_GrossW = "";
        var cell_CBM = "";
        var cell_SoInVoice = "";
        var cell_TenHang = "";
        var cell_ChuyenBay = "";
        var cell_NgayDen = "";
        var cell_GioDen = "";
        var cell_NgayYeuCauTraHang = "";
        var cell_GioYeuCauTraHang = "";
        var cell_NCC = "";
        var cell_PIC = "";
        var cell_GhiChu = "";
        var cell_NguoiNhanTrenMAWB = "";

        var ip_fwd = $(".input-fwd").val();
        var ip_chuyenbay = $(".input-chuyenbay").val();
        var ip_ngaytb = dmy2ymd($(".input-ngaynhantb").val());
        var ip_giotb = $(".input-gionhantb").val();

        data.forEach(function (dataItem, dataIndex) {
            cell_TMS = "";
            cell_HAWB = "";
            cell_SoKien = "";
            cell_GrossW = "";
            cell_CBM = "";
            cell_SoInVoice = "";
            cell_TenHang = "";
            cell_ChuyenBay = "";
            cell_NgayDen = "";
            cell_GioDen = "";
            cell_NgayYeuCauTraHang = "";
            cell_GioYeuCauTraHang = "";
            cell_NCC = "";
            cell_PIC = "";
            cell_GhiChu = "";
            cell_NguoiNhanTrenMAWB = "";

            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_TMS = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_HAWB = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoKien = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_GrossW = cells[cellIndex].value;
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            cell_CBM = cells[cellIndex].value;
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoInVoice = cells[cellIndex].value;
                        }
                        break;
                    //case 6:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        cell_TenHang = cells[cellIndex].value;
                    //    }
                    //    break;
                    //case 7:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        cell_ChuyenBay = cells[cellIndex].value;
                    //    }
                    //    break;
                    //case 8:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        cell_NgayDen = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));

                    //    }
                    //    break;
                    //case 9:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                    //            cell_GioDen = Decimal2Time(cells[cellIndex].value * 24);
                    //        }
                    //    }
                    //    break;
                    case 6:
                        if (cells[cellIndex].value !== undefined) {
                            cell_NgayYeuCauTraHang = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));

                        }
                        break;
                    case 7:
                        if (cells[cellIndex].value !== undefined) {
                            if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                                cell_GioYeuCauTraHang = Decimal2Time(cells[cellIndex].value * 24);
                            }
                        }
                        break;
                    case 8:
                        if (cells[cellIndex].value !== undefined) {
                            cell_NCC = cells[cellIndex].value;
                        }
                        break;
                    case 9:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PIC = cells[cellIndex].value;
                        }
                        break;
                    case 10:
                        if (cells[cellIndex].value !== undefined) {
                            cell_GhiChu = cells[cellIndex].value;
                        }
                        break;
                    //case 11:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        cell_NguoiNhanTrenMAWB = cells[cellIndex].value;
                    //    }
                    //    break;
                }
            })

            keHoachCPNs.push(
                {
                    "iu": ""
                    ,"Id" : ""
                    , "MaTheoDoi": ""
                    , "MAWB": ""
                    , "HAWB": String(cell_HAWB).trim().replace(/ /g, '')
                    , "SoKienTB": String(cell_SoKien).trim().replace(/ /g, '')
                    , "GM": String(cell_GrossW).trim().replace(/ /g, '')
                    , "CM": ""
                    , "ChuyenBayTB": ip_chuyenbay
                    , "NgayBayTB": String(cell_NgayDen).trim().replace(/ /g, '')
                    , "GioBayTB": String(cell_GioDen).trim().replace(/ /g, '')
                    , "NgayNhanTB": ip_ngaytb
                    , "GioNhanTB": String(ip_giotb).trim().replace(/ /g, '')
                    , "FWDS": String(ip_fwd).trim().replace(/ /g, '')
                    , "TinhTrangTB": ""
                    , "GhiChuTB": String(cell_GhiChu).trim().replace(/ /g, '')
                    , "Status1": ""
                    , "NgayYeuCauTraHang": String(cell_NgayYeuCauTraHang).trim().replace(/ /g, '')
                    , "GioYeuCauTraHang": String(cell_GioYeuCauTraHang).trim().replace(/ /g, '')
                    , "DVTraHang": ""
                    , "NhaCC": String(cell_NCC).trim().replace(/ /g, '')
                    , "TenHang": String(cell_TenHang).trim().replace(/ /g, '')
                    , "MaKho": ""
                    , "NVNhapPre": ""
                    , "NgayNhapPre": ""
                    , "DVHQ_NBA": ""
                    , "MaHS": ""
                    , "Invoice": String(cell_SoInVoice).trim().replace(/ /g, '')
                    , "Pic": String(cell_PIC).trim().replace(/ /g, '')
                    , "DO": ""
                    , "DiemDi": ""
                    , "NguoiNhanTrenMAWB": ""
                    , "MaTheoDoi_KHKH": ""
                    , "SoTMS": String(cell_TMS).trim().replace(/ /g, '')
                    , "CBM": String(cell_CBM).trim().replace(/ /g, '')
                }
            );
        })

        //console.log(keHoachCPNs)

        var jsonData = JSON.stringify({ keHoachCPNs });
        $.ajax({
            type: "POST",
            url: "ChuyenPhatNhanhCPN.aspx/InsertKeHoach",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d)
                if (d == "ok") {
                    Swal.fire(
                        'Thêm mới!',
                        'Bạn đã thêm kế hoạch thành công',
                        'success'
                    )
                    fncLoad();
                    $("#modalTaoKeHoach").modal("hide");
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
    });

    // Show modal excle nhập kế hoạch
    $("#btn-taokehoach").click(function () {
        $(".input-ngaynhantb").val(moment().format("DD/MM/YYYY"));
        $(".input-gionhantb").val(moment().format("HH:mm"));
        $("#modalTaoKeHoach").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheet").empty();
        $("#spreadsheet").kendoSpreadsheet({
            columns: 2,
            rows: 500,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
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
                        { value: "Số TMS", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "HAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số kiện", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Gross Weight", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "CBM", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số Invoice", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Tên hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Chuyến bay đến", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Ngày đến", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Giờ đến", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Ngày yêu câu trả hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Giờ yêu câu trả hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Nhà cung cấp", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PIC", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Ghi chú", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Người nhận trên MAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// Số TMS
                        width: 110
                    },
                    {// HAWB
                        width: 110
                    }, {// Số kiện
                        width: 50
                    },
                    {// Gross Weight
                        width: 50
                    },
                    {// CBM
                        width: 50
                    },
                    {// Số Invoice
                        width: 110
                    },
                    //{//Tên hàng
                    //    width: 110
                    //},
                    //{// Chuyến bay đến
                    //    width: 110
                    //},
                    //{// Ngày đến
                    //    width: 100
                    //},
                    //{//Giờ đến
                    //    width: 50
                    //},
                    {// "Ngày yêu câu trả hàng
                        width: 100
                    },
                    {// Giờ yêu câu trả hàng
                        width: 100
                    },
                    {// Nhà cung cấp
                        width: 150
                    },
                    {// PIC
                        width: 100
                    },
                    {// Ghi chú
                        width: 150
                    },
                    //{// Người nhận trên MAWB
                    //    width: 100
                    //}
                ]
            }]
        });
    });
}

function fncModalShowHide() {
    $('#modalTaoKeHoach').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });
}