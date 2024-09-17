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
    fncLoadTableTuyen(fncLoadDsTuyen("0"));
    fncDongModal();
}
function fncClick() {
    fncThemSuaTuyen();
    fncLuu();
    fncXoaTuyen();
}
function fncChange() {
}
function fncLoadDsTuyen(tuyen_id) {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    var returnd;
    ajaxGet = { "get": tuyen_id };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "Tuyen.aspx/LoadTuyen",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            // console.log(d);
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

function fncThemSuaTuyen() {
    $("#btn-them").click(function () {
        $("#myModalViewTuyen").modal("show");
        $("#h4-tuyen-view-tieude").text("Thêm Tuyến");
        $("#btn-luu").attr("tuyen-id", "0");
    })
    $("#tbl-tuyen").on("click", ".btn-sua", function () {
        $("#myModalViewTuyen").modal("show");
        $("#h4-tuyen-view-tieude").text("Sửa Tuyến Id=" + $(this).attr("tuyen-id"));
        $("#btn-luu").attr("tuyen-id", $(this).attr("tuyen-id"));
        var editTuyenData = fncLoadDsTuyen($(this).attr("tuyen-id"))[0];
        $("#input-tuyen").val(editTuyenData.Tuyen);
        $("#input-origin").val(editTuyenData.Origin);
        $("#input-origincity").val(editTuyenData.OriginCity);
        $("#input-destination").val(editTuyenData.Destination);
        $("#input-destinationcity").val(editTuyenData.DestinationCity);
        $("#input-ghichu").val(editTuyenData.GhiChu);

    })
}

function fncLuu() {
    $("#btn-luu").click(function () {
        var cTuyen = {
            "Id": $(this).attr("tuyen-id"),
            "Tuyen": $("#input-tuyen").val(),
            "Origin": $("#input-origincity").val(),
            "OriginCity": $("#input-origin").val(),
            "Destination": $("#input-destinationcity").val(),
            "DestinationCity": $("#input-destination").val(),
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

        jsonData = JSON.stringify({ cTuyen });
        $.ajax({
            type: "POST",
            url: "Tuyen.aspx/ThemSuaTuyen",
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
            fncLoadTableTuyen(fncLoadDsTuyen("0"));
            $("#myModalViewTuyen").modal("hide");
            
        });
    /// END AJAX LOAD
    })
}
function fncXoaTuyen() {
    
    $("#tbl-tuyen").on("click", ".btn-xoa", function () {
        var tuyen_xoa_id = $(this).attr("tuyen-id");
        Swal.fire({
            title: 'Bạn chắc chắn muốn xóa tuyến này?',
            text: "Hành động này không thể khôi phục lại!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',

            confirmButtonText: 'Đồng ý, xóa tuyến!',
            cancelButtonText: 'Hủy'
        }).then(function () {
            // BEGIN AJAX LOAD 
            //TODO 1.
            //TODO 2.
            //TODO 3.
            ajaxGet = { "get": tuyen_xoa_id };
            jsonData = JSON.stringify({ ajaxGet });
            $.ajax({
                type: "POST",
                url: "Tuyen.aspx/XoaTuyen",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    fncLoadTableTuyen(fncLoadDsTuyen("0"));
                    
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
function fncLoadTableTuyen(d) {
    html_tbody = "";
    $.each(d, function (index, item) {
        html_tbody += "<tr>";        
        html_tbody += "<td>" + item.Tuyen + "</td>";
        html_tbody += "<td class=\"text-align-left\">" + item.OriginCity + "</td>";
        html_tbody += "<td class=\"text-align-left font-weight-bold\">" + item.Origin + "</td>";
        html_tbody += "<td class=\"text-align-left\">" + item.DestinationCity + "</td>";
        html_tbody += "<td class=\"text-align-left font-weight-bold\">" + item.Destination + "</td>";

        html_tbody += "<td>" + item.GhiChu + "</td>";
        html_tbody += "<td>" + "<input type=\"button\" class=\"btn btn-sms btn-warning btn-sua\" value=\"SỬA\"  tuyen-id=\"" + item.Id + "\" />" + "</td>";
        html_tbody += "<td>" + "<input type=\"button\" class=\"btn btn-sms btn-danger btn-xoa\" value=\"XÓA\"  tuyen-id=\"" + item.Id + "\" />" + "</td>";
        html_tbody += "</tr>";
    })
    $("#tbl-tuyen tbody").empty();
    $("#tbl-tuyen tbody").append(html_tbody);

}

function fncDongModal() {
    $("#myModalViewTuyen").on('hidden.bs.modal', function () {
        $("#input-tuyen").val("");
        $("#input-origin").val("");
        $("#input-origincity").val("");
        $("#input-destination").val("");
        $("#input-destinationcity").val("");
        $("#input-ghichu").val("");
    })
}