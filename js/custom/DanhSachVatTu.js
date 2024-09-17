var dataJSON;
var ajaxGet;
var ajaxGet2;
var ajaxGet3;
var jsonData;

$(document).ready(function () {
    fnLoad();
    fnClick();
    hideModalDanhsachvattu();

});

// Load danh sách vật tư
function fnLoad() {
    var ajaxGet = { "ajaxGet": "" };
    dataJSON = JSON.stringify({ ajaxGet });

    $.ajax({
        type: "POST",
        url: "DanhSachVatTu.aspx/listDanhSachVatTu",
        data: dataJSON,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            var d = responsive.d;
            //console.log(d);
            var html_table_danhsachvattu = "";

            $.each(d, function (key, item) {
                html_table_danhsachvattu += "<tr>";
                html_table_danhsachvattu += "<td>" + (key + 1) + "</td>";
                html_table_danhsachvattu += "<td>" + item.MaVatTu + "</td>";
                html_table_danhsachvattu += "<td class=\"td-TenVatTu\">" + item.TenVatTu + "</td>";
                html_table_danhsachvattu += "<td>" + item.DonViTinh + "</td>";
                html_table_danhsachvattu += "<td>" + item.TrongLuong + "</td>";
                html_table_danhsachvattu += "<td>" + item.KichThuoc + "</td>";
                html_table_danhsachvattu += "<td>" + item.ThongSoKhac + "</td>";
                html_table_danhsachvattu += "<td>" + fncRongTraVeZero(item.SoLuong) + "</td>";
                html_table_danhsachvattu += "<td>" + item.Anh + "</td>";
                html_table_danhsachvattu += "<td><button type=\"button\" id=\"btn-update-dsvt\" updateId=" + item.Id + " class=\"btn btn-warning btn-sm\">Sửa</button>&nbsp;&nbsp;&nbsp;<button type=\"button\" id=\"btn-delete-dsvt\" deleteId=" + item.Id + " class=\"btn btn-danger btn-sm\">Xóa</button></td>";
                html_table_danhsachvattu += "</tr>";
            });

            $("#tbl-danhsachvattu tbody").empty();
            $("#tbl-danhsachvattu tbody").append(html_table_danhsachvattu);
            //$("#tbl-danhsachvattu").dataTable();
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
};
function fnClick() {
    // click hiển thị modal thêm vật tư
    $("#btn-danhsachvattu").click(function () {
        $("#div-modal-themsua-danhsachvattu").modal("show");
        $(".modal-title-1").text("Thêm vật tư");
        $("#btn-Update").hide();
        $("#btn-AddNew").show();
    });

    // click add-new danh sách vật tư
    $("#btn-AddNew").click(function () {
        var txtMavattu = $("#txtMavattu").val();
        var txtTenvattu = $("#txtTenvattu").val();
        var txtDonvitinh = $("#select-Donvitinh").val();
        var txtTrongluong = $("#txtTrongluong").val();
        var txtKichthuoc = $("#txtKichthuoc").val();
        var txtThongsokhac = $("#txtThongsokhac").val();
        var txtSoLuongTon = $("#txtSoLuongTon").val();

        if (txtMavattu == "") {
            $("#error-Mavattu").text("Vui lòng nhập mã vật tư");
            return false;
        }

        if (txtTenvattu == "") {
            $("#error-Tenvattu").text("Vui lòng nhập tên vật tư");
            return false;
        }

        var obj = {};
        obj.MaVatTu = txtMavattu;
        obj.TenVatTu = txtTenvattu;
        obj.DonViTinh = txtDonvitinh;
        obj.TrongLuong = txtTrongluong;
        obj.KichThuoc = txtKichthuoc;
        obj.ThongSoKhac = txtThongsokhac;
        obj.SoLuong = txtSoLuongTon;

        dataJSON = JSON.stringify({ "dsVattu": obj });
        console.log(dataJSON);

        $.ajax({
            type: "POST",
            url: "DanhSachVatTu.aspx/insertDanhsachvattu",
            data: dataJSON,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                $("#div-modal-themsua-danhsachvattu").modal("hide");
                fnLoad();
                Swal.fire({
                    title: "Thêm thành công!",
                    text: "",
                    type: 'success',
                    timer: 2000,
                })

            },
            error: function (errormessage) {
                console.log("Lỗi :" + errormessage);
            }
        });
    });

    // get by id danh sách vật tư
    $("#tbl-danhsachvattu").on("click", "#btn-update-dsvt", function () {
        $("#btn-AddNew").hide();
        $("#btn-Update").show();
        $("#div-modal-themsua-danhsachvattu").modal("show");

        $("#btn-Update").attr("data-update", $(this).attr("updateId"));

        ajaxGet = { "get": $(this).attr("updateId") };
        jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "DanhSachVatTu.aspx/GetDanhSachVatTuById",
            data: jsonData,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                $(".modal-title-1").text("Cập nhật vật tư" + "(" + d.Id + ")");

                $("#txtMavattu").val(d.MaVatTu);
                $("#txtTenvattu").val(d.TenVatTu);
                $('#select-Donvitinh').val(d.DonViTinh.toLowerCase());
                $("#txtTrongluong").val(d.TrongLuong);
                $("#txtKichthuoc").val(d.KichThuoc);
                $("#txtThongsokhac").val(d.ThongSoKhac);
                $("#txtSoLuongTon").val(d.SoLuong);
            },
            error: function (errormessage) {
                console.log("Lỗi :" + errormessage);
            }
        });
    });

    //update quản lý vật tư
    $("#btn-Update").click(function () {

        var txtMavattu = $("#txtMavattu").val();
        var txtTenvattu = $("#txtTenvattu").val();
        var txtDonvitinh = $("#select-Donvitinh option:selected").text();
        var txtTrongluong = $("#txtTrongluong").val();
        var txtKichthuoc = $("#txtKichthuoc").val();
        var txtThongsokhac = $("#txtThongsokhac").val();
        var txtSoLuongTon = $("#txtSoLuongTon").val();

        if (txtMavattu == "") {
            $("#error-Mavattu").text("Vui lòng nhập mã vật tư");
            return false;
        }

        if (txtTenvattu == "") {
            $("#error-Tenvattu").text("Vui lòng nhập tên vật tư");
            return false;
        }

        var obj = {};
        obj.Id = $(this).attr("data-update");
        obj.MaVatTu = txtMavattu;
        obj.TenVatTu = txtTenvattu;
        obj.DonViTinh = txtDonvitinh;
        obj.TrongLuong = txtTrongluong;
        obj.KichThuoc = txtKichthuoc;
        obj.ThongSoKhac = txtThongsokhac;
        obj.SoLuong = txtSoLuongTon;

        dataJSON = JSON.stringify({ "dsVattu": obj });
        //console.log(dataJSON);
        $.ajax({
            type: "POST",
            url: "DanhSachVatTu.aspx/updateDanhsachvattu",
            data: dataJSON,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                $("#div-modal-themsua-danhsachvattu").modal("hide");
                fnLoad();
                Swal.fire({
                    title: "Cập nhật thành công!",
                    text: "",
                    type: 'success',
                    timer: 2000,
                })
            },
            error: function (errormessage) {
                console.log("Lỗi :" + errormessage);
            }
        });
    });

    // Xóa vật tư
    $("#tbl-danhsachvattu").on("click", "#btn-delete-dsvt", function () {
        ajaxGet = { "get": $(this).attr("deleteId") };
        jsonData = JSON.stringify({ ajaxGet });
        Swal.fire({
            title: 'Bạn có muốn xóa vật tư này không ?',
            text: "Hành động này sẽ không thể khôi phục!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý!',
            cancelButtonText: 'Không đồng ý!'
        }).then((result) => {
            if (result.value) {
                $.ajax({
                    type: "POST",
                    url: "DanhSachVatTu.aspx/deleteDanhsachvattu",
                    data: jsonData,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    async: false,
                    success: function (responsive) {
                        d = responsive.d;
                        Swal.fire(
                            'Đã xóa!',
                            'vật tư đã được xóa.',
                            'success'
                        )
                    },
                    error: function () {
                        Swal.fire(
                            'Có lỗi xảy ra!',
                            'Vật tư chưa được xóa. Thử lại hoặc liên hệ IT',
                            'error'
                        )
                    }
                }).done(function () {
                    fnLoad();
                })
            }
        })
    });


    // show modal thêm vật tư bằng excel
    $("#btn-danhsachvattu-excel").click(function () {
        $("#modalVattuExcel").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        //$("#spreadsheet").empty();
        $("#spreadsheet").kendoSpreadsheet({
            columns: 20,
            rows: 200,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var sheet = spreadsheet.activeSheet();
        sheet.range(kendo.spreadsheet.SHEETREF).clear();
        spreadsheet.fromJSON({
            sheets: [{
                name: "Vật tư",
                //showGridLines: true,
                //mergedCells: [
                //    "A1:G1"
                //],
                rows: [{
                    height: 40,
                    cells: [
                        { value: "Mã vật tư", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Tên vật tư", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Đơn vị tính", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Trọng lượng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Kích thước", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Thông số khác", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số lượng tồn kho", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {
                        width: 120
                    },
                    {
                        width: 120
                    },
                    {
                        width: 120
                    },
                    {
                        width: 60
                    },
                    {
                        width: 60
                    },
                    {
                        width: 100
                    },
                    {
                        width: 100
                    },

                ]
            }]
        });

        showmodalVatTuExcel();
        hidemodalVatTuExcel();
    });

    // thêm vật tư băng excel
    $("#btn-themvattu-luu").click(function () {
        var danhsachvattus = [];
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);

        var cell;
        var cell_MaVatTu = "";
        var cell_TenVatTu = "";
        var cell_DonViTinh = "";
        var cell_TrongLuong = "";
        var cell_KichThuoc = "";
        var cell_ThongSoKhac = "";
        var cell_SoLuongTon = "";
        //console.log(data);

        data.forEach(function (dataItem, dataIndex) {
            cell_MaVatTu = "";
            cell_TenVatTu = "";
            cell_DonViTinh = "";
            cell_TrongLuong = "";
            cell_KichThuoc = "";
            cell_ThongSoKhac = "";
            //cell_ThuocVatTu = "";

            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_MaVatTu = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_TenVatTu = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_DonViTinh = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_TrongLuong = cells[cellIndex].value;
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            cell_KichThuoc = cells[cellIndex].value;
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined) {
                            cell_ThongSoKhac = cells[cellIndex].value;
                        }
                        break;
                    case 6:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoLuongTon = cells[cellIndex].value;
                        }
                }
            })

            if (String(cell_MaVatTu).trim() != "" && String(cell_TenVatTu).trim() != "") {
                danhsachvattus.push({
                    "MaVatTu": String(cell_MaVatTu).trim().replace(/ /g, ''),
                    "TenVatTu": String(cell_TenVatTu).trim(),
                    "DonViTinh": String(cell_DonViTinh).trim().replace(/ /g, ''),
                    "TrongLuong": String(cell_TrongLuong).trim().replace(/ /g, ''),
                    "KichThuoc": String(cell_KichThuoc).trim().replace(/ /g, ''),
                    "ThongSoKhac": String(cell_ThongSoKhac).trim().replace(/ /g, ''),
                    "SoLuong": String(cell_SoLuongTon).trim().replace(/ /g, ''),
                });
            }
        })

        var jsonData = JSON.stringify({ danhsachvattus });
        //console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "DanhSachVatTu.aspx/insertvattuExcel",
            data: jsonData,
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (data) {
                if (data.d == "ok") {
                    $("#modalVattuExcel").modal("hide");
                    fnLoad();
                    //alert("Thêm mới User thành công !");
                    Swal.fire({
                        title: "Thêm thành công!",
                        text: "",
                        type: 'success',
                        timer: 2000,
                    })
                }
            },
            error: function (errormessage) { // trả về lỗi
                console.log(errormessage.responseText);
            }
        });
    });


    // end thêm excel
};
function fnChange() {
};

function hideModalDanhsachvattu() {
    $('#div-modal-themsua-danhsachvattu').on('hidden.bs.modal', function (e) {
        fnLoad();
        $("#txtMavattu").val("");
        $("#txtTenvattu").val("");
        $("#txtDonvitinh").val("");
        $("#txtTrongluong").val("");
        $("#txtKichthuoc").val("");
        $("#txtThongsokhac").val("");
        $("#error-Mavattu").text("");
        $("#error-Tenvattu").text("");
        $("#txtSoLuongTon").val("");
        //$("#txtThuocvattu").val("");
    });

}

function hidemodalVatTuExcel() {
    $('#modalVattuExcel').on('hidden.bs.modal', function () { // mở modal
        $("#spreadsheet").empty(); // làm trống bảng tính
    });
}

function showmodalVatTuExcel() {
    $('#modalVattuExcel').on('shown.bs.modal', function () { // mở modal
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // thay đổi kích thước của bảng tính
    });
}
