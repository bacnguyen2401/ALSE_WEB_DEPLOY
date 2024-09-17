var ajaxGet;
var ajaxGet2;
var jsonData;
var nhanvienItem = [];
var html_body = "";
var html_header = "";
var ngay;
var table;
var NguoiDangKy;

$(document).ready(function () {
    $("#input-dangkisuatan-ngay").datepicker("setDate", new Date());
    ngay = dmy2ymd($("#input-dangkisuatan-ngay").val());

   // Xuất excel
    var gdate = new Date();
    $("#select-xbc-thang").val(gdate.getMonth() + 1);
    $("#select-xbc-nam").val(gdate.getFullYear());

    fncLoad();
    fncClick();
    fncChange();
    fncModalAction();
    LoadThongKeSuatAn(ngay);
});

function fncModalAction() {
    $('#modalThemSuatAn').on('hidden.bs.modal', function (e) {
        $("#select-buaan_themsuatan").val('Trưa');
        $("#select-congty").val('');
        $("#select-phongban").empty();
        $("#soluongdat").val("1");
        $("#cb-print-all").prop("checked", false);
        $("#tbl-shownhanvien tbody tr").each(function () {
            $(this).children("td:eq(9)").find("input[type='number']").val("1");
            var row = $(this);
            row.find('input[type="checkbox"]').each(function () {
                var checkbox = $(this);
                if (checkbox.prop("checked") == true) {
                    checkbox.prop('checked', false)
                }
            });
        });
    });
}

function fncLoad() {
   

    var ngaygio = dmy2ymd($("#input-dangkisuatan-ngay").val());
    var buaan = $('#select-buaan :selected').val()
    LoadTableSuatAn(ngaygio, buaan);


}

