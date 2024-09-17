var x_year = new Date();
x_yearnow = x_year.getFullYear();
x_monthnow = x_year.getMonth() + 1;
var mo_mawb;
var ajaxGet = "";
var ajaxGet2 = "";
var ajaxGet3 = "";
var ajaxGet4 = "";
var JsonData = "";
var d = "";
var list_fwd = [];
var arrayHawb = [];
var like = false;
var this_text = "";
var html_tablePlan = "";
var html_tablePlan1 = "";
var html_tablePlan2 = "";
var html_tablePlan3 = "";
var html_tablePlan4 = "";
var html_body_Plan = "";
var html_sub_Plan1 = "";
var html_sub_Plan2 = "";
var html_sub_Plan3 = "";
var html_sub_Plan = "";
var checkPrint = true;
var checkFWD = "";
var jsonYNghiaTrangThaiKeHoach = {};

var textGetInOut = "";
var jsonYNghiaTrangThai = {
    "sotrangthai": 8,
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
        "tentrangthai": "LOADING ON TRUCK",
        "anh": "images/truck.png",
        "ynghia": "Hiển thị những lô hàng đang tạo truyền ds VCMĐ (bill) + Mở TK OLA.",
        "dieukien": "Những lô hàng mà đang thực hiện (truyền DSVC MĐ và truyền TK OLA).\nVà có ngày giờ xe Về VSIP trước giờ thực tế."
    },
    "trangthai4": {
        "tentrangthai": "TRUCK TO ALSE",
        "anh": "images/TRUCKING ALSE.png",
        "ynghia": "Hiển thị những lô hàng đang trên đường vận chuyển về tới kho ALSE.",
        "dieukien": "Những lô hàng mà đang thực hiện (truyền DSVC MĐ và truyền TK OLA).\nVà có ngày giờ xe Về VSIP sau giờ thực tế."
    },
    "trangthai5": {
        "tentrangthai": "ALSE WAREHOUSE",
        "anh": "images/alsewh.png",
        "ynghia": "Hiển thị những lô hàng đã được chuyển về tới kho ALSE và được khai thác xong.",
        "dieukien": "Những lô hàng mà đã được Duyệt chuyến xe về."
    },
    "trangthai6": {
        "tentrangthai": "CUSTOM CLEARANCE",
        "anh": "images/hoanthanhhaiquan.png",
        "ynghia": "Hiển thị những lô hàng đã được thông quan và qua khu vực giám sát.",
        "dieukien": "Những lô hàng mà đã được Duyệt PXK."
    },
    "trangthai7": {
        "tentrangthai": "DELIVERING",
        "anh": "images/DELYVERING.png",
        "ynghia": "Hiển thị những lô hàng đang thực hiện giao hàng.",
        "dieukien": "Những lô hàng mà đã được Duyệt PXK và tạo Phiếu Giao hàng."
    },
    "trangthai8": {
        "tentrangthai": "COMPLETE",
        "anh": "images/COMPLETE.png",
        "ynghia": "Hiển thị những lô hàng đã được giao xong.",
        "dieukien": "Những lô hàng mà đã được duyệt Phiếu Giao hàng."
    }
};

var jsonYNghiaTrangThaiKeHoach = {
    "sotrangthai": 8,
    "trangthai1": {
        "tentrangthai": "Ngày kế hoạch",
        "anh": "images/mail_web.png",
        "ynghia": "Màu xanh",
        "dieukien": "Những lô có ngày từ ngày hiện tại."
    },
    "trangthai2": {
        "tentrangthai": "Ngày kế hoạch",
        "anh": "images/DELIVERY PLAN.png",
        "ynghia": "Màu vàng",
        "dieukien": "Những lô có ngày từ ngày hiện tại."
    },
    "trangthai3": {
        "tentrangthai": "Ngày FLTDT",
        "anh": "images/truck.png",
        "ynghia": "Màu xanh",
        "dieukien": "Những lô có ngày giờ FLT.D & FLT.T - Ngày giờ hệ thống < 24 tiếng."
    },
    "trangthai4": {
        "tentrangthai": "Ngày FLTDT",
        "anh": "images/TRUCKING ALSE.png",
        "ynghia": "Màu vàng",
        "dieukien": "Những lô có ngày giờ FLT.D & FLT.T - Ngày giờ hệ thống < 12 tiếng."
    },
    "trangthai5": {
        "tentrangthai": "Ngày FLTDT",
        "anh": "images/alsewh.png",
        "ynghia": "Màu đỏ",
        "dieukien": "Những lô có ngày giờ FLT.D & FLT.T - Ngày giờ hệ thống < 12 tiếng."
    },
    "trangthai6": {
        "tentrangthai": "Ngày NBA, ALSE",
        "anh": "images/hoanthanhhaiquan.png",
        "ynghia": "Màu xanh",
        "dieukien": "Những lô có ngày giờ CutOff - Ngày giờ hệ thống < 12 tiếng."
    },
    "trangthai7": {
        "tentrangthai": "Ngày NBA, ALSE",
        "anh": "images/DELYVERING.png",
        "ynghia": "Màu vàng",
        "dieukien": "Những lô có ngày giờ CutOff - Ngày giờ hệ thống < 6 tiếng."
    },
    "trangthai8": {
        "tentrangthai": "Ngày NBA, ALSE",
        "anh": "images/COMPLETE.png",
        "ynghia": "Màu đỏ.",
        "dieukien": "Những lô có ngày giờ CutOff - Ngày giờ hệ thống < 0 tiếng."
    }
};
// console.log(jsonYNghiaTrangThai);
$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();
    hideModal_changestatus();
    hideModal_BaoCao();
    hideModal_BaoCao();
    modalBCSL();
    fncActions();

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

                break;
            case "show-uli":
                list_fwd = ["ULI"];
                like = true;

                break;

                break;
            case "show-efl":
                list_fwd = ["EFL"];
                like = true;

                break;

                break;
            case "show-kwe":
                list_fwd = ["KWE"];
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
    });

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

});

