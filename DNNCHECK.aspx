<%@ Page Title="DNN CHECK" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="DNNCHECK.aspx.cs" Inherits="ALSE.DNNCHECK" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        #tbl-dnnc {
            width: 500px;
            background-color: white;
        }
        #div-tieude {
            color: white;
            font-size: large;
            text-align: center;
        }
        .span-dnncheck-red {
            color: red;
        }
        .dnnc-gb {
            background-color: #C9C9C9;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-tieude">
            <asp:Literal ID="ltrTieuDe" runat="server"></asp:Literal>

    </div>

      <table id="tbl-dnnc" class="table table-bordered">
            <asp:Literal ID="ltrDNNCHECK" runat="server"></asp:Literal>
        </table>
</asp:Content>
