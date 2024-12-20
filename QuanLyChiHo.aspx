<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyChiHo.aspx.cs"
    Inherits="ALSE.QuanLyChiHo" %>

    <asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
        <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyChiHo.css") %>
    </asp:Content>
    <asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

        <div class="main-chiho">
            <div class="color-white text-align-center main-chiho-header">
                <h2>QUẢN LÝ CHI HỘ</h2>
            </div>
        </div>

        <div class="chiho-button margin-bottom-5px">
            <button type="button" class="btn btn-w-200px btn-primary btn-chiho-kehoach">Thêm chi hộ</button>
            <button type="button" class="btn btn-w-200px btn-info btn-chiho-kehoach-excel">Thêm chi hộ excel</button>
            <a href="QuanLyChiHoNCC.aspx" type="button" class="btn btn-w-200px btn-success btn-chiho-ncc">Nhà cung cấp</a>
        </div>

        <div class="main-chiho-body">
            <table class="table table-bordered" id="tbl-chiho">
                <thead>
                    <tr>
                        <td>
                            <input type="checkbox" id="cb-print-all" class="td-checkbox" value="ALL" />
                        </td>
                        <td>NCC</td>
                        <td>Loại hình</td>
                        <td>Khách hàng</td>
                        <td>AWB/BILL</td>
                        <td>Ký hiệu HĐ</td>
                        <td>Số HĐ</td>
                        <td>Người bán</td>
                        <td>Người mua</td>
                        <td>Tên phí</td>
                        <td>Số tiền thanh toán <br>(Sau VAT)</td>
                        <td>Số tiền trước VAT</td>
                        <td>Số đề nghị thanh toán</td>
                        <td>Ghi chú</td>
                        <td class="td-chucnang">Chức năng</td>
                    </tr>
                </thead>
                <tbody>
                    <!-- Thêm nhiều hàng hơn theo cách tương tự -->
                </tbody>
            </table>
        </div>


        <div class="modal fade" id="myModalViewChiHo" tabindex="-1" data-keyboard="false" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="h4-chiho-view-tieude"></h4>
                    </div>
                    <div class="modal-body">
                        <div id="div-chiho-group-button">
                            <div id="div-chiho-button-chucnangkhac">
                            </div>

                            <div id="div-chiho-button-luu">
                            </div>
                        </div>

                        <%--Grid--%>
                            <div class="grid">


                                <%--NCU, loại hình , ngày chuyển khoản--%>
                                    <div class="row">
                                        <div class="form-group col-sm-4">
                                            <div class="input-group div-chiho-group">
                                                <span class="input-group-addon " id="span-chiho-loaihinh-modify">Loại
                                                    hình</span>
                                                <select class="form-control input-sm" id="select-chiho-loaihinh">
                                                    <option value=""></option>
                                                    <option value="IMP">IMPORT</option>
                                                    <option value="EXP">EXPORT</option>
                                                    <option value="LOG">LOG</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group col-sm-4">
                                            <div class="input-group div-chiho-group">
                                                <span class="input-group-addon" id="">NCC</span>
                                                <input type="text" class="form-control input-sm input-chiho-clear"
                                                    id="input-chiho-ncu" list="sltNCC" />
                                                <datalist class="nobdInput" id="sltNCC">    
                                                </datalist>
                                            </div>
                                        </div>
                                        <div class="form-group col-sm-4">
                                            <div class="input-group div-chiho-group">
                                                <span class="input-group-addon" id="">Khách hàng</span>
                                                <input type="text" class="form-control input-chiho-clear"
                                                    id="input-chiho-khachhang" list="sltKhachHang" />
                                                <datalist class="nobdInput" id="sltKhachHang">
                                                </datalist>


                                            </div>
                                        </div>


                                        <!-- <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Ngày chuyển khoản</span>
                                    <input type="text" class="form-control input-sm input-chiho-ngay datepicker input-chiho-clear" id="input-chiho-ngaychuyenkhoan" />
                                </div>
                            </div> -->
                                        <!-- <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Ngày Kết Thúc Kỳ</span>
                                    <input type="text" class="form-control input-sm input-chiho-ngay datepicker input-chiho-clear" id="input-chiho-ngayktky-modify" />
                                </div>
                            </div> -->
                                    </div>
                                    <%--Ký hiệu hợp đồng , số HĐ , Ngày HĐ --%>
                                        <div class="row">
                                            <div class="form-group col-sm-4">
                                                <div class="input-group div-chiho-group">
                                                    <span class="input-group-addon" id="">Ký hiệu HĐ</span>
                                                    <input type="text" class="form-control input-sm input-chiho-clear"
                                                        id="input-chiho-kihieuhd" />
                                                    <input type="text" id="input-chiho-tennguoiban"
                                                        style="display: none;">
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-4">
                                                <div class="input-group div-chiho-group">
                                                    <span class="input-group-addon" id="">Số HĐ</span>
                                                    <input type="text" class="form-control input-sm input-chiho-clear"
                                                        id="input-chiho-sohd" />
                                                </div>
                                            </div>
                                            <div class="form-group col-sm-4">
                                                <div class="input-group div-chiho-group">
                                                    <span class="input-group-addon" id="">Ngày HĐ</span>
                                                    <input type="text"
                                                        class="form-control input-sm input-chiho-ngay datepicker input-chiho-clear"
                                                        id="input-chiho-ngayhd" />
                                                </div>
                                            </div>
                                        </div>
                                        <%--END Ký hiệu hợp đồng , số HĐ , Ngày HĐ --%>

                                            <%--Tên người bán , số tiền thuế , thành tiền--%>
                                                <div class="row">

                                                    <div class="form-group col-sm-4">
                                                        <div class="input-group div-chiho-group">
                                                            <span class="input-group-addon" id="">Người mua trên
                                                                HĐ</span>
                                                            <input type="text" class="form-control input-chiho-clear"
                                                                id="input-chiho-nguoimua" list="sltNguoiMua"
                                                                value="ALSE" />
                                                            <datalist class="nobdInput" id="sltNguoiMua">
                                                                <option value="ALSE">ALSE</option>
                                                            </datalist>
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-sm-4">
                                                        <div class="input-group div-chiho-group">
                                                            <span class="input-group-addon" id="">Tên phí</span>
                                                            <input type="text"
                                                                class="form-control input-sm input-chiho-clear"
                                                                id="input-chiho-phichungtunhap" list="sltphichungtu" />
                                                            <datalist class="nobdInput" id="sltphichungtu">
                                                                <option class="op-loaihinh-import" value="Phí chứng từ hàng nhập">Phí chứng từ hàng nhập</option>
                                                                <option class="op-loaihinh-export" value="Phí an ninh soi chiếu">Phí an ninh soi chiếu</option>
                                                                <option class="op-loaihinh-log" value="Phí nâng hạ">Phí nâng hạ</option>
                                                                <option class="op-loaihinh-log" value="Phí cơ sở hạ tầng">Phí cơ sở hạ tầng</option>
                                                                <option class="op-loaihinh-log" value="Phí Local charge">Phí Local charge</option>
                                                                <option class="op-loaihinh-log" value="Phí THC">Phí THC</option>
                                                                <option class="op-loaihinh-log" value="Phí Lưu kho">Phí Lưu kho</option>
                                                            </datalist>
                                                        </div>
                                                    </div>

                                                    <div class="form-group col-sm-4">
                                                        <div class="input-group div-chiho-group">
                                                            <span class="input-group-addon" id="">AWB/BILL</span>
                                                            <input type="text" class="form-control input-chiho-clear"
                                                                id="input-chiho-awbbill" list="sltawb" />
                                                            <datalist class="nobdInput" id="sltawb">
                                                            </datalist>
                                                        </div>
                                                    </div>
                                                    <!-- <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Tên người bán</span>
                                    <input type="text" class="form-control input-chiho-clear" id="input-chiho-tennguoiban" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Thành tiền</span>
                                    <input type="text" class="form-control input-thanhtoan-number input-chiho-clear" id="input-chiho-thanhtien" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Số tiền thuế</span>
                                    <input type="text" class="form-control input-thanhtoan-number input-chiho-clear" id="input-chiho-sotienthue" />
                                </div>
                            </div> -->
                                                </div>
                                                <%--END Tên người bán , số tiền thuế , thành tiền--%>

                                                    <%--Khách hàng , AWB/BILL , check--%>
                                                        <div class="row">
                                                            <div class="form-group col-sm-4">
                                                                <div class="input-group div-chiho-group">
                                                                    <span class="input-group-addon" id="">Số tiền thanh
                                                                        toán</span>
                                                                    <input type="text"
                                                                        class="form-control input-thanhtoan-number input-chiho-clear"
                                                                        id="input-chiho-thanhtien" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-sm-4">
                                                                <div class="input-group div-chiho-group">
                                                                    <span class="input-group-addon" id="">Số tiền trước
                                                                        VAT</span>
                                                                    <input type="text"
                                                                        class="form-control input-thanhtoan-number input-chiho-clear"
                                                                        id="input-chiho-sotienthue" />
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-sm-4">
                                                                <div class="input-group div-chiho-group">
                                                                    <span class="input-group-addon" id="">Số đề nghị
                                                                        thanh toán</span>
                                                                    <input type="text"
                                                                        class="form-control  input-chiho-clear"
                                                                        id="input-chiho-sodenghithanhtoan" />
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div class="row">
                                                            <!-- <div class="form-group col-sm-8">

                                                                <div class="input-group div-chiho-group">
                                                                    <span class="input-group-addon" id="">Tải lên
                                                                        tệp</span>
                                                                    <input type="file" class="form-control"
                                                                        id="input-chiho-uploadfile" />
                                                                </div>
                                                            </div> -->

                                                            <div class="form-group col-sm-4">
                                                                <div class="has-warning">
                                                                    <div class="checkbox">
                                                                        <label>
                                                                            <input type="checkbox"
                                                                                id="checkboxSuccess-dathanhtoanncc"
                                                                                class="input-dathanhtoanncc" value="">
                                                                            Đã thanh toán NCC

                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- <div class="row">
                                                            <div class="form-group col-sm-8">

                                                                <div class="input-group div-chiho-group">
                                                                    <span class="input-group-addon" id="">Tên tệp</span>
                                                                    <input type="text" class="form-control"
                                                                        id="input-chiho-tentep" />
                                                                </div>
                                                            </div>


                                                        </div> -->


                                                        <div id="drop-area" class="div-upload-group">
                                                                <!-- <label for="f_UploadImage" class="btn btn-w-200px btn-success btn-sm">
                                                                    <i class="glyphicon glyphicon-plus"></i>&nbsp;&nbsp;&nbsp;Chọn file...
                                                                </label>
                                                                <a class="btn btn-w-200px btn-danger btn-sm" id="a-upload-delete-all"><i
                                                                        class="glyphicon glyphicon-trash"></i>&nbsp;&nbsp;&nbsp;Xóa hết</a> -->
                                                            <p>Kéo và thả tệp vào đây hoặc nhấp để chọn tệp</p>
                                                            <label for="f_UploadImage" class="btn btn-w-200px btn-success btn-sm">
                                                                <i class="glyphicon glyphicon-plus"></i>&nbsp;&nbsp;&nbsp;Chọn file...
                                                            </label>
                                                            <input type="file" class="upload" id="f_UploadImage"
                                                                multiple="multiple"
                                                                accept="image/jpg, image/png, image/gif, image/jpeg, application/pdf" /><br />
                                                        </div>
                                                        <div class="progress">
                                                            <div class="progress-bar progress-bar-striped active"
                                                                role="progressbar" aria-valuenow="40" aria-valuemin="0"
                                                                aria-valuemax="100" style="width: 0%"
                                                                id="div-upload-process-bar">
                                                                0%
                                                            </div>
                                                        </div>
                                                        <div id="div-upload-imgzone" class="div-upload-group">
                                                            <table class="table table-bordered table-responsive"
                                                                id="tbl-upload-imgzone">
                                                                <thead>
                                                                    <tr>
                                                                        <td>Trạng Thái</td>
                                                                        <!-- <td>Ảnh</td> -->
                                                                        <td>Tên File</td>
                                                                        <td>Kích Thước</td>
                                                                        <td>Chức năng</td>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                </tbody>
                                                            </table>
                                                        </div>


                                                        <!-- <div class="row">
                            <div class="form-group col-sm-4">
                                <%-- <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Check</span>
                                    <input type="text" class="form-control input-chiho-clear" id="input-chiho-check" />
                                </div>--%>
                                <div class="has-warning">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" id="checkboxSuccess-check-chiho" class="input-duyetthanhtoan" value="">
                                            Check chi hộ
       
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                                                        <%--END Khách hàng , AWB/BILL ,check--%>

                                                            <%--Trạng thái DNTT , Trạng thái đối chiếu khách , ID
                                                                nhập--%>
                                                                <!-- <div class="row">
                            <div class="form-group col-sm-4">
                                <%--<div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Trạng thái DNTT</span>
                                    <input type="text" class="form-control input-chiho-clear" id="input-chiho-tt-dntt" />
                                </div>--%>
                                <div class="has-warning">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" id="checkboxSuccess-dntt" class="input-duyetthanhtoan" value="">
                                            Đề nghị thanh toán
       
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <%--  <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Trạng thái đối chiếu khách</span>
                                    <input type="text" class="form-control input-chiho-clear" id="input-chiho-tt-dck" />
                                </div>--%>
                                <div class="has-warning">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" id="checkboxSuccess-doichieukhach" class="input-duyetthanhtoan" value="">
                                            Đối chiếu khách
       
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="has-warning">
                                    <div class="checkbox">
                                        <label>
                                            <input type="checkbox" id="checkboxSuccess-duyetthanhtoan" class="input-duyetthanhtoan" value="">
                                            Duyệt thanh toán
       
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                                                                <%--END Trạng thái DNTT , Trạng thái đối chiếu khách ,
                                                                    ID nhập--%>

                                                                    <%--Ghi chú--%>
                                                                        <!-- <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Ghi Chú</span>
                                    <input type="text" class="form-control input-chiho-clear" id="input-chiho-ghichu" />
                                </div>
                            </div>
                        </div> -->
                                                                        <%--END Ghi chú--%>
                            </div>
                            <%--END Grid--%>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-w-200px btn-primary" id="btn-luu-chiho">Thêm mới</button>
                                    <button type="button" class="btn btn-w-200px btn-warning" id="btn-capnhat-chiho" attrid="">Cập
                                        nhật</button>
                                    <button type="button" class="btn btn-w-200px btn-default" data-dismiss="modal">Đóng popup</button>
                                </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal fade" id="modalQuanLyChiHoExcel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">THÊM MỚI CHI HỘ</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <button type="button" class="btn btn-w-200px btn-link" data-dismiss="modal">Đóng</button>
                            <button type="button" id="btn-chiho-excel-luu" class="btn btn-w-200px btn-primary">Lưu</button>
                        </div>
                        <div id="spreadsheet" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                    </div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="modalDuyetThanhToanChiHo" data-backdrop="static" data-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">DUYỆT THANH TOÁN</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-duyetthanhtoanchiho">
                            <div class="info">
                                <p class="info-title">Chủ tài khoản</p>
                                <div class="info-content">
                                    <span id="text-name">HKD SAO THANG TAM</span>
                                </div>

                                <p class="info-title">Số tài khoản</p>
                                <div class="info-content">
                                    <span id="text-account">345816698</span>
                                    <button class="copy-button" type="button"
                                        onclick="copyToClipboard('text-account')">Sao chép</button>
                                </div>

                                <p class="info-title">Số tiền</p>
                                <div class="info-content">
                                    <span class="text-amount" id="text-amount">10,000,000 VND</span>
                                    <button class="copy-button" type="button"
                                        onclick="copyToClipboard('text-amount')">Sao chép</button>
                                </div>

                                <p class="info-title">Nội dung (bắt buộc)</p>
                                <div class="info-content">
                                    <span class="text-content" id="text-content">DGM223285565</span>
                                    <button class="copy-button" type="button"
                                        onclick="copyToClipboard('text-content')">Sao chép</button>
                                </div>
                            </div>

                            <div class="qr-section">
                                <img id="imgQRCode" alt="QR Code" class="qr-code">
                            </div>

                            <%--<button class="download-btn">Tải QR thanh toán</button>--%>

                                <div class="expiry-info">
                                    <span class="text-content"></span><br>
                                    <span class="text-amount"></span> VND
                                    <%--<br>
                                        Hết hạn : 10:48 14/11/2024--%>
                                </div>

                                <p class="note">(*) Đây là mã QR chỉ sử dụng 1 lần duy nhất</p>
                                <p class="instructions">Hướng dẫn chuyển khoản nhanh sử dụng QR Code trên <span
                                        class="highlight">ALSE</span></p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-w-200px btn-secondary" data-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-w-200px btn-primary" id="btn-duyetthanhtoan" attrID="">Duyệt</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal Upload -->
        <div class="modal fade" id="myModalUpload" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog " role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="">Upload File: <span id="span-upload-tilte"
                                class="color-red font-weight-bold"></span></h4>
                    </div>
                    <div class="modal-body">
                        
                    </div>
                    <div class="modal-footer">

                        <button type="button" class="btn btn-w-200px btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->

        <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyChiHo.js") %>
    </asp:Content>