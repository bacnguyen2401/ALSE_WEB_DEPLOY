var html_body;
var jsonData;
var ajaxGet;
var ajaxGet1;
var ajaxGet2;
var ajaxGet3;
var soPOD;
var html_selectBKS;

var DataInputInsert = [];
var DataInputUpdate = [];


$(document).ready(function () {
    // ngày hiện tại 1
    var d_now = new Date();
    $("#input-baocao-tu-ngay").datepicker("setDate", new Date(d_now.getFullYear(), d_now.getMonth(), 1));
    $("#input-baocao-den-ngay").datepicker("setDate", new Date(d_now.getFullYear(), d_now.getMonth() + 1, 0));
    fncAction();
    fncLoad("");
    fncClick();
    fncChange();
    fncDateTime();
});


function fncAction() {

    $("#ModalAddTruck").on('hidden.bs.modal', function () {
        $("#ModalTruck").modal('show');
        $("#input-laixe").val("");
        $("#input-bks").val("");
        $("#input-sdt").val("");
        $("#input-cmnd").val("");
        $("#input-taitrong").val("");
        fncLoadTruckPOD();
    })

    $('#modalCapNhatSoTMS').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });

    $('#modalCapNhatGiaoHang').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });


    $('#modalCapNhatGiaoHang').on('hidden.bs.modal', function () {
        $(".input-pod").val("");
        $(".input-dondieuphoi").val("");
        $(".input-bks").val("");
        $(".input-laixe").val("");
        $(".input-sdt").val("");
        $(".input-cmnd").val("");
        //$(".input-ngay").val("");
        //$(".input-gio").val("");
        $(".input-taitrong").val("");
        $(".input-seal").val("");
        $(".input-ngaygiaohang").val("");
        $(".input-giogiaohang").val("");
    });

    $('#ModalAddKho').on('hidden.bs.modal', function () {
        $("#input-diachigiaohang").val("");
        $("#input-nguoinhan").val("");
        $("#input-sdtkho").val("");
        $("#input-soBU").val("");
    });
}

