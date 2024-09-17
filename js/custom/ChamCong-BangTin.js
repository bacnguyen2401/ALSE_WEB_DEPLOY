var jsonData;
var ajaxGet;
var html_body;
var html_body_dau;
var html_body_giovao;
var html_body_giora;
var html_body_td;
var tennhanvien;
var loaichamcongvao;
var loaichamcongra;
var html_body_tr_cuoi;
var demso = 0;
var giovao;
var giora;
var html_tong_thoigian = "";
var arrayTongThoiGian = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var dateTimeNow = "";
var hoursDay;
var hoursMinutesDay;
var dateNowFormat;
var arrDiaDiem = [];
var arrGhiChu = [];


$(document).ready(function () {
    $("#input-start-date").val(moment().format("DD/MM/YYYY"));
    fncLoad();
    fncClick();
    fncChange();
});

function fncLoad() {
    loadTable(dmy2ymd($("#input-start-date").val()));
}

function fncClick() {
    $("#btn-loc").click(function () {
        loadTable(dmy2ymd($("#input-start-date").val()));
    })
}

function fncChange() {
    $("#sl-diadiem").on("change", function () {
        if ($(this).val() == "ALL") {
            $(".tr-cc-view").show();
        } else {
            $(".tr-cc-view").hide();
            $(".cc-" + $(this).val() + "").show();
        }
    })
}

