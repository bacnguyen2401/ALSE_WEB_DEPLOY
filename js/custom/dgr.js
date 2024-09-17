var addrow_ctns = 0;
var addrow_overpack = 0;
var addrow_pallet = 0;
var ajaxGet = { get: "1" };
var ajaxInputActivity;
var arrTempData = {};
var color_cutnba = "";
var color_rqst_rcv = "";
var count_item = 0;
var ctns_rowspan = 0;
var d;
var data;
var dataInput = { items: [] };
var fileitem = "";
var html_imgzone = "";
var img_status = "";
var imgdata;
var join_ctns = [];
var join_ctns_temp = {};
var join_overpack = [];
var join_overpack_temp = {};
var join_pallet = [];
var join_pallet_temp = {};
var last_ctns_id_value = "";
var last_ctns_value = "";
var last_netweight_ctns_value = "";
var last_netweight_plts_value = "";
var last_overpack_id_value = "";
var last_overpack_value = "";
var last_pallet_id_value = "";
var last_pallet_value = "";
var mnf_mawb = "";
var mnf_msg = "";
var netweight_ctns_sum = 0.0;
var netweight_plts_sum = 0.0;
var overpack_rowspan = 0;
var pallet_rowspan = 0;
var r_sub = "";
var r_tbody = "";
var r_tbody_sub = "";
var s_mawb;
var tbl_dgr_tbody = "";
var tbl_dgr_thead = "";
var tmppath = "";
var count_alert_pallet = 0;
var temp_empty_overpack = 0;

$(document).ready(function () {
    //$(window).on("resize", function () { console.log("đã resize"); });
    //$(window).on("click", function () { console.log("đã click"); });
    fncLoadTable();
    fncButtonClick();
    fncMasked();
    loadBtnThongKeSanLuongDG();
    LoadThongKeSanLuong();
    LoadThongKeSanLuongDGYear();

    //$('#thongKeSanLuongDG').on('hidden.bs.modal', function (e) {
    //    $("#table-thong-ke-san-luong-DG thead tr").empty();
    //    $("#table-thong-ke-san-luong-DG tbody tr").empty();
    //});

    //$('#thongKeSanLuongDG').on('shown.bs.modal', function (e) {
    //    LoadThongKeSanLuong();
    //    $('#select-tkslDG-nam option[value=2019]').attr('selected', 'selected');
    //});

    $('#myModalNewDGR').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });
    $('#myModalNewDGR-Edit').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });
    //
})
function fncReadExcelDGRInput(excelJson) {
    var _eMawb = "";
    var _eFltNo = "";
    var _eFltDate = "";
    var _eFltTime = "";
    var _eDes = "";
    var _eFwd = "";
    var _eDO = "";
    var _eMatCode = "";
    var _eModel = "";
    var _eOPack = "";
    var _ePlt = "";
    var _eCtns = "";
    var _eNwCtns = "";
    var _eNwPlts = "";
    var _eRemark = "";
}
function fncMasked() {
    // DGRPIN EDIT
    $("#input-watt-hour").mask("99.99");
    $("#input-capacity-mah").mask("999");
    $("#input-weight-gram").mask("999");
    //
}
function fncLoadTable() {
    //$("#div-wait").show();
    // thead
    tbl_dgr_thead = "";
    tbl_dgr_tbody = "";
    tbl_dgr_thead += "<tr>";
    tbl_dgr_thead += "<td>" + "STATUS" + "</td>";
    tbl_dgr_thead += "<td>" + "MAWB" + "</td>";
    tbl_dgr_thead += "<td>" + "PCS" + "</td>";
    tbl_dgr_thead += "<td>" + "G.W" + "</td>";
    tbl_dgr_thead += "<td>" + "FLT.NO" + "</td>";
    tbl_dgr_thead += "<td>" + "FLT.D" + "</td>";
    tbl_dgr_thead += "<td>" + "FLT.T" + "</td>";
    tbl_dgr_thead += "<td>" + "CUT NBA" + "</td>";
    tbl_dgr_thead += "<td>" + "CUT ALSB" + "</td>";
    tbl_dgr_thead += "<td>" + "DEST" + "</td>";
    tbl_dgr_thead += "<td>" + "RQST RCV" + "</td>";
    tbl_dgr_thead += "<td>" + "CHK DONE" + "</td>";
    tbl_dgr_thead += "<td>" + "TRUCK OUT" + "</td>";
    tbl_dgr_thead += "<td>" + "TRUCK ID" + "</td>";
    tbl_dgr_thead += "<td>" + "NBA RCV" + "</td>";
    tbl_dgr_thead += "<td>" + "SLI DONE" + "</td>";
    tbl_dgr_thead += "<td>" + "DOC" + "</td>";
    tbl_dgr_thead += "<td>" + "FWD" + "</td>";
    tbl_dgr_thead += "<td>" + "W.H" + "</td>";
    tbl_dgr_thead += "<td>" + "PROCESS" + "</td>";
    tbl_dgr_thead += "<td>" + "REMARK" + "</td>";
    tbl_dgr_thead += "</tr>";
    // end thead
    $("#table-mid-status thead").empty();
    $("#table-mid-status thead").append(tbl_dgr_thead);
    $("#span-hide-hanhdong-khac").hide();

    //
    ajaxGet2 = { "get1": "0", "get2": "load" };
    jsonData = JSON.stringify({ ajaxGet2 });
    $.ajax({
        type: "POST",
        url: "DGR.aspx/LoadHDGR",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d.length > 0) {
                //console.log(d[0].items);
                $.each(d[0].items, function (item, val) {
                    tbl_dgr_tbody += fncReTableTbody(val.id, val.mawb, val.fltno, val.fltdate, val.flttime, val.dest, val.fwd, val.do, val.model, val.overpack, val.pallet, val.ctns, val.netweight_ctns, val.netweight_plts, val.remark, val.rqst_rcv, val.chk_done, val.truckout, val.truckid, val.nba_rcv, val.acceppted, val.doc, val.invoice, val.material_code, val.cutnba, val.cutalsb, val.pcs, val.gw);
                })
            }

            //console.log(tbl_dgr_tbody);
            $("#table-mid-status tbody").empty();
            setTimeout(function () {
                $("#table-mid-status tbody").append(tbl_dgr_tbody);
            }, 100)
            //setTimeout(function () {
            //    $("html,body").animate({ scrollTop: $("#tr-mawb-" + mnf_mawb).offset().top - $("html,body").offset().top, scrollLeft: 0 }, 600);

            //}, 200)
        },
        error: function () {
            alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}

function fncLoadInput(type, mawb) {
    $("#div-input").empty();
    data = [];
    var hotSettings;
    $("#myModalInputMawb").attr("mawb", mawb);

    if (type == "them") {
        $("#myModalLabelInputMawb").text("ADD MAWB");

        data = [["", "", "", "", "", "", "", "", "", "", "", "", "", "", "",],];

        hotSettings = {
            data: data,
            //width: 1200,
            //height: 500,
            //fixedColumnsLeft: 7,
            minSpareRows: 10,
            colWidths: [100, 70, 80, 50, 50, 90, 120, 120, 120, 120, 50, 50, 80, 80, 120,],
            columns: [{ type: "text" }, { type: "text" }, { type: 'text', }, { type: "text" }, { type: "text" }, { type: "text" }, { type: "text" }, { type: "text" }, { type: "text" }, { type: "text" }, { type: "text" }, { type: "text" }, { type: "text" }, { type: "text" }, { type: "text" }],
            colHeaders: true,
            colHeaders:
                ["MAWB", "FLTNO", "FLTDATE", "FLTTIME", "DES", "FWD", "D/O", "MAT CODE", "MODEL", "O.PACK", "PLT", "CTNS", "N.W/CTNS", "N.W/PLTS", "REMARK"],

            rowHeaders: true,
            contextMenu: false
        };
        var hotElement = document.querySelector('#div-input');
        var hotElementContainer = hotElement.parentNode;
        var hot;

        hot = new Handsontable(hotElement, hotSettings);
    }

    else if (type == "sua") {
        //$("#div-wait").show();

        $("#myModalLabelInputMawb").text("MAWB EDIT");
        ajaxGet2 = { "get1": mawb, "get2": "sua" };
        jsonData = JSON.stringify({ ajaxGet2 });
        var data_sua;
        $.ajax({
            type: "POST",
            url: "DGR.aspx/LoadHDGR",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                data_sua = convertJsonDateToddmmyyyy(d[0].items, "fltdate");
                hotSettings = {
                    data: data_sua,
                    minSpareRows: 10,
                    colWidths: [
                        80,
                        80,
                        80,
                        80,
                        80,
                        80,
                        80,
                        80,
                        80,
                        80,
                        80,
                        80,
                        80,
                        80,
                        80,
                    ],
                    columns: [
                        {
                            data: "mawb",
                            type: "text"
                        },
                        {
                            data: "fltno",
                            type: "text"
                        },
                        {
                            data: "fltdate",
                            type: "text"
                        },
                        {
                            data: "flttime",
                            type: "text"
                        },
                        {
                            data: "dest",
                            type: "text"
                        },
                        {
                            data: "fwd",
                            type: "text"
                        },
                        {
                            data: "d_o",
                            type: "text"
                        },
                        {
                            data: "material_code",
                            type: "text"
                        },
                        {
                            data: "model",
                            type: "text"
                        },
                        {
                            data: "overpack",
                            type: "text"
                        },
                        {
                            data: "pallet",
                            type: "text"
                        },
                        {
                            data: "ctns",
                            type: "text"
                        },
                        {
                            data: "netweight_ctns",
                            type: "text"
                        },
                        {
                            data: "netweight_plts",
                            type: "text"
                        },
                        {
                            data: "remark",
                            type: "text"
                        }
                    ],
                    colHeaders: true,
                    colHeaders:
                        [
                            "MAWB"
                            , "FLTNO"
                            , "FLTDATE"
                            , "FLTTIME"
                            , "DEST"
                            , "FWD"
                            , "D/O"
                            , "MATERIAL_CODE"
                            , "MODEL"
                            , "OVERPACK"
                            , "PALLET"
                            , "CTNS"
                            , "NETWEIGHT/CTNS"
                            , "NETWEIGHT/PLTS"
                            , "REMARK"
                        ],

                    rowHeaders: true,
                    contextMenu: false
                };

                var hotElement = document.querySelector('#div-input');
                var hotElementContainer = hotElement.parentNode;
                var hot;
                hot = new Handsontable(hotElement, hotSettings);
            },
            error: function (responsive) {
            }
        }).done(function () {
            //$("#div-wait").hide();
        })
    }
}

// Load button thống kê sản lượng DG
function loadBtnThongKeSanLuongDG() {
    var arrayListThongKeSanLuongDG = ["1"// admin
        , "8" // Mr.Tiến
        , "9"// Mr.Khánh
        , "12"// Mr.Long
        , "19" // Ms.Hằng
        , "30" // Ms.Hạnh
        , "84"//Ms .Nga
        , "94" // Mr.Hiếu
        , "106"//Mr.Đức
        , "122"//Ms.Viên
        , "20"//Mr.Tú
        , "116" // Mr.Toản
    ];

    var userid = $("#username").attr("userid");
    var html_btn_thongkesanluong = "";
    if (arrayListThongKeSanLuongDG.indexOf(userid) > -1) {
        html_btn_thongkesanluong = "<a class=\"btn btn-success btn-sm\" id=\"a-menu-button-thongke-sanluong-DG\" userid=\"\">Thống kê sản lượng DG</a>";
    }
    $("#div-top-menu-button").append(html_btn_thongkesanluong);
}

