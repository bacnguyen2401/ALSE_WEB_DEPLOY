var ajaxGet;
var ajaxGet2;
var jsonData;
var html_head = "";
var html_body = "";
var iUGiaoDOC = {};
var iUGiaoDOCs = [];
var imgdata;
var arrTempData = {};
var fileitem = "";
var count_item = 0;
var jsonYNghiaTrangThai = {};

$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();
    fncShowHideModal();

    //const textarea = document.getElementById('myTextarea');

    //textarea.addEventListener('input', autoResize);

    //function autoResize() {
    //    this.style.height = 'auto';  // Reset chiều cao
    //    this.style.height = this.scrollHeight + 'px';  // Đặt chiều cao bằng với nội dung
    //}
});

function fncLoad() {
    fncLoadGiaoDOC();

    jsonYNghiaTrangThai = {
        "sotrangthai": 4,
        "trangthai1": {
            "tentrangthai": "VSIP nhận DOC",
            "anh": "images/pre-accept.png",
            "ynghia": "Hiển thị những lô hàng được được tài liệu nhận DOC.",
            "dieukien": "Những lô hàng mà có giờ hạ cánh sau 14h ngày hôm nay.\nHoặc những lô có Ngày giờ giao hàng trong khoảng trước ngày hiện tại hoặc  trước khi đến ngày hiện tại hơn 24h."
        },
        "trangthai2": {
            "tentrangthai": "VSIP giao xe",
            "anh": "images/lorrygreen.png",
            "ynghia": "Hiển thị những lô hàng được đưa cho lái xe gửi lên Nội Bài.",
            "dieukien": "Những lô hàng mà có giờ hạ cánh trước 14h ngày hôm nay.\nHoặc những lô có Ngày giờ giao hàng trong khoảng sau ngày hiện tại hoặc trước khi đến ngày hiện tại dưới 24h."
        },
        "trangthai3": {
            "tentrangthai": "NBA nhận DOC",
            "anh": "images/hoanthanhhaiquan.png",
            "ynghia": "Hiển thị những DOC đã về đến Nội bài và nhân viên Nội Bài nhận.",
            "dieukien": "Những lô hàng đã về đến Nội bài và kho hàng đã truyển DSVCMĐ( bill) về.."
        },
        "trangthai4": {
            "tentrangthai": "NBA giao DOC Airline",
            "anh": "images/falcon.png",
            "ynghia": "Hiển thị những lô hàng đã được nhân viên Nội bài gửi Airline.",
            "dieukien": "Những lô hàng mà được ghép vào chuyến xe và thực hiện khai báo  TK OLA. "
        },
    };

}

