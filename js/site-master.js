var k2016_thang;
var k2016_nam;
var k2016_ngay;
var k2016_thang_moc;
var k2016_ss_thang;
var k2016_ss_nam;
var k2016_ss_ngay;
var k2016_canam;
var dt = new Date();
jQuery(document).ready(function () {
    //const toast = Swal.fire.mixin({
    //    toast: true,
    //    position: 'bottom-start',
    //    showConfirmButton: false,
    //    timer: 3000
    //});
    ///
    k2016_thang = getParameterByName("Thang");
    k2016_nam = getParameterByName("Nam");
    k2016_ngay = getParameterByName("Ngay");

    k2016_ss_thang = dt.getMonth() + 1;
    k2016_ss_nam = dt.getFullYear();
    k2016_ss_ngay = dt.getDate();

    if (k2016_nam == "") {
        k2016_thang = k2016_ss_thang;
        k2016_nam = k2016_ss_nam;
        k2016_ngay = k2016_ss_ngay;
    }
    //if (k2016_thang == "13") {
    //    $("#k2016-cbx-canam").prop("checked", true);
    //}
    k2016_thang_moc = 12;
    for (var sl = 2016; sl <= dt.getFullYear(); sl++) {
        $("select#k2016-sl-chonnam").append("<option value=\"" + sl + "\">" + sl + "</option>");
    }
    for (var sl = 1; sl <= k2016_thang_moc; sl++) {
        $("select#k2016-sl-chonthang").append("<option value=\"" + sl + "\">" + sl + "</option>");
    }
    for (var sl = 1; sl <= 31; sl++) {
        $("select#k2016-sl-chonngay").append("<option value=\"" + sl + "\">" + sl + "</option>");
    }
    $("select#k2016-sl-chonnam").val(k2016_nam);
    $("select#k2016-sl-chonthang").val(k2016_thang);
    $("select#k2016-sl-chonngay").val(k2016_ngay);

    $("#div-changdate").on("change", "#k2016-sl-chonnam", function () {
        $("select#k2016-sl-chonthang option").remove();
        $("select#k2016-sl-tungay option").remove();
        $("select#k2016-sl-denngay option").remove();
        if ($(this).val() != dt.getFullYear()) {
            for (var sl = 1; sl <= 12; sl++) {
                $("select#k2016-sl-chonthang").append("<option value=\"" + sl + "\">" + sl + "</option>");
            }

            $("select#k2016-sl-chonthang").val(12);
        } else {
            for (var sl = 1; sl <= (dt.getMonth() + 1); sl++) {
                $("select#k2016-sl-chonthang").append("<option value=\"" + sl + "\">" + sl + "</option>");
            }

            $("select#k2016-sl-chonthang").val(dt.getMonth() + 1);
        }
    })
    $("#div-changdate").on("click", "#k2016-btn-doingay", function () {
        AddQueryString("Nam", $("#k2016-sl-chonnam option:selected").val());

        if ($("#k2016-cbx-canam").prop("checked") == true) {
            AddQueryString("Thang", "13");
        }
        else {
            AddQueryString("Thang", $("#k2016-sl-chonthang option:selected").val());
        }
        if ($("#k2016-cbx-theongay").prop("checked") == true) {
            AddQueryString("Ngay", $("#k2016-sl-chonngay option:selected").val());
        }
        else {
            AddQueryString("Ngay", "0");
        }
        return false;
        ;
    })

    $("#modalPhanQuyen").on("click", ".cb-phanquyen", function () {
        if ($(this).is(":checked") == true) {
            if ($(this).attr("PhanQuyenId") != "" && $(this).attr("PhanQuyenId") != undefined) {
                $(this).removeClass("cb-phanquyen-xoa");
            } else {
                $(this).addClass("cb-phanquyen-them");
            }
        } else {
            if ($(this).attr("PhanQuyenId") != "" && $(this).attr("PhanQuyenId") != undefined) {
                $(this).addClass("cb-phanquyen-xoa");
            } else {
                $(this).removeClass("cb-phanquyen-them");
            }
        }
    })

    $("#modalPhanQuyen").on("click", "#btn-phanquyen-luu", function () {
        var TaiKhoanId = $("#modalPhanQuyen").attr("TaiKhoanId");
        var NhomId = $("#modalPhanQuyen").attr("NhomId");
        var pqType = "nhomtaikhoan";
        if ((TaiKhoanId == "" && NhomId == "") || (TaiKhoanId != "" && NhomId != "")) {
        } else {
            //if()

            var IUPhanQuyenTaiKhoan = {
                pqType: pqType
                , pq: []
                , pqCapNhatNhomCon: $("#cb-phanquyen-nhomcon").prop("checked")
                , pqCapNhatTaiKhoan: $("#cb-phanquyen-taikhoan").prop("checked")
                , pqDongBoNhomCon: $("#cb-dongbo-nhomcon").prop("checked")
                , pqDongBoTaiKhoan: $("#cb-dongbo-taikhoan").prop("checked")
            };
            $(".cb-phanquyen-them").each(function () {
                IUPhanQuyenTaiKhoan.pq.push({
                    "Id": "",
                    "TaiKhoanId": NhomId,
                    "PhanQuyen": $(this).val(),
                })
            })
            $(".cb-phanquyen-xoa").each(function () {
                IUPhanQuyenTaiKhoan.pq.push({
                    "Id": $(this).attr("PhanQuyenId"),
                    "TaiKhoanId": NhomId,
                    "PhanQuyen": $(this).val(),
                })
            })
        }
        //console.log(IUPhanQuyenTaiKhoan);
        //console.log(IUPhanQuyenTaiKhoan.pq.length);
        if (IUPhanQuyenTaiKhoan.pq.length > 0) {
            //$("#div-wait").show();
            jsonData = JSON.stringify({ IUPhanQuyenTaiKhoan });
            $.ajax({
                type: "POST",
                url: "QuanLyPhanQuyen.aspx/IUPhanQuyen",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    Swal.fire(
                        'Đã phân quyền thành công!',
                        '',
                        'success'
                    )
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Dữ liệu chưa được tải. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                },
            }).done(function () {
                //$("#div-wait").hide();
                fncLoadPhanQuyen();
            });
        } else {
            Swal.fire(
                'Không có dữ liệu được cập nhật!',
                '',
                'info'
            )
        }
    })
    $('#modalPhanQuyen').on('shown.bs.modal', function () {
        fncLoadPhanQuyen();
    })
})

