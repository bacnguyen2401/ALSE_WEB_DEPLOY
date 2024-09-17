var ajaxGet = { "get": "1" };
var jsonData = JSON.stringify({ ajaxGet });
var thead = [];
var tbody = [];
var tr = [];
var tr_temp = {};
var table_name = "";
var reFlightDate = "";
var reCutOt = "";
var reCutE = "";
var reSliDate = "";
var reExportDate = "";
var reGw = "";
var reWarehouse = [];
var diff_cutot_exportDate = 0.0;
var diff_cutot_currentDate = 0.0;
var exportDate_d;
var current_d;
var exportDate_d;

///
var statusClass = "";
var mawbClass = "";
var pcsClass = "";
var gwClass = "";
var flightNoClass = "";
var flightDateClass = "";
var flightTimeClass = "";
var cutotClass = "";
var cuteClass = "";
var destClass = "";
var sliDateClass = "";
var sliTimeClass = "";
var truckIdClass = "";
var exportDateClass = "";
var exportTimeClass = "";
var fwdClass = "";
var warehouseClass = "";
var remarkClass = "";

$(document).ready(function () {
    thead = [
        {
            "tr": [{
                "id": "thead-tr1",
                "class": "",
                "attr": "",
                "td": [{
                    "id": "thead-tr1-tdStatus",
                    "class": "status",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value" : "STATUS",
                },
                {
                    "id": "thead-tr1-tdMawb",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "MAWB",
                },
                {
                    "id": "thead-tr1-tdPcs",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "PCS",
                },
                {
                    "id": "thead-tr1-tdGw",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "GW",
                },
                {
                    "id": "thead-tr1-tdFlt",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "FLT",
                },
                {
                    "id": "thead-tr1-tdFltD",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "FLT.D",
                },
                {
                    "id": "thead-tr1-tdFltT",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "FLT.T",
                },
                {
                    "id": "thead-tr1-tdNBA",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "NBA",
                },
                {
                    "id": "thead-tr1-tdALSE",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "ALSE",
                },
                {
                    "id": "thead-tr1-tdDEST",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "DEST",
                },
                {
                    "id": "thead-tr1-tdSliD",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "SLI.D",
                },
                {
                    "id": "thead-tr1-tdSliT",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "SLI.T",
                },
                {
                    "id": "thead-tr1-tdTruckId",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "TRUCK.ID",
                },
                {
                    "id": "thead-tr1-tdExpD",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "EXP.D",
                },
                {
                    "id": "thead-tr1-tdExpT",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "EXP.T",
                },
                {
                    "id": "thead-tr1-tdFwd",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "FWD",
                },
                {
                    "id": "thead-tr1-tdWh",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "WH",
                },
                {
                    "id": "thead-tr1-tdRemark",
                    "class": "",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "REMARK",
                },

                ]
            }

            ]
        }
    ];
    fncLoadExport();
})

function fncLoadExport() {
    $.ajax({
        type: "POST",
        url: "Export.aspx/reExport",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: exportSuccess,
        error: exportError
    })
}