function fncClick() {
    // Click sửa NBA
    $("#tbl-trangthai-giaodoc").on("click", ".btn-sua-nba", function () {
        var _mawbsuanba = $(this).attr("attrMawb");
        var _bks = $(this).attr("attrBKS");
        var _thongtintheoxe = $(this).attr("attrThongTin");
        $("#ModalVsipChuyenNBADOC").modal({
            show: true,
            backdrop: false
        });
        $("#ngayVsipgiaoNBA").val(moment().format("DD/MM/YYYY"));
        $("#gioVsipgiaoNBA").val(moment().format("hh:mm"));
        $("#bks-vsipgiaonba").val(_bks);
        $("#vsipgiaodocNBA").val(_mawbsuanba);
        $("#thongtintheoxe").val(_thongtintheoxe);
    });

    // Click sửa vsip
    $("#tbl-trangthai-giaodoc").on("click", ".btn-sua-vsip", function () {
        var _mawbsuavsip = $(this).attr("attrMawb");
        var _ngaygiosuavsip = $(this).attr("attrNgayGio");
        $("#ModalVsipNhanDOC").modal({
            show: true,
            backdrop: false
        });
        $("#ngayNhanDOCVSIP").val(moment().format("DD/MM/YYYY"));
        $("#gioNhanDOCVSIP").val(moment().format("hh:mm"));
        $("#nhandocvsipMawb").val(_mawbsuavsip);
        $(".tbl-vsip-nhan-doc").attr("Id", "1");
    });

    // Hiển thị ý nghĩa 
    $(".btn-ynghia-doc").click(function () {
        $("#h4-thanhtoan-view-tieude").text("Ý NGHĨA TRẠNG THÁI");
        $("#tbl-help thead").empty();
        $("#tbl-help tbody").empty();
        html_help_thead = "";
        html_help_tbody = "";
        html_help_thead += "<tr>";
        html_help_thead += "<td>" + "STT" + "</td>";
        html_help_thead += "<td>" + "Trạng thái" + "</td>";
        html_help_thead += "<td>" + "Tên trạng thái" + "</td>";
        html_help_thead += "<td>" + "Ý nghĩa trạng thái" + "</td>";
        //html_help_thead += "<td>" + "Điều kiện" + "</td>";
        html_help_thead += "</tr>";
        for (var i = 1; i <= jsonYNghiaTrangThai.sotrangthai; i++) {
            html_help_tbody += "<tr>";
            html_help_tbody += "<td>" + i + "</td>";
            html_help_tbody += "<td class=\"text-align-left td-img\">" + "<img src=\"" + jsonYNghiaTrangThai["trangthai" + i].anh + "\"  />" + "</td>"; //+ jsonYNghiaTrangThai["trangthai" + i].tentrangthai 
            html_help_tbody += "<td class=\"text-align-left\">" + jsonYNghiaTrangThai["trangthai" + i].tentrangthai + "</td>";
            html_help_tbody += "<td class=\"text-align-left\">" + jsonYNghiaTrangThai["trangthai" + i].ynghia + "</td>";
            //html_help_tbody += "<td class=\"text-align-left\">" + jsonYNghiaTrangThai["trangthai" + i].dieukien + "</td>";
            html_help_tbody += "</tr>";
        }
        $("#tbl-help thead").append(html_help_thead);
        $("#tbl-help tbody").append(html_help_tbody);
        $("#myModalViewHelp").modal({
            show: true,
            backdrop: false
        });
    })

    //Click  xem ảnh
    $(".btn-xemanh").click(function () {
        var _mawb = $("#input-mawb").val();
        if (_mawb == "") {
            Swal.fire({
                title: "Vui lòng nhập MAWB để xem ảnh!",
                text: "",
                type: 'warning',
                timer: 5000,
            });
        } else {
            $("#ModalShowAnh").modal({
                show: true,
                backdrop: false
            });
            $("#ModalTraCuuDOC").modal("hide");
            fncLoadFileDinhKem(_mawb);
        }
    });

    $(".btn-tracuu").click(function () {
        var _mawb = $("#input-mawb").val();
        loadTraCuuDOC(_mawb);
    });

    // show modal tra cứu Doc
    $(".btn-tracuu-doc").click(function () {
        $("#ModalTraCuuDOC").modal({
            show: true,
            backdrop: false
        });
    });

    // Xem ảnh
    $("#tbl-trangthai-giaodoc").on("click", ".span-xemanh-giaodoc", function () {
        $("#ModalShowAnh").modal({
            show: true,
            backdrop: false
        });
        fncLoadFileDinhKem($(this).attr("attrmawb"));
    });

    $("#ModalShowAnh").on("click", "#a-dinhkem-taixuong", function () {
        window.open("../DownloadFile.aspx?Root=DOC&Folder=" + $(this).closest("tr").attr("folder") + "&FileName=" + $(this).closest("tr").attr("filename"));
    })

    $("#ModalShowAnh").on("click", "#a-dinhkem-xoa", function () {
        if (confirm("Bạn có chắc chắn muốn xóa ảnh này không? \r\nHành động này không thể hoàn tác! \r\nTên ảnh: " + $(this).closest("tr").attr("filename"))) {
            //$("#div-wait").show();
            var xoa_folder = $(this).closest("tr").attr("folder");
            var ajaxGet2 = { "get1": xoa_folder, "get2": $(this).closest("tr").attr("filename") };
            jsonData = JSON.stringify({ ajaxGet2 });
            $.ajax({
                type: "POST",
                url: "QuanLyGiaoNhanDOC.aspx/DeleteFile",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    alert(d);
                    fncLoadFileDinhKem(xoa_folder);
                },
                error: function () {
                    alert("Đã có lỗi trong quá trình xóa file!\r\nVui lòng tải lại trang(F5)!\r\nNếu sự cố lặp lại xin liên hệ nhân viên IT");
                }
            }).done(function () {
                //$("#div-wait").hide();
            })
        }
    })

    // Lưu thông tin NBA nhận DOC theo BKS
    $(".tbl-nba-nhan-doc").click(function () {
        var _bksXe = $(this).attr("attrBKS");
        var _NgayGioXeNhanDOC = $(this).attr("attrNgayGio");

        ajaxGet2 = { "get1": _bksXe, "get2": dmyhhsstoymdhhss(_NgayGioXeNhanDOC) };
        jsonData = JSON.stringify({ ajaxGet2 });
        $.ajax({
            type: "POST",
            url: "QuanLyGiaoNhanDOC.aspx/UNBANhanDOC",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "ok") {
                    Swal.fire({
                        title: "Cập nhật thông tin NBA nhận DOC từ lái xe thành công!",
                        text: "",
                        type: 'success',
                        timer: 5000,
                    });
                    fncLoadBKSXeGiaoDOC();
                    $(".tbl_show_mawb_xe tbody").empty();
                    fncLoadGiaoDOC();
                }
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
    });

    // Click bks show hiển thị số mawb trong xe đó
    $("#ModalNBANhanDOC").on("click", ".tbl-show-xe-giao tbody tr", function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        var _bksXe = $(this).find('td:first').html();
        var _NgayGioXeNhanDOC = $(this).find('td').eq(1).html();
        $(".tbl-nba-nhan-doc").attr("attrBKS", _bksXe)
        $(".tbl-nba-nhan-doc").attr("attrNgayGio", _NgayGioXeNhanDOC)

        ajaxGet2 = { "get1": _bksXe, "get2": dmyhhsstoymdhhss(_NgayGioXeNhanDOC) };
        jsonData = JSON.stringify({ ajaxGet2 });
        $.ajax({
            type: "POST",
            url: "QuanLyGiaoNhanDOC.aspx/reMawbByBKS",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d)
                html_body = "";
                $.each(d, function (key, val) {
                    html_body += "<tr>";
                    html_body += "<td>" + val.Mawb + "</td>";
                    html_body += "</tr>";
                });
                $(".tbl_show_mawb_xe tbody").empty().append(html_body);
                $("#thongtinview").val(d[0].ThongTinTheoXe);
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
        });
    });

    // Lưu thông tin vsip giao doc lái xe
    $(".tbl-vsip-giao-doc-nba").click(function () {
        var _mawb = $("#vsipgiaodocNBA").val();
        var _ngayvsipgiaolaixe = $("#ngayVsipgiaoNBA").val();
        var _giovsipgiaolaixe = $("#gioVsipgiaoNBA").val();
        var _bks = $("#bks-vsipgiaonba").val();
        var _thongtin = $("#thongtintheoxe").val();

        if (_ngayvsipgiaolaixe == "" || _giovsipgiaolaixe == "" || _mawb == "" || _bks == "") {
            Swal.fire({
                title: "Các trường thông tin cần nhập đầu đủ!",
                text: "",
                type: 'warning',
                timer: 5000,
            })
        } else {
            iUGiaoDOCs = [];
            var _mawbSplit = _mawb.split(" ");
            for (var i = 0; i < _mawbSplit.length; i++) {
                iUGiaoDOC = {
                    Id: "",
                    Mawb: _mawbSplit[i].substring(0, 11),
                    NVVsipNhanDOC: "",
                    VsipNhanDOC: "",
                    ThoiGianNhanDocVsip: "",
                    BKSXeGiaoDOC: _bks,
                    NVVsipGiaoDOCXe: "",
                    XeGiaoDOC: "",
                    ThoiGianXeGiaoDOC: dmy2ymd(_ngayvsipgiaolaixe) + " " + _giovsipgiaolaixe,
                    NVNBANhanDOC: "",
                    NBANhanDOC: "",
                    ThoiGianNhanDOCNBA: "",
                    NBAGiaoAirlineDOC: "",
                    AirlineNhanDOC: "",
                    ThoiGianNhanDOCAirline: "",
                    UpAnh: "",
                    ThongTinTheoXe: _thongtin
                }
                iUGiaoDOCs.push(iUGiaoDOC);
            }

            jsonData = JSON.stringify({ iUGiaoDOCs });
            //console.log(jsonData)
            $.ajax({
                type: "POST",
                url: "QuanLyGiaoNhanDOC.aspx/IUVSIPGiaoXe",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    console.log(d)
                    if (d == "ok") {
                        Swal.fire({
                            title: "Cập nhật thông tin VSIP giao lái xe  thành công!",
                            text: "",
                            type: 'success',
                            timer: 5000,
                        });
                        $("#ModalVsipChuyenNBADOC").modal("hide");
                        fncLoadGiaoDOC();
                    }
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
        }
    });

    // Lưu thông tin vsip nhận DOC
    $(".tbl-vsip-nhan-doc").click(function () {
        var _mawb = $("#nhandocvsipMawb").val();
        var _ngaygiaovsip = $("#ngayNhanDOCVSIP").val();
        var _giogiaovsip = $("#gioNhanDOCVSIP").val();
        var Id = $(this).attr("attrId");
        //console.log(_ngaygiaovsip)
        //console.log(_giogiaovsip)
        if (_ngaygiaovsip == "" || _giogiaovsip == "" || _mawb == "") {
            Swal.fire({
                title: "Các trường thông tin cần nhập đầu đủ!",
                text: "",
                type: 'warning',
                timer: 5000,
            })
        } else {
            iUGiaoDOCs = [];
            var _mawbSplit = _mawb.split(" ");
            for (var i = 0; i < _mawbSplit.length; i++) {
                iUGiaoDOC = {
                    Id: Id,
                    Mawb: _mawbSplit[i].substring(0, 11),
                    NVVsipNhanDOC: "",
                    VsipNhanDOC: "",
                    ThoiGianNhanDocVsip: dmy2ymd(_ngaygiaovsip) + " " + _giogiaovsip,
                    BKSXeGiaoDOC: "",
                    NVVsipGiaoDOCXe: "",
                    XeGiaoDOC: "",
                    ThoiGianXeGiaoDOC: "",
                    NVNBANhanDOC: "",
                    NBANhanDOC: "",
                    ThoiGianNhanDOCNBA: "",
                    NBAGiaoAirlineDOC: "",
                    AirlineNhanDOC: "",
                    ThoiGianNhanDOCAirline: "",
                    UpAnh: "",
                }
                iUGiaoDOCs.push(iUGiaoDOC);
            }

            //console.log(iUGiaoDOCs)
            console.log(JSON.stringify({ iUGiaoDOCs }));
            jsonData = JSON.stringify({ iUGiaoDOCs });
            $.ajax({
                type: "POST",
                url: "QuanLyGiaoNhanDOC.aspx/IUGiaoDocVsip",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    console.log(d);
                    if (d == "ok") {
                        Swal.fire({
                            title: "Cập nhật thông tin giao DOC VSIP thành công!",
                            text: "",
                            type: 'success',
                            timer: 5000,
                        });
                        $("#ModalVsipNhanDOC").modal("hide");
                        fncLoadGiaoDOC();
                    }
                },
                error: function (request, status, error) {

                }
            }).done(function () {
            });
        }
    });

    // click show modal 
    $(".btn-vsip-nhan").click(function () {
        $("#ngayNhanDOCVSIP").val(moment().format("DD/MM/YYYY"));
        $("#gioNhanDOCVSIP").val(moment().format("hh:mm"));
        $(".tbl-vsip-nhan-doc").attr("Id", "0");
        $("#ModalVsipNhanDOC").modal({
            show: true,
            backdrop: false
        });
    });

    $(".btn-vsip-giao-nba").click(function () {
        $("#ngayVsipgiaoNBA").val(moment().format("DD/MM/YYYY"));
        $("#gioVsipgiaoNBA").val(moment().format("hh:mm"));
        $("#ModalVsipChuyenNBADOC").modal({
            show: true,
            backdrop: false
        });
    });

    $(".btn-nba-nhan-doc").click(function () {
        $("#ModalNBANhanDOC").modal({
            show: true,
            backdrop: false
        });
        fncLoadBKSXeGiaoDOC();
    });
    // Upload ảnh airline
    $("#tbl-trangthai-giaodoc").on("click", ".btn-uploadanh", function () {
        var _mawb = $(this).attr("attrMawb");
        $("#myModalUpload").modal("show");
        $("#myModalUpload").attr("mawb", _mawb);
        $("#span-upload-tilte").empty().append(_mawb);

    });

    $("#myModalUpload").on("click", "#a-upload-delete-all", function () {
        arrTempData = {};
        $("#tbl-upload-imgzone tbody tr").remove();
        fncResetProcessBar();
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
            imgdata.append("root", "DOC");
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
                ajaxGet = { "get": $("#myModalUpload").attr("mawb") };
                jsonData = JSON.stringify({ ajaxGet });
                $.ajax({
                    type: "POST",
                    url: "QuanLyGiaoNhanDOC.aspx/IUGiaoDOCAirLine",
                    data: jsonData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    success: function (responsive) {
                        d = responsive.d;
                        console.log(d)
                        if (d == "ok") {
                            Swal.fire({
                                title: "Cập nhật thông tin NBA giao DOC cho Airline thành công!",
                                text: "",
                                type: 'success',
                                timer: 5000,
                            });
                            fncResetProcessBar();
                        }
                    },
                    error: function (request, status, error) {
                        console.log(request.responseText);
                    }
                }).done(function () {
                });

            })
        } else {
            fncResetProcessBar();
            alert("Ảnh đã được upload!");
        }
    })
}

