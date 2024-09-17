<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="XemAnhHoaDonXuat.aspx.cs" Inherits="ALSE.XemAnhHoaDonXuat" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/XemAnhHoaDonXuat.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="title-anh-hoa-don">
        <h2>XEM ẢNH HÓA ĐƠN XUẤT</h2>
    </div>
    <div class="table-anh-hoa-don">
        <table class="table table-bordered tbl-show-img">
            <thead>
                <tr>
                    <td>STT</td>
                    <td>Type</td>
                    <td>MAWB</td>
                    <td>Flight No</td>
                    <td>PCS</td>
                    <td>GW</td>
                    <td>Function</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="myModalActivity" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabelActivity"></h4>
                </div>
                <div class="modal-body">
                    <div id="modal-div-left" class="modal-div-left">

                        <div id="left-div-filedinhkem">
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
                                            <%--<td>Xóa</td>--%>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/XemAnhHoaDonXuat.js") %>
</asp:Content>