function fncLoadPhanQuyen() {
    ajaxGet2 = { "get1": $('#modalPhanQuyen').attr("NhomId"), "get2": $('#modalPhanQuyen').attr("TaiKhoanId") };
    jsonData = JSON.stringify({ ajaxGet2 });
    $(".cb-phanquyen").prop("checked", false);
    $(".cb-phanquyen").removeClass("cb-phanquyen-them");
    $(".cb-phanquyen").removeClass("cb-phanquyen-xoa");
    $(".cb-phanquyen").removeAttr("PhanQuyenId");
    //$("#div-wait").show();
    $.ajax({
        type: "POST",
        url: "QuanLyPhanQuyen.aspx/RePhanQuyenView",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            $.each(d, function (index, item) {
                $("#" + item.PhanQuyen).prop("checked", true);
                $("#" + item.PhanQuyen).attr("PhanQuyenId", item.Id);
            })
        },
        error: function () {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Dữ liệu chưa được tải. Thử lại hoặc liên hệ IT',
                'error'
            )
        },
    }).done(function () {
        //$("#div-wait").hide();
    });
}
///
$(function () {
    $(".datepicker").datepicker({
        showWeek: true,
        firstDay: 1,
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd/mm/yy',
    });
    $('.KdataTables').DataTable({
        "responsive": true,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "iDisplayLength": -1,
    });
    $('.timepicker').timepicker(
        { 'timeFormat': 'H:i:s', 'scrollDefault': 'now' }
    );
})
function ShowPopupx(href, callBack) {
    if (callBack != undefined)
        OpenPopup(href, callBack);
    else
        OpenPopup(href, CallBackClosePopup);
}

function OpenPopup(href, callBack) {
    $.magnificPopup.open({
        items: {
            src: href,
            type: 'iframe',
        },
        callbacks: {
            open: function () {
                // Will fire when this exact popup is opened
                // this - is Magnific Popup object
                $.magnificPopup.instance.close = function (returnValue) {
                    callBack(returnValue);
                    $.magnificPopup.proto.close.call(this);
                }
            }
            // e.t.c.
        }
    });
}

function ClosePopup() {
    //alert("you are closed popup by function ClosePopup()");
    window.parent.$.magnificPopup.instance.close();
}

