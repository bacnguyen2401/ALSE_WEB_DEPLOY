$(document).ready(function () {

    fncClick();

});


function fncClick() {
    // ngày hiện tại deploy 22/10/2024 version 1
    var d_now_20180131 = new Date();
    //>>>>> hàng không
    ///// click nút báo cáo hàng không
    $("#baocao-hangkhong").click(function () {
        // Load khách hàng

        //
        $(".div-thanhtoan-deltail").hide();
        $("#div-detail-hangkhong").show();
        $("#input-baocao-hangkhong-tu-ngay").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth(), 1));
        $("#input-baocao-hangkhong-den-ngay").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth() + 1, 0));
        $("#input-baocao-hangkhong-tenfile").val($("#select-hangkhong-khachhang").val() + "_" + convertDate($("#input-baocao-hangkhong-tu-ngay").datepicker("getDate"))[8] + "_to_" + convertDate($("#input-baocao-hangkhong-den-ngay").datepicker("getDate"))[8]);
    })
    ///// click nút tạo báo cáo hàng không
    $("#btn-baocao-hangkhong-taobaocao").click(function () {
        // $("#span-text-taobaocao").show();

        var g_tungay = dmy2ymd($("#input-baocao-hangkhong-tu-ngay").val());
        var g_denngay = dmy2ymd($("#input-baocao-hangkhong-den-ngay").val());
        var g_tenfile = $("#input-baocao-hangkhong-tenfile").val().trim();
        var g_customer = $("#select-hangkhong-khachhang").val();
        if (g_tungay == "" || g_denngay == "") {
            Swal.fire({
                title: "Ngày báo cáo không được trống!",
                text: "",
                type: 'error',

            })
            return false;
        }

        // load dữ liệu
        var ajaxGet4 = { "get1": g_tungay, "get2": g_denngay, "get3": g_customer, "get4": g_tenfile };
        jsonData = JSON.stringify({ ajaxGet4 });
        $.ajax({
            type: "POST",
            url: "/ThanhToan/BaoCao.aspx/ReAirBaoCao",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            //timeout: 120000,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                window.open("../DownloadFile.aspx?Root=ThanhToan&Folder=BAOCAO&FileName=" + g_tenfile + ".xlsx");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {



        });

    })

    $("#div-detail-hangkhong").on("change", ".hangkhong-data-change", function () {
        $("#input-baocao-hangkhong-tenfile").val($("#select-hangkhong-khachhang").val() + "_" + convertDate($("#input-baocao-hangkhong-tu-ngay").datepicker("getDate"))[8] + "_to_" + convertDate($("#input-baocao-hangkhong-den-ngay").datepicker("getDate"))[8]);
    })
    //<<<<< END hàng không



    //>>>>> HÀNG THƯỜNG
    ///// click nút báo cáo hàng thường
    $("#baocao-hangthuong").click(function () {
        // Load khách hàng
        LoadHangThuongCustomersList();
        var x = document.getElementById("select-hangthuong-khachhang");
        x.remove(0);


        //
        $(".div-thanhtoan-deltail").hide();
        $("#div-detail-hangthuong").show();
        $("#input-baocao-hangthuong-tu-ngay").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth(), 1));
        $("#input-baocao-hangthuong-den-ngay").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth() + 1, 0));
        $("#input-baocao-hangthuong-tenfile").val($("#select-hangthuong-khachhang").val() + "_" + convertDate($("#input-baocao-hangthuong-tu-ngay").datepicker("getDate"))[8] + "_to_" + convertDate($("#input-baocao-hangthuong-den-ngay").datepicker("getDate"))[8]);
    })
    ///// click nút tạo báo cáo hàng thường
    $("#btn-baocao-hangthuong-taobaocao").click(function () {
        // $("#span-text-taobaocao").show();

        var g_tungay = dmy2ymd($("#input-baocao-hangthuong-tu-ngay").val());
        var g_denngay = dmy2ymd($("#input-baocao-hangthuong-den-ngay").val());
        var g_tenfile = $("#input-baocao-hangthuong-tenfile").val().trim();
        var g_customer = $("#select-hangthuong-khachhang").val();
        if (g_tungay == "" || g_denngay == "") {
            Swal.fire({
                title: "Ngày báo cáo không được trống!",
                text: "",
                type: 'error',

            })
            return false;
        }

        // load dữ liệu
        var ajaxGet4 = { "get1": g_tungay, "get2": g_denngay, "get3": g_customer, "get4": g_tenfile };
        jsonData = JSON.stringify({ ajaxGet4 });
        $.ajax({
            type: "POST",
            url: "/ThanhToan/BaoCao.aspx/ReHangThuongBaoCao",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            //timeout: 120000,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                window.open("../DownloadFile.aspx?Root=ThanhToan&Folder=BAOCAO&FileName=" + g_tenfile + ".xlsx");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {



        });

    })

    $("#div-detail-hangthuong").on("change", ".hangthuong-data-change", function () {
        $("#input-baocao-hangthuong-tenfile").val($("#select-hangthuong-khachhang").val() + "_" + convertDate($("#input-baocao-hangthuong-tu-ngay").datepicker("getDate"))[8] + "_to_" + convertDate($("#input-baocao-hangthuong-den-ngay").datepicker("getDate"))[8]);
    })
    //<<<<< END HÀNG THƯỜNG

    /// DGR
    $("#baocao-dgr").click(function () {

        $(".div-thanhtoan-deltail").hide();
        $("#div-detail-dgr").show();
        $("#input-baocao-dgr-tu-ngay").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth(), 1));
        $("#input-baocao-dgr-den-ngay").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth() + 1, 0));
        $("#input-baocao-dgr-tenfile").val("DGR_" + convertDate($("#input-baocao-dgr-tu-ngay").datepicker("getDate"))[8] + "_to_" + convertDate($("#input-baocao-dgr-den-ngay").datepicker("getDate"))[8]);
    })

    $("#btn-baocao-dgr-taobaocao").click(function () {
        var g_tungay = dmy2ymd($("#input-baocao-dgr-tu-ngay").val());
        var g_denngay = dmy2ymd($("#input-baocao-dgr-den-ngay").val());
        var g_tenfile = $("#input-baocao-dgr-tenfile").val().trim();
        if (g_tungay == "" || g_denngay == "") {
            Swal.fire({
                title: "Ngày báo cáo không được trống!",
                text: "",
                type: 'error',
            })
            return false;
        }

        // load dữ liệu
        var ajaxGet3 = { "get1": g_tungay, "get2": g_denngay, "get3": g_tenfile };
        jsonData = JSON.stringify({ ajaxGet3 });
        $.ajax({
            type: "POST",
            url: "../DGR.aspx/ReDGRBaoCao",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                window.open("../DownloadFile.aspx?Root=DGR&Folder=REPORT&FileName=" + g_tenfile + ".xlsx");
            },
            error: function () {
            }
        }).done(function () {
        });


    })
    $("#div-detail-dgr").on("change", ".dgr-data-change", function () {
        $("#input-baocao-dgr-tenfile").val("DGR_" + convertDate($("#input-baocao-dgr-tu-ngay").datepicker("getDate"))[8] + "_to_" + convertDate($("#input-baocao-dgr-den-ngay").datepicker("getDate"))[8]);
    })
    /// END DGR

    /// LOGISTICS   
    ///// click nút dịch vụ logistics
    $("#baocao-logistics").click(function () {


        $(".div-thanhtoan-deltail").hide();
        $("#div-detail-logistics").show();
        $("#input-baocao-logistics-tu-ngay").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth(), 1));
        $("#input-baocao-logistics-den-ngay").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth() + 1, 0));
        $("#input-baocao-logistics-tenfile").val($("#select-logistics-khachhang").val() + "_" + convertDate($("#input-baocao-logistics-tu-ngay").datepicker("getDate"))[8] + "_to_" + convertDate($("#input-baocao-logistics-den-ngay").datepicker("getDate"))[8]);
    })
    ///// click button kiết xuất bản kê logistic
    $("#btn-baocao-logistics-taobaocao").click(function () {
        var g_tungay = dmy2ymd($("#input-baocao-logistics-tu-ngay").val());
        var g_denngay = dmy2ymd($("#input-baocao-logistics-den-ngay").val());
        var g_tenfile = $("#input-baocao-logistics-tenfile").val().trim();
        var g_customer = $("#select-logistics-khachhang").val();
        if (g_tungay == "" || g_denngay == "") {
            Swal.fire({
                title: "Ngày báo cáo không được trống!",
                text: "",
                type: 'error',

            })
            return false;
        }
        //console.log("fire");
        // load dữ liệu
        var ajaxGet4 = { "get1": g_tungay, "get2": g_denngay, "get3": g_customer, "get4": g_tenfile };
        jsonData = JSON.stringify({ ajaxGet4 });
        $.ajax({
            type: "POST",
            url: "/ThanhToan/BaoCao.aspx/ReLogisticsBaoCao",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                window.open("../DownloadFile.aspx?Root=ThanhToan&Folder=BAOCAO&FileName=" + g_tenfile + ".xlsx");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {



        });
    })

    $("#div-detail-logistics").on("change", ".logistics-data-change", function () {
        $("#input-baocao-logistics-tenfile").val($("#select-logistics-khachhang").val() + "_" + convertDate($("#input-baocao-logistics-tu-ngay").datepicker("getDate"))[8] + "_to_" + convertDate($("#input-baocao-logistics-den-ngay").datepicker("getDate"))[8]);
    })
    /// END LOGISTICS 
    /// CHI TIẾT VẬN TẢI   
    ///// click nút dịch vụ logistics
    $("#baocao-chitietvantai").click(function () {


        $(".div-thanhtoan-deltail").hide();
        $("#div-detail-chitietvantai").show();
        $("#input-baocao-chitietvantai-tu-ngay").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth(), 1));
        $("#input-baocao-chitietvantai-den-ngay").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth() + 1, 0));
        $("#input-baocao-chitietvantai-tenfile").val("BC_KIEMSOATVANTAI_" + $("#select-chitietvantai-dichvu").val() + "_" + $("#select-chitietvantai-nhacungcap").val() + "_" + convertDate($("#input-baocao-chitietvantai-tu-ngay").datepicker("getDate"))[8] + "_to_" + convertDate($("#input-baocao-chitietvantai-den-ngay").datepicker("getDate"))[8]);
        //fncNhaCungCapVanTai();

    })


    ///// click button kiết xuất bản kê logistic
    $("#btn-baocao-chitietvantai-taobaocao").click(function () {
        var g_tungay = dmy2ymd($("#input-baocao-chitietvantai-tu-ngay").val());
        var g_denngay = dmy2ymd($("#input-baocao-chitietvantai-den-ngay").val());
        var g_tenfile = $("#input-baocao-chitietvantai-tenfile").val().trim();
        var g_dichvu = $("#select-chitietvantai-dichvu").val();
        var g_nhacungcap = $("#select-chitietvantai-nhacungcap").val();
        if (g_tungay == "" || g_denngay == "") {
            Swal.fire({
                title: "Ngày báo cáo không được trống!",
                text: "",
                type: 'error',

            })
            return false;
        }
        //console.log("fire");
        // load dữ liệu
        var ajaxGet5 = { "get1": g_tungay, "get2": g_denngay, "get3": g_dichvu, "get4": g_nhacungcap, "get5": g_tenfile };
        jsonData = JSON.stringify({ ajaxGet5 });
        $.ajax({
            type: "POST",
            url: "/ThanhToan/BaoCao.aspx/ReChiTietVanTaiBaoCao",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                window.open("../DownloadFile.aspx?Root=ThanhToan&Folder=BAOCAO&FileName=" + g_tenfile + ".xlsx");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {



        });
    })

    $("#div-detail-chitietvantai").on("change", ".chitietvantai-data-change", function () {
        $("#input-baocao-chitietvantai-tenfile").val("BC_KIEMSOATVANTAI_" + $("#select-chitietvantai-dichvu").val() + "_" + $("#select-chitietvantai-nhacungcap").val() + "_" + convertDate($("#input-baocao-chitietvantai-tu-ngay").datepicker("getDate"))[8] + "_to_" + convertDate($("#input-baocao-chitietvantai-den-ngay").datepicker("getDate"))[8]);
    })
    /// END  CHI TIẾT VẬN TẢI

    /// CHI TIẾT TÍNH CHARGEWEIGHT
    ///// click nút dịch vụ Chargeweight
    $("#baocao-chitietcw").click(function () {


        $(".div-thanhtoan-deltail").hide();
        $("#div-detail-chitietcw").show();
        $("#input-baocao-chitietcw-tu-ngay").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth(), 1));
        $("#input-baocao-chitietcw-den-ngay").datepicker("setDate", new Date(d_now_20180131.getFullYear(), d_now_20180131.getMonth() + 1, 0));
        $("#input-baocao-chitietcw-tenfile").val("CHITIETCW_" + $("#select-chitietcw-cargoterminal").val() + "_" + $("#select-chitietcw-fwd").val() + "_" + convertDate($("#input-baocao-chitietcw-tu-ngay").datepicker("getDate"))[8] + "_to_" + convertDate($("#input-baocao-chitietcw-den-ngay").datepicker("getDate"))[8]);

        fncLoadFWD();
    })

    $("#div-detail-chitietcw").on("change", ".chitietcw-data-change", function () {
        $("#input-baocao-chitietcw-tenfile").val("CHITIETCW_" + $("#select-chitietcw-cargoterminal").val() + "_" + $("#select-chitietcw-fwd").val() + "_" + convertDate($("#input-baocao-chitietcw-tu-ngay").datepicker("getDate"))[8] + "_to_" + convertDate($("#input-baocao-chitietcw-den-ngay").datepicker("getDate"))[8]);
    })

    ///// click button kiết xuất bản kê chargeweight
    $("#btn-baocao-chitietcw-taobaocao").click(function () {
        //dmy2ymd()
        var g_tungay = $("#input-baocao-chitietcw-tu-ngay").val();
        var g_denngay = $("#input-baocao-chitietcw-den-ngay").val();
        var g_tenfile = $("#input-baocao-chitietcw-tenfile").val().trim();
        var g_cargoterminal = $("#select-chitietcw-cargoterminal").val();
        var g_FWD = $("#select-chitietcw-fwd").val();
        var g_duyetsli = $("#select-chitietcw-duyetsli").val();
        if (g_tungay == "" || g_denngay == "") {
            Swal.fire({
                title: "Ngày báo cáo không được trống!",
                text: "",
                type: 'error',

            })
            return false;
        }
        //console.log(g_tungay);
        //console.log(g_denngay);
        // load dữ liệu
        var ajaxGet6 = { "get1": g_tungay, "get2": g_denngay, "get3": g_cargoterminal, "get4": g_FWD, "get5": g_duyetsli, "get6": g_tenfile };
        jsonData = JSON.stringify({ ajaxGet6 });
        $.ajax({
            type: "POST",
            url: "/ThanhToan/BaoCao.aspx/ReBaoCaoChargeWeight",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function () {
                // Hiển thị loading trước khi gửi request
                showLoading();
            },
            success: function (responsive) {
                d = responsive.d;
                //console.log(d);
                window.open("../DownloadFile.aspx?Root=ThanhToan&Folder=BAOCAO&FileName=" + g_tenfile + ".xlsx");
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            },
            complete: function () {
                // Ẩn loading khi hoàn tất request
                hideLoading();
            }
        }).done(function () {
        });
       

    })
    ///END CHI TIẾT TÍNH CHARGEWEIGHT
}

