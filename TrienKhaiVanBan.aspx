<%@ Page Title="Triển khai văn bản" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="TrienKhaiVanBan.aspx.cs" Inherits="ALSE.TrienKhaiVanBan" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/TrienKhaiVanBan.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="div-trienkhai-main">
        <h3>SỔ TAY CÔNG VIỆC</h3>
        <div class="div-trienkhai-deltail" id="div-detail-trienkhai">
            <div class="row ">
                <div class="form-group col-sm-2" id="">
                    <input type="button" value="Thêm" class="btn btn-sm btn-info" id="btn-trienkhai-them" />
                    <input type="button" value="Ý nghĩa trạng thái" class="btn btn-sm btn-primary" id="btn-trienkhai-ynghia" />
                </div>
                <%-- <div class="form-group col-sm-2">
                    <div class="input-group div-trienkhai-group width-170px ">
                        <span class="input-group-addon" id="">Từ ngày</span>
                        <input type="text" class="form-control input-sm input-trienkhai-ngay datepicker input-trienkhai-clear" id="input-trienkhai-tungay" />
                    </div>
                </div>
                <div class="form-group col-sm-2">
                    <div class="input-group div-trienkhai-group width-170px">
                        <span class="input-group-addon" id="">Đến ngày</span>
                        <input type="text" class="form-control input-sm input-trienkhai-ngay  datepicker input-trienkhai-clear" id="input-trienkhai-denngay" />
                    </div>
                </div>--%>
                <div class="form-group col-sm-6" id="">
                    <div class="row">
                        <div class="form-group col-sm-2" id="">
                            <label>Kho hàng</label>
                        </div>
                        <div class="form-group col-sm-10">
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt" checked id="cb-all-khohang" value="all" />ALL</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-khohang-child" checked name="khohangCount" id="cb-alsc" value="ALSC" />ALSC</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-khohang-child" checked name="khohangCount" id="cb-ncts" value="NCTS" />NCTS</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-khohang-child" checked name="khohangCount" id="cb-acsv" value="ACSV" />ASCV</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-khohang-child" checked name="khohangCount" id="cb-alse" value="ALSE" />ALSE</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-2" id="">
                            <label>Vị trí</label>
                        </div>
                        <div class="form-group col-sm-10">
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt" checked id="cb-all-vitri" value="all" />ALL</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-vitri-child" checked name="vitriCount" id="cb-doitruong" value="doitruong" />Đội trưởng</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-vitri-child" checked name="vitriCount" id="cb-giamsat" value="giamsat" />Giám sát</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-vitri-child" checked name="vitriCount" id="cb-tailieu" value="tailieu" />Tài liệu</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-vitri-child" checked name="vitriCount" id="cb-khaithac" value="khaithac" />Khai thác</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-vitri-child" checked name="vitriCount" id="cb-xenang" value="xenang" />Xe nâng</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-vitri-child" checked name="vitriCount" id="cb-xepdo" value="xepdo" />Xếp dỡ</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-vitri-child" checked name="tlktCount" id="cb-giamsattailieu" value="giamsattailieu" />Giám sát / Tài liệu</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-vitri-child" checked name="tlktCount" id="cb-giamsattailieukhaithac" value="giamsattailieukhaithac" />Giám sát / Tài liệu / Khai thác</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-vitri-child" checked name="tlktCount" id="cb-tailieukhaithac" value="tailieukhaithac" />Tài liệu / khai thác</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-vitri-child" checked name="xnbxCount" id="cb-xenangbocxep" value="xenangbocxep" />Xe nâng / bốc sếp</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-2" id="">
                            <label>Bộ phận</label>
                        </div>
                        <div class="form-group col-sm-10">
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt" checked id="cb-all-bophan" value="all" />ALL</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-bophan-child" checked name="bophanCount" id="cb-hangxuat" value="hangxuat" />Hàng xuất</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-bophan-child" checked name="bophanCount" id="cb-hangnhap" value="hangnhap" />Hàng nhập</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-bophan-child" checked name="bophanCount" id="cb-hangthuong" value="hangthuong" />Hàng thường</label>
                            <label class="checkbox-inline">
                                <input type="checkbox" class="cb-bt cb-bophan-child" checked name="bophanCount" id="cb-khác" value="khac" />Khác</label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <table class="table table-bordered tbl-trienkhai" id="tbl-trienkhai">
                    <thead>
                        <tr>
                            <td style="width: 70px">Ngày triển khai</td>
                            <td style="width: 70px">Ngày hiệu lực</td>
                            <td style="width: 70px">Ngày hết hiệu lực</td>
                            <td>Trạng thái</td>
                            <td>Nội dung</td>
                            <td>Kho hàng</td>
                            <td>Hãng hàng không</td>
                            <td>Vị trí</td>
                            <td>Bộ phận</td>
                            <td>Người phát triển</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="myModalViewTrienKhai" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="h4-trienkhai-view-tieude">THÊM CÔNG TRIỂN KHAI</h4>
                </div>
                <div class="modal-body">
                    <%--Grid--%>
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-sm-4 has-warning">
                                <div class="row">
                                    <div class="form-group col-sm-12">
                                        <div class="input-group div-trienkhai-group">
                                            <span class="input-group-addon " id="">Kho hàng</span>
                                            <select class="form-control input-sm select2" id="select-trienkhai-khohang">
                                                <option value="ALL">ALL</option>
                                                <option value="ALSC">ALSC</option>
                                                <option value="NCTS">NCTS</option>
                                                <option value="ACSV">ACSV</option>
                                                <option value="ALSE">ALSE</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-12">
                                        <div class="input-group div-trienkhai-group">
                                            <span class="input-group-addon " id="">Vị trí</span>
                                            <select class="form-control input-sm select2" id="select-trienkhai-vitri">
                                                <option value="ALL">ALL</option>
                                                <option value="Đội trưởng">Đội trưởng</option>
                                                <option value="Giám sát">Giám sát</option>
                                                <option value="Tài liệu">Tài liệu</option>
                                                <option value="Khai thác">Khai thác</option>
                                                <option value="Xe nâng">Xe nâng</option>
                                                <option value="Xếp dỡ">Xếp dỡ</option>
                                                <option value="Giám sát / Tài liệu">Giám sát / Tài liệu</option>
                                                <option value="Giám sát / Tài liệu / Khai thác">Giám sát / Tài liệu / Khai thác</option>
                                                <option value="Tài liệu / khai thác">Tài liệu / khai thác</option>
                                                <option value="Xe nâng / bốc xếp">Xe nâng / bốc xếp</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-12">
                                        <div class="input-group div-trienkhai-group">
                                            <span class="input-group-addon " id="">Hãng hàng không</span>
                                            <select class="form-control input-sm select2" id="select-trienkhai-hanghangkhong">
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group col-sm-12">
                                        <div class="input-group div-trienkhai-group">
                                            <span class="input-group-addon " id="">Bộ phận</span>
                                            <select class="form-control input-sm select2" id="select-trienkhai-bophan">
                                                <option value="ALL">ALL</option>
                                                <option value="Hàng xuất">Hàng xuất</option>
                                                <option value="Hàng nhập">Hàng nhập</option>
                                                <option value="Hàng thường">Hàng thường</option>
                                                <option value="Khác">Khác</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="form-group col-sm-8 has-error">
                                <div class="row">
                                    <div class="form-group col-sm-6">
                                        <div class="input-group div-trienkhai-group">
                                            <span class="input-group-addon " id="">Ngày triển khai</span>
                                            <input type="text" class="form-control input-sm input-trienkhai-clear datepicker" id="input-trienkhai-ngaytrienkhai" />
                                        </div>
                                    </div>

                                    <div class="form-group col-sm-6">
                                        <div class="input-group div-trienkhai-group">
                                            <span class="input-group-addon " id="">Ngày hiệu lực</span>
                                            <input type="text" class="form-control input-sm input-trienkhai-clear datepicker" id="input-trienkhai-ngayhieuluc" />
                                        </div>
                                    </div>

                                    <div class="form-group col-sm-6">
                                        <div class="input-group div-trienkhai-group">
                                            <span class="input-group-addon " id="">Ngày hết hiệu lực</span>
                                            <input type="text" class="form-control input-sm input-trienkhai-clear datepicker" id="input-trienkhai-ngayhethieuluc" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-trienkhai-group">
                                    <span class="input-group-addon span-textarea " id="">Nội Dung</span>
                                    <textarea id="textarea-noidung" data-provide="markdown" class="maso-change-clear form-control modal-textarea" cols="" rows="0"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-12">
                                 <div class="input-group div-trienkhai-group">
                                    <span class="input-group-addon span-textarea " id="">Nội Dung</span>
                                    <textarea id="textarea-noidungchitiet" data-provide="markdown" class="maso-change-clear form-control modal-textarea" cols="" rows="20"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <%--END Grid--%>
                <div class="modal-footer">

                    <button type="button" class="btn btn-success" trienkhai-id="0" id="btn-trienkhai-luu">LƯU</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">HỦY</button>
                </div>
            </div>
        </div>
    </div>




    <!-- Modal -->
    <div class="modal fade" id="myModalUpload" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">Upload File: <span id="span-upload-tilte" class="color-red font-weight-bold"></span></h4>
                </div>
                <div class="modal-body">
                    <div id="div-upload-btn" class="div-upload-group">
                        <label for="f_UploadImage" class="btn btn-success btn-sm">
                            <i class="glyphicon glyphicon-plus"></i>Chọn ảnh...
                        </label>
                        <a class="btn btn-primary btn-sm" id="a-upload-startupload"><i class="glyphicon glyphicon-upload"></i>Bắt đầu tải lên</a>
                        <a class="btn btn-danger btn-sm" id="a-upload-delete-all"><i class="glyphicon glyphicon-trash"></i>Xóa hết</a>
                        <input type="file" class="upload" id="f_UploadImage" multiple="multiple" accept="image/jpg, image/png, image/gif, image/jpeg,application/pdf,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel , application/vnd.ms-powerpoint" /><br />
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped active" role="progressbar"
                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 0%" id="div-upload-process-bar">
                            0%
                        </div>
                    </div>
                    <div id="div-upload-imgzone" class="div-upload-group">
                        <table class="table table-bordered table-responsive" id="tbl-upload-imgzone">
                            <thead>
                                <tr>
                                    <td>Trạng Thái</td>
                                    <td>Ảnh</td>
                                    <td>Tên File</td>
                                    <td>Kích Thước</td>
                                    <td>Xóa</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">

                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <%-- Modal ý nghĩa --%>
    <div class="modal fade bd-example-modal-lg" id="modalynghia" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id=""><span id="" class="color-red font-weight-bold">Ý NGHĨA TRẠNG THÁI</span></h4>
                </div>
                <table class="table table-bordered" id="tbl-ynghia">
                    <thead>
                        <tr>
                            <td>STT</td>
                            <td style="width: 120px">Trạng thái</td>
                            <td>Ý nghĩa trạng thái</td>
                            <td>Điều kiện</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td style="width: 120px" class="text-left"><span class="td-trangthai backgroudColor-yellow">Triển khai</span></td>
                            <td class="text-left">Thông báo sắp tới có triển khai mới và hiện màu vàng với dòng chữ "Triển Khai"</td>
                            <td class="text-left">Ngày hiện tại và ngày triển khai trùng nhau</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td style="width: 120px" class="text-left"><span class="td-trangthai backgroudColor-green">Hiệu lực</span></td>
                            <td class="text-left">Thông báo triển khai mới bắt đầu có hiệu lực từ ngày… và hiện màu xanh lá cây với dòng chữ "Hiệu Lực"</td>
                            <td class="text-left">Ngày hiện tại trùng ngày hiệu lực</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td style="width: 120px" class="text-left"><span class="td-trangthai backgroudColor-red">Hết hiệu lực</span></td>
                            <td class="text-left">Thông báo triển khai này đã hết hạn, không còn hiệu lực và hiện màu đỏ với dòng chữ "Hết hiệu lực"</td>
                            <td class="text-left">Ngày hiện tại qua ngày hết hiệu lực</td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td style="width: 120px" class="text-left"><span class="td-trangthai backgroudColor-pink">Vô thời hạn</span></td>
                            <td class="text-left">Thông báo triển khai này vô thời hạn cho tới khi có triển khai mới</td>
                            <td class="text-left">Ngày hết hiệu lực không có thông tin</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/TrienKhaiVanBan.js") %>
</asp:Content>
