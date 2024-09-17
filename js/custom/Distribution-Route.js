var html_thead = "";
var html_tbody = "";
var html_tbody_sum = "";
var ajaxGet;
var d;
var smallRoute = "";
var bigRoute = "";
$(document).ready(function () {
    fncChange();
    fncClick();
    fncLoad();
})

function fncLoad() {
    fncLoadRoute("0", "", "", "0");
    $('.modalFullScreen').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });
    //myModalRouteUpdateReceive-Detail
    $('#myModalRouteUpdateReceive-Detail').on('hidden.bs.modal', function () {
        $("body").addClass("modal-open");
    });
}
function fncClick() {
    $("#btn-route-ShowRoute").click(function () {
        fncLoadRoute("0", "", "", "0");
    })
    $("#btn-route-UpdateRoute").click(function () {
        //myModalProductsUpdateRoute-Title">CHANGE AVAIABLE STOCK
        $("#myModalRouteUpdateRoute-Title").text("");
        $("#myModalRouteUpdateRoute-Title").append("Update Route:")
        $("#myModalRouteUpdateRoute").modal("show");
        $("#spreadsheetUpdateRoute").empty();
        $("#spreadsheetUpdateRoute").kendoSpreadsheet({
            columns: 4,
            rows: 1000,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheetUpdateRoute").data("kendoSpreadsheet");
        var sheet = spreadsheet.activeSheet();
        sheet.range(kendo.spreadsheet.SHEETREF).clear();

        var ss_row = [];
        var ss_cell = [];

        ss_cell.push({ value: "ORDER No.", textAlign: "center" });
        ss_cell.push({ value: "PO NO", textAlign: "center" });
        ss_cell.push({ value: "BIG ROUTE", textAlign: "center" });
        ss_cell.push({ value: "SMALL ROUTE", textAlign: "center" });

        ss_row.push({ height: 30, cells: ss_cell });

        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        var dataRow = 0;

        spreadsheet.fromJSON({
            sheets: [{
                name: "ProductsUpdateRoute",

                rows: ss_row,
                columns: [

                    {// ORDER No.
                        width: 120
                    },
                    {// PO NO
                        width: 120
                    },

                    {// BIG ROUTE
                        width: 100
                    },
                    {// SMALL ROUTE
                        width: 100
                    },

                ]
            }]
        });
    })
    $("#btn-Route-SaveUpdateRoute").click(function () {
        if (confirm("Xác nhận cập nhật?")) {
            var spreadsheet = $("#spreadsheetUpdateRoute").data("kendoSpreadsheet");

            var data = spreadsheet.toJSON().sheets[0].rows;

            data = data.splice(1, data.length - 1);
            listUpdateRoute = [];

            data.forEach(function (item, index) {
                if (item.cells[0].value != null && item.cells[1].value != null) {
                    listUpdateRoute.push(
                        {
                            "OrderNo": item.cells[0].value
                            , "PoNo": item.cells[1].value
                            , "BigRoute": item.cells[2].value
                            , "SmallRoute": item.cells[3].value
                        });
                }
            })

            // BEGIN AJAX LOAD
            //TODO 1.
            //TODO 2.
            //TODO 3.

            jsonData = JSON.stringify({ listUpdateRoute });
            console.log(jsonData);
            $.ajax({
                type: "POST",
                url: "Route.aspx/SaveUpdateRoute",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    // console.log(d);
                    alert("Đã cập nhật!");
                    fncLoadRoute("0", "", "", "0");
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
            /// END AJAX LOAD
        }
    })
    //btn-route-action-1        1. Update Truck
    $("#tbl-route").on("click", ".btn-route-action-1", function () {
        smallRoute = $(this).attr("SmallRoute");
        bigRoute = $(this).attr("BigRoute");
        $("#btn-Route-SaveUpdateTruck").attr("SmallRoute", "");
        $("#btn-Route-SaveUpdateTruck").attr("BigRoute", "");
        // BEGIN AJAX LOAD//TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet2 = { "get1": smallRoute, "get2": bigRoute };
        jsonData = JSON.stringify({ ajaxGet2 });
        $.ajax({
            type: "POST",
            url: "Route.aspx/LoadTruckWithRoute",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                $("#div-row-kehoachxeden")  .hide();
                $("#div-row-thucxuattuvsip").hide();
                $("#myModalRouteUpdateTruck-Title").empty();
                $("#myModalRouteUpdateTruck-Title").text("Update Truck | " + (smallRoute != "" ? "Smart Route" + ": " + smallRoute : "Big Route" + ": " + bigRoute));
                if (smallRoute != "") {
                    $("#div-row-kehoachxeden")  .show();
                    $("#div-row-thucxuattuvsip").show();
                }
                if (Object.keys(d).length > 0) {
                    $("#input-route-TruckVendor").val(d.TruckVendor);
                    $("#input-route-TruckId").val(d.TruckID);
                    $("#input-route-TruckInfo").val(d.TruckInfo);
                    $("#input-route-TypeTruck").val(d.TypeTruck);
                    $("#input-route-RemarkTruck").val(d.RemarkTruck);
                    $("#input-route-SmallRouteKeHoachXeDenNgay").val(convertDate(d.SmallRouteNgayGioKeHoachXeDen)[1]);
                    $("#input-route-SmallRouteKeHoachXeDenGio").val(convertDate(d.SmallRouteNgayGioKeHoachXeDen)[3]);
                    $("#input-route-SmallRouteThucXuatTuVSIPNgay").val(convertDate(d.SmallRouteNgayGioThucXuatTuVSIP)[1]);
                    $("#input-route-SmallRouteThucXuatTuVSIPGio").val(convertDate(d.SmallRouteNgayGioThucXuatTuVSIP)[3]);

                    $("#btn-Route-SaveUpdateTruck").attr("SmallRoute", smallRoute);
                    $("#btn-Route-SaveUpdateTruck").attr("BigRoute", bigRoute);
                }

                $("#myModalRouteUpdateTruck").modal("show");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    })
    //// save update truck
    $("#btn-Route-SaveUpdateTruck").click(function () {
        smallRoute = $(this).attr("SmallRoute");
        bigRoute = $(this).attr("BigRoute");

        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        updateTruck = {
            "BigRoute": bigRoute
            , "SmallRoute": smallRoute
            , "TruckVendor": $("#input-route-TruckVendor").val()
            , "TruckID": $("#input-route-TruckId").val()
            , "TruckInfo": $("#input-route-TruckInfo").val()
            , "TypeTruck": $("#input-route-TypeTruck").val()
            , "RemarkTruck": $("#input-route-RemarkTruck").val()
            , "SmallRouteNgayGioKeHoachXeDen": dmy2ymd($("#input-route-SmallRouteKeHoachXeDenNgay").val()) + " " + $("#input-route-SmallRouteKeHoachXeDenGio").val()
            , "SmallRouteNgayGioThucXuatTuVSIP": dmy2ymd($("#input-route-SmallRouteThucXuatTuVSIPNgay").val()) + " " + $("#input-route-SmallRouteThucXuatTuVSIPGio").val()
        };

        jsonData = JSON.stringify({ updateTruck });
        $.ajax({
            type: "POST",
            url: "Route.aspx/SaveUpdateTruckWithRoute",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                alert("Cập nhật dữ liệu thành công!");
                fncLoadRoute("0", "", "", "0");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    })
    //btn-route-action-2        2. Update Receive from Factory
    $("#tbl-route").on("click", ".btn-route-action-2", function () {
        smallRoute = $(this).attr("SmallRoute");
        bigRoute = $(this).attr("BigRoute");
        $("#myModalRouteUpdateReceive-Title").text("");
        $("#myModalRouteUpdateReceive-Title").append("Update Receive at Factory | Big Route: " + bigRoute);
        $("#btn-Route-SaveUpdateReceive").attr("SmallRoute", smallRoute);
        $("#btn-Route-SaveUpdateReceive").attr("BigRoute", bigRoute);
        $("#btn-Route-SaveUpdateReceive").attr("UpdateType", "13");
        fncLoadRoute("1", "", bigRoute, "0");
        $(".tbl-route-Receive").hide();
        $("#tbl-route-UpdateReceive-Info").show();
        $("#myModalRouteUpdateReceive").modal("show");
    })
    //btn-route-action-3        3. Update Receive from DC
    $("#tbl-route").on("click", ".btn-route-action-3", function () {
        smallRoute = $(this).attr("SmallRoute");
        bigRoute = $(this).attr("BigRoute");
        $("#myModalRouteUpdateReceive-Title").text("");
        $("#myModalRouteUpdateReceive-Title").append("Update Receive at DC | Big Route: " + bigRoute);
        $("#btn-Route-SaveUpdateReceive").attr("SmallRoute", smallRoute);
        $("#btn-Route-SaveUpdateReceive").attr("BigRoute", bigRoute);
        $("#btn-Route-SaveUpdateReceive").attr("UpdateType", "14");
        fncLoadRoute("1", "", bigRoute, "0");
        $(".tbl-route-Receive").hide();
        $("#tbl-route-UpdateDC-Info").show();
        $("#myModalRouteUpdateReceive").modal("show");
    })
    //btn-route-action-4        4. Update Delivey
    $("#tbl-route").on("click", ".btn-route-action-4", function () {
        smallRoute = $(this).attr("SmallRoute");
        bigRoute = $(this).attr("BigRoute");
        $("#myModalRouteUpdateReceive-Title").text("");
        $("#myModalRouteUpdateReceive-Title").append("Update Delivery | Small Route: " + smallRoute);
        $("#btn-Route-SaveUpdateReceive").attr("SmallRoute", smallRoute);
        $("#btn-Route-SaveUpdateReceive").attr("BigRoute", bigRoute);
        $("#btn-Route-SaveUpdateReceive").attr("UpdateType", "15");
        fncLoadRoute("1", "", bigRoute, "0");
        $(".tbl-route-Receive").hide();
        $("#tbl-route-UpdateGiaoHang-Info").show();
        $("#myModalRouteUpdateReceive").modal("show");
    })
    //btn-route-action-5        5. Update Receive POD
    $("#tbl-route").on("click", ".btn-route-action-5", function () {
        smallRoute = $(this).attr("SmallRoute");
        bigRoute = $(this).attr("BigRoute");
        $("#myModalRouteUpdateReceive-Title").text("");
        $("#myModalRouteUpdateReceive-Title").append("Update POD | Small Route: " + smallRoute);
        $("#btn-Route-SaveUpdateReceive").attr("SmallRoute", smallRoute);
        $("#btn-Route-SaveUpdateReceive").attr("BigRoute", bigRoute);
        $("#btn-Route-SaveUpdateReceive").attr("UpdateType", "16");
        fncLoadRoute("1", "", bigRoute, "0");
        $(".tbl-route-Receive").hide();
        $("#tbl-route-UpdatePOD-Info").show();
        $("#myModalRouteUpdateReceive").modal("show");
    })
    $("#btn-route-AutoRoute1").click(function () {
        fncLoadRoute("0", "", "", "1");
    })
    $("#btn-route-AutoRoute2").click(function () {
        fncLoadRoute("0", "", "", "2");
    })
    // Tải về file AutoRoute
    $("#btn-route-DownloadAutoRoute").click(function () {
        var doDate = new Date();
        var doDate_dmy = convert2chuso(doDate.getDate()) + convert2chuso(doDate.getMonth() + 1) + + doDate.getFullYear();
        doDate_dmy += "_" + convert2chuso(doDate.getHours()) + convert2chuso(doDate.getMinutes()) + convert2chuso(doDate.getSeconds());
        var tenfile = "AutoRoute_" + doDate_dmy;
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet = { "get": tenfile };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "Route.aspx/SaveAutoRouteExcel",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "ok") {
                    window.open("../DownloadFile.aspx?Root=Distribution&Folder=AutoRoute&FileName=" + tenfile + ".xlsx");
                }
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    })
    $("#tbl-route-UpdateReceive").on("click", ".btn-UpdateReceive-Confirm", function () {
        smallRoute = $(this).attr("SmallRoute");
        bigRoute = $(this).attr("BigRoute");
        //if (confirm("Bạn chắc chắn " + $(this).text() + " ORDER NO: " + $(this).attr("OrderNo") + " và PO NO: " + $(this).attr("PoNo"))) {
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet3 = { "get1": $(this).attr("OrderNo"), "get2": $(this).attr("PoNo"), "get3": $(this).attr("Confirm") };
        jsonData = JSON.stringify({ ajaxGet3 });
        $.ajax({
            type: "POST",
            url: "Route.aspx/SaveUpdateReceiveConfirm",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //alert("Cập nhật thành công!");
                fncLoadRoute("1", "", bigRoute, "0");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
        //}
    })
    $("#tbl-route-UpdateReceive").on("click", ".btn-UpdateReceive-ConfirmALL", function () {
        smallRoute = $(this).attr("SmallRoute");
        bigRoute = $(this).attr("BigRoute");
        var _allConfirm = $(this).attr("Confirm");
        if (confirm("Bạn chắc chắn " + $(this).text() + " tất cả đơn hàng có Big Route: " + bigRoute)) {
            // BEGIN AJAX LOAD
            //TODO 1.
            //TODO 2.
            //TODO 3.
            ajaxGet3 = { "get1": bigRoute, "get2": smallRoute, "get3": _allConfirm };
            jsonData = JSON.stringify({ ajaxGet3 });
            $.ajax({
                type: "POST",
                url: "Route.aspx/SaveUpdateReceiveConfirmALL",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    //alert("Cập nhật thành công!");
                    //var allOrderNo = "";
                    //var allPoNo = "";
                    //$.each($(".tr-popup-receive"), function (index, item) {
                    //    allOrderNo = item.find(".btn-UpdateReceive-Confirm").attr("OrderNo");
                    //    allPoNo = item.find(".btn-UpdateReceive-Confirm").attr("PoNo");;

                    //    if (_allConfirm == "1") {
                    //        $(".td-popup-receive-status").empty();
                    //        $(".td-popup-receive-action").empty();
                    //    }
                    //    if (item.CheckReceiveFromFactory == "True") {
                    //        confirmCount += 1
                    //        html_tbody += "<td class=\"td-popup-receive-status\">" + "<input type  =\"checkbox\" checked disabled />" + "</td>";
                    //        html_tbody += "<td class=\"td-popup-receive-action\">" + "<button type =\"button\" class=\"btn btn-xs btn-warning btn-UpdateReceive-Confirm\" Confirm=\"0\" SmallRoute=\"" + item.SmallRoute + "\" BigRoute=\"" + item.BigRoute + "\" OrderNo=\"" + item.OrderNo + "\" PoNo=\"" + item.PoNo + "\" >UnConfirm</button>" + "</td>";
                    //    } else {
                    //        html_tbody += "<td class=\"td-popup-receive-status\">" + "<input type  =\"checkbox\"  disabled />" + "</td>";
                    //        html_tbody += "<td class=\"td-popup-receive-action\">" + "<button type =\"button\" class=\"btn btn-xs btn-success btn-UpdateReceive-Confirm\"  Confirm=\"1\" SmallRoute=\"" + item.SmallRoute + "\" BigRoute=\"" + item.BigRoute + "\"  OrderNo=\"" + item.OrderNo + "\" PoNo=\"" + item.PoNo + "\">Confirm</button>" + "</td>";
                    //    }
                    //})

                    fncLoadRoute("1", "", bigRoute, "0");
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
            /// END AJAX LOAD
        }
    })
    $("#tbl-route-UpdateReceive").on("click", ".btn-UpdateReceive-Detail", function () {
        smallRoute = $(this).attr("SmallRoute");
        bigRoute = $(this).attr("BigRoute");
        $("#btn-Route-SaveUpdateReceive-Detail").attr("SmallRoute", smallRoute);
        $("#btn-Route-SaveUpdateReceive-Detail").attr("BigRoute", bigRoute);
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet2 = { "get1": $(this).attr("OrderNo"), "get2": $(this).attr("PoNo") };
        jsonData = JSON.stringify({ ajaxGet2 });
        $.ajax({
            type: "POST",
            url: "Route.aspx/LoadUpdateReceiveDetail",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                html_tbody = "";
                html_tbody += "<tr>";
                html_tbody += "<td>" + d[0].OrderNo + "</td>";
                html_tbody += "<td class=\"text-align-left\">" + d[0].PoNo + "</td>";
                html_tbody += "<td class=\"text-align-left\">" + d[0].GroupCustomer + "</td>";
                html_tbody += "<td>" + d[0].CustomerCode + "</td>";
                html_tbody += "<td class=\"text-align-left\">" + d[0].CustomerName + "</td>";
                html_tbody += "</tr>";
                $("#tbl-Route-SaveUpdateReceive-Detail tbody").empty();
                $("#tbl-Route-SaveUpdateReceive-Detail tbody").append(html_tbody);
                $("#spreadsheetUpdateReceive-Detail").empty();
                $("#spreadsheetUpdateReceive-Detail").kendoSpreadsheet({
                    columns: 9,
                    rows: d.length + 3,
                    toolbar: false,
                    sheetsbar: false,
                });
                var spreadsheet = $("#spreadsheetUpdateReceive-Detail").data("kendoSpreadsheet");
                var sheet = spreadsheet.activeSheet();
                sheet.range(kendo.spreadsheet.SHEETREF).clear();

                var ss_row = [];
                var ss_cell = [];
                ss_cell.push({ value: "Id", textAlign: "center" });
                ss_cell.push({ value: "PRODUCT ID", textAlign: "center" });
                ss_cell.push({ value: "PRODUCT NAME", textAlign: "center" });
                ss_cell.push({ value: "BOX RECEIVER", textAlign: "center" });
                ss_cell.push({ value: "PMT RECEIVER", textAlign: "center" });
                ss_cell.push({ value: "QTY ORDER", textAlign: "center" });
                ss_cell.push({ value: "QTY ORDER PMT", textAlign: "center" });
                ss_cell.push({ value: "BOX STOCK", textAlign: "center" });
                ss_cell.push({ value: "PMT STOCK", textAlign: "center" });
               
                // tính tổng
                ss_row.push({ height: 30, cells: ss_cell });
                ss_cell = [];
                ss_cell.push({ textAlign: "center", enable: false });
                ss_cell.push({ textAlign: "center", enable: false });
                ss_cell.push({ textAlign: "left", enable: false });
                ss_cell.push({ formula: "SUM(D3:D" + (d.length + 2) + ")", textAlign: "center", enable: false });
                ss_cell.push({ formula: "SUM(E3:E" + (d.length + 2) + ")", textAlign: "center", enable: false });
                ss_cell.push({ formula: "SUM(F3:F" + (d.length + 2) + ")", textAlign: "center", enable: false });
                ss_cell.push({ formula: "SUM(G3:G" + (d.length + 2) + ")", textAlign: "center", enable: false });
                ss_cell.push({ formula: "SUM(H3:H" + (d.length + 2) + ")", textAlign: "center", enable: false, color: "red" });
                ss_cell.push({ formula: "SUM(I3:I" + (d.length + 2) + ")", textAlign: "center", enable: false, color: "red" });
                ss_row.push({ height: 30, cells: ss_cell });

                // đổ dữ liệu
                $.each(d, function (index, item) {
                    ss_cell = [];
                    ss_cell.push({ value: item.DOId, textAlign: "center", enable: false });
                    ss_cell.push({ value: item.ProductId, textAlign: "center", enable: false });
                    ss_cell.push({ value: item.ProductName, textAlign: "left", enable: false });
                    ss_cell.push({ value: parseInt(item.BoxReceive), textAlign: "center", color: "red" });
                    ss_cell.push({ value: parseInt(item.PMTReceive), textAlign: "center", color: "red" });
                    ss_cell.push({ value: parseInt(item.QuailityOrder), textAlign: "center", enable: false });
                    ss_cell.push({ value: parseInt(item.QuailityPromotion), textAlign: "center", enable: false });
                    ss_cell.push({ value: parseInt(item.QuailityStock), textAlign: "center", enable: false });
                    ss_cell.push({ value: parseInt(item.QuailityPromotionStock), textAlign: "center", enable: false });
                  
                    ss_row.push({ height: 30, cells: ss_cell });
                })
                // khóa dòng cuối
                ss_cell = [];
                ss_cell.push({ enable: false });
                ss_cell.push({ enable: false });
                ss_cell.push({ enable: false });
                ss_cell.push({ enable: false });
                ss_cell.push({ enable: false });
                ss_cell.push({ enable: false });
                ss_cell.push({ enable: false });
                ss_cell.push({ enable: false });
                ss_cell.push({ enable: false });
                ss_row.push({ height: 30, cells: ss_cell });
                spreadsheet.fromJSON({
                    sheets: [{
                        name: "UpdateReceiveDetail",
                        rows: ss_row,
                        columns: [
                            {// ID
                                width: 40
                            },
                            {// CUSTOMER CODE
                                width: 100
                            },
                            {// CUSTOMER NAME
                                width: 300
                            },
                            {// BOX
                                width: 120
                            },
                            {// PMT
                                width: 120
                            },
                            {// BOX
                                width: 120
                            },
                            {// PMT
                                width: 120
                            },

                            {// BOX Stock
                                width: 120
                            },
                            {// PMT Stock
                                width: 120
                            },

                        ]
                    }]
                });
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD

        $("#myModalRouteUpdateReceive-Detail").modal("show");
    })
    $("#btn-Route-SaveUpdateReceive-Detail").click(function () {
        smallRoute = $(this).attr("SmallRoute");
        bigRoute = $(this).attr("BigRoute");
        if (confirm("Xác nhận cập nhật?")) {
            var spreadsheet = $("#spreadsheetUpdateReceive-Detail").data("kendoSpreadsheet");

            var data = spreadsheet.toJSON().sheets[0].rows;

            data = data.splice(2, data.length - 1);
            listAjaxGet3 = [];
          
            data.forEach(function (item, index) {
              
                if (item.cells[0].value != null ) {
                    listAjaxGet3.push({ "get1": item.cells[0].value, "get2": item.cells[3].value, "get3": item.cells[4].value });
                }
            })

            // BEGIN AJAX LOAD
            //TODO 1.
            //TODO 2.
            //TODO 3.

            jsonData = JSON.stringify({ listAjaxGet3 });
            //console.log(jsonData);
            $.ajax({
                type: "POST",
                url: "Route.aspx/SaveUpdateReceiveDetail",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    // console.log(d);
                    alert("Đã cập nhật!");
                    fncLoadRoute("1", "", bigRoute, "0");
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
            /// END AJAX LOAD
        }
    })
    $("#btn-Route-SaveUpdateReceive").click(function () {
        smallRoute = $(this).attr("SmallRoute");
        bigRoute = $(this).attr("BigRoute");
        UpdateType = $(this).attr("UpdateType");

        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        updateReceive = {
            "UpdateType": UpdateType
            , "SmallRoute": bigRoute
            , "BigRoute": bigRoute
            , "ReceiveNguoiGiaoHang": $("#inp-UpdateReceive-NguoiGiaoHang").val()
            , "ReceiveNguoiNhanHang": $("#inp-UpdateReceive-NguoiNhanHang").val()
            , "ReceiveRemark": $("#inp-UpdateReceive-Remark").val()
            , "NhanTaiDCNgayGio": dmy2ymd($("#inp-UpdateDC-NgayNhan").val()) + " " + $("#inp-UpdateDC-GioNhan").val()
            , "NhanTaiDCNguoiNhan": $("#inp-UpdateDC-NguoiNhan").val()
            , "NhanTaiDCGhiChu": $("#inp-UpdateDC-Remark").val()
            , "GiaoHangNgayGio": dmy2ymd($("#inp-UpdateGiaoHang-NgayGiao").val()) + " " + $("#inp-UpdateGiaoHang-GioGiao").val()
            , "GiaoHangNguoiGiao": $("#inp-UpdateGiaoHang-NguoiGiaoHang").val()
            , "GiaoHangNguoiNhan": $("#inp-UpdateGiaoHang-NguoiNhanHang").val()
            , "GiaoHangGhiNhanBatThuong": $("#inp-UpdateGiaoHang-GhiChuBatThuong").val()
            , "GiaoHangGhiChu": $("#inp-UpdateGiaoHang-GhiChu").val()
            , "NgayNhanPOD": dmy2ymd($("#inp-UpdatePOD-NgayNhan").val()) + " " + $("#inp-UpdatePOD-GioNhan").val()
        };
        jsonData = JSON.stringify({ updateReceive });
        $.ajax({
            type: "POST",
            url: "Route.aspx/SaveUpdateReceive",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                alert("Cập nhật thành công!");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD

        fncLoadRoute("0", "", "", "0");
    })
}
function fncChange() { }
function fncLoadRoute(rLoad, rSmallRoute, rBigRoute, rAutoRoute) {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet4 = { "get1": rLoad, "get2": rSmallRoute, "get3": rBigRoute, "get4": rAutoRoute };
    jsonData = JSON.stringify({ ajaxGet4 });
    $.ajax({
        type: "POST",
        url: "Route.aspx/LoadRoute",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            html_tbody = "";
            var sum_QuailityStock = 0;
            var sum_QuailityPromotionStock = 0;

            var sum_TotalUnitCbm = 0;
            var sum6khoi = 0;
            var sum6khoipcs = 0;
            var mau1 = "route-mau1";
            var mau2 = "route-mau2";
            var mau3 = "route-mau3";
            var mauTemp = mau1;
            var mauTempLast = "";
            var rowspanBigRoute = 1;;
            var rowspanSmallRoute = 1;
            var routeSumCbmSmallRoute = 0;
            var routeSumPcsSmallRoute = 0;
            var routeSumCbmBigRoute = 0;
            var routeSumPcsBigRoute = 0;
            var lastSmallRoute = 0;
            var lastBigRoute = 0;
            var listBigRoute = [];
            var listBigRouteCount = 0;
            var listSmallRoute = [];
            var listSmallRouteCount = 0;
            var routeSmall = 1;
            var routeSmallTemp = "";
            var AutoRowspanSmallRoute = [];
            var AutoRouteSumCbmSmallRoute = [];
            var AutoRouteSumPcsSmallRoute = [];
            if (rLoad == "0") { /// nếu load mặc định vào trang chính
                $.each(d, function (index, item) {
                    if (rAutoRoute == "0") {
                        if (lastSmallRoute != item.SmallRoute) {
                            routeSumCbmSmallRoute = parseFloat(item.TotalCbm);
                            routeSumPcsSmallRoute = parseInt(item.QuailityStock) + parseInt(item.QuailityPromotionStock);                           
                            
                            rowspanSmallRoute = 1;
                            mauTempLast = mauTemp;
                            mauTemp = mau1;
                            if (mauTempLast == mauTemp) {
                                mauTemp = mau2;
                            }
                            listSmallRouteCount += 1;
                            listSmallRoute.push(item.SmallRoute);
                        }
                        else {
                            routeSumCbmSmallRoute += parseFloat(item.TotalCbm);
                            routeSumPcsSmallRoute += parseInt(item.QuailityStock) + parseInt(item.QuailityPromotionStock);
                            rowspanSmallRoute += 1;
                        }

                        lastSmallRoute = item.SmallRoute;

                        if (lastBigRoute != item.BigRoute) {
                            routeSumCbmBigRoute = parseFloat(item.TotalCbm);
                            routeSumPcsBigRoute = parseInt(item.QuailityStock) + parseInt(item.QuailityPromotionStock);         
                            rowspanBigRoute = 1;
                            listBigRouteCount += 1;
                            listBigRoute.push(item.BigRoute);
                        } else {
                            routeSumCbmBigRoute += parseFloat(item.TotalCbm);
                            routeSumPcsBigRoute += parseInt(item.QuailityStock) + parseInt(item.QuailityPromotionStock);  
                            rowspanBigRoute += 1;
                        }
                        lastBigRoute = item.BigRoute;
                    } else { // nếu auto route
                        if (parseFloat(sum6khoi) + parseFloat(item.TotalCbm) > 6) {
                            AutoRouteSumCbmSmallRoute[routeSmall - 1] = parseFloat(sum6khoi);
                            AutoRouteSumPcsSmallRoute[routeSmall - 1] = sum6khoipcs;
                            routeSmall += 1;
                           
                            AutoRowspanSmallRoute[routeSmall - 1] = 1;
                            mauTempLast = mauTemp;
                            sum6khoi = parseFloat(item.TotalCbm);
                            sum6khoipcs = parseInt(item.QuailityStock) + parseInt(item.QuailityPromotionStock);
                            mauTemp = mau1;
                            if (mauTempLast == mauTemp) {
                                mauTemp = mau2;
                            }
                            if (sum6khoi > 6) {
                                mauTemp = mau3;
                            }
                        }
                        else {
                            if (AutoRowspanSmallRoute[routeSmall - 1] == null) {
                                AutoRowspanSmallRoute[routeSmall - 1] = 1;
                            } else {
                                AutoRowspanSmallRoute[routeSmall - 1] += 1;
                            }

                            sum6khoi += parseFloat(item.TotalCbm);
                            sum6khoipcs += parseInt(item.QuailityStock) + parseInt(item.QuailityPromotionStock);
                            if (index == d.length - 1) {
                                AutoRouteSumCbmSmallRoute[routeSmall - 1] = parseFloat(sum6khoi);
                                AutoRouteSumPcsSmallRoute[routeSmall - 1] = sum6khoipcs;

                            }
                        }
                    }

                    html_tbody += "<tr class=\"" + mauTemp + "\">";
                    html_tbody += "<td >" + "<input type=\"checkbox\" DOID=\"\"  />" + "</td>";
                    html_tbody += "<td rowspan=\"1\">" + (index + 1) + "</td>";
                    if (rAutoRoute == "0" && item.BigRoute != "") {
                        html_tbody += "<td class=\"td-route-Route td-route-BigRoute td-route-BigRoute-" + listBigRouteCount + "\" rowspanBigRoute=\"" + rowspanBigRoute + "\" routeSumCbmBigRoute=\"" + routeSumCbmBigRoute + "\" routeSumPcsBigRoute=\"" + routeSumPcsBigRoute +"\">";
                        html_tbody += item.BigRoute + "</br>";
                        html_tbody += "<button type=\"button\" class=\"btn btn-xs btn-primary btn-route-action btn-route-action-1\" SmallRoute=\"" + "" + "\" BigRoute=\"" + item.BigRoute + "\" >Truck Info</button>";
                        html_tbody += "<button type=\"button\" class=\"btn btn-xs btn-warning btn-route-action btn-route-action-2\" SmallRoute=\"" + item.SmallRoute + "\" BigRoute=\"" + item.BigRoute + "\" >RCV at FTR</button>";
                        html_tbody += "<button type=\"button\" class=\"btn btn-xs btn-success btn-route-action btn-route-action-3\" SmallRoute=\"" + item.SmallRoute + "\" BigRoute=\"" + item.BigRoute + "\" >RCV at DC</button>";
                        html_tbody += "<p>" + item.BigRouteTruckID + "</p>";
                        html_tbody += "<p>" + item.BigRouteTruckInfo + "</p>";
                        html_tbody += "</td>";
                    } else {
                        html_tbody += "<td class=\"td-route-Route\">  " + item.BigRoute + "</td>";
                    }
                    if (rAutoRoute == "0" && item.SmallRoute != "") {
                        html_tbody += "<td class=\"td-route-Route td-route-SmallRoute td-route-SmallRoute-" + listSmallRouteCount + "\" rowspanSmallRoute=\"" + rowspanSmallRoute + "\" routeSumCbmSmallRoute=\"" + routeSumCbmSmallRoute + "\" routeSumPcsSmallRoute=\"" + routeSumPcsSmallRoute+"\">";
                        html_tbody += item.SmallRoute + "</br>";
                        html_tbody += "<button type=\"button\" class=\"btn btn-xs btn-primary btn-route-action btn-route-action-1\" SmallRoute=\"" + item.SmallRoute + "\" BigRoute=\"" + "" + "\" >Truck Info</button>";
                        html_tbody += "<button type=\"button\" class=\"btn btn-xs btn-primary btn-route-action btn-route-action-4\" SmallRoute=\"" + item.SmallRoute + "\" BigRoute=\"" + item.BigRoute + "\" >Update DLV</button>";
                        html_tbody += "<button type=\"button\" class=\"btn btn-xs btn-warning btn-route-action btn-route-action-5\" SmallRoute=\"" + item.SmallRoute + "\" BigRoute=\"" + item.BigRoute + "\" >RCV POD</button>";
                        html_tbody += "<p>" + item.TruckNo + "</p>";
                        html_tbody += "<p>" + item.TruckInfo + "</p>";
                        html_tbody += "</td>";
                    } else {
                        routeSmallTemp = routeSmall;
                        if (rAutoRoute == "0") {
                            routeSmallTemp = "";
                        }
                        html_tbody += "<td class=\"td-route-Route td-route-SmallRoute-Auto-" + routeSmall + "\" rowspanSmallRoute=\"" + rowspanSmallRoute + "\" routeSumCbmSmallRoute=\"" + routeSumCbmSmallRoute + "\">  " + routeSmallTemp + "" + "</td>";
                    }

                    html_tbody += "<td>" + convertDate(item.PlanDateTime)[1] + "</td>";
                    html_tbody += "<td>" + convertDate(item.PlanDateTime)[3] + "</td>";
                    html_tbody += "<td>" + item.OrderNo + "</td>";
                    html_tbody += "<td class=\"text-align-left\">" + item.PoNo + "</td>";
                    html_tbody += "<td class=\"text-align-left\">" + item.DeliveryRequie + "</td>";
                    html_tbody += "<td class=\"text-align-left\">" + item.GroupCustomer + "</td>";
                    html_tbody += "<td>" + item.CustomerCode + "</td>";
                    html_tbody += "<td class=\"text-align-left\">" + item.CustomerName + "</td>";
                    html_tbody += "<td>" + item.QuailityOrder + "</td>";
                    html_tbody += "<td>" + item.QuailityPromotion + "</td>";
                    html_tbody += "<td>" + item.QuailityStock         + "</td>";
                    html_tbody += "<td>" + item.QuailityPromotionStock + "</td>";
                    html_tbody += "<td>" + item.BoxReceive + "</td>";
                    html_tbody += "<td>" + item.PMTReceive + "</td>";
                    html_tbody += "<td >" + item.TotalCbm + "</td>";
                    html_tbody += "<td class=\"\">" + item.Route + "</td>";
                    html_tbody += "<td class=\"text-align-left\">" + item.City + "</td>";
                    html_tbody += "<td class=\"text-align-left\">" + item.Disrict + "</td>";
                    html_tbody += "<td class=\"text-align-left td-Address\">" + item.Address + "</td>"; //  item.Address +
                    html_tbody += "</tr>";

                    sum_QuailityStock += parseFloat(item.QuailityStock);
                    sum_QuailityPromotionStock += parseFloat(item.QuailityPromotionStock);
                    sum_TotalUnitCbm += parseFloat(item.TotalCbm);
                })
                html_tbody_temp = "";
                html_tbody_temp += "<tr class=\"tr-total\">";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + numberWithCommas(sum_QuailityStock) + "</td>";
                html_tbody_temp += "<td>" + numberWithCommas(sum_QuailityPromotionStock) + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + numberWithCommas(sum_TotalUnitCbm.toFixed(3)) + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";
                html_tbody_temp += "<td>" + "</td>";

                $("#tbl-route tbody").empty();
                $("#tbl-route tbody").append(html_tbody_temp + html_tbody);
                if (rAutoRoute == 0) {
                    //for (i = 1; i <= lastSmallRoute; i++) {
                    //    $(".td-route-SmallRoute-" + i).not(':first').remove();
                    //    $(".td-route-SmallRoute-" + i).first().attr("rowspan", rowspanSmallRoute[i - 1]);
                    //    $(".td-route-SmallRoute-" + i).first().append("<p>" + rowspanSmallRoute[i - 1].toFixed(1) + " CBM</p>");
                    //    $(".td-route-SmallRoute-" + i).first().append("<p>" + "EST:...ton truck" + "</p>");
                    //}
                    //for (i = 1; i <= lastBigRoute; i++) {
                    //    $(".td-route-BigRoute-" + i).not(':first').remove();
                    //    $(".td-route-BigRoute-" + i).first().attr("rowspan", rowspanBigRoute[i - 1]);
                    //}
                    var _rowspanBigRoute;
                    var _rowspanSmallRoute;
                    var _routeSumCbmSmallRoute;
                    var _routeSumPcsSmallRoute;
                    var _routeSumCbmBigRoute;
                    var _routeSumPcsBigRoute;
                    $.each(listBigRoute, function (index, item) {
                        _rowspanBigRoute = $(".td-route-BigRoute-" + (index + 1)).last().attr("rowspanBigRoute");
                        _routeSumPcsBigRoute = $(".td-route-BigRoute-" + (index + 1)).last().attr("routeSumPcsBigRoute");
                        _routeSumCbmBigRoute = $(".td-route-BigRoute-" + (index + 1)).last().attr("routeSumCbmBigRoute");
                        $(".td-route-BigRoute-" + (index + 1)).not(':first').remove();                       
                        $(".td-route-BigRoute-" + (index + 1)).first().attr("rowspan", _rowspanBigRoute);
                        $(".td-route-BigRoute-" + (index + 1)).first().append("<p>" + parseInt(  _routeSumPcsBigRoute) + " Pcs</p>");
                        $(".td-route-BigRoute-" + (index + 1)).first().append("<p>" + parseFloat(_routeSumCbmBigRoute).toFixed(1) + " CBM</p>");
                    })
                    //rowspanSmallRoute=\"" + rowspanSmallRoute + "\" routeSumCbmSmallRoute=\
                    $.each(listSmallRoute, function (index, item) {
                        _rowspanSmallRoute = $(".td-route-SmallRoute-" + (index + 1)).last().attr("rowspanSmallRoute");
                        _routeSumPcsSmallRoute = $(".td-route-SmallRoute-" + (index + 1)).last().attr("routeSumPcsSmallRoute");
                        _routeSumCbmSmallRoute = $(".td-route-SmallRoute-" + (index + 1)).last().attr("routeSumCbmSmallRoute");
                        $(".td-route-SmallRoute-" + (index + 1)).not(':first').remove();
                        $(".td-route-SmallRoute-" + (index + 1)).first().attr("rowspan", _rowspanSmallRoute);
                        $(".td-route-SmallRoute-" + (index + 1)).first().append("<p>" + parseInt(_routeSumPcsSmallRoute) + " Pcs</p>");
                        $(".td-route-SmallRoute-" + (index + 1)).first().append("<p>" + parseFloat(_routeSumCbmSmallRoute).toFixed(1) + " CBM</p>");
                        $(".td-route-SmallRoute-" + (index + 1)).first().append("<p>" + "EST:...ton truck" + "</p>");
                    })
                } else {
                    //$(".td-route-Route").empty();

                    for (i = 0; i < AutoRowspanSmallRoute.length; i++) {
                        $(".td-route-SmallRoute-Auto-" + (i + 1)).not(':first').remove();
                        $(".td-route-SmallRoute-Auto-" + (i + 1)).first().attr("rowspan", AutoRowspanSmallRoute[i]);
                        $(".td-route-SmallRoute-Auto-" + (i + 1)).first().append("<p>" + AutoRouteSumPcsSmallRoute[i] + " Pcs</p>");
                        $(".td-route-SmallRoute-Auto-" + (i + 1)).first().append("<p>" + AutoRouteSumCbmSmallRoute[i].toFixed(3) + " CBM</p>");
                        $(".td-route-SmallRoute-Auto-" + (i + 1)).first().append("<p>" + "EST:...ton truck" + "</p>");
                    }
                }
            }
            //////////////////////////////////////////////////////////////////
            else if (rLoad == "1") { // nếu popup
                html_tbody = "";
                $("#inp-UpdateReceive-NguoiGiaoHang").val(d[0].ReceiveNguoiGiaoHang);
                $("#inp-UpdateReceive-NguoiNhanHang").val(d[0].ReceiveNguoiNhanHang);
                $("#inp-UpdateReceive-Remark").val(d[0].ReceiveRemark);

                $("#inp-UpdateDC-NgayNhan").val(convertDate(d[0].NhanTaiDCNgayGio)[1]);
                $("#inp-UpdateDC-GioNhan").val(convertDate(d[0].NhanTaiDCNgayGio)[3]);
                $("#inp-UpdateDC-NguoiNhan").val(d[0].NhanTaiDCNguoiNhan);
                $("#inp-UpdateDC-Remark").val(d[0].NhanTaiDCGhiChu);
                $("#inp-UpdateGiaoHang-NgayGiao").val(convertDate(d[0].GiaoHangNgayGio)[1]);
                $("#inp-UpdateGiaoHang-GioGiao").val(convertDate(d[0].GiaoHangNgayGio)[3]);
                $("#inp-UpdateGiaoHang-NguoiGiaoHang").val(d[0].GiaoHangNguoiGiao);
                $("#inp-UpdateGiaoHang-NguoiNhanHang").val(d[0].GiaoHangNguoiNhan);
                $("#inp-UpdateGiaoHang-GhiChuBatThuong").val(d[0].GiaoHangGhiNhanBatThuong);
                $("#inp-UpdateGiaoHang-GhiChu").val(d[0].GiaoHangGhiChu);
                $("#inp-UpdatePOD-NgayNhan").val(convertDate(d[0].NgayNhanPOD)[1]);
                $("#inp-UpdatePOD-GioNhan").val(convertDate(d[0].NgayNhanPOD)[3]);
                var confirmCount = 0;
                var sumBoxReceive = 0;
                var sumPMTReceive = 0;
                var sumQuailityOrder = 0;
                var sumQuailityPromotion = 0;
                var sumQuailityStock = 0;
                var sumQuailityPromotionStock = 0;
                $.each(d, function (index, item) {
                    sumBoxReceive += parseInt(item.BoxReceive);
                    sumPMTReceive += parseInt(item.PMTReceive);
                    sumQuailityOrder += parseInt(item.QuailityOrder);
                    sumQuailityPromotion += parseInt(item.QuailityPromotion);
                    sumQuailityStock += parseInt(item.QuailityStock);
                    sumQuailityPromotionStock += parseInt(item.QuailityPromotionStock);
                    html_tbody += "<tr class=\"tr-popup-receive\">";
                    html_tbody += "<td>" + (index + 1) + "</td>";
                    if (item.CheckReceiveFromFactory == "True") {
                        confirmCount += 1
                        html_tbody += "<td class=\"td-popup-receive-status\">" + "<input type  =\"checkbox\" checked disabled />" + "</td>";
                        html_tbody += "<td class=\"td-popup-receive-action\">" + "<button type =\"button\" class=\"btn btn-xs btn-warning btn-UpdateReceive-Confirm\" Confirm=\"0\" SmallRoute=\"" + item.SmallRoute + "\" BigRoute=\"" + item.BigRoute + "\" OrderNo=\"" + item.OrderNo + "\" PoNo=\"" + item.PoNo + "\" >UnConfirm</button>" + "</td>";
                    } else {
                        html_tbody += "<td class=\"td-popup-receive-status\">" + "<input type  =\"checkbox\"  disabled />" + "</td>";
                        html_tbody += "<td class=\"td-popup-receive-action\">" + "<button type =\"button\" class=\"btn btn-xs btn-success btn-UpdateReceive-Confirm\"  Confirm=\"1\" SmallRoute=\"" + item.SmallRoute + "\" BigRoute=\"" + item.BigRoute + "\"  OrderNo=\"" + item.OrderNo + "\" PoNo=\"" + item.PoNo + "\">Confirm</button>" + "</td>";
                    }
                    html_tbody += "<td>" + "<button type=\"button\" class=\"btn btn-xs btn-primary btn-UpdateReceive-Detail\" SmallRoute=\"" + item.SmallRoute + "\" BigRoute=\"" + item.BigRoute + "\" OrderNo=\"" + item.OrderNo + "\" PoNo=\"" + item.PoNo + "\">Detail</button>" + "</td>";

                    html_tbody += "<td>" + item.OrderNo + "</td>";
                    html_tbody += "<td class=\"text-align-left\">" + item.PoNo + "</td>";
                    html_tbody += "<td class=\"font-weight-bold color-blue\">" + item.BoxReceive + "</td>";
                    html_tbody += "<td class=\"font-weight-bold color-blue\">" + item.PMTReceive + "</td>";
                    html_tbody += "<td class=\"text-align-left\">" + item.GroupCustomer + "</td>";
                    html_tbody += "<td>" + item.CustomerCode + "</td>";
                    html_tbody += "<td class=\"text-align-left\">" + item.CustomerName + "</td>";
                    html_tbody += "<td>" + item.QuailityOrder + "</td>";
                    html_tbody += "<td>" + item.QuailityPromotion + "</td>";
                    html_tbody += "<td>" + item.QuailityStock + "</td>";
                    html_tbody += "<td>" + item.QuailityPromotionStock + "</td>";
                    html_tbody += "</tr>";
                })
                html_tbody_sum = "";
                html_tbody_sum += "<tr>";
                html_tbody_sum += "<td>" + "" + "</td>";
                if (confirmCount == d.length) {
                    html_tbody_sum += "<td>" + "<input type=\"checkbox\" checked disabled />" + "</td>";
                    html_tbody_sum += "<td>" + "<button type=\"button\" class=\"btn btn-xs btn-warning btn-UpdateReceive-ConfirmALL\" Confirm=\"0\" SmallRoute=\"" + d[0].SmallRoute + "\" BigRoute=\"" + d[0].BigRoute + "\">UnConfirm</button>" + "</td>";
                } else {
                    html_tbody_sum += "<td>" + "<input type=\"checkbox\"  disabled />" + "</td>";
                    html_tbody_sum += "<td>" + "<button type=\"button\" class=\"btn btn-xs btn-success btn-UpdateReceive-ConfirmALL\"  Confirm=\"1\" SmallRoute=\"" + d[0].SmallRoute + "\" BigRoute=\"" + d[0].BigRoute + "\">Confirm</button>" + "</td>";
                }

                html_tbody_sum += "<td>" + "" + "</td>";

                html_tbody_sum += "<td>" + "" + "</td>";
                html_tbody_sum += "<td class=\"text-align-left\">" + "" + "</td>";
                html_tbody_sum += "<td class=\"font-weight-bold color-red\">" + sumBoxReceive + "</td>";
                html_tbody_sum += "<td class=\"font-weight-bold color-red\">" + sumPMTReceive + "</td>";
                html_tbody_sum += "<td class=\"text-align-left\">" + "" + "</td>";
                html_tbody_sum += "<td>" + "" + "</td>";
                html_tbody_sum += "<td class=\"text-align-left\">" + "" + "</td>";
                html_tbody_sum += "<td class=\"font-weight-bold color-red\">" + sumQuailityOrder + "</td>";
                html_tbody_sum += "<td class=\"font-weight-bold color-red\">" + sumQuailityPromotion + "</td>";
                html_tbody_sum += "<td class=\"font-weight-bold color-red\">" + sumQuailityStock + "</td>";
                html_tbody_sum += "<td class=\"font-weight-bold color-red\">" + sumQuailityPromotionStock + "</td>";
                html_tbody_sum += "</tr>";
                $("#tbl-route-UpdateReceive tbody").empty();
                $("#tbl-route-UpdateReceive tbody").append(html_tbody_sum + html_tbody);
            }
            else {
            }
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}