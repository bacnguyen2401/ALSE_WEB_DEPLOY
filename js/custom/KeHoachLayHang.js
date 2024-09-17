var html_thead = "";
var html_tbody = "";
var html_print = "";
var ajaxGet;
var d;
var d_now_20190504 = new Date();
var html_makho = "";
var arrayMakho = [];
 
$(document).ready(function () {

    fncChange();
    fncClick();
    fncLoad();

})

function fncLoad() {
    $("#input-kehoachlayhang-ngay").datepicker("setDate", new Date());
    $("#span-ngay").text(convert2chuso(d_now_20190504.getDate()));
    $("#span-thang").text(convert2chuso(d_now_20190504.getMonth() + 1));
    fncLoadFWD();
    fncLoadKeHoachLayHang(d_now_20190504.getFullYear() + "/" + (d_now_20190504.getMonth() + 1) + "/" + d_now_20190504.getDate());
}
function fncLoadFWD() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "KeHoachLayHang.aspx/LoadDanhSachFWD",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            html_tbody = "";
            $("#div-checkbox").empty();
            var html_DanhSachFWDS = "";
            html_DanhSachFWDS += "<label class=\"checkbox-inline color-white title-font\">FWD: </label>";
            html_DanhSachFWDS += "<label class=\"checkbox-inline color-white\"><input type=\"checkbox\" class=\"cb-qll cb-qll-child\" checked id=\"cb-ALL\" value=\"ALL\" />" + "ALL" + "</label>";
            //console.log(d);
            $.each(d, function (index, val) {
                //console.log(val.fwd);
                html_DanhSachFWDS += "<label class=\"checkbox-inline color-white\"><input type=\"checkbox\" class=\"cb-qll cb-qll-child\" checked id=\"cb-" + val.fwd.replace(".", "-") + "\" value=\"" + val.fwd.replace(".", "-") + "\" />" + val.fwd + "</label>";
            })
            $("#div-checkbox").append(html_DanhSachFWDS);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
}
function fncLoadKeHoachLayHang(ngaytd) {
    ajaxGet = { "get": ngaytd };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "KeHoachLayHang.aspx/LoadKeHoachLayHang",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            html_tbody = "";

            $.each(d, function (index, item) {

                html_tbody += "<tr hawb=\"" + item.HAWB + "\" class=\"tr-qll-view tr-makho-view tr-qll-fwd-" + item.FWDS.replace(".", "-") + " tr-makho-" + item.MaKho + "\"    >";
                html_tbody += "<td class=\"\">" + "<input class=\"td-checkbox td-checkbox-child \" id=\"td-checkbox-" + item.HAWB + "\" type=\"checkbox\" value=\"" + item.HAWB + "\"  tr-attr-makho=\"" + item.MaKho + "\"/>" + "</td>";
                html_tbody += "<td class=\"td-stt\">" + (index + 1) + "</td>";
                html_tbody += "<td class=\"td-MAWB\">" + item.MAWB
                html_tbody += "<td class=\"td-HAWB                    \">" + item.HAWB + "</td>";
                html_tbody += "<td class=\"td-SoKienTB                \">" + numberTextWithCommas(item.SoKienTB) + "</td>";
                html_tbody += "<td class=\"td-GM                      \">" + numberTextWithCommas(item.GM) + "</td>";
                html_tbody += "<td class=\"td-ChuyenBayTB             \">" + item.ChuyenBayTB + "</td>";
                html_tbody += "<td class=\"td-NgayBayTB               \">" + convertDate(item.NgayBayTB)[1] + "</td>";
                html_tbody += "<td class=\"td-GioBayTB                \">" + item.GioBayTB + "</td>";
                html_tbody += "<td class=\"td-TenHang                 \">" + item.TenHang + "</td>";
                html_tbody += "<td class=\"td-FWDS                    \">" + item.FWDS + "</td>";
                html_tbody += "<td class=\"td-GhiChuTB                \">" + item.GhiChuTB + "</td>";
                html_tbody += "<td class=\"td-NgayYeuCauTraHang       \">" + convertDate(item.NgayYeuCauTraHang)[1] + "</td>";
                html_tbody += "<td class=\"td-GioYeuCauTraHang        \">" + item.GioYeuCauTraHang + "</td>";
                html_tbody += "<td class=\"td-DVTraHang               \">" + item.DVTraHang + "</td>";
                html_tbody += "<td class=\"td-MaKho               \">" + item.MaKho + "</td>";
                html_tbody += "</tr>";

                html_print += "<tr id=\"tr-print-" + item.HAWB + "\" class=\"tr-print\">";
                html_print += "<td class=\"td-print-stt auto-style3 bdbl\" style=\"border:1px solid !important;\">" + + "</td>";
                html_print += "<td class=\"auto-style3 bdbl\" style=\"border:1px solid !important;\">" + item.MAWB + "</td>";
                html_print += "<td class=\"auto-style3 bdbl\" style=\"border:1px solid !important;\">" + item.HAWB + "</td>";
                html_print += "<td class=\"auto-style3 bdbl\" style=\"border:1px solid !important;\">" + numberTextWithCommas(item.SoKienTB) + "</td>";
                html_print += "<td class=\"auto-style3 bdbl\" style=\"border:1px solid !important;\">" + numberTextWithCommas(item.GM) + "</td>";
                html_print += "<td class=\"auto-style3 bdbl\" style=\"border:1px solid !important;\">" + item.ChuyenBayTB + "</td>";
                html_print += "<td class=\"auto-style3 bdbl\" style=\"border:1px solid !important;\">" + convertDate(item.NgayBayTB)[1] + "</td>";
                html_print += "<td class=\"auto-style3 bdbl\" style=\"border:1px solid !important;\">" + item.GioBayTB + "</td>";
                html_print += "<td class=\"auto-style3 bdbl\" style=\"border:1px solid !important;\">" + item.GhiChuTB + "</td>";
                //html_print += "<td class=\"makho\" style=\"display:none;\">" + item.MaKho + "</td>";
                html_print += "</tr>";
            })
            $("#tbl-kehoachlayhang tbody").empty();
            $("#tbl-kehoachlayhang tbody").append(html_tbody);
            $(".tr-print").remove();
            $("#tg1 tbody").prepend(html_print);


        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
}

