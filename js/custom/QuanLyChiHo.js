var jsonData;
var ajaxGet;
var ajaxGet1;
var ajaxGet2;
var ajaxGet3;
var html_option;
var chiHo;
var arrayNCC;
var mawbhawb;
var listKhachHang;
var listNCC;
var fileData;
var arrTempData = {};
var arrUploadData = {};
var fileitem = "";
var count_item = 0;
const chDateNow = new Date();
$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();
    fncModal();
    let dropArea = document.getElementById('drop-area');

    // Ngăn chặn hành vi mặc định khi kéo thả
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
        document.body.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    // Thay đổi kiểu dáng khi kéo tệp vào khu vực
    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, () => dropArea.classList.add('hover'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, () => dropArea.classList.remove('hover'), false);
    });
    // Xử lý tệp khi thả
    dropArea.addEventListener('drop', handleDrop, false);
    dropArea.addEventListener('click', () => document.getElementById('f_UploadImage').click());
});

function fncLoad() {
    document.title = "Quản Lý Chi Hộ";
    loadMainView();
    loadKH();
    loadNCC();
    

}

function fncClick() {
    // Click show modal upload file
    $("#tbl-chiho").on("click", "", function () {

    })

    // Click duyệt thanh toán
    $("#btn-duyetthanhtoan").click(function () {
        var _Id = $(this).attr("attrid");
        ajaxGet = { "get": _Id };
        jsonData = JSON.stringify({ ajaxGet });

        $.ajax({
            type: "POST",
            url: "QuanLyChiHo.aspx/UpdateDuyetThanhToan",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "ok") {
                    swal.fire({
                        title: "Duyệt thanh toán thành công",
                        text: "hệ thống sẽ tự tải lại sau 2s",
                        type: 'success',
                        timer: 2000,
                    })
                    fncLoad();
                }

            },
            error: function (responsive) {
                alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
            }
        });
    })

    // Clicl show modal duyệt thanh toán 
    $("#tbl-chiho").on("click", ".btn-chiho-qr", function () {
        var _Id = $(this).attr("attrid");
        var _KihieuHD = $(this).attr("attrKiHieuHD");
        var _Thanhtien = $(this).attr("attrThanhToan");

        $("#modalDuyetThanhToanChiHo").modal("show");
        $("#btn-duyetthanhtoan").attr("attrID", _Id);

        $(".text-amount").empty().append(fncTachPhanNghin(_Thanhtien))

        ajaxGet = { "get": _KihieuHD };
        jsonData = JSON.stringify({ ajaxGet });

        $.ajax({
            type: "POST",
            url: "QuanLyChiHoNCC.aspx/reChiHoByHoaDonKH",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                //console.log(d)
                $(".text-content").empty().append(d.content);
                $("#text-account").empty().append(d.SoTK);
                $("#text-name").empty().append(d.NguoiHuongThu);
                document.getElementById("imgQRCode").src = "https://img.vietqr.io/image/" + d.bin + "-" + d.SoTK + "-compact.png?amount=" + _Thanhtien + "&addInfo=test&accountName=" + d.NguoiHuongThu + "";

            },
            error: function (responsive) {
                alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
            }
        });

    });
    // Lưu chi hộ excel
    $("#btn-chiho-excel-luu").click(function () {
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var data = spreadsheet.toJSON().sheets[0].rows;
        data = data.splice(1, data.length - 1);
        var DataInput = [];
        var cells;
        var cell_NCC;
        var cell_LoaiHinh;
        var cell_AWB;
        var cell_NgayCk;
        var cell_SoHD;
        var cell_NgayHd;
        var cell_SoTienThue;
        var cell_ThanhTien;
        var cell_KhachHang;
        var cell_GhiChu;
        var checkNCC = true;

        data.forEach(function (dataItem, dataIndex) {
            cells = "";
            cell_NCC = "";
            cell_LoaiHinh = "";
            cell_AWB = "";
            cell_NgayCk = "";
            cell_SoHD = "";
            cell_NgayHd = "";
            cell_SoTienThue = "";
            cell_ThanhTien = "";
            cell_KhachHang = "";
            cell_GhiChu = "";
            cells = dataItem.cells;

            cells.forEach(function (cellItem, cellIndex) {
                switch (cellItem.index) {
                    case 0:
                        if (cells[cellIndex].value !== undefined) {
                            cell_NCC = cells[cellIndex].value;
                        }
                        break;
                    case 1:
                        if (cells[cellIndex].value !== undefined) {
                            cell_LoaiHinh = cells[cellIndex].value;
                        }
                        break;
                    case 2:
                        if (cells[cellIndex].value !== undefined) {
                            cell_AWB = cells[cellIndex].value;
                        }
                        break;
                    case 3:
                        if (cells[cellIndex].value !== undefined) {
                            cell_NgayCk = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 4:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoHD = cells[cellIndex].value;
                        }
                        break;
                    case 5:
                        if (cells[cellIndex].value !== undefined) {
                            cell_NgayHd = fncConvertExcelDate(String(cells[cellIndex].value).trim().replace(/ /g, ''));
                        }
                        break;
                    case 6:
                        if (cells[cellIndex].value !== undefined) {
                            cell_SoTienThue = cells[cellIndex].value;
                        }
                        break;
                    case 7:
                        if (cells[cellIndex].value !== undefined) {
                            cell_ThanhTien = cells[cellIndex].value;
                        }
                        break;
                    case 8:
                        if (cells[cellIndex].value !== undefined) {
                            cell_KhachHang = cells[cellIndex].value;
                        }
                        break;
                    case 8:
                        if (cells[cellIndex].value !== undefined) {
                            cell_GhiChu = cells[cellIndex].value;
                        }
                        break;
                }
            })

            DataInput.push(
                {
                    "Id": "",
                    "NCU": String(cell_NCC).trim().replace(/ /g, ''),
                    "LoaiHinh": String(cell_LoaiHinh).trim().replace(/ /g, ''),
                    "NgayCK": String(cell_NgayCk).trim().replace(/ /g, ''),
                    "KhachHang": String(cell_KhachHang).trim().replace(/ /g, ''),
                    "AWBBILL": String(cell_AWB).trim().replace(/ /g, ''),
                    "Check_ChiHo": "",
                    "KiHieuHD": "",
                    "SoHD": String(cell_SoHD).trim().replace(/ /g, ''),
                    "NgayHD": String(cell_NgayHd).trim().replace(/ /g, ''),
                    "TenNguoiBan": "",
                    "PhiChungTuNhap": "",
                    "SoTruocThue": String(cell_SoTienThue).trim().replace(/ /g, ''),
                    "ThanhTien": String(cell_ThanhTien).trim().replace(/ /g, ''),
                    "HoaDonKhach": "",
                    "TrangThaiDNTT": "",
                    "TrangThaiDoiChieuKhach": "",
                    "IdNhap": "",
                    "GhiChu": String(cell_GhiChu).trim().replace(/ /g, '')
                }
            );
        })

        console.log(DataInput)
        for (var i = 0; i < DataInput.length; i++) {
            //Check nhà cung cấp có trong cơ sở dữ liệu không
            if (arrayNCC.indexOf(DataInput[i].NCU) == -1) {
                checkNCC = false;
                break;
            }
        }
        if (checkNCC) {
            $.ajax({
                type: "POST",
                url: "QuanLyChiHo.aspx/InsertChiHoExcel",
                data: JSON.stringify({ DataInput }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    //console.log(d)
                    if (d == "ok") {
                        fncLoad();
                        $("#modalQuanLyChiHoExcel").modal("hide");
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
        } else {
            swal.fire({
                title: "Nhà cung cấp chưa có trong cơ sở dữ liệu",
                text: "hệ thống sẽ tự tải lại sau 5s",
                type: 'warning',
                timer: 5000,
            })
        }
    })
    // Show excel chi hộ
    $(".btn-chiho-kehoach-excel").click(function () {
        $("#modalQuanLyChiHoExcel").modal(
            {
                show: true,
                backdrop: "static",
                keyboard: false
            });
        $("#spreadsheet").empty();
        $("#spreadsheet").kendoSpreadsheet({
            columns: 2,
            rows: 500,
            toolbar: false,
            sheetsbar: false,
        });
        var spreadsheet = $("#spreadsheet").data("kendoSpreadsheet");
        var sheet = spreadsheet.activeSheet();
        sheet.range(kendo.spreadsheet.SHEETREF).clear();
        $(window).trigger("resize");
        spreadsheet.fromJSON({
            sheets: [{
                name: "KeHoach",
                //mergedCells: [
                //    "A1:G1"
                //],
                rows: [{
                    height: 40,
                    cells: [
                        { value: "NCC", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Loại hình", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "AWB/BILL", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Ngày chuyển khoản", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số hợp đồng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Ngày hợp đồng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Số tiền thuế", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Thành tiền", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Khách hàng", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                        , { value: "Ghi chú", textAlign: "center", verticalAlign: "center", bold: true, wrap: true, enable: false }
                    ]
                }],
                columns: [
                    {// NCC
                        width: 100
                    },
                    {// Loại hình
                        width: 100
                    },
                    {// AWB/BILL
                        width: 100
                    },
                    {// Ngày chuyển khoản
                        width: 100
                    },
                    {//Số hợp đồng
                        width: 100
                    },
                    {//Ngày hợp đồng
                        width: 100
                    },
                    {//Số tiền thuế
                        width: 100
                    },
                    {//Thành tiền
                        width: 100
                    },
                    {//Khách hàng
                        width: 100
                    },
                    {//Ghi chú
                        width: 100
                    },
                ]
            }]
        });
    })
    // Chi hộ xóa
    $("#tbl-chiho").on("click", ".btn-chiho-xoa", function () {
        var Id = $(this).attr("attrID");
        var conf = confirm("Bạn có muốn xóa đơn chi hộ này không?")
        if (conf) {

            ajaxGet = { "get": Id };
            jsonData = JSON.stringify({ ajaxGet });

            $.ajax({
                type: "POST",
                url: "QuanLyChiHo.aspx/DeleteChiHo",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    if (d == "ok") {
                        fncLoad();
                        swal.fire({
                            title: "Xóa chi hộ thành công",
                            text: "hệ thống sẽ tự tải lại sau 2s",
                            type: 'warning',
                            timer: 2000,
                        })
                    }
                },
                error: function (responsive) {
                    alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
                }
            });
        }
    })
    // Lưu chi hộ 
    $("#btn-luu-chiho").click(function () {
        if ($("#input-chiho-ncu").val() === "") {
            swal.fire({
                title: "Vui lòng chọn NCC",
                text: "hệ thống sẽ tự tải lại sau 5s",
                type: 'warning',
                timer: 5000,
            })
        } else {
            InsertUpdateChiHo("");
        }
    });
    // Cập nhật chi hộ
    $("#btn-capnhat-chiho").click(function () {
        if ($("#input-chiho-ncu").val() === "") {
            swal.fire({
                title: "Vui lòng chọn NCC",
                text: "hệ thống sẽ tự tải lại sau 5s",
                type: 'warning',
                timer: 5000,
            })
        }
        else {
            InsertUpdateChiHo($(this).attr("attrid"));

        }
    });
    // Sửa chi hộ
    $("#tbl-chiho").on("click", ".btn-chiho-sua", function () {
        var chiHoId= $(this).attr("attrID");
        var chiHoAWBBILL= $(this).attr("AWBBILL");
        $("#myModalViewChiHo").modal({ backdrop: 'static' }, "show");
        $("#btn-capnhat-chiho").attr("attrid", chiHoId)
        $("#h4-chiho-view-tieude").empty().append("Cập nhật chi hộ - " + chiHoAWBBILL);
        $("#btn-luu-chiho").hide();
        $("#btn-capnhat-chiho").show();

        ajaxGet = { "get": chiHoId };
        jsonData = JSON.stringify({ ajaxGet });

        $.ajax({
            type: "POST",
            url: "QuanLyChiHo.aspx/reChiHoById",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                $("#input-chiho-ncu").val(d.NCU);
                $("#select-chiho-loaihinh").val(d.LoaiHinh);
                $("#input-chiho-ngaychuyenkhoan").val(convertDate(d.NgayCK)[1]);
                $("#input-chiho-khachhang").val(d.KhachHang);
                $("#input-chiho-awbbill").val(d.AWBBILL);
                $("#input-chiho-check").val(d.Check_ChiHo);
                $("#input-chiho-kihieuhd").val(d.KiHieuHD);
                $("#input-chiho-sohd").val(d.SoHD);
                $("#input-chiho-ngayhd").val(convertDate(d.NgayHD)[1]);
                $("#input-chiho-tennguoiban").val(d.TenNguoiBan);
                $("#input-chiho-sotienthue").val(fncTachPhanNghin(d.SoTruocThue));
                $("#input-chiho-thanhtien").val(fncTachPhanNghin(d.ThanhTien));
                $("#input-chiho-tt-dck").val(d.TrangThaiDoiChieuKhach);
                $("#input-chiho-tt-dntt").val(d.TrangThaiDNTT);
                $("#input-chiho-idnhap").val(d.IdNhap);
                $("#input-chiho-ghichu").val(d.GhiChu);
                $("#input-chiho-phichungtunhap").val(d.PhiChungTuNhap);
                $("#input-chiho-sodenghithanhtoan").val(d.SoDeNghiThanhToan);
            },
            error: function (responsive) {
                alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
            }

        });
        // load file dinh kem
        fncLoadFileDinhKem(chiHoId);

    });
    // Show modal lưu cho hộ kế hoạch
    $(".btn-chiho-kehoach").click(function () {
        $("#myModalViewChiHo").modal({ backdrop: 'static' }, "show");
        $("#h4-chiho-view-tieude").empty().append("Thêm mới chi hộ");
        $("#btn-luu-chiho").show();
        $("#btn-capnhat-chiho").hide();
        // ngày hiện tại deploy 20/09
        
        $("#input-chiho-ngaychuyenkhoan").datepicker("setDate", new Date(chDateNow.getFullYear(), chDateNow.getMonth() + 1, 0));
        $("#input-chiho-ngayhd").datepicker("setDate", new Date(chDateNow.getFullYear(), chDateNow.getMonth() + 1, 0));

        $("#input-chiho-khachhang").prop('disabled', true);
        $("#input-chiho-awbbill").prop('disabled', true);
        if ($("#tbl-upload-imgzone tbody tr").length === 0) {
            $("#tbl-upload-imgzone tbody").append("<tr><td colspan=\"4\" class=\"text-center\">Không có file upload</td></tr>");
        }


    });
    // delete ảnh trên server 
    ///
    $("#myModalViewChiHo").on("click", "#a-dinhkem-xoa", function () {
        if (confirm("Bạn có chắc chắn muốn xóa tài liệu này không? \r\nHành động này không thể hoàn tác! \r\nTên tài liệu: " + $(this).closest("tr").attr("filename"))) {
            //$("#div-wait").show();
            var xoa_folder = $(this).closest("tr").attr("folder");
            var ajaxGet2 = { "get1": xoa_folder, "get2": $(this).closest("tr").attr("filename") };
            jsonData = JSON.stringify({ ajaxGet2 });
            $.ajax({
                type: "POST",
                url: "QuanLyChiHo.aspx/DeleteFile",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    //fncModalSua($("#myModalViewThanhToan").attr("id-thanhtoan"), $("#myModalViewThanhToan").attr("loai-thanhtoan"));
                    fncLoadFileDinhKem(xoa_folder);
                    alert("Xóa thành công");

                },
                error: function () {
                    alert("Đã có lỗi trong quá trình xóa file!\r\nVui lòng tải lại trang(F5)!\r\nNếu sự cố lặp lại xin liên hệ nhân viên IT");
                }
            }).done(function () {
                //$("#div-wait").hide();
            })
        }
    })
    // Tải ảnh trên server về máy tính
    $("#myModalViewChiHo").on("click", "#a-dinhkem-taixuong", function () {
        window.open("../DownloadFile.aspx?Root=ChiHo&Folder=" + $(this).closest("tr").attr("folder") + "&FileName=" + $(this).closest("tr").attr("filename"));
    })
    
    //delete ảnh
    $("#myModalViewChiHo").on("click", "#a-upload-delete-all", function () {
        arrTempData = {};
        arrUploadData = {};
        $("#tbl-upload-imgzone tbody tr").remove();
        fncResetProcessBar();
    })
    $("#myModalViewChiHo").on('hidden.bs.modal', function () {
        $("#tbl-upload-imgzone tbody").empty();
    })
    // Show ảnh

    $("#myModalViewChiHo").on("change", "#f_UploadImage", function (e) {
        fncResetProcessBar();
        html_imgzone = "";
        var file, img;
        count_item = $("#tbl-upload-imgzone tbody tr.tr-upload-chuaupload").length + $("#tbl-upload-imgzone tbody tr.tr-upload-daupload").length;
        //console.log(count_item);
        $.each(e.target.files, function (item, val) {
            if (val.size < 10000000) {
                var fileExtension = val.name.split('.').pop();
                var awb = $("#input-chiho-awbbill").val();
                var ncc = $("#input-chiho-ncu").val();
                var khachhang = $("#input-chiho-khachhang").val();
                var sohoadon = $("#input-chiho-sohd").val();
                var newFileName = awb + "-" + ncc + "-" + khachhang + "-" + sohoadon + "-" + String(count_item + 1) + "." + fileExtension;
                var newFile = new File([val], newFileName, { type: val.type });
                arrUploadData["file" + count_item] = newFile;
                arrTempData["file" + count_item] = val;
                tmppath = URL.createObjectURL(val);
                html_imgzone += "<tr class=\"tr-upload-chuaupload\">";
                html_imgzone += "<td>" + "<span class=\"span-upload-trangthai label label-default\">" + "Chưa upload" + "</span>" + "</td>";
                //html_imgzone += "<td>" + "<img class=\"img-pre-upload\" src=\"" + tmppath + "\"  alt=\"Photo\" />" + "</td>";
                html_imgzone += "<td>" + newFileName + "</td>";
                html_imgzone += "<td>" + fncConvertSize(val.size) + "</td>";
                html_imgzone += "<td>" + "<a class=\"btn btn-danger btn-sm btn-upload-delete\" fileitem=\"file" + count_item + "\" ><i class=\"glyphicon glyphicon-trash\"></i> Xóa</a>" + "</td>";
                html_imgzone += "</tr>";
                count_item += 1;
            }
        })
        $("#tbl-upload-imgzone").append(html_imgzone);

        $("#tbl-upload-imgzone").on("click", ".btn-upload-delete", function () {
            event.stopPropagation();
            fileitem = $(this).attr("fileitem");
            delete arrTempData[fileitem];
            delete arrUploadData[fileitem];
            $(this).closest("tr").remove();
            fncResetProcessBar();
        })
    })
    $("#tbl-chiho tr td").click(function () {
        $(".tr-highlight").removeClass("tr-highlight");
        $(this).closest("tr").addClass("tr-highlight");
    })
}

function fncChange() {
    $("#input-chiho-thanhtien").change(function () {
        var result = parseInt($(this).val().replace(/,/g, "")) / 1.08;
        $("#input-chiho-sotienthue").val(fncTachPhanNghin(result.toFixed(1)))
    });

    $("#myModalViewChiHo").on("change", "#input-chiho-khachhang", function () {
        // var _loaihinh = $("#select-chiho-loaihinh").val();
        // if (_loaihinh == "") {
        //     alert("Vui lòng chọn loại hình xong tiếp tục chọn khách hàng!");
        // } else {
        //     // load mawb hawb
        //     reMawbHawb($(this).val());
        //     loadAWB(_loaihinh);
        // }
        // Tạo dropdown list Người mua
       var html_option_nguoimua = "<option value=\"ALSE\">ALSE</option>";
       html_option_nguoimua += "<option value=\""+$(this).val()+"\">"+$(this).val()+"</option>";
       html_option_nguoimua += "<option value=\"OTHER\">OTHER</option>";
        $("#sltNguoiMua").empty().append(html_option_nguoimua);
        var khachHangSelected = $(this).val();
        if(khachHangSelected != ""){
            getBillAWB();
            $("#input-chiho-awbbill").prop('disabled', false);
        }else{
            $("#input-chiho-awbbill").prop('disabled', true);
        }
       
    })
    $("#myModalViewChiHo").on("change", "#select-chiho-loaihinh", function () {
        //reMawbHawb($("#select-chiho-khachhang").val());
        //var cb_value = $(this).val();
        //loadAWB(cb_value);
        var loaiHinhSelected = $(this).val();
        if(loaiHinhSelected != ""){
            loadKH(loaiHinhSelected);
            $("#input-chiho-khachhang").prop('disabled', false);
        }else{
            $("#input-chiho-khachhang").prop('disabled', true);
            $("#input-chiho-awbbill").prop('disabled', true);
        }
        
    })

    $("#myModalViewChiHo").on("change", "#input-chiho-ncu", function () {
        var nccSelected = $(this).val();
        if (nccSelected === "") {
            $("#input-chiho-kihieuhd").val("");
            $("#input-chiho-tennguoiban").val("");
        } else {
            
            var tempListNCC = listNCC.filter(function(ncc){
                return ncc.NCC == nccSelected;
            });
            if (tempListNCC.length > 0) {
                $("#input-chiho-kihieuhd").val(tempListNCC[0].KiHieuHoaDon1);
                $("#input-chiho-tennguoiban").val(tempListNCC[0].TenCty);
            }
            
        }
    });
    $('#input-chiho-uploadfile').on('change', function() {
       
        $('#input-chiho-tentep').val($('#input-chiho-awbbill').val() + '-' + $('#input-chiho-ncu').val() + '-' + $('#input-chiho-khachhang').val() + '-' + $('#input-chiho-sodenghithanhtoan').val());
    });
}

function fncModal() {
    $('#modalQuanLyChiHoExcel').on('shown.bs.modal', function () {
        $(document).off('focusin.bs.modal');
        $(window).trigger("resize"); // bug modal > show excel
    });
    $('#myModalViewChiHo').on('hide.bs.modal', function () {
        $("#input-chiho-ncu").val("");
        $("#select-chiho-loaihinh").val("");
        $("#input-chiho-ngaychuyenkhoan").val("");
        $("#input-chiho-khachhang").val("");
        $("#input-chiho-awbbill").val("");
        $("#input-chiho-check").val("");
        $("#input-chiho-kihieuhd").val("");
        $("#input-chiho-sohd").val("");
        $("#input-chiho-ngayhd").val("");
        $("#input-chiho-tennguoiban").val("");
        $("#input-chiho-sotienthue").val("");
        $("#input-chiho-thanhtien").val("");
        $("#input-chiho-tt-dck").val("");
        $("#input-chiho-tt-dntt").val("");
        $("#input-chiho-tt-dck").val("");
        $("#input-chiho-idnhap").val("");
        $("#input-chiho-ghichu").val("");
        $("#input-chiho-sodenghithanhtoan").val("");
        arrTempData = {};
        arrUploadData = {};
        $("#tbl-upload-imgzone tbody tr").remove();
    })
}

function loadMainView(){
    ajaxGet = { "get": "" };  // note get top 10
    jsonData = JSON.stringify({ ajaxGet });

    $.ajax({
        type: "POST",
        url: "QuanLyChiHo.aspx/ReChiHo",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            html_body = "";
            //console.log(d)

            $.each(d, function (key, val) {
                html_body += "<tr>";
                html_body += "<td class=\"\">" + "<input class=\"td-checkbox td-checkbox-child \" id=\"td-checkbox-" + val.AWBBILL + "\" type=\"checkbox\" value=\"" + val.HAWB + "\" tr-attr-sohoadon=\"" + val.SoHD + "\"  tr-attr-kihieu=\"" + val.KiHieuHD + "\" tr-attr-awbbill=\"" + val.AWBBILL + "\"/>" + "</td>";
                html_body += "<td class=\"td-awb\">" + val.NCU.toUpperCase() + "</td>";
                html_body += "<td>" + val.LoaiHinh + "</td>";
                html_body += "<td>" + val.KhachHang.toUpperCase() + "</td>";
                html_body += "<td>" + val.AWBBILL + "</td>";
                // html_body += "<td>" + convertDate(val.NgayCK)[1] + "</td>";
                html_body += "<td>" + val.KiHieuHD + "</td>";
                html_body += "<td>" + val.SoHD + "</td>";
                // html_body += "<td>" + convertDate(val.NgayHD)[1] + "</td>";
                html_body += "<td>" + val.TenNguoiBan + "</td>";
                html_body += "<td>" + val.HoaDonKhach + "</td>";
                html_body += "<td>" + val.PhiChungTuNhap + "</td>";
                html_body += "<td>" + fncTachPhanNghin(val.ThanhTien) + "đ" + "</td>";
                html_body += "<td>" + fncTachPhanNghin(val.SoTruocThue) + "đ" + "</td>";
                //html_body += "<td>" + val.Check_ChiHo + "</td>";
                html_body += "<td>" + val.SoDeNghiThanhToan + "</td>";  
                html_body += "<td>" + val.GhiChu + "</td>";
                // html_body += "<td>" + (val.DuyetThanhToan == 0 ? "<span style=\"color:red\">Chưa thanh toán</span>" : "<span style=\"color:#4CAF50\">Đã thanh toán</span>") + "<br/><a class=\"btn btn-default\" id=\"a-btn-attachfile\"><i class=\"glyphicon glyphicon-paperclip\"></i>Đính Kèm</a>" + "</td>";
                //html_body += "<td>" + val.TrangThaiDoiChieuKhach + "</td>";
                //html_body += "<td>" + val.IdNhap + "</td>";
                html_body += "<td class=\"td-chucnang\">" + "<a class=\"label label-info btn-chiho-dinhkem\" attrID=\"" + val.Id + "\">Đính kèm</a>";
                html_body +=  "<a class=\"label label-success btn-chiho-qr\" attrID=\"" + val.Id + "\" attrThanhToan=\"" + val.ThanhTien + "\" attrKiHieuHD=\"" + val.KiHieuHD + "\">Xem QR</a>";
                // html_body += "<button type =\"button\" class=\"btn btn-success btn-chiho-duyet\" attrThanhToan=\"" + val.ThanhTien + "\" attrKiHieuHD=\"" + val.KiHieuHD + "\" attrID=\"" + val.Id + "\">Duyệt</button> ";
                // html_body += "<button type =\"button\" class=\"btn btn-warning btn-chiho-sua\" attrID=\"" + val.Id + "\">Sửa</button> ";
                // html_body += "<button type=\"button\" class=\"btn btn-danger btn-chiho-xoa\" attrID=\"" + val.Id + "\">Xóa</button></td>";
                html_body += "</br>";
                html_body += "<a class=\"label label-warning btn-chiho-sua\" AWBBILL=\""+ val.AWBBILL+"\" attrID=\"" + val.Id + "\">Sửa</a>";
                html_body += "<a class=\"label label-danger btn-chiho-xoa\" attrID=\"" + val.Id + "\">Xóa</a>" + "</td>";
                html_body += "</tr>";
            });

            $("#tbl-chiho tbody").empty().append(html_body);
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
            console.error("Lỗi xảy ra trong hàm loadMainView: ", responsive);
        }

    });
}