function fncClick() {
    $("#btn-xuatbangkesuatandangki").click(function () {
        var xbc_thang = $("#select-xbc-thang").val();
        var xbc_nam = $("#select-xbc-nam").val();
        // BEGIN AJAX LOAD 
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet3 = { "get1": xbc_thang, "get2": xbc_nam, "get3": "" };
        jsonData = JSON.stringify({ ajaxGet3 });
        $.ajax({
            type: "POST",
            url: "QuanLySuatAn.aspx/XuatSuatAnDangKi",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "lỗi") {
                    alert("Không có dữ liệu");
                } else {
                    var tenfile = "SuatAn_DangKi_Thang_" + xbc_thang + "_Nam_" + xbc_nam;
                    window.open("../DownloadFile.aspx?Root=SuatAn&Folder=BaoCao&FileName=" + tenfile + ".xlsx");
                }

            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {

        });
    })

    $("#btn-xuatbangkesuatan").click(function () {
        var xbc_thang = $("#select-xbc-thang").val();
        var xbc_nam = $("#select-xbc-nam").val();
        //var xbc_bophan = $("#select-xbc-bophan").val();


        // BEGIN AJAX LOAD 
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet3 = { "get1": xbc_thang, "get2": xbc_nam, "get3": "" };
        jsonData = JSON.stringify({ ajaxGet3 });
        $.ajax({
            type: "POST",
            url: "QuanLySuatAn.aspx/XuatSuatAn",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "lỗi") {
                    alert("Không có dữ liệu");
                } else {
                    var tenfile = "SuatAn_Thang_" + xbc_thang + "_Nam_" + xbc_nam;
                    window.open("../DownloadFile.aspx?Root=SuatAn&Folder=BaoCao&FileName=" + tenfile + ".xlsx");
                }

            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {

        });
    });

    // Thêm suất ăn 
    $("#btn-themsuatan").click(function () {
        var i = 0;
        nhanvienItem = []
        $("#tbl-shownhanvien tbody tr").each(function () {
            var Tennhanvien = $(this).children("td:eq(2)").text();
            var Sdt = $(this).children("td:eq(3)").text();
            var Congty = $(this).children("td:eq(6)").text();
            var BoPhan = $(this).children("td:eq(8)").text();
            //var SoLuong = $("#soluongdat").val();
            var SoLuong = $(this).children("td:eq(9)").find("input[type='number']").val();
            var ngaydangki = $("#input-ngay-dangki").val();
            //Do something
            var row = $(this);
            row.find('input[type="checkbox"]').each(function () {
                var checkbox = $(this);
                if (checkbox.prop("checked") == true) {
                    nhanvienItem.push({
                        "MaNV": $(this).val(),
                        "Congty": Congty,
                        "BoPhan": BoPhan,
                        "Soluongsuat": SoLuong,
                        "Buaan": $("#select-buaan_themsuatan").val(),
                        "NgayAn": dmy2ymd(ngaydangki),
                        "TenNhanVien": Tennhanvien,
                    });
                }
            });
        });
        var checkAn = true;
        var jsonData = JSON.stringify({ nhanvienItem });
        $.ajax({
            type: "POST",
            url: "QuanLySuatAn.aspx/CheckSuatAn",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                $.each(d, function (key, val) {
                    if (val.CheckSuatAn == "1") {
                        alert("Vui lòng kiểm tra nhân viên: " + nhanvienItem[key].TenNhanVien + " đã đăng kí suất bữa " + nhanvienItem[key].Buaan + " rồi");
                        checkAn = false;
                    }
                });
            },
            error: function () {
                swal.fire(
                    'có lỗi xảy ra!',
                    'danh sách hàng chưa được lưu. thử lại hoặc liên hệ it',
                    'error'
                )
            }
        }).done(function () {
        })


        if (checkAn == true) {
            $.ajax({
                type: "POST",
                url: "QuanLySuatAn.aspx/InsertSuatAn",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    swal.fire({
                        title: "thêm danh sách hàng thành công!",
                        text: "hệ thống sẽ tự tải lại sau 2s",
                        type: 'success',
                        timer: 2000,
                    })
                },
                error: function () {
                    swal.fire(
                        'có lỗi xảy ra!',
                        'danh sách hàng chưa được lưu. thử lại hoặc liên hệ it',
                        'error'
                    )
                }
            }).done(function () {
                var ngaygio = dmy2ymd($("#input-dangkisuatan-ngay").val());
                var buaan = $('#select-buaan :selected').val()
                ngay = dmy2ymd($("#input-dangkisuatan-ngay").val());
                LoadThongKeSuatAn(ngay);
                LoadTableSuatAn(ngaygio, buaan);
                $("#modalThemSuatAn").modal("hide");
              
            })
        }
    });

    // Xem suất ăn theo ngày 
    $("#btn-xem").click(function () {
        var ngaygio = dmy2ymd($("#input-dangkisuatan-ngay").val());
        var buaan = $('#select-buaan :selected').val()
        LoadTableSuatAnTimKiem(ngaygio, buaan);
        LoadThongKeSuatAn(ngaygio);
    });

    // Thêm suất ăn modal
    $("#btn-themsuatanmodal").click(function () {
        $("#modalThemSuatAn").modal("show");
        $("#input-ngay-dangki").datepicker("setDate", new Date())
        LoadTableNhanVien();
    });

    // show by ID suất ăn
    $(".tbl-suatan").on("click", ".btn-sua", function () {
        $("#modalSuaSuatAn").modal("show");
        $(".btn-suasuatan").attr("attrId", $(this).attr("attrid"));
        ajaxGet = { "get": $(this).attr("attrid") };
        var jsonData = JSON.stringify({ ajaxGet });
        //$("#div-wait").show();
        $.ajax({
            type: "POST",
            url: "QuanLySuatAn.aspx/reSuatAnByID",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d)
                $("#select-edit-buaan").val(d.Buaan);
                $("#input-edit-soluong").val(d.Soluongsuat);
                $("#input-edit-thoigian").val(convertDate(d.NgayAn)[1]);
                $("#input-edit-ghichu").val(d.Ghichu);
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

    // Cập nhật suất ăn
    $(".btn-suasuatan").click(function () {
        var id = $(this).attr("attrId");
        var soluongsuat = $("#input-edit-soluong").val();
        var buaan = $("#select-edit-buaan").val();
        var thoigian = $("#input-edit-thoigian").val();
        var ghichu = $("#input-edit-ghichu").val();

        var ajaxGet5 = { "get1": soluongsuat, "get2": buaan, "get3": dmy2ymd(thoigian), "get4": ghichu, "get5": id };
        var jsonData = JSON.stringify({ ajaxGet5 });
        $.ajax({
            type: "POST",
            url: "QuanLySuatAn.aspx/updateSuatAn",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Cập nhật thành công!",
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
            var ngaygio = dmy2ymd($("#input-dangkisuatan-ngay").val());
            var buaan = $('#select-buaan :selected').val()
            LoadTableSuatAn(ngaygio, buaan);
            $("#modalSuaSuatAn").modal("hide");
        })
    })

    // xóa suất ăn
    $(".tbl-suatan").on("click", ".btn-xoa", function () {
        var conf = confirm("Bạn có muốn xóa bữa ăn nhân viên này không?");
        if (conf) {
            ajaxGet = { "get": $(this).attr("attrid") };
            var jsonData = JSON.stringify({ ajaxGet });
            //$("#div-wait").show();
            $.ajax({
                type: "POST",
                url: "QuanLySuatAn.aspx/deleteSuatAn",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    Swal.fire({
                        title: "Xóa nhân viên thành công!",
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
                var ngaygio = dmy2ymd($("#input-dangkisuatan-ngay").val());
                var buaan = $('#select-buaan :selected').val()
                LoadTableSuatAn(ngaygio, buaan);
            })
        }
    });

    //btn lọc 
    $("#btn-loc").click(function () {
        var congty = $("#select-congty").val();
        var phongban = $("#select-phongban").val();

        if (congty == "" && (phongban == null || phongban == "")) {
            //alert("");
            Swal.fire(
                'Có lỗi xảy ra!',
                'Vui lòng chọn công ty và phòng ban để tiếp tục công việc',
                'error'
            )
        } else {
            LoadTableNhanVienTimKiem(congty, phongban)
        }
    });

}

function fncChange() {
    $("#tbl-shownhanvien").on("change", ".td-checkbox", function () {
        if (this.value == "ALL") {
            if (this.checked) {
                $(".tr-qll-view").each(function (index, val) {
                    if ($(this).css('display') != 'none') {
                        $("#td-checkbox-" + $(this).attr("hawb")).prop("checked", true);
                    }
                })
            } else {
                $(".td-checkbox-child").prop("checked", false);
            }
        } else {

        }
    });

    $("#select-congty").change(function () {
        var congty = $(this).val();
        if (congty == "ALSE") {
            fncLoadOrigin(congty);
        } else if (congty == "KH") {
            fncLoadOrigin(congty);
        } else {
            $("#select-phongban").empty();
            $("#select-phongban").append("<option  value=\"\"></option>");
        }
    });
}

function LoadTableSuatAn(date, buaan) {
    //console.log(date + " " + buaan)
    ajaxGet2 = { "get1": date, "get2": buaan };
    jsonData = JSON.stringify({ ajaxGet2 });
    $.ajax({
        type: "POST",
        url: "QuanLySuatAn.aspx/reSuatan",
        contentType: "application/json;charsert=utf-8",
        dataType: "json",
        data: jsonData,
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);

            html_body = "";
            html_header = "";
            html_header += "<tr>";
            html_header += "<td class=\"theadColor\">STT</td>";
            html_header += "<td class=\"theadColor\">Họ và tên</td>";
            html_header += "<td class=\"theadColor\">Công ty</td>";
            html_header += "<td class=\"theadColor\">Phòng ban</td>";
            html_header += "<td class=\"theadColor\">SL suất ĐK</td>";
            html_header += "<td class=\"theadColor\">Bữa ăn</td>";
            html_header += "<td class=\"theadColor\">SL suất đã ăn</td>";
            html_header += "<td class=\"theadColor\">Ngày giờ ăn cuối</td>";
            html_header += "<td class=\"theadColor\">Người đăng kí</td>";
            html_header += "<td class=\"theadColor\">Ngày giờ đăng kí</td>";
            html_header += "<td class=\"theadColor\">Ghi chú</td>";
            html_header += "<td class=\"theadColor\">Chức năng</td>";
            html_header += "</tr>";
            $(".tbl-suatan tbody").empty();
            $(".tbl-suatan thead").empty();
            $.each(d, function (key, val) {
                var htmlBuaAn = "";
                if (val.BuaAnTrongNgay == "0") {
                    htmlBuaAn = "-";
                } else {
                    htmlBuaAn = val.BuaAnTrongNgay;
                }
                NguoiDangKy = val.NguoiDangKy;
                if (val.NguoiDangKy == "Bùi Chung Thành") {
                    NguoiDangKy = "Mrs.Hà"
                }

                html_body += "<tr>";
                html_body += "<td>" + (key + 1) + "</td>";
                html_body += "<td class=\"td-left\">" + val.TenNhanVien + "</td>";
                html_body += "<td>" + val.Congty + "</td>";
                html_body += "<td>" + val.BoPhan + "</td>";
                html_body += "<td>" + val.Soluongsuat + "</td>";
                html_body += "<td>" + val.Buaan + "</td>";
                html_body += "<td>" + htmlBuaAn + "</td>";
                html_body += "<td>" + convertDate(val.NgayGioAnCuoi)[5] + "</td>";
                html_body += "<td>" + NguoiDangKy + "</td>";
                html_body += "<td>" + convertDate(val.Ngaygiodangky)[5] + "</td>";
                html_body += "<td>" + val.Ghichu + "</td>";
                html_body += "<td>";
                html_body += "<span class=\"btn btn-sm btn-info btn-sua\" atbtn-kehoachlayhang-xemtrID=\"" + val.ID + "\">Sửa</span> ";
                html_body += " <span class=\"btn btn-sm btn-danger btn-xoa\" attrID=\"" + val.ID + "\">Xóa</span>";
                html_body += "</td >";
                html_body += "</tr>";
            });

            $(".tbl-suatan tbody").append(html_body);
            $(".tbl-suatan thead").append(html_header);
            table = $('.tbl-suatan').DataTable({
                paging: false,
                destroy: true,
                ordering: false
            });
           
            
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    });

}

function LoadTableSuatAnTimKiem(date, buaan) {
    //console.log(date + " " + buaan)
    ajaxGet2 = { "get1": date, "get2": buaan };
    jsonData = JSON.stringify({ ajaxGet2 });
    $.ajax({
        type: "POST",
        url: "QuanLySuatAn.aspx/reSuatan",
        contentType: "application/json;charsert=utf-8",
        dataType: "json",
        data: jsonData,
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);

            html_body = "";
            html_header = "";
            html_header += "<tr>";
            html_header += "<td class=\"theadColor\">STT</td>";
            html_header += "<td class=\"theadColor\">Họ và tên</td>";
            html_header += "<td class=\"theadColor\">Công ty</td>";
            html_header += "<td class=\"theadColor\">Phòng ban</td>";
            html_header += "<td class=\"theadColor\">SL suất ĐK</td>";
            html_header += "<td class=\"theadColor\">Bữa ăn</td>";
            html_header += "<td class=\"theadColor\">SL suất đã ăn</td>";
            html_header += "<td class=\"theadColor\">Ngày giờ ăn cuối</td>";
            html_header += "<td class=\"theadColor\">Người đăng kí</td>";
            html_header += "<td class=\"theadColor\">Ngày giờ đăng kí</td>";
            html_header += "<td class=\"theadColor\">Ghi chú</td>";
            html_header += "<td class=\"theadColor\">Chức năng</td>";
            html_header += "</tr>";
            $(".tbl-suatan tbody").empty();
            $(".tbl-suatan thead").empty();
            $.each(d, function (key, val) {
                var htmlBuaAn = "";
                if (val.BuaAnTrongNgay == "0") {
                    htmlBuaAn = "-";
                } else {
                    htmlBuaAn = val.BuaAnTrongNgay;
                }
                NguoiDangKy = val.NguoiDangKy;
                if (val.NguoiDangKy == "Bùi Chung Thành") {
                    NguoiDangKy = "Mrs.Hà"
                }

                html_body += "<tr>";
                html_body += "<td>" + (key + 1) + "</td>";
                html_body += "<td class=\"td-left\">" + val.TenNhanVien + "</td>";
                html_body += "<td>" + val.Congty + "</td>";
                html_body += "<td>" + val.BoPhan + "</td>";
                html_body += "<td>" + val.Soluongsuat + "</td>";
                html_body += "<td>" + val.Buaan + "</td>";
                html_body += "<td>" + htmlBuaAn + "</td>";
                html_body += "<td>" + convertDate(val.NgayGioAnCuoi)[5] + "</td>";
                html_body += "<td>" + NguoiDangKy + "</td>";
                html_body += "<td>" + convertDate(val.Ngaygiodangky)[5] + "</td>";
                html_body += "<td>" + val.Ghichu + "</td>";
                html_body += "<td>";
                html_body += "<span class=\"btn btn-sm btn-info btn-sua\" atbtn-kehoachlayhang-xemtrID=\"" + val.ID + "\">Sửa</span> ";
                html_body += " <span class=\"btn btn-sm btn-danger btn-xoa\" attrID=\"" + val.ID + "\">Xóa</span>";
                html_body += "</td >";
                html_body += "</tr>";
            });

            $(".tbl-suatan tbody").append(html_body);
            $(".tbl-suatan thead").append(html_header);
            //$('.tbl-suatan').DataTable({
            //    paging: false,
            //    destroy: true,
            //    ordering: false
            //});
          
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    });

}

function LoadTableNhanVien() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLySuatAn.aspx/reNhanVien",
        contentType: "application/json;charsert=utf-8",
        dataType: "json",
        data: jsonData,
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            var html_body = "";
            $.each(d, function (key, val) {
                html_body += "<tr hawb=\"" + val.NhanVienID + "\" class=\"tr-qll-view tr-makho-view\">";
                html_body += "<td class=\"\">" + "<input id=\"td-checkbox-" + val.NhanVienID + "\" class=\"td-checkbox td-checkbox-child \" value=\"" + val.NhanVienID + "\"  type=\"checkbox\">" + "</td>";
                html_body += "<td>" + (key + 1) + "</td>";
                html_body += "<td  class=\"td-left\">" + val.TenNhanVien + "</td>";
                html_body += "<td>" + val.SDT + "</td>";
                html_body += "<td>" + convertDate(val.NgaySinh)[1] + "</td>";
                html_body += "<td>" + val.TenChucDanh + "</td>";
                html_body += "<td>" + val.CongTy + "</td>";
                html_body += "<td>" + val.BoPhan2 + "</td>";
                html_body += "<td>" + val.BoPhan + "</td>";
                html_body += "<td><input type=\"number\" min=\"1\" class=\"form-control\" id=\"soluongdat\" placeholder=\"Nhập xuất ăn\"  value=\"1\" autocomplete=\"off\"></td>";
                html_body += "</tr>";
            });

            //$("#tbl-shownhanvien thead").empty().append(html_head);
            $("#tbl-shownhanvien tbody").empty().append(html_body);

            $('#tbl-shownhanvien').DataTable({
                paging: false,
                destroy: true,
                ordering: false
            });
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    });
}