function fncLoad() {

    // Load checkBox FWD

    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/getHangXuatFWD",
        contentType: "application/json;charsert=utf-8",
        dataType: "json",
        data: jsonData,
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var html_DanhSachFWDS = "";
            html_DanhSachFWDS += "<label class=\"checkbox-inline  lable-title\">FWD: </label>";
            html_DanhSachFWDS += "<label class=\"checkbox-inline color-white\"><input type=\"checkbox\" class=\"cb-qll cb-qll-child\" checked id=\"cb-ALL\" value=\"ALL\" />" + "ALL" + "</label>";
            $.each(d, function (key, val) {
                html_DanhSachFWDS += "<label class=\"checkbox-inline color-white\"><input type=\"checkbox\" class=\"cb-qll cb-qll-child\" checked id=\"cb-" + val.FWD.replace(".", "-") + "\" value=\"" + val.FWD.replace(".", "-") + "\" />" + val.FWD + "</label>";
            });
            $("#td-getTTHX").empty().append(html_DanhSachFWDS);
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    });

    //Load all export
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/listAllExport",
        contentType: "application/json;charsert=utf-8",
        dataType: "json",
        data: jsonData,
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);

            var listPlan = d.Plan;
            var listBooking = d.Booking;
            var listAccepted = d.Accepted;
            var listPreAccept = d.PreAccept;
            var listLoadingOnTruck = d.LoadingOnTruck;
            var listAirPort = d.AirPort;
            var listTruckingToNBA = d.TruckingToNBA;
            var listComplete = d.Complete;


            //Add thêm ngày và giờ để tô màu flt thêm ngày và 11 giờ trưa hôm sau
            var startdate = new Date();
            var new_date = moment(startdate);
            new_date.add(1, 'days');
            new_date.set('hour', 11);
            new_date.set('minute', 00);
            new_date.set('second', 00);

            //Date now
            var dateNowMoment = moment(startdate);
            var dateNowMoment2 = moment(startdate);
            dateNowMoment.set('hour', 00)
            dateNowMoment.set('minute', 00)
            dateNowMoment.set('second', 00)

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
            thead += "<td class=\"td-ngaykehoach  \"        >Ngày KH</td>";
            thead += "<td class=\"td-truckD  \"         >Truck.D</td>";
            thead += "<td class=\"td-truckT  \"         >Truck.T</td>";
            thead += "<td class=\"td-fwd hx-fwd\"       >FWD</td>";
            thead += "<td class=\"td-wh  \"             >W.H</td>";
            thead += "<td class=\"td-remark  \"         >REMARK</td>";
            thead += "</tr>";
            thead += "</thead>";
            $(".tbl-header-fixed thead").remove();
            var tableOffset;
            if (d.Plan.length) {
                $("#tbl-Plan").prepend(thead);
                tableOffset = $("#tbl-Plan").offset().top;
                fncScrollFixed("tbl-Plan", 1, 0);
            }
            else if (d.Booking.length > 0) {
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

            // Plan List
            var SoKien = 0;
            var m_pro = 0;
            var m_per = 0;
            var m_per_text = "";
            var html_body_Plan = "";
            var html_sub_Plan = "";
            var html_sub_Plan1 = "";
            var html_sub_Plan2 = "";
            var html_sub_Plan3 = "";
            var htmlPlanPCS = "";
            var htmlPlanPCS1 = "";
            var MAWBGan = "";
            var SoKienGan = 0;
            var EST_PCSGan = 0;
            var html_tong = "";
            var indexNo = 1;
            $("#tbl-Plan tbody").empty();
            console.log(d.Plan);
            $.each(d.Plan, function (item, val) {
                //// Vòng lặp đầu tiên
                if (item == 0) {
                    // Tô màu ngày kế hoạch
                    var ngayKHmoment = moment(val.NgayKeHoach);
                    ngayKHmoment.set('hour', 23)
                    ngayKHmoment.set('minute', 59)
                    ngayKHmoment.set('second', 00)
                    var tomauKH = "";
                    if (dateNowMoment._d >= ngayKHmoment._d) {
                        tomauKH = "td-kh-yellow";
                    } else {
                        tomauKH = "td-kh-blue";
                    }

                    html_tablePlan += "<tr class=\"tr-qll-view tr-hover tr-makho-view tr-booking-view tr-makho-" + val.warehouse + " " + "  tr-qll-fwd-" + val.FWD.replace(".", "-") + " tr-makho-" + "\" id=\"mawb-" + val.MAWB.replace(' ', '') + "\"  kehoachid=\"" + val.MAWB.replace(' ', '') + "\">"
                    html_tablePlan += "<td class=\"td-no \">" + indexNo + "</td>";
                    if (val.intemdhl == "False") {
                        html_tablePlan += "<td class=\"td-img td-trangthai\">" + "<img src=\"images/booking.png\"  />" + "</td>";
                    } else {
                        html_tablePlan += "<td class=\"td-img td-trangthai\">" + "<img src=\"images/bookingDHL.png\"  />" + "</td>";
                    }
                    html_tablePlan += "<td class=\"td-bold\">" + val.MAWB.replace(' ', '') + "</td>";


                    html_tablePlan += "<td class=\"\" attrEstPcs=\"";

                    htmlPlanPCS += "\">";

                    htmlPlanPCS1 += "</td>";


                    html_tablePlan4 += "<td class=\"\">" + val.EST_GW + "</td>";
                    html_tablePlan4 += "<td class=\"\">" + val.FLT_No + "</td>";
                    html_tablePlan4 += "<td class=\"td-bold " + tomauFLTDateTime(val.FLT_Date, val.FLT_Time) + "\">" + convertDate(val.FLT_Date)[1] + "</td>";
                    html_tablePlan4 += "<td class=\"td-bold " + tomauFLTDateTime(val.FLT_Date, val.FLT_Time) + "\">" + val.FLT_Time + "</td>";
                    html_tablePlan4 += "<td class=\"" + tomauCutoffKH(val.cutot) + "\">" + convertDate(val.cutot)[2] + "</td>";
                    html_tablePlan4 += "<td class=\" " + tomauCuteKH(val.cute) + "\">" + convertDate(val.cute)[2] + "</td>";
                    html_tablePlan4 += "<td class=\"\">" + val.DestMAWB + "</td>";
                    html_tablePlan4 += "<td class=\"\">";
                    html_tablePlan4 += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.inLabelCheck == "True" ? "LB" : "") + "</span>";
                    html_tablePlan4 += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.danTemCheck == "True" ? "IT" : "") + "</span>";
                    html_tablePlan4 += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.scanPOCheck == "True" ? "PO" : "") + "</span>";
                    html_tablePlan4 += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.toKhaiCheck == "True" ? "TK" : "") + "</span>";
                    html_tablePlan4 += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.issueDocCheck == "True" ? "DO" : "") + "</span>";
                    html_tablePlan4 += "</td>";
                    html_tablePlan4 += "<td class=\"\"></td>";

                    html_tablePlan3 += "<td class=\"" + tomauKH + "\">" + convertDate(val.NgayKeHoach)[1] + "</td>";
                    html_tablePlan3 += "<td class=\"\">" + convertDate(val.ATA_DATETIME)[1] + "</td>";
                    html_tablePlan3 += "<td class=\"\"></td>";
                    html_tablePlan3 += "<td class=\"hx-fwd\">" + val.FWD + "</td>";
                    html_tablePlan3 += "<td class=\"\">" + val.warehouse + "</td>";
                    html_tablePlan3 += "<td class=\"\">" + val.REMARK + "</td>";
                    html_tablePlan3 += "</tr>"

                    html_tablePlan1 += "<td class=\"\">";
                    html_tablePlan1 += "<div class=\"progress\">";

                    html_tablePlan2 += "</div>";
                    html_tablePlan2 += "</div>";
                    html_tablePlan2 += "</td>";

                    html_sub_Plan += "<tr class=\"tr-sub-hide tr-sub-" + val.MAWB.replace(' ', '') + "\">";
                    html_sub_Plan += "<td colspan=\"2\">";
                    html_sub_Plan += "<a class=\"btn btn-sm btn-info btn-qll-sua1\" matheodoi=\"" + val.MaTheoDoi + "\"  kehoachid=\"" + val.Id + "\" soMAWB=\"" + val.MAWB + "\" soHAWB=\"" + val.HAWB + "\">Sửa</a>";
                    html_sub_Plan += " <button type=\"button\" class=\"btn btn-sm btn-danger btn-qll-xoa\" kehoachid=\"" + val.Id + "\" soMAWB=\"" + val.MAWB + "\" soHAWB=\"" + val.HAWB + "\">Xóa</button><br/>";
                    html_sub_Plan += "<button type=\"button\" class=\"btn btn-sm btn-primary btn-printLabel\" attrFWD=\"" + val.FWD + "\" attrDestMAWB=\"" + val.DestMAWB + "\" kehoachid=\"" + val.Id + "\" soMAWB=\"" + val.MAWB + "\" soHAWB=\"" + val.HAWB + "\" style=\" margin: 10px;\">Print</button>";
                    html_sub_Plan += "<td colspan=\"17\">";
                    html_sub_Plan += "<table class=\"table table-" + val.MAWB.replace(' ', '') + " table-bordered\">";
                    html_sub_Plan += "<thead>";
                    html_sub_Plan += "<tr>";
                    html_sub_Plan += "<td class=\"td-table-mawb\">HAWB</td>";
                    html_sub_Plan += "<td class=\"td-table-mawb\">PO</td>";
                    html_sub_Plan += "<td class=\"td-table-mawb\">OneHand</td>";
                    html_sub_Plan += "<td class=\"td-table-mawb\">INVDNN</td>";
                    html_sub_Plan += "<td class=\"td-table-mawb\">PartNumber</td>";
                    html_sub_Plan += "<td class=\"td-table-mawb\">Số kiện</td>";
                    html_sub_Plan += "<td class=\"td-table-mawb\">Trọng lượng</td>";
                    html_sub_Plan += "<td class=\"td-table-mawb\">Dest Mawb</td>";
                    html_sub_Plan += "<td class=\"td-table-mawb\">NhaMay</td>";
                    html_sub_Plan += "<td class=\"td-table-mawb\">BienSoXe</td>";
                    html_sub_Plan += "<td class=\"td-table-mawb\">FWD</td>";
                    html_sub_Plan += "<td class=\"td-table-mawb\">Ghi chú</td>";
                    html_sub_Plan += "</tr>";
                    html_sub_Plan += "</thead>";
                    html_sub_Plan += "<tbody>";
                    html_sub_Plan1 += "<tr>";
                    html_sub_Plan1 += "<td>" + val.HAWB + "</td>";
                    html_sub_Plan1 += "<td>" + val.PO + "</td>";
                    html_sub_Plan1 += "<td>" + val.OneHand + "</td>";
                    html_sub_Plan1 += "<td>" + val.INVDNN + "</td>";
                    html_sub_Plan1 += "<td>" + val.PartNumber + "</td>";



                    //html_sub_Plan1 += "<td>" + val.SoKien + " / " + val.EST_PCS + "</td>";
                    var kienPhanTram = (100 * (parseInt(val.SoKien) / parseInt(val.EST_PCS))).toFixed(0);
                    if (kienPhanTram >= 100) {
                        html_sub_Plan1 += "<td><div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%; background-color:#5cb85c\" >" + val.SoKien + "/" + val.EST_PCS + "</div></td>";
                    } else {
                        html_sub_Plan1 += "<td><div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:" + kienPhanTram + "%\">" + val.SoKien + "/" + val.EST_PCS + "</div></td>";
                    }

                    html_sub_Plan1 += "<td>" + val.TrongLuong + "</td>";
                    html_sub_Plan1 += "<td>" + val.DestMAWB + "</td>";
                    html_sub_Plan1 += "<td>" + val.NhaMay + "</td>";
                    html_sub_Plan1 += "<td>" + val.BienSoXe + "</td>";
                    html_sub_Plan1 += "<td>" + val.FWD + "</td>";
                    html_sub_Plan1 += "<td>" + val.REMARK + "</td>";
                    html_sub_Plan1 += "</tr>";

                    html_sub_Plan3 += "</tbody>";
                    html_sub_Plan3 += "</table>";

                    MAWBGan = val.MAWB;
                    SoKienGan = parseInt(val.SoKien);
                    EST_PCSGan = parseInt(val.EST_PCS);

                    if (d.Plan.length == 1) {
                        m_pro = (100 * (parseInt(SoKienGan) / parseInt(EST_PCSGan))).toFixed(0);
                        m_per_text = parseInt(SoKienGan) + "/" + parseInt(EST_PCSGan);
                        if (m_pro >= 100) {
                            m_per = "100";
                            //m_per_text = "100%";
                            html_tablePlan1 += "<div class=\"progress-bar progress-bar-warning progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"" + m_per + "\" aria-valuemin=\"0\"  aria-valuemax=\"100\" style=\"width:" + m_per + "%; background-color:#5cb85c\">";
                        } else {
                            m_per = m_pro;
                            html_tablePlan1 += "<div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"" + m_per + "\"  style=\"width:" + m_per + "%\">";
                        }
                        html_tong += html_tablePlan + EST_PCSGan + htmlPlanPCS + EST_PCSGan + htmlPlanPCS1 + html_tablePlan4 + html_tablePlan1 + m_per_text + html_tablePlan2 + html_tablePlan3 + html_sub_Plan + html_sub_Plan1 + html_sub_Plan2 + html_sub_Plan3;
                    }
                } else {
                    // tô màu ngày kế hoạch
                    var ngayKHmoment = moment(val.NgayKeHoach);
                    ngayKHmoment.set('hour', 23)
                    ngayKHmoment.set('minute', 59)
                    ngayKHmoment.set('second', 00)
                    var tomauKH = "";
                    if (dateNowMoment._d >= ngayKHmoment._d) {
                        tomauKH = "td-kh-yellow";
                    } else {
                        tomauKH = "td-kh-blue";
                    }

                    if (val.MAWB != MAWBGan) {
                        m_pro = (100 * (parseInt(SoKienGan) / parseInt(EST_PCSGan))).toFixed(0);
                        m_per_text = parseInt(SoKienGan) + "/" + parseInt(EST_PCSGan);
                        if (m_pro >= 100) {
                            m_per = "100";
                            html_tablePlan1 += "<div class=\"progress-bar progress-bar-warning progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"" + m_per + "\" aria-valuemin=\"0\"  aria-valuemax=\"100\" style=\"width:" + m_per + "%; background-color:#5cb85c\">";
                        } else {
                            m_per = m_pro;
                            html_tablePlan1 += "<div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"" + m_per + "\"  style=\"width:" + m_per + "%\">";
                        }

                        html_tong += html_tablePlan + EST_PCSGan + htmlPlanPCS + EST_PCSGan + htmlPlanPCS1 + html_tablePlan4 + html_tablePlan1 + m_per_text + html_tablePlan2 + html_tablePlan3 + html_sub_Plan + html_sub_Plan1 + html_sub_Plan2 + html_sub_Plan3;
                        html_tablePlan = "";
                        html_tablePlan1 = "";
                        html_tablePlan2 = "";
                        html_tablePlan3 = "";
                        html_sub_Plan = "";
                        html_sub_Plan1 = "";
                        html_sub_Plan2 = "";
                        html_sub_Plan3 = "";
                        htmlPlanPCS = "";
                        htmlPlanPCS1 = "";
                        html_tablePlan4 = "";

                        MAWBGan = "";
                        SoKienGan = 0;
                        EST_PCSGan = 0;
                        indexNo++;
                        html_tablePlan += "<tr class=\"tr-qll-view tr-hover tr-makho-view tr-booking-view  tr-makho-" + val.warehouse + " tr-qll-fwd-" + val.FWD.replace(".", "-") + " tr-makho-" + "\" id=\"mawb-" + val.MAWB.replace(' ', '') + "\"  kehoachid=\"" + val.MAWB.replace(' ', '') + "\">"
                        html_tablePlan += "<td class=\"td-no \">" + indexNo + "</td>";
                        if (val.intemdhl == "False") {
                            html_tablePlan += "<td class=\"td-img td-trangthai\">" + "<img src=\"images/booking.png\"  />" + "</td>";
                        } else {
                            html_tablePlan += "<td class=\"td-img td-trangthai\">" + "<img src=\"images/bookingDHL.png\"  />" + "</td>";
                        }
                        html_tablePlan += "<td class=\"td-bold\">" + val.MAWB.replace(' ', '') + "</td>";


                        html_tablePlan += "<td class=\"\" attrEstPcs=\"";

                        htmlPlanPCS += "\">";

                        htmlPlanPCS1 += "</td>";


                        html_tablePlan4 += "<td class=\"\">" + val.EST_GW + "</td>";
                        html_tablePlan4 += "<td class=\"\">" + val.FLT_No + "</td>";
                        html_tablePlan4 += "<td class=\"td-bold " + tomauFLTDateTime(val.FLT_Date, val.FLT_Time) + "\">" + convertDate(val.FLT_Date)[1] + "</td>";
                        html_tablePlan4 += "<td class=\"td-bold " + tomauFLTDateTime(val.FLT_Date, val.FLT_Time) + "\">" + val.FLT_Time + "</td>";
                        html_tablePlan4 += "<td class=\"" + tomauCutoffKH(val.cutot) + "\">" + convertDate(val.cutot)[2] + "</td>";
                        html_tablePlan4 += "<td class=\"" + tomauCuteKH(val.cute) + "\">" + convertDate(val.cute)[2] + "</td>";
                        html_tablePlan4 += "<td class=\"\">" + val.DestMAWB + "</td>";
                        html_tablePlan4 += "<td class=\"\">";
                        html_tablePlan4 += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.inLabelCheck == "True" ? "LB" : "") + "</span>";
                        html_tablePlan4 += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.danTemCheck == "True" ? "IT" : "") + "</span>";
                        html_tablePlan4 += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.scanPOCheck == "True" ? "PO" : "") + "</span>";
                        html_tablePlan4 += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.toKhaiCheck == "True" ? "TK" : "") + "</span>";
                        html_tablePlan4 += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.issueDocCheck == "True" ? "DO" : "") + "</span>";
                        html_tablePlan4 += "</td>";
                        html_tablePlan4 += "<td class=\"\"></td>";

                        html_tablePlan3 += "<td class=\"" + tomauKH + "\">" + convertDate(val.NgayKeHoach)[1] + "</td>";
                        html_tablePlan3 += "<td class=\"\">" + convertDate(val.ATA_DATETIME)[1] + "</td>";
                        html_tablePlan3 += "<td class=\"\"></td>";
                        html_tablePlan3 += "<td class=\"hx-fwd\">" + val.FWD + "</td>";
                        html_tablePlan3 += "<td class=\"\">" + val.warehouse + "</td>";
                        html_tablePlan3 += "<td class=\"\">" + val.REMARK + "</td>";
                        html_tablePlan3 += "</tr>"

                        html_tablePlan1 += "<td class=\"\">";
                        html_tablePlan1 += "<div class=\"progress\">";

                        html_tablePlan2 += "</div>";
                        html_tablePlan2 += "</div>";
                        html_tablePlan2 += "</td>";


                        html_sub_Plan += "<tr class=\"tr-sub-hide tr-sub-" + val.MAWB.replace(' ', '') + "\">";
                        html_sub_Plan += "<td colspan=\"2\">";
                        html_sub_Plan += "<div style=\"margin-bottom: 10px;\">"
                        html_sub_Plan += "<button type=\"button\" class=\"btn  btn-sm  btn-info btn-qll-sua1\" matheodoi=\"" + val.MaTheoDoi + "\"  kehoachid=\"" + val.Id + "\" soMAWB=\"" + val.MAWB + "\" soHAWB=\"" + val.HAWB + "\">Sửa</button>";
                        html_sub_Plan += " <button type=\"button\" class=\"btn btn-sm btn-danger btn-qll-xoa\" kehoachid=\"" + val.Id + "\" soMAWB=\"" + val.MAWB + "\" soHAWB=\"" + val.HAWB + "\">Xóa</button><br/>";
                        html_sub_Plan += "</div>"
                        html_sub_Plan += "<div>"
                        html_sub_Plan += " <button type=\"button\" class=\"btn btn-sm btn-primary btn-printLabel\"  attrFWD=\"" + val.FWD + "\" attrDestMAWB=\"" + val.DestMAWB + "\" kehoachid=\"" + val.Id + "\" soMAWB=\"" + val.MAWB + "\" soHAWB=\"" + val.HAWB + "\">Print</button>";
                        html_sub_Plan += "</div>"
                        html_sub_Plan += "</td>";

                        html_sub_Plan += "<td colspan=\"17\">";
                        html_sub_Plan += "<table class=\"table table-" + val.MAWB.replace(' ', '') + " table-bordered\">";
                        html_sub_Plan += "<thead>";
                        html_sub_Plan += "<tr>";
                        html_sub_Plan += "<td class=\"td-table-mawb\">HAWB</td>";
                        html_sub_Plan += "<td class=\"td-table-mawb\">PO</td>";
                        html_sub_Plan += "<td class=\"td-table-mawb\">OneHand</td>";
                        html_sub_Plan += "<td class=\"td-table-mawb\">INVDNN</td>";
                        html_sub_Plan += "<td class=\"td-table-mawb\">PartNumber</td>";
                        html_sub_Plan += "<td class=\"td-table-mawb\">Số kiện</td>";
                        html_sub_Plan += "<td class=\"td-table-mawb\">Trọng lượng</td>";
                        html_sub_Plan += "<td class=\"td-table-mawb\">Dest Mawb</td>";
                        html_sub_Plan += "<td class=\"td-table-mawb\">NhaMay</td>";
                        html_sub_Plan += "<td class=\"td-table-mawb\">BienSoXe</td>";
                        html_sub_Plan += "<td class=\"td-table-mawb\">FWD</td>";
                        html_sub_Plan += "<td class=\"td-table-mawb\">Ghi chú</td>";
                        html_sub_Plan += "</tr>";
                        html_sub_Plan += "</thead>";
                        html_sub_Plan += "<tbody>";

                        html_sub_Plan1 += "<tr>";
                        html_sub_Plan1 += "<td>" + val.HAWB + "</td>";
                        html_sub_Plan1 += "<td>" + val.PO + "</td>";
                        html_sub_Plan1 += "<td>" + val.OneHand + "</td>";
                        html_sub_Plan1 += "<td>" + val.INVDNN + "</td>";
                        html_sub_Plan1 += "<td>" + val.PartNumber + "</td>";
                        //html_sub_Plan1 += "<td>" + val.SoKien + " / " + val.EST_PCS + "</td>";
                        var kienPhanTram = (100 * (parseInt(val.SoKien) / parseInt(val.EST_PCS))).toFixed(0);
                        if (kienPhanTram >= 100) {
                            html_sub_Plan1 += "<td><div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100%; background-color:#5cb85c\">" + val.SoKien + "/" + val.EST_PCS + "</div></td>";
                        } else {
                            html_sub_Plan1 += "<td><div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:" + kienPhanTram + "%\">" + val.SoKien + "/" + val.EST_PCS + "</div></td>";
                        }
                        html_sub_Plan1 += "<td>" + val.TrongLuong + "</td>";
                        html_sub_Plan1 += "<td>" + val.DestMAWB + "</td>";
                        html_sub_Plan1 += "<td>" + val.NhaMay + "</td>";
                        html_sub_Plan1 += "<td>" + val.BienSoXe + "</td>";
                        html_sub_Plan1 += "<td>" + val.FWD + "</td>";
                        html_sub_Plan1 += "<td>" + val.REMARK + "</td>";
                        html_sub_Plan1 += "</tr>";

                        html_sub_Plan3 += "</tbody>";
                        html_sub_Plan3 += "</table>";

                        MAWBGan = val.MAWB;
                        SoKienGan = parseInt(val.SoKien);
                        EST_PCSGan = parseInt(val.EST_PCS);

                    } else {
                        html_sub_Plan2 += "<tr>";
                        html_sub_Plan2 += "<td>" + val.HAWB + "</td>";
                        html_sub_Plan2 += "<td>" + val.PO + "</td>";
                        html_sub_Plan2 += "<td>" + val.OneHand + "</td>";
                        html_sub_Plan2 += "<td>" + val.INVDNN + "</td>";
                        html_sub_Plan2 += "<td>" + val.PartNumber + "</td>";
                        //html_sub_Plan2 += "<td>" + val.SoKien + " / " + val.EST_PCS + "</td>";
                        var kienPhanTram = (100 * (parseInt(val.SoKien) / parseInt(val.EST_PCS))).toFixed(0);
                        if (kienPhanTram >= 100) {
                            html_sub_Plan2 += "<td><div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:100% ; background-color:#5cb85c\" >" + val.SoKien + "/" + val.EST_PCS + "</div></td>";
                        } else {
                            html_sub_Plan2 += "<td><div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:" + kienPhanTram + "%\">" + val.SoKien + "/" + val.EST_PCS + "</div></td>";
                        }
                        html_sub_Plan2 += "<td>" + val.TrongLuong + "</td>";
                        html_sub_Plan2 += "<td>" + val.DestMAWB + "</td>";
                        html_sub_Plan2 += "<td>" + val.NhaMay + "</td>";
                        html_sub_Plan2 += "<td>" + val.BienSoXe + "</td>";
                        html_sub_Plan2 += "<td>" + val.FWD + "</td>";
                        html_sub_Plan2 += "<td>" + val.REMARK + "</td>";
                        html_sub_Plan2 += "</tr>";
                        MAWBGan = val.MAWB;
                        SoKienGan += parseInt(val.SoKien);
                        EST_PCSGan += parseInt(val.EST_PCS);
                    }

                    if (item == (d.Plan.length - 1)) {
                        m_pro = (100 * (parseInt(SoKienGan) / parseInt(EST_PCSGan))).toFixed(0);
                        m_per_text = parseInt(SoKienGan) + "/" + parseInt(EST_PCSGan);
                        if (m_pro >= 100) {
                            m_per = "100";
                            //m_per_text = "100%";
                            html_tablePlan1 += "<div class=\"progress-bar progress-bar-warning progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"" + m_per + "\" aria-valuemin=\"0\"  aria-valuemax=\"100\" style=\"width:" + m_per + "%; background-color:#5cb85c\">";
                        } else {
                            m_per = m_pro;
                            html_tablePlan1 += "<div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"" + m_per + "\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"" + m_per + "\"  style=\"width:" + m_per + "%\">";
                        }

                        html_tong += html_tablePlan + EST_PCSGan + htmlPlanPCS + EST_PCSGan + htmlPlanPCS1 + html_tablePlan4 + html_tablePlan1 + m_per_text + html_tablePlan2 + html_tablePlan3 + html_sub_Plan + html_sub_Plan1 + html_sub_Plan2 + html_sub_Plan3;
                    }
                }

            });
            $("#tbl-Plan tbody").append(html_tong);

            //Booking List
            var html_tableBooking = "";
            $("#tbl-Booking tbody").empty();
            $.each(listBooking, function (item, val) {

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

                html_tableBooking += "<tr class=\"tr-qll-view tr-hover tr-makho-view  tr-makho-" + val.warehouseBooking + " " + "  tr-qll-fwd-" + val.fwdBooking.replace(".", "-") + " tr-makho-" + "\">";
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
            var html_sub_PlanPreaccept = "";
            var htmlBodyPreaccept = "";
            $("#tbl-PreAccept tbody").empty();
            //console.log(d.PreAccept);

            $.each(listPreAccept, function (item, val) {


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
                //console.log(new_date)
                //console.log(momentDtflt)
                if (new_date - momentDtflt._d > 0) {
                    tomaufltDT = "setbacgroupFltdAndFltNo";
                }

                html_tablePreaccept = "";
                html_sub_PlanPreaccept = "";

                html_tablePreaccept += "<tr class=\"tr-qll-view tr-hover tr-makho-view tr-makho-" + val.warehousePreAccept + " " + " tr-qll-fwd-" + val.fwdPreAccept.replace(".", "-") + "\" kehoachid=\"" + val.mawbPreAccept.replace(' ', '') + "\">";
                html_tablePreaccept += "<td class=\"td-no\">" + (item + 1) + "</td>";
                html_tablePreaccept += "<td class=\"td-img  td-trangthai\"    >" + "<img src=\"images/pre-accept.png\"/>" + "</td>";
                html_tablePreaccept += "<td class=\"td-mawb kmawb  " + tomau_td_kmawb + " \" attrDestMawb=\"" + val.destPreAccept + "\" attrFWD=\"" + val.fwdPreAccept + "\"  attrMatheodoi=\"" + val.MaTheoDoi + "\">" + val.mawbPreAccept + "</td>";
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

                //html_sub_PlanPreaccept += "<tr class=\"tr-sub-hide tr-sub-" + val.mawbPreAccept.replace(' ', '') + "\">";
                //html_sub_PlanPreaccept += "<td colspan=\"2\">";
                //html_sub_PlanPreaccept += "<button type=\"button\" class=\"btn btn-sm btn-info btn-qll-sua\" matheodoi=\"" + val.MaTheoDoi + "\"  kehoachid=\"" + val.Id + "\" soMAWB=\"" + val.mawbPreAccept + "\" soHAWB=\"" + val.HAWB + "\">Sửa</button>";
                //html_sub_PlanPreaccept += "<td colspan=\"17\">";
                //html_sub_PlanPreaccept += "<table class=\"table table-" + val.mawbPreAccept.replace(' ', '') + " table-bordered\">";
                //html_sub_PlanPreaccept += "<thead>";
                //html_sub_PlanPreaccept += "<tr>";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">HAWB</td>";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">DES_HAWB</td>";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">DES_TRANSIT</td>";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">EST_PCS</td>   ";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">EST_GW</td>   ";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">EST_VOL</td>   ";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">DO NO.</td>";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">PO</td>";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">MODEL</td> ";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">CIPL</td> ";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">SOKIEN</td> ";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">TRONGLUONG</td> ";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">CNEE</td>   ";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">SHIPPER</td>   ";
                //html_sub_PlanPreaccept += "<td class=\"td-table-mawb\">COMMODITY</td>    ";
                //html_sub_PlanPreaccept += "</tr>";
                //html_sub_PlanPreaccept += "</thead>";
                //html_sub_PlanPreaccept += "</table>";
                //html_sub_PlanPreaccept += "</tr>";

                htmlBodyPreaccept += html_tablePreaccept;
            });
            $("#tbl-PreAccept tbody").append(htmlBodyPreaccept);

            // Accepted List
            var html_tableAccepted = "";
            $("#tbl-Accepted tbody").empty();
            $.each(listAccepted, function (item, val) {

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

                html_tableAccepted += "<tr class=\"tr-qll-view tr-hover tr-makho-view tr-makho-" + val.warehouseAccepted + " " + "tr-qll-fwd-" + val.fwdAccepted.replace(".", "-") + "\">";
                html_tableAccepted += "<td class=\"td-no\">" + (item + 1) + "</td>";
                html_tableAccepted += "<td class=\"td-img  \"    >" + "<img src=\"images/blog_accept.png\" />" + "</td>";
                html_tableAccepted += "<td class=\"td-mawb kmawb " + tomau_td_kmawb + "\"  attrDestMawb=\"" + val.destPreAccepted + "\" attrFWD=\"" + val.fwdAccepted + "\" attrMatheodoi=\"" + val.MaTheoDoi + "\">" + val.mawbAccepted;
                html_tableAccepted += "</br>";
                html_tableAccepted += "<span class=\"span-duyet span-DuyetGiaoHangNBA\">" + (val.DuyetGiaoHangNBA == "True" ? "GH" : "") + "</span>";
                html_tableAccepted += "<span class=\"span-duyet span-DuyetCoDOC\">" + (val.DuyetCoDOC == "True" ? "Có Doc" : "") + "</span>";
                html_tableAccepted += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.DuyetGiaoDoc == "True" ? "GĐ" : "") + "</span>";
                html_tableAccepted += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.inLabelCheck == "True" ? "LB" : "") + "</span>";
                html_tableAccepted += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.danTemCheck == "True" ? "IT" : "") + "</span>";
                html_tableAccepted += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.scanPOCheck == "True" ? "PO" : "") + "</span>";
                html_tableAccepted += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.toKhaiCheck == "True" ? "TK" : "") + "</span>";
                html_tableAccepted += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.issueDocCheck == "True" ? "DO" : "") + "</span>";
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
            $.each(listLoadingOnTruck, function (item, val) {

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

                html_tableLoadOnTrucking += "<tr class=\"tr-qll-view tr-hover tr-makho-view tr-makho-" + val.warehouseLoadingOnTruck + " " + "tr-qll-fwd-" + val.fwdLoadingOnTruck.replace(".", "-") + " \">";
                html_tableLoadOnTrucking += "<td class=\"td-no\">" + (item + 1) + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-img  \"    >" + "<img src=\"images/truck.png\" />" + "</td>";
                html_tableLoadOnTrucking += "<td class=\"td-mawb kmawb " + tomau_td_kmawb + "\" attrDestMawb=\"" + val.destLoadingOnTruck + "\" attrFWD=\"" + val.fwdLoadingOnTruck + "\"  attrMatheodoi=\"" + val.MaTheoDoi + "\">" + val.mawbLoadingOnTruck;
                html_tableLoadOnTrucking += "</br>";
                html_tableLoadOnTrucking += "<span class=\"span-duyet span-DuyetGiaoHangNBA\">" + (val.DuyetGiaoHangNBA == "True" ? "GH" : "") + "</span>";
                html_tableLoadOnTrucking += "<span class=\"span-duyet span-DuyetCoDOC\">" + (val.DuyetCoDOC == "True" ? "Có Doc" : "") + "</span>";
                html_tableLoadOnTrucking += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.DuyetGiaoDoc == "True" ? "GĐ" : "") + "</span>";
                html_tableLoadOnTrucking += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.inLabelCheck == "True" ? "LB" : "") + "</span>";
                html_tableLoadOnTrucking += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.danTemCheck == "True" ? "IT" : "") + "</span>";
                html_tableLoadOnTrucking += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.scanPOCheck == "True" ? "PO" : "") + "</span>";
                html_tableLoadOnTrucking += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.toKhaiCheck == "True" ? "TK" : "") + "</span>";
                html_tableLoadOnTrucking += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.issueDocCheck == "True" ? "DO" : "") + "</span>";
                html_tableLoadOnTrucking += "</td>";
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
            $.each(listTruckingToNBA, function (item, val) {

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

                html_tableTruckingToNBA += "<tr class=\"tr-qll-view tr-hover tr-makho-view tr-makho-" + val.warehouseTruckingToNBA + " " + "tr-qll-fwd-" + val.fwdTruckingToNBA.replace(".", "-") + " \">";
                html_tableTruckingToNBA += "<td class=\"td-no\">" + (item + 1) + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-img cell-showmodal\"    >" + "<img src=\"images/lorrygreen.png\" />" + "</td>";
                html_tableTruckingToNBA += "<td class=\"td-mawb kmawb\" attrDestMawb=\"" + val.destTruckingToNBA + "\" attrFWD=\"" + val.fwdTruckingToNBA + "\"  attrMatheodoi=\"" + val.MaTheoDoi + "\">" + val.mawbTruckingToNBA;
                html_tableTruckingToNBA += "</br>";
                html_tableTruckingToNBA += "<span class=\"span-duyet span-DuyetGiaoHangNBA\">" + (val.DuyetGiaoHangNBA == "True" ? "GH" : "") + "</span>";
                html_tableTruckingToNBA += "<span class=\"span-duyet span-DuyetCoDOC\">" + (val.DuyetCoDOC == "True" ? "Có Doc" : "") + "</span>";
                html_tableTruckingToNBA += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.DuyetGiaoDoc == "True" ? "GĐ" : "") + "</span>";
                html_tableTruckingToNBA += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.inLabelCheck == "True" ? "LB" : "") + "</span>";
                html_tableTruckingToNBA += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.danTemCheck == "True" ? "IT" : "") + "</span>";
                html_tableTruckingToNBA += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.scanPOCheck == "True" ? "PO" : "") + "</span>";
                html_tableTruckingToNBA += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.toKhaiCheck == "True" ? "TK" : "") + "</span>";
                html_tableTruckingToNBA += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.issueDocCheck == "True" ? "DO" : "") + "</span>";
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
            $.each(listAirPort, function (item, val) {

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

                html_tableAirPort += "<tr class=\"tr-qll-view tr-hover tr-makho-view  tr-makho-" + val.warehouseAirPort + " " + "tr-qll-fwd-" + val.fwdAirPort.replace(".", "-") + " \">";
                html_tableAirPort += "<td class=\"td-no\">" + (item + 1) + "</td>";
                html_tableAirPort += "<td class=\"td-img cell-showmodal\"    >" + "<img src=\"images/Airport.png\" />" + "</td>";
                html_tableAirPort += "<td class=\"td-mawb  \" attrDestMawb=\"" + val.destAirPort + "\" attrFWD=\"" + val.fwdAirPort + "\"  attrMatheodoi=\"" + val.MaTheoDoi + "\">" + val.mawbAirPort;
                html_tableAirPort += "</br>";
                html_tableAirPort += "<span class=\"span-duyet span-DuyetGiaoHangNBA\">" + (val.DuyetGiaoHangNBA == "True" ? "GH" : "") + "</span>";
                html_tableAirPort += "<span class=\"span-duyet span-DuyetCoDOC\">" + (val.DuyetCoDOC == "True" ? "Có Doc" : "") + "</span>";
                html_tableAirPort += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.DuyetGiaoDoc == "True" ? "GĐ" : "") + "</span>";
                html_tableAirPort += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.inLabelCheck == "True" ? "LB" : "") + "</span>";
                html_tableAirPort += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.danTemCheck == "True" ? "IT" : "") + "</span>";
                html_tableAirPort += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.scanPOCheck == "True" ? "PO" : "") + "</span>";
                html_tableAirPort += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.toKhaiCheck == "True" ? "TK" : "") + "</span>";
                html_tableAirPort += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.issueDocCheck == "True" ? "DO" : "") + "</span>";
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
            $.each(listComplete, function (item, val) {

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
                textGetInOut = "";
                var backgroupRed = "";
                if (val.GetInAlsc == "True" && val.GetOutAlsc == "False") {
                    textGetInOut = "<span class=\"colorText\">get in</span>";
                    backgroupRed = "backgroupRed";
                } else if (val.GetInAlsc == "False" && val.GetOutAlsc == "True") {
                    backgroupRed = "backgroupRed";
                    textGetInOut = "<span class=\"colorText\">get out</span>";
                } else if (val.GetInAlsc == "True" && val.GetOutAlsc == "True") {
                    textGetInOut = "<span class=\"colorText\">get in,get out</span>";
                }

                html_tableComPlete += "<tr class=\"tr-qll-view tr-hover tr-makho-view tr-makho-" + val.warehouseComplete + " " + "tr-qll-fwd-" + val.fwdComplete.replace(".", "-") + "\">";
                html_tableComPlete += "<td class=\"td-no\">" + (item + 1) + "</td>";
                html_tableComPlete += "<td class=\"td-img cell-showmodal\"    >" + "<img src=\"images/falcon.png\" />" + "<br/> " + textGetInOut + "</td>";
                html_tableComPlete += "<td class=\"td-mawb  " + backgroupRed + "\" attrDestMawb=\"" + val.destComplete + "\"  attrFWD=\"" + val.fwdComplete + "\" attrMatheodoi=\"" + val.MaTheoDoi + "\">" + val.mawbComplete;
                html_tableComPlete += "</br>";
                html_tableComPlete += "<span class=\"span-duyet span-DuyetGiaoHangNBA\">" + (val.DuyetGiaoHangNBA == "True" ? "GH" : "") + "</span>";
                html_tableComPlete += "<span class=\"span-duyet span-DuyetCoDOC\">" + (val.DuyetCoDOC == "True" ? "Có Doc" : "") + "</span>";
                html_tableComPlete += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.DuyetGiaoDoc == "True" ? "GĐ" : "") + "</span>";
                html_tableComPlete += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.inLabelCheck == "True" ? "LB" : "") + "</span>";
                html_tableComPlete += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.danTemCheck == "True" ? "IT" : "") + "</span>";
                html_tableComPlete += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.scanPOCheck == "True" ? "PO" : "") + "</span>";
                html_tableComPlete += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.toKhaiCheck == "True" ? "TK" : "") + "</span>";
                html_tableComPlete += "<span class=\"span-duyet span-DuyetGiaoDoc\">" + (val.issueDocCheck == "True" ? "DO" : "") + "</span>";
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

    // Bacnq sua Trang thai hang xuat
    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/getExportStatus",
        data: jsonData,
        contentType: "application/json;charsert=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            $.each(d, function (item, val) {
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
                $("#google-pcs").text(numberTextWithCommas(val.google_pcs));
                $("#google-kgs").text(numberTextWithCommas(val.google_kgs));
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
                $("#apx-pcs").text(numberTextWithCommas(val.efl_pcs));
                $("#apx-kgs").text(numberTextWithCommas(val.efl_kgs));
                $("#hp-intoday-pcs").text(numberTextWithCommas(val.hp_InToday_pcs));
                $("#hp-intoday-kgs").text(numberTextWithCommas(val.hp_InToday_kgs));
                $("#hp-inyesterday-pcs").text(numberTextWithCommas(val.hp_InYesterday_pcs));
                $("#hp-inyesterday-kgs").text(numberTextWithCommas(val.hp_InYesterday_kgs));
            });
            $("#tr-loading").hide();
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    });

    //load Trang Thai Hang Xuat
    //setTimeout(function () {
    //    $.ajax({
    //        type: "POST",
    //        url: "QuanLyHangXuat.aspx/getExportStatus",
    //        data: jsonData,
    //        contentType: "application/json;charsert=utf-8",
    //        dataType: "json",
    //        async: false,
    //        success: function (responsive) {
    //            d = responsive.d;
    //            //console.log(d);
    //            $.each(d, function (item, val) {
    //                $("#bn-total-pcs").text(numberTextWithCommas(val.bn_Total_pcs));
    //                $("#bn-total-kgs").text(numberTextWithCommas(val.bn_Total_kgs));
    //                $("#bn-include-skid").text(numberTextWithCommas(val.bn_Include_skid));
    //                $("#bn-include-carton").text(numberTextWithCommas(val.bn_Include_carton));
    //                $("#bn-mawb-pcs").text(numberTextWithCommas(val.bn_Mawb_pcs));
    //                $("#bn-mawb-kgs").text(numberTextWithCommas(val.bn_Mawb_kgs));
    //                //$("#bn-volume-cbm").text(numberTextWithCommas(val.bn_Volume_cbm));
    //                $("#bn-expyesterday-pcs").text(numberTextWithCommas(val.bn_ExpYesterday_pcs));
    //                $("#bn-expyesterday-kgs").text(numberTextWithCommas(val.bn_ExpYesterday_kgs));
    //                $("#bn-exptoday-pcs").text(numberTextWithCommas(val.bn_ExpToday_pcs));
    //                $("#bn-exptoday-kgs").text(numberTextWithCommas(val.bn_ExpToday_kgs));
    //                $("#dhl-pcs").text(numberTextWithCommas(val.dhl_pcs));
    //                $("#dhl-kgs").text(numberTextWithCommas(val.dhl_kgs));
    //                $("#agi-pcs").text(numberTextWithCommas(val.agi_pcs));
    //                $("#agi-kgs").text(numberTextWithCommas(val.agi_kgs));
    //                $("#sck-pcs").text(numberTextWithCommas(val.sck_pcs));
    //                $("#sck-kgs").text(numberTextWithCommas(val.sck_kgs));
    //                $("#google-pcs").text(numberTextWithCommas(val.google_pcs));
    //                $("#google-kgs").text(numberTextWithCommas(val.google_kgs));
    //                $("#bn-inyesterday-pcs").text(numberTextWithCommas(val.bn_InYesterday_pcs));
    //                $("#bn-inyesterday-kgs").text(numberTextWithCommas(val.bn_InYesterday_kgs));
    //                $("#bn-intoday-pcs").text(numberTextWithCommas(val.bn_InToday_pcs));
    //                $("#bn-intoday-kgs").text(numberTextWithCommas(val.bn_InToday_kgs));

    //                // hp
    //                $("#hp-total-pcs").text(numberTextWithCommas(val.hp_Total_pcs));
    //                $("#hp-total-kgs").text(numberTextWithCommas(val.hp_Total_kgs));
    //                $("#hp-expyesterday-pcs").text(numberTextWithCommas(val.hp_ExpYesterday_pcs));
    //                $("#hp-expyesterday-kgs").text(numberTextWithCommas(val.hp_ExpYesterday_kgs));
    //                $("#hp-exptoday-pcs").text(numberTextWithCommas(val.hp_ExpToday_pcs));
    //                $("#hp-exptoday-kgs").text(numberTextWithCommas(val.hp_ExpToday_kgs));
    //                $("#pt-pcs").text(numberTextWithCommas(val.pt_pcs));
    //                $("#pt-kgs").text(numberTextWithCommas(val.pt_kgs));
    //                $("#apx-pcs").text(numberTextWithCommas(val.efl_pcs));
    //                $("#apx-kgs").text(numberTextWithCommas(val.efl_kgs));
    //                $("#hp-intoday-pcs").text(numberTextWithCommas(val.hp_InToday_pcs));
    //                $("#hp-intoday-kgs").text(numberTextWithCommas(val.hp_InToday_kgs));
    //                $("#hp-inyesterday-pcs").text(numberTextWithCommas(val.hp_InYesterday_pcs));
    //                $("#hp-inyesterday-kgs").text(numberTextWithCommas(val.hp_InYesterday_kgs));
    //            });
    //            $("#tr-loading").hide();
    //        },
    //        error: function (messageError) {
    //            console.log("Lỗi : " + messageError.responseText);
    //        }
    //    });
    //}, 5000);

    //// get noti
    //$.ajax({
    //    type: "POST",
    //    url: "TrangThaiHangXuat.aspx/getNoti",
    //    data: jsonDataStatus,
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    async: true,
    //    success: function (responsive) {
    //        var item = responsive.d;
    //        //console.log(item);
    //        var noti_noti = "";
    //        var noti_mist = "";
    //        $.each(item, function (index, val) {
    //            if (val.noti_type == "noti") {
    //                noti_noti += "<li data-update=\"item" + (index + 1) + "\">";
    //                noti_noti += val.noti_content;
    //                noti_noti += "</li>";
    //            }
    //            else {
    //                noti_mist += "<li data-update=\"item" + (index + 1) + "\">";
    //                noti_mist += val.noti_content;
    //                noti_mist += "</li>";
    //            }
    //        })
    //        $("#webTicker-noti").append(noti_noti);
    //        $("#webTicker-mistake").append(noti_mist);
    //        $('#webTicker-noti').webTicker({
    //            speed: 70,
    //            duplicate: true,
    //        });
    //        $('#webTicker-mistake').webTicker({
    //            speed: 70,
    //            duplicate: true,
    //        });
    //    },
    //    error: function (messageError) {
    //        console.log("Lỗi : " + messageError.responseText);
    //    }
    //});

    // get Sai vị trí
    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/getSaiViTri",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            //console.log(responsive);
            var html_ViTri = "<p><a href=\"DNNCHECK.aspx?Tab=ChuaCoViTri\" target=\"_blank\">" + "Chưa có vị trí: " + responsive.d.saiVT + "</a></p>";
            $("#ltrHXViTri").empty();
            $("#ltrHXViTri").append(html_ViTri);
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    });

    // get Kiểm tồn
    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/getKiemTon",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            var KiemTon = "";
            var html_KiemTon = "";
            if (responsive.d.GhiChu != "Sai" && responsive.d.GioKiem != "Sai") {
                switch (responsive.d.GhiChu) {
                    case "Đã kiểm xong":
                        KiemTon = "Đã Kiểm Tồn";
                        break;

                    case "Bắt đầu kiểm":
                        KiemTon = "Đang Kiểm Tồn";
                        break;
                }
                html_KiemTon = "<p>" + KiemTon + "(" + responsive.d.GioKiem + ")" + "</p>";
                $("#div-getkiemton").empty();
                $("#div-getkiemton").append(html_KiemTon)
            }
            else {
                $("#div-getkiemton").append("<p>" + "Chưa Kiểm Tồn" + "</p>");
            }
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    });

    // get sai số kiện
    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/getSaiSoKien",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            //console.log(responsive);
            var html_SaiSoKien = "";
            html_SaiSoKien += "<p><a class=\"margin-saisokien\" href=\"DNNCHECK.aspx?Tab=SaiSoKien\" target=\"_blank\">" + "Sai Kiện Số: " + responsive.d.dnnsai + "</a></p>";
            html_SaiSoKien += "<p><a href=\"DNNCHECK.aspx?Tab=DNNKhacViTri\" target=\"_blank\">" + "DNN Khác Vị Trí:  " + responsive.d.dnnkhacvitri + "</a><p>";
            $("#div-saikienso").empty();
            $("#div-saikienso").append(html_SaiSoKien);
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    });

    //// Update sản lượng 



    //$.ajax({
    //    type: "POST",
    //    url: "QuanLyHangXuat.aspx/UpdateSanLuong",
    //    contentType: "application/json;charset=utf-8",
    //    dataType: "json",
    //    async: false,
    //    success: function (responsive) {
    //        console.log(responsive);
    //    },
    //    error: function (messageError) {
    //        console.log("Lỗi : " + messageError.responseText);3
    //    }
    //});
}