function CallBackClosePopup(returnValue) {
    //alert("you are closed popup by function CallBackClosePopup() - Default");
    self.location.reload();
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function dmy2ymd(dmy) {
    var ymd;
    if (dmy != null && $.trim(dmy) != "") {
        ymd = dmy.split("/")[2] + "/" + dmy.split("/")[1] + "/" + dmy.split("/")[0];
    } else {
        ymd = "";
    }

    return ymd;
}

function dmy2ymd4(dmy) {
    var ymd;
    if (dmy != null && $.trim(dmy) != "") {
        ymd = dmy.split("/")[2] + "-" + dmy.split("/")[1] + "-" + dmy.split("/")[0];
    } else {
        ymd = "";
    }

    return ymd;
}

function ymd2dmy(ymd) {
    var dmy;
    if (ymd != null && $.trim(ymd) != "") {
        dmy = ymd.split("/")[2] + "/" + ymd.split("/")[1] + "/" + ymd.split("/")[0];
    } else {
        dmy = "";
    }

    return dmy;
}

function dmyhhsstoymdhhss(dmy) {
    var ymd;
    var hhss;
    if (dmy != null && $.trim(dmy) != "") {
        hhss = dmy.split(" ")[1];

        ymd = dmy.split(" ")[0].split("/")[2] + "-" + dmy.split(" ")[0].split("/")[1] + "-" + dmy.split(" ")[0].split("/")[0] + " " + hhss;
    } else {
        ymd = "";
    }

    return ymd;
}

function dmy2ymd1(dmy) {
    var ymd;
    if (dmy != null && $.trim(dmy) != "") {
        ymd = dmy.split("-")[2] + "/" + dmy.split("-")[1] + "/" + dmy.split("-")[0];
    } else {
        ymd = "";
    }

    return ymd;
}
function fncConvertExcelDate(date) {
    var sdate = String(date);
    if (sdate != "") {
        if (sdate.split("/").length > 1) {
            sdate = dmy2ymd(sdate);
        }else if (sdate.split("-").length > 1){
            sdate = dmy2ymd1(sdate);
        } else {
            var cdate = new Date(Math.round((date - 25569) * 86400 * 1000));
            sdate = cdate.getFullYear() + "/" + convert2chuso(cdate.getDate()) + "/" + convert2chuso(cdate.getMonth() + 1);
        }
    }

    return sdate;
}
function fncConvertDecimalTime(time) {
    var timeoutput = "";
    if (time != "" && time < 1 && time >= 0) {
        timeoutput = Decimal2Time(time * 24);
    }

    return timeoutput;
}
function fncConvertStringtoZero(_string) {
    var StringOrZero = _string;
    if (_string == "") {
        StringOrZero = "0";
    }
    return StringOrZero;
}
function numberTextWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // ví dụ: var x = "1234567" => numberTextWithCommas(x) = "1,234,567"
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // ví dụ: var x = 1234567 => numberTextWithCommas(x) = "1,234,567"
}
function addDateTime(date, days, hours, minutes, seconds, milliseconds) {
    var result = new Date(date);
    result.setDate(date.getDate() + days);
    result.setHours(hours, minutes, seconds, milliseconds)
    return result;
    // input ngày vào + thêm số ngày, giờ, phút, giây, ms giây
}
function convertDate(date) {
    var returnDate = [];
    var arr_date = [""," ", "01/01/1900 12:00:00 AM", "1/1/1900 12:00:00 AM", "01/01/1900 00:00:00", "01/01/1900 00:00", "1/1/1900 00:00:00"];
    if ($.inArray(date, arr_date) == -1) {
        var cD = new Date(date);
        returnDate[0] = cD.getFullYear() + "/" + convert2chuso(cD.getMonth() + 1) + "/" + convert2chuso(cD.getDate());
        returnDate[1] = convert2chuso(cD.getDate()) + "/" + convert2chuso(cD.getMonth() + 1) + "/" + cD.getFullYear();
        returnDate[2] = convert2chuso(cD.getDate()) + "/" + convert2chuso(cD.getMonth() + 1) + " " + convert2chuso(cD.getHours()) + ":" + convert2chuso(cD.getMinutes());
        returnDate[3] = convert2chuso(cD.getHours()) + ":" + convert2chuso(cD.getMinutes());
        returnDate[4] = convert2chuso(cD.getDate()) + "/" + convert2chuso(cD.getMonth() + 1);
        returnDate[5] = convert2chuso(cD.getDate()) + "/" + convert2chuso(cD.getMonth() + 1) + "/" + cD.getFullYear() + " " + convert2chuso(cD.getHours()) + ":" + convert2chuso(cD.getMinutes());
        returnDate[6] = cD.getFullYear() + "" + convert2chuso(cD.getMonth() + 1) + "" + convert2chuso(cD.getDate());
        returnDate[7] = convert2chuso(cD.getDate()) + "-" + convert2chuso(cD.getMonth() + 1) + "-" + cD.getFullYear();
        returnDate[8] = convert2chuso(cD.getDate()) + "_" + convert2chuso(cD.getMonth() + 1) + "_" + cD.getFullYear();
        returnDate[9] = convert2chuso(cD.getDate()) + "/" + convert2chuso(cD.getMonth() + 1) + "/" + cD.getFullYear().toString().substr(-2);
        returnDate[10] = convert2chuso(cD.getMonth() + 1) + "/" + convert2chuso(cD.getDate()) + "/" + cD.getFullYear();
    } else {
        returnDate = ["", "", "", "", "", "", "", "", "", ""];
    }

    return returnDate;

    // [0] : yyyy/MM/dd
    // [1] : dd/MM/yyyy
    // [2] : dd/MM hh:mm
}
///
///
function fncDiff2Date(startdate, enddate) {
    /// <summary>
    /// Tính toán số ngày chênh lệch giữa 2 ngày bằng moment js
    /// Định dạng ngày của statdate và enddate là yyyy/MM/dd
    /// </summary>
    /// <param name="statdate" type="Date">Ngày bắt đầu</param>
    /// <param name="enddate">Ngày kết thúc</param>

    var momentStartDate = moment(startdate);
    var momentEndDate = moment(enddate);
    var duration = moment.duration(momentEndDate.diff(momentStartDate));
    var days = duration.asDays();
    return days;
}
function fncDiff2Hour(startdate, enddate) {
    /// <summary>
    /// Tính toán số ngày chênh lệch giữa 2 ngày bằng moment js
    /// Định dạng ngày của statdate và enddate là yyyy/MM/dd
    /// </summary>
    /// <param name="statdate" type="Date">Ngày bắt đầu</param>
    /// <param name="enddate">Ngày kết thúc</param>

    var momentStartDate = moment(startdate);
    var momentEndDate = moment(enddate);
    var duration = moment.duration(momentEndDate.diff(momentStartDate));
    var hours = duration.asHours();
    return hours;
}
function fncDiff2Time(startdate, enddate) {
    /// <summary>
    /// Tính toán số ngày chênh lệch giữa 2 ngày bằng moment js
    /// Định dạng ngày của statdate và enddate là yyyy/MM/dd
    /// </summary>
    /// <param name="statdate" type="Date">Ngày bắt đầu</param>
    /// <param name="enddate">Ngày kết thúc</param>

    var momentStartDate = moment(startdate);
    var momentEndDate = moment(enddate);
    var duration = moment.duration(momentEndDate.diff(momentStartDate));
    var rtime = "";
    rtime += (duration.days() != 0 ? duration.days().toString() + "d" : "");
    rtime += (duration.hours() != 0 ? duration.hours().toString() + "h" : "");
    rtime += (duration.minutes() != 0 ? duration.minutes().toString() + "m" : "");

    return rtime;
}
function convert2chuso(num) {
    var reNum = "";
    if (num < 10) {
        reNum = "0" + num.toString();
    }
    else {
        reNum = num.toString();
    }

    return reNum;
}