function fncLoad(hoanthanh) {
    ajaxGet = { "get": hoanthanh };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyPOD.aspx/reList",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            html_body = "";
            $.each(d, function (key, val) {
                html_body += "<tr>";
                html_body += "<td>" + (key + 1) + "</td>";
                html_body += "<td>" + val.SoPOD + "</td>";
                //html_body += "<td>" + convertDate(val.NgayGioBKS)[1] + "</td>";
                //html_body += "<td>" + convertDate(val.NgayGioBKS)[3] + "</td>";
                html_body += "<td>" + convertDate(val.NgayGioGiao)[1] + "</td>";
                html_body += "<td>" + convertDate(val.NgayGioGiao)[3] + "</td>";
                html_body += "<td>" + val.BKS + "</td>";
                html_body += "<td>" + val.TaiTrong + "</td>";
                html_body += "<td>" + val.DonDieuPhoi + "</td>";
                html_body += "<td>" + val.NguoiTao + "</td>";
                html_body += "<td>" + val.NgayTao + "</td>";
                html_body += "<td>" + val.NguoiSua + "</td>";
                html_body += "<td>" + val.NgaySua + "</td>";
                html_body += "<td>";
                html_body += "<button type=\"button\" class=\"btn btn-info btn-sm btn-xem\" attrPOD=\"" + val.SoPOD + "\">Xem</button> "
                html_body += " <button type=\"button\" class=\"btn btn-warning btn-sm btn-sua\" attrPOD=\"" + val.SoPOD + "\">Sửa</button> "
                html_body += " <button type=\"button\" class=\"btn btn-danger btn-sm  btn-xoa\" attrPOD=\"" + val.SoPOD + "\">Xóa</button>"
                html_body += "</td >";
                html_body += "</tr>";
            });

            $("#tbl_POD tbody").empty().append(html_body);
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


function fncClick() {
    $(".container").on("click", ".span-xoakho", function () {
        var conf = confirm("Bạn có muốn xóa thông tin kho này không ?");
        if (conf == true) {
            var ajaxGet = { "get": $(this).attr("idattr") };

            jsonData = JSON.stringify({ ajaxGet });
            //$("#div-wait").show();rehangNhapPODTimKiem
            $.ajax({
                type: "POST",
                url: "QuanLyPOD.aspx/deleteThongTinKho",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    alert('Xóa thành công!')
                    $("#modalThongTinKho").modal("hide");
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
        }

    });
    //Click view modal sua thongtinkho
    $(".container").on("click", ".span-suakho", function () {
        $("#btn-luukho").attr("attrid", $(this).attr("idattr"));

        $("#modalThongTinKho").modal("hide");
        $("#ModalAddKho").modal("show");

        var ajaxGet = { "get": $(this).attr("idattr") };

        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyPOD.aspx/reThongTinKhoById",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                $("#input-diachigiaohang").val(d.DiaChiGiaoHang)
                $("#input-nguoinhan").val(d.NguoiNhan)
                $("#input-sdtkho").val(d.SDT)
                $("#input-soBU").val(d.SoBU)
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
    })

    // Thêm mới thông tin kho
    $("#btn-luukho").click(function () {
        var AttrId = $(this).attr("attrid");
        var item = {};
        item = {
            "Id": AttrId,
            "DiaChiGiaoHang": $("#input-diachigiaohang").val(),
            "NguoiNhan": $("#input-nguoinhan").val(),
            "SDT": $("#input-sdtkho").val(),
            "SoBU": $("#input-soBU").val(),
            "ThoiGianNhanHang": $("#input-thoigiannhanhang").val(),
        }
        jsonData = JSON.stringify({ item });
        //$("#div-wait").show();rehangNhapPODTimKiem

        //console.log(jsonData)
        $.ajax({
            type: "POST",
            url: "QuanLyPOD.aspx/InsertUpdateThongTinKho",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "ok") {
                    alert("Thêm mới thành công!");
                    $("#ModalAddKho").modal("hide");
                };
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })

    });

    //Add kho modal show
    $("#btn-themkho").click(function () {
        $("#modalThongTinKho").modal("hide");
        $("#ModalAddKho").modal({ show: true, backdrop: "static", keyboard: false });
        $("#btn-luukho").attr("attrid", "");
    });

    //Show ThongTinKho
    $("#btn-thongtinkho").click(function () {

        var userId = $("#username").attr("userid");
        if (userId == "1" || userId == "21" || userId == "78" || userId == "13" || userId == "95") {
            $("#modalThongTinKho").modal({ show: true, backdrop: "static", keyboard: false });
            fncThongTinKho();
        } else {
            alert("Bạn không có quyền");
        }

    });

    // Gửi mail co khách hàng
    $("#btn-guimail").click(function () {
        var ajaxGet = { "get": "" };

        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyPOD.aspx/SendEmailGTT",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d)
                if (d == "ok") {
                    alert("Gửi mail thành công!")
                } else {
                    alert("Lỗi vui lòng kiểm tra lại")
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
    })


    //click xóa truck
    $(".container").on("click", ".span-xoa", function () {
        var conf = confirm("Bạn có muốn xóa lái xe này không ?");
        if (conf == true) {
            var ajaxGet = { "get": $(this).attr("idattr") };

            jsonData = JSON.stringify({ ajaxGet });
            //$("#div-wait").show();rehangNhapPODTimKiem
            $.ajax({
                type: "POST",
                url: "PODView.aspx/deleteTruckPOD",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    alert('Xóa thành công!')
                    fncLoadTruckPOD()
                    $("#ModalAddTruck").modal("hide");
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
        }

    });

    // Click add truck
    $("#btn-luu").click(function () {
        var tennhanvien = $("#input-laixe").val();
        var biensoxe = $("#input-bks").val();
        var sodienthoai = $("#input-sdt").val();
        var cmnd = $("#input-cmnd").val();
        var taitrong = $("#input-taitrong").val();

        var ajaxGet6 = { "get1": biensoxe, "get2": tennhanvien, "get3": sodienthoai, "get4": $(this).attr("attrid"), "get5": cmnd, "get6": taitrong };

        jsonData = JSON.stringify({ ajaxGet6 });
        //$("#div-wait").show();rehangNhapPODTimKiem
        $.ajax({
            type: "POST",
            url: "PODView.aspx/insertTruckPOD",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "ok") {
                    alert("Thêm mới thành công!");
                    $("#ModalAddTruck").modal("hide");
                };
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })
    });

    //Click view modal sua
    $(".container").on("click", ".span-sua", function () {
        $("#btn-luu").attr("attrid", $(this).attr("idattr"));

        $("#ModalAddTruck").modal("show");
        $("#ModalTruck").modal("hide");

        var ajaxGet = { "get": $(this).attr("idattr") };

        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "PODView.aspx/reTruckPODByID",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                $("#input-laixe").val(d.LaiXe)
                $("#input-bks").val(d.BienSoXe)
                $("#input-sdt").val(d.SoDienThoai)
                $("#input-cmnd").val(d.SoCMND)
                $("#input-taitrong").val(d.TaiTrong)
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
    })
    //Add truck modal show
    $("#btn-themlaixe").click(function () {
        $("#ModalTruck").modal("hide");
        $("#ModalAddTruck").modal({ show: true, backdrop: "static", keyboard: false });
        $("#btn-luu").attr("attrid", "");
    });
    //Show Truck
    $("#btn-truck").click(function () {
        $("#ModalTruck").modal({ show: true, backdrop: "static", keyboard: false });
        fncLoadTruckPOD();
    });

    // Xuất báo cáo sản lượng 2  - v2
    $("#btn-xuatbaocao").click(function () {
        var g_tenfile = "GTTvsGTVBaoCao";
        var ajaxGet3 = { "get1": g_tenfile, "get2": "", "get3": 3 };
        jsonData = JSON.stringify({ ajaxGet3 });
        $.ajax({
            type: "POST",
            url: "QuanLyPOD.aspx/RePODBaoCaoThang",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            //timeout: 120000,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                window.open("../DownloadFile.aspx?Root=ThanhToan&Folder=BAOCAO&FileName=" + g_tenfile + ".xlsx");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
    })

    // Click hiển thị POD hoàn thành
    $("#btn-podhoanthanh").click(function () {
        fncLoad("hoanthanh");
    })

    //CLick xuất excel
    $("#btn-xuatbangkeGTT").click(function () {
        var g_tenfile = "GTTvsGTV";
        var tungay = dmy2ymd($("#input-baocao-tu-ngay").val())
        var denngay = dmy2ymd($("#input-baocao-den-ngay").val())
        var ajaxGet3 = { "get1": g_tenfile, "get2": tungay, "get3": denngay };
        jsonData = JSON.stringify({ ajaxGet3 });
        $.ajax({
            type: "POST",
            url: "QuanLyPOD.aspx/RePODBaoCao",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            //timeout: 120000,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                window.open("../DownloadFile.aspx?Root=ThanhToan&Folder=BAOCAO&FileName=" + g_tenfile + ".xlsx");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
    })

    // Click lưu số TMS
    $("#btn-capnhatsotms-luu").click(function () {

        var arrInvoice = [];
        var DiaChiArr = [];
        var SoBuArr = [];
        var checkTMS = true;

        // Trả về số Invoice 
        ajaxGet = { "get": "" };
        var jsonData = JSON.stringify({ ajaxGet });
        //console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyPOD.aspx/reInvoiveHN",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                $.each(d, function (key, val) {
                    arrInvoice.push(val.Invoice);
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

        // Trả về số Bu và address
        ajaxGet = { "get": "" };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyPOD.aspx/reThongTinKho",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                $.each(d, function (key, val) {
                    DiaChiArr.push(val.DiaChiGiaoHang.trim());
                    SoBuArr.push(val.SoBU.trim());
                });

            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });


        var spreadsheet = $("#spreadsheetSoTMS").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var DataInput = [];
        var cells;
        var cell_tms = "";
        var cell_gw = "";
        var cell_cbm = "";
        var cell_Invoice = "";


        DataInputInsert = [];

        ////console.log(data);
        data.forEach(function (dataItem, dataIndex) {
            cell_tms = "";
            cell_Invoice = "";
            cell_DiaChi = "";
            cell_BU = "";
            cell_Ghichu = "";
            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_tms = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Invoice = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DiaChi = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_BU = cells[cellIndex].value;
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Ghichu = cells[cellIndex].value;
                        }
                        break;
                }
            })

            if (arrInvoice.indexOf(cell_Invoice.toString()) == -1) {
                alert("Số INVOICE " + cell_Invoice + " chưa được cập nhật vui lòng kiểm tra lại")
                checkTMS = false;
            } else {
                //if (DiaChiArr.indexOf(cell_DiaChi.toString().trim().replace(/ /g, '')) == -1 || SoBuArr.indexOf(cell_BU.toString().trim().replace(/ /g, '')) == -1) {
                //    alert("Địa chỉ " + cell_DiaChi + " hoặc Số BU " + cell_BU + " không có trong kho hàng vui lòng kiểm tra lại.");
                //    checkTMS = false;
                //} else {
                // A Quyết bảo bỏ check địa chỉ và BU
                DataInputInsert.push(
                    {
                        "ID": ""
                        , "SoKien": ""
                        , "INVOICE": String(cell_Invoice).trim().replace(/ /g, '')
                        , "NgayGioGiao": ""
                        , "DiaChiGiaoHang": String(cell_DiaChi).trim().replace(/ /g, '')
                        , "NguoiNhanHang": ""
                        , "SoDienThoaiNguoiNhan": ""
                        , "SoBU": String(cell_BU).trim().replace(/ /g, '')
                        , "REMARK": String(cell_Ghichu).trim().replace(/ /g, '')
                        , "HienThi": ""
                        , "NguoiTao": ""
                        , "NgayTao": ""
                        , "NguoiSua": ""
                        , "NgaySua": ""
                        , "SoTMS": String(cell_tms).trim().replace(/ /g, '')
                        , "SoPOD": ""
                        , "DonDieuPhoi": ""
                        , "TaiTrong": ""
                        , "GW": ""
                        , "CBM": ""

                    });
                //}
            }
        });

        if (checkTMS) {

            var jsonData = JSON.stringify({ DataInputInsert });
            $.ajax({
                type: "POST",
                url: "QuanLyPOD.aspx/InsertUpdateINVOICEHN",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
                alert("Cập nhật thành công")
                $("#modalCapNhatSoTMS").modal("hide");
                fncLoad("")

            })
        }
    });

    // Click show excel cập nhất số TMS
    //$("#btn-capnhatTMS").click(function () {
    //    $("#modalCapNhatSoTMS").modal(
    //        {
    //            show: true,
    //            backdrop: "static",
    //            keyboard: false
    //        });
    //    $("#spreadsheetSoTMS").empty();
    //    $("#spreadsheetSoTMS").kendoSpreadsheet({
    //        columns: 2,
    //        rows: 50,
    //        toolbar: false,
    //        sheetsbar: false,
    //    });
    //    var spreadsheet = $("#spreadsheetSoTMS").data("kendoSpreadsheet");
    //    var sheet = spreadsheet.activeSheet();
    //    sheet.range(kendo.spreadsheet.SHEETREF).clear();
    //    $(window).trigger("resize");
    //    spreadsheet.fromJSON({
    //        sheets: [{
    //            name: "KeHoach",
    //            rows: [{
    //                height: 40,
    //                cells: [
    //                    { value: "TMS", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
    //                    , { value: "INVOICE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
    //                    , { value: "Địa chỉ giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
    //                    , { value: "BU", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
    //                    , { value: "Ghi chú", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
    //                ]
    //            }],
    //            columns: [
    //                {// TMS
    //                    width: 150
    //                },
    //                {// INVOICE
    //                    width: 150
    //                },
    //                {// Địa chỉ giao hàng
    //                    width: 100
    //                },
    //                {// BU
    //                    width: 100
    //                },
    //                {// Ghi chú
    //                    width: 100
    //                }
    //            ]
    //        }]
    //    });
    //})

    // Click xem POD
    $("#tbl_POD").on("click", ".btn-xem", function () {
        soPOD = $(this).attr("attrpod");
        window.open('./QuanLyPODView.aspx?SoPOD=' + soPOD + '', '_blank');

        //soPOD = $(this).attr("attrpod");
        //ajaxGet = { "get": soPOD };
        //jsonData = JSON.stringify({ ajaxGet });
        ////console.log(jsonData);
        //$.ajax({
        //    type: "POST",
        //    url: "QuanLyPOD.aspx/reListByPODPrint",
        //    data: jsonData,
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    async: false,
        //    success: function (responsive) {
        //        d = responsive.d;
        //        console.log(d)
        //        html_tbody = "";
        //        $.each(d, function (key, val) {
        //            html_tbody += "<tr>";
        //            html_tbody += "<td  class=\"ClassfontSize8 textleft\">" + (key + 1) + "</td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textDam font-size12\">" + val.Invoice + "</td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textDam font-size12\">" + val.HAWB + "</td>";
        //            html_tbody += "<td contenteditable class=\"ClassfontSize8 textleft textwidth1 \">" + val.NCC_update_tu_KH + "</td>";
        //            html_tbody += "<td contenteditable class=\"ClassfontSize8 textleft\">" + val.SoBU + "</td>";
        //            html_tbody += "<td contenteditable   class=\"ClassfontSize8 textleft textDam font-size12\">" + val.SoKienGiao + "</td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 textDam font-size12\"></td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 textDam\"></td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 textDam\"></td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 \"></td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 \">" + val.TrongLuong1 + "</td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 \">" + val.TrongLuong1 + "</td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\"></td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\">" + val.DiaChiGiaoHang + "</td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\">" + val.NguoiNhan_update_tu_KH + "</td>";
        //            html_tbody += "<td contenteditable class=\"ClassfontSize8 textleft tdwidth\">" + val.SoDTNguoiNhan_update_tu_KH + "</td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textwidthNgayGiao\">" + convertDate(val.NgayYeuCauTraHang)[4] + "</td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textwidth\"></td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textwidthMathe\"></td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textNone\"></td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textwidthSoKien\"></td>";
        //            html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\">" + val.REMARK + "</td>";
        //            html_tbody += "</tr>";
        //        });

        //        html_tbody += "<tr>";
        //        html_tbody += "<td class=\"ClassfontSize8\" rowspan=\"2\">车辆<br />";
        //        html_tbody += "信息<br />";
        //        html_tbody += "Thông<br />";
        //        html_tbody += "tin xe</td>";
        //        html_tbody += "<td class=\"ClassfontSize8\" colspan=\"3\" rowspan=\"2\">物流供方名称：<input value=\"ALSE\" class=\"nobdInput\" style=\"width: 70px\" type=\"text\" /><br />";
        //        html_tbody += "Tên FWD vận chuyển</td>";
        //        html_tbody += "<td class=\"ClassfontSize8\" colspan=\"3\" rowspan=\"2\">车牌号：";
        //        //html_tbody += "<select class=\"nobd selectchange\">" + html_selectBKS + "</select ><br />";

        //        html_tbody += "<input  class=\"nobdInput\"  id=\"txtChange\" type=\"text\" list=\"sltBKS\" />";
        //        html_tbody += "<datalist class=\"nobdInput\" id=\"sltBKS\">";
        //        //html_tbody += html_selectBKS;
        //        html_tbody += "</datalist>";

        //        html_tbody += "Số xe</td>";
        //        html_tbody += "<td class=\"ClassfontSize8\" colspan=\"5\" rowspan=\"2\">司机姓名：";
        //        html_tbody += "<input id=\"txtnhanvien\"  class=\"nobdInput\" style=\"width: 100px\" type=\"text\" /><br />";
        //        html_tbody += "Tên</td>";
        //        html_tbody += "<td class=\"ClassfontSize8\" colspan=\"3\" rowspan=\"2\">电话：<input id=\"txtsodienthoai\" class=\"nobdInput\" style=\"width: 60px\" type=\"text\" /><br />";
        //        html_tbody += "SĐT</td>";
        //        html_tbody += "<td class=\"ClassfontSize8\" colspan=\"4\" rowspan=\"2\">提货司机签字:<input class=\"nobdInput\" style=\"width: 60px\" type=\"text\" /><br />";
        //        html_tbody += "Lái";
        //        html_tbody += "<br />";
        //        html_tbody += "xe lấy";
        //        html_tbody += "<br />";
        //        html_tbody += "hàng";
        //        html_tbody += "<br />";
        //        html_tbody += "kí tên</td>";
        //        html_tbody += "<td class=\"ClassfontSize8\" colspan=\"4\" rowspan=\"2\">提货日期：<input class=\"nobdInput txtngaylayhang\" style=\"width: 60px\" type=\"text\" /><br />";
        //        html_tbody += "Ngày lấy ";
        //        html_tbody += "<br />";
        //        html_tbody += "hàng";
        //        html_tbody += "</td>";
        //        html_tbody += "</tr>";
        //        html_tbody += "<tr>";
        //        html_tbody += "</tr>";
        //        html_tbody += "<tr>";
        //        html_tbody += "<td class=\"ClassfontSize8\" rowspan=\"2\">异常<br />";
        //        html_tbody += "Bất<br />";
        //        html_tbody += "thường</td>";
        //        html_tbody += "<td class=\"ClassfontSize8\" rowspan=\"2\" colspan=\"10\">提示：在提货时请核对货物数量，如有质量问题或数量差异，请在下方注明（否则视为完好）。谢谢！<br />";
        //        html_tbody += "提货异常描述：<br />";
        //        html_tbody += "Cảnh báo:  Khi  lấy hàng phải đối chiếu số lượng hàng, nếu như có vấn đề về chất lượng hoặc số lượng thiếu, ";
        //        html_tbody += "Hãy điền rõ thông tin vào cột ghi chú trong bảng(nếu không sẽ nhầm là đầy đủ).Cảm ơn";
        //        html_tbody += "<br/>";
        //        html_tbody += "Miêu tả sự bất thường khi lấy hàng:</td>";
        //        html_tbody += "<td class=\"ClassfontSize8\" rowspan=\"2\" colspan=\"12\">异常日期：<br />";
        //        html_tbody += "Ngày phát sinh bất thường:</td>";
        //        html_tbody += "</tr>";
        //        html_tbody += "<tr>";
        //        html_tbody += "</tr>";

        //        //$("#tablePOD tbody").prepend(html_tbody);
        //        $("#tablePOD tbody").empty().append(html_tbody);
        //    },
        //    error: function () {
        //        Swal.fire(
        //            'Có lỗi xảy ra!',
        //            'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
        //            'error'
        //        )
        //    }
        //}).done(function () {
        //})

        //window.print();
    });

    // Click Xóa POD
    $("#tbl_POD").on("click", ".btn-xoa ", function () {
        soPOD = $(this).attr("attrpod");
        var conf = confirm("Bạn có muốn xóa lô có POD: " + soPOD);
        if (conf) {
            ajaxGet = { "get": soPOD };
            jsonData = JSON.stringify({ ajaxGet });
            //console.log(jsonData);
            $.ajax({
                type: "POST",
                url: "QuanLyPOD.aspx/DeletePOD",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    Swal.fire({
                        title: "Thêm danh sách hàng thành công!",
                        text: "Hệ thống sẽ tự tải lại sau 2s",
                        type: 'success',
                        timer: 2000,
                    })
                    fncLoad("")
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
    })

    // Click Sửa POD
    $("#tbl_POD").on("click", ".btn-sua", function () {
        soPOD = $(this).attr("attrpod");
        ajaxGet = { "get": soPOD };
        jsonData = JSON.stringify({ ajaxGet });
        var dataSource = [];
        //console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyPOD.aspx/reListByPOD",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d)
                $.each(d, function (key, val) {
                    dataSource.push({
                        "SoKien": val.SoKien,
                        //"GW": val.GW,
                        //"CBM": val.CBM,
                        "SoTMS": val.SoTMS,
                        "INVOICE": val.Invoice,
                        //"NgayGiaoHang": convertDate(val.NgayGioGiao)[5].split(" ")[0],
                        //"GioGiaoHang": convertDate(val.NgayGioGiao)[5].split(" ")[1],
                        "DiaChiGiaoHang": val.DiaChiGiaoHang,

                        "BU": val.SoBU,
                        "Remark": val.REMARK,
                        "PIC": val.PIC,
                        //"NguoiNhanHang": val.NguoiNhanHang,
                        //"SoDienThoai": val.SoDienThoaiNguoiNhan,
                        "ID": val.ID
                    })
                });

                $(".input-pod").val(d[0].SoPOD)
                $(".input-dondieuphoi").val(d[0].DonDieuPhoi)
                $(".input-bks").val(d[0].BKS)
                $(".input-laixe").val(d[0].LaiXe)
                $(".input-sdt").val(d[0].SoDienThoaiLaiXe)
                $(".input-cmnd").val(d[0].SoCMTND)
                //$(".input-ngay").val(convertDate(d[0].NgayGioBKS)[1])
                //$(".input-gio").val(convertDate(d[0].NgayGioBKS)[3])
                $(".input-taitrong").val(d[0].TaiTrong)
                $(".input-seal").val(d[0].SoSeal)
                $(".input-ngaygiaohang").val(convertDate(d[0].NgayGioGiao)[5].split(" ")[0])
                $(".input-giogiaohang").val(convertDate(d[0].NgayGioGiao)[5].split(" ")[1])

            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        })

        $("#modalCapNhatGiaoHang").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheetGiaoHang").empty();
        $("#spreadsheetGiaoHang").kendoSpreadsheet({
            columns: 8,
            rows: 100,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheetGiaoHang").data("kendoSpreadsheet");
        //var sheet = spreadsheet.activeSheet();
        //sheet.range(kendo.spreadsheet.SHEETREF).clear();
        $(window).trigger("resize");
        spreadsheet.fromJSON({
            sheets: [{
                name: "KeHoach",
                //mergedCells: [
                //    "A1:G1"
                //],
                dataSource: dataSource,
                rows: [{
                    height: 40,
                    cells: [
                        { value: "Số kiện", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "GW", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "CBM", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số TMS", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "INVOICE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Ngày giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Giờ giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Địa chỉ giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "BU", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Remark", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PIC vận chuyển", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Người nhận hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Số điện thoại", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// Số kiện
                        width: 80
                    }
                    , {// GW
                        width: 80
                    }
                    , {// CBM
                        width: 80
                    },
                    {// Số TMS
                        width: 150
                    },
                    {// Invoice
                        width: 150
                    },
                    {// Ngày giao hàng
                        width: 100
                    },
                    {// giờ giao hàng
                        width: 80
                    },
                    {// địa chỉ giao hàng
                        width: 150
                    },
                    {// Người nhận hàng
                        width: 150
                    }
                    ,
                    {// Số điện thoại
                        width: 100
                    }
                    ,
                    {// Mã NCC
                        width: 80
                    }
                    ,
                    {// Remark
                        width: 150
                    },
                    {// PIC vận chuyển
                        width: 150
                    }
                ]
            }]
        });

        var sheet = spreadsheet.activeSheet();
        sheet.range("C1:C100").format("@");  // Adjust the range based on your data
    })

    // Cập nhật giao hàng
    $("#btn-capnhatgiaohang").click(function () {
        fncLoadTruckPOD();
        showSoPOD();
        $(".input-ngaygiaohang").val(moment().format("DD/MM/YYYY"));
        $(".input-giogiaohang").val(moment().format("HH:MM"));
        $("#modalCapNhatGiaoHang").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheetGiaoHang").empty();
        $("#spreadsheetGiaoHang").kendoSpreadsheet({
            columns: 8,
            rows: 100,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheetGiaoHang").data("kendoSpreadsheet");

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
                        { value: "Số kiện", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "GW", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "CBM", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số TMS", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "INVOICE", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Địa chỉ giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }

                        , { value: "BU", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Remark", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "PIC vận chuyển", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Ngày giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Giờ giao hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Người nhận hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Số điện thoại", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// Số kiện
                        width: 80
                    },
                    //, {// GW
                    //    width: 80
                    //}
                    //, {// CBM
                    //    width: 80
                    //},
                    {// Số TMS
                        width: 150
                    },
                    {// Invoice
                        width: 150
                    },
                    //{// Ngày giao hàng
                    //    width: 100
                    //},
                    //{// giờ giao hàng
                    //    width: 80
                    //},
                    {// địa chỉ giao hàng
                        width: 150
                    },
                    {// Người nhận hàng
                        width: 150
                    }
                    ,
                    {// Số điện thoại
                        width: 100
                    }
                    ,
                    {// Mã NCC
                        width: 80
                    }
                    ,
                    {// Remark
                        width: 150
                    },
                    {// PIC vận chuyển
                        width: 150
                    }
                ]
            }]
        });

        var sheet = spreadsheet.activeSheet();

        sheet.range("C1:C100").format("@");
        //sheet.range(kendo.spreadsheet.SHEETREF).clear();
    });

    // Lưu câp nhật giao hàng
    $("#btn-capnhatgiaohang-luu").click(function () {
        var arrInvoiceKH = [];
        var DiaChiArr = [];
        var SoBuArr = [];
        var checkSuccess = true;

        // Trả về số Bu và address
        ajaxGet = { "get": "" };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyPOD.aspx/reThongTinKho",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                $.each(d, function (key, val) {
                    DiaChiArr.push(val.DiaChiGiaoHang.trim());
                    SoBuArr.push(val.SoBU.trim());
                });

            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        // Trả về số Invoice kế hoạch
        ajaxGet = { "get": "" };
        var jsonData = JSON.stringify({ ajaxGet });
        //console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyHangNhap.aspx/reInvoiveKH",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                $.each(d, function (key, val) {
                    arrInvoiceKH.push(val.Invoice);
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
        //console.log(arrInvoiceKH);
        var spreadsheet = $("#spreadsheetGiaoHang").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var DataInput = [];
        var cells;
        var cell_Sokien = "";
        var cell_Invoice = "";
        var cell_Ngaygiao = "";
        var cell_Giogiao = "";
        var cell_Diachigiao = "";
        var cell_Nguoinhanhang = "";
        var cell_Sodienthoai = "";
        var cell_Mancc = "";
        var cellId = "";
        var cell_Remark = "";
        var cell_SoTMS = "";
        var cell_GW = "";
        var cell_CBM = "";
        var cell_PIC = "";

        DataInputInsert = [];
        DataInputUpdate = [];

        ////console.log(data);
        data.forEach(function (dataItem, dataIndex) {
            cell_Sokien = "";
            cell_Invoice = "";
            cell_Ngaygiao = "";
            cell_Giogiao = "";
            cell_Diachigiao = "";
            cell_Nguoinhanhang = "";
            cell_Sodienthoai = "";
            cell_Mancc = "";
            cell_Remark = "";
            cellId = "";
            cell_SoTMS = "";
            cell_GW = "";
            cell_CBM = "";
            cell_PIC = "";
            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Sokien = cells[cellIndex].value;
                        }
                        break;
                    //case 1:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        cell_GW = cells[cellIndex].value;
                    //    }
                    //    break;
                    //case 2:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        cell_CBM = cells[cellIndex].value;
                    //    }
                    //    break;
                    case 1:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cell_SoTMS = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cell_Invoice = cells[cellIndex].value;
                        }
                        break;

                    //case 5:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        cell_Ngaygiao = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                    //    }
                    //    break;
                    //case 6:
                    //    if (typeof cells[cellIndex].value == 'number') {
                    //        if (cells[cellIndex].value !== undefined) {
                    //            if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                    //                cell_Giogiao = Decimal2Time(cells[cellIndex].value * 24);
                    //            }
                    //        }
                    //    } else {
                    //        cell_Giogiao = cells[cellIndex].value;
                    //    }

                    //    break;
                    case 3:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cell_Diachigiao = cells[cellIndex].value;
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cell_Mancc = cells[cellIndex].value;
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cell_Remark = cells[cellIndex].value;
                        }
                        break;
                    case 6:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cell_PIC = cells[cellIndex].value;
                        }
                        break;
                    //case 7:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        cell_Nguoinhanhang = cells[cellIndex].value;
                    //    }
                    //    break;
                    //case 8:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        cell_Sodienthoai = cells[cellIndex].value;
                    //    }
                    //    break;
                    case 7:
                        if (cells[cellIndex].value !== undefined && cells[cellIndex].value !== "") {
                            cellId = cells[cellIndex].value;
                        }
                        break;

                }
            })

            if (cell_Invoice !== "" && cell_Diachigiao !== "" && cell_Mancc !== "") {
                console.log(cell_Invoice)
                console.log(cell_Diachigiao)
                console.log(cell_Mancc)
                if (arrInvoiceKH.indexOf(cell_Invoice.toString().trim().replace(/ /g, '')) == -1) {
                    alert("Số INV " + cell_Invoice + " này không cập nhật được do không khớp với Kế hoạch khách hàng. Đề nghị bạn kiểm tra lại.");
                    checkSuccess = false;
                } else {
                    if (DiaChiArr.indexOf(cell_Diachigiao.toString().trim().replace(/ /g, '')) == -1 || SoBuArr.indexOf(cell_Mancc.toString().trim().replace(/ /g, '')) == -1) {
                        alert("Địa chỉ " + cell_Diachigiao + " hoặc Số BU " + cell_Mancc + " không có trong kho hàng vui lòng kiểm tra lại.");
                        checkSuccess = false;
                    } else {
                        DataInputInsert.push(
                            {
                                "ID": cellId
                                , "SoKien": String(cell_Sokien).trim().replace(/ /g, '')
                                , "INVOICE": String(cell_Invoice).trim().replace(/ /g, '')
                                //, "NgayGioGiao": String(cell_Ngaygiao).trim().replace(/ /g, '') + " " + String(cell_Giogiao).trim().replace(/ /g, '')
                                , "NgayGioGiao": dmy2ymd($(".input-ngaygiaohang").val()) + " " + $(".input-giogiaohang").val()
                                , "DiaChiGiaoHang": cell_Diachigiao
                                , "NguoiNhanHang": ""
                                , "SoDienThoaiNguoiNhan": ""
                                , "SoBU": cell_Mancc
                                , "REMARK": cell_Remark
                                , "HienThi": ""
                                , "NguoiTao": ""
                                , "NgayTao": ""
                                , "NguoiSua": ""
                                , "NgaySua": ""
                                , "SoTMS": cell_SoTMS
                                , "SoPOD": $(".input-pod").val()
                                , "DonDieuPhoi": $(".input-dondieuphoi").val()
                                , "GW": ""
                                , "CBM": ""
                                , "BKS": $(".input-bks").val()
                                , "LaiXe": $(".input-laixe").val()
                                , "SoCMTND": $(".input-cmnd").val()
                                , "SoDienThoaiLaiXe": $(".input-sdt").val()
                                , "NgayGioBKS": ""
                                , "TaiTrong": $(".input-taitrong").val()
                                , "PIC": cell_PIC
                                , "SoSeal": $(".input-seal").val()
                            });
                    }
                }
            }

        });

        //console.log(DataInputInsert);

        if (checkSuccess) {
            var jsonData = JSON.stringify({ DataInputInsert });
            $.ajax({
                type: "POST",
                url: "QuanLyPOD.aspx/InsertUpdateGiaoHang",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
                $("#modalCapNhatGiaoHang").modal("hide");
                fncLoad("")
            })
        } else {
            console.log("Thất bại")
        }


        //var jsonData = JSON.stringify({ DataInputUpdate });
        //$.ajax({
        //    type: "POST",
        //    url: "QuanLyPOD.aspx/InsertUpdateGiaoHang1",
        //    data: jsonData,
        //    contentType: "application/json; charset=utf-8",
        //    dataType: "json",
        //    async: false,
        //    success: function (responsive) {
        //        d = responsive.d;

        //    },
        //    error: function () {
        //        Swal.fire(
        //            'Có lỗi xảy ra!',
        //            'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
        //            'error'
        //        )
        //    }
        //}).done(function () {
        //    Swal.fire({
        //        title: "Thêm danh sách hàng thành công!",
        //        text: "Hệ thống sẽ tự tải lại sau 2s",
        //        type: 'success',
        //        timer: 2000,
        //    })
        //    $("#modalCapNhatGiaoHang").modal("hide");
        //    fncLoad()
        //})
    });
}