function fncLoadOrigin(Congty) {
    ajaxGet = { "get": Congty };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLySuatAn.aspx/reBoPhan",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            $("#select-phongban").empty();
            $("#select-phongban").append("<option value=\"all\">--Tất cả--</option>");
            $.each(d, function (index, item) {
                $("#select-phongban").append("<option value=\"" + item.BoPhan + "\">" + item.TenViTri + "</option>");
            })
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
}

function LoadTableNhanVienTimKiem(congty, bophan) {
    ajaxGet2 = { "get1": congty, "get2": bophan };
    jsonData = JSON.stringify({ ajaxGet2 });
    $.ajax({
        type: "POST",
        url: "QuanLySuatAn.aspx/reNhanVienTheoCongTy",
        contentType: "application/json;charsert=utf-8",
        dataType: "json",
        data: jsonData,
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            var html_body = "";
            $("#tbl-shownhanvien tbody").empty();
            $.each(d, function (key, val) {
                html_body += "<tr hawb=\"" + val.NhanVienID + "\" class=\"tr-qll-view tr-makho-view\">";
                html_body += "<td class=\"\">" + "<input id=\"td-checkbox-" + val.NhanVienID + "\" class=\"td-checkbox td-checkbox-child \" value=\"" + val.NhanVienID + "\"  type=\"checkbox\">" + "</td>";
                html_body += "<td>" + (key + 1) + "</td>";
                html_body += "<td  class=\"td-left\">" + val.TenNhanVien + "</td>";
                html_body += "<td>" + val.SDT + "</td>";
                html_body += "<td>" + convertDate(val.NgaySinh)[1] + "</td>";
                html_body += "<td>" + val.TenChucDanh + "</td>";
                html_body += "<td>" + val.CongTy + "</td>";
                html_body += "<td>" + val.BoPhan2 + "</td>";
                html_body += "<td>" + val.BoPhan + "</td>";
                html_body += "<td><input type=\"number\" min=\"1\" class=\"form-control\" id=\"soluongdat\" placeholder=\"Nhập xuất ăn\"  value=\"1\" autocomplete=\"off\"></td>";
                html_body += "</tr>";
            });

            //$("#tbl-shownhanvien thead").empty().append(html_head);
            $("#tbl-shownhanvien tbody").append(html_body);

            //$('#tbl-shownhanvien').DataTable({
            //    paging: false,
            //    destroy: true,
            //});
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    });
}

