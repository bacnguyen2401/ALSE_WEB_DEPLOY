var html_thead = "";
var html_chiphi_thead = "";
var html_tbody = "";
var html_tbody_tonghop = "";
var html_trangthai = "";
var html_trangthaicheckbox = "";
var html_btn_them = "";
var html_modal_btn_them = "";
var html_modal_btn_luu = "";
var html_modal_btn_xoa = "";
var html_modal_btn_hoanthanh = "";
var html_modal_btn_hoanthanh_huy = "";
var html_modal_btn_dinhkem = "";
var ajaxGet2;
var ajaxGet4;
var ajaxGet6;
var d;
var thanhtoan_tr;
var modal_tieude = "";
var modal_khdt_name = "";
//
var tt_val_id = "";
var tt_val_khachhang = "";
var tt_val_loaihinh = "";
var tt_val_thang = "";
var tt_val_nam = "";
var tt_val_ky = "";
var tt_val_ngaybdky = "";
var tt_val_ngayktky = "";
var tt_val_sanluong = "";
var tt_val_giatri = "";
var tt_val_giatrisauthue = "";
var tt_val_ngaygioguibangke = "";

var tt_val_nguoiguibangke = "";
var tt_val_ngaygioxacnhanbangke = "";
var tt_val_nguoixacnhanbangke = "";

var tt_val_ngaychuyenketoan = "";
var tt_val_nguoichuyenketoan = "";

var tt_val_sohoadon = "";
var tt_val_ngayphathanh = "";
var tt_val_nguoiphathanh = "";

var tt_val_ngaychuyenphat = "";
var tt_val_nguoichuyenphat = "";

var tt_val_ngaythanhtoan = "";
var tt_val_nguoithanhtoan = "";

var tt_val_ghichu = "";
var tt_val_danhanhdgoc_ngaygio = "";
var tt_val_danhanhdgoc_sohd = "";
var tt_val_danhanhdgoc_loaithanhtoan = "";
var tt_val_danhanhdgoc_nguoichita = "";
var tt_val_danhanhdgoc_nguoinhan = "";
var tt_val_dachuyenhdketoan_ngaygio = "";
var tt_val_dachuyenhdketoan_nguoichuyen = "";

var imgdata;
var arrTempData = {};
var fileitem = "";
var count_item = 0;

var sanluong_exp = 0;
var sanluong_imp = 0;
var sanluong_nwh = 0;
var sanluong_cd = 0;
var sanluong_dgr = 0;
var sanluong_oth = 0;
var sanluong_k_tp = 0;
var sanluong_k_tx = 0;

var giatri_exp = 0;
var giatri_imp = 0;
var giatri_nwh = 0;
var giatri_cd = 0;
var giatri_dgr = 0;
var giatri_oth = 0;
var giatri_k_tp = 0;
var giatri_k_tx = 0;

var giatri_chiho = 0;

var arr_date = ["01/01/1900 12:00:00 AM", "1/1/1900 12:00:00 AM", "01/01/1900 00:00:00", "1/1/1900 00:00:00"];
var datenow = 0;
var monthnow = 0;
var html_loaihinh_doanhthu = "";
var html_loaihinh_chiphi = "";
var tt_val_soso = "";
var tt_val_chiho = "";
var iu = "0";
var loaithongke = "";
var html_tbody_tong = "";