function convertJsonDateToddmmyyyy(json, field) {
    for (var k = 0; k < json.length; ++k) {
        json[k][field] = convertDate(json[k][field])[1];
    }
    return json;
}

function Decimal2Time(decimal) {
    var sign = decimal < 0 ? "-" : "";
    var min = Math.floor(Math.abs(decimal));
    var sec = Math.floor((Math.abs(decimal) * 60) % 60);
    return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;

    //minTommss(3.5)        // "03:30"
    //minTommss(-3.5)       // "-03:30"
    //minTommss(36.125)     // "36:07"
    //minTommss(-9999.999)  // "-9999:59"
}
function fncNull2EmptyString(value) {
    if (value) {
        return value;
    } else {
        return "";
    }
}
jQuery.fn.dataTable.Api.register('sumAfterSearch()', function () {
    return this.flatten().reduce(function (a, b) {
        return (a * 1) + (b * 1); // cast values in-case they are strings
    });
});

/*uc-thông báo UC/ThongBao.ascx*/
(function ($) {
    $.fn.list_ticker = function (options) {
        var defaults = {
            speed: 4000,
            effect: 'slide'
        };

        var options = $.extend(defaults, options);

        return this.each(function () {
            var obj = $(this);
            var list = obj.children();
            list.not(':first').hide();

            setInterval(function () {
                list = obj.children();
                list.not(':first').hide();

                var first_li = list.eq(0)
                var second_li = list.eq(1)

                if (options.effect == 'slide') {
                    first_li.slideUp();
                    second_li.slideDown(function () {
                        first_li.remove().appendTo(obj);
                    });
                } else if (options.effect == 'fade') {
                    first_li.fadeOut(function () {
                        second_li.fadeIn();
                        first_li.remove().appendTo(obj);
                    });
                }
            }, options.speed)
        });
    };
})(jQuery);

