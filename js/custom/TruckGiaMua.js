var html_thead = "";
var html_tbody = "";
var ajaxGet;
var d;
var select_Tuyen = [];
var select_DiemX;
$(document).ready(function () {
    LoadTruckGiaMua();
    fncClick();
    fncLoad();
})

function fncLoad() {
    $('#myModalExcel').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });
}
function LoadTruckGiaMua() {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "GiaMua.aspx/LoadGiaMua",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            html_tbody = "";
            $.each(d, function (index, item) {
                html_tbody += "<tr class=\"tr-highlight-hover\">";            
                html_tbody += "<td class=\"giamua-tuyen\" giamua-id=\"" + item.Id + "\">" + item.Tuyen + "</td>";
                html_tbody += "<td class=\"giamua-origin\">" + item.Origin + "</td>";
                html_tbody += "<td class=\"giamua-origin-city\">" + item.OriginCity + "</td>";
                html_tbody += "<td class=\"giamua-destination\">" + item.Destination + "</td>";
                html_tbody += "<td class=\"giamua-destination-city\">" + item.DestinationCity + "</td>";
                html_tbody += "<td>" + item.EquipmentType + "</td>";
                html_tbody += "<td class=\"giamua-sub\">" + item.Sub                         + "</td>";
                html_tbody += "<td>" + item.Mode                        + "</td>";
                html_tbody += "<td>" + item.ServiceType                 + "</td>";
                
                html_tbody += "<td>" + item.ServiceGroup                + "</td>";
               
                html_tbody += "<td>" + item.LeadTime                    + "</td>";
                html_tbody += "<td>" + item.TheTich                     + "</td>";
                html_tbody += "<td>" + numberTextWithCommas(item.TaiTrong)                    + "</td>";
                html_tbody += "<td>" + item.KichThuoc_Dai + "x" + item.KichThuoc_Rong + "x" + item.KichThuoc_Cao        + "</td>";                
                html_tbody += "<td>" + item.MaNhaCungCap                + "</td>";
                html_tbody += "<td class=\"giamua-trucking-code\">" + numberTextWithCommas(item.TruckingCost)                + "</td>";
                html_tbody += "<td>" + item.FreeDetention               + "</td>";
                html_tbody += "<td>" + numberTextWithCommas(item.DetentionCost)               + "</td>";
                html_tbody += "<td class=\"giamua-maximum-dention-cost\">" + numberTextWithCommas(item.MaximumDentionCost)          + "</td>";
                html_tbody += "<td>" + numberTextWithCommas(item.HandlingCost)                + "</td>";
                html_tbody += "<td>" + numberTextWithCommas(item.CustomsSuperviseCost)        + "</td>";
                html_tbody += "<td class=\giamua-customs-supervise-cost-redcd\">" + numberTextWithCommas(item.CustomsSuperviseCost_RedCD)  + "</td>";
                html_tbody += "<td>" + numberTextWithCommas(item.LoadingUnloadingCost)        + "</td>";
                html_tbody += "<td class=\"giamua-remark\" remark=\"" + item.Remark + "\">" + "Xem"                   + "</td>";
                html_tbody += "</tr>";
            })
            $("#tbl-giamua thead").show();
            $("#tbl-giamua tbody").empty();
            $("#tbl-giamua tbody").append(html_tbody);

            $(".giamua-sub").hide();
            var scrollYHeight = window.innerHeight - 300;

            
            $('#tbl-giamua').DataTable({
                "retrieve": true,
                "scrollX": true,
                "scrollY": scrollYHeight.toString() + "px",
                "scrollCollapse": true,
                "responsive": true,
                "paging": false,
                "language": {
                    "decimal": ",",
                    "thousands": "."
                },
                //"fixedColumns": {
                //    "leftColumns": 6,
                //    "rightColumns": 1,
                //}
            });
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}
function fncClick() {
    $("#btn-giamua-tracuu").click(function () {
        window.location.href = "TraCuu.aspx";
    })
    $("#btn-giamua-themmoi").click(function () {
        fncShowSpreadSheet( 0, {});
    })
    $("#myModalExcel").on("click", "#btn-myModalExcel-xoa", function () {

        // BEGIN AJAX LOAD 
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet = { "get": $(this).attr("giamua-id") };
        jsonData = JSON.stringify({ ajaxGet });
        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa giá mua này?',
            text: "Hành động này không thể khôi phục lại!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',

            confirmButtonText: 'Đồng ý, xóa giá mua!',
            cancelButtonText: 'Hủy'
        }).then(function () {

            $.ajax({
                type: "POST",
                url: "GiaMua.aspx/XoaGiaMua",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    //console.log(d);
                    LoadTruckGiaMua();
                    $("#myModalExcel").modal("hide");
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {

            });

            })


    /// END AJAX LOAD

    })
    $("#myModalExcel").on("click", "#btn-myModalExcel-luu", function () {
        //$("#div-wait").show();
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var giamua_id = $(this).attr("giamua-id");
        var data = spreadsheet.toJSON().sheets[0].rows;
        var fncIU = "ThemGiaMua";
        if (giamua_id != 0 && giamua_id != "") {
            fncIU = "SuaGiaMua";
        }
        data = data.splice(1, data.length - 1);
        dataInput = [];
        var error_alert = "";
        var cellValue = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        var cells;

        //console.log(data);
        data.forEach(function (dataItem, dataIndex) {
            // clear biến value
            cellValue = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
            // end clear biến value
            cells = dataItem.cells;
            //console.log(cells);
            cells.forEach(function (cellItem, cellIndex) {
                cellValue[cellIndex] = cells[cellIndex].value;
            }
            )

            dataInput.push(
                {
                    "Id": giamua_id,
                    "Tuyen": String(cellValue[0]).trim(),
                    "Sub": String(cellValue[1]).trim(),
                    "Mode": String(cellValue[2]).trim(),
                    "ServiceType": String(cellValue[3]).trim(),
                    "Origin": String(cellValue[4]).trim(),
                    "OriginCity": String(cellValue[5]).trim(),
                    "Destination": String(cellValue[6]).trim(),
                    "DestinationCity": String(cellValue[7]).trim(),
                    "ServiceGroup": String(cellValue[8]).trim(),
                    "EquipmentType": String(cellValue[9]).trim(),
                    "Leadtime": String(cellValue[10]).trim(),
                    "TheTich": String(cellValue[11]).trim(),
                    "TaiTrong": String(cellValue[12]).trim(),
                    "KichThuoc_Dai": (String(cellValue[13]).trim().replace(/ /g, '')).split("x")[0],
                    "KichThuoc_Rong": (String(cellValue[13]).trim().replace(/ /g, '')).split("x")[1],
                    "KichThuoc_Cao": (String(cellValue[13]).trim().replace(/ /g, '')).split("x")[2],
                    "MaNhaCungCap": String(cellValue[14]).trim(),
                    "TruckingCost": String(cellValue[15]).trim(),
                    "FreeDetention": String(cellValue[16]).trim(),
                    "DetentionCost": String(cellValue[17]).trim(),
                    "MaximumDentionCost": String(cellValue[18]).trim(),
                    "HandlingCost": String(cellValue[19]).trim(),
                    "CustomsSuperviseCost": String(cellValue[20]).trim(),
                    "CustomsSuperviseCost_RedCD": String(cellValue[21]).trim(),
                    "LoadingUnloadingCost": String(cellValue[22]).trim(),
                    "Remark": String(cellValue[23]).trim(),
                    "NguoiTao": "",
                    "NgayTao": "",
                    "NguoiSua": "",
                    "NgaySua": "",
                }
            );
        })

        var jsonData = JSON.stringify({ dataInput });
    
        $.ajax({
            type: "POST",
            url: "GiaMua.aspx/" + fncIU,
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                //console.log(responsive.d);
                d = responsive.d;
                //toast({
                //    type: 'success',
                //    title: 'Thêm mới thành công'
                //})
                LoadTruckGiaMua();
                $("#myModalExcel").modal("hide");
            },
            error: function () {
                alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
            }
        }).done(function () {
            //$("#div-wait").hide();
        })
       
    })

    $("#tbl-giamua_wrapper").on("click", ".giamua-tuyen", function () {
        //alert($(this).attr("giamua-id"));
        var g_giamuaid = $(this).attr("giamua-id");
        ajaxGet = { "get": g_giamuaid };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "GiaMua.aspx/LoadGiaMua",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;

                var gEditData = {
                    
                    cells: [
                        { value:   d[0].Tuyen, textAlign: "center" }
                        , { value: d[0].Sub, textAlign: "center" }
                        , { value: d[0].Mode, textAlign: "center" }
                        , { value: d[0].ServiceType, textAlign: "center" }
                        , { value: d[0].Origin, textAlign: "center" }
                        , { value: d[0].OriginCity, textAlign: "center" }
                        , { value: d[0].Destination, textAlign: "center" }
                        , { value: d[0].DestinationCity, textAlign: "center" }
                        , { value: d[0].ServiceGroup, textAlign: "center" }
                        , { value: d[0].EquipmentType, textAlign: "center" }
                        , { value: d[0].LeadTime, textAlign: "center" }
                        , { value: d[0].TheTich, textAlign: "center" }
                        , { value: d[0].TaiTrong, textAlign: "center" }
                        , { value: (d[0].KichThuoc_Dai + "x" + d[0].KichThuoc_Rong + "x" + d[0].KichThuoc_Cao), textAlign: "center" }
                        , { value: d[0].MaNhaCungCap, textAlign: "center" }
                        , { value: d[0].TruckingCost, textAlign: "center" }
                        , { value: d[0].FreeDetention, textAlign: "center" }
                        , { value: d[0].DetentionCost, textAlign: "center" }
                        , { value: d[0].MaximumDentionCost, textAlign: "center" }
                        , { value: d[0].HandlingCost, textAlign: "center" }
                        , { value: d[0].CustomsSuperviseCost, textAlign: "center" }
                        , { value: d[0].CustomsSuperviseCost_RedCD, textAlign: "center" }
                        , { value: d[0].LoadingUnloadingCost, textAlign: "center" }
                        , { value: d[0].Remark, textAlign: "center" }

                    ]
                };
                fncShowSpreadSheet(g_giamuaid, gEditData);
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
    })

    $("#tbl-giamua_wrapper").on("click", ".giamua-remark", function () {
        Swal.fire({
            title: "Remark!",
            text: $(this).attr("remark"),
            type: 'warning',

        })
    })
}

