<%@ Page Title="BÁO CÁO XUẤT KHO" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="BaoCaoXuatKho.aspx.cs" Inherits="ALSE.BCSLXuatKho" %>

<%@ Register Assembly="DevExpress.XtraReports.v14.2.Web" Namespace="DevExpress.XtraReports.Web" TagPrefix="dx" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        .style1 {
            width: 100%;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div>

        <dx:ASPxDocumentViewer ID="ASPxDocumentViewer1" runat="server" ReportTypeName="XtraReportBCHX" ToolbarMode="Ribbon" Width="100%">
            <SettingsReportViewer PageByPage="False" />
            <%--<StylesViewer>
<BookmarkSelectionBorder BorderColor="Gray" BorderStyle="Dashed" BorderWidth="3px"></BookmarkSelectionBorder>
</StylesViewer>

<StylesSplitter>
<Pane>
<Paddings Padding="16px"></Paddings>
</Pane>
</StylesSplitter>--%>
        </dx:ASPxDocumentViewer>
    </div>
</asp:Content>