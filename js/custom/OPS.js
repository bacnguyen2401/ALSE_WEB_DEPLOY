var d;
var html = "";
var html_sub = "";
var html_sub1 = "";
var html_sub2 = "";
var html_sub3 = "";
var html_sub_menu = "";
var html_tbody = "";
var array = [];
var datatableGet;
var html_table = "";
var arrModel = [];
var arrGW = [];
var objectCommodity;
var objectPIN;
var WHTraVe = "";
var duyetCNEE;
var commondity = "";
var MawbChange;
var pinOld = "";
var textHandlingAsign = "";
var htmlRadio = "";
var valueRadio;
var valueRadioDate;
var tomaufltDT;
var momentDtflt;
var setOpacity;
var html_Package;
var hscode;
var arrMaterial = [];
var arrHSCode = [];
var lengthpin;
var lengthMol;
var lengthMaterial;
var arrSR = [];
var ghichuAss;
var arrMAWB = [];
var arrLabel = [];
var html_multipleLabel = "";
var tomauGW;
var jsonData;
var arrMAWBCheck = [];
var lengthMAWB;
var lengthData;
var checkData;
var soMAWBtontai = "";
var momentDtPl;
var arrTempData = {};
var htmlWH = {};
var valueRadioNgay;


$(document).ready(function () {

    loadFWD();
    fncClick();
    if (localStorage.getItem("FWD") !== null && localStorage.getItem("DatetimeSort") !== null && localStorage.getItem("RadioLocTheoNgay") !== null) {
        fncLoadClick();
        $(".changeSelectFWD").val(localStorage.getItem("FWD"))
        $(".changeSelectDatetime").val(localStorage.getItem("DatetimeSort"))
        $(".changeSelectNgayHeThong").val(localStorage.getItem("RadioLocTheoNgay"))
    } else {
        $("#ModalFWD").modal({
            show: true,
            backdrop: 'static',
            keyboard: false
        });
    }

    $(".txtNgayLoc").val(moment().format("DD/MM/YYYY"));


});

// FNC Action Modal
function fncModalAction() {
    $('#modalDuyetMST').on('shown.bs.modal', function () {
        $("#input-chungnhan").val("");
        //$("#input-masothue").val("");
    });

    $('#modalAddMawb').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });

    $('#modalSR').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });

    $('#modalSCapNhatHangThucTe').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });

    $('#modalSuaKeHoach').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });

    $('#modalShowCNEE').on('hidden.bs.modal', function () {
        $(".radioCheckBox").prop("checked", false);
    });


    $('#myModalCNEESHIPPER').on('hide.bs.modal', function () {
        $("#modalConfig").modal("show");
    });

    $('#myModalCNEESHIPPER-Edit').on('show.bs.modal', function () {
        $("#modalConfig").modal("hide");
    });
    $('#myModalCNEESHIPPER-Edit').on('hidden.bs.modal', function () {
        $("#myModalCNEESHIPPER").modal("show");
        fncLoadCNEESHPPER("");
    });

    $('#myModalDEST').on('hide.bs.modal', function () {
        $("#modalConfig").modal("show");
    });

    $('#myModalDEST-Edit').on('show.bs.modal', function () {
        $("#modalConfig").modal("hide");
    });

    $('#myModalDEST-Edit').on('hidden.bs.modal', function () {
        $("#myModalDEST").modal("show");
        fncLoadDEST("");
    });

    $('#myModalMODEL').on('hide.bs.modal', function () {
        $("#modalConfig").modal("show");
    });

    $('#myModalMODEL-Edit').on('show.bs.modal', function () {
        $("#modalConfig").modal("hide");
    });

    $('#myModalMODEL-Edit').on('hidden.bs.modal', function () {
        $("#myModalMODEL").modal("show");
        fncLoadMODEL("");
    });


    $('#myModalCOMMODITY').on('hide.bs.modal', function () {
        $("#modalConfig").modal("show");
    });


    $('#myModalCOMMODITY-Edit').on('show.bs.modal', function () {
        $("#modalConfig").modal("hide");
    });

    $('#myModalCOMMODITY-Edit').on('hidden.bs.modal', function () {
        $("#myModalCOMMODITY").modal("show");
        fncLoadCOMMODITY("");
    });


    $('#myModalFLIGHTNO').on('hide.bs.modal', function () {
        $("#modalConfig").modal("show");
    });

    $('#myModalFLIGHTNO-Edit').on('show.bs.modal', function () {
        $("#modalConfig").modal("hide");
    });

    $('#myModalFLIGHTNO-Edit').on('hidden.bs.modal', function () {
        $("#myModalFLIGHTNO").modal("show");
        fncLoadFLTNO("");
    });

    $('#myModalAIRLINE').on('hide.bs.modal', function () {
        $("#modalConfig").modal("show");
    });

    $('#myModalAIRLINE-Edit').on('show.bs.modal', function () {
        $("#modalConfig").modal("hide");
    });

    $('#myModalAIRLINE-Edit').on('hidden.bs.modal', function () {
        $("#myModalAIRLINE").modal("show");
        fncLoadAIRLINE("");
    });

    $('#myModalDOC').on('hide.bs.modal', function () {
        $("#modalConfig").modal("show");
    });

    $('#myModalDOC-Edit').on('show.bs.modal', function () {
        $("#modalConfig").modal("hide");
    });

    $('#myModalDOC-Edit').on('hidden.bs.modal', function () {
        $("#myModalDOC").modal("show");
        fncLoadDOC("");
    });

    $("#ModalMutipleLabel").on('hidden.bs.modal', function () {
        $('[type=checkbox]').prop("checked", false);
    });
}

