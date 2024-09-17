var html_selectBKS = "";

$(document).ready(function () {
    $("#input-ngaytrahang").val(moment().format("DD/MM/YYYY"));
    fncLoad();
    fncClick();
    fncAction();
    fncChange();


});

function fncAction() {
    $("#ModalAddTruck").on('hidden.bs.modal', function () {
        $("#ModalTruck").modal('show');
        $("#input-laixe").val("");
        $("#input-bks").val("");
        $("#input-sdt").val("");
        fncLoadTruckPOD();
    })
}

function fncLoad() {
    $(".txtngaylayhang").val($("#input-ngaytrahang").val());
    fncLoadTruckPOD();
    var ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    //$("#div-wait").show();
    $.ajax({
        type: "POST",
        url: "PODView.aspx/rehangNhapPOD",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            console.log(d);
            var html_tbody = "";
            $.each(d, function (key, val) {
                html_tbody += "<tr>";
                html_tbody += "<td  class=\"ClassfontSize8 textleft\">" + (key + 1) + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textDam font-size12\">" + val.Invoice + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textDam font-size12\">" + val.HAWB + "</td>";
                html_tbody += "<td contenteditable class=\"ClassfontSize8 textleft textwidth1 \">" + val.NCC_update_tu_KH + "</td>";
                html_tbody += "<td contenteditable class=\"ClassfontSize8 textleft\">" + val.SoBU + "</td>";
                html_tbody += "<td contenteditable   class=\"ClassfontSize8 textleft textDam font-size12\">" + val.SoKienGiao + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textDam font-size12\"></td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textDam\"></td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textDam\"></td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 \"></td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 \">" + val.TrongLuong1 + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 \">" + val.TrongLuong1 + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\"></td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\">" + val.DiaChiGiaoHang + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\">" + val.NguoiNhan_update_tu_KH + "</td>";
                html_tbody += "<td contenteditable class=\"ClassfontSize8 textleft tdwidth\">" + splitText(val.SoDTNguoiNhan_update_tu_KH) + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textwidthNgayGiao\">" + convertDate(val.NgayYeuCauTraHang)[4] + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textwidth\"></td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textwidthMathe\"></td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textNone\"></td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textwidthSoKien\"></td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\">" + val.REMARK + "</td>";
                html_tbody += "</tr>";
            });

            $("#tablePOD tbody").prepend(html_tbody);
            //$("#tablePOD").DataTable({
            //    responsive: true,
            //    destroy: true,
            //    static: true,
            //    scrollX: true,
            //    "paging": false,
            //});
        },
        error: function () {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Thử lại hoặc liên hệ IT',
                'error'
            )
        }
    }).done(function () {
    })
}
function fncClick() {
    //click xóa truck
    $(".container").on("click", ".span-xoa", function () {
        console.log($(this).attr("idattr"));
        var conf = confirm("Bạn có muốn xóa lái xe này không ?");
        if (conf == true) {
            var ajaxGet = { "get": $(this).attr("idattr") };

            jsonData = JSON.stringify({ ajaxGet });
            //$("#div-wait").show();rehangNhapPODTimKiem
            $.ajax({
                type: "POST",
                url: "PODView.aspx/deleteTruckPOD",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    console.log(d);
                    alert('Xóa thành công!')
                    fncLoadTruckPOD()
                    $("#ModalAddTruck").modal("hide");
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

    //Click view modal sua
    $(".container").on("click", ".span-sua", function () {
        console.log($(this).attr("idattr"));
        $("#btn-luu").attr("attrid", $(this).attr("idattr"));

        $("#ModalAddTruck").modal("show");
        $("#ModalTruck").modal("hide");

        var ajaxGet = { "get": $(this).attr("idattr") };

        jsonData = JSON.stringify({ ajaxGet });
        //$("#div-wait").show();rehangNhapPODTimKiem
        $.ajax({
            type: "POST",
            url: "PODView.aspx/reTruckPODByID",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                $("#input-laixe").val(d.LaiXe)
                $("#input-bks").val(d.BienSoXe)
                $("#input-sdt").val(d.SoDienThoai)
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
    })


    // Click add truck
    $("#btn-luu").click(function () {
        var tennhanvien = $("#input-laixe").val();
        var biensoxe = $("#input-bks").val();
        var sodienthoai = $("#input-sdt").val();

        var ajaxGet4 = { "get1": biensoxe, "get2": tennhanvien, "get3": sodienthoai, "get4": $(this).attr("attrid") };

        jsonData = JSON.stringify({ ajaxGet4 });
        //$("#div-wait").show();rehangNhapPODTimKiem
        $.ajax({
            type: "POST",
            url: "PODView.aspx/insertTruckPOD",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                if (d == "ok") {
                    alert("Thêm mới thành công!");
                    $("#ModalAddTruck").modal("hide");
                };
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })
    });

    //Add truck modal show
    $("#btn-themlaixe").click(function () {
        $("#ModalTruck").modal("hide");
        $("#ModalAddTruck").modal("show");
        $("#btn-luu").attr("attrid", "");
    });

    // show modal truck
    $("#btn-truck").click(function () {
        $("#ModalTruck").modal("show");
        fncLoadTruckPOD();
    });

    $("#btn-printPOD").click(function () {
        window.print();
    });

    $("#btn-locPOD").click(function () {
        var nguoinhanhang = $("#input-nguoinhanhang").val();
        var nhacungcap = $("#input-nhacungcap").val();
        var diachigiao = $("#input-diachigiao").val();
        var ngaytrahang = $("#input-ngaytrahang").val();
        var giotrahang = $("#input-giotrahang").val().trim();
        var ngaylayhang = "";

        var ajaxGet5 = { "get1": giotrahang, "get2": nguoinhanhang, "get3": nhacungcap, "get4": diachigiao, "get5": dmy2ymd4(ngaytrahang) };
        jsonData = JSON.stringify({ ajaxGet5 });
        //$("#div-wait").show();rehangNhapPODTimKiem
        $.ajax({
            type: "POST",
            url: "PODView.aspx/rehangNhapPODTimKiem",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                var html_tbody = "";
                $.each(d, function (key, val) {
                    html_tbody += "<tr>";
                    html_tbody += "<td  class=\"ClassfontSize8 textleft\">" + (key + 1) + "</td>";
                    html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textDam font-size12\">" + val.Invoice + "</td>";
                    html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textDam font-size12\">" + val.HAWB + "</td>";
                    html_tbody += "<td contenteditable class=\"ClassfontSize8 textleft\">" + val.NCC_update_tu_KH + "</td>";
                    html_tbody += "<td contenteditable class=\"ClassfontSize8 textleft\">" + val.SoBU + "</td>";
                    html_tbody += "<td contenteditable   class=\"ClassfontSize8 textleft textDam font-size12\">" + val.SoKienGiao + "</td>";
                    html_tbody += "<td contenteditable  class=\"ClassfontSize8 textDam font-size12\"></td>";
                    html_tbody += "<td contenteditable  class=\"ClassfontSize8 textDam\"></td>";
                    html_tbody += "<td contenteditable  class=\"ClassfontSize8 textDam\"></td>";
                    html_tbody += "<td contenteditable  class=\"ClassfontSize8 \"></td>";
                    html_tbody += "<td contenteditable  class=\"ClassfontSize8 \">" + val.TrongLuong1 + "</td>";
                    html_tbody += "<td contenteditable  class=\"ClassfontSize8 \">" + val.TrongLuong1 + "</td>";
                    html_tbody += "<td contenteditable   class=\"ClassfontSize8 textleft\"></td>";
                    html_tbody += "<td contenteditable   class=\"ClassfontSize8 textleft\">" + val.DiaChiGiaoHang + "</td>";
                    html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\">" + val.NguoiNhan_update_tu_KH + "</td>";
                    html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\">" + splitText(val.SoDTNguoiNhan_update_tu_KH) + "</td>";
                    html_tbody += "<td contenteditable   class=\"ClassfontSize8 textleft textwidthNgayGiao\">" + convertDate(val.NgayYeuCauTraHang)[4] + "</td>";
                    html_tbody += "<td contenteditable   class=\"ClassfontSize8 textleft  textwidth \"></td>";
                    html_tbody += "<td contenteditable   class=\"ClassfontSize8 textleft  textwidthMathe textNone\"></td>";
                    html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textNone\"></td>";
                    html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textwidthSoKien\"></td>";
                    html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\">" + val.REMARK + "</td>";
                    html_tbody += "</tr>";
                    ngaylayhang = convertDate(val.NgayYeuCauTraHang)[4];
                });
                html_tbody += "<tr>";
                html_tbody += "<td class=\"ClassfontSize8\" rowspan=\"2\">车辆<br />";
                html_tbody += "信息<br />";
                html_tbody += "Thông<br />";
                html_tbody += "tin xe</td>";
                html_tbody += "<td class=\"ClassfontSize8\" colspan=\"3\" rowspan=\"2\">物流供方名称：<input value=\"ALSE\" class=\"nobdInput\" style=\"width: 70px\" type=\"text\" /><br />";
                html_tbody += "Tên FWD vận chuyển</td>";
                html_tbody += "<td class=\"ClassfontSize8\" colspan=\"3\" rowspan=\"2\">车牌号：";
                //html_tbody += "<select class=\"nobd selectchange\">" + html_selectBKS + "</select ><br />";

                html_tbody += "<input  class=\"nobdInput\"  id=\"txtChange\" type=\"text\" list=\"sltBKS\" />";
                html_tbody += "<datalist class=\"nobdInput\" id=\"sltBKS\">";
                html_tbody += html_selectBKS;
                html_tbody += "</datalist>";

                html_tbody += "Số xe</td>";
                html_tbody += "<td class=\"ClassfontSize8\" colspan=\"5\" rowspan=\"2\">司机姓名：";
                html_tbody += "<input id=\"txtnhanvien\"  class=\"nobdInput\" style=\"width: 100px\" type=\"text\" /><br />";
                html_tbody += "Tên</td>";
                html_tbody += "<td class=\"ClassfontSize8\" colspan=\"3\" rowspan=\"2\">电话：<input id=\"txtsodienthoai\" class=\"nobdInput\" style=\"width: 60px\" type=\"text\" /><br />";
                html_tbody += "SĐT</td>";
                html_tbody += "<td class=\"ClassfontSize8\" colspan=\"4\" rowspan=\"2\">提货司机签字:<input class=\"nobdInput\" style=\"width: 60px\" type=\"text\" /><br />";
                html_tbody += "Lái";
                html_tbody += "<br />";
                html_tbody += "xe lấy";
                html_tbody += "<br />";
                html_tbody += "hàng";
                html_tbody += "<br />";
                html_tbody += "kí tên</td>";
                html_tbody += "<td class=\"ClassfontSize8\" colspan=\"4\" rowspan=\"2\">提货日期：<input class=\"nobdInput txtngaylayhang\" style=\"width: 60px\" type=\"text\" /><br />";
                html_tbody += "Ngày lấy ";
                html_tbody += "<br />";
                html_tbody += "hàng";
                html_tbody += "</td>";
                html_tbody += "</tr>";
                html_tbody += "<tr>";
                html_tbody += "</tr>";
                html_tbody += "<tr>";
                html_tbody += "<td class=\"ClassfontSize8\" rowspan=\"2\">异常<br />";
                html_tbody += "Bất<br />";
                html_tbody += "thường</td>";
                html_tbody += "<td class=\"ClassfontSize8\" rowspan=\"2\" colspan=\"10\">提示：在提货时请核对货物数量，如有质量问题或数量差异，请在下方注明（否则视为完好）。谢谢！<br />";
                html_tbody += "提货异常描述：<br />";
                html_tbody += "Cảnh báo:  Khi  lấy hàng phải đối chiếu số lượng hàng, nếu như có vấn đề về chất lượng hoặc số lượng thiếu, ";
                html_tbody += "Hãy điền rõ thông tin vào cột ghi chú trong bảng(nếu không sẽ nhầm là đầy đủ).Cảm ơn";
                html_tbody += "<br/>";
                html_tbody += "Miêu tả sự bất thường khi lấy hàng:</td>";
                html_tbody += "<td class=\"ClassfontSize8\" rowspan=\"2\" colspan=\"12\">异常日期：<br />";
                html_tbody += "Ngày phát sinh bất thường:</td>";
                html_tbody += "</tr>";
                html_tbody += "<tr>";
                html_tbody += "</tr>";

                $("#tablePOD tbody").empty().append(html_tbody);
                $(".txtngaylayhang").val($("#input-ngaytrahang").val());
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })
    });
}


function fncLoadTruckPOD() {
    var ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    //$("#div-wait").show();rehangNhapPODTimKiem
    $.ajax({
        type: "POST",
        url: "PODView.aspx/reTruckPOD",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            var html_tbody = "";

            html_selectBKS += "<option value=\"\"></option>"
            $.each(d, function (key, val) {
                html_tbody += "<tr>";
                html_tbody += "<td>" + (key + 1) + "</td>";
                html_tbody += "<td>" + val.LaiXe + "</td>";
                html_tbody += "<td>" + val.BienSoXe + "</td>";
                html_tbody += "<td>" + val.SoDienThoai + "</td>";
                html_tbody += "<td><span class=\"span-sua\" IdAttr=\"" + val.ID + "\">Sửa</span> <span class=\"span-xoa\"  IdAttr=\"" + val.ID + "\">Xóa</span></td>";
                html_tbody += "</tr>";

                html_selectBKS += "<option value=\"" + val.BienSoXe + "\">" + val.BienSoXe + "</option>"
            });
            $("#sltBKS").empty().append(html_selectBKS);
            $("#tbl-truckpod tbody").empty().append(html_tbody);
        },
        error: function () {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Thử lại hoặc liên hệ IT',
                'error'
            )
        }
    }).done(function () {
    })
}

function splitText(input) {
    var text = "";
    var splitInput = input.split("/");
    //console.log(splitInput.length);
    if (splitInput.length > 1) {
        for (var j = 0; j <= splitInput.length; j++) {
            if (splitInput[j] !== undefined) {
                text += splitInput[j] + "<br/>";
            }
        }
    } else {
        text = input;
    }

    return text;
}


function fncChange() {
    $(".container").on("change", "#txtChange", function () {
        fncLoadOrigin($(this).val());
    });


    $(".container").on("change", ".selectchange", function () {
        fncLoadOrigin($(this).val());
    });
}

//Load lai xe va so dien thoai
function fncLoadOrigin(input) {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": input };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "PODView.aspx/LoadOrigin",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            $("#txtnhanvien").val(d.LaiXe);
            $("#txtsodienthoai").val(d.SoDienThoai);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}