var tr_trangthaicheckbox = "";
$(document).ready(function () {
    // phân quyền hiển thị

    var userId = $("#username").attr("userid");
    var listAdminThongKe = ["1",
        "8",
        "9",
        "20",
        "83",
        "84",
        "111",
        "94"];

    //console.log(userId, listAdminThongKe.indexOf(userId));
    if (listAdminThongKe.indexOf(userId) > -1) {

        $("#btn-quanly-showThongKe").show();
    }


    monthnow = (new Date()).getMonth() + 1;
    //datenow = moment(new Date()); //todays date
    //var end = moment("2017-10-19"); // another date
    //var duration = moment.duration(datenow.diff(end));
    //var days = duration.asMonths();
    //console.log(days);
    $("#btn-quanly-khdt").click(function () {
        window.location.href = "./KhachHangDoiTac.aspx";
    })
    $("#btn-quanly-baocao").click(function () {
        window.location.href = "./BaoCao.aspx";
    })
    $("#select-thanhtoan-thang").val(dt.getMonth() + 1);
    $("#select-thanhtoan-nam").val(dt.getFullYear());
    //$("#select-thanhtoan-thongke-thang").val(dt.getMonth() + 1);
    $("#select-thanhtoan-thongke-nam").val(dt.getFullYear());
    ////------
    html_loaihinh_doanhthu = "";
    html_loaihinh_doanhthu += "<option value=\"EXP\">1. Xuất</option>";
    html_loaihinh_doanhthu += "<option value=\"IMP\">2. Nhập</option>";
    html_loaihinh_doanhthu += "<option value=\"LOG\">3. Logistics</option>";
    html_loaihinh_doanhthu += "<option value=\"NWH\">4. Thuê Kho</option>";
    html_loaihinh_doanhthu += "<option value=\"CD\">5. Mở Tờ Khai</option>";
    html_loaihinh_doanhthu += "<option value=\"DGR\">6. Hàng Nguy Hiểm</option>";
    //html_loaihinh_doanhthu += "<option value=\"CD\">7. Mở Tờ Khai</option>";
    html_loaihinh_doanhthu += "<option value=\"K-TP\">7. Thuê Phòng</option>";
    html_loaihinh_doanhthu += "<option value=\"K-TX\">8. Thuê Xe</option>";
    html_loaihinh_doanhthu += "<option value=\"OTH\">9. Khác</option>";
    ////------
    html_loaihinh_chiphi = "";
    html_loaihinh_chiphi += "<option value=\"EXP\">1. Xuất</option>";
    html_loaihinh_chiphi += "<option value=\"IMP\">2. Nhập</option>";
    html_loaihinh_chiphi += "<option value=\"VC\">3. Vận Chuyển</option>";
    html_loaihinh_chiphi += "<option value=\"NWH\">4. Thuê Kho</option>";
    html_loaihinh_chiphi += "<option value=\"NH\">5. Nâng Hạ</option>";
    html_loaihinh_chiphi += "<option value=\"LOG\">6. Logistics</option>";
    html_loaihinh_chiphi += "<option value=\"K-TD\">7. Tiền Điện</option>";
    html_loaihinh_chiphi += "<option value=\"K-TN\">8. Tiền Nước</option>";
    html_loaihinh_chiphi += "<option value=\"K-TVS\">9. Tiền Vệ Sinh</option>";
    html_loaihinh_chiphi += "<option value=\"K-TI\">10. Tiền Internet</option>";
    html_loaihinh_chiphi += "<option value=\"K-TSC\">11. Tiền Sửa Chữa</option>";
    html_loaihinh_chiphi += "<option value=\"OTH\">12. Khác</option>";
    ////------
    ///     ////------
    html_loaihinh_chiho = "";
    html_loaihinh_chiho += "<option value=\"EXP\">1. Xuất</option>";
    html_loaihinh_chiho += "<option value=\"IMP\">2. Nhập</option>";
    html_loaihinh_chiho += "<option value=\"VC\">3. Vận Chuyển</option>";
    html_loaihinh_chiho += "<option value=\"NWH\">4. Thuê Kho</option>";
    html_loaihinh_chiho += "<option value=\"NH\">5. Nâng hạ</option>";
    html_loaihinh_chiho += "<option value=\"LOG\">6. Logistics</option>";
    html_loaihinh_chiho += "<option value=\"OTH\">7. Khác</option>";
    ////------
    ////------
    html_thead = "";
    html_thead += "<tr>";
    html_thead += "<td rowspan=\"2\" class=\"td-trangthai-css\">" + "Trạng Thái" + "</td>";
    html_thead += "<td rowspan=\"2\" class=\"td-khachhang\">" + "Khách Hàng" + "</td>";
    html_thead += "<td rowspan=\"2\" class=\"td-loaihinh\">" + "Loại Hình" + "</td>";
    html_thead += "<td rowspan=\"2\" class=\"td-thang\">" + "Tháng" + "</td>";
    html_thead += "<td rowspan=\"2\" class=\"td-ky\">" + "Kỳ" + "</td>";
    html_thead += "<td rowspan=\"2\" class=\"td-ngaybdky\">" + "BD Kỳ" + "</td>";
    html_thead += "<td rowspan=\"2\" class=\"td-ngayktky\">" + "KT Kỳ" + "</td>";
    html_thead += "<td rowspan=\"2\" class=\"td-sanluong\">" + "Sản Lượng" + "</td>";
    html_thead += "<td rowspan=\"2\" class=\"td-giatri\">" + "Giá Trị" + "</td>";
    html_thead += "<td rowspan=\"2\" class=\"td-chiho\">" + "Chi Hộ" + "</td>";
    html_thead += "<td colspan=\"2\" class=\"td-guibangke  td-ketoan-color0\">" + "Trách Nhiệm Khai Thác" + "</td>";
    html_thead += "<td colspan=\"4\" class=\"td-phathanh td-ketoan-color1\">" + "Trách Nhiệm Kế Toán" + "</td>";
    html_thead += "<td rowspan=\"2\" class=\"td-soso\">" + "Số SO" + "</td>";
    html_thead += "<td rowspan=\"2\" class=\"td-ghichu\">" + "Ghi Chú" + "</td>";
    html_thead += "<td rowspan=\"2\" class=\"td-ghichu\">" + "Copy" + "</td>";
    html_thead += "</tr>";

    html_thead += "<tr>";
    html_thead += "<td class=\"td-guibangke td-ketoan-color0\">" + "Gửi Bảng Kê" + "</td>";
    html_thead += "<td  class=\"td-xacnhanbangke td-ketoan-color0\">" + "XN Bảng Kê" + "</td>";
    //html_thead += "<td  class=\"td-chuyenketoan td-ketoan-color0\">" + "Chuyển Kế Toán" + "</td>";
    html_thead += "<td  class=\"td-sohoadon td-ketoan-color1\">" + "Số HD" + "</td>";
    html_thead += "<td  class=\"td-phathanh td-ketoan-color1\">" + " Ngày Xuất HĐ" + "</td>";
    html_thead += "<td  class=\"td-chuyenphat td-ketoan-color1\">" + "Chuyển Hóa Đơn" + "</td>";
    html_thead += "<td  class=\"td-thanhtoan td-ketoan-color1\">" + "Thanh Toán" + "</td>";

    html_thead += "</tr>";

    //// thead chi phí
    html_chiphi_thead = "";
    html_chiphi_thead += "<tr>";
    html_chiphi_thead += "<td rowspan=\"2\" class=\"td-trangthai-css\">" + "Trạng Thái" + "</td>";
    html_chiphi_thead += "<td rowspan=\"2\" class=\"td-khachhang\">" + "Khách Hàng" + "</td>";
    html_chiphi_thead += "<td rowspan=\"2\" class=\"td-loaihinh\">" + "Loại Hình" + "</td>";
    html_chiphi_thead += "<td rowspan=\"2\" class=\"td-thang\">" + "Tháng" + "</td>";
    html_chiphi_thead += "<td rowspan=\"2\" class=\"td-ky\">" + "Kỳ" + "</td>";
    html_chiphi_thead += "<td rowspan=\"2\" class=\"td-ngaybdky\">" + "BD Kỳ" + "</td>";
    html_chiphi_thead += "<td rowspan=\"2\" class=\"td-ngayktky\">" + "KT Kỳ" + "</td>";
    html_chiphi_thead += "<td rowspan=\"2\" class=\"td-loaithanhtoan\">" + "Loại TT" + "</td>";
    html_chiphi_thead += "<td rowspan=\"2\" class=\"td-sanluong\">" + "Sản Lượng" + "</td>";
    html_chiphi_thead += "<td rowspan=\"2\" class=\"td-giatri\">" + "Giá Trị" + "</td>";
    html_chiphi_thead += "<td rowspan=\"2\" class=\"td-giatri\">" + "Giá Trị ST" + "</td>";
    html_chiphi_thead += "<td colspan=\"4\" class=\"td-guibangke  td-ketoan-color0\">" + "Trách Nhiệm Khai Thác" + "</td>";
    html_chiphi_thead += "<td  class=\"td-phathanh td-ketoan-color1\">" + "Trách Nhiệm Kế Toán" + "</td>";
    html_chiphi_thead += "<td rowspan=\"2\" class=\"td-ghichu\">" + "Ghi Chú" + "</td>";
    html_chiphi_thead += "</tr>";
    html_chiphi_thead += "<tr>";
    html_chiphi_thead += "<td  class=\"td-xacnhanbangke td-ketoan-color0\">" + "XN Bảng Kê" + "</td>";
    html_chiphi_thead += "<td  class=\"td-chuyenketoan td-ketoan-color0\">" + "Nhận HĐ" + "</td>";
    html_chiphi_thead += "<td  class=\"td-sohoadon td-ketoan-color0\">" + "Số HD" + "</td>";
    html_chiphi_thead += "<td  class=\"td-chuyenphat td-ketoan-color0\">" + "Chuyển Hóa Đơn" + "</td>";
    html_chiphi_thead += "<td  class=\"td-thanhtoan td-ketoan-color1\">" + "Thanh Toán" + "</td>";
    html_chiphi_thead += "</tr>";
    //// end thead chi phí
    //// thead chi hộ
    html_chiho_thead = "";
    html_chiho_thead += "<tr>";
    html_chiho_thead += "<td rowspan=\"2\" class=\"td-trangthai-css\">" + "Trạng Thái" + "</td>";
    html_chiho_thead += "<td rowspan=\"2\" class=\"td-khachhang\">" + "Khách Hàng" + "</td>";
    html_chiho_thead += "<td rowspan=\"2\" class=\"td-loaihinh\">" + "Loại Hình" + "</td>";
    html_chiho_thead += "<td rowspan=\"2\" class=\"td-thang\">" + "Tháng" + "</td>";
    html_chiho_thead += "<td rowspan=\"2\" class=\"td-ky\">" + "Kỳ" + "</td>";
    html_chiho_thead += "<td rowspan=\"2\" class=\"td-ngaybdky\">" + "BD Kỳ" + "</td>";
    html_chiho_thead += "<td rowspan=\"2\" class=\"td-ngayktky\">" + "KT Kỳ" + "</td>";
    html_chiho_thead += "<td rowspan=\"2\" class=\"td-loaithanhtoan\">" + "Loại TT" + "</td>";
    html_chiho_thead += "<td rowspan=\"2\" class=\"td-sanluong\">" + "Sản Lượng" + "</td>";
    html_chiho_thead += "<td rowspan=\"2\" class=\"td-giatri\">" + "Giá Trị" + "</td>";
    html_chiho_thead += "<td rowspan=\"2\" class=\"td-giatri\">" + "Giá Trị ST" + "</td>";
    html_chiho_thead += "<td colspan=\"4\" class=\"td-guibangke  td-ketoan-color0\">" + "Trách Nhiệm Khai Thác" + "</td>";
    html_chiho_thead += "<td  class=\"td-phathanh td-ketoan-color1\">" + "Trách Nhiệm Kế Toán" + "</td>";
    html_chiho_thead += "<td rowspan=\"2\" class=\"td-ghichu\">" + "Ghi Chú" + "</td>";
    html_chiho_thead += "</tr>";
    html_chiho_thead += "<tr>";
    html_chiho_thead += "<td class=\"td-xacnhanbangke td-ketoan-color0\">" + "XN Bảng Kê" + "</td>";
    html_chiho_thead += "<td class=\"td-chuyenketoan td-ketoan-color0\">" + "Nhận HĐ" + "</td>";
    html_chiho_thead += "<td class=\"td-sohoadon td-ketoan-color0\">" + "Số HD" + "</td>";
    html_chiho_thead += "<td class=\"td-chuyenphat td-ketoan-color0\">" + "Chuyển Hóa Đơn" + "</td>";
    html_chiho_thead += "<td class=\"td-thanhtoan td-ketoan-color1\">" + "Thanh Toán" + "</td>";
    html_chiho_thead += "</tr>";
    //// end thead chi hộ
    $(".tbl-thanhtoan thead").empty();
    //$(".tbl-thanhtoan thead").append(html_thead);
    $(".btn-them").remove();

    html_modal_btn_them = "<button type=\"button\" class=\"btn btn-sm btn-primary btn-thanhtoan-capnhatdulieu\" loai-button=\"i\" id=\"btn-thanhtoan-them\"><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>Thêm</button>";
    html_modal_btn_luu = "<button type=\"button\" class=\"btn btn-sm btn-info btn-thanhtoan-capnhatdulieu\" loai-button=\"u\" id=\"btn-thanhtoan-luu\"><span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>Lưu</button>";
    html_modal_btn_xoa = "<button type=\"button\" class=\"btn btn-sm btn-danger btn-thanhtoan-capnhatdulieu\" loai-button=\"d\" id=\"btn-thanhtoan-xoa\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>Xóa</button>";
    //html_modal_btn_hoanthanh = "<button type=\"button\" class=\"btn btn-sm btn-success btn-thanhtoan-capnhatdulieu\" loai-button=\"ht\" id=\"btn-thanhtoan-hoanthanh\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>Đánh dấu hoàn thành</button>";
    //html_modal_btn_hoanthanh_huy = "<button type=\"button\" class=\"btn btn-sm btn-warning btn-thanhtoan-capnhatdulieu\" loai-button=\"ht\" id=\"btn-thanhtoan-hoanthanh\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>Đánh dấu chưa hoàn thành</button>";
    html_modal_btn_dinhkem = "<button type=\"button\" class=\"btn btn-primary btn-sm\" id=\"btn-thanhtoan-dinhkem\">Đính kèm</button>";
    $('.timepicker-thanhtoan').timepicker(
        { 'timeFormat': 'H:i' }
    );

    $("#div-thanhtoan-button").on("click", "#btn-quanly-doanhthu", function () {
        fncClickShowTable("DT", "doanhthu", "doanh thu");
    })

    $("#div-thanhtoan-button").on("click", "#btn-quanly-chiphi", function () {
        fncClickShowTable("CP", "chiphi", "chi phí");
    })
    $("#div-thanhtoan-button").on("click", "#btn-quanly-chiho", function () {
        fncClickShowTable("CH", "chiho", "chi hộ");
    })
    $("#div-thanhtoan-button").on("click", "#btn-quanly-congno", function () {
        //$("#div-wait").show();
        $("#span-congno-nam").text($("#select-thanhtoan-nam").val());
        $("#td-namchon").text($("#select-thanhtoan-nam").val());
        $("#td-namtruoc").text(parseInt($("#select-thanhtoan-nam").val()) - 1);
        ajaxGet = { "get": $("#select-thanhtoan-nam").val() };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "ThanhToan.aspx/ReCongNo",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                var khachhang = "";
                var giatri = 0;
                var thang = 0;
                var old_khachhang = "";
                var old_thang = 0;
                var sum_khachhang = 0;
                var sum_thang = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 12 thang
                var sum_tong = 0;
                var html_tbody = "";
                $.each(d.CongNo, function (index, item) {
                    thang = parseInt(item.thang);
                    giatri = parseFloat(item.giatri);

                    sum_thang[thang - 1] += giatri;
                    sum_tong += giatri;
                    if (khachhang == "" || khachhang != item.khachhang) {
                        if (khachhang != "") {
                            html_tbody += fncTD_CongNo(old_thang, 12, "");
                            html_tbody += "<td class=\"td-cn-tong-daily\" sum=\"" + sum_khachhang + "\">" + numberWithCommas(sum_khachhang) + "</td>";
                            html_tbody += "</tr>";
                            sum_khachhang = 0;
                        }
                        sum_khachhang += giatri;
                        khachhang = item.khachhang;
                        old_thang = 0;
                        html_tbody += "<tr id=\"tr-cn-" + khachhang + "\">";
                        html_tbody += "<td class=\"td-cn-khachhang\">" + khachhang + "</td>";
                        html_tbody += "<td class=\"td-cn-namtruoc\">" + "" + "</td>";
                        html_tbody += fncTD_CongNo(old_thang, thang, giatri);
                        old_thang = thang;
                    } else {
                        sum_khachhang += giatri;

                        html_tbody += fncTD_CongNo(old_thang, thang, giatri);
                        old_thang = thang;
                    }

                    if (index == d.CongNo.length - 1) {
                        html_tbody += fncTD_CongNo(old_thang, 12, "");
                        html_tbody += "<td class=\"td-cn-tong-daily\" sum=\"" + sum_khachhang + "\">" + numberWithCommas(sum_khachhang) + "</td>";
                        html_tbody += "</tr>";
                    }
                });
                html_tbody_tong = "";
                html_tbody_tong += "<tr id=\"tr-cn-tongfn\">";
                html_tbody_tong += "<td>" + "Tổng" + "</td>";
                html_tbody_tong += "<td class=\"td-cn-namtruoc\">" + "" + "</td>";
                $.each(sum_thang, function (i, val) {
                    html_tbody_tong += "<td>" + numberWithCommas(val) + "</td>";
                });
                html_tbody_tong += "<td class=\"td-cn-tong-daily\" sum=\"" + sum_tong + "\">" + numberWithCommas(sum_tong) + "</td>";
                html_tbody_tong += "</tr>";
                html_tbody = html_tbody_tong + html_tbody + html_tbody_tong;
                $("#tbl-congno tbody").empty().append(html_tbody);

                ////
                if (d.CongNoNamTruoc.length > 0) {
                    var html_namtruoc = "";
                    var td_cn_tong_daily = 0;
                    var td_cn_tong_daily_all = 0;
                    var sum_namtruoc = 0;
                    $.each(d.CongNoNamTruoc, function (index, item) {
                        sum_namtruoc += parseInt(item.giatri);
                        if ($("#tr-cn-" + item.khachhang).length > 0) {
                            $("#tr-cn-" + item.khachhang).find(".td-cn-namtruoc").text(numberTextWithCommas(item.giatri));
                            td_cn_tong_daily = parseInt($("#tr-cn-" + item.khachhang).find(".td-cn-tong-daily").attr("sum"));
                            $("#tr-cn-" + item.khachhang).find(".td-cn-tong-daily").text(numberWithCommas(parseInt(item.giatri) + td_cn_tong_daily));
                        } else {
                            html_namtruoc += "<tr>";
                            html_namtruoc += "<td class=\"td-cn-khachhang\">" + item.khachhang + "</td>";
                            html_namtruoc += "<td>" + numberTextWithCommas(item.giatri) + "</td>";
                            html_namtruoc += fncTD_CongNo(0, 12, "");
                            html_namtruoc += "<td>" + numberTextWithCommas(item.giatri) + "</td>";

                            html_namtruoc += "</tr>";
                        }
                    })
                    $(html_namtruoc).insertBefore($("#tr-cn-tongfn"));
                    td_cn_tong_daily_all = parseInt($("#tr-cn-tongfn").find(".td-cn-tong-daily").attr("sum"));
                    $("#tr-cn-tongfn").find(".td-cn-namtruoc").text(numberWithCommas(sum_namtruoc));
                    $("#tr-cn-tongfn").find(".td-cn-tong-daily").text(numberWithCommas(sum_namtruoc + td_cn_tong_daily_all));
                }
            },
            error: function (responsive) {
                alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
            }
        }).done(function () {
            //$("#div-wait").hide();
        });

        $("#myModalViewThanhToan-CongNo").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
    })
    $("#btn-quanly-showThongKe").click(function myfunction() {
        $("#select-thanhtoan-thongke-loaihinh").prepend("<option value=\"ALL\">ALL</option>");
        $("#myModalViewThanhToan-CongNo").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
    })
    $("#select-thanhtoan-thongke-loaithanhtoan").change(function () {
        $("#select-thanhtoan-thongke-loaihinh").empty();
        var tenthongke = "";
        switch ($(this).val()) {
            case "CN":
                iu = "0";
                tenthongke = "THỐNG KÊ CÔNG NỢ ";
                break;
            case "DT":
                iu = "1";
                tenthongke = "THỐNG KÊ CÔNG NỢ ĐÃ THU ";
                $("#select-thanhtoan-thongke-loaihinh").append(html_loaihinh_doanhthu);
                break;
            case "CP":
                iu = "1";
                tenthongke = "THỐNG KÊ CHI PHÍ ";
                $("#select-thanhtoan-thongke-loaihinh").append(html_loaihinh_chiphi);
                break;
            case "CH":
                tenthongke = "THỐNG KÊ CHI HỘ ";
                iu = "1";

                break;
            case "DTT":
                tenthongke = "DOANH THU ";
                iu = "1";

                break;
        }
        $("#btn-thanhtoan-thongke").attr("tenthongke", tenthongke);
        $("#btn-thanhtoan-thongke").attr("loaithongke", $(this).val());
        $("#select-thanhtoan-thongke-loaihinh").prepend("<option value=\"ALL\" selected>ALL</option>");
    })
    //$("#myModalViewThanhToan-CongNo").on("click", "#btn-quanly-thongke", function () {
    $("#btn-thanhtoan-thongke").click(function () {
        loaithongke = $(this).attr("loaithongke");
        //$("#div-wait").show();
        $("#span-congno-tenthongke").text($(this).attr("tenthongke"));
        $("#span-congno-nam").text($("#select-thanhtoan-thongke-nam").val());
        $("#td-namchon").text($("#select-thanhtoan-thongke-nam").val());
        $("#td-namtruoc").text(parseInt($("#select-thanhtoan-thongke-nam").val()) - 1);
        var getNam = $("#select-thanhtoan-thongke-nam").val();
        ajaxGet6 = {
            "get1": iu                                                      // @iu
            , "get2": getNam              // , @nam
            , "get3": 1           // , @thang
            , "get4": ""                                                    // , @khachhang
            , "get5": $("#select-thanhtoan-thongke-loaithanhtoan").val()    // , @loai_thanhtoan
            , "get6": $("#select-thanhtoan-thongke-loaihinh").val()         // , @loaihinh
        };
        jsonData = JSON.stringify({ ajaxGet6 });
        $.ajax({
            type: "POST",
            url: "ThanhToan.aspx/ReThongKe",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                var khachhang = "";
                var giatri = 0;
                var thang = 0;
                var nam = 0;
                var old_khachhang = "";
                var old_thang = 0;
                var sum_khachhang = 0;
                var sum_thang = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 12 thang
                var sum_namtruoc = 0;
                var sum_tong = 0;
                var sum_tong_namtruoc = 0;
                var html_tbody = "";
                $.each(d.thongKeNamHienTais, function (index, item) {
                    thang = parseInt(item.thang);
                    nam = parseInt(item.nam);
                    giatri = parseFloat(item.giatri);
                    if (nam == getNam) {
                        sum_thang[thang - 1] += giatri;
                    } else {
                        sum_namtruoc += giatri;
                        sum_tong_namtruoc += giatri;
                    }

                    sum_tong += giatri;
                    if (nam == getNam) {
                        if (khachhang == "" || khachhang != item.khachhang) {
                            if (khachhang != "") {
                                html_tbody += fncTD_ThongKe(loaithongke, old_thang, 12, "");
                                html_tbody += "<td class=\"td-cn-tong-daily\" sum=\"" + sum_khachhang + "\">" + numberWithCommas(sum_khachhang) + "</td>";
                                html_tbody += "</tr>";
                                sum_khachhang = 0;
                            }
                            sum_khachhang += giatri;
                            khachhang = item.khachhang;
                            old_thang = 0;
                            html_tbody += "<tr id=\"tr-cn-" + khachhang + "\">";
                            html_tbody += "<td class=\"td-cn-khachhang\">" + khachhang + "</td>";
                            html_tbody += "<td class=\"td-cn-namtruoc\">" + numberWithCommas(sum_namtruoc) + "</td>";
                            html_tbody += fncTD_ThongKe(loaithongke, old_thang, thang, giatri);
                            if (nam == getNam) { old_thang = thang; }

                            sum_namtruoc = 0;
                        } else {
                            sum_khachhang += giatri;

                            html_tbody += fncTD_ThongKe(loaithongke, old_thang, thang, giatri);
                            if (nam == getNam) { old_thang = thang; }
                        }
                    }


                    if (index == d.thongKeNamHienTais.length - 1) {
                        html_tbody += fncTD_ThongKe(loaithongke, old_thang, 12, "");
                        html_tbody += "<td class=\"td-cn-tong-daily\" sum=\"" + sum_khachhang + "\">" + numberWithCommas(sum_khachhang) + "</td>";
                        html_tbody += "</tr>";
                    }
                });
                html_tbody_tong = "";
                html_tbody_tong += "<tr class=\"tr-cn-tongfn\">";
                html_tbody_tong += "<td>" + "Tổng" + "</td>";
                html_tbody_tong += "<td class=\"td-cn-namtruoc\">" + numberWithCommas(sum_tong_namtruoc) + "</td>";
                $.each(sum_thang, function (i, val) {
                    html_tbody_tong += "<td>" + numberWithCommas(val) + "</td>";
                });
                html_tbody_tong += "<td class=\"td-cn-tong-daily\" sum=\"" + sum_tong + "\">" + numberWithCommas(sum_tong) + "</td>";
                html_tbody_tong += "</tr>";
                html_tbody = html_tbody_tong + html_tbody + html_tbody_tong;
                $("#tbl-congno tbody").empty();
                $("#tbl-congno tbody").append(html_tbody);

                ////
                //console.log(d.thongKeNamTruocs.length);
                //if (d.thongKeNamTruocs.length > 0) {
                //    var html_namtruoc = "";
                //    var td_cn_tong_daily = 0;
                //    var td_cn_tong_daily_all = 0;
                //    var sum_namtruoc = 0;
                //    $.each(d.CongNoNamTruoc, function (index, item) {
                //        sum_namtruoc += parseInt(item.giatri);
                //        if ($("#tr-cn-" + item.khachhang).length > 0) {
                //            $("#tr-cn-" + item.khachhang).find(".td-cn-namtruoc").text(numberTextWithCommas(item.giatri));
                //            td_cn_tong_daily = parseInt($("#tr-cn-" + item.khachhang).find(".td-cn-tong-daily").attr("sum"));
                //            $("#tr-cn-" + item.khachhang).find(".td-cn-tong-daily").text(numberWithCommas(parseInt(item.giatri) + td_cn_tong_daily));
                //        } else {
                //            html_namtruoc += "<tr>";
                //            html_namtruoc += "<td class=\"td-cn-khachhang\">" + item.khachhang + "</td>";
                //            html_namtruoc += "<td>" + numberTextWithCommas(item.giatri) + "</td>";
                //            html_namtruoc += fncTD_ThongKe(loaithongke, 0, 12, "");
                //            html_namtruoc += "<td>" + numberTextWithCommas(item.giatri) + "</td>";

                //            html_namtruoc += "</tr>";
                //        }
                //    })
                //    $(html_namtruoc).insertBefore($(".tr-cn-tongfn"));
                //    td_cn_tong_daily_all = parseInt($(".tr-cn-tongfn").find(".td-cn-tong-daily").attr("sum"));
                //    $(".tr-cn-tongfn").find(".td-cn-namtruoc").text(numberWithCommas(sum_namtruoc));
                //    $(".tr-cn-tongfn").find(".td-cn-tong-daily").text(numberWithCommas(sum_namtruoc + td_cn_tong_daily_all));
                //}
                //else {
                //    $(".td-cn-namtruoc").remove();
                //    $("#td-namtruoc").remove();
                //}
            },
            error: function (responsive) {
                alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
            }
        }).done(function () {
            //$("#div-wait").hide();
        });
    })

    $("#div-button-table").on("click", "#btn-them-doanhthu", function () {
        fncModalThem("DT");
    })
    $("#div-button-table").on("click", "#btn-them-chiphi", function () {
        fncModalThem("CP");
    })
    $("#div-button-table").on("click", "#btn-them-chiho", function () {
        fncModalThem("CH");
    })
    $("#myModalViewThanhToan").on("click", ".btn-thanhtoan-capnhatdulieu", function () {
        fncClearTTVal();
        if ($(this).attr("loai-button") != "i") {
            tt_val_id = $("#myModalViewThanhToan").attr("id-thanhtoan");
        }
        tt_val_khachhang = $("#select-thanhtoan-khachhang-modify").val();
        tt_val_loaihinh = $("#select-thanhtoan-loaihinh-modify").val();
        tt_val_thang = $("#select-thanhtoan-thang-modify").val();
        tt_val_nam = $("#select-thanhtoan-nam-modify").val();
        tt_val_ky = $("#input-thanhtoan-ky-modify").val();
        tt_val_ngaybdky = dmy2ymd($("#input-thanhtoan-ngaybdky-modify").val());
        tt_val_ngayktky = dmy2ymd($("#input-thanhtoan-ngayktky-modify").val());

        tt_val_sanluong = $("#input-thanhtoan-sanluong-modify").val().replace(/,/g, "");
        tt_val_giatri = $("#input-thanhtoan-giatri-modify").val().replace(/,/g, "");
        tt_val_giatrisauthue = $("#input-thanhtoan-giatri-sauthue-modify").val().replace(/,/g, "");
        tt_val_soso = $("#input-thanhtoan-soso-modify").val();
        tt_val_chiho = $("#input-thanhtoan-chiho-modify").val().replace(/,/g, "");

        if (tt_val_sanluong == "") {
            tt_val_sanluong = "0";
        }
        if (tt_val_giatri == "") {
            tt_val_giatri = "0";
        }
        if (tt_val_giatrisauthue == "") {
            tt_val_giatrisauthue = "0";
        }
        if (tt_val_chiho == "") {
            tt_val_chiho = "0";
        }
        if ($("#checkboxSuccess-guibangke").is(":checked") == true) {
            tt_val_ngaygioguibangke = dmy2ymd($("#input-thanhtoan-ngayguibangke-modify").val()) + " " + $("#input-thanhtoan-gioguibangke-modify").val();
            tt_val_nguoiguibangke = $("#input-thanhtoan-nguoiguibangke-modify").val();
        }

        if ($("#checkboxSuccess-xacnhanbangke").is(":checked") == true) {
            tt_val_ngaygioxacnhanbangke = dmy2ymd($("#input-thanhtoan-ngayxacnhanbangke-modify").val()) + " " + $("#input-thanhtoan-gioxacnhanbangke-modify").val();
            tt_val_nguoixacnhanbangke = $("#input-thanhtoan-nguoixacnhanbangke-modify").val();
        }

        if ($("#checkboxSuccess-chuyenketoan").is(":checked") == true) {
            tt_val_ngaychuyenketoan = dmy2ymd($("#input-thanhtoan-ngaychuyenketoan-modify").val());
            tt_val_nguoichuyenketoan = $("#input-thanhtoan-nguoichuyenketoan-modify").val();
        }

        if ($("#checkboxSuccess-phathanh").is(":checked") == true) {
            tt_val_ngayphathanh = dmy2ymd($("#input-thanhtoan-ngayphathanh-modify").val());
            tt_val_nguoiphathanh = $("#input-thanhtoan-nguoiphathanh-modify").val();
            tt_val_sohoadon = $("#input-thanhtoan-sohoadon-modify").val();
        }

        if ($("#checkboxSuccess-chuyenphat").is(":checked") == true) {
            tt_val_ngaychuyenphat = dmy2ymd($("#input-thanhtoan-ngaychuyenphat-modify").val());
            tt_val_nguoichuyenphat = $("#input-thanhtoan-nguoichuyenphat-modify").val();
        }
        if ($("#checkboxSuccess-thanhtoan").is(":checked") == true) {
            tt_val_ngaythanhtoan = dmy2ymd($("#input-thanhtoan-ngaythanhtoan-modify").val());
            tt_val_nguoithanhtoan = $("#input-thanhtoan-nguoithanhtoan-modify").val();
        }
        // new 04/09/2018
        if ($("#checkboxSuccess-danhanhoadongoc").is(":checked") == true) {
            tt_val_danhanhdgoc_ngaygio = dmy2ymd($("#input-thanhtoan-ngaydanhanhoadongoc-modify").val()) + " " + $("#input-thanhtoan-giodanhanhoadongoc-modify").val();
            tt_val_danhanhdgoc_sohd = $("#input-thanhtoan-danhanhoadongoc-sohoadon-modify").val();
            tt_val_danhanhdgoc_loaithanhtoan = $("#select-danhanhoadongoc-loaithanhtoan-modify").val();
            tt_val_danhanhdgoc_nguoinhan = $("#input-thanhtoan-nguoidanhanhoadongoc-modify").val();
            tt_val_danhanhdgoc_nguoichitra = $("#input-thanhtoan-danhanhoadongoc-nguoichitra-modify").val();
        }
        if ($("#checkboxSuccess-dachuyenhoadonketoan").is(":checked") == true) {
            tt_val_dachuyenhdketoan_ngaygio = dmy2ymd($("#input-thanhtoan-ngaydachuyenhoadonketoan-modify").val()) + " " + $("#input-thanhtoan-giodachuyenhoadonketoan-modify").val();
            tt_val_dachuyenhdketoan_nguoichuyen = $("#input-thanhtoan-nguoidachuyenhoadonketoan-modify").val();
        }
        tt_val_ghichu = $("#input-thanhtoan-ghichu-modify").val();
        fncUpdateDatabase($(this).attr("loai-button"), tt_val_id, $("#myModalViewThanhToan").attr("loai-thanhtoan"));
    })

    $("#myModalViewThanhToan").on("click", ".input-thanhtoan-checkbox", function () {
        $(".input-" + $(this).val()).attr("disabled", !$(this).is(":checked"));

        $(".input-" + $(this).val())[0].focus();
    })

    $(".input-thanhtoan-ngaygio").mask("99/99/9999 99:99", { placeholder: "dd/MM/yyyy hh:mm" });
    $(".input-thanhtoan-ngay").mask("99/99/9999", { placeholder: "dd/MM/yyyy" });
    $(".input-thanhtoan-gio").mask("99:99", { placeholder: "hh:mm" });

    /// click open modal đính kèm
    $("#myModalViewThanhToan").on("click", "#btn-thanhtoan-dinhkem", function () {
        $("#myModalViewThanhToan").modal("hide");

        $("#myModalUpload").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
    })

    imgdata;
    arrTempData = {};
    fileitem = "";
    count_item = 0;

    $("#myModalUpload").on("change", "#f_UploadImage", function (e) {
        fncResetProcessBar();
        html_imgzone = "";
        var file, img;
        count_item = $("#tbl-upload-imgzone tbody tr.tr-upload-chuaupload").length;

        $.each(e.target.files, function (item, val) {
            if (val.size < 10000000) {
                arrTempData["file" + count_item] = val;
                tmppath = URL.createObjectURL(val);
                html_imgzone += "<tr class=\"tr-upload-chuaupload\">";
                html_imgzone += "<td>" + "<span class=\"span-upload-trangthai label label-default\">" + "Chưa upload" + "</span>" + "</td>";
                html_imgzone += "<td>" + "<img class=\"img-pre-upload\" src=\"" + tmppath + "\"  alt=\"Photo\" />" + "</td>";
                html_imgzone += "<td>" + fncConvertOverSizeText(val.name) + "</td>";
                html_imgzone += "<td>" + fncConvertSize(val.size) + "</td>";
                html_imgzone += "<td>" + "<a class=\"btn btn-danger btn-sm btn-upload-delete\" fileitem=\"file" + count_item + "\" ><i class=\"glyphicon glyphicon-trash\"></i> Xóa</a>" + "</td>";
                html_imgzone += "</tr>";
                count_item += 1;
            }
        })
        $("#tbl-upload-imgzone").append(html_imgzone);

        $("#tbl-upload-imgzone").on("click", ".btn-upload-delete", function () {
            event.stopPropagation();
            fileitem = $(this).attr("fileitem");
            delete arrTempData[fileitem];
            $(this).closest("tr").remove();
            fncResetProcessBar();
        })
    })
    //
    $("#myModalUpload").on("click", "#a-upload-startupload", function () {
        if ($("#tbl-upload-imgzone tbody tr.tr-upload-chuaupload").length > 0) {
            //$("#div-wait").show();
            for (var t = 0; t < 10; t++) {
                $("#div-upload-process-bar").attr("style", "width:" + t + "%");
                $("#div-upload-process-bar").text(t + "%");
            }
            imgdata = new FormData();

            for (var val in arrTempData) {
                imgdata.append("file", arrTempData[val]);
            }
            imgdata.append("folder", $("#myModalViewThanhToan").attr("id-thanhtoan"));
            imgdata.append("root", "ThanhToan");
            for (var t = 10; t < 30; t++) {
                $("#div-upload-process-bar").attr("style", "width:" + t + "%");
                $("#div-upload-process-bar").text(t + "%");
            }
            $.ajax({
                type: "POST",
                url: "../AjaxFileUploader.ashx",
                data: imgdata,
                contentType: false,
                processData: false,
                async: false,
                success: function (responsive) {
                    for (var t = 30; t <= 100; t++) {
                        $("#div-upload-process-bar").attr("style", "width:" + t + "%");
                        $("#div-upload-process-bar").text(t + "%");
                        if (t == 100) {
                            setTimeout(function () {
                                $("#div-upload-process-bar").text("HOÀN THÀNH");
                            }, 1000);
                        }
                    }
                    $("#tbl-upload-imgzone tbody tr.tr-upload-chuaupload .span-upload-trangthai").addClass("label-success")
                        .removeClass("label-default")
                        .text("Đã Upload");
                    $("#tbl-upload-imgzone tbody tr.tr-upload-chuaupload").addClass("tr-upload-daupload")
                        .removeClass("tr-upload-chuaupload");

                    arrTempData = {};
                },
                error: function (responsive) {
                    alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
                }
            }).done(function () {
                //$("#div-wait").hide();
            });
        } else {
            fncResetProcessBar();
            alert("Ảnh đã được upload!");
        }
    })
    //
    $("#myModalUpload").on("click", "#a-upload-delete-all", function () {
        arrTempData = {};
        $("#tbl-upload-imgzone tbody tr").remove();
        fncResetProcessBar();
    })
    //
    $("#myModalUpload").on('hidden.bs.modal', function () {
        $("#tbl-upload-imgzone tbody").empty();
        if ($("#myModalViewThanhToan").attr("id-thanhtoan") != "" && $("#myModalViewThanhToan").attr("id-thanhtoan") != null) {
            fncModalSua($("#myModalViewThanhToan").attr("id-thanhtoan"), $("#myModalViewThanhToan").attr("loai-thanhtoan"));
        }
    })

    // Nếu Modal View Thanh Toán Đóng
    $("#myModalViewThanhToan").on('hidden.bs.modal', function () {
        if ($("#myModalViewThanhToan").attr("loai-thanhtoan") == "DT") {
            fncClickShowTable("DT", "doanhthu", "doanh thu");
        } else if ($("#myModalViewThanhToan").attr("loai-thanhtoan") == "CP") {
            fncClickShowTable("CP", "chiphi", "chi phí");
        }
        else if ($("#myModalViewThanhToan").attr("loai-thanhtoan") == "CH") {
            fncClickShowTable("CH", "chiho", "chi hộ");
        }
        else {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)");
        }
    })

    // END Nếu Modal View Thanh Toán Đóng
    // Tai Xuong
    $("#myModalViewThanhToan").on("click", ".a-file-taixuong", function () {
        window.open("../DownloadFile.aspx?Root=ThanhToan&Folder=" + $(this).closest("tr").attr("folder") + "&FileName=" + $(this).closest("tr").attr("filename"));
    })
    $("#myModalViewThanhToan").on("click", ".a-file-xoa", function () {
        if (confirm("Bạn có chắc chắn muốn xóa tài liệu này không? \r\nHành động này không thể hoàn tác! \r\nTên tài liệu: " + $(this).closest("tr").attr("filename"))) {
            //$("#div-wait").show();

            var ajaxGet2 = { "get1": $(this).closest("tr").attr("folder"), "get2": $(this).closest("tr").attr("filename") };
            jsonData = JSON.stringify({ ajaxGet2 });
            $.ajax({
                type: "POST",
                url: "./ThanhToan.aspx/DeleteFile",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    fncModalSua($("#myModalViewThanhToan").attr("id-thanhtoan"), $("#myModalViewThanhToan").attr("loai-thanhtoan"));
                    alert(responsive);
                },
                error: function () {
                    alert("Đã có lỗi trong quá trình xóa file!\r\nVui lòng tải lại trang(F5)!\r\nNếu sự cố lặp lại xin liên hệ nhân viên IT");
                }
            }).done(function () {
                //$("#div-wait").hide();
            })
        }
    })

    // END Tai Xuong
    // show modal chi tiet
    $(".tbl-thanhtoan").on("click", ".td-trangthai", function () {
        event.stopPropagation();
        thanhtoan_tr = $(this).closest("tr");
        fncModalSua(thanhtoan_tr.attr("id-thanhtoan"), thanhtoan_tr.attr("loai-thanhtoan"));
    })

    // show modal chi tiet copy
    $(".tbl-thanhtoan").on("click", ".btn-copy", function () {
        event.stopPropagation();
        thanhtoan_tr = $(this).closest("tr");
        fncModalCopy(thanhtoan_tr.attr("id-thanhtoan"), thanhtoan_tr.attr("loai-thanhtoan"));
    })

    // end show modal chi tiet
    //$(".tbl-thanhtoan").on("mouseenter", ".tr-thanhtoan", function () {
    //    $("#tr-thanhtoan-sub-" + $(this).attr("id-thanhtoan")).addClass("background-color-thanhtoan-hover");
    //})
    //$(".tbl-thanhtoan").on("mouseleave", ".tr-thanhtoan", function () {
    //    $("#tr-thanhtoan-sub-" + $(this).attr("id-thanhtoan")).removeClass("background-color-thanhtoan-hover");
    //})
    // end show modal chi tiet
    $(".tbl-thanhtoan").on("mouseenter", ".tr-thanhtoan-sub", function () {
        $("#tr-thanhtoan-" + $(this).attr("id-thanhtoan")).addClass("background-color-thanhtoan-hover");
    })
    $(".tbl-thanhtoan").on("mouseleave", ".tr-thanhtoan-sub", function () {
        $("#tr-thanhtoan-" + $(this).attr("id-thanhtoan")).removeClass("background-color-thanhtoan-hover");
    })
    // Chỉ cho phép nhập số
    $('.input-thanhtoan-number').keyup(function (e) {
        FormatCurrency(this);
    });
    $('.input-thanhtoan-number').keypress(function (e) {
        return CheckNumeric();
    });
    // END Chỉ cho phép nhập số

    /// thêm dạng excel
    $('#myModalNewThanhToan').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize");
    });
    $("#div-button-table").on("click", "#btn-them-excel", function () {
        // alert(1);
        $("#myModalNewThanhToan").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });

        $("#spreadsheet").empty();
        $("#spreadsheet").kendoSpreadsheet({
            columns: 26,
            rows: 100,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var sheet = spreadsheet.activeSheet();
        sheet.range(kendo.spreadsheet.SHEETREF).clear();

        //window.dispatchEvent(new Event('resize'));
        //$(window).resize(function () { });
        spreadsheet.fromJSON({
            sheets: [{
                name: "ThanhToan",
                //mergedCells: [
                //    "A1:G1"
                //],
                rows: [{
                    height: 70,
                    cells: [
                        { value: "Loại Thanh Toán", textAlign: "center", wrap: true }
                        , { value: "Khách Hàng", textAlign: "center", wrap: true }
                        , { value: "Loại Hình", textAlign: "center", wrap: true }
                        , { value: "Tháng", textAlign: "center", wrap: true }
                        , { value: "Năm", textAlign: "center", wrap: true }
                        , { value: "Kỳ", textAlign: "center", wrap: true }
                        , { value: "Ngày BĐ Kỳ", textAlign: "center", wrap: true }
                        , { value: "Ngày KT Kỳ", textAlign: "center", wrap: true }
                        , { value: "Sản Lượng", textAlign: "center", wrap: true }
                        , { value: "Giá Trị", textAlign: "center", wrap: true }
                        , { value: "Ngày Gửi Bảng Kê", textAlign: "center", wrap: true }
                        , { value: "Giờ Gửi Bảng Kê", textAlign: "center", wrap: true }
                        , { value: "Người Gửi Bảng Kê", textAlign: "center", wrap: true }
                        , { value: "Ngày XN Bảng Kê", textAlign: "center", wrap: true }
                        , { value: "Giờ XN Bảng Kê", textAlign: "center", wrap: true }
                        , { value: "Người XN Bảng Kê", textAlign: "center", wrap: true }
                        , { value: "Ngày Chuyển Kế Toán", textAlign: "center", wrap: true }
                        , { value: "Người Chuyển Kế Toán", textAlign: "center", wrap: true }
                        , { value: "Số HĐ", textAlign: "center", wrap: true }
                        , { value: "Ngày xuất HĐ", textAlign: "center", wrap: true }
                        , { value: "Người xuất HĐ", textAlign: "center", wrap: true }
                        , { value: "Ngày chuyển HĐ", textAlign: "center", wrap: true }
                        , { value: "Người chuyển HĐ", textAlign: "center", wrap: true }
                        , { value: "Ngày Thanh Toán", textAlign: "center", wrap: true }
                        , { value: "Người Thanh Toán", textAlign: "center", wrap: true }
                        , { value: "Ghi Chú", textAlign: "center", wrap: true }
                        , { value: "SO", textAlign: "center", wrap: true }

                    ]
                }],
                columns: [
                    { width: 50 }, // loại thanh toán
                    { width: 70 }, // khách hàng
                    { width: 50 }, //  loại hình
                    { width: 30 }, //  tháng
                    { width: 50 }, //  năm
                    { width: 30 }, // kỳ
                    { width: 80 }, // ngày bđ kỳ
                    { width: 80 }, // ngày kết thúc kỳ
                    { width: 80 }, // sản lượng
                    { width: 80 }, // giá trị
                    { width: 80 }, // ngày gửi bảng kê
                    { width: 50 }, // giờ gửi bảng kê
                    { width: 100 }, // người gửi bảng kê
                    { width: 80 }, // ngày xn bảng kê
                    { width: 50 }, // giờ xn bảng kê
                    { width: 100 }, // người xn bảng kê
                    { width: 80 }, // ngày chuyển kế toán
                    { width: 100 }, // người chuyển kế toán
                    { width: 50 }, //  số hd
                    { width: 80 }, // ngày xuất hd
                    { width: 100 }, // người xuất hđ
                    { width: 80 }, // ngày chuyển hđ
                    { width: 100 }, // người chuyển hđ
                    { width: 80 }, // ngày thanh toán
                    { width: 100 }, // người thanh toán
                    { width: 100 }, // ghi chú
                    { width: 100 }, // SO
                ]
            }]
        });
    })

    $("#myModalNewThanhToan").on("click", "#inp-fire", function () {
        //$("#div-wait").show();
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");

        var data = spreadsheet.toJSON().sheets[0].rows;

        data = data.splice(1, data.length - 1);
        dataInput = { items: [] };
        var error_alert = "";
        var cell_khachhang = "";
        var cell_loaihinh = "";
        var cell_thang = "";
        var cell_nam = "";
        var cell_ky = "";
        var cell_ngaybdky = "";
        var cell_ngayktky = "";
        var cell_sanluong = "";
        var cell_giatri = "";
        var cell_ngayguibangke = "";
        var cell_gioguibangke = "";
        var cell_nguoiguibangke = "";
        var cell_ngayxnbangke = "";
        var cell_gioxnbangke = "";
        var cell_nguoixnbangke = "";
        var cell_ngaychuyenketoan = "";
        var cell_nguoichuyenketoan = "";
        var cell_sohd = "";
        var cell_ngayxuathd = "";
        var cell_nguoixuathd = "";
        var cell_ngaychuyenhd = "";
        var cell_nguoichuyenhd = "";
        var cell_ngaythanhtoan = "";
        var cell_nguoithanhtoan = "";
        var cell_ghichu = "";
        var cell_SoSO = "";

        var cells;

        //console.log(data);
        data.forEach(function (dataItem, dataIndex) {
            // clear biến value

            var error_alert = "";
            var cell_khachhang = "";
            var cell_loaihinh = "";
            var cell_thang = "";
            var cell_nam = "";
            var cell_ky = "";
            var cell_ngaybdky = "";
            var cell_ngayktky = "";
            var cell_sanluong = "";
            var cell_giatri = "";
            var cell_ngayguibangke = "";
            var cell_gioguibangke = "";
            var cell_nguoiguibangke = "";
            var cell_ngayxnbangke = "";
            var cell_gioxnbangke = "";
            var cell_nguoixnbangke = "";
            var cell_ngaychuyenketoan = "";
            var cell_nguoichuyenketoan = "";
            var cell_sohd = "";
            var cell_ngayxuathd = "";
            var cell_nguoixuathd = "";
            var cell_ngaychuyenhd = "";
            var cell_nguoichuyenhd = "";
            var cell_ngaythanhtoan = "";
            var cell_nguoithanhtoan = "";
            var cell_ghichu = "";
            var cell_SoSO = "";

            // end clear biến value
            cells = dataItem.cells;
            //console.log(cells);
            var cellValue;
            cells.forEach(function (cellItem, cellIndex) {
                if (cells[cellIndex].value == null) {
                    cellValue = "";
                } else {
                    cellValue = cells[cellIndex].value;
                }
                switch (cellItem.index) {
                    case 0: cell_loaithanhtoan = cellValue; break;
                    case 1: cell_khachhang = cellValue; break;
                    case 2: cell_loaihinh = cellValue; break;
                    case 3: cell_thang = cellValue; break;
                    case 4: cell_nam = cellValue; break;
                    case 5: cell_ky = cellValue; break;
                    case 6: cell_ngaybdky = cellValue; break;
                    case 7: cell_ngayktky = cellValue; break;
                    case 8: cell_sanluong = cellValue; break;
                    case 9: cell_giatri = cellValue; break;
                    case 10: cell_ngayguibangke = cellValue; break;
                    case 11: cell_gioguibangke = cellValue; break;
                    case 12: cell_nguoiguibangke = cellValue; break;
                    case 13: cell_ngayxnbangke = cellValue; break;
                    case 14: cell_gioxnbangke = cellValue; break;
                    case 15: cell_nguoixnbangke = cellValue; break;
                    case 16: cell_ngaychuyenketoan = cellValue; break;
                    case 17: cell_nguoichuyenketoan = cellValue; break;
                    case 18: cell_sohd = cellValue; break;
                    case 19: cell_ngayxuathd = cellValue; break;
                    case 20: cell_nguoixuathd = cellValue; break;
                    case 21: cell_ngaychuyenhd = cellValue; break;
                    case 22: cell_nguoichuyenhd = cellValue; break;
                    case 23: cell_ngaythanhtoan = cellValue; break;
                    case 24: cell_nguoithanhtoan = cellValue; break;
                    case 25: cell_ghichu = cellValue; break;
                    case 26: cell_SoSO = cellValue; break;
                }
            }
            )

            dataInput.items.push(
                {
                    "khachhang": String(cell_khachhang).trim().replace(/ /g, ''),
                    "loaihinh": String(cell_loaihinh).trim().replace(/ /g, ''),
                    "thang": String(cell_thang).trim().replace(/ /g, ''),
                    "nam": String(cell_nam).trim().replace(/ /g, ''),
                    "ky": String(cell_ky).trim().replace(/ /g, ''),
                    "ngaybdky": fncConvertExcelDate(String(cell_ngaybdky).trim().replace(/ /g, '')),
                    "ngayktky": fncConvertExcelDate(String(cell_ngayktky).trim().replace(/ /g, '')),
                    "sanluong": fncConvertStringtoZero(String(cell_sanluong).trim().replace(/ /g, '')),
                    "giatri": fncConvertStringtoZero(String(cell_giatri).trim().replace(/ /g, '')),
                    "ngaygioguibangke": fncConvertExcelDate(String(cell_ngayguibangke).trim().replace(/ /g, '')) + " " + fncConvertDecimalTime(String(cell_gioguibangke).trim().replace(/ /g, '')),
                    "nguoiguibangke": String(cell_nguoiguibangke).trim(),
                    "ngaygioxnbangke": fncConvertExcelDate(String(cell_ngayxnbangke).trim().replace(/ /g, '')) + " " + fncConvertDecimalTime(String(cell_gioxnbangke).trim().replace(/ /g, '')),
                    "nguoixnbangke": String(cell_nguoixnbangke).trim(),
                    "ngaychuyenketoan": fncConvertExcelDate(String(cell_ngaychuyenketoan).trim().replace(/ /g, '')),
                    "nguoichuyenketoan": String(cell_nguoichuyenketoan).trim(),
                    "sohd": String(cell_sohd).trim().replace(/ /g, ''),
                    "ngayxuathd": fncConvertExcelDate(String(cell_ngayxuathd).trim().replace(/ /g, '')),
                    "nguoixuathd": String(cell_nguoixuathd).trim(),
                    "ngaychuyenhd": fncConvertExcelDate(String(cell_ngaychuyenhd).trim().replace(/ /g, '')),
                    "nguoichuyenhd": String(cell_nguoichuyenhd).trim(),
                    "ngaythanhtoan": fncConvertExcelDate(String(cell_ngaythanhtoan).trim().replace(/ /g, '')),
                    "nguoithanhtoan": String(cell_nguoithanhtoan).trim(),
                    "ghichu": String(cell_ghichu).trim(),
                    "loaithanhtoan": String(cell_loaithanhtoan).trim().replace(/ /g, ''),
                    "SoSO": String(cell_SoSO).trim().replace(/ /g, ''),
                }
            );
        })

        var jsonData = JSON.stringify({ dataInput });
        //console.log(jsonData);
        //console.log(error_alert);

        if (error_alert == "") {
            $.ajax({
                type: "POST",
                url: "./ThanhToan.aspx/DataInput",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    //console.log(responsive.d);
                    d = responsive.d;
                    if (d == "") {
                        $("#myModalNewThanhToan").modal("hide");
                        fncClickShowTable("DT", "doanhthu", "doanh thu");
                    } else {
                        alert(d);
                    }
                },
                error: function () {
                    alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
                }
            }).done(function () {
            })
        } else {
            alert(error_alert);
            //$("#div-wait").hide();
        }
    })

    fncChange();
});
//END DOCUMENT READY



