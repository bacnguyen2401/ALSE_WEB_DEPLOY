var jsonData;
var ajaxGet;
var html_body;
var _Id;
var _HAWB;
var keHoachCPNs;
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
            //console.log(d)
            html_body = "";
            if (d.chuyenPhatNhanhKeHoach.length == 0) {
                html_body += "<tr><td colspan=\"19\">Chưa có dữ liệu</td></tr>"
            } else {
                $.each(d.chuyenPhatNhanhKeHoach, function (key, val) {
                    html_body += "<tr>";
                    html_body += "<td>" + (key + 1) + "</td>";
                    html_body += "<td>PLAN</td>";
                    html_body += "<td>" + val.HAWB + "</td>";
                    html_body += "<td>" + val.PCS + "</td>";
                    html_body += "<td>" + val.GW + "</td>";
                    html_body += "<td>" + val.CBM + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioThongBao)[1] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioThongBao)[3] + "</td>";
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
                    html_body += "<td><button type=\"button\"  attrHawb=\"" + val.HAWB + "\" attrId=\"" + val.Id + "\" class=\"btn btn-sm btn-warning btn-sua\"  >Sửa</button>  <button attrHawb=\"" + val.HAWB + "\" attrId=\"" + val.Id + "\" type=\"button\" class=\"btn btn-sm btn-danger btn-xoa\">Xóa</button></td>";
                    html_body += "</tr>";
                })
            }
            $("#tbl_kehoach tbody").empty().append(html_body);

            html_body = "";

            if (d.chuyenPhatNhanhChuyenXe.length == 0) {
                html_body += "<tr><td colspan=\"19\">Chưa có dữ liệu</td></tr>"
            } else {
                $.each(d.chuyenPhatNhanhChuyenXe, function (key, val) {
                    html_body += "<tr>";
                    html_body += "<td>" + (key + 1) + "</td>";
                    html_body += "<td>TRUCKING</td>";
                    html_body += "<td>" + val.HAWB + "</td>";
                    html_body += "<td>" + val.PCS + "</td>";
                    html_body += "<td>" + val.GW + "</td>";
                    html_body += "<td>" + val.CBM + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioThongBao)[1] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioThongBao)[3] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioYeuCauTraHang)[1] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioYeuCauTraHang)[3] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioThucTe)[1] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioThucTe)[3] + "</td>";
                    html_body += "<td>" + val.BKSXe + "</td>";
                    html_body += "<td>" + val.SoTMS + "</td>";
                    html_body += "<td>" + val.SoInvoice + "</td>";
                    html_body += "<td>" + val.BU + "</td>";
                    html_body += "<td>" + val.KhoGiaoHang + "</td>";
                    html_body += "<td>" + val.FWD + "</td>";
                    html_body += "<td>" + val.KhoCPN + "</td>";
                    html_body += "<td>" + val.CDNo + "</td>";
                    html_body += "<td>" + val.GhiChu + "</td>";
                    html_body += "<td><button type=\"button\"  attrHawb=\"" + val.HAWB + "\" attrId=\"" + val.Id + "\" class=\"btn btn-sm btn-warning btn-sua\"  >Sửa</button>  <button attrHawb=\"" + val.HAWB + "\" attrId=\"" + val.Id + "\" type=\"button\" class=\"btn btn-sm btn-danger btn-xoa\">Xóa</button></td>";
                    html_body += "</tr>";
                })
            }
            $("#tbl_chuyenxe tbody").empty().append(html_body);

            html_body = "";

            if (d.chuyenPhatNhanhCargoready.length == 0) {
                html_body += "<tr><td colspan=\"19\">Chưa có dữ liệu</td></tr>"
            } else {
                $.each(d.chuyenPhatNhanhCargoready, function (key, val) {
                    html_body += "<tr>";
                    html_body += "<td>" + (key + 1) + "</td>";
                    html_body += "<td>CARGO READY</td>";
                    html_body += "<td>" + val.HAWB + "</td>";
                    html_body += "<td>" + val.PCS + "</td>";
                    html_body += "<td>" + val.GW + "</td>";
                    html_body += "<td>" + val.CBM + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioThongBao)[1] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioThongBao)[3] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioYeuCauTraHang)[1] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioYeuCauTraHang)[3] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioThucTe)[1] + "</td>";
                    html_body += "<td>" + convertDate(val.NgayGioThucTe)[3] + "</td>";
                    html_body += "<td>" + val.BKSXe + "</td>";
                    html_body += "<td>" + val.SoTMS + "</td>";
                    html_body += "<td>" + val.SoInvoice + "</td>";
                    html_body += "<td>" + val.BU + "</td>";
                    html_body += "<td>" + val.KhoGiaoHang + "</td>";
                    html_body += "<td>" + val.FWD + "</td>";
                    html_body += "<td>" + val.KhoCPN + "</td>";
                    html_body += "<td>" + val.CDNo + "</td>";
                    html_body += "<td>" + val.GhiChu + "</td>";
                    html_body += "<td><button type=\"button\"  attrHawb=\"" + val.HAWB + "\" attrId=\"" + val.Id + "\" class=\"btn btn-sm btn-warning btn-sua\"  >Sửa</button>  <button attrHawb=\"" + val.HAWB + "\" attrId=\"" + val.Id + "\" type=\"button\" class=\"btn btn-sm btn-danger btn-xoa\">Xóa</button></td>";
                    html_body += "</tr>";
                })
            }
            $("#tbl_cargoready tbody").empty().append(html_body);
        },
        error: function (errormessage) {
            console.log("Lỗi : " + errormessage.responseText);
        }
    })
}

