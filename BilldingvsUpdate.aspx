<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="BilldingvsUpdate.aspx.cs" Inherits="ALSE.BillingvsUpdate" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
        <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/BilldingvsUpdate.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div id="div-TrangThaiHangXuat">
        <%-- Start table Booking --%>
        <div id="div-Booking">
            <table class="table table-bordered grid-view tbl-header-fixed table-maxwidth-1024" id="tbl-Booking">
                <tbody>
                </tbody>
            </table>
        </div>

        <%-- Start table PreAccept --%>
        <div id="div-PreAccept">
            <table class="table table-bordered grid-view tbl-header-fixed table-maxwidth-1024" id="tbl-PreAccept">
                <tbody>
                </tbody>
            </table>
        </div>

        <%-- Start table Accepted --%>
        <div id="div-Accepted">
            <table class="table table-bordered grid-view tbl-header-fixed table-maxwidth-1024" id="tbl-Accepted">
                <tbody>
                </tbody>
            </table>
        </div>

        <%-- Start table LoadOnTrucking --%>
        <div id="div-LoadOnTrucking">
            <table class="table table-bordered grid-view tbl-header-fixed table-maxwidth-1024" id="tbl-LoadOnTrucking">
                <tbody>
                </tbody>
            </table>
        </div>

        <%-- Start table TruckingToNBA --%>
        <div id="div-TruckingToNBA">
            <table class="table table-bordered grid-view tbl-custom tbl-header-fixed table-maxwidth-1024" id="tbl-TruckingToNBA">
                <tbody>
                </tbody>
            </table>
        </div>

        <%-- Start table AirPort --%>
        <div id="div-AirPort">
            <table class="table table-bordered grid-view tbl-custom tbl-header-fixed table-maxwidth-1024" id="tbl-AirPort">
                <tbody>
                </tbody>
            </table>
        </div>

        <%-- Start table ComPlete --%>
        <div id="div-Complete">
            <table class="table table-bordered grid-view tbl-custom tbl-header-fixed table-maxwidth-1024" id="tbl-Complete">
                <tbody>
                </tbody>
            </table>
        </div>
    </div>

    
      <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/BilldingvsUpdate.js") %>
</asp:Content>
