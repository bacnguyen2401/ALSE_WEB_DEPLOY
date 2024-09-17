var ajaxGet;
var d;
var html_body;
var jsonData;
var r_sub;
$(document).ready(function () {
    $(".datepicker").datepicker({
        showWeek: true,
        firstDay: 1,
        changeMonth: true,
        changeYear: true,
        dateFormat: 'dd/mm/yy',
    });
    $('.timepicker').timepicker(
        { 'timeFormat': 'H:i:s', 'scrollDefault': 'now' }
    );
    fncLoad();
    fncClick();
    fncChange();
    fncAction();
})

function fncLoad() {
    ajaxGet = { "get": "" };
    var jsonData = JSON.stringify({ ajaxGet });

    $.ajax({
        type: "POST",
        url: "QuanLyAPPLEXuatKho.aspx/reXuatKho",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            html_body = "";
            $.each(d, function (key, val) {
                let tomautr = "";
                if (val.TrangThaiCheck == "Đã Xuất") {
                    tomautr = "tomautr";
                }
                html_body += "<tr class=\"" + tomautr + "\">";
                html_body += "<td>" + (key + 1) + "</td>";
                html_body += "<td>" + val.LaiXe + "</td>";
                html_body += "<td>" + val.CMND + "</td>";
                html_body += "<td>" + val.BKSXuat + "</td>";
                html_body += "<td>" + val.SoDienThoai + "</td>";
                html_body += "<td>" + convertDate(val.NgayGioXuat)[5] + "</td>";
                html_body += "<td>";
                html_body += "<span class=\"btn-in btn btn-sm btn-primary\" attrlaiXe=\"" + val.BKSXuat + "\" attrNgayGio=\"" + convertDate(val.NgayGioXuat)[5] + "\"> In </span> "
                html_body += "<span class=\"btn-duyet btn btn-sm btn-info\" attrlaiXe=\"" + val.BKSXuat + "\" attrNgayGio=\"" + convertDate(val.NgayGioXuat)[5] + "\"> Duyệt </span> "
                html_body += "<span class=\"btn-xoa btn btn-sm btn-danger\" attrlaiXe=\"" + val.BKSXuat + "\" attrNgayGio=\"" + convertDate(val.NgayGioXuat)[5] + "\"> Xóa</span> "
                html_body += "</td>";
                html_body += "</tr>";
            });
            $("#tbl_xuatkhoapple tbody").empty().append(html_body);

        },
        error: function (error) {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Liên hệ IT',
                'error'
            )
        }
    }).done(function () {

    })
}

function fncAction() {
    $('#modalGhepXe').on('shown.bs.modal', function () {
        $("#input-search").val("");
        $("#input-bks").val("");
        $("#input-ngayxuat").val("");
        $("#input-gioxuat").val("");
        $("#input-laixe").val("");
        $("#input-cmnd").val("");
        $("#input-sdt").val("");
        $(".td-checkbox").prop("checked", false);
    });
}