function fncShowSpreadSheet(giaMuaId, editData) {
    var sRows = 100;
    $("#myModalExcel-Title").text("Thêm Mới");
    $("#btn-myModalExcel-luu").attr("giamua-id", giaMuaId )
    $("#btn-myModalExcel-xoa").attr("giamua-id", giaMuaId)
    $("#btn-myModalExcel-xoa").hide();
    if (!jQuery.isEmptyObject(editData)) {
        $("#btn-myModalExcel-xoa").show();
        sRows = 2;    
        $("#myModalExcel-Title").text("Chỉnh sửa Tuyến: " + editData.cells[0].value );
    }
    $("#myModalExcel").modal("show");
    $("#spreadsheet").empty();
    $("#spreadsheet").kendoSpreadsheet({
        columns: 24,
        rows: sRows,
        toolbar: false,
        sheetsbar: false,
        render: function (e) {
            // do custom height calculations to determine desired height
            var height = window.innerHeight - 150;
            e.sender.element.innerHeight(height);
        },
    });
    var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
    var sheet = spreadsheet.activeSheet();
    sheet.range(kendo.spreadsheet.SHEETREF).clear();
    //sheet.range("A1:X1").enable(false);
    //sheet.range("A1:X1").wrap(true);
    $(window).trigger("resize");
    spreadsheet.fromJSON({
        sheets: [{
            name: "Giá Mua",
            //mergedCells: [
            //    "A1:G1"
            //],
            freezePane: {
                rowSplit: 1
            },
            rows: [{
                height: 70,
                cells: [
                    { value: "Tuyến", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)", bold: "true", wrap: true }
                    , { value: "Sub", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Mode", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Service Type", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Origin", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Origin City", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Destination", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Destination City", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Service Group", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Equipment Type", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Lead time(Hr)", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Thể tích", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Tải trọng", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)", bold: "true", wrap: true }
                    , { value: "Dimention of Truck box (m) Dài x Rộng x Cao", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)", bold: "true", wrap: true }
                    , { value: "Mã nhà cung cấp", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Trucking cost", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Free Detention(Min)", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Detention cost (hr)", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Maximum Dention cost (day)", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Handling cost", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Customs supervise cost", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Customs supervise cost (red CD)", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)" , bold: "true", wrap: true }
                    , { value: "Loading/Unloading cost", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)", bold: "true", wrap: true }
                    , { value: "Remark", background: "rgb(167,214,255)", textAlign: "center",verticalAlign: "center", color: "rgb(0,62,117)", bold: "true", wrap: true }

                ]
            },
                editData

            ],
            columns: [
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },
                { width: 100 },

            ]
        }]
    });
   
   
}