function fncChange() {
    $(".container").on("change", ".input-bks", function () {
        if ($(this).val() === "") {
            $(".input-laixe").val("");
            $(".input-sdt").val("");
            $(".input-cmnd").val("");
            $(".input-taitrong").val("");
        } else {
            fncLoadOrigin($(this).val());
        }
    });
    $(".pod-data-change").change(function () {
        if ($(this).val() == "") {
            fncLoad("");
        } else {
            fncLoad($(this).val());
        }
    })

    $(".change-data-radio").change(function () {
        if ($(this).val() == "") {
            //console.log($(this).val())
            fncLoad("");
        } else {
            //console.log($(this).val())
            fncLoad($(this).val());
        }
    })
}

function showSoPOD() {
    ajaxGet = { "get": "" }
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyPOD.aspx/showPODLonNhat",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d.length == 1) {
                $(".input-pod").val("000" + d)
            } else if (d.length == 2) {
                $(".input-pod").val("00" + d)
            } else if (d.length == 3) {
                $(".input-pod").val("0" + d)
            } else if (d.length == 4) {
                $(".input-pod").val("" + d)
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

function splitText(input) {
    var text = "";
    var splitInput = input.split("/");
    //console.log(splitInput.length);
    if (splitInput.length > 1) {
        for (var j = 0; j <= splitInput.length; j++) {
            if (splitInput[j] !== undefined) {
                text += splitInput[j] + "<br/>";
            }
        }
    } else {
        text = input;
    }

    return text;
}

function fncDateTime() {
    // ngày hiện tại
    var d_now = new Date();
    $("#input-baocao-tu-ngay").datepicker("setDate", new Date(d_now.getFullYear(), d_now.getMonth(), 1));
    $("#input-baocao-den-ngay").datepicker("setDate", new Date(d_now.getFullYear(), d_now.getMonth() + 1, 0));
}

function fncLoadTruckPOD() {
    var ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    //$("#div-wait").show();rehangNhapPODTimKiem
    $.ajax({
        type: "POST",
        url: "PODView.aspx/reTruckPOD",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var html_tbody = "";
            html_selectBKS += "<option value=\"\"></option>"
            $.each(d, function (key, val) {
                html_tbody += "<tr>";
                html_tbody += "<td>" + (key + 1) + "</td>";
                html_tbody += "<td>" + val.LaiXe + "</td>";
                html_tbody += "<td>" + val.BienSoXe + "</td>";
                html_tbody += "<td>" + val.SoDienThoai + "</td>";
                html_tbody += "<td>" + val.SoCMND + "</td>";
                html_tbody += "<td>" + val.TaiTrong + "</td>";
                html_tbody += "<td><span class=\"span-sua\" IdAttr=\"" + val.ID + "\">Sửa</span> <span class=\"span-xoa\"  IdAttr=\"" + val.ID + "\">Xóa</span></td>";
                html_tbody += "</tr>";

                html_selectBKS += "<option value=\"" + val.BienSoXe + "\">" + val.BienSoXe + "</option>"
            });
            $("#tbl-truckpod tbody").empty().append(html_tbody);
            $("#sltBKSXe").empty().append(html_selectBKS);
            //$("#tbl-truckpod").dataTable({
            //    "paging": false,
            //    "destroy" : true
            //});
        },
        error: function () {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Thử lại hoặc liên hệ IT',
                'error'
            )
        }
    }).done(function () {
    })
}

