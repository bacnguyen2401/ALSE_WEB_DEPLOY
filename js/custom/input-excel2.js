var dataInputKwes = { items: [] };
var ajaxGet = { "get": "1" };
var jsonDataGet = JSON.stringify({ ajaxGet });
//var data = [];
$(document).ready(function () {


    fn_Load_Pantos();



})
var cnee = "";
var shipper = "";
var pallet = "";
var mawb = "";
var hawb = "";
var flight_no = "";
var flight_date = "";
var flight_time = "";
var flight_des = "";
var remark = "";
var ctn = "";


function fn_Load_Pantos() {
    var qs_mawb = getParameterByName("MAWB");
    if (qs_mawb !== null && qs_mawb !== "") {
        $.ajax({
            type: "POST",
            url: "InputExcel2.aspx/returnKweswMawb",
            data: jsonDataGet,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: RePantosSuccess,
            error: RePantosError
        })
        $("#btn-input").remove();
    } else {
        $("#btn-update").remove();
        $("#btn-delete").remove();
        var data = [
            ["", "", "", "", "", "", "", "", "", "", ""],
        ];
        $('#div-input').handsontable({
            data: data,
            minSpareRows: 10,
            colWidths: [180, 150, 60,60, 130, 100, 100, 100, 100, 100, 100, 200],
            colHeaders: true,
            colHeaders: ["SHIPPER"
                , "CNEE"
                , "PALLET"
                , "CTN"
                , "MAWB"
                , "HAWB"
                , "H.DES"
                , "FLIGHT NO"
                , "FLT. DATE"
                , "FLT. TIME"
                , "FLT DES"
                , "REMARK"],

            rowHeaders: true,
            contextMenu: false
        });
    }



}
var caninput = true;
function fnc_Input_KWE() {
    $('#div-input table.htCore tbody tr').each(function () {
        shipper = $(this).find('td:nth-child(2)').text().replace(/ /g, '');
        cnee  = $(this).find('td:nth-child(3)').text().replace(/ /g, '');
        pallet = $(this).find('td:nth-child(4)').text();
        ctn = $(this).find('td:nth-child(5)').text();
        mawb = $(this).find('td:nth-child(6)').text().replace(/ /g, '');
        hawb = $(this).find('td:nth-child(7)').text().replace(/ /g, '');
        hawb_des = $(this).find('td:nth-child(8)').text().replace(/ /g, '');
        flight_no = $(this).find('td:nth-child(9)').text();
        flight_date = dmy2ymd($(this).find('td:nth-child(10)').text());
        flight_time = $(this).find('td:nth-child(11)').text();
        flight_des = $(this).find('td:nth-child(12)').text();
        remark = $(this).find('td:nth-child(13)').text();


        if (cnee != "") {
            dataInputKwes.items.push(
                {
                    "shipper": shipper,
                    "cnee": cnee,
                    "pallet": pallet,
                    "ctn": ctn,
                    "mawb": mawb,
                    "hawb": hawb,
                    "hawb_des": hawb_des,
                    "flight_no": flight_no,
                    "flight_date": flight_date,
                    "flight_time": flight_time,
                    "flight_des": flight_des,
                    "remark": remark,
                }
            );
        } 


    })

    var jsonData = JSON.stringify({ dataInputKwes });
    $.ajax({
        type: "POST",
        url: "InputExcel2.aspx/inputKwes",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: InputExcelPantosSuccess,
        error: InputExcelPantosError
    })

}


function fnc_Update_KWE() {
    $.ajax({
        type: "POST",
        url: "InputExcel2.aspx/updateKweswMawb",
        data: jsonDataGet,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: UpdateExcelPantosSuccess,
        error: UpdateExcelPantosError
    })

    fnc_Input_KWE();
    location.reload();
}
function fnc_Delete_KWE() {

    if (confirm("Are you sure you want to delete this item?")) {
        $.ajax({
            type: "POST",
            url: "InputExcel2.aspx/updateKweswMawb",
            data: jsonDataGet,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: UpdateExcelPantosSuccess,
            error: UpdateExcelPantosError
        })
    } else {
        return false;
    }
    window.location.href = "QuanLyKHVC2.aspx";

}

function InputExcelPantosSuccess(response) {
    $("#div-input").handsontable('clear');
    alert(response.d);
}
function InputExcelPantosError(response) {
    console.log(response.d);
}
function UpdateExcelPantosSuccess(response) {

    //alert(response.d);
}
function UpdateExcelPantosError(response) {
    console.log(response.d);
}
function RePantosSuccess(responsive) {
    var d = responsive.d;
    var dataJson = d[0].items;
    $('#div-input').handsontable({
        data: dataJson,
        minSpareRows: 10,
        colWidths: [180, 150, 60, 60, 130, 100, 100, 100, 100, 100, 200],
        columns: [
            {
                data: "shipper",
                type: "text" 
            },
            {
                 data: "cnee",
                type: "text"
            },
            {
                data: "pallet",
                type: "text"
            },
            {
                data: "ctn",
                type: "text"
            },
            {
                data: "mawb",
                type: "text"
            },
            {
                data: "hawb",
                type: "text"
            },
            {
                data: "hawb_des",
                type: "text"
            },
            {
                data: "flight_no",
                type: "text"
            },
            {
                data: "flight_date",
                type: "text"
            },
            {
                data: "flight_time",
                type: "text"
            },
            {
                data: "flight_des",
                type: "text"
            },
            {
                data: "remark",
                type: "text"
            }
        ],
        colHeaders: true,
        colHeaders: ["SHIPPER."
            , "CNEE"
            , "PALLET"
            , "CTN"
            , "MAWB"
            , "HAWB"
            , "H.DES"
            , "FLIGHT NO"
            , "FLT. DATE"
            , "FLT. TIME"
            , "FLT DES"
            , "REMARK"],

        rowHeaders: true,
        contextMenu: false
    });

}
function RePantosError(responsive) {

    console.log(responsive.d)
}
