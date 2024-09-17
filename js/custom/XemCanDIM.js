var ajaxGet;
var ajaxGet1;
var ajaxGet2;
var ajaxGet3;
var jsonData;

var tongSoKien = 0;
var tongKienBanDau = 0;

var trongLuongBanDau = 0;
var tongTrongLuong = 0;

var vwDauTien = 0;
var tongvw = 0;

var spiltKichthuoc;
var dai;
var rong;
var cao;

var m_dai;
var m_rong;
var m_cao;
var CBM;

var arrayHawb = [];

$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();

});

function fncLoad() {

}

function fncClick() {


    $("#btn-xuat-excel").click(function () {
        var v_Mawb = $("#input-mawb").val();
        var g_tenfile = "CAN_DIM" + v_Mawb;
        var ajaxGet2 = { "get1": v_Mawb, "get2": g_tenfile };
        jsonData = JSON.stringify({ ajaxGet2 });
        $.ajax({
            type: "POST",
            url: "XemCanDIM.aspx/reDimExcel",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            //timeout: 120000,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                window.open("DownloadFile.aspx?Root=CanDim&Folder=BAOCAO&FileName=" + g_tenfile + ".xlsx");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
    });

    $("#btn-timkiem-dim").click(function () {
        arrayHawb = [];

        $("#table-show-hawb").empty();
        var html_sub = "";
        var v_Mawb = $("#input-mawb").val();
        var v_Hawb = $("#input-hawb").val();

        $("#showSomawb").empty();
        $("#showSomawb").append(v_Mawb);
        if (v_Mawb == "" && v_Hawb == "") {
            alert("Vui lòng nhập số MAWB và số HAWB");
            $("#tbl_CanDim tbody").empty();
            return;
        }

        if (v_Mawb != "" && v_Hawb == "") {

            ajaxGet2 = { "get1": v_Mawb, "get2": v_Hawb };
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
                            trongLuongBanDau = parseInt(val.TrongLuong);

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

                            html_td_1 += "<td rowspan=";
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
                            tongTrongLuong = trongLuongBanDau + parseInt(val.TrongLuong);
                            html_td_14 += "<tr>"
                            html_td_14 += "<td>" + val.KichThuoc + " / " + val.SoKien + "</td>";
                            html_td_14 += "</tr>"

                            tongKienBanDau = tongKienBanDau + parseInt(val.SoKien);

                            trongLuongBanDau = trongLuongBanDau + parseInt(val.TrongLuong);

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
                    $("#tbl_CanDim tbody").empty();
                    $("#tbl_CanDim tbody").append(html_tong);



                    $.each(d.listHawb, function (key, val) {
                        arrayHawb.push(val.Hawb);
                    });


                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {

            });
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


                ajaxGet2 = { "get1": v_Mawb, "get2": arrayHawb[i] };
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

                        var length = d.dims.length;

                        $.each(d.dims, function (key, val) {

                            if (key == 0) {
                                CBM = 0;
                                // số kiện ban đầu
                                tongKienBanDau = parseInt(val.SoKien);
                                // số trọng lượng ban đầu
                                trongLuongBanDau = parseInt(val.TrongLuong);

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
                                tongTrongLuong = trongLuongBanDau + parseInt(val.TrongLuong);
                                html_td_14_hawb += "<tr>"
                                html_td_14_hawb += "<td>" + val.KichThuoc + " / " + val.SoKien + "</td>";
                                html_td_14_hawb += "</tr>"

                                tongKienBanDau = tongKienBanDau + parseInt(val.SoKien);

                                trongLuongBanDau = trongLuongBanDau + parseInt(val.TrongLuong);

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
                html_sub += "<h3 class=\"titleShow\">Hiển thị theo HAWB: <span>" + arrayHawb[i] + "</span></h3>"
                html_sub += "<table class=\"table table-bordered table-hawb\" id=\"table_show_" + arrayHawb[i] + "\">";
                html_sub += "<thead>";
                html_sub += "<tr>";
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

            }
        }


        if (v_Mawb == "" && v_Hawb != "") {

            ajaxGet2 = { "get1": v_Mawb, "get2": v_Hawb };
            var jsonData = JSON.stringify({ ajaxGet2 });
            $.ajax({
                type: "POST",
                url: "XemCanDIM.aspx/reDimtheohawb",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    console.log(d);
                    $("#showSomawb").empty().append(d.mawb);
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


                    $.each(d.dims, function (key, val) {

                        if (key == 0) {
                            // số kiện ban đầu
                            tongKienBanDau = parseInt(val.SoKien);
                            // số trọng lượng ban đầu
                            trongLuongBanDau = parseInt(val.TrongLuong);

                            // kích thước khi cắt
                            spiltKichthuoc = val.KichThuoc.split("x");
                            dai = parseInt(spiltKichthuoc[0]);
                            rong = parseInt(spiltKichthuoc[1]);
                            cao = parseInt(spiltKichthuoc[2]);
                            //vwDauTien = Math.round(dai * rong * cao * parseInt(val.SoKien) / 6000, 2);
                            vwDauTien = dai * rong * cao * parseInt(val.SoKien) / 6000;


                            html_td_1 += "<tr>";
                            html_td_1 += "<td>" + val.KichThuoc + " / " + val.SoKien + "</td>";

                            html_td_1 += "<td rowspan=";
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

                            html_td_13 += "</tr>";
                        } else {

                            // kích thước khi cắt
                            spiltKichthuoc = val.KichThuoc.split("x");
                            dai = parseInt(spiltKichthuoc[0]);
                            rong = parseInt(spiltKichthuoc[1]);
                            cao = parseInt(spiltKichthuoc[2]);

                            // tổng số kiện
                            tongSoKien = tongKienBanDau + parseInt(val.SoKien);
                            //tổng volunm weigth
                            //tongvw = vwDauTien + Math.round(dai * rong * cao * parseInt(val.SoKien) / 6000, 2);
                            tongvw = vwDauTien + dai * rong * cao * parseInt(val.SoKien) / 6000;
                            // tổng trọng lượng
                            tongTrongLuong = trongLuongBanDau + parseInt(val.TrongLuong);
                            html_td_14 += "<tr>"
                            html_td_14 += "<td>" + val.KichThuoc + " / " + val.SoKien + "</td>";
                            html_td_14 += "</tr>"

                            tongKienBanDau = tongKienBanDau + parseInt(val.SoKien);

                            trongLuongBanDau = trongLuongBanDau + parseInt(val.TrongLuong);

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

                            html_tong += html_td_1 + lengthSoKien + html_td_2 + PCS0 + html_td_3 + html_td_4 + lengthSoKien + html_td_5 + trongLuong0 + html_td_6 + html_td_7 + lengthSoKien + html_td_8 + trongluongwolunm.toFixed(2) + html_td_9 + html_td_10 + lengthSoKien + html_td_11 + cw0.toFixed(2) + html_td_12 + html_td_13 + html_td_14;
                        }

                    });
                    $("#tbl_CanDim tbody").empty();
                    $("#tbl_CanDim tbody").append(html_tong);



                    $.each(d.listHawb, function (key, val) {
                        arrayHawb.push(val.Hawb);
                    });


                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {

            });
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
                var dai_hawb = 0;
                var rong_hawb = 0;
                var cao_hawb = 0;


                ajaxGet2 = { "get1": v_Mawb, "get2": arrayHawb[i] };
                var jsonData = JSON.stringify({ ajaxGet2 });
                $.ajax({
                    type: "POST",
                    url: "XemCanDIM.aspx/reDimHAWB",
                    data: jsonData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    success: function (responsive) {
                        d = responsive.d;
                        //console.log(d);
                        var length = d.dims.length;



                        $.each(d.dims, function (key, val) {

                            if (key == 0) {
                                // số kiện ban đầu
                                tongKienBanDau = parseInt(val.SoKien);
                                // số trọng lượng ban đầu
                                trongLuongBanDau = parseInt(val.TrongLuong);

                                // kích thước khi cắt
                                spiltKichthuoc = val.KichThuoc.split("x");
                                dai_hawb = parseInt(spiltKichthuoc[0]);
                                rong_hawb = parseInt(spiltKichthuoc[1]);
                                cao_hawb = parseInt(spiltKichthuoc[2]);

                                //vwDauTien = Math.round(dai_hawb * rong_hawb * cao_hawb * parseInt(val.SoKien) / 6000, 2);
                                vwDauTien = dai_hawb * rong_hawb * cao_hawb * parseInt(val.SoKien) / 6000;


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

                                html_td_13_hawb += "</tr>";
                            } else {

                                // kích thước khi cắt
                                spiltKichthuoc = val.KichThuoc.split("x");
                                dai_hawb = parseInt(spiltKichthuoc[0]);
                                rong_hawb = parseInt(spiltKichthuoc[1]);
                                cao_hawb = parseInt(spiltKichthuoc[2]);

                                // tổng số kiện
                                tongSoKien = tongKienBanDau + parseInt(val.SoKien);
                                //tổng volunm weigth
                                //tongvw = vwDauTien + Math.round(dai_hawb * rong_hawb * cao_hawb * parseInt(val.SoKien) / 6000, 2);
                                tongvw = vwDauTien + dai_hawb * rong_hawb * cao_hawb * parseInt(val.SoKien) / 6000;
                                // tổng trọng lượng
                                tongTrongLuong = trongLuongBanDau + parseInt(val.TrongLuong);
                                html_td_14_hawb += "<tr>"
                                html_td_14_hawb += "<td>" + val.KichThuoc + " / " + val.SoKien + "</td>";
                                html_td_14_hawb += "</tr>"

                                tongKienBanDau = tongKienBanDau + parseInt(val.SoKien);

                                trongLuongBanDau = trongLuongBanDau + parseInt(val.TrongLuong);

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

                                html_tong_Hawb += html_td_1_hawb + length + html_td_2_hawb + PCS0hawb + html_td_3_hawb + html_td_4_hawb + length + html_td_5_hawb + trongLuong0hawb + html_td_6_hawb + html_td_7_hawb + length + html_td_8_hawb + trongluongwolunmhawb.toFixed(2) + html_td_9_hawb + html_td_10_hawb + length + html_td_11_hawb + cw0hawb.toFixed(2) + html_td_12_hawb + html_td_13_hawb + html_td_14_hawb;
                            }
                        });



                    },
                    error: function (request, status, error) {
                        console.log(request.responseText);
                    }
                }).done(function () {

                });
                var html_sub = "";
                html_sub += "<h3 class=\"titleShow\">Hiển thị theo HAWB: <span>" + arrayHawb[i] + "</span></h3>"
                html_sub += "<table class=\"table table-bordered table-hawb\" id=\"table_show_" + arrayHawb[i] + "\">";
                html_sub += "<thead>";
                html_sub += "<tr>";
                html_sub += "<td>DIMENSION</td>";
                html_sub += "<td>PCS</td>";
                html_sub += "<td>GW</td>";
                html_sub += "<td>VW</td>";
                html_sub += "<td>CW</td>";
                html_sub += "</tr>";
                html_sub += "</thead>";
                html_sub += "<tbody>";
                html_sub += "</tbody>";
                html_sub += "</table>";

                $("#table-show-hawb").append(html_sub);

                $("#table_show_" + arrayHawb[i] + " tbody").empty();
                $("#table_show_" + arrayHawb[i] + " tbody").append(html_tong_Hawb);

            }
        }




        if (v_Mawb != "" && v_Hawb != "") {
            $("showSomawb").empty();
            $("showSomawb").append(v_Mawb);
            ajaxGet2 = { "get1": v_Mawb, "get2": v_Hawb };
            var jsonData = JSON.stringify({ ajaxGet2 });
            $.ajax({
                type: "POST",
                url: "XemCanDIM.aspx/reDimtheohawbvamawb",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    console.log(d);
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


                    $.each(d.dims, function (key, val) {

                        if (key == 0) {
                            // số kiện ban đầu
                            tongKienBanDau = parseInt(val.SoKien);
                            // số trọng lượng ban đầu
                            trongLuongBanDau = parseInt(val.TrongLuong);

                            // kích thước khi cắt
                            spiltKichthuoc = val.KichThuoc.split("x");
                            dai = parseInt(spiltKichthuoc[0]);
                            rong = parseInt(spiltKichthuoc[1]);
                            cao = parseInt(spiltKichthuoc[2]);
                            vwDauTien = Math.round(dai * rong * cao * parseInt(val.SoKien) / 6000, 2);


                            html_td_1 += "<tr>";
                            html_td_1 += "<td>" + val.KichThuoc + " / " + val.SoKien + "</td>";

                            html_td_1 += "<td rowspan=";
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

                            html_td_13 += "</tr>";
                        } else {

                            // kích thước khi cắt
                            spiltKichthuoc = val.KichThuoc.split("x");
                            dai = parseInt(spiltKichthuoc[0]);
                            rong = parseInt(spiltKichthuoc[1]);
                            cao = parseInt(spiltKichthuoc[2]);

                            // tổng số kiện
                            tongSoKien = tongKienBanDau + parseInt(val.SoKien);
                            //tổng volunm weigth
                            tongvw = vwDauTien + Math.round(dai * rong * cao * parseInt(val.SoKien) / 6000, 2);
                            // tổng trọng lượng
                            tongTrongLuong = trongLuongBanDau + parseInt(val.TrongLuong);
                            html_td_14 += "<tr>"
                            html_td_14 += "<td>" + val.KichThuoc + " / " + val.SoKien + "</td>";
                            html_td_14 += "</tr>"

                            tongKienBanDau = tongKienBanDau + parseInt(val.SoKien);

                            trongLuongBanDau = trongLuongBanDau + parseInt(val.TrongLuong);

                            vwDauTien = vwDauTien + Math.round(dai * rong * cao * parseInt(val.SoKien) / 6000, 2);
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

                            html_tong += html_td_1 + lengthSoKien + html_td_2 + PCS0 + html_td_3 + html_td_4 + lengthSoKien + html_td_5 + trongLuong0 + html_td_6 + html_td_7 + lengthSoKien + html_td_8 + trongluongwolunm.toFixed(2) + html_td_9 + html_td_10 + lengthSoKien + html_td_11 + cw0.toFixed(2) + html_td_12 + html_td_13 + html_td_14;
                        }

                    });
                    $("#tbl_CanDim tbody").empty();
                    $("#tbl_CanDim tbody").append(html_tong);



                    $.each(d.listHawb, function (key, val) {
                        arrayHawb.push(val.Hawb);
                    });


                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {

            });
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
                var dai_hawb = 0;
                var rong_hawb = 0;
                var cao_hawb = 0;


                ajaxGet2 = { "get1": v_Mawb, "get2": arrayHawb[i] };
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
                        //console.log(d);
                        var length = d.dims.length;
                        $.each(d.dims, function (key, val) {

                            if (key == 0) {
                                // số kiện ban đầu
                                tongKienBanDau = parseInt(val.SoKien);
                                // số trọng lượng ban đầu
                                trongLuongBanDau = parseInt(val.TrongLuong);

                                // kích thước khi cắt
                                spiltKichthuoc = val.KichThuoc.split("x");
                                dai_hawb = parseInt(spiltKichthuoc[0]);
                                rong_hawb = parseInt(spiltKichthuoc[1]);
                                cao_hawb = parseInt(spiltKichthuoc[2]);
                                vwDauTien = Math.round(dai_hawb * rong_hawb * cao_hawb * parseInt(val.SoKien) / 6000, 2);
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

                                html_td_13_hawb += "</tr>";
                            } else {

                                // kích thước khi cắt
                                spiltKichthuoc = val.KichThuoc.split("x");
                                dai_hawb = parseInt(spiltKichthuoc[0]);
                                rong_hawb = parseInt(spiltKichthuoc[1]);
                                cao_hawb = parseInt(spiltKichthuoc[2]);

                                // tổng số kiện
                                tongSoKien = tongKienBanDau + parseInt(val.SoKien);
                                //tổng volunm weigth
                                tongvw = vwDauTien + Math.round(dai_hawb * rong_hawb * cao_hawb * parseInt(val.SoKien) / 6000, 2);
                                // tổng trọng lượng
                                tongTrongLuong = trongLuongBanDau + parseInt(val.TrongLuong);
                                html_td_14_hawb += "<tr>"
                                html_td_14_hawb += "<td>" + val.KichThuoc + " / " + val.SoKien + "</td>";
                                html_td_14_hawb += "</tr>"

                                tongKienBanDau = tongKienBanDau + parseInt(val.SoKien);

                                trongLuongBanDau = trongLuongBanDau + parseInt(val.TrongLuong);

                                vwDauTien = vwDauTien + Math.round(dai * rong * cao * parseInt(val.SoKien) / 6000, 2);
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

                                html_tong_Hawb += html_td_1_hawb + length + html_td_2_hawb + PCS0hawb + html_td_3_hawb + html_td_4_hawb + length + html_td_5_hawb + trongLuong0hawb + html_td_6_hawb + html_td_7_hawb + length + html_td_8_hawb + trongluongwolunmhawb.toFixed(2) + html_td_9_hawb + html_td_10_hawb + length + html_td_11_hawb + cw0hawb.toFixed(2) + html_td_12_hawb + html_td_13_hawb + html_td_14_hawb;
                            }
                        });



                    },
                    error: function (request, status, error) {
                        console.log(request.responseText);
                    }
                }).done(function () {

                });
                var html_sub = "";
                html_sub += "<h3 class=\"titleShow\">Hiển thị theo HAWB: <span>" + arrayHawb[i] + "</span></h3>"
                html_sub += "<table class=\"table table-bordered table-hawb\" id=\"table_show_" + arrayHawb[i] + "\">";
                html_sub += "<thead>";
                html_sub += "<tr>";
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

            }
        }
    });
}

function fncChange() {
}