function fncClick() {
    $("#tbl_xuatkhoapple").on("click", ".btn-in", function () {
        var BKS = $(this).attr("attrlaixe");
        var NgayGio = $(this).attr("attrngaygio");

        ajaxGet2 = { "get1": BKS, "get2": dmyhhsstoymdhhss(NgayGio) };
        var jsonData = JSON.stringify({ ajaxGet2 });

        $.ajax({
            type: "POST",
            url: "QuanLyAPPLEXuatKho.aspx/reXuatKhoPrint",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d)
                var html_print = "";
                var LaiXe = "";
                var NgayGioXuat = "";
                var BKSXuat = "";
                var CMND = "";
                $.each(d, function (key, item) {
                    html_print += "<tr id=\"tr-print-" + item.PLT_ID + "\" class=\"tr-print\">";
                    html_print += "<td class=\"td-print-stt auto-style3 bdbl\" style=\"border:1px solid !important;\">" + (key + 1) + "</td>";
                    html_print += "<td class=\"auto-style3 bdbl\" style=\"border:1px solid !important;\">" + item.PLT_ID + "</td>";
                    html_print += "<td class=\"auto-style3 bdbl\" style=\"border:1px solid !important;\">" + item.SoKien + "</td>";
                    html_print += "<td class=\"auto-style3 bdbl\" style=\"border:1px solid !important;\">" + item.DN + "</td>";
                    html_print += "<td class=\"auto-style3 bdbl\" style=\"border:1px solid !important;\">" + item.CTN + "</td>";
                    html_print += "<td class=\"auto-style3 bdbl\" style=\"border:1px solid !important;\"></td>";
                    html_print += "<td class=\"auto-style3 bdbl\" style=\"border:1px solid !important;\">" + "" + "</td>";
                    html_print += "</tr>";
                    LaiXe = item.LaiXe;
                    NgayGioXuat = item.NgayGioXuat;
                    BKSXuat = item.BKSXuat;
                    CMND = item.CMND;
                })
                $(".txtTenlaixe").empty().append(LaiXe);
                $(".txtBKS").empty().append(BKSXuat);
                $(".txtNgayGio").empty().append(convertDate(NgayGioXuat)[5]);
                $(".txtcmnd").empty().append(CMND);
                $(".tr-print").remove();
                $("#tg1 tbody").prepend(html_print);
                window.print();

            },
            error: function (error) {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })
    });

    $("#tbl_xuatkhoapple").on("click", ".btn-duyet", function () {
        var BKS = $(this).attr("attrlaixe");
        var NgayGio = $(this).attr("attrngaygio");
        ajaxGet2 = { "get1": BKS, "get2": dmyhhsstoymdhhss(NgayGio) };
        var jsonData = JSON.stringify({ ajaxGet2 });

        $.ajax({
            type: "POST",
            url: "QuanLyAPPLEXuatKho.aspx/UpdateDuyetXuatApple",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d)
                Swal.fire(
                    'Duyệt lô hàng thành công!',
                    'Xin cảm ơn',
                    'info'
                )
            },
            error: function (error) {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
            fncLoad();
        })
    })

    $("#tbl_xuatkhoapple").on("click", ".btn-xoa", function () {
        var BKS = $(this).attr("attrlaixe");
        var NgayGio = $(this).attr("attrngaygio");
        var conf = confirm("Bạn có muốn xóa ghép xe này không?");
        if (conf) {
            ajaxGet2 = { "get1": BKS, "get2": dmyhhsstoymdhhss(NgayGio) };
            var jsonData = JSON.stringify({ ajaxGet2 });

            $.ajax({
                type: "POST",
                url: "QuanLyAPPLEXuatKho.aspx/DeleteXuatApple",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    console.log(d)
                    Swal.fire(
                        'Xóa lô hàng thành công!',
                        'Xin cảm ơn',
                        'info'
                    )
                },
                error: function (error) {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
                fncLoad();
            })
        }

    })


    $("#btn-ghepxe-luu").click(function () {
        var BKS = $("#input-bks").val();
        var LaiXe = $("#input-laixe").val();
        var CMND = $("#input-cmnd").val();
        var SoDienThoai = $("#input-sdt").val();
        var Ngaygioxuat = dmy2ymd($("#input-ngayxuat").val()) + " " + $("#input-gioxuat").val();
        var xuatKhoApples = [];

        $('#tbl-ghepxe tbody tr').each(function () {
            if ($("#td-checkbox-" + $(this).children("td:eq(2)").text() + "").is(":checked")) {
                xuatKhoApples.push({
                    "HAWB":"",
                    "PLT_ID": $(this).children("td:eq(2)").text().trim(),
                    "BKSXuat": BKS,
                    "NgayGioXuat": Ngaygioxuat,
                    "LaiXe": LaiXe,
                    "KienSo":"",
                    "DN": "",
                    "SSCC": "",
                    "CMND": CMND,
                    "SoDienThoai": SoDienThoai,
                });
            }
        });
        jsonData = JSON.stringify({ xuatKhoApples });
        $.ajax({
            type: "POST",
            url: "QuanlyAPPLEXuatKho.aspx/UpdateXuatApple",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire(
                    'Ghép xe thành công!',
                    'Cảm ơn'
                )
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
            fncLoad();
            $("#modalGhepXe").modal("hide")
        });
    });

    $("#btn-ghepxe").click(function () {
        $("#modalGhepXe").modal("show");
        LoadData("");
    });

    $("#btn-xem").click(function () {
        var search = $("#input-search").val();
        if (search == "") {
            alert("Vui lòng nhập thông tin tìm kiếm");
        } else {
            LoadData(search);
        }
    })

    $("#tbl-ghepxe tbody").on("click", ".td-status", function () {
        if ($(".tr-sub").attr("sub-pltid") === $(this).closest("tr").attr("apple-pltid")) {
            $(".tr-sub").remove();
        } else {
            fncAppleSub($(this).closest("tr").attr("apple-pltid"));
        }
    })
}