// click hiển thị table
function fncClickShowTable(tt_table_type, tt_tableid_name, tt_table_text) {
    $(".btn-them").remove();
    $(".tbl-thanhtoan thead").empty();
    switch (tt_table_type) {
        case "DT":
            $(".tbl-thanhtoan thead").append(html_thead);
            break;
        case "CP":
            $(".tbl-thanhtoan thead").append(html_chiphi_thead);
            break;
        case "CH":
            $(".tbl-thanhtoan thead").append(html_chiho_thead);
            break;
    }
    //if (tt_table_type == "DT") {
    //    $(".tbl-thanhtoan thead").append(html_thead);

    //} else {
    //    $(".tbl-thanhtoan thead").append(html_chiphi_thead);

    //}
    //$(window).scroll(function () {
    //    var sticky = $(".tbl-thanhtoan thead"),
    //        scroll = $(window).scrollTop();

    //    if (scroll >= 300) sticky.addClass('has-fixed');
    //    else sticky.removeClass('has-fixed');
    //});
    $(".tbl-thanhtoan").removeAttr("id").attr("id", "tbl-quanly-" + tt_tableid_name);
    $("#p-thanhtoan-tieude").text("quản lý " + tt_table_text + " tháng " + $("#select-thanhtoan-thang").val() + " năm " + $("#select-thanhtoan-nam").val());
    getData(tt_table_type, $("#select-thanhtoan-thang").val(), $("#select-thanhtoan-nam").val());
    html_btn_them = "<button type=\"button\" id=\"btn-them-" + tt_tableid_name + "\" class=\"btn btn-primary btn-sm btn-them\">Thêm " + tt_table_text + "</button>";
    html_btn_them += "<button type=\"button\" id=\"btn-them-excel\" class=\"btn btn-success btn-sm btn-them\">Thêm danh sách thanh toán </button>";
    html_btn_them += "<div>";
    html_btn_them += "<div>";
    html_btn_them += "<label class=\"checkbox-inline  lable-title\">TRẠNG THÁI: </label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-trangthai\" checked id=\"cb-makho-all\" value=\"ALL\" />ALL</label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-trangthai cb-makho-child\" checked id=\"cb-kehoach\" value=\"kehoach\" />Kế hoạch</label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-trangthai cb-makho-child\" checked id=\"cb-dachuyen\" value=\"dachuyen\" />Đã chuyển</label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-trangthai cb-makho-child\" checked id=\"cb-xuathoadon\" value=\"xuathoadon\" />Xuất hóa đơn</label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-trangthai cb-makho-child\" checked id=\"cb-dagui\" value=\"dagui\" />Đã gửi</label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-trangthai cb-makho-child\" checked id=\"cb-hoanthanh\" value=\"hoanthanh\" />Hoàn thành</label>";
    html_btn_them += "</div>";
    html_btn_them += "<div>";
    html_btn_them += "<label class=\"checkbox-inline  lable-title\">LOẠI HÌNH: </label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-loaihinh\" checked id=\"cb-loaihinh-all\" value=\"ALL\" />ALL</label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-loaihinh cb-loaihinh-child\" checked id=\"cb-xuat\" value=\"EXP\" />Xuất</label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-loaihinh cb-loaihinh-child\" checked id=\"cb-nhap\" value=\"IMP\" />Nhập</label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-loaihinh cb-loaihinh-child\" checked id=\"cb-logistics\" value=\"LOG\" />Logistics</label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-loaihinh cb-loaihinh-child\" checked id=\"cb-thuekho\" value=\"NWH\" />Thuê kho</label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-loaihinh cb-loaihinh-child\" checked id=\"cb-motokhai\" value=\"CD\" />Mở tờ khai</label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-loaihinh cb-loaihinh-child\" checked id=\"cb-hangnguyhiem\" value=\"DGR\" />Hàng nguy hiểm</label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-loaihinh cb-loaihinh-child\" checked id=\"cb-thuephong\" value=\"K-TP\" />Thuê phòng</label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-loaihinh cb-loaihinh-child\" checked id=\"cb-thuexe\" value=\"K-TX\" />Thuê xe</label>";
    html_btn_them += "<label class=\"checkbox-inline color-white\">";
    html_btn_them += "<input type=\"checkbox\" class=\"cb-loaihinh cb-loaihinh-child\" checked id=\"cb-other\" value=\"OTH\" />Other</label>";
    html_btn_them += "</div>";
    html_btn_them += "</div>";
    $("#div-button-table").empty();
    $("#div-button-table").append(html_btn_them);

    scrollScreen();
}
// END click hiển thị table

