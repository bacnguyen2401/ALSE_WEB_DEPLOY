<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="InputExcel.aspx.cs" Inherits="ALSE.InputExcel" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <link href="css/custom/import-status.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div>
        <input id="btn-input"  type="button" name="Input" value="Input" class="btn btn-info" onclick="fnc_Input_Pantos()"/>
        <input id="btn-update" type="button" name="Update" value="Update" class="btn btn-warning" onclick="fnc_Update_Pantos()"/>
        <input id="btn-delete" type="button" name="Delete" value="Delete" class="btn btn-danger" onclick="fnc_Delete_Pantos()"/>
    </div>
    <div>
        <div id="div-input" class="handsontable"></div>
    </div>
    <script src="js/custom/input-excel.js" type="text/javascript"></script>
</asp:Content>
