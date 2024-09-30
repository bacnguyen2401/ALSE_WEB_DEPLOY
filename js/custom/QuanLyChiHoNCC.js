var ajaxGet;
var jsonData;
var html_body;
var d;
var Id;
var chiHo_NCC = {};

$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();
    fncModal();
});

function fncLoad() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });

    $.ajax({
        type: "POST",
        url: "QuanLyChiHoNCC.aspx/reNCC",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            html_body = "";

            $.each(d, function (key, val) {
                html_body += "<tr>";
                html_body += "<td>" + (key + 1) + "</td>";
                html_body += "<td>" + val.NCC + "</td>";
                html_body += "<td>" + val.TenCty + "</td>";
                html_body += "<td>" + val.SoTK + "</td>";
                html_body += "<td>" + val.NganHang + "</td>";
                html_body += "<td>" + val.NguoiHuongThu + "</td>";
                html_body += "<td>" + val.KiHieuHoaDon1 + "</td>";
                html_body += "<td>" + val.KiHieuHoaDon2 + "</td>";
                html_body += "<td>";
                html_body += "<button type=\"button\" attrId=\"" + val.Id + "\" class=\"btn btn-warning btn-sua-ncc\">Sửa</button> <button type=\"button\" attrId=\"" + val.Id + "\" class=\"btn btn-danger btn-xoa-ncc\">Xóa</button>";
                html_body += "</td>";
                html_body += "</tr>";
            });

            $("#tbl-chiho-ncc tbody").empty().append(html_body);
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }

    });
}

function fncClick() {

    $("#tbl-chiho-ncc").on("click", ".btn-xoa-ncc", function () {
        var conf = confirm("Bạn có muốn xóa nhà cung cấp này không?");
        if (conf) {
            var Id = $(this).attr("attrId");
            ajaxGet = { "get": Id }
            jsonData = JSON.stringify({ ajaxGet });
            $.ajax({
                type: "POST",
                url: "QuanLyChiHoNCC.aspx/DeleteNCC",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    console.log(d)
                    if (d == "ok") {
                        fncLoad();
                        swal.fire({
                            title: "Xóa nhà cung cấp thành công",
                            text: "hệ thống sẽ tự tải lại sau 2s",
                            type: 'success',
                            timer: 2000,
                        })
                    }
                },
                error: function (responsive) {
                    alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
                }
            })
        }
    });
    $(".btn-luu-ncc").click(function () {
        InsertUpdateNCC("");
    });

    $(".btn-capnhat-ncc").click(function () {
        var Id = $(this).attr("attrId");
        InsertUpdateNCC(Id);
    });

    $(".btn-chiho-ncc").click(function () {
        $("#myModalViewChiHoNCC").modal({ backdrop: 'static' }, "show");
        $("#h4-chiho-ncc-view-tieude").empty().append("Thêm mới nhà cung cấp");
        $(".btn-capnhat-ncc").hide();
        $(".btn-luu-ncc").show();
    });

    $("#tbl-chiho-ncc").on("click", ".btn-sua-ncc", function () {
        Id = $(this).attr("attrid");
        $(".btn-capnhat-ncc").attr("attrId", Id)
        $("#myModalViewChiHoNCC").modal({ backdrop: 'static' }, "show");
        $("#h4-chiho-ncc-view-tieude").empty().append("Cập nhật nhà cung cấp");
        $(".btn-capnhat-ncc").show();
        $(".btn-luu-ncc").hide();
        //alert(Id)
        ajaxGet = { "get": Id };
        jsonData = JSON.stringify({ ajaxGet });

        $.ajax({
            type: "POST",
            url: "QuanLyChiHoNCC.aspx/reNCCById",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                $("#input-chiho-ncc").val(d.NCC);
                $("#input-chiho-ncc-tencongty").val(d.TenCty);
                $("#input-chiho-ncc-kihieuhd1").val(d.KiHieuHoaDon1);
                $("#input-chiho-ncc-kihieuhd2").val(d.KiHieuHoaDon2);
                $("#input-chiho-ncc-sotk").val(d.SoTK);
                $("#input-chiho-ncc-nganhang").val(d.NganHang);
                $("#input-chiho-ncc-nguoihuongthu").val(d.NguoiHuongThu);
            },
            error: function (responsive) {
                alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
            }

        })
    });
}

function fncChange() {

}

function fncModal() {
    $('#myModalViewChiHoNCC').on('hide.bs.modal', function () {
        $("#input-chiho-ncc").val("");
        $("#input-chiho-ncc-tencongty").val("");
        $("#input-chiho-ncc-kihieuhd1").val("");
        $("#input-chiho-ncc-kihieuhd2").val("");
        $("#input-chiho-ncc-sotk").val("");
        $("#input-chiho-ncc-nganhang").val("");
        $("#input-chiho-ncc-nguoihuongthu").val("");
    })
}

function InsertUpdateNCC(Id) {
    chiHo_NCC = {
        "Id": Id,
        "NCC": $("#input-chiho-ncc").val(),
        "TenCty": $("#input-chiho-ncc-tencongty").val(),
        "SoTK": $("#input-chiho-ncc-sotk").val(),
        "NganHang": $("#input-chiho-ncc-nganhang").val(),
        "NguoiHuongThu": $("#input-chiho-ncc-nguoihuongthu").val(),
        "KiHieuHoaDon1": $("#input-chiho-ncc-kihieuhd1").val(),
        "KiHieuHoaDon2": $("#input-chiho-ncc-kihieuhd2").val(),
    };

    var messageTitle = "Thêm mới nhà cung cấp thành công!";
    if (Id != "") {
        messageTitle = "Cập nhật nhà cung cấp thành công!";
    }


    $.ajax({
        type: "POST",
        url: "QuanLyChiHoNCC.aspx/InsertUpdateNCC",
        data: JSON.stringify({ chiHo_NCC }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            console.log(d)
            if (d == "ok") {
                fncLoad();
                $("#myModalViewChiHoNCC").modal("hide");
                swal.fire({
                    title: messageTitle,
                    text: "hệ thống sẽ tự tải lại sau 2s",
                    type: 'success',
                    timer: 2000,
                })
            }
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }

    })
}