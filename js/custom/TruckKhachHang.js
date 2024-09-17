
var html_thead = "";
var html_tbody = "";
var ajaxGet;
var d;
$(document).ready(function () {
    fncChange();
    fncClick();
    fncLoad();
})

function fncLoad() {
    fncLoadTableKhachHang(fncLoadDsKhachHang("0"));
    fncDongModal();
}
function fncClick() {
    fncLuu();
    fncXoaKhachHang();
    fncThemSuaKhachHang();
}
function fncChange() {

}
function fncLoadDsKhachHang(khachhang_id) {

    // BEGIN AJAX LOAD 
    //TODO 1.
    //TODO 2.
    //TODO 3.
    var returnd;
    ajaxGet = { "get": khachhang_id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "KhachHang.aspx/LoadKhachHang",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            returnd = d;
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {

    });
    /// END AJAX LOAD
    return returnd;
}
function fncLoadTableKhachHang(d) {

    html_tbody = "";
    $.each(d, function (index, item) {
        html_tbody += "<tr>";
        html_tbody += "<td>" + (index + 1) + "</td>";
        html_tbody += "<td>" + item.MaKH + "</td>";
        html_tbody += "<td class=\"text-align-left\">" + item.TenCongTy + "</td>";
        html_tbody += "<td>" + item.GhiChu + "</td>";
        html_tbody += "<td>" + "<input type=\"button\" class=\"btn btn-sms btn-warning btn-sua\" value=\"SỬA\"  khachhang-id=\"" + item.Id + "\" />" + "</td>";
        html_tbody += "<td>" + "<input type=\"button\" class=\"btn btn-sms btn-danger btn-xoa\" value=\"XÓA\"  khachhang-id=\"" + item.Id + "\" />" + "</td>";
        html_tbody += "</tr>";
    })
    $("#tbl-khachhang tbody").empty();
    $("#tbl-khachhang tbody").append(html_tbody);
}
function fncThemSuaKhachHang() {
    $("#btn-them").click(function () {
        $("#myModalViewKhachHang").modal("show");
        $("#h4-khachhang-view-tieude").text = "Thêm Khách Hàng";
        $("#btn-luu").attr("khachhang-id", "0");
    })
    $("#tbl-khachhang").on("click", ".btn-sua", function () {
        
        $("#myModalViewKhachHang").modal("show");
        $("#h4-khachhang-view-tieude").text("Sửa Khách Hàng Id=" + $(this).attr("khachhang-id"));
        $("#btn-luu").attr("khachhang-id", $(this).attr("khachhang-id"));
        var editKhachHangData = fncLoadDsKhachHang($(this).attr("khachhang-id"))[0];
        $("#input-makh").val(editKhachHangData.MaKH);
        $("#input-masothue").val(editKhachHangData.MaSoThue);
        $("#input-tencongty").val(editKhachHangData.TenCongTy);
        $("#input-diachi").val(editKhachHangData.DiaChi);       
        $("#input-ghichu").val(editKhachHangData.GhiChu);

    })
}
function fncXoaKhachHang() {
    $("#tbl-khachhang").on("click", ".btn-xoa", function () {
        var khachhang_xoa_id = $(this).attr("khachhang-id");
        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa khách hàng này?',
            text: "Hành động này không thể khôi phục lại!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',

            confirmButtonText: 'Đồng ý, xóa khách hàng!',
            cancelButtonText: 'Hủy'
        }).then(function () {
            // BEGIN AJAX LOAD 
            //TODO 1.
            //TODO 2.
            //TODO 3.
            ajaxGet = { "get": khachhang_xoa_id };
            jsonData = JSON.stringify({ ajaxGet });
            $.ajax({
                type: "POST",
                url: "KhachHang.aspx/XoaKhachHang",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    fncLoadTableKhachHang(fncLoadDsKhachHang("0"));

                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {

            });
            /// END AJAX LOAD
        })
    })
}
function fncDongModal() {
    $("#myModalViewKhachHang").on('hidden.bs.modal', function () {
        $("#input-makh").val("");
        $("#input-masothue").val("");
        $("#input-tencongty").val("");
        $("#input-diachi").val("");        
        $("#input-ghichu").val("");
    })
}
function fncLuu() {
    $("#btn-luu").click(function () {
        var cKhachHang = {
            "Id": $(this).attr("khachhang-id"),
            "MaKH": $("#input-makh").val(),
            "TenCongTy": $("#input-tencongty").val(),
            "DiaChi": $("#input-diachi").val(),
            "MaSoThue": $("#input-masothue").val(),            
            "GhiChu": $("#input-ghichu").val(),
            "NguoiTao": "",
            "NgayTao": "",
            "NguoiSua": "",
            "NgaySua": "",
        }

        // BEGIN AJAX LOAD
        //TODO 1.
        //TODO 2.
        //TODO 3.

        jsonData = JSON.stringify({ cKhachHang });
        $.ajax({
            type: "POST",
            url: "KhachHang.aspx/ThemSuaKhachHang",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {
            fncLoadTableKhachHang(fncLoadDsKhachHang("0"));
            $("#myModalViewKhachHang").modal("hide");

        });
        /// END AJAX LOAD
    })
}