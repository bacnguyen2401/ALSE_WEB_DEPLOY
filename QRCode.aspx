<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QRCode.aspx.cs" Inherits="ALSE.QRCode" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QRCode.css") %>
    <input id="text" type="text" value="https://hogangnono.com" style="width: 80%" /><br />
    <div id="qrcode"></div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QRCode.js") %>
</asp:Content>
