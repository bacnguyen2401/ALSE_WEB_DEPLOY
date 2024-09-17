<%@ Page Title="TRẠNG THÁI HÀNG XUẤT" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" EnableViewState="false" CodeBehind="TrangThaiHangXuat.aspx.cs" Inherits="ALSE.TrangThaiHangXuat" %>

<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>
<%@ Register TagPrefix="dx" Namespace="DevExpress.Web" Assembly="DevExpress.Web.v14.2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">

    <link href="css/custom/trang-thai-hang-xuat.css" rel="stylesheet" />
    <link href="css/custom/quan-ly-khvc.css" rel="stylesheet" />
    <script type="text/javascript">
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <table class=" ">
        <tr>
            <td rowspan="2">

                <div id='countdown' class="hx-vitri" style="color: white;"></div>

                <br />
                <div class="hx-vitri">
                    <asp:Literal ID="ltrHXViTri" runat="server"></asp:Literal>
                </div>
                <br />
                <div class="hx-vitri" id="div-getkiemton">

                    <asp:Literal ID="ltrGetKiemTon" runat="server"></asp:Literal>
                </div>
                <br />
                <div class="hx-vitri" id="div-saikienso">

                    <asp:Literal ID="ltrSaiKienSo" runat="server"></asp:Literal>
                </div>
            </td>
            <td>
                <p style="font-size: 30px; text-align: center; color: white;">EXPORT CARGO STATUS</p>
            </td>
            <td>
                <div style="width: 700px;">
                    <ul id="webTicker-noti" class="webtiker">
                    </ul>
                </div>
                <div style="width: 700px;">
                    <ul id="webTicker-mistake" class="webtiker">
                    </ul>
                </div>
            </td>
        </tr>
        <tr>
            <td colspan="2">

                <a href="TruyVanHangXuat.aspx" class="mani-btn btn btn-primary btn-sm">Truy Vấn Hàng Xuất</a>
                <a href="DanhSachDNN.aspx" class="mani-btn btn btn-danger btn-sm">Danh Sách DNN</a>
                <a href="TruyVanDNN.aspx" class="mani-btn btn btn-danger btn-sm">Truy Vấn DNN</a>

                <a href="QuanLyPhieuCan.aspx" class="mani-btn btn btn-success btn-sm">Phiếu Cân</a>
                <a href="ViTri.aspx" class="mani-btn btn btn-success btn-sm">Vị Trí</a>
                <a href="NhapGTK.aspx" class="mani-btn btn btn-success btn-sm">Tờ Khai</a>

                <a runat="server" href="#" class="mani-btn btn btn-info btn-sm" id="abchx">Báo Cáo Sản Lượng</a>
                <button type="button" onclick="window.location='BCC.aspx'" class="btn btn-warning btn-sm">
                    <asp:Literal ID="LiteralSTTVSIP" runat="server"></asp:Literal></button>

                <button onclick="window.location='BCC.aspx'" class="btn btn-info btn-sm">
                    <asp:Literal ID="LiteralSTTNB" runat="server"></asp:Literal></button>
                <button onclick="window.location='BCC.aspx'" class="btn btn-success btn-sm">
                    <asp:Literal ID="LiteralSTTYP" runat="server"></asp:Literal></button>
                <input type="checkbox" id="cbx-vsip" class="cbx-c " checked name="show-vsip" />
                <span class="chx-name">VSIP</span>
                <input type="checkbox" id="cbx-hp" class="cbx-c" checked name="show-hp" />
                <span class="chx-name">HP</span>
            </td>
        </tr>
        <tr>
            <td colspan="3" id="td-getTTHX"></td>
        </tr>
        <tr>
            <td colspan="3">
                <table class="tablehx table-bordered" style="width: 1207px; background-color: white; height: 90px; border: solid 1px; padding: 3px;">
                    <tr id="tr-loading">
                        <td colspan="29">Loading...
                        </td>
                    </tr>
                    <tr>
                        <td class="auto-style20" colspan="3">ToTal:</td>
                        <td class="auto-style20" colspan="2">Include:</td>
                        <td class="auto-style20" colspan="2">MAWB:</td>
                        <%--<td class="auto-style20" colspan="2">Volume:</td>--%>

                        <td class="auto-style20" colspan="3" id="td-exp-today">Exp(ToDay):</td>
                        <td class="auto-style20" colspan="2">DHL:</td>
                        <td class="auto-style20" colspan="2">AGI:</td>
                        <td class="auto-style20" colspan="2">SCK:</td>
                        <td class="auto-style20" colspan="2">EI:</td>
                        <td class="auto-style20" colspan="2">PT:</td>
                        <td class="auto-style20" colspan="3">Exp(Y'Day):</td>
                        <td class="auto-style20" colspan="3">In(Y'Day):</td>
                        <td class="auto-style20" colspan="3">In W.H:</td>
                    </tr>

                    <tr>
                        <td class="auto-style2 bn-data hx-value" id="bn-total-pcs"></td>
                        <td class="auto-style2 hp-data hx-value" id="hp-total-pcs"></td>
                        <td class="auto-style5"><span>Pcs</span></td>
                        <td class="auto-style2 bn-data hx-value" id="bn-include-skid"></td>
                        <td><span>skid</span></td>
                        <td class="auto-style2 bn-data hx-value" id="bn-mawb-pcs"></td>
                        <td class="auto-style5"><span>Pcs</span></td>
                        <%--<td class="auto-style2 bn-data hx-value" id="bn-volume-cbm">
                </td>
                <td>cbm</td>--%>

                        <td class="auto-style2 bn-data hx-value" id="bn-exptoday-pcs"></td>
                        <td class="auto-style2 hp-data hx-value" id="hp-exptoday-pcs"></td>
                        <td>Pcs</td>
                        <!--FWD-->
                        <td class="auto-style2 hx-value bn-data" id="dhl-pcs"></td>
                        <td>Pcs</td>
                        <td class="auto-style2 hx-value bn-data" id="agi-pcs"></td>
                        <td>Pcs</td>
                        <td class="auto-style2 hx-value bn-data" id="sck-pcs"></td>
                        <td>Pcs</td>
                        <td class="auto-style2 hx-value bn-data" id="ei-pcs"></td>
                        <td>Pcs</td>
                        <td class="auto-style2 hx-value hp-data" id="pt-pcs"></td>
                        <td>Pcs</td>
                        <td class="auto-style2 bn-data hx-value" id="bn-expyesterday-pcs"></td>
                        <td class="auto-style2 hp-data hx-value" id="hp-expyesterday-pcs"></td>
                        <td>Pcs</td>
                        <td class="auto-style2 bn-data hx-value" id="bn-inyesterday-pcs"></td>
                        <td class="auto-style2 hp-data hx-value" id="hp-inyesterday-pcs"></td>
                        <td>Pcs</td>
                        <td class="auto-style2 bn-data hx-value" id="bn-intoday-pcs"></td>
                        <td class="auto-style2 hp-data hx-value" id="hp-intoday-pcs"></td>
                        <td>Pcs</td>
                    </tr>
                    <tr>
                        <td class="auto-style2 bn-data hx-value" id="bn-total-kgs"></td>
                        <td class="auto-style2 hp-data hx-value" id="hp-total-kgs"></td>
                        <td class="auto-style4"><span>Kgs</span></td>
                        <td class="auto-style2 bn-data hx-value" id="bn-include-carton"></td>
                        <td><span>carton</span></td>
                        <td class="auto-style2 bn-data hx-value" id="bn-mawb-kgs"></td>
                        <td class="auto-style4"><span>Kgs</span></td>
                        <%--<td class="auto-style2">
                </td>--%>
                        <%--<td><span></span></td>--%>

                        <td class="auto-style2 bn-data hx-value" id="bn-exptoday-kgs"></td>
                        <td class="auto-style2 hp-data hx-value" id="hp-exptoday-kgs"></td>
                        <td><span>Kgs</span></td>
                        <!--FWD-->
                        <td class="auto-style2 hx-value bn-data" id="dhl-kgs"></td>
                        <td><span>Kgs</span></td>
                        <td class="auto-style2 hx-value bn-data" id="agi-kgs"></td>
                        <td><span>Kgs</span></td>
                        <td class="auto-style2 hx-value bn-data" id="sck-kgs"></td>
                        <td><span>Kgs</span></td>
                        <td class="auto-style2 hx-value bn-data" id="ei-kgs"></td>
                        <td><span>Kgs</span></td>
                        <td class="auto-style2 hx-value hp-data" id="pt-kgs"></td>
                        <td><span>Kgs</span></td>
                        <td class="auto-style2 bn-data hx-value" id="bn-expyesterday-kgs"></td>
                        <td class="auto-style2 hp-data hx-value" id="hp-expyesterday-kgs"></td>
                        <td><span>Kgs</span></td>
                        <td class="auto-style2 bn-data hx-value" id="bn-inyesterday-kgs"></td>
                        <td class="auto-style2 hp-data hx-value" id="hp-inyesterday-kgs"></td>
                        <td><span>Kgs</span></td>
                        <td class="auto-style2 bn-data hx-value" id="bn-intoday-kgs"></td>
                        <td class="auto-style2 hp-data hx-value" id="hp-intoday-kgs"></td>
                        <td><span>Kgs</span></td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>

    <%--BOOKING--%>
    <dx:ASPxGridView ID="ASPxGridView6" runat="server" AutoGenerateColumns="False" CssClass="grid-view hangchuataophieucan" DataSourceID="SqlDataSourceHangChuaTaoPhieuCan" Theme="Aqua" Width="1207px" KeyFieldName="MAWB">
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
        <Settings ShowColumnHeaders="false" />
        <SettingsDataSecurity AllowEdit="False" AllowDelete="False" AllowInsert="False" />
    </dx:ASPxGridView>

    <asp:SqlDataSource ID="SqlDataSourceHangChuaTaoPhieuCan" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangChuaTaoPhieuCan" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
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
    <asp:SqlDataSource ID="SqlDataSourceHangDaTaoPhieuCan" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaTaoPhieuCan" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
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
    <asp:SqlDataSource ID="SqlDataSourceHangDaDuyetPhieuCan" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaDuyetPhieuCan" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
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
    <asp:SqlDataSource ID="SqlDataSourceHangDaGhepXe" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaGhepXe" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <%--END LOADING ON TRUCK--%>

    <%--TRUCKING TO NBA--%>
    <dx:ASPxGridView ID="ASPxGridView1" runat="server" KeyFieldName="SoMaWB" AutoGenerateColumns="False" CssClass="grid-view tbl-custom" DataSourceID="SqlDataSourceHangDaChayTrenDuong" Theme="Aqua" Width="1207px">

        <%--<SettingsBehavior AllowSelectByRowClick="true" />--%>
        <SettingsPager Visible="False">
        </SettingsPager>

        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" RowDblClick="function(s, e) {

}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoMaWB" Caption="MAWB" CellStyle-CssClass="kmawb mo-mawb" VisibleIndex="1" Width="90px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKien" CellStyle-CssClass="mo-sokien" Caption="Pcs" ReadOnly="True" VisibleIndex="2" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TrongLuong" CellStyle-CssClass="mo-trongluong" Caption="G.W" ReadOnly="True" VisibleIndex="3" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBay" CellStyle-CssClass="mo-chuyenbay" Caption="ChuyenBay" VisibleIndex="4" Width="64px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayBK" Caption="Ngày Bay" VisibleIndex="5" Width="72px" CellStyle-CssClass="fltdate mo-ngaybay">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayBK" Caption="Giờ Bay" VisibleIndex="6" Width="60px" CellStyle-CssClass="flttime mo-giobay">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="DiemDen" CellStyle-CssClass="hx-dest mo-diemden" Caption="Điểm Đến" VisibleIndex="9" Width="50px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayLamSLI" CellStyle-CssClass="ngaylamsli mo-ngaylamsli" Caption="Date SLI" VisibleIndex="10" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioLamSLI" CellStyle-CssClass="giolamsli mo-giolamsli" Caption="Time SLI" VisibleIndex="11" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="BKSXeXuat" CellStyle-CssClass="hx-bksxexuat mo-bksxexuat" Caption="BKS" VisibleIndex="12" Width="150px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXuat" CellStyle-CssClass="ngayxuat mo-ngayxuat" Caption="Ngày Xuất" VisibleIndex="13" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXuat" CellStyle-CssClass="gioxuat mo-gioxuat" Caption="Giờ Xuất" VisibleIndex="14" Width="60px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Caption="Status" CellStyle-CssClass="btnpop cell-showmodal">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="Trucking To NBA" Url="~/images/lorrygreen.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="Đại Lý" CellStyle-CssClass="hx-fwd mo-daily" FieldName="FWD" VisibleIndex="15" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Ghi Chú" FieldName="GhiChuMaWB" CellStyle-CssClass="mo-ghichu" VisibleIndex="17" Width="70px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="AW" FieldName="Warehouse" CellStyle-CssClass="hx-warehouse mo-wh" Width="50px" VisibleIndex="16"></dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Cut NBA" FieldName="CUTOT" CellStyle-CssClass="cutot mo-cutnba" VisibleIndex="7" Width="46px">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut ALSE" FieldName="CUTE" CellStyle-CssClass="cute mo-cutalse" VisibleIndex="8" Width="46px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="NgayGiaoHang" FieldName="NgayGiaoHang" ShowInCustomizationForm="True" VisibleIndex="20" Visible="False">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="DaGiaoHang" FieldName="DaGiaoHang" Visible="False" VisibleIndex="18">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="DaGiaoDOC" FieldName="DaGiaoDOC" Visible="False" VisibleIndex="19">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="GioGiaoHang" FieldName="GioGiaoHang" Visible="False" VisibleIndex="21">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="NgayGiaoDOC" FieldName="NgayGiaoDOC" Visible="False" VisibleIndex="22">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="GioGiaoDOC" FieldName="GioGiaoDOC" Visible="False" VisibleIndex="23">
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />

        <Settings ShowColumnHeaders="false" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceHangDaChayTrenDuong" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>"
        SelectCommand="WebHangDaChayTrenDuong"
        SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <%--END TRUCKING TO NBA--%>
    <%--AIR PORT --%>
    <dx:ASPxGridView ID="ASPxGridView7" runat="server" KeyFieldName="SoMaWB" AutoGenerateColumns="False" CssClass="grid-view tbl-custom" DataSourceID="SqlDataSourceHangDaDenSanBay" Theme="Aqua" Width="1207px">

        <%--<SettingsBehavior AllowSelectByRowClick="true" />--%>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />

        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" RowDblClick="function(s, e) {

}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoMaWB" CellStyle-CssClass="mo-mawb" Caption="MAWB" VisibleIndex="1" Width="90px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKien" CellStyle-CssClass="mo-sokien" Caption="Pcs" ReadOnly="True" VisibleIndex="2" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TrongLuong" CellStyle-CssClass="mo-trongluong" Caption="G.W" ReadOnly="True" VisibleIndex="3" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBay" CellStyle-CssClass="mo-chuyenbay" Caption="ChuyenBay" VisibleIndex="4" Width="64px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayBK" Caption="Ngày Bay" VisibleIndex="5" Width="72px" CellStyle-CssClass="fltdate mo-ngaybay">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayBK" Caption="Giờ Bay" VisibleIndex="6" Width="60px" CellStyle-CssClass="flttime mo-giobay">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="DiemDen" CellStyle-CssClass="hx-dest mo-diemden" Caption="Điểm Đến" VisibleIndex="9" Width="50px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayLamSLI" CellStyle-CssClass="ngaylamsli mo-ngaylamsli" Caption="Date SLI" VisibleIndex="10" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioLamSLI" CellStyle-CssClass="giolamsli mo-giolamsli" Caption="Time SLI" VisibleIndex="11" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="BKSXeXuat" CellStyle-CssClass="hx-bksxexuat mo-bksxexuat" Caption="BKS" VisibleIndex="12" Width="150px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXuat" CellStyle-CssClass="ngayxuat mo-ngayxuat" Caption="Ngày Xuất" VisibleIndex="13" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXuat" CellStyle-CssClass="gioxuat mo-gioxuat" Caption="Giờ Xuất" VisibleIndex="14" Width="60px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Caption="Status" CellStyle-CssClass="cell-showmodal">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="Trucking To NBA" Url="~/images/Airport.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="Đại Lý" CellStyle-CssClass="hx-fwd mo-daily" FieldName="FWD" VisibleIndex="15" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Ghi Chú" FieldName="GhiChuMaWB" CellStyle-CssClass="mo-ghichu" VisibleIndex="17" Width="70px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="AW" FieldName="Warehouse" CellStyle-CssClass="hx-warehouse mo-wh" Width="50px" VisibleIndex="16"></dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Cut NBA" FieldName="CUTOT" CellStyle-CssClass="cutot mo-cutnba" VisibleIndex="7" Width="46px">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut ALSE" FieldName="CUTE" CellStyle-CssClass="cute mo-cutalse" VisibleIndex="8" Width="46px">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="NgayGiaoHang" FieldName="NgayGiaoHang" VisibleIndex="20" Visible="False">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="DaGiaoHang" FieldName="DaGiaoHang" Visible="False" VisibleIndex="18">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="DaGiaoDOC" FieldName="DaGiaoDOC" Visible="False" VisibleIndex="19">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="GioGiaoHang" FieldName="GioGiaoHang" Visible="False" VisibleIndex="21">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="NgayGiaoDOC" FieldName="NgayGiaoDOC" Visible="False" VisibleIndex="22">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="GioGiaoDOC" FieldName="GioGiaoDOC" Visible="False" VisibleIndex="23">
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Visible="False">
        </SettingsPager>

        <Settings ShowColumnHeaders="false" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceHangDaDenSanBay" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>"
        SelectCommand="WebHangDaDenSanBay"
        SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <%--END AIRPORT --%>
    <%--COMPLETE--%>
    <dx:ASPxGridView ID="ASPxGridView5" runat="server" Width="1207px" KeyFieldName="SoMaWB" AutoGenerateColumns="False" CssClass="grid-view tbl-custom" DataSourceID="SqlDataSourceHangDaGiaoXong" Theme="Aqua">

        <%--<SettingsBehavior AllowSelectByRowClick="true" />--%>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />

        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" RowDblClick="function(s, e) {

}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoMaWB" CellStyle-CssClass="mo-mawb" Caption="MAWB" VisibleIndex="1" Width="90px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKien" Caption="Pcs" CellStyle-CssClass="mo-sokien" ReadOnly="True" VisibleIndex="2" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TrongLuong" Caption="G.W" CellStyle-CssClass="mo-trongluong" ReadOnly="True" VisibleIndex="3" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBay" CellStyle-CssClass="fltdate mo-chuyenbay" Caption="C. Bay" VisibleIndex="4" Width="64px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayBK" CellStyle-CssClass="mo-ngaybay" Caption="N.Bay" VisibleIndex="5" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayBK" Caption="G.Bay" CellStyle-CssClass="mo-giobay" VisibleIndex="6" Width="60px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="DiemDen" CellStyle-CssClass="hx-dest mo-diemden" Caption="Đ.Đến" VisibleIndex="9" Width="50px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayLamSLI" CellStyle-CssClass="ngaylamsli mo-ngaylamsli" Caption="N.SLI" VisibleIndex="10" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioLamSLI" CellStyle-CssClass="giolamsli mo-giolamslit" Caption="G.SLI" VisibleIndex="11" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="BKSXeXuat" CellStyle-CssClass="hx-bksxexuat mo-bksxexuat" Caption="BKS" VisibleIndex="12" Width="150px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXuat" CellStyle-CssClass="ngayxuat mo-ngayxuat" Caption="N.Xuất" VisibleIndex="13" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXuat" CellStyle-CssClass="gioxuat mo-gioxuat" Caption="G.Xuất" VisibleIndex="14" Width="60px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="0" Caption="Status" CellStyle-CssClass="cell-showmodal">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="Complete" Url="~/images/falcon.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="Đại Lý" CellStyle-CssClass="hx-fwd mo-daily" FieldName="FWD" VisibleIndex="15" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="G.Chú" FieldName="GhiChuMaWB" CellStyle-CssClass="mo-ghichu" VisibleIndex="17" Width="70px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="AW" FieldName="Warehouse" CellStyle-CssClass="hx-warehouse mo-wh" Width="50px" VisibleIndex="16"></dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="NBA" FieldName="CUTOT" CellStyle-CssClass="cutot mo-cutnba" VisibleIndex="7" Width="46px">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="ALSE" FieldName="CUTE" CellStyle-CssClass="cute mo-cutalse" VisibleIndex="8" Width="46px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="NgayGiaoHang" FieldName="NgayGiaoHang" ShowInCustomizationForm="True" VisibleIndex="20" Visible="False">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="DaGiaoHang" FieldName="DaGiaoHang" Visible="False" VisibleIndex="18">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="DaGiaoDOC" FieldName="DaGiaoDOC" Visible="False" VisibleIndex="19">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="GioGiaoHang" FieldName="GioGiaoHang" Visible="False" VisibleIndex="21">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="NgayGiaoDOC" FieldName="NgayGiaoDOC" Visible="False" VisibleIndex="22">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="GioGiaoDOC" FieldName="GioGiaoDOC" Visible="False" VisibleIndex="23">
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Visible="False">
        </SettingsPager>

        <Settings ShowColumnHeaders="false" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>

    <asp:SqlDataSource ID="SqlDataSourceHangDaGiaoXong" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaGiaoXongXuat" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <%--END COMPLETE--%>
    <%--POPUP BÁO CÁO SẢN LƯỢNG--%>
    <dx:ASPxPopupControl ID="ASPxPopupControl1" runat="server" Modal="true" HeaderText="BÁO CÁO SẢN LƯỢNG" Height="281px" Width="535px" PopupElementID="abchx">
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
    </dx:ASPxPopupControl>
    <%--END POPUP BÁO CÁO SẢN LƯỢNG--%>
    <asp:Label ID="lbUID" runat="server" Text="" CssClass="lbUID"></asp:Label>

    <!-- modal---->
    <div class="modal fade " tabindex="-1" role="dialog" id="modal-changestatus">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Xác nhận chuyển trạng thái</h4>
                </div>
                <div class="modal-body">

                    <table class="table" id="mo-table">
                        <tr>
                            <td>
                                <label class="control-label">Mawb</label></td>
                            <td>
                                <span class=" " id="mo-mawb"></span>
                            </td>
                            <td>
                                <label class="control-label">Số Kiện</label></td>
                            <td>
                                <span class=" " id="mo-sokien"></span>
                            </td>
                            <td>
                                <label class="control-label">Trọng Lượng</label></td>
                            <td>
                                <span class=" " id="mo-trongluong"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="control-label">Chuyến bay</label></td>
                            <td>
                                <span class=" " id="mo-chuyenbay"></span>
                            </td>
                            <td>
                                <label class="control-label">Ngày Bay</label></td>
                            <td>
                                <span class=" " id="mo-ngaybay"></span>
                            </td>
                            <td>
                                <label class="control-label">Giờ bay</label></td>
                            <td>
                                <span class=" " id="mo-giobay"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="control-label">CUT NBA</label></td>
                            <td>
                                <span class=" " id="mo-cutnba"></span>
                            </td>
                            <td>
                                <label class="control-label">CUT ALSE</label></td>
                            <td>
                                <span class=" " id="mo-cutalse"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="control-label">Điểm Đến</label></td>
                            <td>
                                <span class=" " id="mo-diemden"></span>
                            </td>
                            <td>
                                <label class="control-label">Ngày Làm SLI</label></td>
                            <td>
                                <span class=" " id="mo-ngaylamsli"></span>
                            </td>
                            <td>
                                <label class="control-label">Giờ Làm SLI</label></td>
                            <td>
                                <span class=" " id="mo-giolamsli"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="control-label">BKS Xe Xuất</label></td>
                            <td>
                                <span class=" " id="mo-bksxexuat"></span>
                            </td>
                            <td>
                                <label class="control-label">Ngày Xuất</label></td>
                            <td>
                                <span class=" " id="mo-ngayxuat"></span>
                            </td>
                            <td>
                                <label class="control-label">Giờ Xuất</label></td>
                            <td>
                                <span class=" " id="mo-gioxuat"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="control-label">Đại Lý</label></td>
                            <td>
                                <span class=" " id="mo-daily"></span>
                            </td>
                            <td>
                                <label class="control-label">Warehouse</label></td>
                            <td>
                                <span class=" " id="mo-wh"></span>
                            </td>
                            <td>
                                <label class="control-label">Ghi Chú</label></td>
                            <td>
                                <span class=" " id="mo-ghichu"></span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-info btn-changestatus" id="modal-btn-trucking" value="trucking">Trucking</button>
                    <button type="button" class="btn btn-success btn-changestatus" id="modal-btn-airport" value="airport">AirPort</button>
                    <button type="button" class="btn btn-primary btn-changestatus" id="modal-btn-complete" value="complete">Complete</button>
                    <%--<span id="sp-saveloading"><img src="http://preloaders.net/preloaders/5/Filled%20fading%20balls.gif" alt="loading" /></span>--%>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <!-------------------->
    <div class="modal fade" tabindex="-1" role="dialog" id="modal-updating">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">

                <div class="modal-body">
                    <span>
                        <img src="images/loading.gif" alt="loading" />
                        Đang cập nhật...</span>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->
    <!-- Modal -->
     <div class="modal fade" id="myModalSanLuong" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">Thống kê sản lượng </h4>
                </div>
                <div class="modal-body">

                    <div>
                        <table class="table table-bordered table-hover" id="tbl-sanluongngay">
                            <thead>
                                <tr>
                                    <td rowspan="2"></td>
                                    <td colspan="2">VSIP</td>
                                    <td colspan="2">HPH</td>
                                </tr>
                                <tr>

                                    <td>Số Kiện</td>
                                    <td>Trọng Lượng</td>
                                    <td>Số Kiện</td>
                                    <td>Trọng Lượng</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SL Xuất Kho</td>
                                    <td id="sl-ngay-vsip-xuatkho-sokien"></td>
                                    <td id="sl-ngay-vsip-xuatkho-trongluong"></td>
                                    <td id="sl-ngay-hph-xuatkho-sokien"></td>
                                    <td id="sl-ngay-hph-xuatkho-trongluong"></td>
                                </tr>
                                <tr>

                                    <td>SL Nhập Kho</td>
                                    <td id="sl-ngay-vsip-nhapkho-sokien"></td>
                                    <td id="sl-ngay-vsip-nhapkho-trongluong"></td>
                                    <td id="sl-ngay-hph-nhapkho-sokien"></td>
                                    <td id="sl-ngay-hph-nhapkho-trongluong"></td>
                                </tr>
                                <tr>

                                    <td>SL Lưu Kho</td>
                                    <td id="sl-ngay-vsip-luukho-sokien"></td>
                                    <td id="sl-ngay-vsip-luukho-trongluong"></td>
                                    <td id="sl-ngay-hph-luukho-sokien"></td>
                                    <td id="sl-ngay-hph-luukho-trongluong"></td>
                                </tr>
                                <tr>

                                    <td>SL Xe</td>
                                    <td colspan="2" id="sl-ngay-vsip-xe"></td>

                                    <td colspan="2" id="sl-ngay-hph-xe"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table class="table table-bordered table-hover" id="tbl-sanluongthang">
                            <thead>
                                <tr>
                                    <td>Tháng</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>VSIP</td>
                                    <td id="sl-thang-vsip-1"></td>
                                    <td id="sl-thang-vsip-2"></td>
                                    <td id="sl-thang-vsip-3"></td>
                                    <td id="sl-thang-vsip-4"></td>
                                    <td id="sl-thang-vsip-5"></td>
                                    <td id="sl-thang-vsip-6"></td>
                                    <td id="sl-thang-vsip-7"></td>
                                    <td id="sl-thang-vsip-8"></td>
                                    <td id="sl-thang-vsip-9"></td>
                                    <td id="sl-thang-vsip-10"></td>
                                    <td id="sl-thang-vsip-11"></td>
                                    <td id="sl-thang-vsip-12"></td>
                                </tr>
                                <tr>
                                    <td>HPH</td>
                                    <td id="sl-thang-hph-1"></td>
                                    <td id="sl-thang-hph-2"></td>
                                    <td id="sl-thang-hph-3"></td>
                                    <td id="sl-thang-hph-4"></td>
                                    <td id="sl-thang-hph-5"></td>
                                    <td id="sl-thang-hph-6"></td>
                                    <td id="sl-thang-hph-7"></td>
                                    <td id="sl-thang-hph-8"></td>
                                    <td id="sl-thang-hph-9"></td>
                                    <td id="sl-thang-hph-10"></td>
                                    <td id="sl-thang-hph-11"></td>
                                    <td id="sl-thang-hph-12"></td>
                                </tr>
                                <tr>
                                    <td>Tổng</td>
                                    <td id="sl-thang-tong-1"></td>
                                    <td id="sl-thang-tong-2"></td>
                                    <td id="sl-thang-tong-3"></td>
                                    <td id="sl-thang-tong-4"></td>
                                    <td id="sl-thang-tong-5"></td>
                                    <td id="sl-thang-tong-6"></td>
                                    <td id="sl-thang-tong-7"></td>
                                    <td id="sl-thang-tong-8"></td>
                                    <td id="sl-thang-tong-9"></td>
                                    <td id="sl-thang-tong-10"></td>
                                    <td id="sl-thang-tong-11"></td>
                                    <td id="sl-thang-tong-12"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">

                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <%---------------------------%>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/quan-ly-khvc.js") %>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/trang-thai-hang-xuat.js") %>
</asp:Content>