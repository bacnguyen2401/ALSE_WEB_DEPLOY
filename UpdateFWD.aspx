<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="UpdateFWD.aspx.cs" Inherits="ALSE.UpdateFWD" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/UpdateFWD.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="container">
        <div id="header">
            <div id="title">
                <h2 class="float-left">CẬP NHẬT THÔNG TIN FWD </h2>
            </div>
        </div>
        <div id="body">
            <div class="row" id="div-timkiem">
                <div class="col-sm-2">
                </div>
                <div class="col-sm-3">
                    <input type="text" class="form-control input-sm" id="input-hawb" placeholder="Nhập HAWB" />
                </div>
                <div class="col-sm-3">
                    <input type="text" class="form-control input-sm" id="input-fwd" placeholder="Nhập FWD" />
                </div>
                <div class="col-sm-1">
                    <input type="button" class="btn btn-sm btn-warning" id="btn-update-fwd" value="Cập nhật" />
                </div>
                <%--    <div class="col-sm-2">
                    <input type="button" class="btn btn-sm btn-info" id="btn-xuat-excel" value="Kết xuất Excel" />
               </div>
                --%>
            </div>
            <%--<h3 class="titleShow">Hiển thị theo MAWB: <span id="showSomawb"></span></h3>--%>
            <%-- <table class="table table-bordered" id="tbl_CanDim">
                <thead id="thead-CanDim">
                    <tr>
                        <td>DIMENSION</td>
                        <td>PCS</td>
                        <td>GW</td>
                        <td>VW</td>
                        <td>CW</td>
                        <td>CBM</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>--%>
            <div id="table-show-hawb">
            </div>
        </div>
        <div id="footer">
        </div>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/UpdateFWD.js") %>
</asp:Content>