function loadTable(input) {
    ajaxGet = { "get": input };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "BangTin.aspx/ReDanhSachChamCong",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            console.log(d)
            html_body = "";
            html_body_dau = "";
            html_body_giovao = "";
            html_body_giora = "";
            html_body_td = "";
            html_body_tr_cuoi = "";

            tennhanvien = "";
            loaichamcong = "";
            loaichamcongvao = "";
            loaichamcongra = "";
            giovao = "";
            giora = "";
            html_tong_thoigian = "";
            demso = 1;
            arrayTongThoiGian = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

            dateTimeNow = new Date();
            dateNowFormat = moment(dateTimeNow).format('MM/DD/YYYY');
            hoursMinutesDay = dateTimeNow.getHours() + ':' + dateTimeNow.getMinutes();
            hoursDay = dateTimeNow.getHours();
            if (d.length == 0) {
                html_body += "<tr><td colspan=\"30\">Không có dữ liệu</td></tr>"
            }

            $.each(d, function (key, val) {
                if (arrDiaDiem.indexOf(returnSplit(val.TenDiaDiem).join("")) == -1) {
                    arrDiaDiem.push(returnSplit(val.TenDiaDiem).join(""));
                    arrGhiChu.push(val.GhiChu);
                }
                if (key == 0) {
                    html_body_dau += "<tr class=\"cc-" + val.GhiChu + " tr-cc-view\">";
                    html_body_dau += "<td>" + demso + "</td>";
                    html_body_dau += "<td class=\"td-left\">" + val.TenNhanVien + "</td>";
                    html_body_dau += "<td>" + returnSplit(val.PhongBan).join("") + "</td>";
                    html_body_dau += "<td>" + returnSplit(val.TenChucDanh).join("") + "</td>";
                    if (val.LoaiChamCong == "0") {
                        html_body_giovao += "<td>" + convertDate(val.NgayGioChamCong)[3] + "</td>";
                        loaichamcongvao = val.LoaiChamCong;
                        giovao = convertDate(val.NgayGioChamCong)[3].substring(0, 2)

                    } else {
                        giora = convertDate(val.NgayGioChamCong)[3].substring(0, 2)
                        html_body_giora += "<td>" + convertDate(val.NgayGioChamCong)[3] + "</td>";
                        loaichamcongra = val.LoaiChamCong;
                    }

                    if(val.LoaiChamCong == "1") {
                        html_body_giovao += "<td class=\"colorRed\">00:00</td>";
                        giora = convertDate(val.NgayGioChamCong)[3].substring(0, 2)
                        for (var i = 0; i < 24; i++) {
                            if ((parseInt(giovao) - 1) <= i && (parseInt(giora) - 1) >= i) {
                                html_body_td += "<td class=\"backgroupRed\">1</td>";
                                arrayTongThoiGian[i] += 1;
                            } else {
                                html_body_td += "<td></td>";
                            }
                        }
                        html_body_tr_cuoi += "</tr>";
                        loaichamcongra = val.LoaiChamCong;
                        demso++;
                    }
                    tennhanvien = val.TenNhanVien;
                } else {
                    if (tennhanvien == val.TenNhanVien) {
                        if (val.LoaiChamCong == "1") {
                            html_body_giora += "<td>" + convertDate(val.NgayGioChamCong)[3] + "</td>";
                            giora = convertDate(val.NgayGioChamCong)[3].substring(0, 2)
                            for (var i = 0; i < 24; i++) {
                                if ((parseInt(giovao) - 1) <= i && (parseInt(giora) - 1) >= i) {
                                    html_body_td += "<td class=\"backgroupRed\">1</td>";
                                    arrayTongThoiGian[i] += 1;
                                } else {
                                    html_body_td += "<td></td>";
                                }
                            }
                            html_body_tr_cuoi += "</tr>";
                            loaichamcongra = val.LoaiChamCong;
                            demso++;
                        } else {
                            html_body += html_body_dau + html_body_giovao + html_body_giora + html_body_td + html_body_tr_cuoi;
                            html_body_dau = "";
                            html_body_giovao = "";
                            html_body_giora = "";
                            html_body_td = "";
                            loaichamcongvao = "";
                            loaichamcongra = "";
                            giovao = "";
                            giora = "";

                            html_body_dau += "<tr class=\"cc-" + val.GhiChu + " tr-cc-view\">";
                            html_body_dau += "<td>" + demso + "</td>";
                            html_body_dau += "<td class=\"td-left\">" + val.TenNhanVien + "</td>";
                            html_body_dau += "<td>" + returnSplit(val.PhongBan).join("") + "</td>";
                            html_body_dau += "<td>" + returnSplit(val.TenChucDanh).join("") + "</td>";
                            html_body_giovao += "<td>" + convertDate(val.NgayGioChamCong)[3] + "</td>";
                            loaichamcongvao = val.LoaiChamCong;
                            giovao = convertDate(val.NgayGioChamCong)[3].substring(0, 2)
                            tennhanvien = val.TenNhanVien;
                        }

                    } else {
                        if (loaichamcongvao == "") {
                            html_body_giovao += "<td class=\"colorRed\">00:00</td>";
                        }
                        if (loaichamcongra == "") {
                            //if (val.NgayGioChamCong.split(" ")[0] == "1/1/1900") {
                            //html_body_giora += "<td class=\"colorRed\">00:00</td>";
                            //} else {
                            html_body_giora += "<td  class=\"colorRed\">" + hoursMinutesDay + "</td>";
                            //}
                        }
                        if (loaichamcongvao == "" || loaichamcongra == "") {
                            if (loaichamcongra == "") {
                                if (dateCompare(dateNowFormat, convertDate(val.NgayGioChamCong)[10]) === false) {
                                    html_body_giora = "<td  class=\"colorRed\">00:00</td>";
                                    for (var i = 0; i < 24; i++) {
                                        if ((parseInt(giovao) - 1) <= i && 23 >= i) {
                                            html_body_td += "<td class=\"backgroupRed\">1</td>";
                                            arrayTongThoiGian[i] += 1;
                                        } else {
                                            html_body_td += "<td></td>";
                                        }
                                    }
                                } else {
                                    for (var i = 0; i < 24; i++) {
                                        if ((parseInt(giovao) - 1) <= i && (parseInt(hoursDay) - 1) >= i) {
                                            html_body_td += "<td class=\"backgroupRed\">1</td>";
                                            arrayTongThoiGian[i] += 1;
                                        } else {
                                            html_body_td += "<td></td>";
                                        }
                                    }
                                }
                                html_body_tr_cuoi += "</tr>";
                                demso++;
                            }
                            if (loaichamcongvao == "") {
                                for (var i = 0; i < 24; i++) {
                                    if (0 <= i && (parseInt(giora) - 1) >= i) {
                                        html_body_td += "<td class=\"backgroupRed\">1</td>";
                                        arrayTongThoiGian[i] += 1;
                                    } else {
                                        html_body_td += "<td></td>";
                                    }
                                }
                                html_body_tr_cuoi += "</tr>";
                                demso++;
                            }
                        }
                        html_body += html_body_dau + html_body_giovao + html_body_giora + html_body_td + html_body_tr_cuoi;
                        html_body_dau = "";
                        html_body_giovao = "";
                        html_body_giora = "";
                        html_body_td = "";
                        loaichamcongvao = "";
                        loaichamcongra = "";
                        giovao = "";
                        giora = "";
                        html_body_tr_cuoi = "";
                        html_body_dau += "<tr class=\"cc-" + val.GhiChu + " tr-cc-view\">";
                        html_body_dau += "<td>" + demso + "</td>";
                        html_body_dau += "<td class=\"td-left\">" + val.TenNhanVien + "</td>";
                        html_body_dau += "<td>" + returnSplit(val.PhongBan).join("") + "</td>";
                        html_body_dau += "<td>" + returnSplit(val.TenChucDanh).join("") + "</td>";
                        if (val.LoaiChamCong == "0") {
                            html_body_giovao += "<td>" + convertDate(val.NgayGioChamCong)[3] + "</td>";
                            loaichamcongvao = val.LoaiChamCong;
                            giovao = convertDate(val.NgayGioChamCong)[3].substring(0, 2)
                        } else {
                            html_body_giora += "<td>" + convertDate(val.NgayGioChamCong)[3] + "</td>";
                            loaichamcongra = val.LoaiChamCong;
                            giora = convertDate(val.NgayGioChamCong)[3].substring(0, 2)
                        }
                    }
                    tennhanvien = val.TenNhanVien;
                    loaichamcong = val.LoaiChamCong;
                }
                if (key == (d.length - 1)) {
                    if (loaichamcongvao == "") {
                        html_body_giovao += "<td class=\"colorRed\">00:00</td>";
                    }
                    if (loaichamcongra == "") {
                        html_body_giora += "<td  class=\"colorRed\">" + hoursMinutesDay + "</td>";
                    }
                    if (loaichamcongvao == "" || loaichamcongra == "") {

                        if (loaichamcongra == "") {
                            if (dateCompare(dateNowFormat, convertDate(val.NgayGioChamCong)[10]) === false) {
                                html_body_giora = "<td  class=\"colorRed\">00:00</td>";
                                for (var i = 0; i < 24; i++) {
                                    if ((parseInt(giovao) - 1) <= i && 23 >= i) {
                                        html_body_td += "<td class=\"backgroupRed\">1</td>";
                                        arrayTongThoiGian[i] += 1;
                                    } else {
                                        html_body_td += "<td></td>";
                                    }
                                }
                            } else {
                                for (var i = 0; i < 24; i++) {
                                    if ((parseInt(giovao) - 1) <= i && (parseInt(hoursDay) - 1) >= i) {
                                        html_body_td += "<td class=\"backgroupRed\">1</td>";
                                        arrayTongThoiGian[i] += 1;
                                    } else {
                                        html_body_td += "<td></td>";
                                    }
                                }
                            }
                            html_body_tr_cuoi += "</tr>";
                            demso++;
                        }
                        if (loaichamcongvao == "") {
                            for (var i = 0; i < 24; i++) {
                                if (0 <= i && (parseInt(giora) - 1) >= i) {
                                    html_body_td += "<td class=\"backgroupRed\">1</td>";
                                    arrayTongThoiGian[i] += 1;
                                } else {
                                    html_body_td += "<td></td>";
                                }
                            }
                            html_body_tr_cuoi += "</tr>";
                            demso++;
                        }
                    }
                    html_body += html_body_dau + html_body_giovao + html_body_giora + html_body_td;

                    html_tong_thoigian += "<tr>";
                    html_tong_thoigian += "<td colspan=\"6\">Tổng thời gian làm việc</td>";

                    for (var j = 0; j < arrayTongThoiGian.length; j++) {
                        html_tong_thoigian += "<td>" + arrayTongThoiGian[j] + "</td>";
                    }
                    html_tong_thoigian += "</tr>";

                    html_body += html_tong_thoigian;
                }
            });
            var html_option = "<option value=\"ALL\">-- Tất cả --</option>";
            for (var i = 0; i < arrDiaDiem.length; i++) {
                html_option += "<option value=\"" + arrGhiChu[i] + "\">" + returnSplit(arrDiaDiem[i]).join("") + "</option>"
            }
            $("#sl-diadiem").empty().append(html_option);
            $("#table-show-chamcong tbody").empty().append(html_body)
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
}

// Loại bỏ dấu \n xuống dòng
function returnSplit(input) {
    const result = input.split(/\n/);
    return result
}

// Hàm so sánh  2 ngày
function dateCompare(d1, d2) {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    var check = true;
    if (date1 > date2) {
        //console.log(`${d1} is greater than ${d2}`)
        check = false
    } else if (date1 < date2) {
        //console.log(`${d2} is greater than ${d1}`)
    } else {
        //console.log(`Both dates are equal`)
    }
    return check;
}

function returnSplit(input) {
    const result = input.split(/\n/);
    return result
}