function fncClick() {
    $("#btn-kehoachlayhang-xem").click(function () {
        fncLoadKeHoachLayHang(dmy2ymd($("#input-kehoachlayhang-ngay").val()));
        $(".cb-makho").prop("checked", true);
    })

    $("#btn-kehoachlayhang-in").click(function () {
        //console.log(arrayMakho);
        for (var i = 0; i < arrayMakho.length; i++) {
            if (arrayMakho[0] != arrayMakho[i]) {
                alert("Bạn đang chọn nhiều mã kho. Chức năng in chỉ in được một mã kho. Vui lòng chọn lại !");
                return false;
            }
        }
        $(".txtTenKhoHang").text(arrayMakho[0]);
        switch (arrayMakho[0]) {
            case "NCTS":
                $("#span-ben-de-nghi").text("Công ty Cổ phần Dịch vụ hàng hóa Nội Bài (NCTS)");
                break;
            case "ACS":
                $("#span-ben-de-nghi").text("Cổ phần Dịch vụ hàng hóa hàng không (ACSV)");
                break;
            case "ALSC":
                $("#span-ben-de-nghi").text("Công ty Cổ phần Nhà ga hàng hóa ALS (ALSC)");
                break;
            default:
                $("#span-ben-de-nghi").text(" Công ty Cổ phần ALS Đông Hà Nội (ALSE)");
        }
        var print_no = 1;
        $(".tr-print").each(function () {
            if ($(this).css('display') != 'none') {
                $(this).find(".td-print-stt").text(print_no);
                print_no++;
            }
        })
        //$(".txtTenKhoHang").text();
        //$(".div-tbl").show();
        window.print();
    })
}
function fncChange() {
    $("#tbl-kehoachlayhang").on("change", ".td-checkbox", function () {
        var check_no = 1;
        var check_hientai;
        var check_cu;
        //console.log(this.value);
        if (this.value == "ALL") {
            if (this.checked) {
                $(".tr-qll-view").each(function (index,val) {
                    if ($(this).css('display') != 'none') {
                        $(this).find(".td-stt").text(check_no);
                        check_no++;
                        $("#tr-print-" + $(this).attr("hawb")).show();
                        $("#td-checkbox-" + $(this).attr("hawb")).prop("checked", true);
                        checkedGan(true, $(this).find('.td-checkbox').attr("tr-attr-makho"));
                    }

                })
            } else {
                $(".tr-print").hide();
                $(".td-checkbox-child").prop("checked", false);
                arrayMakho = [];
            }
        } else {
            checkedGan(this.checked, $(this).attr("tr-attr-makho"));
            if (this.checked) {
                $("#tr-print-" + this.value).show();
            } else {
                $("#tr-print-" + this.value).hide();
            }
        }
    })
    ////////////////////////////////////// checkbox
    $("#div-checkbox ").on("change", ".cb-qll", function () {
        var cb_value = $(this).val();

        if (cb_value == "ALL") {
            if (this.checked) {
                $(".tr-qll-view").show();
                $(".cb-qll-child").prop("checked", true);

                $(".td-checkbox-child").prop("checked", false);
                $(".td-checkbox").prop("checked", false);
            } else {
                $(".tr-qll-view").hide();
                $(".cb-qll-child").prop("checked", false);

                $(".td-checkbox-child").prop("checked", false);
                $(".td-checkbox").prop("checked", false);
                arrayMakho = [];
                $(".tr-print").hide();
            }
        } else {
            if (this.checked) {
                $(".tr-qll-fwd-" + cb_value).show();
                $(".td-checkbox-child").prop("checked", false);

                $(".td-checkbox-child").prop("checked", false);
                $(".td-checkbox").prop("checked", false);
                arrayMakho = [];
                $(".tr-print").hide();
            } else {
                $(".tr-qll-fwd-" + cb_value).hide();
                $(".td-checkbox-child").prop("checked", false);

                $(".td-checkbox-child").prop("checked", false);
                $(".td-checkbox").prop("checked", false);
                arrayMakho = [];
                $(".tr-print").hide();
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

                $(".td-checkbox-child").prop("checked", false);
                $(".td-checkbox").prop("checked", false);

                $(".td-checkbox-child").prop("checked", false);
                $(".td-checkbox").prop("checked", false);
                arrayMakho = [];
                $(".tr-print").hide();
            } else {
                $(".tr-makho-view").hide();
                $(".cb-makho-child").prop("checked", false);
            }
        } else {
            if (this.checked) {
                $(".tr-makho-" + cb_value).show();

                $(".td-checkbox-child").prop("checked", false);
                $(".td-checkbox").prop("checked", false);
                arrayMakho = [];
                $(".tr-print").hide();
            } else {
                $(".tr-makho-" + cb_value).hide();

                $(".td-checkbox-child").prop("checked", false);
                $(".td-checkbox").prop("checked", false);
                arrayMakho = [];
                $(".tr-print").hide();
            }
        }
    });
    ////////////////////////////////////// \\checkbox
}

function checkedGan(checked, makho) {
    if (checked == true) {
        arrayMakho.push(makho);
    } else {
        var indexMakho = arrayMakho.indexOf(makho);
        arrayMakho.splice(indexMakho, 1);
        //console.log(indexMakho);
    }
    //console.log(arrayMakho);
}


