<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyInTem.aspx.cs" Inherits="ALSE.QuanLyInTem" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyIntem.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="intem-header text-align-center">
        <h2 class="color-white">QUẢN LÝ IN TEM KHÁCH HÀNG</h2>
    </div>

    <div class="div-intem-button" style="margin-bottom: 10px; display: flex">
        <button type="button" id="btn-taothongtin" class="mani-btn btn btn-success">Tạo thông tin in tem</button>

        <div style="margin-right: 20px" class="btn-pdf">


            <div id="drop-area" class="upload-drop-area">
                <p>Kéo thả file vào đây để upload</p>
            </div>
            <input type="file" id="fileElem" multiple accept=".pdf" style="display: none">
            <label class="button" for="fileElem">Chọn file</label>
            <input type="file" class="upload" id="f_UploadImage" multiple="multiple" accept=".pdf" />
            <button type="button" id="btn-read-pdf" class="btn btn-info">Đọc file PDF</button>
        </div>
        <%--<button type="button" id="btn-showGTK" class="mani-btn btn btn-success">Nút bấm 3</button>--%>
    </div>

    <!-- List view giao doc-->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <%--  <div class="panel-heading">
                    <b>Danh sách lô hàng giao DOC</b>
                </div>--%>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrappe">
                        <table id="tbl-table-intem" class="table table-bordered table-hover">
                            <thead style="background-color: #cfeffb !important; border-bottom: 2px solid #808080;">
                                <tr>
                                    <td>STT</td>
                                    <td>MAWB</td>
                                    <td>DESMAWB</td>
                                    <td>MAWB.QT</td>
                                    <%--  <td>HAWB</td>
                                    <td>DESHAWB</td>--%>
                                    <td>Chức năng</td>
                                </tr>
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

    <div class="modal fade" id="modalTaoKeHoach" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">NHẬP THÔNG TIN</h4>
                </div>
                <div class="modal-body">
                    <div class="btn-row">
                        <div class="btn-luu">
                            <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                            <button type="button" id="btn-kehoach-luu" class="btn btn-primary">Lưu</button>
                        </div>
                    </div>

                    <div id="spreadsheet" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyIntem.js") %>
</asp:Content>