//Bắc thêm phần hiển thị theo tên trong bảng
function fncChange() {
    $("#div-button-table").on("change", ".cb-loaihinh", function () {
        var cb_value = $(this).val();

        if (cb_value == "ALL") {
            if (this.checked) {
                $(".tr-loaihinh-view").show();
                $(".cb-loaihinh-child").prop("checked", true);

            } else {
                $(".tr-loaihinh-view").hide();
                $(".cb-loaihinh-child").prop("checked", false);
            }
        } else {
            if (this.checked) {
                $(".tr-loaihinh-" + cb_value).show();
            } else {
                $(".tr-loaihinh-" + cb_value).hide();
            }
        }
    });

    $("#div-button-table").on("change", ".cb-trangthai", function () {
        var cb_value = $(this).val();

        if (cb_value == "ALL") {
            if (this.checked) {
                $(".tr-trangthai-view").show();
                $(".cb-makho-child").prop("checked", true);

            } else {
                $(".tr-trangthai-view").hide();
                $(".cb-makho-child").prop("checked", false);
            }
        } else {
            if (this.checked) {
                $(".tr-trangthai-" + cb_value).show();
            } else {
                $(".tr-trangthai-" + cb_value).hide();
            }
        }
    });
    //$(".cb-makho").change(function () {
    //    var cb_value = $(this).val();

    //    if (cb_value == "ALL") {
    //        if (this.checked) {
    //            $(".tr-makho-view").show();
    //            $(".cb-makho-child").prop("checked", true);

    //            // show header
    //            console.log("hiển thị");

    //        } else {
    //            $(".tr-makho-view").hide();
    //            $(".cb-makho-child").prop("checked", false);

    //            // show header
    //            console.log("ẩn")
    //        }
    //    } else {
    //        if (this.checked) {
    //            $(".tr-makho-" + cb_value).show();

    //            $(".hide-show-table").each(function () {
    //                if ($(this).find("tbody tr[style=\"display: none;\"]").length != $(this).find("tbody tr").length) {
    //                    $(this).find("thead").show();
    //                }
    //            })
    //        } else {
    //            $(".tr-makho-" + cb_value).hide();
    //            // toannh
    //            $(".hide-show-table").each(function () {
    //                if ($(this).find("tbody tr[style=\"display: none;\"]").length == $(this).find("tbody tr").length) {
    //                    $(this).find("thead").hide();
    //                }
    //            })
    //        }
    //    }
    //})
}

