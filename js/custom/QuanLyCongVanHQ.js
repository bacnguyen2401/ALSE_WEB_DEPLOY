var html_thead = "";
var html_tbody = "";
var ajaxGet;
var d;
$(document).ready(function () {
    fncChange();
    fncClick();
    fncLoad();
    fncModalHide();
})
// #region START LOAD
function fncLoad() {
    $("#select-danhsach-thang").val(dt.getMonth() + 1);
    $("#select-danhsach-nam").val(dt.getFullYear());

    fncLoadDanhSach((dt.getMonth() + 1), dt.getFullYear(), "");
}

//#region START LOAD DANH SACH
function fncLoadDanhSach(thang, nam, itemId) {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet3 = { "get1": thang, "get2": nam, "get3": itemId };
    jsonData = JSON.stringify({ ajaxGet3 });
    $.ajax({
        type: "POST",
        url: "QuanLyCongVanHQ.aspx/LDanhSach",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            console.log(d);
            html_tbody = "";
            $.each(d, function (index, item) {
                html_tbody += "<tr>";
                html_tbody += "<td>" + (index + 1) + "</td>";
                html_tbody += "<td>" + convertDate(item.NgayGioCongVan)[4] + "</td>";
                html_tbody += "<td>" + item.KhachHangGui + "</td>";
                html_tbody += "<td>" + item.KhachHangSua + "</td>";
                html_tbody += "<td>" + item.SoMawb + "</td>";
                html_tbody += "<td>" + item.SoHawb + "</td>";
                html_tbody += "<td class=\"td-chucnang\">";
                html_tbody += "<button type=\"button\" itemId=\"" + item.Id + "\" class=\"btn btn-sm btn-primary btn-danhsach-taixuong\">" + "TẢI FILE" + "</button>";
                html_tbody += "<button type=\"button\" itemId=\"" + item.Id + "\" class=\"btn btn-sm btn-warning btn-danhsach-sua\">" + "SỬA" + "</button>";
                html_tbody += "<button type=\"button\" itemId=\"" + item.Id + "\" class=\"btn btn-sm btn-danger btn-danhsach-xoa\">" + "XÓA" + "</button>";
                html_tbody += "</td>";
                html_tbody += "</tr>";
            })
            $("#tbl-danhsach tbody").empty();
            $("#tbl-danhsach tbody").append(html_tbody);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    // END AJAX LOAD
}
//#endregion END LOAD DANH SACH

//#region START LOAD KHACH HANG
function fncLoadKhachHang() {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyCongVanHQ.aspx/LKhachHang",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            console.log(d);
            html_tbody = "";
            $.each(d, function (index, item) {
                html_tbody += "<tr>";
                html_tbody += "<td>" + (index + 1) + "</td>";
                html_tbody += "<td>" + item.MaKhachHang + "</td>";
                html_tbody += "<td>" + item.KhachHang + "</td>";
                html_tbody += "<td>" + item.DiaChi + "</td>";
                html_tbody += "<td class=\"td-chucnang\">";
                html_tbody += "<button type=\"button\" itemId=\"" + item.Id + "\" class=\"btn btn-sm btn-warning btn-khachhang-sua\">" + "SỬA" + "</button>";
                html_tbody += "<button type=\"button\" itemId=\"" + item.Id + "\" class=\"btn btn-sm btn-danger btn-khachhang-xoa\">" + "XÓA" + "</button>";
                html_tbody += "</td>";
                html_tbody += "</tr>";
            })
            $("#tbl-khachhang tbody").empty();
            $("#tbl-khachhang tbody").append(html_tbody);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
}
//#endregion END LOAD KHACH HANG

//#region START LOAD KHO
function fncLoadKho() {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyCongVanHQ.aspx/LKho",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            console.log(d);
            html_tbody = "";
            $.each(d, function (index, item) {
                html_tbody += "<tr>";
                html_tbody += "<td>" + (index + 1) + "</td>";
                html_tbody += "<td>" + item.MaKho + "</td>";
                html_tbody += "<td>" + item.TenKho + "</td>";
                html_tbody += "<td class=\"td-chucnang\">";
                html_tbody += "<button type=\"button\" itemId=\"" + item.Id + "\" class=\"btn btn-sm btn-warning btn-kho-sua\">" + "SỬA" + "</button>";
                html_tbody += "<button type=\"button\" itemId=\"" + item.Id + "\" class=\"btn btn-sm btn-danger btn-kho-xoa\">" + "XÓA" + "</button>";
                html_tbody += "</td>";
                html_tbody += "</tr>";
            })
            $("#tbl-kho tbody").empty();
            $("#tbl-kho tbody").append(html_tbody);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    // END AJAX LOAD
}
//#endregion END LOAD KHO

//#region START LOAD CONG VAN
function fncLoadCongVan() {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyCongVanHQ.aspx/LCongVan",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            console.log(d);
            html_tbody = "";
            $.each(d, function (index, item) {
                html_tbody += "<tr>";
                html_tbody += "<td>" + (index + 1) + "</td>";
                html_tbody += "<td>" + item.CongVan + "</td>";
                html_tbody += "<td class=\"td-chucnang\">";
                html_tbody += "<button type=\"button\" itemId=\"" + item.Id + "\" class=\"btn btn-sm btn-warning btn-congvan-sua\">" + "SỬA" + "</button>";
                html_tbody += "<button type=\"button\" itemId=\"" + item.Id + "\" class=\"btn btn-sm btn-danger btn-congvan-xoa\">" + "XÓA" + "</button>";
                html_tbody += "</td>";
                html_tbody += "</tr>";
            })
            $("#tbl-congvan tbody").empty();
            $("#tbl-congvan tbody").append(html_tbody);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    // END AJAX LOAD
}
//#endregion END LOAD CONG VAN

// #endregion END LOAD

//#region START CLICK

function fncClick() {
    //#region START CLICK DANH SACH

    //#region START CLICK DANH SACH THEM
    $("#btn-danhsach-them").click(function () {
        fncLoadDanhSachTruocThem();
        $("#modal-danhsach-them-tieude").text("THÊM MỚI CÔNG VĂN");
        $("#modal-danhsach-them").modal("show");
    })
    //#endregion END CLICK DANH SACH THEM

    //#region START LOAD DANH SACH THEM - TRUOC THEM
    function fncLoadDanhSachTruocThem() {
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet = { "get": "" };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyCongVanHQ.aspx/LDanhSachTruocThem",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                var html_select = "";
                $.each(d.congVanViews, function (index, item) {
                    html_select += "<option value=\"" + item.Id + "\">" + (index + 1) + ". " + item.CongVan + "</option>";
                })
                $("#select-danhsach-them-congvan-modify").empty();
                $("#select-danhsach-them-congvan-modify").append(html_select);
                html_select = "";
                $.each(d.khachHangViews, function (index, item) {
                    html_select += "<option value=\"" + item.Id + "\">" + (index + 1) + ". " + item.KhachHang + "</option>";
                })
                $("#select-danhsach-them-khachhanggui-modify").empty();
                $("#select-danhsach-them-khachhanggui-modify").append(html_select);
                $("#select-danhsach-them-khachhangsua-modify").empty();
                $("#select-danhsach-them-khachhangsua-modify").append(html_select);
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    }
    //#endregion START LOAD DANH SACH THEM - TRUOC THEM

    //#region START CLICK DANH SACH THEM - LUU
    $("#btn-danhsach-them-luu").click(function () {
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        danhSachParam = {
            "Id": $(this).attr("itemId"),
            "CongVanId": $("#select-danhsach-them-congvan-modify").val(),
            "NgayGioCongVan": dmy2ymd($("#input-danhsach-them-ngaygiocongvan-modify").val()),
            "KhachHangGuiId": $("#select-danhsach-them-khachhanggui-modify").val(),
            "SoMawb": $("#input-danhsach-them-somawb-modify").val(),
            "SoHawb": $("#input-danhsach-them-sohawb-modify").val(),
            "KhachHangSuaId": $("#select-danhsach-them-khachhangsua-modify").val(),
            "NoiDung": $("#input-danhsach-them-noidung-modify").val(),
        };
        jsonData = JSON.stringify({ danhSachParam });
        $.ajax({
            type: "POST",
            url: "QuanLyCongVanHQ.aspx/IUDDanhSach",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                if (d == "OK") {
                    alert("LƯU THÀNH CÔNG!");
                    fncLoadDanhSach($("#select-danhsach-thang").val(), $("#select-danhsach-nam").val(), "");
                    $("#modal-danhsach-them").modal("hide");
                } else {
                    alert("CÓ LỖI XẢY RA!")
                }
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    })
    //#endregion END CLICK DANH SACH THEM - LUU

    //#region START CLICK DANH SACH TAI XUONG
    $("#tbl-danhsach").on("click", ".btn-danhsach-taixuong", function () {
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        var itemId = $(this).attr("itemId");
        ajaxGet = { "get": itemId };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyCongVanHQ.aspx/DanhSachTaiXuong",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "OK") {
                    window.open("../DownloadFile.aspx?Root=CongVanHQ&Folder=none&FileName=" + "CongVan" + itemId + ".xlsx");
                } else {
                    alert("CÓ LỖI XẢY RA!");
                }
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    })
    //#endregion START CLICK DANH SACH TAI XUONG

    //#region START CLICK DANH SACH SUA
    $("#tbl-danhsach").on("click", ".btn-danhsach-sua", function () {
        fncLoadDanhSachTruocThem();
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet3 = { "get1": "01", "get2": "2020", "get3": $(this).attr("itemId") };
        jsonData = JSON.stringify({ ajaxGet3 });
        $.ajax({
            type: "POST",
            url: "QuanLyCongVanHQ.aspx/LDanhSach",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                if (d.length > 0) {
                    $("#modal-danhsach-them-tieude").text("CHỈNH SỬA CÔNG VĂN");
                    $("#btn-danhsach-them-luu").attr("itemId", d[0].Id);
                    $("#select-danhsach-them-congvan-modify").val(d[0].CongVanId);
                    $("#input-danhsach-them-ngaygiocongvan-modify").val(convertDate(d[0].NgayGioCongVan)[1]);
                    $("#select-danhsach-them-khachhanggui-modify").val(d[0].KhachHangGuiId);
                    $("#input-danhsach-them-somawb-modify").val(d[0].SoMawb);
                    $("#input-danhsach-them-sohawb-modify").val(d[0].SoHawb);
                    $("#select-danhsach-them-khachhangsua-modify").val(d[0].KhachHangSuaId);
                    $("#input-danhsach-them-noidung-modify").val(d[0].NoiDung);
                }
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD

        $("#modal-danhsach-them").modal("show");
    })
    //#endregion END CLICK DANH SACH SUA

    //#region START CLICK DANH SACH XOA
    $("#tbl-danhsach").on("click", ".btn-danhsach-xoa", function () {
        if (confirm("XÁC NHẬN XÓA!")) {
            // BEGIN AJAX LOAD
            //TODO 1.
            //TODO 2.
            //TODO 3.
            danhSachParam = {
                "Id": $(this).attr("itemId"),
                "CongVanId": "",
                "NgayGioCongVan": "",
                "KhachHangGuiId": "",
                "SoMawb": "",
                "SoHawb": "",
                "KhachHangSuaId": "",
                "NoiDung": "xoa",
            };
            jsonData = JSON.stringify({ danhSachParam });

            $.ajax({
                type: "POST",
                url: "QuanLyCongVanHQ.aspx/IUDDanhSach",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    console.log(d);
                    if (d == "OK") {
                        alert("XÓA THÀNH CÔNG!");
                        fncLoadDanhSach($("#select-danhsach-thang").val(), $("#select-danhsach-nam").val(), "");
                    }
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
            /// END AJAX LOAD
        }
    })
    //#endregion END CLICK DANH SACH XOA

    //#endregion END CLICK DANH SACH

    //#region START CLICK KHACH HANG

    //#region START CLICK KHACH HANG SHOW
    $("#btn-khachhang").click(function () {
        fncLoadKhachHang();
        $("#modal-khachhang").modal("show");
    })
    //#endregion END CLICK KHACH HANG SHOW

    //#region START CLICK KHACH HANG THEM
    $("#btn-khachhang-them").click(function () {
        $("#modal-khachhang-them-tieude").text("THÊM MỚI KHÁCH HÀNG");
        $("#modal-khachhang-them").modal("show");
    })

    //#endregion END CLICK KHACH HANG THEM

    //#region START CLICK KHACH HANG THEM - LUU
    $("#btn-khachhang-them-luu").click(function () {
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        khachHangParam = {
            "Id": $(this).attr("itemId")
            , "MaKhachHang": $("#input-khachhang-them-makhachhang-modify").val()
            , "KhachHang": $("#input-khachhang-them-khachhang-modify").val()
            , "DiaChi": $("#input-khachhang-them-diachi-modify").val()
        };
        jsonData = JSON.stringify({ khachHangParam });
        $.ajax({
            type: "POST",
            url: "QuanLyCongVanHQ.aspx/IUDKhachHang",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                if (d == "OK") {
                    alert("LƯU THÀNH CÔNG!");
                    fncLoadKhachHang();
                    $("#modal-khachhang-them").modal("hide");
                } else {
                    alert("CÓ LỖI XẢY RA!")
                }
                //alert(d);
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    })
    //#endregion START CLICK KHACH HANG THEM - LUU

    //#region START CLICK KHACH HANG SUA
    $("#tbl-khachhang").on("click", ".btn-khachhang-sua", function () {
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet = { "get": $(this).attr("itemId") };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyCongVanHQ.aspx/LKhachHang",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                if (d.length > 0) {
                    $("#modal-khachhang-them-tieude").text("CHỈNH SỬA KHÁCH HÀNG");
                    $("#input-khachhang-them-makhachhang-modify").val(d[0].MaKhachHang);
                    $("#input-khachhang-them-khachhang-modify").val(d[0].KhachHang);
                    $("#input-khachhang-them-diachi-modify").val(d[0].DiaChi);
                    $("#btn-khachhang-them-luu").attr("itemId", d[0].Id);
                }
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD

        $("#modal-khachhang-them").modal("show");
    })
    //#endregion END CLICK KHACH HANG SUA
    
    //#region START CLICK KHACH HANG XOA
    $("#tbl-khachhang").on("click", ".btn-khachhang-xoa", function () {
        if (confirm("XÁC NHẬN XÓA!")) {
            // BEGIN AJAX LOAD
            //TODO 1.
            //TODO 2.
            //TODO 3.
            khachHangParam = {
                "Id": $(this).attr("itemId")
                , "MaKhachHang": ""
                , "KhachHang": "xoa"
                , "DiaChi": ""
            };
            jsonData = JSON.stringify({ khachHangParam });

            $.ajax({
                type: "POST",
                url: "QuanLyCongVanHQ.aspx/IUDKhachHang",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    console.log(d);
                    if (d == "OK") {
                        alert("XÓA THÀNH CÔNG!");
                        fncLoadKhachHang();
                    }
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
            /// END AJAX LOAD
        }
    })
    //#endregion END CLICK KHACH HANG XOA

    //#endregion START CLICK KHACH HANG

    //#region START CLICK KHO

    //#region START CLICK KHO SHOW
    $("#btn-kho").click(function () {
        fncLoadKho();
        $("#modal-kho").modal("show");
    })
    //#endregion END CLICK KHO SHOW

    //#region START CLICK KHO THEM
    $("#btn-kho-them").click(function () {
        $("#modal-kho-them-tieude").text("THÊM MỚI KHO");
        $("#modal-kho-them").modal("show");
    })
    //#endregion END CLICK KHO THEM

    //#region START CLICK KHO THEM - LUU
    $("#btn-kho-them-luu").click(function () {
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        khoParam = {
            "Id": $(this).attr("itemId")
            , "MaKho": $("#input-kho-them-makho-modify").val()
            , "TenKho": $("#input-kho-them-tenkho-modify").val()
        };
        jsonData = JSON.stringify({ khoParam });
        $.ajax({
            type: "POST",
            url: "QuanLyCongVanHQ.aspx/IUDKho",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                if (d == "OK") {
                    alert("LƯU THÀNH CÔNG!");
                    fncLoadKho();
                    $("#modal-kho-them").modal("hide");
                } else {
                    alert("CÓ LỖI XẢY RA!")
                }
                //alert(d);
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    })
    //#endregion END CLICK KHO THEM - LUU

    //#region START CLICK KHO SUA
    $("#tbl-kho").on("click", ".btn-kho-sua", function () {
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet = { "get": $(this).attr("itemId") };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyCongVanHQ.aspx/LKho",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                if (d.length > 0) {
                    $("#modal-kho-them-tieude").text("SỬA KHO");
                    $("#input-kho-them-makho-modify").val(d[0].MaKho);
                    $("#input-kho-them-tenkho-modify").val(d[0].TenKho);

                    $("#btn-kho-them-luu").attr("itemId", d[0].Id);
                }
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD

        $("#modal-kho-them").modal("show");
    })
    //#endregion END CLICK KHO SUA

    //#region START CLICK KHO XOA
    $("#tbl-kho").on("click", ".btn-kho-xoa", function () {
        if (confirm("XÁC NHẬN XÓA!")) {
            // BEGIN AJAX LOAD
            //TODO 1.
            //TODO 2.
            //TODO 3.
            khoParam = {
                "Id": $(this).attr("itemId")
                , "Makho": ""
                , "TenKho": "xoa"
            };
            jsonData = JSON.stringify({ khoParam });

            $.ajax({
                type: "POST",
                url: "QuanLyCongVanHQ.aspx/IUDKho",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    console.log(d);
                    if (d == "OK") {
                        alert("XÓA THÀNH CÔNG!");
                        fncLoadKho();
                    }
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
            /// END AJAX LOAD
        }
    })
    //#endregion END CLICK KHO XOA
    //#endregion START CLICK KHO

    //#region START CLICK CONG VAN

    //#region START CLICK CONG VAN SHOW
    $("#btn-congvan").click(function () {
        fncLoadCongVan();
        $("#modal-congvan").modal("show");
    })
    //#endregion END CLICK CONG VAN SHOW

    //#region START CLICK CONG VAN THEM
    $("#btn-congvan-them").click(function () {
        $("#modal-congvan-them-tieude").text("THÊM MỚI LOẠI CÔNG VĂN");
        $("#modal-congvan-them").modal("show");
    })
    //#endregion END CLICK CONG VAN THEM

    //#region START CLICK CONG VAN THEM - LUU
    $("#btn-congvan-them-luu").click(function () {
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        congVanParam = {
            "Id": $(this).attr("itemId")
            , "CongVan": $("#input-congvan-them-congvan-modify").val()
        };
        jsonData = JSON.stringify({ congVanParam });
        $.ajax({
            type: "POST",
            url: "QuanLyCongVanHQ.aspx/IUDCongVan",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                if (d == "OK") {
                    alert("LƯU THÀNH CÔNG!");
                    fncLoadCongVan();
                    $("#modal-congvan-them").modal("hide");
                } else {
                    alert("CÓ LỖI XẢY RA!")
                }
                //alert(d);
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    })
    //#endregion END CLICK CONG VAN THEM - LUU

    //#region START CLICK CONG VAN SUA
    $("#tbl-congvan").on("click", ".btn-congvan-sua", function () {
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet = { "get": $(this).attr("itemId") };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyCongVanHQ.aspx/LCongVan",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                if (d.length > 0) {
                    $("#modal-congvan-them-tieude").text("CHỈNH SỬA LOẠI CÔNG VĂN");
                    $("#input-congvan-them-congvan-modify").val(d[0].CongVan);

                    $("#btn-congvan-them-luu").attr("itemId", d[0].Id);
                }
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD

        $("#modal-congvan-them").modal("show");
    })
    //#endregion END CLICK CONG VAN SUA

    //#region START CLICK CONG VAN XOA
    $("#tbl-congvan").on("click", ".btn-congvan-xoa", function () {
        if (confirm("XÁC NHẬN XÓA!")) {
            // BEGIN AJAX LOAD
            //TODO 1.
            //TODO 2.
            //TODO 3.
            congVanParam = {
                "Id": $(this).attr("itemId")
                , "CongVan": "xoa"
            };
            jsonData = JSON.stringify({ congVanParam });

            $.ajax({
                type: "POST",
                url: "QuanLyCongVanHQ.aspx/IUDcongvan",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    console.log(d);
                    if (d == "OK") {
                        alert("XÓA THÀNH CÔNG!");
                        fncLoadCongVan();
                    }
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
            /// END AJAX LOAD
        }
    })
    //#endregion END CLICK CONG VAN XOA
    //#endregion START CLICK CONG VAN

    //#region START CLICK XEM
    $("#btn-xem").click(function () {
        fncLoadDanhSach($("#select-danhsach-thang").val(), $("#select-danhsach-nam").val(), "");
    })
    //#endregion START CLICK XEM


}

// #endregion END CLICK

// #region START CHANGE
function fncChange() {
}
// #endregion END CHANGE

//#region START MODAL HDIE
function fncModalHide() {
    $('#modal-khachhang-them').on('hidden.bs.modal', function (e) {
        // do something when this modal window is closed...
        $("#input-khachhang-them-makhachhang-modify").val("");
        $("#input-khachhang-them-khachhang-modify").val("");
        $("#input-khachhang-them-diachi-modify").val("");
        $("#btn-khachhang-them-luu").attr("itemId", "");
    });
    $('#modal-kho-them').on('hidden.bs.modal', function (e) {
        // do something when this modal window is closed...
        $("#input-kho-them-makho-modify").val("");
        $("#input-kho-them-tenkho-modify").val("");
        $("#btn-kho-them-luu").attr("itemId", "");
    });
    $('#modal-congvan-them').on('hidden.bs.modal', function (e) {
        // do something when this modal window is closed...
        $("#input-congvan-them-congvan-modify").val("");
        $("#btn-congvan-them-luu").attr("itemId", "");
    });
    $('#modal-danhsach-them').on('hidden.bs.modal', function (e) {
        // do something when this modal window is closed...
        $("#select-danhsach-them-congvan-modify").empty();
        $("#input-danhsach-them-ngaygiocongvan-modify").val("");
        $("#select-danhsach-them-khachhanggui-modify").empty();
        $("#input-danhsach-them-somawb-modify").val("");
        $("#input-danhsach-them-sohawb-modify").val("");
        $("#select-danhsach-them-khachhangsua-modify").empty();
        $("#input-danhsach-them-noidung-modify").val("");

        $("#btn-danhsach-them-luu").attr("itemId", "");
    });
}
//#endregion END MODAL HIDE