function LoadThongKeSuatAn(ngay) {
    ajaxGet = { "get": ngay};
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLySuatAn.aspx/reThongKeSuatAn",
        contentType: "application/json;charsert=utf-8",
        dataType: "json",
        data: jsonData,
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            var html_sang = "<td>Sáng</td>";
            var html_trua = "<td>Trưa</td>";
            var html_toi = "<td>Tối</td>";
            var html_dem = "<td>Đêm</td>";
            $.each(d, function (key, val) {

                var htmltd = "";
                if (val.sangDK == "0") {
                    htmltd = "-";
                } else {
                    htmltd = val.sangDK;
                }

                if (key == 0 || key == 4 || key == 8) {
                    html_sang += "<td>" + htmltd + "</td>";
                }
                if (key == 1 || key == 5 || key == 9) {
                    html_trua += "<td>" + htmltd + "</td>";
                }
                if (key == 2 || key == 6 || key == 10) {
                    html_toi += "<td>" + htmltd + "</td>";
                }
                if (key == 3 || key == 7 || key == 11) {
                    html_dem += "<td>" + htmltd + "</td>";
                }
            });
            html_sang += "<td>Sáng (trước 20h00)</td>"
            html_trua += "<td>Trưa (trước 08h00)</td>"
            html_toi += "<td>Tối (trước 09h00)</td>"
            html_dem += "<td>Đêm (trước 15h30)</td>"
            $(".td-sang").empty().append(html_sang);
            $(".td-trua").empty().append(html_trua);
            $(".td-toi").empty().append(html_toi);
            $(".td-dem").empty().append(html_dem);
        },
        error: function (messageError) {
            console.log("Lỗi : " + messageError.responseText);
        }
    });
}

function ConvertBuaAn(input) {
    var result = "";
    switch (input) {
        case "sang":
            result = "Sáng";
            break;
        case "trua":
            result = "Trưa";
            break;
        case "toi":
            result = "Tối";
            break;
        case "dem":
            result = "Đêm";
            break;
        default:
            result = "Tất cả";
    }

    return result;
}