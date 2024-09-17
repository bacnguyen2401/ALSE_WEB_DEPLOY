var Flt_Date = "";
var Flt_Time = "";
var destMawb = "";
var destHawb = "";
var estPcs = "";
var estGw = "";
var estGwVol = "";
var fwd = "";
var po = "";
var shipper = "";
var cnee = "";
var commodity = "";
var atadate = "";
var doDnn = "";
var modelNo = "";
var cipl = "";
var destTransit = "";
var intemdhl = "";
var remark = "";
var dataInputBooks = { items: [] };
var ajaxGet = { "get": "1" };
var jsonDataGet = JSON.stringify({ ajaxGet });

$(document).ready(function () {
    fncLoad();
    fncClick();
});

function fncLoad() {
    var qs_mawb = getParameterByName("MAWB");
    if (qs_mawb !== null && qs_mawb !== "") {
        $.ajax({
            type: "POST",
            url: "InputExcelBook.aspx/reInputBookingsByID",
            data: jsonDataGet,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: ReBooksSuccess,
            error: ReBooksError
           
        })
        $("#btn-input").remove();
    }
    else {
        $("#btn-update").remove();
        $("#btn-delete").remove();
        var data = [
            ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ];
        $('#div-input').handsontable({
            data: data,
            minSpareRows: 20,
            colWidths: [100, 100, 100, 100, 70, 100, 100, 70, 70, 70, 80, 100, 100, 100, 100, 100, 80, 100, 100, 100, 100, 100],
            colHeaders: true,
            colHeaders: [
                "MAWB"
                , "HAWB"
                , "FLT_No"
                , "FLT_Date"
                , "FLT_Time"
                , "DestMAWB"
                , "DestHAWB"
                , "EST_PCS"
                , "EST_GW"
                , "EST_VOL"
                , "FWD"
                , "PO"
                , "SHIPPER"
                , "CNEE"
                , "COMMODITY"
                , "ATA_DATETIME"
                , "DO_DNN"
                , "ModelNo"
                , "CIPL"
                , "DestTRANSIT"
                , "REMARK"
                , "In Tem"
            ],

            rowHeaders: true,
            contextMenu: false
        });
    }
}