function LoadHangThuongCustomersList() {

    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "../ReportQuanLyKhoThuong.aspx/LoadCustomers",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            if (d != null && d.length > 0) {

                var customersList = "";

                customersList += "<option value=" + "ALL" + ">" + "ALL" + "</option>";

                $.each(d, function (item, val) {
                    customersList += "<option value=" + val.makh + ">" + val.tenkh + "</option>";
                });
                $("#select-hangthuong-khachhang").empty();
                $("#select-hangthuong-khachhang").append(customersList);
            }
        },
        error: function () {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)");
        }
    }).done(function () {
        // //$("#div-wait").hide();
    });
}

function fncLoadFWD() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "BaoCao.aspx/reFWDChargeWeght",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;

            var html_option = "<option value=\"\"></option>";
            html_option += "<option value=\"DHL.%\">DHL.%</option>";
            html_option += "<option value=\"SCK.%\">SCK.%</option>";
            html_option += "<option value=\"EI.%\">EI.%</option>";
            $.each(d, function (key, val) {
                html_option += "<option value=\"" + val.FWD + "\">" + val.FWD + "</option>"
            });
            $("#dataFWD").empty().append(html_option);
        },
        error: function () {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)");
        }
    }).done(function () {
        // //$("#div-wait").hide();
    });
}

