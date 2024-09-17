var d;
var html = "";
var ajaxGet;
var jsonData;
$(document).ready(function () {
    fncLoad();
    fncClick();
    fncReDanhSachNhomTaiKhoan();
})

function fncLoad() {

}
function fncClick() {
    $("#tbl-nhom").on("click", ".btn-nhom-phanquyen", function () {
        var nhomId = $(this).attr("nhomId");
        $("#modalPhanQuyen").attr("TaiKhoanId", "");
        $("#modalPhanQuyen").attr("NhomId", nhomId);
        $("#modalPhanQuyen").modal("show");
    })
}
function fncReDanhSachNhomTaiKhoan() {
    ajaxGet = { "get": "0" };
    jsonData = JSON.stringify({ ajaxGet });
    //$("#div-wait").show();
    $.ajax({
        type: "POST",
        url: "QuanLyNhomTaiKhoan.aspx/ReDanhSachTaiKhoanView",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);

            var chaId = "";
            $.each(d, function (index, item) {
                html = "";

                html += "<tr>";
                if ($(".nhomcha-" + item.NhomCha).length > 0) {
                    html += "<td class=\"td-qln-tennhom nhomcha-" + item.Id + "\" > " + $(".nhomcha-" + item.NhomCha).find(".sub-cha").text() + "<span class=\"sub-cha\">---</span>" + item.TenNhom + "</td>";

                }else{
                    html += "<td class=\"td-qln-tennhom nhomcha-"+item.Id+"\" >" + item.TenNhom + "</td>";
                }
                
                html += "<td>" + item.DienGiai+ "</td>";
                html += "<td>" + item.ThemTaiKhoan + "</td>";
                html += "<td>"
                    + "<button type=\"button\" nhomId=\"" + item.Id + "\" class=\"btn btn-sm btn-primary btn-nhom-sua\">Sửa</button>"
                    + "<button type=\"button\" nhomId=\"" + item.Id + "\" class=\"btn btn-sm btn-success btn-nhom-phanquyen\">Phân quyền</button>"
                    + "<button type=\"button\" nhomId=\"" + item.Id + "\" class=\"btn btn-sm btn-danger btn-nhom-xoa\">Xóa</button>"

                    + "</td>";
                html += "</tr>";
                chaId = item.Id;
               
                $("#tbl-nhom tbody").append(html);

            })

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