function fncClick() {
    $("#btn-close").click(function () {
        window.close();
    })
    $("#btn-print").click(function () {
        var qs_mawb = getParameterByName("MAWB");

        var attrMAWB = $(this).attr("somawb");
        var attrDestMAWB = $(this).attr("attrDestMAWB");
        var html_printlabel = "";
        var ajaxGet = { "get": qs_mawb };
        jsonData = JSON.stringify({ ajaxGet });
        //$("#div-wait").show();
        var html_sub_Plan = "";
        $.ajax({
            type: "POST",
            url: "QuanLyHangXuat.aspx/ReLabelMAWBViews",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d)
                var html_inlabel = "";
                checkPrint = true;
                checkFWD = "";
                html_printlabel = "";
                $.each(d, function (key, val) {
                    if (val.DestHAWB == "") {
                        alert("Vui lòng nhập DEST cho HAWB: " + val.HAWB);
                        checkPrint = false;
                        return false;
                    }
                    checkFWD = val.FWD;
                    if (checkFWD == "EFL") {

                        var sizeAirLine = ""
                        if (val.AirlinesName.length > 13) {
                            sizeAirLine = "sizeAirline18"
                        } else {
                            sizeAirLine = "sizeAirline26"
                        }

                        html_printlabel += "<div class=\"page myPageBreak\">";
                        html_printlabel += "<div class=\"div-tem-uli-container\">";
                        html_printlabel += "<div class=\"top\">";
                        html_printlabel += "<div class=\"top-airline\">";
                        html_printlabel += "<span class=\"span-airline\">AIRLINE</span>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"title-mawb " + sizeAirLine + "\">";
                        html_printlabel += "" + val.AirlinesName + "";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"top-barcode-mawb\">";
                        html_printlabel += "<span><svg id=\"barcodeEPL\" class=\"barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + val.MAWB + "\"></svg></span>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"mid\">";
                        html_printlabel += "<div class=\"top-airline\">";
                        html_printlabel += "<span class=\"span-airline\">AIRWAYBILL NO</span>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"title-mawb\">";
                        html_printlabel += "" + tachMAWB(val.MAWB) + "";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"span-airline\">";
                        html_printlabel += "<span>DESTINATION</span>  <span class=\"span-padding\">ORIGIN</span>  <span>TOTAL NO OF PIECES</span>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"span-airline\">";
                        html_printlabel += "<span class=\"destall\">" + val.DestMAWB + "</span>  <span class=\"destall destallorg\">HAN</span>  <span class=\"destall destalltotal\">" + val.EST_PCSTotal + "</span>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"span-airline\">";
                        html_printlabel += "EXPOLANKA FREIGHT (VIET NAM)";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"span-airline\">";
                        html_printlabel += "<span>HOUSE AIRWAYBILL NO</span>  <span class=\"span-padding\">H.DEST</span>  <span>H.PCS</span>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"span-airline\">";
                        html_printlabel += "<span class=\"destallHAWB\">" + val.HAWB + "</span>  <span class=\"destallHAWB destallHAWBDesc\">" + val.DestHAWB + "</span>  <span class=\"destallHAWB destallHAWBDesc\">" + val.EST_PCS + "</span>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"top-barcode-mawb\">";
                        html_printlabel += "<span><svg id=\"barcodeEPL\" class=\"barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + val.HAWB + "\"></svg></span>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                    } else if (checkFWD == "ULI") {
                        var html_font__size = ""
                        if (val.AirlinesName.length > 16) {
                            html_font__size = "font__size20px"
                        }
                        html_printlabel += "<div class=\"pageULI\">";
                        html_printlabel += "<div class=\"TemULI myPageBreak\" >";
                        html_printlabel += "<div class=\"TemULI__border\" >";
                        html_printlabel += "<div class=\"TemULI__border-header\">";
                        html_printlabel += "<div class=\"TemULI__border-header--chuyenbay\">";

                        html_printlabel += "<div class=\"TemULI__border-header--item " + html_font__size + "\">";
                        html_printlabel += "" + val.AirlinesName + "";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-header--machuyenbay\">";
                        html_printlabel += "<div class=\"TemULI__border-header--item\">";
                        html_printlabel += "" + val.IATADesignator + "";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-mawb\">";
                        html_printlabel += "<div class=\"TemULI__border-mawb--item\">";
                        html_printlabel += "AIR WAYBILL NO:";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-mawb--item TemULI__border-mawb--item--child\">";
                        html_printlabel += "" + tachMAWB(val.MAWB) + "";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-mawb--item\">";
                        html_printlabel += "<svg id=\"barcodeULI-MAWB\" class=\"barcode TemULI__border-mawb--item-barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + val.MAWB + "\"></svg>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-origin\">";
                        html_printlabel += "<div class=\"TemULI__border-origin--item\">";
                        html_printlabel += "<div class=\"TemULI__border-origin--item--tilte\">";
                        html_printlabel += "ORIGIN:";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-origin--item--child\">";
                        html_printlabel += "HAN";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-origin--item\">";
                        html_printlabel += "<div class=\"TemULI__border-origin--item--tilte\">";
                        html_printlabel += "Destination:";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-origin--item--child\">";
                        html_printlabel += "" + val.DestMAWB + "";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-origin--item\">";
                        html_printlabel += "<div class=\"TemULI__border-origin--item--tilte\">";
                        html_printlabel += "Pieces:";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-origin--item--child\">";
                        html_printlabel += "" + val.EST_PCSTotal + "";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-img\">";
                        html_printlabel += "<img src=\"images/imagesUNI/UNIQUE.jpg\" alt=\"Alternate Text\" />";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-hawb\">";
                        html_printlabel += "<div class=\"TemULI__border-hawb--left\">";
                        html_printlabel += "<div class=\"TemULI__border-hawb--left--item\">";
                        html_printlabel += "HAWB BILL NO:";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-hawb--left--item\">";
                        html_printlabel += "" + val.HAWB + "";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-hawb--left--item\">";
                        html_printlabel += "<svg id=\"barcodeULI-HAWB\" class=\"barcode\" jsbarcode-format=\"CODE39\" jsbarcode-value=\"" + val.HAWB + "\"></svg>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-hawb--right\">";
                        html_printlabel += "<div class=\"TemULI__border-hawb--right--header\">";
                        html_printlabel += "PO NUMBER";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-hawb--right--body\">";
                        html_printlabel += "<div class=\"TemULI__border-hawb--right--body--left\">";
                        html_printlabel += "<div class=\"TemULI__border-hawb--right--body--item\">" + val.PO + "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border-hawb--right--body--right\">";
                        html_printlabel += "<div class=\"TemULI__border-hawb--right--body--item\">" + val.EST_PCS_HAWB + "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border--footer\" >";
                        html_printlabel += "<div class=\"TemULI__border--footer--left\" >";
                        html_printlabel += "<div>HAWB DEST:</div>";
                        html_printlabel += "<div class=\"font-size33\">" + val.DestHAWB + "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "<div class=\"TemULI__border--footer--right\" >";
                        html_printlabel += "<div>Number of HAWB:</div>";
                        html_printlabel += "<div class=\"font-size33\">" + val.EST_PCS_HAWB + "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                        html_printlabel += "</div>";
                    } else {
                        alert("FWD: " + checkFWD + " chưa có tem in");
                        checkPrint = false;
                        return false;
                    }
                });
                //console.log(checkFWD);
                if (checkFWD == "EFL") {
                    $("#temIn").removeClass("noneEFL");
                    $("#temULI").removeClass("noneEFL");
                    $("#temIn").addClass("noneULI");
                    $("#div-TrangThaiHangXuat").removeClass("blockPage");
                    $("#div-TrangThaiHangXuat").addClass("nonePage");
                    $("#temIn").empty().append(html_printlabel)
                    $("#temULI").empty();
                } else if (checkFWD == "ULI") {
                    $("#temULI").removeClass("noneULI");
                    $("#temIn").removeClass("noneULI");
                    $("#temULI").addClass("noneEFL");
                    $("#div-TrangThaiHangXuat").removeClass("blockPage");
                    $("#div-TrangThaiHangXuat").addClass("nonePage");
                    $("#temULI").empty().append(html_printlabel);
                    $("#temIn").empty();
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
        });
        JsBarcode(".barcode").init();

        if (checkPrint == true) {

            setTimeout(function () {
                window.print();
            }, 250);

        }
    });


    $("#btn-input").click(function () {
        hawb = "";
        mawb = "";
        fltNo = "";
        Flt_Date = "";
        Flt_Time = "";
        destHawb = "";
        destMawb = "";
        estPcs = "";
        estGw = "";
        estGwVol = "";
        fwd = "";
        po = "";
        shipper = "";
        cnee = "";
        commodity = "";
        atadate = "";
        doDnn = "";
        modelNo = "";
        cipl = "";
        destTransit = "";
        remark = "";
        intemdhl = "";
        var dataInputBooks = { items: [] };
        $('#div-input table.htCore tbody tr').each(function () {
            //mawb = $(this).find('td:nth-child(2)').text().replace("-", "").split(" ").join('');
            mawb = $(this).find('td:nth-child(2)').text().split("-").join('').split(" ").join('');;
            hawb = $(this).find('td:nth-child(3)').text();
            fltNo = $(this).find('td:nth-child(4)').text();
            Flt_Date = dmy2ymd($(this).find('td:nth-child(5)').text());
            Flt_Time = $(this).find('td:nth-child(6)').text();
            destMawb = $(this).find('td:nth-child(7)').text();
            destHawb = $(this).find('td:nth-child(8)').text();
            estPcs = $(this).find('td:nth-child(9)').text();
            estGw = $(this).find('td:nth-child(10)').text();
            estGwVol = $(this).find('td:nth-child(11)').text().trim();
            fwd = $(this).find('td:nth-child(12)').text();
            po = $(this).find('td:nth-child(13)').text();
            shipper = $(this).find('td:nth-child(14)').text();
            cnee = $(this).find('td:nth-child(15)').text();
            commodity = $(this).find('td:nth-child(16)').text();
            atadate = dmy2ymd($(this).find('td:nth-child(17)').text());
            doDnn = $(this).find('td:nth-child(18)').text();
            modelNo = $(this).find('td:nth-child(19)').text();
            cipl = $(this).find('td:nth-child(20)').text();
            destTransit = $(this).find('td:nth-child(21)').text();
            remark = $(this).find('td:nth-child(22)').text();
            intemdhl = $(this).find('td:nth-child(23)').text();

            if (atadate == "") {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();

                today = yyyy + '/' + mm + '/' + dd;
                atadate = today;
            }

            if (mawb != "") {
                dataInputBooks.items.push(
                    {
                        "hawb": hawb,
                        "mawb": mawb,
                        "fltNo": fltNo,
                        "Flt_Date": Flt_Date,
                        "Flt_Time": Flt_Time,
                        "destHawb": destHawb,
                        "destMawb": destMawb,
                        "estPcs": estPcs,
                        "estGw": estGw,
                        "estGwVol": estGwVol,
                        "fwd": fwd,
                        "po": po,
                        "shipper": shipper,
                        "cnee": cnee,
                        "commodity": commodity,
                        "atadate": atadate,
                        "doDnn": doDnn,
                        "modelNo": modelNo,
                        "cipl": cipl,
                        "remark": remark,
                        "destTransit": destTransit,
                        "intemdhl": intemdhl,
                    }
                );
            }
        })
        var jsonData = JSON.stringify({ dataInputBooks });
        $.ajax({
            type: "POST",
            url: "InputExcelBook.aspx/inputBookings",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: InputExcelBookingSuccess,
            error: InputExcelBookingError
        })
    });


    $("#btn-update").click(function () {
        hawb = "";
        mawb = "";
        fltNo = "";
        Flt_Date = "";
        Flt_Time = "";
        destHawb = "";
        destMawb = "";
        estPcs = "";
        estGw = "";
        estGwVol = "";
        fwd = "";
        po = "";
        shipper = "";
        cnee = "";
        commodity = "";
        atadate = "";
        doDnn = "";
        modelNo = "";
        cipl = "";
        destTransit = "";
        remark = "";
        intemdhl = "";
        var dataInputBooks = { items: [] };
        $('#div-input table.htCore tbody tr').each(function () {
            mawb = $(this).find('td:nth-child(2)').text().split("-").join('').split(" ").join('');
            hawb = $(this).find('td:nth-child(3)').text();
            fltNo = $(this).find('td:nth-child(4)').text();
            Flt_Date = dmy2ymd($(this).find('td:nth-child(5)').text());
            Flt_Time = $(this).find('td:nth-child(6)').text();
            destMawb = $(this).find('td:nth-child(7)').text();
            destHawb = $(this).find('td:nth-child(8)').text();
            estPcs = $(this).find('td:nth-child(9)').text();
            estGw = $(this).find('td:nth-child(10)').text();
            estGwVol = $(this).find('td:nth-child(11)').text();
            fwd = $(this).find('td:nth-child(12)').text();
            po = $(this).find('td:nth-child(13)').text();
            shipper = $(this).find('td:nth-child(14)').text();
            cnee = $(this).find('td:nth-child(15)').text();
            commodity = $(this).find('td:nth-child(16)').text();
            atadate = dmy2ymd($(this).find('td:nth-child(17)').text());
            doDnn = $(this).find('td:nth-child(18)').text();
            modelNo = $(this).find('td:nth-child(19)').text();
            cipl = $(this).find('td:nth-child(20)').text();
            destTransit = $(this).find('td:nth-child(21)').text();
            remark = $(this).find('td:nth-child(22)').text();
            intemdhl = $(this).find('td:nth-child(23)').text();

            if (atadate == "") {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();

                today = yyyy + '/' + mm + '/' + dd;
                atadate = today;
            }

            if (mawb != "") {
                dataInputBooks.items.push(
                    {
                        "hawb": hawb,
                        "mawb": mawb,
                        "fltNo": fltNo,
                        "Flt_Date": Flt_Date,
                        "Flt_Time": Flt_Time,
                        "destHawb": destHawb,
                        "destMawb": destMawb,
                        "estPcs": estPcs,
                        "estGw": estGw,
                        "estGwVol": estGwVol,
                        "fwd": fwd,
                        "po": po,
                        "shipper": shipper,
                        "cnee": cnee,
                        "commodity": commodity,
                        "atadate": atadate,
                        "doDnn": doDnn,
                        "modelNo": modelNo,
                        "cipl": cipl,
                        "remark": remark,
                        "destTransit": destTransit,
                        "intemdhl": intemdhl,
                    }
                );
            }
        })

        var ajaxGet = { "get": "" };
        var jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "InputExcelBook.aspx/deleteMaTheoDoi",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "ok") {
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
        });


        var jsonData = JSON.stringify({ dataInputBooks });
        //console.log(jsonData)
        $.ajax({
            type: "POST",
            url: "InputExcelBook.aspx/updateBookings",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "ok") {
                    alert("update thành công")
                    fncLoad();
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
        });
    });
}

