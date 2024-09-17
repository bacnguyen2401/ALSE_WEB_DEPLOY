var html_thead = "";
var html_tbody = "";
var html_option = "";
var html_sub_tbody = "";
var html_tbody_thuchien = "";
var ajaxGet;
var d;
var arr_date = ["01/01/1900 12:00:00 AM", "1/1/1900 12:00:00 AM", "01/01/1900 00:00:00", "1/1/1900 00:00:00"];
var datenow;
var _userid = "";
var _stt_rejump = 0;
var imgdata;
var arrTempData = {};
var fileitem = "";
var count_item = 0;

$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();
    fncModalClose();

    _userid = $("#username").attr("userid");
});

// Load data
function fncLoad() {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "TrienKhaiVanBan.aspx/reVanBan",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            html_tbody = "";
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; // Months start at 0!
            let dd = today.getDate();

            if (dd < 10) dd = '0' + dd;
            if (mm < 10) mm = '0' + mm;

            const formattedToday = mm + '/' + dd + '/' + yyyy + " " + "12:00:00 AM";

            $.each(d, function (key, val) {

                var d = new Date();
                var dtNgayTrienKhai = new Date(val.NgayTrienKhai);
                var dtNgayHieuLuc = new Date(val.NgayHieuLuc);
                var dtNgayHetHieuLuc = new Date(val.NgayHetHieuLuc);

                var dtThucTe = new Date(formattedToday);

                var textTrangThai = "Triển khai";
                var colorTrangThai = "backgroudColor-yellow"

                if ((dtNgayHieuLuc - dtThucTe) <= 0) {
                    textTrangThai = "Hiệu lực";
                    colorTrangThai = "backgroudColor-green"
                }

                if ((dtNgayHetHieuLuc - dtThucTe) <= 0) {
                    textTrangThai = "Hết hiệu lực";
                    colorTrangThai = "backgroudColor-red"
                }
                if (convertDate(val.NgayHetHieuLuc)[1] == "") {
                    textTrangThai = "Vô thời hạn";
                    colorTrangThai = "backgroudColor-pink"
                }

                html_tbody += "<tr class=\"tr-showall-khohang tr-showall-bophan tr-showall-vitri tr-khohang-" + val.KhoHang + "  tr-vitri-" + fncReplaceKyTuDacBiet(val.ViTri) + " tr-bophan-" + fncReplaceKyTuDacBiet(val.BoPhan) + "\">";
                html_tbody += "<td>" + convertDate(val.NgayTrienKhai)[1] + "</td>";
                html_tbody += "<td>" + convertDate(val.NgayHieuLuc)[1] + "</td>";
                html_tbody += "<td>" + (convertDate(val.NgayHetHieuLuc)[1] == "" ? "<span>∞</span>" : convertDate(val.NgayHetHieuLuc)[1]) + "</td>";
                html_tbody += "<td><span class=\"td-trangthai  " + colorTrangThai + "\" attrIdTrangThai=\"" + val.Id + "\">" + textTrangThai + "</span></td>";
                html_tbody += "<td class=\"text-left\">" + val.NoiDung + "</td>";
                html_tbody += "<td>" + val.KhoHang + "</td>";
                html_tbody += "<td>" + val.HangHangKhong + "</td>";
                html_tbody += "<td>" + val.ViTri + "</td>";
                html_tbody += "<td>" + val.BoPhan + "</td>";
                html_tbody += "<td>" + val.NguoiTao + "</td>";
                html_tbody += "</tr>";

                html_tbody += "<tr class=\"tr-sub-hide tr-sub-" + val.Id + "\"  >";
                html_tbody += "<td colspan=\"2\">";
                html_tbody += "<button type=\"button\" class=\"btn btn-warning btn-trienkhai-sua\" attrIdSua=\"" + val.Id + "\" attrIdNguoiTao=\"" + val.NguoiTaoID + "\">Sửa</button>";
                html_tbody += " <button type=\"button\" class=\"btn btn-danger btn-trienkhai-xoa\" attrIdXoa=\"" + val.Id + "\" attrIdNguoiTao=\"" + val.NguoiTaoID + "\">Xóa</button>";
                html_tbody += " <button type=\"button\" class=\"btn btn-success btn-trienkhai-taianh\" attrIdTaiAnh=\"" + val.Id + "\">Tải ảnh</button>";
                html_tbody += "</td> ";

                html_tbody += "<td colspan=\"7\">";
                html_tbody += "<div class=\"row\">";

                html_tbody += "<div class=\"form-group col-sm-12\">";
                html_tbody += "<table class=\"table table-bordered\">";
                html_tbody += "<tbody>";
                html_tbody += "<tr>";
                html_tbody += "<td class=\"text-left text-style\">Nội dung</td>";
                html_tbody += "<td class=\"text-left\">" + val.NoiDung + "</td>";
                html_tbody += "</tr>";
                html_tbody += "<tr>";
                html_tbody += "<td class=\"text-left text-style\">Nội dung chi tiết</td>";
                html_tbody += "<td class=\"text-left \">" + val.NoiDungChiTiet + "</td>";
                html_tbody += "</tr>";
                html_tbody += "</tbody>";
                html_tbody += "</table>";

                html_tbody += "<div id=\"left-div-filedinhkem\">";
                html_tbody += "<div style=\"float:left\">";
                html_tbody += "<span class=\"glyphicon glyphicon-paperclip color-8c8c8c activity-icon\"></span>";
                html_tbody += "<span class=\"td-bold activity-text\">Danh sách file đính kèm</span>";
                html_tbody += "</div>";
                html_tbody += "<div id=\"div-filedinhkem-list\">";
                html_tbody += "<table id=\"table-filedinhkem\" class=\"table table-bordered\">";
                html_tbody += "<thead>";
                html_tbody += "<tr>";
                html_tbody += "<td>STT</td>";
                html_tbody += "<td>Ảnh</td>";
                html_tbody += "<td>Tên File</td>";
                html_tbody += "<td>Kích Thước</td>";
                html_tbody += "<td>Tải Xuống</td>";
                html_tbody += "<td>Xóa</td>";
                html_tbody += "</tr>";
                html_tbody += "</thead>";
                html_tbody += "<tbody>";
                html_tbody += "</tbody>";
                html_tbody += "</table>";
                html_tbody += "</div>";
                html_tbody += "</div>";

                html_tbody += "</div>";
                html_tbody += "</td > ";
                html_tbody += "</tr>";
            });
            if (d.length == 0) {
                html_tbody += "<tr>";
                html_tbody += "<td colspan=\"9\"><span style=\"text-align: center;\">Không có dữ liệu</span></td>";
                html_tbody += "</tr>";
            }
            $("#tbl-trienkhai tbody").empty().append(html_tbody);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });

    /// END AJAX LOAD
}
// End load