// thống kê sản lượng theo năm BG
// Start bacnq
function LoadThongKeSanLuongDGYear() {
    $("#btn-tkslDG").click(function () {
        var valueSelect = $("#select-tkslDG-nam option:selected").text();
        LoadDataThongKeSanLuong(valueSelect);
    });
}
// load thống kê sản lượng
function LoadThongKeSanLuong() {
    $("#a-menu-button-thongke-sanluong-DG").click(function () {
        //var valueSelect = $("#select-tkslDG-nam option:selected").text();
        var currentTime = new Date()
        // returns the year (four digits)
        var year = currentTime.getFullYear();
        $('#select-tkslDG-nam  option[value="' + year + '"]').prop("selected", true);
        LoadDataThongKeSanLuong(year);
    });
}
function LoadDataThongKeSanLuong(nam) {
    $("#thongKeSanLuongDG").modal("show");
    var ajaxGet3 = { "get1": "", "get2": "", "get3": nam };
    jsonData = JSON.stringify({ ajaxGet3 });
    $.ajax({
        type: "POST",
        url: "DGR.aspx/thongkesanluongDG",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            thangHienThi = moment(new Date()).month();
            if (nam < moment(new Date()).year()) {
                thangHienThi = 11;
            }
          
            var html_header = "";
            html_header += "<tr>";
            html_header += " <td class=\"width-tksl-year width-tksl\">Tháng</td>";
            for (i = 0; i <= thangHienThi; i++) {
                html_header += "<td class=\"width-tksl-year  width-tksl\">" + (i + 1).toString() + "</td>";
            }
            html_header += "</tr>";

            var NhanVien = "";
            var html_table_tbody = "";
            var html_table_all = "";
            var html_table_1 = "";
            //console.log(d);
            $.each(d.dGThongKeSanLuongNames, function (key, item) {

                html_table_tbody += "<tr>"
                html_table_tbody += "<td>" + item.FullNameTKSL + "</td>"
                for (var i = 0; i <= thangHienThi; i++) {
                    html_table_tbody += "<td id=\"td-" + fncReplaceKyTuDacBiet(item.FullNameTKSL) + "-" + (i + 1).toString() + "\"></td>";
                }
                html_table_tbody += "</tr>";


            });

            $("#table-thong-ke-san-luong-DG thead").empty();
            $("#table-thong-ke-san-luong-DG thead").append(html_header);
            $("#table-thong-ke-san-luong-DG tbody").empty();
            $("#table-thong-ke-san-luong-DG tbody").append(html_table_tbody);

            $.each(d.dGThongKeSanLuongs, function (key, item) {
                $("#td-" + fncReplaceKyTuDacBiet(item.FullName) + "-" + item.Thang + "").append(item.Tong);
            });
        }, error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    });
}
// End bacnq

function fncLoadInputNew(type, mawb) {
    $("#div-input-new").empty();
    data = [];
    var hotSettings;

    $("#myModalInputMawbNew").attr("mawb", mawb);

    if (type == "them") {
    } else if (type = "sua") {
        //$("#div-wait").show();

        $("#myModalLabelInputMawbNew").text("MAWB EDIT");
        ajaxGet2 = { "get1": mawb, "get2": type };
        jsonData = JSON.stringify({ ajaxGet2 });
        var data_sua;
        $.ajax({
            type: "POST",
            url: "DGR.aspx/LoadHDGR",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                data_sua = convertJsonDateToddmmyyyy(d[0].items, "fltdate");
                $(".input-new-clear").val("");
                $("#input-mawb-new").val(data_sua[0].mawb);
                $("#input-flt-new").val(data_sua[0].fltno);
                $("#input-fltdate-new").val(data_sua[0].fltdate);
                $("#input-flttime-new").val(data_sua[0].flttime);
                $("#input-dest-new").val(data_sua[0].dest);
                $("#input-fwd-new").val(data_sua[0].fwd);
                $("#textarea-remark-new").val(data_sua[0].remark);

                $("#input-fltdate-new").datepicker({
                    format: "dd/mm/yyyy",
                    todayBtn: "linked",
                    clearBtn: true,
                    language: "vi",
                    calendarWeeks: true,
                    autoclose: true,
                    todayHighlight: true,
                    weekStart: 1,
                    daysOfWeekHighlighted: "0,6"
                });
                $("#input-flttime-new").mask("99:99");
                //console.log(data_sua);
                hotSettings = {
                    data: data_sua,
                    cells: function (row, col, prop) {
                        var cellProperties = {};
                        if (col === 5) {
                            cellProperties.renderer = function (instance, td, row, col, prop, value, cellProperties) {
                                Handsontable.renderers.TextRenderer.apply(this, arguments);
                                td.className = "input-ctns-new";
                            }
                        }
                        if (col === 6) {
                            cellProperties.renderer = function (instance, td, row, col, prop, value, cellProperties) {
                                Handsontable.renderers.TextRenderer.apply(this, arguments);
                                td.className = "input-netweightctns-new";
                            }
                        }
                        if (col === 7) {
                            cellProperties.renderer = function (instance, td, row, col, prop, value, cellProperties) {
                                Handsontable.renderers.TextRenderer.apply(this, arguments);
                                td.className = "input-netweightplts-new";
                                td.style.background = 'rgba(221, 221, 221, 0.45)';
                                value = 0;
                            };
                        }

                        return cellProperties;
                    },
                    beforeChange: function (changes, source) {
                        var ctns_change, netweightctns_change, netweightplts_change, len, value, row_number;
                        for (k = 0, len = changes.length; k < len; k++) {
                            value = changes[k][3];
                            row_number = changes[k][0];
                            if (changes[k][1] == "ctns") {
                                //if (!$.isNumeric(value)) { changes[i] = null; continue; }
                                ctns_change = value;
                                netweightctns_change = hot.getDataAtCell(row_number, 6);
                                netweightplts_change = parseFloat(fncRemoveLastChar(ctns_change)) * parseFloat(netweightctns_change);
                                if (value == "" || value == null || netweightctns_change == "" || netweightctns_change == null) {
                                    hot.setDataAtCell(row_number, 7, "");
                                } else {
                                    hot.setDataAtCell(row_number, 7, netweightplts_change.toFixed(3));
                                }
                            }
                            else if (changes[k][1] == "netweight_ctns") {
                                //if (!$.isNumeric(value)) { changes[i] = null; continue; }
                                ctns_change = hot.getDataAtCell(row_number, 5);;
                                netweightctns_change = value
                                netweightplts_change = parseFloat(ctns_change) * parseFloat(netweightctns_change);
                                if (value == "" || value == null || ctns_change == "" || ctns_change == null) {
                                    hot.setDataAtCell(row_number, 7, "");
                                } else {
                                    hot.setDataAtCell(row_number, 7, netweightplts_change.toFixed(3));
                                }
                            } else {
                            }
                        }
                    },
                    //afterChange: function (changes, source) {
                    //        var changes_new = JSON.stringify(changes);
                    //        console.log(parseFloat(changes_new[3]));

                    //},
                    minSpareRows: 10,
                    colWidths: [
                        130,
                        130,
                        130,
                        130,
                        130,
                        130,
                        130,
                        130,

                    ],
                    columns: [

                        {
                            data: "d_o",
                            type: "text"
                        },
                        {
                            data: "material_code",
                            type: "text"
                        },
                        {
                            data: "model",
                            type: "text"
                        },
                        {
                            data: "overpack",
                            type: "text"
                        },
                        {
                            data: "pallet",
                            type: "text"
                        },
                        {
                            data: "ctns",
                            type: "text"
                        },
                        {
                            data: "netweight_ctns",
                            type: "text"
                        },
                        {
                            data: "netweight_plts",
                            type: "text",
                            editor: false
                        }
                    ],
                    colHeaders: true,
                    colHeaders:
                        [
                            "D/O"
                            , "MATERIAL_CODE"
                            , "MODEL"
                            , "OVERPACK"
                            , "PALLET"
                            , "CTNS"
                            , "NETWEIGHT/CTNS"
                            , "NETWEIGHT/PLTS"

                        ],

                    rowHeaders: true,
                    contextMenu: false
                };

                var hotElement = document.querySelector('#div-input-new');
                var hotElementContainer = hotElement.parentNode;
                var hot;
                hot = new Handsontable(hotElement, hotSettings);

                $(".htCore").on("click", ".input-netweightctns-new", function () {
                    //alert(1);
                    $(this).closest("th").find(".input-netweightplts-new").val(parseFloat($(this).val()) * parseFloat($(this).closest("th").find(".input-ctns-new").val()));
                })
            },
            error: function (responsive) {
                alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
            }
        }).done(function () {
            //$("#div-wait").hide();
        })
    }
}