function InputExcelBookingSuccess(response) {
    $("#div-input").handsontable('clear');
    alert(response.d);
    window.location.href = "/QuanLyHangXuat.aspx";
}
function InputExcelBookingError(response) {
    console.log(response.d);
}

function ReBooksSuccess(responsive) {
    var d = responsive.d;
    //console.log(d);

    var dataJson = d;
    //console.log(dataJson);

    $('#div-input').handsontable({
        data: dataJson,
        minSpareRows: 20,
        colWidths: [100, 100, 100, 100, 70, 100, 100, 70, 70, 70, 80, 100, 100, 100, 100, 100, 80, 100, 100, 100, 100],
        columns: [
            {
                data: "mawb",
                type: "text"
            },
            {
                data: "hawb",
                type: "text"
            },
            {
                data: "fltNo",
                type: "text"
            },
            {
                data: "Flt_Date",
                type: "text"
            },
            {
                data: "Flt_Time",
                type: "text"
            },
            {
                data: "destMawb",
                type: "text"
            },
            {
                data: "destHawb",
                type: "text"
            },
            {
                data: "estPcs",
                type: "text"
            },
            {
                data: "estGw",
                type: "text"
            },
            {
                data: "estGwVol",
                type: "text"
            },
            {
                data: "fwd",
                type: "text"
            }
            ,
            {
                data: "po",
                type: "text"
            }
            ,
            {
                data: "shipper",
                type: "text"
            }
            ,
            {
                data: "cnee",
                type: "text"
            }
            ,
            {
                data: "commodity",
                type: "text"
            }
            ,
            {
                data: "atadate",
                type: "text"
            }
            ,
            {
                data: "doDnn",
                type: "text"
            }
            ,
            {
                data: "modelNo",
                type: "text"
            }
            ,
            {
                data: "cipl",
                type: "text"
            }
            ,
            {
                data: "destTransit",
                type: "text"
            }
            ,
            {
                data: "remark",
                type: "text"
            },
            {
                data: "intemdhhl",
                type: "text"
            }
        ],
        colHeaders: true,
        colHeaders: [
            "MAWB"
            , "HAWB"
            , "FLT_No"
            , "FLT_Date"
            , "FLT_Time"
            , "DestMAWB"
            , "DestHAWB"
            , "EST_PCS"
            , "EST_GW"
            , "EST_VOL"
            , "FWD"
            , "PO"
            , "SHIPPER"
            , "CNEE"
            , "COMMODITY"
            , "ATA_DATETIME"
            , "DO_DNN"
            , "ModelNo"
            , "CIPL"
            , "DestTRANSIT"
            , "REMARK"
            , "intemdhl"
        ],

        rowHeaders: true,
        contextMenu: false
    });

}

function ReBooksError(responsive) {
    console.log(responsive.d)
}


function tachMAWB(inputMAWB) {
    var result = ""

    var strMAWBDau = inputMAWB.substring(0, 3);
    var strMAWBGiua = inputMAWB.substring(3, 7);
    var strMAWBCuoi = inputMAWB.substring(7, 11);
    result = strMAWBDau + "-" + strMAWBGiua + " " + strMAWBCuoi;
    return result;
}
