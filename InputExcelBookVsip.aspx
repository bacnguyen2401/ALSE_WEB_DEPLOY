<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="InputExcelBookVsip.aspx.cs" Inherits="ALSE.InputExcelBookVsip" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
     <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/InputExcelBookVsip.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
     <div id="btn-button">
        <input id="btn-input" type="button" name="Input" value="Input" class="btn btn-info" />
        <input id="btn-update" type="button" name="Update" value="Update" class="btn btn-warning" />
        <input id="btn-delete" type="button" name="Delete" value="Delete" class="btn btn-danger" />
         <input id="btn-close" type="button" name="Close" value="Close" class="btn btn-danger" />
    </div>
    <div id="id-table">
        <div id="div-input" class="handsontable"></div>
    </div>

    <div id="temIn">
    </div>

    <div id="temULI">
    </div>
    <div id="temULITrang">
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/InputExcelBookVsip.js") %>
</asp:Content>
