var interval;
var minutes = 4;
var seconds = 59;
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

    var currentDate = new Date();
    var ydate = new Date((new Date()).valueOf() - 1000 * 3600 * 24);
    var phut = currentDate.getMinutes();
    var gio = currentDate.getHours();
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
    var gydate = ydate.getDate();
    if (gydate < 10) {
        gydate = "0" + gydate;
    }

    var date = (currentDate.getMonth() + 1) + "" + gdate + "" + gio + "" + phut;
    var thanghaiso = currentDate.getMonth() + 1;
    if (thanghaiso < 10) {

        var thanghaiso = "0" + thanghaiso;
    }
    //var dttd = currentDate.getFullYear() + "" + (currentDate.getMonth() + 1) + "" + gdate + "" + gio + "" + phut;
    var dttd = currentDate.getFullYear() + "" + thanghaiso + "" + gdate + "" + gio + "" + phut;

    var dtkg = currentDate.getFullYear() + "" + thanghaiso + "" + gdate + "0000";
    var dt15 = currentDate.getFullYear() + "" + thanghaiso + "" + gdate + "1500";
    var dt17 = currentDate.getFullYear() + "" + thanghaiso + "" + gdate + "1700";
    var ngayhientai = gdate + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();
    var ngayhomqua = gydate + "/" + (ydate.getMonth() + 1) + "/" + ydate.getFullYear();

    function tachngaygio(ngay, gio) {
        var ngaycv = ngay.substring(6, 10) + "" + ngay.substring(3, 5) + "" + ngay.substring(0, 2);
        var giovc = gio.replace(":", "");
        var ngaygiocv = parseFloat(ngaycv + "" + giovc);
        return ngaygiocv;

    }
    // END
    //-------------------------//
    // Tô màu arriva notice
    $(".arrivalnotice tr.dxgvDataRow_Aqua").each(function () {
        var fltdate = $(this).find('.fltdate').text();
        var flttime = $(this).find('.flttime').text();

        var flt = new Date(fltdate.substring(6, 10), fltdate.substring(3, 5) - 1, fltdate.substring(0, 2), (flttime.split(":"))[0], (flttime.split(":"))[1]);
        var tmdate = new Date();
        tmdate.setDate(tmdate.getDate() + 1);
        tmdate.setHours(14, 0, 0, 0000);

        if (flt >= currentDate && flt <= tmdate) {
            $(this).find('.mawban').css('background-color', '#78C6FA');
        }
        if (flt < currentDate) {
            $(this).find('.fltdate').css('background-color', '#78C6FA');
            $(this).find('.flttime').css('background-color', '#78C6FA');
        }
        var orderdate = $(this).find('.ngayyctrahang').text();
        //console.log(orderdate);
        var ordertime = $(this).find('.gioyctrahang').text();
        var orderdt = new Date(orderdate.substring(6, 10), (orderdate.substring(3, 5) - 1), orderdate.substring(0, 2), (ordertime.split(":"))[0], (ordertime.split(":"))[1]);
        var hieudtgiaobayttdt = 0;
        var hieudtgiaobayttdt = (orderdt - flt) / 3600000;
        //console.log('orderdt: ' + orderdt + ' flt: ' + flt + ' ' + hieudtgiaobayttdt);
        if (orderdate.trim() != "" && hieudtgiaobayttdt <= 11) {

            $(this).find('.ngayyctrahang').css('background-color', 'rgba(39, 233, 39, 0.53)');
            $(this).find('.gioyctrahang').css('background-color', 'rgba(39, 233, 39, 0.53)');
        }
    })
    //END Tô màu arriva notice
    //-------------------------//
    // Tô màu delyvery plan
    $(".delyveryplan tr.dxgvDataRow_Aqua").each(function () {
        var fltdate = $(this).find('.fltdate').text();
        var flttime = $(this).find('.flttime').text();

        var flt = new Date(fltdate.substring(6, 10), fltdate.substring(3, 5) - 1, fltdate.substring(0, 2), (flttime.split(":"))[0], (flttime.split(":"))[1]);
        if (flt < currentDate) {
            $(this).find('.fltdate').css('background-color', '#78C6FA');
            $(this).find('.flttime').css('background-color', '#78C6FA');
        }
        var orderdate = $(this).find('.ngayyctrahang').text();
        var ordertime = $(this).find('.gioyctrahang').text();
        var orderdt = new Date(orderdate.substring(6, 10), (orderdate.substring(3, 5) - 1), orderdate.substring(0, 2), (ordertime.split(":"))[0], (ordertime.split(":"))[1]);
        var hieuorder = (orderdt - currentDate) / 3600000;

        if (orderdate.trim() != "" && ordertime.trim() != ":") {
            if (hieuorder >= 0 && hieuorder <= 1.5) {
                $(this).find('.ngayyctrahang').css('background-color', 'red');
                $(this).find('.gioyctrahang').css('background-color', 'red');
            } else if ((hieuorder > 1.5) && hieuorder <= 4.5) {
                $(this).find('.ngayyctrahang').css('background-color', 'yellow');
                $(this).find('.gioyctrahang').css('background-color', 'yellow');
            }
        }
        var giogiao = $(this).find('.stattime').text();
        var ngaygiao = $(this).find('.statdate').text();
        var dtgiao = new Date(ngaygiao.substring(6, 10), ngaygiao.substring(3, 5) - 1, ngaygiao.substring(0, 2), (giogiao.split(":"))[0], (giogiao.split(":"))[1]);

        var ngaybaytt = $(this).find('.ngaybaytt').text();
        var giobaytt = $(this).find('.giobaytt').text();
        var bayttdt = new Date(ngaybaytt.substring(6, 10), (ngaybaytt.substring(3, 5) - 1), ngaybaytt.substring(0, 2), (giobaytt.split(":"))[0], (giobaytt.split(":"))[1]);
        var hieudtgiaobayttdt = 0;
        if (ngaygiao.trim() != "") {
            var hieudtgiaobayttdt = (dtgiao - flt) / 3600000;

        } else {
            var hieudtgiaobayttdt = (orderdt - flt) / 3600000;

        }
        var somawb = $(this).find('.somawb').text();
        //console.log(somawb+" "+hieudtgiaobayttdt);
        if (hieudtgiaobayttdt <= 11) {
            //$(this).find('.ngaybaytt').css('background-color', '#78C6FA');
            //$(this).find('.giobaytt').css('background-color', '#78C6FA');
            if (orderdate.trim() != "") {
                $(this).find('.ngayyctrahang').css('background-color', 'rgba(39, 233, 39, 0.53)');
                $(this).find('.gioyctrahang').css('background-color', 'rgba(39, 233, 39, 0.53)');
            }

        }
        $("#MainContent_ASPxGridView5_col22").remove();
        $("#MainContent_ASPxGridView5_col23").remove();
        $("#MainContent_ASPxGridView5_col24").remove();
        $("#MainContent_ASPxGridView5_col25").remove();
        $(this).find('.statdate').remove();
        $(this).find('.stattime').remove();
        $(this).find('.ngaybaytt').remove();
        $(this).find('.giobaytt').remove();
    });
    //END Tô màu delyvery plan
    //-------------------------//
    // Tô màu trucking alse
    $(".truckingalse tr.dxgvDataRow_Aqua").each(function () {

        $("#MainContent_ASPxGridView7_col25").remove();
        $("#MainContent_ASPxGridView7_col26").remove();
        $("#MainContent_ASPxGridView7_col27").remove();
        $("#MainContent_ASPxGridView7_col28").remove();
        $(this).find('.statdate').remove();
        $(this).find('.stattime').remove();
        $(this).find('.ngaybaytt').remove();
        $(this).find('.giobaytt').remove();
    })
    // END Tô màu trucking alse
    //-------------------------//
    //Tô màu alse warehouse
    $(".alsewarehouse tr.dxgvDataRow_Aqua").each(function () {

        var orderdate = $(this).find('.ngayyctrahang').text();
        var ordertime = $(this).find('.gioyctrahang').text();
        var orderdt = new Date(orderdate.substring(6, 10), (orderdate.substring(3, 5) - 1), orderdate.substring(0, 2), (ordertime.split(":"))[0], (ordertime.split(":"))[1]);
        var hieuorder = (orderdt - currentDate) / 3600000;

        if (orderdate.trim() != "" && ordertime.trim() != ":") {
            if (hieuorder <= 0) {
                $(this).find('.ngayyctrahang').css('background-color', 'red');
                $(this).find('.gioyctrahang').css('background-color', 'red');
            } else if ((hieuorder > 0) && hieuorder <= 3) {
                $(this).find('.ngayyctrahang').css('background-color', 'yellow');
                $(this).find('.gioyctrahang').css('background-color', 'yellow');
            }
        }
        var giogiao = $(this).find('.stattime').text();
        var ngaygiao = $(this).find('.statdate').text();
        var dtgiao = new Date(ngaygiao.substring(6, 10), ngaygiao.substring(3, 5) - 1, ngaygiao.substring(0, 2), (giogiao.split(":"))[0], (giogiao.split(":"))[1]);

        var ngaybaytt = $(this).find('.ngaybaytt').text();
        var giobaytt = $(this).find('.giobaytt').text();
        var bayttdt = new Date(ngaybaytt.substring(6, 10), (ngaybaytt.substring(3, 5) - 1), ngaybaytt.substring(0, 2), (giobaytt.split(":"))[0], (giobaytt.split(":"))[1]);

        if (ngaygiao.trim() != "") {
            var hieudtgiaobayttdt = (dtgiao - bayttdt) / 3600000;

        } else {
            var hieudtgiaobayttdt = (orderdt - bayttdt) / 3600000;

        }
        if (hieudtgiaobayttdt <= 11) {
            //$(this).find('.ngaybaytt').css('background-color', '#78C6FA');
            //$(this).find('.giobaytt').css('background-color', '#78C6FA');
            $(this).find('.ngayyctrahang').css('background-color', 'rgba(39, 233, 39, 0.53)');
            $(this).find('.gioyctrahang').css('background-color', 'rgba(39, 233, 39, 0.53)');
        }
        $("#MainContent_ASPxGridView1_col19").remove();
        $("#MainContent_ASPxGridView1_col20").remove();
        $(this).find('.statdate').remove();
        $(this).find('.stattime').remove();
        //
        $(this).find(".timein").text($(this).find(".timein").text().replace("-", ":"));

        //
    });
    //END Tô màu alse warehouse
    //-------------------------//
    //Tô màu clear custom
    $(".clearcustom tr.dxgvDataRow_Aqua").each(function () {

        var orderdate = $(this).find('.ngayyctrahang').text();
        var ordertime = $(this).find('.gioyctrahang').text();
        var orderdt = new Date(orderdate.substring(6, 10), (orderdate.substring(3, 5) - 1), orderdate.substring(0, 2), (ordertime.split(":"))[0], (ordertime.split(":"))[1]);
        var hieuorder = (orderdt - currentDate) / 3600000;

        if (orderdate.trim() != "" && ordertime.trim() != ":") {
            if (hieuorder < 0) {
                $(this).find('.ngayyctrahang').css('background-color', 'red');
                $(this).find('.gioyctrahang').css('background-color', 'red');
            } else if ((hieuorder >= 0) && hieuorder <= 3) {
                $(this).find('.ngayyctrahang').css('background-color', 'yellow');
                $(this).find('.gioyctrahang').css('background-color', 'yellow');
            }
        }
        var giogiao = $(this).find('.stattime').text();
        var ngaygiao = $(this).find('.statdate').text();
        var dtgiao = new Date(ngaygiao.substring(6, 10), ngaygiao.substring(3, 5) - 1, ngaygiao.substring(0, 2), (giogiao.split(":"))[0], (giogiao.split(":"))[1]);

        var ngaybaytt = $(this).find('.ngaybaytt').text();
        var giobaytt = $(this).find('.giobaytt').text();
        var bayttdt = new Date(ngaybaytt.substring(6, 10), (ngaybaytt.substring(3, 5) - 1), ngaybaytt.substring(0, 2), (giobaytt.split(":"))[0], (giobaytt.split(":"))[1]);
        var somawb = $(this).find('.somawb').text();

        //console.log(ngaygiao + " " + giogiao);
        if (ngaygiao.trim() != "") {
            var hieudtgiaobayttdt = (dtgiao - bayttdt) / 3600000;

        } else {
            var hieudtgiaobayttdt = (orderdt - bayttdt) / 3600000;

        }

        if (hieudtgiaobayttdt <= 11) {
            //$(this).find('.ngaybaytt').css('background-color', '#78C6FA');
            //$(this).find('.giobaytt').css('background-color', '#78C6FA');
            $(this).find('.ngayyctrahang').css('background-color', 'rgba(39, 233, 39, 0.53)');
            $(this).find('.gioyctrahang').css('background-color', 'rgba(39, 233, 39, 0.53)');
        }
        $("#MainContent_ASPxGridView2_col19").remove();
        $("#MainContent_ASPxGridView2_col20").remove();
        $(this).find('.statdate').remove();
        $(this).find('.stattime').remove();
    });
    //END Tô màu clear custom
    //-------------------------//
    //Tô màu delyvering
    $(".delyvering tr.dxgvDataRow_Aqua").each(function () {
        var statdate = $(this).find('.statdate').text();
        var stattime = $(this).find('.stattime').text();

        var statdt = new Date(statdate.substring(6, 10), statdate.substring(3, 5) - 1, statdate.substring(0, 2), (stattime.split(":"))[0], (stattime.split(":"))[1]);

        var orderdate = $(this).find('.ngayyctrahang').text();
        var ordertime = $(this).find('.gioyctrahang').text();
        var orderdt = new Date(orderdate.substring(6, 10), (orderdate.substring(3, 5) - 1), orderdate.substring(0, 2), (ordertime.split(":"))[0], (ordertime.split(":"))[1]);
        var hieuorder = (statdt - orderdt) / 3600000;
        if (orderdate.trim() != "" && ordertime.trim() != ":") {
            if (hieuorder > 0) {
                $(this).find('.ngayyctrahang').css('background-color', 'red');
                $(this).find('.gioyctrahang').css('background-color', 'red');
            }
        }
        var giogiao = $(this).find('.stattime').text();
        var ngaygiao = $(this).find('.statdate').text();
        var dtgiao = new Date(ngaygiao.substring(6, 10), ngaygiao.substring(3, 5) - 1, ngaygiao.substring(0, 2), (giogiao.split(":"))[0], (giogiao.split(":"))[1]);

        var ngaybaytt = $(this).find('.ngaybaytt').text();
        var giobaytt = $(this).find('.giobaytt').text();
        var bayttdt = new Date(ngaybaytt.substring(6, 10), (ngaybaytt.substring(3, 5) - 1), ngaybaytt.substring(0, 2), (giobaytt.split(":"))[0], (giobaytt.split(":"))[1]);
        var hieudtgiaobayttdt = (dtgiao - bayttdt) / 3600000;
        var somawb = $(this).find('.somawb').text();

        if (hieudtgiaobayttdt <= 11) {
            //$(this).find('.ngaybaytt').css('background-color', '#78C6FA');
            //$(this).find('.giobaytt').css('background-color', '#78C6FA');
            $(this).find('.ngayyctrahang').css('background-color', 'rgba(39, 233, 39, 0.53)');
            $(this).find('.gioyctrahang').css('background-color', 'rgba(39, 233, 39, 0.53)');
        }
        //$("#MainContent_ASPxGridView3_col7").remove();
        //$("#MainContent_ASPxGridView3_col8").remove();
        //$(this).find('.statdate').remove();
        //$(this).find('.stattime').remove();
    });
    //END Tô màu delyvering
    //-------------------------//
    //Tô màu complete
    $(".complete tr.dxgvDataRow_Aqua").each(function () {
        var ngaygiaoxong = $(this).find('.ngaygiaoxong').text();
        var giogiaoxong = $(this).find('.giogiaoxong').text();

        var giogiao = $(this).find('.stattime').text();
        var ngaygiao = $(this).find('.statdate').text();

        var ngayyctrahang = $(this).find('.ngayyctrahang').text();
        var gioyctrahang = $(this).find('.gioyctrahang').text();

        var dtgiaoxong = new Date(ngaygiaoxong.substring(6, 10), ngaygiaoxong.substring(3, 5) - 1, ngaygiaoxong.substring(0, 2), (giogiaoxong.split(":"))[0], (giogiaoxong.split(":"))[1]);
        var dtgiao = new Date(ngaygiao.substring(6, 10), ngaygiao.substring(3, 5) - 1, ngaygiao.substring(0, 2), (giogiao.split(":"))[0], (giogiao.split(":"))[1]);
        var dtyctrahang = new Date(ngayyctrahang.substring(6, 10), ngayyctrahang.substring(3, 5) - 1, ngayyctrahang.substring(0, 2), (gioyctrahang.split(":"))[0], (gioyctrahang.split(":"))[1]);
        //console.log(dtyctrahang);
        var ngaybaytt = $(this).find('.ngaybaytt').text();
        var giobaytt = $(this).find('.giobaytt').text();
        var bayttdt = new Date(ngaybaytt.substring(6, 10), (ngaybaytt.substring(3, 5) - 1), ngaybaytt.substring(0, 2), (giobaytt.split(":"))[0], (giobaytt.split(":"))[1]);

        var hieuorder = ((dtgiaoxong - bayttdt) / 3600000);

        //console.log(hieuorder);
        if (hieuorder > 24) {
            $(this).find('.ngaygiaoxong').css('background-color', 'pink');
            $(this).find('.giogiaoxong').css('background-color', 'pink');
        }
        //console.log(dtyctrahang - dtgiao);
        if ((dtyctrahang - dtgiao) < 0) {
            $(this).find('.ngayyctrahang').css('background-color', 'pink');
            $(this).find('.gioyctrahang').css('background-color', 'pink');
        }
        var hieudtgiaobayttdt = (dtgiao - bayttdt) / 3600000;
        //console.log("giobatdau: " + dtgiao + "  giobay: " + bayttdt);
        if (hieudtgiaobayttdt <= 11) {
            //$(this).find('.ngaybaytt').css('background-color', '#78C6FA');
            //$(this).find('.giobaytt').css('background-color', '#78C6FA');
            $(this).find('.ngayyctrahang').css('background-color', 'rgba(39, 233, 39, 0.53)');
            $(this).find('.gioyctrahang').css('background-color', 'rgba(39, 233, 39, 0.53)');
        }
        $("#MainContent_ASPxGridView4_col19").remove();
        $("#MainContent_ASPxGridView4_col20").remove();

        $(this).find('.statdate').remove();
        $(this).find('.stattime').remove();
    });
    //END Tô màu complete
    //-------------------------//
});
function gomngaythang(dttt) {
    var yy = dttt.getFullYear();
    var mm = dttt.getMonth();
    var dd = dttt.getDate();
    //console.log(dd);
    var hh = dttt.getHours();
    var mi = dttt.getMinutes();
    if (mm < 10) {
        mm = "0" + mm;
    }
    if (dd < 10) {
        dd = "0" + dd;
    }
    if (hh < 10) {
        hh = "0" + hh;
    }
    if (mi < 10) {
        mi = "0" + mi;
    }
    var cvflt = yy + "" + mm + "" + dd + "" + hh + "" + mi;
    return cvflt;
}