// Click
function fncClick() {
    // Show ý nghĩa trạng thái
    $("#btn-trienkhai-ynghia").click(function () {
        $("#modalynghia").modal("show");
    })

    /// Xoad đính kèm
    $("#tbl-trienkhai").on("click", "#a-dinhkem-xoa", function () {
        if (confirm("Bạn có chắc chắn muốn xóa tài liệu này không? \r\nHành động này không thể hoàn tác! \r\nTên tài liệu: " + $(this).closest("tr").attr("filename"))) {
            //$("#div-wait").show();
            var xoa_folder = $(this).closest("tr").attr("folder");
            var ajaxGet2 = { "get1": xoa_folder, "get2": $(this).closest("tr").attr("filename") };
            jsonData = JSON.stringify({ ajaxGet2 });
            $.ajax({
                type: "POST",
                url: "TrienKhaiVanBan.aspx/DeleteFile",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    //fncModalSua($("#myModalViewThanhToan").attr("id-thanhtoan"), $("#myModalViewThanhToan").attr("loai-thanhtoan"));
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
    // Tải xuống
    $("#tbl-trienkhai").on("click", "#a-dinhkem-taixuong", function () {
        window.open("../DownloadFile.aspx?Root=TrienKhaiVanBan&Folder=" + $(this).closest("tr").attr("folder") + "&FileName=" + $(this).closest("tr").attr("filename"));
    })

    // Show modal upload
    $("#tbl-trienkhai").on("click", ".btn-trienkhai-taianh", function () {
        if (_userid != "13") {
            var Id = $(this).attr("attridtaianh");
            $("#myModalUpload").modal("show");
            $("#myModalUpload").attr("soId", Id);
        }
    });

    $("#tbl-trienkhai").on("click", ".td-trangthai", function () {
        var _IdTrangThai = $(this).attr("attrIdTrangThai");
        $(".tr-sub-show").hide();
        if (!$(".tr-sub-" + _IdTrangThai).hasClass("tr-sub-show")) {
            fncShowSub(_IdTrangThai);
        } else {
            $(".tr-sub-show").removeClass("tr-sub-show");
        }
        fncLoadFileDinhKem(_IdTrangThai);
    });

    // Xóa triển khai
    $("#tbl-trienkhai").on("click", ".btn-trienkhai-xoa", function () {
        if (_userid != "13") {
            var _IdNguoiTao = $(this).attr("attrIdNguoiTao");
            if (_IdNguoiTao === _userid || _userid === "29" || _userid === "12" || _userid === "8" || _userid === "21" || _userid === "74" || _userid === "117" || _userid === "1") {
                var conf = confirm("Bạn có muốn xóa triển khai này không ?");
                if (conf) {
                    var attrId = $(this).attr("attrIdXoa");
                    // BEGIN AJAX LOAD
                    //TODO 1.
                    //TODO 2.
                    //TODO 3.
                    ajaxGet = { "get": attrId };
                    jsonData = JSON.stringify({ ajaxGet });
                    $.ajax({
                        type: "POST",
                        url: "TrienKhaiVanBan.aspx/DeleteVanBan",
                        data: jsonData,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        async: false,
                        success: function (responsive) {
                            d = responsive.d;
                            if (d == "ok") {
                                Swal.fire({
                                    title: "Xóa triển khai thành công!",
                                    text: "",
                                    type: 'success',
                                    timer: 2000,
                                })
                                fncLoad();
                            }

                        },
                        error: function (request, status, error) {
                            console.log(request.responseText);
                        }
                    }).done(function () {
                    });
                    /// END AJAX LOAD
                }
            } else {
                alert("Bạn không có quyền sửa lỗi này vui lòng liên hệ trực ca!")
            }
        }
    });
    // show triển khai sửa
    $("#tbl-trienkhai").on("click", ".btn-trienkhai-sua", function () {
        if (_userid != "13") {
            var _IdNguoiTao = $(this).attr("attrIdNguoiTao");
            if (_IdNguoiTao === _userid || _userid === "29" || _userid === "12" || _userid === "8" || _userid === "21" || _userid === "74" || _userid === "117" || _userid === "1") {
                fncLoadHangHangKhong();
                var attrId = $(this).attr("attrIdSua");

                // BEGIN AJAX LOAD
                //TODO 1.
                //TODO 2.
                //TODO 3.
                ajaxGet = { "get": attrId };
                jsonData = JSON.stringify({ ajaxGet });
                $.ajax({
                    type: "POST",
                    url: "TrienKhaiVanBan.aspx/reVanBan",
                    data: jsonData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    success: function (responsive) {
                        d = responsive.d;
                        $("#myModalViewTrienKhai").modal("show");

                        $("#select-trienkhai-khohang").val(d[0].KhoHang).change();
                        $("#select-trienkhai-bophan").val(d[0].BoPhan).change();
                        $("#select-trienkhai-vitri").val(d[0].ViTri).change();

                        $("#textarea-noidung").val(d[0].NoiDung.replace(/<\/br>/g, "\n"));
                        $("#textarea-noidungchitiet").val(d[0].NoiDungChiTiet.replace(/<\/br>/g, "\n"));
                        $("#btn-trienkhai-luu").attr("trienkhai-id", attrId);
                        $("#input-trienkhai-ngaytrienkhai").val(convertDate(d[0].NgayTrienKhai)[1]);
                        $("#input-trienkhai-ngayhieuluc").val(convertDate(d[0].NgayHieuLuc)[1]);
                        $("#input-trienkhai-ngayhethieuluc").val(convertDate(d[0].NgayHetHieuLuc)[1]);
                    },
                    error: function (request, status, error) {
                        console.log(request.responseText);
                    }
                }).done(function () {
                });
                /// END AJAX LOAD
            } else {
                alert("Bạn không có quyền sửa lỗi này vui lòng liên hệ trực ca!")
            }
        }
    });

    // btn Lưu và Update
    $("#btn-trienkhai-luu").click(function () {
        vanBan = {
            "Id": $(this).attr("trienkhai-id"),
            "KhoHang": $("#select-trienkhai-khohang").val(),
            "HangHangKhong": $("#select-trienkhai-hanghangkhong").val(),
            "ViTri": $("#select-trienkhai-vitri").val(),
            "BoPhan": $("#select-trienkhai-bophan").val(),
            "NgayTrienKhai": dmy2ymd($("#input-trienkhai-ngaytrienkhai").val()),
            "NgayHieuLuc": dmy2ymd($("#input-trienkhai-ngayhieuluc").val()),
            "NgayHetHieuLuc": dmy2ymd($("#input-trienkhai-ngayhethieuluc").val()),
            "NoiDung": ($("#textarea-noidung").val()).replace(/\n/g, "</br>"),
            "NoiDungChiTiet": ($("#textarea-noidungchitiet").val()).replace(/\n/g, "</br>"),
            "PhanLoai": "",
            "HienThi": "",
            "NguoiTaoSua": "",
            "NguoiTaoSua": ""
        }
        if (($("#textarea-noidung").val()).replace(/\n/g, "</br>").trim() == "" || ($("#textarea-noidungchitiet").val()).replace(/\n/g, "</br>") == "") {
            Swal.fire({
                title: "ERROR!!!!",
                text: "Nội dung không được để trống",
                icon: "error",
            });
        } else {
            jsonData = JSON.stringify({ vanBan });
            $.ajax({
                type: "POST",
                url: "TrienKhaiVanBan.aspx/IUVanBan",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    fncLoad();
                    $("#myModalViewTrienKhai").modal("hide");
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
        }
    });

    $("#btn-trienkhai-them").click(function () {
        if (_userid != "13") {
            fncLoadDate();
            fncLoadHangHangKhong();
            $("#myModalViewTrienKhai").modal("show");
        }
    })
}
// End Click

// Change
function fncChange() {
    // Change Upload Image
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

    //Click upload ảnh và file
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
            imgdata.append("folder", $("#myModalUpload").attr("soid"));
            imgdata.append("root", "TrienKhaiVanBan");
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
                            fncLoad();
                            $("#myModalUpload").modal("hide");
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
            fncLoad();
        }
    })
    //end
    // Delete all ảnh
    $("#myModalUpload").on("click", "#a-upload-delete-all", function () {
        arrTempData = {};
        $("#tbl-upload-imgzone tbody tr").remove();
        fncResetProcessBar();
    })
    //end

    // Check change table 
    $("#cb-all-khohang").change(function () {
        $(".cb-khohang-child").prop("checked", $(this).prop("checked"))

        if ($(this).prop("checked")) {
            $(".tr-showall-khohang").show();
        } else {
            $(".tr-showall-khohang").hide();
        }
    });

    $(".cb-khohang-child").change(function () {
        var checkedAll = $('input[name="khohangCount"]:checked').length === $(".cb-khohang-child").length;
        $("#cb-all-khohang").prop("checked", checkedAll)
        if ($(this).prop("checked")) {
            $(".tr-khohang-" + $(this).val() + "").show();
        } else {
            $(".tr-khohang-" + $(this).val() + "").hide();
        }

    });

    $("#cb-all-vitri").change(function () {
        $(".cb-vitri-child").prop("checked", $(this).prop("checked"));

        if ($(this).prop("checked")) {
            $(".tr-showall-vitri").show();
        } else {
            $(".tr-showall-vitri").hide();
        }

    });

    $(".cb-vitri-child").change(function () {
        var checkedAll = $('input[name="vitriCount"]:checked').length === $(".cb-vitri-child").length;
        $("#cb-all-vitri").prop("checked", checkedAll);

        if ($(this).prop("checked")) {
            $(".tr-vitri-" + $(this).val() + "").show();
        } else {
            $(".tr-vitri-" + $(this).val() + "").hide();
        }
    });


    $("#cb-all-bophan").change(function () {
        $(".cb-bophan-child").prop("checked", $(this).prop("checked"));

        if ($(this).prop("checked")) {
            $(".tr-showall-bophan").show();
        } else {
            $(".tr-showall-bophan").hide();
        }
    });

    $(".cb-bophan-child").change(function () {
        var checkedAll = $('input[name="bophanCount"]:checked').length === $(".cb-bophan-child").length;
        $("#cb-all-bophan").prop("checked", checkedAll);

        if ($(this).prop("checked")) {
            $(".tr-bophan-" + $(this).val() + "").show();
        } else {
            $(".tr-bophan-" + $(this).val() + "").hide();
        }
    });

}
// End Change

// Modal Close
function fncModalClose() {
    $("#myModalViewTrienKhai").on('hidden.bs.modal', function () {
        $("#select-trienkhai-khohang").val("ALL");
        $("#select-trienkhai-bophan").val("ALL");
        $("#select-trienkhai-vitri").val("ALL");
        $("#textarea-noidung").val("");
        $("#textarea-noidungchitiet").val("");
        $("#btn-trienkhai-luu").attr("trienkhai-id", "0");
    })

    $("#myModalUpload").on('hidden.bs.modal', function () {
        $("#tbl-upload-imgzone tbody").empty();
    })
}
// End Modal Close

// LoadDate 
function fncLoadDate() {
    $("#input-trienkhai-ngaytrienkhai").datepicker("setDate", new Date());
    $("#input-trienkhai-ngayhieuluc").datepicker("setDate", new Date());
    $("#input-trienkhai-ngayhethieuluc").datepicker("setDate", new Date());
}
// End loaddate

// action show sub
function fncShowSub(_Id) {
    $(".tr-sub-" + _Id).show();
    $(".tr-sub-show").removeClass("tr-sub-show");
    $(".tr-sub-" + _Id).addClass("tr-sub-show");
}
//
function fncLoadHangHangKhong() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "TrienKhaiVanBan.aspx/reHangHangKhong",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            html_option = "";
            html_option += "<option value=\"ALL\">ALL</option>"
            $.each(d, function (key, val) {
                html_option += "<option value=\"" + val.Airlines + "\">" + val.Airlines + "</option>"
            });
            $("#select-trienkhai-hanghangkhong").empty().append(html_option);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}

// function ProcessBar
function fncResetProcessBar() {
    $("#div-upload-process-bar").attr("style", "width:" + 0 + "%");
    $("#div-upload-process-bar").text(0 + "%");
}

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
// Show file đính kèm
function fncLoadFileDinhKem(Id) {
    //$("#div-wait").show();
    $("#table-filedinhkem tbody").empty();
    $("#div-filedinhkem-list").append("<tr id=\"tr-filedinhkem-loading\"><td colspan=\"6\"> <img alt=\"\" src=\"images/squares.gif\" id=\"img-checklist-box-loading\"/></td> </tr>");

    ajaxGet = { "get": Id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "TrienKhaiVanBan.aspx/reFileDinhKemDGR",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var html_filedinhkem = "";
            //console.log(d);
            $.each(d, function (item, val) {
                html_filedinhkem += "<tr filename=\"" + val.filename + "\" folder=\"" + Id + "\">";
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