function loadNCC() {
    arrayNCC = [];
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
            listNCC  = responsive.d;
            html_option = "<option value=\"\"></option>"
            $.each(listNCC, function (key, val) {
                html_option += "<option value=\"" + val.NCC.toUpperCase() + "\">" + val.TenCty.toUpperCase()+ "</option>"

                arrayNCC.push(val.NCC.toUpperCase());
            });
            $("#sltNCC").empty().append(html_option);
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
            console.error("Lỗi xảy ra trong hàm loadNCC: ", responsive);
        }

    });
}

function loadKH(loaiHinh) {
    if(loaiHinh == "" || loaiHinh == null){
        ajaxGet = { "get": "" };
        jsonData = JSON.stringify({ ajaxGet });
    
        $.ajax({
            type: "POST",
            url: "QuanLyChiHo.aspx/reKhachHang",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                listKhachHang = responsive.d; 
                //console.log(listKhachHang);
                html_option = "<option value=\"\"></option>"
                $.each(listKhachHang, function (key, val) {
                    html_option += "<option value=\"" + val.KhachHang + "\">" + val.KhachHang + "</option>"
                });
                $("#sltKhachHang").empty().append(html_option);
            },
            error: function (responsive) {
                alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
            }
    
        });
    }else{
        var tempListKhachHang = listKhachHang.filter(function(khachHang){
            return khachHang.LoaiHinh == loaiHinh;
        });
        html_option = "<option value=\"\"></option>"
        $.each(tempListKhachHang, function (key, val) {
            html_option += "<option value=\"" + val.KhachHang + "\">" + val.KhachHang + "</option>"
        });
        $("#sltKhachHang").empty().append(html_option);
    }

    
}

