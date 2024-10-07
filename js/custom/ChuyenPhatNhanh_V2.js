var jsonData;
var ajaxGet;
var html_body;
var _Id;
var _HAWB;

$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();
    fncModal();
});

function fncLoad() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "ChuyenPhatNhanh_V2.aspx/reCPN",
        contentType: "application/json;charsert=utf-8",
        dataType: "json",
        data: jsonData,
        async: false,
        success: function (responsive) {
            d = responsive.d;
            html_body = "";
            if (d.length == 0) {
                html_body += "<tr><td colspan=\"19\">Chưa có dữ liệu</td></tr>"
            } else {

                $.each(d, function (key, val) {
                    html_body += "<tr>";
                    html_body += "<td>" + (key + 1) + "</td>";
                    html_body += "<td>Status</td>";
                    html_body += "<td>" + val.HAWB + "</td>";
                    html_body += "<td>" + val.PCS + "</td>";
                    html_body += "<td>" + val.GW + "</td>";
                    html_body += "<td>" + val.CBM + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioThucTe)[1] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioThucTe)[3] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioYeuCauTraHang)[1] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioYeuCauTraHang)[3] + "</td>";
                    html_body += "<td>" + val.SoTMS + "</td>";
                    html_body += "<td>" + val.SoInvoice + "</td>";
                    html_body += "<td>" + val.BU + "</td>";
                    html_body += "<td>" + val.KhoGiaoHang + "</td>";
                    html_body += "<td>" + val.FWD + "</td>";
                    html_body += "<td>" + val.KhoCPN + "</td>";
                    html_body += "<td>" + val.CDNo + "</td>";
                    html_body += "<td>" + val.GhiChu + "</td>";
                    html_body += "<td><button type=\"button\" class=\"btn btn-sm btn-warning\">Sửa</button>  <button attrHawb=\"" + val.HAWB + "\" attrId=\"" + val.Id + "\" type=\"button\" class=\"btn btn-sm btn-danger btn-xoa\">Xóa</button></td>";
                    html_body += "</tr>";
                })
            }
            $("#tbl_kehoach tbody").empty().append(html_body);
        },
        error: function (errormessage) {
            console.log("Lỗi : " + errormessage.responseText);
        }
    })
}