function fncActions() {
    $("#ModalDHL").on('hidden.bs.modal', function () {
        $("#dhl-ip").val("");
        $("#dhl-ten").val("");
        $("#dhl-soluong").val("");
    })


    $("#myModalEditChuyenBay").on('hidden.bs.modal', function () {
        $("#myModalChuyenBay").modal('show');
        loadChuyenBay(0);
    })

    $("#modalPrintEI").on('hidden.bs.modal', function () {
        $("#input-flight").val("");
        $("#input-deshawbEI").val("");
        $("#input-mawbEi").val("");
        $("#input-hawbEi").val("");
        $("#input-subhouse").val("");
        $("#input-masterEi").val("");
        $("#input-houseEi").val("");
    })

}

function fncClick() {
    // click print tem DHL
    $("#btn-print-dhl").click(function () {
        var _mawb = $(this).attr("attrMAWBDHL");
        var _ip = $("#dhl-ip").val();
        var _printName = $("#dhl-ten").val();
        var _soluong = $("#dhl-soluong").val();

        fncIntemDHL(_mawb, _ip, _printName, _soluong);
    });

    //// Tra cứu kế hoach
    //$("#modalKehoachMawb").on("click", ".btn-kehoach-list", function () {
    //    loadDataKeHoach($(this).val());
    //})

    //$("#btn-kehoach-mawb").click(function () {
    //    $("#modalKehoachMawb").modal("show");
    //    loadDataKeHoach("ALL");
    //});

    // show chi tiết MAWB 
    $("#myModalViewMawb").on("click", ".btn-chi-tiet-mawb", function () {
        $("#myModalViewMawb").modal("hide");
        $("#modalChiTietMAWB").modal("show");
        $(".title-mawb").empty().append($(this).attr("attrMAWB"));
        var ajaxGet = { "get": $(this).attr("attrMAWB") };

        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyHangXuat.aspx/reListMAWB",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            //timeout: 120000,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                html_body = "";
                $.each(d, function (key, val) {
                    html_body += "<tr>";
                    html_body += "<td>" + (key + 1) + "</td>";
                    html_body += "<td>" + val.SoDNN + "</td>";
                    html_body += "<td>" + val.SoHAWB + "</td>";
                    html_body += "<td>" + val.KienSo + "</td>";
                    html_body += "<td>" + val.SoKien + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioNhap)[2] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayCanThucTe)[2] + "</td>";
                    html_body += "<td>" + val.TrongLuong + "</td>";
                    html_body += "<td>" + val.KichThuoc + "</td>";
                    html_body += "<td>" + val.ViTri + "</td>";
                    html_body += "<td>" + val.FWD + "</td>";
                    html_body += "<td>" + val.GhiChuDNN + "</td>";
                    html_body += "</tr>";
                });
                $("#tbl-chi-tiet-mawb tbody").empty().append(html_body);
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
    })


    // click show modal ý nghĩa trạng thái kế hoạch
    $("#btn-kehoach-view").click(function () {
        $("#h4-kehoach-view-tieude").text("Ý NGHĨA TRẠNG THÁI");
        $("#tbl-kehoach thead").empty();
        $("#tbl-kehoach tbody").empty();
        html_kehoach_thead = "";
        html_kehoach_tbody_tong = "";
        html_kehoach_tbody = "";
        html_kehoach_tbody1 = "";
        html_kehoach_tbody2 = "";
        html_kehoach_thead += "<tr>";
        html_kehoach_thead += "<td>" + "Trạng thái" + "</td>";
        html_kehoach_thead += "<td>" + "Ý nghĩa trạng thái" + "</td>";
        html_kehoach_thead += "<td>" + "Điều kiện" + "</td>";
        html_kehoach_thead += "</tr>";
        var _tentrangthai = "";
        var rowspanTentrangthai = 1;
        var tomautd = "";
        for (var i = 1; i <= jsonYNghiaTrangThaiKeHoach.sotrangthai; i++) {
            if (jsonYNghiaTrangThaiKeHoach["trangthai" + i].ynghia == "Màu xanh") {
                tomautd = "td-kh-blue";
            } else if (jsonYNghiaTrangThaiKeHoach["trangthai" + i].ynghia == "Màu vàng") {
                tomautd = "td-kh-yellow";
            } else {
                tomautd = "td-kh-red";
            }

            if (i == 1) {
                html_kehoach_tbody += "<tr>";
                html_kehoach_tbody += "<td class=\"text-align-left\" rowspan=";
                html_kehoach_tbody1 += ">" + jsonYNghiaTrangThaiKeHoach["trangthai" + i].tentrangthai + "</td>";
                html_kehoach_tbody1 += "<td class=\"text-align-left " + tomautd + "\">" + jsonYNghiaTrangThaiKeHoach["trangthai" + i].ynghia + "</td>";
                html_kehoach_tbody1 += "<td class=\"text-align-left\">" + jsonYNghiaTrangThaiKeHoach["trangthai" + i].dieukien + "</td>";
                html_kehoach_tbody1 += "</tr>";
            } else {
                if (_tentrangthai == jsonYNghiaTrangThaiKeHoach["trangthai" + i].tentrangthai) {
                    rowspanTentrangthai++;
                    html_kehoach_tbody2 += "<tr>";
                    html_kehoach_tbody2 += "<td class=\"text-align-left " + tomautd + "\">" + jsonYNghiaTrangThaiKeHoach["trangthai" + i].ynghia + "</td>";
                    html_kehoach_tbody2 += "<td class=\"text-align-left\">" + jsonYNghiaTrangThaiKeHoach["trangthai" + i].dieukien + "</td>";
                    html_kehoach_tbody2 += "</tr>";
                } else {
                    html_kehoach_tbody_tong += html_kehoach_tbody + rowspanTentrangthai + html_kehoach_tbody1 + html_kehoach_tbody2;
                    rowspanTentrangthai = 1;
                    html_kehoach_tbody = "";
                    html_kehoach_tbody1 = "";
                    html_kehoach_tbody2 = "";

                    html_kehoach_tbody += "<tr>";
                    html_kehoach_tbody += "<td class=\"text-align-left\" rowspan=";
                    html_kehoach_tbody1 += ">" + jsonYNghiaTrangThaiKeHoach["trangthai" + i].tentrangthai + "</td>";
                    html_kehoach_tbody1 += "<td class=\"text-align-left " + tomautd + "\">" + jsonYNghiaTrangThaiKeHoach["trangthai" + i].ynghia + "</td>";
                    html_kehoach_tbody1 += "<td class=\"text-align-left\">" + jsonYNghiaTrangThaiKeHoach["trangthai" + i].dieukien + "</td>";
                    html_kehoach_tbody1 += "</tr>";
                }
            }

            if (i == jsonYNghiaTrangThaiKeHoach.sotrangthai) {

                html_kehoach_tbody_tong += html_kehoach_tbody + rowspanTentrangthai + html_kehoach_tbody1 + html_kehoach_tbody2;
            }
            _tentrangthai = jsonYNghiaTrangThaiKeHoach["trangthai" + i].tentrangthai;

        }


        $("#tbl-kehoach thead").append(html_kehoach_thead);
        $("#tbl-kehoach tbody").append(html_kehoach_tbody_tong);
        $("#myModalViewTrangThaiKH").modal("show");
    });

    // click tải file excel
    $(".btn-taifile").click(function () {
        var ajaxGet = { "get": $(this).attr("attrMawb") };
        var filename = $(this).attr("attrMawb");
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyHangXuat.aspx/reFileExcel",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            //timeout: 120000,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                window.open("DownloadFile.aspx?Root=EI&Folder=BAOCAO&FileName=" + filename + ".xlsx");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
    });

    // cập nhật hawb
    $("#btn-edithawb-luu").click(function () {
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var DataInput = [];
        var cells;
        var cell_MAWB = "";
        var cell_HAWB = "";
        var cell_Intem = "";
        var cell_NgayBayNoconver = "";
        var checkMAWB = false;
        var checkDatetime = false;
        var checkIntem = false;

        data.forEach(function (dataItem, dataIndex) {
            cell_MAWB = "";
            cell_HAWB = "";
            cell_ChuyenBay = "";
            cell_NgayBay = "";
            cell_GioBay = "";
            cell_Intem = "";
            cell_NgayBayNoconver = "";
            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_MAWB = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_HAWB = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_ChuyenBay = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_NgayBayNoconver = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                            cell_NgayBay = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                                cell_GioBay = Decimal2Time(cells[cellIndex].value * 24);
                            }
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Intem = cells[cellIndex].value;
                        }
                        break;
                }
            })

            DataInput.push(
                {
                    "SoMAWB": String(cell_MAWB).trim().replace(/ /g, '').replace(/-/g, '')
                    , "SoHAWB": String(cell_HAWB).trim().replace(/ /g, '')
                    , "ChuyenBay": String(cell_ChuyenBay).trim().replace(/ /g, '')
                    , "NgayBay": String(cell_NgayBay).trim().replace(/ /g, '')
                    , "GioBay": String(cell_GioBay).trim().replace(/ /g, '')
                    , "Intem": String(cell_Intem).trim().replace(/ /g, '')
                    , "ngaybaycheck": ymd2dmy(String(cell_NgayBayNoconver).trim().replace(/ /g, '')) + " " +  String(cell_GioBay).trim().replace(/ /g, '')
                }
            );
        })

        //console.log(DataInput)

        for (var i = 0; i < DataInput.length; i++) {
            //Kiểm tra mục in tem có đánh số 0 và 1 không
            if (DataInput[i].Intem == "") {
                checkIntem = true;
                break;
            }

            // kiểm tra có đồng ý in tem không
            if (DataInput[i].Intem == 1) {
                if (DataInput[i].SoMAWB.length != 11) {
                    checkMAWB = true;
                    break;
                }

                if ((parseInt(DataInput[i].SoMAWB.substring(3, 10)) % 7) != parseInt(DataInput[i].SoMAWB.substring(10, 11))) {
                    checkMAWB = true;
                    break;
                }


            }

            if (DataInput[i].ngaybaycheck == "") {
                checkDatetime = true;
                break;
            } else {
                if (!isValidDateTime(DataInput[i].ngaybaycheck)) {
                    checkDatetime = true;
                    break;
                }
            }
        }

        console.log(checkIntem)
        console.log(checkMAWB)
        console.log(checkDatetime)

        if (checkIntem) {
            alert("Vui lòng nhập thông tin in tem là 0 hoặc 1 để có cho in tem!");
        } else {
            if (checkMAWB) {
                alert("Vui lòng nhập số MAWB đúng định dạng là số và có 11 kí tự!");
            } else {
                if (checkDatetime) {
                    alert("Vui lòng kiểm tra lại ngày bay nhập thiếu hoặc sai định dạng!")
                } else {
                    jsonData = JSON.stringify({ DataInput });

                    $.ajax({
                        type: "POST",
                        url: "QuanLyHangXuat.aspx/updateHAWBBooking",
                        data: jsonData,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        async: false,
                        success: function (responsive) {
                            d = responsive.d;
                            Swal.fire({
                                title: "Cập nhật số MAWB thành công!",
                                text: "Hệ thống sẽ tự tải lại sau 2s",
                                type: 'success',
                                timer: 2000,
                            })
                            $("#modalEditHAWB").modal("hide");
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
                }
            }
        }

    });

    // show cập nhật hawb
    $("#update-hawb").click(function () {
        $("#modalEditHAWB").modal(
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
                        { value: "MAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "HAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Chuyến bay", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Ngày Bay", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Giờ Bay", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "In tem", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// MAWB
                        width: 100
                    },
                    {// Số HAWB
                        width: 100
                    },
                    {// Chuyến bay
                        width: 100
                    },
                    {// Ngay Bay
                        width: 100
                    },
                    {//Giờ Bay
                        width: 100
                    },
                    {//In tem
                        width: 100
                    },
                ]
            }]
        });
    });

    //xóa chuyến bay
    $("#myModalChuyenBay").on("click", ".btn-chuyenbay-xoa", function () {
        event.stopPropagation();
        var confirm_text = "";
        confirm_text += "Bạn chắc chắn muốn xóa!\n";
        confirm_text += "Đầu AWB: " + $(this).closest("tr").find(".td-DauAWB").text() + "\n";
        confirm_text += "AirlinesName: " + $(this).closest("tr").find(".td-AirlinesName").text() + "\n";
        confirm_text += "IATADesignator: " + $(this).closest("tr").find(".td-IATADesignator").text() + "\n";
        if (confirm(confirm_text)) {
            ajaxGet = { "get": $(this).closest("tr").attr("chuyenbay-id") };
            jsonData = JSON.stringify({ ajaxGet });
            $.ajax({
                type: "POST",
                url: "QuanLyHangXuat.aspx/deleteChuyenBay",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    console.log(d);
                    if (d == "ok") {
                        alert("Xóa thành công");
                        loadChuyenBay("0");
                    }
                },
                error: function (responsive) {
                    alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
                }
            }).done(function () {
            })
        }
    })

    // click Lưu chuyến bay
    $(".btn-luu-awb").click(function () {
        var airlineAWWB = { items: [] };
        airlineAWWB.items.push({
            DauAWB: $("#input-dau-AWB").val(),
            AirlinesName: $("#input-AirlinesName").val(),
            IATADesignator: $("#input-IATADesignator").val(),
            ICAODesignator: $("#input-ICAODesignator").val(),
            _CountryTerritory: $("#input-CountryTerritory").val(),
        });

        jsonData = JSON.stringify({ airlineAWWB });
        $.ajax({
            type: "POST",
            url: "QuanLyHangXuat.aspx/InputChuyenBay",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                if (d == "ok") {
                    alert("Thêm thành công");
                    //$("#myModalEditChuyenBay").modal("hide");
                    //$("#myModalChuyenBay").modal("show");
                    //loadChuyenBay("0");
                }
            },
            error: function (responsive) {
                alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
            }
        }).done(function () {
        })
    });

    //click thêm chuyến bay
    $("#btn-them-chuyenbay").click(function () {
        $("#myModalEditChuyenBay").modal("show");
        $("#myModalChuyenBay").modal("hide");
    });
    // click show chuyến bay
    $("#btn-chuyenbay").click(function () {
        $("#myModalChuyenBay").modal("show");
        loadChuyenBay("0");
    });

    //click in màn hình
    $(".btn-printPage").click(function () {
        $("#temIn").addClass("noneULI");
        $("#temULI").addClass("noneEFL");
        $("#div-TrangThaiHangXuat").removeClass("nonePage");
        $("#div-TrangThaiHangXuat").addClass("blockPage");
        window.print();
    });

    // print EI
    $(".btn-printEI").click(function () {

        var html_printlabel = "";
        var FLIGHT = $("#input-flight").val();

        var MAWB = $("#input-mawbEi").val();
        var HAWB = $("#input-hawbEi").val();
        var DES_MAWB = $("#input-desmawbEI").val();
        var DES_HAWB = $("#input-deshawbEI").val();
        var MASTERPRICE = $("#input-masterEi").val();
        var HOUSEPRICE = $("#input-houseEi").val();
        var SUBHOUSE = $("#input-subhouse").val();

        let result = /-/.test(MAWB);
        if (result) {
            html_printlabel += "<div class=\"mainEI myPageBreak\">";
            html_printlabel += "<div class=\"headerEI\">";
            html_printlabel += "<span class=\"headerEI-airline\">AIRLINE</span>";
            html_printlabel += "<span class=\"headerEI-name-airline\">" + FLIGHT + "</span>";
            html_printlabel += "</div>";
            html_printlabel += "<div class=\"barcode-mawbEI\">";
            html_printlabel += "<span><svg class=\"barcode barcodecss\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + MAWB + "\"></svg></span>";
            html_printlabel += "</div>";
            html_printlabel += "<div class=\"masterEI\">";
            html_printlabel += "<span class=\"masterEI-title\">MASTER WAYBILL NO.</span>";
            html_printlabel += "<span class=\"masterEI-mawb\">" + MAWB + "</span>";
            html_printlabel += "</div>";
            html_printlabel += "<div class=\"masterEI-des-price\">";
            html_printlabel += "<div class=\"masterEI-des moment-master-house\">";
            html_printlabel += "<span>MASTER DEST.</span>";
            html_printlabel += "<span class=\"font-size24\">" + DES_MAWB + "</span>";
            html_printlabel += "</div>";
            html_printlabel += "<div class=\"masterEI-price moment-master-house\">";
            html_printlabel += "<span>MASTER PIECES.</span>";
            html_printlabel += "<span class=\"font-size24\">" + MASTERPRICE + "</span>";
            html_printlabel += "</div>";
            html_printlabel += "</div>";
            html_printlabel += "<div class=\"barcode-hawbEI\">";
            html_printlabel += "<span><svg class=\"barcode barcodecss\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + HAWB + " + " + SUBHOUSE + "   \"></svg></span>";
            html_printlabel += "</div>";
            html_printlabel += "<div class=\"masterEI\">";
            html_printlabel += "<span class=\"masterEI-title\">HOUSE WAYBILL NO.</span>";
            html_printlabel += "<span class=\"masterEI-mawb\">" + HAWB + "</span>";
            html_printlabel += "</div>";
            html_printlabel += "<div class=\"masterEI-house-desc-price\">";
            html_printlabel += "<div class=\"house-des moment-master-house\">";
            html_printlabel += "<span>HOUSE DEST.</span>";
            html_printlabel += "<span class=\"font-size24\">" + DES_HAWB + "</span>";
            html_printlabel += "</div>";
            html_printlabel += "<div class=\"house-prices moment-master-house\">";
            html_printlabel += "<span>HOUSE PIECES.</span>";
            html_printlabel += "<span class=\"font-size24\">" + HOUSEPRICE + "</span>";
            html_printlabel += "</div>";
            html_printlabel += "</div>";
            html_printlabel += " </div>";

            $("#temULI").removeClass("noneULI");
            $("#temIn").removeClass("noneULI");
            $("#temULI").removeClass("noneEFL");
            $("#noneEI").addClass("noneEI");
            $("#div-TrangThaiHangXuat").removeClass("blockPage");
            $("#div-TrangThaiHangXuat").addClass("nonePage");
            $("#temEI").empty().append(html_printlabel);
            $("#temIn").empty();

            JsBarcode(".barcode").init();

            if (checkPrint == true) {

                setTimeout(function () {
                    window.print();
                }, 250);

            }
        } else {
            $.notify("Vui lòng nhập đúng định dạng số MAWB thêm '-'", "error");
        }

    })

    // in label EI  show modal
    $(".btn-print-modal").click(function () {
        $("#modalPrintEI").modal({
            show: true,
            backdrop: "static",
            keyboard: false
        });
    })

    // in label

    $("#tbl-Plan").on("click", ".btn-printLabel", function () {
        var attrMAWB = $(this).attr("somawb");
        if ($(this).attr("attrfwd").indexOf("DHL") >= 0) {
            $("#ModalDHL").modal("show");
            $("#btn-print-dhl").attr("attrMAWBDHL", attrMAWB);
        } else {
            fncIntemOther(attrMAWB);
        }
        //var attrDestMAWB = $(this).attr("attrDestMAWB");
        //var html_printlabel = "";
        //var ajaxGet = { "get": attrMAWB };
        //jsonData = JSON.stringify({ ajaxGet });
        ////$("#div-wait").show();
        //var html_sub_Plan = "";
        //var soTangDan = 1;
        //var totalKienHAWB = 1;
        //$.ajax({
        //    type: "POST",
        //    url: "QuanLyHangXuat.aspx/ReLabelMAWBViews",
        //    data: jsonData,
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    async: false,
        //    success: function (responsive) {
        //        d = responsive.d;
        //        //console.log(d)
        //        var html_inlabel = "";
        //        checkPrint = true;
        //        checkFWD = "";
        //        html_printlabel = "";
        //        $.each(d, function (key, val) {
        //            if (val.DestHAWB == "") {
        //                alert("Vui lòng nhập DEST cho HAWB: " + val.HAWB);
        //                checkPrint = false;
        //                return false;
        //            }
        //            checkFWD = val.FWD;
        //            if (checkFWD == "EFL") {
        //                var sizeAirLine = ""
        //                if (val.AirlinesName.length > 13) {
        //                    sizeAirLine = "sizeAirline18"
        //                } else {
        //                    sizeAirLine = "sizeAirline26"
        //                }

        //                html_printlabel += "<div class=\"page myPageBreak\">";
        //                html_printlabel += "<div class=\"div-tem-uli-container\">";
        //                html_printlabel += "<div class=\"top\">";
        //                html_printlabel += "<div class=\"top-airline\">";
        //                html_printlabel += "<span class=\"span-airline\">AIRLINE</span>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"title-mawb " + sizeAirLine + "\">";
        //                html_printlabel += "" + val.AirlinesName + "";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"top-barcode-mawb\">";
        //                html_printlabel += "<span><svg id=\"barcodeEPL\" class=\"barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + val.MAWB + "\"></svg></span>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"mid\">";
        //                html_printlabel += "<div class=\"top-airline\">";
        //                html_printlabel += "<span class=\"span-airline\">AIRWAYBILL NO</span>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"title-mawb\">";
        //                html_printlabel += "" + tachMAWB(val.MAWB) + "";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"span-airline\">";
        //                html_printlabel += "<span>DESTINATION</span>  <span class=\"span-padding\">ORIGIN</span>  <span>TOTAL NO OF PIECES</span>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"span-airline\">";
        //                html_printlabel += "<span class=\"destall\">" + val.DestMAWB + "</span>  <span class=\"destall destallorg\">HAN</span>  <span class=\"destall destalltotal\">" + val.EST_PCSTotal + "</span>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"span-airline\">";
        //                html_printlabel += "EXPOLANKA FREIGHT (VIET NAM)";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"span-airline\">";
        //                html_printlabel += "<span>HOUSE AIRWAYBILL NO</span>  <span class=\"span-padding\">H.DEST</span>  <span>H.PCS</span>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"span-airline\">";
        //                html_printlabel += "<span class=\"destallHAWB\">" + val.HAWB + "</span>  <span class=\"destallHAWB destallHAWBDesc\">" + val.DestHAWB + "</span>  <span class=\"destallHAWB destallHAWBDesc\">" + val.EST_PCS + "</span>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"top-barcode-mawb\">";
        //                html_printlabel += "<span><svg id=\"barcodeEPL\" class=\"barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + val.HAWB + "\"></svg></span>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //            } else if (checkFWD == "ULI") {
        //                var html_font__size = ""
        //                if (val.AirlinesName.length > 16) {
        //                    html_font__size = "font__size20px"
        //                }
        //                html_printlabel += "<div class=\"pageULI\">";
        //                html_printlabel += "<div class=\"TemULI myPageBreak\" >";
        //                html_printlabel += "<div class=\"TemULI__border\" >";
        //                html_printlabel += "<div class=\"TemULI__border-header\">";
        //                html_printlabel += "<div class=\"TemULI__border-header--chuyenbay\">";

        //                html_printlabel += "<div class=\"TemULI__border-header--item " + html_font__size + "\">";
        //                html_printlabel += "" + val.AirlinesName + "";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-header--machuyenbay\">";
        //                html_printlabel += "<div class=\"TemULI__border-header--item\">";
        //                html_printlabel += "" + val.IATADesignator + "";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-mawb\">";
        //                html_printlabel += "<div class=\"TemULI__border-mawb--item\">";
        //                html_printlabel += "AIR WAYBILL NO:";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-mawb--item TemULI__border-mawb--item--child\">";
        //                html_printlabel += "" + tachMAWB(val.MAWB) + "";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-mawb--item\">";
        //                html_printlabel += "<svg id=\"barcodeULI-MAWB\" class=\"barcode TemULI__border-mawb--item-barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + val.MAWB + "\"></svg>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-origin\">";
        //                html_printlabel += "<div class=\"TemULI__border-origin--item\">";
        //                html_printlabel += "<div class=\"TemULI__border-origin--item--tilte\">";
        //                html_printlabel += "ORIGIN:";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-origin--item--child\">";
        //                html_printlabel += "HAN";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-origin--item\">";
        //                html_printlabel += "<div class=\"TemULI__border-origin--item--tilte\">";
        //                html_printlabel += "Destination:";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-origin--item--child\">";
        //                html_printlabel += "" + val.DestMAWB + "";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-origin--item\">";
        //                html_printlabel += "<div class=\"TemULI__border-origin--item--tilte\">";
        //                html_printlabel += "Pieces:";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-origin--item--child\">";
        //                html_printlabel += "" + val.EST_PCSTotal + "";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-img\">";
        //                html_printlabel += "<img src=\"images/imagesUNI/UNIQUE.jpg\" alt=\"Alternate Text\" />";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-hawb\">";
        //                html_printlabel += "<div class=\"TemULI__border-hawb--left\">";
        //                html_printlabel += "<div class=\"TemULI__border-hawb--left--item\">";
        //                html_printlabel += "HAWB BILL NO:";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-hawb--left--item\">";
        //                html_printlabel += "" + val.HAWB + "";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-hawb--left--item\">";
        //                html_printlabel += "<svg id=\"barcodeULI-HAWB\" class=\"barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + val.HAWB + "\"></svg>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-hawb--right\">";
        //                html_printlabel += "<div class=\"TemULI__border-hawb--right--header\">";
        //                html_printlabel += "PO NUMBER";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-hawb--right--body\">";
        //                html_printlabel += "<div class=\"TemULI__border-hawb--right--body--left\">";
        //                html_printlabel += "<div class=\"TemULI__border-hawb--right--body--item\">" + val.PO + "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border-hawb--right--body--right\">";
        //                html_printlabel += "<div class=\"TemULI__border-hawb--right--body--item\">" + val.EST_PCS_HAWB + "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border--footer\" >";
        //                html_printlabel += "<div class=\"TemULI__border--footer--left\" >";
        //                html_printlabel += "<div>HAWB DEST:</div>";
        //                html_printlabel += "<div class=\"font-size33\">" + val.DestHAWB + "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "<div class=\"TemULI__border--footer--right\" >";
        //                html_printlabel += "<div>Number of HAWB:</div>";
        //                html_printlabel += "<div class=\"font-size33\">" + val.EST_PCS_HAWB + "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //                html_printlabel += "</div>";
        //            } else if (checkFWD.indexOf("DHL") >= 0) {
        //                for (var i = 1; i <= val.EST_PCS_HAWB; i++) {
        //                    var htmlsomawbTangDan = "";
        //                    var htmlsoHawbTangDan = "";
        //                    if (soTangDan < 10) {
        //                        htmlsomawbTangDan += "0000" + soTangDan.toString();
        //                    } else {
        //                        htmlsomawbTangDan += "000" + soTangDan.toString();
        //                    }

        //                    if (i < 10) {
        //                        htmlsoHawbTangDan += "0000" + i.toString();
        //                    } else {
        //                        htmlsoHawbTangDan += "000" + i.toString();
        //                    }
        //                    var airLine__hangbay_css = "";
        //                    if (val.AirlinesName.length <= 10) {
        //                        airLine__hangbay_css = "airLine__hangbay_css";
        //                    }
        //                    html_printlabel += "<div class=\"pageDHL\">";
        //                    html_printlabel += "<div class=\"mainDHL \">";
        //                    html_printlabel += "<div class=\"temDHL\">";
        //                    html_printlabel += "<div class=\"airLine\">";
        //                    html_printlabel += "<span>Airline</span>";
        //                    html_printlabel += "<span></span>"; //QR8953 / 28NOV
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "<div class=\"airLine__hangbay\">";
        //                    html_printlabel += "<img class=\"airLineImg\" src=\"./images/OPS/back-image.jpg\" alt=\"\">";
        //                    html_printlabel += "<span class=\"airLine__hangbay-name " + airLine__hangbay_css + "\">" + val.AirlinesName + "</span>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "<div class=\"barcode__MAWB\">";
        //                    html_printlabel += "<span><svg  class=\"barcode barcodeDHL\" jsbarcode-format=\"CODE128\" jsbarcode-value=\"" + val.MAWB + htmlsomawbTangDan + "\"></svg></span>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "<div class=\"mawbNumber\">";
        //                    html_printlabel += "<div class=\"mawbNumber-title fontweight600\">Master Air Waybill Number</div>";
        //                    html_printlabel += "<div class=\"mawbNumber-MAWB\">";
        //                    html_printlabel += "" + catchu(val.MAWB) + "";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "<div class=\"disMawb\">";
        //                    html_printlabel += "<div class=\"disMawb__destination\">";
        //                    html_printlabel += "<div class=\"disMawb__destination-title fontweight600\">Destination</div>";
        //                    html_printlabel += "<div class=\"disMawb__destination-name\"><span class=\"disMawb__destination-name_span\">" + val.DestMAWB + "</span></div>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "<div class=\"disMawb__totalPriece\">";
        //                    html_printlabel += "<div class=\"disMawb__totalPriece-title fontweight600\">Total No of Pieces</div>";
        //                    html_printlabel += "<div class=\"disMawb__totalPriece-name\"><span class=\"disMawb__totalPriece_span\">" + val.EST_PCSTotal + "</span></div>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "<div class=\"barcode__MAWB\">";
        //                    html_printlabel += "<span><svg class=\"barcode barcodeDHL\" jsbarcode-format=\"CODE128\" jsbarcode-value=\"H" + val.HAWB + "+Y" + htmlsoHawbTangDan + "+" + "\"></svg></span>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "<div class=\"mawbNumber\">";
        //                    html_printlabel += "<div class=\"mawbNumber-title fontweight600\">House Air Waybill Number</div>";
        //                    html_printlabel += "<div class=\"mawbNumber-MAWB\">";
        //                    html_printlabel += "" + val.HAWB + "";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "<div class=\"dis__HAWB\">";
        //                    html_printlabel += "<div class=\"dis__HAWB-origin\">";
        //                    html_printlabel += "<div class=\"dis__HAWB-origin-title fontweight600\">Origin</div>";
        //                    html_printlabel += "<div class=\"dis__HAWB-origin-name\">HAN</div>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "<div class=\"dis__HAWB-destination\">";
        //                    html_printlabel += "<div class=\"dis__HAWB-destination-title fontweight600\">Destination</div>";
        //                    html_printlabel += "<div class=\"dis__HAWB-destination-name\">" + val.DestHAWB + "</div>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "<div class=\"dis__HAWB-totalHAWB\">";
        //                    html_printlabel += "<div class=\"dis__HAWB-totalHAWB-title fontweight600\">Total No .of HAWB Pieces</div>";
        //                    html_printlabel += "<div class=\"dis__HAWB-totalHAWB-name\">" + val.EST_PCS_HAWB + "</div>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "<div class=\"footer\">";
        //                    html_printlabel += "<div class=\"footer__Service\">";
        //                    html_printlabel += "<div class=\"footer__Service-type\">";
        //                    html_printlabel += "<span class=\"fontweight600\">Service Type</span>";
        //                    html_printlabel += "<span></span>"; //QR8953 / 28NOV
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "<div class=\"footer__Service-date\">";
        //                    html_printlabel += "<span></span>"; //QR8953 / 28NOV
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "<div class=\"footer__Img\">";
        //                    html_printlabel += "<img src=\"./images/OPS/DHL.png\" alt=\"\">";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "</div>";
        //                    html_printlabel += "</div>";
        //                    soTangDan++;
        //                }
        //            }
        //            //else if (checkFWD == "EI") {
        //            //    html_printlabel += "<div class=\"mainEI myPageBreak\">";
        //            //    html_printlabel += "<div class=\"headerEI\">";
        //            //    html_printlabel += "<span class=\"headerEI-airline\">AIRLINE</span>";
        //            //    html_printlabel += "<span class=\"headerEI-name-airline\">ETIHAD AIRWAYS</span>";
        //            //    html_printlabel += "</div>";
        //            //    html_printlabel += "<div class=\"barcode-mawbEI\">";
        //            //    html_printlabel += "<span><svg class=\"barcode barcodecss\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"607-00000001\"></svg></span>";
        //            //    html_printlabel += "</div>";
        //            //    html_printlabel += "<div class=\"masterEI\">";
        //            //    html_printlabel += "<span class=\"masterEI-title\">MASTER WAYBILL NO.</span>";
        //            //    html_printlabel += "<span class=\"masterEI-mawb\">607-00000001</span>";
        //            //    html_printlabel += "</div>";
        //            //    html_printlabel += "<div class=\"masterEI-des-price\">";
        //            //    html_printlabel += "<div class=\"masterEI-des moment-master-house\">";
        //            //    html_printlabel += "<span>MASTER DEST.</span>";
        //            //    html_printlabel += "<span class=\"font-size24\">AMS</span>";
        //            //    html_printlabel += "</div>";
        //            //    html_printlabel += "<div class=\"masterEI-price moment-master-house\">";
        //            //    html_printlabel += "<span>MASTER PIECES.</span>";
        //            //    html_printlabel += "<span class=\"font-size24\">1</span>";
        //            //    html_printlabel += "</div>";
        //            //    html_printlabel += "</div>";
        //            //    html_printlabel += "<div class=\"barcode-hawbEI\">";
        //            //    html_printlabel += "<span><svg class=\"barcode barcodecss\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"45T0012135+0001\"></svg></span>";
        //            //    html_printlabel += "</div>";
        //            //    html_printlabel += "<div class=\"masterEI\">";
        //            //    html_printlabel += "<span class=\"masterEI-title\">HOUSE WAYBILL NO.</span>";
        //            //    html_printlabel += "<span class=\"masterEI-mawb\">45T0012135</span>";
        //            //    html_printlabel += "</div>";
        //            //    html_printlabel += "<div class=\"masterEI-house-desc-price\">";
        //            //    html_printlabel += "<div class=\"house-des moment-master-house\">";
        //            //    html_printlabel += "<span>HOUSE DEST.</span>";
        //            //    html_printlabel += "<span class=\"font-size24\">AMS</span>";
        //            //    html_printlabel += "</div>";
        //            //    html_printlabel += "<div class=\"house-prices moment-master-house\">";
        //            //    html_printlabel += "<span>HOUSE PIECES.</span>";
        //            //    html_printlabel += "<span class=\"font-size24\">1</span>";
        //            //    html_printlabel += "</div>";
        //            //    html_printlabel += "</div>";
        //            //    html_printlabel += " </div>";
        //            //}
        //            else {
        //                alert("FWD: " + checkFWD + " chưa có tem in");
        //                checkPrint = false;
        //                return false;
        //            }
        //        });
        //        //console.log(checkFWD);
        //        if (checkFWD == "EFL") {
        //            $("#temIn").removeClass("noneEFL");
        //            $("#temULI").removeClass("noneEFL");
        //            $("#noneEI").removeClass("noneEI");
        //            $("#temIn").addClass("noneULI");
        //            $("#div-TrangThaiHangXuat").removeClass("blockPage");
        //            $("#div-TrangThaiHangXuat").addClass("nonePage");
        //            $("#temIn").empty().append(html_printlabel)
        //            $("#temULI").empty();
        //        } else if (checkFWD == "ULI") {
        //            $("#temULI").removeClass("noneULI");
        //            $("#temIn").removeClass("noneULI");
        //            $("#noneEI").removeClass("noneEI");
        //            $("#temULI").addClass("noneEFL");
        //            $("#div-TrangThaiHangXuat").removeClass("blockPage");
        //            $("#div-TrangThaiHangXuat").addClass("nonePage");
        //            $("#temULI").empty().append(html_printlabel);
        //            $("#temIn").empty();
        //        } else if (checkFWD.indexOf("DHL") >= 0) {
        //            $("#container-inlabel").empty().append(html_printlabel);
        //            $("#temIn").empty();
        //            $("#temULI").empty();
        //        }

        //        //else if (checkFWD == "EI") {
        //        //    $("#temULI").removeClass("noneULI");
        //        //    $("#temIn").removeClass("noneULI");
        //        //    $("#temULI").removeClass("noneEFL");
        //        //    $("#noneEI").addClass("noneEI");
        //        //    $("#div-TrangThaiHangXuat").removeClass("blockPage");
        //        //    $("#div-TrangThaiHangXuat").addClass("nonePage");
        //        //    $("#temEI").empty().append(html_printlabel);
        //        //    $("#temIn").empty();
        //        //}
        //    },
        //    error: function () {
        //        Swal.fire(
        //            'Có lỗi xảy ra!',
        //            'Thử lại hoặc liên hệ IT',
        //            'error'
        //        )
        //    }
        //}).done(function () {
        //});
        //JsBarcode(".barcode").init();

        //if (checkPrint == true) {

        //    setTimeout(function () {
        //        window.print();
        //    }, 250);

        //}

        ////alert(attrMAWB)
    });


    //Sua BOOKINGS
    $("#tbl-Plan").on("click", ".btn-qll-sua1", function () {
        var attrMAWB = $(this).attr("somawb");
        var attrMaTheoDoi = $(this).attr("matheodoi");
        window.open("/InputExcelBookVsip.aspx?MAWB=" + attrMAWB + "&Matheodoi=" + attrMaTheoDoi + "", "_black");
    });
    // Xoa BOOKINGS
    $("#tbl-Plan").on("click", ".btn-qll-xoa", function () {
        var attrMAWB = $(this).attr("somawb");
        var conf = confirm("Bạn có muốn xóa lô MAWB " + attrMAWB + " này không?");
        if (conf) {
            ajaxGet = { "get": attrMAWB }
            var jsonData = JSON.stringify({ ajaxGet });
            $.ajax({
                type: "POST",
                url: "InputExcelBook.aspx/deleteBookings",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    console.log(d)
                    if (d == "ok") {
                        fncLoad()
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
            });
        }

    });
    //Sua PreAccept
    $(".container").on("click", ".btn-qll-sua", function () {
        var attrMAWB = $(this).attr("attrMAWB");
        var attrMaTheoDoi = $(this).attr("matheodoi");
        //window.location.href = "/InputExcelBook.aspx?MAWB=" + attrMAWB + "&Matheodoi=" + attrMaTheoDoi + "";
        window.open("/InputExcelBook.aspx?MAWB=" + attrMAWB + "&Matheodoi=" + attrMaTheoDoi + "", '_blank');
    });

    $("#tbl-PreAccept").on("click", ".td-trangthai", function () {
        var _MAWB = $(this).closest("tr").attr("KeHoachId");

        var _KeHoachId = $(this).closest("tr").attr("KeHoachId");
        $(".tr-sub-show").hide();

        if (!$(".tr-sub-" + _KeHoachId).hasClass("tr-sub-show")) {
            fncShowSub(_KeHoachId);
        } else {
            $(".tr-sub-show").removeClass("tr-sub-show");
        }
    });

    $("#tbl-Plan").on("click", ".td-trangthai", function () {
        var _MAWB = $(this).closest("tr").attr("KeHoachId");

        var _KeHoachId = $(this).closest("tr").attr("KeHoachId");
        $(".tr-sub-show").hide();

        if (!$(".tr-sub-" + _KeHoachId).hasClass("tr-sub-show")) {
            fncShowSub(_KeHoachId);
        } else {
            $(".tr-sub-show").removeClass("tr-sub-show");
        }
    });

    // Click check In label
    $("#cb-inlabel").click(function () {
        var MAWWB = $(this).val();
        if ($(this).prop("checked") == true) {
            if ($(this).prop("checked") == true) {
                UpdateMAWB(MAWWB, "inlabel", "check")
                fncLoadCheckMaWB(MAWWB)
            }
        }
        else if ($(this).prop("checked") == false) {
            UpdateMAWB(MAWWB, "inlabel", "uncheck")
            fncLoadCheckMaWB(MAWWB)
        }
    });
    // Click check dan tem
    $("#cb-dadantem").click(function () {
        var MAWWB = $(this).val();
        if ($(this).prop("checked") == true) {
            UpdateMAWB(MAWWB, "dantem", "check")
            fncLoadCheckMaWB(MAWWB)
        }
        else if ($(this).prop("checked") == false) {
            UpdateMAWB(MAWWB, "dantem", "uncheck")
            fncLoadCheckMaWB(MAWWB)
        }
    });
    // Click check scan PO
    $("#cb-po").click(function () {
        var MAWWB = $(this).val();
        if ($(this).prop("checked") == true) {
            UpdateMAWB(MAWWB, "scanpo", "check")
            fncLoadCheckMaWB(MAWWB)
        }
        else if ($(this).prop("checked") == false) {
            UpdateMAWB(MAWWB, "scanpo", "uncheck")
            fncLoadCheckMaWB(MAWWB)
        }
    });
    // Click check tờ khai
    $("#cb-tokhai").click(function () {
        var MAWWB = $(this).val();
        if ($(this).prop("checked") == true) {
            UpdateMAWB(MAWWB, "tokhai", "check")
            fncLoadCheckMaWB(MAWWB)
        }
        else if ($(this).prop("checked") == false) {
            UpdateMAWB(MAWWB, "tokhai", "uncheck")
            fncLoadCheckMaWB(MAWWB)
        }
    });

    // Click check issueDOC
    $("#cb-issueDOC").click(function () {
        var MAWWB = $(this).val();
        if ($(this).prop("checked") == true) {
            UpdateMAWB(MAWWB, "issuedoc", "check")
            fncLoadCheckMaWB(MAWWB)
        }
        else if ($(this).prop("checked") == false) {
            UpdateMAWB(MAWWB, "issuedoc", "uncheck")
            fncLoadCheckMaWB(MAWWB)
        }
    });



    // Click hiển thị cân dim trên MAWB
    $(".container").on("click", ".td-mawb", function () {
        //alert($(this).html().split("<br>")[0]);
        var soMAWB = $(this).html().split("<br>")[0];
        $(".btn-taifile").attr("attrMawb", soMAWB);

        $("#modal-btn-intem").attr("attrdestmawb", $(this).attr("attrdestmawb"));
        $("#modal-btn-intem").attr("attrMAWB", soMAWB);
        $("#modal-btn-intem").attr("attrFWD", $(this).attr("attrFWD"));
        $("#modal-btn-sua").attr("attrdestmawb", $(this).attr("attrdestmawb"));
        $("#modal-btn-sua").attr("attrMAWB", soMAWB);
        $("#modal-btn-sua").attr("attrMaTheoDoi", $(this).attr("attrMatheodoi"));

        $("#myModalViewMawb").modal("show");
        $("#h4-view-mawb").text("Số MAWB: " + soMAWB);
        $(".btn-chi-tiet-mawb").attr("attrMAWB", soMAWB);
        arrayHawb = [];

        $("#table-show-hawb").empty();

        ajaxGet2 = { "get1": soMAWB, "get2": "" };
        var jsonData = JSON.stringify({ ajaxGet2 });
        $.ajax({
            type: "POST",
            url: "XemCanDIM.aspx/reDim",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                //console.log(d.dims);
                var lengthSoKien = d.dims.length;

                var html_tong = "";
                var html_td_1 = "";
                var html_td_2 = "";
                var html_td_3 = "";
                var html_td_4 = "";
                var html_td_5 = "";
                var html_td_6 = "";
                var html_td_7 = "";
                var html_td_8 = "";
                var html_td_9 = "";
                var html_td_10 = "";
                var html_td_11 = "";
                var html_td_12 = "";
                var html_td_13 = "";
                var html_td_14 = "";
                var html_td_15 = "";
                var html_td_16 = "";
                var html_td_17 = "";
                $.each(d.dims, function (key, val) {

                    if (key == 0) {
                        // số kiện ban đầu
                        tongKienBanDau = parseInt(val.SoKien);
                        // số trọng lượng ban đầu
                        trongLuongBanDau = parseFloat(val.TrongLuong);

                        // kích thước khi cắt
                        spiltKichthuoc = val.KichThuoc.split("x");
                        dai = parseInt(spiltKichthuoc[0]);
                        rong = parseInt(spiltKichthuoc[1]);
                        cao = parseInt(spiltKichthuoc[2]);

                        // Đổi dài rộng cao từ cm sang m
                        m_dai = (dai / 100);
                        m_rong = (rong / 100);
                        m_cao = (cao / 100);

                        CBM = m_dai * m_rong * m_cao * parseInt(val.SoKien);

                        //vwDauTien = Math.round(dai * rong * cao * parseInt(val.SoKien) / 6000, 2);
                        vwDauTien = dai * rong * cao * parseInt(val.SoKien) / 6000;

                        html_td_1 += "<tr>";
                        html_td_1 += "<td>" + val.KichThuoc + " / " + val.SoKien + "</td>";

                        html_td_1 += "<td class=\"centerMaWBHaWB\" rowspan=";
                        html_td_2 += ">";
                        html_td_3 += "</td>";

                        html_td_4 += "<td rowspan=";
                        html_td_5 += ">";
                        html_td_6 += "</td>";

                        html_td_7 += "<td rowspan=";
                        html_td_8 += ">";
                        html_td_9 += "</td>";

                        html_td_10 += "<td rowspan=";
                        html_td_11 += ">";
                        html_td_12 += "</td>";

                        // thêm td
                        html_td_15 += "<td rowspan=";
                        html_td_16 += ">";
                        html_td_17 += "</td>";

                        html_td_13 += "</tr>";
                    } else {

                        // kích thước khi cắt
                        spiltKichthuoc = val.KichThuoc.split("x");
                        dai = parseInt(spiltKichthuoc[0]);
                        rong = parseInt(spiltKichthuoc[1]);
                        cao = parseInt(spiltKichthuoc[2]);

                        // Đổi dài rộng cao từ cm sang m
                        m_dai = (dai / 100);
                        m_rong = (rong / 100);
                        m_cao = (cao / 100);

                        CBM += m_dai * m_rong * m_cao * parseInt(val.SoKien);


                        // tổng số kiện
                        tongSoKien = tongKienBanDau + parseInt(val.SoKien);
                        //tổng volunm weigth
                        //tongvw = vwDauTien + Math.round(dai * rong * cao * parseInt(val.SoKien) / 6000, 2);
                        tongvw = vwDauTien + dai * rong * cao * parseInt(val.SoKien) / 6000;
                        // tổng trọng lượng
                        tongTrongLuong = trongLuongBanDau + parseFloat(val.TrongLuong);
                        html_td_14 += "<tr>"
                        html_td_14 += "<td>" + val.KichThuoc + " / " + val.SoKien + "</td>";
                        html_td_14 += "</tr>"

                        tongKienBanDau = tongKienBanDau + parseInt(val.SoKien);

                        trongLuongBanDau = trongLuongBanDau + parseFloat(val.TrongLuong);

                        //vwDauTien = vwDauTien + Math.round(dai * rong * cao * parseInt(val.SoKien) / 6000, 2);
                        vwDauTien = vwDauTien + dai * rong * cao * parseInt(val.SoKien) / 6000;
                    }

                    if (key == d.dims.length - 1) {
                        var cw0 = 0;
                        var PCS0 = 0;
                        var trongLuong0 = 0;
                        var trongluongwolunm = 0;

                        if (key == 0) {
                            PCS0 = tongKienBanDau;
                            trongLuong0 = trongLuongBanDau;
                            trongluongwolunm = vwDauTien;
                            if (trongLuong0 > trongluongwolunm) {
                                cw0 = trongLuong0;
                            } else {
                                cw0 = trongluongwolunm;
                            }
                        } else {
                            PCS0 = tongSoKien;
                            trongLuong0 = tongTrongLuong;
                            trongluongwolunm = tongvw;
                            if (trongLuong0 > trongluongwolunm) {
                                cw0 = trongLuong0;
                            } else {
                                cw0 = trongluongwolunm;
                            }
                        }

                        html_tong += html_td_1 + lengthSoKien + html_td_2 + PCS0 + html_td_3 + html_td_4 + lengthSoKien + html_td_5 + trongLuong0 + html_td_6 + html_td_7 + lengthSoKien + html_td_8 + trongluongwolunm.toFixed(2) + html_td_9 + html_td_10 + lengthSoKien + html_td_11 + cw0.toFixed(2) + html_td_12 + html_td_15 + lengthSoKien + html_td_16 + CBM.toFixed(3) + html_td_17 + html_td_13 + html_td_14;
                    }

                });
                $("#tbl-view-mawb tbody").empty();
                $("#tbl-view-mawb tbody").append(html_tong);



                $.each(d.listHawb, function (key, val) {
                    arrayHawb.push(val.Hawb);
                });


            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {

        });

        var hienthiKienSo = 0;
        for (var i = 0; i < arrayHawb.length; i++) {


            var html_tong_Hawb = "";

            var html_td_1_hawb = "";
            var html_td_2_hawb = "";
            var html_td_3_hawb = "";
            var html_td_4_hawb = "";
            var html_td_5_hawb = "";
            var html_td_6_hawb = "";
            var html_td_7_hawb = "";
            var html_td_8_hawb = "";
            var html_td_9_hawb = "";
            var html_td_10_hawb = "";
            var html_td_11_hawb = "";
            var html_td_12_hawb = "";
            var html_td_13_hawb = "";
            var html_td_14_hawb = "";
            var html_td_15_hawb = "";
            var html_td_16_hawb = "";
            var html_td_17_hawb = "";
            var dai_hawb = 0;
            var rong_hawb = 0;
            var cao_hawb = 0;

            ajaxGet2 = { "get1": soMAWB, "get2": arrayHawb[i] };
            jsonData = JSON.stringify({ ajaxGet2 });
            $.ajax({
                type: "POST",
                url: "XemCanDIM.aspx/reDimHAWB",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    hienthiKienSo += parseInt(d.kienSo)
                    var length = d.dims.length;

                    $.each(d.dims, function (key, val) {

                        if (key == 0) {
                            CBM = 0;
                            // số kiện ban đầu
                            tongKienBanDau = parseInt(val.SoKien);
                            // số trọng lượng ban đầu
                            trongLuongBanDau = parseFloat(val.TrongLuong);

                            // kích thước khi cắt
                            spiltKichthuoc = val.KichThuoc.split("x");
                            dai_hawb = parseInt(spiltKichthuoc[0]);
                            rong_hawb = parseInt(spiltKichthuoc[1]);
                            cao_hawb = parseInt(spiltKichthuoc[2]);
                            //vwDauTien = Math.round(dai_hawb * rong_hawb * cao_hawb * parseInt(val.SoKien) / 6000, 2);
                            vwDauTien = dai_hawb * rong_hawb * cao_hawb * parseInt(val.SoKien) / 6000;

                            // Đổi dài rộng cao từ cm sang m
                            m_dai = (dai_hawb / 100);
                            m_rong = (rong_hawb / 100);
                            m_cao = (cao_hawb / 100);

                            CBM += m_dai * m_rong * m_cao * parseInt(val.SoKien);

                            html_td_1_hawb += "<tr>";
                            html_td_1_hawb += "<td>" + val.KichThuoc + " / " + val.SoKien + "</td>";

                            html_td_1_hawb += "<td rowspan=";
                            html_td_2_hawb += ">";
                            html_td_3_hawb += "</td>";

                            html_td_4_hawb += "<td rowspan=";
                            html_td_5_hawb += ">";
                            html_td_6_hawb += "</td>";

                            html_td_7_hawb += "<td rowspan=";
                            html_td_8_hawb += ">";
                            html_td_9_hawb += "</td>";

                            html_td_10_hawb += "<td rowspan=";
                            html_td_11_hawb += ">";
                            html_td_12_hawb += "</td>";

                            html_td_15_hawb += "<td rowspan=";
                            html_td_16_hawb += ">";
                            html_td_17_hawb += "</td>";

                            html_td_13_hawb += "</tr>";
                        } else {

                            // kích thước khi cắt
                            spiltKichthuoc = val.KichThuoc.split("x");
                            dai_hawb = parseInt(spiltKichthuoc[0]);
                            rong_hawb = parseInt(spiltKichthuoc[1]);
                            cao_hawb = parseInt(spiltKichthuoc[2]);

                            // Đổi dài rộng cao từ cm sang m
                            m_dai = (dai_hawb / 100);
                            m_rong = (rong_hawb / 100);
                            m_cao = (cao_hawb / 100);

                            CBM += m_dai * m_rong * m_cao * parseInt(val.SoKien);

                            // tổng số kiện
                            tongSoKien = tongKienBanDau + parseInt(val.SoKien);
                            //tổng volunm weigth
                            //tongvw = vwDauTien + Math.round(dai_hawb * rong_hawb * cao_hawb * parseInt(val.SoKien) / 6000, 2);
                            tongvw = vwDauTien + dai_hawb * rong_hawb * cao_hawb * parseInt(val.SoKien) / 6000;
                            // tổng trọng lượng
                            tongTrongLuong = trongLuongBanDau + parseFloat(val.TrongLuong);
                            html_td_14_hawb += "<tr>"
                            html_td_14_hawb += "<td>" + val.KichThuoc + " / " + val.SoKien + "</td>";
                            html_td_14_hawb += "</tr>"

                            tongKienBanDau = tongKienBanDau + parseInt(val.SoKien);

                            trongLuongBanDau = trongLuongBanDau + parseFloat(val.TrongLuong);

                            //vwDauTien = vwDauTien + Math.round(dai_hawb * rong_hawb * cao_hawb * parseInt(val.SoKien) / 6000, 2);
                            vwDauTien = vwDauTien + dai_hawb * rong_hawb * cao_hawb * parseInt(val.SoKien) / 6000;
                        }

                        if (key == d.dims.length - 1) {
                            var cw0hawb = 0;
                            var PCS0hawb = 0;
                            var trongLuong0hawb = 0;
                            var trongluongwolunmhawb = 0;

                            if (key == 0) {
                                PCS0hawb = tongKienBanDau;
                                trongLuong0hawb = trongLuongBanDau;
                                trongluongwolunmhawb = vwDauTien;
                                if (trongLuong0hawb > trongluongwolunmhawb) {
                                    cw0hawb = trongLuong0hawb;
                                } else {
                                    cw0hawb = trongluongwolunmhawb;
                                }
                            } else {

                                PCS0hawb = tongSoKien;
                                trongLuong0hawb = tongTrongLuong;
                                trongluongwolunmhawb = tongvw;
                                if (trongLuong0hawb > trongluongwolunmhawb) {
                                    cw0hawb = trongLuong0hawb;
                                } else {
                                    cw0hawb = trongluongwolunmhawb;
                                }
                            }

                            html_tong_Hawb += html_td_1_hawb + length + html_td_2_hawb + PCS0hawb + html_td_3_hawb + html_td_4_hawb + length + html_td_5_hawb + trongLuong0hawb + html_td_6_hawb + html_td_7_hawb + length + html_td_8_hawb + trongluongwolunmhawb.toFixed(2) + html_td_9_hawb + html_td_10_hawb + length + html_td_11_hawb + cw0hawb.toFixed(2) + html_td_12_hawb + html_td_15_hawb + length + html_td_16_hawb + CBM.toFixed(3) + html_td_17_hawb + html_td_13_hawb + html_td_14_hawb;
                        }
                    });



                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {

            });
            var html_sub = "";
            html_sub += "<h3 class=\"titleShow\">HAWB: <span>" + arrayHawb[i] + "</span></h3>"
            html_sub += "<table class=\"table table-bordered table-hawb\" id=\"table_show_" + arrayHawb[i] + "\">";
            html_sub += "<thead>";
            html_sub += "<tr class=\"style_Mawb_Hawb\">";
            html_sub += "<td>DIMENSION</td>";
            html_sub += "<td>PCS</td>";
            html_sub += "<td>GW</td>";
            html_sub += "<td>VW</td>";
            html_sub += "<td>CW</td>";
            html_sub += "<td>CBM</td>";
            html_sub += "</tr>";
            html_sub += "</thead>";
            html_sub += "<tbody>";
            html_sub += "</tbody>";
            html_sub += "</table>";

            $("#table-show-hawb").append(html_sub);

            $("#table_show_" + arrayHawb[i] + " tbody").empty();
            $("#table_show_" + arrayHawb[i] + " tbody").append(html_tong_Hawb);
            $(".titleShowMAWB").empty().append("MAWB: " + soMAWB + "/Số lượng Pallet: " + hienthiKienSo);
        }

        // POST Trả về in tem label po tờ khai doc
        fncLoadCheckMaWB(soMAWB);
        $("#cb-inlabel").val(soMAWB);
        $("#cb-dadantem").val(soMAWB);
        $("#cb-po").val(soMAWB);
        $("#cb-tokhai").val(soMAWB);
        $("#cb-issueDOC").val(soMAWB);
    });

    //Lọc theo ngày
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
    $("#btn-loc-theo-ngay").click(function () {
        fncLoadSanLuongTheoNgay(dmy2ymd($("#input-ngay-thongke").val()));
    });
    // hiểm thị sản lượng hôm nay
    $("#td-exp-today").click(function () {
        var ngayhomqua = moment(new Date()).add(-1, "d").format('MM/DD/YYYY');
        $("#input-ngay-thongke").datepicker("setDate", new Date(ngayhomqua));
        fncLoadThongKeSanLuong(ngayhomqua);
        //fncLoadSanLuongTheoNam();
        $("#myModalSanLuong").modal("show");
    });

    //modal click
    $(".tbl-custom").on("click", ".cell-showmodal", function () {
        var mo_tr = $(this).closest("tr");
        var mo_table = $(this).closest("table");
        var mo_table_id = mo_table.attr("id");
        if (mo_table_id == "tbl-TruckingToNBA") {
            $("#modal-btn-trucking").hide();
            $("#modal-btn-complete").show();
            $("#modal-btn-airport").show();
        }
        if (mo_table_id == "tbl-AirPort") {
            $("#modal-btn-airport").hide();
            $("#modal-btn-trucking").show();
            $("#modal-btn-complete").show();
        }
        if (mo_table_id == "tbl-Complete") {
            $("#modal-btn-complete").hide();
            $("#modal-btn-airport").show();
            $("#modal-btn-trucking").show();
        }

        mo_mawb = mo_tr.find(".td-mawb").text();
        var mo_sokien = mo_tr.find(".td-pcs").text();
        var mo_trongluong = mo_tr.find(".td-gw").text();
        var mo_chuyenbay = mo_tr.find(".td-fltNo").text();
        var mo_ngaybay = mo_tr.find(".td-fltD").text();
        var mo_giobay = mo_tr.find(".td-fltT").text();
        var mo_cutnba = mo_tr.find(".td-NBA").text();
        var mo_cutalse = mo_tr.find(".td-ALSE").text();
        var mo_diemden = mo_tr.find(".td-dest").text();
        var mo_ngaylamsli = mo_tr.find(".td-sliD").text();
        var mo_giolamsli = mo_tr.find(".td-sliT").text();
        var mo_bksxexuat = mo_tr.find(".td-truckId").text();
        var mo_ngayxuat = mo_tr.find(".td-truckD").text();
        var mo_gioxuat = mo_tr.find(".td-truckT").text();
        var mo_daily = mo_tr.find(".td-fwd").text();
        var mo_wh = mo_tr.find(".td-wh").text();
        var mo_ghichu = mo_tr.find(".td-remark").text();

        $("#mo-mawb").text(mo_mawb).addClass("mo-mawbCss");
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
    });

    // Báo cáo sản lượng
    $("#xemBaoCao").click(function () {
        var date = new Date();
        var tungay = $("#TuNgay").val();
        var denngay = $("#DenNgay").val();
        var daily = $("#selectDaiLy").val();
        var baocao = $("#selectBaoCao").val();

        ajaxGet3 = { "get1": splitDateBaoCao(tungay), "get2": splitDateBaoCao(denngay), "get3": daily };
        JsonData = JSON.stringify({ ajaxGet3 });
        //console.log(JsonData);

        $.ajax({
            type: "POST",
            url: "QuanLyHangXuat.aspx/getBaoCaoHangXuat",
            data: JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                //console.log(responsive);
                d = responsive.d;
                var html_body = "";

                $.each(d, function (key, val) {
                    html_body += "<tr>";
                    html_body += "<td>" + (key + 1) + "</td>";
                    html_body += "<td>" + val.SoMaWB + "</td>";
                    html_body += "<td>" + val.SoKien + "</td>";
                    html_body += "<td>" + val.TrongLuong + "</td>";
                    html_body += "<td>" + val.ChuyenBay + "</td>";
                    html_body += "<td>" + convertDate(val.NgayBayBK)[1] + "</td>";
                    html_body += "<td>" + val.TenHang + "</td>";
                    html_body += "<td>" + val.BKSXeXuat + "</td>";
                    html_body += "<td>" + convertDate(val.NgayXuat)[1] + "</td>";
                    html_body += "<td>" + val.GioXuat + "</td>";
                    html_body += "<td>" + val.MaPV + "</td>";
                    html_body += "<td>" + val.FWD + "</td>";
                    html_body += "</tr>";
                });

                $("#table-bao-cao-san-luong-xuat tbody").empty();
                $("#table-bao-cao-san-luong-xuat tbody").append(html_body);
            },
            error: function (messageError) {
                console.log("Lỗi : " + messageError.responseText);
            }
        });
        //window.location.href = "/BaoCaoXuatKho.aspx?ngaydau=" + splitDateBaoCao(tungay) + "&ngaycuoi=" + splitDateBaoCao(denngay) + "&baocao=" + baocao + "&daily=" + daily;
    });

    // intem theo mawb
    $("#modal-btn-intem").click(function () {
        var attrDestMAWB = $(this).attr("attrmawb");
        if ($(this).attr("attrfwd").indexOf("DHL") >= 0) {
            $("#ModalDHL").modal("show");
            $("#btn-print-dhl").attr("attrMAWBDHL", attrDestMAWB);
        } else {
            fncIntemOther(attrDestMAWB);
        }
    });
}

function splitDateBaoCao(date) {
    var dateSplit = "";
    if (date != "") {
        var arrDate = date.split("/");

        dateSplit = arrDate[2] + "-" + arrDate[1] + "-" + arrDate[0];
    } else {
        date = new Date();
        dateSplit = (date.getFullYear() + 1) + '/' + date.getMonth() + '/' + date.getDate();
    }
    return dateSplit;
}

function fncChange() {


    $("#show-booking").change(function () {
        alert(this.checked)
        if (this.checked) {
            $(".tr-qll-view").hide();
            $(".tr-booking-view").show();
        } else {
            $(".tr-qll-view").show();
        }
    });


    $(".cb-qll").change(function () {
        var cb_value = $(this).val();

        if (cb_value == "ALL") {
            if (this.checked) {
                $(".tr-qll-view").show();
                $(".cb-qll-child").prop("checked", true);
            } else {
                $(".tr-qll-view").hide();
                $(".cb-qll-child").prop("checked", false);
            }
        } else {

            if (cb_value == "DHL" || cb_value == "PT" || cb_value == "KN" || cb_value == "EI") {

                var FWD = "";
                if (this.checked) {
                    $(".hx-fwd").each(function () {
                        FWD = $(this).text();
                        if (FWD.indexOf(cb_value) > -1) {
                            $(".tr-qll-fwd-" + FWD.replace(".", "-")).show();
                            $("#cb-" + FWD.replace(".", "-") + "").prop("checked", true);
                            if (cb_value == "DHL" && FWD == "PT.DHL") {
                                $(".tr-qll-fwd-" + FWD.replace(".", "-")).hide();
                                $("#cb-" + FWD.replace(".", "-") + "").prop("checked", false);
                            }
                        } else {
                            $(".tr-qll-fwd-" + FWD.replace(".", "-")).hide();
                        }
                    })
                } else {
                    $(".tr-qll-view").show();
                    $(".hx-fwd").each(function () {
                        FWD = $(this).text();
                        if (FWD.indexOf(cb_value) > -1) {
                            $("#cb-" + FWD.replace(".", "-") + "").prop("checked", false);
                        }
                    })
                }
            } else {
                if (this.checked) {
                    $(".tr-qll-fwd-" + cb_value).show();
                    $(".hide-show-table").each(function () {
                        if ($(this).find("tbody tr[style=\"display: none;\"]").length != $(this).find("tbody tr").length) {
                            $(this).find("thead").show();
                        }
                    })

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
    });

    $("#modal-changestatus").on("click", ".btn-changestatus", function (e) {
        e.preventDefault();
        $("#modal-updating").modal("show");

        comde = { "mawb": mo_mawb, "status": $(this).val() };
        JsonData = JSON.stringify({ comde });
        console.log(JsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyHangXuat.aspx/ChangeStatus",
            data: JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            susscess: function () {
                alert("Thành công!");
                //$.notify("Cập nhật thành công");
                $("#modal-updating").modal("hide");
            },
            failure: function (response) {
                alert(response.d);
            }
        });
        $(".modal").modal("hide");
        //alert("Đã cập nhật thành công!");
        fncLoad();
    })


    $(".cb-makho").change(function () {
        var cb_value = $(this).val();

        if (cb_value == "ALL") {
            if (this.checked) {
                $(".tr-makho-view").show();
                $(".tr-thead").show();
            } else {
                $(".tr-makho-view").hide();
                $(".tr-thead").hide();
            }
        } else {
            //console.log(cb_value);
            if (this.checked) {
                $(".tr-makho-" + cb_value).show();

                $(".grid-view").each(function () {
                    if ($(this).find("tbody tr[style=\"display: none;\"]").length != $(this).find("tbody tr").length) {
                        $(this).find("thead").show();
                    }
                });
            } else {
                $(".tr-makho-" + cb_value).hide();
                $(".grid-view").each(function () {
                    if ($(this).find("tbody tr[style=\"display: none;\"]").length == $(this).find("tbody tr").length) {
                        $(this).find("thead").hide();
                    }
                })
            }
        }
    });

    $("#select-wh").change(function () {
        var cb_value = $(this).val();
        //var arrWH = [];

        //$("#select-wh option").each(function () {
        //    // Add $(this).val() to your list
        //    //console.log($(this).val());
        //    arrWH.push($(this).val());
        //});

        //console.log(arrWH);
        if (cb_value == "ALL") {
            $(".tr-makho-view").show();
        } else {
            //$(".tr-makho-view").hide();
            if (cb_value == "ALSC") {
                $(".tr-makho-" + cb_value).show();
                $(".tr-makho-NCTS").hide();
                $(".tr-makho-ACS").hide();
                $(".tr-makho-MSF").hide();
            }

            if (cb_value == "NCTS") {
                $(".tr-makho-" + cb_value).show();
                $(".tr-makho-ALSC").hide();
                $(".tr-makho-ACS").hide();
                $(".tr-makho-MSF").hide();
            }

            if (cb_value == "ACS") {
                $(".tr-makho-" + cb_value).show();
                $(".tr-makho-ALSC").hide();
                $(".tr-makho-NCTS").hide();
                $(".tr-makho-MSF").hide();
            }

            if (cb_value == "MSF") {
                $(".tr-makho-" + cb_value).show();
                $(".tr-makho-ALSC").hide();
                $(".tr-makho-NCTS").hide();
                $(".tr-makho-ACS").hide();
            }
        }
    });

    $("#select-loc").change(function () {
        var cb_value = $(this).val();
        if (cb_value == "ALL") {
            $(".tr-makho-view").show();
        } else {
            switch (cb_value) {
                case "VSIP":
                    list_fwd = ["DHL", "AGI", "SCK", "EI", "ULI", "EFL"];
                    like = true;

                    break;
                case "HPH":
                    list_fwd = ["PT"];
                    like = true;
                    break;

                case "QM":
                    list_fwd = ["KWE"];
                    like = true;
                    break;
            }

            fncReturnShowOrHide_CheckLOG("show");
        }


        // start fnc return show or hide check
        function fncReturnShowOrHide_CheckLOG(showorhide) {
            var i = 0;
            $(".hx-fwd").each(function () {
                if (i != 0) {
                    if (like == true) {
                        this_text = $(this).text().substring(0, list_fwd[0].length);
                    } else {
                        this_text = $(this).text();
                    }

                    if (list_fwd.indexOf(this_text) > -1) {
                        $(this).closest("tr").show();
                    } else {
                        if (this_text != "FWD") {
                            $(this).closest("tr").hide();
                        }
                    }
                }
                i++;
            })
        }

    });
}

// coundown
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

//function fncRefresh() {
//    location.reload();
//}

// modal hide
function hideModal_changestatus() {
    $('#modalChiTietMAWB').on('hide.bs.modal', function () {
        $("#myModalViewMawb").modal("show");
    });

    $('#modalEditHAWB').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });

    $("#modal-changestatus").on("hide.bs.modal", function () {
        $("#mo-mawb").removeClass("mo-mawbCss");
    });
}

function hideModal_BaoCao() {
    $("#modal-bcsl").on("hide.bs.modal", function () {
        $("#TuNgay").val("");
        $("#DenNgay").val("");
        $("#selectDaiLy").val("ALL");
        $("#selectBaoCao").val(0);
        $("#table-bao-cao-san-luong-xuat tbody").empty();
    });
}

function modalBCSL() {
    $("#abchx").click(function () {
        $("#modal-bcsl").modal("show");
        $("#TuNgay").datepicker();
        $('#TuNgay').datepicker('setDate', 'today');
        $("#DenNgay").datepicker();
        $('#DenNgay').datepicker('setDate', 'today');
    });
}

function fncLoadSanLuongTheoNgay(ngaythongke) {
    ajaxGet = { "get": ngaythongke };
    jsonData = JSON.stringify({ ajaxGet });

    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/LoadThongKeHangXuatNgay",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var totalPcs = 0;
            var totalGw = 0;

            var html_table = "";
            var html_tr = "";
            var html_tong = "";
            var _KhachHang = "";
            var totalPcsALl = 0;
            var totalGwAll = 0;
            var maxtd = 0;
            var oldmaxtd = 0;
            $.each(d, function (key, val) {
                if (_KhachHang != val.KhachHang && key != 0) {
                    html_tr = "<tr>" + "<td>" + _KhachHang + "</td>" + "<td class=\"color-blue\">" + numberWithCommas(totalPcs.toString()) + "</td>" + "<td class=\"color-red\">" + numberWithCommas(totalGw.toString()) + "</td>" + html_tr + "</tr>";
                    html_table += html_tr;
                    totalPcsALl += totalPcs;
                    totalGwAll += totalGw;
                    totalPcs = 0;
                    totalGw = 0;
                    html_tr = "";
                    oldmaxtd = maxtd > oldmaxtd ? maxtd : oldmaxtd;
                    maxtd = 0;
                }
                _KhachHang = val.KhachHang;
                html_tr += "<td>" + val.FWD + ": " + "<span  class=\"color-blue\">" + numberWithCommas(val.Pcs) + "</span>" + " Pcs/" + "<span  class=\"color-red\">" + numberWithCommas(val.Gw) + "</span>" + " Kg" + "</td>";
                totalPcs += parseFloat(val.Pcs);
                totalGw += parseFloat(val.Gw);
                maxtd++;
            });
            oldmaxtd = maxtd > oldmaxtd ? maxtd : oldmaxtd;
            html_tr = "<tr>" + "<td>" + _KhachHang + "</td>" + "<td class=\"color-blue\">" + numberWithCommas(totalPcs.toString()) + "</td>" + "<td class=\"color-red\">" + numberWithCommas(totalGw.toString()) + "</td>" + html_tr + "</tr>";
            html_table += html_tr;
            totalPcsALl += totalPcs;
            totalGwAll += totalGw;
            html_tong += "<tr class=\"font-weight-bold\">";
            html_tong += "<td>Tổng</td>";
            html_tong += "<td  class=\"color-text-tksl\">" + numberWithCommas(totalPcsALl) + "</td>";
            html_tong += "<td  class=\"color-text-tksl\">" + numberWithCommas(totalGwAll) + "</td>";
            html_tong += "</tr>";
            html_table += html_tong;
            $("#tbl_slhx tbody").empty();
            $("#tbl_slhx tbody").append(html_table);
            var tdCount = 0;
            $("#tbl_slhx tbody tr").each(function (index, item) {
                tdCount = $(this).find("td").length;
                for (i = 0; i < (oldmaxtd + 3 - tdCount); i++) {
                    $(this).append("<td></td>");
                }
            })
        },
        error: function () {
        }
    }).done(function () {
    });
}