function getBillAWB() {
    ajaxGet2 = { "get1": $("#select-chiho-loaihinh").val(), "get2": $("#input-chiho-khachhang").val() };
    jsonData = JSON.stringify({ ajaxGet2 });

    $.ajax({
        type: "POST",
        url: "QuanLyChiHo.aspx/getBillAWB",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d);
            //mawbhawb = d;
            html_option = "<option value=\"\"></option>"
            $.each(d, function (key, val) {
                html_option += "<option value=\"" + val + "\">" + val + "</option>"
            });
            $("#sltawb").empty().append(html_option);
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }

    });
}

function fncLoadOrigin(input) {
    // BEGIN AJAX LOAD
    //TODO 1.
    //TODO 2.
    //TODO 3.
    ajaxGet = { "get": input };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyChiHoNCC.aspx/reNCCByNCC",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            $("#input-chiho-kihieuhd").val(d.KiHieuHoaDon1);
            $("#input-chiho-tennguoiban").val(d.TenCty);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    }).done(function () {
    });
    /// END AJAX LOAD
}

function InsertUpdateChiHo(Id) {
    chiHo = {
        "Id": Id,
        "NCU": $("#input-chiho-ncu").val(),
        "LoaiHinh": $("#select-chiho-loaihinh").val(),
        "NgayCK": dmy2ymd($("#input-chiho-ngaychuyenkhoan").val()),
        "KhachHang": $("#input-chiho-khachhang").val(),
        "AWBBILL": $("#input-chiho-awbbill").val(),
        "Check_ChiHo": $("#input-chiho-check").val(),
        "KiHieuHD": $("#input-chiho-kihieuhd").val(),
        "SoHD": $("#input-chiho-sohd").val(),
        "NgayHD": dmy2ymd($("#input-chiho-ngayhd").val()),
        "TenNguoiBan": $("#input-chiho-tennguoiban").val(),
        "PhiChungTuNhap": $("#input-chiho-phichungtunhap").val(),
        "SoTruocThue": $("#input-chiho-sotienthue").val().replace(/,/g, ""),
        "ThanhTien": $("#input-chiho-thanhtien").val().replace(/,/g, ""),
        "HoaDonKhach": $("#input-chiho-nguoimua").val(),
        "TrangThaiDNTT": $("#input-chiho-tt-dntt").val(),
        "TrangThaiDoiChieuKhach": $("#input-chiho-tt-dck").val(),
        "IdNhap": $("#input-chiho-idnhap").val(),
        "GhiChu": $("#input-chiho-ghichu").val(),
        "SoDeNghiThanhToan": $("#input-chiho-sodenghithanhtoan").val(),
    }

    var messageTitle = "Thêm mới chi hộ thành công!";
    if (Id != "") {
        messageTitle = "Cập nhật chi hộ thành công!";
    }
    var fileChuaUpload = $("#tbl-upload-imgzone tbody tr.tr-upload-chuaupload").length;
    //console.log(chiHo)

    $.ajax({
        type: "POST",
        url: "QuanLyChiHo.aspx/InsertUpdateChiHo",
        data: JSON.stringify({ chiHo }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            //console.log(d)
            if (d && d != "-1") {
                if(fileChuaUpload > 0){
                    
                    // trả lại data là ID của chiho
                //console.log($("#tbl-upload-imgzone tbody tr.tr-upload-chuaupload").length);
                
                    $("#div-wait").show();
                    for (var t = 0; t < 10; t++) {
                        $("#div-upload-process-bar").attr("style", "width:" + t + "%");
                        $("#div-upload-process-bar").text(t + "%");
                    }
                    fileData = new FormData();
                    //console.log(arrUploadData);
                    for (var val in arrUploadData) {
                        //console.log(arrUploadData[val]);
                        fileData.append("file", arrUploadData[val]);
                    }
                    fileData.append("folder", d);
                    fileData.append("root", "ChiHo");
                    for (var t = 10; t < 30; t++) {
                        $("#div-upload-process-bar").attr("style", "width:" + t + "%");
                        $("#div-upload-process-bar").text(t + "%");
                    }
                    if (fileData.getAll("file").length === 0) {
                        alert("Không có file nào để upload!");
                        return;
                    }else{
                        $.ajax({
                            type: "POST",
                            url: "AjaxFileUploader.ashx",
                            data: fileData,
                            contentType: false,
                            processData: false,
                            async: false,
                            success: function (responsive) {
                                for (var t = 30; t <= 100; t++) {
                                    $("#div-upload-process-bar").attr("style", "width:" + t + "%");
                                    $("#div-upload-process-bar").text(t + "%");
                                    if (t == 100) {
                                        setTimeout(function () {
                                            $("#div-upload-process-bar").text("HOÀN THÀNH");
                                        }, 1000);
                                    }
                                }
                                $("#tbl-upload-imgzone tbody tr.tr-upload-chuaupload .span-upload-trangthai").addClass("label-success")
                                    .removeClass("label-default")
                                    .text("Đã Upload");
                                $("#tbl-upload-imgzone tbody tr.tr-upload-chuaupload").addClass("tr-upload-daupload")
                                    .removeClass("tr-upload-chuaupload");
            
                                arrTempData = {};
                                arrUploadData = {};
                            },
                            error: function (responsive) {
                                alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
                            }
                        }).done(function () {
                            $("#div-wait").hide();
                            
                        })
                    }

                }
                fncLoad();
                swal.fire({
                    title: messageTitle,
                    //text: "Hệ thống sẽ tự tải lại sau 2s",
                    type: 'success',
                    confirmButtonText: 'OK'
                }).then(function(){
                    fncResetProcessBar();
                    if(Id == ""){
                        $("#btn-luu-chiho").hide();
                    }
                    //$("#myModalViewChiHo").modal("hide");
                    
                });
                
            }else{
                swal.fire({
                    title: "Thêm mới chi hộ thất bại",
                    text: "Báo lại cho admin để xử lý",
                    type: 'error',
                    confirmButtonText: 'OK'
                });
            }



        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }
    })
}



