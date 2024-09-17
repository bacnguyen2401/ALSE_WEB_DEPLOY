var html_thead = "";
var html_tbody = "";
var ajaxGet;
var d;
var tbl_products_sample = "";
$(document).ready(function () {
    fncChange();
    fncClick();
    fncLoad();
})
function fncLoad() {
    tbl_products_sample = "";
    tbl_products_sample += "<table class=\"table table-bordered table-responsive\" id=\"tbl-products\">";
    tbl_products_sample += "<thead>";
    tbl_products_sample += "<tr>";
    tbl_products_sample += "<td>No</td>";
    tbl_products_sample += "<td>Product Id</td>";
    tbl_products_sample += "<td>Product Name</td>";
    tbl_products_sample += "<td>Product Code</td>";
    tbl_products_sample += "<td>Product Type</td>";
    tbl_products_sample += "<td>Weight</td>";
    tbl_products_sample += "<td>Leng</td>";
    tbl_products_sample += "<td>Wide</td>";
    tbl_products_sample += "<td>High</td>";
    tbl_products_sample += "<td>Cbm</td>";
    tbl_products_sample += "<td>Remark</td>";
    tbl_products_sample += "<td>Qty Order</td>";
    tbl_products_sample += "<td>Qty PMT</td>";
    tbl_products_sample += "<td>Qty Stock</td>";
    tbl_products_sample += "<td>Qty PMT Stock</td>";
    tbl_products_sample += "<td>Action</td>";
    tbl_products_sample += "</tr>";
    tbl_products_sample += "</thead>";
    tbl_products_sample += "<tbody>";
    tbl_products_sample += "</tbody>";
    tbl_products_sample += "</table>";

    fncLoadProducts();

    $('#myModalProductsChangeStock').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });
}
function fncClick() {
    $("#div-data").on("click", ".btn-products-ChangeStock", function () {
        //myModalProductsChangeStock-Title">CHANGE AVAIABLE STOCK
        $("#myModalProductsChangeStock-Title").text("");
        $("#myModalProductsChangeStock-Title").append("CHANGE AVAIABLE STOCK: <span class=\"color-blue\">PRODUCTCODE: " + $(this).attr("ProductCode") + "</span> | <span class=\"color-red\">PRODUCTNAME: " + $(this).attr("ProductName") + "</span>")

        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        var dataRow = 0;
        var sumQuailityStock = 0;
        var sumQuailityPromotionStock = 0;
        ajaxGet = { "get": $(this).attr("ProductId") };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "Products.aspx/LoadDOByProductId",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                dataRow = d.length;

                $("#myModalProductsChangeStock").modal("show");
                $("#spreadsheetChangeStock").empty();
                $("#spreadsheetChangeStock").kendoSpreadsheet({
                    columns: 9,
                    rows: dataRow + 3,
                    toolbar: false,
                    sheetsbar: false,
                });
                var spreadsheet = $("#spreadsheetChangeStock").data("kendoSpreadsheet");
                var sheet = spreadsheet.activeSheet();
                sheet.range(kendo.spreadsheet.SHEETREF).clear();

                var ss_row = [];
                var ss_cell = [];
                ss_cell.push({ value: "Id", textAlign: "center" });
                ss_cell.push({ value: "ORDER No.", textAlign: "center" });
                ss_cell.push({ value: "PO NO", textAlign: "center" });
                ss_cell.push({ value: "CUSTOMER CODE", textAlign: "center" });
                ss_cell.push({ value: "CUSTOMER NAME", textAlign: "center" });
                ss_cell.push({ value: "BOX", textAlign: "center" });
                ss_cell.push({ value: "PMT", textAlign: "center" });
                ss_cell.push({ value: "BOX Stock", textAlign: "center" });
                ss_cell.push({ value: "PMT Stock", textAlign: "center" });
                ss_row.push({ height: 30, cells: ss_cell });

                ss_cell = [];
                ss_cell.push({ value: "", textAlign: "center", enable: false });
                ss_cell.push({ value: "", textAlign: "center", enable: false });
                ss_cell.push({ value: "", textAlign: "center", enable: false });
                ss_cell.push({ value: "", textAlign: "center", enable: false });
                ss_cell.push({ value: "", textAlign: "left", enable: false });
                ss_cell.push({ value: 0, textAlign: "center", enable: false, format: "0", formula: "SUM(F3:F" + (dataRow + 2) + ")" });
                ss_cell.push({ value: 0, textAlign: "center", enable: false, format: "0", formula: "SUM(G3:G" + (dataRow + 2) + ")" });
                ss_cell.push({ value: 0, textAlign: "center", enable: false, color: "red", format: "0", formula: "SUM(H3:H" + (dataRow + 2) + ")" });
                ss_cell.push({ value: 0, textAlign: "center", enable: false, color: "red", format: "0", formula: "SUM(I3:I" + (dataRow + 2) + ")" });
                ss_row.push({ height: 30, cells: ss_cell });
                sumQuailityStock = 0;
                sumQuailityPromotionStock = 0;

                $.each(d, function (index, item) {
                    sumQuailityStock += parseInt(item.QuailityStock);
                    sumQuailityPromotionStock += parseInt(item.QuailityPromotionStock);
                    ss_cell = [];
                    ss_cell.push({ value: item.Id, textAlign: "center", enable: false });
                    ss_cell.push({ value: item.OrderNo, textAlign: "center", enable: false });
                    ss_cell.push({ value: item.PoNo, textAlign: "center", enable: false });
                    ss_cell.push({ value: item.CustomerCode, textAlign: "center", enable: false });
                    ss_cell.push({ value: item.CustomerName, textAlign: "left", enable: false });
                    ss_cell.push({ value: parseInt(item.QuailityStock), textAlign: "center", enable: false, format: "0" });
                    ss_cell.push({ value: parseInt(item.QuailityPromotionStock), textAlign: "center", enable: false, format: "0" });
                    ss_cell.push({ value: parseInt(item.QuailityStock), textAlign: "center", color: "red", format: "0" });
                    ss_cell.push({ value: parseInt(item.QuailityPromotionStock), textAlign: "center", color: "red", format: "0" });
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
                        name: "ProductsChangeStock",

                        rows: ss_row,
                        columns: [
                            {// ID
                                width: 40
                            },
                            {// ORDER No.
                                width: 100
                            },
                            {// PO NO
                                width: 100
                            },
                            {// CUSTOMER CODE
                                width: 100
                            },
                            {// CUSTOMER NAME
                                width: 300
                            },
                            {// BOX
                                width: 50
                            },
                            {// PMT
                                width: 50
                            },
                            {// BOX Stock
                                width: 100
                            },
                            {// PMT Stock
                                width: 100
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

        
    })
    $("#div-data").on("click", ".btn-products-ChangeStockZero", function () {
        if (confirm("Xác nhận chuyển Stock = 0 của PRODUCTCODE: " + $(this).attr("ProductCode") + " | PRODUCTNAME: " + $(this).attr("ProductName"))) {
            // BEGIN AJAX LOAD
            //TODO 1.
            //TODO 2.
            //TODO 3.
            ajaxGet = { "get": $(this).attr("ProductId") };
            jsonData = JSON.stringify({ ajaxGet });
            $.ajax({
                type: "POST",
                url: "Products.aspx/UpdateStockZeroByProductId",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    //console.log(d);
                    //$.each(d, function (index, item) {
                    //})
                    alert("Cập nhật thành công!");
                    fncLoadProducts();
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
            /// END AJAX LOAD
        }
    })
    $("#btn-products-updateDO").click(function () {
        if (confirm("Xác nhận cập nhật?")) {
            var spreadsheet = $("#spreadsheetChangeStock").data("kendoSpreadsheet");
            var sheet = spreadsheet.activeSheet();            
            var data = spreadsheet.toJSON().sheets[0].rows;
            data = data.splice(2, data.length - 1);
            listAjaxGet3 = [];
            dataInput = { items: [] };
            data.forEach(function (item, index) {
                if (item.cells[0].value != null) {
                    listAjaxGet3.push({ "get1": item.cells[0].value, "get2": item.cells[7].value, "get3": item.cells[8].value });
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
                url: "Products.aspx/UpdateStock",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    // console.log(d);
                    alert("Đã cập nhật!");
                    fncLoadProducts();
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
function fncChange() { }
function fncLoadProducts() {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "Products.aspx/LoadProducts",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            var sum_cbm = 0;
            var sum_QuailityOrder = 0;
            var sum_QuailityPromotion = 0;
            var sum_QuailityStock = 0;
            var sum_QuailityPromotionStock = 0;
            html_tbody = "";
            $.each(d, function (index, item) {
                html_tbody += "<tr>";
                html_tbody += "<td>" + (index + 1) + "</td>";
                html_tbody += "<td>" + item.ProductId + "</td>";
                html_tbody += "<td class=\"td-ProductName\">" + item.ProductName + "</td>";
                html_tbody += "<td>" + item.ProductCode + "</td>";
                html_tbody += "<td>" + item.ProductType + "</td>";
                html_tbody += "<td>" + item._Weight + "</td>";
                html_tbody += "<td>" + item.Leng + "</td>";
                html_tbody += "<td>" + item.Wide + "</td>";
                html_tbody += "<td>" + item.High + "</td>";
                html_tbody += "<td>" + item.Cbm + "</td>";
                html_tbody += "<td>" + item.Remark + "</td>";
                html_tbody += "<td>" + item.QuailityOrder + "</td>";
                html_tbody += "<td>" + item.QuailityPromotion + "</td>";
                html_tbody += "<td>" + item.QuailityStock + "</td>";
                html_tbody += "<td>" + item.QuailityPromotionStock + "</td>";
                html_tbody += "<td class=\"td-action\">";
                html_tbody += "<button type=\"button\" class=\"btn btn-xs btn-primary btn-products-ChangeStock\" ProductName=\"" + item.ProductName + "\" ProductCode=\"" + item.ProductCode + "\"  ProductId=\"" + item.ProductId + "\" >Change stock</button>";
                html_tbody += "<button type=\"button\" class=\"btn btn-xs btn-danger btn-products-ChangeStockZero\" ProductName=\"" + item.ProductName + "\" ProductCode=\"" + item.ProductCode + "\"  ProductId=\"" + item.ProductId + "\" >Change stock 0</button>";
                html_tbody += "</td>";
                html_tbody += "</tr>";

                sum_cbm += parseFloat(item.Cbm);
                sum_QuailityOrder += parseFloat(item.QuailityOrder);
                sum_QuailityPromotion += parseFloat(item.QuailityPromotion);
                sum_QuailityStock += parseFloat(item.QuailityStock);
                sum_QuailityPromotionStock += parseFloat(item.QuailityPromotionStock);
            })
            var html_tbody_temp = "";
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
            html_tbody_temp += "<td>" + numberWithCommas(sum_cbm.toFixed(3)) + "</td>";
            html_tbody_temp += "<td>" + "</td>";
            html_tbody_temp += "<td>" + numberWithCommas(sum_QuailityOrder) + "</td>";
            html_tbody_temp += "<td>" + numberWithCommas(sum_QuailityPromotion) + "</td>";
            html_tbody_temp += "<td>" + numberWithCommas(sum_QuailityStock) + "</td>";
            html_tbody_temp += "<td>" + numberWithCommas(sum_QuailityPromotionStock) + "</td>";
            html_tbody_temp += "<td>" + "</td>";
            html_tbody_temp += "</tr>";

            $("#tbl-products_wrapper").remove();
            $("#div-data").append(tbl_products_sample);
            $("#tbl-products tbody").empty();
            $("#tbl-products tbody").append(html_tbody_temp + html_tbody);

            var tbl_products = $('#tbl-products').DataTable({
                "responsive": true,
                "paging": false
            });
            // create temp thead tr
            var newTheadTr = "";
            newTheadTr = "<tr id=\"newTheadTr\" class=\"tr-total\">";
            for (ij = 0; ij <= 15; ij++) {
                newTheadTr += "<td>" + "</td>";
            }
            newTheadTr += "</tr>";
            // search sum value
            $("#tbl-products").on('search.dt', function () {
                //console.log($("#tbl-rqlkt_filter input").val().trim());
                if ($("#tbl-products_filter input").val().trim() != "") {
                    // insert new td in thead
                    if ($("#newTheadTr").length == 0) {
                        $("#tbl-products thead").append(newTheadTr);
                    }
                    $("#newTheadTr td").text("");

                    // console.log(tbl_rqlkt.column(14, { page: 'current' }).data().sumAfterSearch());
                    var newTheadTr_td = $("#newTheadTr").find("td");
                    var search_col;
                    var sum_search_col;
                    for (jk = 9; jk <= 14; jk++) {
                        if (jk != 10) {
                            search_col = tbl_products.column(jk, { page: 'current' }).data();
                            //console.log(search_col);
                            sum_search_col = 0;
                            for (mn = 0; mn < search_col.length; mn++) {
                                if (search_col[mn] != "")
                                    sum_search_col += parseFloat(search_col[mn].replace(",", ""));
                            }
                            var colValueAfterSearch = "";
                            colValueAfterSearch = numberWithCommas(sum_search_col);
                            if (jk == 9) {
                                colValueAfterSearch = numberWithCommas(sum_search_col.toFixed(3));
                            }
                            newTheadTr_td[jk].append(
                                colValueAfterSearch
                            );
                        }
                    }
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