var d;
var html = "";
var html_sub = "";
var html_sub_menu = "";
var g_sovandon = "";
var g_socontainer = "";
var g_kehoachid = "";
var g_ngaygiodennhamay = "";
var ajaxGet;
var jsonData;
var wugroup = "";
var table;
var imgdata;
var arrTempData;
var fileitem;
var count_item;
var html_POD;


$(document).ready(function () {
    fncLoad();
    fncTableLogisticsView("", "-35");
    fncClick();
    fncLoadLoaiHinhToKhai();
    fncModalAction();
})

//#region functionLoad
function fncLoad() {
    $('.timepicker').timepicker(
        { 'timeFormat': 'H:i' }
    );
    $(".l-ngay").mask("99/99/9999");
    $(".l-gio").mask("99:99");
    wugroup = $("#username").attr("wugroup");
    if (wugroup != "1") {
        $("#div-main-action-menu").remove();
        $("#div-timkiem").remove();
    } else {
        $("#div-main-action-menu").removeClass("display-none");
        $("#div-timkiem").removeClass("display-none");
    }
    // hàm reload lại trang
    window.setInterval(function () {
        fncTableLogisticsView("", "-35");
        if (!$("#cb-all").checked && $("#username").attr("wugroup") == "1") {
            $.each($(".cb-qll"), function () {
                if (!this.checked && $(this).val() != "all") {
                    $(".tr-qll-acc-" + $(this).val()).hide();
                }
            })
        }

        if (!$("#cb-all-ncc").checked && $("#username").attr("wugroup") == "1") {
            $.each($(".ncc-qll"), function () {
                if (!this.checked && $(this).val() != "all-ncc") {
                    $(".tr-ncc-" + $(this).val()).hide();
                }
            })
        }

        if (!$("#cb-all-kh").checked && $("#username").attr("wugroup") == "1") {
            $.each($(".cb-qll-kh"), function () {
                if (!this.checked && $(this).val() != "all-kh") {
                    $(".tr-view-acc-" + $(this).val()).hide();
                }
            })
        }

        if (!$("#cb-all-dvvt").checked && $("#username").attr("wugroup") == "1") {
            $.each($(".cb-dvvt"), function () {
                if (!this.checked && $(this).val() != "all-dvvt") {
                    $(".tr-view-dvvt-" + $(this).val()).hide();
                }
            })
        }
    }, 1000000);

    //$("#kenjisize").kendoComboBox();

}

//#endregion functionLoad