// FNC Click change
function fncClickChage() {
    // Click show update excel
    $("#btn-uploadshow").click(() => {
        $("#myModalUpload").modal("show");
        $("#tbl-upload-imgzone tbody").empty();
        fncResetProcessBar();
    })

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
            imgdata.append("folder", "TEMP");
            imgdata.append("root", "OPS");
            for (var t = 10; t < 30; t++) {
                $("#div-upload-process-bar").attr("style", "width:" + t + "%");
                $("#div-upload-process-bar").text(t + "%");
            }
            $.ajax({
                type: "POST",
                url: "AjaxFileUploader.ashx",
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
            })
        } else {
            fncResetProcessBar();
            alert("Ảnh đã được upload!");
        }
    })

    // Click print multiple Label
    $(".print-multipleLabel").click(function () {
        $("#ModalMutipleLabel").modal("hide")
        $("#container-inlabel").empty()
        $("#inMNF").addClass("noneMNF");
        $(".inSLINCTS").addClass("noneSLI");
        $("#container-inlabel").removeClass("noneLable");
        $("#informAirline").addClass("noneAirline");
        $('.ads_Checkbox:checked').each(function () {
            var ajaxGet = { "get": $(this).val() };
            jsonData = JSON.stringify({ ajaxGet });

            UpdateMAWB($(this).val(), "label", "check");
            fncLoadCheckMaWB($(this).val())
            //$("#div-wait").show();
            $.ajax({
                type: "POST",
                url: "OPS.aspx/ReOPSViewsTemLabel",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    //console.log(d);
                    var html_multipleLabel = "";

                    var soHawbSoSanh = "";
                    var soTangDan = 1;
                    var totalKienHAWB = 1;

                    $.each(d, function (key, val) {
                        for (var i = 1; i <= val.KienHAWB; i++) {
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
                            if (val.HANGBAY.length <= 10) {
                                airLine__hangbay_css = "airLine__hangbay_css";
                            }
                            html_multipleLabel += "<div class=\"page\">";
                            html_multipleLabel += "<div class=\"mainDHL \">";
                            html_multipleLabel += "<div class=\"temDHL\">";
                            html_multipleLabel += "<div class=\"airLine\">";
                            html_multipleLabel += "<span>Airline</span>";
                            html_multipleLabel += "<span></span>"; //QR8953 / 28NOV
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "<div class=\"airLine__hangbay\">";
                            html_multipleLabel += "<img class=\"airLineImg\" src=\"./images/OPS/back-image.jpg\" alt=\"\">";
                            html_multipleLabel += "<span class=\"airLine__hangbay-name " + airLine__hangbay_css + "\">" + val.HANGBAY + "</span>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "<div class=\"barcode__MAWB\">";
                            html_multipleLabel += "<span><svg  class=\"barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + val.MAWB + htmlsomawbTangDan + "\"></svg></span>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "<div class=\"mawbNumber\">";
                            html_multipleLabel += "<div class=\"mawbNumber-title fontweight600\">Master Air Waybill Number</div>";
                            html_multipleLabel += "<div class=\"mawbNumber-MAWB\">";
                            html_multipleLabel += "" + catchu(val.MAWB) + "";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "<div class=\"disMawb\">";
                            html_multipleLabel += "<div class=\"disMawb__destination\">";
                            html_multipleLabel += "<div class=\"disMawb__destination-title fontweight600\">Destination</div>";
                            html_multipleLabel += "<div class=\"disMawb__destination-name\"><span class=\"disMawb__destination-name_span\">" + val.DEST_MAWB + "</span></div>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "<div class=\"disMawb__totalPriece\">";
                            html_multipleLabel += "<div class=\"disMawb__totalPriece-title fontweight600\">Total No of Pieces</div>";
                            html_multipleLabel += "<div class=\"disMawb__totalPriece-name\"><span class=\"disMawb__totalPriece_span\">" + val.TongKienMAWB + "</span></div>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "<div class=\"barcode__MAWB\">";
                            html_multipleLabel += "<span><svg class=\"barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"H" + val.HAWB + "+Y" + htmlsoHawbTangDan + "+" + "\"></svg></span>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "<div class=\"mawbNumber\">";
                            html_multipleLabel += "<div class=\"mawbNumber-title fontweight600\">House Air Waybill Number</div>";
                            html_multipleLabel += "<div class=\"mawbNumber-MAWB\">";
                            html_multipleLabel += "" + val.HAWB + "";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "<div class=\"dis__HAWB\">";
                            html_multipleLabel += "<div class=\"dis__HAWB-origin\">";
                            html_multipleLabel += "<div class=\"dis__HAWB-origin-title fontweight600\">Origin</div>";
                            html_multipleLabel += "<div class=\"dis__HAWB-origin-name\">HAN</div>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "<div class=\"dis__HAWB-destination\">";
                            html_multipleLabel += "<div class=\"dis__HAWB-destination-title fontweight600\">Destination</div>";
                            html_multipleLabel += "<div class=\"dis__HAWB-destination-name\">" + val.DEST_HAWB + "</div>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "<div class=\"dis__HAWB-totalHAWB\">";
                            html_multipleLabel += "<div class=\"dis__HAWB-totalHAWB-title fontweight600\">Total No .of HAWB Pieces</div>";
                            html_multipleLabel += "<div class=\"dis__HAWB-totalHAWB-name\">" + val.KienHAWB + "</div>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "<div class=\"footer\">";
                            html_multipleLabel += "<div class=\"footer__Service\">";
                            html_multipleLabel += "<div class=\"footer__Service-type\">";
                            html_multipleLabel += "<span class=\"fontweight600\">Service Type</span>";
                            html_multipleLabel += "<span></span>"; //QR8953 / 28NOV
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "<div class=\"footer__Service-date\">";
                            html_multipleLabel += "<span></span>"; //QR8953 / 28NOV
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "<div class=\"footer__Img\">";
                            html_multipleLabel += "<img src=\"./images/OPS/DHL.png\" alt=\"\">";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "</div>";
                            html_multipleLabel += "</div>";
                            soTangDan++;
                        }
                    });
                    $("#container-inlabel").append(html_multipleLabel);

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
            JsBarcode(".barcode").init();

        });

        setTimeout(function () {
            window.print();
        }, 100);
    })

    //Multiple Label modal show
    $("#btn-multipleLabel").click(function () {
        $("#ModalMutipleLabel").modal("show");
        var html_thead = "";
        html_thead += "<tr>";
        html_thead += "<td></td>";
        html_thead += "<td>MAWB</td>";
        html_thead += "<td>LABEL</td>";
        html_thead += "<td>Ngày</td>";
        html_thead += "</tr>";
        $(".tbl-multipleLabel thead").empty().append(html_thead)

        ajaxGet = { "get": localStorage.getItem("FWD") };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "OPS.aspx/loadMultipleMAWB",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d)
                html_multipleLabel = "";
                $.each(d, function (key, val) {
                    html_multipleLabel += "<tr>";
                    html_multipleLabel += "<td>";
                    html_multipleLabel += "<input  id=\"ad_Checkbox" + (key + 1) + "\" class=\"ads_Checkbox\" type=\"checkbox\" value=\"" + val.MAWB + "\" />"
                    html_multipleLabel += "</td>";
                    html_multipleLabel += "<td>" + catchu(val.MAWB) + "</td>";
                    html_multipleLabel += "<td>" + showIcon(val.LABEL) + "</td>";
                    html_multipleLabel += "<td>" + convertDate(val.NgayGioCheckLabel)[5] + "</td>";
                    html_multipleLabel += "</tr>";
                })
                $(".tbl-multipleLabel tbody").empty().append(html_multipleLabel)
                $(".tbl-multipleLabel").DataTable({
                    retrieve: true,
                });

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

    })
    // Change FWD
    $(".changeSelectFWD").change(function () {
        localStorage.removeItem("FWD");
        localStorage.setItem("FWD", $(this).val());
    })

    // Change Ngày sắp xếp
    $(".changeSelectDatetime").change(function () {
        localStorage.removeItem("DatetimeSort");
        localStorage.setItem("DatetimeSort", $(this).val());
    })

    // Change Ngày lọc
    $(".changeSelectNgayHeThong").change(function () {
        localStorage.removeItem("RadioLocTheoNgay");
        localStorage.setItem("RadioLocTheoNgay", $(this).val());
    })

    // list doc
    $(".btn-doc").click(function () {
        event.stopPropagation();
        $("#modalConfig").modal("hide");
        $("#myModalDOC").modal("show");
        fncLoadDOC("");
    })


    $("#myModalDOC").on('click', '#btn-doc-them', function () {
        event.stopPropagation();
        $("#myModalDOC").modal("hide");
        $("#myModalDOC-Edit").modal("show");
        $(".input-doc-clear").val("");
        $("#btn-doc-edit-luu").attr("btn-iddoc", "");
    })

    // thêm doc
    $("#myModalDOC-Edit").on("click", "#btn-doc-edit-luu", function () {
        event.stopPropagation();
        fncEditDOC($("#btn-doc-edit-luu").attr("btn-iddoc"));
    })

    // double click hiển thị doc theo ID
    $("#myModalDOC").on("dblclick", "#tbl-doc tbody tr", function () {
        event.stopPropagation();
        $("#myModalDOC").modal("hide");
        $("#myModalDOC-Edit").modal("show");
        fncEditDOCBYID($(this).attr("doc-id"));

        // Click xóa doc
        $("#myModalDOC").on("click", ".btn-doc-xoa", function () {
            event.stopPropagation();
            var confirm_text = "";
            confirm_text += "Bạn chắc chắn muốn xóa!\n";
            confirm_text += "CODE_3_SO: " + $(this).closest("tr").find(".td-code3").text() + "\n";
            confirm_text += "CODE_2_CHU: " + $(this).closest("tr").find(".td-code3").text() + "\n";
            if (confirm(confirm_text)) {
                fncDeleteDOC($(this).closest("tr").attr("doc-id"))
            }
        })
    })

    // list airline
    $(".btn-airline").click(function () {
        event.stopPropagation();
        $("#modalConfig").modal("hide");
        $("#myModalAIRLINE").modal("show");
        fncLoadAIRLINE("");
    })

    $("#myModalAIRLINE").on('click', '#btn-airline-them', function () {
        event.stopPropagation();
        $("#myModalAIRLINE").modal("hide");
        $("#myModalAIRLINE-Edit").modal("show");
        $(".input-airline-clear").val("");
        $("#btn-airline-edit-luu").attr("btn-idairline", "");
    })

    // thêm AIRLINE
    $("#myModalAIRLINE-Edit").on("click", "#btn-airline-edit-luu", function () {
        event.stopPropagation();
        fncEditAIRLINE($("#btn-airline-edit-luu").attr("btn-idairline"));
    })

    // double click hiển thị commodity theo ID
    $("#myModalAIRLINE").on("dblclick", "#tbl-airline tbody tr", function () {
        event.stopPropagation();
        $("#myModalAIRLINE").modal("hide");
        $("#myModalAIRLINE-Edit").modal("show");
        fncEditAIRLINEBYID($(this).attr("airline-id"));
    })

    // Click xóa airline
    $("#myModalAIRLINE").on("click", ".btn-airline-xoa", function () {
        event.stopPropagation();
        var confirm_text = "";
        confirm_text += "Bạn chắc chắn muốn xóa!\n";
        confirm_text += "AIRLINE CODE: " + $(this).closest("tr").find(".td-airlinecode").text() + "\n";
        confirm_text += "AIRLINE NAME: " + $(this).closest("tr").find(".td-airlinename").text() + "\n";
        if (confirm(confirm_text)) {
            fncDeleteAIRLINE($(this).closest("tr").attr("airline-id"))
        }
    })


    // list flt dest
    $(".btn-flightno-des").click(function () {
        event.stopPropagation();
        $("#modalConfig").modal("hide");
        $("#myModalFLIGHTNO").modal("show");
        fncLoadFLTNO("");
    })

    $("#myModalFLIGHTNO").on('click', '#btn-flightno-them', function () {
        event.stopPropagation();
        $("#myModalFLIGHTNO").modal("hide");
        $("#myModalFLIGHTNO-Edit").modal("show");
        $(".input-fltno-clear").val("");
        $("#btn-fltno-edit-luu").attr("btn-idfltno", "");
    })

    // thêm flt dest
    $("#myModalFLIGHTNO-Edit").on("click", "#btn-fltno-edit-luu", function () {
        event.stopPropagation();
        fncEditFLTNO($("#btn-fltno-edit-luu").attr("btn-idfltno"));
    })

    // double click hiển thị commodity theo ID
    $("#myModalFLIGHTNO").on("dblclick", "#tbl-flightno tbody tr", function () {
        event.stopPropagation();
        $("#myModalFLIGHTNO").modal("hide");
        $("#myModalFLIGHTNO-Edit").modal("show");
        fncEditFLIGHTNOBYID($(this).attr("fltno-id"));
    })

    // Click xóa flt
    $("#myModalFLIGHTNO").on("click", ".btn-fltno-xoa", function () {
        event.stopPropagation();
        var confirm_text = "";
        confirm_text += "Bạn chắc chắn muốn xóa!\n";
        confirm_text += "FLTNO: " + $(this).closest("tr").find(".td-fltno").text() + "\n";
        confirm_text += "DEST: " + $(this).closest("tr").find(".td-dest").text() + "\n";
        if (confirm(confirm_text)) {
            fncDeleteFLIGHTNO($(this).closest("tr").attr("fltno-id"))
        }
    })

    // list commodity 
    $(".btn-listcommodity").click(function () {
        event.stopPropagation();
        $("#modalConfig").modal("hide");
        $("#myModalCOMMODITY").modal("show");
        fncLoadCOMMODITY("");
    })

    $("#myModalCOMMODITY").on('click', '#btn-commodity-them', function () {
        event.stopPropagation();
        $("#myModalCOMMODITY").modal("hide");
        $("#myModalCOMMODITY-Edit").modal("show");
        $(".input-commodity-clear").val("");
        $("#btn-commodity-edit-luu").attr("btn-idcommodity", "");
    })

    // thêm commodity
    $("#myModalCOMMODITY-Edit").on("click", "#btn-commodity-edit-luu", function () {
        event.stopPropagation();
        fncEditCommodity($("#btn-commodity-edit-luu").attr("btn-idcommodity"));
    })

    // double click hiển thị commodity theo ID
    $("#myModalCOMMODITY").on("dblclick", "#tbl-commodity tbody tr", function () {
        event.stopPropagation();
        $("#myModalCOMMODITY").modal("hide");
        $("#myModalCOMMODITY-Edit").modal("show");
        fncEditCOMMODITYBYID($(this).attr("commodity-id"));
    })

    // Click xóa commodity
    $("#myModalCOMMODITY").on("click", ".btn-commodity-xoa", function () {
        event.stopPropagation();
        var confirm_text = "";
        confirm_text += "Bạn chắc chắn muốn xóa!\n";
        confirm_text += "MODEL: " + $(this).closest("tr").find(".td-model").text() + "\n";
        confirm_text += "COMMODITY: " + $(this).closest("tr").find(".td-commodity").text() + "\n";
        confirm_text += "FWD: " + $(this).closest("tr").find(".td-fwd").text() + "\n";
        if (confirm(confirm_text)) {
            fncDeleteCOMMODITY($(this).closest("tr").attr("commodity-id"))
        }
    })

    // list model pi
    $(".btn-model-pi").click(function () {
        event.stopPropagation();
        $("#modalConfig").modal("hide");
        $("#myModalMODEL").modal("show");
        fncLoadMODEL("");
    })

    $("#myModalMODEL").on('click', '#btn-model-them', function () {
        event.stopPropagation();
        $("#myModalMODEL").modal("hide");
        $("#myModalMODEL-Edit").modal("show");
        $(".input-model-clear").val("");
        $("#btn-model-edit-luu").attr("btn-idmodel", "");
    })

    // thêm model
    $("#myModalMODEL-Edit").on("click", "#btn-model-edit-luu", function () {
        event.stopPropagation();
        fncEditModel($("#btn-model-edit-luu").attr("btn-idmodel"));
    })

    // double click hiển thị model theo ID
    $("#myModalMODEL").on("dblclick", "#tbl-model tbody tr", function () {
        event.stopPropagation();
        $("#myModalMODEL").modal("hide");
        $("#myModalMODEL-Edit").modal("show");
        fncEditMODELBYID($(this).attr("model-id"));
    })

    // Click xóa DEST
    $("#myModalMODEL").on("click", ".btn-model-xoa", function () {
        event.stopPropagation();
        var confirm_text = "";
        confirm_text += "Bạn chắc chắn muốn xóa!\n";
        confirm_text += "MODEL: " + $(this).closest("tr").find(".td-model").text() + "\n";
        confirm_text += "PACKING_INSTRUCTION: " + $(this).closest("tr").find(".td-packing").text() + "\n";
        confirm_text += "SECTION: " + $(this).closest("tr").find(".td-section").text() + "\n";
        if (confirm(confirm_text)) {
            fncDeleteMODEL($(this).closest("tr").attr("model-id"))
        }
    })

    // list dest
    $(".btn-listdest").click(function () {
        event.stopPropagation();
        $("#modalConfig").modal("hide");
        $("#myModalDEST").modal("show");
        fncLoadDEST("");
    })

    $("#myModalDEST").on('click', '#btn-dest-them', function () {
        event.stopPropagation();
        $("#myModalDEST").modal("hide");
        $("#myModalDEST-Edit").modal("show");
        $(".input-dest-clear").val("");
        $("#btn-dest-edit-luu").attr("btn-iddest", "");
    })

    // thêm dest
    $("#myModalDEST-Edit").on("click", "#btn-dest-edit-luu", function () {
        event.stopPropagation();
        fncEditDEST($("#btn-dest-edit-luu").attr("btn-iddest"));
    })

    // double click hiển thị dest theo ID
    $("#myModalDEST").on("dblclick", "#tbl-dest tbody tr", function () {
        event.stopPropagation();
        $("#myModalDEST").modal("hide");
        $("#myModalDEST-Edit").modal("show");
        fncEditDESTBYID($(this).attr("dest-id"));
    })

    // Click xóa DEST
    $("#myModalDEST").on("click", ".btn-dest-xoa", function () {
        event.stopPropagation();
        var confirm_text = "";
        confirm_text += "Bạn chắc chắn muốn xóa!\n";
        confirm_text += "DESTMAWB: " + $(this).closest("tr").find(".td-dest-mawb").text() + "\n";
        confirm_text += "DESTHAWB: " + $(this).closest("tr").find(".td-dest-hawb").text() + "\n";
        confirm_text += "PORT: " + $(this).closest("tr").find(".td-port").text() + "\n";
        if (confirm(confirm_text)) {
            fncDeleteDEST($(this).closest("tr").attr("dest-id"))
        }
    })


    // Click xóa CNEE SHIPPER
    $("#myModalCNEESHIPPER").on("click", ".btn-cnee-shipper-xoa", function () {
        event.stopPropagation();
        var confirm_text = "";
        confirm_text += "Bạn chắc chắn muốn xóa!\n";
        confirm_text += "DESTMAWB: " + $(this).closest("tr").find(".td-dest-mawb").text() + "\n";
        confirm_text += "DESTHAWB: " + $(this).closest("tr").find(".td-dest-hawb").text() + "\n";
        confirm_text += "DESTCODE: " + $(this).closest("tr").find(".td-dest-code").text() + "\n";
        if (confirm(confirm_text)) {
            fncDeleteCNEE($(this).closest("tr").attr("cneeshipper-id"))
        }
    })
    // double click hiển thị cnee shipper theo ID
    $("#myModalCNEESHIPPER").on("dblclick", "#tbl-cneeshipper tbody tr", function () {
        event.stopPropagation();
        $("#myModalCNEESHIPPER").modal("hide");
        $("#myModalCNEESHIPPER-Edit").modal("show");
        fncEditCNEESHIPPERBYID($(this).attr("cneeshipper-id"));
    })
    // thêm cnee
    $("#myModalCNEESHIPPER-Edit").on("click", "#btn-cnee-edit-luu", function () {
        event.stopPropagation();
        fncEditCNEESHIPPER($("#btn-cnee-edit-luu").attr("btn-idCnee"));
    })
    // click list input CNEE
    $("#myModalCNEESHIPPER").on("click", "#btn-cnee-them", function () {
        event.stopPropagation();
        $("#myModalCNEESHIPPER").modal("hide");
        $("#myModalCNEESHIPPER-Edit").modal("show");
        $(".input-cnee-clear").val("");
        $("#btn-cnee-edit-luu").attr("btn-idCnee", "");
    })
    // list consignee
    $(".btn-listconsignee").click(function () {
        event.stopPropagation();
        $("#modalConfig").modal("hide");
        $("#myModalCNEESHIPPER").modal("show");
        fncLoadCNEESHPPER("");
    });

    // Lọc ngày
    $(".btn-locngay").click(function () {
        var _ngay = dmy2ymd4($(".txtNgayLoc").val());
        ajaxGet = { "get": _ngay };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "OPS.aspx/reListOPSbyNgay",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d)
                fncTableLoadwithd(d, "");
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
            $("#loading").addClass("displaynone")
        })
    });
    // click dtt
    $("#table-ops-status").on("click", ".cb-dtt", function () {
        var MAWWB = $(this).val();
        if ($(this).prop("checked") == true) {
            UpdateMAWB(MAWWB, "dtt", "check")
            fncLoadCheckMaWB(MAWWB)
        } else {
            UpdateMAWB(MAWWB, "dtt", "uncheck")
            fncLoadCheckMaWB(MAWWB)
        }
    });
    // CB doc
    $("#table-ops-status").on("click", ".cb-indoc", function () {
        var MAWWB = $(this).val();
        if ($(this).prop("checked") == true) {
            UpdateMAWB(MAWWB, "doc", "check")
            fncLoadCheckMaWB(MAWWB)
        } else {
            UpdateMAWB(MAWWB, "doc", "uncheck")
            fncLoadCheckMaWB(MAWWB)
        }
    });
    // CB label
    $("#table-ops-status").on("click", ".cb-inlabel", function () {
        var MAWWB = $(this).val();
        if ($(this).prop("checked") == true) {
            UpdateMAWB(MAWWB, "label", "check")
            fncLoadCheckMaWB(MAWWB)
        } else {
            UpdateMAWB(MAWWB, "label", "uncheck")
            fncLoadCheckMaWB(MAWWB)
        }
    });
    // CB phiếu cân
    $("#table-ops-status").on("click", ".cb-inphieucan", function () {
        var MAWWB = $(this).val();
        if ($(this).prop("checked") == true) {
            UpdateMAWB(MAWWB, "phieucan", "check")
            fncLoadCheckMaWB(MAWWB)
        } else {
            UpdateMAWB(MAWWB, "phieucan", "uncheck")
            fncLoadCheckMaWB(MAWWB)
        }
    });
    // Click hiển thị es-visible
    $("#table-ops-status").on("click", ".es-visible", function () {
        //$(".es-visible").click(function () {
        $(".es-list").hide();
        $(".es-input").removeClass('open');
        var pinChange = $("#id-pin-" + MawbChange + "").val();
        var handlinginfo = $("#id-handlinginfo-" + MawbChange + "").val();
        pinOld = pinChange + " ";
        var textAssRemarkSLI = $("#id-remarksli-" + MawbChange + "").val();;

        textHandlingAsign = handlinginfo + "   ";
        // Nếu thay đổi pin check value id-pin đê trả về id handlinginfo
        if (pinChange.length > 0) {
            switch (pinChange) {
                case "PI965 IB" || "PI965IB":
                    textHandlingAsign += "LITHIUM ION BATTERIES IN COMPLIANCE WITH SECTION IB OF PI965";
                    textAssRemarkSLI += "SOC IS NOT MODE THAN 30% ";
                    textAssRemarkSLI += " DANGEROUS GOODS AS PER ATTACHED DGD-CAO ";
                    break;
                case "PI965 II" || "PI965II":
                    textHandlingAsign += "LITHIUM ION BATTERIES IN COMPLIANCE WITH SECTION II OF PI965";
                    break;
                case "PI966 II" || "PI966II":
                    textHandlingAsign += "LITHIUM ION BATTERIES IN COMPLIANCE WITH SECTION II OF PI966";
                    break;
                case "PI967 II" || "PI967II":
                    textHandlingAsign += "LITHIUM ION BATTERIES IN COMPLIANCE WITH SECTION II OF PI967";
                    break;
                case "PI970 II":
                    textHandlingAsign += "LITHIUM METAL BATTERIES IN COMPLIANCE WITH SECTION II OF PI970";
                    break;
                case "PI970II":
                    textHandlingAsign += "LITHIUM METAL BATTERIES IN COMPLIANCE WITH SECTION II OF PI970";
                    break;
                //default:
                //    textHandlingAsign = "";
                //    break;
            }

            $("#id-pin-" + MawbChange + "").val(pinOld)
            $("#id-handlinginfo-" + MawbChange + "").val(textHandlingAsign);
            $("#id-remarksli-" + MawbChange).val(textAssRemarkSLI)

        }
        //else {
        //    $("#id-handlinginfo-" + MawbChange + "").val("")
        //}
    })
    // Click Cập nhật MST
    //$(".btn-capnhatMST").click(function () {
    //    var chungnhan = $("#input-chungnhan").val();
    //    var mst = $("#input-masothue").val();
    //    var mawb = $(this).attr("attrmawb");

    //    ajaxGet3 = { "get1": mawb, "get2": mst, "get3": chungnhan };
    //    jsonData = JSON.stringify({ ajaxGet3 });
    //    $.ajax({
    //        type: "POST",
    //        url: "OPS.aspx/updateMST",
    //        data: jsonData,
    //        contentType: "application/json; charset=utf-8",
    //        dataType: "json",
    //        async: false,
    //        //timeout: 120000,
    //        success: function (responsive) {
    //            d = responsive.d;
    //            console.log(d);
    //            if (d == "ok") {
    //                Swal.fire({
    //                    title: "Cập nhật thành công!",
    //                    text: "Hệ thống sẽ tự tải lại sau 2s",
    //                    type: 'success',
    //                    timer: 2000,
    //                });
    //                $("#modalDuyetMST").modal("hide");
    //            }
    //        },
    //        error: function (request, status, error) {
    //            console.log(request.responseText);
    //        }
    //    }).done(function () {
    //    });

    //});

    //Duyệt MST 
    //$("#table-ops-status").on("click", "#btn-duyetMST", function () {
    //    $("#modalDuyetMST").modal("show");
    //    $("#input-masothue").val("305707643001");
    //    $(".btn-capnhatMST").attr("attrmawb", $(this).attr("soMAWB"));
    //});
    //Click form Airline
    $("#table-ops-status").on("click", ".btn-formPin", function () {
        var g_tenfile = $(this).attr("attrForm") + "_" + $(this).attr("attrMAWB");
        var g_mawb = $(this).attr("attrMAWB");
        var g_form = $(this).attr("attrForm");
        //console.log(g_tenfile);
        //console.log(g_mawb);
        if (g_form == "") {
            alert("Hiện tại chưa có Form Pin");
        } else {
            var ajaxGet4 = { "get1": g_mawb, "get2": g_tenfile, "get3": g_form, "get4": "" };
            jsonData = JSON.stringify({ ajaxGet4 });
            $.ajax({
                type: "POST",
                url: "OPS.aspx/ReOPSBaoCaoPIN",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                //timeout: 120000,
                success: function (responsive) {
                    d = responsive.d;
                    if (d == "ok") {
                        window.open("../DownloadFile.aspx?Root=OPS&Folder=BAOCAO&FileName=" + g_tenfile + ".xlsx");

                    } else {
                        alert("Hiện tại chưa có Form Pin");
                    }
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
        }
    });
    //Click form Airline
    $("#table-ops-status").on("click", ".btn-formAirline", function () {
        var g_tenfile = $(this).attr("attrForm") + "_" + $(this).attr("attrMAWB");
        var g_mawb = $(this).attr("attrMAWB");
        var g_form = $(this).attr("attrForm");
        //console.log(g_tenfile);
        //console.log(g_mawb);
        if (g_form == "") {
            alert("Hiện tại chưa có Form Airline");
        } else {
            var ajaxGet4 = { "get1": g_mawb, "get2": g_tenfile, "get3": g_form, "get4": "" };
            jsonData = JSON.stringify({ ajaxGet4 });
            $.ajax({
                type: "POST",
                url: "OPS.aspx/ReOPSBaoCao",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                //timeout: 120000,
                success: function (responsive) {
                    d = responsive.d;
                    if (d == "ok") {
                        window.open("../DownloadFile.aspx?Root=OPS&Folder=BAOCAO&FileName=" + g_tenfile + ".xlsx");

                    } else {
                        alert("Hiện tại chưa có Form Airline");
                    }
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
        }
    });
    //Click In MAWB
    $("#table-ops-status").on("click", "#btn-inMAWB", function () {
        var so_MAWB = $(this).attr("soMAWB");
        var Docs = $(this).attr("soDocs");
        var g_tenfile = $(this).attr("attrForm") + "_" + so_MAWB;

        UpdateMAWB(so_MAWB, "doc", "check");
        fncLoadCheckMaWB(so_MAWB)
        var boolCheck = true;
        if (Docs != "True") {
            var conf = confirm("Hãng bay này không áp dụng phát hành MAWB. Bạn có muốn tiếp tục in không?");
            if (!conf) {
                boolCheck = false;
            }
        }
        if (boolCheck) {
            //window.location = "AWBView.aspx?MAWB=" + so_MAWB + "";

            var ajaxGet2 = { "get1": so_MAWB, "get2": g_tenfile };
            jsonData = JSON.stringify({ ajaxGet2 });
            $.ajax({
                type: "POST",
                url: "OPS.aspx/OPS_Form_ISSMAWB",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                //timeout: 120000,
                success: function (responsive) {
                    d = responsive.d;
                    window.open("../DownloadFile.aspx?Root=OPS&Folder=BAOCAO&FileName=" + g_tenfile + ".xlsx");
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
        }

    });
    // Click Xóa lô hàng OPS
    $("#table-ops-status").on("click", ".btn-qll-xoa", function () {
        var xoa_MAWB = $(this).attr("soMAWB");
        var xoa_HAWB = $(this).attr("soHAWB");
        var xoa_KeHoachId = $(this).attr("KeHoachId");
        var ajaxGet = { "get": xoa_MAWB };
        jsonData = JSON.stringify({ ajaxGet });

        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa lô hàng này không?',
            text: "Số MAWH: " + xoa_MAWB,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Đồng ý, xóa lô hàng!',
            cancelButtonText: 'Hủy'
        }).then((result) => {
            //$("#div-wait").show();
            if (result.value) {
                $.ajax({
                    type: "POST",
                    url: "OPS.aspx/DOPS_Handling",
                    data: jsonData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    success: function (responsive) {
                        d = responsive.d;
                        Swal.fire({
                            title: "Xóa lô hàng thành công!",
                            text: "Hệ thống sẽ tự tải lại sau 2s",
                            type: 'success',
                            timer: 2000,
                        })
                    },
                    error: function () {
                        Swal.fire(
                            'Có lỗi xảy ra!',
                            'Lô hàng chưa được xóa. Thử lại hoặc liên hệ IT',
                            'error'
                        )
                    }
                }).done(function (e) {
                    //$("#div-wait").hide();
                    event.stopPropagation();
                    fncTableOPSView("1", "");
                })
            }
        })
    });
    // Show table sub
    $("#table-ops-status").on("click", ".td-trangthai", function () {
        if ($(".tr-sub").attr("sub-mawb") === $(this).closest("tr").attr("ops-mawb")) {
            $(".tr-sub").remove();
        } else {
            fncOPSSub($(this).closest("tr").attr("ops-mawb"));
        }

        var mawb = $(this).closest("tr").attr("ops-mawb");
        MawbChange = $(this).closest("tr").attr("ops-mawb");
        //$(".tr-sub-show").hide();
        //if (!$(".tr-sub-" + _KeHoachId).hasClass("tr-sub-show")) {
        //    fncShowSub(_KeHoachId);
        //} else {
        //    $(".tr-sub-show").removeClass("tr-sub-show");
        //}
        //pinOld = "";
        fncLoadCheckMaWB(mawb);
    });
    // Button cick Config
    $("#btn-config").click(function () {
        $("#modalConfig").modal("show");
    });
    // Button click Storage
    $("#btn-Storage").click(function () {
        $("#modalStorage").modal("show");
    });
    // Button click Mawb
    $("#btn-Mawb").click(function () {
        $("#modalAddMawb").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheet").empty();
        $("#spreadsheet").kendoSpreadsheet({
            columns: 21,
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
                        { value: "SITE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "HAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "DO", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "SR", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "GW", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "DIM", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "MODEL", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "QTY", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PLT", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "CTN", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PORT (DEST HAWB)", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "SOP", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PO NO", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "ICT", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "SEV OUT DATE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "SEV OUT TIME", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "ETD DATE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "ETD TIME", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "FLT", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "MAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "DEST MAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PLAN DATE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PLAN TIME", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "REMARK", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }

                    ]
                }],
                columns: [
                    {// SIZE
                        width: 140
                    },
                    {// Số HAWB
                        width: 100
                    },
                    {// DO
                        width: 120
                    },
                    { // SR
                        width: 80
                    },
                    {//GW
                        width: 60
                    },
                    {//DIM
                        width: 120
                    },
                    {// MODEL
                        width: 120
                    },
                    {// QTY
                        width: 80
                    },
                    {// PLT
                        width: 60
                    },
                    {// CTN
                        width: 80
                    },
                    {// PORT
                        width: 100
                    },
                    {//SOP
                        width: 100
                    },
                    {// PO NO
                        width: 80
                    },
                    {// ICT
                        width: 70
                    },
                    {// SEV OUT date
                        width: 120
                    },
                    {// SEV OUT time
                        width: 120
                    },
                    {// ETD date
                        width: 70
                    },
                    {// ETD date time
                        width: 70
                    },
                    {// FLT
                        width: 80
                    }
                    ,
                    {// MAWB
                        width: 160,
                        format: "{0:n0}"
                    }
                    ,
                    {// dest MAWB
                        width: 160
                    }
                    ,
                    {// Plan date
                        width: 100
                    },
                    {// Plan time
                        width: 100
                    }
                    ,
                    {// REMARK
                        width: 100
                    }
                ]
            }]
        });
    });
    // Lưu MAWB
    $("#btn-themMawb-luu").click(function () {
        // Kiểm tra mawb tồn tại hay không
        // Nếu tồn tại thì thông báo lỗi


        //console.log(valueRadio)
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var DataInput = [];
        var cells;
        var cell_SIZE = "";
        var cell_HAWB = "";
        var cell_DO = "";
        var cell_SR = "";
        var cell_GW = "";
        var cell_DIM = "";
        var cell_MODEL = "";
        var cell_QTY = "";
        var cell_PLT = "";
        var cell_CTN = "";
        var cell_PORT = "";
        var cell_SOP = "";
        var cell_PONO = "";
        var cell_ICT = "";
        var cell_SEVOUTDATE = "";
        var cell_SEVOUTTIME = "";
        var cell_ETDDATE = "";
        var cell_ETDTIME = "";
        var cell_FLTNO = "";
        var cell_MAWB = "";
        var cell_DESTMAWB = "";
        var cell_PLANDATE = "";
        var cell_PLANTIME = "";
        var cell_REMARK = "";

        var cell_MAWB_REMAKMAWB = "";
        var MAWB_old = "";

        //console.log(data);
        data.forEach(function (dataItem, dataIndex) {
            cell_SITE = "";
            cell_HAWB = "";
            cell_DO = "";
            cell_SR = "";
            cell_GW = "";
            cell_DIM = "";
            cell_MODEL = "";
            cell_QTY = "";
            cell_PLT = "";
            cell_CTN = "";
            cell_PORT = "";
            cell_SOP = "";
            cell_PONO = "";
            cell_ICT = "";
            cell_SEVOUTDATE = "";
            cell_SEVOUTTIME = "";
            cell_ETDDATE = "";
            cell_ETDTIME = "";
            cell_FLTNO = "";
            cell_MAWB = "";
            cell_DESTMAWB = "";
            cell_PLANDATETIME = "";
            cell_REMARK = "";
            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SITE = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_HAWB = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DO = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SR = cells[cellIndex].value;
                            if (cell_MAWB_REMAKMAWB.indexOf(cells[cellIndex].value) == -1) {
                                cell_MAWB_REMAKMAWB += cells[cellIndex].value + "; ";
                            }
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            cell_GW = cells[cellIndex].value;
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DIM = cells[cellIndex].value;
                        }
                        break;
                    case 6:
                        if (cells[cellIndex].value !== undefined) {
                            cell_MODEL = cells[cellIndex].value;
                        }
                        break;
                    case 7:
                        if (cells[cellIndex].value !== undefined) {
                            cell_QTY = cells[cellIndex].value;
                        }
                        break;
                    case 8:

                        if (cells[cellIndex].value !== undefined) {
                            cell_PLT = cells[cellIndex].value;
                        }
                        break;
                    case 9:
                        if (cells[cellIndex].value !== undefined) {
                            cell_CTN = cells[cellIndex].value;
                        }
                        break;
                    case 10:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PORT = cells[cellIndex].value;
                        }
                        break;
                    case 11:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SOP = cells[cellIndex].value;
                        }
                        break;
                    case 12:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PONO = cells[cellIndex].value;
                        }
                        break;
                    case 13:
                        if (cells[cellIndex].value !== undefined) {
                            cell_ICT = cells[cellIndex].value;
                        }
                        break;
                    case 14:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SEVOUTDATE = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 15:
                        if (cells[cellIndex].value !== undefined) {
                            if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                                cell_SEVOUTTIME = Decimal2Time(cells[cellIndex].value * 24);
                            }
                        }
                        break;
                    case 16:
                        if (cells[cellIndex].value !== undefined) {
                            cell_ETDDATE = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 17:
                        if (cells[cellIndex].value !== undefined) {
                            if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                                cell_ETDTIME = Decimal2Time(cells[cellIndex].value * 24);
                            }
                        }
                        break;
                    case 18:
                        if (cells[cellIndex].value !== undefined) {
                            cell_FLTNO = cells[cellIndex].value;
                        }
                        break;
                    case 19:
                        if (cells[cellIndex].value !== undefined) {
                            if (String(cells[cellIndex].value).length == 10) {
                                cell_MAWB = "0" + cells[cellIndex].value;
                            } else if (String(cells[cellIndex].value).length == 9) {
                                cell_MAWB = "00" + cells[cellIndex].value;
                            } else {
                                cell_MAWB = cells[cellIndex].value;
                            }

                        }
                        break;
                    case 20:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DESTMAWB = cells[cellIndex].value;
                        }
                        break;
                    case 21:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PLANDATE = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 22:
                        if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                            cell_PLANTIME = Decimal2Time(cells[cellIndex].value * 24);
                        }
                        break;
                    case 23:
                        if (cells[cellIndex].value !== undefined) {
                            cell_REMARK = cells[cellIndex].value;
                        }
                        break;
                }

            })

            DataInput.push(
                {
                    "Id": ""
                    , "MAWB": String(cell_MAWB).trim().replace(/ /g, '').replace(/-/g, '')
                    , "FLTNO": cell_FLTNO
                    , "FLTDATETIME": String(cell_ETDDATE).trim().replace(/ /g, '') + " " + String(cell_ETDTIME).trim().replace(/ /g, '')
                    , "DEST_MAWB": cell_DESTMAWB
                    , "FWD": localStorage.getItem("FWD")
                    , "HAWB": String(cell_HAWB).trim().replace(/ /g, '')
                    , "DEST_HAWB": cell_PORT
                    , "DO": String(cell_DO).trim().replace(/ /g, '')
                    , "PO": cell_PONO
                    , "SR": String(cell_SR).trim().replace(/ /g, '')
                    , "PLT": String(cell_PLT).trim().replace(/ /g, '')
                    , "CTN": String(cell_CTN).trim().replace(/ /g, '')
                    , "QTY": String(cell_QTY).trim().replace(/ /g, '')
                    , "GW": String(cell_GW).trim().replace(/ /g, '')
                    , "DIM": String(cell_DIM).trim().replace(/ /g, '')
                    , "MODEL": String(cell_MODEL).trim().replace(/ /g, '')
                    , "REMARK_MAWB": ""
                    , "REMARK_DO": ""
                    , "SLIDateTime": ""
                    , "SLI": ""
                    , "LABEL": ""
                    , "DOC": ''
                    , "TRUCK_ID": ""
                    , "TRUCKDATETIME": ""
                    , "SITE": String(cell_SITE).trim().replace(/ /g, '')
                    , "SOP": cell_SOP
                    , "ICT": cell_ICT
                    , "PICKUP_DATETIME": String(cell_SEVOUTDATE).trim().replace(/ /g, '') + " " + String(cell_SEVOUTTIME).trim().replace(/ /g, '')
                    , "PLANDATETIME": String(cell_PLANDATE).trim().replace(/ /g, '') + " " + String(cell_PLANTIME).trim().replace(/ /g, '')
                    , "HienThi": ""
                    , "NguoiTao": ""
                    , "NgayTao": ""
                    , "NguoiSua": ""
                    , "NgaySua": ""
                    , "REMARK_MIX": cell_REMARK
                }
            );
        })

        console.log(DataInput)

        //for (var i = 0; i < DataInput.length; i++) {
        //    DataInput[i].REMARK_MAWB = cell_MAWB_REMAKMAWB
        //}

        var reg = new RegExp(/[0 -9]/);

        for (var i = 0; i < DataInput.length; i++) {
            if (DataInput[i].MAWB == "") {
                alert("Vui lòng nhập MAWB");
                return;
            }

            if (DataInput[i].HAWB == "") {
                alert("Vui lòng nhập HAWB");
                return;
            }

            if (DataInput[i].DO == "") {
                alert("Vui lòng nhập DO");
                return;
            }

            //if (DataInput[i].PLT == "") {
            //    alert("Vui lòng nhập PLT");
            //    return;
            //}

            if (DataInput[i].DEST_HAWB == "") {
                alert("Vui lòng nhập DEST_HAWB");
                return;
            }

            if (reg.exec(DataInput[i].MAWB) == 'null' || reg.exec(DataInput[i].MAWB) == null) {
                alert("Vui kiểm tra lại số MAWB không đúng định dạng");
                return;
            }

            if ((DataInput[i].MAWB.substring(3, 10) % 7) != (DataInput[i].MAWB.substring(10, 11))) {
                alert("Vui kiểm tra lại số MAWB không đúng định dạng");
                return;
            }
        }

        ajaxGet = { "get": "" }
        jsonData = JSON.stringify({ ajaxGet });

        ////$("#div-wait").show();
        arrMAWBCheck = []
        $.ajax({
            type: "POST",
            url: "OPS.aspx/loadMAWB",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                $.each(d, function (key, val) {
                    arrMAWBCheck.push(val.MAWB)
                })
                //console.log(arrMAWBCheck)

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

        checkData = true;
        lengthMAWB = arrMAWBCheck.length;
        lengthData = DataInput.length;
        soMAWBtontai = "";
        for (var i = 0; i < lengthData; i++) {
            if (checkData) {
                for (var j = 0; j < lengthMAWB; j++) {
                    if (DataInput[i].MAWB.indexOf(arrMAWBCheck[j]) != -1) {
                        soMAWBtontai = DataInput[i].MAWB;
                        checkData = false
                        break;
                    }
                }
            } else {
                break;
            }
        }

        if (checkData) {
            jsonData = JSON.stringify({ DataInput });

            //$("#div-wait").show();
            $.ajax({
                type: "POST",
                url: "OPS.aspx/InsertUpdateOPSMAWB",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    Swal.fire({
                        title: "Thêm danh sách hàng thành công!",
                        text: "Hệ thống sẽ tự tải lại sau 2s",
                        type: 'success',
                        timer: 2000,
                    })
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
                //$("#div-wait").hide();
                $("#modalAddMawb").modal("hide");
                event.stopPropagation();
                fncTableOPSView("1", "");
            })
        } else {
            alert("Vui lòng kiểm tra lại số MAWB: " + soMAWBtontai + " đã tồn tại vui lòng kiểm tra lại!");
        }


    });
    // Sửa kế hoạch
    $("#table-ops-status").on("click", "#btn-suakehoach", function () {
        var soMAWB = $(this).attr("soMAWB");
        var idKeHoach = $(this).attr("IdKeHoach");
        $("#btn-capnhat-suakehoach-luu").attr("attr-somawb", soMAWB);
        var dataSource = [];
        var ajaxGet = { "get": soMAWB };
        jsonData = JSON.stringify({ ajaxGet });
        //$("#div-wait").show();

        $.ajax({
            type: "POST",
            url: "OPS.aspx/ReOPSViewsBYID",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                $.each(d, function (key, val) {
                    dataSource.push({
                        "SITE": val.SITE,
                        "HAWB": val.HAWB,
                        "DO": val.DO,
                        "SR": val.SR,
                        "GW": val.GW,
                        "DIM": val.DIM,
                        "MODEL": val.MODEL,
                        "QTY": val.QTY,
                        "PLT": val.PLT,
                        "CTN": val.CTN,
                        "PORT": val.DEST_HAWB,
                        "SOP": val.SOP,
                        "ICT": val.ICT,
                        "PONO": val.PO,
                        "SEVOUTDATE": convertDate(val.PICKUP_DATETIME)[1],
                        "SEVOUTTIME": convertDate(val.PICKUP_DATETIME)[3],
                        "ETDDATE": convertDate(val.FLTDatetime)[1],
                        "ETDTIME": convertDate(val.FLTDatetime)[3],
                        "FLT": val.FLTNO,
                        "MAWB": val.MAWB,
                        "DESTMAWB": val.DEST_MAWB,
                        "FWD": val.FWD,
                        "PLANDATE": convertDate(val.PLANDATETIME)[1],
                        "PLANTIME": convertDate(val.PLANDATETIME)[3],
                        "REMARKMIX": val.REMARK_MIX,
                        "Id": val.Id,
                    });
                });
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
        $("#modalTitleSuaKeHoach").empty().append("Sửa kế hoạch MAWB " + soMAWB);
        $("#modalSuaKeHoach").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheetSuaKeHoach").empty();
        $("#spreadsheetSuaKeHoach").kendoSpreadsheet({
            columns: 30,
            rows: 500,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheetSuaKeHoach").data("kendoSpreadsheet");
        var sheet = spreadsheet.activeSheet();
        sheet.range(kendo.spreadsheet.SHEETREF).clear();
        $(window).trigger("resize");
        spreadsheet.fromJSON({
            sheets: [{
                name: "KeHoach",
                //mergedCells: [
                //    "A1:G1"
                //],
                dataSource: dataSource,
                rows: [{
                    height: 40,
                    cells: [
                        { value: "SITE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "HAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "DO", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "SR", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "GW", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "DIM", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "MODEL", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "QTY", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PLT", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "CTN", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PORT", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "SOP", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PONO", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "ICT", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "SEV OUT DATE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "SEV OUT TIME", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "ETD DATE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "ETD TIME", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "FLT", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "MAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "DESTMAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "FWD", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PLANDATE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PLANTIME", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "REMARK MIX", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }

                    ]
                }],
                columns: [
                    {// SIZE
                        width: 140
                    },
                    {// Số HAWB
                        width: 100
                    },
                    {// DO
                        width: 120
                    },
                    { // SR
                        width: 80
                    },
                    {//GW
                        width: 60
                    },
                    {//DIM
                        width: 120
                    },
                    {// MODEL
                        width: 120
                    },
                    {// QTY
                        width: 80
                    },
                    {// PLT
                        width: 60
                    },
                    {// CTN
                        width: 80
                    },
                    {// PORT
                        width: 100
                    },
                    {//SOP
                        width: 100
                    },
                    {// PO NO
                        width: 150
                    },
                    {// ICT
                        width: 150
                    },
                    {// SEV OUT date
                        width: 120
                    },
                    {// SEV OUT time
                        width: 120
                    },
                    {// ETD date
                        width: 70
                    },
                    {// ETD date time
                        width: 70
                    },
                    {// FLT
                        width: 80
                    }
                    ,
                    {// MAWB
                        width: 160
                    },
                    {// MAWB
                        width: 160
                    }
                    ,
                    {// MAWB
                        width: 160
                    }
                    ,
                    {// PLAN DATE
                        width: 160
                    }
                    ,
                    {/// PLAN TIME
                        width: 160
                    }
                    ,
                    {/// REMARK
                        width: 160
                    }
                ]
            }]
        });

    });
    // Button sửa kế hoạch
    $("#btn-capnhat-suakehoach-luu").click(function () {
        var maWB = $(this).attr("attr-somawb");
        var spreadsheet = $("#spreadsheetSuaKeHoach").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var DataInput = [];
        var cells;
        var cell_Id = "";
        var cell_SITE = "";
        var cell_HAWB = "";
        var cell_DO = "";
        var cell_SR = "";
        var cell_GW = "";
        var cell_DIM = "";
        var cell_MODEL = "";
        var cell_QTY = "";
        var cell_PLT = "";
        var cell_CTN = "";
        var cell_PORT = "";
        var cell_SOP = "";
        var cell_PONO = "";
        var cell_ICT = "";
        var cell_SEVOUTDATE = "";
        var cell_SEVOUTTIME = "";
        var cell_ETDDATE = "";
        var cell_ETDTIME = "";
        var cell_FLTNO = "";
        var cell_MAWB = "";
        var cell_DESTMAWB = "";
        var cell_FWD = "";
        var cell_PLANDATE = "";
        var cell_PLANTIME = "";
        var cell_REMARK = "";

        //console.log(data);
        data.forEach(function (dataItem, dataIndex) {
            cell_SITE = "";
            cell_HAWB = "";
            cell_DO = "";
            cell_SR = "";
            cell_GW = "";
            cell_DIM = "";
            cell_MODEL = "";
            cell_QTY = "";
            cell_PLT = "";
            cell_CTN = "";
            cell_PORT = "";
            cell_SOP = "";
            cell_PONO = "";
            cell_ICT = "";
            cell_SEVOUTDATE = "";
            cell_SEVOUTTIME = "";
            cell_ETDDATE = "";
            cell_ETDTIME = "";
            cell_FLTNO = "";
            cell_MAWB = "";
            cell_DESTMAWB = "";
            cell_FWD = "";
            cell_PLANDATE = "";
            cell_PLANTIME = "";
            cell_REMARK = "";
            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SITE = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_HAWB = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DO = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SR = cells[cellIndex].value;
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            cell_GW = cells[cellIndex].value;
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DIM = cells[cellIndex].value;
                        }
                        break;
                    case 6:
                        if (cells[cellIndex].value !== undefined) {
                            cell_MODEL = cells[cellIndex].value;
                        }
                        break;
                    case 7:
                        if (cells[cellIndex].value !== undefined) {
                            cell_QTY = cells[cellIndex].value;
                        }
                        break;
                    case 8:

                        if (cells[cellIndex].value !== undefined) {
                            cell_PLT = cells[cellIndex].value;
                        }
                        break;
                    case 9:
                        if (cells[cellIndex].value !== undefined) {
                            cell_CTN = cells[cellIndex].value;
                        }
                        break;
                    case 10:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PORT = cells[cellIndex].value;
                        }
                        break;
                    case 11:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SOP = cells[cellIndex].value;
                        }
                        break;
                    case 12:
                        if (cells[cellIndex].value !== undefined) {
                            cell_ICT = cells[cellIndex].value;
                        }
                        break;
                    case 13:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PONO = cells[cellIndex].value;
                        }
                        break;
                    case 14:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SEVOUTDATE = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 15:
                        if (cells[cellIndex].value !== undefined) {
                            if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                                cell_SEVOUTTIME = Decimal2Time(cells[cellIndex].value * 24);
                            }
                        }
                        break;
                    case 16:
                        if (cells[cellIndex].value !== undefined) {
                            cell_ETDDATE = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 17:
                        if (cells[cellIndex].value !== undefined) {
                            if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                                cell_ETDTIME = Decimal2Time(cells[cellIndex].value * 24);
                            }
                        }
                        break;
                    case 18:
                        if (cells[cellIndex].value !== undefined) {
                            cell_FLTNO = cells[cellIndex].value;
                        }
                        break;
                    case 19:
                        if (cells[cellIndex].value !== undefined) {
                            if (String(cells[cellIndex].value).length == 10) {
                                cell_MAWB = "0" + cells[cellIndex].value;
                            } else if (String(cells[cellIndex].value).length == 9) {
                                cell_MAWB = "00" + cells[cellIndex].value;
                            } else {
                                cell_MAWB = cells[cellIndex].value;
                            }
                        }
                        break;
                    case 20:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DESTMAWB = cells[cellIndex].value;
                        }
                        break;
                    case 21:
                        if (cells[cellIndex].value !== undefined) {
                            cell_FWD = cells[cellIndex].value;
                        }
                        break;
                    case 22:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PLANDATE = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 23:
                        if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                            cell_PLANTIME = Decimal2Time(cells[cellIndex].value * 24);
                        }
                        break;
                    case 24:
                        if (cells[cellIndex].value !== undefined) {
                            cell_REMARK = cells[cellIndex].value;
                        }
                        break;
                    case 25:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Id = cells[cellIndex].value;
                        }
                        break;
                }
            })
            DataInput.push(
                {
                    "Id": cell_Id
                    , "MAWB": String(cell_MAWB).trim().replace(/ /g, '').replace(/-/g, '')
                    , "FLTNO": cell_FLTNO
                    , "FLTDATETIME": String(cell_ETDDATE).trim().replace(/ /g, '') + " " + String(cell_ETDTIME).trim().replace(/ /g, '')
                    , "DEST_MAWB": cell_DESTMAWB
                    , "FWD": cell_FWD
                    , "HAWB": String(cell_HAWB).trim().replace(/ /g, '')
                    , "DEST_HAWB": cell_PORT
                    , "DO": String(cell_DO).trim().replace(/ /g, '')
                    , "PO": cell_PONO
                    , "SR": String(cell_SR).trim().replace(/ /g, '')
                    , "PLT": String(cell_PLT).trim().replace(/ /g, '')
                    , "CTN": String(cell_CTN).trim().replace(/ /g, '')
                    , "QTY": String(cell_QTY).trim().replace(/ /g, '')
                    , "GW": String(cell_GW).trim().replace(/ /g, '')
                    , "DIM": String(cell_DIM).trim().replace(/ /g, '')
                    , "MODEL": String(cell_MODEL).trim().replace(/ /g, '')
                    , "REMARK_MAWB": ""
                    , "REMARK_DO": ""
                    , "SLIDateTime": ""
                    , "SLI": ""
                    , "LABEL": ""
                    , "DOC": ""
                    , "TRUCK_ID": ""
                    , "TRUCKDATETIME": ""
                    , "SITE": String(cell_SITE).trim().replace(/ /g, '')
                    , "SOP": cell_SOP
                    , "ICT": cell_ICT
                    , "PICKUP_DATETIME": String(cell_SEVOUTDATE).trim().replace(/ /g, '') + " " + String(cell_SEVOUTTIME).trim().replace(/ /g, '')
                    , "PLANDATETIME": String(cell_PLANDATE).trim().replace(/ /g, '') + " " + String(cell_PLANTIME).trim().replace(/ /g, '')
                    , "HienThi": ""
                    , "NguoiTao": ""
                    , "NgayTao": ""
                    , "NguoiSua": ""
                    , "NgaySua": ""
                    , "REMARK_MIX": cell_REMARK
                }
            );
        })

        //console.log(DataInput)

        var reg = new RegExp(/[0 -9]/);

        for (var i = 0; i < DataInput.length; i++) {
            if (DataInput[i].MAWB == "") {
                alert("Vui lòng nhập MAWB");
                return;
            }

            if (DataInput[i].HAWB == "") {
                alert("Vui lòng nhập HAWB");
                return;
            }

            if (DataInput[i].DO == "") {
                alert("Vui lòng nhập DO");
                return;
            }

            //if (DataInput[i].PLT == "") {
            //    alert("Vui lòng nhập PLT");
            //    return;
            //}

            if (DataInput[i].DEST_HAWB == "") {
                alert("Vui lòng nhập DEST_HAWB");
                return;
            }

            if (reg.exec(DataInput[i].MAWB) == 'null' || reg.exec(DataInput[i].MAWB) == null) {
                alert("Vui kiểm tra lại số MAWB không đúng định dạng");
                return;
            }
            if ((DataInput[i].MAWB.substring(3, 10) % 7) != (DataInput[i].MAWB.substring(10, 11))) {
                alert("Vui kiểm tra lại số MAWB không đúng định dạng");
                return;
            }
        }
        var jsonData = JSON.stringify({ DataInput });
        $.ajax({
            type: "POST",
            url: "OPS.aspx/UpdateOPSMAWB",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Thêm danh sách hàng thành công!",
                    text: "Hệ thống sẽ tự tải lại sau 2s",
                    type: 'success',
                    timer: 2000,
                })
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
            //$("#div-wait").hide();
            $("#modalSuaKeHoach").modal("hide");
            event.stopPropagation();
            fncTableOPSView(maWB, "");
            fncOPSSub(soMAWB);
            fncLoadCheckMaWB(soMAWB);
        })
    });
    // Cập nhật lưu HR
    $("#table-ops-status").on("click", "#btn-capnhat-SR", function () {
        var soMAWB = $(this).attr("soMAWB");
        var idKeHoach = $(this).attr("IdKeHoach");

        $("#modelTitleSR").empty().append("Cập nhật SR số MAWB: " + soMAWB);

        $("#btn-capnhat-SR-luu").attr("attr-soMawb", $(this).attr("soMAWB"));
        $("#btn-capnhat-SR-luu").attr("attr-idkehoach", $(this).attr("IdKeHoach"));

        $("#modalSR").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheetSR").empty();
        $("#spreadsheetSR").kendoSpreadsheet({
            columns: 3,
            rows: 100,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheetSR").data("kendoSpreadsheet");
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
                        { value: "HAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "DO", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "SR", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// SIZE
                        width: 150
                    },
                    {// Số HAWB
                        width: 150
                    },
                    {// DO
                        width: 150
                    }
                ]
            }]
        });
    });
    // Lưu SR
    $("#btn-capnhat-SR-luu").click(function () {
        var idKehoach = $(this).attr("attr-idkehoach");
        var attrSoMawb = $(this).attr("attr-soMawb");

        var spreadsheet = $("#spreadsheetSR").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var DataInput = [];
        var cells;
        var cell_HAWB = "";
        var cell_DO = "";
        var cell_SR = "";

        //console.log(data);
        data.forEach(function (dataItem, dataIndex) {
            cell_HAWB = "";
            cell_DO = "";
            cell_SR = "";
            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_HAWB = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DO = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SR = cells[cellIndex].value;
                        }
                        break;
                }
            })
            DataInput.push(
                {
                    "Id": ""
                    , "MAWB": attrSoMawb
                    , "FLTNO": ""
                    , "FLTDATETIME": ""
                    , "DEST_MAWB": ""
                    , "FWD": ""
                    , "HAWB": cell_HAWB
                    , "DEST_HAWB": ""
                    , "DO": cell_DO
                    , "PO": ""
                    , "SR": cell_SR
                    , "PLT": ""
                    , "CTN": ""
                    , "QTY": ""
                    , "GW": ""
                    , "DIM": ""
                    , "MODEL": ""
                    , "REMARK_MAWB": ""
                    , "REMARK_DO": ""
                    , "SLIDateTime": ""
                    , "SLI": ""
                    , "LABEL": ""
                    , "DOC": ""
                    , "TRUCK_ID": ""
                    , "TRUCKDATETIME": ""
                    , "SITE": ""
                    , "SOP": ""
                    , "ICT": ""
                    , "PICKUP_DATETIME": ""
                    , "HienThi": ""
                    , "NguoiTao": ""
                    , "NgayTao": ""
                    , "NguoiSua": ""
                    , "NgaySua": ""
                });
        })


        var arrDO = [];
        var check = true;
        var arrSoHAWB = [];
        $(".table" + attrSoMawb + " tbody tr").each(function () {
            var DOMAWB = $(this).children("td:eq(2)").text();
            arrDO.push(DOMAWB);
            arrSoHAWB.push($(this).children("td:eq(0)").text())
        });
        //console.log(arrDO);
        for (var i = 0; i < DataInput.length; i++) {
            if (arrDO.indexOf(DataInput[i].DO.toString()) == -1) {
                alert("Số DO " + DataInput[i].DO + " này không đúng vui lòng kiểm tra lại");
                check = false;
                break;
            }
            // Bỏ theo ý kiến a Trung
            //if (arrSoHAWB.indexOf(DataInput[i].HAWB.toString()) == -1) {
            //    var conf = confirm("Số HAWB " + DataInput[i].HAWB + " này không trùng, bạn có muốn cập nhật không");
            //    if (conf) {
            //        check = true;
            //    } else {
            //        check = false;
            //        break;
            //    }
            //    //check = false;
            //    //break;
            //}
        }
        if (check == true) {
            var jsonData = JSON.stringify({ DataInput });
            $.ajax({
                type: "POST",
                url: "OPS.aspx/UpdateOPSSR",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    Swal.fire({
                        title: "Thêm danh sách hàng thành công!",
                        text: "Hệ thống sẽ tự tải lại sau 2s",
                        type: 'success',
                        timer: 2000,
                    })
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
                //$("#div-wait").hide();
                $("#modalSR").modal("hide");
                event.stopPropagation();
                fncTableOPSView(attrSoMawb, "");
                fncOPSSub(soMAWB);
                fncLoadCheckMaWB(soMAWB);
            })
        }
    });
    // Sửa cập nhật hàng thực tế
    $("#table-ops-status").on("click", "#btn-capnhat-dulieuhangthucte", function () {
        var soMAWB = $(this).attr("soMAWB");
        var idKeHoach = $(this).attr("IdKeHoach");

        $("#modalTitleCapNhatHangThucTe").empty().append("Cập nhật hàng thực tế MAWB: " + soMAWB);

        $("#btn-capnhat-HangThucTe-luu").attr("attr-soMawb", $(this).attr("soMAWB"));
        $("#btn-capnhat-HangThucTe-luu").attr("attr-idkehoach", $(this).attr("IdKeHoach"));

        $("#modalSCapNhatHangThucTe").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheetCapNhatHangThucTe").empty();
        $("#spreadsheetCapNhatHangThucTe").kendoSpreadsheet({
            columns: 3,
            rows: 100,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheetCapNhatHangThucTe").data("kendoSpreadsheet");
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
                        { value: "Pallet No", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "DO", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "GW", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "DIM", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Length", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Width", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Height", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// Pallet
                        width: 150
                    },
                    {// Số DO
                        width: 150
                    },
                    {// GW
                        width: 150
                    },
                    {// DIM
                        width: 150
                    }
                    //,
                    //{// Length
                    //    width: 150
                    //},
                    //{// Width
                    //    width: 150
                    //},
                    //{// Height
                    //    width: 150
                    //}
                ]
            }]
        });
    });
    $("#btn-capnhat-HangThucTe-luu").click(function () {
        var idKehoach = $(this).attr("attr-idkehoach");
        var attrSoMawb = $(this).attr("attr-soMawb");

        var spreadsheet = $("#spreadsheetCapNhatHangThucTe").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var DataInput = [];
        var cells;
        var cell_PalletNo = "";
        var cell_DO = "";
        var cell_GW = "";
        var cell_DIM = "";
        //var cell_Length = "";
        //var cell_Width = "";
        //var cell_Height = "";

        //console.log(data);
        data.forEach(function (dataItem, dataIndex) {
            cell_PalletNo = "";
            cell_DO = "";
            cell_GW = "";
            cell_DIM = "";
            //cell_Length = "";
            //cell_Width = "";
            //cell_Height = "";
            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PalletNo = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DO = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_GW = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DIM = cells[cellIndex].value;
                        }
                        break;

                    //case 3:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        cell_Length = cells[cellIndex].value;
                    //    }
                    //    break;
                    //case 4:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        cell_Width = cells[cellIndex].value;
                    //    }
                    //    break;
                    //case 5:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        cell_Height = cells[cellIndex].value;
                    //    }
                    //    break;
                }
            })
            DataInput.push(
                {
                    "Id": ""
                    , "MAWB": attrSoMawb
                    , "FLTNO": ""
                    , "FLTDATETIME": ""
                    , "DEST_MAWB": ""
                    , "FWD": ""
                    , "HAWB": ""
                    , "DEST_HAWB": ""
                    , "DO": cell_DO
                    , "PO": ""
                    , "SR": ""
                    , "PLT": ""
                    , "CTN": ""
                    , "QTY": ""
                    , "GW": cell_GW
                    , "DIM": cell_DIM
                    //, "DIM": cell_Length + " x " + cell_Width + " x " + cell_Height
                    , "MODEL": ""
                    , "REMARK_MAWB": ""
                    , "REMARK_DO": ""
                    , "SLIDateTime": ""
                    , "SLI": ""
                    , "LABEL": ""
                    , "DOC": ""
                    , "TRUCK_ID": ""
                    , "TRUCKDATETIME": ""
                    , "SITE": ""
                    , "SOP": ""
                    , "ICT": ""
                    , "PICKUP_DATETIME": ""
                    , "HienThi": ""
                    , "NguoiTao": ""
                    , "NgayTao": ""
                    , "NguoiSua": ""
                    , "NgaySua": ""
                    , "NgaySua": ""
                    , "PaletNo": cell_PalletNo
                });
        })


        var arrDO = [];
        var check = true;
        $(".table" + attrSoMawb + " tbody tr").each(function () {
            var DOMAWB = $(this).children("td:eq(2)").text();
            arrDO.push(DOMAWB);
        });

        for (var i = 0; i < DataInput.length; i++) {
            if (arrDO.indexOf(DataInput[i].DO.toString()) == -1) {
                alert("Số DO " + DataInput[i].DO + " này không đúng vui lòng kiểm tra lại");
                check = false;
                break;
            }
        }

        if (check == true) {
            var jsonData = JSON.stringify({ DataInput });
            $.ajax({
                type: "POST",
                url: "OPS.aspx/UpdateOPSCapNhatHangThucTe",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    Swal.fire({
                        title: "Thêm danh sách hàng thành công!",
                        text: "Hệ thống sẽ tự tải lại sau 2s",
                        type: 'success',
                        timer: 2000,
                    })
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
                //$("#div-wait").hide();
                $("#modalSCapNhatHangThucTe").modal("hide");
                event.stopPropagation();
                fncTableOPSView(attrSoMawb, "");
                fncOPSSub(soMAWB);
                fncLoadCheckMaWB(soMAWB);
            })
        }
    });
    // In Label
    $("#table-ops-status").on("click", "#btn-in-label", function () {
        var soMAWB = $(this).attr("soMAWB");
        UpdateMAWB(soMAWB, "label", "check");
        fncLoadCheckMaWB(soMAWB)
        $("#inMNF").addClass("noneMNF");
        $(".inSLINCTS").addClass("noneSLI");
        $("#container-inlabel").removeClass("noneLable");
        $("#informAirline").addClass("noneAirline");

        //$(".table-mnf").empty();
        var ajaxGet = { "get": soMAWB };
        jsonData = JSON.stringify({ ajaxGet });
        //$("#div-wait").show();
        $.ajax({
            type: "POST",
            url: "OPS.aspx/ReOPSViewsTemLabel",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                var html_inlabel = "";
                var soHawbSoSanh = "";
                var soTangDan = 1;
                var totalKienHAWB = 1;

                $.each(d, function (key, val) {
                    for (var i = 1; i <= val.KienHAWB; i++) {
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
                        if (val.HANGBAY.length <= 10) {
                            airLine__hangbay_css = "airLine__hangbay_css";
                        }
                        html_inlabel += "<div class=\"page\">";
                        html_inlabel += "<div class=\"mainDHL \">";
                        html_inlabel += "<div class=\"temDHL\">";
                        html_inlabel += "<div class=\"airLine\">";
                        html_inlabel += "<span>Airline</span>";
                        html_inlabel += "<span></span>"; //QR8953 / 28NOV
                        html_inlabel += "</div>";
                        html_inlabel += "<div class=\"airLine__hangbay\">";
                        html_inlabel += "<img class=\"airLineImg\" src=\"./images/OPS/back-image.jpg\" alt=\"\">";
                        html_inlabel += "<span class=\"airLine__hangbay-name " + airLine__hangbay_css + "\">" + val.HANGBAY + "</span>";
                        html_inlabel += "</div>";
                        html_inlabel += "<div class=\"barcode__MAWB\">";
                        html_inlabel += "<span><svg  class=\"barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + val.MAWB + htmlsomawbTangDan + "\"></svg></span>";
                        html_inlabel += "</div>";
                        html_inlabel += "<div class=\"mawbNumber\">";
                        html_inlabel += "<div class=\"mawbNumber-title fontweight600\">Master Air Waybill Number</div>";
                        html_inlabel += "<div class=\"mawbNumber-MAWB\">";
                        html_inlabel += "" + catchu(val.MAWB) + "";
                        html_inlabel += "</div>";
                        html_inlabel += "</div>";
                        html_inlabel += "<div class=\"disMawb\">";
                        html_inlabel += "<div class=\"disMawb__destination\">";
                        html_inlabel += "<div class=\"disMawb__destination-title fontweight600\">Destination</div>";
                        html_inlabel += "<div class=\"disMawb__destination-name\"><span class=\"disMawb__destination-name_span\">" + val.DEST_MAWB + "</span></div>";
                        html_inlabel += "</div>";
                        html_inlabel += "<div class=\"disMawb__totalPriece\">";
                        html_inlabel += "<div class=\"disMawb__totalPriece-title fontweight600\">Total No of Pieces</div>";
                        html_inlabel += "<div class=\"disMawb__totalPriece-name\"><span class=\"disMawb__totalPriece_span\">" + val.TongKienMAWB + "</span></div>";
                        html_inlabel += "</div>";
                        html_inlabel += "</div>";
                        html_inlabel += "<div class=\"barcode__MAWB\">";
                        html_inlabel += "<span><svg class=\"barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"H" + val.HAWB + "+Y" + htmlsoHawbTangDan + "+" + "\"></svg></span>";
                        html_inlabel += "</div>";
                        html_inlabel += "<div class=\"mawbNumber\">";
                        html_inlabel += "<div class=\"mawbNumber-title fontweight600\">House Air Waybill Number</div>";
                        html_inlabel += "<div class=\"mawbNumber-MAWB\">";
                        html_inlabel += "" + val.HAWB + "";
                        html_inlabel += "</div>";
                        html_inlabel += "</div>";
                        html_inlabel += "<div class=\"dis__HAWB\">";
                        html_inlabel += "<div class=\"dis__HAWB-origin\">";
                        html_inlabel += "<div class=\"dis__HAWB-origin-title fontweight600\">Origin</div>";
                        html_inlabel += "<div class=\"dis__HAWB-origin-name\">HAN</div>";
                        html_inlabel += "</div>";
                        html_inlabel += "<div class=\"dis__HAWB-destination\">";
                        html_inlabel += "<div class=\"dis__HAWB-destination-title fontweight600\">Destination</div>";
                        html_inlabel += "<div class=\"dis__HAWB-destination-name\">" + val.DEST_HAWB + "</div>";
                        html_inlabel += "</div>";
                        html_inlabel += "<div class=\"dis__HAWB-totalHAWB\">";
                        html_inlabel += "<div class=\"dis__HAWB-totalHAWB-title fontweight600\">Total No .of HAWB Pieces</div>";
                        html_inlabel += "<div class=\"dis__HAWB-totalHAWB-name\">" + val.KienHAWB + "</div>";
                        html_inlabel += "</div>";
                        html_inlabel += "</div>";
                        html_inlabel += "<div class=\"footer\">";
                        html_inlabel += "<div class=\"footer__Service\">";
                        html_inlabel += "<div class=\"footer__Service-type\">";
                        html_inlabel += "<span class=\"fontweight600\">Service Type</span>";
                        html_inlabel += "<span></span>"; //QR8953 / 28NOV
                        html_inlabel += "</div>";
                        html_inlabel += "<div class=\"footer__Service-date\">";
                        html_inlabel += "<span></span>"; //QR8953 / 28NOV
                        html_inlabel += "</div>";
                        html_inlabel += "</div>";
                        html_inlabel += "<div class=\"footer__Img\">";
                        html_inlabel += "<img src=\"./images/OPS/DHL.png\" alt=\"\">";
                        html_inlabel += "</div>";
                        html_inlabel += "</div>";
                        html_inlabel += "</div>";
                        html_inlabel += "</div>";
                        html_inlabel += "</div>";
                        soTangDan++;
                    }


                });
                $("#container-inlabel").empty().append(html_inlabel);
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
        JsBarcode(".barcode").init();
        setTimeout(function () {
            window.print();
        }, 100);

    });
    // In MNF
    $("#table-ops-status").on("click", "#btn-in-mnf", function () {
        var soMAWB = $(this).attr("soMAWB");
        $("#container-inlabel").addClass("noneLable");
        $(".inSLINCTS").addClass("noneSLI");
        $("#inMNF").removeClass("noneMNF");
        $("#informAirline").addClass("noneAirline");


        var ajaxGet = { "get": soMAWB };
        jsonData = JSON.stringify({ ajaxGet });
        //$("#div-wait").show();
        $.ajax({
            type: "POST",
            url: "OPS.aspx/ReMNFView",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                var html_inlabel = "";
                var soHawbSoSanh = "";
                var soTangDan = 1;

                var html_body_mnf = "";
                var html_body_mnf_cuoi = "";
                var totalKgs = 0;
                var totalPcs = 0;
                var totalPlt = 0;
                var totalCtn = 0;
                var html_thead = "";
                html_thead += "<tr>";
                html_thead += "<td class=\"auto-style2 nobd fontMNF\" colspan=\"5\"><span><b><i>DHL FORWARDING (VIETNAM) CORP</i></b></span></td>";
                html_thead += "<td class=\"auto-style2 nobd\" colspan=\"5\"></td>";
                html_thead += "<td class=\"auto-style3 nobd fontMNF\" colspan=\"6\"><b>CARGO MANIFEST</b></td>";
                html_thead += "</tr>";
                html_thead += "<tr>";
                html_thead += "<td class=\"auto-style2 nobd\" colspan=\"5\"><span><i>MAWB: </i><b class=\"mnfMAWB\">607-20854212</b></span></td>";
                html_thead += "<td class=\"auto-style2 nobd\" colspan=\"5\"><span></span></td>";
                html_thead += "<td class=\"auto-style3 nobd\" colspan=\"6\"></td>";
                html_thead += "</tr>";
                html_thead += "<tr>";
                html_thead += "<td class=\"auto-style2 nobd\" colspan=\"5\"><span><i>Flight No&Date: </i><b><span class=\"mnfFltNo\">EY0980</span> / <span class=\"mnfDate\">17-JUN-21</span></b></span></td>";
                html_thead += "<td class=\"auto-style2 nobd\" colspan=\"5\"><span><i>Airport of Departure: </i><b><span class=\"mnfdeparture\"></span><b>HAN</b></span></td>";
                html_thead += "<td class=\"auto-style3 nobd\" colspan=\"6\"></td>";
                html_thead += "</tr>";
                html_thead += "<tr>";
                html_thead += "<td class=\"auto-style2 nobd\" colspan=\"5\"><span><i>Commodity: </i><b><span>Consolidation</span></b></td>";
                html_thead += "<td class=\"auto-style2 nobd\" colspan=\"5\"><span><i>Airport of Destination: </i><b><span></span><b class=\"mnfDestination\"></b></span></td>";
                html_thead += "<td class=\"auto-style3 nobd\" colspan=\"6\"><span><i>W/H Code: </i><b><span class=\"mnfWH\">NCTS</span></b></span></td>";
                html_thead += "</tr>";
                html_thead += "<tr>";
                html_thead += "<td class=\"nobd\" colspan=\"16\"></td>";
                html_thead += "</tr>";
                $(".table-mnf thead").empty().append(html_thead);
                html_body_mnf += "<tr class=\"bdbl\">";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">No.</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">GW TIME / POS</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">HAWB</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">DO NO.</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">MODEL</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">G.W</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">DIM</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">QTY</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">PLT</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">CTN</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">PO</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">SR</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">REMARK</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">TERM</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">SOP</td>";
                html_body_mnf += "<td class=\"ui-priority-primary bdbl\">SITE</td>";
                html_body_mnf += "</tr>";
                $.each(d, function (key, val) {
                    totalKgs += parseFloat(val.GW);
                    totalPcs += parseInt(val.QTY);
                    totalPlt += parseInt(val.PLT);
                    totalCtn += parseInt(val.CTN);
                    html_body_mnf += "<tr>";
                    html_body_mnf += "<td>" + (key + 1) + "</td>";
                    html_body_mnf += "<td></td>";
                    html_body_mnf += "<td>" + val.HAWB + "</td>";
                    html_body_mnf += "<td>" + val.DO + "</td>";
                    html_body_mnf += "<td>" + val.MODEL + "</td>";
                    html_body_mnf += "<td>" + val.GW + "</td>";
                    html_body_mnf += "<td>" + val.DIM + "</td>";
                    html_body_mnf += "<td>" + val.QTY + "</td>";
                    html_body_mnf += "<td>" + val.PLT + "</td>";
                    html_body_mnf += "<td>" + val.CTN + "</td>";
                    html_body_mnf += "<td>" + val.PO + "</td>";
                    html_body_mnf += "<td>" + val.SR + "</td>";
                    html_body_mnf += "<td>" + val.REMARK_MIX + "</td>";
                    html_body_mnf += "<td>" + val.ICT + "</td>";
                    html_body_mnf += "<td>" + val.SOP + "</td>";
                    html_body_mnf += "<td>" + val.SITE + "</td>";
                    html_body_mnf += "</tr>";


                    $(".mnfWH").empty().append(val.WH);
                    $(".mnfHAWB").empty().append(val.HAWB);
                    $(".mnfDeshMawb").empty().append(val.DEST_MAWB);
                    $(".mnfDeshHawb").empty().append(val.DEST_HAWB);
                    $(".mnfMAWB").empty().append(catchu(val.MAWB));
                    $(".mnfFltNo").empty().append(val.FLTNO);
                    $(".mnfDestination").empty().append(val.DEST_MAWB);
                    $(".mnfDate").empty().append(convertDateUS(convertDate(val.FLTDATETIME)[0]));
                    $(".mnfWH").empty().append(val.Warehouse);
                });

                html_body_mnf_cuoi += "<tr>";
                html_body_mnf_cuoi += "<td class=\"\" colspan=\"16\">TOTAL: <span class=\"totalKGs\">250,0</span> KGS/ <span class=\"totalPCSs\">590</span> PCS / <span class=\"totalPLTs\">4</span>PLTS / <span class=\"totalCTNs\">59</span> CTNS</td>";
                html_body_mnf_cuoi += "</tr>";
                $(".table-mnf tbody").empty().append(html_body_mnf + html_body_mnf_cuoi);
                $(".totalKGs").empty().append(totalKgs);
                $(".totalPCSs").empty().append(totalPcs);
                $(".totalPLTs").empty().append(totalPlt);
                $(".totalCTNs").empty().append(totalCtn);


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
        window.print();
    });
    // In phiếu cân
    $("#table-ops-status").on("click", "#btn-in-phieucan", function () {
        var soMAWB = $(this).attr("soMAWB");
        var soChuyenBay = $(this).attr("soChuyenBay");
        UpdateMAWB(soMAWB, "phieucan", "check");
        fncLoadCheckMaWB(soMAWB)
        $(".inSLINCTS").removeClass("noneSLI");
        $("#container-inlabel").addClass("noneLable");
        $("#inMNF").addClass("noneMNF");
        $("#informAirline").addClass("noneAirline");

        ajaxGet = { "get": soMAWB };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "OPS.aspx/reDuyetCNEE",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                duyetCNEE = d;
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

        if (duyetCNEE == "True") {
            WHTraVe = "";
            if (soChuyenBay === "VN2195") {
                WHTraVe = "ALSC";
            } else {
                // Trả về WH bên JS
                ajaxGet = { "get": soChuyenBay };
                jsonData = JSON.stringify({ ajaxGet });
                $.ajax({
                    type: "POST",
                    url: "OPS.aspx/reWarehouseInSLI",
                    data: jsonData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    success: function (responsive) {
                        d = responsive.d;
                        //console.log(d);
                        WHTraVe = d;
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
            var htmlTrave = htmlWHTheoMaKho(WHTraVe, soMAWB);

            //$(".inSLINCTS tbody").empty().append(htmlTrave);
            $(".inSLINCTS").empty().append(htmlTrave);
            window.print();
        } else {
            Swal.fire(
                'Thông báo!',
                'Vui lòng chọn Duyệt thông tin MAWB trước khi thực hiện thao tác In phiếu cân',
                'warning'
            )
        }

    });
    // In form Airline
    $('#table-ops-status').on("click", "#btn-in-airline", function () {
        $(".inSLINCTS").addClass("noneSLI");
        $("#container-inlabel").addClass("noneLable");
        $("#inMNF").addClass("noneMNF");
        $("#informAirline").removeClass("noneAirline");
        //formPin =\"" + val.FORM_PIN + "\" formCSD=\"" + val.FORM_CSD_EU + "\" formUS=\"" + val.FORM_US + "\" formOther=\"" + val.FORM_OTHER + "\"

        var formPin = $(this).attr("formPin");
        var formCSD = $(this).attr("formCSD");
        var formUS = $(this).attr("formUS");
        var formOther = $(this).attr("forformOthermUS");
        window.print();
    });
    // Hiển thị CNEE
    $("#table-ops-status").on("click", ".btn-showchonAdd", function () {
        $("#modalShowCNEE").modal("show");
        $(".btn-chonCNEE").attr("attrMawb", $(this).attr("attrmawb-td"));
        $(".btn-chonCNEE").attr("attrCom", $(this).attr("attrCom"));
        var ajaxGet = { "get": localStorage.getItem("FWD") };
        jsonData = JSON.stringify({ ajaxGet });
        //$("#div-wait").show();
        $.ajax({
            type: "POST",
            url: "OPS.aspx/ReCNEEShow",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                var html_tbody = "";
                var html_thead = "";
                html_thead += "<tr>";
                html_thead += "<td></td>";
                html_thead += "<td>STT</td>";
                html_thead += "<td>FWD</td>";
                html_thead += "<td>DESTMAWB</td>";
                html_thead += "<td>DESTHAWB</td>";
                html_thead += "<td>DESTCODE</td>";
                html_thead += "<td>SHIPPER</td>";
                html_thead += "<td>SHIPPERADD</td>";
                html_thead += "<td>CNEE</td>";
                html_thead += "<td>CNEEADD</td>";
                html_thead += "<td>NOTIFY</td>";
                html_thead += "<td>NOTIFY_Add</td>";
                html_thead += "<td>COMMODITY</td>";
                html_thead += "</tr>";
                $.each(d, function (key, val) {
                    html_tbody += "<tr>";
                    html_tbody += "<td><input type=\"checkbox\" attrSHIPPER=\"" + val.SHIPPER + "\" attrSHIPPERAdd=\"" + val.SHIPPER_Add + "\" attrCNEE=\"" + val.CNEE + "\"   attrCNEEAdd=\"" + val.CNEE_Add + "\" attrNotify=\"" + val.NOTIFY + "\"  attrNotifyAdd=\"" + val.NOTIFY_Add + "\" attrCommodity=\"" + val.COMMODITY + "\" class=\"radio radioCheckBox\" value=\"1\" name=\"fooby[2][]\" ></td>";
                    html_tbody += "<td>" + (key + 1) + "</td>";
                    html_tbody += "<td>" + val.FWD + "</td>";
                    html_tbody += "<td>" + val.DESTMAWB + "</td>";
                    html_tbody += "<td>" + val.DESTHAWB + "</td>";
                    html_tbody += "<td>" + val.DESTCODE + "</td>";
                    html_tbody += "<td>" + val.SHIPPER + "</td>";
                    html_tbody += "<td>" + val.SHIPPER_Add + "</td>";
                    html_tbody += "<td>" + val.CNEE + "</td>";
                    html_tbody += "<td>" + val.CNEE_Add + "</td>";
                    html_tbody += "<td>" + val.NOTIFY + "</td>";
                    html_tbody += "<td>" + val.NOTIFY_Add + "</td>";
                    html_tbody += "<td>" + val.COMMODITY + "</td>";
                    html_tbody += "</tr>";
                });


                $("#tableCNEE thead").empty().append(html_thead);
                $("#tableCNEE tbody").empty().append(html_tbody);

                $("#tableCNEE").DataTable({
                    "responsive": true,
                    destroy: true,
                    static: true
                });
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
    // Click CNEE
    $(".btn-chonCNEE").click(function () {
        var MawbChon = $(this).attr("attrmawb");
        var comOld = $(this).attr("attrCom");
        $(".radioCheckBox").each(function (key, val) {
            if ($(this).is(":checked")) {
                $("#id-shipper1-" + MawbChon + "").val($(this).attr("attrSHIPPER"));
                $("#id-shipper2-" + MawbChon + "").val($(this).attr("attrSHIPPERAdd"));
                $("#id-cnee1-" + MawbChon + "").val($(this).attr("attrCNEE"));
                $("#id-cnee2-" + MawbChon + "").val($(this).attr("attrCNEEAdd"));
                $("#id-notify1-" + MawbChon + "").val($(this).attr("attrNotify"));
                $("#id-notify2-" + MawbChon + "").val($(this).attr("attrNotifyAdd"));
                //$("#id-commodity-" + MawbChon + "").val($(this).attr("attrCommodity"));
                if ($(this).attr("attrCommodity") == "CONSOLIDATED AS PER ATTD MANIFEST") {
                    $("#id-commodity-" + MawbChon + "").val($(this).attr("attrCommodity"));
                } else if ($(this).attr("attrCommodity") == "CONSOL (.....)") {
                    $("#id-commodity-" + MawbChon + "").val("CONSOL (" + comOld + ")");
                } else if ($(this).attr("attrCommodity") == "SAMSUNG MOBILE PHONE PER ATTACHED MANIFEST") {
                    $("#id-commodity-" + MawbChon + "").val("SAMSUNG MOBILE PHONE PER ATTACHED MANIFEST");
                } else {
                    $("#id-commodity-" + MawbChon + "").val(comOld);
                }
            }
        });

        console.log($("#id-commodity-" + MawbChon + "").val());
        $("#modalShowCNEE").modal("hide");

    });
    // Cập nhật CNEE
    $("#table-ops-status").on("click", "#btn-capnhatCNEE", function () {
        var soMAWB = $(this).attr("soMAWB");
        var DataInput = [];
        DataInput.push(
            {
                "Id": ""
                , "MAWB": soMAWB
                , "SHIPPER": $("#id-shipper1-" + soMAWB + "").val()
                , "SHIPPER_Add": $("#id-shipper2-" + soMAWB + "").val()
                , "CNEE": $("#id-cnee1-" + soMAWB + "").val()
                , "CNEE_Add": $("#id-cnee2-" + soMAWB + "").val()
                , "NOTIFY": $("#id-notify1-" + soMAWB + "").val()
                , "NOTIFY_Add": $("#id-notify2-" + soMAWB + "").val()
                , "COMMODITY": $("#id-commodity-" + soMAWB + "").val()
                , "HANDLING_INFO": $("#id-handlinginfo-" + soMAWB + "").val()
                , "PACKAGE": $("#id-package-" + soMAWB + "").val()
                , "BATTERRY": $("#id-pin-" + soMAWB + "").val()
                , "REMARK_SLI": $("#id-remarksli-" + soMAWB + "").val()
                , "MaSoThue": $("#id-mst-" + soMAWB + "").val()
                , "BOOK": $("#id-book-" + soMAWB + "").val()
                , "HSCODE": $("#id-hscode-" + soMAWB + "").val()
                , "REMARK_MAWB": $("#td-ghichu-" + soMAWB + "").val()
            }
        );

        var jsonData = JSON.stringify({ DataInput });
        //console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "OPS.aspx/UpdateCNEE",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Thêm danh sách hàng thành công!",
                    text: "Hệ thống sẽ tự tải lại sau 2s",
                    type: 'success',
                    timer: 2000,
                })
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
            //$("#div-wait").hide();
            event.stopPropagation();
            fncTableOPSView(soMAWB, "");
            fncOPSSub(soMAWB);
            fncLoadCheckMaWB(soMAWB);
        });
    });
    // Duyệt CNEE
    $("#table-ops-status").on("click", "#btn-duyetCNEE", function () {
        var soMAWB = $(this).attr("soMAWB");

        var conf = confirm("Bạn có muốn duyệt CNEE lô này không?");
        if (conf) {
            var ajaxGet = { "get": soMAWB };
            jsonData = JSON.stringify({ ajaxGet });
            //console.log(jsonData);
            $.ajax({
                type: "POST",
                url: "OPS.aspx/DuyetCNEE",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    Swal.fire({
                        title: "Thêm danh sách hàng thành công!",
                        text: "Hệ thống sẽ tự tải lại sau 2s",
                        type: 'success',
                        timer: 2000,
                    })
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
                //$("#div-wait").hide();
                event.stopPropagation();
                fncTableOPSView(soMAWB, "");
            })
        }
    });
    // Cập nhật ghi chú MAWB
    $("#table-ops-status").on("click", "#btn-capnhat-ghichu-mawb", function () {
        var soMAWB = $(this).attr("soMAWB");
        var conf = confirm("Bạn có muốn cập nhật ghi chú lô này không?");
        if (conf) {
            ajaxGet2 = { "get1": soMAWB, "get2": $("#td-ghichu-" + soMAWB + "").val() };
            jsonData = JSON.stringify({ ajaxGet2 });
            //console.log(jsonData);
            $.ajax({
                type: "POST",
                url: "OPS.aspx/UpdateGhiChuMAWB",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    Swal.fire({
                        title: "Thêm danh sách hàng thành công!",
                        text: "Hệ thống sẽ tự tải lại sau 2s",
                        type: 'success',
                        timer: 2000,
                    })
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
                //$("#div-wait").hide();
                event.stopPropagation();
                fncTableOPSView(soMAWB, "");
                fncOPSSub(soMAWB);
                fncLoadCheckMaWB(soMAWB);
            })
        }
    });
}

// FNC Click
function fncClick() {

    // Click  khi vào trang 
    $(".btn-TiepTuc").click(function () {
        valueRadio = $("input[name=RadioFWD]:checked").val();
        valueRadioDate = $("input[name=RadioFWDDate]:checked").val();
        valueRadioNgay = $("input[name=RadioNgay]:checked").val();
        localStorage.setItem("FWD", valueRadio);
        localStorage.setItem("DatetimeSort", valueRadioDate);
        localStorage.setItem("RadioLocTheoNgay", valueRadioNgay);

        if (valueRadio === undefined || valueRadioDate === undefined || valueRadioNgay === undefined) {
            alert('Vui lòng chọn FWD và ngày sắp xếp và ngày lọc để bắt đầu phiên làm việc');
        } else {
            fncLoadClick();
        }
    });

}

function fncLoadClick() {
    $("#ModalFWD").modal("hide");
    $("#loading").removeClass("displaynone");
    setTimeout(() => {
        fncTableOPSView("", "");
        $("#select-loc").val(localStorage.getItem("FWD"));
        $(".changeSelectNgayHeThong").val(localStorage.getItem("RadioLocTheoNgay"))
        if (localStorage.getItem("FWD") == "ALL") {
            $(".tr-makho-view").removeClass('tr-hide');
        } else {
            $(".tr-FWD-" + localStorage.getItem("FWD").split(".").join("")).show();
        }
    }, 100)

    fncChange();
    fncClickChage();
    fncModalAction();
    fncLoadMATERIAL();
}

// FNC Thay đối
function fncChange() {

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
    // Thay đổi WH 
    $("#select-wh").change(function () {
        var cb_value = $(this).val();
        var valueFWD = $("#select-loc").val().split(".").join("");
        console.log(valueFWD)
        if (cb_value == "ALL") {
            $(".tr-makho-view").show();
        } else {
            //$(".tr-makho-view").hide();
            if (cb_value == "ALSC") {
                $(".tr-makho-" + cb_value).show();
                $(".tr-makho-NCTS").hide();
                $(".tr-makho-ACS").hide();
                $(".tr-makho-MSF").hide();
                if (valueFWD == "DHLSEVT") {
                    $(".tr-FWD-DHLSEV").hide();
                } else {
                    $(".tr-FWD-DHLSEVT").hide();
                }
            }

            if (cb_value == "NCTS") {
                $(".tr-makho-" + cb_value).show();
                $(".tr-makho-ALSC").hide();
                $(".tr-makho-ACS").hide();
                $(".tr-makho-MSF").hide();
                if (valueFWD == "DHLSEVT") {
                    $(".tr-FWD-DHLSEV").hide();
                } else {
                    $(".tr-FWD-DHLSEVT").hide();
                }
            }

            if (cb_value == "ACS") {
                $(".tr-makho-" + cb_value).show();
                $(".tr-makho-ALSC").hide();
                $(".tr-makho-NCTS").hide();
                $(".tr-makho-MSF").hide();
                if (valueFWD == "DHLSEVT") {
                    $(".tr-FWD-DHLSEV").hide();
                } else {
                    $(".tr-FWD-DHLSEVT").hide();
                }
            }

            if (cb_value == "MSF") {
                $(".tr-makho-" + cb_value).show();
                $(".tr-makho-ALSC").hide();
                $(".tr-makho-NCTS").hide();
                $(".tr-makho-ACS").hide();
                if (valueFWD == "DHLSEVT") {
                    $(".tr-FWD-DHLSEV").hide();
                } else {
                    $(".tr-FWD-DHLSEVT").hide();
                }
            }
        }
    });

    $("#select-loc").change(function () {
        var cb_value = $(this).val();
        if (cb_value == "ALL") {
            $(".tr-makho-view").show();
        } else {
            if (cb_value.split(".").join("") == "DHLSEV") {
                $(".tr-FWD-" + cb_value.split(".").join("")).show();
                $(".tr-FWD-DHLSEVT").hide();
                $(".tr-FWD-").hide();
                $(".tr-FWD-DHLYP").hide();
            }

            if (cb_value.split(".").join("") == "DHLSEVT") {
                $(".tr-FWD-" + cb_value.split(".").join("")).show();
                $(".tr-FWD-DHLSEV").hide();
                $(".tr-FWD-").hide();
                $(".tr-FWD-DHLYP").hide();
            }

            if (cb_value.split(".").join("") == "DHLYP") {
                $(".tr-FWD-" + cb_value.split(".").join("")).show();
                $(".tr-FWD-DHLSEVT").hide();
                $(".tr-FWD-").hide();
                $(".tr-FWD-DHLSEV").hide();
            }

        }
    });

    // the selector will match all input controls of type :checkbox
    // and attach a click event handler 
    $("#modalShowCNEE").on('click', "input:checkbox", function () {
        //console.log($(this));
        // in the handler, 'this' refers to the box clicked on
        var $box = $(this);
        if ($box.is(":checked")) {
            // the name of the box is retrieved using the .attr() method
            // as it is assumed and expected to be immutable
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            // the checked state of the group/box on the other hand will change
            // and the current value is retrieved using .prop() method
            $(group).prop("checked", false);
            $box.prop("checked", true);
        } else {
            $box.prop("checked", false);
        }
    });


    $(".inputlistpin").bind('input', function () {
        console.log(123)
        var pinChange = $("#id-pin-" + MawbChange + "").val();
        var handlinginfo = $("#id-handlinginfo-" + MawbChange + "").val();
        // Nếu thay đổi pin check value id-pin đê trả về id handlinginfo
        if (pinChange.length > 0) {
            switch (pinChange) {
                case "PI965 IB" || "PI965IB":
                    textHandlingAsign += "LITHIUM ION BATTERIES IN COMPLIANCE WITH SECTION IB OF PI965";
                    break;
                case "PI965 II" || "PI965II":
                    textHandlingAsign += "LITHIUM ION BATTERIES IN COMPLIANCE WITH SECTION II OF PI965";
                    break;
                case "PI966 II" || "PI966II":
                    textHandlingAsign += "LITHIUM ION BATTERIES IN COMPLIANCE WITH SECTION II OF PI966";
                    break;
                case "PI967 II" || "PI967II":
                    textHandlingAsign += "LITHIUM ION BATTERIES IN COMPLIANCE WITH SECTION II OF PI967";
                    break;
                case "PI970 II":
                    textHandlingAsign += "LITHIUM METAL BATTERIES IN COMPLIANCE WITH SECTION II OF PI970";
                    break;
                case "PI970II":
                    textHandlingAsign += "LITHIUM METAL BATTERIES IN COMPLIANCE WITH SECTION II OF PI970";
                    break;
                default:
                    textHandlingAsign = "";
                    break;
            }
            $("#id-handlinginfo-" + MawbChange + "").val(textHandlingAsign);
        } else {

            $("#id-handlinginfo-" + MawbChange + "").val("");
            pinOld = "";

        }
    })
}

// Show table shbs
function fncShowSub(mawb) {
    $(".tr-sub-" + mawb).show();
    $(".tr-sub-show").removeClass("tr-sub-show");
    $(".tr-sub-" + mawb).addClass("tr-sub-show");
    //$("html,body").animate({ scrollTop: $("#tr-qll-" + _KeHoachId).offset().top - $("html,body").offset().top, scrollLeft: 0 }, 1000);
}

///////////////////////////////////// view chính
function fncTableOPSView(mawb, _ngay) {

    var ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    // Trả về PIN
    $.ajax({
        type: "POST",
        url: "OPS.aspx/rePIN",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            objectPIN = d;
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


    // Trả về COMMODITY
    $.ajax({
        type: "POST",
        url: "OPS.aspx/reCommomdity",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            objectCommodity = d;
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

    ajaxGet3 = { "get1": $(".changeSelectDatetime").val(), "get2": localStorage.getItem("RadioLocTheoNgay"), "get3": dmy2ymd4($(".txtNgayLoc").val()) };
    jsonData = JSON.stringify({ ajaxGet3 });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/reListOPS",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            fncTableLoadwithd(d, mawb);
        },
        error: function () {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Thử lại hoặc liên hệ IT',
                'error'
            )
        }
    }).done(function () {
        $("#loading").addClass("displaynone")
    })
}

///////////////////////////////////// \\view chính
function fncTableLoadwithd(d, mawb) {
    html_tbody = "";
    $("#table-ops-status thead").empty();
    $("#table-ops-status tbody").empty();

    var html_thead = "";
    html_thead += "<tr >";
    html_thead += "<td>No.</td>";
    html_thead += "<td>STATUS</td>";
    html_thead += "<td>MAWB</td>";
    html_thead += "<td>PCS</td>";
    html_thead += "<td>G.W</td>";
    html_thead += "<td>FLT.NO</td>";
    html_thead += "<td>FLT.D</td>";
    html_thead += "<td>FLT.T</td>";
    html_thead += "<td>COT NBA</td>";
    html_thead += "<td>COT HHKD</td>";
    html_thead += "<td>DEST</td>";
    html_thead += "<td>SLI.D</td>";
    html_thead += "<td>SLI.T</td>";
    html_thead += "<td>SLI</td>";
    html_thead += "<td>LABEL</td>";
    html_thead += "<td>DOC</td>";
    html_thead += "<td>TRUCK ID</td>";
    html_thead += "<td>TRUCK.D</td>";
    html_thead += "<td>TRUCK.T</td>";
    html_thead += "<td>FWD</td>";
    html_thead += "<td>WH</td>";
    html_thead += "</tr>";

    $("#table-ops-status thead").append(html_thead);

    //html_tbody += tableShowAll(d, 'COMPLETED');

    // BOOKING
    html_tbody += tableShowAll(d.oPSReViewsBOOKINGs, 'PLAN');
    // PRO
    html_tbody += tableShowAll(d.oPSReViewsPREACCEPTs, 'PROCESSING');
    //// PREACCEPT
    //html_tbody += tableShowAll(d.oPSReViewsPREACCEPTs, 'PREACCEPT');
    //// ACCEPTED
    //html_tbody += tableShowAll(d.oPSReViewsACCEPTEDs, 'ACCEPTED');
    // COMPLETED
    html_tbody += tableShowAll(d.oPSReViewsCOMPLETEDs, 'COMPLETED');
    $("#table-ops-status tbody").append(html_tbody);

    if (localStorage.getItem("FWD") == "ALL") {
        $(".tr-makho-view").removeClass('tr-hide');
    } else {
        $(".tr-FWD-" + localStorage.getItem("FWD").split(".").join("")).show();
    }
    //$("#div-wait").hide();
    if (mawb != 0 && mawb != null && mawb != "") {
        fncShowSub(mawb);
        fncLoadCheckMaWB(mawb);
    }
}

// FNC hiển thị table
function tableShowAll(d, trangthai) {
    var html_tbody = "";
    //Add thêm ngày và giờ để tô màu flt thêm ngày và 11 giờ trưa hôm sau
    var startdate = new Date();
    var new_date = moment(startdate);
    var new_datePla = moment(startdate);
    new_date.add(1, 'days');
    new_date.set('hour', 11);
    new_date.set('minute', 00);
    new_date.set('second', 00);

    new_datePla.set('hour', 00);
    new_datePla.set('minute', 00);
    new_datePla.set('second', 00);

    $.each(d, function (key, val) {
        html = "";
        html_sub = "";
        htmlWH = val.Warehouse;
        if (val.FLTNO == "VN2195") {
            htmlWH = "ALSC"
        }

        html += "<tr class=\"tr-makho-view tr-hide tr-makho-" + htmlWH + " tr-FWD-" + val.FWD.split(".").join("") + "\"  ops-mawb=\"" + val.MAWB + "\"  >"
        html += "<td>" + (key + 1) + "</td>";
        var colorText = "";
        switch (trangthai) {
            case "PLAN":
                colorText = "PLANColor";
                break;
            case "PREACCEPT":
                colorText = "PREACCEPTColor";
                break;
            case "ACCEPTED":
                colorText = "ACCEPTEDColor";
                break;
            case "PROCESSING":
                colorText = "ACCEPTEDColor";
                break;
            case "COMPLETED":
                colorText = "COMPLETEColor";
                break;
        }
        //console.log(isFloat(parseFloat(val.GW)))
        //val.FLTNO.substring(0, 2) == "EY"
        tomauGW = "";
        if ((val.FLTNO.substring(0, 2) != "CX" || val.FLTNO.substring(0, 2) != "EK" || val.FLTNO.substring(0, 2) != "ET" || val.FLTNO.substring(0, 2) != "JL") && !Number.isInteger(parseFloat(val.GW))) {
            tomauGW = "tomauGW";
        }

        tomaufltDT = "";

        momentDtPl = moment(val.PLANDATETIME);
        momentDtPl.set('hour', 00);
        momentDtPl.set('minute', 00);
        momentDtPl.set('second', 00);


        if (new_datePla.diff(momentDtPl._d, 'day') == 0) {
            tomaufltDT = "maudo"
        } else if (new_datePla.diff(momentDtPl._d, 'day') < 0) {
            tomaufltDT = "mautim"
        } else {
            tomaufltDT = "mauden"
        }

        html += "<td class=\"td-trangthai " + colorText + " fontweight600\">" + trangthai + "</td>";
        html += "<td class=\"fontweight600 " + tomaufltDT + "\">" + catchu(val.MAWB) + "</td>";
        html += "<td>" + val.PLT + "</td>";
        html += "<td class=\"" + tomauGW + "\">" + val.GW + "</td>";
        html += "<td>" + val.FLTNO + "</td>";



        //console.log(new_datePla)
        //console.log(momentDtPl)

        //if (new_datePla - momentDtPl._d > 0) {

        //}

        if (trangthai === "PROCESSING") {

            arrMAWB.push(val.MAWB);
            arrLabel.push(val.LABEL);



            momentDtflt = moment(val.FLTDatetime);
            if (new_date - momentDtflt._d > 0) {
                tomaufltDT = "setbacgroupFltdAndFltNo";
            }
        }
        html += "<td class=\"fontweight600 " + tomaufltDT + "\">" + convertDate(val.FLTDatetime)[1] + "</td>";
        html += "<td class=\"fontweight600 " + tomaufltDT + "\">" + convertDate(val.FLTDatetime)[3] + "</td>";
        html += "<td>" + convertDate(val.cutot)[2] + "</td>";
        html += "<td>" + convertDate(val.cute)[2] + "</td>";
        html += "<td>" + val.DEST_MAWB + "</td>";
        html += "<td>" + convertDate(val.SLIDatetime)[1] + "</td>";
        html += "<td>" + convertDate(val.SLIDatetime)[3] + "</td>";
        html += "<td>" + showIcon(val.SLI) + "</td>";
        html += "<td>" + showIcon(val.LABEL) + "</td>";
        html += "<td>" + showIcon(val.DOC) + "</td>";
        html += "<td>" + val.Truck + "</td>";
        html += "<td>" + convertDate(val.TruckDatetime)[1] + "</td>";
        html += "<td>" + convertDate(val.TruckDatetime)[3] + "</td>";
        html += "<td>" + val.FWD + "</td>";
        if (val.FLTNO == "VN2195") {
            html += "<td>ALSC</td>";
        } else {
            html += "<td>" + val.Warehouse + "</td>";
        }
        html += " <tr  class=\"tr-mawb-" + val.MAWB + " tr-makho-view tr-hide tr-makho-" + htmlWH + " tr-FWD-" + val.FWD.split(".").join("") + "\">";
        if (val.REMARK_MAWB == "") {
            html += " <td colspan=\"22\"> </td>";

        } else {
            html += " <td colspan=\"22\" class=\"td-sub-ghichukh\">Ghi chú: " + val.REMARK_MAWB + "</td>";
        }
        html += " </tr>";
        html_tbody += html;
    });
    return html_tbody;
}

// hiển thị icon font awesome
function showIcon(data) {
    var iconShow = "";

    if (data == "True" || data == "1") {
        iconShow += "<i class=\"fas fa-check-circle text-success\"></i>";
    } else {
        iconShow += "<i class=\"\"></i>";
    }

    return iconShow;
}

// Hiển thị Phiếu cân
function htmlWHTheoMaKho(makho, mawb) {
    //console.log(makho)
    var ajaxGet = { "get": mawb };
    jsonData = JSON.stringify({ ajaxGet });
    var html_result = "";

    //$("#div-wait").show();
    $.ajax({
        type: "POST",
        url: "OPS.aspx/RePhieuCan",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (makho == "ACS") {
                html_result += "<div class=\"phieucanACSV\">";
                html_result += "<div class=\"mawbNo\">";
                html_result += "<div class=\"mawbNo_sodau\">";
                html_result += "" + catchu(d.MAWB).split("-")[0] + "";
                html_result += "</div>";
                html_result += "<div class=\"mawbNo_socuoi\">";
                html_result += "" + catchu(d.MAWB).split("-")[1] + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"Airport\">";
                html_result += "<div class=\"Airport-departure\">";
                html_result += "HAN";
                html_result += "</div>";
                html_result += "<div class=\"Airport-destination\">";
                html_result += "" + d.DEST_MAWB + "";
                html_result += "</div>";
                html_result += "<div class=\"Airport-routing\">";
                if (d.DEST_MAWB != d.DEST) {
                    html_result += "HAN-" + d.DEST + "-" + d.DEST_MAWB + "";
                } else {
                    html_result += "HAN-" + d.DEST_MAWB + "";
                }
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"information\">";
                html_result += "<div class=\"information-pieces\">";
                html_result += "" + d.PLT + "";
                html_result += "</div>";
                html_result += "<div class=\"information-grossweight\">";
                html_result += "";
                html_result += "</div>";
                html_result += "<div class=\"information-package\">";
                html_result += "" + d.PACKAGE + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"commodity\">";
                html_result += "<div class=\"commodity-title\">";
                html_result += "" + d.COMMODITY + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"shipperadd\">";
                html_result += "<div class=\"shipperadd_one\">";
                html_result += "" + d.SHIPPER + "";
                html_result += "</div>";
                html_result += "<div class=\"shipperadd_two\">";
                html_result += "" + d.SHIPPER_Add + "";
                html_result += "</div>";
                html_result += "<div class=\"shipperadd_mst\">";
                html_result += "" + d.MST + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"cneeadd\">";
                html_result += "<div class=\"cneeadd_one\">";
                html_result += "" + d.CNEE + "";
                html_result += "</div>";
                html_result += "<div class=\"cneeadd_two\">";
                html_result += "" + d.CNEE_Add + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"handlinginfo\">";
                html_result += "<div class=\"handlinginfo-title\">";
                html_result += "" + d.HANDLING_INFO + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"remarksli\">";
                html_result += "<div class=\"remarksli-title\">";
                html_result += "" + d.REMARK_SLI + "";
                html_result += "</div>";
                html_result += "<div class=\"remarksli-title2\">";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"fullnameACS\">";
                html_result += "" + d.FullName2 + "";
                html_result += "</div>";
                html_result += "</div>";
            } else if (makho == "ALSC") {
                html_result += "<div class=\"phieucan\">";
                html_result += "<div class=\"shipper\">";
                html_result += "<div class=\"shipper_one\">";
                html_result += "" + d.SHIPPER + "";
                html_result += "</div>";
                html_result += "<div class=\shipper_two\">";
                html_result += "" + d.SHIPPER_Add + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"mst\">";
                html_result += "<div class=\"mst_chungnhan\">";
                html_result += "" + d.BOOK + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + d.ChungNhan + "";
                html_result += "</div>";
                html_result += "<div class=\"mst_mst\">";
                html_result += "" + d.MST + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"cnee\">";
                html_result += "<div class=\"cnee_one\">";
                html_result += "" + d.CNEE + "";
                html_result += "</div>";
                html_result += "<div class=\"cnee_two\">";
                html_result += "" + d.CNEE_Add + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"mawbfltplt\">";
                html_result += "<div class=\"mawbfltplt_mawb fontweight600\">";
                html_result += "" + catchu(d.MAWB) + "";
                html_result += "</div>";
                html_result += "<div class=\"mawbfltplt_flt fontweight600\">";
                html_result += "" + d.FLTNO + "/" + convertDateUS(d.FLTDATETIME) + "";
                html_result += "</div>";
                html_result += "<div class=\"mawbfltplt_plt fontweight600\">";
                html_result += "" + d.PLT + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"han fontweight600\">";
                html_result += "<div class=\"han_han\">";
                html_result += "HAN";
                html_result += "</div>";
                html_result += "<div class=\"han_destmawb fontweight600\">";
                html_result += "" + d.DEST_MAWB + "";
                html_result += "</div>";
                html_result += "<div class=\"han_dest fontweight600\">";
                if (d.DEST_MAWB != d.DEST) {
                    html_result += "HAN-" + d.DEST + "-" + d.DEST_MAWB + "";
                } else {
                    html_result += "HAN-" + d.DEST_MAWB + "";
                }
                html_result += "</div>";
                html_result += "<div class=\"han_package fontweight600\">";
                html_result += "" + d.PACKAGE + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"commondity\">";
                html_result += "<div class=\"commondity_title fontweight600\">";
                html_result += "" + d.COMMODITY + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"handling_info\">";
                html_result += "<div class=\"handling_info-title fontweight600\">";
                html_result += "" + d.HANDLING_INFO + "";
                html_result += "</div>";
                html_result += "</div>";
                //html_result += "<%-- Nếu là ALSC thì thêm 2 dòng note này --%>";
                //html_result += "<div class=\"notealsc\">";
                //html_result += "<div class=\"notealsc_one\">";
                //if (d.Warehouse == "ALSC") {
                //    //html_result += "This shipment does not contain all types of Vivo shipments";
                //    //html_result += "containing batteries(Including mobile phone)";
                //}
                //html_result += "</div>";
                //html_result += "<div class=\"notealsc_two\">";
                ////if (d.Warehouse == "ALSC") {
                ////    html_result += "This shipment does not contain used or refurbished";
                ////    html_result += "Lithium Battery Powered Equipment / Battery Power Vehicles";
                ////}
                //html_result += "</div>";
                //html_result += "</div>";
                html_result += "<div class=\"remark_sli\">";
                html_result += "<div class=\"remark_sli-title\">";
                if (d.REMARK_SLI.split("\n").length >= 0) {
                    for (var i = 0; i < d.REMARK_SLI.split("\n").length; i++) {
                        html_result += "<p>" + d.REMARK_SLI.split("\n")[i] + "</p>";
                    }
                } else {
                    html_result += "";
                }

                //html_result += "" + d.REMARK_SLI + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"hscode\">";
                html_result += "<div class=\"hscode-title\">";
                html_result += "" + d.HSCODE + "";
                html_result += "</div>";
                html_result += "</div>";

                html_result += "<div class=\"fullnameALSC\">";
                html_result += "" + d.FullName2 + "";
                html_result += "</div>";
                html_result += "</div>";
            } else {
                html_result += "<div class=\"phieucan\">";
                html_result += "<div class=\"shipper\">";
                html_result += "<div class=\"shipper_one\">";
                html_result += "" + d.SHIPPER + "";
                html_result += "</div>";
                html_result += "<div class=\shipper_two\">";
                html_result += "" + d.SHIPPER_Add + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"mst\">";
                html_result += "<div class=\"mst_chungnhan\">";
                html_result += "" + d.BOOK + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + d.ChungNhan + "";
                html_result += "</div>";
                html_result += "<div class=\"mst_mst\">";
                html_result += "" + d.MST + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"cnee\">";
                html_result += "<div class=\"cnee_one\">";
                html_result += "" + d.CNEE + "";
                html_result += "</div>";
                html_result += "<div class=\"cnee_two\">";
                html_result += "" + d.CNEE_Add + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"mawbfltplt\">";
                html_result += "<div class=\"mawbfltplt_mawb fontweight600\">";
                html_result += "" + catchu(d.MAWB) + "";
                html_result += "</div>";
                html_result += "<div class=\"mawbfltplt_flt fontweight600\">";
                html_result += "" + d.FLTNO + "/" + convertDateUS(d.FLTDATETIME) + "";
                html_result += "</div>";
                html_result += "<div class=\"mawbfltplt_plt fontweight600\">";
                html_result += "" + d.PLT + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"han fontweight600\">";
                html_result += "<div class=\"han_han\">";
                html_result += "HAN";
                html_result += "</div>";
                html_result += "<div class=\"han_destmawb fontweight600\">";
                html_result += "" + d.DEST_MAWB + "";
                html_result += "</div>";
                html_result += "<div class=\"han_dest fontweight600\">";
                if (d.DEST_MAWB != d.DEST) {
                    html_result += "HAN-" + d.DEST + "-" + d.DEST_MAWB + "";
                } else {
                    html_result += "HAN-" + d.DEST_MAWB + "";
                }
                html_result += "</div>";
                html_result += "<div class=\"han_package fontweight600\">";
                html_result += "" + d.PACKAGE + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"commondity\">";
                html_result += "<div class=\"commondity_title fontweight600\">";
                html_result += "" + d.COMMODITY + "";
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"handling_info\">";
                html_result += "<div class=\"handling_info-title fontweight600\">";
                html_result += "" + d.HANDLING_INFO + "";
                html_result += "</div>";
                html_result += "</div>";
                //html_result += "<%-- Nếu là ALSC thì thêm 2 dòng note này --%>";
                html_result += "<div class=\"notealsc\">";
                html_result += "<div class=\"notealsc_one\">";
                if (d.Warehouse == "ALSC") {
                    html_result += "This shipment does not contain all types of Vivo shipments";
                    html_result += "containing batteries(Including mobile phone)";
                }
                html_result += "</div>";
                html_result += "<div class=\"notealsc_two\">";
                if (d.Warehouse == "ALSC") {
                    html_result += "This shipment does not contain used or refurbished";
                    html_result += "Lithium Battery Powered Equipment / Battery Power Vehicles";
                }
                html_result += "</div>";
                html_result += "</div>";
                html_result += "<div class=\"remark_sli\">";
                html_result += "<div class=\"remark_sli-title\">";
                html_result += "" + d.REMARK_SLI + "";
                html_result += "</div>";
                html_result += "</div>";

                html_result += "<div class=\"fullname\">";
                html_result += "" + d.FullName2 + "";
                html_result += "</div>";
                html_result += "</div>";
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
    })

    return html_result;
}

// Load Pin
function loadPin(value) {
    let htmlOptionPin = "";
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/selectPin",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            htmlOptionPin = "";
            $.each(d, function (key, val) {
                if (value === val.BATTERRY) {
                    htmlOptionPin += "<option selected value=\"" + val.BATTERRY + "\">" + val.BATTERRY + "</option>";
                } else {
                    htmlOptionPin += "<option value=\"" + val.BATTERRY + "\">" + val.BATTERRY + "</option>";
                }
            })
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });

    return htmlOptionPin;
}

// Load Package
function loadPackage(value) {
    let htmlOptionPackage = "";
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/selectPACKAGE",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            htmlOptionPackage = "";
            $.each(d, function (key, val) {
                if (value.trim() === val.PACKAGE.trim()) {
                    htmlOptionPackage += "<option selected value=\"" + val.PACKAGE + "\">" + val.PACKAGE + "</option>";
                } else {
                    htmlOptionPackage += "<option value=\"" + val.PACKAGE + "\">" + val.PACKAGE + "</option>";
                }

            })
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });

    return htmlOptionPackage;
}

// Load FWD
function loadFWD() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/selectFWD",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            htmlOptionFWD = "<option selected value=\"ALL\">ALL</option>";
            htmlRadio = "";
            $.each(d, function (key, val) {
                htmlOptionFWD += "<option value=\"" + val.FWD + "\">" + val.FWD + "</option>";

                htmlRadio += "<div class=\"custom-control custom-radio\">";
                htmlRadio += "<input class=\"custom-control-input\" type=\"radio\" id=\"customRadio" + (key + 1) + "\" name=\"RadioFWD\" value=\"" + val.FWD + "\" />   ";
                htmlRadio += "<label for=\"customRadio" + (key + 1) + "\" class=\"custom-control-label\">" + val.FWD + "</label>";
                htmlRadio += "</div>";
            });
            $("#select-loc").empty().append(htmlOptionFWD);
            $('.show-radio').empty().append(htmlRadio);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
}

// Update checkbox 
function UpdateMAWB(input, input1, input2) {
    ajaxGet3 = { "get1": input, "get2": input1, "get3": input2 };
    var jsonData = JSON.stringify({ ajaxGet3 });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/updateMAWBCheck",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {

    });
}

// Load checkbox
function fncLoadCheckMaWB(soMAWB) {
    ajaxGet = { "get": soMAWB };
    JsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/reOPSCheck",
        data: JsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            if (d.SLI == "True") {
                $(".cb-dtt").prop('checked', true);
                $(".dtt" + soMAWB + "").empty().append("" + d.NVCheckSLI + " <br/> lúc " + convertDate(d.NgayGioCheckSLI)[5] + "");
                $(".dtt" + soMAWB + "").addClass("td-color");
            } else {
                $(".cb-dtt").prop('checked', false);
                $(".dtt" + soMAWB + "").empty().append("")
                $(".dtt" + soMAWB + "").removeClass("td-color");
            }

            if (d.LABEL == "True") {
                $(".cb-inlabel").prop('checked', true);
                $(".lb" + soMAWB + "").empty().append("" + d.NVCheckLabel + " <br/> lúc " + convertDate(d.NgayGioCheckLabel)[5] + "")
                $(".lb" + soMAWB + "").addClass("td-color");
            } else {
                $(".cb-inlabel").prop('checked', false);
                $(".lb" + soMAWB + "").empty().append("")
                $(".lb" + soMAWB + "").removeClass("td-color");
            }

            if (d.DOC == "True") {
                $(".cb-indoc").prop('checked', true);
                $(".doc" + soMAWB + "").empty().append("" + d.NVCheckDOC + " <br/> lúc " + convertDate(d.NgayGioCheckDOC)[5] + "")
                $(".doc" + soMAWB + "").addClass("td-color");
            } else {
                $(".cb-indoc").prop('checked', false);
                $(".doc" + soMAWB + "").empty().append("")
                $(".doc" + soMAWB + "").removeClass("td-color");
            }

            if (d.PHIEUCAN == "True") {
                $(".cb-inphieucan").prop('checked', true);
                $(".pc" + soMAWB + "").empty().append("" + d.NVCheckPhieucan + " <br/> lúc " + convertDate(d.NgayGioPhieucan)[5] + "")
                $(".pc" + soMAWB + "").addClass("td-color");
            } else {
                $(".cb-inphieucan").prop('checked', false);
                $(".pc" + soMAWB + "").empty().append("")
                $(".pc" + soMAWB + "").removeClass("td-color");
            }
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    });

}