function copyToClipboard(spanId) {
    // Lấy phần tử input
    const inputElement = document.getElementById(spanId).innerText;

    // Sao chép nội dung vào clipboard
    navigator.clipboard.writeText(inputElement).then(() => {
        alert("Đã sao chép: " + inputElement);
    }).catch((err) => {
        console.error("Không thể sao chép", err);
    });
}


// Chỉ cho phép nhập số
$('.input-thanhtoan-number').keyup(function (e) {
    FormatCurrency(this);
});
$('.input-thanhtoan-number').keypress(function (e) {
    return CheckNumeric();
});
// END Chỉ cho phép nhập số
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

function fncResetProcessBar() {
    $("#div-upload-process-bar").attr("style", "width:" + 0 + "%");
    $("#div-upload-process-bar").text(0 + "%");
}
function fncLoadFileDinhKem(chiHoId) {
    //$("#div-wait").show();
    $("#tbl-upload-imgzone tbody").empty();
    //$("#div-filedinhkem-list").append("<tr id=\"tr-filedinhkem-loading\"><td colspan=\"6\"> <img alt=\"\" src=\"images/squares.gif\" id=\"img-checklist-box-loading\"/></td> </tr>");

    ajaxGet = { "get": chiHoId };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "QuanLyChiHo.aspx/reFileDinhKem",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            var html_filedinhkem = "";
            //console.log(d);
            $.each(d, function (item, val) {
                html_filedinhkem += "<tr class=\"tr-upload-daupload\" filename=\"" + val.filename + "\" folder=\"" + chiHoId + "\">";
                html_filedinhkem += "<td>" + "<span class=\"span-upload-trangthai label label-success\">" + "Đã upload" + "</span>" + "</td>";
                //html_filedinhkem += "<td>" + "<img class=\"img-pre-upload\" src=\"" + "" + "\"  alt=\"Photo\" />" + "</td>";
                html_filedinhkem += "<td>" + val.filename + "</td>";
                html_filedinhkem += "<td>" + fncConvertSize(val.filesize) + "</td>";
                html_filedinhkem += "<td>" + "<a class=\"label label-info\" id=\"a-dinhkem-taixuong\">Tải xuống</a>" +"<a class=\"label label-danger\" id=\"a-dinhkem-xoa\">Xóa</a>" + "</td>";
                html_filedinhkem += "</tr>";
            })

            setTimeout(function () {
                $("#tr-filedinhkem-loading").remove();
                $("#tbl-upload-imgzone tbody").empty();
                $("#tbl-upload-imgzone tbody").append(html_filedinhkem);
                //$("#myModalLabelActivity").append("<span> (Có " + d.length + " file đính kèm)</span>")
            }, 400);
        },
        error: function (responsive) {
            alert("Có lỗi xảy ra! Vui lòng F5(Refresh)!");
        }
    }).done(function () {
        if ($("#tbl-upload-imgzone tbody tr").length === 0) {
            $("#tbl-upload-imgzone tbody").append("<tr><td colspan=\"4\" class=\"text-center\">Không có file upload</td></tr>");
        }
        //$("#div-wait").hide();
    })
}

