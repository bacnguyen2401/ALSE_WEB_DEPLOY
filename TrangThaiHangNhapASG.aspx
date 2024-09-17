<%@ Page Title="TRẠNG THÁI HÀNG NHẬP ASG" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" EnableViewState="false" CodeBehind="TrangThaiHangNhapASG.aspx.cs" Inherits="ALSE.TrangThaiHangNhapASG" %>
<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        .grid-view tr:hover {
            background-color: #d0ecbd;
        }

        .grid-view {
            width: 1226px;
        }

        /*.grid-view td {
                color: black;
            }*/

        .auto-style2 {
            /*width: 194px;*/
            text-align: right;
        }

        .auto-style4 {
            height: 20px;
            width: 108px;
        }

        .tablehx td {
            padding: 2px 4px;
        }

        .auto-style5 {
            width: 108px;
        }

        .auto-style20 {
            text-align: center;
        }

        .auto-style21 {
            /*width: 194px;*/
            text-align: right;
            height: 20px;
        }

        .auto-style22 {
            /*height: 20px;*/
        }

        .auto-style25 {
            /*width: 109px;*/
        }

        .auto-style26 {
            height: 20px;
            /*width: 109px;*/
        }

        .auto-style27 {
            width: 98px;
        }

        .auto-style28 {
            height: 20px;
            /*width: 98px;*/
        }

        .auto-style31 {
            /*width: 223px;*/
            text-align: right;
        }

        .auto-style32 {
            /*width: 223px;*/
            text-align: right;
            height: 20px;
        }

        .auto-style33 {
            /*width: 106px;*/
        }

        .auto-style34 {
            height: 20px;
            width: 106px;
        }

        .auto-style35 {
            height: 20px;
            text-align: right;
        }

        .ngayyctrahang {
            color: blue;
            font-weight: bold;
        }

        .gioyctrahang {
            color: blue;
            font-weight: bold;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1 style="text-align:center;color:white">IMPORT CARGO STATUS</h1>
    <!--ARRIVAL NOTICE-->
    <%--<Settings ShowColumnHeaders="false" />--%>
    <dx:ASPxGridView ID="ASPxGridView6" runat="server" AutoGenerateColumns="False" CssClass="grid-view arrivalnotice tomaudelay" DataSourceID="SqlDataSourceHangDaCoMatTaiSanBay" Theme="Aqua">
        <Columns>
            <dx:GridViewDataTextColumn FieldName="MAWB" ReadOnly="True" VisibleIndex="1" Width="123px" ToolTip="Số MAWB" CellStyle-CssClass="mawbcl somawb mawban">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="HAWB" VisibleIndex="2" Width="70px" CellStyle-CssClass="hawbcl">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKienTB" VisibleIndex="3" Width="45px" Caption="PCS">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="GM" VisibleIndex="4" Width="60px" Caption="G.W">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="CM" VisibleIndex="19" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBayTB" VisibleIndex="5" Width="78px" Caption="FLT">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayTB" VisibleIndex="6" Width="80px" Caption="FLT.DATE" CellStyle-CssClass="fltdate">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>

                <CellStyle CssClass="fltdate"></CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayTB" VisibleIndex="7" Width="56px" Caption="FLT.T" CellStyle-CssClass="flttime">
                <CellStyle CssClass="flttime"></CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TenHang" VisibleIndex="18" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayNhanTB" VisibleIndex="20" Visible="False">
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioNhanTB" VisibleIndex="21" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="FWDS" VisibleIndex="15" Width="49px" Caption="FWD">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TinhTrangTB" VisibleIndex="22" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="GhiChuTB" VisibleIndex="16" Width="187px" CellStyle-CssClass="remark" Caption="REMARK">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayYeuCauTraHang" CellStyle-CssClass="ngayyctrahang" VisibleIndex="8" Caption="ORDER DATE" Width="89px">
                <CellStyle Font-Bold="True">
                </CellStyle>
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioYeuCauTraHang" CellStyle-CssClass="gioyctrahang" VisibleIndex="23" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="DVTraHang" VisibleIndex="24" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="ORDER.T" VisibleIndex="9" Width="67px" CellStyle-CssClass="gioyctrahang" FieldName="GioYeuCauTraHang">

                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn Caption="STATUS" VisibleIndex="0" Width="105px">
                <PropertiesImage ImageHeight="32px" ImageWidth="90px" LoadingImageUrl="~/images/mail_web.png" ShowLoadingImage="True">
                    <EmptyImage Height="32px" ToolTip="Booking" Url="~/images/mail_web.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="PCS TRUE" Width="45px" VisibleIndex="13" FieldName="SoKienThuc">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="KGS CS" Width="60px" VisibleIndex="12" FieldName="HTSoCanThuc">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="PCS CD" Width="45px" VisibleIndex="11" FieldName="HTSoKienThuc">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="LACK" Width="35px" VisibleIndex="14" FieldName="LACK">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <%--<dx:GridViewDataTextColumn Caption="TRUCK ID" Width="72px" VisibleIndex="10" FieldName="BKSXeVe">
            </dx:GridViewDataTextColumn>--%>
        </Columns>
        <SettingsPager Visible="False">
        </SettingsPager>
        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceHangDaCoMatTaiSanBay" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaCoMatTaiSanBay" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <!--END ARRIVAL NOTICE-->
    <!-------------------------------->
    <!--DELYVERY PLAN-->
    <%--<Settings ShowColumnHeaders="false" />--%>
    <dx:ASPxGridView ID="ASPxGridView5" runat="server" AutoGenerateColumns="False" CssClass="grid-view tomaudelay tomaufltdt delyveryplan" DataSourceID="SqlDataSourceWebKeHoachLayHang" Theme="Aqua">
        <%--<Settings ShowColumnHeaders="false" />--%>
        <SettingsPager Visible="False">
        </SettingsPager>
        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="MAWB" CellStyle-CssClass="somawb" ReadOnly="True" VisibleIndex="1" Width="123px">

                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="HAWB" VisibleIndex="2" Width="70px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKienTB" VisibleIndex="3" Width="45px" Caption="PCS">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="GM" VisibleIndex="4" Width="60px" Caption="G.W">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="CM" VisibleIndex="19" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBayTB" VisibleIndex="5" Width="78px" Caption="FLT">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayTB" VisibleIndex="6" Width="80px" Caption="FLT.DATE">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
                <CellStyle CssClass="fltdate"></CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayTB" VisibleIndex="7" Width="56px" Caption="FLT.T">
                <CellStyle CssClass="flttime"></CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TenHang" VisibleIndex="18" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayNhanTB" VisibleIndex="20" Visible="False">
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioNhanTB" VisibleIndex="21" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="FWDS" VisibleIndex="15" Width="49px" Caption="FWD">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TinhTrangTB" VisibleIndex="22" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="GhiChuTB" VisibleIndex="16" Width="187px" CellStyle-CssClass="remark" Caption="REMARK">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayYeuCauTraHang" VisibleIndex="8" CellStyle-CssClass="ngayyctrahang" Caption="ORDER DATE" Width="89px">
                <CellStyle Font-Bold="True">
                </CellStyle>
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>

            <dx:GridViewDataTextColumn FieldName="DVTraHang" VisibleIndex="24" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="ORDER.T" VisibleIndex="9" CellStyle-CssClass="gioyctrahang" Width="67px" FieldName="GioYeuCauTraHang">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Width="105px" Caption="STATUS">
                <PropertiesImage>
                    <EmptyImage Height="32px" Url="~/images/DELIVERY PLAN.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="PCS TRUE" Width="45px" VisibleIndex="13" FieldName="SoKienThuc">
                <CellStyle HorizontalAlign="Center" VerticalAlign="Middle">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="G.W CD" Width="60px" VisibleIndex="12" FieldName="HTSoCanThuc">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="PCS CD" Width="45px" VisibleIndex="11" FieldName="HTSoKienThuc">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="LACK" Width="35px" VisibleIndex="14" FieldName="LACK">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <%--<dx:GridViewDataTextColumn Caption="TRUCK ID" Width="72px" VisibleIndex="10" FieldName="BKSXeVe">
            </dx:GridViewDataTextColumn>--%>
            <dx:GridViewDataDateColumn FieldName="NgayGiao" VisibleIndex="19" CellStyle-CssClass="statdate" Caption="STA DATE" Width="89px" ToolTip="Stat Date">
                <CellStyle Font-Bold="True">
                </CellStyle>
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioGiao" VisibleIndex="20" CellStyle-CssClass="stattime" Width="67px" Caption="STA TIME" ToolTip="Stat Time">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayTT" VisibleIndex="21" CellStyle-CssClass="ngaybaytt" Caption="NgayBayTT" Width="89px" >
                
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayTT" VisibleIndex="22" CellStyle-CssClass="giobaytt" Width="67px" Caption="GioBayTT" >
                
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceWebKeHoachLayHang" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebKeHoachLayHang" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <!--END DELYVERY PLAN-->
    <!-------------------------------->
    <!--TRUCKING ALSE-->
    <%--<Settings ShowColumnHeaders="false" />--%>
    <dx:ASPxGridView ID="ASPxGridView7" runat="server" AutoGenerateColumns="False" CssClass="grid-view tomaudelay tomaufltdt truckingalse" DataSourceID="SqlDataSourceWebHangDangVeKhoALSE" Theme="Aqua">
        <%--<Settings ShowColumnHeaders="false" />--%>
        <SettingsPager Visible="False">
        </SettingsPager>
        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="MAWB" CellStyle-CssClass="somawb" ReadOnly="True" VisibleIndex="1" Width="123px">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="HAWB" VisibleIndex="2" Width="70px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKienTB" VisibleIndex="3" Width="45px" Caption="PCS">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="GM" VisibleIndex="4" Width="60px" Caption="G.W">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="CM" VisibleIndex="20" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBayTB" VisibleIndex="5" Width="78px" Caption="FLT">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayTB" CellStyle-CssClass="fltdate" VisibleIndex="6" Width="80px" Caption="FLT.DATE">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayTB" VisibleIndex="7" Width="56px" Caption="FLT.T">
                <CellStyle CssClass="flttime"></CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TenHang" VisibleIndex="19" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayNhanTB" VisibleIndex="21" Visible="False">
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioNhanTB" VisibleIndex="22" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="FWDS" VisibleIndex="17" Width="49px" Caption="FWD">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TinhTrangTB" VisibleIndex="23" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="GhiChuTB" VisibleIndex="18" Width="43px" CellStyle-CssClass="remark" Caption="R.M">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXeVe" VisibleIndex="10" Caption="TRUCK DATE" Width="89px">
                <CellStyle Font-Bold="True">
                </CellStyle>
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioYeuCauTraHang" VisibleIndex="9" CellStyle-CssClass="gioyctrahang" Caption="ORDER.T">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="DVTraHang" VisibleIndex="24" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="TRUCK.T" VisibleIndex="11" Width="67px" FieldName="GioXeVe">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Width="105px" Caption="STATUS">
                <PropertiesImage>
                    <EmptyImage Height="32px" Url="~/images/TRUCKING ALSE.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="P.CD" FieldName="SoKienDSVCMD" VisibleIndex="13" Width="15px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="W.CD" FieldName="SoCanDSVCMD" VisibleIndex="14" Width="15px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="PCS.T" FieldName="SoKienBCXD" VisibleIndex="15" Width="15px">
                <CellStyle HorizontalAlign="Center" VerticalAlign="Middle">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="5" Width="35px" VisibleIndex="16" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="TRUCK ID" Width="72px" VisibleIndex="12" FieldName="BKSXeVe">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayYeuCauTraHang" CellStyle-CssClass="ngayyctrahang" Caption="ORDER DATE" VisibleIndex="8">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy"></PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataDateColumn FieldName="NgayGiao" VisibleIndex="19" CellStyle-CssClass="statdate" Caption="STA DATE" Width="89px" ToolTip="Stat Date">
                <CellStyle Font-Bold="True">
                </CellStyle>
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioGiao" VisibleIndex="20" CellStyle-CssClass="stattime" Width="67px" Caption="STA TIME" ToolTip="Stat Time">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayTT" VisibleIndex="21" CellStyle-CssClass="ngaybaytt" Caption="NgayBayTT" Width="89px" >
                
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayTT" VisibleIndex="22" CellStyle-CssClass="giobaytt" Width="67px" Caption="GioBayTT" >
                
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceWebHangDangVeKhoALSE" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDangVeKhoALSE" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <!--END TRUCKING ALSE-->
    <!-------------------------------->
    <!--ALSE WAREHOUSE-->
    <dx:ASPxGridView ID="ASPxGridView1" runat="server" AutoGenerateColumns="False" CssClass="grid-view tomaudelay alsewarehouse" DataSourceID="SqlDataSourceHangVeKho" ClientInstanceName="HDVK" KeyFieldName="MAWB" Theme="Aqua">
        <%--<Settings ShowColumnHeaders="false" />--%>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="MAWB" CellStyle-CssClass="somawb" VisibleIndex="1" Width="123px">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="HAWB" VisibleIndex="2" Width="70px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKienThuc" VisibleIndex="3" Caption="PCS" Width="45px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoCanThuc" VisibleIndex="4" Caption="G.W" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBayTT" VisibleIndex="5" Caption="FLT" Width="78px">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayTT" VisibleIndex="6" Caption="FLT.DATE" CellStyle-CssClass="ngaybaytt" Width="80px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayTT" VisibleIndex="7" Caption="FLT.T" CellStyle-CssClass="giobaytt" Width="56px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXeVe" VisibleIndex="10" Caption="DATE IN" Width="89px" CellStyle-CssClass="datein">
                <CellStyle Font-Bold="True">
                </CellStyle>
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXeVe" VisibleIndex="11" Caption="TIME IN" Width="67px" CellStyle-CssClass="timein">
                <CellStyle Font-Bold="True" HorizontalAlign="Center" VerticalAlign="Middle">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="MaDonViNhan" VisibleIndex="17" Caption="FWD" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="GhiChu" VisibleIndex="18" CellStyle-CssClass="remark" Caption="REMARK" Width="139px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Width="105px" Caption="STATUS">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="ALSE WareHouse" Url="~/images/alsewh.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="CODE" FieldName="Code" VisibleIndex="16" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="TRUCK ID" VisibleIndex="12" Width="72px" FieldName="BKSXeVe">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="3" Width="45px" VisibleIndex="15" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="2" Width="60px" VisibleIndex="14" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="1" Width="45px" VisibleIndex="13" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayYeuCauTraHang" CellStyle-CssClass="ngayyctrahang" Caption="ORDER DATE" VisibleIndex="8">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy"></PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioYeuCauTraHang" CellStyle-CssClass="gioyctrahang" Caption="ORDER. T" VisibleIndex="9"></dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayGiao" VisibleIndex="19" CellStyle-CssClass="statdate" Caption="STA DATE" Width="89px" ToolTip="Stat Date">
                <CellStyle Font-Bold="True">
                </CellStyle>
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioGiao" VisibleIndex="20" CellStyle-CssClass="stattime" Width="67px" Caption="STA TIME" ToolTip="Stat Time">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Visible="False">
        </SettingsPager>
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceHangVeKho" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaVeKho" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <!--END ALSE WAREHOURSE-->
    <!-------------------------------->
    <!--CLEAR CUSTOM-->
    <dx:ASPxGridView ID="ASPxGridView2" runat="server" AutoGenerateColumns="False" CssClass="grid-view tomaudelay clearcustom" DataSourceID="SqlDataSourceHQ" KeyFieldName="MAWB" Theme="Aqua">
        <%--<SettingsBehavior AllowSelectByRowClick="true" />--%>
        <%--<Settings ShowColumnHeaders="false" />--%>
        <SettingsPager Visible="False">
        </SettingsPager>
        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="MAWB" CellStyle-CssClass="somawb" VisibleIndex="1" Width="123px">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="HAWB" VisibleIndex="2" Width="70px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKienThuc" VisibleIndex="3" Width="45px" Caption="PCS">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoCanThuc" VisibleIndex="4" Width="60px" Caption="G.W">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBayTT" VisibleIndex="5" Width="78px" Caption="FLT">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayTT" VisibleIndex="6" Width="80px" CellStyle-CssClass="ngaybaytt" Caption="FLT.DATE" ToolTip="Flight Date">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayTT" VisibleIndex="7" Width="56px" CellStyle-CssClass="giobaytt" Caption="FLT.T" ToolTip="Flight Time">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXuat" VisibleIndex="10" Caption="CD DATE" Width="89px" ToolTip="Clear Custom Supervision Date">
                <CellStyle Font-Bold="True">
                </CellStyle>
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXuat" VisibleIndex="11" Width="67px" Caption="CD TIME" ToolTip="Clear Custom Supervision Time">
                <CellStyle Font-Bold="True" HorizontalAlign="Center" VerticalAlign="Middle">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="MaDonViNhan" VisibleIndex="17" Width="49px" Caption="FWD">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="GhiChu" VisibleIndex="18" Width="216px" CellStyle-CssClass="remark" Caption="REMARK">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Width="105px" Caption="STATUS">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="Hoàn Thành Thủ Tục Hải Quan" Url="~/images/hoanthanhhaiquan.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="CODE" FieldName="Code" VisibleIndex="16" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="4" Width="72px" VisibleIndex="12" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="3" Width="45px" VisibleIndex="15" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="2" Width="60px" VisibleIndex="14" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="1" Width="45px" VisibleIndex="13" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayYeuCauTraHang" CellStyle-CssClass="ngayyctrahang" Caption="ORDER DATE" VisibleIndex="8">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy"></PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioYeuCauTraHang" CellStyle-CssClass="gioyctrahang" Caption="ORDER. T" VisibleIndex="9"></dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayGiao" VisibleIndex="19" CellStyle-CssClass="statdate" Caption="STA DATE" Width="89px" ToolTip="Stat Date">
                <CellStyle Font-Bold="True">
                </CellStyle>
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioGiao" VisibleIndex="20" CellStyle-CssClass="stattime" Width="67px" Caption="STA TIME" ToolTip="Stat Time">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceHQ" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangHTHQ" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <!-- END CLEAR CUSTOM-->
    <!-------------------------------->
    <!--DELYVERING-->
    <dx:ASPxGridView ID="ASPxGridView3" runat="server" CssClass="grid-view tomaudelay delyvering" AutoGenerateColumns="False" DataSourceID="SqlDataSourceDuocGiao" KeyFieldName="MAWB" Theme="Aqua">
        <%--<SettingsBehavior AllowSelectByRowClick="true" />--%>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
        <%--<Settings ShowColumnHeaders="false" />--%>
        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="MAWB" CellStyle-CssClass="somawb" VisibleIndex="1" Width="100px">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="HAWB" VisibleIndex="2" Width="70px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKienThuc" VisibleIndex="3" Width="45px" Caption="PCS">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoCanThuc" VisibleIndex="4" Width="60px" Caption="G.W">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBayTT" VisibleIndex="5" Width="78px" Caption="FLT">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayTT" VisibleIndex="6" Width="80px" CellStyle-CssClass="ngaybaytt" Caption="FLT.DATE">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayTT" VisibleIndex="7" Width="56px" CellStyle-CssClass="giobaytt" Caption="FLT.T">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayGiao" VisibleIndex="10" CellStyle-CssClass="statdate" Caption="STA DATE" Width="89px" ToolTip="Stat Date">
                <CellStyle Font-Bold="True">
                </CellStyle>
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioGiao" VisibleIndex="11" CellStyle-CssClass="stattime" Width="67px" Caption="STA TIME" ToolTip="Stat Time">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="MaDonViNhan" VisibleIndex="17" Width="49px" Caption="FWD">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="GhiChu" VisibleIndex="18" Width="50px" CellStyle-CssClass="remark" Caption="REMARK">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Width="80px" Caption="STATUS">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="Đang Giao Hàng" Url="~/images/DELYVERING.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="TRUCK ID" FieldName="BKSXeGiao" VisibleIndex="12" Width="72px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="CODE" FieldName="Code" VisibleIndex="16" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="3" Width="45px" VisibleIndex="15" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="2" Width="60px" VisibleIndex="14" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="1" Width="45px" VisibleIndex="13" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayYeuCauTraHang" Width="75px" CellStyle-CssClass="ngayyctrahang" Caption="ORDER DATE" VisibleIndex="8">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy"></PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioYeuCauTraHang" Width="55px" CellStyle-CssClass="gioyctrahang" Caption="ORDER. T" VisibleIndex="9"></dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Visible="False">
        </SettingsPager>
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceDuocGiao" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaDuocGiao" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <!--END DELYVERING-->
    <!-------------------------------->
    <!--COMPLETE-->
    <dx:ASPxGridView ID="ASPxGridView4" runat="server" AutoGenerateColumns="False" CssClass="grid-view tomaudelay complete" DataSourceID="SqlDataSourceGiaoXong" KeyFieldName="MAWB" Theme="Aqua">
        <%--<SettingsBehavior AllowSelectByRowClick="true" />--%>
        <%--<Settings ShowColumnHeaders="false" />--%>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="MAWB" CellStyle-CssClass="somawb" VisibleIndex="1" Width="123px">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="HAWB" VisibleIndex="2" Width="70px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKienThuc" VisibleIndex="3" Width="45px" Caption="PCS">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoCanThuc" VisibleIndex="4" Width="60px" Caption="G.W">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBayTT" VisibleIndex="5" Width="78px" Caption="FLT">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayTT" CellStyle-CssClass="ngaybaytt" VisibleIndex="6" Width="80px" Caption="FLT.DATE">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayTT" CellStyle-CssClass="giobaytt" VisibleIndex="7" Width="56px" Caption="FLT.T">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayGiaoXong" CellStyle-CssClass="ngaygiaoxong" VisibleIndex="10" Caption="FINISH DATE" Width="89px">
                <CellStyle Font-Bold="True">
                </CellStyle>
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioGiaoXong" CellStyle-CssClass="giogiaoxong" VisibleIndex="11" Width="67px" Caption="FIN.TIME">
                <CellStyle Font-Bold="True" HorizontalAlign="Center" VerticalAlign="Middle">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="MaDonViNhan" VisibleIndex="17" Width="49px" Caption="FWD">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="GhiChu" VisibleIndex="18" Width="139px" CellStyle-CssClass="remark" Caption="REMARK">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Width="105px" Caption="STATUS">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="Đã Giao Xong" Url="~/images/COMPLETE.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="TRUCK ID" FieldName="BKSXeGiao" VisibleIndex="12" Width="72px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="CODE" FieldName="Code" VisibleIndex="16" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="3" Width="45px" VisibleIndex="15" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="2" Width="60px" VisibleIndex="14" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="1" Width="45px" VisibleIndex="13" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayYeuCauTraHang" CellStyle-CssClass="ngayyctrahang" Caption="ORDER DATE" VisibleIndex="8">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy"></PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioYeuCauTraHang" CellStyle-CssClass="gioyctrahang" Caption="ORDER. T" VisibleIndex="9"></dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayGiao" VisibleIndex="19" CellStyle-CssClass="statdate" Caption="STA DATE" Width="89px" ToolTip="Stat Date">
                <CellStyle Font-Bold="True">
                </CellStyle>
                <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioGiao" VisibleIndex="20" CellStyle-CssClass="stattime" Width="67px" Caption="STA TIME" ToolTip="Stat Time">
                <CellStyle Font-Bold="True" HorizontalAlign="Center">
                </CellStyle>
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Visible="False">
        </SettingsPager>
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceGiaoXong" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaGiaoXong" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <!--END COMPLETE-->
     
</asp:Content>