// update vào csdl
function fncUpdateDatabase(update_type, id, loai_thanhtoan) {
    event.stopPropagation();
    var updatedb = { update_type: update_type, listThanhToan: [] };
    updatedb.listThanhToan.push({
        "id": id,
        "makh": tt_val_khachhang,
        "loaihinh": tt_val_loaihinh,
        "thang": tt_val_thang,
        "nam": tt_val_nam,
        "ky": tt_val_ky,
        "ngay_bd_ky": tt_val_ngaybdky,
        "ngay_kt_ky": tt_val_ngayktky,
        "sanluong": tt_val_sanluong,
        "giatri": tt_val_giatri,
        "giatrisauthue": tt_val_giatrisauthue,
        "ngaygio_gui_bangke": tt_val_ngaygioguibangke,
        "nguoi_gui_bangke": tt_val_nguoiguibangke,
        "ngaygio_xacnhan_bangke": tt_val_ngaygioxacnhanbangke,
        "nguoi_xacnhan_bangke": tt_val_nguoixacnhanbangke,
        "ngay_chuyen_sl_ketoan": tt_val_ngaychuyenketoan,
        "nguoi_chuyen_sl_ketoan": tt_val_nguoichuyenketoan,
        "sohoadon": tt_val_sohoadon,
        "ngay_phathanh": tt_val_ngayphathanh,
        "nguoi_phathanh": tt_val_nguoiphathanh,
        "ngay_chuyenphat": tt_val_ngaychuyenphat,
        "nguoi_chuyenphat": tt_val_nguoichuyenphat,
        "ngay_thanhtoan": tt_val_ngaythanhtoan,
        "nguoi_thanhtoan": tt_val_nguoithanhtoan,
        "ghichu": tt_val_ghichu,
        "loai_thanhtoan": loai_thanhtoan,
        "hienthi": "",
        "ngaytao": "",
        "nguoitao": "",
        "DaNhanHDGoc_NgayGio": tt_val_danhanhdgoc_ngaygio,
        "DaNhanHDGoc_SoHD": tt_val_danhanhdgoc_sohd,
        "DaNhanHDGoc_LoaiThanhToan": tt_val_danhanhdgoc_loaithanhtoan,
        "DaNhanHDGoc_NguoiNhan": tt_val_danhanhdgoc_nguoinhan,
        "DaNhanHDGoc_NguoiChiTra": tt_val_danhanhdgoc_nguoichitra,
        "DaChuyenHDKeToan_NgayGio": tt_val_dachuyenhdketoan_ngaygio,
        "DaChuyenHDKeToan_NguoiChuyen": tt_val_dachuyenhdketoan_nguoichuyen,
        "SoSO": tt_val_soso,
        "ChiHo": tt_val_chiho
    })
    jsonData = JSON.stringify({ updatedb });
    $.ajax({
        type: "POST",
        url: "./ThanhToan.aspx/UpdateDatabase",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            alert(d);
            $("#myModalViewThanhToan").modal("hide");
        },
        error: function () {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)");
        }
    });
}
// END update vào csdl
// clear value
function fncClearTTVal() {
    tt_val_id = "";
    tt_val_khachhang = "";
    tt_val_loaihinh = "";
    tt_val_thang = "";
    tt_val_nam = "";
    tt_val_ky = "";
    tt_val_ngaybdky = "";
    tt_val_ngayktky = "";
    tt_val_sanluong = "";
    tt_val_giatri = "";
    tt_val_giatrisauthue = "";
    tt_val_ngaygioguibangke = "";

    tt_val_nguoiguibangke = "";
    tt_val_ngaygioxacnhanbangke = "";
    tt_val_nguoixacnhanbangke = "";

    tt_val_ngaychuyenketoan = "";
    tt_val_nguoichuyenketoan = "";

    tt_val_sohoadon = "";
    tt_val_ngayphathanh = "";
    tt_val_nguoiphathanh = "";

    tt_val_ngaychuyenphat = "";
    tt_val_nguoichuyenphat = "";

    tt_val_ngaythanhtoan = "";
    tt_val_nguoithanhtoan = "";

    tt_val_ghichu = "";
    tt_val_danhanhdgoc_ngaygio = "";
    tt_val_danhanhdgoc_sohd = "";
    tt_val_danhanhdgoc_loaithanhtoan = "";
    tt_val_danhanhdgoc_nguoichitra = "";
    tt_val_danhanhdgoc_nguoinhan = "";
    tt_val_dachuyenhdketoan_ngaygio = "";
    tt_val_dachuyenhdketoan_nguoichuyen = "";
    tt_val_soso = "";
}
// load modal thêm
function fncModalThem(loai_thanhtoan) {
    $("#select-thanhtoan-loaihinh-modify").empty();
    if (loai_thanhtoan == "DT") {
        fncLoadSelectKHDT("KH");
        $(".doanhthu-hide").hide();
        $(".chiphi-hide").show();
        $("#h4-thanhtoan-view-tieude").text("THÊM DOANH THU");
        $("#span-thanhtoan-khachhang-modify").text("Khách hàng");
        $("#span-dathanhtoan-nguoi").text("Người TT");
        $("#select-thanhtoan-loaihinh-modify").append(html_loaihinh_doanhthu);
    }
    if (loai_thanhtoan == "CP") {
        fncLoadSelectKHDT("DT");
        $(".doanhthu-hide").show();
        $(".chiphi-hide").hide();
        $("#h4-thanhtoan-view-tieude").text("THÊM CHI PHÍ");
        $("#span-thanhtoan-khachhang-modify").text("Đối tác");
        $("#select-thanhtoan-loaihinh-modify").append(html_loaihinh_chiphi);
        $("#span-dathanhtoan-nguoi").text("Người nhận TT");
    }
    if (loai_thanhtoan == "CH") {
        fncLoadSelectKHDT("DT");
        $(".doanhthu-hide").show();
        $(".chiphi-hide").hide();
        $("#h4-thanhtoan-view-tieude").text("THÊM CHI HỘ");
        $("#span-thanhtoan-khachhang-modify").text("Đối tác");
        $("#select-thanhtoan-loaihinh-modify").append(html_loaihinh_chiphi);
        $("#span-dathanhtoan-nguoi").text("Người nhận TT");
    }
    $(".input-thanhtoan-checkbox").prop("checked", false);
    $(".input-thanhtoan-clear").val("");
    $("#select-thanhtoan-thang-modify").val(dt.getMonth() + 1);
    $("#select-thanhtoan-nam-modify").val(dt.getFullYear());
    $(".input-thanhtoan-disable-first").attr("disabled", true);
    $("#div-thanhtoan-button-luu").empty()
        .append(html_modal_btn_them);
    $("#div-thanhtoan-button-chucnangkhac").empty();
    $("#table-filedinhkem tbody").empty();

    $("#myModalViewThanhToan").attr("loai-thanhtoan", loai_thanhtoan);
    $("#myModalViewThanhToan").modal(
        {
            show: true,
            backdrop: "static",
            keyboard: false
        });
}
// end load modal them
///
var html_khdt = "";
function fncLoadSelectKHDT(loai) {
    // event.stopPropagation();
    $("#select-thanhtoan-khachhang-modify").empty();
    html_khdt = "";
    ajaxGet = { "get": loai };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "./ThanhToan.aspx/LoadKHDT",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            $.each(d, function (index, val) {
                html_khdt += "<option value=\"" + val.id + "\">" + (index + 1) + ". " + val.ten + "</option>";
            })
            $("#select-thanhtoan-khachhang-modify").append(html_khdt);
        },
        error: function () {
            alert("Lỗi load select khách hàng đối tác! Refresh!")
        },
    })
}
// load modal sửa
function fncModalSua(sua_id, sua_loai) {
    //$("#myModalViewThanhToan").modal("hide");
    //$("#div-wait").show();
    $("#select-thanhtoan-loaihinh-modify").empty();
    $(".input-thanhtoan-clear").val("");
    if (sua_loai == "DT") {
        modal_tieude = "DOANH THU";
        modal_khdt_name = "Khách hàng";
        $(".doanhthu-hide").hide();
        $(".chiphi-hide").show();
        $("#span-dathanhtoan-nguoi").text("Người TT");
        fncLoadSelectKHDT("KH");

        $("#select-thanhtoan-loaihinh-modify").append(html_loaihinh_doanhthu);
    } else if (sua_loai == "CP") {
        modal_tieude = "CHI PHÍ";
        modal_khdt_name = "Đối tác";
        $(".doanhthu-hide").show();
        $(".chiphi-hide").hide();
        $("#span-dathanhtoan-nguoi").text("Người nhận TT");
        fncLoadSelectKHDT("DT");

        $("#select-thanhtoan-loaihinh-modify").append(html_loaihinh_chiphi);
    }
    else if (sua_loai == "CH") {
        modal_tieude = "CHI HỘ";
        modal_khdt_name = "Đối tác";
        $(".doanhthu-hide").show();
        $(".chiphi-hide").hide();
        $("#span-dathanhtoan-nguoi").text("Người nhận TT");
        fncLoadSelectKHDT("DT");

        $("#select-thanhtoan-loaihinh-modify").append(html_loaihinh_chiphi);
    }
    else {
        modal_tieude = "<<Lỗi>>";
        modal_khdt_name = "<<Lỗi>>";
    }

    $("#span-thanhtoan-khachhang-modify").text(modal_khdt_name);

    $("#h4-thanhtoan-view-tieude").text("SỬA " + modal_tieude + "(ID: " + sua_id + ")");

    $("#div-thanhtoan-button-luu").empty()
        .append(html_modal_btn_luu)
        .append(html_modal_btn_xoa);
    $("#div-thanhtoan-button-chucnangkhac").empty()
        .append(html_modal_btn_dinhkem);

    ajaxGet = { "get": sua_id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "./ThanhToan.aspx/LoadDatawId",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            $("#select-thanhtoan-khachhang-modify").val(d[0].makh.trim());
            $("#select-thanhtoan-loaihinh-modify").val(d[0].loaihinh.trim());
            $("#select-thanhtoan-thang-modify").val(d[0].thang.trim());
            $("#select-thanhtoan-nam-modify").val(d[0].nam.trim());
            $("#input-thanhtoan-ky-modify").val(d[0].ky);
            $("#input-thanhtoan-ngaybdky-modify").val(convertDate(d[0].ngay_bd_ky)[1]);
            $("#input-thanhtoan-ngayktky-modify").val(convertDate(d[0].ngay_kt_ky)[1]);
            $("#input-thanhtoan-sanluong-modify").val(fncTachPhanNghin(d[0].sanluong));
            $("#input-thanhtoan-giatri-modify").val(fncTachPhanNghin(d[0].giatri));
            $("#input-thanhtoan-giatri-sauthue-modify").val(fncTachPhanNghin(d[0].giatrisauthue));
            $("#input-thanhtoan-soso-modify").val(d[0].soso);
            $("#input-thanhtoan-chiho-modify").val(fncTachPhanNghin(d[0].chiho));
            if ($.inArray(d[0].ngaygio_gui_bangke, arr_date) != -1) {
                $("#checkboxSuccess-guibangke").prop("checked", false);
                $(".input-guibangke").attr("disabled", true);
            } else {
                $("#checkboxSuccess-guibangke").prop("checked", true);
                $(".input-guibangke").attr("disabled", false);
                $("#input-thanhtoan-ngayguibangke-modify").val(convertDate(d[0].ngaygio_gui_bangke)[1])
                $("#input-thanhtoan-gioguibangke-modify").val(convertDate(d[0].ngaygio_gui_bangke)[3])
                $("#input-thanhtoan-nguoiguibangke-modify").val(d[0].nguoi_gui_bangke.trim());
            }
            if ($.inArray(d[0].ngaygio_xacnhan_bangke, arr_date) != -1) {
                $("#checkboxSuccess-xacnhanbangke").prop("checked", false);
                $(".input-xacnhanbangke").attr("disabled", true);
            } else {
                $("#checkboxSuccess-xacnhanbangke").prop("checked", true);
                $(".input-xacnhanbangke").attr("disabled", false);
                $("#input-thanhtoan-ngayxacnhanbangke-modify").val(convertDate(d[0].ngaygio_xacnhan_bangke)[1])
                $("#input-thanhtoan-gioxacnhanbangke-modify").val(convertDate(d[0].ngaygio_xacnhan_bangke)[3])
                $("#input-thanhtoan-nguoixacnhanbangke-modify").val(d[0].nguoi_xacnhan_bangke.trim());
            }

            if ($.inArray(d[0].ngay_chuyen_sl_ketoan, arr_date) != -1) {
                $("#checkboxSuccess-chuyenketoan").prop("checked", false);
                $(".input-chuyenketoan").attr("disabled", true);
            } else {
                $("#checkboxSuccess-chuyenketoan").prop("checked", true);
                $(".input-chuyenketoan").attr("disabled", false);
                $("#input-thanhtoan-ngaychuyenketoan-modify").val(convertDate(d[0].ngay_chuyen_sl_ketoan)[1])
                $("#input-thanhtoan-nguoichuyenketoan-modify").val(d[0].nguoi_chuyen_sl_ketoan.trim());
            }
            if ($.inArray(d[0].ngay_phathanh, arr_date) != -1) {
                $("#checkboxSuccess-phathanh").prop("checked", false);
                $(".input-phathanh").attr("disabled", true);
            } else {
                $("#checkboxSuccess-phathanh").prop("checked", true);
                $(".input-phathanh").attr("disabled", false);
                $("#input-thanhtoan-ngayphathanh-modify").val(convertDate(d[0].ngay_phathanh)[1])
                $("#input-thanhtoan-nguoiphathanh-modify").val(d[0].nguoi_phathanh.trim());
                $("#input-thanhtoan-sohoadon-modify").val(d[0].sohoadon.trim());
            }
            if ($.inArray(d[0].ngay_chuyenphat, arr_date) != -1) {
                $("#checkboxSuccess-chuyenphat").prop("checked", false);
                $(".input-chuyenphat").attr("disabled", true);
            } else {
                $("#checkboxSuccess-chuyenphat").prop("checked", true);
                $(".input-chuyenphat").attr("disabled", false);
                $("#input-thanhtoan-ngaychuyenphat-modify").val(convertDate(d[0].ngay_chuyenphat)[1])
                $("#input-thanhtoan-nguoichuyenphat-modify").val(d[0].nguoi_chuyenphat.trim());
            }
            if ($.inArray(d[0].ngay_thanhtoan, arr_date) != -1) {
                $("#checkboxSuccess-thanhtoan").prop("checked", false);
                $(".input-thanhtoan").attr("disabled", true);
            } else {
                $("#checkboxSuccess-thanhtoan").prop("checked", true);
                $(".input-thanhtoan").attr("disabled", false);
                $("#input-thanhtoan-ngaythanhtoan-modify").val(convertDate(d[0].ngay_thanhtoan)[1])
                $("#input-thanhtoan-nguoithanhtoan-modify").val(d[0].nguoi_thanhtoan.trim());
            }
            if ($.inArray(d[0].danhanhdgoc_ngaygio, arr_date) != -1) {
                $("#checkboxSuccess-danhanhoadongoc").prop("checked", false);
                $(".input-danhanhoadongoc").attr("disabled", true);
            } else {
                $("#checkboxSuccess-danhanhoadongoc").prop("checked", true);
                $(".input-danhanhoadongoc").attr("disabled", false);
                $("#input-thanhtoan-ngaydanhanhoadongoc-modify").val(convertDate(d[0].danhanhdgoc_ngaygio)[1])
                $("#input-thanhtoan-giodanhanhoadongoc-modify").val(convertDate(d[0].danhanhdgoc_ngaygio)[3]);
                $("#input-thanhtoan-nguoidanhanhoadongoc-modify").val(d[0].danhanhdgoc_nguoinhan.trim());
                $("#input-thanhtoan-danhanhoadongoc-sohoadon-modify").val(d[0].danhanhdgoc_sohd.trim());
                $("#select-danhanhoadongoc-loaithanhtoan-modify").val(d[0].danhanhdgoc_loaithanhtoan.trim());
                $("#input-thanhtoan-danhanhoadongoc-nguoichitra-modify").val(d[0].danhanhdgoc_nguoichitra.trim());
            }
            if ($.inArray(d[0].dachuyenhdketoan_ngaygio, arr_date) != -1) {
                $("#checkboxSuccess-dachuyenhoadonketoan").prop("checked", false);
                $(".input-dachuyenhoadonketoan").attr("disabled", true);
            } else {
                $("#checkboxSuccess-dachuyenhoadonketoan").prop("checked", true);
                $(".input-dachuyenhoadonketoan").attr("disabled", false);
                $("#input-thanhtoan-ngaydachuyenhoadonketoan-modify").val(convertDate(d[0].dachuyenhdketoan_ngaygio)[1])
                $("#input-thanhtoan-giodachuyenhoadonketoan-modify").val(convertDate(d[0].dachuyenhdketoan_ngaygio)[3])
                $("#input-thanhtoan-nguoidachuyenhoadonketoan-modify").val(d[0].dachuyenhdketoan_nguoichuyen.trim());
            }
            $("#input-thanhtoan-ghichu-modify").val(d[0].ghichu.trim());
            //console.log(d[0].hoanthanh);
            //if (d[0].hoanthanh == "0") {
            //    $("#div-thanhtoan-button-luu").prepend(html_modal_btn_hoanthanh);
            //} else {
            //    $("#div-thanhtoan-button-luu").prepend(html_modal_btn_hoanthanh_huy);
            //}
        },
        error: function () {
        }
    }).done(function () {
        //$("#div-wait").hide();
    });

    fncLoadFileDinhKem(sua_id);

    $("#myModalViewThanhToan").attr("id-thanhtoan", sua_id);
    $("#myModalViewThanhToan").attr("loai-thanhtoan", sua_loai);
    $("#myModalViewThanhToan").modal(
        {
            show: true,
            backdrop: "static",
            keyboard: false
        });
}

