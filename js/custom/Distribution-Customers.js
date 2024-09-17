var html_thead = "";
var html_tbody = "";
var ajaxGet;
var d;
$(document).ready(function () {
    fncChange();
    fncClick();
    fncLoad();
})

function fncLoad() {
    fncLoadCustomers();
}
function fncClick() {
    $("#tbl-customers").on("click", ".btn-customers-sua", function () {

        // BEGIN AJAX LOAD 
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet = { "get": $(this).attr("CustomerCode") };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "Customers.aspx/LoadCustomers",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                $("#span-customers-tilte").text(d[0].CustomerCode);
                $("#btn-customers-Update").attr(d[0].CustomerCode);
                $("#input-customers-CustomerName") .val(d[0].CustomerName);
                $("#input-customers-HouseNo")      .val(d[0].HouseNo);
                $("#input-customers-Street")       .val(d[0].Street);
                $("#input-customers-Disrict")      .val(d[0].Disrict);
                $("#input-customers-Address")      .val(d[0].Address);
                $("#input-customers-GroupCustomer").val(d[0].GroupCustomer);
                $("#input-customers-Remark")       .val(d[0].Remark);
                $("#input-customers-Route")        .val(d[0].Route);
                $("#input-customers-City")         .val(d[0].City);
                $("#input-customers-Vung")         .val(d[0].Vung);
                $("#input-customers-ThanhPhoTinh") .val(d[0].ThanhPhoTinh);
                $("#input-customers-QuanHuyen")    .val(d[0].QuanHuyen);
                $("#input-customers-QuocLo")       .val(d[0].QuocLo);
                $("#input-customers-CachDC")       .val(d[0].CachDC);
                $("#myModalUpdateCustomer").modal("show");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {

        });
    /// END AJAX LOAD

    })


}
function fncChange() {
}
function fncLoadCustomers() {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "Customers.aspx/LoadCustomers",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            html_tbody = "";

            var sum_QuailityOrder = 0;
            var sum_QuailityPromotion = 0;
            var sum_TotalCbm = 0;
            $.each(d, function (index, item) {
                html_tbody += "<tr>";
                html_tbody += "<td>" + item.CustomerCode + "</td>";
                html_tbody += "<td class=\"td-CustomerName\">" + item.CustomerName + "</td>";
                html_tbody += "<td>" + item.QuailityOrder + "</td>";
                html_tbody += "<td>" + item.QuailityPromotion + "</td>";
                html_tbody += "<td>" + item.TotalCbm + "</td>";
                if (item.CustomerCode.trim() == "") {
                    html_tbody += "<td>"+ "</td>";
                } else {
                    html_tbody += "<td>" + "<button type=\"button\" class=\"btn btn-xs btn-primary btn-customers-sua\" CustomerCode=\"" + item.CustomerCode + "\" >Sửa</button>" + "</td>";
                }
                

                html_tbody += "</tr>";
                sum_QuailityOrder += parseFloat(item.QuailityOrder);
                sum_QuailityPromotion += parseFloat(item.QuailityPromotion);
                sum_TotalCbm += parseFloat(item.TotalCbm);
            })
            html_tbody_temp = "";
            html_tbody_temp += "<tr class=\"tr-total\">";
            html_tbody_temp += "<td>" + "</td>";
            html_tbody_temp += "<td>" + "</td>";
            html_tbody_temp += "<td>" + numberWithCommas(sum_QuailityOrder) + "</td>";
            html_tbody_temp += "<td>" + numberWithCommas(sum_QuailityPromotion) + "</td>";
            html_tbody_temp += "<td>" + numberWithCommas(sum_TotalCbm.toFixed(3)) + "</td>";
            html_tbody_temp += "<td>" + "</td>";

            html_tbody_temp += "</tr>";
            $("#tbl-customers tbody").empty();
            $("#tbl-customers tbody").append(html_tbody_temp + html_tbody);
            var tbl_customers = $('#tbl-customers').DataTable({
                "responsive": true,
                "paging": false
            });
            // create temp thead tr
            var newTheadTr = "";
            newTheadTr = "<tr id=\"newTheadTr\" class=\"tr-total\">";
            for (ij = 0; ij <= 5; ij++) {
                newTheadTr += "<td>" + "</td>";
            }
            newTheadTr += "</tr>";
            // search sum value
            $("#tbl-customers").on('search.dt', function () {
                //console.log($("#tbl-rqlkt_filter input").val().trim());
                if ($("#tbl-customers_filter input").val().trim() != "") {
                    // insert new td in thead
                    if ($("#newTheadTr").length == 0) {
                        $("#tbl-customers thead").append(newTheadTr);
                    }
                    $("#newTheadTr td").text("");

                    // console.log(tbl_rqlkt.column(14, { page: 'current' }).data().sumAfterSearch());
                    var newTheadTr_td = $("#newTheadTr").find("td");
                    var search_col;
                    var sum_search_col;
                    for (jk = 2; jk <=4; jk++) {
                        search_col = tbl_customers.column(jk, { page: 'current' }).data();
                        //console.log(search_col);
                        sum_search_col = 0;
                        for (mn = 0; mn < search_col.length; mn++) {
                            if (search_col[mn] != "")
                                sum_search_col += parseFloat(search_col[mn].replace(",", ""));
                        }
                        var colValueAfterSearch = "";
                        colValueAfterSearch = numberWithCommas(sum_search_col);
                        if (jk == 4) {
                            colValueAfterSearch = numberWithCommas(sum_search_col.toFixed(3));
                        }
                        newTheadTr_td[jk].append(
                            colValueAfterSearch
                        );
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