function fncClick() {

    $("#btn-capnhatkvgs").click(function () {
        var spreadsheet = $("#spreadsheetKVG").data("kendoSpreadsheet");
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
                    , "BKSXe": ""
                    , "TenLaiXe": ""
                    , "SDT": ""
                    , "CCCD": ""
                    , "TaiTrong": ""
                    , "SoSeal": ""
                    , "GhiChu": ""
                    , "NgayGioThucTe": ""
                    , "MaTheoDoi": ""
                    , "DonViVanTai": ""
                    , "SoNiemPhong": ""
                    , "DonDieuPhoi": ""
                    , "NgayGioGiaoHangXong": "" 
                }
            );
        })

        jsonData = JSON.stringify({ keHoachCPNs });
        $.ajax({
            type: "POST",
            url: "ChuyenPhatNhanh_V2.aspx/UpdateCargoReady",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d)
                if (d == "ok") {
                    Swal.fire(
                        'Cập nhật!',
                        'Bạn đã cập nhật kế cargo ready thành công',
                        'success'
                    )
                    fncLoad();
                    $("#modalCapNhatKVGS").modal("hide");
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
    })
    $("#btn-chuyenkvgiamsat").click(function () {
        $("#modalCapNhatKVGS").modal("show");
        $("#spreadsheetKVG").empty();
        $("#spreadsheetKVG").kendoSpreadsheet({
            columns: 1,
            rows: 100,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheetKVG").data("kendoSpreadsheet");
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

    $("#btn-kehoach-capnhat").click(function () {
        var _Id = $(this).attr("attrid")
        keHoachCPNs = [];
       
        keHoachCPNs.push(
            {
                "iu": ""
                , "Id": _Id
                , "HAWB": $(".input-capnhat-hawb").val()
                , "PCS": $(".input-capnhat-pcs").val()
                , "GW": $(".input-capnhat-gw").val()
                , "CBM": $(".input-capnhat-cbm").val()
                , "SoTMS": $(".input-capnhat-tms").val()
                , "SoInvoice": $(".input-capnhat-invoice").val()
                , "NCC": $(".input-capnhat-ncc").val()
                , "NgayGioYeuCauTraHang": dmy2ymd($(".input-capnhat-ngayyctrahang").val()) + " " + $(".input-capnhat-gioyctrahang").val()
                , "PIC": $(".input-capnhat-pic").val()
                , "KhoCPN": $(".input-capnhat-khocpn").val()
                , "CDNo": $(".input-capnhat-cdno").val()
                , "BU": $(".input-capnhat-bu").val()
                , "KhoGiaoHang": $(".input-capnhat-khogiaohang").val()
                , "FWD": $(".input-capnhat-fwd").val()
                , "BKSXe": $(".input-capnhat-bks").val()
                , "TenLaiXe": $(".input-capnhat-tenlaixe").val()
                , "SDT": $(".input-capnhat-sdt").val()
                , "CCCD": $(".input-capnhat-cmnd").val()
                , "TaiTrong": $(".input-capnhat-taitrong").val()
                , "SoSeal": $(".input-capnhat-seal").val()
                , "GhiChu": $(".input-capnhat-ghichu").val()
                , "NgayGioThucTe": dmy2ymd($(".input-capnhat-ngaythucte").val()) + " " + $(".input-capnhat-giothucte").val()
                , "NgayGioThongBao": dmy2ymd($(".input-capnhat-ngaynhanthongbao").val()) + " " + $(".input-capnhat-gionhanthongbao").val()
            }
        );
        insertUpdateKeHoach(keHoachCPNs)
    });
    $(".tbl_click").on("click", ".btn-sua", function () {
        _Id = $(this).attr("attrId");
        _HAWB = $(this).attr("attrHAWB");
        $("#btn-kehoach-capnhat").attr("attrId", _Id);
        $("#modalCPNCapNhat").modal({ static: true }, "show");
        ajaxGet = { "get": _Id };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "ChuyenPhatNhanh_V2.aspx/reCPNById",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d)
                $(".input-capnhat-fwd").val(d.FWD);
                $(".input-capnhat-cdno").val(d.CDNo);
                $(".input-capnhat-ngaynhanthongbao").val(convertDate(d.NgayGioThongBao)[1]);
                $(".input-capnhat-gionhanthongbao").val(convertDate(d.NgayGioThongBao)[3]);
                $(".input-capnhat-hawb").val(d.HAWB);
                $(".input-capnhat-pcs").val(d.PCS);
                $(".input-capnhat-gw").val(d.GW);
                $(".input-capnhat-cbm").val(d.CBM);
                $(".input-capnhat-tms").val(d.SoTMS);
                $(".input-capnhat-invoice").val(d.SoInvoice);
                $(".input-capnhat-bu").val(d.BU);
                $(".input-capnhat-khogiaohang").val(d.KhoGiaoHang);
                $(".input-capnhat-khocpn").val(d.KhoCPN);
                $(".input-capnhat-pic").val(d.PIC);
                $(".input-capnhat-ngayyctrahang").val(convertDate(d.NgayGioYeuCauTraHang)[1]);
                $(".input-capnhat-gioyctrahang").val(convertDate(d.NgayGioYeuCauTraHang)[3]);
                $(".input-capnhat-bks").val(d.BKSXe);
                $(".input-capnhat-tenlaixe").val(d.TenLaiXe);
                $(".input-capnhat-sdt").val(d.SDT);
                $(".input-capnhat-cmnd").val(d.CCCD);
                $(".input-capnhat-seal").val(d.SoSeal);
                $(".input-capnhat-taitrong").val(d.TaiTrong);
                $(".input-capnhat-ngaythucte").val(convertDate(d.NgayGioThucTe)[1]);
                $(".input-capnhat-giothucte").val(convertDate(d.NgayGioThucTe)[3]);
                $(".input-capnhat-ncc").val(d.NCC);
                $(".input-capnhat-ghichu").val(d.GhiChu);
            },
            error: function (responsive) {
                alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
            }
        });

    });

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
                        , { value: "Kho giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
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
        var _matheodoi = $(".input-matheodoi").val();
        var _donvivantai = $(".input-donvivantai").val();
        var _soniemphong = $(".input-niemphong").val();
        var _dondieuphoi = $(".input-dondieuphoi").val();
        var _ngaygiaohangxong = dmy2ymd($(".input-ngaygiaoxong").val());
        var _giogiaohangxong = $(".input-giogiaoxong").val();

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
                    , "MaTheoDoi": _matheodoi
                    , "DonViVanTai": _donvivantai
                    , "SoNiemPhong": _soniemphong
                    , "DonDieuPhoi": _dondieuphoi
                    , "NgayGioGiaoHangXong": _ngaygiaohangxong + " " + _giogiaohangxong
                }
            );
        })

        var jsonData = JSON.stringify({ keHoachCPNs });
        $.ajax({
            type: "POST",
            url: "ChuyenPhatNhanh_V2.aspx/UpdateHAWBCPNChuyenXe",
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
        showMaTheoDoi();
        $("#modalCapNhatHAWB").modal("show");
        $(".input-ngaythucte").val(moment().format("DD/MM/YYYY"));
        $(".input-giothucte").val(moment().format("HH:mm"));

        //$(".input-ngaygiaoxong").val(moment().format("DD/MM/YYYY"));
        //$(".input-giogiaoxong").val(moment().format("HH:mm"));

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
    $(".tbl_click").on("click", ".btn-xoa", function () {
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
        var _fwd = "";
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

            if (String(cell_HAWB).trim().replace(/ /g, '') !== "") {

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
                        , "NgayGioThucTe": ""
                        , "NgayGioThongBao": ip_ngaytb + " " + ip_giotb
                    }
                );

                if (String(cell_HAWB).trim().replace(/ /g, '') !== "") {
                    if (arrayHAWB.indexOf(String(cell_HAWB).trim().replace(/ /g, '')) == - 1) {
                        arrayHAWB.push(String(cell_HAWB).trim().replace(/ /g, ''));
                    } else {
                        checkHAWB = false;
                        messageCheckHawb += String(cell_HAWB).trim().replace(/ /g, '') + " ,";
                    }
                }
            }
        })

        //console.log(keHoachCPNs)
        if (ip_fwd != "") {
            if (keHoachCPNs.length != 0) {
                if (checkHAWB) {
                    insertupdatekehoach(keHoachCPNs);
                } else {
                    var conf = confirm("các lô hàng có hawb " + messageCheckHawb + " đã tồn tại trong hệ thống hoặc bạn nhập trùng, bạn muốn tiếp tục không?");
                    if (conf) {
                        insertupdatekehoach(keHoachCPNs);
                    }
                }
            } else {
                alert("Vui lòng nhập thông tin lô hàng!");
            }
        } else {
            alert("Vui lòng nhập FWD!");
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
                        width: 50
                    }, {// G.W
                        width: 50
                    },
                    {// CBM
                        width: 50
                    },
                    {// So tms
                        width: 150
                    },
                    {// Số Invoice
                        width: 150
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
                        width: 150
                    },
                    {// Kho CPN
                        width: 100
                    },
                    {// CD No
                        width: 150
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
        var columns = ["A2:A1000", "B2:B1000", "C2:C1000", "G2:G1000", "J2:J1000", "K2:K1000", "F2:F1000"];

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
    $('#modalCapNhatKVGS').on('shown.bs.modal', function () {
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
                    'Thành công!',
                    'Bạn đã thêm hoặc sửa kế hoạch thành công',
                    'success'
                )
                fncLoad();
                $("#modalTaoKeHoach").modal("hide");
                $("#modalCPNCapNhat").modal("hide");
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

function showMaTheoDoi() {
    ajaxGet = { "get": "" }
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "ChuyenPhatNhanh_V2.aspx/showMatheoDoi",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d.length == 1) {
                $(".input-matheodoi").val("000" + d)
            } else if (d.length == 2) {
                $(".input-matheodoi").val("00" + d)
            } else if (d.length == 3) {
                $(".input-matheodoi").val("0" + d)
            } else if (d.length == 4) {
                $(".input-matheodoi").val("" + d)
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
