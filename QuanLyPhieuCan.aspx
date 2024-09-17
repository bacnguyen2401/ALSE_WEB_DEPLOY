<%@ Page Title="QUẢN LÝ PHIẾU CÂN" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="QuanLyPhieuCan.aspx.cs" Inherits="ALSE.QuanLyPhieuCan" %>
<%@ Register assembly="DevExpress.Web.v14.2" namespace="DevExpress.Web" tagprefix="dx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div>
            <p style="font-size: 30px; text-align: center; color: white;">QUẢN LÝ PHIẾU CÂN</p>
        </div>
    <div>
        <button type="button" class="btn btn-success" onclick="window.location='TrangThaiHangXuat.aspx'">Back</button>
    </div>
    <%--<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>--%>
    <dx:ASPxGridView ID="ASPxGridViewQLPC" ClientInstanceName="QLPC" runat="server" 
        AutoGenerateColumns="False" DataSourceID="SqlDataSourcePhieuCan" 
        KeyFieldName="SoMaWB;SoKien;TrongLuong;ChuyenBay;NgayBayBK;GioBayBK;DiemDen;TenHang;MaPV;ToKhai;NVKiemTra" 
        Width="100%" EnableTheming="True" 
        Theme="Office2003Blue" OnCustomCallback="ASPxGridViewQLPC_CustomCallback">
        <Columns>
            <dx:GridViewCommandColumn VisibleIndex="0" ShowClearFilterButton="True" Width="30px">
            </dx:GridViewCommandColumn>
            <dx:GridViewDataTextColumn Caption="Số MAWB" FieldName="SoMaWB" VisibleIndex="2" Width="120px">

            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Chuyến Bay" FieldName="ChuyenBay" VisibleIndex="7">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn Caption="Ngày Bay" FieldName="NgayBayBK" VisibleIndex="8">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                    <CalendarProperties TodayButtonText="Hôm nay">
                    </CalendarProperties>
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn Caption="Giờ Bay" FieldName="GioBayBK" VisibleIndex="9">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Điểm Đến" FieldName="DiemDen" VisibleIndex="10">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Tên Hàng" FieldName="TenHang" VisibleIndex="14" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Mã Xử Lý" FieldName="MaPV" VisibleIndex="15">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Tờ Khai" FieldName="ToKhai" VisibleIndex="16">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Nhân Viên" FieldName="NVKiemTra" VisibleIndex="21" Visible="False">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataDateColumn Caption="Ngày (SLI)" FieldName="NgayLamSLI" VisibleIndex="11">
                                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                    <CalendarProperties TodayButtonText="Hôm nay">
                    </CalendarProperties>
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>

            <dx:GridViewDataTextColumn Caption="Giờ (SLI)" FieldName="GioLamSLI" VisibleIndex="12">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Kgs" FieldName="TrongLuong" VisibleIndex="6">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Pcs" FieldName="SoKien" VisibleIndex="5">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="BKS" FieldName="BKSXeXuat" VisibleIndex="23"  Width="100px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataCheckColumn Caption="Duyệt" FieldName="DuyetSLI" VisibleIndex="24">
            </dx:GridViewDataCheckColumn>

            <dx:GridViewDataTextColumn Caption="FWD" FieldName="FWD" VisibleIndex="22">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Giờ Kế Hoạch" FieldName="GioXuat" Visible="False" VisibleIndex="13">
            </dx:GridViewDataTextColumn>

        </Columns>
        <Settings ShowFilterRow="True" ShowFooter="False" ShowHeaderFilterButton="True" ShowStatusBar="Visible" HorizontalScrollBarMode="Visible" ShowTitlePanel="True" />
        <SettingsLoadingPanel Mode="ShowOnStatusBar" Delay="0" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
        <SettingsPager Mode="EndlessPaging" PageSize="30" />
        <SettingsBehavior AllowSelectByRowClick="true" />
            <SettingsBehavior AllowFocusedRow="True" />
         <ClientSideEvents FocusedRowChanged="function(s, e) {
        gvctcpc.PerformCallback(s.GetFocusedRowIndex());
        }" />
        
        
    </dx:ASPxGridView>
    <dx:ASPxGridView ID="ASPxGridViewCTPC" runat="server" AutoGenerateColumns="False"
        KeyFieldName="SoSHIPMENT" OnCustomCallback="ASPxGridViewCTPC_CustomCallback" Width="1138px"
         ClientInstanceName="gvctcpc" Theme="Office2003Blue">
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoSHIPMENT" VisibleIndex="0" Caption="Số Shipment">
                <CellStyle Font-Size="Larger">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoDNN" VisibleIndex="1" Caption="Số DNN">
                                <CellStyle Font-Size="Larger">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="Kien" VisibleIndex="2" Caption="Kiện số" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKien" VisibleIndex="3" Caption="Số kiện" Visible="False">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TrongLuong" VisibleIndex="4" Caption="Trọng lượng">
                                <CellStyle Font-Size="Larger">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="KichThuoc" VisibleIndex="5" Caption="Kích thước">
                                <CellStyle Font-Size="Larger">
                </CellStyle>
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Visible="False">
        </SettingsPager>
        <SettingsPager Mode="EndlessPaging" PageSize="30" />
        <SettingsLoadingPanel Mode="ShowOnStatusBar" />
        <Settings ShowFilterRow="True" />
        <SettingsBehavior AllowSelectByRowClick="true" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceCTPhieuCan" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebLoadCTPhieuCan" SelectCommandType="StoredProcedure">
        <SelectParameters>
            <asp:SessionParameter Name="wb" SessionField="SoMaWB" Type="String" />
        </SelectParameters>
    </asp:SqlDataSource>
    <br />
    <asp:SqlDataSource ID="SqlDataSourcePhieuCan" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebLoadPhieuCan" SelectCommandType="StoredProcedure">
        <SelectParameters>
            <asp:SessionParameter Name="wug" SessionField="WUGroup" Type="Int32" />
        </SelectParameters>
    </asp:SqlDataSource>
</asp:Content>