function fncGenSubMenu(xoa_KeHoachId, xoa_SoVanDon, xoa_SoContainer) {
    html_sub_menu = "";
    //html_sub_menu += "<button type=\"button\" class=\"btn btn-primary btn-sm btn-qll-sua\" KeHoachId=\"" + xoa_KeHoachId + "\">Sửa</button>";
    html_sub_menu += "<button type=\"button\" class=\"btn btn-danger btn-qll-xoa\" KeHoachId=\"" + xoa_KeHoachId + "\" SoVanDon=\"" + xoa_SoVanDon + "\" SoContainer=\"" + xoa_SoContainer + "\" >Xóa</button>";
    return html_sub_menu;
    //console.log(html_sub_menu);
}
function fncModalAction() {
    $(".qllModal").on('hidden.bs.modal', function () {
        $(".qllModal .input-qll-clear").val("");
        $(".qllModal").attr("kehoachid", "");
        $(".qllModal").attr("bangiaochungtuid", "");
        $(".qllModal").attr("thongtintokhaiid", "");
        $(".qllModal").attr("thutucgiamsathaiquanid", "");
        $(".qllModal").attr("thongtinvanchuyen", "");
        $(".qllModal").attr("giaohangid", "");

        $(".qllModal").attr("sovandon", "");
        $(".qllModal").attr("socontainer", "");
    })
    $('#modalThemKeHoach').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });
    $("#modalDanhGiaVendor").on('hidden.bs.modal', function () {
        $("#btn-danhgia-vendor-luu").attr("kehoachid", "0");
    })

    $("#myModalUpload").on('hidden.bs.modal', function () {
        $("#tbl-upload-imgzone tbody").empty();
        fncShowActivity($("#myModalUpload").attr("kehoachid"));
    })
}
function fncClick() {
    // delete ảnh trên server 
    ///
    $("#modalGiaoHang").on("click", "#a-dinhkem-xoa", function () {
        if (confirm("Bạn có chắc chắn muốn xóa tài liệu này không? \r\nHành động này không thể hoàn tác! \r\nTên tài liệu: " + $(this).closest("tr").attr("filename"))) {
            //$("#div-wait").show();
            var xoa_folder = $(this).closest("tr").attr("folder");
            var ajaxGet2 = { "get1": xoa_folder, "get2": $(this).closest("tr").attr("filename") };
            jsonData = JSON.stringify({ ajaxGet2 });
            $.ajax({
                type: "POST",
                url: "QuanLyLogistics.aspx/DeleteFile",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    //fncModalSua($("#myModalViewThanhToan").attr("id-thanhtoan"), $("#myModalViewThanhToan").attr("loai-thanhtoan"));
                    fncLoadFileDinhKem(xoa_folder);
                    alert("Xóa thành công");

                },
                error: function () {
                    alert("Đã có lỗi trong quá trình xóa file!\r\nVui lòng tải lại trang(F5)!\r\nNếu sự cố lặp lại xin liên hệ nhân viên IT");
                }
            }).done(function () {
                //$("#div-wait").hide();
            })
        }
    })
    // Tải ảnh trên server về máy tính
    $("#modalGiaoHang").on("click", "#a-dinhkem-taixuong", function () {
        window.open("../DownloadFile.aspx?Root=LogisticsUpload&Folder=" + $(this).closest("tr").attr("folder") + "&FileName=" + $(this).closest("tr").attr("filename"));
    })
    // upoload ảnh lên server 
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
            imgdata.append("folder", $("#myModalUpload").attr("kehoachId"));
            imgdata.append("root", "LogisticsUpload");
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
    //delete ảnh
    $("#myModalUpload").on("click", "#a-upload-delete-all", function () {
        arrTempData = {};
        $("#tbl-upload-imgzone tbody tr").remove();
        fncResetProcessBar();
    })

    // Show ảnh
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

    // Show modal upload ảnh
    $(".btn-upload").click(function () {
        $("#myModalUpload").modal("show");
        $("#modalGiaoHang").modal("hide");
        $("#myModalUpload").attr("kehoachId", $("#modalGiaoHang").attr("kehoachid"));
        $("#span-upload-tilte").text(" " + $("#modalGiaoHang").attr("kehoachid"));
    })

    // Thống kê LOGISTICS
    $("#btn-thongke-logistic").click(function () {
        var gdate = new Date();
        $("#ModalThongKeLOG").modal("show");
        $("#select-thongke-thang").val(gdate.getMonth() + 1);
        $("#select-thongke-nam").val(gdate.getFullYear());
    });

    $("#btn-thongke-excel").click(function () {
        var thang = $("#select-thongke-thang").val();
        var nam = $("#select-thongke-nam").val();

        ajaxGet2 = { "get1": thang, "get2": nam };
        dataJSON = JSON.stringify({ ajaxGet2 });
        //console.log(dataJSON);
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/ReThongKeLOGPrint",
            data: dataJSON,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                window.open("../DownloadFile.aspx?Root=LOGISTICS&Folder=ThongKe/" + thang + "_" + nam + "&FileName=LOGISTICS_THONGKE_" + thang + "_" + nam + ".xlsx");
            },
            error: function () {
            }
        }).done(function () {
        });
    });
    // kết xuất excel cho logitics
    $("#btn-bangkethang-logistic").click(function () {
        var d_now_20180131 = new Date();
        $("#ModalVendor").modal("show");
        $("#input-tungay-vendor").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth(), 1));
        $("#input-denngay-vendor").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth() + 1, 0));
    });

    $("#select-loai-hinh-van-chuyen").change(function () {
        var selectedLoaiHinh = $(this).children("option:selected").val();
        if ($(this).val() != "0") {
            fnLoadKhachHang(selectedLoaiHinh);
        } else {
            $("#select-khachhang").empty();
        }

        $("#select-nhacungcapvantai").empty();
    });

    $("#select-khachhang").change(function () {
        var selectedLoaiHinhVanChuyen = $("#select-loai-hinh-van-chuyen").children("option:selected").val();
        var selectedKhachHang = $(this).children("option:selected").val();

        if ($(this).val() != "0") {
            fnLoadNhaCungCapVanTai(selectedLoaiHinhVanChuyen, selectedKhachHang)
        } else {
            $("#select-nhacungcapvantai").empty();
        }

    });

    $("#btn-xemvendor").click(function () {
        var tungayVendor = dmy2ymd($("#input-tungay-vendor").val());
        var denngayVendor = dmy2ymd($("#input-denngay-vendor").val());
        var selectLoaiHinh = $("#select-loai-hinh-van-chuyen").val();
        var selectKhacHang = $("#select-khachhang").val();
        var selectNhaCungCap = $("#select-nhacungcapvantai").val();


        if (tungayVendor > denngayVendor) {
            alert("Vui lòng chọn từ ngày nhỏ hơn đến ngày !");
            return false;
        }

        ajaxGet5 = {
            "get1": tungayVendor
            , "get2": denngayVendor
            , "get3": (selectLoaiHinh != null && selectLoaiHinh != "0") ? selectLoaiHinh : ""
            , "get4": (selectKhacHang != null && selectKhacHang != "0") ? selectKhacHang : ""
            , "get5": (selectNhaCungCap != null && selectNhaCungCap != "0") ? selectNhaCungCap : ""
        };
        dataJSON = JSON.stringify({ ajaxGet5 });
        //console.log(dataJSON);
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/ReVendorVanTaiHang",
            data: dataJSON,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                var html_tbody_vendor = "";
                var html_tr_1 = "";
                var html_tr_2 = "";
                var html_tr_3 = "";
                var html_tr_4 = "";
                var vendorVanTai = "";
                var TongSoXeVendor = 0;
                var rowspanVendor = 1;
                var Stt = 1;
                $.each(d, function (index, val) {
                    var GioTrungBinhXeDenMuon = 0;
                    if (isNaN(Math.round(parseInt(val.TongThoiGianDenMuon) / parseInt(val.XeVeMuon)))) {
                        GioTrungBinhXeDenMuon = 0;
                    } else {
                        GioTrungBinhXeDenMuon = Math.round(parseInt(val.TongThoiGianDenMuon) / parseInt(val.XeVeMuon));
                    }

                    var tomauTiLeTrungBinhXeDenMuon = "";

                    if (Math.round(parseInt(val.XeVeSom) / parseInt(val.TongSoXe) * 100) <= 100 && Math.round(parseInt(val.XeVeSom) / parseInt(val.TongSoXe) * 100) >= 70) {
                        tomauTiLeTrungBinhXeDenMuon = 'mauxanh';
                    } else if (Math.round(parseInt(val.XeVeSom) / parseInt(val.TongSoXe) * 100) <= 70 && Math.round(parseInt(val.XeVeSom) / parseInt(val.TongSoXe) * 100) >= 50) {
                        tomauTiLeTrungBinhXeDenMuon = 'mauvang';
                    } else {
                        tomauTiLeTrungBinhXeDenMuon = 'maudo';
                    }

                    if (index == 0) {
                        html_tr_1 += "<tr>";
                        html_tr_1 += "<td>" + Stt + "</td>";
                        html_tr_1 += "<td class=\"td-text-left\">" + val.LoaiHinhVanChuyen + "</td>";
                        html_tr_1 += "<td class=\"td-text-left\">" + val.KhachHang + "</td>";
                        html_tr_1 += "<td class=\"td-text-left\">" + val.NhaCungCapVanTai + "</td>";
                        html_tr_1 += "<td>" + val.TongSoXe + "</td>";
                        html_tr_1 += "<td>" + val.XeVeSom + "</td>";
                        html_tr_1 += "<td>" + val.XeVeMuon + "</td>";
                        html_tr_1 += "<td>" + val.TongThoiGianDenMuon + "</td>"
                        html_tr_1 += "<td>" + GioTrungBinhXeDenMuon + "</td>";
                        html_tr_1 += "<td class=\"" + tomauTiLeTrungBinhXeDenMuon + "\">" + Math.round(parseInt(val.XeVeSom) / parseInt(val.TongSoXe) * 100) + "%" + "</td>";
                        html_tr_1 += "<td rowspan=\"";
                        html_tr_2 += "\">";
                        html_tr_3 += "</td>";
                        html_tr_3 += "</tr>";
                        TongSoXeVendor = parseInt(val.TongSoXe);
                        vendorVanTai = val.NhaCungCapVanTai;
                    } else {
                        if (vendorVanTai == val.NhaCungCapVanTai) {
                            rowspanVendor += 1;
                            Stt++;
                            TongSoXeVendor += parseInt(val.TongSoXe);
                            html_tr_4 += "<tr>";
                            html_tr_4 += "<td>" + Stt + "</td>";
                            html_tr_4 += "<td class=\"td-text-left\">" + val.LoaiHinhVanChuyen + "</td>";
                            html_tr_4 += "<td class=\"td-text-left\">" + val.KhachHang + "</td>";
                            html_tr_4 += "<td class=\"td-text-left\">" + val.NhaCungCapVanTai + "</td>";
                            html_tr_4 += "<td>" + val.TongSoXe + "</td>";
                            html_tr_4 += "<td>" + val.XeVeSom + "</td>";
                            html_tr_4 += "<td>" + val.XeVeMuon + "</td>";
                            html_tr_4 += "<td>" + val.TongThoiGianDenMuon + "</td>"
                            html_tr_4 += "<td>" + GioTrungBinhXeDenMuon + "</td>";
                            html_tr_4 += "<td class=\"" + tomauTiLeTrungBinhXeDenMuon + "\">" + Math.round(parseInt(val.XeVeSom) / parseInt(val.TongSoXe) * 100) + "%" + "</td>";
                            html_tr_4 += "</tr>";
                        } else {
                            html_tbody_vendor += html_tr_1 + rowspanVendor + html_tr_2 + TongSoXeVendor + html_tr_3 + html_tr_4;

                            TongSoXeVendor = 0;
                            rowspanVendor = 1;
                            html_tr_1 = "";
                            html_tr_2 = "";
                            html_tr_3 = "";
                            html_tr_4 = "";

                            TongSoXeVendor += parseInt(val.TongSoXe);
                            Stt++;

                            html_tr_1 += "<tr>";
                            html_tr_1 += "<td>" + Stt + "</td>";
                            html_tr_1 += "<td class=\"td-text-left\">" + val.LoaiHinhVanChuyen + "</td>";
                            html_tr_1 += "<td class=\"td-text-left\">" + val.KhachHang + "</td>";
                            html_tr_1 += "<td class=\"td-text-left\">" + val.NhaCungCapVanTai + "</td>";
                            html_tr_1 += "<td>" + val.TongSoXe + "</td>";
                            html_tr_1 += "<td>" + val.XeVeSom + "</td>";
                            html_tr_1 += "<td>" + val.XeVeMuon + "</td>";
                            html_tr_1 += "<td>" + val.TongThoiGianDenMuon + "</td>"
                            html_tr_1 += "<td>" + GioTrungBinhXeDenMuon + "</td>";
                            html_tr_1 += "<td class=\"" + tomauTiLeTrungBinhXeDenMuon + "\">" + Math.round(parseInt(val.XeVeSom) / parseInt(val.TongSoXe) * 100) + "%" + "</td>";
                            html_tr_1 += "<td rowspan=\"";
                            html_tr_2 += "\">";
                            html_tr_3 += "</td>";
                            html_tr_3 += "</tr>";
                        }
                        vendorVanTai = val.NhaCungCapVanTai;
                    }
                    if (index == d.length - 1) {
                        html_tbody_vendor += html_tr_1 + rowspanVendor + html_tr_2 + TongSoXeVendor + html_tr_3 + html_tr_4;
                    }
                });

                $("#tbl-vendor-vantai tbody").empty();
                $("#tbl-vendor-vantai tbody").append(html_tbody_vendor);
            },
            error: function () {
            }
        }).done(function () {
            //$("#ModalThemThongTinKhacHang").modal("hide");
        });
    });

    $('#ModalVendor').on('hidden.bs.modal', function (e) {
        // do something when this modal window is closed...
        $("#tbl-vendor-vantai tbody").empty();
        $("#select-loai-hinh-van-chuyen").val("0");
        $("#select-khachhang").empty("");
        $("#select-nhacungcapvantai").empty("");
    });

    // Thông tin khách hàng
    $("#btn-tt-kh").click(function () {
        LoadThongTinKhachHang();
    });

    $("#show-thongtinkhachhang").on("click", "#btn-them-kh", function () {
        $("#ModalThemThongTinKhacHang").modal("show");
        $("#ModalThongTinKhacHang").modal("hide");
        $("#btn-luu-khach-hang").show();
        $("#btn-cap-nhat-khach-hang").hide();
    });

    $("#ModalThemThongTinKhacHang").on('hidden.bs.modal', function () {
        $("#ModalThongTinKhacHang").modal('show');
        $("#txtNhaMay").val("");
        $("#tara-DiaChi").val("");
        $("#tara-TTXuatHDNH").val("");
        $("#txtXuatCSHT").val("");
        $("#txtYeuCauDacBiet").val("");
    });

    // click Lưu thông tin khách hàng
    $("#btn-luu-khach-hang").click(function () {
        //$("#ModalThemThongTinKhacHang").modal('hide');
        thongTinKhachHang = {
            Id: "",
            NhaMay: $("#txtNhaMay").val(),
            DiaChi: $("#tara-DiaChi").val(),
            TTXuatHDNangHa: $("#tara-TTXuatHDNH").val(),
            TTXuatHD_CSHT: $("#txtXuatCSHT").val(),
            YeuCauDacBiet: $("#txtYeuCauDacBiet").val(),
        }
        dataJSON = JSON.stringify({ thongTinKhachHang });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IUThongTinKhachHang",
            data: dataJSON,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                LoadThongTinKhachHang();
            },
            error: function () {
            }
        }).done(function () {
            $("#ModalThemThongTinKhacHang").modal("hide");
        })
    });

    $("#show-thongtinkhachhang").on("click", "#btn-update-ttkh", function () {
        $("#ModalThemThongTinKhacHang").modal('show');
        $("#ModalThongTinKhacHang").modal('hide');
        $("#btn-luu-khach-hang").hide();
        $("#btn-cap-nhat-khach-hang").show();
        $("#btn-cap-nhat-khach-hang").attr("attr-id", $(this).attr("updateid"));

        ajaxGet = { "get": $(this).attr("updateid") };
        dataJSON = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/ReThongTinKhachHangById",
            data: dataJSON,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                $("#txtNhaMay").val(d.NhaMay);
                $("#tara-DiaChi").val(d.DiaChi);
                $("#tara-TTXuatHDNH").val(d.TTXuatHDNangHa);
                $("#txtXuatCSHT").val(d.TTXuatHD_CSHT);
                $("#txtYeuCauDacBiet").val(d.YeuCauDacBiet);
            },
            error: function () {
            }
        }).done(function () {
        })
    });

    $("#btn-cap-nhat-khach-hang").click(function () {
        thongTinKhachHang = {
            Id: $(this).attr("attr-id"),
            NhaMay: $("#txtNhaMay").val(),
            DiaChi: $("#tara-DiaChi").val(),
            TTXuatHDNangHa: $("#tara-TTXuatHDNH").val(),
            TTXuatHD_CSHT: $("#txtXuatCSHT").val(),
            YeuCauDacBiet: $("#txtYeuCauDacBiet").val(),
        }
        dataJSON = JSON.stringify({ thongTinKhachHang });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IUThongTinKhachHang",
            data: dataJSON,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                LoadThongTinKhachHang();
            },
            error: function () {
            }
        }).done(function () {
            $("#ModalThemThongTinKhacHang").modal("hide");
        })
    });

    $("#show-thongtinkhachhang").on("click", "#btn-delete-ttkh", function () {
        ajaxGet = { "get": $(this).attr("deleteid") };
        dataJSON = JSON.stringify({ ajaxGet });
        var conf = confirm("Bạn có muốn xóa thông tin khách hàng này không ?");
        if (conf == true) {
            $.ajax({
                type: "POST",
                url: "QuanLyLogistics.aspx/DeleteThongTinKhachHang",
                data: dataJSON,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    LoadThongTinKhachHang();
                },
                error: function () {
                }
            }).done(function () {
            })
        }
    });

    ///  Lọc theo kế hoạch


    $("#btn-lockehoach").click(function () {
        $("#input-ngay-lockehoach").datepicker("setDate", new Date());
        $("#ModalLocTheoKeHoach").modal("show");
        ReLoadKeHoachLogisticTheoNgay(dmy2ymd($("#input-ngay-lockehoach").val()));
        $("#tbl-loctheokehoach").DataTable({
            "paging": false,
            "responsive": true,
            "scrollX": true
        });
    });

    $("#btn-lockehoach-theongay").click(function () {
        //alert(dmy2ymd($("#input-ngay-lockehoach").val()));
        ReLoadKeHoachLogisticTheoNgay(dmy2ymd($("#input-ngay-lockehoach").val()));
        $("#tbl-loctheokehoach").DataTable({
            "paging": false,
            "responsive": true,
            "scrollX": true
        });
    });

    $("#btn-print-loctheongay").click(function () {
        var g_ngay = dmy2ymd($("#input-ngay-lockehoach").val());
        //console.log(g_ngay);
        //console.log(g_ngay.replace(/\//g, "_"));
        var ajaxGet = { "get": g_ngay };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/ReKeHoachPrint",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                window.open("../DownloadFile.aspx?Root=LOGISTICS&Folder=TTCONT/" + g_ngay.replace(/\//g, "_") + "&FileName=LOGISTICS_TT_CONT_" + g_ngay.replace(/\//g, "_") + ".xlsx");
            },
            error: function () {
            }
        }).done(function () {
        });
    });

    ////////////////////////////////////// Sửa bình luận
    $("#table-logistics-main").on("click", ".a-sua-binhluan", function () {
        $("#modalThaoLuan").attr("BinhLuanId", $(this).attr("BinhLuanId"));
        $("#modalThaoLuan").attr("KeHoachId", $(this).attr("KeHoachId"));
        ajaxGet = { "get": $(this).attr("BinhLuanId") };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/ReLogisticsBinhLuanByIdView",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                $("#textarea-sua-binhluan").val(d.NoiDung);
            },
            error: function () {
            }
        }).done(function () {
        })
        $("#modalThaoLuan").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        //alert();
    })

    ////////////////////////////////////// \\Sửa bình luận
    ////////////////////////////////////// Lưu Sửa bình luận
    $("#modalThaoLuan").on("click", "#btn-sua-binhluan-luu", function () {
        //$("#div-wait").show();

        var g_BinhLuanId = $("#modalThaoLuan").attr("BinhLuanId");
        var g_KeHoachId = $("#modalThaoLuan").attr("KeHoachId");

        var g_binhluan = $.trim($("#textarea-sua-binhluan").val());
        var BinhLuan = {
            Id: g_BinhLuanId,
            KeHoachId: "",
            NoiDung: g_binhluan,
            QL_NguoiTao: "",
            QL_ThoiGianTao: ""
        };
        jsonData = JSON.stringify({ BinhLuan });
        //console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IULogisticsBinhLuan",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Sửa bình luận thành công!",
                    text: "",
                    type: 'success',
                    timer: 2000,
                })
                $("#modalThaoLuan").modal("hide");
            },
            error: function () {
            }
        }).done(function () {
            fncLoadThaoLuan(g_KeHoachId);
            //$("#div-wait").hide();
        })
    })
    ////////////////////////////////////// \\Lưu Sửa bình luận

    ////////////////////////////////////// Xóa bình luận
    $("#table-logistics-main").on("click", ".a-xoa-binhluan", function () {
        var g_BinhLuanId = $(this).attr("BinhLuanId");
        var g_KeHoachId = $(this).attr("KeHoachId");
        ajaxGet = { "get": g_BinhLuanId };
        jsonData = JSON.stringify({ ajaxGet });
        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa bình luận này?',
            text: "Hành động này không thể khôi phục lại!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',

            confirmButtonText: 'Đồng ý, xóa bình luận!',
            cancelButtonText: 'Hủy'
        }).then(function () {
            $.ajax({
                type: "POST",
                url: "QuanLyLogistics.aspx/DLogisticsBinhLuan",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    Swal.fire(
                        'Đã xóa!',
                        'Bình luận đã được xóa.',
                        'success'
                    )
                    //alert(d.TieuDe);
                    //$("#modalThaoLuan").modal("hide");
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Bình luận chưa được xóa. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
                fncLoadThaoLuan(g_KeHoachId);
            })
        })
    })

    ////////////////////////////////////// \\Xóa bình luận
    ////////////////////////////////////// Gửi bình luận

    $("#table-logistics-main").on("click", "#btn-gui-binhluan", function () {
        var g_KeHoachId = $(this).attr("KeHoachId");
        var g_binhluan = $.trim($("#textarea-binhluan-" + g_KeHoachId).val());
        var BinhLuan = {
            Id: "",
            KeHoachId: g_KeHoachId,
            NoiDung: g_binhluan,
            QL_NguoiTao: "",
            QL_ThoiGianTao: ""
        };
        jsonData = JSON.stringify({ BinhLuan });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IULogisticsBinhLuan",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Thêm bình luận thành công!",
                    text: "",
                    type: 'success',
                    timer: 1000,
                }

                )
                //alert(d.TieuDe);
                //$("#modalKeHoach").modal("hide");
            },
            error: function () {
            }
        }).done(function () {
            fncLoadThaoLuan(g_KeHoachId);
        })
    })

    ////////////////////////////////////// \\Gửi bình luận
    /// click tìm kiếm
    $("#btn-logistics-timkiem").click(function () {
        fncTimKiem($("#input-bill").val().trim(), $("#input-cont").val().trim());
    })
    /// end click tìm kiếm
    /// click tải lại
    $(".btn-tailai").click(function () {
        fncTableLogisticsView('', $(this).attr("ngay"));
        $("#input-bill").val('');
        $("#input-cont").val('');
    })
    /// end lcik tải lại

    ////////////////////////////////////// checkbox
    $(".cb-service").change(function () {
        var cb_value = $(this).val();

        if (cb_value == "all") {
            if (this.checked) {
                $(".tr-qll-view").show();
                $(".cb-service-child").prop("checked", true);
                //$("#cb-all-ncc").prop("checked", true);

            } else {
                $(".tr-qll-view").hide();
                $(".cb-service-child").prop("checked", false);
                //$("#cb-all-ncc").prop("checked", false);
            }
        } else {
            if (this.checked) {
                $(".tr-service-" + cb_value).show();
            } else {
                $(".tr-service-" + cb_value).hide();
            }
        }
    })

    $(".cb-qll").change(function () {
        var cb_value = $(this).val();

        if (cb_value == "all") {
            if (this.checked) {
                $(".tr-qll-view").show();
                $(".cb-qll-child").prop("checked", true);
                //$("#cb-all-ncc").prop("checked", true);

            } else {
                $(".tr-qll-view").hide();
                $(".cb-qll-child").prop("checked", false);
                //$("#cb-all-ncc").prop("checked", false);
            }
        } else {
            if (this.checked) {
                $(".tr-qll-acc-" + cb_value).show();
            } else {
                $(".tr-qll-acc-" + cb_value).hide();
            }
        }
    })


    $(".ncc-qll").change(function () {
        var ncc_value = $(this).val();
        if (ncc_value == "all-ncc") {
            if (this.checked) {
                $(".tr-qll-view").show();
                $(".cb-qll-child-dvvt").prop("checked", true);
                //$("#cb-all").prop("checked", true);
            } else {
                $(".tr-qll-view").hide();
                $(".cb-qll-child-dvvt").prop("checked", false);
                //$("#cb-all").prop("checked", false);
            }
        } else {
            if (this.checked) {
                $(".tr-ncc-" + ncc_value).show();
            } else {
                $(".tr-ncc-" + ncc_value).hide();
            }
        }
    })

    $(".cb-qll-kh").change(function () {
        //console.log($(this).val());
        var acc_value = $(this).val();
        if (acc_value == "all-kh") {
            if (this.checked) {
                $(".tr-qll-view-kh").show();
                $(".cb-qll-child-kh").prop("checked", true);
                //$("#cb-all-dvvt").prop("checked", true);
            } else {
                $(".tr-qll-view-kh").hide();
                $(".cb-qll-child-kh").prop("checked", false);
                //$("#cb-all-dvvt").prop("checked", false);
            }
        } else {
            console.log(acc_value);
            if (this.checked) {
                $(".tr-view-acc-" + acc_value).show();
            } else {
                $(".tr-view-acc-" + acc_value).hide();
            }
        }
    })


    $(".cb-dvvt").change(function () {
        var dvvt_value = $(this).val();
        //console.log($(this).val());

        if (dvvt_value == "all-dvvt") {
            if (this.checked) {
                $(".tr-qll-view-kh").show();
                $(".cb-qll-child-kh-dvvt").prop("checked", true);
                //$("#cb-all-kh").prop("checked", true);
            } else {
                $(".tr-qll-view-kh").hide();
                $(".cb-qll-child-kh-dvvt").prop("checked", false);
                //$("#cb-all-kh").prop("checked", false);
            }
        } else {
            if (this.checked) {
                $(".tr-view-dvvt-" + dvvt_value).show();
            } else {
                $(".tr-view-dvvt-" + dvvt_value).hide();
            }
        }
    });


    ////////////////////////////////////// \\checkbox

    ////////////////////////////////////// Xóa
    $("#table-logistics-main").on("click", ".btn-qll-xoa", function () {
        var xoa_sovandon = $(this).attr("sovandon");
        var xoa_socontainer = $(this).attr("socontainer");
        var xoa_KeHoachId = $(this).attr("KeHoachId");

        var ajaxGet = { "get": xoa_KeHoachId };
        jsonData = JSON.stringify({ ajaxGet });

        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa lô hàng này không?',
            text: "Số vận đơn: " + xoa_sovandon + "- Số Container: " + xoa_socontainer,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Đồng ý, xóa lô hàng!',
            cancelButtonText: 'Hủy'
        }).then((result) => {
            //$("#div-wait").show();
            if (result.value) {
                $.ajax({
                    type: "POST",
                    url: "QuanLyLogistics.aspx/DLogisticsKeHoach",
                    data: jsonData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    success: function (responsive) {
                        d = responsive.d;
                        Swal.fire({
                            title: "Xóa lô hàng thành công!",
                            text: "Hệ thống sẽ tự tải lại sau 2s",
                            type: 'success',
                            timer: 2000,
                        })
                    },
                    error: function () {
                        Swal.fire(
                            'Có lỗi xảy ra!',
                            'Lô hàng chưa được xóa. Thử lại hoặc liên hệ IT',
                            'error'
                        )
                    }
                }).done(function (e) {
                    //$("#div-wait").hide();
                    event.stopPropagation();
                    fncTableLogisticsView("", "-35");
                })
            }
        })
    })
    ////////////////////////////////////// \\Xóa
    ////////////////////////////////////// Mở excel thêm mới kế hoạch
    $("#btn-themkehoach").click(function () {
        $("#modalThemKeHoach").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheet").empty();
        $("#spreadsheet").kendoSpreadsheet({
            columns: 21,
            rows: 30,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var sheet = spreadsheet.activeSheet();
        sheet.range(kendo.spreadsheet.SHEETREF).clear();
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
                        { value: "Số vận đơn", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số container", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số chì ", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Dịch vụ", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Loại XN", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Loại VC", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số kiện", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Trọng lượng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số tờ khai", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Ngày gửi thông tin cont", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false } //NgayGioContDenNhaMay
                        , { value: "Giờ gửi thông tin cont", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false } // NgayGioContDenNhaMay
                        , { value: "Ngày cont đến nhà máy", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false } //NgayGioContDenNhaMayThucTe
                        , { value: "Giờ cont đến nhà máy", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false } // NgayGioContDenNhaMayThucTe
                        , { value: "Ngày tàu đi hoặc đến", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Giờ tàu đi hoặc đến", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Ngày nhận KH", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        //, { value: "Giờ nhận KH", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Khách Hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Ghi Chú", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Nhà cung cấp vận tải", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Tuyến", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Kho Trả hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "GrossTare", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }

                    ]
                }],
                columns: [
                    {// Số vận đơn
                        width: 120
                    },
                    {// Số container
                        width: 120
                    },
                    {// Số chì
                        width: 100
                    },
                    { // Kiểu cont - Loại VC
                        width: 120
                    },
                    {// Loại xuất nhập
                        width: 60
                    },
                    {// Loại vận chuyển
                        width: 60
                    },
                    {// Số kiện
                        width: 100
                    },
                    {// Trọng lượng
                        width: 100
                    },
                    {// Số tờ khai
                        width: 100
                    },
                    //{// Ngày Y/C giao hàng
                    //    width: 100
                    //},
                    //{// Giờ Y/C giao hàng
                    //    width: 60
                    //},

                    {// Ngày gửi thông tin cont
                        width: 100
                    },
                    {// Giờ gửi thông tin cont
                        width: 100
                    },
                    {// Ngày cont đến nhà máy
                        width: 100
                    },
                    {// Giờ cont đến nhà máy
                        width: 100
                    },
                    {// Ngày tàu đi hoặc đến
                        width: 100
                    },
                    {// Giờ tàu đi hoặc đến
                        width: 70
                    },
                    //{// Ngày nhận KH
                    //    width: 100
                    //},
                    //{// Giờ nhận KH
                    //    width: 70
                    //},
                    {// Khách hàng
                        width: 80
                    },
                    {// Ghi Chú
                        width: 100
                    },
                    {// Nhà cung cấp vận tải
                        width: 100
                    },
                    {// Tuyến
                        width: 100
                    },
                    {// Kho trả hàng
                        width: 100
                    },
                    {// GrossTare
                        width: 100
                    }
                ]
            }]
        });
    })
    ////////////////////////////////////// \\Mở excel thêm mới kế hoạch
    ////////////////////////////////////// lưu thêm mới kế hoạch
    $("#btn-themkehoach-luu").click(function () {
        //$("#div-wait").show();
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var DataInput = [];
        var cells;
        var cell_SoVanDon = "";
        var cell_SoContainer = "";
        var cell_SoChiHangTau = "";
        var cell_KieuContainer_LoaiVanChuyen = "";
        var cell_LoaiHinhXuatNhap = "";
        var cell_LoaiHinhVanChuyen = "";
        var cell_SoKien = "";
        var cell_TrongLuong = "";
        var cell_SoToKhai = "";
        var cell_NgayYeuCauGiaoHang = "";
        var cell_GioYeuCauGiaoHang = "";
        var cell_KhachHang = "";
        var cell_NgayNhanKeHoach = "";
        var cell_GioNhanKeHoach = "";
        var NgayContDenNhaMay = "";
        var GioContDenNhaMay = "";
        var NgayTauDiHoacDen = "";
        var GioTauDiHoacDen = "";
        var GhiChu = "";
        var NgayContDenNhaMayThucTe = "";
        var GioContDenNhaMayThucTe = "";
        var NhaCungCapVanTai = "";
        var Tuyen = "";
        var cell_KhoTraHang = "";
        var GrossTare = "";
        var error_alert = "";
        //console.log(data);
        data.forEach(function (dataItem, dataIndex) {
            // clear biến value
            cell_SoVanDon = "";
            cell_SoContainer = "";
            cell_SoChiHangTau = "";
            cell_KieuContainer_LoaiVanChuyen = "";
            cell_LoaiHinhXuatNhap = "";
            cell_LoaiHinhVanChuyen = "";
            cell_SoKien = "";
            cell_TrongLuong = "";
            cell_SoToKhai = "";
            cell_NgayYeuCauGiaoHang = "";
            cell_GioYeuCauGiaoHang = "";
            cell_KhachHang = "";
            cell_NgayNhanKeHoach = "";
            cell_GioNhanKeHoach = "";
            cell_NgayContDenNhaMay = "";
            cell_GioContDenNhaMay = "";
            cell_NgayTauDiHoacDen = "";
            cell_GioTauDiHoacDen = "";
            cell_GhiChu = "";
            cell_NgayContDenNhaMayThucTe = "";
            cell_GioContDenNhaMayThucTe = "";
            cell_NhaCungCapVanTai = "";
            cell_Tuyen = "";
            cell_KhoTraHang = "";
            cell_GrossTare = "";
            // end clear biến value
            cells = dataItem.cells;
            //console.log(cells);
            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoVanDon = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoContainer = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoChiHangTau = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_KieuContainer_LoaiVanChuyen = cells[cellIndex].value;
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            cell_LoaiHinhXuatNhap = cells[cellIndex].value;
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined) {
                            cell_LoaiHinhVanChuyen = cells[cellIndex].value;
                        }
                        break;
                    case 6:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoKien = cells[cellIndex].value;
                        }
                        break;
                    case 7:
                        if (cells[cellIndex].value !== undefined) {
                            cell_TrongLuong = cells[cellIndex].value;
                        }
                        break;
                    case 8:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoToKhai = cells[cellIndex].value;
                        }
                        break;
                    case 9:
                        //if (cells[cellIndex].value !== undefined) {
                        //    cell_NgayYeuCauGiaoHang = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        //}
                        if (cells[cellIndex].value !== undefined) {
                            cell_NgayContDenNhaMay = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 10:
                        //if (cells[cellIndex].value !== undefined) {
                        //    if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                        //        cell_GioYeuCauGiaoHang = Decimal2Time(cells[cellIndex].value * 24);
                        //    }
                        //}
                        if (cells[cellIndex].value !== undefined) {
                            if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                                cell_GioContDenNhaMay = Decimal2Time(cells[cellIndex].value * 24);
                            }
                        }
                        break;

                    case 11:
                        if (cells[cellIndex].value !== undefined) {
                            cell_NgayContDenNhaMayThucTe = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 12:
                        if (cells[cellIndex].value !== undefined) {
                            if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                                cell_GioContDenNhaMayThucTe = Decimal2Time(cells[cellIndex].value * 24);
                            }
                        }
                        break;
                    case 13:
                        if (cells[cellIndex].value !== undefined) {
                            cell_NgayTauDiHoacDen = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 14:
                        if (cells[cellIndex].value !== undefined) {
                            if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                                cell_GioTauDiHoacDen = Decimal2Time(cells[cellIndex].value * 24);
                            }
                        }
                        break;
                    //case 14:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        cell_NgayNhanKeHoach = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                    //    }
                    //    break;
                    //case 15:
                    //    if (cells[cellIndex].value !== undefined) {
                    //        if (cells[cellIndex].value < 1 && cells[cellIndex].value >= 0) {
                    //            cell_GioNhanKeHoach = Decimal2Time(cells[cellIndex].value * 24);
                    //        }
                    //    }
                    //    break;
                    case 15:
                        if (cells[cellIndex].value !== undefined) {
                            cell_KhachHang = cells[cellIndex].value;
                        }
                        break;
                    case 16:
                        if (cells[cellIndex].value !== undefined) {
                            cell_GhiChu = cells[cellIndex].value;
                        }
                        break;
                    case 17:
                        if (cells[cellIndex].value !== undefined) {
                            cell_NhaCungCapVanTai = cells[cellIndex].value;
                        }
                        break;
                    case 18:
                        if (cells[cellIndex].value !== undefined) {
                            cell_Tuyen = cells[cellIndex].value;
                        }
                        break;
                    case 19:
                        if (cells[cellIndex].value !== undefined) {
                            cell_KhoTraHang = cells[cellIndex].value;
                        }
                        break;
                    case 20:
                        if (cells[cellIndex].value !== undefined) {
                            cell_GrossTare = cells[cellIndex].value;
                        }
                        break;
                }
            }
            )
            //console.log(cell_flttime);
            // check mawb trùng trong excel

            if (String(cell_SoVanDon).trim() != "" && String(cell_SoContainer).trim() != "") {
                DataInput.push(
                    {
                        "Id": ""
                        , "SoVanDon": String(cell_SoVanDon).trim().replace(/ /g, '')
                        , "SoContainer": String(cell_SoContainer).trim().replace(/ /g, '')
                        , "SoChiHangTau": String(cell_SoChiHangTau).trim().replace(/ /g, '')
                        , "KieuContainer_LoaiVanChuyen": String(cell_KieuContainer_LoaiVanChuyen).trim().replace(/ /g, '')
                        , "LoaiHinhXuatNhap": String(cell_LoaiHinhXuatNhap).trim().replace(/ /g, '')
                        , "LoaiHinhVanChuyen": String(cell_LoaiHinhVanChuyen).trim().replace(/ /g, '')
                        , "SoKien": String(cell_SoKien).trim().replace(/ /g, '')
                        , "TrongLuong": String(cell_TrongLuong).trim().replace(/ /g, '')
                        , "NgayGioYeuCauGiaoHang": ""
                        //, "NgayGioNhanKeHoach": String(cell_NgayNhanKeHoach).trim().replace(/ /g, '') + " " + String(cell_GioNhanKeHoach).trim().replace(/ /g, '')
                        , "NgayGioNhanKeHoach": ""
                        , "KhachHang": String(cell_KhachHang).trim().replace(/ /g, '')
                        , "NgayGioContDenNhaMay": String(cell_NgayContDenNhaMay).trim().replace(/ /g, '') + " " + String(cell_GioContDenNhaMay).trim().replace(/ /g, '')
                        , "NgayGioTauDiHoacDen": String(cell_NgayTauDiHoacDen).trim().replace(/ /g, '') + " " + String(cell_GioTauDiHoacDen).trim().replace(/ /g, '')
                        , "QL_NguoiTao": ""
                        , "QL_ThoiGianTao": ""
                        , "QL_NguoiSua": ""
                        , "QL_ThoiGianSua": ""
                        , "GhiChu": String(cell_GhiChu).trim()
                        , "NgayGioContDenNhaMayThucTe": String(cell_NgayContDenNhaMayThucTe).trim().replace(/ /g, '') + " " + String(cell_GioContDenNhaMayThucTe).trim().replace(/ /g, '')
                        , "NhaCungCapVanTai": String(cell_NhaCungCapVanTai).trim().replace(/ /g, '')
                        , "Tuyen": String(cell_Tuyen).trim().replace(/ /g, '')
                        , "KhoTraHang": String(cell_KhoTraHang).trim().replace(/ /g, '')
                        , "GrossTare": String(cell_GrossTare).trim().replace(/ /g, '')
                        , "SoToKhai": String(cell_SoToKhai).trim().replace(/ /g, '')
                    }
                );
            }
        })
        var jsonData = JSON.stringify({ DataInput });
        //console.log(jsonData);
        //$("#div-wait").show();
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IULogisticsKeHoachExcel",
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
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
            //$("#div-wait").hide();
            $("#modalThemKeHoach").modal("hide");
            event.stopPropagation();
            fncTableLogisticsView("", "-35");
        })
    })
    ////////////////////////////////////// \\lưu thêm mới kế hoạch
    ////////////////////////////////////// Mở sub tr
    $("#table-logistics-main").on("click", ".td-trangthai", function () {
        wugroup = $("#username").attr("wugroup");
        if (wugroup == "1" || wugroup == "45") {// mở sub cho cả Sales
            var ajaxGet = { "get": "1" };
            var _SoVanDon = $(this).closest("tr").attr("SoVanDon");
            var _SoContainer = $(this).closest("tr").attr("SoContainer");
            var _KeHoachId = $(this).closest("tr").attr("KeHoachId");
            jsonData = JSON.stringify({ ajaxGet });
            $.ajax({
                type: "POST",
                url: "QuanLyLogistics.aspx/ReLogisticsPhanQuyen",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    if (d == "1") {
                        fncLoadThongTinToKhai(_KeHoachId, _SoVanDon, _SoContainer);
                        fncLoadThaoLuan(_KeHoachId);

                        $(".tr-sub-show").hide();

                        if (!$(".tr-sub-" + _KeHoachId).hasClass("tr-sub-show")) {
                            fncShowSub(_KeHoachId);
                        } else {
                            $(".tr-sub-show").removeClass("tr-sub-show");
                        }
                    }
                }, error: function () {
                    alert("có lỗi xảy ra");
                }
            }).done(function () {
            });
        }
    })
    ////////////////////////////////////// \\Mở sub tr
    ////////////////////////////////////// kế hoạch
    // BD: Load SỬA KẾ HOẠCH
    $("#table-logistics-main").on("click", ".span-kehoach", function () {
        g_sovandon = $(this).attr("sovandon");
        g_socontainer = $(this).attr("socontainer");
        g_kehoachid = $(this).attr("kehoachid");
        // đổi tên tiêu đề
        $("#modalKeHoach .modal-title").text("Sửa kế hoạch");
        // clear input
        fncLoadKeHoachCombobox();
        // load dữ liệu
        var ajaxGet = { "get": g_kehoachid };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/ReLogisticsKeHoachView",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                if (d.Id != null) {
                    $("#modalKeHoach").attr("kehoachid", d.Id);
                    $("#input-qll-SoVanDon").val(d.SoVanDon);
                    $("#input-qll-SoContainer").val(d.SoContainer);
                    $("#input-qll-SoChiHangTau").val(d.SoChiHangTau);
                    $("#input-qll-KieuContainerLoaiVanChuyen").data('kendoComboBox').value(d.KieuContainer_LoaiVanChuyen);
                    $("#input-qll-LoaiHinhNhapXuat").val(d.LoaiHinhXuatNhap);
                    $("#input-qll-LoaiHinhVanChuyen").val(d.LoaiHinhVanChuyen);
                    $("#input-qll-SoKien").val(d.SoKien);
                    $("#input-qll-TrongLuong").val(d.TrongLuong);
                    if (d.NgayGioContDenNhaMayThucTe != null) {
                        $("#input-qll-NgayContDenNhaMayThucTe").val(convertDate(d.NgayGioContDenNhaMayThucTe)[1]);
                        $("#input-qll-GioContDenNhaMayThucTe").val(convertDate(d.NgayGioContDenNhaMayThucTe)[3]);
                    }
                    $("#input-qll-KhachHang").data('kendoComboBox').value(d.KhachHang);
                    //if (d.NgayGioNhanKeHoach != null) {
                    //    $("#input-qll-NgayNhanKeHoach").val(convertDate(d.NgayGioNhanKeHoach)[1]);
                    //    $("#input-qll-GioNhanKeHoach").val(convertDate(d.NgayGioNhanKeHoach)[3]);
                    //}
                    if (d.NgayGioContDenNhaMay != null) {
                        $("#input-qll-NgayContDenNhaMay").val(convertDate(d.NgayGioContDenNhaMay)[1]);
                        $("#input-qll-GioContDenNhaMay").val(convertDate(d.NgayGioContDenNhaMay)[3]);
                    }
                    if (d.NgayGioTauDiHoacDen != null) {
                        $("#input-qll-NgayTauDiHoacDen").val(convertDate(d.NgayGioTauDiHoacDen)[1]);
                        $("#input-qll-GioTauDiHoacDen").val(convertDate(d.NgayGioTauDiHoacDen)[3]);
                    }
                    $("#input-qll-NhaCungCapVanTai").data('kendoComboBox').value(d.NhaCungCapVanTai);
                    $("#input-qll-Tuyen").data('kendoComboBox').value(d.Tuyen);
                    $("#input-qll-GhiChuKH").val(d.GhiChu);
                    $("#input-qll-GrossTare").val(d.GrossTare);
                    $("#input-qll-khotrahang").val(d.KhoTraHang);

                }
            },
            error: function () {
                alert("loi");
            }
        }).done(function () {
        });

        // hiện modal
        $("#modalKeHoach").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
    })
    // KT: Load SỬA KẾ HOẠCH
    // BD: Lưu SỬa kế hoạch
    $("#modalKeHoach").on("click", "#btn-kehoach-luu", function () {
        //$("#div-wait").show();
        //get value
        var _KeHoachId = $("#modalKeHoach").attr("kehoachid");
        var KeHoach = {
            Id: _KeHoachId
            , SoVanDon: $("#input-qll-SoVanDon").val()
            , SoContainer: $("#input-qll-SoContainer").val()
            , SoChiHangTau: $("#input-qll-SoChiHangTau").val()
            , KieuContainer_LoaiVanChuyen: $("#input-qll-KieuContainerLoaiVanChuyen").data('kendoComboBox').value()
            , LoaiHinhXuatNhap: $("#input-qll-LoaiHinhNhapXuat").val()
            , LoaiHinhVanChuyen: $("#input-qll-LoaiHinhVanChuyen").val()
            , SoKien: $("#input-qll-SoKien").val()
            , TrongLuong: $("#input-qll-TrongLuong").val()
            , NgayGioContDenNhaMayThucTe: dmy2ymd($("#input-qll-NgayContDenNhaMayThucTe").val()) + " " + $("#input-qll-GioContDenNhaMayThucTe").val()
            //, NgayGioNhanKeHoach: dmy2ymd($("#input-qll-NgayNhanKeHoach").val()) + " " + $("#input-qll-GioNhanKeHoach").val()
            , NgayGioNhanKeHoach: ""
            , NgayGioContDenNhaMay: dmy2ymd($("#input-qll-NgayContDenNhaMay").val()) + " " + $("#input-qll-GioContDenNhaMay").val()
            , NgayGioTauDiHoacDen: dmy2ymd($("#input-qll-NgayTauDiHoacDen").val()) + " " + $("#input-qll-GioTauDiHoacDen").val()
            , KhachHang: $("#input-qll-KhachHang").data('kendoComboBox').value()
            , NhaCungCapVanTai: $("#input-qll-NhaCungCapVanTai").data('kendoComboBox').value()
            , Tuyen: $("#input-qll-Tuyen").data('kendoComboBox').value()
            , QL_NguoiTao: ""
            , QL_ThoiGianTao: ""
            , QL_NguoiSua: ""
            , QL_ThoiGianSua: ""
            , GhiChu: $("#input-qll-GhiChuKH").val()
            , GrossTare: $("#input-qll-GrossTare").val()
            , NgayGioYeuCauGiaoHang: ""
            , KhoTraHang: $("#input-qll-khotrahang").val()
            , SoToKhai: ""
        }
        jsonData = JSON.stringify({ KeHoach });
        //console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IULogisticsKeHoach",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Sửa kế hoạch thành công!",
                    text: "",
                    type: 'success',
                    timer: 2000,
                })
                $("#modalKeHoach").modal("hide");
            },
            error: function () {
            }
        }).done(function () {
            fncTableLogisticsView(_KeHoachId, "-35");
            //$("#div-wait").hide();
        })
    })
    // KT: Lưu SỬa kế hoạch
    ///////////////////////////////////// \\ kế hoạch
    ///////////////////////////////////// bàn giao chứng từ
    // bd: load bàn giao chứng từ
    $("#table-logistics-main").on("click", ".span-bangiaochungtu", function () {
        g_sovandon = $(this).attr("sovandon");
        g_socontainer = $(this).attr("socontainer");
        g_kehoachid = $(this).attr("kehoachid");
        // đổi tên tiêu đề
        $("#modalBanGiaoChungTu .modal-title").text("Sửa bàn giao chứng từ");
        // clear input

        // load dữ liệu
        var ajaxGet = { "get": g_kehoachid };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/ReLogisticsBanGiaoChungTuView",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d.NgayGioNhanChungTu);
                //console.log(convertDate(d.NgayGioNhanChungTu)[1]);

                if (d.Id != null) {
                    $("#modalBanGiaoChungTu").attr("bangiaochungtuid", d.Id);

                    if (d.NgayGioNhanChungTu != null) {
                        $("#input-qll-NgayNhanChungTu").val(convertDate(d.NgayGioNhanChungTu)[1]);
                        $("#input-qll-GioNhanChungTu").val(convertDate(d.NgayGioNhanChungTu)[3]);
                    }

                    if (d.NgayGioGuiChungTuHaiQuan != null) {
                        $("#input-qll-NgayGuiChungTuHaiQuan").val(convertDate(d.NgayGioGuiChungTuHaiQuan)[1]);
                        $("#input-qll-GioGuiChungTuHaiQuan").val(convertDate(d.NgayGioGuiChungTuHaiQuan)[3]);
                    }

                    if (d.NgayGioGuiChungTuChoDonViVanChuyen != null) {
                        $("#input-qll-NgayGuiChungTuChoDonViVanChuyen").val(convertDate(d.NgayGioGuiChungTuChoDonViVanChuyen)[1]);
                        $("#input-qll-GioGuiChungTuChoDonViVanChuyen").val(convertDate(d.NgayGioGuiChungTuChoDonViVanChuyen)[3]);
                    }
                }
            },
            error: function () {
            }
        }).done(function () {
        });

        // hiện modal
        $("#modalBanGiaoChungTu").attr("kehoachid", g_kehoachid);
        //$("#modalBanGiaoChungTu").attr("socontainer", g_socontainer);
        $("#modalBanGiaoChungTu").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
    })
    // kt: load bàn giao chứng từ
    // BD: Lưu sửa bàn giao chứng từ
    $("#modalBanGiaoChungTu").on("click", "#btn-bangiaochungtu-luu", function () {
        //$("#div-wait").show();
        //get value
        var _KeHoachId = $("#modalBanGiaoChungTu").attr("kehoachid");
        var BanGiaoChungTu = {
            Id: $("#modalBanGiaoChungTu").attr("bangiaochungtuid")
            , SoVanDon: ""
            , SoContainer: ""
            , NgayGioNhanChungTu: dmy2ymd($("#input-qll-NgayNhanChungTu").val()) + " " + $("#input-qll-GioNhanChungTu").val()
            , NgayGioGuiChungTuHaiQuan: dmy2ymd($("#input-qll-NgayGuiChungTuHaiQuan").val()) + " " + $("#input-qll-GioGuiChungTuHaiQuan").val()
            , NgayGioGuiChungTuChoDonViVanChuyen: dmy2ymd($("#input-qll-NgayGuiChungTuChoDonViVanChuyen").val()) + " " + $("#input-qll-GioGuiChungTuChoDonViVanChuyen").val()

            , QL_NguoiTao: ""
            , QL_ThoiGianTao: ""
            , QL_NguoiSua: ""
            , QL_ThoiGianSua: ""
            , KeHoachId: _KeHoachId
            , UpdateAllWithSameVanDon: $("#cb-UpdateAllWithSameVanDon").prop("checked")
        }
        jsonData = JSON.stringify({ BanGiaoChungTu });
        //console.log(BanGiaoChungTu);
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IULogisticsBanGiaoChungTu",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Sửa bàn giao chứng từ thành công!",
                    text: "",
                    type: 'success',
                    timer: 2000,
                })
                $("#modalBanGiaoChungTu").modal("hide");
            },
            error: function () {
            }
        }).done(function () {
            fncTableLogisticsView(_KeHoachId, "-35");
            //$("#div-wait").hide();
        })
    })
    // KT: Lưu sửa bàn giao chứng từ
    // bd: print bàn giao chứng từ
    $("#table-logistics-main").on("click", ".span-bangiaochungtu-print", function () {
        g_sovandon = $(this).attr("sovandon");
        g_socontainer = $(this).attr("socontainer");
        g_kehoachid = $(this).attr("kehoachid");

        // load dữ liệu
        var ajaxGet = { "get": g_kehoachid };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/ReLogisticsBanGiaoChungTuPrint",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                window.open("../DownloadFile.aspx?Root=LOGISTICS&Folder=BGCT/" + g_kehoachid + "&FileName=BBBGH_" + g_kehoachid + ".xlsx");
            },
            error: function () {
            }
        }).done(function () {
        });
    })
    // kt: print bàn giao chứng từ
    ///////////////////////////////////// \\ bàn giao chứng từ
    ///////////////////////////////////// thông tin tờ khai
    // bd: load thông tin tờ khai
    $("#table-logistics-main").on("click", ".span-thongtintokhai-sua", function () {
        g_sovandon = $(this).attr("sovandon");
        g_socontainer = $(this).attr("socontainer");
        g_kehoachid = $(this).attr("kehoachid");
        var thongTinToKhaiId = $(this).attr("ThongTinToKhaiId");
        // đổi tên tiêu đề
        $("#modalThongTinToKhai .modal-title").text("Sửa thông tin tờ khai");
        // clear input
        // load combobox loại hình tờ khai
        fncLoadLoaiHinhToKhai();

        // load dữ liệu
        var ajaxGet = { "get": thongTinToKhaiId };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/ReLogisticsThongTinToKhaiByIdView",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;

                if (d.Id != null) {
                    $("#modalThongTinToKhai").attr("ThongTinToKhaiId", d.Id);

                    $("#input-qll-SoToKhai").val(d.SoToKhai);
                    $("#input-qll-SoHoaDon").val(d.SoHoaDon);
                    $("#input-qll-LoaiHinhToKhai").data('kendoComboBox').value(d.LoaiHinhToKhai);
                    $("#select-qll-LuongToKhai").val(d.LuongToKhai);
                    if (d.NgayGioNhanYeuCau != null) {
                        $("#input-qll-NgayNhanYeuCau").val(convertDate(d.NgayGioNhanYeuCau)[1]);
                        $("#input-qll-GioNhanYeuCau").val(convertDate(d.NgayGioNhanYeuCau)[3]);
                    }

                    if (d.NgayGioDangKyToKhai != null) {
                        $("#input-qll-NgayDangKyToKhai").val(convertDate(d.NgayGioDangKyToKhai)[1]);
                        $("#input-qll-GioDangKyToKhai").val(convertDate(d.NgayGioDangKyToKhai)[3]);
                    }

                    if (d.NgayGioThongQuan != null) {
                        $("#input-qll-NgayThongQuan").val(convertDate(d.NgayGioThongQuan)[1]);
                        $("#input-qll-GioThongQuan").val(convertDate(d.NgayGioThongQuan)[3]);
                    }
                }
            },
            error: function () {
            }
        }).done(function () {
        });

        // hiện modal
        $("#modalThongTinToKhai").attr("sovandon", g_sovandon);
        $("#modalThongTinToKhai").attr("socontainer", g_socontainer);
        $("#modalThongTinToKhai").attr("kehoachid", g_kehoachid);
        $("#modalThongTinToKhai").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
    })
    // kt: load thông tin tờ khai
    // BD: Lưu sửa thông tin tờ khai
    $("#modalThongTinToKhai").on("click", "#btn-thongtintokhai-luu", function () {
        //$("#div-wait").show();
        //get value
        var _KeHoachId = $("#modalThongTinToKhai").attr("kehoachid");
        var ThongTinToKhai = {
            Id: $("#modalThongTinToKhai").attr("thongtintokhaiid")
            , SoVanDon: $("#modalThongTinToKhai").attr("sovandon")
            , SoContainer: $("#modalThongTinToKhai").attr("socontainer")
            , SoToKhai: $("#input-qll-SoToKhai").val()
            , SoHoaDon: $("#input-qll-SoHoaDon").val()
            , LoaiHinhToKhai: $("#input-qll-LoaiHinhToKhai").val()
            , LuongToKhai: $("#select-qll-LuongToKhai").val()
            , NgayGioNhanYeuCau: dmy2ymd($("#input-qll-NgayNhanYeuCau").val()) + " " + $("#input-qll-GioNhanYeuCau").val()
            , NgayGioDangKyToKhai: dmy2ymd($("#input-qll-NgayDangKyToKhai").val()) + " " + $("#input-qll-GioDangKyToKhai").val()
            , NgayGioThongQuan: dmy2ymd($("#input-qll-NgayThongQuan").val()) + " " + $("#input-qll-GioThongQuan").val()

            , QL_NguoiTao: ""
            , QL_ThoiGianTao: ""
            , QL_NguoiSua: ""
            , QL_ThoiGianSua: ""
            , KeHoachId: _KeHoachId
            , CapNhatCungVanDon: $("#cb-UpdateAllWithSameVanDon-TTTK").prop("checked")
        }
        jsonData = JSON.stringify({ ThongTinToKhai });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IULogisticsThongTinToKhai",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Sửa thông tin tờ khai thành công!",
                    text: "",
                    type: 'success',
                    timer: 2000,
                })
                $("#modalThongTinToKhai").modal("hide");
            },
            error: function () {
            }
        }).done(function () {
            fncTableLogisticsView(_KeHoachId, "-35");
            //$("#div-wait").hide();
        })
    })
    // KT: Lưu sửa thông tin tờ khai
    // BD: Xóa tờ khai

    $("#table-logistics-main").on("click", ".span-thongtintokhai-xoa", function () {
        var _KeHoachId = $(this).attr("kehoachid");
        var _ThongTinToKhaiId = $(this).attr("thongtintokhaiid");
        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa tờ khai này?',
            text: "Hành động này không thể khôi phục lại!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Đồng ý, xóa tờ khai!',
            cancelButtonText: 'Hủy'
        }).then(function () {
            ajaxGet = { "get": _ThongTinToKhaiId };
            jsonData = JSON.stringify({ ajaxGet });
            //$("#div-wait").show();
            $.ajax({
                type: "POST",
                url: "QuanLyLogistics.aspx/DLogisticsThongTinToKhai",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    Swal.fire({
                        title: "Xóa tờ khai thành công!",
                        text: "",
                        type: 'success',
                        timer: 2000,
                    })
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Tờ khai chưa được xóa. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
                //$("#div-wait").hide();
                fncTableLogisticsView(_KeHoachId, "-35");
            });
        })
    })
    // KT: Xóa tờ khai
    ///////////////////////////////////// \\ thông tin tờ khai
    ///////////////////////////////////// thủ tục giám sát hải quan
    // bd: load thủ tục giám sát hải quan
    $("#table-logistics-main").on("click", ".span-thutucgiamsathaiquan", function () {
        g_sovandon = $(this).attr("sovandon");
        g_socontainer = $(this).attr("socontainer");
        g_kehoachid = $(this).attr("kehoachid");
        // đổi tên tiêu đề
        //$("#modalThongTinToKhai .modal-title").text("Sửa thủ tục giám sát hải quan");
        // clear input
        fncLoadThuTucGiamSatHaiQuanCombobox();
        // load dữ liệu
        var ajaxGet = { "get": g_kehoachid };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/ReLogisticsThuTucGiamSatHaiQuanView",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;

                if (d.Id != null) {
                    $("#modalThuTucGiamSatHaiQuan").attr("thutucgiamsathaiquanid", d.Id);

                    $("#input-qll-DaiLyGiamSatHaiQuan").data('kendoComboBox').value(d.DaiLyGiamSatHaiQuan);
                    $("#input-qll-KhuVucGiamSatHaiQuan").data('kendoComboBox').value(d.KhuVucGiamSatHaiQuan);
                    $("#input-qll-NguoiLamGiamSatHaiQuan").data('kendoComboBox').value(d.NguoiLamGiamSatHaiQuan);
                    if (d.NgayGioLamGiamSatHaiQuan != null) {
                        $("#input-qll-NgayLamGiamSatHaiQuan").val(convertDate(d.NgayGioLamGiamSatHaiQuan)[1]);
                        $("#input-qll-GioLamGiamSatHaiQuan").val(convertDate(d.NgayGioLamGiamSatHaiQuan)[3]);
                    }
                    if (d.NgayGioKiemHoa != null) {
                        $("#input-qll-NgayKiemHoa").val(convertDate(d.NgayGioKiemHoa)[1]);
                        $("#input-qll-GioKiemHoa").val(convertDate(d.NgayGioKiemHoa)[3]);
                    }
                }
            },
            error: function () {
            }
        }).done(function () {
        });

        // hiện modal
        $("#modalThuTucGiamSatHaiQuan .modal-title").text("Sửa Thủ tục giám sát Hải Quan")
        $("#modalThuTucGiamSatHaiQuan").attr("sovandon", g_sovandon);
        $("#modalThuTucGiamSatHaiQuan").attr("socontainer", g_socontainer);
        $("#modalThuTucGiamSatHaiQuan").attr("kehoachid", g_kehoachid);
        $("#modalThuTucGiamSatHaiQuan").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
    })
    // kt: load thủ tục giám sát hải quan
    // BD: Lưu sửa thủ tục giám sát hải quan
    $("#modalThuTucGiamSatHaiQuan").on("click", "#btn-thutucgiamsathaiquan-luu", function () {
        //$("#div-wait").show();
        //get value
        var _KeHoachId = $("#modalThuTucGiamSatHaiQuan").attr("kehoachid");
        var ThuTucGiamSatHaiQuan = {
            Id: $("#modalThuTucGiamSatHaiQuan").attr("thutucgiamsathaiquanid")
            , SoVanDon: $("#modalThuTucGiamSatHaiQuan").attr("sovandon")
            , SoContainer: $("#modalThuTucGiamSatHaiQuan").attr("socontainer")
            , DaiLyGiamSatHaiQuan: fncNull2EmptyString($("#input-qll-DaiLyGiamSatHaiQuan").val())
            , KhuVucGiamSatHaiQuan: fncNull2EmptyString($("#input-qll-KhuVucGiamSatHaiQuan").val())
            , NgayGioLamGiamSatHaiQuan: dmy2ymd($("#input-qll-NgayLamGiamSatHaiQuan").val()) + " " + $("#input-qll-GioLamGiamSatHaiQuan").val()
            , NguoiLamGiamSatHaiQuan: fncNull2EmptyString($("#input-qll-NguoiLamGiamSatHaiQuan").val())
            , NgayGioKiemHoa: dmy2ymd($("#input-qll-NgayKiemHoa").val()) + " " + $("#input-qll-GioKiemHoa").val()

            , QL_NguoiTao: ""
            , QL_ThoiGianTao: ""
            , QL_NguoiSua: ""
            , QL_ThoiGianSua: ""
            , KeHoachId: _KeHoachId
            , CapNhatCungVanDon: $("#cb-thutucgiamsathaiquan-capnhatcungvandon").prop("checked")
        }
        jsonData = JSON.stringify({ ThuTucGiamSatHaiQuan });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IULogisticsThuTucGiamSatHaiQuan",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Sửa thủ tục giám sát hải quan thành công!",
                    text: "",
                    type: 'success',
                    timer: 2000,
                })
                $("#modalThuTucGiamSatHaiQuan").modal("hide");
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Dữ liệu chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
            fncTableLogisticsView(_KeHoachId, "-35");
            //$("#div-wait").hide();
        })
    })
    // KT: Lưu sửa thủ tục giám sát hải quan
    ///////////////////////////////////// \\ thủ tục giám sát hải quan
    ///////////////////////////////////// thông tin vận chuyển
    // bd: load thông tin vận chuyển
    $("#table-logistics-main").on("click", ".span-thongtinvanchuyen", function () {
        g_sovandon = $(this).attr("sovandon");
        g_socontainer = $(this).attr("socontainer");
        g_kehoachid = $(this).attr("kehoachid");
        // đổi tên tiêu đề
        $("#modalThongTinVanChuyen .modal-title").text("Sửa thông tin vận chuyển");
        // clear input
        fncLoadThongTinVanChuyenCombobox();
        fncLoadDanhSachLoChuaCoBKS();
        // load dữ liệu

        var ajaxGet = { "get": g_kehoachid };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/ReLogisticsThongTinVanChuyenView",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d.NgayGioNhanChungTu);
                //console.log(convertDate(d.NgayGioNhanChungTu)[1]);
                if (d.Id != null) {
                    $("#modalThongTinVanChuyen").attr("thongtinvanchuyenid", d.Id);
                    $("#input-qll-DonViVanChuyen").data('kendoComboBox').value(d.DonViVanChuyen);
                    $("#input-qll-BienKiemSoat").val(d.BienKiemSoat);
                    $("#input-qll-TenLaiXe").val(d.TenLaiXe);
                    $("#input-qll-ChungMinhThu").val(d.ChungMinhThu);
                    $("#input-qll-SoDienThoai").val(d.SoDienThoai);
                } else {
                    $("#modalThongTinVanChuyen").attr("thongtinvanchuyenid", "");
                }
            },
            error: function () {
            }
        }).done(function () {
        });

        // hiện modal

        $("#modalThongTinVanChuyen").attr("sovandon", g_sovandon);
        $("#modalThongTinVanChuyen").attr("socontainer", g_socontainer);
        $("#modalThongTinVanChuyen").attr("kehoachid", g_kehoachid);
        $("#modalThongTinVanChuyen").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
    })
    // kt: load thông tin vận chuyển
    // BD: Lưu sửa thông tin vận chuyển
    $("#modalThongTinVanChuyen").on("click", "#btn-thongtinvanchuyen-luu", function () {
        //$("#div-wait").show();
        //get value
        var _KeHoachId = $("#modalThongTinVanChuyen").attr("kehoachid");
        var ThongTinVanChuyen = {
            Id: $("#modalThongTinVanChuyen").attr("thongtinvanchuyenid")
            , SoVanDon: $("#modalThongTinVanChuyen").attr("sovandon")
            , SoContainer: $("#modalThongTinVanChuyen").attr("socontainer")
            , DonViVanChuyen: $("#input-qll-DonViVanChuyen").val()
            , BienKiemSoat: $("#input-qll-BienKiemSoat").val()
            , TenLaiXe: $("#input-qll-TenLaiXe").val()
            , ChungMinhThu: $("#input-qll-ChungMinhThu").val()
            , SoDienThoai: $("#input-qll-SoDienThoai").val()
            , QL_NguoiTao: ""
            , QL_ThoiGianTao: ""
            , QL_NguoiSua: ""
            , QL_ThoiGianSua: ""
            , KeHoachId: _KeHoachId
        }
        jsonData = JSON.stringify({ ThongTinVanChuyen });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IULogisticsThongTinVanChuyen",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Sửa thông tin vận chuyển thành công!",
                    text: "",
                    type: 'success',
                    timer: 2000,
                })
                $("#modalThongTinVanChuyen").modal("hide");
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Dữ liệu chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
            fncTableLogisticsView(_KeHoachId, "-35");
            //$("#div-wait").hide();
        })
    })
    // KT: Lưu sửa thông tin vận chuyển
    ///////////////////////////////////// \\ thông tin vận chuyển
    ///////////////////////////////////// giao hàng
    // bd: load giao hàng
    $("#table-logistics-main").on("click", ".span-giaohang", function () {
        g_sovandon = $(this).attr("sovandon");
        g_socontainer = $(this).attr("socontainer");
        g_kehoachid = $(this).attr("kehoachid");
        g_ngaygiodennhamay = $(this).attr("attrngayxedennhamay");
        // đổi tên tiêu đề
        $("#modalGiaoHang .modal-title").text("Sửa giao hàng");
        // clear input
        // load dữ liệu
        var ajaxGet = { "get": g_kehoachid };

        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/ReLogisticsGiaoHangView",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                if (d.Id != null) {
                    $("#modalGiaoHang").attr("giaohangid", d.Id);
                    $("#input-qll-SoBienBan").val(d.SoBienBan);
                    if (d.NgayGioDenNhaMay != null) {
                        $("#input-qll-NgayDenNhaMay").val(convertDate(d.NgayGioDenNhaMay)[1]);
                        $("#input-qll-GioDenNhaMay").val(convertDate(d.NgayGioDenNhaMay)[3]);
                    }
                    //convertDate(d.NgayGioLamGiamSatHaiQuan)[1] != '' &&
                    if (d.NgayGioGiaoHang != null) {
                        $("#input-qll-NgayGiaoHang").val(convertDate(d.NgayGioGiaoHang)[1]);
                        $("#input-qll-GioGiaoHang").val(convertDate(d.NgayGioGiaoHang)[3]);
                    }

                    if (d.NgayGioYeuCau != null) {
                        $("#input-qll-NgayYeuCau").val(convertDate(d.NgayGioYeuCau)[1]);
                        $("#input-qll-GioYeuCau").val(convertDate(d.NgayGioYeuCau)[3]);
                    }

                    if (d.NgayGioDongHangXong != null) {
                        $("#input-qll-NgayDongHangXong").val(convertDate(d.NgayGioDongHangXong)[1]);
                        $("#input-qll-GioDongHangXong").val(convertDate(d.NgayGioDongHangXong)[3]);
                    }

                    //if (convertDate(d.NgayGioLamGiamSatHaiQuan)[1] == '') {
                    //    $("#input-qll-NgayGiaoHang").attr("disable", "disable");
                    //    $("#input-qll-GioGiaoHang").attr("disable", "disable");
                    //}
                    $("#input-qll-NguoiNhanHang").val(d.NguoiNhanHang);
                    $("#input-qll-GhiChu").val(d.GhiChu);
                    $("#input-qll-Thongtingiaohang").val(d.ThongTinGiaoHang);

                    if (d.DuyetChungTu == "True") {
                        $("#input-qll-DuyetChungTu").prop("checked", true);
                    } else {
                        $("#input-qll-DuyetChungTu").prop("checked", false);
                    }
                } else {
                    $("#input-qll-NgayYeuCau").val(convertDate(g_ngaygiodennhamay)[1]);
                    $("#input-qll-GioYeuCau").val(convertDate(g_ngaygiodennhamay)[3]);


                    $("#input-qll-NgayDenNhaMay").val(moment().format("DD/MM/YYYY"));
                    $("#input-qll-GioDenNhaMay").val(moment().format("HH:MM"));

                    $("#input-qll-NgayGiaoHang").val(moment().format("DD/MM/YYYY"));
                    $("#input-qll-GioGiaoHang").val(moment().format("HH:MM"));

                    $("#input-qll-NgayDongHangXong").val(moment().format("DD/MM/YYYY"));
                    $("#input-qll-GioDongHangXong").val(moment().format("HH:MM"));

                }
            },
            error: function () {
            }
        }).done(function () {
        });


        // hiện modal
        $("#modalGiaoHang").attr("sovandon", g_sovandon);
        $("#modalGiaoHang").attr("socontainer", g_socontainer);
        $("#modalGiaoHang").attr("kehoachid", g_kehoachid);
        $("#modalGiaoHang").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        fncLoadFileDinhKem(g_kehoachid);

    })
    // kt: load giao hàng
    // BD: Lưu sửa giao hàng
    $("#modalGiaoHang").on("click", "#btn-giaohang-luu", function () {
        //$("#div-wait").show();
        //get value
        var _KeHoachId = $("#modalGiaoHang").attr("kehoachid");
        var _duyetChungTu = "";
        if ($("#input-qll-DuyetChungTu").is(":checked") == true) {
            _duyetChungTu = "1";
        } else {
            _duyetChungTu = "0";
        }
        if ($('#table-filedinhkem >tbody >tr').length > 0) {
            taiPOD = 1;
        } else {
            taiPOD = 0;
        }

        var GiaoHang = {
            Id: $("#modalGiaoHang").attr("giaohangid")
            , SoVanDon: $("#modalGiaoHang").attr("sovandon")
            , SoContainer: $("#modalGiaoHang").attr("socontainer")
            , SoBienBan: $("#input-qll-SoBienBan").val()
            , NgayGioDenNhaMay: dmy2ymd($("#input-qll-NgayDenNhaMay").val()) + " " + $("#input-qll-GioDenNhaMay").val()
            , NgayGioGiaoHang: dmy2ymd($("#input-qll-NgayGiaoHang").val()) + " " + $("#input-qll-GioGiaoHang").val()
            , NguoiNhanHang: $("#input-qll-NguoiNhanHang").val()
            , DuyetChungTu: _duyetChungTu
            , GhiChu: $("#input-qll-GhiChu").val()
            , QL_NguoiTao: ""
            , QL_ThoiGianTao: ""
            , QL_NguoiSua: ""
            , QL_ThoiGianSua: ""
            , KeHoachId: _KeHoachId
            , NgayGioYeuCau: dmy2ymd($("#input-qll-NgayYeuCau").val()) + " " + $("#input-qll-GioYeuCau").val()
            , NgayGioDongHangXong: dmy2ymd($("#input-qll-NgayDongHangXong").val()) + " " + $("#input-qll-GioDongHangXong").val()
            , TaiPOD: taiPOD
        }
        jsonData = JSON.stringify({ GiaoHang });
        //console.log(jsonData);

        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IULogisticsGiaoHang",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Sửa thông tin giao hàng thành công!",
                    text: "",
                    type: 'success',
                    timer: 2000,
                })
                $("#modalGiaoHang").modal("hide");
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Dữ liệu chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
            fncTableLogisticsView(_KeHoachId, "-35");
            //$("#div-wait").hide();
        })
    })
    // KT: Lưu sửa giao hàng
    // BD: Lưu sửa giao hàng
    $("#btn-CapNhatChungSoBienBan").click(function () {
        //$("#div-wait").show();
        //get value
        var currentKeHoachId = $("#modalGiaoHang").attr("kehoachid");
        var _duyetChungTu = "";
        if ($("#input-qll-DuyetChungTu").is(":checked") == true) {
            _duyetChungTu = "1";
        } else {
            _duyetChungTu = "0";
        }
        if ($("#input-qll-SoBienBan").val().trim() != "") {
            var GiaoHang = {
                Id: ""
                , SoVanDon: ""
                , SoContainer: ""
                , SoBienBan: $("#input-qll-SoBienBan").val()
                , NgayGioDenNhaMay: dmy2ymd($("#input-qll-NgayDenNhaMay").val()) + " " + $("#input-qll-GioDenNhaMay").val()
                , NgayGioGiaoHang: dmy2ymd($("#input-qll-NgayGiaoHang").val()) + " " + $("#input-qll-GioGiaoHang").val()
                , NgayGioDongHangXong: dmy2ymd($("#input-qll-NgayDongHangXong").val()) + " " + $("#input-qll-GioDongHangXong").val()
                , NguoiNhanHang: $("#input-qll-NguoiNhanHang").val()
                , DuyetChungTu: _duyetChungTu
                , GhiChu: $("#input-qll-GhiChu").val()
                , QL_NguoiTao: ""
                , QL_ThoiGianTao: ""
                , QL_NguoiSua: ""
                , QL_ThoiGianSua: ""
                , KeHoachId: ""
            }
            jsonData = JSON.stringify({ GiaoHang });
            //console.log(jsonData);

            $.ajax({
                type: "POST",
                url: "QuanLyLogistics.aspx/IULogisticsGiaoHangCungBienBan",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    Swal.fire({
                        title: "Thông tin giao hàng đã được cập nhật cho các số chung số biên bản!",
                        text: "",
                        type: 'success',
                        timer: 2000,
                    })
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Dữ liệu chưa được lưu. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
                fncTableLogisticsView(currentKeHoachId, "-35");
                //$("#div-wait").hide();
            })
        } else {
            alert("Không có số biên bản! Không thể cập nhật");
        }


    })
    // KT: Lưu sửa giao hàng
    //BD : Lưu sửa giao hàng Thông tin giao hàng Bắc thêm 22/03/2022
    $("#btn-CapNhatThongTinGiaoHang").click(function () {
        //$("#div-wait").show();
        //get value
        var currentKeHoachId = $("#modalGiaoHang").attr("kehoachid");
        var valueGiaoHang = $("#input-qll-Thongtingiaohang").val();
        ajaxGet2 = { "get1": currentKeHoachId, "get2": valueGiaoHang }
        jsonData = JSON.stringify({ ajaxGet2 });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IULogisticsGiaoHangThongTinGiaoHang",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Cập nhật thông tin giao hàng thành công!",
                    text: "",
                    type: 'success',
                    timer: 2000,
                })
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Dữ liệu chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
            fncTableLogisticsView(currentKeHoachId, "-35");
            //$("#div-wait").hide();
        })
    })
    // KT: Lưu sửa giao hàng
    ///////////////////////////////////// \\ giao hàng

    //Bacnq Chi phí phát sinh Modal
    $("#table-logistics-main").on("click", ".span-chiphiphatsinh", function () {
        g_sovandon = $(this).attr("sovandon");
        g_socontainer = $(this).attr("socontainer");
        g_kehoachid = $(this).attr("kehoachid");

        // load dữ liệu
        var ajaxGet = { "get": g_kehoachid };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/ReLogisticsChiPhiPhatSinhView",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d.Id != null) {
                    $("#modalChiPhiPhatSinh").attr("chiphiphatsinhid", d.Id);
                }
                $("#input-cpps-vdtphiluuca").text(d.VendorTruck_PhiLuuCa);
                $("#input-cpps-khphiluuca").text(d.KhachHang_PhiLuuCa);
                $("#input-cpps-gcphiluuca").text(d.GhiChu_PhiLuuCa);

                $("#input-cpps-vdtphinopcdkhongphoi").text(d.VendorTruck_PhiNopCDKhongPhoi);
                $("#input-cpps-khphinopcdkhongphoi").text(d.KhachHang_PhiNopCDKhongPhoi);
                $("#input-cpps-gctphinopcdkhongphoi").text(d.GhiChu_PhiNopCDKhongPhoi);

                $("#input-cpps-vdtkiemhoakhonghang").text(d.VendorTruck_KiemHoaKhongHang);
                $("#input-cpps-khkiemhoakhonghang").text(d.KhachHang_KiemHoaKhongHang);
                $("#input-cpps-gckiemhoakhonghang").text(d.GhiChu_KiemHoaKhongHang);

                $("#input-cpps-vdtchiphikhac").text(d.VendorTruck_ChiPhiKhac);
                $("#input-cpps-khchiphikhac").text(d.KhachHang_ChiPhiKhac);
                $("#input-cpps-gcchiphikhac").text(d.GhiChu_ChiPhiKhac);
            },
            error: function () {
            }
        }).done(function () {
        });

        // hiện modal
        $("#modalChiPhiPhatSinh").attr("sovandon", g_sovandon);
        $("#modalChiPhiPhatSinh").attr("socontainer", g_socontainer);
        $("#modalChiPhiPhatSinh").attr("kehoachId", g_kehoachid);
        $("#modalChiPhiPhatSinh").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
    });



    $("#modalChiPhiPhatSinh").on("click", "#btn-chiphiphatsinh-luu", function () {
        var cpps_KeHoachId = $("#modalChiPhiPhatSinh").attr("kehoachId");
        var ChiPhiPhatSinh = {
            Id: $("#modalChiPhiPhatSinh").attr("chiphiphatsinhid")
            , KeHoachId: $("#modalChiPhiPhatSinh").attr("kehoachId")
            , VendorTruck_PhiLuuCa: fncRongTraVeZero($("#input-cpps-vdtphiluuca").text())
            , VendorTruck_PhiNopCDKhongPhoi: fncRongTraVeZero($("#input-cpps-vdtphinopcdkhongphoi").text())
            , VendorTruck_KiemHoaKhongHang: fncRongTraVeZero($("#input-cpps-vdtkiemhoakhonghang").text())
            , VendorTruck_ChiPhiKhac: fncRongTraVeZero($("#input-cpps-vdtchiphikhac").text())
            , KhachHang_PhiLuuCa: fncRongTraVeZero($("#input-cpps-khphiluuca").text())
            , KhachHang_PhiNopCDKhongPhoi: fncRongTraVeZero($("#input-cpps-khphinopcdkhongphoi").text())
            , KhachHang_KiemHoaKhongHang: fncRongTraVeZero($("#input-cpps-khkiemhoakhonghang").text())
            , KhachHang_ChiPhiKhac: fncRongTraVeZero($("#input-cpps-khchiphikhac").text())
            , GhiChu_PhiLuuCa: $("#input-cpps-gcphiluuca").text().trim()
            , GhiChu_PhiNopCDKhongPhoi: $("#input-cpps-gctphinopcdkhongphoi").text().trim()
            , GhiChu_KiemHoaKhongHang: $("#input-cpps-gckiemhoakhonghang").text().trim()
            , GhiChu_ChiPhiKhac: $("#input-cpps-gcchiphikhac").text().trim()
            , HienThi: ""
            , NguoiTaoSua: ""
            , NgayTaoSua: ""
            , NguoiSua: ""
            , NgaySua: ""
        }
        jsonData = JSON.stringify({ ChiPhiPhatSinh });
        //console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IULogisticsChiPhiPhatSinh",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Sửa thông tin giao hàng thành công!",
                    text: "",
                    type: 'success',
                    timer: 2000,
                })
                $("#modalChiPhiPhatSinh").modal("hide");
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Dữ liệu chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
            fncTableLogisticsView(cpps_KeHoachId, "-35");
        });
    });

    // Bacnq End Chi phí phát sinh

    //bacnq hệ thông EI
    $("#table-logistics-main").on("click", ".span-hethongei", function () {
        console.log(123);
        g_sovandon = $(this).attr("sovandon");
        g_socontainer = $(this).attr("socontainer");
        g_kehoachid = $(this).attr("kehoachid");

        // load dữ liệu
        var ajaxGet = { "get": g_kehoachid };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/ReLogisticsHeThongEIView",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                if (d.DatetimeEI != null) {
                    $("#input-qll-NgayhethongEI").val(convertDate(d.DatetimeEI)[1]);
                    $("#input-qll-GiohethongEI").val(convertDate(d.DatetimeEI)[3]);
                }
                $("#textarea-hethongei").val(d.GhiChuEI);
            },
            error: function () {
            }
        }).done(function () {
        });

        // hiện modal
        $("#modalHeThongEi").attr("sovandon", g_sovandon);
        $("#modalHeThongEi").attr("socontainer", g_socontainer);
        $("#modalHeThongEi").attr("kehoachId", g_kehoachid);
        $("#modalHeThongEi").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
    });

    $("#modalHeThongEi").on("click", "#btn-hethongei-luu", function () {
        var cpps_KeHoachId = $("#modalHeThongEi").attr("kehoachId");
        var logisticsHeThongEI = {
            Id: $("#modalHeThongEi").attr("chiphiphatsinhid")
            , KeHoachId: $("#modalHeThongEi").attr("kehoachId")
            , UserEI: ""
            , DatetimeEI: dmy2ymd($("#input-qll-NgayhethongEI").val()) + " " + $("#input-qll-GiohethongEI").val()
            , GhiChuEI: $("#textarea-hethongei").val()
            , DuyetEI: ""
            , HienThi: ""
            , NguoiTao: ""
            , NgayTao: ""
            , NguoiSua: ""
            , NgaySua: ""
        }
        jsonData = JSON.stringify({ logisticsHeThongEI });
        console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IULogisticsHeThongEI",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Sửa thông tin giao hàng thành công!",
                    text: "",
                    type: 'success',
                    timer: 2000,
                })
                $("#modalHeThongEi").modal("hide");
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Dữ liệu chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
            fncTableLogisticsView(cpps_KeHoachId, "-35");
        });
    });


    // bacng end hệ thống EI


    DanhGiaVendorClick();
    LuuDanhGiaVendorClick();
    SuaDanhGiaVendorClick();
    fncCapNhatThongTinVanChuyenCuaCacLoCungMaKeHoach();
}

