<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="KHVC.ascx.cs" Inherits="ALSE.Control.KHVC" %>
<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>
<dx:ASPxGridView ID="ASPxGridView1" runat="server" AutoGenerateColumns="False"
    DataSourceID="SqlDataSourceQLKHVC" KeyFieldName="MAWB" EnableTheming="True" Theme="Aqua"
    OnBeforePerformDataSelect="ASPxGridView1_BeforePerformDataSelect" OnCustomButtonCallback="grid1_CustomButtonCallback"
    EnableRowsCache="False" ClientInstanceName="ASPxGridView1">

    <%--<Settings ShowColumnHeaders="false" />--%>

    <%--<Settings ShowStatusBar="Visible" />--%>

    <SettingsPager Mode="ShowAllRecords" PageSize="1000" />

    <Columns>
        <dx:GridViewCommandColumn ShowDeleteButton="true" VisibleIndex="17" Caption="Delete">
        </dx:GridViewCommandColumn>
        <dx:GridViewDataTextColumn FieldName="MAWB" Width="99px" VisibleIndex="1">
            <CellStyle Font-Bold="True">
            </CellStyle>
        </dx:GridViewDataTextColumn>
        <dx:GridViewDataTextColumn FieldName="DEST" Width="50px" VisibleIndex="9">
        </dx:GridViewDataTextColumn>
        <dx:GridViewDataTextColumn FieldName="FLTNO" Width="64px" VisibleIndex="4" Caption="FLT.NO">
        </dx:GridViewDataTextColumn>
        <dx:GridViewDataTextColumn FieldName="FLTTIME" Width="61px" VisibleIndex="7" Caption="FLT.T">
            <CellStyle Font-Bold="True">
            </CellStyle>
        </dx:GridViewDataTextColumn>
        <dx:GridViewDataTextColumn Caption="G.W" Width="58px" FieldName="TrongLuong" VisibleIndex="3">
        </dx:GridViewDataTextColumn>
        <dx:GridViewDataTextColumn Caption="TIME" VisibleIndex="11">
        </dx:GridViewDataTextColumn>
        <dx:GridViewDataTextColumn VisibleIndex="12" FieldName="FWD" Width="49px">
        </dx:GridViewDataTextColumn>
        <dx:GridViewDataTextColumn VisibleIndex="2" FieldName="ESTPLT" Width="35px" Caption="PCS">
        </dx:GridViewDataTextColumn>
        <dx:GridViewDataTextColumn VisibleIndex="8" FieldName="CUTE" Caption="CUT ALSE" Width="46px" CellStyle-CssClass="cute">
            <CellStyle CssClass="cute"></CellStyle>
        </dx:GridViewDataTextColumn>
        <dx:GridViewDataTextColumn VisibleIndex="10" Caption="DATE">
        </dx:GridViewDataTextColumn>
        <dx:GridViewDataTextColumn Caption="PROCESS" VisibleIndex="13" FieldName="HoanThanh" Width="120px">
        </dx:GridViewDataTextColumn>
        <dx:GridViewDataImageColumn VisibleIndex="0" Width="99px">
            <PropertiesImage>
                <EmptyImage Url="~/images/booking.png">
                </EmptyImage>
            </PropertiesImage>
        </dx:GridViewDataImageColumn>
        <dx:GridViewDataDateColumn FieldName="FLTDATE" Width="72px" Caption="FLT.D" VisibleIndex="6">
            <PropertiesDateEdit DisplayFormatString="dd/MM/yy"></PropertiesDateEdit>
            <CellStyle Font-Bold="True">
            </CellStyle>
        </dx:GridViewDataDateColumn>

        <dx:GridViewCommandColumn Caption="Edit" VisibleIndex="16" ButtonType="Image">
            <CustomButtons>
                <dx:GridViewCommandColumnCustomButton ID="BtnEdit">
                    <Image Url="images/edit.png" />
                </dx:GridViewCommandColumnCustomButton>
            </CustomButtons>
        </dx:GridViewCommandColumn>

        <dx:GridViewCommandColumn Caption="Print" VisibleIndex="15" ButtonType="Image">
            <CustomButtons>
                <dx:GridViewCommandColumnCustomButton ID="BtnPrint">
                    <Image Url="images/print.png" />
                </dx:GridViewCommandColumnCustomButton>
            </CustomButtons>
        </dx:GridViewCommandColumn>
        <dx:GridViewDataTextColumn Caption="REMARK" VisibleIndex="14" Width="135px">
        </dx:GridViewDataTextColumn>
    </Columns>
    <SettingsBehavior ConfirmDelete="true" />

    <SettingsPager Visible="true">
    </SettingsPager>

    <SettingsText ConfirmDelete="Confirm Delete?" />
    <SettingsDetail ShowDetailRow="true" AllowOnlyOneMasterRowExpanded="true" />
    <SettingsCommandButton>

        <DeleteButton ButtonType="Image">
            <Image Url="images/remove.png" />
        </DeleteButton>
    </SettingsCommandButton>
    <SettingsDataSecurity AllowEdit="False" AllowInsert="False" AllowDelete="true" />
    <Templates>
        <DetailRow>
            <dx:ASPxGridView ID="ASPxGridView2" runat="server" AutoGenerateColumns="False"
                DataSourceID="SqlDataSourceCTKHVC" KeyFieldName="DNN;KienSo"
                OnBeforePerformDataSelect="ASPxGridView2_BeforePerformDataSelect"
                OnCustomUnboundColumnData="ASPxGridView2_CustomUnboundColumnData" OnCustomColumnDisplayText="ASPxGridView2_CustomColumnDisplayText"
                EnableTheming="True" Theme="Aqua" CssClass="grid-view">
                <Columns>
                    <dx:GridViewDataTextColumn FieldName="HAWB" Caption="HAWB" VisibleIndex="1"></dx:GridViewDataTextColumn>
                    <dx:GridViewDataTextColumn FieldName="DNN" Caption="DNN" VisibleIndex="2"></dx:GridViewDataTextColumn>
                    <dx:GridViewDataTextColumn FieldName="SoKien" Caption="PCS" VisibleIndex="3"></dx:GridViewDataTextColumn>
                    <dx:GridViewDataTextColumn FieldName="KienSo" Caption="PCS No." VisibleIndex="4" SortIndex="0" SortOrder="Ascending"></dx:GridViewDataTextColumn>
                    <dx:GridViewDataTextColumn FieldName="TrongLuong" Caption="WEIGHT" VisibleIndex="5"></dx:GridViewDataTextColumn>
                    <dx:GridViewDataTextColumn FieldName="KichThuoc" Caption="DIMENSION" VisibleIndex="6"></dx:GridViewDataTextColumn>
                    <dx:GridViewDataTextColumn FieldName="GioNhap" Caption="TIME IN ALSE" VisibleIndex="9"></dx:GridViewDataTextColumn>
                    <dx:GridViewDataDateColumn FieldName="NgayNhap" Caption="DATE IN ALSE" VisibleIndex="8">
                        <PropertiesDateEdit DisplayFormatString="dd/MM/yyyy" EditFormat="Custom"></PropertiesDateEdit>
                    </dx:GridViewDataDateColumn>

                    <dx:GridViewDataTextColumn Caption="No." VisibleIndex="0"></dx:GridViewDataTextColumn>
                </Columns>
                <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
                <SettingsPager Visible="False"></SettingsPager>

                <SettingsDataSecurity AllowEdit="False" AllowInsert="False" AllowDelete="False"></SettingsDataSecurity>
            </dx:ASPxGridView>

            <asp:SqlDataSource runat="server" ID="SqlDataSourceCTKHVC" ConnectionString='<%$ ConnectionStrings:ALSEConnectionString %>' SelectCommand="WebCTKHVC" SelectCommandType="StoredProcedure">
                <SelectParameters>
                    <asp:SessionParameter SessionField="CTMAWB" Name="MAWB" Type="String"></asp:SessionParameter>
                </SelectParameters>
            </asp:SqlDataSource>
        </DetailRow>
    </Templates>
</dx:ASPxGridView>
<asp:SqlDataSource ID="SqlDataSourceQLKHVC" runat="server"
    ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>"
    SelectCommand="WebQLKHVC" SelectCommandType="StoredProcedure"
    DeleteCommand="DELETE FROM [dbo].[WebKHVC] WHERE [MAWB] = @mawb" DeleteCommandType="Text">
    <%--<SelectParameters>
            <asp:SessionParameter SessionField="FWD" Name="FWD" Type="String"></asp:SessionParameter>
        </SelectParameters>--%>

    <DeleteParameters>
        <asp:Parameter Name="MAWB" Type="String" />
    </DeleteParameters>
</asp:SqlDataSource>