<%@ Page Title="ĐỒ THỊ XUẤT HÀNG" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="DoThiXuatHang.aspx.cs" Inherits="ALSE.DoThiXuatHang" %>

<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>



<%@ Register Assembly="DevExpress.XtraCharts.v14.2.Web" Namespace="DevExpress.XtraCharts.Web" TagPrefix="dxchartsui" %>
<%@ Register Assembly="DevExpress.XtraCharts.v14.2" Namespace="DevExpress.XtraCharts" TagPrefix="cc1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        #tbl {
            width: 500px;
            margin-bottom: 20px;
            height: 50px;
            background-color: white;
            border-radius: 3px;
        }

            #tbl tr td {
                padding-left: 10px;
            }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <table id="tbl">
        <tr>
            <td>
                <dx:ASPxDateEdit ID="ASPxDateEdit1" runat="server" OnDateChanged="ASPxDateEdit1_DateChanged"></dx:ASPxDateEdit>
            </td>
            <td>
                <dx:ASPxDateEdit ID="ASPxDateEdit2" runat="server" OnDateChanged="ASPxDateEdit2_DateChanged"></dx:ASPxDateEdit>
            </td>
            <td>
                <dx:ASPxButton ID="ASPxButton1" runat="server" Text="Show" OnClick="ASPxButton1_Click"></dx:ASPxButton>
            </td>
        </tr>


    </table>

    <div>
    <div style="float:left;">
    <dxchartsui:WebChartControl ID="WebChartControl1" runat="server" CrosshairEnabled="True" DataSourceID="SqlDataSource1"
        Height="500px" Width="900px" label>
        <diagramserializable>
                <cc1:XYDiagram>
                    <axisx visibleinpanesserializable="-1" alignment="Zero">
                        <label angle="30" textpattern="{A:ddd dd/MM}" >
                        </label>
                    </axisx>
                    <axisy visibleinpanesserializable="-1" title-font="UVF BankGothic Md BT, 13pt, style=Bold" title-text="Trọng Lượng" title-visible="True">
                    </axisy>
                    <secondaryaxesy>
                        <cc1:SecondaryAxisY AxisID="0" Name="Secondary AxisY 1" VisibleInPanesSerializable="0" Color="224, 224, 224" InterlacedColor="224, 224, 224" Reverse="True" Title-Font="UVF BankGothic Md BT, 13pt, style=Bold" Title-Text="Số Kiện" Title-Visible="True">
                            <interlacedfillstyle fillmode="Solid">
                            </interlacedfillstyle>
                            <gridlines visible="True">
                            </gridlines>
                        </cc1:SecondaryAxisY>
                    </secondaryaxesy>
                    <panes>
                        <cc1:XYDiagramPane Name="Pane 1" PaneID="0">
                            <fillstyle fillmode="Solid">
                            </fillstyle>
                        </cc1:XYDiagramPane>
                    </panes>
                </cc1:XYDiagram>
            </diagramserializable>
        <seriesserializable>
                <cc1:Series ArgumentDataMember="NgayXuat" ArgumentScaleType="DateTime" Name="Số Kiện" ValueDataMembersSerializable="SoKien">
                    

                    
                    <viewserializable>
                        <cc1:SideBySideBarSeriesView AxisYName="Secondary AxisY 1" PaneName="Pane 1" BarWidth="0.3">
                            <border visibility="True" />
                        </cc1:SideBySideBarSeriesView>
                    </viewserializable>
                    
                </cc1:Series>
                <cc1:Series ArgumentDataMember="NgayXuat" ArgumentScaleType="DateTime" Name="Trọng Lượng" ValueDataMembersSerializable="TrongLuong">
                    <viewserializable>
                        <cc1:SideBySideBarSeriesView BarWidth="0.3">
                        </cc1:SideBySideBarSeriesView>
                    </viewserializable>
                </cc1:Series>
            </seriesserializable>
        <legend alignmenthorizontal="Right" alignmentvertical="TopOutside" direction="LeftToRight"></legend>
        <borderoptions visibility="True" />

        <seriestemplate argumentscaletype="DateTime">
            </seriestemplate>
        <titles>
                <cc1:ChartTitle Text="ĐỒ THỊ THỐNG KÊ HÀNG XUẤT" />
            </titles>
    </dxchartsui:WebChartControl>
    </div>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebDoThiHangXuat" SelectCommandType="StoredProcedure">

    </asp:SqlDataSource>
    <div style="float:right;">
    <dx:ASPxGridView ID="ASPxGridView1" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" EnableTheming="True" Theme="Aqua">
        <Columns>
            <dx:GridViewDataTextColumn Caption="Số Kiện" FieldName="SoKien" ReadOnly="True" VisibleIndex="1">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Trọng Lượng" FieldName="TrongLuong" ReadOnly="True" VisibleIndex="2">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn Caption="Ngày Xuất" FieldName="NgayXuat" VisibleIndex="0">
            </dx:GridViewDataDateColumn>
        </Columns>
        <SettingsPager Visible="False">
        </SettingsPager>
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
    </dx:ASPxGridView>
        </div>
    </div>
</asp:Content>
