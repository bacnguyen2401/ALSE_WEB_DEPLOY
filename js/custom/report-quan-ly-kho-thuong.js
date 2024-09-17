var rqlkt_export_header;
var rqlkt_export_header_thongke;
var rqlkt_import_header;
var rqlkt_storage_header;
var html_header = "";
var html_body = "";
var span_tieude = "";
var span_ngay = "";
var html_table = "";
var newTheadSearch = "";
$(document).ready(function () {
    $("#input-rqlkt-start-date").val(moment().format("DD/MM/YYYY"));
    $("#input-rqlkt-end-date").val(moment().format("DD/MM/YYYY"));
    if ($("#username").attr("wugroup") == "18" || $("#username").attr("wugroup") == "21") {
        $("#btn-hangthuong-storageexp").remove();
        $("#btn-hangthuong-storageprojectexp").text("Storage of Batch no & Expiration Date");
    }
    if ($("#username").attr("wugroup") == "18" || $("#username").attr("wugroup") == "1" || $("#username").attr("wugroup") == "21") {
        $("#btn-Export-TKSLBH").removeClass("display-none");
        $("#div-khothuong-groupbutton").removeClass("col-lg-5").addClass("col-lg-8");
    }
    if ($("#username").attr("wugroup") == "20" || $("#username").attr("wugroup") == "22") {
        //$("#btn-Export-TKSLBH").remove();
        $("#btn-hangthuong-storageexp").remove();
        $("#btn-hangthuong-storageprojectexp").remove();

    }
    if ($("#username").attr("wugroup") == "31" || $("#username").attr("wugroup") == "ASGPP") {
        //$("#btn-Export-TKSLBH").remove();
        $("#btn-hangthuong-storage").remove();
        $("#btn-hangthuong-storageexp").text("Storage");
        $("#btn-hangthuong-storageprojectexp").text("Storage Customer");

    }
    if ($("#username").attr("wugroup") == "28" || $("#username").attr("wugroup") == "SF.MTL" || $("#username").attr("wugroup") == "33" || $("#username").attr("wugroup") == "JUSDA") {
        //$("#btn-Export-TKSLBH").remove();
        $("#btn-hangthuong-storageprojectexp").remove();

        $("#btn-hangthuong-storageexp").text("Storage Material Code");

    }
    LoadCustomersList();

    $('input[type=radio][name=inlineRadioOptionsStorageProjectEXP]').change(function () {

        $("#btn-hangthuong-storageprojectexp").click();

    });
})
// click
$("#div-rqlkt").on("click", ".input-rqlkt-show-data", function () {
    var _value = $(this).attr("value");
    var _tungay = dmy2ymd($("#input-rqlkt-start-date").val());
    var _denngay = dmy2ymd($("#input-rqlkt-end-date").val());
    var _customer = "";
    _customer = $("#select-rqlkt-customers").val();


    rqlkt_export_header = ["No", "Product Name", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", "Date in", "Time in", "Date out", "Time out", "Truck out", "FWD"];
    rqlkt_import_header = ["No", "Product Name", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", "Length ", "Width", "Hight", "Date in", "Time in", "Truck in", "FWD"];
    rqlkt_storage_header = ["No", "Item", "Product Name", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", "Date in", "Time in", "Truck in", "FWD"];
    rqlkt_export_header_thongke = ["No", "Item", "Product Name", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", "Mfg date", "Exp date", "Date in", "Time in", "Date out", "Time out", "Truck out", "Customer"];
    if ($("#username").attr("wugroup") == "18" || _customer == "STC" || $("#username").attr("wugroup") == "21" || _customer == "CHT") {

        rqlkt_export_header = ["No", "Product Name", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "Mfg date", "Exp date", "Date in", "Time in", "Date out", "Time out", "Truck out", "FWD"];

        rqlkt_import_header = ["No", "Product Name", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "Mfg date", "Exp date", "Date in", "Time in", "Truck in", "FWD"];
        rqlkt_storage_header = ["No", "Product Name", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", , "Mfg date", "Exp date", "Date in", "Time in", "Truck in", "FWD"];
    }

    if ($("#username").attr("wugroup") == "15" || _customer == "EUSU") {
        rqlkt_export_header = ["No", "Product Name", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", "Date in", "Time in", "Date out", "Time out", "Position", "Truck out", "FWD"];
        rqlkt_import_header = ["No", "Product Name", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", "Length ", "Width", "Hight", "Date in", "Time in", "Position", "Truck in", "FWD"];
        rqlkt_storage_header = ["No", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", "Date in", "Time in", "Position", "Truck in", "FWD"];
    }

    if ($("#username").attr("wugroup") == "16" || _customer == "AIC") {
        rqlkt_export_header = ["No", "Dự án", "Product Name", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", "Date in", "Time in", "Date out", "Time out", "Truck out", "FWD"];
        rqlkt_import_header = ["No", "Dự án", "Product Name", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", "Length ", "Width", "Hight", "Date in", "Time in", "Truck in", "FWD"];
        rqlkt_storage_header = ["No", "Dự án", "Chi tiết hàng", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", "Date in", "Time in", "Truck in", "FWD"];
    }

    if ($("#username").attr("wugroup") == "31" || _customer == "ASGPP") { // asg
        rqlkt_export_header = ["No", "Customer ID", "Product Name", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", "Date in", "Time in", "Date out", "Time out", "Truck out", "FWD"];
        rqlkt_import_header = ["No", "Customer ID", "Product Name", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", "Date in", "Time in", "Truck in", "FWD"];
    }
    if ($("#username").attr("wugroup") == "28" || _customer == "SF.MTL" || $("#username").attr("wugroup") == "33" || _customer == "JUSDA") { // safo và jusda

        rqlkt_import_header = ["No", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", "Date in", "Time in", "Truck in", "FWD"];
        rqlkt_export_header = ["No", "Item", "Pallet ID", "Pcs", "Weight", "Cbm", "UnitCbm", "Date in", "Time in", "Date out", "Time out", "Truck out", "FWD"];

    }

    if (_customer == "SF.JD") {
        rqlkt_import_header = ["No", "Product Name", "Item", "Pallet ID", "Pcs", "Cbm", "UnitCbm", "Date in", "Time in", "Truck in", "FWD", "Location"];
    }

    if ($("#username").attr("wugroup") == "49" || _customer == "SKH" || $("#username").attr("wugroup") == "1") {

        rqlkt_storage_header = ["No", "Product Name", "Item", "Pallet ID", "HSD", "Pcs", "Weight", "Cbm", "UnitCbm", "Date in", "Time in", "Truck in", "FWD"];

        rqlkt_export_header = ["No", "Product Name", "Item", "Pallet ID", "HSD", "Pcs", "Weight", "Cbm", "UnitCbm", "Date in", "Time in", "Date out", "Time out", "Truck out", "FWD"];
        rqlkt_import_header = ["No", "Product Name", "Item", "Pallet ID", "HSD", "Pcs", "Weight", "Cbm", "UnitCbm", "Length ", "Width", "Hight", "Date in", "Time in", "Truck in", "FWD"];
    }

    //show body
    var _items;

    if (_value == "Export-Surtec-ThongKe") {
        $(".check-StorageProjectEXP").removeClass("form-check-inline-custom");
        $(".check-StorageProjectEXP").hide();
        _items = { "get1": "Export", "get2": _tungay, "get3": _denngay, "get4": (($("#username").attr("wugroupname") != "ADMIN") ? $("#username").attr("wugroupname") : $("#select-rqlkt-customers").val()) };

    } else {
        $(".check-StorageProjectEXP").removeClass("form-check-inline-custom");
        $(".check-StorageProjectEXP").hide();
        _items = { "get1": _value, "get2": _tungay, "get3": _denngay, "get4": _customer };
    }
    if (_value == "StorageEXP") {
        $(".check-StorageProjectEXP").removeClass("form-check-inline-custom");
        $(".check-StorageProjectEXP").hide();
        returnTableStorageEXP(_items, _value);
    }
    else if (_value == "Storage_Project_EXP") {
        $(".check-StorageProjectEXP").addClass("form-check-inline-custom");
        $(".check-StorageProjectEXP").show();
        var radio_type = "pcs";
        if ($("#inlineRadioKGS")[0].checked) {
            radio_type = "kgs";
        }
        returnTableStorageProjectEXP(_items, _value, radio_type);
    } else if (_value == "Export-TKSLBH") { // chuyển trạng thái sang truy xuất thông kế Surtec
        $(".check-StorageProjectEXP").removeClass("form-check-inline-custom");
        $(".check-StorageProjectEXP").hide();
        $(".input-rqlkt-show-data").hide();
        $("#div-rqlkt-customers").hide();
        $("#btn-surtec-thongke").removeClass("display-none");
        $("#btn-surtec-thongke").show();
        $("#div-rqlkt-customers-surtec").removeClass("display-none");
        $("#div-rqlkt-customers-surtec").show();
        $("#btn-surtec-quaylai").removeClass("display-none");
        $("#btn-surtec-quaylai").show();

        LoadKhachHangCustomersList();
    }
    else {
        $(".check-StorageProjectEXP").removeClass("form-check-inline-custom");
        $(".check-StorageProjectEXP").hide();
        returnTable(_items, _value);

    }
    if ($("#username").attr("wugroup") == "28" || $("#select-rqlkt-customers").val() == "SF.MTL" || $("#username").attr("wugroup") == "33" || $("#select-rqlkt-customers").val() == "JUSDA") {
        $("#btn-export-excel").val("Excel Export");

    }

    $("#btn-export-excel").show();
})
$("#btn-surtec-quaylai").on("click", function () {
    $(".input-rqlkt-show-data").show();
    $("#div-rqlkt-customers").show();
    $("#btn-surtec-thongke").hide();
    $("#div-rqlkt-customers-surtec").hide();
    $("#btn-surtec-quaylai").hide();
    $("#btn-surtec-quaylai").hide();
})
// return header
function returnHTML(_items) {
    var html_temp = "";
    html_temp += "<tr>";
    var i = 0;
    var temp_class = "";
    _items.forEach(function (_item) {
        if (i == 1 || i == 2) {
            temp_class = "class=\"text-align-left\"";
        } else {
            temp_class = "";
        }
        html_temp += "<td " + temp_class + ">" + _item + "</td>";
        i = i + 1;
    })
    html_temp += "</tr>";
    return html_temp;
}

function LoadCustomersList() {
    //$("#div-wait").show();
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "./ReportQuanLyKhoThuong.aspx/LoadCustomers",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            if (d != null && d.length > 0) {
                $("#div-rqlkt-customers").removeClass("alse-display-none");
                var customersList = "";

                customersList += "<option value=" + "ALL" + ">" + "ALL" + "</option>";

                $.each(d, function (item, val) {
                    customersList += "<option value=" + val.makh + ">" + val.tenkh + "</option>";
                });
                $("#select-rqlkt-customers").empty();
                $("#select-rqlkt-customers").append(customersList);
            } else {
            }
        },
        error: function () {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)");
        }
    }).done(function () {
        //$("#div-wait").hide();
    });
}
function LoadKhachHangCustomersList() {
    //$("#div-wait").show();
    ajaxGet = { "get": $("#select-rqlkt-customers").val() };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "./ReportQuanLyKhoThuong.aspx/LoadKhachHangCustomers",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            if (d != null && d.length > 0) {

                var customersSurtecList = "";

                customersSurtecList += "<option value=" + "ALL" + ">" + "ALL" + "</option>";

                $.each(d, function (item, val) {
                    customersSurtecList += "<option value=\"" + val.Customer.replace(" ", "").trim() + "\">" + val.Customer.trim() + "</option>";
                });
                $("#select-rqlkt-customers-surtec").empty();
                $("#select-rqlkt-customers-surtec").append(customersSurtecList);
            } else {
            }
        },
        error: function () {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)");
        }
    }).done(function () {
        //$("#div-wait").hide();
    });
}
function returnTable(ajaxGet4, _loai) {
    //$("#div-wait").show();
    html_body = "";
    jsonData = JSON.stringify({ ajaxGet4 });
    $.ajax({
        type: "POST",
        url: "./ReportQuanLyKhoThuong.aspx/LoadData",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            //console.log("1232");
            var _iSD = $("#input-rqlkt-start-date").val();
            var _iED = $("#input-rqlkt-end-date").val();
            var _countPallet = 0;
            switch (_loai) {
                case "Export":
                    _countPallet = 0;
                    html_header = returnHTML(rqlkt_export_header);
                    span_tieude = "Export";
                    $.each(d, function (item, val) {
                        if ($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.chitiethang
                                , val.lotno
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , (parseFloat(val.dai_code) * parseFloat(val.rong_code) * parseFloat(val.cao_code) / 1000000 * parseInt(val.pcs)).toFixed(3)

                                , formatTextDate2Date(val.hansudung, val.hansudung_code)[0]
                                , formatTextDate2Date(val.hansudung, val.hansudung_code)[1]
                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein
                                , moment(val.dateout).format("DD/MM/YYYY")
                                , val.timeout_

                                , val.truckout
                                , val.makh
                            ])
                        }
                        else if ($("#username").attr("wugroup") == "15" || $("#select-rqlkt-customers").val() == "EUSU") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.chitiethang
                                , val.lotno
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)

                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein
                                , moment(val.dateout).format("DD/MM/YYYY")
                                , val.timeout_
                                , val.vitri
                                , val.truckout
                                , val.makh
                            ])
                        }
                        else if ($("#username").attr("wugroup") == "31" || $("#select-rqlkt-customers").val() == "ASGPP") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.duan
                                , val.chitiethang
                                , val.lotno
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)

                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein
                                , moment(val.dateout).format("DD/MM/YYYY")
                                , val.timeout_

                                , val.truckout
                                , val.makh
                            ])
                        }
                        else if ($("#username").attr("wugroup") == "28" || $("#select-rqlkt-customers").val() == "SAFO") {
                            html_body += returnHTML([
                                (item + 1)
                                //, val.chitiethang
                                , val.lotno
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)

                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein
                                , moment(val.dateout).format("DD/MM/YYYY")
                                , val.timeout_

                                , val.truckout
                                , val.makh
                            ])
                        }
                        else if ($("#username").attr("wugroup") == "16" || $("#select-rqlkt-customers").val() == "AIC") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.duan
                                , val.chitiethang
                                , val.lotno
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)

                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein
                                , moment(val.dateout).format("DD/MM/YYYY")
                                , val.timeout_

                                , val.truckout
                                , val.makh
                            ])
                        }
                        else if ($("#username").attr("wugroup") == "49" || $("#select-rqlkt-customers").val() == "SKH" || $("#username").attr("wugroup") == "1") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.chitiethang
                                , val.lotno
                                , val.palletid
                                , val.hansudung
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)

                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein
                                , moment(val.dateout).format("DD/MM/YYYY")
                                , val.timeout_

                                , val.truckout
                                , val.makh
                            ])
                        }
                        else {
                            html_body += returnHTML([
                                (item + 1)
                                , val.chitiethang
                                , val.lotno
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)

                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein
                                , moment(val.dateout).format("DD/MM/YYYY")
                                , val.timeout_

                                , val.truckout
                                , val.makh
                            ])
                        }
                        if ($("#username").attr("wugroup") == "28" || $("#select-rqlkt-customers").val() == "SAFO") {
                            _countPallet += 1;
                        } else {
                            _countPallet += parseInt(val.pcs);
                        }

                    })
                    $("#span-rqlkt-ngay").empty()
                        .append(reNgay(_iSD, _iED, "Export"));
                    break;
                case "Export-Surtec-ThongKe":
                    _countPallet = 0;
                    html_header = returnHTML(rqlkt_export_header_thongke);
                    span_tieude = "THỐNG KÊ SẢN LƯỢNG BÁN HÀNG";

                    var tong_can = 0;
                    var tong_cbm = 0;
                    var tong_kien = 0;
                    $.each(d, function (item, val) {
                        if ($("#select-rqlkt-customers-surtec").val() == "ALL" || (val.truckout).trim().split("/")[0].replace(" ", "") == $("#select-rqlkt-customers-surtec").val())
                            html_body += returnHTML([
                                (item + 1)
                                , val.lotno
                                , val.chitiethang
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , numberWithCommas((parseFloat(val.dai_code) * parseFloat(val.rong_code) * parseFloat(val.cao_code) / 1000000 * parseInt(val.pcs)).toFixed(3))

                                , (parseFloat(val.dai_code) * parseFloat(val.rong_code) * parseFloat(val.cao_code) / 1000000).toFixed(3)
                                , formatTextDate2Date(val.hansudung, val.hansudung_code)[0]
                                , formatTextDate2Date(val.hansudung, val.hansudung_code)[1]
                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein
                                , moment(val.dateout).format("DD/MM/YYYY")
                                , val.timeout_

                                , (val.truckout).trim().split("/")[1]
                                , (val.truckout).trim().split("/")[0]
                            ])
                        _countPallet += parseInt(val.pcs);
                        tong_can += parseInt(val.weight_);
                        tong_cbm += parseFloat(val.dai_code) * parseFloat(val.rong_code) * parseFloat(val.cao_code) / 1000 * parseInt(val.pcs);
                        tong_kien += parseFloat(val.pcs);


                        if (item == d.length - 1) {
                            html_body += "<tr>";
                            html_body += "<td>" + "10000" + "</td>";
                            for (var i = 0; i < 3; i++) {
                                html_body += "<td>" + "</td>";
                            }
                            html_body += "<td>" + numberWithCommas(tong_kien) + "</td>";
                            html_body += "<td>" + numberWithCommas(tong_can) + "</td>";
                            html_body += "<td>" + numberWithCommas(tong_cbm.toFixed(3)) + "</td>";
                            for (var ij = 0; ij < 9; ij++) {
                                html_body += "<td>" + "</td>";
                            }
                            html_body += "</tr>";
                        }


                    })



                    $("#span-rqlkt-ngay").empty()
                        .append(reNgay(_iSD, _iED, "Export"));

                    break;
                case "Import":
                    span_tieude = "Import";
                    _countPallet = 0;

                    html_header = returnHTML(rqlkt_import_header);
                    $.each(d, function (item, val) {
                        if ($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.chitiethang
                                , val.lotno
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , (parseFloat(val.dai_code) * parseFloat(val.rong_code) * parseFloat(val.cao_code) / 1000000 * parseInt(val.pcs)).toFixed(3)

                                //, parseFloat(val.unitcbm).toFixed(3)
                                //, val.dai
                                //, val.rong
                                //, val.cao
                                , formatTextDate2Date(val.hansudung, val.hansudung_code)[0]
                                , formatTextDate2Date(val.hansudung, val.hansudung_code)[1]
                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein

                                , val.truckin
                                , val.makh

                            ])
                        }
                        else if ($("#username").attr("wugroup") == "15" || $("#select-rqlkt-customers").val() == "EUSU") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.chitiethang
                                , val.lotno
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)
                                , val.dai
                                , val.rong
                                , val.cao

                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein
                                , val.vitri
                                , val.truckin
                                , val.makh

                            ])
                        }
                        else if ($("#username").attr("wugroup") == "31" || $("#select-rqlkt-customers").val() == "ASGPP") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.duan
                                , val.chitiethang
                                , val.lotno
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)
                                //, val.dai
                                //, val.rong
                                //, val.cao

                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein

                                , val.truckin
                                , val.makh

                            ])
                        }
                        else if ($("#username").attr("wugroup") == "28" || $("#select-rqlkt-customers").val() == "SF.MTL" || $("#username").attr("wugroup") == "33" || $("#select-rqlkt-customers").val() == "JUSDA") {
                            html_body += returnHTML([
                                (item + 1)
                                //, val.chitiethang
                                , val.lotno
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)
                                //, val.dai
                                //, val.rong
                                //, val.cao
                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein
                                , val.truckin
                                , val.makh

                            ])
                        }
                        else if ($("#username").attr("wugroup") == "16" || $("#select-rqlkt-customers").val() == "AIC") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.duan
                                , val.chitiethang
                                , val.lotno
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)
                                , val.dai
                                , val.rong
                                , val.cao

                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein

                                , val.truckin
                                , val.makh

                            ])
                        }
                        else if ($("#select-rqlkt-customers").val() == "SF.JD") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.chitiethang
                                , val.lotno
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)
                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein

                                , val.truckin
                                , val.makh
                                , val.vitri
                            ])
                        }
                        else if ($("#username").attr("wugroup") == "49" || $("#select-rqlkt-customers").val() == "SKH" || $("#username").attr("wugroup") == "1") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.chitiethang
                                , val.lotno
                                , val.palletid
                                , val.hansudung
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)
                                , val.dai
                                , val.rong
                                , val.cao

                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein

                                , val.truckin
                                , val.makh
                            ])
                        }
                        else {
                            html_body += returnHTML([
                                (item + 1)
                                , val.chitiethang
                                , val.lotno
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)
                                , val.dai
                                , val.rong
                                , val.cao

                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein

                                , val.truckin
                                , val.makh

                            ])
                        }

                        if ($("#username").attr("wugroup") == "28" || $("#select-rqlkt-customers").val() == "SAFO") {
                            _countPallet += 1;
                        } else {
                            _countPallet += parseInt(val.pcs);
                        }
                    })
                    $("#span-rqlkt-ngay").empty()
                        .append(reNgay(_iSD, _iED, "Import"));
                    break;
                case "Storage":
                    span_tieude = "Storage";
                    _countPallet = 0;

                    html_header = returnHTML(rqlkt_storage_header);
                    $.each(d, function (item, val) {
                        if ($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.lotno
                                , val.chitiethang
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)
                                , formatTextDate2Date(val.hansudung, val.hansudung_code)[0]
                                , formatTextDate2Date(val.hansudung, val.hansudung_code)[1]
                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein
                                , val.truckin
                                , val.makh

                            ])
                        }
                        else if ($("#username").attr("wugroup") == "15" || $("#select-rqlkt-customers").val() == "EUSU") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.lotno
                                , val.chitiethang
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)

                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein
                                , val.vitri
                                , val.truckin
                                , val.makh

                            ])
                        }
                        else if ($("#username").attr("wugroup") == "16" || $("#select-rqlkt-customers").val() == "AIC") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.duan
                                , val.chitiethang
                                , val.lotno
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)

                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein

                                , val.truckin
                                , val.makh

                            ])
                        }
                        else if ($("#username").attr("wugroup") == "49" || $("#select-rqlkt-customers").val() == "SKH" || $("#username").attr("wugroup") == "1") {
                            html_body += returnHTML([
                                (item + 1)
                                , val.lotno
                                , val.chitiethang
                                , val.palletid
                                , val.hansudung
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)
                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein
                                , val.truckin
                                , val.makh

                            ])
                        }
                        else {
                            html_body += returnHTML([
                                (item + 1)
                                , val.lotno
                                , val.chitiethang
                                , val.palletid
                                , numberTextWithCommas(val.pcs)
                                , numberTextWithCommas(val.weight_)
                                , parseFloat(val.cbm).toFixed(3)
                                , parseFloat(val.unitcbm).toFixed(3)
                                , moment(val.datein).format("DD/MM/YYYY")
                                , val.timein
                                , val.truckin
                                , val.makh

                            ])
                        }

                        if ($("#username").attr("wugroup") == "28" || $("#select-rqlkt-customers").val() == "SAFO") {
                            _countPallet += 1;
                        } else {
                            _countPallet += parseInt(val.pcs);
                        }
                    })
                    $("#span-rqlkt-ngay").empty()
                        .append(reNgay(_iSD, _iED, "Storage"));
                    break;
            }

            if ($("#username").attr("wugroup") == "28" || $("#select-rqlkt-customers").val() == "SAFO") {
                $("#div-rqlkt-thongke")
                    .empty()
                    .append("<span>Tổng: " + numberWithCommas(_countPallet) + " pallet</span>")
            } else {
                $("#div-rqlkt-thongke")
                    .empty()
                    //.append("<span>Total: " + numberWithCommas(_countPallet) + " pcs</span>")
                    .append("<span>Total: <span class=\"totalPCS\">" + numberWithCommas(_countPallet) + "</span> pcs</span>")
            }

            $("#span-rqlkt-tieude").empty()
                .append(span_tieude);

            html_table = "<table id=\"tbl-rqlkt\" class=\"table table-bordered\">";
            html_table += "<thead>";
            html_table += " </thead>";
            html_table += "<tbody>";
            html_table += "</tbody >";
            html_table += "</table>";
            $("#div-rqlkt-data-table").empty()
                .append(html_table);

            $("#tbl-rqlkt thead").empty()
                .append(html_header);
            $("#tbl-rqlkt tbody").empty()
                .append(html_body);
            $("#tbl-rqlkt").removeClass("table-ht-font-size-9pt");

            var tbl_rqlkt = $("#tbl-rqlkt").DataTable({
                "responsive": true,
                "paging": false,
            });

            $('#tbl-rqlkt').on('search.dt', function () {

                $("#tbl-rqlkt").each(function () {
                    var total = 0;
                    var k = 0;
                    $('#tbl-rqlkt tr').each(function () {
                        if (k != 0) {
                            var customerId = $(this).find("td").eq(4).html();
                            total += parseInt(customerId);
                        }
                        k++;
                    });
                    $(".totalPCS").empty().append(numberWithCommas(total));

                    //var table = document.getElementById("tbl-rqlkt");
                    //var tbodyRowCount = table.tBodies[0].rows.length;
                    //console.log(tbodyRowCount)
                    //if (tbodyRowCount == 0) {
                    //    $(".totalPCS").empty().append(0);
                    //}
                });
                // Nếu ô input search bằng rỗng thì trả về total ban đầu
                var value = $('.dataTables_filter input').val();
                if (value == "") {
                    $(".totalPCS").empty().append(numberWithCommas(_countPallet));
                }
            });

            if (_loai == "Export-Surtec-ThongKe") {

                // create temp thead tr
                var newTheadTr = "";
                newTheadTr = "<tr id=\"newTheadTr\">";
                for (ij = 0; ij < 16; ij++) {
                    newTheadTr += "<td>" + "</td>";
                }
                newTheadTr += "</tr>";
                // search sum value
                $("#tbl-rqlkt").on('search.dt', function () {
                    console.log($("#tbl-rqlkt_filter input").val().trim());
                    if ($("#tbl-rqlkt_filter input").val().trim() != "") {
                        // insert new td in thead
                        if ($("#newTheadTr").length == 0) {
                            $("#tbl-rqlkt thead").append(newTheadTr);
                        }
                        $("#newTheadTr td").text("");

                        // console.log(tbl_rqlkt.column(14, { page: 'current' }).data().sumAfterSearch());
                        var newTheadTr_td = $("#newTheadTr").find("td");
                        var search_col;
                        var sum_search_col;
                        for (jk = 4; jk < 7; jk++) {
                            search_col = tbl_rqlkt.column(jk, { page: 'current' }).data();
                            //console.log(search_col);
                            sum_search_col = 0;
                            for (mn = 0; mn < search_col.length; mn++) {
                                if (search_col[mn] != "")
                                    sum_search_col += parseFloat(search_col[mn].replace(",", ""));
                            }
                            var colValueAfterSearch = "";
                            colValueAfterSearch = numberWithCommas(sum_search_col);
                            if (jk == 6) {
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

            }


            //$()
        },
        error: function () {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)");
        }
    }).done(function () {
        //$("#div-wait").hide();
    });
}
function returnCBM(kichthuoc) {
    var re_cbm = "";
    if (kichthuoc != "") {
        var kt_temp = kichthuoc.replace(/ /g, "").split("x");
        var cbm = (parseFloat(kt_temp[0]) * parseFloat(kt_temp[1]) * parseFloat(kt_temp[2])) / 1000000;

        re_cbm = cbm.toFixed(2);
    }
    return re_cbm;
}
function reNgay(ngayS, ngayE, loai) {
    var reN = "";
    if (loai == "StorageEXP" || loai == "Storage" || ngayS.trim() == ngayE.trim()) {
        reN = "(" + ngayE + ")";
    } else {
        reN = "(" + ngayS + " - " + ngayE + ")";
    }
    return reN;
}
function returnTableStorageEXP(ajaxGet4, _loai) {
    //$("#div-wait").show();
    html_body = "";
    jsonData = JSON.stringify({ ajaxGet4 });
    var _iSD = $("#input-rqlkt-start-date").val();
    var _iED = $("#input-rqlkt-end-date").val();
    $.ajax({
        type: "POST",
        url: "./ReportQuanLyKhoThuong.aspx/LoadDataStorageEXP",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            var hsd = d[0].hsd;
            var htk = d[0].htk;
            //console.log(hsd);
            var _mahang = "";
            var same_count_total = 0;
            var sum_mahang = 0;
            var ton_cuoi = 0;
            var old_pos = 0;
            var ton_cuoi_sum = 0;
            var tong_hsd = new Array(hsd.length);
            var hsd_arr = [];
            var pos = 0;
            //console.log(hsd);


            if ($("#username").attr("wugroup") == "28" || $("#select-rqlkt-customers").val() == "SF.MTL" || $("#username").attr("wugroup") == "33" || $("#select-rqlkt-customers").val() == "JUSDA") {
                span_tieude = "Material Code Stock";
                html_header = "<tr>";
                html_header += "<td>" + "No" + "</td>";
                html_header += "<td>" + "Part No" + "</td>";
                html_header += "<td>" + "Detail" + "</td>";
            } else {
                span_tieude = "TỒN KHO THEO HẠN SỬ DỤNG";
                html_header = "<tr>";
                html_header += "<td>" + "No" + "</td>";
                html_header += "<td>" + "Tên Hàng" + "</td>";
                html_header += "<td>" + "Chi Tiết Hàng" + "</td>";
            }
            if ($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") {
                html_header += "<td>" + "Mã SAP" + "</td>";
            }

            var date_exp = "";
            hsd.forEach(function (_item) {
                date_exp = _item.hsd;
                if (_item.hsd == "0") {
                    date_exp = "Không Hsd";
                }
                if ($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") {
                    html_header += "<td>" + fncSplitHSD(date_exp)[0] + "<br>" + fncSplitHSD(date_exp)[1] + "</td>";
                } else {
                    html_header += "<td>" + date_exp + "</td>";

                }
                //html_header += "<td>" + date_exp + "</td>";
                hsd_arr.push(_item.hsd);

            })
            //console.log(hsd_arr);
            if ($("#username").attr("wugroup") == "28" || $("#select-rqlkt-customers").val() == "SF.MTL" || $("#username").attr("wugroup") == "33" || $("#select-rqlkt-customers").val() == "JUSDA") {
                html_header += "<td>" + "Total" + "</td>";
                html_header += "</tr>";

            }
            else {
                html_header += "<td>" + "Tổng" + "</td>";
                html_header += "</tr>";
            }

            htk.forEach(function (_value, index, array) {
                pos = hsd_arr.indexOf(_value.hsd);
                ton_cuoi = parseInt(_value.ton_cuoi);
                if (tong_hsd[pos] === undefined) {
                    tong_hsd[pos] = parseInt(ton_cuoi);
                } else {
                    tong_hsd[pos] += ton_cuoi;
                }
                if (_mahang == "" || _mahang != _value.mahang) {
                    if (_mahang != "") {
                        for (var k = 1; k < hsd_arr.length - old_pos; k++) {
                            html_body += "<td>" + "" + "</td>";
                        }
                        html_body += "<td class=\"td-ht-bold\">" + numberWithCommas(sum_mahang) + "</td>";
                        html_body += "</tr>";
                        sum_mahang = 0;
                    }
                    old_pos = pos;
                    html_body += "<tr>";
                    html_body += "<td>" + (index + 1 - same_count_total) + "</td>";
                    html_body += "<td class=\"text-align-left\">" + _value.mahang + "</td>";
                    html_body += "<td class=\"td-kt-tenhang text-align-left\">" + _value.tenhang + "</td>";

                    if ($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") {
                        html_body += "<td class=\"td-kt-tenhang text-align-left\">" + _value.codehang + "</td>";
                    }

                    for (var j = 0; j < pos; j++) {
                        html_body += "<td class=\"td-acccc\">" + "" + "</td>";
                    }
                    sum_mahang += ton_cuoi;
                    _mahang = _value.mahang;
                } else {
                    for (var j = 1; j < pos - old_pos; j++) {
                        html_body += "<td>" + "" + "</td>";
                    }
                    same_count_total += 1;
                    old_pos = pos;
                    sum_mahang += ton_cuoi;
                }
                html_body += "<td>" + numberWithCommas(_value.ton_cuoi) + "</td>";
                if (index == array.length - 1) {
                    for (var k = 1; k < hsd_arr.length - old_pos; k++) {
                        html_body += "<td>" + "" + "</td>";
                    }
                    html_body += "<td>" + numberWithCommas(sum_mahang) + "</td>";
                    html_body += "</tr>";

                    html_body += "<tr>";
                    html_body += "<td >" + "10000" + "</td>";
                    html_body += "<td >" + "" + "</td>";
                    if ($("#username").attr("wugroup") == "28" || $("#select-rqlkt-customers").val() == "SF.MTL" || $("#username").attr("wugroup") == "33" || $("#select-rqlkt-customers").val() == "JUSDA") {
                        html_body += "<td >" + "Total" + "</td>";
                    }
                    else {
                        html_body += "<td >" + "Tổng" + "</td>";
                    }

                    if ($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") {
                        html_body += "<td ></td>";
                    }

                    tong_hsd.forEach(function (_value2, index2, array2) {
                        html_body += "<td class=\"td-ht-bold\">" + _value2 + "</td>";
                    })
                    html_body += "<td class=\"td-ht-bold\">" + numberWithCommas(tong_hsd.reduce((a, b) => a + b, 0)) + "</td>";

                    html_body += "</tr>";
                }
            })
            if ($("#username").attr("wugroup") == "28" || $("#select-rqlkt-customers").val() == "SF.MTL" || $("#username").attr("wugroup") == "33" || $("#select-rqlkt-customers").val() == "JUSDA") {
                $("#div-rqlkt-thongke")
                    .empty()
                    .append("<span>Total: " + numberWithCommas(tong_hsd.reduce((a, b) => a + b, 0)) + " pcs</span>")
            }
            else if ($("#username").attr("wugroup") == "28" || $("#select-rqlkt-customers").val() == "SAFO") {
                $("#div-rqlkt-thongke")
                    .empty()
                    .append("<span>Tổng: " + numberWithCommas(tong_hsd.reduce((a, b) => a + b, 0)) + " pallet</span>")
            }
            else {
                $("#div-rqlkt-thongke")
                    .empty()
                    .append("<span>Tổng: " + numberWithCommas(tong_hsd.reduce((a, b) => a + b, 0)) + " kiện</span>")
            }

            html_table = "<table id=\"tbl-rqlkt\" class=\"table table-bordered\">";
            html_table += "<thead>";
            html_table += " </thead>";
            html_table += "<tbody>";
            html_table += "</tbody >";
            html_table += "</table>";
            $("#span-rqlkt-tieude").empty()
                .append(span_tieude);
            $("#span-rqlkt-ngay").empty()
                .append(reNgay(_iSD, _iED, "StorageEXP"));
            $("#div-rqlkt-data-table").empty()
                .append(html_table);

            $("#tbl-rqlkt thead").empty()
                .append(html_header);
            $("#tbl-rqlkt tbody").empty()
                .append(html_body);
            $("#tbl-rqlkt").removeClass("table-ht-font-size-9pt");
            $("#tbl-rqlkt").addClass("table-ht-font-size-9pt");
            $("#tbl-rqlkt").DataTable({
                "responsive": true,
                "paging": false,
            });
        },
        error: function (responsive) {
        }
    }).done(function () {
        //$("#div-wait").hide();
    });
}