var _tinhTrangToKhai = "";
var _trangThai = "";
var _reLuongToKhai = "";
var _tinhTrangChungTu = "";
/////////////////////////////////////  trả về tình trạng tờ khai
function fncReTinhTrangToKhai(_NgayGioNhanYeuCau
    , _NgayGioDangKyToKhai
    , _NgayGioThongQuan
    , _SoToChuaNhanYeuCau
    , _SoToChuaDangKyToKhai
    , _SoToChuaThongQuan

) {
    if (_SoToChuaNhanYeuCau == 0) {
        _tinhTrangToKhai = "<span class=\"label label-warning\">Đã draft</span>"
            + "<br>" + "<span class=\"label label-default label-font-size-85pt\">" + convertDate(_NgayGioNhanYeuCau)[5] + "</span>"
            ;
    } else {
        _tinhTrangToKhai = "<span class=\"label label-danger\">Chưa y/c</span>";
    }
    if (_SoToChuaDangKyToKhai == 0) {
        _tinhTrangToKhai = "<span class=\"label label-info\">Đã đăng ký t/k</span>"
            + "<br>" + "<span class=\"label label-default label-font-size-85pt\">" + convertDate(_NgayGioDangKyToKhai)[5] + "</span>"
            ;
    }
    if (_SoToChuaThongQuan == 0) {
        _tinhTrangToKhai = "<span class=\"label label-success\">Đã thông quan</span>"
            + "<br>" + "<span class=\"label label-default label-font-size-85pt\">" + convertDate(_NgayGioThongQuan)[5] + "</span>"
            ;
    }
    return _tinhTrangToKhai;
}
///////////////////////////////////// \\ trả về tình trạng tờ khai
///////////////////////////////////// Trả về trạng thái
function fncReTrangThai(_KieuContainer_LoaiVanChuyen
    , _SoToChuaDangKyToKhai
    , _SoToChuaThongQuan
    , _KhuVucGiamSatHaiQuan
    , _NgayGioDenNhaMay
    , _NgayGioGiaoHang
    , _NgayGioYeuCauGiaoHang
    , _NgayGioThongQuan
    , _LoaiHinhXuatNhap
    , _NgayGioContDenNhaMay // DPC
    , _NgayGioTauDiHoacDen // ETA/ETD
    , _Status
) {
    var d_now = new Date();
    var d_5h = new Date();
    var d_10h = new Date();
    d_5h.setHours(d_now.getHours() + 5);
    d_10h.setHours(d_now.getHours() + 10);
    var d_NgayGioYeuCauGiaoHang = new Date(_NgayGioYeuCauGiaoHang);
    var d_NgayGioThongQuan = new Date(_NgayGioThongQuan);
    var d_NgayGioDenNhaMay = new Date(_NgayGioDenNhaMay);
    var d_NgayGioGiaoHang = new Date(_NgayGioGiaoHang);
    var d_NgayGioContDenNhaMay = new Date(_NgayGioContDenNhaMay);
    var d_NgayGioTauDiHoacDen = new Date(_NgayGioTauDiHoacDen);
    var _kq = ["", "", "", "", ""];
    _trangThai = "";
    var deadline_bg = "";
    var cd_bg = "";

    /// Deadline CD = d_NgayGioYeuCauGiaoHang
    // Viết lại vào lúc 2017/11/17 22:42
    //Nếu Deadline CD = "" thì thôi;
    //Nếu Deadline CD!= "" thì
    //    - Nếu Ngày giờ thông quan = "" thì
    //        + Nếu Deadline CD - Ngày giờ hệ thống < 24 và >= 6 thì tô màu xanh
    //        + Nếu Deadline CD - Ngày giờ hệ thống < 6 và > 0 thì tô màu vàng
    //        + Nếu Deadline CD - Ngày giờ hệ thống < 0 thì tô màu đỏ
    //    - Còn lại Deadline CD - Ngày giờ thông quan < 0 thì tô màu hồng
    if (convertDate(_NgayGioYeuCauGiaoHang)[0] == "") {
        deadline_bg = "";
    } else {
        if (convertDate(_NgayGioThongQuan)[0] == "") {
            if ((d_NgayGioYeuCauGiaoHang - d_now) / (1000 * 60 * 60 * 24) >= 6 && (d_NgayGioYeuCauGiaoHang - d_now) / (1000 * 60 * 60 * 24) < 24) {
                deadline_bg = "background-color-blue";
            }
            if ((d_NgayGioYeuCauGiaoHang - d_now) / (1000 * 60 * 60 * 24) >= 0 && (d_NgayGioYeuCauGiaoHang - d_now) / (1000 * 60 * 60 * 24) < 6) {
                deadline_bg = "background-color-yellow";
            }
            if (d_NgayGioYeuCauGiaoHang < d_now) {
                deadline_bg = "background-color-red color-white";
            }
        } else {
            if (d_NgayGioYeuCauGiaoHang < d_NgayGioThongQuan) {
                deadline_bg = "background-color-pink";
            }
        }
    }

    /// END Deadline CD
    ///
    ///
    /// COde cũ deadline_bg + cd_bg
    //if (d_10h > d_NgayGioYeuCauGiaoHang) {
    //    deadline_bg = "background-color-78c6fa";
    //}
    //if (d_5h > d_NgayGioYeuCauGiaoHang) {
    //    deadline_bg = "background-color-yellow";
    //}
    //if (d_NgayGioYeuCauGiaoHang < d_now) {
    //    deadline_bg = "background-color-pink";
    //}

    //if (_KieuContainer_LoaiVanChuyen == "CD") {
    //    if (_KhuVucGiamSatHaiQuan == ""
    //        && convertDate(_NgayGioDenNhaMay)[5] == ""
    //        && convertDate(_NgayGioGiaoHang)[5] == ""

    //    ) {
    //        if (_SoToChuaThongQuan == "0") {
    //            if (d_NgayGioThongQuan > d_NgayGioYeuCauGiaoHang) {
    //                deadline_bg = "";

    //                cd_bg = "background-color-pink";
    //            } else {
    //                deadline_bg = "";
    //                cd_bg = "";
    //            }
    //        }
    //    }
    //}
    //else {
    //    if (_KhuVucGiamSatHaiQuan != ""
    //        && convertDate(_NgayGioDenNhaMay)[5] != ""
    //        && convertDate(_NgayGioGiaoHang)[5] != ""
    //        && _SoToChuaThongQuan == "0"
    //    ) {
    //        if (d_NgayGioDenNhaMay > d_NgayGioYeuCauGiaoHang) {
    //            cd_bg = "background-color-pink";
    //            deadline_bg = "";
    //        } else {
    //            deadline_bg = "";
    //            cd_bg = "";
    //        }
    //    }
    //}
    //
    // end  COde cũ deadline_bg + cd_bg
    var color_dpc = "";
    var color_ee = "";

    //	DEADLINE PROVIDE CONT
    //Phần tô màu DEADLINE PROVICE CONT
    //Nếu Deadline PC = "" thì thôi;
    //Nếu Deadline PC!= "" thì
    //- Nếu Ngày giờ đến nhà mày = "" thì
    //      + Nếu Deadline PC - Ngày giờ hệ thống < 24 và >= 12 thì tô màu xanh
    //      + Nếu Deadline PC - Ngày giờ hệ thống < 12 và > 0 thì tô màu vàng
    //      + Nếu Deadline PC - Ngày giờ hệ thống < 0 thì tô màu đỏ
    //- Còn lại Deadline PC - Ngày giờ đến nhà mày < 0 thì tô màu hồng

    /// viết lại 2017/11/17 21:35
    // console.log(_Status + ' ' + convertDate(d_NgayGioContDenNhaMay)[5] + ' ' + convertDate(_NgayGioDenNhaMay)[5] + ' ' +(d_NgayGioContDenNhaMay > _NgayGioDenNhaMay));
    if (convertDate(_NgayGioContDenNhaMay)[0] == "") {
        color_dpc = "";
    }
    else {
        if (convertDate(_NgayGioDenNhaMay)[0] == "") {
            if ((d_NgayGioContDenNhaMay - d_now) / (1000 * 60 * 60 * 24) >= 12 && (d_NgayGioContDenNhaMay - d_now) / (1000 * 60 * 60 * 24) < 24) {
                color_dpc = "background-color-blue";
            }
            if ((d_NgayGioContDenNhaMay - d_now) / (1000 * 60 * 60 * 24) >= 0 && (d_NgayGioContDenNhaMay - d_now) / (1000 * 60 * 60 * 24) < 12) {
                color_dpc = "background-color-yellow";
            }
            if (d_NgayGioContDenNhaMay < d_now) {
                color_dpc = "background-color-red color-white";
            }
        } else {
            if (d_NgayGioContDenNhaMay < d_NgayGioDenNhaMay) {
                color_dpc = "background-color-pink";
            }
        }
    }
    //	END DEADLINE PROVIDE CONT

    /// code cũ
    //if (convertDate(_NgayGioDenNhaMay)[0] == "") {
    //    color_dpc = "background-color-blue";
    //} else {
    //    if (convertDate(_NgayGioContDenNhaMay)[0] == "") {
    //        color_dpc = "";
    //    } else if ((d_NgayGioContDenNhaMay - d_NgayGioDenNhaMay) / (1000 * 60 * 60 * 24) > 2 && (d_NgayGioContDenNhaMay - d_NgayGioDenNhaMay) / (1000 * 60 * 60 * 24) < 4) {
    //        color_dpc = "background-color-yellow";
    //    }
    //    else if ((d_NgayGioContDenNhaMay - d_NgayGioDenNhaMay) / (1000 * 60 * 60 * 24) < 2) {
    //        color_dpc = "background-color-pink";
    //    } else {
    //        color_dpc = "";
    //    }
    //}
    /// code cũ
    // END DEADLINE PROVIDE CONT

    // ETA/ETD
    //// viết lại code 2017/11/10 14:46
    // code cũ
    //if (convertDate(_NgayGioTauDiHoacDen)[0] != "") {
    //    if (_LoaiHinhXuatNhap == "IMP") {
    //        if (convertDate(_NgayGioGiaoHang)[0] == "") {
    //            if ((d_now - d_NgayGioTauDiHoacDen) / (1000 * 60 * 60 * 24) > 2) {
    //                color_ee = "background-color-pink";
    //            }
    //            if ((d_now - d_NgayGioTauDiHoacDen) / (1000 * 60 * 60 * 24) >= 1
    //                && (d_now - d_NgayGioTauDiHoacDen) / (1000 * 60 * 60 * 24) <= 2) {
    //                color_ee = "background-color-yellow";
    //            }
    //        } else {
    //            if ((d_now - d_NgayGioTauDiHoacDen) / (1000 * 60 * 60 * 24) > -1
    //                && (d_now - d_NgayGioTauDiHoacDen) / (1000 * 60 * 60 * 24) < 1) {
    //                color_ee = "background-color-blue";
    //            }
    //        }
    //    } else if (_LoaiHinhXuatNhap == "EXP") {
    //        if (convertDate(_NgayGioGiaoHang)[0] == "") {
    //            if ((d_NgayGioTauDiHoacDen - d_now) / (1000 * 60 * 60 * 24) <= 2) {
    //                color_ee = "background-color-pink";
    //            }
    //            if ((d_NgayGioTauDiHoacDen - d_now) / (1000 * 60 * 60 * 24) > 2
    //                && (d_NgayGioTauDiHoacDen - d_now) / (1000 * 60 * 60 * 24) <= 4) {
    //                color_ee = "background-color-yellow";
    //            }
    //        } else {
    //            if ((d_NgayGioTauDiHoacDen - d_now) / (1000 * 60 * 60 * 24) > 4
    //                && (d_NgayGioTauDiHoacDen - d_now) / (1000 * 60 * 60 * 24) <= 6) {
    //                color_ee = "background-color-blue";
    //            }
    //        }
    //    } else {
    //    }
    //}
    // end code cũ

    //Phần tô màu ETA/ ETD
    //Nếu Ngày giờ tàu đi và đến = "" thì thôi;
    //Nếu Ngày giờ tàu đi và đến!= "" thì
    //    - Nếu TYPE = IMP
    //        + Nếu Ngày giờ hệ thống - Ngày giờ tàu đi và đến >= - 12 thì tô màu xanh
    //        + Nếu Ngày giờ hệ thống - Ngày giờ tàu đi và đến > 0 thì tô màu vàng
    //        + Nếu Ngày giờ hệ thống - Ngày giờ tàu đi và đến > 24 thì tô màu đỏ
    //    - Nếu TYPE = EXP
    //        + Nếu Ngày giờ tàu đi và đến - Ngày giờ hệ thống  > 108 thì tô màu xanh
    //        + Nếu Ngày giờ tàu đi và đến - Ngày giờ hệ thống > 84 thì tô màu vàng
    //        + Nếu Ngày giờ tàu đi và đến - Ngày giờ hệ thống > 60 thì tô màu đỏ
    /// Viết lại 2017/11/17 22:52
    if (convertDate(_NgayGioTauDiHoacDen)[0] == "") {
        color_ee = "";
    } else {
        if (_LoaiHinhXuatNhap == "IMP") {
            if ((d_now - d_NgayGioTauDiHoacDen) / (1000 * 60 * 60 * 24) < 0 && (d_now - d_NgayGioTauDiHoacDen) / (1000 * 60 * 60 * 24) >= -12) {
                color_ee = "background-color-blue";
            }
            if ((d_now - d_NgayGioTauDiHoacDen) / (1000 * 60 * 60 * 24) < 24 && (d_now - d_NgayGioTauDiHoacDen) / (1000 * 60 * 60 * 24) >= 0) {
                color_ee = "background-color-yellow";
            }
            if ((d_now - d_NgayGioTauDiHoacDen) / (1000 * 60 * 60 * 24) >= 24) {
                color_ee = "background-color-red color-white";
            }
        }
        if (_LoaiHinhXuatNhap == "EXP") {
            if ((d_NgayGioTauDiHoacDen - d_now) / (1000 * 60 * 60 * 24) < 84 && (d_NgayGioTauDiHoacDen - d_now) / (1000 * 60 * 60 * 24) >= 60) {
                color_ee = "background-color-red color-white";
            }
            if ((d_NgayGioTauDiHoacDen - d_now) / (1000 * 60 * 60 * 24) < 108 && (d_NgayGioTauDiHoacDen - d_now) / (1000 * 60 * 60 * 24) >= 84) {
                color_ee = "background-color-yellow";
            }
            if ((d_NgayGioTauDiHoacDen - d_now) / (1000 * 60 * 60 * 24) >= 108) {
                color_ee = "background-color-blue";
            }
        }
    }
    // END ETA/ETD
    //// viết lại code
    switch (_Status) {
        case "1": case "1.1": case "1.2":
            _trangThai = "<button class=\"btn btn-xs btn-danger1\" type=\"button\">PLAN</button>";
            break;
        case "2":
            _trangThai = "<button class=\"btn btn-xs btn-warning\" type=\"button\">CD REGISTED</button> ";
            break;
        case "3": case "3.1":
            _trangThai = "<button class=\"btn btn-xs btn-info\" type=\"button\">BOOKED TRUCK</button> ";
            break;
        case "4":
            _trangThai = "<button class=\"btn btn-xs btn-primary\" type=\"button\">EMPTY MOVING</button> ";
            break;
        // Bắc thay đổi từ Loading -> Truck
        case "5":
            _trangThai = "<button class=\"btn btn-xs btn-primary-1\" type=\"button\">TRUCKING</button>";
            break;
        case "6":
            _trangThai = "<button class=\"btn btn-xs btn-primary\" type=\"button\">TRUCKING</button> ";
            break;
        case "7":
            _trangThai = "<button class=\"btn btn-xs btn-primary-1\" type=\"button\">DELIVERING</button>";
            break;

        case "8":
            _trangThai = "<button class=\"btn btn-xs btn-success " + (_KieuContainer_LoaiVanChuyen != "CD" ? "color-red " : " ") + "\" type=\"button\">COMPLETED</button>";
            break;
    }

    _kq = [(_trangThai)  //+ " " + _Status //0
        , deadline_bg // 1 DEADLINE CD
        , cd_bg // 2 CD Status
        , color_dpc // 3 DEADLINE PROVIDE CONT
        , color_ee // 4 ETA/ETD
    ];
    return _kq;
}

