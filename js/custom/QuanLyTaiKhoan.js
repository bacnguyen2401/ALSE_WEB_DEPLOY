var d;
var html = "";
var ajaxGet;
var jsonData;
$(document).ready(function () {
    fncLoad();
    fncClick();
    fncReDanhSachTaiKhoan();
})

function fncLoad() {
    $(".div-taikhoan-them").hide();
    $(".div-taikhoan-sua").hide();
    $("#input-taikhoan-DoiMatKhau").change(function () {
        
        if (this.checked) {
            $(".input-taikhoan-matkhau").attr("disabled", false);
            $("#input-taikhoan-matkhaumoi").focus();
        } else {
            $(".input-taikhoan-matkhau").attr("disabled", true);

        }
    })
    $('#modalTaiKhoan').on('hidden.bs.modal', function () {
        $(".div-taikhoan-them").hide();
        $(".div-taikhoan-sua").hide();
    })
}
function fncClick() {
    $("#btn-taikhoan-them").click(function () {
        fncClearModalTaiKhoan();
        fncLoadNhomTaiKhoan();
        fncLoadHoSoNhanSu();
        $(".div-taikhoan-them").show();
        $("#modalTaiKhoan").attr("TaiKhoanId", "");
        $("#modalTaiKhoan").modal("show");
    })
    $("#modalTaiKhoan").on("click", "#btn-taikhoan-luu", function () {
        var thongbao = "";
        var matkhau_luu = "";
        if ($("#modalTaiKhoan").attr("TaiKhoanId") != "") {
            thongbao = "Sửa ";
            if ($("#input-taikhoan-DoiMatKhau").prop("checked") == true && $("#input-taikhoan-matkhaumoi").val().trim() != "" && ($("#input-taikhoan-matkhaumoi").val().trim() == $("#input-taikhoan-nhaplaimatkhaumoi").val().trim())) {
                
                matkhau_luu = $("#input-taikhoan-matkhaumoi").val().trim();
            } else if ($("#input-taikhoan-DoiMatKhau").prop("checked") == true && ($("#input-taikhoan-matkhaumoi").val().trim() == "" || ($("#input-taikhoan-matkhaumoi").val().trim() != $("#input-taikhoan-nhaplaimatkhaumoi").val().trim()))){
                Swal.fire(
                    'Mật khẩu trống hoặc không khớp!',
                    '',
                    'error'
                )
                return false;
                
            }
        }else 
         {
            thongbao = "Thêm ";

            if ($("#input-taikhoan-matkhau").val().trim() != "") {
                matkhau_luu = $("#input-taikhoan-matkhau").val().trim();
            } else {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Tài khoản và Mật khẩu không được trống.',
                    'error'
                )
                return false;
            }
           

        } 
        
            
        var ThongTinTaiKhoan = {
            Id: $("#modalTaiKhoan").attr("TaiKhoanId")
            , TaiKhoan: $("#input-taikhoan-tentaikhoan").val().trim()
            , MatKhau: matkhau_luu
            , TenHienThi: $("#input-taikhoan-tenhienthi").val().trim()
            , NhomId: $("#select-NhomTaiKhoan").val().trim()
            , TenNhom: ""
            , HoSoNhanSuId: $("#select-HoSoNhanSu").val().trim()
            , HoSoNhanSuTen: ""
        };
        //$("#div-wait").show();
        jsonData = JSON.stringify({ ThongTinTaiKhoan });

        $.ajax({
            type: "POST",
            url: "QuanLyTaiKhoan.aspx/IUTaiKhoan",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                Swal.fire({
                    title: thongbao +"tài khoản thành công!",
                    text: "",
                    type: 'success',
                    timer: 2000,
                })
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Dữ liệu chưa được tải. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
            $("#modalTaiKhoan").modal("hide");
           
            fncReDanhSachTaiKhoan();
            //$("#div-wait").hide();

        });

    })
    $("#tbl-danhsach-taikhoan").on("click", ".btn-taikhoan-sua", function () {
        fncClearModalTaiKhoan();
        fncLoadNhomTaiKhoan();
        fncLoadHoSoNhanSu();
        $(".div-taikhoan-sua").show();

        var _TaiKhoanId = $(this).attr("TaiKhoanId");
         ajaxGet = { "get": _TaiKhoanId };
        jsonData = JSON.stringify({ ajaxGet });
        //$("#div-wait").show();
        $.ajax({
            type: "POST",
            url: "QuanLyTaiKhoan.aspx/ReTaiKhoanView",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                $("#modalTaiKhoan").attr("TaiKhoanId", _TaiKhoanId);
                $("#input-taikhoan-tentaikhoan").val(d.TaiKhoan);
                $("#input-taikhoan-tenhienthi").val(d.TenHienThi);
                $("#select-NhomTaiKhoan").val(d.NhomId);
                $("#select-HoSoNhanSu").val(d.HoSoNhanSuId);
                $("#modalTaiKhoan").modal("show");

            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Dữ liệu chưa được tải. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
            //$("#div-wait").hide();

        });
    })
    $("#tbl-danhsach-taikhoan").on("click", ".btn-taikhoan-xoa", function () {
        var _TaiKhoanId = $(this).attr("TaiKhoanId");
        ajaxGet = { "get": _TaiKhoanId };
        jsonData = JSON.stringify({ ajaxGet }); 
        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa tài khoản này?',
            text: "Hành động này không thể khôi phục lại!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Đồng ý, xóa tài khoản!',
            cancelButtonText: 'Hủy'
        }).then(function () {
            //$("#div-wait").show();

            $.ajax({
                type: "POST",
                url: "QuanLyTaiKhoan.aspx/DTaiKhoan",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    Swal.fire({
                        title: "Xóa tài khoản thành công!",
                        text: "",
                        type: 'success',
                        timer: 2000,
                    })
                } ,
                error: function () {
                    Swal.fire(
                        'Có lỗi xảy ra!',
                        'Tài khoản chưa được xóa. Thử lại hoặc liên hệ IT',
                        'error'
                    )
                }
            }).done(function () {
                fncReDanhSachTaiKhoan();

                //$("#div-wait").hide();
            });
        })
    })

}
function fncLoadNhomTaiKhoan() {
     ajaxGet = { "get": "0" };
    jsonData = JSON.stringify({ ajaxGet });
    //$("#div-wait").show();
    $.ajax({
        type: "POST",
        url: "QuanLyTaiKhoan.aspx/ReDanhSachNhomTaiKhoanView",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var dsn = "";
            var dns_disable = "";
            //console.log(d);
            $.each(d, function (index, item) {
                dns_disable = "";
                if (item.ThemTaiKhoan == "False") {
                    dns_disable = "disabled";
                }
                dsn += "<option value=\"" + item.Id + "\" " + dns_disable+">" + item.TenNhom+ "</option>";
            })
            $("#select-NhomTaiKhoan").empty();
            $("#select-NhomTaiKhoan").append(dsn);

        },
        error: function () {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Dữ liệu chưa được tải. Thử lại hoặc liên hệ IT',
                'error'
            )
        },
    }).done(function () {
        //$("#div-wait").hide();

    });
}
function fncLoadHoSoNhanSu() {
    var ajaxGet = { "get": "0" };
    jsonData = JSON.stringify({ ajaxGet });
    //$("#div-wait").show();
    $.ajax({
        type: "POST",
        url: "QuanLyTaiKhoan.aspx/ReDanhSachHoSoNhanSuView",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var hsns = "";
            var hsns_tenphong = "";
            hsns += "<option class=\"margin-left-5px\" value=\"" + "0" + "\">" + "-" + "</option>";

            $.each(d, function (index, item) {
                if (index == 0) {
                    hsns += "<option class=\"font-weight-bold\" disabled>" + item.HoSoNhanSuTenPhong + "</option>";
                    
                } else {
                    if (hsns_tenphong != item.HoSoNhanSuTenPhong) {

                        hsns += "<option class=\"font-weight-bold\" disabled>" + item.HoSoNhanSuTenPhong + "</option>";

                    }
                }
                hsns_tenphong = item.HoSoNhanSuTenPhong;

                hsns += "<option class=\"margin-left-5px\" value=\""+item.HoSoNhanSuId+"\">" + "-- " +item.HoSoNhanSuTen+ "</option>";

            })
            $("#select-HoSoNhanSu").empty();
            $("#select-HoSoNhanSu").append(hsns);
        },
        error: function () {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Dữ liệu chưa được tải. Thử lại hoặc liên hệ IT',
                'error'
            )
        },
    }).done(function () {
        //$("#div-wait").hide();

    });
}
function fncClearModalTaiKhoan() {
    $(".input-taikhoan-clear").val("");
    $(".input-taikhoan-matkhaumoi").attr("disabled", true);

}
function fncReDanhSachTaiKhoan() {
    var ajaxGet = { "get": "0" };
    jsonData = JSON.stringify({ ajaxGet });
    //$("#div-wait").show();

    $.ajax({
        type: "POST",
        url: "QuanLyTaiKhoan.aspx/ReDanhSachTaiKhoanView",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            html = "";
            $.each(d, function (index, item) {
                html += "<tr>";
                html += "<td>" + (index + 1) + "</td>";
                html += "<td>" + item.Id + "</td>";
                html += "<td>" + item.TaiKhoan + "</td>";
                html += "<td>" + item.TenHienThi + "</td>";
                html += "<td>" + item.TenNhom + "</td>";
                html += "<td>"
                    + "<button type=\"button\" class=\"btn-sm btn btn-primary btn-taikhoan-sua\" TaiKhoanId=\"" + item.Id + "\">Sửa thông tin</button>"
                    + "<button type=\"button\" class=\"btn-sm btn btn-info btn-taikhoan-phanquyen\" TaiKhoanId=\"" + item.Id + "\">Phân Quyền</button>"
                    + "<button type=\"button\" class=\"btn-sm btn btn-danger btn-taikhoan-xoa\" TaiKhoanId=\"" + item.Id +"\">Xóa</button>"
                    + "</td>";
                html += "</tr>";
            });
            $("#tbl-danhsach-taikhoan tbody").empty();
            $("#tbl-danhsach-taikhoan tbody").append(html);
        },
        error: function () {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Dữ liệu chưa được tải. Thử lại hoặc liên hệ IT',
                'error'
            )
        },
    }).done(function () {
        //$("#div-wait").hide();

    });
    

}