function fncClick() {
    // update
    $("#btn-capnhatthongtingiaohang").click(function () {
        var spreadsheet = $("#spreadsheetGiaoHang").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var keHoachCPNs = [];
        var cells;
        var cell_HAWB = "";
        var cell_TMS = "";
        var cell_INVOICE = "";
        var cell_SoKien = "";
        var cell_CBM = "";
        var cell_Kholuuhang = "";
        var cell_BU = "";
        var cell_Remark = "";
        data.forEach(function (dataItem, dataIndex) {
            cells = dataItem.cells;
            cell_HAWB = "";
            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_HAWB = cells[cellIndex].value;
                        }
                        break;

                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_TMS = cells[cellIndex].value;
                        }
                        break;

                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_INVOICE = cells[cellIndex].value;
                        }
                        break;

                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoKien = cells[cellIndex].value;
                        }
                        break;

                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            cell_CBM = cells[cellIndex].value;
                        }
                        break;


                    case 5:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Kholuuhang = cells[cellIndex].value;
                        }
                        break;


                    case 6:
                        if (cells[cellIndex].value !== undefined) {
                            cell_BU = cells[cellIndex].value;
                        }
                        break;
                    case 7:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Remark = cells[cellIndex].value;
                        }
                        break;

                }
            })

            keHoachCPNs.push(
                {
                    "iu": ""
                    , "Id": ""
                    , "HAWB": String(cell_HAWB).trim().replace(/ /g, '')
                    , "PCS": String(cell_SoKien).trim().replace(/ /g, '')
                    , "GW": ""
                    , "CBM": String(cell_CBM).trim().replace(/ /g, '')
                    , "SoTMS": String(cell_TMS).trim().replace(/ /g, '')
                    , "SoInvoice": String(cell_INVOICE).trim().replace(/ /g, '')
                    , "NCC": ""
                    , "NgayGioYeuCauTraHang": ""
                    , "PIC": ""
                    , "KhoCPN": ""
                    , "CDNo": ""
                    , "BU": String(cell_BU).trim().replace(/ /g, '')
                    , "KhoGiaoHang": String(cell_Kholuuhang).trim().replace(/ /g, '')
                    , "FWD": ""
                    , "BKSXe": ""
                    , "TenLaiXe": ""
                    , "SDT": ""
                    , "CCCD": ""
                    , "TaiTrong": ""
                    , "SoSeal": ""
                    , "GhiChu": String(cell_GhiChu).trim().replace(/ /g, '')
                    , "NgayGioThucTe": ""
                }
            );
        })

        var jsonData = JSON.stringify({ keHoachCPNs });
        $.ajax({
            type: "POST",
            url: "ChuyenPhatNhanh_V2.aspx/UpdateHAWBCPN",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d)
                if (d == "ok") {
                    Swal.fire(
                        'Cập nhật thông tin giao hàng!',
                        'Bạn đã cập nhật thông tin giao hàng thành công',
                        'success'
                    )
                    fncLoad();
                    $("#modalTaoKeHoach").modal("hide");
                }
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })
    });
    $("#btn-capnhatthongtin").click(function () {
        $("#modalCapNhatThongTinGiaoHang").modal("show");
        $("#spreadsheetThongTinGiaoHang").empty();
        $("#spreadsheetThongTinGiaoHang").kendoSpreadsheet({
            columns: 1,
            rows: 100,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheetThongTinGiaoHang").data("kendoSpreadsheet");
        var sheet = spreadsheet.activeSheet();

        sheet.range(kendo.spreadsheet.SHEETREF).clear();
        $(window).trigger("resize");
        spreadsheet.fromJSON({
            sheets: [{
                name: "KeHoach",
                //mergedCells: [
                //    "A1:G1"
                //],
                //dataSource: dataSource,
                rows: [{
                    height: 40,
                    cells: [
                        { value: "Số HAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số TMS", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số INVOICE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số kiện", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "CBM", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Kho lưu hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "BU", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Remark", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// HAWB
                        width: 150
                    },
                    {// TMSS
                        width: 150
                    },
                    {// INVOICE
                        width: 150
                    },
                    {// Số kiện
                        width: 150
                    },
                    {//CBM
                        width: 150
                    },
                    {// Kho lưu hàng
                        width: 150
                    },
                    {// BU
                        width: 150
                    },
                    {// Remark
                        width: 150
                    },
                ]
            }]
        });
    })

    $("#btn-capnhathawb").click(function () {
        var _bks = $(".input-bks").val();
        var _tenlaixe = $(".input-laixe").val();
        var _sdt = $(".input-sdt").val();
        var _cccd = $(".input-cmnd").val();
        var _taitrong = $(".input-taitrong").val();
        var _soseal = $(".input-seal").val();
        var _ngaytt = dmy2ymd($(".input-ngaythucte").val());
        var _giott = $(".input-giothucte").val();

        var spreadsheet = $("#spreadsheetGiaoHang").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var keHoachCPNs = [];
        var cells;
        var cell_HAWB = "";
        data.forEach(function (dataItem, dataIndex) {
            cells = dataItem.cells;
            cell_HAWB = "";
            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_HAWB = cells[cellIndex].value;
                        }
                        break;
                }
            })

            keHoachCPNs.push(
                {
                    "iu": ""
                    , "Id": ""
                    , "HAWB": String(cell_HAWB).trim().replace(/ /g, '')
                    , "PCS": ""
                    , "GW": ""
                    , "CBM": ""
                    , "SoTMS": ""
                    , "SoInvoice": ""
                    , "NCC": ""
                    , "NgayGioYeuCauTraHang": ""
                    , "PIC": ""
                    , "KhoCPN": ""
                    , "CDNo": ""
                    , "BU": ""
                    , "KhoGiaoHang": ""
                    , "FWD": ""
                    , "BKSXe": _bks
                    , "TenLaiXe": _tenlaixe
                    , "SDT": _sdt
                    , "CCCD": _cccd
                    , "TaiTrong": _taitrong
                    , "SoSeal": _soseal
                    , "GhiChu": ""
                    , "NgayGioThucTe": _ngaytt + " " + _giott
                }
            );
        })

        var jsonData = JSON.stringify({ keHoachCPNs });
        $.ajax({
            type: "POST",
            url: "ChuyenPhatNhanh_V2.aspx/UpdateHAWBCPN",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d)
                if (d == "ok") {
                    Swal.fire(
                        'Thêm mới!',
                        'Bạn đã cập nhật kế hoạch thành công',
                        'success'
                    )
                    fncLoad();
                    $("#modalTaoKeHoach").modal("hide");
                }
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })
    });

    $("#btn-capnhatchuyenxetheohawb").click(function () {
        $("#modalCapNhatHAWB").modal("show");
        $(".input-ngaythucte").val(moment().format("DD/MM/YYYY"));
        $(".input-giothucte").val(moment().format("HH:mm"));

        $("#spreadsheetGiaoHang").empty();
        $("#spreadsheetGiaoHang").kendoSpreadsheet({
            columns: 1,
            rows: 100,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheetGiaoHang").data("kendoSpreadsheet");
        var sheet = spreadsheet.activeSheet();
        sheet.range(kendo.spreadsheet.SHEETREF).clear();
        $(window).trigger("resize");
        spreadsheet.fromJSON({
            sheets: [{
                name: "KeHoach",
                //mergedCells: [
                //    "A1:G1"
                //],
                //dataSource: dataSource,
                rows: [{
                    height: 40,
                    cells: [
                        { value: "Số HAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// Số kiện
                        width: 150
                    }
                ]
            }]
        });
    })
    $("#tbl_kehoach").on("click", ".btn-xoa", function () {
        _Id = $(this).attr("attrId");
        _HAWB = $(this).attr("attrHAWB");

        var conf = confirm("Bạn có muốn xóa lô hàng có số HAWB: " + _HAWB + " này không?");
        if (conf) {
            ajaxGet = { "get": _Id };
            jsonData = JSON.stringify({ ajaxGet });

            $.ajax({
                type: "POST",
                url: "ChuyenPhatNhanh_V2.aspx/deleteCPN",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    if (d == "ok") {
                        fncLoad();
                        swal.fire({
                            title: "Xóa thành công",
                            text: "hệ thống sẽ tự tải lại sau 2s",
                            type: 'warning',
                            timer: 2000,
                        })
                    }
                },
                error: function (responsive) {
                    alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
                }
            });
        }
    })

    $("#btn-kehoach-luu").click(function () {
        var arrayHAWB = [];
        var checkHAWB = true;
        var messageCheckHawb = "";
        $.ajax({
            type: "POST",
            url: "ChuyenPhatNhanh_V2.aspx/reHAWB",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                $.each(d, function (key, val) {
                    arrayHAWB.push(val.HAWB)
                })
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })

        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var keHoachCPNs = [];
        var cells;
        var cell_HAWB = "";
        var cell_PCS = "";
        var cell_GW = "";
        var cell_CBM = "";
        var cell_SoTMS = "";
        var cell_SoInvoice = "";
        var cell_NCC = "";
        var cell_NgayYeuCauTraHang = "";
        var cell_GioYeuCauTraHang = "";
        var cell_PIC = "";
        var cell_KhoCPN = "";
        var cell_CDNo = "";
        var cell_BU = "";
        var cell_KhoGiaoHang = "";
        var cell_FWD = "";
        var cell_BKS = "";
        var cell_TenLaiXe = "";
        var cell_SDT = "";
        var cell_CCCD = "";
        var cell_TaiTrong = "";
        var cell_SoSeal = "";
        var cell_NgayGioThucTe = "";
        var cell_GhiChu = "";


        var ip_fwd = $(".input-fwd").val();
        var ip_chuyenbay = $(".input-chuyenbay").val();
        var ip_ngaytb = dmy2ymd($(".input-ngaynhantb").val());
        var ip_giotb = $(".input-gionhantb").val();

        data.forEach(function (dataItem, dataIndex) {
            cells = dataItem.cells;
            cell_HAWB = "";
            cell_PCS = "";
            cell_GW = "";
            cell_CBM = "";
            cell_SoTMS = "";
            cell_SoInvoice = "";
            cell_NCC = "";
            cell_NgayYeuCauTraHang = "";
            cell_GioYeuCauTraHang = "";
            cell_PIC = "";
            cell_KhoCPN = "";
            cell_CDNo = "";
            cell_BU = "";
            cell_KhoGiaoHang = "";
            cell_FWD = "";
            cell_BKS = "";
            cell_TenLaiXe = "";
            cell_SDT = "";
            cell_CCCD = "";
            cell_TaiTrong = "";
            cell_SoSeal = "";
            cell_NgayGioThucTe = "";
            cell_GhiChu = "";
            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_HAWB = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PCS = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_GW = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_CBM = cells[cellIndex].value;
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoTMS = cells[cellIndex].value;
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoInvoice = cells[cellIndex].value;
                        }
                        break;
                    case 6:
                        if (cells[cellIndex].value !== undefined) {
                            cell_NCC = cells[cellIndex].value;
                        }
                        break;
                    case 7:
                        if (cells[cellIndex].value !== undefined) {
                            cell_NgayYeuCauTraHang = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));

                        }
                        break;
                    case 8:
                        if (cells[cellIndex].value !== undefined) {
                            if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                                cell_GioYeuCauTraHang = Decimal2Time(cells[cellIndex].value * 24);
                            }
                        }
                        break;
                    case 9:
                        if (cells[cellIndex].value !== undefined) {
                            cell_PIC = cells[cellIndex].value;
                        }

                        break;
                    case 10:
                        if (cells[cellIndex].value !== undefined) {
                            cell_KhoCPN = cells[cellIndex].value;
                        }

                        break;
                    case 11:
                        if (cells[cellIndex].value !== undefined) {
                            cell_CDNo = cells[cellIndex].value;
                        }

                        break;
                    case 12:
                        if (cells[cellIndex].value !== undefined) {
                            cell_BU = cells[cellIndex].value;
                        }

                        break;
                    case 13:
                        if (cells[cellIndex].value !== undefined) {
                            cell_KhoGiaoHang = cells[cellIndex].value;
                        }

                        break;
                    case 14:
                        if (cells[cellIndex].value !== undefined) {
                            cell_GhiChu = cells[cellIndex].value;
                        }
                        break;
                }

            })

            keHoachCPNs.push(
                {
                    "iu": ""
                    , "Id": ""
                    , "HAWB": String(cell_HAWB).trim().replace(/ /g, '')
                    , "PCS": String(cell_PCS).trim().replace(/ /g, '')
                    , "GW": String(cell_GW).trim().replace(/ /g, '')
                    , "CBM": String(cell_CBM).trim().replace(/ /g, '')
                    , "SoTMS": String(cell_SoTMS).trim().replace(/ /g, '')
                    , "SoInvoice": String(cell_SoInvoice).trim().replace(/ /g, '')
                    , "NCC": String(cell_NCC).trim().replace(/ /g, '')
                    , "NgayGioYeuCauTraHang": String(cell_NgayYeuCauTraHang).trim().replace(/ /g, '') + " " + String(cell_GioYeuCauTraHang).trim().replace(/ /g, '')
                    , "PIC": String(cell_PIC).trim().replace(/ /g, '')
                    , "KhoCPN": String(cell_KhoCPN).trim().replace(/ /g, '')
                    , "CDNo": String(cell_CDNo).trim().replace(/ /g, '')
                    , "BU": String(cell_BU).trim().replace(/ /g, '')
                    , "KhoGiaoHang": String(cell_KhoGiaoHang).trim().replace(/ /g, '')
                    , "FWD": ip_fwd
                    , "BKSXe": ""
                    , "TenLaiXe": ""
                    , "SDT": ""
                    , "CCCD": ""
                    , "TaiTrong": ""
                    , "SoSeal": ""
                    , "GhiChu": String(cell_GhiChu).trim().replace(/ /g, '')
                    , "NgayGioThucTe": ip_ngaytb + " " + ip_giotb
                }
            );

            if (String(cell_HAWB).trim().replace(/ /g, '') !== ""){
                if (arrayHAWB.indexOf(String(cell_HAWB).trim().replace(/ /g, '')) == - 1) {
                    arrayHAWB.push(String(cell_HAWB).trim().replace(/ /g, ''));
                } else {
                    checkHAWB = false;
                    messageCheckHawb += String(cell_HAWB).trim().replace(/ /g, '') + " ,";
                }
            }
        })

        if (checkHAWB) {
            insertUpdateKeHoach(keHoachCPNs);
        } else {
            var conf = confirm("Các lô hàng có hawb " + messageCheckHawb + " đã tồn tại trong hệ thống hoặc bạn nhập trùng, bạn muốn tiếp tục không?");
            if (conf) {
                insertUpdateKeHoach(keHoachCPNs);
            }
        }
    });


    // Show modal excle nhập kế hoạch
    $("#btn-taokehoach").click(function () {
        $(".input-ngaynhantb").val(moment().format("DD/MM/YYYY"));
        $(".input-gionhantb").val(moment().format("HH:mm"));
        $("#modalTaoKeHoach").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheet").empty();
        $("#spreadsheet").kendoSpreadsheet({
            columns: 2,
            rows: 500,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        //var sheet = spreadsheet.activeSheet();
        //sheet.range(kendo.spreadsheet.SHEETREF).clear();
        $(window).trigger("resize");
        spreadsheet.fromJSON({
            sheets: [{
                name: "KeHoach",
                //mergedCells: [
                //    "A1:G1"
                //],
                rows: [{
                    height: 40,
                    cells: [
                        { value: "HAWB", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số kiện", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "G.W", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "CBM", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số TMS", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số Invoice", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Nhà cung cấp", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Ngày yêu cầu trả hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Giờ yêu cầu trả hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PIC", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Kho CPN", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "CD No", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "BU", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Kho giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Remark", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// HAWB
                        width: 110
                    },
                    {// Số kiện
                        width: 110
                    }, {// G.W
                        width: 50
                    },
                    {// CBM
                        width: 50
                    },
                    {// So tms
                        width: 70
                    },
                    {// Số Invoice
                        width: 110
                    }
                    ,
                    {// Số Invoice
                        width: 110
                    },
                    {// "Ngày yêu câu trả hàng
                        width: 100
                    },
                    {// Giờ yêu câu trả hàng
                        width: 100
                    },
                    {//PIC
                        width: 50
                    },
                    {// Kho CPN
                        width: 100
                    },
                    {// CD No
                        width: 50
                    },
                    {// BU
                        width: 50
                    },
                    {// Kho giao hàng
                        width: 50
                    },
                    {// Ghi chú
                        width: 150
                    },

                ]
            }]
        });
        var sheet = spreadsheet.activeSheet();
        // Mảng chứa các phạm vi cột cần tô màu
        var columns = ["A2:A1000", "B2:B1000", "C2:C1000", "G2:G1000", "J2:J1000", "K2:K1000", "L2:L1000"];

        // Lặp qua các phạm vi cột và thiết lập màu nền
        columns.forEach(function (range) {
            sheet.range(range).background("#FFCCCC");
        });
    });
}

function fncChange() {

}

function fncModal() {
    $('#modalTaoKeHoach').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });
    $('#modalCapNhatHAWB').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });

    $('#modalCapNhatThongTinGiaoHang').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });

}

function insertUpdateKeHoach(keHoachCPNs) {
    var jsonData = JSON.stringify({ keHoachCPNs });
    $.ajax({
        type: "POST",
        url: "ChuyenPhatNhanh_V2.aspx/InsertUpdateCPN",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d == "ok") {
                Swal.fire(
                    'Thêm mới!',
                    'Bạn đã thêm kế hoạch thành công',
                    'success'
                )
                fncLoad();
                $("#modalTaoKeHoach").modal("hide");
            }
        },
        error: function () {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                'error'
            )
        }
    }).done(function () {
    })
}