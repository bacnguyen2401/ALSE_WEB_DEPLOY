<%@ Page Title="TRẠNG THÁI HÀNG XUẤT ASG" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" EnableViewState="false" CodeBehind="TrangThaiHangXuatASG.aspx.cs" Inherits="ALSE.TrangThaiHangXuatASG" %>

<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>
<%@ Register TagName="ucpp" Src="~/Control/PopupTTHX.ascx" TagPrefix="uc" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1 style="text-align:center;color:white">EXPORT CARGO STATUS</h1>
   <div style="margin-bottom: 20px;">
       <a href="TruyVanHangXuat.aspx" class="mani-btn btn btn-primary">Truy Vấn Hàng Xuất</a>
       <a href="#" class="mani-btn btn btn-info" id="abchx">Báo Cáo Sản Lượng</a>

   </div>
    <%--HEADER--%>
    <%--<div>
        <img alt="" src="images/header2.jpg" />
    </div>--%>
    <%--END HEADER--%>
    <%--BOOKING--%>
   <%-- <dx:ASPxGridView ID="ASPxGridView6" runat="server" AutoGenerateColumns="False" CssClass="grid-view hangchuataophieucan" DataSourceID="SqlDataSourceHangChuaTaoPhieuCan" Theme="Aqua" Width="1207px" KeyFieldName="MAWB">
        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />

        <SettingsPager Visible="False">
        </SettingsPager>
        <Columns>

            <dx:GridViewDataTextColumn FieldName="MAWB" VisibleIndex="1" Width="90px" Caption="MAWB" CellStyle-CssClass="mawb">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="EST_PCS" VisibleIndex="2" Width="35px" Caption="PCS">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="EST_WT" VisibleIndex="3" Width="60px" Caption="G.W">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="FlightNo" VisibleIndex="4" Width="64px" Caption="FLT">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="FltDate" VisibleIndex="5" Width="72px" Caption="FLT.D" CellStyle-CssClass="fltdate">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="FltTime" VisibleIndex="6" Width="60px" Caption="FLT.T" CellStyle-CssClass="flttime">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn VisibleIndex="9" Width="50px" CellStyle-CssClass="hx-dest" Caption="DEST">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn VisibleIndex="10" Width="72px" Caption="SLI.D">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn VisibleIndex="11" Width="60px" Caption="SLI.T">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn VisibleIndex="12" Width="150px" Caption="TRUCK ID">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn VisibleIndex="13" Width="72px" Caption="EXP.D">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn VisibleIndex="14" Width="60px" Caption="EXP.T">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Caption="STATUS">

                <PropertiesImage ImageHeight="32px" ImageWidth="90px" LoadingImageUrl="~/images/booking.png" ShowLoadingImage="True">
                    <EmptyImage Height="32px" ToolTip="Booking" Url="~/images/booking.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="FWD" CellStyle-CssClass="hx-fwd" FieldName="FWD" VisibleIndex="15" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="REMARK" VisibleIndex="17" Width="70px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="NBA" FieldName="CUTOT" CellStyle-CssClass="cutot" VisibleIndex="7" Width="46px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="ALSE" CellStyle-CssClass="cute" FieldName="CUTE" VisibleIndex="8" Width="46px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="W.H" FieldName="Warehouse" Width="50px" VisibleIndex="16"></dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
        <Settings ShowColumnHeaders="true" />
        <SettingsDataSecurity AllowEdit="False" AllowDelete="False" AllowInsert="False" />
    </dx:ASPxGridView>

    <asp:SqlDataSource ID="SqlDataSourceHangChuaTaoPhieuCan" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangChuaTaoPhieuCanASG" SelectCommandType="StoredProcedure"></asp:SqlDataSource>--%>
    <%--END BOOKING--%>
    <%--PRE ACCEPT--%>
    <dx:ASPxGridView ID="ASPxGridView2" runat="server" KeyFieldName="SoMaWB" AutoGenerateColumns="False" CssClass="grid-view" DataSourceID="SqlDataSourceHangDaTaoPhieuCan" EnableTheming="True" Theme="Aqua" Width="1207px">

        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoMaWB" VisibleIndex="1" Width="90px" CellStyle-CssClass="kmawb" Caption="MAWB">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKien" VisibleIndex="2" Width="35px" Caption="Pcs">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TrongLuong" VisibleIndex="3" Width="60px" Caption="G.W">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBay" VisibleIndex="4" Width="64px" Caption="Chuyến Bay">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayBK" VisibleIndex="5" Width="72px" Caption="Ngày Bay" CellStyle-CssClass="fltdate">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayBK" VisibleIndex="6" Width="61px" Caption="Giờ Bay" CellStyle-CssClass="flttime">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn FieldName="DiemDen" CellStyle-CssClass="hx-dest" VisibleIndex="9" Width="50px" Caption="Điểm Đến">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayLamSLI" CellStyle-CssClass="ngaylamsli" VisibleIndex="10" Width="72px" Caption="Date SLI">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioLamSLI" CellStyle-CssClass="giolamsli" VisibleIndex="11" Width="60px" Caption="Time SLI">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="BKSXeXuat" CellStyle-CssClass="hx-bksxexuat" VisibleIndex="12" Width="150px" Caption="BKS">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXuat" CellStyle-CssClass="ngayxuat" VisibleIndex="13" Width="72px" Caption="Ngày Xuất">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXuat" CellStyle-CssClass="gioxuat" VisibleIndex="14" Width="60px" Caption="Giờ Xuất">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Caption="Status">
                <PropertiesImage ImageHeight="32px" ImageWidth="90px" LoadingImageUrl="~/images/document_accept.png" ShowLoadingImage="True">
                    <EmptyImage Height="32px" ToolTip="Pre Accept" Url="~/images/pre-accept.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="Đại Lý" CellStyle-CssClass="hx-fwd" FieldName="FWD" VisibleIndex="15" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Ghi Chú" FieldName="GhiChuMaWB" VisibleIndex="17" Width="70px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="AW" FieldName="Warehouse" CellStyle-CssClass="hx-warehouse" Width="50px" VisibleIndex="16"></dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Cut NBA" FieldName="CUTOT" CellStyle-CssClass="cutot" Width="46px" VisibleIndex="7">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut ALSE" FieldName="CUTE" CellStyle-CssClass="cute" Width="46px" VisibleIndex="8">
            </dx:GridViewDataTextColumn>
        </Columns>
        <Settings ShowColumnHeaders="false" />
        <%-- <SettingsBehavior AllowSelectByRowClick="true" />--%>
        <SettingsPager Visible="False">
        </SettingsPager>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
        <SettingsDataSecurity AllowEdit="False" AllowInsert="False" AllowDelete="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceHangDaTaoPhieuCan" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaTaoPhieuCanASG" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <%--END PRE ACCEPT--%>
    <%--ACCEPTED--%>
    <dx:ASPxGridView ID="ASPxGridView3" runat="server" KeyFieldName="SoMaWB" AutoGenerateColumns="False" CssClass="grid-view" DataSourceID="SqlDataSourceHangDaDuyetPhieuCan" Theme="Aqua" Width="1207px">

        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoMaWB" Caption="MAWB" CellStyle-CssClass="kmawb" VisibleIndex="1" Width="90px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKien" Caption="Pcs" ReadOnly="True" VisibleIndex="2" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TrongLuong" Caption="G.W" ReadOnly="True" VisibleIndex="3" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBay" Caption="ChuyenBay" VisibleIndex="4" Width="64px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayBK" Caption="Ngày Bay" VisibleIndex="5" Width="72px" CellStyle-CssClass="fltdate">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayBK" Caption="Giờ Bay" VisibleIndex="6" Width="60px" CellStyle-CssClass="flttime">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="DiemDen" CellStyle-CssClass="hx-dest" Caption="Điểm Đến" VisibleIndex="9" Width="50px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayLamSLI" CellStyle-CssClass="ngaylamsli" Caption="Date SLI" VisibleIndex="10" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioLamSLI" CellStyle-CssClass="giolamsli" Caption="Time SLI" VisibleIndex="11" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="BKSXeXuat" CellStyle-CssClass="hx-bksxexuat" Caption="BKS" VisibleIndex="12" Width="150px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXuat" CellStyle-CssClass="ngayxuat" Caption="Ngày Xuất" VisibleIndex="13" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXuat" CellStyle-CssClass="gioxuat" Caption="Giờ Xuất" VisibleIndex="14" Width="60px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Caption="Status">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="Accept" Url="~/images/blog_accept.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="Đại Lý" CellStyle-CssClass="hx-fwd" FieldName="FWD" VisibleIndex="15" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Ghi Chú" FieldName="GhiChuMaWB" VisibleIndex="17" Width="70px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="AW" FieldName="Warehouse" CellStyle-CssClass="hx-warehouse" Width="50px" VisibleIndex="16"></dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Cut NBA" FieldName="CUTOT" CellStyle-CssClass="cutot" VisibleIndex="7" Width="46px">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut ALSE" FieldName="CUTE" CellStyle-CssClass="cute" VisibleIndex="8" Width="46px">
            </dx:GridViewDataTextColumn>
        </Columns>
        <%--<SettingsBehavior AllowSelectByRowClick="true" />--%>
        <SettingsPager Visible="False">
        </SettingsPager>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
        <Settings ShowColumnHeaders="false" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceHangDaDuyetPhieuCan" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaDuyetPhieuCanASG" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <%--END ACCEPTED--%>
    <%--LOADING ON TRUCK--%>
    <dx:ASPxGridView ID="ASPxGridView4" runat="server" KeyFieldName="SoMaWB" AutoGenerateColumns="False" CssClass="grid-view" DataSourceID="SqlDataSourceHangDaGhepXe" Theme="Aqua" Width="1207px">

        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoMaWB" Caption="MAWB" VisibleIndex="1" Width="90px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKien" Caption="Pcs" ReadOnly="True" VisibleIndex="2" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TrongLuong" Caption="G.W" ReadOnly="True" VisibleIndex="3" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBay" Caption="ChuyenBay" VisibleIndex="4" Width="64px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayBK" Caption="Ngày Bay" VisibleIndex="5" Width="72px" CellStyle-CssClass="fltdate">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayBK" Caption="Giờ Bay" VisibleIndex="6" Width="60px" CellStyle-CssClass="flttime">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="DiemDen" CellStyle-CssClass="hx-dest" Caption="Điểm Đến" VisibleIndex="9" Width="50px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayLamSLI" CellStyle-CssClass="ngaylamsli" Caption="Date SLI" VisibleIndex="10" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioLamSLI" CellStyle-CssClass="giolamsli" Caption="Time SLI" VisibleIndex="11" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="BKSXeXuat" CellStyle-CssClass="hx-bksxexuat" Caption="BKS" VisibleIndex="12" Width="150px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXuat" CellStyle-CssClass="ngayxuat" Caption="Ngày Xuất" VisibleIndex="13" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXuat" CellStyle-CssClass="gioxuat" Caption="Giờ Xuất" VisibleIndex="14" Width="60px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Caption="Status">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="Loading To Truck" Url="~/images/truck.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="Đại Lý" CellStyle-CssClass="hx-fwd" FieldName="FWD" VisibleIndex="15" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Ghi Chú" FieldName="GhiChuMaWB" VisibleIndex="17" Width="70px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="AW" FieldName="Warehouse" CellStyle-CssClass="hx-warehouse" Width="50px" VisibleIndex="16"></dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Cut NBA" FieldName="CUTOT" CellStyle-CssClass="cutot" VisibleIndex="7" Width="46px">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut ALSE" FieldName="CUTE" CellStyle-CssClass="cute" VisibleIndex="8" Width="46px">
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
        <%--<SettingsBehavior AllowSelectByRowClick="true" />--%>
        <SettingsPager Visible="False">
        </SettingsPager>
        <Settings ShowColumnHeaders="false" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceHangDaGhepXe" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaGhepXeASG" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <%--END LOADING ON TRUCK--%>

    <%--TRUCKING TO NBA--%>
    <dx:ASPxGridView ID="ASPxGridView1" runat="server" KeyFieldName="SoMaWB" AutoGenerateColumns="False" CssClass="grid-view" DataSourceID="SqlDataSourceHangDaChayTrenDuong" Theme="Aqua" Width="1207px">

        <%--<SettingsBehavior AllowSelectByRowClick="true" />--%>
        <SettingsPager Visible="False">
        </SettingsPager>

        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" RowDblClick="function(s, e) {

}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoMaWB" Caption="MAWB" CellStyle-CssClass="kmawb" VisibleIndex="1" Width="90px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKien" Caption="Pcs" ReadOnly="True" VisibleIndex="2" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TrongLuong" Caption="G.W" ReadOnly="True" VisibleIndex="3" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBay" Caption="ChuyenBay" VisibleIndex="4" Width="64px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayBK" Caption="Ngày Bay" VisibleIndex="5" Width="72px" CellStyle-CssClass="fltdate">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayBK" Caption="Giờ Bay" VisibleIndex="6" Width="60px" CellStyle-CssClass="flttime">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="DiemDen" CellStyle-CssClass="hx-dest" Caption="Điểm Đến" VisibleIndex="9" Width="50px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayLamSLI" CellStyle-CssClass="ngaylamsli" Caption="Date SLI" VisibleIndex="10" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioLamSLI" CellStyle-CssClass="giolamsli" Caption="Time SLI" VisibleIndex="11" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="BKSXeXuat" CellStyle-CssClass="hx-bksxexuat" Caption="BKS" VisibleIndex="12" Width="150px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXuat" CellStyle-CssClass="ngayxuat" Caption="Ngày Xuất" VisibleIndex="13" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXuat" CellStyle-CssClass="gioxuat" Caption="Giờ Xuất" VisibleIndex="14" Width="60px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Caption="Status" CellStyle-CssClass="btnpop">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="Trucking To NBA" Url="~/images/lorrygreen.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="Đại Lý" CellStyle-CssClass="hx-fwd" FieldName="FWD" VisibleIndex="15" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Ghi Chú" FieldName="GhiChuMaWB" VisibleIndex="17" Width="70px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="AW" FieldName="Warehouse" CellStyle-CssClass="hx-warehouse" Width="50px" VisibleIndex="16"></dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Cut NBA" FieldName="CUTOT" CellStyle-CssClass="cutot" VisibleIndex="7" Width="46px">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut ALSE" FieldName="CUTE" CellStyle-CssClass="cute" VisibleIndex="8" Width="46px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="NgayGiaoHang" FieldName="NgayGiaoHang" ShowInCustomizationForm="True" VisibleIndex="19" Visible="False">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="DaGiaoHang" FieldName="DaGiaoHang" Visible="False" VisibleIndex="17">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="DaGiaoDOC" FieldName="DaGiaoDOC" Visible="False" VisibleIndex="18">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="GioGiaoHang" FieldName="GioGiaoHang" Visible="False" VisibleIndex="20">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="NgayGiaoDOC" FieldName="NgayGiaoDOC" Visible="False" VisibleIndex="21">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="GioGiaoDOC" FieldName="GioGiaoDOC" Visible="False" VisibleIndex="22">
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />

        <Settings ShowColumnHeaders="false" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceHangDaChayTrenDuong" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>"
        SelectCommand="WebHangDaChayTrenDuongASG"
        SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <%--END TRUCKING TO NBA--%>
    <%--AIR PORT --%>
    <dx:ASPxGridView ID="ASPxGridView7" runat="server" KeyFieldName="SoMaWB" AutoGenerateColumns="False" CssClass="grid-view" DataSourceID="SqlDataSourceHangDaDenSanBay" Theme="Aqua" Width="1207px">

        <%--<SettingsBehavior AllowSelectByRowClick="true" />--%>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />

        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" RowDblClick="function(s, e) {

}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoMaWB" Caption="MAWB" VisibleIndex="1" Width="90px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKien" Caption="Pcs" ReadOnly="True" VisibleIndex="2" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TrongLuong" Caption="G.W" ReadOnly="True" VisibleIndex="3" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBay" Caption="ChuyenBay" VisibleIndex="4" Width="64px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayBK" Caption="Ngày Bay" VisibleIndex="5" Width="72px" CellStyle-CssClass="fltdate">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayBK" Caption="Giờ Bay" VisibleIndex="6" Width="60px" CellStyle-CssClass="flttime">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="DiemDen" CellStyle-CssClass="hx-dest" Caption="Điểm Đến" VisibleIndex="9" Width="50px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayLamSLI" CellStyle-CssClass="ngaylamsli" Caption="Date SLI" VisibleIndex="10" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioLamSLI" CellStyle-CssClass="giolamsli" Caption="Time SLI" VisibleIndex="11" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="BKSXeXuat" CellStyle-CssClass="hx-bksxexuat" Caption="BKS" VisibleIndex="12" Width="150px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXuat" CellStyle-CssClass="ngayxuat" Caption="Ngày Xuất" VisibleIndex="13" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXuat" CellStyle-CssClass="gioxuat" Caption="Giờ Xuất" VisibleIndex="14" Width="60px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Caption="Status">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="Trucking To NBA" Url="~/images/Airport.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="Đại Lý" CellStyle-CssClass="hx-fwd" FieldName="FWD" VisibleIndex="15" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Ghi Chú" FieldName="GhiChuMaWB" VisibleIndex="17" Width="70px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="AW" FieldName="Warehouse" CellStyle-CssClass="hx-warehouse" Width="50px" VisibleIndex="16"></dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Cut NBA" FieldName="CUTOT" CellStyle-CssClass="cutot" VisibleIndex="7" Width="46px">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut ALSE" FieldName="CUTE" CellStyle-CssClass="cute" VisibleIndex="8" Width="46px">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="NgayGiaoHang" FieldName="NgayGiaoHang" VisibleIndex="19" Visible="False">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="DaGiaoHang" FieldName="DaGiaoHang" Visible="False" VisibleIndex="17">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="DaGiaoDOC" FieldName="DaGiaoDOC" Visible="False" VisibleIndex="18">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="GioGiaoHang" FieldName="GioGiaoHang" Visible="False" VisibleIndex="20">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="NgayGiaoDOC" FieldName="NgayGiaoDOC" Visible="False" VisibleIndex="21">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="GioGiaoDOC" FieldName="GioGiaoDOC" Visible="False" VisibleIndex="22">
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Visible="False">
        </SettingsPager>

        <Settings ShowColumnHeaders="false" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceHangDaDenSanBay" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>"
        SelectCommand="WebHangDaDenSanBayASG"
        SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <%--END AIRPORT --%>
    <%--COMPLETE--%>
    <dx:ASPxGridView ID="ASPxGridView5" runat="server" Width="1207px" KeyFieldName="SoMaWB" AutoGenerateColumns="False" CssClass="grid-view" DataSourceID="SqlDataSourceHangDaGiaoXong" Theme="Aqua">

        <%--<SettingsBehavior AllowSelectByRowClick="true" />--%>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />

        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" RowDblClick="function(s, e) {

}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoMaWB" Caption="MAWB" VisibleIndex="1" Width="90px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKien" Caption="Pcs" ReadOnly="True" VisibleIndex="2" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TrongLuong" Caption="G.W" ReadOnly="True" VisibleIndex="3" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBay" CellStyle-CssClass="fltdate" Caption="C. Bay" VisibleIndex="4" Width="64px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayBK" Caption="N.Bay" VisibleIndex="5" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayBK" Caption="G.Bay" VisibleIndex="6" Width="60px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="DiemDen" CellStyle-CssClass="hx-dest" Caption="Đ.Đến" VisibleIndex="9" Width="50px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayLamSLI" CellStyle-CssClass="ngaylamsli" Caption="N.SLI" VisibleIndex="10" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioLamSLI" CellStyle-CssClass="giolamsli" Caption="G.SLI" VisibleIndex="11" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="BKSXeXuat" CellStyle-CssClass="hx-bksxexuat" Caption="BKS" VisibleIndex="12" Width="150px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXuat" CellStyle-CssClass="ngayxuat" Caption="N.Xuất" VisibleIndex="13" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXuat" CellStyle-CssClass="gioxuat" Caption="G.Xuất" VisibleIndex="14" Width="60px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Caption="Status">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="Complete" Url="~/images/falcon.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="Đại Lý" CellStyle-CssClass="hx-fwd" FieldName="FWD" VisibleIndex="15" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="G.Chú" FieldName="GhiChuMaWB" VisibleIndex="17" Width="70px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="AW" FieldName="Warehouse" CellStyle-CssClass="hx-warehouse" Width="50px" VisibleIndex="16"></dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="NBA" FieldName="CUTOT" CellStyle-CssClass="cutot" VisibleIndex="7" Width="46px">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="ALSE" FieldName="CUTE" CellStyle-CssClass="cute" VisibleIndex="8" Width="46px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="NgayGiaoHang" FieldName="NgayGiaoHang" ShowInCustomizationForm="True" VisibleIndex="19" Visible="False">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="DaGiaoHang" FieldName="DaGiaoHang" Visible="False" VisibleIndex="17">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="DaGiaoDOC" FieldName="DaGiaoDOC" Visible="False" VisibleIndex="18">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="GioGiaoHang" FieldName="GioGiaoHang" Visible="False" VisibleIndex="20">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="NgayGiaoDOC" FieldName="NgayGiaoDOC" Visible="False" VisibleIndex="21">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="GioGiaoDOC" FieldName="GioGiaoDOC" Visible="False" VisibleIndex="22">
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Visible="False">
        </SettingsPager>

        <Settings ShowColumnHeaders="false" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>

    <asp:SqlDataSource ID="SqlDataSourceHangDaGiaoXong" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaGiaoXongXuatASG" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <%--END COMPLETE--%>
    <%--POPUP BÁO CÁO SẢN LƯỢNG--%>
    <%--<dx:ASPxPopupControl ID="ASPxPopupControl1" runat="server" Modal="true" HeaderText="BÁO CÁO SẢN LƯỢNG" Height="281px" Width="535px" PopupElementID="abchx">
        <ContentCollection>

            <dx:PopupControlContentControl runat="server">

                <table class="nav-justified">
                    <tr>
                        <td class="auto-style1">
                            <dx:ASPxLabel ID="ASPxLabel3" runat="server" Text="Từ ngày">
                            </dx:ASPxLabel>
                        </td>
                        <td>
                            <dx:ASPxDateEdit ID="ASPxDateNgayDau" runat="server" OnDateChanged="ASPxDateNgayDau_DateChanged">
                            </dx:ASPxDateEdit>
                        </td>
                        <td>
                            <dx:ASPxLabel ID="ASPxLabel4" runat="server" Text="Đến ngày">
                            </dx:ASPxLabel>
                        </td>
                        <td>
                            <dx:ASPxDateEdit ID="ASPxDateNgayCuoi" runat="server" OnDateChanged="ASPxDateNgayCuoi_DateChanged">
                            </dx:ASPxDateEdit>
                        </td>
                    </tr>
                    <tr>
                        <td class="auto-style1">
                            <dx:ASPxLabel ID="ASPxLabel5" runat="server" Text="Đại lý">
                            </dx:ASPxLabel>
                        </td>
                        <td>
                            <dx:ASPxComboBox ID="ASPxComboBox2" runat="server" SelectedIndex="0">
                                <Items>
                                    <dx:ListEditItem Selected="True" Text="ALL" Value="ALL" />
                                    <dx:ListEditItem Text="AGI" Value="AGI" />
                                    <dx:ListEditItem Text="DHL" Value="DHL" />
                                    <dx:ListEditItem Text="SCK" Value="SCK" />
                                </Items>
                            </dx:ASPxComboBox>
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="auto-style1">
                            <dx:ASPxLabel ID="ASPxLabel6" runat="server" Text="Báo cáo">
                            </dx:ASPxLabel>
                        </td>
                        <td>
                            <dx:ASPxComboBox ID="ASPxComboBox1" runat="server" SelectedIndex="0">
                                <Items>
                                    <dx:ListEditItem Selected="True" Text="Xuất" Value="Xuat" />
                                    <dx:ListEditItem Text="Nhập" Value="Nhap" />
                                </Items>
                            </dx:ASPxComboBox>
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="auto-style1">&nbsp;</td>
                        <td>
                            <dx:ASPxButton ID="ASPxButton1" runat="server" Height="16px" OnClick="ASPxButton1_Click" Text="XEM" Width="162px">
                            </dx:ASPxButton>
                        </td>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                    </tr>
                </table>
            </dx:PopupControlContentControl>
        </ContentCollection>
    </dx:ASPxPopupControl>--%>
    <%--END POPUP BÁO CÁO SẢN LƯỢNG--%>


    <!-- Modal Báo cáo sản  lượng -->
    <div class="modal fade modal-fullscreen" id="modal-bcsl" role="dialog" aria-hidden="true" tabindex="-1" >
        <div class="modal-dialog">
            s<!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Báo cáo sản lượng</h4>
                      <div class="row">
                        <div class="form-group col-sm-6">
                            <label for="inputTuNgay" class="col-sm-3 control-label modal-style-padding">Từ ngày</label>
                            <div class="col-sm-9 modal-style-padding">
                                <input type="text" class="form-control" id="TuNgay" placeholder="dd/MM/yyyy" />
                            </div>
                        </div>
                        <div class="form-group col-sm-6">
                            <label for="inputDenNgay" class="col-sm-3 control-label modal-style-padding">Đến ngày</label>
                            <div class="col-sm-9 modal-style-padding">
                                <input type="text" class="form-control" id="DenNgay" placeholder="dd/MM/yyyy" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="inputDaiLy" class="col-sm-3 control-label modal-style-padding">Đơn vị vận tải</label>
                                <div class="col-sm-9 modal-style-padding">
                                    <select class="form-control select2" id="selectDaiLy">
                                        <option value="ASG">ASG</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="inputBaoCao" class="col-sm-3 control-label modal-style-padding">Báo Cáo</label>
                                <div class="col-sm-9 modal-style-padding">
                                    <select class="form-control select2" id="selectBaoCao">
                                        <option selected="selected" value="0">Xuất</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <table id="table-bao-cao-san-luong-xuat" class="table table-bordered">
                        <thead>
                                <tr>
                                    <th>Stt</th>
                                    <th>Số Mawb</th>
                                    <th>Số kiện</th>
                                    <th>Trọng lượng</th>
                                    <th>Chuyến bay</th>
                                    <th>Ngày bay BK</th>
                                    <th>Tên Hàng</th>
                                    <th>BKS xe xuất</th>
                                    <th>Ngày Xuất</th>
                                    <th>Giờ Xuất</th>
                                    <th>Mã PV</th>
                                    <th>FWD</th>
                                    <th>WH</th>
                                </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" id="xemBaoCao">Xem báo cáo</button>
                </div>
            </div>
        </div>
    </div>
    <!--End  Modal Báo cáo sản  lượng -->
      <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyHangXuatASG.js") %>
</asp:Content>