function fncLoadDGREdit(mawb) {
    $(".input-dgr-edit-clear").text("");
    $("#myModalNewDGR-Edit").attr("mawb", mawb);
    //$("#div-wait").show();
    ajaxGet2 = { "get1": mawb, "get2": "sua" };
    jsonData = JSON.stringify({ ajaxGet2 });
    var data_sua;
    $.ajax({
        type: "POST",
        url: "DGR.aspx/LoadHDGR",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            data_sua = convertJsonDateToddmmyyyy(d[0].items, "fltdate");
            $("#input-dgr-edit-mawb").val(data_sua[0].mawb);
            $("#input-dgr-edit-flt").val(data_sua[0].fltno);
            $("#input-dgr-edit-flt-date").val(data_sua[0].fltdate);
            $("#input-dgr-edit-flt-time").val(data_sua[0].flttime);
            $("#input-dgr-edit-dest").val(data_sua[0].dest);
            $("#input-dgr-edit-fwd").val(data_sua[0].fwd);
            $("#input-dgr-edit-remark").val(data_sua[0].remark);

            $("#input-dgr-edit-flt-date").datepicker({
                format: "dd/mm/yyyy",
                todayBtn: "linked",
                clearBtn: true,
                language: "vi",
                calendarWeeks: true,
                autoclose: true,
                todayHighlight: true,
                weekStart: 1,
                daysOfWeekHighlighted: "0,6"
            });
            $("#input-dgr-edit-flt-time").mask("99:99");

            var ss_row = [];
            var ss_cell = [];
            ss_cell.push({ value: "D/O", textAlign: "center" });
            ss_cell.push({ value: "MAT CODE", textAlign: "center" });
            ss_cell.push({ value: "MODEL", textAlign: "center" });
            ss_cell.push({ value: "O.PACK", textAlign: "center" });
            ss_cell.push({ value: "PLT", textAlign: "center" });
            ss_cell.push({ value: "CTNS", textAlign: "center" });
            ss_cell.push({ value: "N.W/CTNS", textAlign: "center" });
            ss_cell.push({ value: "N.W/PLTS", textAlign: "center" });
            ss_row.push({ height: 30, cells: ss_cell });

            data_sua.forEach(function (dsItem, dsIndex) {
                ss_cell = [];
                ss_cell.push({ value: dsItem.d_o, textAlign: "center" });
                ss_cell.push({ value: dsItem.material_code, textAlign: "center" });
                ss_cell.push({ value: dsItem.model, textAlign: "center" });
                ss_cell.push({ value: dsItem.overpack, textAlign: "center" });
                ss_cell.push({ value: dsItem.pallet, textAlign: "center" });
                ss_cell.push({ value: dsItem.ctns, textAlign: "center" });
                ss_cell.push({ value: dsItem.netweight_ctns, textAlign: "center" });
                ss_cell.push({ value: dsItem.netweight_plts, textAlign: "center" });

                ss_row.push({ height: 30, cells: ss_cell });
            })

            //code here
            var spreadsheet = $("#spreadsheet-edit").data("kendoSpreadsheet");
            //spreadsheet._view.formulaBar.element[0].style.display = 'none';
            //spreadsheet._view.tabstrip.element[0].style.display = 'none';
            var sheet = spreadsheet.activeSheet();
            sheet.range(kendo.spreadsheet.SHEETREF).clear();
            //var ss_rows = spreadsheet.options.sheets()[0].rows.length;
            //var ss_cols = spreadsheet.options.sheets()[0].columns.length;
            ///spreadsheet.activeSheet().range('R1C1:R' + 10 + 'C' + 8).clear();
            spreadsheet.fromJSON({
                columns: 15,
                rows: 100,
                toolbar: false,
                sheetsbar: false,
                sheets: [{
                    name: "DGR",
                    //mergedCells: [
                    //    "A1:G1"
                    //],
                    rows: ss_row,
                    columns: [

                        {// do
                            width: 120
                        },
                        {// mat code
                            width: 120
                        },
                        {// model
                            width: 180
                        },
                        {// over pack
                            width: 60
                        },
                        {// plt
                            width: 60
                        },
                        {// ctns
                            width: 80
                        },
                        {// nw/ctns
                            width: 80
                        },
                        {// nw/plts
                            width: 90
                        },

                    ]
                }]
            });
            //spreadsheet.resize();
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}
function fncButtonClick() {
    $("#div-top-menu-button").on("click", "#a-menu-button-them-mawb", function () {
        $("#myModalInputMawb").modal("show");

        setTimeout(function () {
            fncLoadInput("them", "");
        }, 200);

        $('#myModalInputMawb').on('shown.bs.modal', function () {
            $(document).off('focusin.bs.modal');
        });
    })
    $("#div-top-menu-button").on("click", "#a-menu-button-quanly-dgrpin", function () {
        $("#myModalDGRPIN").modal("show");
        fncLoadDGRPIN("0");
    })
    $("#myModalInputMawb").on("click", "#btn-input-luu", function () {
        fncSaveChagesInput($("#myModalInputMawb").attr("mawb"));
    })
    $("#myModalInputMawbNew").on("click", "#btn-input-luu-new", function () {
        fncSaveChagesInputNew($("#myModalInputMawbNew").attr("mawb"));
    })
    $("#table-mid-status").on("click", ".td-status", function () {
        if ($(".tr-sub").attr("sub-mawb") === $(this).closest("tr").attr("dgr-mawb")) {
            $(".tr-sub").remove();
        } else {
            fncHDGSub($(this).closest("tr").attr("dgr-mawb"));
        }
    })
    $("#myModalConfirmMNF").on("click", "#btn-sendmnf-comfirm", function () {
        //$("#div-wait").show();

        var g_check_done = "";
        if ($("#input-checkbox-checkdone").prop("checked")) {
            g_check_done = "1";
        } else {
            g_check_done = "0";
        }
        var bse = { mawb: mnf_mawb, list_emailid: [], check_done: g_check_done };

        $(".email-checked").each(function () {
            bse.list_emailid.push({
                "id": $(this).val()
            });
        })

        jsonData = JSON.stringify({ bse });
        //console.log(jsonData);
        //return false;
        $.ajax({
            type: "POST",
            url: "DGR.aspx/SendMNFDGR",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                $("#myModalConfirmMNF").modal("hide");
                fncLoadTable();
                alert(responsive.d);
            },
            error: function (responsive) {
                alert("Có lỗi xảy ra! Vui lòng F5(Refresh)");
            }
        }).done(function () {
            //$("#div-wait").hide();
        })
    })
    $("#myModalActivity").on("click", "#btn-gui-binhluan", function () {
        //$("#div-wait").show();
        g_binhluan = $("#left-textarea-binhluan").val().trim();
        var adgr = { items: [] };

        //console.log(g_binhluan);
        if (g_binhluan !== "") {
            s_mawb = $("#myModalActivity").attr("mawb");
            adgr.items.push({
                "id": "",
                "mawb": s_mawb,
                "activity": g_binhluan,
                "activitytime": "",
                "activitycreator": "",
                "activitytype": "BL"
            });
            jsonData = JSON.stringify({ adgr });
            // console.log(jsonData);
            $.ajax({
                type: "POST",
                url: "DGR.aspx/inputActivityDGR",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    //console.log(d);
                },
                error: function (responsive) {
                    alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
                }
            }).done(function () {
                //$("#div-wait").hide();
            })
            $("#left-textarea-binhluan").val("");
            document.getElementById("left-textarea-binhluan").style.height = "42px";
            $("#btn-gui-binhluan").prop('disabled', true);

            fncLoadActivity(s_mawb);
        } else {
            alert("No Data!");
        }
    })
    $("#left-div-hanhdong").on("click", "#span-hide-hanhdong-khac", function () {
        $(".div-hanhdong-khac").hide();
        $(".div-hanhdong-ngandong-khac").hide();
        $("#span-hide-hanhdong-khac").hide();
        $("#span-showall-hanhdong").show();
    })
    $("#left-div-hanhdong").on("click", "#span-showall-hanhdong", function () {
        $(".div-hanhdong-khac").show();
        $(".div-hanhdong-ngandong-khac").show();
        $("#span-showall-hanhdong").hide();
        $("#span-hide-hanhdong-khac").show();
    })
    $("#myModalActivity").on("click", "#a-btn-attachfile", function () {
        $("#myModalActivity").modal("hide");
        $("#myModalUpload").attr("mawb", $("#myModalActivity").attr("mawb"));
        $("#span-upload-tilte").text(" " + $("#myModalActivity").attr("mawb"));
        $("#myModalUpload").modal("show");
    })
    $("#myModalUpload").on('hidden.bs.modal', function () {
        $("#tbl-upload-imgzone tbody").empty();
        fncShowActivity($("#myModalUpload").attr("mawb"));
    })
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
            imgdata.append("folder", $("#myModalUpload").attr("mawb"));
            imgdata.append("root", "DGR");
            for (var t = 10; t < 30; t++) {
                $("#div-upload-process-bar").attr("style", "width:" + t + "%");
                $("#div-upload-process-bar").text(t + "%");
            }
            $.ajax({
                type: "POST",
                url: "AjaxFileUploader.ashx",
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
            })
        } else {
            fncResetProcessBar();
            alert("Ảnh đã được upload!");
        }
    })
    $("#myModalUpload").on("click", "#a-upload-delete-all", function () {
        arrTempData = {};
        $("#tbl-upload-imgzone tbody tr").remove();
        fncResetProcessBar();
    })

    $("#myModalConfirmMNF").on("click", "#input-emaillist-checkall", function () {
        $("#before-send-emaillist .checkbox input[type=checkbox]").prop("checked", true).removeAttr("class").attr("class", "email-checked");
    });
    $("#myModalConfirmMNF").on("click", "#input-emaillist-uncheckall", function () {
        $("#before-send-emaillist .checkbox input[type=checkbox]").prop("checked", false).removeAttr("class");
    });
    $("#myModalConfirmMNF").on("click", "#before-send-emaillist .checkbox input[type=checkbox]", function () {
        if ($(this).hasClass("email-checked")) {
            $(this).removeClass("email-checked");
        } else {
            $(this).addClass("email-checked");
        }
    })
    //input-checkbox-checkdone
    //btn-caidat-nangcao
    $("#myModalConfirmMNF").on("click", "#btn-caidat-nangcao", function () {
        if ($(this).hasClass("btn-caidat-morong")) {
            $("#div-before-send").hide();
            $(this).removeClass("btn-caidat-morong");
        } else {
            $("#div-before-send").show();
            $(this).addClass("btn-caidat-morong");
        }
    })
    $("#myModalDGRPIN").on("click", "#btn-dgrpin-them", function () {
        $("#myModalDGRPIN").modal("hide");
        $("#myModalDGRPIN-Edit").modal("show");

        fncEditDGRPIN("");
    })
    $("#myModalDGRPIN").on("dblclick", "#tbl-dgrpin tbody tr", function () {
        $("#myModalDGRPIN").modal("hide");
        $("#myModalDGRPIN-Edit").modal("show");
        fncEditDGRPIN($(this).attr("dgrpin-id"));
    })
    $("#myModalDGRPIN-Edit").on("click", "#btn-dgrpin-edit-luu", function () {
        fncSaveDGRPIN("edit");
    })
    $("#myModalDGRPIN").on("click", ".btn-dgr-pin-xoa", function () {
        event.stopPropagation();
        var confirm_text = "";
        confirm_text += "Bạn chắc chắn muốn xóa!\n";
        confirm_text += "Material Code: " + $(this).closest("tr").find(".td-material-code").text() + "\n";
        confirm_text += "Model Name: " + $(this).closest("tr").find(".td-model-name").text() + "\n";
        confirm_text += "Watt Hour: " + $(this).closest("tr").find(".td-watt-hour").text() + "\n";
        if (confirm(confirm_text)) {
            fncSaveDGRPIN($(this).closest("tr").attr("dgrpin-id"));
        }
    })
    $("#myModalDGRPIN-Edit").on('hidden.bs.modal', function () {
        $("#myModalDGRPIN").modal('show');
        fncLoadDGRPIN(0);
    })

    //
    $("#a-menu-button-them-mawb-new").click(function () {
        $("#myModalNewDGR").modal("show");
        $("#spreadsheet").empty();
        $("#spreadsheet").kendoSpreadsheet({
            columns: 20,
            rows: 100,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var sheet = spreadsheet.activeSheet();
        sheet.range(kendo.spreadsheet.SHEETREF).clear();
        $(window).trigger("resize");
        spreadsheet.fromJSON({
            sheets: [{
                name: "DGR",
                //mergedCells: [
                //    "A1:G1"
                //],
                rows: [{
                    height: 30,
                    cells: [
                        { value: "MAWB", textAlign: "center" }
                        , { value: "FLTNO", textAlign: "center" }
                        , { value: "FLTDATE", textAlign: "center" }
                        , { value: "FLTTIME", textAlign: "center" }
                        , { value: "DES", textAlign: "center" }
                        , { value: "FWD", textAlign: "center" }
                        , { value: "D/O", textAlign: "center" }
                        , { value: "MAT CODE", textAlign: "center" }
                        , { value: "MODEL", textAlign: "center" }
                        , { value: "O.PACK", textAlign: "center" }
                        , { value: "PLT", textAlign: "center" }
                        , { value: "CTNS", textAlign: "center" }
                        , { value: "N.W/CTNS", textAlign: "center" }
                        , { value: "N.W/PLTS", textAlign: "center" }
                        , { value: "REMARK", textAlign: "center" }

                    ]
                }],
                columns: [
                    {// mawb
                        width: 120
                    },
                    {// flt no
                        width: 70
                    },
                    {// flt date
                        width: 100
                    },
                    { // flt time
                        width: 60
                    },
                    {// des
                        width: 40
                    },
                    {// fwd
                        width: 100
                    },
                    {// do
                        width: 100
                    },
                    {// mat code
                        width: 100
                    },
                    {// model
                        width: 160
                    },
                    {// over pack
                        width: 40
                    },
                    {// plt
                        width: 40
                    },
                    {// ctns
                        width: 60
                    },
                    {// nw/ctns
                        width: 60
                    },
                    {// nw/plts
                        width: 70
                    },

                    {// remark
                        width: 70
                    },
                ]
            }]
        });
    })

    $("#myModalNewDGR").on("click", "#inp-fire", function () {
        //$("#div-wait").show();
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");

        var data = spreadsheet.toJSON().sheets[0].rows;

        data = data.splice(1, data.length - 1);
        dataInput = { items: [] };
        var error_alert = "";
        var cell_id = "";
        var cell_mawb = "";
        var cell_mawb_base = "";
        var cell_fltno = "";
        var cell_fltdate = "";
        var cell_flttime = "";
        var cell_dest = "";
        var cell_fwd = "";
        var cell_d_o = "";
        var cell_model = "";
        var cell_overpack = "";
        var cell_pallet = "";
        var cell_ctns = "";
        var cell_netweightperctns = "";
        var cell_netweightperplts = "";
        var cell_remark = "";
        var cell_material_code = "";
        var cells;

        data.forEach(function (dataItem, dataIndex) {
            // clear biến value
            cell_mawb = "";
            cell_fltno = "";
            cell_fltdate = "";
            cell_flttime = "";
            cell_dest = "";
            cell_fwd = "";
            cell_d_o = "";
            cell_model = "";
            cell_overpack = "";
            cell_pallet = "";
            cell_ctns = "";
            cell_netweightperctns = "";
            cell_netweightperplts = "";
            cell_remark = "";
            cell_material_code = "";
            // end clear biến value
            cells = dataItem.cells;
            //console.log(cells);
            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        cell_mawb = cells[cellIndex].value;
                        break;
                    case 1:
                        cell_fltno = cells[cellIndex].value;
                        break;
                    case 2:
                        cell_fltdate = cells[cellIndex].value;
                        break;
                    case 3:
                        if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                            cell_flttime = Decimal2Time(cells[cellIndex].value * 24);
                        }
                        break;
                    case 4:
                        cell_dest = cells[cellIndex].value;
                        break;
                    case 5:
                        cell_fwd = cells[cellIndex].value;
                        break;
                    case 6:
                        cell_d_o = cells[cellIndex].value;
                        break;
                    case 7:
                        cell_material_code = cells[cellIndex].value;
                        break;
                    case 8:
                        cell_model = cells[cellIndex].value;
                        break;
                    case 9:
                        cell_overpack = cells[cellIndex].value;
                        break;
                    case 10:
                        cell_pallet = cells[cellIndex].value;
                        break;
                    case 11:
                        cell_ctns = cells[cellIndex].value;
                        break;
                    case 12:
                        cell_netweightperctns = cells[cellIndex].value;
                        break;
                    case 13:
                        cell_netweightperplts = cells[cellIndex].value;
                        break;
                    case 14:
                        cell_remark = cells[cellIndex].value;
                        break;
                }
            }
            )
            //console.log(cell_flttime);
            // check mawb trùng trong excel
            if (dataIndex == 0) {
                cell_mawb_base = cell_mawb;
            } else {
                if (cell_mawb_base != cell_mawb) {
                    error_alert += "MAWB ở dòng số " + (dataIndex + 2) + " khác MAWB ở dòng đầu tiên!\r\n";
                }
            }

            // end check mawb trùng trong excel
            if (cell_flttime != "" && (cell_flttime.split(":").length < 2 || cell_flttime.indexOf(":") != 2)) {
                error_alert += "Dòng số " + (dataIndex + 1) + ": Nhập sai kiểu dữ liệu ô FLTTime " + cell_flttime + "\r\n";
                if (flttime.length < 5) {
                    error_alert += "Lưu ý: Nhập đúng định dạng \"hh:mm\". VD: 01:23" + "\r\n";
                }
            }

            if (String(cell_mawb).trim() != "") {
                dataInput.items.push(
                    {
                        "id": cell_id,
                        "mawb": String(cell_mawb).trim().replace(/ /g, ''),
                        "fltno": String(cell_fltno).trim().replace(/ /g, ''),
                        "fltdate": fncConvertExcelDate(String(cell_fltdate).trim().replace(/ /g, '')),
                        "flttime": String(cell_flttime).trim().replace(/ /g, ''),
                        "dest": String(cell_dest).trim().replace(/ /g, ''),
                        "fwd": String(cell_fwd).trim().replace(/ /g, ''),
                        "d_o": String(cell_d_o).trim().replace(/ /g, ''),
                        "model": String(cell_model).trim().replace(/ /g, ''),
                        "overpack": String(cell_overpack).trim().replace(/ /g, ''),
                        "pallet": String(cell_pallet).trim().replace(/ /g, ''),
                        "ctns": String(cell_ctns).trim().replace(/ /g, ''),
                        "netweight_ctns": String(cell_netweightperctns).trim().replace(/ /g, ''),
                        "netweight_plts": String(cell_netweightperplts).trim().replace(/ /g, ''),
                        "remark": String(cell_remark).trim(),
                        "material_code": String(cell_material_code).trim().replace(/ /g, ''),
                    }
                );
            }
        })

        var jsonData = JSON.stringify({ dataInput });
        //console.log(jsonData);
        //console.log(error_alert);
        if (error_alert == "") {
            $.ajax({
                type: "POST",
                url: "DGR.aspx/DataInput",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    //console.log(responsive.d);
                    d = responsive.d;
                    if (d == "") {
                        $("#myModalNewDGR").modal("hide");
                        fncLoadTable();
                    } else {
                        alert(d);
                    }
                },
                error: function () {
                    alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
                }
            }).done(function () {
                //$("#div-wait").hide();
            })
        } else {
            alert(error_alert);
            //$("#div-wait").hide();
        }
    })

    $("#myModalNewDGR-Edit").on("click", "#btn-new-dgr-luu", function () {
        dataInput = { items: [] };

        id = $("#myModalNewDGR-Edit").attr("mawb");
        mawb = $("#input-dgr-edit-mawb").val();
        fltno = $("#input-dgr-edit-flt").val();
        fltdate = dmy2ymd($("#input-dgr-edit-flt-date").val());
        flttime = $("#input-dgr-edit-flt-time").val();
        dest = $("#input-dgr-edit-dest").val();
        fwd = $("#input-dgr-edit-fwd").val();
        netweightperplts = 0;
        remark = $("#input-dgr-edit-flt").val();

        var spreadsheet = $("#spreadsheet-edit").data("kendoSpreadsheet");

        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var error_alert = "";
        var cell_d_o = "";
        var cell_model = "";
        var cell_overpack = "";
        var cell_pallet = "";
        var cell_ctns = "";
        var cell_netweightperctns = "";

        var cell_material_code = "";
        var cells;
        data.forEach(function (dataItem, dataIndex) {
            // clear biến value

            cell_d_o = "";
            cell_model = "";
            cell_overpack = "";
            cell_pallet = "";
            cell_ctns = "";
            cell_netweightperctns = "";
            cell_netweightperplts = "";
            cell_remark = "";
            cell_material_code = "";
            // end clear biến value
            cells = dataItem.cells;
            //console.log(cells);
            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        cell_d_o = cells[cellIndex].value;
                        break;
                    case 1:
                        cell_material_code = cells[cellIndex].value;
                        break;
                    case 2:
                        cell_model = cells[cellIndex].value;
                        break;
                    case 3:
                        cell_overpack = cells[cellIndex].value;
                        break;
                    case 4:
                        cell_pallet = cells[cellIndex].value;
                        break;
                    case 5:
                        cell_ctns = cells[cellIndex].value;
                        break;
                    case 6:
                        cell_netweightperctns = cells[cellIndex].value;
                        break;
                }
            }
            )

            if (cell_d_o != "" || cell_material_code != "" || cell_model != "" || cell_overpack != "" || cell_pallet != "" || cell_ctns != "" || cell_netweightperctns != "") {
                dataInput.items.push(
                    {
                        "id": id,
                        "mawb": String(mawb).trim().replace(/ /g, ''),
                        "fltno": String(fltno).trim().replace(/ /g, ''),
                        "fltdate": String(fltdate).trim().replace(/ /g, ''),
                        "flttime": String(flttime).trim().replace(/ /g, ''),
                        "dest": String(dest).trim().replace(/ /g, ''),
                        "fwd": String(fwd).trim().replace(/ /g, ''),
                        "d_o": String(cell_d_o).trim().replace(/ /g, ''),
                        "model": String(cell_model).trim().replace(/ /g, ''),
                        "overpack": String(cell_overpack).trim().replace(/ /g, ''),
                        "pallet": String(cell_pallet).trim().replace(/ /g, ''),
                        "ctns": String(cell_ctns).trim().replace(/ /g, ''),
                        "netweight_ctns": String(cell_netweightperctns).trim().replace(/ /g, ''),
                        "netweight_plts": String(netweightperplts).trim().replace(/ /g, ''),
                        "remark": String(cell_remark).trim(),
                        "material_code": String(cell_material_code).trim().replace(/ /g, ''),
                    }
                );
            }
        })

        var jsonData = JSON.stringify({ dataInput });
        //console.log(jsonData);

        if (error_alert == "") {
            $.ajax({
                type: "POST",
                url: "DGR.aspx/DataInput",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    //console.log(responsive.d);
                    d = responsive.d;
                    if (d == "") {
                        $("#myModalNewDGR-Edit").modal("hide");
                        fncLoadTable();
                    } else {
                        alert(d);
                    }
                },
                error: function () {
                    alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
                }
            }).done(function () {
                //$("#div-wait").hide();
            })
        } else {
            alert(error_alert);
            //$("#div-wait").hide();
        }
    })

    ///
    $("#myModalActivity").on("click", "#a-dinhkem-xoa", function () {
        if (confirm("Bạn có chắc chắn muốn xóa tài liệu này không? \r\nHành động này không thể hoàn tác! \r\nTên tài liệu: " + $(this).closest("tr").attr("filename"))) {
            //$("#div-wait").show();
            var xoa_folder = $(this).closest("tr").attr("folder");
            var ajaxGet2 = { "get1": xoa_folder, "get2": $(this).closest("tr").attr("filename") };
            jsonData = JSON.stringify({ ajaxGet2 });
            $.ajax({
                type: "POST",
                url: "DGR.aspx/DeleteFile",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    //fncModalSua($("#myModalViewThanhToan").attr("id-thanhtoan"), $("#myModalViewThanhToan").attr("loai-thanhtoan"));
                    fncLoadFileDinhKem(xoa_folder);
                    alert(d);
                },
                error: function () {
                    alert("Đã có lỗi trong quá trình xóa file!\r\nVui lòng tải lại trang(F5)!\r\nNếu sự cố lặp lại xin liên hệ nhân viên IT");
                }
            }).done(function () {
                //$("#div-wait").hide();
            })
        }
    })
    $("#myModalActivity").on("click", "#a-dinhkem-taixuong", function () {
        window.open("../DownloadFile.aspx?Root=DGR&Folder=" + $(this).closest("tr").attr("folder") + "&FileName=" + $(this).closest("tr").attr("filename"));
    })
    $("#a-menu-button-quanly-baocao").click(function () {
        $("#myModalBaoCao").modal("show");
    })
    $("#btn-dgr-taobaocao").click(function () {
        var g_tungay = dmy2ymd($("#input-dgr-tu-ngay").val());
        var g_denngay = dmy2ymd($("#input-dgr-den-ngay").val());
        var g_tenfile = $("#input-dgr-tenfile").val().trim();
        if (g_tungay == "" || g_denngay == "") {
            Swal.fire({
                title: "Ngày báo cáo không được trống!",
                text: "",
                type: 'error',
            })
            return false;
        }

        // load dữ liệu
        var ajaxGet3 = { "get1": g_tungay, "get2": g_denngay, "get3": g_tenfile };
        jsonData = JSON.stringify({ ajaxGet3 });
        $.ajax({
            type: "POST",
            url: "DGR.aspx/ReDGRBaoCao",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                window.open("../DownloadFile.aspx?Root=DGR&Folder=REPORT&FileName=" + g_tenfile + ".xlsx");
            },
            error: function () {
            }
        }).done(function () {
        });
    })
}
////
function fncConvertOverSizeText(text) {
    if (text.length > 20) {
        text = text.substring(0, 10) + "..." + text.substring((text.length - 10), text.length);
    }
    return text;
}
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

