var html_thead = "";
var html_tbody = "";
var ajaxGet;
var d;
var imgdata;
var arrTempData = {};
var fileitem = "";
var count_item = 0;
var ymdhms = "";
var tbl_kehoach_chitiet_sample = "";
$(document).ready(function () {
    fncChange();
    fncClick();
    fncLoad();
})

function fncLoad() {
    tbl_kehoach_chitiet_sample = "";
    tbl_kehoach_chitiet_sample += "<table class=\"table table-bordered table-hover table-responsive\" id=\"tbl-kehoach-chitiet\">";
    tbl_kehoach_chitiet_sample += "<thead>";
    tbl_kehoach_chitiet_sample += "<tr>";
    tbl_kehoach_chitiet_sample += "<td>No</td>";
    tbl_kehoach_chitiet_sample += "<td>Plan Date</td>";
    tbl_kehoach_chitiet_sample += "<td>Plan Time</td>";
    tbl_kehoach_chitiet_sample += "<td>DLV Date</td>";
    tbl_kehoach_chitiet_sample += "<td>DLV In-Time</td>";
    tbl_kehoach_chitiet_sample += "<td>Order No.</td>";
    tbl_kehoach_chitiet_sample += "<td>PO NO</td>";
    tbl_kehoach_chitiet_sample += "<td>Customer code</td>";
    tbl_kehoach_chitiet_sample += "<td>Customer name</td>";
    tbl_kehoach_chitiet_sample += "<td>DLV require</td>";
    tbl_kehoach_chitiet_sample += "<td>Product ID</td>";
    tbl_kehoach_chitiet_sample += "<td>Product Name</td>";
    tbl_kehoach_chitiet_sample += "<td>Qty order</td>";
    tbl_kehoach_chitiet_sample += "<td>Qty PMT</td>";
    tbl_kehoach_chitiet_sample += "<td>Box Stock</td>"; //<!--trong db là QuailityStock -->
    tbl_kehoach_chitiet_sample += "<td>PMT Stock</td>"; //<!--trong db là QuailityPromotionStock -->
    tbl_kehoach_chitiet_sample += "<td>PMT Date</td>";
    tbl_kehoach_chitiet_sample += "<td>Box Receive</td>";
    tbl_kehoach_chitiet_sample += "<td>PMT Receive</td>";
    tbl_kehoach_chitiet_sample += "<td>Status</td>";
    tbl_kehoach_chitiet_sample += "<td>DLV Status</td>";
    tbl_kehoach_chitiet_sample += "<td>POD Status</td>";
    tbl_kehoach_chitiet_sample += "<td>Truck ID</td>";
    tbl_kehoach_chitiet_sample += "<td>Truck Info</td>";
    tbl_kehoach_chitiet_sample += "<td>Issue</td>";
    tbl_kehoach_chitiet_sample += "<td>Remark</td>";
    tbl_kehoach_chitiet_sample += "</tr>";
    tbl_kehoach_chitiet_sample += "</thead>";
    tbl_kehoach_chitiet_sample += "<tbody>";
    tbl_kehoach_chitiet_sample += "</tbody>";
    tbl_kehoach_chitiet_sample += "</table>";

    var doDate = new Date();
    var doDate7 = new Date();
    doDate7.setDate(doDate7.getDate() - 7);
    var doDate_dmy = convert2chuso(doDate.getDate()) + "/" + convert2chuso(doDate.getMonth() + 1) + "/" + doDate.getFullYear();
    var doDate7_dmy = convert2chuso(doDate7.getDate()) + "/" + convert2chuso(doDate7.getMonth() + 1) + "/" + doDate7.getFullYear();

    $("#input-kehoach-tungay").val(doDate7_dmy);
    $("#input-kehoach-denngay").val(doDate_dmy);
    $("#input-kehoach-plandate").val(doDate_dmy);
    $("#input-kehoach-plantime").val("00:00");
    fncLoadDanhSachKeHoachGiaoHang();
    //**Upload**//
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
            doDate = new Date();
            ymdhms = doDate.getFullYear().toString() + convert2chuso(doDate.getMonth() + 1) + convert2chuso(doDate.getDate())
                + convert2chuso(doDate.getHours()) + convert2chuso(doDate.getMinutes()) + convert2chuso(doDate.getSeconds()) + convert2chuso(doDate.getMilliseconds());

            imgdata.append("folder", "DeliveryOrders/" + ymdhms);
            imgdata.append("root", "Distribution");
            imgdata.append("subfolder", ymdhms);
            imgdata.append("ngaykehoach", dmy2ymd($("#input-kehoach-plandate").val()) + " " + $("#input-kehoach-plantime").val());
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
            alert("Dữ liệu đã được cập nhật!");
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
        fncLoadDanhSachKeHoachGiaoHang();
    })

    //**End Upload **//
}
function fncClick() {
    $("#btn-tracuu-kehoach").click(function () {
        // $("#myModalUpload").modal("show");

        fncLoadDanhSachKeHoachGiaoHang();
    })
    $("#btn-tracuu-kehoach-them").click(function () {
        $("#myModalUpload").modal("show");
    })
    $("#tbl-kehoach").on("click", ".btn-kehoach-chitiet", function () {
        fncLoadDanhSachKeHoachGiaoHangChiTiet($(this).attr("kehoachngay"));
    })
    $("#tbl-kehoach").on("click", ".btn-kehoach-xoa", function () {
        if (confirm("Bạn có chắc chắn muốn xóa kế hoạch này không?")) {
            // BEGIN AJAX LOAD
            //TODO 1.
            //TODO 2.
            //TODO 3.
            ajaxGet = { "get": $(this).attr("kehoachngay") };
            jsonData = JSON.stringify({ ajaxGet });
            $.ajax({
                type: "POST",
                url: "DeliveryOrders.aspx/DeleteByPlanDateTime",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    fncLoadDanhSachKeHoachGiaoHang();
                    //console.log(d);
                    //$.each(d, function (index, item) {
                    //})
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
            /// END AJAX LOAD
        }
    })
}
function fncChange() {
}

function fncLoadDanhSachKeHoachGiaoHang() {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet2 = { "get1": dmy2ymd($("#input-kehoach-tungay").val()), "get2": dmy2ymd($("#input-kehoach-denngay").val()) };
    jsonData = JSON.stringify({ ajaxGet2 });
    $.ajax({
        type: "POST",
        url: "DeliveryOrders.aspx/LoadKeHoachGiaoHang",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            // console.log(d);
            html_tbody = "";
            $.each(d, function (index, item) {
                html_tbody += "<tr>";
                html_tbody += "<td>" + convertDate(item.PlanDateTime)[1] + "</td>";
                html_tbody += "<td>" + convertDate(item.PlanDateTime)[3] + "</td>";
                html_tbody += "<td>" + "" + "</td>";
                html_tbody += "<td>" + "" + "</td>";
                html_tbody += "<td>" + item.GhiChu + "</td>";
                html_tbody += "<td>" + "ORION" + "</td>";
                html_tbody += "<td>" + "<button type=\"button\" class=\"btn btn-sm btn-primary btn-kehoach-chitiet\" kehoachngay=\"" + item.PlanDateTime + "\" >Chi tiết</button>" + "</td>";
                html_tbody += "<td>" + "<button type=\"button\" class=\"btn btn-sm btn-danger btn-kehoach-xoa\" kehoachngay=\"" + item.PlanDateTime + "\" >Xóa</button>" + "</td>";

                html_tbody += "</tr>";
            })
            $("#tbl-kehoach-chitiet_wrapper").remove();
            $("#tbl-kehoach tbody").empty();
            $("#tbl-kehoach tbody").append(html_tbody);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}
function fncLoadDanhSachKeHoachGiaoHangChiTiet(planDateTime) {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    $("#tbl-kehoach-chitiet_wrapper").remove();
    ajaxGet = { "get": planDateTime };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "DeliveryOrders.aspx/LoadKeHoachGiaoHangChiTiet",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            html_tbody = "";
            var sumQuailityOrder = 0;
            var sumQuailityPromotion = 0;
            var sumQuailityStock = 0;
            var sumQuailityPromotionStock = 0;
            var sumBoxReceive = 0;
            var sumPMTReceive = 0;
            var html_tbody_sum = "";
            $.each(d, function (index, item) {
                html_tbody += "<tr>";
                html_tbody += "<td>" + (index + 1) + "</td>";
                html_tbody += "<td>" + convertDate(item.PlanDateTime)[4] + "</td>";
                html_tbody += "<td>" + convertDate(item.PlanDateTime)[3] + "</td>";
                html_tbody += "<td>" + convertDate(item.DeliveryDate)[4] + "</td>";
                html_tbody += "<td>" + item.DeliveryInTime + "</td>";
                html_tbody += "<td>" + item.OrderNo + "</td>";
                html_tbody += "<td>" + item.PoNo + "</td>";
                html_tbody += "<td>" + item.CustomerCode + "</td>";
                html_tbody += "<td>" + item.CustomerName + "</td>";
                html_tbody += "<td>" + item.DeliveryRequie + "</td>";
                html_tbody += "<td>" + item.ProductId + "</td>";
                html_tbody += "<td>" + item.ProductName + "</td>";
                html_tbody += "<td>" + item.QuailityOrder + "</td>";
                html_tbody += "<td>" + item.QuailityPromotion + "</td>";
                html_tbody += "<td>" + item.QuailityStock + "</td>"; // tên cột Box Stock
                html_tbody += "<td>" + item.QuailityPromotionStock + "</td>";//tên cột PMT Stock
                html_tbody += "<td>" + convertDate(item.PromotionDate)[1] + "</td>";
                html_tbody += "<td>" + item.BoxReceive + "</td>";
                html_tbody += "<td>" + item.PMTReceive + "</td>";
                html_tbody += "<td>" + item.Status + "</td>";
                html_tbody += "<td>" + item.DeliveryStatus + "</td>";
                html_tbody += "<td>" + item.PODStatus + "</td>";
                html_tbody += "<td>" + item.TruckID + "</td>";
                html_tbody += "<td>" + item.TruckInfo + "</td>";
                html_tbody += "<td>" + item.Issue + "</td>";
                html_tbody += "<td>" + item.Remark + "</td>";
                html_tbody += "</tr>";

                sumQuailityOrder += parseInt(item.QuailityOrder);
                sumQuailityPromotion += parseInt(item.QuailityPromotion);
                sumQuailityStock += parseInt(item.QuailityStock);
                sumQuailityPromotionStock += parseInt(item.QuailityPromotionStock);
                sumBoxReceive += parseInt(item.BoxReceive);
                sumPMTReceive += parseInt(item.PMTReceive);
            })
            html_tbody_sum += "<tr class=\"tr-total\">";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + numberWithCommas(sumQuailityOrder) + "</td>";
            html_tbody_sum += "<td>" + numberWithCommas(sumQuailityPromotion) + "</td>";
            html_tbody_sum += "<td>" + numberWithCommas(sumQuailityStock) + "</td>"; // tên cột Box Stock
            html_tbody_sum += "<td>" + numberWithCommas(sumQuailityPromotionStock) + "</td>";//tên cột PMT Stock
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + numberWithCommas(sumBoxReceive) + "</td>";
            html_tbody_sum += "<td>" + numberWithCommas(sumPMTReceive) + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "<td>" + "</td>";
            html_tbody_sum += "</tr>";
            $("#div-data").append(tbl_kehoach_chitiet_sample);
            $("#tbl-kehoach-chitiet tbody").append(html_tbody_sum + html_tbody);

            var tbl_kehoach_chitiet = $("#tbl-kehoach-chitiet").DataTable({
                "responsive": true,
                "paging": false,
            });
            var newTheadSearch = "";
            newTheadSearch = "<tr id=\"newTheadSearch\">";
            newTheadSearch += "<td>" + "</td>"; // no
            newTheadSearch += "<td>" + "</td>";// plan date
            newTheadSearch += "<td>" + "</td>"; // plan time
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"3\" placeholder=\"Search...\" />" + "</td>";//DeliveryDate
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"4\" placeholder=\"Search...\" />" + "</td>";//DeliveryInTime
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"5\" placeholder=\"Search...\" />" + "</td>";//OrderNo
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"6\" placeholder=\"Search...\" />" + "</td>";//PoNo
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"7\" placeholder=\"Search...\" />" + "</td>";//CustomerCode
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"8\" placeholder=\"Search...\" />" + "</td>";//CustomerName
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"9\" placeholder=\"Search...\" />" + "</td>";//DeliveryRequie
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"10\" placeholder=\"Search...\" />" + "</td>";//ProductId
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"11\" placeholder=\"Search...\" />" + "</td>";//ProductName

            newTheadSearch += "<td colnum=\"12\">" + "</td>";//QuailityOrder
            newTheadSearch += "<td colnum=\"13\">" + "</td>";//QuailityPromotion
            newTheadSearch += "<td colnum=\"14\">" + "</td>";//QuailityStock
            newTheadSearch += "<td colnum=\"15\">" + "</td>";//QuailityPromotionStock
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"16\" placeholder=\"Search...\" />" + "</td>";//PMT date
            newTheadSearch += "<td colnum=\"17\">" + "</td>";//BoxReceive
            newTheadSearch += "<td colnum=\"18\">" + "</td>";//PMTReceive

            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"19\" placeholder=\"Search...\" />" + "</td>";//Status
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"20\" placeholder=\"Search...\" />" + "</td>";//DeliveryStatus
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"21\" placeholder=\"Search...\" />" + "</td>";//PODStatus
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"22\" placeholder=\"Search...\" />" + "</td>";//TruckID
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"23\" placeholder=\"Search...\" />" + "</td>";//TruckInfo
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"24\" placeholder=\"Search...\" />" + "</td>";//Issue
            newTheadSearch += "<td>" + "<input class=\"input-search-column\" type=\"text\" colnum=\"25\" placeholder=\"Search...\" />" + "</td>";//Remark
            newTheadSearch += "</tr>";
            //console.log(newTheadSearch);
            $("#tbl-kehoach-chitiet thead").append(newTheadSearch);
            $(".input-search-column").on('keyup change', function () {
                //console.log(parseInt($(this).attr("colnum")));
                //console.log(this.value.trim());
                tbl_kehoach_chitiet
                    .column(parseInt($(this).attr("colnum")))
                    .search(this.value.trim())
                    .draw();
                if ($(this).val().trim() != "") {
                    // insert new td in thead
                    if ($("#newTheadTr").length == 0) {
                        $("#tbl-kehoach-chitiet thead").append(newTheadTr);
                    }
                    $("#newTheadTr td").text("");

                    // console.log(tbl_kehoach_chitiet.column(14, { page: 'current' }).data().sumAfterSearch());
                    var newTheadTr_td = $("#newTheadTr").find("td");

                    newTheadTr_td[12].append(numberWithCommas(tbl_kehoach_chitiet.column(12, { page: 'current' }).data().sumAfterSearch()));
                    newTheadTr_td[13].append(numberWithCommas(tbl_kehoach_chitiet.column(13, { page: 'current' }).data().sumAfterSearch()));
                    newTheadTr_td[14].append(numberWithCommas(tbl_kehoach_chitiet.column(14, { page: 'current' }).data().sumAfterSearch()));
                    newTheadTr_td[15].append(numberWithCommas(tbl_kehoach_chitiet.column(15, { page: 'current' }).data().sumAfterSearch()));
                    newTheadTr_td[17].append(numberWithCommas(tbl_kehoach_chitiet.column(17, { page: 'current' }).data().sumAfterSearch()));
                    newTheadTr_td[18].append(numberWithCommas(tbl_kehoach_chitiet.column(18, { page: 'current' }).data().sumAfterSearch()));
                } else {
                    $("#newTheadTr").remove();
                }
            });
            // create temp thead tr
            var newTheadTr = "";
            newTheadTr = "<tr id=\"newTheadTr\" class=\"tr-total\">";
            for (ij = 0; ij < 26; ij++) {
                newTheadTr += "<td>" + "</td>";
            }
            newTheadTr += "</tr>";
            // console.log(tbl_kehoach_chitiet.columns());

            // search sum value
            $("#tbl-kehoach-chitiet").on('search.dt', function () {
                //console.log($("#tbl-kehoach-chitiet_filter input").val().trim());
                if ($("#tbl-kehoach-chitiet_filter input").val().trim() != "") {
                    // insert new td in thead
                    if ($("#newTheadTr").length == 0) {
                        $("#tbl-kehoach-chitiet thead").append(newTheadTr);
                    }
                    $("#newTheadTr td").text("");

                    // console.log(tbl_kehoach_chitiet.column(14, { page: 'current' }).data().sumAfterSearch());
                    var newTheadTr_td = $("#newTheadTr").find("td");
                    newTheadTr_td[12].append(numberWithCommas(tbl_kehoach_chitiet.column(12, { page: 'current' }).data().sumAfterSearch()));
                    newTheadTr_td[13].append(numberWithCommas(tbl_kehoach_chitiet.column(13, { page: 'current' }).data().sumAfterSearch()));
                    newTheadTr_td[14].append(numberWithCommas(tbl_kehoach_chitiet.column(14, { page: 'current' }).data().sumAfterSearch()));
                    newTheadTr_td[15].append(numberWithCommas(tbl_kehoach_chitiet.column(15, { page: 'current' }).data().sumAfterSearch()));
                    newTheadTr_td[17].append(numberWithCommas(tbl_kehoach_chitiet.column(17, { page: 'current' }).data().sumAfterSearch()));
                    newTheadTr_td[18].append(numberWithCommas(tbl_kehoach_chitiet.column(18, { page: 'current' }).data().sumAfterSearch()));
                } else {
                    $("#newTheadTr").remove();
                }
            });
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}
function fncResetProcessBar() {
    $("#div-upload-process-bar").attr("style", "width:" + 0 + "%");
    $("#div-upload-process-bar").text(0 + "%");
}//
function fncConvertOverSizeText(text) {
    if (text.length > 20) {
        text = text.substring(0, 10) + "..." + text.substring((text.length - 10), text.length);
    }
    return text;
}//
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