//Load MATERIAL
function fncLoadMATERIAL(id) {
    ajaxGet = { get: "" };
    JsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadMATERIAL",
        data: JsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            html_body = "";
            $.each(d, function (key, val) {
                arrMaterial.push(val.Material);
                arrHSCode.push(val.HSCode);
            });
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
    });
}

//Load DOC
function fncLoadDOC(id) {
    ajaxGet = { get: "" };
    JsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadDOC",
        data: JsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            html_body = "";
            $.each(d, function (key, val) {
                html_body += "<tr id=\"tr-doc-" + val.Id + "\" doc-id=\"" + val.Id + "\">";
                html_body += "<td class=\"\">" + val.FWD + "</td>";
                html_body += "<td class=\"td-code3\">" + val.CODE_3_SO + "</td>";
                html_body += "<td class=\"td-code2\">" + val.CODE_2_CHU + "</td>";
                html_body += "<td class=\"\">" + val.ISSUE_MAWB + "</td>";
                html_body += "<td class=\"\">" + val.FORM_PIN + "</td>";
                html_body += "<td class=\"\">" + val.FORM_CSD_EU + "</td>";
                html_body += "<td class=\"\">" + val.FORM_US + "</td>";
                html_body += "<td class=\"\">" + val.FORM_OTHER_1 + "</td>";
                html_body += "<td class=\"\">" + val.FORM_OTHER_2 + "</td>";
                html_body += "<td class=\"\">" + val.FORM_OTHER_3 + "</td>";
                html_body += "<td class=\"\">" + val.REMARK + "</td>";
                html_body += "<td class=\"\">" + val.NguoiTao + "</td>";
                html_body += "<td class=\"\">" + val.NguoiSua + "</td>";
                html_body += "<td>" + "<button type=\"button\" class=\"btn btn-warning btn-sm btn-doc-xoa\">Xóa</button>" + "</td>";
                html_body += "</tr>";
            });

            $("#tbl-doc tbody").empty().append(html_body);
            $("#tbl-doc").DataTable();
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

function fncEditDOC(id) {
    event.stopPropagation();
    var listDOC = {};

    listDOC = {
        Id: id,
        FWD: $("#input-doc-fwd").val(),
        CODE_3_SO: $("#input-doc-code3").val(),
        CODE_2_CHU: $("#input-doc-code2").val(),
        ISSUE_MAWB: $("#input-doc-issuemawb").val(),
        FORM_PIN: $("#input-doc-pin").val(),
        FORM_CSD_EU: $("#input-doc-csd").val(),
        FORM_US: $("#input-doc-formus").val(),
        FORM_OTHER_1: $("#input-doc-other1").val(),
        FORM_OTHER_2: $("#input-doc-other2").val(),
        FORM_OTHER_3: $("#input-doc-other3").val(),
        REMARK: $("#input-doc-mark").val(),
    }
    jsonData = JSON.stringify({ listDOC });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/insertUpdateDOC",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "1") {
                alert("Thêm mới thành công 1");
                $("#myModalDOC-Edit").modal("hide");
            } else if (d == "2") {
                alert("Cập nhật thành công 2")
                $("#myModalDOC-Edit").modal("hide");
            } else {
                alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!")
            }
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}

