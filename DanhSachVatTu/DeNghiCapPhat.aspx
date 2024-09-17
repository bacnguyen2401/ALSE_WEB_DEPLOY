<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="DeNghiCapPhat.aspx.cs" Inherits="ALSE.DanhSachVatTu.DeNghiCapPhat" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/DeNghiCapPhat.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-deghicapphat-header">
        <div id="div-denghicapphat-title">
            <h2 class="text-center">Đề nghị cấp phát
            </h2>
        </div>
        <div id="div-denghicapphat-button">
            <div class="row">
                <div class="col-sm-4">
                    <button type="button" id="btn-denghicapphat" class="btn btn-primary">Thêm mới đề nghị cấp phát</button>
                </div>
            </div>
        </div>
    </div>
    <div id="div-denghicapphat-body">
    </div>

    <%--Modal đề nghị cấp phát--%>
    <div class="modal fade" id="ModalDeNghiCapPhat" role="dialog" data-backdrop="static">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h3 class="modal-title modal-title-denghicapphat"></h3>
                </div>
                <div class="modal-body modal-body-DeNghiCapPhat">
                </div>
            </div>
        </div>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/DeNghiCapPhat.js") %>
</asp:Content>
