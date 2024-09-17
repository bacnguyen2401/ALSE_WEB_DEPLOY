var tuyen_value = 0;
var html_tbody = "";
var html_tbody_dabao = "";
$(document).ready(function () {
    fncChange();
    fncLoad();
    fncClick();
})

function fncLoad() {
    fncPhanQuyen();
    fncLoadOriginCity();
    fncLoadKhachHang();
    fncLoadThongTinKhac();
}
function fncClick() {
    $("#btn-quanly-giamua").click(function () {
        window.location.href = "GiaMua.aspx";
    })
    $("#btn-quanly-giaban").click(function () {
        window.location.href = "GiaBan.aspx";
    })
    $("#btn-quanly-makhachhang").click(function () {
        window.location.href = "KhachHang.aspx";
    })
    $("#btn-quanly-tuyen").click(function () {
        window.location.href = "Tuyen.aspx";
    })
    $("#btn-danhgia-vendor-trucking").click(function () {
        window.location.href = "GiaMua.aspx";
    })

    $("#btn-tracuu").click(function () {
        var tc_OriginCity = "";
        var tc_Origin = "";
        var tc_DestinationCity = "";
        var tc_Destination = "";
        var tc_KhachHang = "";
        var tc_EquipmentType = "";
        var tc_TaiTrong = "";
        var tc_TheTich = "";
        var tc_DonViVanTai = "";
        var TraCuuParamter = {
            "OriginCity": ($("#select-tracuu-diemxuatphat-thanhpho").val() != null && $("#select-tracuu-diemxuatphat-thanhpho").val() != "0") ? $("#select-tracuu-diemxuatphat-thanhpho").val() : "",
            "Origin": ($("#select-tracuu-diemxuatphat").val() != null && $("#select-tracuu-diemxuatphat").val() != "0") ? $("#select-tracuu-diemxuatphat").val() : "",
            "DestinationCity": ($("#select-tracuu-diemden-thanhpho").val() != null && $("#select-tracuu-diemden-thanhpho").val() != "0") ? $("#select-tracuu-diemden-thanhpho").val() : "",
            "Destination": ($("#select-tracuu-diemden").val() != null && $("#select-tracuu-diemden").val() != "0") ? $("#select-tracuu-diemden").val() : "",
            "KhachHang": ($("#select-tracuu-khachhang").val() != null && $("#select-tracuu-khachhang").val() != "0") ? $("#select-tracuu-khachhang").val() : "",
            "EquipmentType": ($("#select-tracuu-loaixe").val() != null && $("#select-tracuu-loaixe").val() != "0") ? $("#select-tracuu-loaixe").val() : "",
            "TaiTrong": "",
            "TheTich": ($("#select-tracuu-thetich").val() != null && $("#select-tracuu-thetich").val() != "0") ? $("#select-tracuu-thetich").val() : "",
            "DonViVanTai": ($("#select-tracuu-donvivantai").val() != null && $("#select-tracuu-donvivantai").val() != "0") ? $("#select-tracuu-donvivantai").val() : "",
        }
        jsonData = JSON.stringify({ TraCuuParamter });

        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.

        $.ajax({
            type: "POST",
            url: "TraCuu.aspx/LoadTraCuu",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                // console.log(d);
                html_tbody = "";
                html_tbody_dabao = "";
                var html_tbody_temp = "";
                $.each(d, function (index, item) {
                    html_tbody_temp = "";
                    html_tbody_temp += "<tr class=\"tr-highlight-hover\">";
                    html_tbody_temp += "<td class=\"giamua-tuyen\" giamua-id=\"" + "" + "\">" + item.Tuyen + "</td>";
                    // html_tbody_tem+== "<td class=\"giamua-tuyen\" \">" + item.KhachHang + "</td>";
                    //html_tbody_temp += "<td class=\"giamua-origin\">" + item.Origin + "</td>";
                    //html_tbody_temp += "<td class=\"giamua-origin-city\">" + item.OriginCity + "</td>";
                    //html_tbody_temp += "<td class=\"giamua-destination\">" + item.Destination + "</td>";
                    //html_tbody_temp += "<td class=\"giamua-destination-city\">" + item.DestinationCity + "</td>";
                    html_tbody_temp += "<td class=\"giamua-EquipmentType\">" + item.EquipmentType + "</td>";
                    //html_tbody_temp+== "<td class=\"giamua-sub\">" + item.Sub + "</td>";
                    html_tbody_temp += "<td>" + item.Mode + "</td>";
                    html_tbody_temp += "<td>" + item.ServiceType + "</td>";
                    html_tbody_temp += "<td>" + item.ServiceGroup + "</td>";
                    html_tbody_temp += "<td>" + item.LeadTime + "</td>";
                    html_tbody_temp += "<td>" + item.TheTich + "</td>";
                    html_tbody_temp += "<td>" + numberTextWithCommas(item.TaiTrong) + "</td>";
                    html_tbody_temp += "<td>" + item.KichThuoc_Dai + "x" + item.KichThuoc_Rong + "x" + item.KichThuoc_Cao + "</td>";
                    html_tbody_temp += "<td>" + item.MaNhaCungCap + "</td>";
                    //html_tbody_temp+= "<td class=\"giamua-trucking-code\">" + numberTextWithCommas(item.GiaBan) + "</td>";
                    html_tbody_temp += "<td class=\"giamua-trucking-code\">" + numberTextWithCommas(item.GiaDeXuat) + "</td>";
                    html_tbody_temp += "<td>" + item.FreeDetention + "</td>";
                    html_tbody_temp += "<td>" + numberTextWithCommas(item.DetentionCost) + "</td>";
                    html_tbody_temp += "<td class=\"giamua-maximum-dention-cost\">" + numberTextWithCommas(item.MaximumDentionCost) + "</td>";
                    html_tbody_temp += "<td>" + numberTextWithCommas(item.HandlingCost) + "</td>";
                    html_tbody_temp += "<td>" + numberTextWithCommas(item.CustomsSuperviseCost) + "</td>";
                    html_tbody_temp += "<td class=\giamua-customs-supervise-cost-redcd\">" + numberTextWithCommas(item.CustomsSuperviseCost_RedCD) + "</td>";
                    html_tbody_temp += "<td>" + numberTextWithCommas(item.LoadingUnloadingCost) + "</td>";
                    html_tbody_temp += "<td class=\"giamua-remark\" remark=\"" + item.Remark + "\">" + "Xem" + "</td>";
                    html_tbody_temp += "</tr>";
                    if (item.KhachHang == "") {
                        html_tbody += html_tbody_temp;
                    } else {
                        html_tbody_dabao += html_tbody_temp;
                    }
                })
                var table = $('#tbl-giamua').DataTable();
                table.destroy();
                $("#tbl-giamua tbody").empty();
                $("#tbl-giamua thead").hide();
                var table_dabao = $('#tbl-giamua-dabao').DataTable();
                table_dabao.destroy();
                $("#tbl-giamua-dabao tbody").empty();
                $("#tbl-giamua-dabao thead").hide();
               
                if (html_tbody != "") {
                    $("#tbl-giamua thead").show();
                    $("#tbl-giamua tbody").append(html_tbody);
                    var scrollYHeight = window.innerHeight - 400;
                    $('#tbl-giamua').DataTable({
                        "retrieve": true,
                        "scrollX": true,
                        "scrollY": scrollYHeight.toString() + "px",
                        "scrollCollapse": true,
                        "responsive": true,
                        "paging": false,
                        "language": {
                            "decimal": ",",
                            "thousands": "."
                        }
                    });
                    $("#tbl-giamua-header").remove();
                    var html_giamua_header = "<div class=\"tbl-giamua-header\" id=\"tbl-giamua-header\"><label>CHƯA BÁO GIÁ (GIÁ ĐỀ XUẤT)</label></div>";
                    $("#tbl-giamua_wrapper").prepend(html_giamua_header);
                    if (html_tbody_dabao == "") {
                        fncScrollUp("#tbl-giamua-header");
                    }
                }
                if (html_tbody_dabao != "") {
                    $("#tbl-giamua-dabao thead").show();
                    $("#tbl-giamua-dabao tbody").append(html_tbody_dabao);          
                    var scrollYHeight = window.innerHeight - 400;
                    $('#tbl-giamua-dabao').DataTable({
                        "retrieve": true,
                        "scrollX": true,
                        "scrollY": scrollYHeight.toString() + "px",
                        "scrollCollapse": true,
                        "responsive": true,
                        "paging": false,
                        "language": {
                            "decimal": ",",
                            "thousands": "."
                        },
                      
                    });

                    $("#tbl-giamua-dabao-header").remove();
                    var html_tracuu_dabao_header = "<div class=\"tbl-giamua-header\" id=\"tbl-giamua-dabao-header\"><label>GIÁ ĐÃ BÁO CHO KHÁCH</label></div>";
                    $("#tbl-giamua-dabao_wrapper").prepend(html_tracuu_dabao_header);
                    fncScrollUp("#tbl-giamua-dabao-header");
                }
               
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    })
    $("#btn-tracuu-datlai").click(function () {
        $("#select-tracuu-diemxuatphat-thanhpho").val("0");
        $("#select-tracuu-diemxuatphat").empty();
        $("#select-tracuu-diemden-thanhpho").empty();
        $("#select-tracuu-diemden").empty();
        $("#select-tracuu-khachhang").val("0");
        $("#select-tracuu-loaixe").val("0");
        //$("#select-tracuu-taitrong").val("0");
        $("#select-tracuu-thetich").val("0");
        $("#select-tracuu-donvivantai").val("0");
    })
    $(".tbl-giamua").on("click", ".giamua-remark", function () {
        Swal.fire({
            title: "Remark!",
            text: $(this).attr("remark"),
            type: 'warning',
        })
    })
}

function fncChange() {
    //// Tra cứu on change
    // $("#select-tracuu-tuyen").change(function () {
    //     tuyen_value = $(this).val();
    //     if (tuyen_value == 0) {
    //         $(".select-tracuu-clear").empty();
    //     }
    // })
    //// END Tra cứu on change

    $("#select-tracuu-diemxuatphat-thanhpho").change(function () {
        if ($(this).val() != "0") {
            fncLoadOrigin($(this).val());
        } else {
            $("#select-tracuu-diemxuatphat").empty();
        }

        $("#select-tracuu-diemden-thanhpho").empty();
        $("#select-tracuu-diemden").empty();
    })
    $("#select-tracuu-diemxuatphat").change(function () {
        if ($(this).val() != "0") {
            fncLoadDestinationCity($("#select-tracuu-diemxuatphat-thanhpho").val(), $(this).val());
        } else {
            $("#select-tracuu-diemden-thanhpho").empty();
        }
        $("#select-tracuu-diemden").empty();
    })
    $("#select-tracuu-diemden-thanhpho").change(function () {
        if ($(this).val() != "0") {
            fncLoadDestination($("#select-tracuu-diemxuatphat-thanhpho").val(), $("#select-tracuu-diemxuatphat").val(), $(this).val());
        } else {
            $("#select-tracuu-diemden").empty();

        }
    })
    $(".select-tracuu").change(function () {
        $("#btn-tracuu").prop('disabled', true);

    })
    $("#select-tracuu-diemden").change(function () {
        $("#btn-tracuu").prop('disabled', true);
        if ($(this).val() != "0" && $("#select-tracuu-khachhang").val() != "0") {
            $("#btn-tracuu").prop('disabled', false);
        }
    })
    $("#select-tracuu-khachhang").change(function () {
        $("#btn-tracuu").prop('disabled', true);
        if ($(this).val() != "0" && $("#select-tracuu-diemden").val() != "0") {
            $("#btn-tracuu").prop('disabled', false);
        }
    })


}
//load ds điểm đến điểm đi
function fncLoadOriginCity() {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "TraCuu.aspx/LoadOriginCity",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            $("#select-tracuu-diemxuatphat-thanhpho").empty();
            $("#select-tracuu-diemxuatphat-thanhpho").append("<option value=\"0\">--Chưa chọn--</option>");
            $.each(d, function (index, item) {
                // console.log(item);
                $("#select-tracuu-diemxuatphat-thanhpho").append("<option value=\"" + item + "\">" + item + "</option>");
            })
            $("#select-tracuu-diemxuatphat-thanhpho").val("Bắc Ninh").change();
            $("#select-tracuu-diemxuatphat").val("VSIP Bắc Ninh").change();
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}
function fncLoadOrigin(v_OriginCity) {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": v_OriginCity };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "TraCuu.aspx/LoadOrigin",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            $("#select-tracuu-diemxuatphat").empty();
            $("#select-tracuu-diemxuatphat").append("<option value=\"0\">--Chưa chọn--</option>");
            $.each(d, function (index, item) {
                // console.log(item);
                $("#select-tracuu-diemxuatphat").append("<option value=\"" + item + "\">" + item + "</option>");
            })
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}
function fncLoadDestinationCity(v_OriginCity, v_Origin) {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet2 = { "get1": v_OriginCity, "get2": v_Origin };
    jsonData = JSON.stringify({ ajaxGet2 });
    $.ajax({
        type: "POST",
        url: "TraCuu.aspx/LoadDestinationCity",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            $("#select-tracuu-diemden-thanhpho").empty();
            $("#select-tracuu-diemden-thanhpho").append("<option value=\"0\">--Chưa chọn--</option>");
            $.each(d, function (index, item) {
                // console.log(item);
                $("#select-tracuu-diemden-thanhpho").append("<option value=\"" + item + "\">" + item + "</option>");
            })
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}
function fncLoadDestination(v_OriginCity, v_Origin, v_DestinationCity) {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet3 = { "get1": v_OriginCity, "get2": v_Origin, "get3": v_DestinationCity };
    jsonData = JSON.stringify({ ajaxGet3 });
    $.ajax({
        type: "POST",
        url: "TraCuu.aspx/LoadDestination",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            $("#select-tracuu-diemden").empty();
            $("#select-tracuu-diemden").append("<option value=\"0\">--Chưa chọn--</option>");
            $.each(d, function (index, item) {
                // console.log(item);
                $("#select-tracuu-diemden").append("<option value=\"" + item + "\">" + item + "</option>");
            })
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}
function fncLoadThongTinKhac() {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "TraCuu.aspx/LoadThongTinKhac",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            $("#select-tracuu-loaixe").empty();
            //$("#select-tracuu-taitrong").empty();
            $("#select-tracuu-thetich").empty();
            $("#select-tracuu-donvivantai").empty();
            $("#select-tracuu-loaixe").append("<option value=\"0\">--Chưa chọn--</option>");
            //$("#select-tracuu-taitrong").append("<option value=\"0\">--Chưa chọn--</option>");
            $("#select-tracuu-thetich").append("<option value=\"0\">--Chưa chọn--</option>");
            $("#select-tracuu-donvivantai").append("<option value=\"0\">--Chưa chọn--</option>");
            $.each(d.EquipmentType, function (index, item) {
                $("#select-tracuu-loaixe").append("<option value=\"" + item + "\">" + item + "</option>");
            })
            //$.each(d.TaiTrong, function (index, item) {
            //    $("#select-tracuu-taitrong").append("<option value=\"" + item + "\">" + item + "</option>");
            //})
            $.each(d.TheTich, function (index, item) {
                $("#select-tracuu-thetich").append("<option value=\"" + item + "\">" + item + "</option>");
            })
            $.each(d.DonViVanTai, function (index, item) {
                $("#select-tracuu-donvivantai").append("<option value=\"" + item + "\">" + item + "</option>");
            })
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}
//END load ds điểm đến điểm đi

function fncLoadKhachHang() {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": "0" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "KhachHang.aspx/LoadKhachHang",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            $("#select-tracuu-khachhang").empty();
            $("#select-tracuu-khachhang").append("<option value=\"0\">--Chưa chọn--</option>");
            $.each(d, function (index, item) {
                // console.log(item);
                $("#select-tracuu-khachhang").append("<option value=\"" + item.MaKH + "\">" + item.MaKH + "</option>");
            })
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}
function fncPhanQuyen() {
    var userid = $("#username").attr("userid");
    var listadmin = ["1", "8", "9", "12", "20", "30", "94", "99"];
    //console.log(listadmin.indexOf(userid));
    if (listadmin.indexOf(userid) > -1) {
        
        $("#btn-quanly-giamua").removeClass("display-none");
        $("#btn-quanly-giaban").removeClass("display-none");
    }
}