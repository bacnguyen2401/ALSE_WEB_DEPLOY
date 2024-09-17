<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyNhapVatTu.aspx.cs" Inherits="ALSE.DanhSachVatTu.QuanLyNhapVatTu" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/QuanLyNhapVatTu.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-nhapvattu-header">
        <div id="div-nhapvattu-title">
            <h2 class="text-center">Nhập vật tư
            </h2>
        </div>
        <div id="div-nhapvattu-button">
            <div class="row">
                <div class="col-sm-4">
                    <button type="button" id="btn-nhapvattu" class="btn btn-primary">Nhập vật tư</button>
                </div>
            </div>
        </div>
    </div>
    <div id="div-nhapvattu-body">
    </div>

       <%--Modal cấp vật tư--%>
    <div class="modal fade" id="ModalCapVatTu" role="dialog" data-backdrop="static">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h3 class="modal-title modal-title-capvattu"></h3>
                </div>
                <div class="modal-body modal-body-capvattu">
                </div>
            </div>
        </div>
    </div>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/QuanLyNhapVatTu.js") %>
</asp:Content>
