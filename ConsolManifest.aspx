<%@ Page Title="CONSOL MANIFEST" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="ConsolManifest.aspx.cs" Inherits="ALSE.ConsolManifest" %>

<%@ Register Assembly="DevExpress.XtraReports.v14.2.Web" Namespace="DevExpress.XtraReports.Web" TagPrefix="dx" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <dx:ASPxDocumentViewer ID="ASPxDocumentViewer1" runat="server" ReportTypeName="ALSE.Report.XtraReportCM" ToolbarMode="Ribbon"></dx:ASPxDocumentViewer>
</asp:Content>