function fncResetProcessBar() {
    $("#div-upload-process-bar").attr("style", "width:" + 0 + "%");
    $("#div-upload-process-bar").text(0 + "%");
}
function fncSaveChagesInput(e_mawb) {
    //$("#div-wait").show();
    dataInput = { items: [] };
    var error_alert = "";
    $('#div-input table.htCore tbody tr').each(function (i) {
        id = e_mawb;
        mawb = $(this).find('td:nth-child(2)').text().trim().replace(/ /g, '');
        fltno = $(this).find('td:nth-child(3)').text().trim().replace(/ /g, '');
        fltdate = dmy2ymd($(this).find('td:nth-child(4)').text().trim().replace(/ /g, ''));
        flttime = $(this).find('td:nth-child(5)').text().trim().replace(/ /g, '');
        dest = $(this).find('td:nth-child(6)').text().trim().replace(/ /g, '');
        fwd = $(this).find('td:nth-child(7)').text().trim().replace(/ /g, '');
        d_o = $(this).find('td:nth-child(8)').text().trim().replace(/ /g, '');
        material_code = $(this).find('td:nth-child(9)').text().trim().replace(/ /g, '');
        model = $(this).find('td:nth-child(10)').text().trim().replace(/ /g, '');
        overpack = $(this).find('td:nth-child(11)').text().trim().replace(/ /g, '');
        pallet = $(this).find('td:nth-child(12)').text().trim().replace(/ /g, '');
        ctns = $(this).find('td:nth-child(13)').text().trim().replace(/ /g, '');
        netweightperctns = $(this).find('td:nth-child(14)').text().trim().replace(/ /g, '');
        netweightperplts = $(this).find('td:nth-child(15)').text().trim().replace(/ /g, '');
        remark = $(this).find('td:nth-child(16)').text().trim();

        if (flttime != "" && (flttime.split(":").length < 2 || flttime.indexOf(":") != 2)) {
            error_alert += "Dòng số " + (i + 1) + ": Nhập sai kiểu dữ liệu ô FLTTime " + flttime + "\r\n";
            if (flttime.length < 5) {
                error_alert += "Lưu ý: Nhập đúng định dạng \"hh:mm\". VD: 01:23" + "\r\n";
            }
        }

        if (mawb.trim() != "") {
            dataInput.items.push(
                {
                    "id": id,
                    "mawb": mawb,
                    "fltno": fltno,
                    "fltdate": fltdate,
                    "flttime": flttime,
                    "dest": dest,
                    "fwd": fwd,
                    "d_o": d_o,
                    "model": model,
                    "overpack": overpack,
                    "pallet": pallet,
                    "ctns": ctns,
                    "netweight_ctns": netweightperctns,
                    "netweight_plts": netweightperplts,
                    "remark": remark,
                    "material_code": material_code,
                }
            );
        }
    })

    var jsonData = JSON.stringify({ dataInput });
    //console.log(jsonData);
    if (error_alert == "") {
        $.ajax({
            type: "POST",
            url: "DGR.aspx/DataInput",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                //console.log(responsive.d);
                $("#myModalInputMawb").modal("hide");
                fncLoadTable();
            },
            error: function () {
                alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
            }
        }).done(function () {
            //$("#div-wait").hide();
        })
    } else {
        alert(error_alert);
        //$("#div-wait").hide();
    }
}

