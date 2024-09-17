var ajaxGet;
var jsonData;
var d;

$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();
})

function fncLoad() {
    // Load Data 
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "XemAnhHoaDonXuat.aspx/reData",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (rp) {
            d = rp.d;
            //console.log(d)
            var html_data = "";
            $.each(d, function (item, val) {
                html_data += "<tr>";
                html_data += "<td>" + (item + 1) + "</td>";
                html_data += "<td>" + val.Type + "</td>"
                html_data += "<td>" + val.MAWB + "</td>"
                html_data += "<td>" + val.FlightNo + "</td>"
                html_data += "<td>" + val.PCS + "</td>"
                html_data += "<td>" + val.GW + "</td>"
                html_data += "<td ><span class=\"btn btn-primary btn-show-img\"  attrMawb=\""+val.MAWB+"\">XEM</span></td>"
                html_data += "<tr>";
            })

            $(".tbl-show-img tbody").append(html_data);
        },
        error: function (err) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)");
        }
    }).done(function (rp) {

    })

}

function fncClick() {
    $(".tbl-show-img tbody").on("click", ".btn-show-img", function () {
        $("#table-filedinhkem tbody").empty();
        $("#myModalLabelActivity").empty();
        $("#myModalActivity").modal("show");
       let mawb_ =  $(this).attr("attrMawb");
        ajaxGet = { "get": mawb_ };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "XemAnhHoaDonXuat.aspx/reFileDinhKemHangXuat",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                var html_filedinhkem = "";
                //console.log(d);
                $.each(d, function (item, val) {
                    html_filedinhkem += "<tr filename=\"" + val.filename + "\" folder=\"" + mawb_ + "\">";
                    html_filedinhkem += "<td>" + (item + 1) + "</td>";
                    html_filedinhkem += "<td>" + "" + "</td>";
                    html_filedinhkem += "<td>" + fncConvertOverSizeText(val.filename) + "</td>";
                    html_filedinhkem += "<td>" + fncConvertSize(val.filesize) + "</td>";
                    html_filedinhkem += "<td>" + "<a class=\"label label-info\" id=\"a-dinhkem-taixuong\">Tải xuống</a>" + "</td>";
                    //html_filedinhkem += "<td>" + "<a class=\"label label-danger\" id=\"a-dinhkem-xoa\">Xóa</a>" + "</td>";
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

    })

    // click tải xuống 
    $("#myModalActivity").on("click", "#a-dinhkem-taixuong", function () {
        window.open("../DownloadFile.aspx?Root=HoaDon&Folder=" + $(this).closest("tr").attr("folder") + "&FileName=" + $(this).closest("tr").attr("filename"));
    })
}

function fncChange() {

}


// Function Other
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