///////////////////////////////////// \\Trả về trạng thái
///////////////////////////////////// trả về luồng tờ khai
function fncReLuongToKhai(_LuongToKhai) {
    _reLuongToKhai = "";
    if (_LuongToKhai == "Vàng") {
        _reLuongToKhai = "<span class=\"label label-warning\">Vàng</span>";
    }
    if (_LuongToKhai == "Xanh") {
        _reLuongToKhai = "<span class=\"label label-info\">Xanh</span>";
    }
    if (_LuongToKhai == "Đỏ") {
        _reLuongToKhai = "<span class=\"label label-danger\">Đỏ</span>";
    }
    return _reLuongToKhai;
}
///////////////////////////////////// \\trả về luồng tờ khai

///////////////////////////////////// trả về tình trạng chứng từ
function fncReTinhTrangChungTu(_NgayGioNhanChungTu, _NgayGioGuiChungTuHaiQuan, _NgayGioGuiChungTuChoDonViVanChuyen) {
    _tinhTrangChungTu = "";
    if (convertDate(_NgayGioGuiChungTuHaiQuan)[5] != "") {
        _tinhTrangChungTu = "<span class=\"label label-success\">Đã gửi HQ</span>" + "<br>" + "<span class=\"label label-default label-font-size-85pt\">" + convertDate(_NgayGioGuiChungTuHaiQuan)[5] + "</span>";
    }
    else {// _NgayGioGuiChungTuHaiQuan không có
        if (convertDate(_NgayGioNhanChungTu)[5] != "") {
            _tinhTrangChungTu = "<span class=\"label label-warning\">ALSE nhận CT</span>" + "<br>" + "<span class=\"label  label-default label-font-size-85pt\">" + convertDate(_NgayGioNhanChungTu)[5] + "</span>";
        } else { //_NgayGioNhanChungTu không có
            // _NgayGioGuiChungTuHaiQuan không có
            _tinhTrangChungTu = "<span class=\"label label-danger\">Chưa b/g HQ</span>";
        }
    }
    return _tinhTrangChungTu;
}
///////////////////////////////////// \\ trả về tình trạng chứng từ
/// Trả về tất cả CD gộp 3/11/2017
var reCD = "";
function fncReCD(_LuongToKhai
    , _NgayGioNhanChungTu
    , _NgayGioGuiChungTuHaiQuan
    , _NgayGioGuiChungTuChoDonViVanChuyen
    , _NgayGioNhanYeuCau
    , _NgayGioDangKyToKhai
    , _NgayGioThongQuan
    , _SoToChuaNhanYeuCau
    , _SoToChuaDangKyToKhai
    , _SoToChuaThongQuan
    , _NgayGioGiaoHang
    , _KhachHang
) {
    reCD = "";
    _reLuongToKhai = "";
    if (_LuongToKhai == "Vàng") {
        _reLuongToKhai = "<span class=\"label label-warning span-normal-width\">Vàng</span>";
    }
    else if (_LuongToKhai == "Xanh") {
        _reLuongToKhai = "<span class=\"label label-info span-normal-width\">Xanh</span>";
    }
    else if (_LuongToKhai == "Đỏ") {
        _reLuongToKhai = "<span class=\"label label-danger span-normal-width\">Đỏ</span>";
    } else {
        if (convertDate(_NgayGioNhanYeuCau)[1] != "") {
            _reLuongToKhai = "<span class=\"label label-primary span-normal-width\">Draft</span>";
        }
    }

    if (convertDate(_NgayGioGuiChungTuHaiQuan)[5] != "") {
        _tinhTrangChungTu = "";
        _tinhTrangChungTu = "<span class=\"label label-success span-normal-width span-float-right\">Đã gửi HQ</span>";
    } else {
        if (convertDate(_NgayGioNhanChungTu)[5] != "") {
            _tinhTrangChungTu = "<span class=\"label label-warning span-normal-width span-float-right\">ALSE nhận CT</span>";
        } else {
            if (convertDate(_NgayGioThongQuan)[5] == "") {
                _tinhTrangChungTu = "";
            } else {
                if (_LuongToKhai == "Xanh") {
                    _tinhTrangChungTu = "";
                } else {
                    _tinhTrangChungTu = "<span class=\"label label-danger span-normal-width span-float-right\">Chưa b/g HQ</span>";
                }
            }
        }
    }

    if (_SoToChuaNhanYeuCau == 0) {
        _tinhTrangToKhai = "<span class=\"label label-default label-font-size-85pt\">" + convertDate(_NgayGioNhanYeuCau)[5] + "</span>";
    } else {
        _tinhTrangToKhai = "";
    }
    if (_SoToChuaDangKyToKhai == 0) {
        _tinhTrangToKhai = "<span class=\"label label-default label-font-size-85pt\">" + convertDate(_NgayGioDangKyToKhai)[5] + "</span>";
    }
    if (_SoToChuaThongQuan == 0) {
        _tinhTrangToKhai = "<span class=\"label label-default label-font-size-85pt\">" + convertDate(_NgayGioThongQuan)[5] + "</span>";
    } else {
        if (_KhachHang == "MPL" && convertDate(_NgayGioGiaoHang)[5] != "") {
            _tinhTrangToKhai = "<span class=\"label label-default label-font-size-85pt\">" + convertDate(_NgayGioGiaoHang)[5] + "</span>";
        }
    }

    reCD = _reLuongToKhai + _tinhTrangChungTu + "<br>" + _tinhTrangToKhai
    return reCD;
}
/// End trả về tất cả CD
///////////////////////////////////// view chính
function fncTableLogisticsView(_KeHoachId, _ngay) {
    var ajaxGet = { "get": _ngay };
    jsonData = JSON.stringify({ ajaxGet });
    //$("#div-wait").show();

    $.ajax({
        type: "POST",
        url: "QuanLyLogistics.aspx/ReLogisticsView",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            fncTableLoadwithd(d, _KeHoachId);
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
///////////////////////////////////// \\view chính
///////////////////////////////////// Load table with d
function fncTableLoadwithd(d, _KeHoachId) {
    //console.log(d);

    $("#table-logistics-main thead").empty();
    $("#table-logistics-main tbody").empty();
    html = "";
    var html_thead = "";
    //html_thead += "<tr class=\"tr-head\">";
    //html_thead += "<td>" + "Trạng thái" + "</td>";
    //html_thead += "<td>" + "Vận đơn" + "<br>" + "<span class=\"label label-info label-font-size-9pt\">" + "Số Cont" + "</span>" + "</td>";
    //html_thead += "<td>" + "Dịch vụ" + "</td>";
    //html_thead += "<td>" + "Tuyến đường" + "</td>";
    //html_thead += "<td>" + "TYPE";
    //html_thead += "<br>" + "METHOD" + "<br>" + "OF" + "<br>" + "TRANS" + "</td>";
    //html_thead += "<td>" + "PCS" + "</td>";
    //html_thead += "<td>" + "G.W" + "</td>";
    //html_thead += "<td>" + "CD STATUS" + "</td>";

    //html_thead += "<td class=\"color-red\">" + "DEADLINE" + "<br>" + "PROVIDE CONT" + "</td>";
    //html_thead += "<td class=\"\">" + "TIME CONT" + "<br>" + "ARRIVE" + "<br>" + "FACTOTY" + "</td>";
    //html_thead += "<td class=\"color-red\">" + "ETA/ETD" + "</td>";
    //html_thead += "<td>" + "TRUCK ID" + "</td>";
    //html_thead += "<td>" + "DLV TIME" + "</td>";
    //html_thead += "<td>" + "ACC" + "</td>";
    ////html_thead += "<td>" + "GhiChu" + "</td>";
    //html_thead += "</tr>";

    html_thead += "<tr class=\"tr-head\">";
    html_thead += "<td>" + "Trạng thái" + "</td>";
    html_thead += "<td>" + "Vận đơn" + "<br>" + "<span class=\"label label-info label-font-size-9pt\">" + "Số Cont" + "</span>" + "</td>";
    html_thead += "<td>" + "Dịch vụ" + "</td>";
    html_thead += "<td>" + "Tuyến đường" + "</td>";
    html_thead += "<td>" + "Ngày/giờ  " + "<br>" + "gửi thông tin" + "<br>" + " cont/xe tải" + "</td>";
    html_thead += "<td>" + "Ngày/giờ  " + "<br>" + "xe đến" + "<br>" + " nhà máy" + "<br>" + " theo yêu cầu" + "</td>";
    html_thead += "<td>" + "Ngày/giờ  " + "<br>" + "thực tế" + "<br>" + "đến nhà" + "<br>" + " máy" + "</td>";
    html_thead += "<td>" + "Ngày/giờ  " + "<br>" + "nhận hàng" + "<br>" + "xong tại" + "<br>" + "tại nhà máy" + "</td>";
    html_thead += "<td>" + "Ngày/giờ  " + "<br>" + "trả hàng" + "<br>" + "xong</td>";
    html_thead += "<td>" + "Giờ  " + "<br>" + "cutoff" + "<br>" + "ETA/ETD</td>";
    html_thead += "<td>" + "BKS/SĐT";
    html_thead += "<td>" + "Loại hình <br/> vận <br/> chuyển";
    html_thead += "<td>" + "Trạng thái <br/> tờ khai";
    html_thead += "<td>" + "Số kiện";
    html_thead += "<td>" + "Số cân";
    html_thead += "<td>" + "Chứng từ";
    html_thead += "<td>" + "Khách hàng";
    html_thead += "</tr>";
    $("#table-logistics-main thead").append(html_thead);
    var acc_type = "";
    var ncc_type = "";
    var service_type = "";
    var _reTrangThai = ["", "", ""];
    $.each(d.listLogisticView, function (index, val) {
        //if(wuid  = 1 )
        // bacnq too màu điều kiên Loại vận chuyển  = REC 
        var html_tomau_loaivanchuyen = "";
        var LoaiVanChuyenSplit = val.KieuContainer_LoaiVanChuyen.split("_");
        if (LoaiVanChuyenSplit[0] == "REC") {
            html_tomau_loaivanchuyen = "color-red";
        }

        if (val.KhachHang == "SEV") {
            acc_type = "sev";
        } else if (val.KhachHang == "SONHA") {
            acc_type = "sonha";
        }
        else if (val.KhachHang == "MPL") {
            acc_type = "mpl";
        }
        else if (val.KhachHang == "DTH") {
            acc_type = "dth";
        }
        else if (val.KhachHang == "SMK") {
            acc_type = "smk";
        }
        else if (val.KhachHang == "SIKA") {
            acc_type = "sika";
        }
        else if (val.KhachHang == "EI") {
            acc_type = "ei";
        }
        else if (val.KhachHang == "FDI") {
            acc_type = "fdi";
        }
        else if (val.KhachHang == "PEONY") {
            acc_type = "peony";
        }
        else if (val.KhachHang == "SPE" || val.KhachHang == "SPICA") {
            acc_type = "spe";
        }
        else if (val.KhachHang == "ATT") {
            acc_type = "att";
        }
        else if (val.KhachHang == "SF.WNC") {
            acc_type = "wnc";
        }
        else if (val.KhachHang == "RAM") {
            acc_type = "ram";
        }
        else if (val.KhachHang == "GTK") {
            acc_type = "gtk";
        }
        else if (val.KhachHang == "APL") {
            acc_type = "apl";
        }
        else if (val.KhachHang == "JUSDA") {
            acc_type = "jusda";
        }
        else if (val.KhachHang == "DHL.CPL") {
            acc_type = "dhlcpl";
        }
        else {
            acc_type = "other";
        }

        //bacnq tr-ncc
        //console.log(val.NhaCungCapVanTai);

        if (val.NhaCungCapVanTai == "ANP") {
            ncc_type = "anp";
        } else if (val.NhaCungCapVanTai == "LCL") {
            ncc_type = "lcl";
        } else if (val.NhaCungCapVanTai == "FCL") {
            ncc_type = "fcl";
        } else if (val.NhaCungCapVanTai == "PCF") {
            ncc_type = "pcf";
        } else if (val.NhaCungCapVanTai == "APLUS") {
            ncc_type = "aplus";
        } else if (val.NhaCungCapVanTai == "TNG") {
            ncc_type = "tng";
        }
        else {
            ncc_type = "otherncc";
        }

        if (val.KieuContainer_LoaiVanChuyen == "CD") {
            service_type = "cd"
        } else if (val.KieuContainer_LoaiVanChuyen.indexOf("TRUCK") != -1) {
            service_type = "truck";
        } else if (val.KieuContainer_LoaiVanChuyen.indexOf("FCL") != -1) {
            service_type = "fcl";
        } else if (val.KieuContainer_LoaiVanChuyen.indexOf("LCL") != -1) {
            service_type = "lcl";
        } else if (val.KieuContainer_LoaiVanChuyen.indexOf("GCR") != -1) {
            service_type = "gcr";
        } else {
            service_type = "otherservice";
        }

        //if (val.KeHoachId == "192") {
        //    alert(1);
        //}
        _reTrangThai = fncReTrangThai(val.KieuContainer_LoaiVanChuyen
            , val.SoToChuaDangKyToKhai
            , val.SoToChuaThongQuan
            , val.KhuVucGiamSatHaiQuan
            , val.NgayGioDenNhaMay
            , val.NgayGioGiaoHang
            , val.NgayGioContDenNhaMay
            , val.NgayGioThongQuan
            , val.LoaiHinhXuatNhap
            , val.NgayGioContDenNhaMayThucTe
            , val.NgayGioTauDiHoacDen
            , val._Status
        );
        // console.log(val.SoContainer  + " " + val._Status);
        html += "<tr id=\"tr-qll-" + val.KeHoachId + "\" KeHoachId=\"" + val.KeHoachId + "\" SoVanDon=\"" + val.SoVanDon + "\" SoContainer=\"" + val.SoContainer + "\" class=\"tr-qll-view tr-qll-acc-" + acc_type + " tr-ncc-" + ncc_type + "  tr-service-" + service_type + "\" >";
        // bắc sửa phần thêm  ghi chú cho phần EI
        //html += "<td class=\"td-trangthai\" " + ((val.GhiChuKH != "") ? "rowspan=\"2\"" : "") + ">" + _reTrangThai[0] + "</td>";
        html += "<td class=\"td-trangthai\" rowspan=\"2\">" + _reTrangThai[0] + "</td>";
        // end bắc sửa
        html += "<td>" + val.SoVanDon + "<br>" + "<span class=\"label label-info label-font-size-85pt color-black\">" + val.SoContainer + "</span>" + "</td>";
        html += "<td class=\"font-weight-bold text-align-left \">" + "<span class=\"color-red td-fontsize\">" + val.NhaCungCapVanTai + "</span>" + "<br>" + "<span class=\"" + html_tomau_loaivanchuyen + " td-fontsize \">" + val.KieuContainer_LoaiVanChuyen + "</span>" + "</td>";
        html += "<td>" + val.Tuyen + " </br> <span class=\"maudo\">" + val.KhoTraHang + "</span></td>";
        html += "<td class=\"" + "\">" + convertDate(val.NgayGioContDenNhaMay)[5] + "</td>"; // DEADLINE PROVIDE CONT
        html += "<td class=\"" + _reTrangThai[3] + "\">" + convertDate(val.NgayGioContDenNhaMayThucTe)[5] + "</td>";// TIME CONT TRUCK ARIVE FACTORY
        html += "<td class=\"" + "\">" + convertDate(val.NgayGioDenNhaMay)[5] + "</td>";
        html += "<td class=\"" + "\">" + convertDate(val.NgayGioDongHangXong)[5] + "</td>";
        html += "<td class=\"" + "\">" + convertDate(val.NgayGioGiaoHang)[5] + "</td>";
        //html += "<td " + fncToMauNgayGiaoHang(val.NgayGioYeuCauGiaoHang, (convertDate(val.NgayGioGiaoHang)[0] != "" ? val.NgayGioGiaoHang : val.NgayGioDenNhaMay), val._Status, val.LoaiHinhXuatNhap) + "</td>";
        html += "<td class=\"" + _reTrangThai[4] + "\">" + convertDate(val.NgayGioTauDiHoacDen)[5] + "</td>"; // ETA/ETD
        html += "<td>" + val.BienKiemSoat + "<br/>" + val.SoDienThoai + "</td>";
        html += "<td>" + val.LoaiHinhXuatNhap + "<br>" + val.LoaiHinhVanChuyen + "</td>";
        html += "<td class=\"" + _reTrangThai[2] + "\">" + fncReCD(val.LuongToKhai
            , val.NgayGioNhanChungTu
            , val.NgayGioGuiChungTuHaiQuan
            , val.NgayGioGuiChungTuChoDonViVanChuyen
            , val.NgayGioNhanYeuCau
            , val.NgayGioDangKyToKhai
            , val.NgayGioThongQuan
            , val.SoToChuaNhanYeuCau
            , val.SoToChuaDangKyToKhai
            , val.SoToChuaThongQuan
            , val.NgayGioGiaoHang
            , val.KhachHang
        ) + "</td>";
        if (val.TaiPOD == "False" || val.TaiPOD == "") {
            html_POD = "<span class=\"label label-danger span-normal-width\">Không có ảnh</span>";
        } else {
            html_POD = "<span class=\"label label-info span-normal-width\">Có ảnh</span>";
        }
        html += "<td>" + numberTextWithCommas(val.SoKien) + "</td>";
        html += "<td>" + numberTextWithCommas(val.TrongLuong) + "</td>";
        html += "<td>" + html_POD + "</td>"
        html += "<td>" + val.KhachHang + "</td>";

        html += "</tr>";

        //if (val.GhiChuKH != "") {
        //    html += "<tr>";
        //    html += "<td colspan=\"13\" class=\"td-sub-ghichukh tr-qll-view tr-qll-acc-" + acc_type + " tr-ncc-" + ncc_type + "\">Ghi chú: " + val.GhiChuKH + "</td>";
        //    html += "</tr>";
        //}
        //// bắc sửa phần thêm  ghi chú cho phần EI
        if (val.KhachHang == "EI") {
            html += "<tr>";
            html += "<td colspan=\"13\" class=\"td-sub-ghichukh tr-qll-view tr-qll-acc-" + acc_type + " tr-ncc-" + ncc_type + " tr-service-" + service_type + "\">" + (val.GhiChuKH != "" ? "Ghi chú: " + val.GhiChuKH + " " : " ") + " Lưu ý: Update hệ thống EI</td>";
            html += "</tr>";
        } else {
            html += "<tr>";
            html += "<td colspan=\"13\" class=\"td-sub-ghichukh tr-qll-view tr-qll-acc-" + acc_type + " tr-ncc-" + ncc_type + " tr-service-" + service_type + "\">" + (val.GhiChuKH != "" ? "Ghi chú: " + val.GhiChuKH + " " : " ") + "</td>";
            html += "</tr>";
        }
        // end bắc sửa

        // clear
        html_sub = "";

        //! Bàn giao chứng từ
        html_sub += "<span class=\"span-tieude-sub\">KẾ HOẠCH</span>";
        html_sub += "<span class=\"span-menu-edit span-kehoach label label-primary\" KeHoachId=\"" + val.KeHoachId + "\"  SoVanDon=\"" + val.SoVanDon + "\" SoContainer=\"" + val.SoContainer + "\" >Sửa</span>";

        html_sub += "<span class=\"span-thongtincapnhat\"><span>Người cập nhật: </span>" + "<span class=\"color-red\">" + val.KeHoach_NguoiSua + "</span>";
        html_sub += "<span> | Thời gian cập nhật: </span>" + "<span class=\"color-red\">" + convertDate(val.KeHoach_ThoiGianSua)[5] + "</span>";
        html_sub += "</span>"
        html_sub += "<table class=\"table table-bordered\">";
        html_sub += "<thead>";
        html_sub += "<tr>";
        html_sub += "<td>" + "Số container" + "</td>";
        html_sub += "<td>" + "Số chì hãng tàu" + "</td>";
        html_sub += "<td>" + "Dịch vụ" + "</td>";
        html_sub += "<td>" + "Loại nhập xuất" + "</td>";
        html_sub += "<td>" + "Loại vận chuyển" + "</td>";
        html_sub += "<td>" + "Số kiện" + "</td>";
        html_sub += "<td>" + "Trọng lượng" + "</td>";
        //html_sub += "<td>" + "Deadline CD" + "</td>";

        html_sub += "<td>" + "Ngày giờ nhận KH" + "</td>";
        html_sub += "<td>" + "Gross Tare" + "</td>";
        html_sub += "<td>" + "Khách Hàng" + "</td>";
        html_sub += "</tr>";
        html_sub += "</thead>";
        html_sub += "<tbody>";
        html_sub += "<tr>";
        html_sub += "<td>" + val.SoContainer + "</td>";
        html_sub += "<td>" + val.SoChiHangTau + "</td>";
        html_sub += "<td>" + val.KieuContainer_LoaiVanChuyen + "</td>";
        html_sub += "<td class=\"" + html_tomau_loaivanchuyen + "\">" + val.LoaiHinhXuatNhap + "</td>";
        html_sub += "<td class=\"" + html_tomau_loaivanchuyen + "\">" + val.LoaiHinhVanChuyen + "</td>";
        html_sub += "<td>" + val.SoKien + "</td>";
        html_sub += "<td>" + val.TrongLuong + "</td>";
        //html_sub += "<td>" + convertDate(val.NgayGioYeuCauGiaoHang)[5] + "</td>";

        html_sub += "<td>" + convertDate(val.NgayGioNhanKeHoach)[5] + "</td>";
        html_sub += "<td>" + val.GrossTare + "</td>";
        html_sub += "<td>" + val.KhachHang + "</td>";
        html_sub += "</tr>";

        html_sub += "</tbody>";
        html_sub += "</table>";

        //! Bàn giao chứng từ
        //html_sub += "<span class=\"span-tieude-sub\">BÀN GIAO CHỨNG TỪ</span>";
        //html_sub += "<span class=\"span-menu-edit span-bangiaochungtu label label-primary\" KeHoachId=\"" + val.KeHoachId + "\"  SoVanDon=\"" + val.SoVanDon + "\" SoContainer=\"" + val.SoContainer + "\" >Sửa</span>";
        //html_sub += "<span class=\"span-menu-edit span-bangiaochungtu-print label label-primary\" KeHoachId=\"" + val.KeHoachId + "\"  SoVanDon=\"" + val.SoVanDon + "\" SoContainer=\"" + val.SoContainer + "\" >Print</span>";

        //if (val.BanGiaoChungTu_NguoiSua != "") {
        //    html_sub += "<span  class=\"span-thongtincapnhat\">";

        //    html_sub += "<span>Người cập nhật: </span>" + "<span class=\"color-red\">" + val.BanGiaoChungTu_NguoiSua + "</span>";
        //    html_sub += "<span> | Thời gian cập nhật: </span>" + "<span class=\"color-red\">" + convertDate(val.BanGiaoChungTu_ThoiGianSua)[5] + "</span>";

        //    html_sub += "</span>";
        //}
        //html_sub += "<table class=\"table table-bordered\">";
        //html_sub += "<thead>";
        //html_sub += "<tr>";
        //html_sub += "<td>" + "Ngày Giờ nhận chứng từ" + "</td>";
        //html_sub += "<td>" + "Ngày giờ gửi chứng từ HQ" + "</td>";
        //html_sub += "<td>" + "Ngày giờ gửi chứng từ cho đơn vị vận chuyển" + "</td>";

        //html_sub += "</tr>";
        //html_sub += "</thead>";
        //html_sub += "<tbody>";
        //html_sub += "<tr>";
        //html_sub += "<td>" + convertDate(val.NgayGioNhanChungTu)[5] + "</td>";
        //html_sub += "<td>" + convertDate(val.NgayGioGuiChungTuHaiQuan)[5] + "</td>";
        //html_sub += "<td>" + convertDate(val.NgayGioGuiChungTuChoDonViVanChuyen)[5] + "</td>";

        //html_sub += "</tr>";

        //html_sub += "</tbody>";
        //html_sub += "</table>";
        //! Thông tin tờ khai
        html_sub += "<span class=\"span-tieude-sub\">THÔNG TIN TỜ KHAI</span>";
        html_sub += "<span class=\"span-menu-edit span-thongtintokhai-sua label label-warning\" ThongTinToKhaiId=\"\" KeHoachId=\"" + val.KeHoachId + "\" SoVanDon=\"" + val.SoVanDon + "\" SoContainer=\"" + val.SoContainer + "\" >+ Thêm</span>";

        html_sub += "<table class=\"table table-bordered tbl-thongtintokhai\" id=\"tbl-thongtintokhai-khid-" + val.KeHoachId + "\">";
        html_sub += "<thead>";
        html_sub += "<tr>";
        html_sub += "<td>" + "" + "</td>";
        html_sub += "<td>" + "Số tờ khai" + "</td>";
        html_sub += "<td>" + "Số hóa đơn" + "</td>";
        html_sub += "<td>" + "Loại hình tờ khai" + "</td>";
        html_sub += "<td>" + "Luồng tờ khai" + "</td>";
        html_sub += "<td>" + "Ngày giờ hoàn thành Draft" + "</td>";
        html_sub += "<td>" + "Ngày giờ đăng ký tờ khai" + "</td>";
        html_sub += "<td>" + "Ngày giờ thông quan" + "</td>";

        html_sub += "</tr>";
        html_sub += "</thead>";
        html_sub += "<tbody>";

        html_sub += "</tbody>";
        html_sub += "</table>";

        html_sub += "<span class=\"span-tieude-sub\">THỦ TỤC GIÁM SÁT HẢI QUAN</span>";
        html_sub += "<span class=\"span-menu-edit span-thutucgiamsathaiquan label label-primary\" KeHoachId=\"" + val.KeHoachId + "\" SoVanDon=\"" + val.SoVanDon + "\" SoContainer=\"" + val.SoContainer + "\" >Sửa</span>";
        if (val.ThuTucGiamSatHaiQuan_NguoiSua != "") {
            html_sub += "<span  class=\"span-thongtincapnhat\">";

            html_sub += "<span>Người cập nhật: </span>" + "<span class=\"color-red\">" + val.ThuTucGiamSatHaiQuan_NguoiSua + "</span>";
            html_sub += "<span> | Thời gian cập nhật: </span>" + "<span class=\"color-red\">" + convertDate(val.ThuTucGiamSatHaiQuan_ThoiGianSua)[5] + "</span>";

            html_sub += "</span>";
        }
        html_sub += "<table class=\"table table-bordered\">";
        html_sub += "<thead>";
        html_sub += "<tr>";
        html_sub += "<td>" + "Đại lý giám sát Hải Quan" + "</td>";
        html_sub += "<td>" + "Khu vực giám sát HQ" + "</td>";
        html_sub += "<td>" + "Ngày giờ làm giám sát HQ" + "</td>";
        html_sub += "<td>" + "Người làm giám sát HQ" + "</td>";
        html_sub += "<td>" + "Ngày giờ kiểm hóa" + "</td>";

        html_sub += "</tr>";
        html_sub += "</thead>";
        html_sub += "<tbody>";
        html_sub += "<tr>";
        html_sub += "<td>" + val.DaiLyGiamSatHaiQuan + "</td>";
        html_sub += "<td>" + val.KhuVucGiamSatHaiQuan + "</td>";
        html_sub += "<td>" + convertDate(val.NgayGioLamGiamSatHaiQuan)[5] + "</td>";
        html_sub += "<td>" + val.NguoiLamGiamSatHaiQuan + "</td>";
        html_sub += "<td>" + convertDate(val.NgayGioKiemHoa)[5] + "</td>";
        html_sub += "</tr>";

        html_sub += "</tbody>";
        html_sub += "</table>";
        //! Thông tin vận chuyển
        if (val.KieuContainer_LoaiVanChuyen != "CD") {
            html_sub += "<span class=\"span-tieude-sub\">THÔNG TIN VẬN CHUYỂN</span>";
            html_sub += "<span class=\"span-menu-edit span-thongtinvanchuyen label label-primary\" KeHoachId=\"" + val.KeHoachId + "\" SoVanDon=\"" + val.SoVanDon + "\" SoContainer=\"" + val.SoContainer + "\" >Sửa</span>";
            if (val.ThongTinVanChuyen_NguoiSua != "") {
                html_sub += "<span  class=\"span-thongtincapnhat\">";

                html_sub += "<span>Người cập nhật: </span>" + "<span class=\"color-red\">" + val.ThongTinVanChuyen_NguoiSua + "</span>";
                html_sub += "<span> | Thời gian cập nhật: </span>" + "<span class=\"color-red\">" + convertDate(val.ThongTinVanChuyen_ThoiGianSua)[5] + "</span>";

                html_sub += "</span>";
            }
            html_sub += "<table class=\"table table-bordered\">";
            html_sub += "<thead>";
            html_sub += "<tr>";
            html_sub += "<td>" + "Đơn vị vận chuyển" + "</td>";
            html_sub += "<td>" + "Biển kiểm soát" + "</td>";
            html_sub += "<td>" + "Tên lái xe" + "</td>";
            html_sub += "<td>" + "Chứng minh thư" + "</td>";
            html_sub += "<td>" + "Số điện thoại" + "</td>";

            html_sub += "</tr>";
            html_sub += "</thead>";
            html_sub += "<tbody>";
            html_sub += "<tr>";
            html_sub += "<td class=\"color-red\">" + val.DonViVanChuyen + "</td>";
            html_sub += "<td>" + val.BienKiemSoat + "</td>";
            html_sub += "<td>" + val.TenLaiXe + "</td>";
            html_sub += "<td>" + val.ChungMinhThu + "</td>";
            html_sub += "<td>" + val.SoDienThoai + "</td>";
            html_sub += "</tr>";

            html_sub += "</tbody>";
            html_sub += "</table>";
            //! Giao hàng
            html_sub += "<span class=\"span-tieude-sub\">GIAO HÀNG</span>";
            html_sub += "<span class=\"span-menu-edit span-giaohang label label-primary\" KeHoachId=\"" + val.KeHoachId + "\" SoVanDon=\"" + val.SoVanDon + "\" SoContainer=\"" + val.SoContainer + "\" attrNgayXeDenNhaMay=\"" + val.NgayGioContDenNhaMayThucTe + "\">Sửa</span>";
            if (val.CapNhatGiaoHang_NguoiSua != "") {
                html_sub += "<span  class=\"span-thongtincapnhat\">";

                html_sub += "<span>Người cập nhật: </span>" + "<span class=\"color-red\">" + val.CapNhatGiaoHang_NguoiSua + "</span>";
                html_sub += "<span> | Thời gian cập nhật: </span>" + "<span class=\"color-red\">" + convertDate(val.CapNhatGiaoHang_ThoiGianSua)[5] + "</span>";

                html_sub += "</span>";
            }
            html_sub += "<table class=\"table table-bordered\">";
            html_sub += "<thead>";
            html_sub += "<tr>";
            html_sub += "<td>" + "Số biên bản" + "</td>";
            html_sub += "<td>" + "Ngày giờ xe đến nhà máy theo yêu cầu" + "</td>";
            html_sub += "<td>" + "Ngày giờ thực tế đến nhà máy" + "</td>";
            html_sub += "<td>" + "Ngày giờ nhận hàng xong tại nhà máy" + "</td>";
            html_sub += "<td>" + "Ngày giờ trả hàng xong" + "</td>";
            html_sub += "<td>" + "Người nhận hàng" + "</td>";
            html_sub += "<td>" + "Duyệt chứng từ" + "</td>";
            html_sub += "<td>" + "Ghi chú" + "</td>";
            html_sub += "<td>" + "POD" + "</td>";

            html_sub += "</tr>";
            html_sub += "</thead>";
            html_sub += "<tbody>";
            html_sub += "<tr>";
            html_sub += "<td>" + val.SoBienBan + "</td>";
            html_sub += "<td>" + convertDate(val.NgayGioYeuCau)[5] + "</td>";
            html_sub += "<td>" + convertDate(val.NgayGioDenNhaMay)[5] + "</td>";
            html_sub += "<td>" + convertDate(val.NgayGioDongHangXong)[5] + "</td>";
            html_sub += "<td>" + convertDate(val.NgayGioGiaoHang)[5] + "</td>";
            html_sub += "<td>" + val.NguoiNhanHang + "</td>";
            html_sub += "<td>" + val.DuyetChungTu + "</td>";
            html_sub += "<td>" + val.GhiChu + "</td>";
            html_sub += "<td>" + val.TaiPOD + "</td>";
            html_sub += "</tr>";

            html_sub += "</tbody>";
            html_sub += "</table>";
        }
        //! Bàn giao chứng từ
        // Bacnq start
        //! Chi phí phát sinh
        html_sub += "<span class=\"span-tieude-sub\">CHI PHÍ PHÁT SINH</span>";
        html_sub += "<span class=\"span-menu-edit span-chiphiphatsinh label label-primary\" KeHoachId=\"" + val.KeHoachId + "\" SoVanDon=\"" + val.SoVanDon + "\" SoContainer=\"" + val.SoContainer + "\" >Sửa</span>";
        if (val.ChiPhiPhatSinh_NguoiSua != "") {
            html_sub += "<span  class=\"span-thongtincapnhat\">";

            html_sub += "<span>Người cập nhật: </span>" + "<span class=\"color-red\">" + val.ChiPhiPhatSinh_NguoiSua + "</span>";
            html_sub += "<span> | Thời gian cập nhật: </span>" + "<span class=\"color-red\">" + convertDate(val.ChiPhiPhatSinh_NgaySua)[5] + "</span>";

            html_sub += "</span>";
        }
        html_sub += "<table class=\"table table-bordered\">";
        html_sub += "<thead>";
        html_sub += "<tr>";
        html_sub += "<td>" + "Các chi phí phát sinh" + "</td>";
        html_sub += "<td>" + "Vendor Truck chi phí" + "</td>";
        html_sub += "<td>" + "Khách Hàng Doanh Thu" + "</td>";
        html_sub += "<td>" + "Ghi Chú" + "</td>";
        html_sub += "</tr>";
        html_sub += "</thead>";

        html_sub += "<tbody>";
        html_sub += "<tr>";
        html_sub += "<td>" + "Phí lưu ca" + "</td>";
        html_sub += "<td>" + fncZeroTraVeRong(numberTextWithCommas(val.VendorTruck_PhiLuuCa)) + "</td>";
        html_sub += "<td>" + fncZeroTraVeRong(numberTextWithCommas(val.KhachHang_PhiLuuCa)) + "</td>";
        html_sub += "<td>" + val.GhiChu_PhiLuuCa + "</td>";
        html_sub += "</tr>";
        html_sub += "<tr>";
        html_sub += "<td>" + "Phí nộp CD không phơi" + "</td>";
        html_sub += "<td>" + fncZeroTraVeRong(numberTextWithCommas(val.VendorTruck_PhiNopCDKhongPhoi)) + "</td>";
        html_sub += "<td>" + fncZeroTraVeRong(numberTextWithCommas(val.KhachHang_PhiNopCDKhongPhoi)) + "</td>";
        html_sub += "<td>" + val.GhiChu_PhiNopCDKhongPhoi + "</td>";
        html_sub += "</tr>";
        html_sub += "<tr>";
        html_sub += "<td>" + "Kiểm hóa không hàng" + "</td>";
        html_sub += "<td>" + fncZeroTraVeRong(numberTextWithCommas(val.VendorTruck_KiemHoaKhongHang)) + "</td>";
        html_sub += "<td>" + fncZeroTraVeRong(numberTextWithCommas(val.KhachHang_KiemHoaKhongHang)) + "</td>";
        html_sub += "<td>" + val.GhiChu_KiemHoaKhongHang + "</td>";
        html_sub += "</tr>";
        html_sub += "<tr>";
        html_sub += "<td>" + "Chi phí khác" + "</td>";
        html_sub += "<td>" + fncZeroTraVeRong(numberTextWithCommas(val.VendorTruck_ChiPhiKhac)) + "</td>";
        html_sub += "<td>" + fncZeroTraVeRong(numberTextWithCommas(val.KhachHang_ChiPhiKhac)) + "</td>";
        html_sub += "<td>" + val.GhiChu_ChiPhiKhac + "</td>";
        html_sub += "</tr>";
        html_sub += "</tbody>";
        html_sub += "</table>";
        // Bacnq end chi phí phát sinh

        // Bacnq thêm phần cập nhật hàng EI
        if (val.KhachHang == "EI") {
            html_sub += "<span class=\"span-tieude-sub\">HỆ THỐNG EI</span>";
            html_sub += "<span class=\"span-menu-edit span-hethongei label label-primary\" KeHoachId=\"" + val.KeHoachId + "\" SoVanDon=\"" + val.SoVanDon + "\" SoContainer=\"" + val.SoContainer + "\" >Sửa</span>";
            if (val.ChiPhiPhatSinh_NguoiSua != "") {
                html_sub += "<span  class=\"span-thongtincapnhat\">";

                html_sub += "<span>Người cập nhật: </span>" + "<span class=\"color-red\">" + val.ChiPhiPhatSinh_NguoiSua + "</span>";
                html_sub += "<span> | Thời gian cập nhật: </span>" + "<span class=\"color-red\">" + convertDate(val.ChiPhiPhatSinh_NgaySua)[5] + "</span>";

                html_sub += "</span>";
            }
            html_sub += "<table class=\"table table-bordered\">";
            html_sub += "<thead>";
            html_sub += "<tr>";
            html_sub += "<td>" + "Nhân viên cập nhật hệ thống EI" + "</td>";
            html_sub += "<td>" + "Ngày giờ cập nhật hệ thống EI" + "</td>";
            html_sub += "<td>" + "Ghi Chú" + "</td>";
            html_sub += "</tr>";
            html_sub += "</thead>";

            html_sub += "<tbody>";
            html_sub += "<tr>";
            html_sub += "<td>" + val.HeThongEI_NguoiSua + "</td>";
            html_sub += "<td>" + convertDate(val.DatetimeEI)[5] + "</td>";
            html_sub += "<td>" + val.GhiChuEI + "</td>";
            html_sub += "</tr>";
            html_sub += "</tbody>";
            html_sub += "</table>";
        }
        // End cập nhật hàng EI

        if (val.KieuContainer_LoaiVanChuyen != "CD") {
            // Thảo luận
            html_sub += "<span class=\"span-tieude-sub\">THẢO LUẬN</span>";

            html_sub += "<table class=\"table  tbl-thaoluan\" id=\"tbl-thaoluan-khid-" + val.KeHoachId + "\">";
            html_sub += "<thead>";

            html_sub += "</thead>";
            html_sub += "<tbody>";

            html_sub += "</tbody>";
            html_sub += "</table>";
        }
        html_sub += "<span class=\"span-tieude-sub\">ĐÁNH GIÁ VENDOR</span>";
        html_sub += "<table dadanhgia=\"0\" class=\"table table-bordered\" id=\"tbl-danhgiavendor-" + val.KeHoachId + "\"" + " SoVanDon=\"" + val.SoVanDon + "\" SoContainer=\"" + val.SoContainer + "\"" + ">";
        html_sub += "<thead>" + "</thead>";
        html_sub += "<tbody>";
        html_sub += "<tr>";
        html_sub += "<td>";
        html_sub += "Chưa có đánh giá";
        html_sub += "</td>";
        html_sub += "</tr>";
        html_sub += "<tr>";
        html_sub += "<td>";
        html_sub += "<input type=\"button\" KeHoachId=\"" + val.KeHoachId + "\" SoVanDon=\"" + val.SoVanDon + "\" SoContainer=\"" + val.SoContainer + "\" class=\"btn btn-sm btn-success btn-logistics-themdanhgia\" value=\"Tạo đánh giá vendor\"/> ";
        html_sub += "</td>";
        html_sub += "</tr>";
        html_sub += "</tbody>";
        html_sub += "</table>";
        html += "<tr  class=\"tr-sub-hide tr-sub-" + val.KeHoachId + "\">";
        html += "<td colspan=\"2\">" + fncGenSubMenu(val.KeHoachId, val.SoVanDon, val.SoContainer) + "</td>";
        html += "<td colspan=\"13\">" + html_sub + "</td>";;
        html += "</tr>";
    })
    var html_danhgiavendor = "";
    var html_danhgiavendor_thead = "";

    html_danhgiavendor_thead += "<tr>";
    html_danhgiavendor_thead += "<td>STT</td>";
    html_danhgiavendor_thead += "<td>Nội dung</td>";
    html_danhgiavendor_thead += "<td>Đánh giá</td>";
    html_danhgiavendor_thead += "<td>Ghi chú</td>";
    html_danhgiavendor_thead += "</tr>";
    //console.log(d.listDanhGia);

    $("#table-logistics-main tbody").append(html);
    if (d.listDanhGia != null && d.listDanhGia != {}) {
        $.each(d.listDanhGia, function (index, item) {
            html_danhgiavendor = "";

            html_danhgiavendor += "<tr danhgia-temp-id=\"" + item.Id + "\">";
            html_danhgiavendor += "<td class=\"td-danhgia-vendor-stt\">" + "" + "</td>";
            html_danhgiavendor += "<td class=\"td-danhgia-vendor-noidung\">" + item.NoiDung + "</td>";
            html_danhgiavendor += "<td class=\"td-danhgia-vendor-dat\">";
            if (item.DanhGia == "True") {
                html_danhgiavendor += "<label class=\"bg-success\">";
                html_danhgiavendor += "ĐẠT";
                html_danhgiavendor += "</label>";
            } else {
                html_danhgiavendor += "<label class=\"bg-danger\">";
                html_danhgiavendor += "KHÔNG ĐẠT";
                html_danhgiavendor += "</label>";
            }

            html_danhgiavendor += "<td class=\"td-danhgia-vendor-ghichu\">" + item.GhiChu + "</td>";
            html_danhgiavendor += "</tr>";
            //console.log(item.KeHoachId);
            if ($("#tbl-danhgiavendor-" + item.KeHoachId).attr("dadanhgia") == "0") {
                $("#tbl-danhgiavendor-" + item.KeHoachId + " thead").empty();
                $("#tbl-danhgiavendor-" + item.KeHoachId + " thead").append(html_danhgiavendor_thead);
                $("#tbl-danhgiavendor-" + item.KeHoachId + " tbody").empty();
                $(" <span class=\"span-menu-edit span-danhgiavendor-sua label label-primary\"" + "  KeHoachId=\"" + item.KeHoachId + "\" >Sửa</span>").insertBefore($("#tbl-danhgiavendor-" + item.KeHoachId));
                $("#tr-qll-" + item.KeHoachId).find(".td-trangthai button").removeClass("color-red");;
            }
            $("#tbl-danhgiavendor-" + item.KeHoachId).attr("dadanhgia", "1");

            $("#tbl-danhgiavendor-" + item.KeHoachId + " tbody").append(html_danhgiavendor);
        })
    }

    //$("#div-wait").hide();
    if (_KeHoachId != 0 && _KeHoachId != null && _KeHoachId != "") {
        fncLoadThongTinToKhai(_KeHoachId, "", "");
        fncShowSub(_KeHoachId);
    }
    //
    if (!$("#cb-all").checked) {
        $.each($(".cb-qll"), function () {
            if (!this.checked && $(this).val() != "all") {
                $(".tr-qll-acc-" + $(this).val()).hide();
            }
        })
    }

    if (!$("#cb-all-ncc").checked) {
        $.each($(".ncc-qll"), function () {
            if (!this.checked && $(this).val() != "all-ncc") {
                $(".tr-ncc-" + $(this).val()).hide();
            }
        });
    }
}
///////////////////////////////////// \\Load table with d
function fncTimKiem(_bill, _contno) {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    if (_bill == "" && _contno == "") {
        alert("Không được để trống BILL và Cont No");
    } else {
        ajaxGet2 = { "get1": _bill, "get2": _contno };
        jsonData = JSON.stringify({ ajaxGet2 });
        console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/TimKiem",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                fncTableLoadwithd(d, "");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    }
}

///////////////////////////////////// load loại hình tờ khai
function fncLoadLoaiHinhToKhai() {
    var arrlhtk = new Array();
    var ajaxGet = { "get": "0" };
    jsonData = JSON.stringify({ ajaxGet });
    //$("#div-wait").show();
    $.ajax({
        type: "POST",
        url: "QuanLyLogistics.aspx/ReLoaiHinhToKhai",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            $.each(d, function (index, value) {
                arrlhtk.push({ text: value.LoaiHinhToKhai, value: value.LoaiHinhToKhai });
            })
            $("#input-qll-LoaiHinhToKhai").kendoComboBox({
                dataTextField: "text",
                dataValueField: "value",
                dataSource: arrlhtk,
                suggest: true,
            })
        },
        error: function () {
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}
///////////////////////////////////// \\load loại hình tờ khai

///////////////////////////////////// load combobox kehoach
function fncLoadKeHoachCombobox() {
    var arrkclvc = new Array();
    var arrkh = new Array();
    var arrdvvc = new Array();
    var arrTuyen = new Array();
    var ajaxGet = { "get": "0" };
    jsonData = JSON.stringify({ ajaxGet });
    //$("#div-wait").show();
    $.ajax({
        type: "POST",
        url: "QuanLyLogistics.aspx/ReKeHoachCombobox",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            $.each(d.l_KieuContainerLoaiVanChuyen, function (index, value) {
                arrkclvc.push({ text: value.KieuContainerLoaiVanChuyen, value: value.KieuContainerLoaiVanChuyen });
            })
            $.each(d.l_KhachHang, function (index, value) {
                arrkh.push({ text: value.KhachHang, value: value.KhachHang });
            })
            $.each(d.l_DonViVanChuyen, function (index, value) {
                arrdvvc.push({ text: value.DonViVanChuyen, value: value.DonViVanChuyen });
            })
            $.each(d.l_Tuyen, function (index, value) {
                arrTuyen.push({ text: value.Tuyen, value: value.Tuyen });
            })
            $("#input-qll-NhaCungCapVanTai").kendoComboBox({
                dataTextField: "text",
                dataValueField: "value",
                dataSource: arrdvvc,
                suggest: true,
            })
            $("#input-qll-KhachHang").kendoComboBox({
                dataTextField: "text",
                dataValueField: "value",
                dataSource: arrkh,
                suggest: true,
            })
            $("#input-qll-KieuContainerLoaiVanChuyen").kendoComboBox({
                dataTextField: "text",
                dataValueField: "value",
                dataSource: arrkclvc,
                suggest: true,
            })
            $("#input-qll-Tuyen").kendoComboBox({
                dataTextField: "text",
                dataValueField: "value",
                dataSource: arrTuyen,
                suggest: true,
            })
        },
        error: function () {
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}

///////////////////////////////////// \\load combobox kehoach
///////////////////////////////////// load combobox thu tuc giam sat hai quan
function fncLoadThuTucGiamSatHaiQuanCombobox() {
    var arrdlgshq = new Array();
    var arrkvgshq = new Array();
    var arrnlgshq = new Array();
    var ajaxGet = { "get": "0" };
    jsonData = JSON.stringify({ ajaxGet });
    //$("#div-wait").show();
    $.ajax({
        type: "POST",
        url: "QuanLyLogistics.aspx/ReThuTucGiamSatHaiQuanCombobox",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            $.each(d.l_DaiLyGiamSatHaiQuan, function (index, value) {
                arrdlgshq.push({ text: value.DaiLyGiamSatHaiQuan, value: value.DaiLyGiamSatHaiQuan });
            })
            $.each(d.l_KhuVucGiamSatHaiQuan, function (index, value) {
                arrkvgshq.push({ text: value.KhuVucGiamSatHaiQuan, value: value.KhuVucGiamSatHaiQuan });
            })
            $.each(d.l_NguoiLamGiamSatHaiQuan, function (index, value) {
                arrnlgshq.push({ text: value.NguoiLamGiamSatHaiQuan, value: value.NguoiLamGiamSatHaiQuan });
            })

            $("#input-qll-DaiLyGiamSatHaiQuan").kendoComboBox({
                dataTextField: "text",
                dataValueField: "value",
                dataSource: arrdlgshq,
                suggest: true,
            })
            $("#input-qll-KhuVucGiamSatHaiQuan").kendoComboBox({
                dataTextField: "text",
                dataValueField: "value",
                dataSource: arrkvgshq,
                suggest: true,
            })
            $("#input-qll-NguoiLamGiamSatHaiQuan").kendoComboBox({
                dataTextField: "text",
                dataValueField: "value",
                dataSource: arrnlgshq,
                suggest: true,
            })
        },
        error: function () {
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}
///////////////////////////////////// \\load combobox thu tuc giam sat hai quan

///////////////////////////////////// load combobox thong tin van chuyen
function fncLoadThongTinVanChuyenCombobox() {
    var arrdvvc = new Array();

    var ajaxGet = { "get": "0" };
    jsonData = JSON.stringify({ ajaxGet });
    //$("#div-wait").show();
    $.ajax({
        type: "POST",
        url: "QuanLyLogistics.aspx/ReLogisticsThongTinVanChuyenCombobox",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            $.each(d.l_DonViVanChuyen, function (index, value) {
                arrdvvc.push({ text: value.DonViVanChuyen, value: value.DonViVanChuyen });
            })

            $("#input-qll-DonViVanChuyen").kendoComboBox({
                dataTextField: "text",
                dataValueField: "value",
                dataSource: arrdvvc,
                suggest: true,
            })

            combobox = $("#input-qll-DonViVanChuyen").data("kendoComboBox");//This "instantiates it"
            combobox.value("PCF")
        },
        error: function () {
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}

///////////////////////////////////// \\load combobox thong tin van chuyen
/// ///////////////////////////////////// load combobox thông tin vận chuyển của các lô có mã kế hoạch
function fncLoadDanhSachLoChuaCoBKS() {
    // load dữ liệu
    var ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyLogistics.aspx/ReLogisticsDanhSachLoChuaCoBKS",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            var capnhatthongtinvanchuyen_Option = "";

            $.each(d, function (index, item) {
                capnhatthongtinvanchuyen_Option += "<option value=\"" + item.Id + "\">" + item.SoVanDon + "</option>"
            })
            $("#select-capnhatthongtinvanchuyen").empty();
            $("#select-capnhatthongtinvanchuyen").append(capnhatthongtinvanchuyen_Option);
            $("#select-capnhatthongtinvanchuyen").select2({
                closeOnSelect: false,
                allowHtml: true,
                allowClear: true,
                tags: true
            });
        },
        error: function () {
            alert("loi");
        }
    }).done(function () {
    });
}

///////////////////////////////////// \\load combobox thông tin vận chuyển của các lô có mã kế hoạch
/////////////////////////////////////   cập nhật thông tin vận chuyển của các lô có mã kế hoạch
function fncCapNhatThongTinVanChuyenCuaCacLoCungMaKeHoach() {
    $("#btn-CapNhatThongTinVanChuyenChoCacLo").click(function () {
        //console.log($("#select-capnhatthongtinvanchuyen").val());
        var listThongTinVanChuyen = [];
        var listKeHoachId = $("#select-capnhatthongtinvanchuyen").val();
        var currentKeHoachId = $("#modalThongTinVanChuyen").attr("kehoachid");
        if (listKeHoachId.length > 0) {
            $.each(listKeHoachId, function (index, item) {
                listThongTinVanChuyen.push({
                    Id: ""
                    , SoVanDon: ""
                    , SoContainer: ""
                    , DonViVanChuyen: $("#input-qll-DonViVanChuyen").val()
                    , BienKiemSoat: $("#input-qll-BienKiemSoat").val()
                    , TenLaiXe: $("#input-qll-TenLaiXe").val()
                    , ChungMinhThu: $("#input-qll-ChungMinhThu").val()
                    , SoDienThoai: $("#input-qll-SoDienThoai").val()
                    , QL_NguoiTao: ""
                    , QL_ThoiGianTao: ""
                    , QL_NguoiSua: ""
                    , QL_ThoiGianSua: ""
                    , KeHoachId: item
                });
            })

            jsonData = JSON.stringify({ listThongTinVanChuyen });
            $.ajax({
                type: "POST",
                url: "QuanLyLogistics.aspx/IULogisticsThongTinVanChuyenCapNhatChuyenXeChoCacLoChuaCoBKS",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    Swal.fire({
                        title: "Đã cập nhật cho tất cả các lô được chọn!",
                        text: "",
                        type: 'success',
                        timer: 2000,
                    })
                },
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Dữ liệu chưa được lưu. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
                fncTableLogisticsView(currentKeHoachId, "-35");
                //$("#div-wait").hide();
            })
        } else {
            alert("Không có lô hàng được chọn để cập nhật");
        }

    })
}
///////////////////////////////////// \\cập nhật thông tin vận chuyển của các lô có mã kế hoạch
///////////////////////////////////// to màu ngày giao hàng
function fncToMauNgayGiaoHang(_NgayGioYeuCauGiaoHang, _NgayGioDenNhaMay, _Status, _LoaiHinhXuatNhap) { // codehere
    var date_NgayGioYeuCauGiaoHang = new Date(_NgayGioYeuCauGiaoHang);
    var date_NgayGioDenNhaMay = new Date(_NgayGioDenNhaMay);
    var date_now_20171128 = new Date();
    var span_NgayGioDenNhaMay = "";
    var color_NgayGioDenNhaMay = ">";

    if (_LoaiHinhXuatNhap == "IMP" && _Status == "7" && (date_now_20171128 - date_NgayGioDenNhaMay) / (1000 * 60 * 60) >= 5) {
        color_NgayGioDenNhaMay = "class=\"background-color-red color-white\"" + ">";
    }

    if (_LoaiHinhXuatNhap == "EXP" && (_Status == "6" || _Status == "5") && (date_now_20171128 - date_NgayGioDenNhaMay) / (1000 * 60 * 60) >= 6) {
        color_NgayGioDenNhaMay = "class=\"background-color-red color-white\"" + ">";
    }
    span_NgayGioDenNhaMay = color_NgayGioDenNhaMay + convertDate(_NgayGioDenNhaMay)[5];
    return span_NgayGioDenNhaMay;
}
///////////////////////////////////// \\to màu ngày giao hàng
///////////////////////////////////// Load thoong tin to khai
function fncLoadThongTinToKhai(iKeHoachId, iSoVanDon, iSoContainer) {
    var htmlThongTinToKhai = "";

    //$("#div-wait").show();
    // load dữ liệu
    var ajaxGet = { "get": iKeHoachId };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyLogistics.aspx/ReLogisticsThongTinToKhaiView",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            htmlThongTinToKhai = "";
            if (d.length > 0) {
                $.each(d, function (index, item) {
                    htmlThongTinToKhai += "<tr>";
                    htmlThongTinToKhai += "<td rowspan=\"2\">" + "<span class=\"cursor-pointer span-thongtintokhai-sua label label-primary\" KeHoachId=\"" + iKeHoachId + "\" ThongTinToKhaiId=\"" + item.Id + "\" SoVanDon=\"" + item.SoVanDon + "\" SoContainer=\"" + item.SoContainer + "\" >Sửa</span>"
                        + "<br><span class=\"cursor-pointer span-thongtintokhai-xoa label label-danger\" KeHoachId=\"" + iKeHoachId + "\" ThongTinToKhaiId=\"" + item.Id + "\" >Xóa</span>"
                        + "</td>";
                    htmlThongTinToKhai += "<td>" + item.SoToKhai + "</td>";
                    htmlThongTinToKhai += "<td>" + item.SoHoaDon + "</td>";
                    htmlThongTinToKhai += "<td>" + item.LoaiHinhToKhai + "</td>";
                    htmlThongTinToKhai += "<td>" + fncReLuongToKhai(item.LuongToKhai) + "</td>";
                    htmlThongTinToKhai += "<td>" + convertDate(item.NgayGioNhanYeuCau)[5] + "</td>";
                    htmlThongTinToKhai += "<td>" + convertDate(item.NgayGioDangKyToKhai)[5] + "</td>";
                    htmlThongTinToKhai += "<td>" + convertDate(item.NgayGioThongQuan)[5] + "</td>";
                    htmlThongTinToKhai += "</tr>";

                    htmlThongTinToKhai += "<tr >";
                    htmlThongTinToKhai += "<td colspan=\"7\" class=\"td-thongtincapnhat\">";
                    htmlThongTinToKhai += "<span>Người cập nhật: </span>" + "<span class=\"color-red\">" + item.QL_NguoiSua + "</span>";
                    htmlThongTinToKhai += "<span> | Thời gian cập nhật: </span>" + "<span class=\"color-red\">" + convertDate(item.QL_ThoiGianSua)[5] + "</span>";
                    htmlThongTinToKhai += "</td>";
                    htmlThongTinToKhai += "</tr>";
                })
            }

            $("#tbl-thongtintokhai-khid-" + iKeHoachId + " tbody").empty();
            $("#tbl-thongtintokhai-khid-" + iKeHoachId + " tbody").append(htmlThongTinToKhai);
        },
        error: function (responsive) {
            console.log(responsive.d);
        }
    }).done(function () {
        //$("#div-wait").hide();
    });
}
///////////////////////////////////// \\Load thong tin to khai
///////////////////////////////////// Load thảo luận
function fncLoadThaoLuan(iKeHoachId) {
    var htmlThaoLuan = "";

    //$("#div-wait").show();
    // load dữ liệu
    var ajaxGet = { "get": iKeHoachId };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyLogistics.aspx/ReLogisticsBinhLuanView",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            if (d.length > 0) {
                $.each(d, function (index, item) {
                    htmlThaoLuan += "<tr>";
                    htmlThaoLuan += "<td class=\"td-binhluan-noidung\" >" + marked(item.NoiDung)

                        + "</td>";
                    htmlThaoLuan += "<td class=\"td-binhluan-thongtin\">"
                        + "<span class=\"label label-success span-binhluan-samewidth span-binhluan-nguoitao\">" + item.QL_NguoiTao + "</span>"
                        + "<br>"

                        + "<span class=\"label label-info span-binhluan-samewidth span-binhluan-thoigiantao\">" + convertDate(item.QL_ThoiGianTao)[5] + "</span>"
                        + "<br>";
                    if (item.isEdit == "1") {
                        htmlThaoLuan += "<a class=\"a-gachduoi a-sua-binhluan\" KeHoachId=\"" + iKeHoachId + "\" BinhLuanId=\"" + item.Id + "\">Sửa</a>"
                            + "<span class=\"span-gachngang\">-</span>"
                            + "<a class=\"a-gachduoi a-xoa-binhluan\" KeHoachId=\"" + iKeHoachId + "\" BinhLuanId=\"" + item.Id + "\">Xóa</a>"

                            + "</td>";
                    }

                    htmlThaoLuan += "</tr>";
                });
            }

            htmlThaoLuan += "<tr>";
            //htmlThaoLuan += "<td class=\"td-binhluan-nguoitao\">"  + "</td>";
            htmlThaoLuan += "<td colspan=\"3\"> "
                + "<textarea id=\"textarea-binhluan-" + iKeHoachId + "\" data-provide=\"markdown\" class=\"form-control modal-textarea left-textarea-binhluan\" rows=\"3\" placeholder=\"Viết bình luận\"></textarea>"
                + "<input type=\"button\" class=\"btn btn-success \" KeHoachId=\"" + iKeHoachId + "\" id=\"btn-gui-binhluan\" value=\"Gửi\" />"
                + "</td>";
            //htmlThaoLuan += "<td class=\"td-binhluan-thoigiantao\">"  + "</td > ";

            htmlThaoLuan += "</tr>";
            $("#tbl-thaoluan-khid-" + iKeHoachId + " tbody").empty();
            $("#tbl-thaoluan-khid-" + iKeHoachId + " tbody").append(htmlThaoLuan);
            $(".left-textarea-binhluan").markdown({ autofocus: false, savable: false });
        },
        error: function (responsive) {
            console.log(responsive.d);
        }
    }).done(function () {
        //$("#div-wait").hide();
    });
}
///////////////////////////////////// \\Load thảo luận
// action show sub
function fncShowSub(_KeHoachId) {
    $(".tr-sub-" + _KeHoachId).show();
    $(".tr-sub-show").removeClass("tr-sub-show");
    $(".tr-sub-" + _KeHoachId).addClass("tr-sub-show");
    $("html,body").animate({ scrollTop: $("#tr-qll-" + _KeHoachId).offset().top - $("html,body").offset().top, scrollLeft: 0 }, 1000);
}
//
///////////////////////////////////// Load đánh giá vendor

function DanhGiaVendorClick() {
    $("#table-logistics-main").on("click", ".btn-logistics-themdanhgia", function () {
        // BEGIN AJAX LOAD
        //TODO 1.Load danh sách template đánh giá từ db
        //TODO 2.đổ dữ liệu vào modal
        //TODO 3.
        ajaxGet = { "get": "0" };
        jsonData = JSON.stringify({ ajaxGet });
        var html_danhgia_temp = "";
        //console.log($(this).attr("kehoachid"));
        $("#btn-danhgia-vendor-luu").attr("kehoachid", $(this).attr("kehoachid"));
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/LoadDanhGiaTemp",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                $.each(d, function (index, item) {
                    html_danhgia_temp += "<tr danhgia-id=\"0\" danhgia-temp-id=\"" + item.Id + "\">";
                    html_danhgia_temp += "<td class=\"td-danhgia-vendor-stt\">" + (index + 1) + "</td>";
                    html_danhgia_temp += "<td class=\"td-danhgia-vendor-noidung\">" + item.NoiDung + "</td>";
                    html_danhgia_temp += "<td class=\"td-danhgia-vendor-dat\">";
                    html_danhgia_temp += "<label class=\"radio-inline bg-success\">";
                    html_danhgia_temp += "<input type=\"radio\" name=\"inlineRadioOptions" + index + "\"   value=\"1\"> ĐẠT";
                    html_danhgia_temp += "</label>";
                    html_danhgia_temp += "<label class=\"radio-inline bg-danger\">";
                    html_danhgia_temp += "<input type=\"radio\" name=\"inlineRadioOptions" + index + "\"  value=\"0\"> KHÔNG ĐẠT";
                    html_danhgia_temp += "</label>";
                    html_danhgia_temp += "</td>";
                    html_danhgia_temp += "<td class=\"td-danhgia-vendor-ghichu\">";
                    html_danhgia_temp += "<input type=\"text\" class=\"form-control input-sm input-qll-clear \" id=\"input-danhgia-vendor-" + item.Id + "\" />";
                    html_danhgia_temp += "</td>";
                    html_danhgia_temp += "</tr>";
                })
                $("#modalDanhGiaVendor table tbody").empty();
                $("#modalDanhGiaVendor table tbody").append(html_danhgia_temp);
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD

        $("#modalDanhGiaVendor .modal-title").text("ĐÁNH GIÁ VENDOR | BILL: " + $(this).attr("sovandon") + " - CONT NO: " + $(this).attr("socontainer"));
        $("#modalDanhGiaVendor").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
    })
}

