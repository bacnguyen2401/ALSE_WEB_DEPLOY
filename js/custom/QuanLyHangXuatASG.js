$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();
    modalBCSL();
});


function fncLoad() {

}


function fncClick() {
    // Báo cáo sản lượng
    $("#xemBaoCao").click(function () {
        var date = new Date();
        var tungay = $("#TuNgay").val();
        var denngay = $("#DenNgay").val();
        var daily = $("#selectDaiLy").val();
        var baocao = $("#selectBaoCao").val();

        ajaxGet3 = { "get1": splitDateBaoCao(tungay), "get2": splitDateBaoCao(denngay), "get3": daily };
        JsonData = JSON.stringify({ ajaxGet3 });
        //console.log(JsonData);

        $.ajax({
            type: "POST",
            url: "TrangThaiHangXuatASG.aspx/getBaoCaoHangXuat",
            data: JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                //console.log(responsive);
                d = responsive.d;
                var html_body = "";

                $.each(d, function (key, val) {
                    html_body += "<tr>";
                    html_body += "<td>" + (key + 1) + "</td>";
                    html_body += "<td>" + val.SoMaWB + "</td>";
                    html_body += "<td>" + val.SoKien + "</td>";
                    html_body += "<td>" + val.TrongLuong + "</td>";
                    html_body += "<td>" + val.ChuyenBay + "</td>";
                    html_body += "<td>" + convertDate(val.NgayBayBK)[1] + "</td>";
                    html_body += "<td>" + val.TenHang + "</td>";
                    html_body += "<td>" + val.BKSXeXuat + "</td>";
                    html_body += "<td>" + convertDate(val.NgayXuat)[1] + "</td>";
                    html_body += "<td>" + val.GioXuat + "</td>";
                    html_body += "<td>" + val.MaPV + "</td>";
                    html_body += "<td>" + val.FWD + "</td>";
                    html_body += "<td>" + val.Warehouse + "</td>";
                    html_body += "</tr>";
                });

                $("#table-bao-cao-san-luong-xuat tbody").empty();
                $("#table-bao-cao-san-luong-xuat tbody").append(html_body);
            },
            error: function (messageError) {
                console.log("Lỗi : " + messageError.responseText);
            }
        });
        //window.location.href = "/BaoCaoXuatKho.aspx?ngaydau=" + splitDateBaoCao(tungay) + "&ngaycuoi=" + splitDateBaoCao(denngay) + "&baocao=" + baocao + "&daily=" + daily;
    });
}

function fncChange() {

}

function modalBCSL() {
    $("#abchx").click(function () {
        $("#modal-bcsl").modal("show");
        $("#TuNgay").datepicker();
        $('#TuNgay').datepicker('setDate', 'today');
        $("#DenNgay").datepicker();
        $('#DenNgay').datepicker('setDate', 'today');
    });
}


function splitDateBaoCao(date) {
    var dateSplit = "";
    if (date != "") {
        var arrDate = date.split("/");

        dateSplit = arrDate[2] + "-" + arrDate[1] + "-" + arrDate[0];
    } else {
        date = new Date();
        dateSplit = (date.getFullYear() + 1) + '/' + date.getMonth() + '/' + date.getDate();
    }
    return dateSplit;
}