function returnTableStorageProjectEXP(ajaxGet4, _loai, _type) {
    //$("#div-wait").show();
    html_body = "";
    jsonData = JSON.stringify({ ajaxGet4 });
    var _iSD = $("#input-rqlkt-start-date").val();
    var _iED = $("#input-rqlkt-end-date").val();
    $.ajax({
        type: "POST",
        url: "./ReportQuanLyKhoThuong.aspx/LoadDataStorageProjectEXP",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var hsd = d[0].hsd;
            var htk = d[0].htk;
            //console.log(htk);
            var _mahang = "";
            var same_count_total = 0;
            var sum_mahang = 0;
            var ton_cuoi = 0;
            var old_pos = 0;
            var ton_cuoi_sum = 0;
            var tong_hsd = new Array(hsd.length);
            var hsd_arr = [];
            var pos = 0;
            //console.log(hsd);
            // code here

            if ($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") {
                span_tieude = "TỒN KHO THEO LÔ HÀNG VÀ HẠN SỬ DỤNG";
                html_header = "<tr>";
                html_header += "<td>" + "No" + "</td>";
                html_header += "<td>" + "Product<br>Name" + "</td>";
                html_header += "<td>" + "Batch<br>No" + "</td>";
                html_header += "<td>" + "Mã SAP" + "</td>";
            } else if ($("#username").attr("wugroup") == "31" || $("#select-rqlkt-customers").val() == "ASGPP") {
                span_tieude = "TỒN KHO THEO KHÁCH HÀNG VÀ HẠN SỬ DỤNG";
                html_header = "<tr>";
                html_header += "<td>" + "No" + "</td>";
                html_header += "<td>" + "Customer<br>Id" + "</td>";
                html_header += "<td>" + "Tên<br>Hàng" + "</td>";
                html_header += "<td>" + "Mã<br>Hàng" + "</td>";
            }
            else {
                span_tieude = "TỒN KHO THEO DỰ ÁN VÀ HẠN SỬ DỤNG";
                html_header = "<tr>";
                html_header += "<td>" + "No" + "</td>";
                html_header += "<td>" + "Dự<br>án" + "</td>";
                html_header += "<td>" + "Tên<br>Hàng" + "</td>";
                html_header += "<td>" + "Mã<br>Hàng" + "</td>";
            }


            var date_exp = "";
            //console.log(hsd);
            hsd.forEach(function (_item) {
                date_exp = _item.hsd;
                if (_item.hsd == "0") {
                    date_exp = "KHÔNG HSD";
                }
                if ($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") {
                    //html_header += "<td>" + fncSplitHSD(date_exp)[0] + "<br>" + fncSplitHSD(date_exp)[1] + "</td>"; // Bắc bỏ sau cho lên sau khi giám sát
                } else {
                    html_header += "<td>" + date_exp + "</td>";

                }

                //console.log(date_exp);
                hsd_arr.push(_item.hsd);
                //console.log(fncSplitHSD(date_exp));
            })
            //console.log(hsd_arr);
            html_header += "<td>" + "Tổng" + "</td>";
            html_header += "</tr>";
            var cbsoluongton = "";
            if (_type == "pcs") {
                htk.forEach(function (_value, index, array) {
                    //console.log(_value);
                    pos = hsd_arr.indexOf(_value.hsd);
                    ton_cuoi = parseInt(_value.ton_cuoi);
                    if (tong_hsd[pos] === undefined) {
                        tong_hsd[pos] = parseInt(ton_cuoi);
                    } else {
                        tong_hsd[pos] += ton_cuoi;
                    }
                    if (_mahang == "" || _mahang != _value.mahang) {
                        if (_mahang != "") {
                            for (var k = 1; k < hsd_arr.length - old_pos; k++) {
                                //html_body += "<td>" + "" + "</td>";;Bắc bỏ khảo sát xong cho lên
                            }
                            if (($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") && parseInt(cbsoluongton) > sum_mahang) {
                                html_body += "<td class=\"td-ht-bold background-color-f58c6d\">" + numberWithCommas(sum_mahang) + "</td>";
                            } else {
                                html_body += "<td class=\"td-ht-bold\">" + numberWithCommas(sum_mahang) + "</td>";

                            }
                            html_body += "</tr>";
                            sum_mahang = 0;
                        }

                        cbsoluongton = _value.canhbaosoluongton;
                        old_pos = pos;
                        html_body += "<tr>";
                        html_body += "<td>" + (index + 1 - same_count_total) + "</td>";
                        if ($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") {
                            html_body += "<td class=\"text-align-left\">" + _value.codehang + "</td>"; //;Bắc bỏ khảo sát xong cho lên
                        } else {
                            html_body += "<td class=\"text-align-left\">" + _value.duan + "</td>";
                        }

                        html_body += "<td class=\"td-kt-tenhang text-align-left\">" + _value.tenhang + "</td>";
                        html_body += "<td class=\"text-align-left\">" + _value.mahang + "</td>";
                        for (var j = 0; j < pos; j++) {
                            html_body += "<td>" + "" + "</td>";//;Bắc bỏ khảo sát xong cho lên
                        }
                        sum_mahang += ton_cuoi;
                        _mahang = _value.mahang;
                    } else {
                        for (var j = 1; j < pos - old_pos; j++) {
                            html_body += "<td>" + "" + "</td>";//Bắc bỏ khảo sát xong cho lên
                        }
                        same_count_total += 1;
                        old_pos = pos;
                        sum_mahang += ton_cuoi;
                    }
                    if ($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") {
                        //html_body += "<td class=\"" + fncTinhCanhBaoHanSuDung(_value.hsd, _value.hansudung, _value.canhbaohansudung) + "\">" + _value.ton_cuoi + "</td>";
                    } else {
                        html_body += "<td >" + _value.ton_cuoi + "</td>";

                    }

                    if (index == array.length - 1) {
                        for (var k = 1; k < hsd_arr.length - old_pos; k++) {
                            html_body += "<td>" + "" + "</td>";//;Bắc bỏ khảo sát xong cho lên
                        }

                        if (($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") && parseInt(cbsoluongton) > sum_mahang) {
                            html_body += "<td class=\"td-ht-bold background-color-f58c6d\">" + numberWithCommas(sum_mahang) + "</td>";

                        } else {
                            html_body += "<td class=\"td-ht-bold\">" + numberWithCommas(sum_mahang) + "</td>";

                        }
                        html_body += "</tr>";

                        html_body += "<tr>";
                        html_body += "<td >" + "10000" + "</td>";
                        html_body += "<td >" + "" + "</td>";
                        html_body += "<td >" + "" + "</td>";
                        html_body += "<td >" + "Tổng" + "</td>";
                        tong_hsd.forEach(function (_value2, index2, array2) {
                            //html_body += "<td class=\"td-ht-bold\">" + _value2 + "</td>"; // Bắc bỏ
                        })
                        html_body += "<td class=\"td-ht-bold\">" + numberWithCommas(tong_hsd.reduce((a, b) => a + b, 0)) + "</td>";

                        html_body += "</tr>";
                    }
                })

                $("#div-rqlkt-thongke")
                    .empty()
                    .append("<span>Tổng: " + numberWithCommas(tong_hsd.reduce((a, b) => a + b, 0)) + " kiện</span>")
                html_table = "<table id=\"tbl-rqlkt\" class=\"table table-bordered\">";
                html_table += "<thead>";
                html_table += " </thead>";
                html_table += "<tbody>";
                html_table += "</tbody >";
                html_table += "</table>";
                $("#span-rqlkt-tieude").empty()
                    .append(span_tieude);
                $("#span-rqlkt-ngay").empty()
                    .append(reNgay(_iSD, _iED, "StorageEXP"));
                $("#div-rqlkt-data-table").empty()
                    .append(html_table);

                $("#tbl-rqlkt thead").empty()
                    .append(html_header);
                $("#tbl-rqlkt tbody").empty()
                    .append(html_body);
                $("#tbl-rqlkt").removeClass("table-ht-font-size-9pt");
                $("#tbl-rqlkt").addClass("table-ht-font-size-9pt");
                var tbl_rqlkt = $("#tbl-rqlkt").DataTable({
                    "responsive": true,
                    "paging": false,
                });
                newTheadSearch = "";
                newTheadSearch = "<tr id=\"newTheadSearch\">";
                newTheadSearch += "<td>" + "</td>";
                newTheadSearch += "<td>" + "<input class=\"input-search-column form-control width-100px\" type=\"text\" placeholder=\"Tìm kiếm\" />" + "</td>";
                newTheadSearch += "<td>" + "<input class=\"input-search-column form-control width-170px\" type=\"text\" placeholder=\"Tìm kiếm\" />" + "</td>";
                newTheadSearch += "<td>" + "<input class=\"input-search-column form-control width-100px\" type=\"text\" placeholder=\"Tìm kiếm\" />" + "</td>";
                for (is = 0; is < hsd.length + 1; is++) {
                    //newTheadSearch += "<td>" + "</td>"; // Bắc
                }
                newTheadSearch += "</tr>";
                //console.log(newTheadSearch);
                $("#tbl-rqlkt thead").append(newTheadSearch);
                $(".input-search-column").on('keyup change', function () {

                    tbl_rqlkt
                        .column(parseInt($(".input-search-column").index(this)) + 1)
                        .search(this.value.trim())
                        .draw();
                    if ($(this).val().trim() != "") {
                        // insert new td in thead
                        if ($("#newTheadTr").length == 0) {
                            $("#tbl-rqlkt thead").append(newTheadTr);
                        }
                        $("#newTheadTr td").text("");

                        // console.log(tbl_rqlkt.column(14, { page: 'current' }).data().sumAfterSearch());
                        var newTheadTr_td = $("#newTheadTr").find("td");
                        for (jk = 4; jk < hsd.length + 5; jk++) {
                            newTheadTr_td[jk].append(numberWithCommas(tbl_rqlkt.column(jk, { page: 'current' }).data().sumAfterSearch()));
                        }
                    } else {
                        $("#newTheadTr").remove();
                    }

                });
                // create temp thead tr
                var newTheadTr = "";
                newTheadTr = "<tr id=\"newTheadTr\">";
                for (ij = 0; ij < hsd.length + 5; ij++) {
                    newTheadTr += "<td>" + "</td>";
                }
                newTheadTr += "</tr>";
                // console.log(tbl_rqlkt.columns());

                // search sum value
                $("#tbl-rqlkt").on('search.dt', function () {
                    //console.log($("#tbl-rqlkt_filter input").val().trim());
                    if ($("#tbl-rqlkt_filter input").val().trim() != "") {
                        // insert new td in thead
                        if ($("#newTheadTr").length == 0) {
                            $("#tbl-rqlkt thead").append(newTheadTr);
                        }
                        $("#newTheadTr td").text("");

                        // console.log(tbl_rqlkt.column(14, { page: 'current' }).data().sumAfterSearch());
                        var newTheadTr_td = $("#newTheadTr").find("td");
                        for (jk = 4; jk < hsd.length + 5; jk++) {
                            newTheadTr_td[jk].append(numberWithCommas(tbl_rqlkt.column(jk, { page: 'current' }).data().sumAfterSearch()));
                        }
                    } else {
                        $("#newTheadTr").remove();
                    }
                });
            } else { // kgs
                htk.forEach(function (_value, index, array) {
                    //console.log(_value);
                    pos = hsd_arr.indexOf(_value.hsd);
                    ton_cuoi = parseFloat(_value.ton_cuoi) * parseFloat(_value.khoiluongtinh);
                    if (tong_hsd[pos] === undefined) {
                        tong_hsd[pos] = parseFloat(ton_cuoi);
                    } else {
                        tong_hsd[pos] += ton_cuoi;
                    }
                    if (_mahang == "" || _mahang != _value.mahang) {
                        if (_mahang != "") {
                            for (var k = 1; k < hsd_arr.length - old_pos; k++) {
                                html_body += "<td>" + "" + "</td>";
                            }
                            if (($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") && parseFloat(cbsoluongton) > sum_mahang) {
                                html_body += "<td class=\"td-ht-bold background-color-f58c6d\">" + numberWithCommas(sum_mahang) + "</td>";

                            } else {
                                html_body += "<td class=\"td-ht-bold\">" + numberWithCommas(sum_mahang) + "</td>";

                            }
                            html_body += "</tr>";
                            sum_mahang = 0;
                        }

                        cbsoluongton = parseFloat(_value.canhbaosoluongton) * parseFloat(_value.khoiluongtinh);
                        old_pos = pos;
                        html_body += "<tr>";
                        html_body += "<td>" + (index + 1 - same_count_total) + "</td>";
                        if ($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") {
                            html_body += "<td class=\"text-align-left\">" + _value.codehang + "</td>";
                        } else {
                            html_body += "<td class=\"text-align-left\">" + _value.duan + "</td>";
                        }

                        html_body += "<td class=\"td-kt-tenhang text-align-left\">" + _value.tenhang + "</td>";
                        html_body += "<td class=\"text-align-left\">" + _value.mahang + "</td>";
                        for (var j = 0; j < pos; j++) {
                            html_body += "<td>" + "" + "</td>";
                        }
                        sum_mahang += ton_cuoi;
                        _mahang = _value.mahang;
                    } else {
                        for (var j = 1; j < pos - old_pos; j++) {
                            html_body += "<td>" + "" + "</td>";
                        }
                        same_count_total += 1;
                        old_pos = pos;
                        sum_mahang += ton_cuoi;
                    }
                    if ($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") {
                        html_body += "<td class=\"" + fncTinhCanhBaoHanSuDung(_value.hsd, _value.hansudung, _value.canhbaohansudung) + "\">" + numberWithCommas(parseFloat(_value.ton_cuoi) * parseFloat(_value.khoiluongtinh)) + "</td>";
                    } else {
                        html_body += "<td >" + numberWithCommas(parseFloat(_value.ton_cuoi) * parseFloat(_value.khoiluongtinh)) + "</td>";

                    }

                    if (index == array.length - 1) {
                        for (var k = 1; k < hsd_arr.length - old_pos; k++) {
                            html_body += "<td>" + "" + "</td>";
                        }

                        if (($("#username").attr("wugroup") == "18" || $("#select-rqlkt-customers").val() == "STC" || $("#username").attr("wugroup") == "21" || $("#select-rqlkt-customers").val() == "CHT") && parseFloat(cbsoluongton) > sum_mahang) {
                            html_body += "<td class=\"td-ht-bold background-color-f58c6d\">" + numberWithCommas(sum_mahang) + "</td>";

                        } else {
                            html_body += "<td class=\"td-ht-bold\">" + numberWithCommas(sum_mahang) + "</td>";

                        }
                        html_body += "</tr>";

                        html_body += "<tr>";
                        html_body += "<td >" + "10000" + "</td>";
                        html_body += "<td >" + "" + "</td>";
                        html_body += "<td >" + "" + "</td>";
                        html_body += "<td >" + "Tổng" + "</td>";
                        tong_hsd.forEach(function (_value2, index2, array2) {
                            html_body += "<td class=\"td-ht-bold\">" + _value2 + "</td>";
                        })
                        html_body += "<td class=\"td-ht-bold\">" + numberWithCommas(tong_hsd.reduce((a, b) => a + b, 0)) + "</td>";

                        html_body += "</tr>";
                    }
                })
                $("#div-rqlkt-thongke")
                    .empty()
                    .append("<span>Tổng: " + numberWithCommas(tong_hsd.reduce((a, b) => a + b, 0)) + " kg</span>")
                html_table = "<table id=\"tbl-rqlkt\" class=\"table table-bordered\">";
                html_table += "<thead>";
                html_table += " </thead>";
                html_table += "<tbody>";
                html_table += "</tbody >";
                html_table += "</table>";
                $("#span-rqlkt-tieude").empty()
                    .append(span_tieude);
                $("#span-rqlkt-ngay").empty()
                    .append(reNgay(_iSD, _iED, "StorageEXP"));
                $("#div-rqlkt-data-table").empty()
                    .append(html_table);

                $("#tbl-rqlkt thead").empty()
                    .append(html_header);
                $("#tbl-rqlkt tbody").empty()
                    .append(html_body);
                $("#tbl-rqlkt").removeClass("table-ht-font-size-9pt");
                $("#tbl-rqlkt").addClass("table-ht-font-size-9pt");
                var tbl_rqlkt = $("#tbl-rqlkt").DataTable({
                    "responsive": true,
                    "paging": false,
                });

                newTheadSearch = "";
                newTheadSearch = "<tr id=\"newTheadSearch\">";
                newTheadSearch += "<td>" + "</td>";
                newTheadSearch += "<td>" + "<input class=\"input-search-column form-control width-100px\" type=\"text\" placeholder=\"Tìm kiếm\" />" + "</td>";
                newTheadSearch += "<td>" + "<input class=\"input-search-column form-control width-170px\" type=\"text\" placeholder=\"Tìm kiếm\" />" + "</td>";
                newTheadSearch += "<td>" + "<input class=\"input-search-column form-control width-100px\" type=\"text\" placeholder=\"Tìm kiếm\" />" + "</td>";
                for (is = 0; is < hsd.length + 1; is++) {
                    newTheadSearch += "<td>" + "</td>";
                }
                newTheadSearch += "</tr>";
                //console.log(newTheadSearch);
                $("#tbl-rqlkt thead").append(newTheadSearch);
                $(".input-search-column").on('keyup change', function () {

                    tbl_rqlkt
                        .column(parseInt($(".input-search-column").index(this)) + 1)
                        .search(this.value.trim())
                        .draw();
                    if ($(this).val().trim() != "") {
                        // insert new td in thead
                        if ($("#newTheadTr").length == 0) {
                            $("#tbl-rqlkt thead").append(newTheadTr);
                        }
                        $("#newTheadTr td").text("");

                        // console.log(tbl_rqlkt.column(14, { page: 'current' }).data().sumAfterSearch());
                        var newTheadTr_td = $("#newTheadTr").find("td");
                        for (jk = 4; jk < hsd.length + 5; jk++) {
                            newTheadTr_td[jk].append(numberWithCommas(tbl_rqlkt.column(jk, { page: 'current' }).data().sumAfterSearch()));
                        }
                    } else {
                        $("#newTheadTr").remove();
                    }

                });
                // create temp thead tr
                var newTheadTr = "";
                newTheadTr = "<tr id=\"newTheadTr\">";
                for (ij = 0; ij < hsd.length + 5; ij++) {
                    newTheadTr += "<td>" + "</td>";
                }
                newTheadTr += "</tr>";
                // search sum value
                $("#tbl-rqlkt").on('search.dt', function () {
                    //console.log($("#tbl-rqlkt_filter input").val().trim());
                    if ($("#tbl-rqlkt_filter input").val().trim() != "") {
                        // insert new td in thead
                        if ($("#newTheadTr").length == 0) {
                            $("#tbl-rqlkt thead").append(newTheadTr);
                        }
                        $("#newTheadTr td").text("");

                        // console.log(tbl_rqlkt.column(14, { page: 'current' }).data().sumAfterSearch());
                        var newTheadTr_td = $("#newTheadTr").find("td");
                        var search_col;
                        var sum_search_col;
                        for (jk = 4; jk < hsd.length + 5; jk++) {
                            search_col = tbl_rqlkt.column(jk, { page: 'current' }).data();
                            //console.log(search_col);
                            sum_search_col = 0;
                            for (mn = 0; mn < search_col.length; mn++) {
                                if (search_col[mn] != "")
                                    sum_search_col += parseFloat(search_col[mn].replace(",", ""));
                            }

                            newTheadTr_td[jk].append(
                                numberWithCommas(
                                    sum_search_col
                                    //tbl_rqlkt.column(jk, { page: 'current' }).data().sumAfterSearch()
                                )
                            );
                        }
                    } else {
                        $("#newTheadTr").remove();
                    }
                });
            }

        },
        error: function (responsive) {
        }
    }).done(function () {
        //$("#div-wait").hide();
    });
}



var tableToExcel = (function () {
    var uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines /></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
        , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
        , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
    return function (table, name) {
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
        window.location.href = uri + base64(format(template, ctx))
    }
})()
function fnExcelReport(tableId, name) {
    var tab_text = "<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange; var j = 0;
    tab = document.getElementById(tableId); // id of table

    for (j = 0; j < tab.rows.length; j++) {
        tab_text += tab.rows[j].innerHTML + "</tr>";
        if (j != tab.rows.length - 1) {
            tab_text += "<tr>";
        }
        //tab_text=tab_text+"</tr>";
        //console.log(tab_text);
    }

    tab_text = tab_text + "</table>";
    tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
    tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var sa;
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
        txtArea1.document.open("txt/html", "replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus();
        sa = txtArea1.document.execCommand("SaveAs", true, name + ".xls");

    }
    else {//other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));

    }
    return (sa);
}
function formatTextDate2Date(textdate, hansudung_code) {
    var td = "";
    td = (textdate.length < 8) ? "0" + textdate : textdate;

    return [
        moment(new Date(td.substring(4, 8) + "-" + td.substring(2, 4) + "-" + td.substring(0, 2))).format("DD/MM/YYYY")
        , moment(new Date(td.substring(4, 8) + "-" + td.substring(2, 4) + "-" + td.substring(0, 2))).add(parseInt(hansudung_code), 'M').format("DD/MM/YYYY")
    ];
}

function fncSplitHSD(shsd) {
    return [shsd.substring(0, 4), shsd.substring(4, 8)];


}

function fncTinhCanhBaoHanSuDung(cbNgaySanXuat, cbHanSuDung, cbThang) {
    var _cbNgaySanXuat = new Date(cbNgaySanXuat.substring(4, 8), parseInt(cbNgaySanXuat.substring(2, 4)) - 1, cbNgaySanXuat.substring(0, 2));
    //console.log(_cbNgaySanXuat);
    //console.log(_cbNgaySanXuat.getMonth());
    _cbNgaySanXuat = _cbNgaySanXuat.setMonth(_cbNgaySanXuat.getMonth() + 1 + parseInt(cbHanSuDung) - parseInt(cbThang));
    var cbDateNow = new Date();
    //console.log(_cbNgaySanXuat +" & " + cbDateNow);
    if ((cbDateNow - _cbNgaySanXuat) > 0) {
        return "color-red";
    }
    return "";
}