function fncChange() {
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
}

// View hiển thị thông tin giao doc
function fncLoadGiaoDOC() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyGiaoNhanDOC.aspx/reGiaoDoc",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            html_head = "";
            html_body = "";
            html_head += "<tr>";
            html_head += "<td>STT</td>";
            html_head += "<td>Trạng thái DOC</td>";
            html_head += "<td>MAWB</td>";
            html_head += "<td>Ngày bay</td>";
            html_head += "<td>VSIP nhận DOC</td>";
            html_head += "<td>Thời gian VSIP nhận</td>";
            html_head += "<td>NBA nhận DOC</td>";
            html_head += "<td>Thời gian NBA nhận</td>";
            html_head += "<td>NBA giao Airline</td>";
            html_head += "<td>Thời gian Airline nhận</td>";
            html_head += "<td>Chức năng</td>";
            html_head += "</tr>";
            var _trangthai = "";

            $.each(d, function (key, val) {
                _trangthai = "";
                if (val.VsipNhanDOC == "True") {
                    _trangthai = "<img src=\"images/pre-accept.png\">";
                }

                if (val.XeGiaoDOC == "True") {
                    _trangthai = "<img src=\"images/lorrygreen.png\">";
                }

                if (val.NBANhanDOC == "True") {
                    _trangthai = "<img src=\"images/hoanthanhhaiquan.png\">";
                }

                if (val.AirlineNhanDOC == "True") {
                    _trangthai = "<img src=\"images/falcon.png\">";
                }

                html_body += "<tr>";
                html_body += "<td>" + (key + 1) + "</td>";
                html_body += "<td><span style=\"color:red\">" + _trangthai + " " + (val.AirlineNhanDOC == "True" ? " <span class=\"cursor-pointer span-xemanh-giaodoc label label-primary\" attrMawb=\"" + val.mawb + "\">Xem ảnh</span>" : "") + "</span></td>";
                html_body += "<td>" + val.mawb + " <br/> <span style=\"color:red; font-size:16px\">" + val.BKSXeGiaoDOC + "</span></td>";
                html_body += "<td>" + convertDate(val.flightDateTime)[5] + "</td>";
                html_body += "<td>" + val.NVVsipNhanDOC + "</td>";
                html_body += "<td>" + convertDate(val.ThoiGianNhanDocVsip)[5] + "</td>";
                html_body += "<td>" + val.NVNBANhanDOC + "</td>";
                html_body += "<td>" + convertDate(val.ThoiGianNhanDOCNBA)[5] + "</td>";
                html_body += "<td>" + (val.AirlineNhanDOC === "" || val.AirlineNhanDOC === "False" ? "<button type=\"button\" class=\"btn btn-sm btn-info btn-uploadanh\" attrMawb=\"" + val.mawb + "\">Up ảnh</button>" : val.NBAGiaoAirlineDOC) + "</td>";
                html_body += "<td>" + convertDate(val.ThoiGianNhanDOCAirline)[5] + "</td>";
                html_body += "<td><button type=\"button\" attrThongTin=\"" + val.ThongTinTheoXe + "\" attrMawb=\"" + val.mawb + "\" attrNgayGio=\"" + convertDate(val.flightDateTime)[5] + "\" class=\"btn btn-sm btn-primary btn-sua-vsip\">Sửa Vsip</button>  <button type=\"button\" attrThongTin=\"" + val.ThongTinTheoXe + "\"  attrBKS=\"" + val.BKSXeGiaoDOC + "\"  attrMawb=\"" + val.mawb + "\" attrNgayGio=\"" + val.flightDateTime + "\" class=\"btn btn-sm btn-success btn-sua-nba\">Sửa NBA</button></td>";
                html_body += "</tr>";
            })

            $("#tbl-trangthai-giaodoc thead").empty().append(html_head);
            $("#tbl-trangthai-giaodoc tbody").empty().append(html_body);

            if (!$.fn.dataTable.isDataTable('#tbl-trangthai-giaodoc')) {
                $('#tbl-trangthai-giaodoc').DataTable({
                    paging: false
                });
            }
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
}
// View BKS xe giao DOC
function fncLoadBKSXeGiaoDOC() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyGiaoNhanDOC.aspx/listBKSXe",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            html_body = "";
            $.each(d, function (key, val) {
                html_body += "<tr>";
                html_body += "<td>" + val.BKSXeGiaoDOC + "</td>";
                html_body += "<td>" + convertDate(val.ThoiGianXeGiaoDOC)[5] + "</td>";
                html_body += "</tr>";
            });
            $(".tbl-show-xe-giao tbody").empty().append(html_body);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
}

