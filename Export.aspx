<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="Export.aspx.cs" Inherits="ALSE.Export" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <link href="css/custom/export.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-export-main">
        <div id="div-export-noti">

        </div>
        <div id="div-export-info">

        </div>
        <div id="div-export-status" >

        </div>
    </div>

    <script src="js/custom/gen-table.js" type="text/javascript"></script>
    <script src="js/custom/export.js" type="text/javascript"></script>

</asp:Content>
