<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="InputExcel2.aspx.cs" Inherits="ALSE.InputExcel2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
     <link href="css/custom/import-status.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div>
        <input id="btn-input"  type="button" name="Input" value="Input" class="btn btn-info" onclick="fnc_Input_KWE()"/>
        <input id="btn-update" type="button" name="Update" value="Update" class="btn btn-warning" onclick="fnc_Update_KWE()"/>
        <input id="btn-delete" type="button" name="Delete" value="Delete" class="btn btn-danger" onclick="fnc_Delete_KWE()"/>
    </div>
    <div>
        <div id="div-input" class="handsontable"></div>
    </div>
        <script src="js/custom/input-excel2.js" type="text/javascript"></script>

</asp:Content>
