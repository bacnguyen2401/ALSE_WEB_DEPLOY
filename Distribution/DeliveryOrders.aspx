<%@ Page Title="Delivery Orders PLAN" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="DeliveryOrders.aspx.cs" Inherits="ALSE.Distribution.DeliveryOrders" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/Distribution-DeliveryOrders.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div>
        <p class="p-pagename">Delivery Orders PLAN</p>
    </div>
    <div class="row">
        <%--<button type="button" id="btn-upload-form" class="btn btn-sm btn-primary">Up File</button>--%>
        <div class="form-group col-sm-3">
            <div class="input-group ">
                <span class="input-group-addon" id="">Từ ngày</span>
                <input type="text" class="form-control input-sm input-kehoach-ngay datepicker input-kehoach-clear" id="input-kehoach-tungay" />
            </div>
        </div>
        <div class="form-group col-sm-3">
            <div class="input-group ">
                <span class="input-group-addon" id="">Đến ngày</span>
                <input type="text" class="form-control input-sm input-kehoach-ngay datepicker input-kehoach-clear" id="input-kehoach-denngay" />
            </div>
        </div>
        <div class="form-group col-sm-4">
            <button type="button" id="btn-tracuu-kehoach" class="btn btn-sm btn-primary">Tra cứu</button>
            <button type="button" id="btn-tracuu-kehoach-them" class="btn btn-sm btn-warning">Upload kế hoạch</button>
        </div>
        <div class="form-group col-sm-3">
        </div>
    </div>

    <div class="div-data" id="div-data">
        <table class="table table-bordered table-responsive" id="tbl-kehoach">
            <thead>
                <tr>
                    <td>Ngày kế hoạch</td>
                    <td>Giờ kế hoạch</td>
                    <td>Delivery status</td>
                    <td>POD status</td>
                    <td>Ghi chú</td>
                    <td>Khách hàng</td>
                    <td>Chi tiết</td>
                    <td>Xóa</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>

        
    </div>

    <%------------------%>
    <!-- Modal -->
    <div class="modal fade" id="myModalUpload" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">Upload File: <span id="span-upload-tilte" class="color-red font-weight-bold"></span></h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-4">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Ngày giờ kế hoạch</span>
                                <input type="text" class="form-control input-sm input-kehoach-ngay datepicker input-kehoach-clear" id="input-kehoach-plandate" />
                            </div>
                        </div>
                        <div class="form-group col-sm-2">
                            <input type="text" class="form-control input-sm input-kehoach-ngay timepicker input-kehoach-clear" id="input-kehoach-plantime" />
                        </div>
                        <div id="div-upload-btn" class="div-upload-group form-group col-sm-6">
                            <label for="f_UploadImage" class="btn btn-success btn-sm">
                                <i class="glyphicon glyphicon-plus"></i>Chọn file...
                            </label>
                            <a class="btn btn-primary btn-sm" id="a-upload-startupload"><i class="glyphicon glyphicon-upload"></i>Bắt đầu tải lên</a>
                            <a class="btn btn-danger btn-sm" id="a-upload-delete-all"><i class="glyphicon glyphicon-trash"></i>Xóa hết</a>
                            <input type="file" class="upload" id="f_UploadImage" multiple="multiple" accept="image/jpg, image/png, image/gif, image/jpeg,application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" /><br />
                        </div>
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

    <%------------------%>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/Distribution-DeliveryOrders.js") %>
</asp:Content>