function getData(loai_thanhtoan, thang, nam) {
    //$("#div-wait").show();
    // get loai hinh
    sanluong_exp = 0;
    sanluong_imp = 0;
    sanluong_nwh = 0;
    sanluong_cd = 0;
    sanluong_dgr = 0;
    sanluong_oth = 0;
    sanluong_log = 0;
    giatri_exp = 0;
    giatri_imp = 0;
    giatri_nwh = 0;
    giatri_cd = 0;
    giatri_dgr = 0;
    giatri_oth = 0;
    giatri_log = 0;
    //
    sanluong_k_tp = 0;
    giatri_k_tp = 0;
    sanluong_k_tx = 0;
    giatri_k_tx = 0;

    giatri_chiho = 0;
    //
    var diff_dt_kethucky = 0;
    var diff_dt_guibangke = 0;
    var diff_dt_xacnhanbangke = 0;
    var diff_dt_xuathoadon = 0;
    var color_dt_kethucky = "";
    var color_dt_guibangke = "";
    var color_dt_xacnhanbangke = "";
    var color_dt_xuathoadon = "";
    var dt_giohientai = new Date();
    //data table
    ajaxGet4 = { "get1": "0", "get2": loai_thanhtoan, "get3": thang, "get4": nam };
    //console.log(ajaxGet4)
    jsonData = JSON.stringify({ ajaxGet4 });
    $.ajax({
        type: "POST",
        url: "./ThanhToan.aspx/LoadData",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            html_tbody = "";
            html_tbody_tonghop = "";
            var danhanhdgoc_loaithanhtoan_temp = "";
            $.each(d, function (item, val) {
                danhanhdgoc_loaithanhtoan_temp = "";

                giatri_chiho += parseInt(val.chiho);

                diff_dt_kethucky = 0;
                diff_dt_guibangke = 0;
                diff_dt_xacnhanbangke = 0;
                diff_dt_xuathoadon = 0;
                color_dt_kethucky = "";
                color_dt_guibangke = "";
                color_dt_xacnhanbangke = "";
                color_dt_xuathoadon = "";
                if (val.danhanhdgoc_loaithanhtoan == "Chuyển khoản") {
                    danhanhdgoc_loaithanhtoan_temp = "CK"
                }
                if (val.danhanhdgoc_loaithanhtoan == "Tiền mặt") {
                    danhanhdgoc_loaithanhtoan_temp = "TM"
                }

                switch (val.loaihinh.trim()) {
                    case "EXP":
                        sanluong_exp += parseInt(val.sanluong);
                        giatri_exp += parseFloat(val.giatri);
                        break;
                    case "IMP":
                        sanluong_imp += parseInt(val.sanluong);
                        giatri_imp += parseFloat(val.giatri);
                        break;
                    case "NWH":
                        sanluong_nwh += parseInt(val.sanluong);
                        giatri_nwh += parseFloat(val.giatri);
                        break;
                    case "CD":
                        sanluong_cd += parseInt(val.sanluong);
                        giatri_cd += parseFloat(val.giatri);
                        break;
                    case "DGR":
                        sanluong_dgr += parseInt(val.sanluong);
                        giatri_dgr += parseFloat(val.giatri);
                        break;
                    case "LOG":
                        sanluong_log += parseInt(val.sanluong);
                        giatri_log += parseFloat(val.giatri);
                        break;
                    case "OTH":
                        sanluong_oth += parseInt(val.sanluong);
                        giatri_oth += parseFloat(val.giatri);
                        break;
                    case "K-TP":
                        sanluong_k_tp += parseInt(val.sanluong);
                        giatri_k_tp += parseFloat(val.giatri);
                        break;
                    case "K-TX":
                    case "VC":
                        sanluong_k_tx += parseInt(val.sanluong);
                        giatri_k_tx += parseFloat(val.giatri);
                        break;
                }
                diff_dt_kethucky = fncDiff2Date(convertDate(val.ngay_kt_ky)[0], dt_giohientai);
                diff_dt_guibangke = fncDiff2Date(convertDate(val.ngay_kt_ky)[0], convertDate(val.ngaygio_gui_bangke)[0]);
                diff_dt_xacnhanbangke = fncDiff2Date(convertDate(val.ngaygio_gui_bangke)[0], (convertDate(val.ngaygio_xacnhan_bangke)[0] != "" ? convertDate(val.ngaygio_xacnhan_bangke)[0] : dt_giohientai));
                diff_dt_xuathoadon = fncDiff2Date(convertDate(val.ngay_chuyen_sl_ketoan)[0], (convertDate(val.ngay_phathanh)[0] != "" ? convertDate(val.ngay_phathanh)[0] : dt_giohientai));
                //console.log(diff_dt_kethucky);
                /// tô màu kết thúc kỳ

                if (convertDate(val.ngaygio_gui_bangke)[0] == "" && diff_dt_kethucky >= -2) {
                    if (diff_dt_kethucky <= 0) {
                        color_dt_kethucky = "background-color-blue";
                    }
                    else if (diff_dt_kethucky <= 3) {
                        color_dt_kethucky = "background-color-yellow";
                    }
                    else {
                        color_dt_kethucky = "background-color-pink";
                    }
                }

                /// Tô màu gửi bảng kê
                if (convertDate(val.ngaygio_gui_bangke)[0] != "" && diff_dt_guibangke > 3) {
                    if (diff_dt_guibangke <= 6) {
                        color_dt_guibangke = "background-color-yellow";
                    }
                    else {
                        color_dt_guibangke = "background-color-pink";
                    }
                }
                /// tô màu xác nhận bảng kê
                if (convertDate(val.ngaygio_gui_bangke)[0] != "" && diff_dt_xacnhanbangke > 3) {
                    if (diff_dt_xacnhanbangke <= 6) {
                        color_dt_xacnhanbangke = "background-color-yellow";
                    }
                    else {
                        color_dt_xacnhanbangke = "background-color-pink";
                    }
                }
                /// tô màu xuất hóa đơn
                if (convertDate(val.ngay_chuyen_sl_ketoan)[0] != "") {
                    if (diff_dt_xuathoadon < 2) {
                        if (convertDate(val.ngay_phathanh)[0] == "")
                            color_dt_xuathoadon = "background-color-blue";
                    }
                    else if (diff_dt_xuathoadon >= 2 && diff_dt_xuathoadon <= 4) {
                        color_dt_xuathoadon = "background-color-yellow";
                    }
                    else {
                        color_dt_xuathoadon = "background-color-pink";
                    }
                }

                if (loai_thanhtoan == "DT") {
                    tr_trangthaicheckbox = fncReturnTrangThaiGan(val.ngaygio_gui_bangke, val.ngaygio_xacnhan_bangke, val.ngay_phathanh, val.dinhkem, val.ngay_thanhtoan, val.sohoadon);
                } else {
                    tr_trangthaicheckbox = fncReturnTrangThaiGan(val.ngaygio_gui_bangke, val.ngaygio_xacnhan_bangke, val.dachuyenhdketoan_ngaygio, val.dinhkem, val.ngay_thanhtoan, val.sohoadon);
                }


                html_tbody += "<tr id=\"tr-thanhtoan-" + val.id + "\" id-thanhtoan=\"" + val.id + "\"  loai-thanhtoan=\"" + loai_thanhtoan + "\" class=\"tr-thanhtoan tr-loaihinh-view tr-loaihinh-" + val.loaihinh + " tr-trangthai-view tr-trangthai-" + tr_trangthaicheckbox + "\" >";
                html_tbody += "<td class=\"td-trangthai td-trangthai-css noselect\">";
                if (loai_thanhtoan == "DT") {
                    html_tbody += fncReturnTrangThai(val.ngaygio_gui_bangke, val.ngaygio_xacnhan_bangke, val.ngay_phathanh, val.dinhkem, val.ngay_thanhtoan, val.sohoadon)
                } else {
                    html_tbody += fncReturnTrangThai(val.ngaygio_gui_bangke, val.ngaygio_xacnhan_bangke, val.dachuyenhdketoan_ngaygio, val.dinhkem, val.ngay_thanhtoan, val.sohoadon)
                }

                html_tbody += "</td>";
                html_tbody += "<td class=\"td-khachhang\">" + val.makh + "</td>";
                html_tbody += "<td class=\"td-loaihinh\">" + val.loaihinh + "</td>";
                html_tbody += "<td class=\"td-thang\">" + val.thang + "</td>";
                html_tbody += "<td class=\"td-ky\">" + val.ky + "</td>";
                html_tbody += "<td class=\"td-ngaybdky\">" + convertDate(val.ngay_bd_ky)[4] + "</td>";
                html_tbody += "<td class=\"td-ngayktky " + color_dt_kethucky + "\">" + convertDate(val.ngay_kt_ky)[4] + "</td>";
                if (loai_thanhtoan == "CP") {
                    html_tbody += "<td class=\"td-loaithanhtoan\">" + danhanhdgoc_loaithanhtoan_temp + "</td>";
                }
                if (loai_thanhtoan == "CH") {
                    html_tbody += "<td class=\"td-loaithanhtoan\">" + danhanhdgoc_loaithanhtoan_temp + "</td>";
                }
                html_tbody += "<td class=\"td-sanluong\">" + numberTextWithCommas(val.sanluong) + "</td>";
                html_tbody += "<td class=\"td-giatri\">" + numberTextWithCommas(val.giatri) + "</td>";
                if (loai_thanhtoan == "DT") {
                    html_tbody += "<td class=\"td-chiho\">" + numberTextWithCommas(val.chiho) + "</td>";
                    html_tbody += "<td class=\"td-ngaygioguibangke " + color_dt_guibangke + "\">" + convertDate(val.ngaygio_gui_bangke)[2] + "</td>";
                    html_tbody += "<td class=\"td-ngaygioxacnhanbangke " + color_dt_xacnhanbangke + "\">" + convertDate(val.ngaygio_xacnhan_bangke)[2] + "</td>";
                    // Bắc sửa ngày chuyển kế toán bỏ đi
                    //html_tbody += "<td class=\"td-ngaygiochuyenketoan\">" + convertDate(val.ngay_chuyen_sl_ketoan)[4] + "</td>";

                    html_tbody += "<td class=\"td-sohoadon\">" + val.sohoadon + "</td>";
                    html_tbody += "<td class=\"td-ngaygiophathanh " + color_dt_xuathoadon + "\">" + convertDate(val.ngay_phathanh)[4] + "</td>";
                    //html_tbody += "<td class=\"td-nguoiphathanh\">" + val.nguoi_phathanh + "</td>";
                    html_tbody += "<td class=\"td-ngaygiochuyenphat\">" + convertDate(val.ngay_chuyenphat)[4] + "</td>";
                    //html_tbody += "<td class=\"td-nguoichuyenphat\">" + val.nguoi_chuyenphat + "</td>";
                    html_tbody += "<td class=\"td-ngaygiothanhtoan\">" + convertDate(val.ngay_thanhtoan)[4] + "</td>";
                    html_tbody += "<td class=\"td-soso\" >" + val.soso + "</td>";
                    html_tbody += "<td class=\"td-ghichu\" >" + val.ghichu + "</td>";
                    html_tbody += "<td class=\"td-copy\" ><button type=\"button\" class=\"btn btn-sm btn-primary btn-copy\">Copy</button></td>";
                    html_tbody += "</tr>";
                    html_tbody += "</tr>";
                    //if (val.ghichu.trim() != "") {
                    //    html_tbody += "<tr  id-thanhtoan=\"" + val.id + "\" class=\"tr-thanhtoan-sub\" id=\"tr-thanhtoan-sub-" + val.id + "\">";
                    //    html_tbody += "<td class=\"td-ghichu\" colspan=\"8\">" + val.ghichu + "</td>";
                    //    html_tbody += "<td class=\"td-taosua\" colspan=\"7\">" + "Người tạo: " + val.nguoitao + " lúc: " + convertDate(val.ngaytao)[2];
                    //    if (val.nguoisua != "") {
                    //        html_tbody += " | Người sửa cuối: " + val.nguoisua + " lúc: " + convertDate(val.ngaysua)[2]
                    //    }
                    //    //console.log(val.nguoisua);
                    //    html_tbody += "</td>";
                    //    html_tbody += "</tr>";
                    //}
                }
                if (loai_thanhtoan == "CP") {
                    html_tbody += "<td class=\"td-giatrisauthue\">" + numberTextWithCommas(val.giatrisauthue) + "</td>";

                    //html_tbody += "<td class=\"td-ngaygioguibangke " + color_dt_guibangke + "\">" + convertDate(val.ngaygio_gui_bangke)[2] + "</td>";
                    html_tbody += "<td class=\"td-ngaygioxacnhanbangke " + color_dt_xacnhanbangke + "\">" + convertDate(val.ngaygio_xacnhan_bangke)[2] + "</td>";

                    html_tbody += "<td class=\"td-ngaygiophathanh " + color_dt_xuathoadon + "\">" + convertDate(val.dachuyenhdketoan_ngaygio)[4] + "</td>";
                    html_tbody += "<td class=\"td-sohoadon\">" + val.danhanhdgoc_sohd + "</td>";
                    html_tbody += "<td class=\"td-ngaygiochuyenketoan\">" + convertDate(val.dachuyenhdketoan_ngaygio)[4] + "</td>";

                    //console.log(val.dachuyenhdketoan_ngaygio);

                    //html_tbody += "<td class=\"td-nguoiphathanh\">" + val.nguoi_phathanh + "</td>";
                    // html_tbody += "<td class=\"td-ngaygiochuyenphat\">" + convertDate(val.ngay_chuyenphat)[4] + "</td>";
                    //html_tbody += "<td class=\"td-nguoichuyenphat\">" + val.nguoi_chuyenphat + "</td>";
                    html_tbody += "<td class=\"td-ngaygiothanhtoan\">" + convertDate(val.ngay_thanhtoan)[4] + "</td>";
                    html_tbody += "<td class=\"td-ghichu\" >" + val.ghichu + "</td>";
                    html_tbody += "</tr>";
                    //if (val.ghichu.trim() != "") {
                    //    html_tbody += "<tr  id-thanhtoan=\"" + val.id + "\" class=\"tr-thanhtoan-sub\" id=\"tr-thanhtoan-sub-" + val.id + "\">";
                    //    html_tbody += "<td class=\"td-ghichu\" colspan=\"8\">" + val.ghichu + "</td>";
                    //    html_tbody += "<td class=\"td-taosua\" colspan=\"7\">" + "Người tạo: " + val.nguoitao + " lúc: " + convertDate(val.ngaytao)[2];
                    //    if (val.nguoisua != "") {
                    //        html_tbody += " | Người sửa cuối: " + val.nguoisua + " lúc: " + convertDate(val.ngaysua)[2]
                    //    }
                    //    //console.log(val.nguoisua);
                    //    html_tbody += "</td>";
                    //    html_tbody += "</tr>";
                    //}
                }
                if (loai_thanhtoan == "CH") {
                    html_tbody += "<td class=\"td-giatrisauthue\">" + numberTextWithCommas(val.giatrisauthue) + "</td>";

                    //html_tbody += "<td class=\"td-ngaygioguibangke " + color_dt_guibangke + "\">" + convertDate(val.ngaygio_gui_bangke)[2] + "</td>";
                    html_tbody += "<td class=\"td-ngaygioxacnhanbangke " + color_dt_xacnhanbangke + "\">" + convertDate(val.ngaygio_xacnhan_bangke)[2] + "</td>";

                    html_tbody += "<td class=\"td-ngaygiophathanh " + color_dt_xuathoadon + "\">" + convertDate(val.dachuyenhdketoan_ngaygio)[4] + "</td>";
                    html_tbody += "<td class=\"td-sohoadon\">" + val.danhanhdgoc_sohd + "</td>";
                    html_tbody += "<td class=\"td-ngaygiochuyenketoan\">" + convertDate(val.dachuyenhdketoan_ngaygio)[4] + "</td>";

                    //console.log(val.dachuyenhdketoan_ngaygio);

                    //html_tbody += "<td class=\"td-nguoiphathanh\">" + val.nguoi_phathanh + "</td>";
                    // html_tbody += "<td class=\"td-ngaygiochuyenphat\">" + convertDate(val.ngay_chuyenphat)[4] + "</td>";
                    //html_tbody += "<td class=\"td-nguoichuyenphat\">" + val.nguoi_chuyenphat + "</td>";
                    html_tbody += "<td class=\"td-ngaygiothanhtoan\">" + convertDate(val.ngay_thanhtoan)[4] + "</td>";
                    html_tbody += "<td class=\"td-ghichu\" >" + val.ghichu + "</td>";

                    //if (val.ghichu.trim() != "") {
                    //    html_tbody += "<tr  id-thanhtoan=\"" + val.id + "\" class=\"tr-thanhtoan-sub\" id=\"tr-thanhtoan-sub-" + val.id + "\">";
                    //    html_tbody += "<td class=\"td-ghichu\" colspan=\"8\">" + val.ghichu + "</td>";
                    //    html_tbody += "<td class=\"td-taosua\" colspan=\"7\">" + "Người tạo: " + val.nguoitao + " lúc: " + convertDate(val.ngaytao)[2];
                    //    if (val.nguoisua != "") {
                    //        html_tbody += " | Người sửa cuối: " + val.nguoisua + " lúc: " + convertDate(val.ngaysua)[2]
                    //    }
                    //    //console.log(val.nguoisua);
                    //    html_tbody += "</td>";
                    //    html_tbody += "</tr>";
                    //}
                }
            })
            if (html_tbody == "") {
                if (loai_thanhtoan == "DT") {
                    html_tbody = "<tr>" + "<td colspan=\"19\">" + "Không có dữ liệu" + "</td>" + "</tr>";
                } else {
                    html_tbody = "<tr>" + "<td colspan=\"17\">" + "Không có dữ liệu" + "</td>" + "</tr>";
                }
            }
            html_tbody_tonghop += "<tr>";
            html_tbody_tonghop += "<td>" + "Sản lượng" + "</td>";
            html_tbody_tonghop += "<td>" + ((sanluong_exp != 0) ? numberWithCommas(sanluong_exp) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((sanluong_imp != 0) ? numberWithCommas(sanluong_imp) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((sanluong_log != 0) ? numberWithCommas(sanluong_log) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((sanluong_nwh != 0) ? numberWithCommas(sanluong_nwh) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((sanluong_cd != 0) ? numberWithCommas(sanluong_cd) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((sanluong_dgr != 0) ? numberWithCommas(sanluong_dgr) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((sanluong_k_tp != 0) ? numberWithCommas(sanluong_k_tp) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((sanluong_k_tx != 0) ? numberWithCommas(sanluong_k_tx) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((sanluong_oth != 0) ? numberWithCommas(sanluong_oth) : "") + "</td>";
            html_tbody_tonghop += "<td>" + "" + "</td>";
            html_tbody_tonghop += "<td>" + "" + "</td>";
            html_tbody_tonghop += "</tr>";

            html_tbody_tonghop += "<tr>";
            html_tbody_tonghop += "<td>" + "Giá Trị" + "</td>";
            html_tbody_tonghop += "<td>" + ((giatri_exp != 0) ? numberWithCommas(giatri_exp) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((giatri_imp != 0) ? numberWithCommas(giatri_imp) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((giatri_log != 0) ? numberWithCommas(giatri_log) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((giatri_nwh != 0) ? numberWithCommas(giatri_nwh) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((giatri_cd != 0) ? numberWithCommas(giatri_cd) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((giatri_dgr != 0) ? numberWithCommas(giatri_dgr) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((giatri_k_tp != 0) ? numberWithCommas(giatri_k_tp) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((giatri_k_tx != 0) ? numberWithCommas(giatri_k_tx) : "") + "</td>";
            html_tbody_tonghop += "<td>" + ((giatri_oth != 0) ? numberWithCommas(giatri_oth) : "") + "</td>";
            html_tbody_tonghop += "<td>" + numberWithCommas(giatri_exp + giatri_imp + giatri_nwh + giatri_log + giatri_cd + giatri_dgr + giatri_k_tp + giatri_k_tx + giatri_oth) + "</td>";
            html_tbody_tonghop += "<td>" + numberWithCommas(giatri_chiho) + "</td>";
            html_tbody_tonghop += "</tr>";

            $("#tbl-thanhtoan-tonghop tbody").empty();
            $("#tbl-thanhtoan-tonghop tbody").append(html_tbody_tonghop);
            $(".tbl-thanhtoan tbody").empty();
            $(".tbl-thanhtoan tbody").append(html_tbody);
        },
        error: function () {
            alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    });
}
//
function fncLoadFileDinhKem(folder) {
    //$("#div-wait").show();
    $("#table-filedinhkem tbody").empty();

    ajaxGet = { "get": folder };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "ThanhToan.aspx/reFileDinhKemDGR",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var html_filedinhkem = "";
            $.each(d, function (item, val) {
                html_filedinhkem += "<tr filename=\"" + val.filename + "\" folder=\"" + folder + "\">";
                html_filedinhkem += "<td>" + (item + 1) + "</td>";
                html_filedinhkem += "<td>" + "" + "</td>";
                html_filedinhkem += "<td>" + val.filename + "</td>";
                html_filedinhkem += "<td>" + fncConvertSize(val.filesize) + "</td>";
                html_filedinhkem += "<td>" + "<a class=\"label label-info a-file-taixuong\" >TẢI XUỐNG</a>" + "</td>";
                html_filedinhkem += "<td>" + "<a class=\"label label-danger a-file-xoa\">XÓA</a>" + "</td>";
                html_filedinhkem += "</tr>";
            })
            $("#table-filedinhkem tbody").append(html_filedinhkem);
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    });
}
//
function fncResetProcessBar() {
    $("#div-upload-process-bar").attr("style", "width:" + 0 + "%");
    $("#div-upload-process-bar").text(0 + "%");
}
//
function fncConvertOverSizeText(text) {
    if (text.length > 20) {
        text = text.substring(0, 10) + "..." + text.substring((text.length - 10), text.length);
    }
    return text;
}
//
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

function fncReturnTrangThaiGan(gui, xacnhan, chuyen, dk, ngay_thanhtoan, sohoadon) {
    html_trangthaicheckbox = "kehoach";
    if ($.inArray(gui, arr_date) == -1) {
        html_trangthaicheckbox = "dagui";
    }
    if ($.inArray(xacnhan, arr_date) == -1) {
        html_trangthaicheckbox = "xacnhan";
    }
    if ($.inArray(chuyen, arr_date) == -1) {
        if (sohoadon == "") {
            html_trangthaicheckbox = "dachuyen";
        } else {
            html_trangthaicheckbox = "xuathoadon";
        }
    }
    //console.log(hoanthanh);
    if ($.inArray(ngay_thanhtoan, arr_date) == -1) {
        html_trangthaicheckbox = "hoanthanh";
    }
    return html_trangthaicheckbox;
}

function fncReturnTrangThai(gui, xacnhan, chuyen, dk, ngay_thanhtoan, sohoadon) {
    //console.log(gui + " " + xacnhan + " " + chuyen + " " + dk + " " + ngay_thanhtoan);
    html_trangthai = "<span class=\"span-trangthai span-trangthai-kehoach\">Kế hoạch";
    if ($.inArray(gui, arr_date) == -1) {
        html_trangthai = "<span class=\"span-trangthai span-trangthai-gui\">Đã gửi";
    }
    if ($.inArray(xacnhan, arr_date) == -1) {
        html_trangthai = "<span class=\"span-trangthai span-trangthai-xacnhan\">Xác nhận";
    }
    if ($.inArray(chuyen, arr_date) == -1) {
        if (sohoadon == "") {
            html_trangthai = "<span class=\"span-trangthai span-trangthai-ketoan \">Đã chuyển";
        } else {
            html_trangthai = "<span class=\"span-trangthai span-trangthai-daxuathoadon \">Đã xuất HĐ";
        }
    }
    //console.log(hoanthanh);
    if ($.inArray(ngay_thanhtoan, arr_date) == -1) {
        html_trangthai = "<span class=\"span-trangthai span-trangthai-hoanthanh \">Hoàn thành";
    }
    var dinhkem_html = "";
    if (dk == "True") {
        //glyphicon glyphicon-paperclip
        dinhkem_html = "<i class=\"glyphicon glyphicon-paperclip i-dinhkem\" aria-hidden=\"true\"></i>";
    } else {
        dinhkem_html = "<i class=\"i-dinhkem\" aria-hidden=\"true\"></i>";
    }
    html_trangthai = html_trangthai + dinhkem_html + "</span>";
    return html_trangthai;
}

function fncTD_CongNo(old_thang, thang, giatri) {
    var html_return = "";

    for (var i = old_thang; old_thang < thang - 1; old_thang++) {
        html_return += "<td class=\"td-cn-thang\" thang=\"" + i + "\">" + "</td>";
    }
    var thangcss = "";
    if ((giatri != 0) && (monthnow - thang) >= 4) {
        thangcss = "background-color-red color-white";
    }
    if ((giatri != 0) && (monthnow - thang) >= 2 && (monthnow - thang) < 4) {
        thangcss = "background-color-yellow ";
    }
    if (old_thang != "12") {
        html_return += "<td class=\"td-cn-thang " + thangcss + "\">" + ((giatri != 0) ? numberWithCommas(giatri) : "") + "</td>";
    }

    return html_return;
}

function fncTD_ThongKe(loaithongke, old_thang, thang, giatri) {
    var html_return = "";

    for (var i = old_thang; old_thang < thang - 1; old_thang++) {
        html_return += "<td class=\"td-cn-thang\" thang=\"" + i + "\">" + "</td>";
    }
    var thangcss = "";
    if (loaithongke == "CN") {
        if ((giatri != 0) && (monthnow - thang) >= 4) {
            thangcss = "background-color-red color-white";
        }
        if ((giatri != 0) && (monthnow - thang) >= 2 && (monthnow - thang) < 4) {
            thangcss = "background-color-yellow ";
        }
    }

    if (old_thang != "12") {
        html_return += "<td class=\"td-cn-thang " + thangcss + "\">" + ((giatri != 0) ? numberWithCommas(giatri) : "") + "</td>";
    }

    return html_return;
}

// load modal thêm
function fncModalCopy(id_thanhtoan, loai_thanhtoan) {
    console.log(id_thanhtoan)
    console.log(loai_thanhtoan)
    $("#select-thanhtoan-loaihinh-modify").empty();
    if (loai_thanhtoan == "DT") {
        fncLoadSelectKHDT("KH");
        $(".doanhthu-hide").hide();
        $(".chiphi-hide").show();
        $("#h4-thanhtoan-view-tieude").text("THÊM DOANH THU");
        $("#span-thanhtoan-khachhang-modify").text("Khách hàng");
        $("#span-dathanhtoan-nguoi").text("Người TT");
        $("#select-thanhtoan-loaihinh-modify").append(html_loaihinh_doanhthu);
    }
    $(".input-thanhtoan-checkbox").prop("checked", false);
    $(".input-thanhtoan-clear").val("");
    $("#select-thanhtoan-thang-modify").val(dt.getMonth() + 1);
    $("#select-thanhtoan-nam-modify").val(dt.getFullYear());
    $(".input-thanhtoan-disable-first").attr("disabled", true);
    $("#div-thanhtoan-button-luu").empty()
        .append(html_modal_btn_them);
    $("#div-thanhtoan-button-chucnangkhac").empty();
    $("#table-filedinhkem tbody").empty();


    ajaxGet = { "get": id_thanhtoan };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "./ThanhToan.aspx/LoadDatawId",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            $("#select-thanhtoan-khachhang-modify").val(d[0].makh.trim());
            $("#select-thanhtoan-loaihinh-modify").val(d[0].loaihinh.trim());
            $("#select-thanhtoan-thang-modify").val(d[0].thang.trim());
            $("#select-thanhtoan-nam-modify").val(d[0].nam.trim());
            $("#input-thanhtoan-ky-modify").val(d[0].ky);
            $("#input-thanhtoan-ngaybdky-modify").val(convertDate(d[0].ngay_bd_ky)[1]);
            $("#input-thanhtoan-ngayktky-modify").val(convertDate(d[0].ngay_kt_ky)[1]);
        },
        error: function () {
        }
    }).done(function () {
        //$("#div-wait").hide();
    });

    $("#myModalViewThanhToan").attr("loai-thanhtoan", loai_thanhtoan);
    $("#myModalViewThanhToan").modal(
        {
            show: true,
            backdrop: "static",
            keyboard: false
        });
}
// end load modal them

function scrollScreen() {
    var button_table = document.querySelector("#div-button-table");
    var header_table = document.querySelector(".postionSticky");
    var lable_title = document.querySelector(".lable-title");
    var color_white = document.querySelectorAll(".color-white ");
    document.onscroll = function () {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop >= 300) {
            button_table.style.position = "sticky";
            button_table.style.top = "0";
            button_table.style.backgroundColor = "#fff03b";
            header_table.style.top = "30px";
            lable_title.style.color = "#3366CC";
            color_white.forEach(function (value) {
                value.style.color = "#3366CC";
            })
        } else {
            lable_title.style.color = "#fff";
            button_table.style.backgroundColor = "#04529a";
            header_table.style.top = "30px";
            color_white.forEach(function (value) {
                value.style.color = "#fff";
            })
        }
    }
}