function fncLoadSanLuongTheoNam() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/LoadThongKeHangXuatNam",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            // khong dc xóa
            var html_table_year = "";
            var _html_thead = "";
            // khong dc xóa ebnd
            var sl_tong_sk = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            var sl_tong_tl = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            var html_table_td_1 = "";
            var html_table_td_2 = "";
            var html_table_td_3 = "";
            var html_header = "";
            var html_tong_tksl = "";

            var html_tr_TongKhachHang = "";

            var _KhachHang_year = "";
            var countRowspan = 1;
            var thangHienThi = moment(new Date()).month();
            if (moment(new Date()).month() < 11) {
                thangHienThi += 3;
            } else {
                thangHienThi += 2;
            }

            html_header += "<tr>";
            html_header += " <td class=\"width-tksl-year width-tksl\"  colspan=\"2\">Tháng</td>";
            for (i = 1; i < thangHienThi; i++) {
                html_header += "<td class=\"width-tksl-year  width-tksl\">" + i.toString() + "</td>";
            }
            html_header += "</tr>";
            html_header += "<tr>";
            html_header += " <td class=\"width-tksl-year width-tksl\"  colspan=\"2\">Tổng</td>";
            for (i = 1; i < thangHienThi; i++) {
                html_header += "<td class=\"width-tksl\" id=\"td-tong-" + i.toString() + "\"></td>";
            }
            html_header += "</tr>";

            $.each(d.exp_FWDs, function (index, item) {
                if (_KhachHang_year != item.KhachHang) {
                    if (countRowspan != 1 && _KhachHang_year != "") {
                        countRowspan++;
                    } else {
                        html_tr_TongKhachHang = "";
                    }
                    if (index != 0) {
                        html_table_year += html_table_td_1 + countRowspan + html_table_td_2 + html_tr_TongKhachHang + html_table_td_3;
                    }
                    countRowspan = 1;
                    html_table_td_3 = "";
                    html_table_td_1 = "<tr>";
                    html_table_td_1 += "<td rowspan=\"";
                    html_table_td_2 = "\">" + item.KhachHang + "</td>";
                    if (item.KhachHang != "") {
                        html_tr_TongKhachHang = "<td class=\"font-weight-bold\">" + "Tổng:" + item.KhachHang + "</td>";
                        //for (i = 1; i < thangHienThi; i++) {
                        for (i = 0; i < thangHienThi; i++) {
                            html_tr_TongKhachHang += "<td class=\"td-KhachHang-Tong font-weight-bold\" id=\"td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-Tong-" + i.toString() + "\" sokien=\"0\" trongluong=\"0\" >" + "" + "</td>";
                        }
                        html_tr_TongKhachHang += "</tr>";
                    }
                } else {
                    countRowspan++;
                }

                _KhachHang_year = item.KhachHang;

                html_table_td_3 += "<td>" + item.FWDS + "</td>";
                //for (i = 1; i < thangHienThi; i++) {
                for (i = 0; i < thangHienThi; i++) {
                    html_table_td_3 += "<td id=\"td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + fncReplaceKyTuDacBiet(item.FWDS) + "-" + i.toString() + "\"></td>";
                }
                html_table_td_3 += "</tr>";
            })
            if (countRowspan == 1) {
                html_tr_TongKhachHang = "";
            } else {
                countRowspan++;
            }
            html_table_year += html_table_td_1 + countRowspan + html_table_td_2 + html_tr_TongKhachHang + html_table_td_3;
            $("#tbl_slhx_year tbody").empty();
            $("#tbl_slhx_year tbody").append(html_table_year);
            $("#tbl_slhx_year thead").empty();
            $("#tbl_slhx_year thead").append(html_header);
            var khachHangSoKien = 0;
            var khachHangTrongLuong = 0;
            $.each(d.expyear, function (index, item) {
                if (fncReplaceKyTuDacBiet(item.KhachHang) != "") {
                    khachHangSoKien = parseFloat(item.SoKien) + parseFloat($("#td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + "Tong" + "-" + item.month).attr("sokien"));
                    $("#td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + "Tong" + "-" + item.month).attr("sokien", khachHangSoKien);
                    khachHangTrongLuong = parseFloat(item.TrongLuong) + parseFloat($("#td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + "Tong" + "-" + item.month).attr("trongluong"));
                    $("#td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + "Tong" + "-" + item.month).attr("trongluong", khachHangTrongLuong);
                }
                //$("#td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + fncReplaceKyTuDacBiet(item.FWD) + "-" + item.month).attr("trongluong", item.TrongLuong);
                //$("#td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + fncReplaceKyTuDacBiet(item.FWD) + "-" + item.month).attr("sokien", item.SoKien);
                $("#td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + fncReplaceKyTuDacBiet(item.FWD) + "-" + item.month).append("<span class=\"color-blue\">" + numberWithCommas(item.SoKien) + "</span><span> / </span><span  class=\"color-red\">" + numberWithCommas(item.TrongLuong) + "</span>");
                //sl_tong_sk[parseInt(item.month) - 1] += parseFloat(item.SoKien);
                //sl_tong_tl[parseInt(item.month) - 1] += parseFloat(item.TrongLuong);
                sl_tong_sk[parseInt(item.month)] += parseFloat(item.SoKien);
                sl_tong_tl[parseInt(item.month)] += parseFloat(item.TrongLuong);
            })
            for (i = 0; i < 12; i++) {
                //if (sl_tong_sk[i] != 0 && sl_tong_tl[i] != 0) {
                //$("#td-tong-" + (i + 1)).append("<span class=\"color-blue\">" + numberWithCommas(sl_tong_sk[i]) + "</span> " + "<span >/</span>" + " <span class=\"color-red\">" + numberWithCommas(sl_tong_tl[i]) + "</span>");
                $("#td-tong-" + (i)).append("<span class=\"color-blue\">" + numberWithCommas(sl_tong_sk[i]) + "</span> " + "<span >/</span>" + " <span class=\"color-red\">" + numberWithCommas(sl_tong_tl[i]) + "</span>");
                //}
            }
            $(".td-KhachHang-Tong").each(function (index, item) {
                if ($(this).attr("sokien") != "0" && $(this).attr("trongluong") != "0") {
                    $(this).append("<span class=\"color-blue\">" + numberWithCommas($(this).attr("sokien")) + "</span> " + "<span >/</span>" + " <span class=\"color-red\">" + numberWithCommas($(this).attr("trongluong")) + "</span>");
                }
            })
        },
        error: function () {
        }
    }).done(function () {
    });


}
function fncLoadThongKeSanLuong(ngaythongke) {
    ajaxGet = { "get": ngaythongke };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/LoadThongKeHangXuat",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            //console.log(responsive);

            d = responsive.d;
            // thống kê theo ngày
            var totalPcs = 0;
            var totalGw = 0;

            var html_table = "";
            var html_tr = "";
            var html_tong = "";
            var _KhachHang = "";
            var totalPcsALl = 0;
            var totalGwAll = 0;
            var maxtd = 0;
            var oldmaxtd = 0;
            $.each(d.exptoday, function (key, val) {
                if (_KhachHang != val.KhachHang && key != 0) {
                    html_tr = "<tr>" + "<td>" + _KhachHang + "</td>" + "<td class=\"color-blue\">" + numberWithCommas(totalPcs.toString()) + "</td>" + "<td class=\"color-red\">" + numberWithCommas(totalGw.toString()) + "</td>" + html_tr + "</tr>";
                    html_table += html_tr;
                    totalPcsALl += totalPcs;
                    totalGwAll += totalGw;
                    totalPcs = 0;
                    totalGw = 0;
                    html_tr = "";
                    oldmaxtd = maxtd > oldmaxtd ? maxtd : oldmaxtd;
                    maxtd = 0;
                }
                _KhachHang = val.KhachHang;
                html_tr += "<td>" + val.FWD + ": " + "<span  class=\"color-blue\">" + numberWithCommas(val.Pcs) + "</span>" + " Pcs/" + "<span  class=\"color-red\">" + numberWithCommas(val.Gw) + "</span>" + " Kg" + "</td>";
                totalPcs += parseFloat(val.Pcs);
                totalGw += parseFloat(val.Gw);
                maxtd++;
            });
            oldmaxtd = maxtd > oldmaxtd ? maxtd : oldmaxtd;
            html_tr = "<tr>" + "<td>" + _KhachHang + "</td>" + "<td class=\"color-blue\">" + numberWithCommas(totalPcs.toString()) + "</td>" + "<td class=\"color-red\">" + numberWithCommas(totalGw.toString()) + "</td>" + html_tr + "</tr>";
            html_table += html_tr;
            totalPcsALl += totalPcs;
            totalGwAll += totalGw;
            html_tong += "<tr class=\"font-weight-bold\">";
            html_tong += "<td>Tổng</td>";
            html_tong += "<td  class=\"color-text-tksl\">" + numberWithCommas(totalPcsALl) + "</td>";
            html_tong += "<td  class=\"color-text-tksl\">" + numberWithCommas(totalGwAll) + "</td>";
            html_tong += "</tr>";
            html_table += html_tong;
            $("#tbl_slhx tbody").empty();
            $("#tbl_slhx tbody").append(html_table);
            var tdCount = 0;
            $("#tbl_slhx tbody tr").each(function (index, item) {
                tdCount = $(this).find("td").length;
                for (i = 0; i < (oldmaxtd + 3 - tdCount); i++) {
                    $(this).append("<td></td>");
                }
            })

            // thống kê năm
            // khong dc xóa
            var html_table_year = "";
            var _html_thead = "";
            // khong dc xóa ebnd
            /////////--------------------------------------- thêm tổng t1 xong thì bỏ về remark ở trên
            //var sl_tong_sk = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            //var sl_tong_tl = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            var sl_tong_sk = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            var sl_tong_tl = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            var html_table_td_1 = "";
            var html_table_td_2 = "";
            var html_table_td_3 = "";
            var html_header = "";
            var html_tong_tksl = "";

            var html_tr_TongKhachHang = "";

            var _KhachHang_year = "";
            var countRowspan = 1;
            var thangHienThi = moment(new Date()).month();
            if (moment(new Date()).month() < 11) {
                thangHienThi += 3;
                //thangHienThi += 2;
            } else {
                /////////--------------------------------------- thêm tổng t1 năm sau xong chuyển về 2
                thangHienThi += 3;
                //thangHienThi += 1;
            }

            html_header += "<tr>";
            html_header += " <td class=\" width-tksl-thang\"  colspan=\"2\">Tháng</td>";
            for (i = 1; i < thangHienThi; i++) {
                //for (i = 0; i < thangHienThi; i++) { //t12 năm ngoái
                html_header += "<td class=\"width-tksl-year  width-tksl\">" + i.toString() + "</td>";
            }
            html_header += "</tr>";
            html_header += "<tr>";
            html_header += " <td class=\"width-tksl-year width-tksl\"  colspan=\"2\">Tổng</td>";
            for (i = 1; i < thangHienThi; i++) {
                //for (i = 0; i < thangHienThi; i++) { //t12 năm ngoái
                html_header += "<td class=\"width-tksl\" id=\"td-tong-" + i.toString() + "\"></td>";
            }
            html_header += "</tr>";

            $.each(d.exp_FWDs, function (index, item) {
                if (_KhachHang_year != item.KhachHang) {
                    if (countRowspan != 1 && _KhachHang_year != "") {
                        countRowspan++;
                    } else {
                        html_tr_TongKhachHang = "";
                    }
                    if (index != 0) {
                        html_table_year += html_table_td_1 + countRowspan + html_table_td_2 + html_tr_TongKhachHang + html_table_td_3;
                    }
                    countRowspan = 1;
                    html_table_td_3 = "";
                    html_table_td_1 = "<tr>";
                    html_table_td_1 += "<td rowspan=\"";
                    html_table_td_2 = "\">" + item.KhachHang + "</td>";
                    if (item.KhachHang != "") {
                        html_tr_TongKhachHang = "<td class=\"font-weight-bold\">" + "Tổng:" + item.KhachHang + "</td>";
                        //for (i = 0; i < thangHienThi; i++) { //t12 năm ngoái
                        for (i = 1; i < thangHienThi; i++) {
                            html_tr_TongKhachHang += "<td class=\"td-KhachHang-Tong font-weight-bold\" id=\"td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-Tong-" + i.toString() + "\" sokien=\"0\" trongluong=\"0\" >" + "" + "</td>";
                        }
                        html_tr_TongKhachHang += "</tr>";
                    }
                } else {
                    countRowspan++;
                }

                _KhachHang_year = item.KhachHang;

                html_table_td_3 += "<td>" + item.FWDS + "</td>";
                for (i = 1; i < thangHienThi; i++) {
                    //for (i = 0; i < thangHienThi; i++) {//t12 năm ngoái
                    html_table_td_3 += "<td id=\"td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + fncReplaceKyTuDacBiet(item.FWDS) + "-" + i.toString() + "\"></td>";
                }
                html_table_td_3 += "</tr>";
            })
            if (countRowspan == 1) {
                html_tr_TongKhachHang = "";
            } else {
                countRowspan++;
            }
            html_table_year += html_table_td_1 + countRowspan + html_table_td_2 + html_tr_TongKhachHang + html_table_td_3;
            $("#tbl_slhx_year tbody").empty();
            $("#tbl_slhx_year tbody").append(html_table_year);
            $("#tbl_slhx_year thead").empty();
            $("#tbl_slhx_year thead").append(html_header);
            var khachHangSoKien = 0;
            var khachHangTrongLuong = 0;
            $.each(d.expyear, function (index, item) {
                if (fncReplaceKyTuDacBiet(item.KhachHang) != "") {
                    khachHangSoKien = parseFloat(item.SoKien) + parseFloat($("#td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + "Tong" + "-" + item.month).attr("sokien"));
                    $("#td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + "Tong" + "-" + item.month).attr("sokien", khachHangSoKien);
                    khachHangTrongLuong = parseFloat(item.TrongLuong) + parseFloat($("#td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + "Tong" + "-" + item.month).attr("trongluong"));
                    $("#td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + "Tong" + "-" + item.month).attr("trongluong", khachHangTrongLuong);
                }
                //$("#td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + fncReplaceKyTuDacBiet(item.FWD) + "-" + item.month).attr("trongluong", item.TrongLuong);
                //$("#td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + fncReplaceKyTuDacBiet(item.FWD) + "-" + item.month).attr("sokien", item.SoKien);
                $("#td-" + fncReplaceKyTuDacBiet(item.KhachHang) + "-" + fncReplaceKyTuDacBiet(item.FWD) + "-" + item.month).append("<span class=\"color-blue\">" + numberWithCommas(item.SoKien) + "</span><span> / </span><span  class=\"color-red\">" + numberWithCommas(item.TrongLuong) + "</span>");

                //----Bắc bỏ -1
                sl_tong_sk[parseInt(item.month) - 1] += parseFloat(item.SoKien);
                sl_tong_tl[parseInt(item.month) - 1] += parseFloat(item.TrongLuong);

            })
            //for (i = 0; i < 12; i++) {
            /////////--------------------------------------- thêm tổng t1 năm sau
            for (i = 0; i < 13; i++) {
                // Bắc bỏ hết tháng 1 sửa lại
                //if (sl_tong_sk[i] != 0 && sl_tong_tl[i] != 0) {
                //    $("#td-tong-" + (i + 1)).append("<span class=\"color-blue\">" + numberWithCommas(sl_tong_sk[i]) + "</span> " + "<span >/</span>" + " <span class=\"color-red\">" + numberWithCommas(sl_tong_tl[i]) + "</span>");
                //}

                //if (sl_tong_sk[i] != 0 && sl_tong_tl[i] != 0) {
                $("#td-tong-" + (i + 1)).append("<span class=\"color-blue\">" + numberWithCommas(sl_tong_sk[i]) + "</span> " + "<span >/</span>" + " <span class=\"color-red\">" + numberWithCommas(sl_tong_tl[i]) + "</span>");
                //}
            }
            $(".td-KhachHang-Tong").each(function (index, item) {
                //if ($(this).attr("sokien") != "0" && $(this).attr("trongluong") != "0") {
                //    $(this).append("<span class=\"color-blue\">" + numberWithCommas($(this).attr("sokien")) + "</span> " + "<span >/</span>" + " <span class=\"color-red\">" + numberWithCommas($(this).attr("trongluong")) + "</span>");
                //}

                //if ($(this).attr("sokien") != "0" && $(this).attr("trongluong") != "0") {
                $(this).append("<span class=\"color-blue\">" + numberWithCommas($(this).attr("sokien")) + "</span> " + "<span >/</span>" + " <span class=\"color-red\">" + numberWithCommas($(this).attr("trongluong")) + "</span>");
                //}
            })
        },
        error: function () {
        }
    }).done(function () {
    });
}

function fncLoadCheckMaWB(soMAWB) {
    ajaxGet = { "get": soMAWB };
    JsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/ReDocMAWB",
        data: JsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            $.each(d, function (key, val) {
                if (val.inLabelCheck == "True") {
                    $("#cb-inlabel").prop('checked', true);
                    $("#tv-label").empty().append("" + val.FullName1 + " lúc " + convertDate(val.NgayGioInLabel)[5] + "")
                } else {
                    $("#cb-inlabel").prop('checked', false);
                    $("#tv-label").empty().append("")
                }

                if (val.danTemCheck == "True") {
                    $("#cb-dadantem").prop('checked', true);
                    $("#tv-tem").empty().append("" + val.FullName2 + " lúc " + convertDate(val.NgayGioDanTem)[5] + "")
                } else {
                    $("#cb-dadantem").prop('checked', false);
                    $("#tv-tem").empty().append("")
                }

                if (val.scanPOCheck == "True") {
                    $("#cb-po").prop('checked', true);
                    $("#tv-po").empty().append("" + val.FullName3 + " lúc " + convertDate(val.NgayGioScanPO)[5] + "")
                } else {
                    $("#cb-po").prop('checked', false);
                    $("#tv-po").empty().append("")
                }

                if (val.toKhaiCheck == "True") {
                    $("#cb-tokhai").prop('checked', true);
                    $("#tv-tokhai").empty().append("" + val.FullName4 + " lúc " + convertDate(val.NgayGioToKhai)[5] + "")

                } else {
                    $("#cb-tokhai").prop('checked', false);
                    $("#tv-tokhai").empty().append("")
                }

                if (val.issueDocCheck == "True") {
                    $("#cb-issueDOC").prop('checked', true);
                    $("#tv-doc").empty().append("" + val.FullName5 + " lúc " + convertDate(val.NgayGioIssueDoc)[5] + "")
                } else {
                    $("#cb-issueDOC").prop('checked', false);
                    $("#tv-doc").empty().append("")
                }
            });
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    });

}

function UpdateMAWB(input, input1, input2) {
    ajaxGet3 = { "get1": input, "get2": input1, "get3": input2 };
    var jsonData = JSON.stringify({ ajaxGet3 });
    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/updateMAWBCheck",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {

    });
}
var count_chuyenbay = 0;
function loadChuyenBay(iu) {
    $("#tbl-chuyenbay tbody").empty();
    ajaxGet = { "get": iu };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/reAirlineAwb",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var chuyenbay_tbody = "";
            $.each(d, function (item, val) {
                chuyenbay_tbody += "<tr id=\"tr-chuyenbay-" + val.ID + "\" chuyenbay-id=\"" + val.ID + "\">";
                chuyenbay_tbody += "<td>" + (item + 1) + "</td>";
                chuyenbay_tbody += "<td class=\"cursor-pointer td-DauAWB\" >" + val.DauAWB.trim() + "</td>";
                chuyenbay_tbody += "<td class=\"cursor-pointer td-AirlinesName\">" + val.AirlinesName.trim() + "</td>";
                chuyenbay_tbody += "<td class=\"td-IATADesignator\">" + val.IATADesignator.trim() + "</td>";
                chuyenbay_tbody += "<td>" + val.ICAODesignator.trim() + "</td>";
                chuyenbay_tbody += "<td>" + val._CountryTerritory.trim() + "</td>";
                chuyenbay_tbody += "<td>" + "<button type=\"button\" class=\"btn btn-warning btn-sm btn-chuyenbay-xoa\">Xóa</button>" + "</td>";
                chuyenbay_tbody += "</tr>";
            })

            $("#tbl-chuyenbay tbody").append(chuyenbay_tbody);
            if (count_chuyenbay == 0) {
                $('#tbl-chuyenbay').DataTable({
                    "responsive": true,
                    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "iDisplayLength": -1,
                    //"language": {
                    //   // "search": "Filter data _INPUT_ in a Table",
                    //    "searchPlaceholder": ""
                    //}
                });
                count_chuyenbay += 1;
            }
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}

function fncShowSub(_KeHoachId) {
    $(".tr-sub-" + _KeHoachId).show();
    $(".tr-sub-show").removeClass("tr-sub-show");
    $(".tr-sub-" + _KeHoachId).addClass("tr-sub-show");
    //$("html,body").animate({ scrollTop: $("#tr-qll-" + _KeHoachId).offset().top - $("html,body").offset().top, scrollLeft: 0 }, 1000);
}

function tachMAWB(inputMAWB) {
    var result = ""

    var strMAWBDau = inputMAWB.substring(0, 3);
    var strMAWBGiua = inputMAWB.substring(3, 7);
    var strMAWBCuoi = inputMAWB.substring(7, 11);
    result = strMAWBDau + "-" + strMAWBGiua + " " + strMAWBCuoi;
    return result;
}

function tomauFLTDateTime(input, input1) {
    var startdate = new Date();
    var dateNowMoment2 = moment(startdate);
    // Tô mày FLT Date , FLT Time
    var ngayFLTmoment = moment(convertDate(input)[10] + " " + input1);
    var gioFlt = (ngayFLTmoment._d - dateNowMoment2) / 1000 / 60 / 60;
    var tomauFLT = "";
    if (gioFlt > 12 && gioFlt < 24) {
        tomauFLT = "td-kh-blue";
    } else if (gioFlt > 6 && gioFlt < 12) {
        tomauFLT = "td-kh-yellow";
    } else if (gioFlt > 0 && gioFlt < 6) {
        tomauFLT = "td-kh-red";
    }

    return tomauFLT;
}

function tomauCutoffKH(input) {
    var startdate = new Date();
    var dateNowMoment2 = moment(startdate);
    // Tô màu Cutoff 
    var cutOffmoment = moment(input);
    var giocutOff = (cutOffmoment._d - dateNowMoment2) / 1000 / 60 / 60;
    var tomaucuOff = "";
    if (giocutOff > 12 && giocutOff < 24) {
        tomaucuOff = "td-kh-blue";
    } else if (giocutOff > 6 && giocutOff < 12) {
        tomaucuOff = "td-kh-yellow";
    } else if (giocutOff > 0 && giocutOff < 6) {
        tomaucuOff = "td-kh-red";
    }

    return tomaucuOff;
}

function tomauCuteKH(input) {
    var startdate = new Date();
    var dateNowMoment2 = moment(startdate);
    // Tô màu Cute 
    var cutemoment = moment(input);
    var giocute = (cutemoment._d - dateNowMoment2) / 1000 / 60 / 60;
    var tomaucute = "";
    if (giocute > 6 && giocute < 12) {
        tomaucute = "td-kh-blue";
    } else if (giocute > 0 && giocute < 6) {
        tomaucute = "td-kh-yellow";
    } else if (giocute < 0) {
        tomaucute = "td-kh-red";
    }
    return tomaucute;
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

//function loadDataKeHoach(get) {
//    $("#loading").removeClass("displaynone")
//    var ajaxGet = { "get": get };
//    jsonData = JSON.stringify({ ajaxGet });
//    $.ajax({
//        type: "POST",
//        url: "QuanLyHangXuat.aspx/reListKeHoach",
//        data: jsonData,
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        async: false,
//        //timeout: 120000,
//        success: function (responsive) {
//            d = responsive.d;
//            html_body = "";
//            $.each(d, function (key, val) {
//                html_body += "<tr>";
//                html_body += "<td>" + val.SoMawb + "</td>";
//                html_body += "<td>" + val.SoHawb + "</td>";
//                html_body += "<td>" + val.SoShipment + "</td>";
//                html_body += "<td>" + val.SoDNN + "</td>";
//                html_body += "<td>" + val.SoKien + "</td>";
//                html_body += "<td>" + val.TrongLuong + "</td>";
//                html_body += "<td>" + val.KichThuoc + "</td>";
//                html_body += "<td>" + convertDate(val.NgayNhap + " " + val.GioNhap)[2] + "</td>";
//                html_body += "<td>" + convertDate(val.NgayGioCanXong)[2] + "</td>";
//                html_body += "<td>" + val.ViTri + "</td>";
//                html_body += "<td>" + val.FWD + "</td>";
//                html_body += "<td>" + val.GhiChuDNN + "</td>";
//                html_body += "</tr>";
//            });
//            $("#tbl-chi-tiet-kehoach tbody").empty().append(html_body);

//            if (!$.fn.dataTable.isDataTable('#tbl-chi-tiet-kehoach')) {
//                $('#tbl-chi-tiet-kehoach').DataTable({
//                    paging: false
//                });
//            }
//        },
//        error: function (request, status, error) {
//            console.log(request.responseText);
//        }
//    }).done(function () {
//        $("#loading").addClass("displaynone")
//    });
//}

// Cắt chữ MAWB
function catchu(input) {
    var result;
    var subString = input.substring(0, 3);
    var subStringSau = input.substring(3, 11);
    result = subString + "-" + subStringSau;
    return result;
}

function fncIntemDHL(MAWB, IP, NAME, SOLUONG) {
    var ajaxGet4 = { "get1": MAWB, "get2": IP, "get3": NAME, "get4": SOLUONG };
    jsonData = JSON.stringify({ ajaxGet4 });
    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/ReLabelMAWBDHL",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            console.log(d)
        },
        error: function () {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Thử lại hoặc liên hệ IT',
                'error'
            )
        }
    }).done(function () {

    });
}