function fncLoadOrigin(input) {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": input };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "PODView.aspx/LoadOrigin",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            $(".input-laixe").val(d.LaiXe);
            $(".input-sdt").val(d.SoDienThoai);
            $(".input-cmnd").val(d.SoCMND);
            $(".input-taitrong").val(d.TaiTrong);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}

// Load Thông tin kho
function fncThongTinKho() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyPOD.aspx/reThongTinKho",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            var html_body = "";
            $.each(d, function (key, val) {
                html_body += "<tr>";
                html_body += "<td>" + (key + 1) + "</td>";
                html_body += "<td class=\"text-left\">" + val.SoBU + "</td>";
                html_body += "<td class=\"text-left\">" + val.DiaChiGiaoHang + "</td>";
                html_body += "<td class=\"text-left\">" + val.ThoiGianNhanHang + "</td>";
                html_body += "<td class=\"text-left\">" + val.NguoiNhan + "</td>";
                html_body += "<td class=\"text-left\">" + val.SDT + "</td>";
                html_body += "<td><span class=\"span-suakho span-dodgerblue\" IdAttr=\"" + val.Id + "\">Sửa</span> <span class=\"span-xoakho span-red\"  IdAttr=\"" + val.Id + "\">Xóa</span></td>";
                html_body += "</tr>";
            });

            $("#tbl-thongtinkho tbody").empty().append(html_body);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
}
