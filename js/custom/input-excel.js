var dataInputPantos = { items: [] };
var ajaxGet = { "get": "1" };
var jsonDataGet = JSON.stringify({ ajaxGet });
//var data = [];
$(document).ready(function () {
    
    
    fn_Load_Pantos();

     
   
})
var model_no = "";
var cipl = "";
var pallet = "";
var mawb = "";
var hawb = "";
var flight_no = "";
var flight_date = "";
var flight_time = "";
var flight_des = "";
var remark = "";


function fn_Load_Pantos() {
    var qs_mawb = getParameterByName("MAWB");
    if (qs_mawb !== null && qs_mawb !== "") {
        $.ajax({
            type: "POST",
            url: "InputExcel.aspx/returnPantoswMawb",
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
            colWidths: [180, 150, 50, 130, 100, 100, 100, 100, 100, 100, 200],
            colHeaders: true,
            colHeaders: ["MODEL NO./SO"
                , "CIPL/IVOICE"
                , "PALLET"
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
function fnc_Input_Pantos() {
    $('#div-input table.htCore tbody tr').each(function () {
        model_no = $(this).find('td:nth-child(2)').text().replace(/ /g, '');
        cipl = $(this).find('td:nth-child(3)').text().replace(/ /g, '');
        pallet = $(this).find('td:nth-child(4)').text();
        mawb = $(this).find('td:nth-child(5)').text().replace(/ /g, '');
        hawb = $(this).find('td:nth-child(6)').text().replace(/ /g, '');
        hawb_des = $(this).find('td:nth-child(7)').text().replace(/ /g, '');
        flight_no = $(this).find('td:nth-child(8)').text();
        flight_date = dmy2ymd($(this).find('td:nth-child(9)').text());
        flight_time = $(this).find('td:nth-child(10)').text();
        flight_des = $(this).find('td:nth-child(11)').text();
        remark = $(this).find('td:nth-child(12)').text();

        
        if (model_no != "") {
            dataInputPantos.items.push(
                                        {
                                            "model_no": model_no,
                                            "cipl": cipl,
                                            "pallet": pallet,
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
    //console.log(dataInputPantos);
        var jsonData = JSON.stringify({ dataInputPantos });
        $.ajax({
            type: "POST",
            url: "InputExcel.aspx/inputPantos",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: InputExcelPantosSuccess,
            error: InputExcelPantosError
        })
   
}


function fnc_Update_Pantos() {
    $.ajax({
        type: "POST",
        url: "InputExcel.aspx/updatePantoswMawb",
        data: jsonDataGet,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: UpdateExcelPantosSuccess,
        error: UpdateExcelPantosError
    })

    fnc_Input_Pantos();
    location.reload();
}
function fnc_Delete_Pantos() {

    if (confirm("Are you sure you want to delete this item?")) {
        $.ajax({
            type: "POST",
            url: "InputExcel.aspx/updatePantoswMawb",
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
    window.location.href = "QuanLyKHVC.aspx";

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
       colWidths: [180, 150, 50, 130, 100, 100, 100, 100, 100, 200],
       columns:[
       {
           data: "model_no",
           type: "text"
       },
       {
           data: "cipl",
           type: "text"
       },
       {
           data: "pallet",
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
       colHeaders: ["MODEL NO."
           , "CIPL"
           , "PALLET"
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