///////////////////////////////////// \\Click đánh giá vendor
/// click sửa đánh giá vendor
function SuaDanhGiaVendorClick() {
    $("#table-logistics-main").on("click", ".span-danhgiavendor-sua", function () {
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        var _danhgiavendor_kehoachid = $(this).attr("kehoachid");
        $("#btn-danhgia-vendor-luu").attr("kehoachid", _danhgiavendor_kehoachid);
        ajaxGet = { "get": _danhgiavendor_kehoachid };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/LoadDanhGia",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                var dat_checked = "";
                var khongdat_checked = "";
                var html_danhgia_temp = "";
                $.each(d, function (index, item) {
                    html_danhgia_temp += "<tr danhgia-id=\"" + item.Id + "\" danhgia-temp-id=\"" + "0" + "\">";
                    html_danhgia_temp += "<td class=\"td-danhgia-vendor-stt\">" + (index + 1) + "</td>";
                    html_danhgia_temp += "<td class=\"td-danhgia-vendor-noidung\">" + item.NoiDung + "</td>";
                    html_danhgia_temp += "<td class=\"td-danhgia-vendor-dat\">";
                    html_danhgia_temp += "<label class=\"radio-inline bg-success\">";
                    dat_checked = "checked";
                    khongdat_checked = "";
                    if (item.DanhGia == "False") {
                        dat_checked = "";
                        khongdat_checked = "checked";
                    }

                    html_danhgia_temp += "<input type=\"radio\" " + dat_checked + " name=\"inlineRadioOptions" + index + "\"   value=\"1\"> ĐẠT";
                    html_danhgia_temp += "</label>";
                    html_danhgia_temp += "<label class=\"radio-inline bg-danger\">";
                    html_danhgia_temp += "<input type=\"radio\" " + khongdat_checked + " name=\"inlineRadioOptions" + index + "\"  value=\"0\"> KHÔNG ĐẠT";
                    html_danhgia_temp += "</label>";
                    html_danhgia_temp += "</td>";
                    html_danhgia_temp += "<td class=\"td-danhgia-vendor-ghichu\">";
                    html_danhgia_temp += "<input type=\"text\" class=\"form-control input-sm input-qll-clear \" value=\"" + item.GhiChu + "\"  id=\"input-danhgia-vendor-" + item.Id + "\" />";
                    html_danhgia_temp += "</td>";
                    html_danhgia_temp += "</tr>";
                })
                $("#modalDanhGiaVendor table tbody").empty();
                $("#modalDanhGiaVendor table tbody").append(html_danhgia_temp);
                $("#modalDanhGiaVendor .modal-title").text("SỬA ĐÁNH GIÁ VENDOR | BILL: " + $("#tbl-danhgiavendor-" + _danhgiavendor_kehoachid).attr("sovandon") + " - CONT NO: " + $("#tbl-danhgiavendor-" + _danhgiavendor_kehoachid).attr("socontainer"));
                $("#modalDanhGiaVendor").modal(
                    {
                        show: true,
                        backdrop: "static",
                        keyboard: false
                    });
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    })
}
/// end click sửa đánh giá vendor
/// Lưu đánh giá vendor
function LuuDanhGiaVendorClick() {
    $("#btn-danhgia-vendor-luu").click(function () {
        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.
        var listDanhGia = [];
        var dg_kehoach_id = "";
        dg_kehoach_id = $(this).attr("kehoachid");
        $("#tbl-danhgiavendor tbody tr").each(function (index, item) {
            if ($(this).find(".td-danhgia-vendor-dat input[name=inlineRadioOptions" + index + "]:checked").val() !== undefined) {
                listDanhGia.push({
                    "Id": $(this).attr("danhgia-id"),
                    "KeHoachId": dg_kehoach_id,
                    "DanhGia_TempId": $(this).attr("danhgia-temp-id"),
                    "DanhGia": $(this).find(".td-danhgia-vendor-dat input[name=inlineRadioOptions" + index + "]:checked").val(),
                    "GhiChu": $(this).find(".td-danhgia-vendor-ghichu input").val(),
                    "NguoiTao": "",
                    "NgayTao": "",
                    "NguoiSua": "",
                    "NgaySua": "",
                });
            } else {
                Swal.fire({
                    title: "Lỗi",
                    text: "Chưa hoàn thành đánh giá",
                    type: 'error',
                })
                return false;
            }
            //console.log($(this).find(".td-danhgia-vendor-dat input[name=inlineRadioOptions" + index + "]:checked").val());
        })

        jsonData = JSON.stringify({ listDanhGia });
        //console.log(jsonData);

        $.ajax({
            type: "POST",
            url: "QuanLyLogistics.aspx/IUDanhGia",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                Swal.fire({
                    title: "Cập nhật đánh giá thành công",
                    text: "",
                    type: 'success',
                })
                fncTableLogisticsView(dg_kehoach_id, "-35");

                $("#modalDanhGiaVendor").modal("hide");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
        /// END AJAX LOAD
    })
}
///

function ReLoadKeHoachLogisticTheoNgay(ngay) {
    ajaxGet = { "get": ngay };
    JsonData = JSON.stringify({ ajaxGet });

    //console.log(JsonData);
    $.ajax({
        type: "POST",
        url: "QuanLyLogistics.aspx/ReKeHoach",
        data: JsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            var html_table_Kehoach = "";
            var html_table_Kehoach_thead = "";
            var acc_type = "";
            var dvvt_type = "";

            html_table_Kehoach_thead += " <table class=\"table table-bordered table-hover\" id =\"tbl-loctheokehoach\" >";
            html_table_Kehoach_thead += "<thead>";
            html_table_Kehoach_thead += "<tr class=\"tr-tomau-header\">";
            html_table_Kehoach_thead += "<td>NO.</td>";
            html_table_Kehoach_thead += "<td>BOOKING NO#</td>";
            html_table_Kehoach_thead += "<td>COUNT NO</td>";
            html_table_Kehoach_thead += "<td>TYPE OF";
            html_table_Kehoach_thead += "                    <br />";
            html_table_Kehoach_thead += "    COUNT</td>";
            html_table_Kehoach_thead += "<td>SEAL NO#</td>";
            html_table_Kehoach_thead += "<td>MAX";
            html_table_Kehoach_thead += "                    <br />";
            html_table_Kehoach_thead += "    GROSSTARE";
            html_table_Kehoach_thead += "                    <br />";
            html_table_Kehoach_thead += "    (KGS)</td>";
            html_table_Kehoach_thead += "<td>LOADING";
            html_table_Kehoach_thead += "                    <br />";
            html_table_Kehoach_thead += "    DATE</td>";
            html_table_Kehoach_thead += "<td>LOADING";
            html_table_Kehoach_thead += "                    <br />";
            html_table_Kehoach_thead += "    TIME</td>";
            html_table_Kehoach_thead += "<td>ACC</td>";
            html_table_Kehoach_thead += "<td>ID TRUCK</td>";
            html_table_Kehoach_thead += "<td>DRIVER NAME</td>";
            html_table_Kehoach_thead += "<td>TEL</td>";
            html_table_Kehoach_thead += "<td>GATE IN DATE</td>";
            html_table_Kehoach_thead += "<td>GATE IN TIME</td>";
            html_table_Kehoach_thead += "<td>GATE OUT DATE</td>";
            html_table_Kehoach_thead += "<td>GATE OUT TIME</td>";
            html_table_Kehoach_thead += "<td>TRUCK</td>";
            html_table_Kehoach_thead += "<td>Tuyến</td>";
            html_table_Kehoach_thead += "</tr>";
            html_table_Kehoach_thead += "</thead>";
            html_table_Kehoach_thead += " <tbody>";
            html_table_Kehoach_thead += " </tbody>";
            html_table_Kehoach_thead += "</table>";
            $(".table-appen").empty();
            $(".table-appen").append(html_table_Kehoach_thead);


            $.each(d, function (index, val) {
                //console.log(val.KhachHang);
                if (val.KhachHang == "SEV") {
                    acc_type = "sev";
                } else if (val.KhachHang == "SONHA") {
                    acc_type = "sonha";
                }
                else if (val.KhachHang == "MPL") {
                    acc_type = "mpl";
                }
                else if (val.KhachHang == "DTH") {
                    acc_type = "dth";
                }
                else if (val.KhachHang == "SMK") {
                    acc_type = "smk";
                }
                else if (val.KhachHang == "SIKA") {
                    acc_type = "sika";
                }
                else if (val.KhachHang == "EI") {
                    acc_type = "ei";
                }
                else if (val.KhachHang == "FDI") {
                    acc_type = "fdi";
                }
                else if (val.KhachHang == "PEONY") {
                    acc_type = "peony";
                }
                else if (val.KhachHang == "ATT") {
                    acc_type = "att";
                }
                else if (val.KhachHang == "SPE" || val.KhachHang == "SPICA") {
                    acc_type = "spe";
                } else if (val.KhachHang == "RAM") {
                    acc_type = "ram";
                }
                else if (val.KhachHang == "APL") {
                    acc_type = "apl";
                }
                else {
                    acc_type = "other-kh";
                }

                switch (val.DonViVanChuyen) {
                    case "FCL":
                        dvvt_type = "fcl";
                        break;
                    case "LCL":
                        dvvt_type = "lcl";
                        break;
                    case "ANP":
                        dvvt_type = "anp";
                        break;
                    case "PCF":
                        dvvt_type = "pcf";
                        break;
                    default:
                        dvvt_type = "other-vt"
                    // code block
                }

                //console.log(dvvt_type);
                html_table_Kehoach += "<tr class=\"tr-view-acc-" + acc_type + " tr-qll-view-kh tr-view-dvvt-" + dvvt_type + "\">";
                html_table_Kehoach += "<td>" + (index + 1) + "</td>";
                html_table_Kehoach += "<td>" + val.SoVanDon + "</td>";
                html_table_Kehoach += "<td>" + val.SoContainer + "</td>";
                html_table_Kehoach += "<td>" + val.KieuContainer_LoaiVanChuyen + "</td>";
                html_table_Kehoach += "<td>" + val.SoChiHangTau + "</td>";
                html_table_Kehoach += "<td>" + val.GrossTare + "</td>";
                html_table_Kehoach += "<td>" + convertDate(val.NgayGioContDenNhaMayThucTe)[1] + "</td>";
                html_table_Kehoach += "<td>" + convertDate(val.NgayGioContDenNhaMayThucTe)[3] + "</td>";
                html_table_Kehoach += "<td>" + val.KhachHang + "</td>";
                html_table_Kehoach += "<td>" + val.BienKiemSoat + "</td>";
                html_table_Kehoach += "<td>" + val.TenLaiXe + "</td>";
                html_table_Kehoach += "<td>" + val.SoDienThoai + "</td>";
                html_table_Kehoach += "<td>" + convertDate(val.NgayGioDenNhaMay)[1] + "</td>";
                html_table_Kehoach += "<td>" + convertDate(val.NgayGioDenNhaMay)[3] + "</td>";
                html_table_Kehoach += "<td>" + convertDate(val.NgayGioGiaoHang)[1] + "</td>";
                html_table_Kehoach += "<td>" + convertDate(val.NgayGioGiaoHang)[3] + "</td>";
                html_table_Kehoach += "<td>" + val.DonViVanChuyen + "</td>";
                html_table_Kehoach += "<td>" + val.KhoTraHang + "</td>";
                html_table_Kehoach += "</tr>";
            });

            $("#tbl-loctheokehoach tbody").empty();
            $("#tbl-loctheokehoach tbody").append(html_table_Kehoach);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
}

function LoadThongTinKhachHang() {
    ajaxGet = { "get": "" }
    dataJSON = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyLogistics.aspx/ReThongTinKhachHang",
        data: dataJSON,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var html_thongtinkhachhang = "";
            var html_thongtinkhachang_tbody = "";

            html_thongtinkhachhang += "<button type=\"button\" class=\"btn btn-primary btn-sm\" id=\"btn-them-kh\">Thêm khách hàng</button>";
            html_thongtinkhachhang += "<table class=\"table table-bordered\" id=\"tbl-thongtinkhachhang\">";
            html_thongtinkhachhang += "<thead>";
            html_thongtinkhachhang += "<tr>";
            html_thongtinkhachhang += "<th>STT</th>";
            html_thongtinkhachhang += "<th>Nhà máy</th>";
            html_thongtinkhachhang += "<th>Địa chỉ</th>";
            html_thongtinkhachhang += "<th>Thông tin xuất HĐ nâng hạ</th>";
            html_thongtinkhachhang += "<th>TT Xuất HĐ CSHT</th>";
            html_thongtinkhachhang += "<th>Yêu cầu đặc biệt</th>";
            html_thongtinkhachhang += "<th>Chức năng</th>";
            html_thongtinkhachhang += "</tr>";
            html_thongtinkhachhang += "</thead>";
            html_thongtinkhachhang += "<tbody>";
            html_thongtinkhachhang += "</tbody>";
            html_thongtinkhachhang += "</table>";

            var _NhaMay = "";
            var html_DiaChi = "";
            var countDiaChi = 0;
            var stt = 1;
            $.each(d, function (index, val) {

                html_thongtinkhachang_tbody += "<tr>";
                html_thongtinkhachang_tbody += "<td>" + stt + "</td>";
                html_thongtinkhachang_tbody += "<td>" + val.NhaMay + "</td>";
                html_thongtinkhachang_tbody += "<td class=\"width-300\">" + val.DiaChi + "</td>";
                html_thongtinkhachang_tbody += "<td class=\"width-300\">" + val.TTXuatHDNangHa + "</td>";
                html_thongtinkhachang_tbody += "<td>" + val.TTXuatHD_CSHT + "</td>";
                html_thongtinkhachang_tbody += "<td class=\"width-300\">" + val.YeuCauDacBiet + "</td>";
                html_thongtinkhachang_tbody += "<td><button type=\"button\" id=\"btn-update-ttkh\" updateid=\"" + val.Id + "\" class=\"btn btn-warning btn-sm\">Sửa</button>&nbsp;&nbsp;&nbsp;<button type=\"button\" id=\"btn-delete-ttkh\" deleteid=\"" + val.Id + "\" class=\"btn btn-danger btn-sm\">Xóa</button></td>";
                html_thongtinkhachang_tbody += "</tr>";

                stt++;

            });

            $("#show-thongtinkhachhang").empty();
            $("#show-thongtinkhachhang").append(html_thongtinkhachhang);

            $("#tbl-thongtinkhachhang tbody").empty();
            $("#tbl-thongtinkhachhang tbody").append(html_thongtinkhachang_tbody);



        },
        error: function () {
        }
    }).done(function () {
        $("#ModalThongTinKhacHang").modal("show");
    })
}

function fnLoadKhachHang(selectedLoaiHinh) {
    ajaxGet5 = { "get1": "", "get2": "", "get3": selectedLoaiHinh, "get4": "", "get5": "" };
    dataJSON = JSON.stringify({ ajaxGet5 });
    $.ajax({
        type: "POST",
        url: "QuanLyLogistics.aspx/ReKhacHang",
        data: dataJSON,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            $("#select-khachhang").empty();
            $("#select-khachhang").append("<option value=\"0\">--Chưa chọn--</option>");

            $.each(d, function (index, item) {
                $("#select-khachhang").append("<option value=\"" + item.KhachHang + "\">" + item.KhachHang + "</option>");
            });

        },
        error: function () {
        }
    }).done(function () {
    });
}

