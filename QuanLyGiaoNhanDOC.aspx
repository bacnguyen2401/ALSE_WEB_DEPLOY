<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyGiaoNhanDOC.aspx.cs" Inherits="ALSE.QuanLyGiaoNhanDOC" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/QuanLyGiaoNhanDOC.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div style="margin-bottom: 10px;">
        <input type="button" value="VSIP Nhận" class="main-btn btn btn-danger btn-vsip-nhan" />

        <input type="button" value="VSIP Chuyển NBA" class="main-btn btn btn-warning btn-vsip-giao-nba" />

        <input type="button" value="NBA Nhận" class="main-btn btn btn-info btn-nba-nhan-doc" />

        <input type="button" value="Tra cứu DOC" class="main-btn btn btn-primary btn-tracuu-doc" />

        <input type="button" value="Ý nghĩa trạng thái" class="main-btn btn btn-danger btn-ynghia-doc" />
        <%--<input type="button" value="NBA Giao Airline" class="main-btn btn btn-primary" />--%>
    </div>
    <!-- List view giao doc-->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>Danh sách lô hàng giao DOC</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl-trangthai-giaodoc" class="table table-bordered table-bordered-info">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END List view giao doc-->



    <!-- Modal VSIP nhận DOC -->
    <div class="modal fade" id="ModalVsipNhanDOC" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">VSIP nhận DOC</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <div class="form-group">
                                    <label for="">Ngày nhận DOC</label>
                                    <input type="text" class="form-control datepicker" id="ngayNhanDOCVSIP" placeholder="Chọn ngày" />
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div class="form-group">
                                    <label for="">Giờ nhận DOC</label>
                                    <input type="text" class="form-control timepicker" id="gioNhanDOCVSIP" placeholder="Chọn giờ" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-12">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">MAWB</label>
                                    <input type="text" class="form-control" id="nhandocvsipMawb" placeholder="Nhập số MAWB" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 col-md-12">
                                <div class="form-group">
                                    <span class="color-red">* Lưu ý nhập số MAWB mọi người thêm cho em nút cách(space) để khi thêm nhiều mawb nhé.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary tbl-vsip-nhan-doc" attrid="">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <%-- End Model Giao doc VSIP --%>

    <!-- Modal VSIP Chuyển NBA-->
    <div class="modal fade" id="ModalVsipChuyenNBADOC" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="">VSIP chuyển NBA</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-12">
                                <div class="form-group">
                                    <label for="">Biển kiếm soát</label>
                                    <input type="text" class="form-control" id="bks-vsipgiaonba" placeholder="Nhập biển kiểm soát" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <div class="form-group">
                                    <label for="">Ngày xe xuất phát VSIP</label>
                                    <input type="text" class="form-control datepicker" id="ngayVsipgiaoNBA" placeholder="Chọn ngày" />
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6">
                                <div class="form-group">
                                    <label for="">Giờ xe xuất phát VSIP</label>
                                    <input type="text" class="form-control timepicker" id="gioVsipgiaoNBA" placeholder="Chọn giờ" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-12 col-md-12">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">MAWB</label>
                                    <input type="text" class="form-control" id="vsipgiaodocNBA" placeholder="Nhập số MAWB" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-12 col-md-12">
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Thông tin theo xe</label>
                                    <%--<input type="text" class="form-control" id="thongtintheoxe" placeholder="Nhập thông tin cần thiết theo xe" />--%>
                                    <textarea class="form-control" id="thongtintheoxe"  rows="4" placeholder="Nhập thông tin cần thiết theo xe""></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <span class="color-red">* Lưu ý nhập số MAWB mọi người thêm cho em nút cách(space) để khi thêm nhiều mawb nhé.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary tbl-vsip-giao-doc-nba">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <%-- End Model VSIP chuyển NBA --%>

    <!-- ModalNBA nhận DOC-->
    <div class="modal fade" id="ModalNBANhanDOC" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="">NBA nhận DOC</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <table class="table table-bordered tbl-show-xe-giao">
                                    <thead>
                                        <tr>
                                            <td>BKS Xe Giao</td>
                                            <td>Ngày giờ giao</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                            <div class="col-sm-6">
                                <table class="table table-bordered tbl_show_mawb_xe">
                                    <thead>
                                        <tr>
                                            <td>Số MAWB</td>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <label for="exampleInputPassword1">Thông tin theo xe</label>
                                <%--<input type="text" class="form-control" id="thongtinview" placeholder="" />--%>
                                 <textarea class="form-control" id="thongtinview"  rows="4" placeholder=""></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary tbl-nba-nhan-doc" attrbks="" attrngaygio="">Duyệt</button>
                </div>
            </div>
        </div>
    </div>
    <%-- End Model VSIP chuyển NBA --%>

    <!-- Modal Upload ảnh-->
    <div class="modal fade" id="myModalUpload" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
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
                        <input type="file" class="upload" id="f_UploadImage" multiple="multiple" accept="image/jpg, image/png, image/gif, image/jpeg" /><br />
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

    <!-- ModalNBA hiển thị ảnh -->
    <div class="modal fade" id="ModalShowAnh" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="">XEM ẢNH DOC</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <span class="glyphicon glyphicon-paperclip color-8c8c8c activity-icon"></span>
                        <span class="td-bold activity-text">Danh sách file đính kèm</span>
                        <div id="div-filedinhkem-list">
                            <table id="table-filedinhkem" class="table table-bordered">
                                <thead>
                                    <tr>
                                        <td>STT</td>
                                        <td>Ảnh</td>
                                        <td>Tên File</td>
                                        <td>Kích Thước</td>
                                        <td>Tải Xuống</td>
                                        <td>Xóa</td>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>
    <%-- End Model VSIP chuyển NBA --%>


    <!-- Modal Tra cứu DOC-->
    <div class="modal fade" id="ModalTraCuuDOC" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="">TRA CỨU DOC</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="form-group col-sm-12 col-md-4">
                                <div class="input-group">
                                    <span class="input-group-addon" id="">Số MAWB</span>
                                    <input type="text" class="form-control" id="input-mawb" />
                                </div>
                            </div>
                            <div class="form-group col-sm-12 col-md-4">
                                <button type="button" class="btn btn-primary btn-tracuu">Tra cứu doc</button>
                            </div>
                        </div>
                        <div id="div-tracuudoc-list">
                            <table id="table-tracuudoc" class="table table-bordered">
                                <thead>
                                    <tr>
                                        <td>Số MAWB</td>
                                        <td>Vsip nhận DOC</td>
                                        <td>Trucking</td>
                                        <td>NBA nhận DOC</td>
                                        <td>NBA giao Airline</td>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-xemanh">Xem ảnh</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModalViewHelp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times </span></button>
                    <h4 class="modal-title text-align-center" id="h4-thanhtoan-view-tieude"></h4>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered table-hover" id="tbl-help">
                        <thead></thead>
                        <tbody></tbody>
                    </table>
                </div>

                <div class="modal-footer">

                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>
    <%-- End Model VSIP chuyển NBA --%>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/QuanLyGiaoNhanDOC.js") %>
</asp:Content>