function fncKiemTraDuLieu(fltdate, flttime) {
}

function fncSaveChagesInputNew(e_mawb) {
    dataInput = { items: [] };
    var mawb_save = $("#input-mawb-new").val();
    var flt_save = $("#input-flt-new").val();
    var fltdate_save = $("#input-fltdate-new").val();
    var flttime_save = $("#input-flttime-new").val();
    var remark_save = $("#textarea-remark-new").val();
    var dest_save = $("#input-dest-new").val();
    var fwd_save = $("#input-fwd-new").val();
    id = e_mawb;
    mawb = mawb_save;
    fltno = flt_save;
    fltdate = dmy2ymd(fltdate_save);
    flttime = flttime_save;
    dest = dest_save;
    fwd = fwd_save;
    netweightperplts = 0;
    remark = remark_save;
    //console.log($('#div-input-new table.htCore tbody tr').length);
    $('#div-input-new table.htCore tbody tr').each(function () {
        //$("#div-wait").show();
        d_o = $(this).find('td:nth-child(2)').text().trim().replace(/ /g, '');
        material_code = $(this).find('td:nth-child(3)').text().trim().replace(/ /g, '');
        model = $(this).find('td:nth-child(4)').text().trim().replace(/ /g, '');
        overpack = $(this).find('td:nth-child(5)').text().trim().replace(/ /g, '');
        pallet = $(this).find('td:nth-child(6)').text().trim().replace(/ /g, '');
        ctns = $(this).find('td:nth-child(7)').text().trim().replace(/ /g, '');
        netweightperctns = $(this).find('td:nth-child(8)').text().trim().replace(/ /g, '');

        if (d_o != "" || material_code != "" || model != "" || overpack != "" || pallet != "" || ctns != "" || netweightperctns != "") {
            dataInput.items.push(
                {
                    "id": id,
                    "mawb": mawb,
                    "fltno": fltno,
                    "fltdate": fltdate,
                    "flttime": flttime,
                    "dest": dest,
                    "fwd": fwd,
                    "d_o": d_o,
                    "model": model,
                    "overpack": overpack,
                    "pallet": pallet,
                    "ctns": ctns,
                    "netweight_ctns": netweightperctns,
                    "netweight_plts": 0,
                    "remark": remark,
                    "material_code": material_code,
                }
            );
        }
    })

    var jsonData = JSON.stringify({ dataInput });
    $.ajax({
        type: "POST",
        url: "DGR.aspx/DataInput",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            //console.log(responsive.d);
            $("#myModalInputMawbNew").modal("hide");
            fncLoadTable();
        },
        error: function () {
            alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}

function fncReTableTbody(g_id, g_mawb, g_fltno, g_fltdate, g_flttime, g_dest, g_fwd, g_d_o, g_model, g_overpack, g_pallet, g_ctns, g_netweight_ctns, g_netweight_plts, g_remark, g_rqst_rcv, g_chk_done, g_truckout, g_truckid, g_nba_rcv, g_acceppted, g_doc, g_invoice, g_material_code, g_cutnba, g_cutalsb, g_pcs, g_gw) {
    color_chk_done = "";
    img_status = "";
    if (g_chk_done != "") {
        img_status = "td-img-checking";
    } else {
        img_status = "td-img-plan";
    }
    // tô màu
    // tô màu ngày gửi MNF với ngày gửi MNF < 24h hiện tại
    if (g_chk_done != "" && fncCalDate1(g_chk_done) > 0) {
        color_chk_done = "td-xanh";
    }
    //console.log(g_chk_done);
    // end tô màu
    r_tbody = "";
    r_tbody += "<tr id=\"tr-mawb-" + g_mawb.trim() + "\" dgr-mawb=\"" + g_mawb.trim() + "\" class=\"no-print\">";
    r_tbody += "<td class=\"td-status " + img_status + "\">" + "</td>";
    r_tbody += "<td class=\"td-mawb td-bold\">" + g_mawb.trim() + "</td>";
    r_tbody += "<td class=\"td-pcs\">" + g_pcs + "</td>";
    r_tbody += "<td class=\"td-gw\">" + numberTextWithCommas(g_gw) + "</td>";
    r_tbody += "<td class=\"td-fltno td-bold\">" + g_fltno + "</td>";
    r_tbody += "<td class=\"td-fltdate td-bold\">" + convertDate(g_fltdate)[1] + "</td>";
    r_tbody += "<td class=\"td-flttime td-bold\">" + g_flttime + "</td>";
    r_tbody += "<td class=\"td-cutnba\">" + convertDate(g_cutnba)[2] + "</td>";
    r_tbody += "<td class=\"td-cutalsb\">" + convertDate(g_cutalsb)[2] + "</td>";
    r_tbody += "<td class=\"td-dest\">" + g_dest + "</td>";
    r_tbody += "<td class=\"td-rqst-rcv " + "\">" + convertDate(g_rqst_rcv)[2] + "</td>";
    r_tbody += "<td class=\"td-chk-done " + color_chk_done + "\">" + convertDate(g_chk_done)[2] + "</td>";
    r_tbody += "<td class=\"td-truckout\">" + convertDate(g_truckout)[2] + "</td>";
    r_tbody += "<td class=\"td-truckid\">" + g_truckid + "</td>";
    r_tbody += "<td class=\"td-nba-rcv\">" + convertDate(g_nba_rcv)[2] + "</td>";
    r_tbody += "<td class=\"td-sli-done\">" + "" + "</td>";
    r_tbody += "<td class=\"td-doc\">" + convertDate(g_doc)[2] + "</td>";
    r_tbody += "<td class=\"td-fwd\">" + g_fwd + "</td>";
    r_tbody += "<td class=\"td-wh\">" + "" + "</td>";
    r_tbody += "<td class=\"td-process\">" + "" + "</td>";
    r_tbody += "<td class=\"td-remark\">" + g_remark + "</td>";
    r_tbody += "</tr>";

    return r_tbody;
}

// sub

function fncHDGSub(mawb) {
    //$("#div-wait").show();
    ajaxGet2 = { "get1": mawb, "get2": "load" };
    jsonData = JSON.stringify({ ajaxGet2 });

    $.ajax({
        type: "POST",
        url: "DGR.aspx/LoadHDGR",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            join_pallet = [];
            join_pallet_temp = {};
            last_pallet_id_value = "";
            last_pallet_value = "";
            pallet_rowspan = 1;

            join_ctns = [];
            join_ctns_temp = {};
            last_ctns_id_value = "";
            last_ctns_value = "";
            ctns_rowspan = 1;

            join_overpack = [];
            join_overpack_temp = {};
            last_overpack_id_value = "";
            last_overpack_value = "";
            overpack_rowspan = 1;
            netweight_plts_sum = 0.0;
            netweight_ctns_sum = 0.0;
            var netweight_plts_sum_string = "";
            $(".tr-sub").remove();
            $("html,body").animate({ scrollTop: $("#tr-mawb-" + mawb).offset().top - $("html,body").offset().top, scrollLeft: 0 }, 600);
            r_sub = "";
            r_sub += "<tr class=\"tr-sub\" sub-mawb=\"" + mawb + "\" >";
            r_sub += "<td colspan=\"2\">";
            r_sub += "<input id=\"btn-print-new\" class=\"btn btn-primary btn-sm no-print\" type=\"button\" value=\"In\">";
            r_sub += "<input id=\"btn-edit-new\" class=\"btn btn-info btn-sm no-print\" type=\"button\" value=\"Sửa\">";

            r_sub += "<input id=\"btn-delete\" class=\"btn btn-danger btn-sm no-print\" type=\"button\" value=\"Xóa\">";
            r_sub += "<input id=\"btn-activity\" class=\"btn btn-success btn-sm no-print\" type=\"button\" value=\"Quản lý\">";
            r_sub += "<input id=\"btn-sendmnf\" class=\"btn btn-warning btn-sm no-print\" type=\"button\" value=\"Gửi MNF\">";
            r_sub += "</td>";
            r_sub += "<td colspan=\"19\">";
            r_sub += "<table class=\"table table-bordered table-sub\" id=\"tbl-sub-" + mawb + "\">";
            r_sub += "<thead>";
            r_sub += "<tr>";
            r_sub += "<td>" + "NO" + "</td>";
            r_sub += "<td>" + "D/O" + "</td>";
            r_sub += "<td>" + "MATERIAL CODE" + "</td>";
            r_sub += "<td>" + "Model" + "</td>";
            r_sub += "<td>" + "WH" + "</td>";
            r_sub += "<td>" + "Overpack" + "</td>";
            r_sub += "<td>" + "Pallet" + "</td>";
            r_sub += "<td>" + "Ctns" + "</td>";
            r_sub += "<td>" + "Net Weight/ctns" + "</td>";
            r_sub += "<td>" + "Net Weight/plts" + "</td>";
            r_sub += "<td>" + "Remark" + "</td>";
            r_sub += "</tr>";
            r_sub += "</thead>";
            r_sub += "<tbody>";
            var new_ctns = "";
            $.each(d[0].items, function (item, val) {
                // gộp row
                // pallet
                if (val.pallet == last_pallet_value && last_pallet_value != "" && item != (d[0].items.length - 1)) {
                    pallet_rowspan += 1;
                    netweight_plts_sum += parseFloat(val.ctns) * parseFloat(val.netweight_ctns);

                    addrow_pallet = 0;
                }
                else {
                    if (val.pallet == last_pallet_value && last_pallet_value != "" && item == (d[0].items.length - 1)) {
                        pallet_rowspan += 1;
                        netweight_plts_sum += parseFloat(val.ctns) * parseFloat(val.netweight_ctns);
                        addrow_pallet = 0;
                    } else {
                        addrow_pallet = 1;
                    }
                    if (last_pallet_value != "" && last_pallet_value != "N/A") {
                        netweight_plts_sum_string = netweight_plts_sum.toFixed(3);
                    } else {
                        netweight_plts_sum_string = "";
                    }

                    join_pallet_temp = {
                        "id": last_pallet_id_value,
                        "pallet_rowspan": pallet_rowspan,
                        "netweight_plts_sum": netweight_plts_sum_string
                    }
                    if (pallet_rowspan > 1) {
                        join_pallet.push(join_pallet_temp);
                    }
                    netweight_plts_sum = 0;
                    pallet_rowspan = 1;
                    if (val.pallet != "" && /^\d+$/.test((val.pallet).substring(((val.pallet).length - 1), (val.pallet).length)) == false) {
                        last_pallet_value = val.pallet;
                        last_pallet_id_value = val.id;
                    }
                    netweight_plts_sum += parseFloat(val.ctns) * parseFloat(val.netweight_ctns);
                }
                // END PALLET

                // overpack
                if (val.overpack == last_overpack_value && last_overpack_value != "" && item != (d[0].items.length - 1)) {
                    overpack_rowspan += 1;
                    addrow_overpack = 0;
                }
                else {
                    if (val.overpack == last_overpack_value && last_overpack_value != "" && item == (d[0].items.length - 1)) {
                        overpack_rowspan += 1;
                        addrow_overpack = 0;
                    }
                    else {
                        addrow_overpack = 1;
                    }
                    join_overpack_temp = {
                        "id": last_overpack_id_value,
                        "overpack_rowspan": overpack_rowspan,
                    }
                    if (overpack_rowspan > 1) {
                        join_overpack.push(join_overpack_temp);
                    }
                    overpack_rowspan = 1;
                    last_overpack_value = val.overpack;
                    last_overpack_id_value = val.id;
                }

                // ctns

                if (val.ctns == last_ctns_value && last_ctns_value != "" && item != (d[0].items.length - 1)) {
                    ctns_rowspan += 1;
                    netweight_ctns_sum += parseFloat(val.netweight_ctns);
                    addrow_ctns = 0;
                }
                else {
                    if (val.ctns == last_ctns_value && last_ctns_value != "" && item == (d[0].items.length - 1)) {
                        ctns_rowspan += 1;
                        netweight_ctns_sum += parseFloat(val.netweight_ctns);
                        addrow_ctns = 0;
                    } else {
                        addrow_ctns = 1;
                    }

                    join_ctns_temp = {
                        "id": last_ctns_id_value,
                        "ctns_rowspan": ctns_rowspan,
                        "netweight_ctns_sum": netweight_ctns_sum
                    }
                    if (ctns_rowspan > 1) {
                        join_ctns.push(join_ctns_temp);
                    }
                    netweight_ctns_sum = 0;
                    ctns_rowspan = 1;
                    if (val.ctns != "" && /^\d+$/.test((val.ctns).substring(((val.ctns).length - 1), (val.ctns).length)) == false) {
                        last_ctns_value = val.ctns;
                        last_ctns_id_value = val.id;
                    }
                    netweight_ctns_sum += parseFloat(val.netweight_ctns);
                }
                // END ctns

                // end gộp row

                r_sub += "<tr id=\"tr-sub-id-" + val.id + "\">";
                r_sub += "<td class=\"td-sub-no\">" + (item + 1) + "</td>";
                r_sub += "<td class=\"td-sub-do td-bold\">" + val.d_o + "</td>";
                r_sub += "<td class=\"td-sub-material-code\">" + val.material_code + "</td>";
                r_sub += "<td class=\"td-sub-model\">" + val.model + "</td>";
                r_sub += "<td class=\"td-sub-watt-hour\">" + val.watt_hour + "</td>";
                if (addrow_overpack == 1) {
                    r_sub += "<td class=\"td-sub-overpack\">" + val.overpack + "</td>";
                }
                if (addrow_pallet == 1) {
                    r_sub += "<td class=\"td-sub-pallet\">" + fncRemoveLastChar(val.pallet) + "</td>";
                }
                if (addrow_ctns == 1) {
                    new_ctns = (/^\d+$/.test((fncRemoveLastChar(val.ctns)).substring(((fncRemoveLastChar(val.ctns)).length - 1), (fncRemoveLastChar(val.ctns)).length)) == false) ? fncRemoveLastChar(fncRemoveLastChar(val.ctns)) : fncRemoveLastChar(val.ctns);
                    r_sub += "<td class=\"td-sub-ctns\">" + new_ctns + "</td>";
                }

                if (addrow_ctns == 1) {
                    if (val.ctns != "") {
                        r_sub += "<td class=\"td-sub-netweight-ctns\">" + netweight_ctns_sum.toFixed(3) + "</td>";
                    } else {
                        r_sub += "<td class=\"td-sub-netweight-ctns\">" + "</td>";
                    }
                }

                //r_sub += "<td class=\"td-sub-netweight-ctns\">" + val.netweight_ctns + "</td>";
                if (addrow_pallet == 1) {
                    if (val.pallet != "" && val.pallet != "N/A") {
                        r_sub += "<td class=\"td-sub-netweight-plts\">" + netweight_plts_sum.toFixed(3) + "</td>";
                    } else {
                        r_sub += "<td class=\"td-sub-netweight-plts\">" + "</td>";
                    }
                }
                r_sub += "<td class=\"td-sub-remark\">" + val.remark + "</td>";
                r_sub += "</tr>";
            })
            r_sub += "</tbody>";
            r_sub += "</table>";
            r_sub += "</td>";
            r_sub += "</tr>";
            $(r_sub).insertAfter($("#tr-mawb-" + mawb));

            //console.log(join_ctns);
            $.each(join_pallet, function (item, val) {
                $("#tr-sub-id-" + val.id + " .td-sub-pallet").attr("rowspan", val.pallet_rowspan);
                $("#tr-sub-id-" + val.id + " .td-sub-netweight-plts").attr("rowspan", val.pallet_rowspan);
                $("#tr-sub-id-" + val.id + " .td-sub-netweight-plts").text(val.netweight_plts_sum);
            })
            $.each(join_overpack, function (item, val) {
                $("#tr-sub-id-" + val.id + " .td-sub-overpack").attr("rowspan", val.overpack_rowspan);
            })
            $.each(join_ctns, function (item, val) {
                $("#tr-sub-id-" + val.id + " .td-sub-ctns").attr("rowspan", val.ctns_rowspan);
                $("#tr-sub-id-" + val.id + " .td-sub-netweight-ctns").attr("rowspan", val.ctns_rowspan);
                $("#tr-sub-id-" + val.id + " .td-sub-netweight-ctns").text((val.netweight_ctns_sum).toFixed(3));
            })
            // recheck overpack
            count_alert_pallet = 0;
            temp_empty_overpack = 0;
            var last_temp_pallet_value = "";
            var alert_nhap_thieu_overpack = "";
            $("#tbl-sub-" + mawb + " tbody tr").each(function () {
                if ($(this).find(".td-sub-pallet").text().trim() != "") {
                    count_alert_pallet += 1;
                    if ($(this).find(".td-sub-overpack").text() == "") {
                        temp_empty_overpack += 1;
                    }
                    if (count_alert_pallet > 1 && temp_empty_overpack > 0) {
                        alert_nhap_thieu_overpack = "<span  class=\"alert alert-danger\" role=\"alert\" id=\"span-overpack-alert\"><i class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></i> Nhập thiếu over pack!</span>";
                    }
                }
            })
            if (alert_nhap_thieu_overpack != "") {
                $(alert_nhap_thieu_overpack).insertBefore($("#tbl-sub-" + mawb));
            }
            // end recheck overpack

            var sub_mawb = "";

            $(".tr-sub").on("click", "#btn-print-new", function () {
                $("#div-print").show();
                var print_mawb = $(".tr-sub").attr("sub-mawb");
                var print_tr_mawb;
                var print_awb;
                var print_flight;
                var print_date;
                var print_dest;
                var print_agent;

                var print_html;
                print_tr_mawb = $("#tr-mawb-" + mawb);
                print_awb = print_tr_mawb.find(".td-mawb").text();
                print_flight = print_tr_mawb.find(".td-fltno").text();
                print_date = print_tr_mawb.find(".td-fltdate").text();
                print_dest = print_tr_mawb.find(".td-dest").text();
                print_agent = print_tr_mawb.find(".td-fwd").text();
                $("#print-awb").prepend(print_awb);
                $("#print-flight").prepend(print_flight);
                $("#print-date").prepend(print_date);
                $("#print-dest").prepend(print_dest);
                $("#print-agent").prepend(print_agent);
                var print_html = "";
                $("#tbl-sub-" + mawb + " tbody tr").each(function () {
                    print_html += "<tr>";
                    print_html += "<td>" + $(this).find(".td-sub-no").text() + "</td>";

                    print_html += "<td class=\"t-checkbox\">" + $(this).find(".td-sub-do").text() + "<input class=\"i-checkbox\" type=\"checkbox\" />" + "</td>";
                    print_html += "<td>" + $(this).find(".td-sub-model").text() + "</td>";
                    print_html += "<td>" + $(this).find(".td-sub-watt-hour").text() + "</td>";
                    print_html += "<td>" + $(this).find(".td-sub-overpack").text() + "</td>";
                    print_html += "<td>" + $(this).find(".td-sub-pallet").text() + "</td>";
                    print_html += "<td>" + $(this).find(".td-sub-ctns").text() + "</td>";
                    print_html += "<td>" + "</td>";
                    print_html += "<td>" + "</td>";
                    print_html += "</tr>";
                })
                $("#table-print tbody").empty();
                $("#table-print tbody").append(print_html);

                $("#div-print").print(
                    {
                        globalStyles: true,
                        stylesheet: "margin-top: -20px; margin-bottom: 0;",
                    }
                );
                $("#div-print").hide();
            })

            $(".tr-sub").on("click", "#btn-edit", function () {
                $("#myModalInputMawb").modal("show");
                sub_mawb = $(this).closest("tr").attr("sub-mawb");
                setTimeout(function () {
                    fncLoadInput("sua", sub_mawb);
                }, 200);

                $('#myModalInputMawb').on('shown.bs.modal', function () {
                    $(document).off('focusin.bs.modal');
                });
            })

            //$(".tr-sub").on("click", "#btn-edit-new", function () {
            //    $("#myModalInputMawbNew").modal("show");
            //    sub_mawb = $(this).closest("tr").attr("sub-mawb");

            //    setTimeout(function () {
            //        fncLoadInputNew("sua", sub_mawb);
            //    }, 200);

            //    $('#myModalInputMawbNew').on('shown.bs.modal', function () {
            //        $(document).off('focusin.bs.modal');
            //    });
            //})
            $(".tr-sub").on("click", "#btn-edit-new", function () {
                $("#myModalNewDGR-Edit").modal("show");
                $("#spreadsheet-edit").empty();
                $("#spreadsheet-edit").kendoSpreadsheet({
                    columns: 20,
                    rows: 100,
                    toolbar: false,
                    sheetsbar: false,
                });
                sub_mawb = $(this).closest("tr").attr("sub-mawb");

                fncLoadDGREdit(sub_mawb);
            })
            $(".tr-sub").on("click", "#btn-delete", function () {
                if (confirm("Are you sure you want to delete this MAWB " + $(this).closest("tr").attr("sub-mawb") + "? This action cannot be undone!")) {
                    //$("#div-wait").show();
                    ajaxGet = { "get": $(this).closest("tr").attr("sub-mawb") };
                    jsonData = JSON.stringify({ ajaxGet });
                    $.ajax({
                        type: "POST",
                        url: "DGR.aspx/DeleteHDGR",
                        data: jsonData,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        async: false,
                        success: function (responsive) {
                            fncLoadTable();
                        },
                        error: function (responsive) {
                        }
                    }).done(function () {
                        //$("#div-wait").hide();
                    })
                }
            })

            $(".tr-sub").on("click", "#btn-sendmnf", function () {
                mnf_mawb = $(this).closest("tr").attr("sub-mawb");

                $("#myModalConfirmMNF").modal("show");
                //$("#div-alert-msg").empty();
                $("#btn-sendmnf-comfirm").prop("disabled", true);
                $("#input-checkbox-checkdone").prop("checked", true);
                //input-checkbox-checkdone
                fncLoadEmailList();
                fncCheckSendMNF(mnf_mawb);
            })
            $(".tr-sub").on("click", "#btn-activity", function () {
                sub_mawb = $(this).closest("tr").attr("sub-mawb");

                fncShowActivity(sub_mawb);
            })
        },
        error: function (responsive) {
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}

function fncShowActivity(ac_mawb) {
    $("#left-div-hanhdong-box").empty();

    $("#myModalActivity").attr("mawb", ac_mawb);
    $("#myModalLabelActivity").empty();
    $("#myModalLabelActivity").append("<span class=\"td-bold\">ACTIVITY of MAWB: </span>" + "<span class=\"td-bold td-color-do\">" + ac_mawb + "</span>");
    fncLoadActivity(ac_mawb);
    fncLoadChecklist(ac_mawb);
    fncLoadFileDinhKem(ac_mawb);
    $("#myModalActivity").modal("show");
}

function fncRemoveLastChar(string_value) {
    if (string_value != "N/A" && string_value != "" && /^\d+$/.test((string_value).substring(((string_value).length - 1), (string_value).length)) == false) {
        string_value = string_value.substring(0, string_value.trim().length - 1);
    }
    return string_value;
}

function fncCalDate(string_date) {
    var date = new Date(string_date);
    var date_now = new Date();
    return (date_now - date);
}
function fncCalDate1(string_date) {
    var date = new Date(string_date);
    var today = new Date();
    var today00 = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0);

    return (date - today00);
}

function reHanhDongHtml(h_id, h_nguoitao, h_hanhdong, h_thoigian, h_loai) {
    var re_hanhdonghtml = "";
    var ngandong_khac = "";
    re_hanhdonghtml += "<div id=\"div-hanhdong-" + h_id + "\" hd-id= \"" + h_id + "\"";
    if (h_loai == "HD") {
        re_hanhdonghtml += " class=\"div-hanhdong-con div-hanhdong-khac\">";
        re_hanhdonghtml += "<span class=\"td-bold\">" + h_nguoitao.trim() + "</span>";
        re_hanhdonghtml += "<span class=\"span-hanhdong-noidung\"> " + h_hanhdong + "</span>"
        re_hanhdonghtml += "<span class=\"span-hanhdong-thoigian\"> " + chuyenthoigian(h_thoigian) + "</span>";
        re_hanhdonghtml += "</div>";
        ngandong_khac = "div-hanhdong-ngandong-khac";
    } else if (h_loai == "BL") {
        re_hanhdonghtml += " class=\"div-hanhdong-con div-binhluan\">";
        re_hanhdonghtml += "<span class=\"td-bold span-nguoitao\">" + h_nguoitao + "</span>";
        re_hanhdonghtml += "<div class=\"div-hop-binhluan\">" + h_hanhdong + " </div>";
        re_hanhdonghtml += "<div class=\"div-hop-binhluan\">" + marked(h_hanhdong) + " </div>";
        re_hanhdonghtml += "<div class=\"div-binhluan-tuychon\">";
        re_hanhdonghtml += " <span class=\"span-hanhdong-thoigian\"> " + chuyenthoigian(h_thoigian) + "</span>";
        re_hanhdonghtml += " <span>" + "-" + "</span>";
        re_hanhdonghtml += " <a  class=\"a-gachduoi a-sua-binhluan\">" + "Sửa" + "</a>";
        re_hanhdonghtml += " <span>" + "-" + "</span>";
        re_hanhdonghtml += " <a  class=\"a-gachduoi a-xoa-binhluan\">" + "Xóa" + "</a>";
        re_hanhdonghtml += "</div>";
        re_hanhdonghtml += "</div>";
        ngandong_khac = "";
    }
    re_hanhdonghtml += "<div class=\"div-hanhdong-ngandong " + ngandong_khac + "\" id=\"div-hanhdong-ngandong-" + h_id + "\"></div>";
    return re_hanhdonghtml;
}
function chuyenthoigian(tg) {
    dt_now = new Date();
    hanhdong_tg = new Date(tg);
    cal2dt = parseInt((dt_now - hanhdong_tg) / 1000);

    if (cal2dt < 10) {
        dt_text = "vừa xong";
    }
    else if (cal2dt >= 10 && cal2dt < 60) {
        dt_text = "vài giây trước";
    }
    else if (cal2dt >= 60 && cal2dt < 3600) {
        dt_text = (parseInt(cal2dt / 60)).toString() + " phút trước";
    }
    else if (cal2dt >= 3600 && cal2dt < 24 * 3600) {
        dt_text = (parseInt(cal2dt / 3600)).toString() + " giờ trước";
    }
    else if (cal2dt >= 24 * 3600) {
        dt_text = tg;
    }
    else {
        dt_text = "Lỗi";
    }

    return dt_text;
}

function fncLoadActivity(a_mawb) {
    //$("#div-wait").show();
    $("#left-div-hanhdong-box").empty();
    $("#left-div-hanhdong-box").append("<div id=\"div-hanhdong-loading\"> <img alt=\"\" src=\"images/squares.gif\" id=\"img-hanhdong-box-loading\"/> </div>");

    ajaxGet = { "get": a_mawb };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "DGR.aspx/reActivityDGR",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d.items.length > 0) {
                htmlHanhDong = "";
                $.each(d.items, function (item, val) {
                    htmlHanhDong += reHanhDongHtml(val.id, val.activitycreator, val.activity, val.activitytime, (val.activitytype).trim());
                })

                //

                setTimeout(function () {
                    $("#div-hanhdong-loading").remove();
                    $("#left-div-hanhdong-box").append(htmlHanhDong);
                    $(".div-hanhdong-khac").hide();
                    $(".div-hanhdong-ngandong-khac").hide();
                }, 300);
                setTimeout(function () {
                    $("#btn-gui-binhluan").prop('disabled', false);
                }, 3000);
            } else {
                $("#div-hanhdong-loading").remove();
                $("#left-div-hanhdong-box").text("No comments!");
            }
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}

function fncLoadChecklist(c_mawb) {
    //$("#div-wait").show();
    $("#div-checklist-list").empty();
    $("#div-checklist-list").append("<div id=\"div-checklist-loading\"> <img alt=\"\" src=\"images/squares.gif\" id=\"img-checklist-box-loading\"/> </div>");
    var html_checklist = "";
    ajaxGet = { "get": c_mawb };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "DGR.aspx/reCheckListDGR",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            html_checklist = "";
            var ischecked = "";
            var checklist_bold = "";
            html_checklist += "<input type=\"checkbox\" id=\"input-checklist-checkbox-checkall\"/>" + "<span class=\"td-bold color-red\"> Check ALL</span>";
            $.each(d.items, function (item, val) {
                html_checklist += "<div class=\"div-checklist-list-sub\" temp-id=\"" + val.id + "\">";

                if (val.checked_ == "True") {
                    ischecked = "checked";
                }
                else {
                    ischecked = "";
                }
                if (val.showcheckbox == "True") {
                    html_checklist += "<input type=\"checkbox\" class=\"input-checklist-checkbox\" " + ischecked + "/>";
                    checklist_bold = "";
                } else {
                    checklist_bold = "td-bold";
                }
                html_checklist += "<span class=\"span-checklist-content " + checklist_bold + "\"> " + val.content + "</span>";

                html_checklist += "</div>";
            })
            //setTimeout(function () {
            //}, 400);
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }
    }).done(function () {
        $("#div-checklist-loading").remove();

        $("#div-checklist-list").append(html_checklist);

        var checked_value = 0;
        $(".div-checklist-list-sub").on("change", ".input-checklist-checkbox", function () {
            if (this.checked) {
                checked_value = 1;
            } else {
                checked_value = 0;
            }
            fncChecklist(
                $("#myModalActivity").attr("mawb")
                , $(this).closest("div.div-checklist-list-sub").attr("temp-id")
                , checked_value
            );
        })
        //$("#div-wait").hide();
    })
}