function fnLoadNhaCungCapVanTai(prLoaiHinhVanChuyen, prKhacHang) {
    ajaxGet5 = { "get1": "", "get2": "", "get3": prLoaiHinhVanChuyen, "get4": prKhacHang, "get5": "" };
    dataJSON = JSON.stringify({ ajaxGet5 });
    $.ajax({
        type: "POST",
        url: "QuanLyLogistics.aspx/ReNhaCungCapVanTai",
        data: dataJSON,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            $("#select-nhacungcapvantai").empty();
            $("#select-nhacungcapvantai").append("<option value=\"0\">--Chưa chọn--</option>");

            $.each(d, function (index, item) {
                $("#select-nhacungcapvantai").append("<option value=\"" + item.NhaCungCapVanTai + "\">" + item.NhaCungCapVanTai + "</option>");
            });
        },
        error: function () {
        }
    }).done(function () {
    });
}
//
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
// ProcessBar
function fncResetProcessBar() {
    $("#div-upload-process-bar").attr("style", "width:" + 0 + "%");
    $("#div-upload-process-bar").text(0 + "%");
}

function fncShowActivity(g_kehoachid) {
    $("#modalGiaoHang").attr("kehoachid", g_kehoachid);
    $("#modalGiaoHang").modal("show")
    $("#modalGiaoHang .modal-title").text("Sửa giao hàng");
    // clear input

    // load dữ liệu
    var ajaxGet = { "get": g_kehoachid };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyLogistics.aspx/ReLogisticsGiaoHangView",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            if (d.Id != null) {
                $("#modalGiaoHang").attr("giaohangid", d.Id);

                $("#input-qll-SoBienBan").val(d.SoBienBan);
                if (d.NgayGioDenNhaMay != null) {
                    $("#input-qll-NgayDenNhaMay").val(convertDate(d.NgayGioDenNhaMay)[1]);
                    $("#input-qll-GioDenNhaMay").val(convertDate(d.NgayGioDenNhaMay)[3]);
                }
                //convertDate(d.NgayGioLamGiamSatHaiQuan)[1] != '' &&
                if (d.NgayGioGiaoHang != null) {
                    $("#input-qll-NgayGiaoHang").val(convertDate(d.NgayGioGiaoHang)[1]);
                    $("#input-qll-GioGiaoHang").val(convertDate(d.NgayGioGiaoHang)[3]);
                }

                if (d.NgayGioYeuCau != null) {
                    $("#input-qll-NgayYeuCau").val(convertDate(d.NgayGioYeuCau)[1]);
                    $("#input-qll-GioYeuCau").val(convertDate(d.NgayGioYeuCau)[3]);
                }

                if (d.NgayGioDongHangXong != null) {
                    $("#input-qll-NgayDongHangXong").val(convertDate(d.NgayGioDongHangXong)[1]);
                    $("#input-qll-GioDongHangXong").val(convertDate(d.NgayGioDongHangXong)[3]);
                }

                //if (convertDate(d.NgayGioLamGiamSatHaiQuan)[1] == '') {
                //    $("#input-qll-NgayGiaoHang").attr("disable", "disable");
                //    $("#input-qll-GioGiaoHang").attr("disable", "disable");
                //}
                $("#input-qll-NguoiNhanHang").val(d.NguoiNhanHang);
                $("#input-qll-GhiChu").val(d.GhiChu);
                $("#input-qll-Thongtingiaohang").val(d.ThongTinGiaoHang);

                if (d.DuyetChungTu == "True") {
                    $("#input-qll-DuyetChungTu").prop("checked", true);
                } else {
                    $("#input-qll-DuyetChungTu").prop("checked", false);
                }

                fncLoadFileDinhKem(g_kehoachid);
            } else {
                $("#input-qll-NgayYeuCau").val(moment().format("DD/MM/YYYY"));
                $("#input-qll-GioYeuCau").val(moment().format("HH:MM"));

                $("#input-qll-NgayDenNhaMay").val(moment().format("DD/MM/YYYY"));
                $("#input-qll-GioDenNhaMay").val(moment().format("HH:MM"));

                $("#input-qll-NgayGiaoHang").val(moment().format("DD/MM/YYYY"));
                $("#input-qll-GioGiaoHang").val(moment().format("HH:MM"));

                $("#input-qll-NgayDongHangXong").val(moment().format("DD/MM/YYYY"));
                $("#input-qll-GioDongHangXong").val(moment().format("HH:MM"));
            }
        },
        error: function () {
        }
    }).done(function () {
    });
}


function fncLoadFileDinhKem(dk_kehoachId) {
    //$("#div-wait").show();
    $("#table-filedinhkem tbody").empty();
    $("#div-filedinhkem-list").append("<tr id=\"tr-filedinhkem-loading\"><td colspan=\"6\"> <img alt=\"\" src=\"images/squares.gif\" id=\"img-checklist-box-loading\"/></td> </tr>");

    ajaxGet = { "get": dk_kehoachId };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyLogistics.aspx/reFileDinhKemLogistics",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var html_filedinhkem = "";
            //console.log(d);
            $.each(d, function (item, val) {
                html_filedinhkem += "<tr filename=\"" + val.filename + "\" folder=\"" + dk_kehoachId + "\">";
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

