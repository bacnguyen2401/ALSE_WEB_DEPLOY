
var html_thead = "";
var html_tbody = "";
var html_tbody_daduyet = "";
var ajaxGet;
var ajaxGet2;
var ajaxGet3;
var ajaxGet4;
var d;
var html_noilamviec;
var noilamviec;
var newDateTime;
var dimuon_id = "0"
$(document).ready(function () {
    fncChange();
    fncClick();
    fncLoad();
})

function fncLoad() {
    LoadSelectThangNam();
    LoadTableDiMuon(LoadDSDiMuon(newDateTime.getFullYear(), (newDateTime.getMonth() + 1), "0", returnSplit($("#select-noilamviec").val()).join("")));
}
function fncClick() {
    XemClick();
    KhongMuonClick();
    CapNhatClick();
    LuuClick();
    fncNoiLamViec();
    ChangeSelect();
}
function fncChange() {

}

function fncNoiLamViec() {
    ajaxGet2 = { "get1": $("#select-thang").val(), "get2": $("#select-nam").val() };
    jsonData = JSON.stringify({ ajaxGet2 });
    $.ajax({
        type: "POST",
        url: "DiMuon.aspx/ListNoiLamViec",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            html_noilamviec = "";
            //console.log(d)
            html_noilamviec += "<option value=\"ALL\">Tất cả</option>"
            $.each(d, function (key, val) {
                html_noilamviec += "<option value=\"" +val.NoiLamViec + "\">" + val.NoiLamViec + "</option>"
            })

            $("#select-noilamviec").empty().append(html_noilamviec)

        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {

    });
}

function ChangeSelect() {
    $("#select-noilamviec").change(function () {
        LoadTableDiMuon(LoadDSDiMuon(newDateTime.getFullYear(), (newDateTime.getMonth() + 1), "0", returnSplit($(this).val()).join("")));
    })
}

function LoadSelectThangNam() {
    newDateTime = new Date();
    $("#select-nam").val(newDateTime.getFullYear());
    $("#select-thang").val(newDateTime.getMonth() + 1);


}
var count_dimuon = 0;
function LoadTableDiMuon(d) {
    html_tbody = "";
    html_tbody_daduyet = "";
    var class_noilamviec = "";

    $.each(d, function (index, item) {
        switch ((item.NoiLamViec).trim()) {
            case "VSIP":
                class_noilamviec = "td-vsip";
                break;
            case "Yên Phong":
                class_noilamviec = "td-yenphong";
                break;
            case "Nội Bài":
                class_noilamviec = "td-noibai";
            case "Văn Phòng":
                class_noilamviec = "td-vanphong";
                break;
        }

        if (item.LyDoDiMuon == "" && item.CanBoChoPhep == "") {
            html_tbody += "<tr>";
            html_tbody += "<td>" + item.NoiLamViec + "</td>";
            html_tbody += "<td>" + item.BoPhan + "</td>";
            html_tbody += "<td>" + item.TenNhanVien + "</td>";
            html_tbody += "<td>" + convertDate(item.NgayGioChamCong)[2] + "</td>";
            html_tbody += "<td class=\"no-admin\">";
            html_tbody += "<input type=\"button\" dimuon-id=\"" + item.ChamCongId + "\" tennhanvien=\"" + item.TenNhanVien + "\" giochamcong=\"" + convertDate(item.NgayGioChamCong)[2] + "\" class=\"btn btn-sms btn-primary btn-khongmuon td-admin " + class_noilamviec + "\" value=\"Không muộn\">";
            html_tbody += "<input type=\"button\" dimuon-id=\"" + item.ChamCongId + "\" class=\"btn btn-sms btn-warning btn-capnhat td-admin " + class_noilamviec + "\" value=\"Cập nhật\">";
            html_tbody += "</td>";
            html_tbody += "</tr>";
        } else {
            html_tbody_daduyet += "<tr>";
            html_tbody_daduyet += "<td>" + item.NoiLamViec + "</td>";
            html_tbody_daduyet += "<td>" + item.BoPhan + "</td>";
            html_tbody_daduyet += "<td>" + item.TenNhanVien + "</td>";
            html_tbody_daduyet += "<td>" + convertDate(item.NgayGioChamCong)[2] + "</td>";
            html_tbody_daduyet += "<td>" + item.LyDoDiMuon + ": " + item.ChiTiet + "</td>";
            html_tbody_daduyet += "<td>" + item.CanBoChoPhep + "</td>";
            html_tbody_daduyet += "<td>" + convertDate(item.NgayDuyet)[2] + "</td>";
            html_tbody_daduyet += "<td class=\"no-admin\">";
            html_tbody_daduyet += "<input type=\"button\" dimuon-id=\"" + item.ChamCongId + "\" tennhanvien=\"" + item.TenNhanVien + "\" giochamcong=\"" + convertDate(item.NgayGioChamCong)[2] + "\" class=\"btn btn-sms btn-primary btn-khongmuon td-admin " + class_noilamviec + "\" value=\"Không muộn\">";
            html_tbody_daduyet += "<input type=\"button\" dimuon-id=\"" + item.ChamCongId + "\" class=\"btn btn-sms btn-warning btn-capnhat td-admin " + class_noilamviec + "\" value=\"Cập nhật\">";
            html_tbody_daduyet += "</td>";
            html_tbody_daduyet += "</tr>";

        }

    })
    $("#tbl-dimuon tbody").empty();
    $("#tbl-dimuon-daduyet tbody").empty();
    $("#tbl-dimuon tbody").append(html_tbody);
    $("#tbl-dimuon-daduyet tbody").append(html_tbody_daduyet);

    //var table = $('#tbl-dimuon').DataTable({
    //    "lengthChange": false,
    //    "paging": false,
    //    "responsive": true,
    //});

    if (count_dimuon == 0) {
        $('#tbl-dimuon').DataTable({
            "responsive": true,
            //"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
            "iDisplayLength": -1,
            "lengthChange": false,
            "paging": false,
            //"language": {
            //   // "search": "Filter data _INPUT_ in a Table",
            //    "searchPlaceholder": ""
            //}
        });
        count_dimuon += 1;
    }

    //table.destroy();
    if ($("#username").attr("userid") == "1" // admin
        //|| $("#username").attr("userid") == "29" // thành px
        //|| $("#username").attr("userid") == "78" // khanhld
        //|| $("#username").attr("userid") == "21" // quyetnv
        //|| $("#username").attr("userid") == "117"// cuongnm
        //|| $("#username").attr("userid") == "74" // hungdd    
    ) {
        $(".td-admin").show();
    } else {
        switch ($("#username").attr("userid")) {
            case "12":// long
            case "29":// thành px
            case "78":// khanhld
            case "21":// quyetnv
            case "117":// cuongnm
            case "74":// hungdd    
            case "194":// quangnv    
                $(".td-vsip").show();
                break;
            case "106":
                $(".td-yenphong").show();
                break;
            case "26":
                $(".td-noibai").show();
                break;
            case "94":
                $(".td-vanphong").show();
                break;
            default:
                $(".no-admin").remove();
        }

    }
}

function LoadDSDiMuon(p_nam, p_thang, dimuon_id , noilamviec) {
    // BEGIN AJAX LOAD 
    //TODO 1.
    //TODO 2.
    //TODO 3.
    var returnd;
    ajaxGet4 = { "get1": p_nam, "get2": p_thang, "get3": dimuon_id, "get4": noilamviec };
    jsonData = JSON.stringify({ ajaxGet4 });
    $.ajax({
        type: "POST",
        url: "DiMuon.aspx/LoadDiMuon",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
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

function KhongMuonClick() {


    $("#tbl-dimuon").on("click", ".btn-khongmuon", function () {
        dimuon_id = $(this).attr("dimuon-id");
        Swal.fire({
            title: 'XÁC NHẬN ' + $(this).attr("tennhanvien") + ' CHẤM CÔNG LÚC ' + $(this).attr("giochamcong") + ' LÀ KHÔNG MUỘN?',
            text: "Hành động này không thể khôi phục lại!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',

            confirmButtonText: 'Đồng ý, Xác nhận!',
            cancelButtonText: 'Hủy'
        }).then(function () {
            UpdateDiMuon(dimuon_id, "0", "", "");
        })
    })


}
function CapNhatClick() {

    $(".tbl-dimuon").on("click", ".btn-capnhat", function () {
        dimuon_id = $(this).attr("dimuon-id");
        $("#btn-luu").attr("dimuon-id", dimuon_id);
        noilamviec = $("#select-noilamviec").val()
        //console.log(dimuon_id)
        //$("#input-chitiet").val(LoadDSDiMuon("", "", dimuon_id)[0].ChiTiet, noilamviec);
        //$("#select-lydo").val(LoadDSDiMuon("", "", dimuon_id)[0].LyDoDiMuon, noilamviec);
        $("#input-chitiet").val(LoadDSDiMuon("", "", dimuon_id), returnSplit(noilamviec).join(""));
        $("#select-lydo").val(LoadDSDiMuon("", "", dimuon_id), returnSplit(noilamviec).join(""));

        $("#myModalCapNhat").modal("show");
    })
}

function LuuClick() {
    $("#btn-luu").click(function () {
        dimuon_id = $(this).attr("dimuon-id");

        UpdateDiMuon(dimuon_id, "1", $("#select-lydo").val(), $("#input-chitiet").val());


        $("#myModalCapNhat").modal("hide");;

    })

}
function XemClick() {
    $("#btn-xem").click(function () {
        LoadTableDiMuon(LoadDSDiMuon($("#select-nam").val(), $("#select-thang").val(), "0", returnSplit($("#select-noilamviec").val()).join("")));
    })
}
function fncDongModal() {
    $("#myModalCapNhat").on('hidden.bs.modal', function () {
        $("#input-chitiet").val("");
        $("#select-lydo").val("Đã thông báo");
    })
}
function UpdateDiMuon(p_dimuon_id, p_dimuon, p_lydodimuon, p_chitiet) {

    // BEGIN AJAX LOAD 
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet4 = { "get1": p_dimuon, "get2": p_lydodimuon, "get3": p_chitiet, "get4": p_dimuon_id };
    jsonData = JSON.stringify({ ajaxGet4 });
    $.ajax({
        type: "POST",
        url: "DiMuon.aspx/UpdateDiMuon",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            LoadTableDiMuon(LoadDSDiMuon($("#select-nam").val(), $("#select-thang").val(), "0", returnSplit($("#select-noilamviec").val()).join("")));
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {

    });
    /// END AJAX LOAD


}

function returnSplit(input) {
    const result = input.split(/\n/);
    return result
}