/*END uc-thông báo UC/ThongBao.ascx*/

function fncScrollUp(scrollId) {
    $("html,body").animate({ scrollTop: $(scrollId).offset().top - $("html,body").offset().top, scrollLeft: 0 }, 1000);
}
function fncReplaceKyTuDacBiet(chuoi) {
    if (chuoi !== undefined) {
        chuoi = chuoi.toLowerCase();
        chuoi = chuoi.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        chuoi = chuoi.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        chuoi = chuoi.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        chuoi = chuoi.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        chuoi = chuoi.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        chuoi = chuoi.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        chuoi = chuoi.replace(/đ/g, "d");
        chuoi = chuoi.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
        chuoi = chuoi.replace(/ + /g, " ");
        chuoi = chuoi.trim();
        chuoi = chuoi.replace(/ /g, "");
    } else {
        chuoi = "";
    }

    return chuoi;
}
function fncRongTraVeZero(rong) {
    if (rong.trim() == "") {
        rong = "0"
    }
    return rong;
}
function fncZeroTraVeRong(zero) {
    if (zero.trim() == "0") {
        zero = ""
    }
    return zero;
}
// Hàm thêm dấu phẩy khi gõ phần nghìn
function FormatCurrency(ctrl) {
    //Check if arrow keys are pressed - we want to allow navigation around textbox using arrow keys
    if (event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
        return;
    }

    var val = ctrl.value;
    ctrl.value = "";
    ctrl.value = fncTachPhanNghin(val);
}
function fncTachPhanNghin(val) {
    val = String(val).replace(/,/g, "");
    val += '';
    x = val.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';

    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
function CheckNumeric() {
    return event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 46;
}
// Hàm thêm dấu phẩy khi gõ phần nghìn
// Hàm đóng băng header
function fncScrollFixed(table_id, header, column_number) {
    table_id = "#" + table_id;
    var tableOffsetTop = $(table_id).offset().top;
    var tableOffsetLeft = $(table_id).offset().left;
    if (header == 1) { // fix thead
        var html_headerFixed = " <table class=\"table table-bordered\" id=\"header-fixed" + "\"></table>";
        $(table_id).after(html_headerFixed);

        var offset;
        var $HeaderFixed = $("#header-fixed");
        var $thead_tr = $("<tr></tr>");
        var $thead_td;
        var $thead_clone = $("<thead></thead>");
        $.each($(table_id).find("thead tr"), function () {
            $thead_tr.empty();

            $.each($(this).find("td"), function () {
                $thead_td = $(this).clone();
                $thead_td.attr("style", "width: " +$(this).width() + "px");

                $thead_tr.append($thead_td);
            })
            $thead_clone.append($thead_tr);
        })
        //console.log($thead_clone);
        $thead_clone.appendTo($HeaderFixed);
        $(window).bind("scroll", function () {
            offset = $(this).scrollTop();
            if (offset >= tableOffsetTop && $HeaderFixed.is(":hidden")) {
                $HeaderFixed.show();
            }
            else if (offset < tableOffsetTop) {
                $HeaderFixed.hide();
            }
            $HeaderFixed.offset({
                left: tableOffsetLeft
            });
        });
    }
    if (column_number > 0) {
        var html_ColumnFixed = " <table class=\"table table-bordered\" id=\"column-fixed\"><tbody></tbody></table>";
        $(table_id).after(html_ColumnFixed);
        var $ColumnFixed = $("#column-fixed");
        $(table_id).find("tbody tr").each(function () {
            var $tds = $(this).children(),
                $row = $("<tr></tr>");
            for (i = 0; i < column_number; i++) {
                $row.append($tds.eq(i).clone());
            }
            $ColumnFixed.find("tbody").append($row);
        })

        $(window).bind("scroll", function () {
            offset = $(this).scrollLeft();
            if (offset >= tableOffsetLeft && $ColumnFixed.is(":hidden")) {
                $ColumnFixed.show();
            }
            else if (offset < tableOffsetLeft) {
                $ColumnFixed.hide();
            }
            $ColumnFixed.offset({
                top: tableOffsetTop
            });
        });
    }
}
// Loại bỏ dấu \n xuống dòng
function returnSplit(input) {
    const result = input.split(/\n/);
    return result
}

// không mã hóa kí tự đặc biệt trong js Convert special characters to HTML in JavaScript
function notspecialcharacters(input) {
    var result = "";
    if (input != "") {
        result = input.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    }
    return result;
}