function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;
    //console.log(dt);
    //console.log(files);
    count_item = $("#tbl-upload-imgzone tbody tr.tr-upload-chuaupload").length + $("#tbl-upload-imgzone tbody tr.tr-upload-daupload").length;
    if(count_item == 0){
        $("#tbl-upload-imgzone tbody").empty();
    }
    $.each(files, function (item, val) {
        html_imgzone = "";
        if (val.size < 10000000) {
            var fileExtension = val.name.split('.').pop();
            var awb = $("#input-chiho-awbbill").val();
            var ncc = $("#input-chiho-ncu").val();
            var khachhang = $("#input-chiho-khachhang").val();
            var sohoadon = $("#input-chiho-sohd").val();
            var newFileName = awb + "-" + ncc + "-" + khachhang + "-" + sohoadon + "-" + String(count_item + 1) + "." + fileExtension;
            var newFile = new File([val], newFileName, { type: val.type });
            arrUploadData["file" + count_item] = newFile;
            arrTempData["file" + count_item] = val;
            tmppath = URL.createObjectURL(val);
            html_imgzone += "<tr class=\"tr-upload-chuaupload\">";
            html_imgzone += "<td>" + "<span class=\"span-upload-trangthai label label-default\">" + "Chưa upload" + "</span>" + "</td>";
            //html_imgzone += "<td>" + "<img class=\"img-pre-upload\" src=\"" + tmppath + "\"  alt=\"Photo\" />" + "</td>";
            html_imgzone += "<td>" + newFileName + "</td>";
            html_imgzone += "<td>" + fncConvertSize(val.size) + "</td>";
            html_imgzone += "<td>" + "<a class=\"btn btn-danger btn-sm btn-upload-delete\" fileitem=\"file" + count_item + "\" ><i class=\"glyphicon glyphicon-trash\"></i> Xóa</a>" + "</td>";
            html_imgzone += "</tr>";
            count_item += 1;
        }
    })
    $("#tbl-upload-imgzone").append(html_imgzone);
    //handleFiles(files);
}