// Bắc bỏ phần load nhà cung cấp vận tải vì phần view có quá nhiều nhà cc vận tải
//function fncNhaCungCapVanTai() {

//    ajaxGet = { "get": "" };
//    jsonData = JSON.stringify({ ajaxGet });
//    $.ajax({
//        type: "POST",
//        url: "BaoCao.aspx/ReVanTaiBaoCao_DonViVanChuyen",
//        data: jsonData,
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        async: false,
//        success: function (responsive) {
//            d = responsive.d;

//            if (d != null && d.length > 0) {

//                var customersList = "";

//                customersList += "<option value=" + "ALL" + ">" + "1. Tất Cả" + "</option>";

//                $.each(d, function (item, val) {
//                    customersList += "<option value=" + val.DonViVanChuyen + ">" + (item+ 2).toString() + ". " + val.DonViVanChuyen + "</option>";
//                });
//                $("#select-chitietvantai-nhacungcap").empty();
//                $("#select-chitietvantai-nhacungcap").append(customersList);
//            }
//        },
//        error: function () {
//            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)");
//        }
//    }).done(function () {
//        // //$("#div-wait").hide();
//    });

//}
// Hàm để hiển thị hiệu ứng loading
function showLoading() {
    document.getElementById('loading').style.display = 'flex';
}

// Hàm để ẩn hiệu ứng loading
function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}