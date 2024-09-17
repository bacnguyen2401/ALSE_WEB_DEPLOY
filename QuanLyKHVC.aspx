<%@ Page Title="MANAGER SHIPPING SCHEDULE" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="QuanLyKHVC.aspx.cs" Inherits="ALSE.QuanLyKHVC" %>

<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        .grid-view tr:hover {
            background-color: #d0ecbd;
        }
        /*td.dxGridView_gvDetailCollapsedButton_Aqua {
            width: 26px;
        }*/
        td.dxgvDetailCell_Aqua {
            padding-left: 100px;
        }

            td.dxgvDetailCell_Aqua .dxgvControl_Aqua {
                margin-left: 200px;
            }

        .tablehx td {
            padding: 2px 4px;
        }
 
    </style>
    <script type="text/javascript">
        //function PublicationClickCallback(values) {
        //    var getmawb = values;
        //    alert(getmawb);
        //    console(getmawb);
        //}
        $(document).ready(function () {
            var currentDate = new Date()
            var phut = currentDate.getMinutes()
            var gio = currentDate.getHours()
            if (phut < 10) {
                phut = "0" + phut
            }
            if (gio < 10) {
                gio = "0" + gio
            }
            var gdate = currentDate.getDate()
            if (gdate < 10) {
                gdate = "0" + gdate
            }

            var date = (currentDate.getMonth() + 1) + "" + gdate + "" + gio + "" + phut;
            $(".cutot").each(function () {
                var ngaygio_cutot_r = $(this).text();//
                var ngaygio_cutot_r_split = ngaygio_cutot_r.split(" "); // dd/mm/yyyy
                var ngaygio_cutot_r_year = ngaygio_cutot_r_split[0].split("/")[2];//
                var ngaygio_cutot_r_noyear = ngaygio_cutot_r.replace(("/" + ngaygio_cutot_r_year), "");//
                $(this).text(ngaygio_cutot_r_noyear);//
            })
            $(".cute").each(function () {
                var ngaygio_cute_r = $(this).text();//
                var ngaygio_cute_r_split = ngaygio_cute_r.split(" "); // dd/mm/yyyy
                var ngaygio_cute_r_year = ngaygio_cute_r_split[0].split("/")[2];//
                var ngaygio_cute_r_noyear = ngaygio_cute_r.replace(("/" + ngaygio_cute_r_year), "");//
                $(this).text(ngaygio_cute_r_noyear);



                var gioce = ($(this).text().substring(6, ($(this).text().length))).replace(":", "")

                if (gioce.length < 4) {
                    gioce = "0" + gioce
                }

                var gcute = $(this).text().substring(3, 5) + "" + $(this).text().substring(0, 2) + "" + gioce

                var hieu = date - gcute
                if (hieu >= 0) {
                    $(this).css('background-color', '#FF0000')
                }
                //

            })
        }
        )
        function DNNRedirect() {

        }
    </script>
    <link href="css/custom/quan-ly-khvc.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div style="width: 800px">

        <p style="font-size: 30px; text-align: center; color: white;">MANAGER SHIPPING SCHEDULE</p>
    </div>
    <div id="div-button" style="margin-bottom: 10px;">
        <%--<input type="button" class="mani-btn btn btn-primary" onclick="location.href= 'DanhSachDNN.aspx'" />--%>
        <a href="DanhSachDNN.aspx" runat="server" id="iDSDNN" class="mani-btn btn btn-warning btn-sm">Danh sách DNN</a>
        <a href="QueryListInVoices.aspx" runat="server" id="iInvoice" class="mani-btn btn btn-danger btn-sm">Query List by Invoice </a>
        <a href="TruyVanDNN.aspx" runat="server" id="iTVDNN" class="mani-btn btn btn-danger btn-sm">Truy Vấn DNN</a>
        <a href="NhapDaiLy.aspx" runat="server" id="iNDL" class="mani-btn btn btn-primary  btn-sm">Nhập Kế Hoạch</a>
        <a href="TruyVanHangXuat.aspx" runat="server" id="iTVHX" class="mani-btn btn btn-primary btn-sm ">Truy Vấn Hàng Xuất</a>
        <a href="NhapGTK.aspx" runat="server" id="iNGTK" class="mani-btn btn btn-info  btn-sm">Tờ Khai</a>
        <a href="InputExcel.aspx" runat="server" id="iInputEcel" class="mani-btn btn btn-info  btn-sm">Input Plan</a>
         <a   href="XemCanDIM.aspx" runat="server" id="xemcanDim" class="mani-btn btn btn-primary  btn-sm">Tra cứu DIM</a>
    </div>
    <div style="margin-bottom: 10px">

        <table class="tablehx" style="width: 1155px; background-color: white; height: 90px; border: solid 1px; padding: 3px;">
            <tr>
                <td class="auto-style20" colspan="2">ToTal:</td>
                <td class="auto-style20" colspan="2">Include:</td>
                <td class="auto-style20" colspan="2">MAWB:</td>
                <td class="auto-style20" colspan="2">Volume:</td>
                <td class="auto-style20" colspan="2">Exp(Y'Day):</td>
                <td class="auto-style20" colspan="2">Exp(ToDay):</td>
               <%--<td class="auto-style20" colspan="2">DHL</td>--%>
                <td class="auto-style20" colspan="2">In(Y'Day):</td>
                <td class="auto-style20" colspan="2">In W.H:</td>
            </tr>

            <tr>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelPcs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td class="auto-style5"><span>Pcs</span></td>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelSkid" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td><span>skid</span></td>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelMAWBsk" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td class="auto-style5"><span>Pcs</span></td>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelkt" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td>cbm</td>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelexpYpcs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td>Pcs</td>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelexppcs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td>Pcs</td>
                <!--FWD-->
                <%--<td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelDHLpcs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>--%>
                <%--<td>Pcs</td>--%>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelSKY" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td>Pcs</td>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelSK" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td>Pcs</td>
            </tr>
            <tr>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelKgs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td class="auto-style4"><span>Kgs</span></td>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelCarton" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td><span>carton</span></td>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelMAWBtl" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td class="auto-style4"><span>Kgs</span></td>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabel2" runat="server" Text=""></dx:ASPxLabel>
                </td>
                <td><span></span></td>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelexpYkgs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td><span>Kgs</span></td>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelexpkgs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td><span>Kgs</span></td>
                <!--FWD-->
                <%--<td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelDHLkgs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>--%>
                <%--<td><span>Kgs</span></td>--%>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelTLY" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td><span>Kgs</span></td>
                <td class="auto-style2">
                    <dx:ASPxLabel ID="ASPxLabelTL" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                </td>
                <td><span>Kgs</span></td>
            </tr>
        </table>
    </div>


    <%--BOOKING   XXXX--%>
    <div id="div-xz">
        <table id="tablexz" class="table table-bordered">
            <thead>
                <tr>
                    <td>STATUS</td>
                    <td>MAWB</td>
                    <td>PCS</td>
                    <td>G.W</td>
                    <td>FLT.NO</td>
                    <td>FLT.D</td>
                    <td>FLT.T</td>
                    <td>NBA</td>
                    <td>ALSE</td>
                    <td>DEST</td>                  
                    <td>PROCESS</td>
                    <td>FWD</td>
                    <td>W.H</td>
                    <td>REMARK</td>
                </tr>
            </thead>
            <tbody>
                <tr id="tr-loading">
                        <td colspan="14">
                            Loading...
                        </td>

                    </tr>
            </tbody>
        </table>
    </div>
    <%--END BOOKING    XXXX--%>



<%--    <dx:ASPxGridView ID="ASPxGridView1" runat="server" AutoGenerateColumns="False"
        DataSourceID="SqlDataSourceQLKHVC" KeyFieldName="MAWB" EnableTheming="True" Theme="Aqua"
        OnBeforePerformDataSelect="ASPxGridView1_BeforePerformDataSelect" OnCustomButtonCallback="grid1_CustomButtonCallback"
        EnableRowsCache="False" ClientInstanceName="ASPxGridView1">
        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />
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
                <CellStyle Font-Bold="True">
                </CellStyle>
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

        <DeleteParameters>
            <asp:Parameter Name="MAWB" Type="String" />
        </DeleteParameters>
    </asp:SqlDataSource>--%>
    <%--<uc:khvc id="uckhvc" />--%>
    <div>
       <%-- <img src="images/header.jpg" alt="header"/>--%>
    </div>

    






    <%--BOOKING--%>
    <dx:ASPxGridView ID="ASPxGridView6" runat="server" AutoGenerateColumns="False" CssClass="grid-view hangchuataophieucan" DataSourceID="SqlDataSourceHangChuaTaoPhieuCan" Theme="Aqua" Width="1207px" KeyFieldName="MAWB">
        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />

        <SettingsPager Visible="False">
        </SettingsPager>
        <Columns>

            <dx:GridViewDataTextColumn FieldName="MAWB" VisibleIndex="1" Width="90px" Caption="MAWB" CellStyle-CssClass="mawb mawbClick" >
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

    <asp:SqlDataSource ID="SqlDataSourceHangChuaTaoPhieuCan" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangChuaTaoPhieuCan" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <%--END BOOKING--%>
    <dx:ASPxGridView ID="ASPxGridView21" runat="server" KeyFieldName="SoMaWB" AutoGenerateColumns="False" CssClass="grid-view" DataSourceID="SqlDataSourceHangDaTaoPhieuCan" EnableTheming="True" Theme="Aqua" Width="1185px">

        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoMaWB" VisibleIndex="2" Width="90px" Caption="MAWB" CellStyle-CssClass="mawbClick">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKien" VisibleIndex="3" Width="35px" Caption="Pcs">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TrongLuong" VisibleIndex="4" Width="60px" Caption="G.W">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBay" VisibleIndex="5" Width="64px" Caption="Chuyến Bay">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayBK" VisibleIndex="6" Width="72px" Caption="Ngày Bay" CellStyle-CssClass="fltdate">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayBK" VisibleIndex="7" Width="61px" Caption="Giờ Bay" CellStyle-CssClass="flttime">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn FieldName="DiemDen" VisibleIndex="10" Width="50px" Caption="Điểm Đến">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayLamSLI" VisibleIndex="11" Width="72px" Caption="Date SLI">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioLamSLI" VisibleIndex="12" Width="60px" Caption="Time SLI">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="BKSXeXuat" VisibleIndex="13" Width="150px" Caption="BKS">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXuat" VisibleIndex="14" Width="72px" Caption="Ngày Xuất">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXuat" VisibleIndex="15" Width="60px" Caption="Giờ Xuất">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="1" Caption="Status">
                <PropertiesImage ImageHeight="32px" ImageWidth="90px" LoadingImageUrl="~/images/document_accept.png" ShowLoadingImage="True">
                    <EmptyImage Height="32px" ToolTip="Pre Accept" Url="~/images/pre-accept.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="Đại Lý" FieldName="FWD" VisibleIndex="16" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Ghi Chú" FieldName="GhiChuMaWB" VisibleIndex="17" Width="70px">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut NBA" FieldName="CUTOT" Width="46px" VisibleIndex="8" CellStyle-CssClass="cutot">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut ALSE" FieldName="CUTE" CellStyle-CssClass="cute" Width="46px" VisibleIndex="9">
                <CellStyle CssClass="cute"></CellStyle>
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn VisibleIndex="0" Width="28px" Visible="false">
            </dx:GridViewDataTextColumn>
        </Columns>
        <Settings ShowColumnHeaders="true" />
        <SettingsBehavior AllowSelectByRowClick="true" />
        <SettingsPager Visible="False">
        </SettingsPager>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
        <SettingsDataSecurity AllowEdit="False" AllowInsert="False" AllowDelete="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceHangDaTaoPhieuCan" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaTaoPhieuCan" SelectCommandType="StoredProcedure"></asp:SqlDataSource>

    <dx:ASPxGridView ID="ASPxGridView31" runat="server" KeyFieldName="SoMaWB" AutoGenerateColumns="False" CssClass="grid-view" DataSourceID="SqlDataSourceHangDaDuyetPhieuCan" Theme="Aqua" Width="1185px">

        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />

        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoMaWB" Caption="MAWB" VisibleIndex="2" Width="90px" CellStyle-CssClass="mawbClick">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKien" Caption="Pcs" ReadOnly="True" VisibleIndex="3" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TrongLuong" Caption="G.W" ReadOnly="True" VisibleIndex="4" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBay" Caption="ChuyenBay" VisibleIndex="5" Width="64px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayBK" Caption="Ngày Bay" VisibleIndex="6" Width="72px" CellStyle-CssClass="fltdate">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayBK" Caption="Giờ Bay" VisibleIndex="7" Width="60px" CellStyle-CssClass="flttime">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="DiemDen" Caption="Điểm Đến" VisibleIndex="10" Width="50px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayLamSLI" Caption="Date SLI" VisibleIndex="11" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioLamSLI" Caption="Time SLI" VisibleIndex="12" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="BKSXeXuat" Caption="BKS" VisibleIndex="13" Width="150px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXuat" Caption="Ngày Xuất" VisibleIndex="14" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXuat" Caption="Giờ Xuất" VisibleIndex="15" Width="60px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="1" Caption="Status">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="Accept" Url="~/images/blog_accept.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="Đại Lý" FieldName="FWD" VisibleIndex="16" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Ghi Chú" FieldName="GhiChuMaWB" VisibleIndex="17" Width="70px">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut NBA" FieldName="CUTOT" VisibleIndex="8" Width="46px" CellStyle-CssClass="cutot">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut ALSE" FieldName="CUTE" CellStyle-CssClass="cute" VisibleIndex="9" Width="46px">
                <CellStyle CssClass="cute"></CellStyle>
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn VisibleIndex="0" Width="28px">
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Visible="False">
        </SettingsPager>
        <Settings ShowColumnHeaders="true" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceHangDaDuyetPhieuCan" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaDuyetPhieuCan" SelectCommandType="StoredProcedure"></asp:SqlDataSource>

    <dx:ASPxGridView ID="ASPxGridView41" runat="server" KeyFieldName="SoMaWB" AutoGenerateColumns="False" CssClass="grid-view" DataSourceID="SqlDataSourceHangDaGhepXe" Theme="Aqua" Width="1185px">

        <SettingsPager Visible="False">
        </SettingsPager>

        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoMaWB" Caption="MAWB" VisibleIndex="2" Width="90px" CellStyle-CssClass="mawbClick">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKien" Caption="Pcs" ReadOnly="True" VisibleIndex="3" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TrongLuong" Caption="G.W" ReadOnly="True" VisibleIndex="4" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBay" Caption="ChuyenBay" VisibleIndex="5" Width="64px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayBK" Caption="Ngày Bay" VisibleIndex="6" Width="72px" CellStyle-CssClass="fltdate">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayBK" Caption="Giờ Bay" VisibleIndex="7" Width="60px" CellStyle-CssClass="flttime">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="DiemDen" Caption="Điểm Đến" VisibleIndex="10" Width="50px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayLamSLI" Caption="Date SLI" VisibleIndex="11" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioLamSLI" Caption="Time SLI" VisibleIndex="12" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="BKSXeXuat" Caption="BKS" VisibleIndex="13" Width="150px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXuat" Caption="Ngày Xuất" VisibleIndex="14" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXuat" Caption="Giờ Xuất" VisibleIndex="15" Width="60px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="1" Caption="Status">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="Loading To Truck" Url="~/images/truck.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="Đại Lý" FieldName="FWD" VisibleIndex="16" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Ghi Chú" FieldName="GhiChuMaWB" VisibleIndex="17" Width="70px">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut NBA" FieldName="CUTOT" VisibleIndex="8" Width="46px" CellStyle-CssClass="cutot">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut ALSE" FieldName="CUTE" CellStyle-CssClass="cute" VisibleIndex="9" Width="46px">
                <CellStyle CssClass="cute"></CellStyle>
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn VisibleIndex="0" Width="28px">
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />
        <Settings ShowColumnHeaders="true" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceHangDaGhepXe" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaGhepXe" SelectCommandType="StoredProcedure"></asp:SqlDataSource>

    <dx:ASPxGridView ID="ASPxGridView51" runat="server" KeyFieldName="SoMaWB" AutoGenerateColumns="False" CssClass="grid-view" DataSourceID="SqlDataSourceHangDaChayTrenDuong" Theme="Aqua" Width="1185px">

        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />

        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" RowDblClick="function(s, e) {

}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoMaWB" Caption="MAWB" VisibleIndex="2" Width="90px" CellStyle-CssClass="mawbClick">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="SoKien" Caption="Pcs" ReadOnly="True" VisibleIndex="3" Width="35px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="TrongLuong" Caption="G.W" ReadOnly="True" VisibleIndex="4" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="ChuyenBay" Caption="ChuyenBay" VisibleIndex="5" Width="64px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayBayBK" Caption="Ngày Bay" VisibleIndex="6" Width="72px" CellStyle-CssClass="fltdate">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioBayBK" Caption="Giờ Bay" VisibleIndex="7" Width="60px" CellStyle-CssClass="flttime">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="DiemDen" Caption="Điểm Đến" VisibleIndex="10" Width="50px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayLamSLI" Caption="Date SLI" VisibleIndex="11" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioLamSLI" Caption="Time SLI" VisibleIndex="12" Width="60px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn FieldName="BKSXeXuat" Caption="BKS" VisibleIndex="13" Width="150px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataDateColumn FieldName="NgayXuat" Caption="Ngày Xuất" VisibleIndex="14" Width="72px">
                <PropertiesDateEdit DisplayFormatString="dd/MM/yy">
                </PropertiesDateEdit>
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataDateColumn>
            <dx:GridViewDataTextColumn FieldName="GioXuat" Caption="Giờ Xuất" VisibleIndex="15" Width="60px">
                <CellStyle Font-Bold="True">
                </CellStyle>
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataImageColumn VisibleIndex="1" Caption="Status" CellStyle-CssClass="btnpop">
                <PropertiesImage>
                    <EmptyImage Height="32px" ToolTip="Trucking To NBA" Url="~/images/lorrygreen.png" Width="90px">
                    </EmptyImage>
                </PropertiesImage>

                <CellStyle CssClass="btnpop"></CellStyle>
            </dx:GridViewDataImageColumn>
            <dx:GridViewDataTextColumn Caption="Đại Lý" FieldName="FWD" VisibleIndex="16" Width="49px">
            </dx:GridViewDataTextColumn>
            <dx:GridViewDataTextColumn Caption="Ghi Chú" FieldName="GhiChuMaWB" VisibleIndex="17" Width="70px">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut NBA" FieldName="CUTOT" VisibleIndex="8" Width="46px" CellStyle-CssClass="cutot">
            </dx:GridViewDataTextColumn>

            <dx:GridViewDataTextColumn Caption="Cut ALSE" FieldName="CUTE" CellStyle-CssClass="cute" VisibleIndex="9" Width="46px">
                <CellStyle CssClass="cute"></CellStyle>
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

            <dx:GridViewDataTextColumn VisibleIndex="0" Width="28px">
            </dx:GridViewDataTextColumn>
        </Columns>
        <SettingsPager Visible="False">
        </SettingsPager>

        <Settings ShowColumnHeaders="true" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>
    <asp:SqlDataSource ID="SqlDataSourceHangDaChayTrenDuong" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>"
        SelectCommand="WebHangDaChayTrenDuong"
        SelectCommandType="StoredProcedure"></asp:SqlDataSource>

    <%--AIR PORT --%>
    <dx:ASPxGridView ID="ASPxGridView7" runat="server" KeyFieldName="SoMaWB" AutoGenerateColumns="False" CssClass="grid-view tbl-custom" DataSourceID="SqlDataSourceHangDaDenSanBay" Theme="Aqua" Width="1207px">

        <%--<SettingsBehavior AllowSelectByRowClick="true" />--%>
        <SettingsPager Mode="ShowAllRecords" PageSize="1000" />

        <ClientSideEvents Init="function(s, e) {s.SetVisible(s.GetVisibleRowsOnPage() != 0);}" RowDblClick="function(s, e) {

}" />
        <Columns>
            <dx:GridViewDataTextColumn FieldName="SoMaWB" CellStyle-CssClass="mo-mawb mawbClick" Caption="MAWB" VisibleIndex="1" Width="90px">
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

        <Settings ShowColumnHeaders="true" />
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
            <dx:GridViewDataTextColumn FieldName="SoMaWB" CellStyle-CssClass="mo-mawb mawbClick" Caption="MAWB" VisibleIndex="1" Width="90px">
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

        <Settings ShowColumnHeaders="true" />
        <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
    </dx:ASPxGridView>

    <asp:SqlDataSource ID="SqlDataSourceHangDaGiaoXong" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebHangDaGiaoXongXuat" SelectCommandType="StoredProcedure"></asp:SqlDataSource>
    <%--END COMPLETE--%>

    <%-- modal show dim --%>
    <div class="modal fade" id="myModalViewMawb" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h2 class="modal-title text-align-center" id="h4-view-mawb"></h2>
                </div>
                <div class="modal-body">
                    <h3 class="titleShowMAWB"> </h3>
                    <table class="table table-bordered table-hover" id="tbl-view-mawb">
                        <thead id="thead-CanDim">
                            <tr class="style_Mawb_Hawb">
                                <td>DIMENSION</td>
                                <td>PCS</td>
                                <td>GW</td>
                                <td>VW</td>
                                <td>CW</td>
                                <td>CBM</td>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                    <div id="table-show-hawb">
                    </div>
                </div>

                <div class="modal-footer">

                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>
    
       <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/quan-ly-khvc.js") %>
    <script type="text/javascript">
        $(document).ready(function () {
            $(".mo-wh").each(function () {
                var mowh = $(this).text().split("|");
                $(this).text(mowh[2]);

            })
            $(".mo-cutalse").each(function(){
                $(this).removeAttr("style").attr("style", "");
            })
        })
    </script>
</asp:Content>
