var d;
var html = "";
var html_sub = "";
var html_sub_menu = "";
var ajaxGet;
var jsonData;
var bcn_MauBaoCao;
var bcn_BaoCao;
var arr_BoPhan = [];
var arr_BaoCaoTheoNgay = [];
var arr_BaoCaoTheoNgay_Temp = [];
var _bophanthutu;
var _noidungbaocao = "";
$(document).ready(function () {
    fncLoad();
    fncModalAction();
    LoadDanhSachBaoCao();
    fncClick();
})

function fncLoad() {

    CKEDITOR.replace('editor1', {
        height: 300,
    });
 }
function fncModalAction() { }
function fncClick() {

    // Click xem báo cáo
    $("#table-baocaongay tbody").on("click", ".td-baocao-xem", function () {
         _bophanthutu = $("#tr-baocaotam-" + $(this).attr("baocaongay")).attr("bophanthutu");
        $("#tr-baocaotam-" + $(this).attr("baocaongay")).remove();

        if (_bophanthutu != $(this).attr("bophanthutu")) {
            $("<tr id=\"tr-baocaotam-" + $(this).attr("baocaongay") +  "\"  bophanthutu=\"" + $(this).attr("bophanthutu") + "\"" + ">"
                + "<td>"
                + "<input type=\"button\" class=\"btn-baocao-sua btn btn-sm btn-warning\" ngaybaocao=\"" + $(this).closest("tr").attr("ngaybaocao")+"\" baocaoindex=\"" + $(this).attr("baocaoindex")+"\" baocaoid=\"" + bcn_BaoCao[$(this).attr("baocaoindex")].Id+"\" value=\"Sửa\">"

                + "</td>"
                + "<td class=\"td-cantrai\" colspan=\""
                + bcn_MauBaoCao.length + "\">"
                + bcn_BaoCao[$(this).attr("baocaoindex")].NoiDungBaoCao
                + "</td></tr>")
                .insertAfter("#tr-baocao-ngay-" + $(this).attr("baocaongay"));
        }
       

    })
    // END Click xem báo cáo
    // Click thêm báo cáo
    $("#table-baocaongay tbody").on("click", ".btn-baocao-them", function () {
        
        $("#span-ngaybaocao").text($(this).closest("tr").attr("ngaybaocao"));
        $("#span-tenbaocao").text($(this).closest("td").attr("bophanten"));
        $("#span-nguoibaocao").text($("#username").text());
       
        CKEDITOR.instances.editor1.setData(bcn_MauBaoCao[$(this).closest("td").attr("bophanthutu")].MauBaoCao);
        $("#modalCEBaoCao").attr("ngaybaocao", $(this).closest("tr").attr("ngaybaocao"));
        $("#modalCEBaoCao").attr("baocaoid", "");
        $("#modalCEBaoCao").attr("maubaocaoid", $(this).closest("td").attr("maubaocaoid"));
        $("#modalCEBaoCao").modal("show");
    })
    // END Click thêm báo cáo
    // Click sửa báo cáo
    $("#table-baocaongay tbody").on("click", ".btn-baocao-sua", function () {
        $("#span-ngaybaocao").text($(this).attr("ngaybaocao"));
        $("#span-tenbaocao").text();
        $("#span-nguoibaocao").text($("#username").text());
        CKEDITOR.instances.editor1.setData(bcn_BaoCao[$(this).attr("baocaoindex")].NoiDungBaoCao);
        $("#modalCEBaoCao").attr("ngaybaocao", "");
        $("#modalCEBaoCao").attr("baocaoid", $(this).attr("baocaoid"));
        $("#modalCEBaoCao").modal("show");

    })
    // END Click sửa báo cáo
    // Click lưu báo cáo
    $("#modalCEBaoCao").on("click", "#btn-baocao-luu", function () {
        _noidungbaocao = CKEDITOR.instances.editor1.getData();
        var _baocaoid = $("#modalCEBaoCao").attr("baocaoid");
        var _ngaybaocao = $("#modalCEBaoCao").attr("ngaybaocao");
        var _maubaocaoid = $("#modalCEBaoCao").attr("maubaocaoid");
        //console.log(_noidungbaocao);
        var cBaoCao = {
            Id: _baocaoid,
            MauBaoCaoId: _maubaocaoid,
            NgayBaoCao: dmy2ymd(_ngaybaocao.replace(/-/g, "/")),
            NoiDungBaoCao: _noidungbaocao,
            ThuTu: "",
            NgayTao: "",
            NguoiTao: "",
            NgaySua: "",
            NguoiSua: "",
        };
        jsonData = JSON.stringify({ cBaoCao });
        //console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "QuanLyBaoCaoNgay.aspx/CUBaoCao",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: d + " báo cáo ngày thành công!",
                    text: "",
                    type: 'success',
                    timer: 2000,
                })
                $("#modalCEBaoCao").modal("hide");
            },
            error: function () {
            }
        }).done(function () {
            LoadDanhSachBaoCao();
        })
    })
    // END Click lưu báo cáo

    // 
}
// Load Danh sách báo cáo
function LoadDanhSachBaoCao() {
    var thead = "";
    var tbody = "";
    var userBaoCao = [];
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    // User Baos cao
    $.ajax({
        type: "POST",
        url: "QuanLyBaoCaoNgay.aspx/ReUserBaoCao",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            console.log(d);

            $.each(d, function (index, item) {
                userBaoCao.push(item);
            })
            //console.log(userBaoCao);
        }
    }).done(function () {
    })
    // end user bao cao

    // thead
  
    $.ajax({
        type: "POST",
        url: "QuanLyBaoCaoNgay.aspx/ReMauBaoCao",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            bcn_MauBaoCao = d;
            arr_BoPhan = [];
            //console.log(d);
            thead += "<tr>";
            thead += "<td rowspan=\"2\">" + "Ngày" + "</td>";
            thead += "<td colspan=\"" + d.length + "\">" + "Bộ Phận" + "</td>";

            thead += "</tr>";

            
            thead += "<tr>";
            arr_BaoCaoTheoNgay = [];
            var temp_BaoCaoTheoNgay = "";
            var temp_BaoCaoTheoNgay_Tao = "";
            $.each(d, function (index, item) {
                arr_BoPhan.push(item.Id);
                if (userBaoCao.indexOf(item.Id) > -1) {
                    temp_BaoCaoTheoNgay_Tao = "<input type=\"button\" class=\"btn-baocao-them btn  btn-sm btn-info\" value=\"Tạo\"/>";
                } else {
                    temp_BaoCaoTheoNgay_Tao = "";
                }
                temp_BaoCaoTheoNgay = "<td class=\"color-red bophanid-" + item.Id + "\" maubaocaoid=\"" + item.Id + "\" bophanthutu=\"" + index + "\" bophanten=\"" + item.BoPhan + "\" >"
                    + temp_BaoCaoTheoNgay_Tao
                    + " Chưa gửi báo cáo" + "</td>";
                arr_BaoCaoTheoNgay.push(temp_BaoCaoTheoNgay);
                thead += "<td >" + item.BoPhan + "</td>";
            })

            thead += "</tr>";
            $("#table-baocaongay thead").empty();
            $("#table-baocaongay thead").append(thead);
        },
        error: function () {
        }
    }).done(function () {
    })
    // end thead
    
    // tbody
    $.ajax({
        type: "POST",
        url: "QuanLyBaoCaoNgay.aspx/ReBaoCao",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            bcn_BaoCao = d;
            ngaybaocao_cu = "";
            arr_BaoCaoTheoNgay_Temp = arr_BaoCaoTheoNgay.slice();
            //console.log(d);
            $.each(d, function (index, item) {
                if (ngaybaocao_cu != item.NgayBaoCao) {
                    if (index != 0) {
                        for (i = 0; i < arr_BaoCaoTheoNgay.length; i++) {
                            tbody +=   arr_BaoCaoTheoNgay_Temp[i] ;
                        }
                        tbody += "</tr>";
                    }
                    tbody += "<tr id=\"tr-baocao-ngay-" + convertDate(item.NgayBaoCao)[6] + "\" ngaybaocao=\"" + convertDate(item.NgayBaoCao)[7]+"\">";
                    tbody += "<td>" + convertDate(item.NgayBaoCao)[1] + "</td>";
                    arr_BaoCaoTheoNgay_Temp = [];
                    arr_BaoCaoTheoNgay_Temp = arr_BaoCaoTheoNgay.slice();
                    ngaybaocao_cu = item.NgayBaoCao;
                }
                if (item.ThuTu != "") {
                    arr_BaoCaoTheoNgay_Temp[parseInt(item.ThuTu) - 1] = "<td class=\"td-baocao-xem\" baocaoindex=\"" + index + "\" baocaongay=\"" + convertDate(item.NgayBaoCao)[6] + "\"  bophanthutu=\"" + item.ThuTu +"\">" //+ "<span>" + "Xem" + "</span>" + "</br>"
                        + ReCEB(item.NguoiTao, item.NgayTao, item.NguoiSua, item.NgaySua) + "</td>";
                }
                
                if (index == d.length - 1) {
                    for (i = 0; i < arr_BaoCaoTheoNgay.length; i++) {
                        tbody +=  arr_BaoCaoTheoNgay_Temp[i] ;
                    }

                    tbody += "</tr>";
                }
            })
            $("#table-baocaongay tbody").empty();
            $("#table-baocaongay tbody").append(tbody);

        }
    }).done(function () {
    })

    // end tbody

    // Load quyền báo cáo

    //$.ajax({
    //    type: "POST",
    //    url: "QuanLyBaoCaoNgay.aspx/ReBaoCao",
    //    data: jsonData,
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    async: false,
    //    success: function (responsive) {
    //        d = responsive.d;
    //    }).done(function () {
    //    })
    // END Load quyền báo cáo


};
/// END Load DS Báo cáo
function ReCEB(_NguoiTao, _NgayTao, _NguoiSua, _NgaySua) {
    var _reCEB = "";
    _reCEB = "Tạo: " + _NguoiTao + " - " + convertDate(_NgayTao)[2];
    if (_NgayTao != _NgaySua) {
        _reCEB += "<br> Cập nhật: " + _NguoiSua + " - " + convertDate(_NgaySua)[2];
    }
    return _reCEB;
}