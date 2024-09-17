var html = "";


$(document).ready(function () {
    LoadKHDT();
    fncModalAction();
    fncClick();
});

function fncClick() {
    $("#inp-khdt-thanhtoan").click(function () {
        window.location.href = "./ThanhToan.aspx";
    })

    $("#inp-khdt-them").click(function () {
        $(".inp-clear").val("");
        $("#myModalViewThanhToan-KHDT").attr("khdt-id", "");
        $("#myModalViewThanhToan-KHDT").modal("show");
    })
    $("#inp-khdt-luu").click(function () {
        

        ajaxGet6 = {
            "get1": $("#myModalViewThanhToan-KHDT").attr("khdt-id"),
            "get2": $("#input-khdt-ten").val(),
            "get3": $("#select-khdt-loai").val(),
            "get4": $("#input-khdt-tendaydu").val(),
            "get5": $("#input-khdt-sdt").val(),
            "get6": $("#input-khdt-diachi").val(),
        };
        jsonData = JSON.stringify({ ajaxGet6 });
        $.ajax({
            type: "POST",
            url: "KhachHangDoiTac.aspx/SaveKHDT",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
            }
        }).done(function () {
            $("#myModalViewThanhToan-KHDT").modal("hide");
            LoadKHDT();
        });
    })
}
function fncModalAction() { }

function LoadKHDT() {
    
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    
    $.ajax({
        type: "POST",
        url: "KhachHangDoiTac.aspx/ReKHDT",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
             html = "";
            $.each(d, function (index, item) {
                //console.log(item);
                html += "<tr>";
                html += "<td>" + (index + 1) +"</td>";
                html += "<td>" + item.Ten + "</td>";
                html += "<td>" + (item.Loai == "DT" ? "Đối tác" : "Khách hàng") + "</td>";
                html += "<td>" + item.TenDayDu + "</td>";
                html += "<td>";
                html += "<input type=\"button\" class=\"btn btn-warning btn-sm inp-khdt-sua\"  khdt-id=\""+item.Id+"\" value=\"Sửa\"/>";
                html += "<input type=\"button\" class=\"btn btn-danger btn-sm inp-khdt-xoa\" khdt-ten=\"" + item.Ten+"\" khdt-id=\"" + item.Id + "\" value=\"Xóa\"/>";                
                html+= "</td>";
                html += "</tr>";
             })
            $("#tbl-khachhangdoitac tbody").empty();
            $("#tbl-khachhangdoitac tbody").append(html);

        }
    }).done(function () {

        $(".inp-khdt-sua").click(function () {
            $(".inp-clear").val("");
            $("#myModalViewThanhToan-KHDT").attr("khdt-id", $(this).attr("khdt-id"));

            ajaxGet = { "get": $(this).attr("khdt-id") };
            jsonData = JSON.stringify({ ajaxGet });

            $.ajax({
                type: "POST",
                url: "KhachHangDoiTac.aspx/ReKHDTById",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    $("#input-khdt-ten").val(d.Ten);
                    $("#input-khdt-tendaydu").val(d.TenDayDu);
                    $("#input-khdt-sdt").val(d.SDT);
                    $("#input-khdt-diachi").val(d.DiaChi);
                    $("#select-khdt-loai").val(d.Loai);
                }
            }).done(function () {

            });


            $("#myModalViewThanhToan-KHDT").modal("show");
        })
        $(".inp-khdt-xoa").click(function () {
            var xoa_khdt_id = $(this).attr("khdt-id");
            var xoa_khdt_ten = $(this).attr("khdt-ten");
            Swal.fire({
                title: 'Bạn chắc chắn muốn xóa Khách Hàng - Đối Tác:' + xoa_khdt_ten+'?',
                text: "Hành động này không thể khôi phục lại!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#DD6B55',
                confirmButtonText: 'Đồng ý, XÓA !',
                cancelButtonText: 'Hủy'
            }).then(function () {
                ajaxGet = { "get": xoa_khdt_id  };
                jsonData = JSON.stringify({ ajaxGet });

                $.ajax({
                    type: "POST",
                    url: "KhachHangDoiTac.aspx/DelKHDTById",
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
                    }
                }).done(function () {
                    LoadKHDT();
                });

            });

           


           
        })
    });

}