function fncChange() {
    $("#tbl-ghepxe").on("change", ".td-checkbox", function () {
        //console.log(this.checked)
        //console.log($(this).val())
        if ($(this).val() == "ALL") {
            if (this.checked) {
                $(".td-checkbox-child").prop("checked", true);
            } else {
                $(".td-checkbox-child").prop("checked", false);
            }
        } else {

        }
        //if (this.checked) {
        //    $(".tr-qll-view").each(function (index, val) {
        //        if ($(this).css('display') != 'none') {
        //            $("#td-checkbox-" + $(this).attr("hawb")).prop("checked", true);
        //        }
        //    })
        //} else {
        //    $(".td-checkbox-child").prop("checked", false);
        //}
    })
}

function LoadData(search) {
    $("#tbl-ghepxe tbody").empty();
    ajaxGet = {
        "get": search
    };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyAPPLEXuatKho.aspx/reXuatKhoGhepXe",
        data: jsonData,
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            var d = responsive.d;
            html_body = "";
            $.each(d, function (key, val) {
                html_body += "<tr id=\"tr-pltid-" + val.PLT_ID.trim() + "\" hawb=\"" + val.PLT_ID.trim() + "\" apple-pltid=\"" + val.PLT_ID.trim() + "\"  class=\"tr-qll-view\"  >";
                html_body += "<td class=\"\">" + "<input class=\"td-checkbox td-checkbox-child \" id=\"td-checkbox-" + val.PLT_ID.trim() + "\" type=\"checkbox\" value=\"" + val.PLT_ID.trim() + "\" />" + "</td>";
                html_body += "<td class=\"td-stt\">" + (key + 1) + "</td>";
                html_body += "<td class=\"td-status td-PLTID\">" + val.PLT_ID + "</td>";
                html_body += "<td class=\"td-PLT\">" + val.SoKien + "</td>";
                html_body += "<td class=\"td-CTN\">" + val.CTN + "</td>";
                html_body += "</tr>";
            });

            $("#tbl-ghepxe tbody").append(html_body);

        }, error: function (error) {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Liên hệ IT',
                'error'
            )
        }
    }).done(function () {

    });
}

function fncAppleSub(pltId) {
    ajaxGet = { "get": pltId };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyAPPLEXuatKho.aspx/reXuatKhoSub",
        data: jsonData,
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            var d = responsive.d;
            r_sub = "";
            r_sub += "<tr class=\"tr-sub\" sub-pltid=\"" + pltId + "\" >";
            r_sub += "<td colspan=\"1\">";
            //r_sub += "<input id=\"btn-print-new\" class=\"btn btn-primary btn-sm no-print\" type=\"button\" value=\"In\">";
            //r_sub += "<input id=\"btn-edit-new\" class=\"btn btn-info btn-sm no-print\" type=\"button\" value=\"Sửa\">";

            //r_sub += "<input id=\"btn-delete\" class=\"btn btn-danger btn-sm no-print\" type=\"button\" value=\"Xóa\">";
            //r_sub += "<input id=\"btn-activity\" class=\"btn btn-success btn-sm no-print\" type=\"button\" value=\"Quản lý\">";
            //r_sub += "<input id=\"btn-sendmnf\" class=\"btn btn-warning btn-sm no-print\" type=\"button\" value=\"Gửi MNF\">";
            r_sub += "</td>";
            r_sub += "<td colspan=\"4\">";
            r_sub += "<table class=\"table table-bordered table-sub\" id=\"tbl-sub-" + pltId + "\">";
            r_sub += "<thead>";
            r_sub += "<tr>";
            r_sub += "<td>" + "NO" + "</td>";
            r_sub += "<td>" + "HAWB" + "</td>";
            r_sub += "<td>" + "DN" + "</td>";
            r_sub += "<td>" + "SSCC" + "</td>";
            r_sub += "<td>" + "SL CTN" + "</td>";
            r_sub += "</tr>";
            r_sub += "</thead>";
            r_sub += "<tbody>";
            $.each(d, function (key,val) {
                r_sub += "<tr>"; 
                r_sub += "<td>" + (key + 1) + "</td>";
                r_sub += "<td>" + val.HAWB + "</td>";
                r_sub += "<td>" + val.DN + "</td>";
                r_sub += "<td>" + val.SSCC + "</td>";
                r_sub += "<td>" + val.SLSSCC + "</td>";
            })
            r_sub += "</tbody>";
            r_sub += "</table>";
            r_sub += "</td>";
            r_sub += "</tr>";
            $(r_sub).insertAfter($("#tr-pltid-" + pltId));
        }, error: function (error) {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Liên hệ IT',
                'error'
            )
        }
    }).done(function () {

    });

}