// Show Hide Modal
function fncShowHideModal() {
    $('#ModalVsipNhanDOC').on('hide.bs.modal', function () {
        $('#nhandocvsipMawb').val("");
        $('#ngayNhanDOCVSIP').val("");
        $('#gioNhanDOCVSIP').val("");
    });

    $('#ModalVsipChuyenNBADOC').on('hide.bs.modal', function () {
        $('#bks-vsipgiaonba').val("");
        $('#ngayVsipgiaoNBA').val("");
        $('#gioVsipgiaoNBA').val("");
        $('#vsipgiaodocNBA').val("");
        $('#thongtintheoxe').val("");
    });

    $('#ModalNBANhanDOC').on('hide.bs.modal', function () {
        $('.tbl_show_mawb_xe tbody').empty();
        $('#thongtinview').val("");
    });

    $("#myModalUpload").on('hidden.bs.modal', function () {
        $("#tbl-upload-imgzone tbody").empty();
        fncLoadGiaoDOC();
    });

    $('#ModalTraCuuDOC').on('shown.bs.modal', function () {
        $('#input-mawb').val("");
        $("#table-tracuudoc tbody").empty();
    });

    $('#ModalShowAnh').on('hide.bs.modal', function () {
        //$("#ModalShowAnh").modal("hide");
        //$("#ModalTraCuuDOC").modal("show");
    });
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

function fncLoadFileDinhKem(dk_mawb) {
    //$("#div-wait").show();
    $("#table-filedinhkem tbody").empty();
    $("#div-filedinhkem-list").append("<tr id=\"tr-filedinhkem-loading\"><td colspan=\"6\"> <img alt=\"\" src=\"images/squares.gif\" id=\"img-checklist-box-loading\"/></td> </tr>");

    ajaxGet = { "get": dk_mawb };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyGiaoNhanDOC.aspx/reFileDinhKemDOC",
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

function loadTraCuuDOC(dk_mawb) {
    ajaxGet = { "get": dk_mawb };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyGiaoNhanDOC.aspx/reTraCuuDoc",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            if (d.mawb == null) {
                html_body = "";
                html_body += "<tr>";
                html_body += "<td colspan=\"5\">Không có thông tin</td>";
                html_body += "</tr>";
            } else {
                html_body = "";
                html_body += "<tr>";
                html_body += "<td>" + d.mawb + "</td>";
                html_body += "<td>" + (d.VsipNhanDOC == "True" ? "<i class=\"fas fa-check-circle text-success\"></i>" : "") + "</td>";
                html_body += "<td>" + (d.XeGiaoDOC == "True" ? "<i class=\"fas fa-check-circle text-success\"></i>" : "") + "</td>";
                html_body += "<td>" + (d.NBANhanDOC == "True" ? "<i class=\"fas fa-check-circle text-success\"></i>" : "") + "</td>";
                html_body += "<td>" + (d.AirlineNhanDOC == "True" ? "<i class=\"fas fa-check-circle text-success\"></i>" : "") + "</td>";
                html_body += "</tr>";
            }
            $("#table-tracuudoc tbody").empty().append(html_body);
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }
    }).done(function () {
        //$("#div-wait").hide();
    })
}

function onKeyUpInput(input) {

}