function exportSuccess(responsive) {
    var d = responsive.d[0];
    var exportBooking = d.exportBooking;
    var exportPreAccept = d.exportPreAccept;
    var exportAccepted = d.exportAccepted;
    var exportLoadingOnTruck = d.exportLoadingOnTruck;
    var exportTruckingToNBA = d.exportTruckingToNBA;
    var exportAirPort = d.exportTruckingToNBA;
    var exportComplete = d.exportComplete;
    
    var jsonBooking = {};
    var jsonPreAccept = {};
    var jsonAccept = {};
    var jsonLoadingOnTruck = {};
    var jsonTruckingToNBA = {};
    var jsonAirPort = {};
    var jsonComplete = {};
    var showTheadBit = 0;
   
    // BOOKING  
    if (exportBooking.length > 0) {
        table_name = "tbl-booking";
        jsonBooking.id = table_name;
        jsonBooking.class = "table table-bordered table-export";
        jsonBooking.attr = [{ "attr1": "value" }, { "attr2": "value" }];
        showTheadBit = 1;
        jsonBooking.showThead = showTheadBit;
        jsonBooking.tHead = thead;


        
        $.each(exportBooking, function (i, v) {
            changeTable(v,0,1);
            tr_temp = {
                "id": table_name +"-tbody-tr" + (i + 1),
                "class": "",
                "attr": "",
                "td": [{
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdStatus",
                    "class": "status",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value" : "",
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdMawb",
                    "class": "mawb" + mawbClass ,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.mawb,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdPcs",
                    "class": "pcs" + pcsClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.pcs,
                },
                 {
                     "id": table_name + "-tbody-tr" + (i + 1) + "-tdGw",
                     "class": "gw" + gwClass,
                     "attr": [{ "gw": v.gw }],
                     "colspan": "",
                     "rowspan": "",
                     "value": reGw,
                 },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdFlt",
                    "class": "flightNo" + flightNoClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.flightNo,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdFltD",
                    "class": "flightDate" + flightDateClass,
                    "attr": [{ "flightDate": v.flightDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reFlightDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdFltT",
                    "class": "flightTime" + flightTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.flightTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdNBA",
                    "class": "cutot" + cutotClass,
                    "attr": [{ "cutot": v.cutot }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reCutOt,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdALSE",
                    "class": "cute" + cuteClass,
                    "attr": [{ "cute": v.cute }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reCutE,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdDEST",
                    "class": "dest" + destClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "",
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdSliD",
                    "class": "sliDate" + sliDateClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "",
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdSliT",
                    "class": "sliTime" + sliTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "",
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdTruckId",
                    "class": "truckId " + truckIdClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "",
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdExpD",
                    "class": "exportDate" + exportDateClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "",
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdExpT",
                    "class": "exportTime" + exportTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "",
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdFwd",
                    "class": "fwd" + fwdClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.fwd,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdWh",
                    "class": "warehouse" + warehouseClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reWarehouse[2],
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1)+"-tdRemark",
                    "class": "remark" + remarkClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "",
                },

                ]};
            tr[i] = tr_temp;
        })
        //tbody = [{ tr }];
        jsonBooking.tBody = [{ tr }];
        $("#div-export-status").append(genTable(jsonBooking));
    }
    // END BOOKING

    // PRE ACCEPT
    if (exportPreAccept.length > 0) {
        tr = [];
        table_name = "tbl-pre-accept";
        jsonPreAccept.id = table_name;
        jsonPreAccept.class = "table table-bordered table-export";
        jsonPreAccept.attr = [{ "attr1": "value" }, { "attr2": "value" }];
        if (showTheadBit == 0) {

            showTheadBit = 1;
            jsonPreAccept.showThead = showTheadBit;
        } else {
            jsonPreAccept.showThead = 0;
        }
        
        jsonPreAccept.tHead = thead;



        $.each(exportPreAccept, function (i, v) {
            changeTable(v,0,1);

            tr_temp = {
                "id": table_name + "-tbody-tr" + (i + 1),
                "class": "",
                "attr": "",
                "td": [{
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdStatus",
                    "class": table_name + "-tbody-tr"  + "-tdStatus status",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "",
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdMawb",
                    "class": "mawb" + mawbClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.mawb,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdPcs",
                    "class": "pcs" + pcsClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.pcs,
                },
                 {
                     "id": table_name + "-tbody-tr" + (i + 1) + "-tdGw",
                     "class": "gw" + gwClass,
                     "attr": [{ "gw": v.gw}],
                     "colspan": "",
                     "rowspan": "",
                     "value": reGw,
                 },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFlt",
                    "class": "flightNo" + flightNoClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.flightNo,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFltD",
                    "class": "flightDate" + flightDateClass,
                    "attr": [{ "flightDate": v.flightDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reFlightDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFltT",
                    "class": "flightTime" + flightTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.flightTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdNBA",
                    "class": "cutot" + cutotClass,
                    "attr": [{ "cutot": v.cutot }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reCutOt,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdALSE",
                    "class": "cute" + cuteClass,
                    "attr": [{ "cute": v.cute }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reCutE,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdDEST",
                    "class": "dest" + destClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.dest,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdSliD",
                    "class": "sliDate" + sliDateClass,
                    "attr": [{ "sliDate": v.sliDate}],
                    "colspan": "",
                    "rowspan": "",
                    "value": reSliDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdSliT",
                    "class": "sliTime" + sliTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.sliTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdTruckId",
                    "class": "truckId " + truckIdClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.numberPlate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdExpD",
                    "class": "exportDate" + exportDateClass,
                    "attr": [{ "exportDate": v.exportDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reExportDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdExpT",
                    "class": "exportTime" + exportTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.exportTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFwd",
                    "class": "fwd" + fwdClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.fwd,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdWh",
                    "class": "warehouse" +warehouseClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reWarehouse[2],
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdRemark",
                    "class": "remark" + remarkClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.remark,
                },

                ]
            };
            tr[i] = tr_temp;
        })
        //tbody = [{ tr }];
        jsonPreAccept.tBody = [{ tr }];
        $("#div-export-status").append(genTable(jsonPreAccept));
    }
    // END PRE ACCEPT
  
    //  ACCEPT
    if (exportAccepted.length > 0) {
        tr = [];
        table_name = "tbl-accept";
        jsonAccept.id = table_name;
        jsonAccept.class = "table table-bordered table-export";
        jsonAccept.attr = [{ "attr1": "value" }, { "attr2": "value" }];
        if (showTheadBit == 0) {

            showTheadBit = 1;
            jsonAccept.showThead = showTheadBit;
        } else {
            jsonAccept.showThead = 0;
        }

        jsonAccept.tHead = thead;



        $.each(exportAccepted, function (i, v) {
            changeTable(v,0,1);
            tr_temp = {
                "id": table_name + "-tbody-tr" + (i + 1),
                "class": "",
                "attr": "",
                "td": [{
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdStatus",
                    "class": table_name + "-tbody-tr" + "-tdStatus status",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "",
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdMawb",
                    "class": "mawb" + mawbClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.mawb,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdPcs",
                    "class": "pcs" + pcsClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.pcs,
                },
                 {
                     "id": table_name + "-tbody-tr" + (i + 1) + "-tdGw",
                     "class": "gw" + gwClass,
                     "attr": [{ "gw": v.gw}],
                     "colspan": "",
                     "rowspan": "",
                     "value": reGw,
                 },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFlt",
                    "class": "flightNo" + flightNoClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.flightNo,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFltD",
                    "class": "flightDate" + flightDateClass,
                    "attr": [{ "flightDate": v.flightDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reFlightDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFltT",
                    "class": "flightTime" + flightTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.flightTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdNBA",
                    "class": "cutot" + cutotClass,
                    "attr": [{ "cutot": v.cutot }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reCutOt,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdALSE",
                    "class": "cute" + cuteClass,
                    "attr": [{ "cute": v.cute }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reCutE,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdDEST",
                    "class": "dest" + destClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.dest,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdSliD",
                    "class": "sliDate" + sliDateClass,
                    "attr": [{ "sliDate": v.sliDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reSliDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdSliT",
                    "class": "sliTime" + sliTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.sliTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdTruckId",
                    "class": "truckId " + truckIdClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.numberPlate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdExpD",
                    "class": "exportDate" + exportDateClass,
                    "attr": [{ "exportDate": v.exportDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reExportDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdExpT",
                    "class": "exportTime" + exportTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.exportTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFwd",
                    "class": "fwd" + fwdClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.fwd,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdWh",
                    "class": "warehouse" +warehouseClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reWarehouse[2],
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdRemark",
                    "class": "remark" + remarkClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.remark,
                },

                ]
            };
            tr[i] = tr_temp;
        })
        //tbody = [{ tr }];
        jsonAccept.tBody = [{ tr }];
        $("#div-export-status").append(genTable(jsonAccept));
    }
    //  END ACCEPT

    //  LOADING ON TRUCK
    if (exportLoadingOnTruck.length > 0) {
        tr = [];
        table_name = "tbl-loading-on-truck";
        jsonLoadingOnTruck.id = table_name;
        jsonLoadingOnTruck.class = "table table-bordered table-export";
        jsonLoadingOnTruck.attr = [{ "attr1": "value" }, { "attr2": "value" }];
        if (showTheadBit == 0) {

            showTheadBit = 1;
            jsonLoadingOnTruck.showThead = showTheadBit;
        } else {
            jsonLoadingOnTruck.showThead = 0;
        }

        jsonLoadingOnTruck.tHead = thead;



        $.each(exportLoadingOnTruck, function (i, v) {
            changeTable(v,0,1);
            tr_temp = {
                "id": table_name + "-tbody-tr" + (i + 1),
                "class": "",
                "attr": "",
                "td": [{
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdStatus",
                    "class": table_name + "-tbody-tr" + "-tdStatus status",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "",
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdMawb",
                    "class": "mawb" + mawbClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.mawb,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdPcs",
                    "class": "pcs" + pcsClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.pcs,
                },
                 {
                     "id": table_name + "-tbody-tr" + (i + 1) + "-tdGw",
                     "class": "gw" + gwClass,
                     "attr": [{ "gw": v.gw }],
                     "colspan": "",
                     "rowspan": "",
                     "value": reGw,
                 },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFlt",
                    "class": "flightNo" + flightNoClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.flightNo,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFltD",
                    "class": "flightDate" + flightDateClass,
                    "attr": [{ "flightDate": v.flightNo }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reFlightDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFltT",
                    "class": "flightTime" + flightTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.flightTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdNBA",
                    "class": "cutot" + cutotClass,
                    "attr": [{ "cutot": v.cutot }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reCutOt,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdALSE",
                    "class": "cute" + cuteClass,
                    "attr": [{ "cute": v.cute}],
                    "colspan": "",
                    "rowspan": "",
                    "value": reCutE,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdDEST",
                    "class": "dest" + destClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.dest,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdSliD",
                    "class": "sliDate" + sliDateClass,
                    "attr": [{ "sliDate": v.sliDate}],
                    "colspan": "",
                    "rowspan": "",
                    "value": reSliDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdSliT",
                    "class": "sliTime" + sliTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.sliTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdTruckId",
                    "class": "truckId",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.numberPlate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdExpD",
                    "class": "exportDate" + exportDateClass,
                    "attr": [{ "exportDate": v.exportDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reExportDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdExpT",
                    "class": "exportTime" + exportTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.exportTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFwd",
                    "class": "fwd" + fwdClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.fwd,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdWh",
                    "class": "warehouse" +warehouseClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reWarehouse[2],
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdRemark",
                    "class": "remark" + remarkClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.remark,
                },

                ]
            };
            tr[i] = tr_temp;
        })
        
        jsonLoadingOnTruck.tBody = [{ tr }];
        $("#div-export-status").append(genTable(jsonLoadingOnTruck));
    }
    //  END LOADING ON TRUCK

    //  TRUCKING TO NBA
    if (exportTruckingToNBA.length > 0) {
        tr = [];
        table_name = "tbl-trucking-to-nba";
        jsonTruckingToNBA.id = table_name;
        jsonTruckingToNBA.class = "table table-bordered table-export";
        jsonTruckingToNBA.attr = [{ "attr1": "value" }, { "attr2": "value" }];
        if (showTheadBit == 0) {

            showTheadBit = 1;
            jsonTruckingToNBA.showThead = showTheadBit;
        } else {
            jsonTruckingToNBA.showThead = 0;
        }

        jsonTruckingToNBA.tHead = thead;



        $.each(exportTruckingToNBA, function (i, v) {
            changeTable(v,1,0);
            tr_temp = {
                "id": table_name + "-tbody-tr" + (i + 1),
                "class": "",
                "attr": "",
                "td": [{
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdStatus",
                    "class": table_name + "-tbody-tr" + "-tdStatus status",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "",
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdMawb",
                    "class": "mawb" + mawbClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.mawb,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdPcs",
                    "class": "pcs" + pcsClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.pcs,
                },
                 {
                     "id": table_name + "-tbody-tr" + (i + 1) + "-tdGw",
                     "class": "gw" + gwClass,
                     "attr": [{ "gw": v.gw }],
                     "colspan": "",
                     "rowspan": "",
                     "value": reGw,
                 },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFlt",
                    "class": "flightNo" + flightNoClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.flightNo,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFltD",
                    "class": "flightDate" + flightDateClass,
                    "attr": [{ "flightDate": v.flightDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reFlightDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFltT",
                    "class": "flightTime" + flightTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.flightTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdNBA",
                    "class": "cutot" + cutotClass,
                    "attr": [{ "cutot": v.cutot }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reCutOt,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdALSE",
                    "class": "cute" + cuteClass,
                    "attr": [{ "cute": v.cute }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reCutE,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdDEST",
                    "class": "dest" + destClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.dest,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdSliD",
                    "class": "sliDate" + sliDateClass,
                    "attr": [{ "sliDate": v.sliDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reSliDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdSliT",
                    "class": "sliTime" + sliTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.sliTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdTruckId",
                    "class": "truckId " + truckIdClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.numberPlate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdExpD",
                    "class": "exportDate" + exportDateClass,
                    "attr": [{ "exportDate": v.exportDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reExportDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdExpT",
                    "class": "exportTime" + exportTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.exportTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFwd",
                    "class": "fwd" + fwdClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.fwd,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdWh",
                    "class": "warehouse" +warehouseClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reWarehouse[2],
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdRemark",
                    "class": "remark" + remarkClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.remark,
                },

                ]
            };
            tr[i] = tr_temp;
        })

        jsonTruckingToNBA.tBody = [{ tr }];
        $("#div-export-status").append(genTable(jsonTruckingToNBA));
    }
    //  END TRUCKING TO NBA
    //  AIRPORT
    if (exportAirPort.length > 0) {
        tr = [];
        table_name = "tbl-airport";
        jsonAirPort.id = table_name;
        jsonAirPort.class = "table table-bordered table-export";
        jsonAirPort.attr = [{ "attr1": "value" }, { "attr2": "value" }];
        if (showTheadBit == 0) {

            showTheadBit = 1;
            jsonAirPort.showThead = showTheadBit;
        } else {
            jsonAirPort.showThead = 0;
        }

        jsonAirPort.tHead = thead;



        $.each(exportAirPort, function (i, v) {
            changeTable(v,1,0);
            tr_temp = {
                "id": table_name + "-tbody-tr" + (i + 1),
                "class": "",
                "attr": "",
                "td": [{
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdStatus",
                    "class": table_name + "-tbody-tr" + "-tdStatus status",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "",
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdMawb",
                    "class": "mawb" + mawbClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.mawb,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdPcs",
                    "class": "pcs" + pcsClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.pcs,
                },
                 {
                     "id": table_name + "-tbody-tr" + (i + 1) + "-tdGw",
                     "class": "gw" + gwClass,
                     "attr": [{ "gw": v.gw }],
                     "colspan": "",
                     "rowspan": "",
                     "value": reGw,
                 },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFlt",
                    "class": "flightNo" + flightNoClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.flightNo,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFltD",
                    "class": "flightDate" + flightDateClass,
                    "attr": [{ "flightDate": v.flightDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reFlightDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFltT",
                    "class": "flightTime" + flightTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.flightTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdNBA",
                    "class": "cutot" + cutotClass,
                    "attr": [{ "cutot": v.cutot }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reCutOt,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdALSE",
                    "class": "cute" + cuteClass,
                    "attr": [{ "cute": v.cute }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reCutE,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdDEST",
                    "class": "dest" + destClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.dest,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdSliD",
                    "class": "sliDate" + sliDateClass,
                    "attr": [{ "sliDate": v.sliDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reSliDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdSliT",
                    "class": "sliTime" + sliTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.sliTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdTruckId",
                    "class": "truckId " + truckIdClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.numberPlate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdExpD",
                    "class": "exportDate" + exportDateClass,
                    "attr": [{ "exportDate": v.exportDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reExportDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdExpT",
                    "class": "exportTime" + exportTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.exportTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFwd",
                    "class": "fwd" + fwdClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.fwd,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdWh",
                    "class": "warehouse" +warehouseClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reWarehouse[2],
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdRemark",
                    "class": "remark" + remarkClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.remark,
                },

                ]
            };
            tr[i] = tr_temp;
        })

        jsonAirPort.tBody = [{ tr }];
        $("#div-export-status").append(genTable(jsonAirPort));
    }
    //  END AIRPORT
    //  COMPLETE
    if (exportComplete.length > 0) {
        tr = [];
        table_name = "tbl-complete";
        jsonComplete.id = table_name;
        jsonComplete.class = "table table-bordered table-export";
        jsonComplete.attr = [{ "attr1": "value" }, { "attr2": "value" }];
        if (showTheadBit == 0) {

            showTheadBit = 1;
            jsonComplete.showThead = showTheadBit;
        } else {
            jsonComplete.showThead = 0;
        }

        jsonComplete.tHead = thead;



        $.each(exportComplete, function (i, v) {
            changeTable(v);
            tr_temp = {
                "id": table_name + "-tbody-tr" + (i + 1),
                "class": "",
                "attr": "",
                "td": [{
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdStatus",
                    "class": table_name + "-tbody-tr" + "-tdStatus status",
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": "",
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdMawb",
                    "class": "mawb" + mawbClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.mawb,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdPcs",
                    "class": "pcs" + pcsClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.pcs,
                },
                 {
                     "id": table_name + "-tbody-tr" + (i + 1) + "-tdGw",
                     "class": "gw" + gwClass,
                     "attr": [{ "gw": v.gw }],
                     "colspan": "",
                     "rowspan": "",
                     "value": reGw,
                 },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFlt",
                    "class": "flightNo" + flightNoClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.flightNo,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFltD",
                    "class": "flightDate" + flightDateClass,
                    "attr": [{ "flightDate": v.flightDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reFlightDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFltT",
                    "class": "flightTime" + flightTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.flightTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdNBA",
                    "class": "cutot" + cutotClass,
                    "attr": [{ "cutot": v.cutot }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reCutOt,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdALSE",
                    "class": "cute" + cuteClass,
                    "attr": [{ "cute": v.cute }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reCutE,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdDEST",
                    "class": "dest" + destClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.dest,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdSliD",
                    "class": "sliDate" + sliDateClass,
                    "attr": [{ "sliDate": v.sliDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reSliDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdSliT",
                    "class": "sliTime" + sliTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.sliTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdTruckId",
                    "class": "truckId " + truckIdClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.numberPlate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdExpD",
                    "class": "exportDate" + exportDateClass,
                    "attr": [{ "exportDate": v.exportDate }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reExportDate,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdExpT",
                    "class": "exportTime" + exportTimeClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.exportTime,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdFwd",
                    "class": "fwd" + fwdClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.fwd,
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdWh",
                    "class": "warehouse" +warehouseClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": reWarehouse[2],
                },
                {
                    "id": table_name + "-tbody-tr" + (i + 1) + "-tdRemark",
                    "class": "remark" + remarkClass,
                    "attr": [{ "attr1": "value1" }],
                    "colspan": "",
                    "rowspan": "",
                    "value": v.remark,
                },

                ]
            };
            tr[i] = tr_temp;
        })

        jsonComplete.tBody = [{ tr }];
        $("#div-export-status").append(genTable(jsonComplete));
    }
    //  END COMPLETE
}




function exportError(responsive) {
    d = responsive.d;
    console.log(d);
}

function changeTable(v, colorCutot, colorMawb) {
    statusClass = "";
    mawbClass = "";
    pcsClass = "";
    gwClass = "";
    flightNoClass = "";
    flightDateClass = "";
    flightTimeClass = "";
    cutotClass = "";
    cuteClass = "";
    destClass = "";
    sliDateClass = "";
    sliTimeClass = "";
    truckIdClass = "";
    exportDateClass = "";
    exportTimeClass = "";
    fwdClass = "";
    warehouseClass = "";
    remarkClass = "";
    if (v.gw != "") {
        reGw = numberTextWithCommas(v.gw);
    } else {

        reGw = "";
    }
    

    if (v.flightDate != "") {
        reFlightDate = convertDate(v.flightDate)[1];
    }
    else {
        reFlightDate = "";
    }

    if (v.cutot != "") {
        reCutOt = convertDate(v.cutot)[2];
    } else {
        reCutOt = "";
    }

    if (v.cute != "") {
        reCutE = convertDate(v.cute)[2];
    } else {
        reCutE = "";
    }

    if (v.sliDate != "") {
        reSliDate = convertDate(v.sliDate)[1];
    } else {
        reSliDate = "";
    }

    if (v.exportDate != "") {
        reExportDate = convertDate(v.exportDate)[1];
    } else {
        reExportDate = "";
    }
    
    if (v.warehouse != "") {
        reWarehouse = (v.warehouse).split("|");
        if (reWarehouse[1] != 0) {
            truckIdClass += " background-color-F6F6B1 ";
        }
        if (reWarehouse[0] != 0) {
            warehouseClass += " background-color-F6F6B1 ";
        }

    } else {
        reWarehouse = ["","",""];
    }
    

    // điều kiện cutot
    if (v.cutot != "") {

        var current_d = new Date();
        var cutot_d = new Date(v.cutot);
       
        if (v.exportDate != "") {
             exportDate_d = new Date(v.exportDate);
             diff_cutot_exportDate = (cutot_d - exportDate_d) / 60000;


            if (diff_cutot_exportDate >= 0 && diff_cutot_exportDate <= 120) {
                exportTimeClass = " background-color-pink ";
            } else if (diff_cutot_exportDate > 120 && diff_cutot_exportDate < 300) {
                exportTimeClass = " background-color-F6F6B1 ";
            }
        }

         diff_cutot_currentDate = (cutot_d - current_d) / 60000;

        if (colorCutot == 1) {
            if (diff_cutot_currentDate >= 0 && diff_cutot_currentDate < 120) {
                cutotClass = " background-color-yellow ";

            }
            if (diff_cutot_currentDate < 0) {
                cutotClass = " background-color-red ";
            }
        }

        if (colorMawb == 1) {
            if (diff_cutot_currentDate < 0) {
                mawbClass = " background-color-red ";
            }
            if (diff_cutot_currentDate >= 0 && diff_cutot_currentDate < 120) {
                mawbClass = " background-color-yellow ";

            }
        }

    }
    if (v.cute != "") {


    }
    
}