function fncLoadFileDinhKem(dk_mawb) {
    //$("#div-wait").show();
    $("#table-filedinhkem tbody").empty();
    $("#div-filedinhkem-list").append("<tr id=\"tr-filedinhkem-loading\"><td colspan=\"6\"> <img alt=\"\" src=\"images/squares.gif\" id=\"img-checklist-box-loading\"/></td> </tr>");

    ajaxGet = { "get": dk_mawb };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "DGR.aspx/reFileDinhKemDGR",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var html_filedinhkem = "";
            //console.log(d);
            $.each(d, function (item, val) {
                html_filedinhkem += "<tr filename=\"" + val.filename + "\" folder=\"" + dk_mawb + "\">";
                html_filedinhkem += "<td>" + (item + 1) + "</td>";
                html_filedinhkem += "<td>" + "" + "</td>";
                html_filedinhkem += "<td>" + fncConvertOverSizeText(val.filename) + "</td>";
                html_filedinhkem += "<td>" + fncConvertSize(val.filesize) + "</td>";
                html_filedinhkem += "<td>" + "<a class=\"label label-info\" id=\"a-dinhkem-taixuong\">Tải xuống</a>" + "</td>";
                html_filedinhkem += "<td>" + "<a class=\"label label-danger\" id=\"a-dinhkem-xoa\">Xóa</a>" + "</td>";
                html_filedinhkem += "</tr>";
            })

            setTimeout(function () {
                $("#tr-filedinhkem-loading").remove();

                $("#table-filedinhkem tbody").append(html_filedinhkem);
                $("#myModalLabelActivity").append("<span> (Có " + d.length + " file đính kèm)</span>")
            }, 400);
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}
function fncChecklist(i_mawb, i_temp_id, i_checked_value) {
    //$("#div-wait").show();
    $(".input-checklist-checkbox").prop('disabled', true);

    var cldgr = { items: [] };
    cldgr.items.push({
        "mawb": i_mawb,
        "checklist_template_id": i_temp_id,
        "checked_": i_checked_value,
        "user_lastcheck": "",
        "time_lastcheck": "",
    })
    jsonData = JSON.stringify({ cldgr });
    $.ajax({
        type: "POST",
        url: "DGR.aspx/inputCheckListDGR",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            setTimeout(function () {
                $(".input-checklist-checkbox").prop('disabled', false);
            }, 200);

            fncLoadActivity($("#myModalActivity").attr("mawb"));
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}
// function check đủ điều kiện send mnf không
function fncCheckSendMNF(c_mawb) {
    //$("#div-wait").show();
    ajaxGet = { "get": c_mawb };
    jsonData = JSON.stringify({ ajaxGet });
    $(".tr-msg-hide").hide();
    $(".td-msg-hide").hide();
    $.ajax({
        type: "POST",
        url: "DGR.aspx/reCheckSendEmailDGR",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d.checklist == "1" && d.checkwh == "1" && d.checkmodel == "1") {
                $(".tr-msg-khongloi").show();
                $(".tr-msg-loi").hide();
                $("#td-msg-comfirm-sendmsg-mawb").text(c_mawb);
                if (d.checknetweightctns == "0") {
                    $(".tr-msg-kiemtra").show();
                    $("#td-msg-kiemtra-netweightctns").show();
                }
                if (d.checkdinhkem == "0") {
                    $(".tr-msg-kiemtra").show();
                    $("#td-msg-kiemtra-dinhkem").show();
                }
                if (parseFloat(d.checkwh) > 100) {
                    $("#td-msg-kiemtra-watthour").text("WATT HOURS LỚN HƠN 100W. CÓ THỂ THUỘC PI965 IA. BẠN CÓ MUỐN GỬI MNF KO?");
                    $("#tr-msg-watthour").show();
                }
                $("#btn-sendmnf-comfirm").prop("disabled", false);
            }
            else {
                $(".tr-msg-khongloi").hide();
                $(".tr-msg-loi").hide();
                if (d.checklist == "0") {
                    $("#td-msg-kiemtra-checklist").text("CHƯA HOÀN THÀNH!");
                    $("#tr-msg-checklist").show();
                }
                if (d.checkwh == "0") {
                    $("#td-msg-kiemtra-watthour").text("WATT HOUR KHÔNG ĐƯỢC BẰNG 0!");
                    $("#tr-msg-watthour").show();
                } else if (parseFloat(d.checkwh) > 100) {
                    $("#td-msg-kiemtra-watthour").text("WATT HOURS LỚN HƠN 100W. CÓ THỂ THUỘC PI965 IA. BẠN CÓ MUỐN GỬI MNF KO?");
                    $("#tr-msg-watthour").show();
                }
                if (d.checkmodel == "0") {
                    $("#td-msg-kiemtra-model").text("MODEL KHÔNG ĐƯỢC TRỐNG!");
                    $("#tr-msg-model").show();
                }
                if (d.checknetweightctns == "0") {
                    $(".tr-msg-kiemtra").show();
                    $("#td-msg-kiemtra-netweightctns").show();
                }
                if (d.checkdinhkem == "0") {
                    $(".tr-msg-kiemtra").show();
                    $("#td-msg-kiemtra-dinhkem").show();
                }
            }
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}
function fncLoadEmailList() {
    //$("#div-wait").show();
    $("#before-send-emaillist").empty();
    ajaxGet = { "get": "1" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "DGR.aspx/reDanhSachEmail",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            var html_email_qt = "";
            var html_email_alse = "";
            var html_email_alst = "";
            var html_email_temp = "";
            var html_email = "";
            var alse_int = 0;

            $.each(d, function (item, val) {
                html_email_temp = "<label class=\"checkbox-inline\"><input type=\"checkbox\" class=\"email-"
                    + val.active + "\" value=\"" + val.id + "\" "
                    + val.active + ">" + val.email.trim() + "(" + val.type.trim() + ")" + "</label>";
                if (val.group_.trim() == "QT") {
                    html_email_qt += html_email_temp;
                }
                if (val.group_.trim() == "ALSE") {
                    if (alse_int == 0) {
                        html_email_alse += "<div class=\"checkbox\">";
                    }
                    html_email_alse += html_email_temp;
                    if (alse_int == 2) {
                        html_email_alse += "</div>";
                        alse_int = -1;
                    }
                    alse_int += 1;
                }
                if (val.group_.trim() == "ALST") {
                    html_email_alst += html_email_temp;
                }
            })

            html_email += "<div>" + "<span>Quản Trị</span>" + "<div class=\"checkbox\">" + html_email_qt + "</div>" + "</div>";
            html_email += "<div>" + "<span>ALSE</span>" + html_email_alse + "</div>";
            html_email += "<div>" + "<span>ALST</span>" + "<div class=\"checkbox\">" + html_email_alst + "</div>" + "</div>";

            $("#before-send-emaillist").append(html_email);
            $("#div-before-send").hide();
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}
var count_dgrpin = 0;
function fncLoadDGRPIN(iu) {
    //event.stopPropagation();
    //$("#div-wait").show();
    //$("#tbl-dgrpin").DataTable().clear();
    $("#tbl-dgrpin tbody").empty();
    ajaxGet2 = { "get1": iu, "get2": "" };
    jsonData = JSON.stringify({ ajaxGet2 });
    $.ajax({
        type: "POST",
        url: "DGR.aspx/reDGRPIN",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var pin_tbody = "";
            $.each(d.items, function (item, val) {
                pin_tbody += "<tr id=\"tr-dgrpin-" + val.id + "\" dgrpin-id=\"" + val.id + "\">";
                pin_tbody += "<td>" + (item + 1) + "</td>";
                pin_tbody += "<td class=\"cursor-pointer td-material-code\" >" + val.material_code.trim() + "</td>";
                pin_tbody += "<td class=\"cursor-pointer td-model-name\">" + val.model_name.trim() + "</td>";
                pin_tbody += "<td class=\"td-watt-hour\">" + val.watt_hour.trim() + "</td>";
                pin_tbody += "<td>" + val.description.trim() + "</td>";
                pin_tbody += "<td>" + val.capacity_mah.trim() + "</td>";
                pin_tbody += "<td>" + val.weight_gram.trim() + "</td>";
                pin_tbody += "<td>" + val.remark.trim() + "</td>";
                pin_tbody += "<td>" + "<button type=\"button\" class=\"btn btn-warning btn-sm btn-dgr-pin-xoa\">Xóa</button>" + "</td>";
                pin_tbody += "</tr>";
            })

            $("#tbl-dgrpin tbody").append(pin_tbody);
            if (count_dgrpin == 0) {
                $('#tbl-dgrpin').DataTable({
                    "responsive": true,
                    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "iDisplayLength": -1,
                    //"language": {
                    //   // "search": "Filter data _INPUT_ in a Table",
                    //    "searchPlaceholder": ""
                    //}
                });
                count_dgrpin += 1;
            }
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}
function fncEditDGRPIN(id) {
    $(".input-dgrpin-clear").val("");
    if (id != "") { // chinh sua
        //$("#div-wait").show();
        ajaxGet2 = { "get1": "4", "get2": id };
        jsonData = JSON.stringify({ ajaxGet2 });
        $.ajax({
            type: "POST",
            url: "DGR.aspx/reDGRPIN",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                $.each(d.items, function (item, val) {
                    $("#myModalDGRPIN-Edit").attr("pin-id", val.id);
                    $("#input-material-code").val(val.material_code.trim());
                    $("#input-model-name").val(val.model_name.trim());
                    $("#input-watt-hour").val(val.watt_hour.trim());
                    $("#input-description").val(val.description.trim());
                    $("#input-capacity-mah").val(val.capacity_mah.trim());
                    $("#input-weight-gram").val(val.weight_gram.trim());
                    $("#input-remark").val(val.remark.trim());
                })
            },
            error: function (responsive) {
            },
        }).done(function () {
            //$("#div-wait").hide();
        })
    } else {
        $("#myModalDGRPIN-Edit").attr("pin-id", id);
    }
}
function fncSaveDGRPIN(id) {
    event.stopPropagation();
    //$("#div-wait").show();
    var pin_id = "";
    var pin_remark = "";
    if (id != "edit") {
        pin_id = id;
        pin_remark = "xoa!@#$%";
    } else {
        pin_id = $("#myModalDGRPIN-Edit").attr("pin-id").trim();
        pin_remark = $("#input-remark").val();
    }
    var list_dgrpin = { items: [] };

    list_dgrpin.items.push({
        id: pin_id,
        material_code: $("#input-material-code").val(),
        model_name: $("#input-model-name").val(),
        watt_hour: $("#input-watt-hour").val(),
        description: $("#input-description").val(),
        capacity_mah: $("#input-capacity-mah").val(),
        weight_gram: $("#input-weight-gram").val(),
        remark: pin_remark,
        usercreated: "",
        datecreated: "",
        usermodified: "",
        datemodified: "",
    });

    jsonData = JSON.stringify({ list_dgrpin });
    $.ajax({
        type: "POST",
        url: "DGR.aspx/InputDGRPIN",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "0") {
                alert("Dữ liệu đầu vào thiếu hoặc không đúng!");
            }
            else if (d == "3") {
                alert("Đã xóa thành công!");
                fncLoadDGRPIN(0);
            }
            else if (d == "2") {
                alert("Đã sửa thành công!");
                $("#myModalDGRPIN-Edit").modal("hide");
            }
            else {
                alert("Đã thêm thành công!");
                $("#myModalDGRPIN-Edit").modal("hide");
            }
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng Refresh(F5) hoặc liên lạc với nhân viên IT!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}