function fncEditDOCBYID(id) {
    //$(".input-cnee-clear").val("")
    ajaxGet = { get: id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadDOCBYID",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            $("#input-doc-fwd").val(d.FWD);
            $("#input-doc-code3").val(d.CODE_3_SO);
            $("#input-doc-code2").val(d.CODE_2_CHU);
            $("#input-doc-issuemawb").val(d.ISSUE_MAWB);
            $("#input-doc-pin").val(d.FORM_PIN);
            $("#input-doc-csd").val(d.FORM_CSD_EU);
            $("#input-doc-formus").val(d.FORM_US);
            $("#input-doc-other1").val(d.FORM_OTHER_1);
            $("#input-doc-other2").val(d.FORM_OTHER_2);
            $("#input-doc-other3").val(d.FORM_OTHER_3);
            $("#input-doc-mark").val(d.REMARK);
            $("#btn-doc-edit-luu").attr("btn-iddoc", d.Id);
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

function fncDeleteDOC(id) {
    ajaxGet = { get: id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/deleteDOC",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "ok") {
                alert("Đã xóa thành công!");
                fncLoadDOC(0);
            }
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}


//Load AirLine
function fncLoadAIRLINE(id) {
    ajaxGet = { get: "" };
    JsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadAIRLINE",
        data: JsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            html_body = "";
            $.each(d, function (key, val) {
                html_body += "<tr id=\"tr-airline-" + val.Id + "\" airline-id=\"" + val.Id + "\">";
                html_body += "<td class=\"td-airlinecode\">" + val.Airline_Code + "</td>";
                html_body += "<td class=\"td-airlinename\">" + val.Airline_Name + "</td>";
                html_body += "<td class=\"\">" + val.Airline_Add + "</td>";
                html_body += "<td class=\"\">" + val.Airline_Acc_No + "</td>";
                html_body += "<td class=\"\">" + val.Airline_IATA_Code + "</td>";
                html_body += "<td class=\"\">" + val.REMARK + "</td>";
                html_body += "<td class=\"\">" + val.NguoiTao + "</td>";
                html_body += "<td class=\"\">" + val.NguoiSua + "</td>";
                html_body += "<td>" + "<button type=\"button\" class=\"btn btn-warning btn-sm btn-airline-xoa\">Xóa</button>" + "</td>";
                html_body += "</tr>";
            });

            $("#tbl-airline tbody").empty().append(html_body);
            $("#tbl-airline").DataTable();
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

function fncEditAIRLINE(id) {
    event.stopPropagation();
    var aIRLINE_INFO = {};

    aIRLINE_INFO = {
        Id: id,
        Airline_Code: $("#input-airlinecode").val(),
        Airline_Name: $("#input-airlinename").val(),
        Airline_Add: $("#input-airlineadd").val(),
        Airline_Acc_No: $("#input-airlineacc").val(),
        Airline_IATA_Code: $("#input-airlineiata").val(),
        REMARK: $("#input-remark-airline").val(),
    }
    jsonData = JSON.stringify({ aIRLINE_INFO });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/insertUpdateAIRLINE",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "1") {
                alert("Thêm mới thành công");
                $("#myModalAIRLINE-Edit").modal("hide");
            } else if (d == "2") {
                alert("Cập nhật thành công")
                $("#myModalAIRLINE-Edit").modal("hide");
            } else {
                alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!")
            }
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}

function fncEditAIRLINEBYID(id) {
    //$(".input-cnee-clear").val("")
    ajaxGet = { get: id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadAIRLINEBYID",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            $("#input-airlinecode").val(d.Airline_Code);
            $("#input-airlinename").val(d.Airline_Name);
            $("#input-airlineadd").val(d.Airline_Add);
            $("#input-airlineacc").val(d.Airline_Acc_No);
            $("#input-airlineiata").val(d.Airline_IATA_Code);
            $("#input-remark-airline").val(d.REMARK);
            $("#btn-airline-edit-luu").attr("btn-idairline", d.Id);
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

function fncDeleteAIRLINE(id) {
    ajaxGet = { get: id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/deleteAIRLINE",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "ok") {
                alert("Đã xóa thành công!");
                fncLoadAIRLINE(0);
            }
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}




// Load FLT NO
function fncLoadFLTNO(id) {
    ajaxGet = { get: "" };
    JsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadFLIGHTNO",
        data: JsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            html_body = "";
            $.each(d, function (key, val) {
                html_body += "<tr id=\"tr-fltno-" + val.Id + "\" fltno-id=\"" + val.Id + "\">";
                html_body += "<td class=\"td-fltno\">" + val.FLTNO + "</td>";
                html_body += "<td class=\"td-dest\">" + val.DEST + "</td>";
                html_body += "<td class=\"td-remark\">" + val.REMARK + "</td>";
                html_body += "<td class=\"\">" + val.NguoiTao + "</td>";
                html_body += "<td class=\"\">" + val.NguoiSua + "</td>";
                html_body += "<td>" + "<button type=\"button\" class=\"btn btn-warning btn-sm btn-fltno-xoa\">Xóa</button>" + "</td>";
                html_body += "</tr>";
            });

            $("#tbl-flightno tbody").empty().append(html_body);
            $("#tbl-flightno").DataTable();
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

function fncEditFLTNO(id) {
    event.stopPropagation();
    var fLIGHTNO = {};

    fLIGHTNO = {
        Id: id,
        FLTNO: $("#input-fltno").val(),
        DEST: $("#input-dest").val(),
        REMARK: $("#input-remark-flt").val(),
    }
    jsonData = JSON.stringify({ fLIGHTNO });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/insertUpdateFLIGHTNO",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "1") {
                alert("Thêm mới thành công");
                $("#myModalFLIGHTNO-Edit").modal("hide");
            } else if (d == "2") {
                alert("Cập nhật thành công")
                $("#myModalFLIGHTNO-Edit").modal("hide");
            } else {
                alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!")
            }
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}

function fncEditFLIGHTNOBYID(id) {
    //$(".input-cnee-clear").val("")
    ajaxGet = { get: id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadFLIGHTNOBYID",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            $("#input-fltno").val(d.DEST);
            $("#input-dest").val(d.FLTNO);
            $("#input-remark-flt").val(d.REMARK);
            $("#btn-fltno-edit-luu").attr("btn-idfltno", d.Id);
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

function fncDeleteFLIGHTNO(id) {
    ajaxGet = { get: id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/deleteFLIGHTNO",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "ok") {
                alert("Đã xóa thành công!");
                fncLoadFLTNO(0);
            }
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}


// Load COMMODITY
function fncLoadCOMMODITY(id) {
    ajaxGet = { get: "" };
    JsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadCOMMODITY",
        data: JsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            html_body = "";
            $.each(d, function (key, val) {
                html_body += "<tr id=\"tr-commodity-" + val.Id + "\" commodity-id=\"" + val.Id + "\">";
                html_body += "<td class=\"td-model\">" + val.MODEL + "</td>";
                html_body += "<td class=\"td-commodity\">" + val.COMMODITY + "</td>";
                html_body += "<td class=\"td-fwd\">" + val.FWD + "</td>";
                html_body += "<td class=\"td-remark\">" + val.REMARK + "</td>";
                html_body += "<td class=\"\">" + val.NguoiTao + "</td>";
                html_body += "<td class=\"\">" + val.NguoiSua + "</td>";
                html_body += "<td>" + "<button type=\"button\" class=\"btn btn-warning btn-sm btn-commodity-xoa\">Xóa</button>" + "</td>";
                html_body += "</tr>";
            });

            $("#tbl-commodity tbody").empty().append(html_body);
            $("#tbl-commodity").DataTable();
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

function fncEditCommodity(id) {
    event.stopPropagation();
    var listcommodity = {};

    listcommodity = {
        Id: id,
        FWD: $("#input-commodity-fwd").val(),
        MODEL: $("#input-model-commodity").val(),
        COMMODITY: $("#input-commodity-r").val(),
        REMARK: $("#input-remark-commodity").val(),
    }
    jsonData = JSON.stringify({ listcommodity });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/insertUpdateCommodity",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "1") {
                alert("Thêm mới thành công");
                $("#myModalCOMMODITY-Edit").modal("hide");
            } else if (d == "2") {
                alert("Cập nhật thành công")
                $("#myModalCOMMODITY-Edit").modal("hide");
            } else {
                alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!")
            }
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })

}

function fncEditCOMMODITYBYID(id) {
    //$(".input-cnee-clear").val("")
    console.log(id)
    ajaxGet = { get: id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadCOMMODITYBYID",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            $("#input-model-commodity").val(d.MODEL);
            $("#input-commodity-r").val(d.COMMODITY);
            $("#input-commodity-fwd").val(d.FWD);
            $("#input-remark-commodity").val(d.REMARK);
            $("#btn-commodity-edit-luu").attr("btn-idcommodity", d.Id);
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

function fncDeleteCOMMODITY(id) {
    ajaxGet = { get: id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/deleteCOMMODITY",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "ok") {
                alert("Đã xóa thành công!");
                fncLoadCOMMODITY(0);
            }
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}



// Load Model
function fncLoadMODEL(id) {
    ajaxGet = { get: "" };
    JsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadMODELPI",
        data: JsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            html_body = "";
            $.each(d, function (key, val) {
                html_body += "<tr id=\"tr-model-" + val.Id + "\" model-id=\"" + val.Id + "\">";
                html_body += "<td class=\"td-model\">" + val.MODEL + "</td>";
                html_body += "<td class=\"td-packing\">" + val.PACKING_INSTRUCTION + "</td>";
                html_body += "<td class=\"td-section\">" + val.SECTION + "</td>";
                html_body += "<td class=\"\">" + val.REMARK + "</td>";
                html_body += "<td>" + "<button type=\"button\" class=\"btn btn-warning btn-sm btn-model-xoa\">Xóa</button>" + "</td>";
                html_body += "</tr>";
            });

            $("#tbl-model tbody").empty().append(html_body);
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

function fncEditModel(id) {
    event.stopPropagation();
    var modelpi = {};

    modelpi = {
        Id: id,
        MODEL: $("#input-model").val(),
        PACKING_INSTRUCTION: $("#input-packingintruction").val(),
        SECTION: $("#input-section").val(),
        FWD: $("#input-model-fwd").val(),
        REMARK: $("#input-remark-model").val(),
    }
    jsonData = JSON.stringify({ modelpi });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/insertUpdateModel",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "1") {
                alert("Thêm mới thành công");
                $("#myModalMODEL-Edit").modal("hide");
            } else if (d == "2") {
                alert("Cập nhật thành công")
                $("#myModalMODEL-Edit").modal("hide");
            } else {
                alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!")
            }
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })

}

function fncEditMODELBYID(id) {
    //$(".input-cnee-clear").val("")
    ajaxGet = { get: id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadMODELBYID",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            $("#input-model").val(d.MODEL);
            $("#input-packingintruction").val(d.PACKING_INSTRUCTION);
            $("#input-section").val(d.SECTION);
            $("#input-model-fwd").val(d.FWD);
            $("#input-remark-model").val(d.REMARK);
            $("#btn-model-edit-luu").attr("btn-idmodel", d.Id);
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

function fncDeleteMODEL(id) {
    ajaxGet = { get: id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/deleteMODEL",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "ok") {
                alert("Đã xóa thành công!");
                fncLoadMODEL(0);
            }
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}


// FNC Load DEST
function fncLoadDEST(id) {

    ajaxGet = { get: "" };
    JsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadDESTIATION",
        data: JsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            html_body = "";
            $.each(d, function (key, val) {
                html_body += "<tr id=\"tr-dest-" + val.Id + "\" dest-id=\"" + val.Id + "\">";
                html_body += "<td class=\"td-port\">" + val.PORT + "</td>";
                html_body += "<td class=\"td-dest-mawb\">" + val.DESTMAWB + "</td>";
                html_body += "<td class=\"td-dest-hawb\">" + val.DESTHAWB + "</td>";
                html_body += "<td class=\"td-dest-hawb\">" + val.NguoiTao + "</td>";
                html_body += "<td class=\"td-dest-hawb\">" + val.NguoiSua + "</td>";
                html_body += "<td>" + "<button type=\"button\" class=\"btn btn-warning btn-sm btn-dest-xoa\">Xóa</button>" + "</td>";
                html_body += "</tr>";
            });

            $("#tbl-dest tbody").empty().append(html_body);

            $("#tbl-dest").DataTable();
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

function fncEditDEST(id) {
    event.stopPropagation();
    var desttination = {};

    desttination = {
        Id: id,
        PORT: $("#input-port").val(),
        DESTMAWB: $("#input-destmawb").val(),
        DESTHAWB: $("#input-desthawb").val(),
        FWD: $("#input-dest-fwd").val(),
        REMARK: $("#input-remark").val(),
    }
    jsonData = JSON.stringify({ desttination });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/insertUpdateDest",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "1") {
                alert("Thêm mới thành công");
                $("#myModalDEST-Edit").modal("hide");
            } else if (d == "2") {
                alert("Cập nhật thành công")
                $("#myModalDEST-Edit").modal("hide");
            } else {
                alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!")
            }
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })

}

function fncEditDESTBYID(id) {
    //$(".input-cnee-clear").val("")
    ajaxGet = { get: id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadDESTBYID",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            $("#input-destmawb").val(d.DESTMAWB);
            $("#input-desthawb").val(d.DESTHAWB);
            $("#input-fwd").val(d.FWD);
            $("#input-port").val(d.PORT);
            $("#input-remark").val(d.REMARK);
            $("#btn-dest-edit-luu").attr("btn-iddest", d.Id);
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

function fncDeleteDEST(id) {
    ajaxGet = { get: id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/deleteDEST",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "ok") {
                alert("Đã xóa thành công!");
                fncLoadDEST(0);
            }
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}


// FNC Load SHIPPER CNEE
function fncLoadCNEESHPPER(id) {

    ajaxGet = { get: "" };
    JsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadCNEESHIPPER",
        data: JsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            console.log(d)
            html_body = "";
            $.each(d, function (key, val) {
                html_body += "<tr id=\"tr-cneeshipper-" + val.Id + "\" cneeshipper-id=\"" + val.Id + "\">";
                html_body += "<td class=\"td-dest-mawb\">" + val.DESTMAWB + "</td>";
                html_body += "<td class=\"td-dest-hawb\">" + val.DESTHAWB + "</td>";
                html_body += "<td class=\"td-dest-code\">" + val.DESTCODE + "</td>";
                html_body += "<td>" + val.SHIPPER + "</td>";
                html_body += "<td>" + val.SHIPPER_Add + "</td>";
                html_body += "<td>" + val.SHIPPER_Tax_No + "</td>";
                html_body += "<td>" + val.CNEE + "</td>";
                html_body += "<td>" + val.CNEE_Add + "</td>";
                //html_body += "<td>" + val.CNEE_Tax_No + "</td>";
                //html_body += "<td>" + val.NOTIFY + "</td>";
                //html_body += "<td>" + val.NOTIFY_Add + "</td>";
                html_body += "<td>" + val.COMMODITY + "</td>";
                html_body += "<td>" + val.NguoiTao + "</td>";
                html_body += "<td>" + val.NguoiSua + "</td>";
                html_body += "<td>" + "<button type=\"button\" class=\"btn btn-warning btn-sm btn-cnee-shipper-xoa\">Xóa</button>" + "</td>";
                html_body += "</tr>";
            });

            $("#tbl-cneeshipper tbody").empty().append(html_body);
            $("#tbl-cneeshipper").DataTable();
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

function fncEditCNEESHIPPER(id) {
    event.stopPropagation();
    list_cnee_shipper = { items: [] };

    list_cnee_shipper.items.push(
        {
            Id: id,
            FWD: $("#input-fwd").val(),
            DESTMAWB: $("#input-dest-mawb").val(),
            DESTHAWB: $("#input-dest-hawb").val(),
            DESTCODE: $("#input-dest-code").val(),
            SHIPPER: $("#input-shipper").val(),
            SHIPPER_Add: $("#input-shipper-add").val(),
            SHIPPER_Tax_No: $("#input-shipper-tax").val(),
            CNEE: $("#input-cnee").val(),
            CNEE_Add: $("#input-cnee-add").val(),
            CNEE_Tax_No: $("#input-cnee-tax").val(),
            NOTIFY: $("#input-notify").val(),
            NOTIFY_Add: $("#input-notify-add").val(),
            COMMODITY: $("#input-commodity").val()
        })

    jsonData = JSON.stringify({ list_cnee_shipper });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/insertUpdateCnee",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "1") {
                alert("Thêm mới thành công");
                $("#myModalCNEESHIPPER-Edit").modal("hide");
            } else if (d == "2") {
                alert("Cập nhật thành công")
                $("#myModalCNEESHIPPER-Edit").modal("hide");
            } else {
                alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!")
            }
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })

}

function fncEditCNEESHIPPERBYID(id) {
    //$(".input-cnee-clear").val("")
    ajaxGet = { get: id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/loadCNEESHIPPERBYID",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            $("#input-dest-mawb").val(d.DESTMAWB);
            $("#input-dest-hawb").val(d.DESTHAWB);
            $("#input-dest-code").val(d.DESTCODE);
            $("#input-shipper").val(d.SHIPPER);
            $("#input-shipper-add").val(d.SHIPPER_Add);
            $("#input-shipper-tax").val(d.SHIPPER_Tax_No);
            $("#input-cnee").val(d.CNEE);
            $("#input-cnee-add").val(d.CNEE_Add);
            $("#input-cnee-tax").val(d.CNEE_Tax_No);
            $("#input-notify").val(d.NOTIFY);
            $("#input-notify-add").val(d.NOTIFY_Add);
            $("#input-commodity").val(d.COMMODITY);
            $("#input-fwd").val(d.FWD);

            $("#btn-cnee-edit-luu").attr("btn-idCnee", d.Id);
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

function fncDeleteCNEE(id) {
    ajaxGet = { get: id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "OPS.aspx/deleteCNEE",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "ok") {
                alert("Đã xóa thành công!");
                fncLoadCNEESHPPER(0);
            }
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    }).done(function () {
        event.stopPropagation();
    });
}

//
function truncateDecimals(number, digits) {
    var multiplier = Math.pow(10, digits),
        adjustedNum = number * multiplier,
        truncatedNum = Math[adjustedNum < 0 ? 'ceil' : 'floor'](adjustedNum);

    return truncatedNum / multiplier;
};

// Convert Ngày tháng năm theo US
function convertDateUS(input) {

    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

    const date = new Date(input)

    const dateString = `${date.getDate()}-${MONTHS[date.getMonth()]}-${date.getFullYear()}`

    return dateString;
}


// Cắt chữ MAWB
function catchu(input) {
    var result;
    var subString = input.substring(0, 3);
    var subStringSau = input.substring(3, 11);
    result = subString + "-" + subStringSau;
    return result;
}

function fncOPSSub(mawb) {
    html_sub1 = "";
    html_sub2 = "";
    html_sub3 = "";
    $(".tr-sub").remove();
    // Hiển thị theo số MAWB
    var ajaxGet2 = { "get1": mawb, "get2": $("#select-loc").val() };
    jsonData = JSON.stringify({ ajaxGet2 });
    //$("#div-wait").show();
    arrModel = [];
    arrGW = [];
    arrSR = [];
    $.ajax({
        type: "POST",
        url: "OPS.aspx/ReOPSByMAWBViews",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            $.each(d.reOPSViewByMAWB, function (key, valMAWB) {
                html_sub2 += "<tr>";
                html_sub2 += "<td class=\"fontweight600\">" + valMAWB.HAWB + "</td>";
                html_sub2 += "<td>" + valMAWB.DEST_HAWB + "</td>";
                html_sub2 += "<td class=\"fontweight600\">" + valMAWB.DO + "</td>";
                html_sub2 += "<td>" + valMAWB.MODEL + "</td>";
                html_sub2 += "<td>" + valMAWB.GW + "</td>";
                html_sub2 += "<td>" + valMAWB.DIM + "</td>";
                html_sub2 += "<td>" + valMAWB.PaletNo + "</td>";
                html_sub2 += "<td>" + valMAWB.QTY + "</td>";
                html_sub2 += "<td>" + valMAWB.PLT + "</td>";
                html_sub2 += "<td>" + valMAWB.CTN + "</td>";
                html_sub2 += "<td>" + valMAWB.PO + "</td>";
                html_sub2 += "<td>" + valMAWB.SR + "</td>";
                html_sub2 += "<td>" + valMAWB.SITE + "</td>";
                html_sub2 += "<td>" + valMAWB.REMARK_MIX + "</td>";
                html_sub2 += "</tr>";
                arrModel.push(valMAWB.MODEL);
                arrGW.push(valMAWB.GW);
                arrSR.push(valMAWB.SR);
            });
            $.each(d.reOPSViewAss, function (key, val) {
                html_sub1 += "<tr class=\"tr-sub tr-sub-" + mawb + "\" sub-mawb=\"" + mawb + "\" >"
                html_sub1 += "<td colspan=\"2\">";
                html_sub1 += "<button type=\"button\" class=\"btn btn-danger btn-qll-xoa\" kehoachid=\"123\" soMAWB=\"" + val.MAWB + "\">Xóa</button></td >";
                html_sub1 += "<td colspan=\"20\">";
                html_sub1 += "<span class=\"span-tieude-sub\">DANH SÁCH</span>";
                //html_sub += "<span class=\"span-menu-edit span-kehoach label label-primary\" kehoachid=\"13748\" sovandon=\"DRE12062021\" socontainer=\".\">Sửa</span>";
                html_sub1 += "<span class=\"span-thongtincapnhat\"><span>Người cập nhật: </span><span class=\"color-red\">" + val.FullName2 + "</span><span> | Thời gian cập nhật: </span><span class=\"color-red\">" + convertDate(val.NgayTao)[5] + "</span></span>";
                html_sub1 += "<table class=\"table table" + mawb + " table-bordered\">";
                html_sub1 += "<thead>";
                html_sub1 += "<tr>";
                html_sub1 += "<td>HAWB</td>";
                html_sub1 += "<td>DESH HAWB</td>";
                html_sub1 += "<td>DO NO.</td>";
                html_sub1 += "<td>MODEL</td> ";
                html_sub1 += "<td>G.W</td>   ";
                html_sub1 += "<td>DIM</td>   ";
                html_sub1 += "<td>PALLET NO</td>   ";
                html_sub1 += "<td>QTY</td>   ";
                html_sub1 += "<td>PLT</td>   ";
                html_sub1 += "<td>CTN</td>   ";
                html_sub1 += "<td>PO</td>    ";
                html_sub1 += "<td>SR</td>    ";
                html_sub1 += "<td>SITE</td>    ";
                html_sub1 += "<td>REMARK</td>";
                html_sub1 += "</tr>";
                html_sub1 += "</thead>";
                html_sub1 += "<tbody>";


                html_sub3 += "</tbody>";
                html_sub3 += "</table>";
                html_sub3 += "<div id=\"btn-all\">";
                html_sub3 += "<div id=\"btn_truoc\">";
                html_sub3 += "<a class=\"btn btn-primary btn-sm marginRight\" soMAWB=\"" + val.MAWB + "\" idKeHoach=\"" + val.Id + "\" id=\"btn-suakehoach\">Sửa kế hoạch</a>";
                html_sub3 += "<a class=\"btn btn-primary btn-sm marginRight\" soMAWB=\"" + val.MAWB + "\" idKeHoach=\"" + val.Id + "\" id=\"btn-capnhat-SR\">Cập nhật SR</a>";
                html_sub3 += "<a class=\"btn btn-primary btn-sm marginRight\" soMAWB=\"" + val.MAWB + "\" idKeHoach=\"" + val.Id + "\" id=\"btn-capnhat-dulieuhangthucte\">Cập nhật dữ liệu hàng thực tế</a>";
                html_sub3 += "<a class=\"btn btn-primary btn-sm marginRight\">Truyền dữ liệu tới kho HKKD</a>";
                html_sub3 += "<a class=\"btn btn-primary btn-sm marginRight\">Gửi email xác nhận SR</a>";
                html_sub3 += "<a class=\"btn btn-primary btn-sm marginRight\">Gửi email xác nhận CS</a>";
                html_sub3 += "</div>";
                html_sub3 += "<div id=\"btn_sau\">";
                html_sub3 += "<a class=\"btn btn-primary btn-sm marginRight\" soMAWB=\"" + val.MAWB + "\" soChuyenBay=\"" + val.FLTNO + "\" id=\"btn-in-phieucan\">In phiếu cân</a>";
                html_sub3 += "<a class=\"btn btn-primary btn-sm marginRight\" id=\"btn-in-mnf\"  soMAWB=\"" + val.MAWB + "\" >In MNF</a>";
                html_sub3 += "<a class=\"btn btn-primary btn-sm marginRight\"  soMAWB=\"" + val.MAWB + "\" idKeHoach=\"" + val.Id + "\" id=\"btn-in-label\">In Label</a>";
                setOpacity = "";
                if (val.ISSUE_MAWB !== "True") {
                    setOpacity = "setOpacity";
                }
                html_sub3 += "<a class=\"btn btn-primary btn-sm " + setOpacity + "\" id=\"btn-inMAWB\"  soMAWB=\"" + val.MAWB + "\" attrForm=\"Form_MAWB\"   soDocs=\"" + val.ISSUE_MAWB + "\" >In MAWB</a>";
                html_sub3 += "</div>";
                html_sub3 += "</div>";

                html_sub3 += "<span class=\"span-tieude-sub\">TRẠNG THÁI</span>";
                html_sub3 += "<table class=\"table table-bordered table-checkbox\" id=\"\">";
                html_sub3 += "<thead>";
                html_sub3 += "<tr>";
                html_sub3 += "<td><label for=\"vehicle1\" class=\"txtFontSize width180\">Duyệt thông tin MAWB</label> <input type=\"checkbox\"  class=\"cb-dtt\" name=\"vehicle1\" value=\"" + val.MAWB + "\"></td>";
                html_sub3 += "<td><label for=\"vehicle2\" class=\"txtFontSize width180\">In Phiếu cân</label> <input type=\"checkbox\"  class=\"cb-inphieucan\" name=\"vehicle2\" value=\"" + val.MAWB + "\"></td>";
                html_sub3 += "<td><label for=\"vehicle3\" class=\"txtFontSize width180\">In label</label> <input type=\"checkbox\"  class=\"cb-inlabel\" name=\"vehicle3\" value=\"" + val.MAWB + "\"></td>";

                html_sub3 += "<td><label for=\"vehicle4\" class=\"txtFontSize width180\">In DOC</label> <input type=\"checkbox\"  class=\"cb-indoc\" name=\"vehicle4\" value=\"" + val.MAWB + "\"></td>";
                html_sub3 += "</tr>";
                html_sub3 += "</thead>";
                html_sub3 += "<tbody>";
                html_sub3 += "<td class=\"dtt" + val.MAWB + "\"></td>";
                html_sub3 += "<td class=\"pc" + val.MAWB + "\"></td>";
                html_sub3 += "<td class=\"lb" + val.MAWB + "\"></td>";
                html_sub3 += "<td class=\"doc" + val.MAWB + "\"></td>";
                html_sub3 += "</tbody>";
                html_sub3 += "</table>";

                html_sub3 += "<span class=\"span-tieude-sub\">THÔNG TIN MAWB</span>";
                html_sub3 += "<span class=\"span-menu-edit span-bangiaochungtu label label-primary\" id=\"btn-capnhatCNEE\" soMAWB=\"" + val.MAWB + "\">Cập nhật</span><br />";
                html_sub3 += "<div class=\"span-tieude-sub\">";
                html_sub3 += "<table class=\"table table-bordered\">";
                html_sub3 += "<tbody>";
                commondity = "";
                var lengthCom = objectCommodity.length;
                var lengthMol = arrModel.length;
                for (var i = 0; i < lengthMol; i++) {
                    for (var j = 0; j < lengthCom; j++) {
                        if (arrModel[i].substring(0, 4).indexOf(objectCommodity[j].MODEL) > -1) {
                            if (commondity.indexOf(objectCommodity[j].COMMODITY) < 0) {
                                commondity += objectCommodity[j].COMMODITY + ";";
                            }
                            break;
                        }
                    }
                }
                if (val.SHIPPER == "") {
                    html_sub3 += "<tr>";
                    html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\">Người gửi hàng:</span></td>";
                    if (val.SHIPPERPhu == "" && val.SHIPPER_AddPhu == "") {
                        html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-shipper1-" + val.MAWB + "\" value=\"" + val.SHIPPERPhu + "\"/> <span class=\"spanhienthiphu\">(!)</span>  <input type =\"button\" class=\"btn-showchonAdd\" attrCom=\"" + commondity + "\" attrMawb-td=\"" + val.MAWB + "\" value=\"Thay đổi\"> <br/> <input type=\"text\" class=\"css-input tdfloatleft\"  id=\"id-shipper2-" + val.MAWB + "\"    value=\"" + val.SHIPPER_AddPhu + "\" /> <span class=\"spanhienthiphu\">(!)</span></td>";
                    } else {
                        html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-shipper1-" + val.MAWB + "\" value=\"" + val.SHIPPERPhu + "\"/> <span class=\"spanhienthiphutim\">(!)</span>  <input type =\"button\" class=\"btn-showchonAdd\" attrCom=\"" + commondity + "\" attrMawb-td=\"" + val.MAWB + "\" value=\"Thay đổi\"> <br/> <input type=\"text\" class=\"css-input tdfloatleft\"  id=\"id-shipper2-" + val.MAWB + "\"    value=\"" + val.SHIPPER_AddPhu + "\" /> <span class=\"spanhienthiphutim\">(!)</span></td>";
                    }
                    html_sub3 += "</tr>";
                } else {
                    html_sub3 += "<tr>";
                    html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\">Người gửi hàng:</span></td>";
                    html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-shipper1-" + val.MAWB + "\" value=\"" + val.SHIPPER + "\"/>  <input type =\"button\" attrMawb-td=\"" + val.MAWB + "\" class=\"btn-showchonAdd btn btn-sm btn-primary\" attrCom=\"" + commondity + "\" value=\"Thay đổi\"> <br/><input type=\"text\" class=\"css-input tdfloatleft\" id=\"id-shipper2-" + val.MAWB + "\"   value=\"" + val.SHIPPER_Add + "\" /></td>";
                    html_sub3 += "</tr>";
                }

                if (val.MaSoThue == "") {
                    html_sub3 += "<tr>";
                    html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\"></span></td>";
                    html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input1\" id=\"id-mst-" + val.MAWB + "\" value=\"0305707643001\"/> <span class=\"spanhienthiphutim\">(!)</span>";
                } else {

                    html_sub3 += "<tr>";
                    html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\"></span></td>";
                    html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input1\" id=\"id-mst-" + val.MAWB + "\" value=\"" + val.MaSoThue + "\"/>";
                }
                if (val.PACKAGE == "") {
                    html_Package = "CTNS"; //PALLET
                    for (var i = 0; i < arrGW.length; i++) {
                        if (parseInt(arrGW[i]) > 60) {
                            html_Package = 'WOODEN PALLET'; //PALLET
                        }
                    }
                    html_sub3 += " Package: <select class=\"css-input2 inputlistpin1\" id=\"id-package-" + val.MAWB + "\"> ";
                    html_sub3 += loadPackage(html_Package);
                    html_sub3 += "</select> <span class=\"spanhienthiphutim\">(!)</span>";
                } else {
                    html_sub3 += " Package: <select class=\"css-input2 inputlistpin1\" id=\"id-package-" + val.MAWB + "\">";
                    html_sub3 += loadPackage(val.PACKAGE);
                    html_sub3 += "</select>";
                }
                if (val.BATTERRY == "") {
                    var pin = "";
                    lengthpin = objectPIN.length;
                    lengthMol = arrModel.length;

                    //console.log(arrModel)
                    //console.log(objectPIN)
                    for (var i = 0; i < lengthMol; i++) {
                        for (var j = 0; j < lengthpin; j++) {
                            if (arrModel[i].substring(0, 4).indexOf(objectPIN[j].MODEL) > -1) {
                                if (pin.indexOf(objectPIN[j].PACKING_INSTRUCTION + " " + objectPIN[j].SECTION + " " + objectPIN[j].REMARK) < 0) {
                                    pin += objectPIN[j].PACKING_INSTRUCTION + " " + objectPIN[j].SECTION + " " + objectPIN[j].REMARK + ";";
                                }
                                break;
                            }
                        }
                    }
                    //console.log(pin)
                    if (pin == "") {
                        pin = "Không tìm thấy thông tin PIN"
                    }
                    html_sub3 += " Pin: <select class=\"css-input2 inputlistpin \" id=\"id-pin-" + val.MAWB + "\" >";
                    html_sub3 += loadPin(pin);
                    html_sub3 += "</select> <span class=\"spanhienthiphutim\">(!)</span>";

                } else {
                    html_sub3 += " Pin: <select class=\"css-input2 inputlistpin\" id=\"id-pin-" + val.MAWB + "\">";
                    html_sub3 += loadPin(val.BATTERRY);
                    html_sub3 += "</select>";
                }

                if (val.BOOK === "") {
                    html_sub3 += " Book: <select class=\"css-input2 inputlist3\" id=\"id-book-" + val.MAWB + "\">";
                    html_sub3 += "<option value=\"C/O ALSDS\">C/O SDS</option>";
                    html_sub3 += "<option value=\"Booking SDS\">C/O ALSDS</option>";
                    html_sub3 += "</select> <span class=\"spanhienthiphutim\">(!)</span>";
                } else {
                    html_sub3 += " Book: <select class=\"css-input2 inputlist3\" id=\"id-book-" + val.MAWB + "\">";
                    html_sub3 += "<option selected value=\"" + val.BOOK + "\">" + val.BOOK + "</option>";
                    html_sub3 += "</select>";
                }
                // Thêm HS CODE
                if (val.HSCODE === "") {
                    hscode = "";
                    lengthMaterial = arrMaterial.length;
                    lengthMol = arrModel.length;
                    for (var i = 0; i < lengthMol; i++) {
                        for (var j = 0; j < lengthMaterial; j++) {
                            if (arrModel[i].indexOf(arrMaterial[j]) > -1) {
                                if (hscode.indexOf(arrHSCode[j]) < 0) {
                                    hscode += arrHSCode[j] + ";";
                                }
                                break;
                            }
                        }
                    }
                    html_sub3 += " HS Code: <input type=\"text\" class=\"css-input2\" id=\"id-hscode-" + val.MAWB + "\"   value=\"" + hscode + "\" /> <span class=\"spanhienthiphutim\">(!)</span>";
                } else {
                    html_sub3 += " HS Code: <input type=\"text\" class=\"css-input2\" id=\"id-hscode-" + val.MAWB + "\"   value=\"" + val.HSCODE + "\" />";
                }

                html_sub3 += "</td> ";
                html_sub3 += "</tr>";
                if (val.CNEE == "") {
                    html_sub3 += "<tr>";
                    html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\">Người nhận hàng:</span></td>";
                    if (val.CNEEPhu == "") {
                        html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-cnee1-" + val.MAWB + "\" value=\"" + val.CNEEPhu + "\"/> <span class=\"spanhienthiphu\">(!)</span> <br/> <input type=\"text\" class=\"css-input\" id=\"id-cnee2-" + val.MAWB + "\"  value=\"" + val.CNEE_AddPhu + "\" /> <span class=\"spanhienthiphu\">(!)</span></td>";
                    } else {
                        html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-cnee1-" + val.MAWB + "\" value=\"" + val.CNEEPhu + "\"/> <span class=\"spanhienthiphutim\">(!)</span> <br/> <input type=\"text\" class=\"css-input\" id=\"id-cnee2-" + val.MAWB + "\"  value=\"" + val.CNEE_AddPhu + "\" /> <span class=\"spanhienthiphutim\">(!)</span></td>";
                    }
                    html_sub3 += "</tr>";
                } else {
                    html_sub3 += "<tr>";
                    html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\">Người nhận hàng:</span></td>";
                    html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-cnee1-" + val.MAWB + "\" value=\"" + val.CNEE + "\"/> <br/> <input type=\"text\" class=\"css-input\"  id=\"id-cnee2-" + val.MAWB + "\"   value=\"" + val.CNEE_Add + "\" /> </td>";
                    html_sub3 += "</tr>";
                }
                if (val.NOTIFY == "") {
                    html_sub3 += "<tr>";
                    html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\">Notify:</span></td>";
                    if (val.NOTIFYPhu == "") {
                        html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-notify1-" + val.MAWB + "\" value=\"" + val.NOTIFYPhu + "\"/> <span class=\"spanhienthiphu\">(!)</span>  <br/> <input type=\"text\" class=\"css-input \" id=\"id-notify2-" + val.MAWB + "\"  value=\"" + val.NOTIFY_AddPhu + "\" /> <span class=\"spanhienthiphu\">(!)</span></td>";
                    } else {
                        html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-notify1-" + val.MAWB + "\" value=\"" + val.NOTIFYPhu + "\"/> <span class=\"spanhienthiphutim\">(!)</span>  <br/> <input type=\"text\" class=\"css-input \" id=\"id-notify2-" + val.MAWB + "\"  value=\"" + val.NOTIFY_AddPhu + "\" /> <span class=\"spanhienthiphutim\">(!)</span></td>";
                    }
                    html_sub3 += "</tr>";
                } else {
                    html_sub3 += "<tr>";
                    html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\">Notify:</span></td>";
                    html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-notify1-" + val.MAWB + "\" value=\"" + val.NOTIFY + "\"/>  <br/> <input type=\"text\" class=\"css-input\" id=\"id-notify2-" + val.MAWB + "\"   value=\"" + val.NOTIFY_Add + "\" /></td>";
                    html_sub3 += "</tr>";
                }

                if (val.COMMODITY == "") {
                    if (commondity == "") {
                        commondity = "Không tìm thấy thông tin Commodity"
                    }

                    if (val.COMMODITYPhu === "CONSOL (.....)") {
                        html_sub3 += "<tr>";
                        html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\">Commondity:</span></td>";
                        html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-commodity-" + val.MAWB + "\" value=\"CONSOL(" + commondity + ")\"/> <span class=\"spanhienthiphutim\">(!)</span>";
                        html_sub3 += "</tr>";
                    } else if (val.COMMODITYPhu === "CONSOLIDATED AS PER ATTD MANIFEST") {
                        html_sub3 += "<tr>";
                        html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\">Commondity:</span></td>";
                        html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-commodity-" + val.MAWB + "\" value=\"CONSOLIDATED AS PER ATTD MANIFEST\"/> <span class=\"spanhienthiphutim\">(!)</span>";
                        html_sub3 += "</tr>";
                    } else if (val.COMMODITYPhu == "Real Name/ Not CONSOL") {
                        html_sub3 += "<tr>";
                        html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\">Commondity:</span></td>";
                        html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-commodity-" + val.MAWB + "\" value=\"" + commondity + "\"/> <span class=\"spanhienthiphutim\">(!)</span>";
                        html_sub3 += "</tr>";
                    }
                    else {
                        html_sub3 += "<tr>";
                        html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\">Commondity:</span></td>";
                        html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-commodity-" + val.MAWB + "\" value=\"" + val.COMMODITYPhu + "\"/> <span class=\"spanhienthiphutim\">(!)</span>";
                        html_sub3 += "</tr>";
                    }

                } else {
                    html_sub3 += "<tr>";
                    html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\">Commondity:</span></td>";
                    html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-commodity-" + val.MAWB + "\" value=\"" + val.COMMODITY + "\"/> ";
                    html_sub3 += "</tr>";
                }

                if (val.HANDLING_INFO == "") {
                    var textHANDLING_INFO = "";
                    if (val.PACKING_INSTRUCTION == "PIN967") {
                        textHANDLING_INFO = "LITHIUM ION BATTERIES IN COMPLIANCE WITH SECTION II OF PI967; ";
                    } else if (val.PACKING_INSTRUCTION == "PIN965") {
                        textHANDLING_INFO = "LITHIUM ION BATTERIES IN COMPLIANCE WITH SECTION IB OF PI967;   SOC IS NOT MORE THAN 30%;    DANGEROUS GOODS AS PER ATTACHED DGD – CAO";
                    }
                    html_sub3 += "<tr>";
                    html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\">Handling info:</span></td>";
                    html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-handlinginfo-" + val.MAWB + "\" value=\"" + textHANDLING_INFO + "\"/> <span class=\"spanhienthiphutim\">(!)</span></td> ";
                    html_sub3 += "</tr>";

                } else {
                    html_sub3 += "<tr>";
                    html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\">Handling info:</span></td>";
                    html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><input type=\"text\" class=\"css-input\" id=\"id-handlinginfo-" + val.MAWB + "\" value=\"" + val.HANDLING_INFO + "\"/></td>";
                    html_sub3 += "</tr>";
                }

                html_sub3 += "<tr>";
                html_sub3 += "<td class=\"nobd paddingtd\"><span style=\"float: left;\">Remark SLI:</span></td>";
                var textREMARK_SLI = "";
                if (val.REMARK_SLI == "") {

                    if (val.Warehouse == "ALSC") {
                        textREMARK_SLI += "This shipment does not contain all types of Vivo shipments containing batteries (Including mobile phone)";
                    }

                    if (val.FLTNO.substring(0, 2) == "EK" && val.BATTERRY.length > 0) {
                        textREMARK_SLI += " This shipment does not contain used or refurbished Lithium Battery Powered Equipment/Battery Powered Vehicles ";
                    }

                    if (val.DEST == "DXB" || val.DEST == "DWC" || val.DEST == "AUH" || val.DEST == "SHJ" || val.FLTNO.substring(0, 2) == "EY" || val.FLTNO.substring(0, 2) == "EK") {
                        textREMARK_SLI += " 24 HOUR EMERGENCY RESPONE TELEPHONE NUMBER - +84904053589 "
                    }

                    //if (val.PACKING_INSTRUCTION == "PI967" || val.PACKING_INSTRUCTION == "PI965") {
                    //    textREMARK_SLI = "This shipment does not contain used or refurbished Lithium Battery Powered Equipment/Battery Powered Vehicles;         This shipment does not contain all types of Vivo shipments containing batteries (Including mobile phone)";
                    //}
                    html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><textarea class=\"css-input height100\" id=\"id-remarksli-" + val.MAWB + "\"> " + textREMARK_SLI + "</textarea> <span class=\"spanhienthiphutim\">(!)</span>";
                } else {
                    html_sub3 += "<td class=\"tdfloatleft nobd paddingtd\"><textarea class=\"css-input height100\" id=\"id-remarksli-" + val.MAWB + "\">" + val.REMARK_SLI + " </textarea>";
                }
                html_sub3 += "</td>";
                html_sub3 += "</tr>";
                html_sub3 += "</tbody>";
                html_sub3 += "</table>"
                html_sub3 += "</div>";
                html_sub3 += "<table class=\"table table-bordered\"  >";
                html_sub3 += "<thead>";
                html_sub3 += "<tr>";
                html_sub3 += "</tr>";
                html_sub3 += "</thead>";
                html_sub3 += "<tbody>";
                html_sub3 += "<tr>";
                html_sub3 += "<td class=\"td-ghichuDOc1\"><span  class=\"td-ghichuDOc\">THÔNG TIN DOCS</span> </td>";
                html_sub3 += "<td class=\"td-ghichuDOc1\"><span  class=\"td-ghichuDOc\">Issue MAWB:</span> " + val.ISSUE_MAWB + "</td>";
                html_sub3 += "<td class=\"td-ghichuDOc1 btn-formPin btn-hover\"     attrMAWB=\"" + val.MAWB + "\" attrForm=\"" + val.FORM_PIN + "\"><span  class=\"td-ghichuDOc\">Form Pin:</span> " + val.FORM_PIN + "</td>";
                html_sub3 += "<td class=\"td-ghichuDOc1 btn-formAirline btn-hover\" attrMAWB=\"" + val.MAWB + "\" attrForm=\"" + val.FORM_CSD_EU + "\"><span class=\"td-ghichuDOc \">Form CSD:</span> " + val.FORM_CSD_EU + "</td>";
                html_sub3 += "<td class=\"td-ghichuDOc1\"><span  class=\"td-ghichuDOc btn-hover\">Form US:</span> " + val.FORM_US + "</td>";
                html_sub3 += "<td class=\"td-ghichuDOc1\"><span  class=\"td-ghichuDOc btn-hover\">Form khác:</span>  " + val.FORM_OTHER + "</td>";
                html_sub3 += "</tr>";
                html_sub3 += "</tbody>";
                html_sub3 += "</table>";
                html_sub3 += "<span class=\"span-tieude-sub\">GHI CHÚ</span>";
                html_sub3 += "<span class=\"span-menu-edit span-bangiaochungtu label label-primary\" id=\"btn-capnhat-ghichu-mawb\" soMAWB=\"" + val.MAWB + "\">Cập nhật</span>";
                html_sub3 += "<table class=\"table table-bordered tbl-thongtintokhai\" id=\"tbl-ghichu-khid-13748\">";
                html_sub3 += "<thead>";
                html_sub3 += "</thead>";
                html_sub3 += "<tbody>";
                html_sub3 += "<tr>";
                if (val.REMARK_MAWB == "") {
                    ghichuAss = "";
                    if (arrSR.length > 0) {
                        for (var j = 0; j < arrSR.length; j++) {
                            if (ghichuAss.indexOf(arrSR[j]) < 0) {
                                ghichuAss += arrSR[j] + " ; ";
                            }
                        }
                    }

                    html_sub3 += "<td class=\"tdfloatleft\"><input type=\"text\" class=\"css-input td-ghichu-mawb\" id=\"td-ghichu-" + val.MAWB + "\"   value=\"" + ghichuAss + "\" />";
                } else {
                    html_sub3 += "<td class=\"tdfloatleft\"><input type=\"text\" class=\"css-input td-ghichu-mawb\"   id=\"td-ghichu-" + val.MAWB + "\"  value=\"" + val.REMARK_MAWB + "\" />";
                }
                html_sub3 += "</tr>";
                html_sub3 += " </tbody > ";
                html_sub3 += "</table>";
                html_sub3 += "<span class=\"span-tieude-sub\">THÔNG TIN TỜ KHAI</span>";
                html_sub3 += "<span class=\"span-menu-edit span-thongtintokhai-sua label label-warning\" thongtintokhaiid=\"\" kehoachid=\"13748\" sovandon=\"DRE12062021\" socontainer=\".\">+ Thêm</span>";
                html_sub3 += "<table class=\"table table-bordered tbl-thongtintokhai\" id=\"tbl-thongtintokhai-khid-13748\">";
                html_sub3 += "<thead>";
                html_sub3 += "<tr>";
                html_sub3 += "<td></td>";
                html_sub3 += "<td>Số tờ khai</td>";
                html_sub3 += "<td>Số hóa đơn</td>";
                html_sub3 += "<td>Loại hình tờ khai</td>";
                html_sub3 += "<td>Luồng tờ khai</td>";
                html_sub3 += "<td>Ngày giờ hoàn thành Draft</td>";
                html_sub3 += "<td>Ngày giờ đăng ký tờ khai</td>";
                html_sub3 += "<td>Ngày giờ thông quan</td>";
                html_sub3 += "</tr>";
                html_sub3 += "</thead>";
                html_sub3 += "<tbody></tbody>";
                html_sub3 += "</table>";
                html_sub3 += "<span class=\"span-tieude-sub\">THÔNG TIN VẬN CHUYỂN</span>";
                html_sub3 += "<span class=\"span-menu-edit span-thutucgiamsathaiquan label label-primary\" kehoachid=\"13748\" sovandon=\"DRE12062021\" socontainer=\".\">Sửa</span>";
                html_sub3 += "<table class=\"table table-bordered\">";
                html_sub3 += "<thead>";
                html_sub3 += "<tr>";
                html_sub3 += "<td>Đơn vị vận chuyển</td>";
                html_sub3 += "<td>Biển kiểm soát</td>";
                html_sub3 += "<td>Tên lái xe</td>";
                html_sub3 += "<td>Chứng minh thư</td>";
                html_sub3 += "<td>Số điện thoại</td>";
                html_sub3 += "</tr>";
                html_sub3 += "</thead>";
                html_sub3 += "<tbody>";
                html_sub3 += "<tr>";
                html_sub3 += "<td class=\"color-red\">ALSE</td>";
                html_sub3 += "<td>29C57296</td>";
                html_sub3 += "<td></td>";
                html_sub3 += "<td></td>";
                html_sub3 += "<td></td>";
                html_sub3 += "</tr>";
                html_sub3 += "</tbody>";
                html_sub3 += "</table>";
                html_sub3 += "<span class=\"span-tieude-sub\">THẢO LUẬN</span>";
                html_sub3 += "<table class=\"table  tbl-thaoluan\" id=\"tbl-thaoluan-khid-13766\">";
                html_sub3 += "<thead></thead>";
                html_sub3 += "<tbody>";
                html_sub3 += "<tr>";
                html_sub3 += "<td colspan=\"3\">";
                html_sub3 += "<div class=\"md-editor active\" id=\"1623920298047\">";
                html_sub3 += "<div class=\"md-header btn-toolbar\">";
                html_sub3 += "<div class=\"btn-group\">";
                html_sub3 += "<button class=\"btn-default btn-sm btn\" type=\"button\" title=\"Bold\" tabindex=\"-1\" data-provider=\"bootstrap-markdown\" data-handler=\"bootstrap-markdown-cmdBold\" data-hotkey=\"Ctrl+B\"><span class=\"glyphicon glyphicon-bold\"></span></button>";
                html_sub3 += "<button class=\"btn-default btn-sm btn\" type=\"button\" title=\"Italic\" tabindex=\"-1\" data-provider=\"bootstrap-markdown\" data-handler=\"bootstrap-markdown-cmdItalic\" data-hotkey=\"Ctrl+I\"><span class=\"glyphicon glyphicon-italic\"></span></button>";
                html_sub3 += "<button class=\"btn-default btn-sm btn\" type=\"button\" title=\"Heading\" tabindex=\"-1\" data-provider=\"bootstrap-markdown\" data-handler=\"bootstrap-markdown-cmdHeading\" data-hotkey=\"Ctrl+H\"><span class=\"glyphicon glyphicon-header\"></span></button>";
                html_sub3 += "</div>";
                html_sub3 += "<div class=\"btn-group\">";
                html_sub3 += "<button class=\"btn-default btn-sm btn\" type=\"button\" title=\"URL/Link\" tabindex=\"-1\" data-provider=\"bootstrap-markdown\" data-handler=\"bootstrap-markdown-cmdUrl\" data-hotkey=\"Ctrl+L\"><span class=\"glyphicon glyphicon-link\"></span></button>";
                html_sub3 += "<button class=\"btn-default btn-sm btn\" type=\"button\" title=\"Image\" tabindex=\"-1\" data-provider=\"bootstrap-markdown\" data-handler=\"bootstrap-markdown-cmdImage\" data-hotkey=\"Ctrl+G\"><span class=\"glyphicon glyphicon-picture\"></span></button>";
                html_sub3 += "</div>";
                html_sub3 += "<div class=\"btn-group\">";
                html_sub3 += "<button class=\"btn-default btn-sm btn\" type=\"button\" title=\"Unordered List\" tabindex=\"-1\" data-provider=\"bootstrap-markdown\" data-handler=\"bootstrap-markdown-cmdList\" data-hotkey=\"Ctrl+U\"><span class=\"glyphicon glyphicon-list\"></span></button>";
                html_sub3 += "<button class=\"btn-default btn-sm btn\" type=\"button\" title=\"Ordered List\" tabindex\"-1\" data-provider=\"bootstrap-markdown\" data-handler=\"bootstrap-markdown-cmdListO\" data-hotkey=\"Ctrl+O\"><span class=\"glyphicon glyphicon-th-list\"></span></button>";
                html_sub3 += "<button class=\"btn-default btn-sm btn\" type=\"button\" title=\"Code\" tabindex=\"-1\" data-provider=\"bootstrap-markdown\" data-handler=\"bootstrap-markdown-cmdCode\" data-hotkey=\"Ctrl+K\"><span class=\"glyphicon glyphicon-console\"></span></button>";
                html_sub3 += "<button class=\"btn-default btn-sm btn\" type=\"button\" title=\"Quote\" tabindex=\"-1\" data-provider=\"bootstrap-markdown\" data-handler=\"bootstrap-markdown-cmdQuote\" data-hotkey=\"Ctrl+Q\"><span class=\"glyphicon glyphicon-comment\"></span></button>";
                html_sub3 += "</div>";
                html_sub3 += "<div class=\"btn-group\">";
                html_sub3 += "<button class=\"btn-sm btn btn-primary\" type=\"button\" title=\"Preview\" tabindex=\"-1\" data-provider=\"bootstrap-markdown\" data-handler=\"bootstrap-markdown-cmdPreview\" data-hotkey=\"Ctrl+P\" data-toggle=\"button\"><span class=\"glyphicon glyphicon-search\"></span>Preview</button>";
                html_sub3 += "</div>";
                html_sub3 += "<div class=\"md-controls\"><a class=\"md-control md-control-fullscreen\" href=\"#\"><span class=\"glyphicon glyphicon-fullscreen\"></span></a></div>";
                html_sub3 += "</div>";
                html_sub3 += "<textarea id=\"textarea-binhluan-13766\" data-provide=\"markdown\" class=\"form-control modal-textarea left-textarea-binhluan md-input\" rows=\"3\" placeholder=\"Viết bình luận\" style=\"resize: none;\"></textarea><div class=\"md-fullscreen-controls\"><a href=\"#\" class=\"exit-fullscreen\" title=\"Exit fullscreen\"><span class=\"glyphicon glyphicon-fullscreen\"></span></a></div>";
                html_sub3 += "</div>";
                html_sub3 += "<input type=\"button\" class=\"btn btn-success \" kehoachid=\"13766\" id=\"btn-gui-binhluan\" value=\"Gửi\"></td>";
                html_sub3 += "</tr>";
                html_sub3 += "</tbody>";
                html_sub3 += "</table>";
                html_sub3 += "</td>";
                html_sub3 += "  </tr>"
            });

            html_sub = html_sub1 + html_sub2 + html_sub3;

            $(html_sub).insertAfter($(".tr-mawb-" + mawb));

            $('.inputlistpin').editableSelect({ filter: false });
            $('.inputlistpin1').editableSelect({ filter: false });
            $('.inputlist3').editableSelect({ filter: false });
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


function fncResetProcessBar() {
    $("#div-upload-process-bar").attr("style", "width:" + 0 + "%");
    $("#div-upload-process-bar").text(0 + "%");
}

function fncConvertOverSizeText(text) {
    if (text.length > 20) {
        text = text.substring(0, 10) + "..." + text.substring((text.length - 10), text.length);
    }
    return text;
}
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