function fncIntemOther(MAWB) {
    var html_printlabel = "";

    var ajaxGet = { "get": MAWB };
    jsonData = JSON.stringify({ ajaxGet });
    //$("#div-wait").show();
    var html_sub_Plan = "";
    var html_inlabel = "";
    var soHawbSoSanh = "";
    var soTangDan = 1;
    var totalKienHAWB = 1;
    $.ajax({
        type: "POST",
        url: "QuanLyHangXuat.aspx/ReLabelMAWBViews",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d.length == 0) {
                alert("Không có thông tin lô hàng");
                checkPrint = false;
                return false;
            } else {
                var html_inlabel = "";
                checkPrint = true;
                checkFWD = "";
                html_printlabel = "";
                $.each(d, function (key, val) {
                    if (val.DestHAWB == "") {
                        alert("Vui lòng nhập DEST cho HAWB: " + val.HAWB);
                        checkPrint = false;
                        return false;
                    }
                    checkFWD = val.FWD;
                    console.log(checkFWD);
                    if (checkFWD == "EFL") {
                        html_printlabel += "<div class=\"page myPageBreak\">";
                        html_printlabel += "<div class=\"div-tem-uli-container\">";
                        html_printlabel += "<div class=\"top\">";
                        html_printlabel += "<div class=\"top-airline\">";
                        html_printlabel += "<span class=\"span-airline\">AIRLINE</span>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"title-mawb\">";
                        html_printlabel += "" + val.AirlinesName + "";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"top-barcode-mawb\">";
                        html_printlabel += "<span><svg id=\"barcodeEPL\" class=\"barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + val.MAWB + "\"></svg></span>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"mid\">";
                        html_printlabel += "<div class=\"top-airline\">";
                        html_printlabel += "<span class=\"span-airline\">AIRWAYBILL NO</span>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"title-mawb\">";
                        html_printlabel += "" + tachMAWB(val.MAWB) + "";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"span-airline\">";
                        html_printlabel += "<span>DESTINATION</span>  <span class=\"span-padding\">ORIGIN</span>  <span>TOTAL NO OF PIECES</span>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"span-airline\">";
                        html_printlabel += "<span class=\"destall\">" + val.DestMAWB + "</span>  <span class=\"destall destallorg\">HAN</span>  <span class=\"destall destalltotal\">" + val.EST_PCSTotal + "</span>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"span-airline\">";
                        html_printlabel += "EXPOLANKA FREIGHT (VIET NAM)";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"span-airline\">";
                        html_printlabel += "<span>HOUSE AIRWAYBILL NO</span>  <span class=\"span-padding\">H.DEST</span>  <span>H.PCS</span>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"span-airline\">";
                        html_printlabel += "<span class=\"destallHAWB\">" + val.HAWB + "</span>  <span class=\"destallHAWB destallHAWBDesc\">" + val.DestHAWB + "</span>  <span class=\"destallHAWB destallHAWBDesc\">" + val.EST_PCS + "</span>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"top-barcode-mawb\">";
                        html_printlabel += "<span><svg id=\"barcodeEPL\" class=\"barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + val.HAWB + "\"></svg></span>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                    } else if (checkFWD == "ULI") {
                        var html_font__size = ""
                        if (val.AirlinesName.length > 16) {
                            html_font__size = "font__size20px"
                        }
                        html_printlabel += "<div class=\"pageULI\">";
                        html_printlabel += "<div class=\"TemULI myPageBreak\" >";
                        html_printlabel += "<div class=\"TemULI__border\" >";
                        html_printlabel += "<div class=\"TemULI__border-header\">";
                        html_printlabel += "<div class=\"TemULI__border-header--chuyenbay\">";

                        html_printlabel += "<div class=\"TemULI__border-header--item " + html_font__size + "\">";
                        html_printlabel += "" + val.AirlinesName + "";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-header--machuyenbay\">";
                        html_printlabel += "<div class=\"TemULI__border-header--item\">";
                        html_printlabel += "" + val.IATADesignator + "";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-mawb\">";
                        html_printlabel += "<div class=\"TemULI__border-mawb--item\">";
                        html_printlabel += "AIR WAYBILL NO:";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-mawb--item TemULI__border-mawb--item--child\">";
                        html_printlabel += "" + tachMAWB(val.MAWB) + "";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-mawb--item\">";
                        html_printlabel += "<svg id=\"barcodeULI-MAWB\" class=\"barcode TemULI__border-mawb--item-barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + val.MAWB + "\"></svg>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-origin\">";
                        html_printlabel += "<div class=\"TemULI__border-origin--item\">";
                        html_printlabel += "<div class=\"TemULI__border-origin--item--tilte\">";
                        html_printlabel += "ORIGIN:";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-origin--item--child\">";
                        html_printlabel += "HAN";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-origin--item\">";
                        html_printlabel += "<div class=\"TemULI__border-origin--item--tilte\">";
                        html_printlabel += "Destination:";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-origin--item--child\">";
                        html_printlabel += "" + val.DestMAWB + "";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-origin--item\">";
                        html_printlabel += "<div class=\"TemULI__border-origin--item--tilte\">";
                        html_printlabel += "Pieces:";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-origin--item--child\">";
                        html_printlabel += "" + val.EST_PCSTotal + "";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-img\">";
                        html_printlabel += "<img src=\"images/imagesUNI/UNIQUE.jpg\" alt=\"Alternate Text\" />";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-hawb\">";
                        html_printlabel += "<div class=\"TemULI__border-hawb--left\">";
                        html_printlabel += "<div class=\"TemULI__border-hawb--left--item\">";
                        html_printlabel += "HAWB BILL NO:";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-hawb--left--item\">";
                        html_printlabel += "" + val.HAWB + "";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-hawb--left--item\">";
                        html_printlabel += "<svg id=\"barcodeULI-HAWB\" class=\"barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + val.HAWB + "\"></svg>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-hawb--right\">";
                        html_printlabel += "<div class=\"TemULI__border-hawb--right--header\">";
                        html_printlabel += "PO NUMBER";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-hawb--right--body\">";
                        html_printlabel += "<div class=\"TemULI__border-hawb--right--body--left\">";
                        html_printlabel += "<div class=\"TemULI__border-hawb--right--body--item\">" + val.PO + "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-hawb--right--body--right\">";
                        html_printlabel += "<div class=\"TemULI__border-hawb--right--body--item\">" + val.EST_PCS_HAWB + "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border--footer\" >";
                        html_printlabel += "<div class=\"TemULI__border--footer--left\" >";
                        html_printlabel += "<div>HAWB DEST:</div>";
                        html_printlabel += "<div class=\"font-size33\">" + val.DestHAWB + "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border--footer--right\" >";
                        html_printlabel += "<div>Number of HAWB:</div>";
                        html_printlabel += "<div class=\"font-size33\">" + val.EST_PCS_HAWB + "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                    } else if (checkFWD.indexOf("DHL") >= 0) {
                        for (var i = 1; i <= val.EST_PCS_HAWB; i++) {
                            var htmlsomawbTangDan = "";
                            var htmlsoHawbTangDan = "";
                            if (soTangDan < 10) {
                                htmlsomawbTangDan += "0000" + soTangDan.toString();
                            } else {
                                htmlsomawbTangDan += "000" + soTangDan.toString();
                            }

                            if (i < 10) {
                                htmlsoHawbTangDan += "0000" + i.toString();
                            } else {
                                htmlsoHawbTangDan += "000" + i.toString();
                            }
                            var airLine__hangbay_css = "";
                            if (val.AirlinesName.length <= 10) {
                                airLine__hangbay_css = "airLine__hangbay_css";
                            }
                            html_printlabel += "<div class=\"pageDHL\">";
                            html_printlabel += "<div class=\"mainDHL \">";
                            html_printlabel += "<div class=\"temDHL\">";
                            html_printlabel += "<div class=\"airLine\">";
                            html_printlabel += "<span>Airline</span>";
                            html_printlabel += "<span></span>"; //QR8953 / 28NOV
                            html_printlabel += "</div>";
                            html_printlabel += "<div class=\"airLine__hangbay\">";
                            html_printlabel += "<img class=\"airLineImg\" src=\"./images/OPS/back-image.jpg\" alt=\"\">";
                            html_printlabel += "<span class=\"airLine__hangbay-name " + airLine__hangbay_css + "\">" + val.AirlinesName + "</span>";
                            html_printlabel += "</div>";
                            html_printlabel += "<div class=\"barcode__MAWB\">";
                            html_printlabel += "<span><svg  class=\"barcode barcodeDHL\" jsbarcode-format=\"CODE128\" jsbarcode-value=\"" + val.MAWB + htmlsomawbTangDan + "\"></svg></span>";
                            html_printlabel += "</div>";
                            html_printlabel += "<div class=\"mawbNumber\">";
                            html_printlabel += "<div class=\"mawbNumber-title fontweight600\">Master Air Waybill Number</div>";
                            html_printlabel += "<div class=\"mawbNumber-MAWB\">";
                            html_printlabel += "" + catchu(val.MAWB) + "";
                            html_printlabel += "</div>";
                            html_printlabel += "</div>";
                            html_printlabel += "<div class=\"disMawb\">";
                            html_printlabel += "<div class=\"disMawb__destination\">";
                            html_printlabel += "<div class=\"disMawb__destination-title fontweight600\">Destination</div>";
                            html_printlabel += "<div class=\"disMawb__destination-name\"><span class=\"disMawb__destination-name_span\">" + val.DestMAWB + "</span></div>";
                            html_printlabel += "</div>";
                            html_printlabel += "<div class=\"disMawb__totalPriece\">";
                            html_printlabel += "<div class=\"disMawb__totalPriece-title fontweight600\">Total No of Pieces</div>";
                            html_printlabel += "<div class=\"disMawb__totalPriece-name\"><span class=\"disMawb__totalPriece_span\">" + val.EST_PCSTotal + "</span></div>";
                            html_printlabel += "</div>";
                            html_printlabel += "</div>";
                            html_printlabel += "<div class=\"barcode__MAWB\">";
                            html_printlabel += "<span><svg class=\"barcode barcodeDHL\" jsbarcode-format=\"CODE128\" jsbarcode-value=\"H" + val.HAWB + "+Y" + htmlsoHawbTangDan + "+" + "\"></svg></span>";
                            html_printlabel += "</div>";
                            html_printlabel += "<div class=\"mawbNumber\">";
                            html_printlabel += "<div class=\"mawbNumber-title fontweight600\">House Air Waybill Number</div>";
                            html_printlabel += "<div class=\"mawbNumber-MAWB\">";
                            html_printlabel += "" + val.HAWB + "";
                            html_printlabel += "</div>";
                            html_printlabel += "</div>";
                            html_printlabel += "<div class=\"dis__HAWB\">";
                            html_printlabel += "<div class=\"dis__HAWB-origin\">";
                            html_printlabel += "<div class=\"dis__HAWB-origin-title fontweight600\">Origin</div>";
                            html_printlabel += "<div class=\"dis__HAWB-origin-name\">HAN</div>";
                            html_printlabel += "</div>";
                            html_printlabel += "<div class=\"dis__HAWB-destination\">";
                            html_printlabel += "<div class=\"dis__HAWB-destination-title fontweight600\">Destination</div>";
                            html_printlabel += "<div class=\"dis__HAWB-destination-name\">" + val.DestHAWB + "</div>";
                            html_printlabel += "</div>";
                            html_printlabel += "<div class=\"dis__HAWB-totalHAWB\">";
                            html_printlabel += "<div class=\"dis__HAWB-totalHAWB-title fontweight600\">Total No .of HAWB Pieces</div>";
                            html_printlabel += "<div class=\"dis__HAWB-totalHAWB-name\">" + val.EST_PCS_HAWB + "</div>";
                            html_printlabel += "</div>";
                            html_printlabel += "</div>";
                            html_printlabel += "<div class=\"footer\">";
                            html_printlabel += "<div class=\"footer__Service\">";
                            html_printlabel += "<div class=\"footer__Service-type\">";
                            html_printlabel += "<span class=\"fontweight600\">Service Type</span>";
                            html_printlabel += "<span></span>"; //QR8953 / 28NOV
                            html_printlabel += "</div>";
                            html_printlabel += "<div class=\"footer__Service-date\">";
                            html_printlabel += "<span></span>"; //QR8953 / 28NOV
                            html_printlabel += "</div>";
                            html_printlabel += "</div>";
                            html_printlabel += "<div class=\"footer__Img\">";
                            html_printlabel += "<img src=\"./images/OPS/DHL.png\" alt=\"\">";
                            html_printlabel += "</div>";
                            html_printlabel += "</div>";
                            html_printlabel += "</div>";
                            html_printlabel += "</div>";
                            html_printlabel += "</div>";
                            soTangDan++;
                        }

                    } else {
                        alert("FWD: " + checkFWD + " chưa có tem in");
                        checkPrint = false;
                        return false;
                    }
                });
                //console.log(checkFWD);
                if (checkFWD == "EFL") {
                    $("#temIn").removeClass("noneEFL");
                    $("#temULI").removeClass("noneEFL");
                    $("#container-inlabel").removeClass("noneEFL");
                    $("#temIn").addClass("noneULI");
                    $("#div-TrangThaiHangXuat").removeClass("blockPage");
                    $("#div-TrangThaiHangXuat").addClass("nonePage");
                    $("#temIn").empty().append(html_printlabel)
                    $("#temULI").empty();
                    $("#container-inlabel").empty();
                } else if (checkFWD == "ULI") {
                    $("#temULI").removeClass("noneULI");
                    $("#temIn").removeClass("noneULI");
                    $("#temULI").addClass("noneEFL");
                    $("#div-TrangThaiHangXuat").removeClass("blockPage");
                    $("#div-TrangThaiHangXuat").addClass("nonePage");
                    $("#temULI").empty().append(html_printlabel);
                    $("#temIn").empty();
                    $("#container-inlabel").empty();
                } else if (checkFWD.indexOf("DHL") >= 0) {
                    $("#container-inlabel").empty().append(html_printlabel);
                    $("#temIn").empty();
                    $("#temULI").empty();
                }
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

    });
    JsBarcode(".barcode").init();

    if (checkPrint == true) {

        setTimeout(function () {
            window.print();

            window.open('', '_parent', '');
            window.close();
        }, 250);

    }
}

function isValidDateTime(str) {
    // Định dạng regex cho dd/MM/YYYY HH:mm
    const regex = /^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/\d{4} ([0-1][0-9]|2[0-3]):([0-5][0-9])$/;

    // Kiểm tra chuỗi có khớp với regex không
    if (!regex.test(str)) {
        return false;
    }

    // Tạo đối tượng Date từ chuỗi đầu vào
    const [day, month, year, hours, minutes] = str.split(/[/\s:]/).map(Number);
    const date = new Date(year, month - 1, day, hours, minutes);

    // Kiểm tra tính hợp lệ của Date
    if (
        date.getFullYear() !== year ||
        date.getMonth() + 1 !== month ||
        date.getDate() !== day ||
        date.getHours() !== hours ||
        date.getMinutes() !== minutes
    ) {
        return false;
    }

    return true;
}