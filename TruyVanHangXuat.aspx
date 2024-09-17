<%@ Page Title="TRUY VẤN HÀNG XUẤT" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" EnableViewState="false" CodeBehind="TruyVanHangXuat.aspx.cs" Inherits="ALSE.TruyVanHangXuat" %>

<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>



<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        ul.ultvhx {
            list-style: none inside;
        }

        ul.ultvhxtop {
            width: 100%;
            height: 60px;
            background-color: #fff;
            border-radius: 4px;
        }

        ul.ultvhx li {
            display: inline-block;
            margin-right: 10px;
            margin-bottom: 10px;
        }

        .tvhxbot {
            margin-top: 20px;
            padding-top: 20px;
            background-color: #fff;
            height: 110%;
        }

        .tvhxlast {
            padding-top: 10px;
        }

        li.tvhxse {
            float: left;
            padding: 9px;
        }

        li.tvhxbu {
            padding-top: 10px;
        }

        .btn-locm {
            padding: 0;
        }
    </style>
    <script type="text/javascript">
        $(document).ready(function () {
            $("#MainContent_ASPxtxtSoMaWB_I").attr("placeholder", "Nhập nội dung cần tìm...");

        })
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div>
        <p style="font-size: 30px; text-align: center; color: white;">TRUY VẤN THÔNG TIN HÀNG XUẤT</p>
    </div>
    <div>
        <ul class="ultvhx ultvhxtop">
            <li class="tvhxse">
                <%--<dx:ASPxLabel ID="ASPxLabel1" runat="server" Text="Nhập Giá Trị"></dx:ASPxLabel>--%>
                <dx:ASPxTextBox ID="ASPxtxtSoMaWB" runat="server" CssClass="form-control" placeholder="Nhập nội dung cần tìm" Width="200px"></dx:ASPxTextBox>
            </li>

            <li class="tvhxbu">
                <asp:Button ID="btnLoc" runat="server" Text="Lọc" OnClick="ASPxbtnLoc_Click" CssClass="btn btn-info" />
            </li>
            <li>
                <button type="button" class="btn btn-success" onclick="window.location='TrangThaiHangXuat.aspx'">Back</button>
            </li>

            <li>
                <button type="button" class="btn btn-primary" id="taifileEI">Tải file</button>
            </li>
        </ul>
    </div>
    <div>
        <dx:ASPxGridView ID="ASPxGridViewTVHX" runat="server" AutoGenerateColumns="False" Width="100%"
            KeyFieldName="SoSHIPMENT" OnCustomCallback="ASPxGridViewTVHX_CustomCallback" EnableTheming="True" Theme="Office2003Blue">
            <Columns>
                <dx:GridViewDataTextColumn Caption="Số Shipment" FieldName="SoSHIPMENT" VisibleIndex="1">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="Số DNN" FieldName="SoDNN" VisibleIndex="2">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="Số HAWB" FieldName="SoHAWB" VisibleIndex="3">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="Đại Lý" FieldName="FWD" VisibleIndex="4">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="Kiện Số" FieldName="Kien" VisibleIndex="5">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="Số Kiện" FieldName="SoKien" VisibleIndex="6">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="Trọng Lượng" FieldName="TrongLuong" VisibleIndex="7">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="Kích Thước" FieldName="KichThuoc" VisibleIndex="8">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="Vị Trí" FieldName="ViTri" VisibleIndex="9">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataDateColumn Caption="Ngày Đến Nhà Máy" FieldName="NgayDenNoKia" VisibleIndex="10">
                </dx:GridViewDataDateColumn>
                <dx:GridViewDataTextColumn Caption="Giờ Đến Nhà Máy" FieldName="GioDenNoKia" VisibleIndex="11">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataDateColumn Caption="Ngày Nhập" FieldName="NgayNhap" VisibleIndex="12">
                </dx:GridViewDataDateColumn>
                <dx:GridViewDataTextColumn Caption="Giờ Nhập" FieldName="GioNhap" VisibleIndex="13">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="Xe Nhập" FieldName="XeNhap" VisibleIndex="14">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="Nhân Viên Nhập" FieldName="NhanVien" VisibleIndex="15">
                </dx:GridViewDataTextColumn>
                <dx:GridViewDataTextColumn Caption="STT" VisibleIndex="0" Width="30px">
                </dx:GridViewDataTextColumn>
            </Columns>
            <Settings ShowFilterRow="True" ShowFooter="False" ShowHeaderFilterButton="True" ShowStatusBar="Visible" HorizontalScrollBarMode="Visible" />
            <SettingsLoadingPanel Mode="ShowOnStatusBar" />
            <SettingsDataSecurity AllowDelete="False" AllowEdit="False" AllowInsert="False" />
            <SettingsPager Mode="EndlessPaging" PageSize="30" />
            <SettingsBehavior AllowSelectByRowClick="true" />
            <SettingsBehavior AllowFocusedRow="True" />
        </dx:ASPxGridView>

        <asp:SqlDataSource ID="SqlDataSourceTVHX" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebTruyVanHangXuat" SelectCommandType="StoredProcedure">
            <SelectParameters>
                <asp:SessionParameter SessionField="tvsomawb" Name="tvsomawb" Type="String" />
            </SelectParameters>
        </asp:SqlDataSource>
        <asp:SqlDataSource ID="SqlDataSourceCTTVHX" runat="server" ConnectionString="<%$ ConnectionStrings:CARGOConnectionString %>" SelectCommand="WebCTTruyVanHangXuat" SelectCommandType="StoredProcedure">
            <SelectParameters>
                <asp:SessionParameter SessionField="tvsomawb" Name="tvsomawb" Type="String" />
            </SelectParameters>
        </asp:SqlDataSource>
    </div>
    <div class="tvhxbot">
        <div>
            <div>
                <ul class="ultvhx">
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel5" runat="server" Text="Số MAWB"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox5" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel6" runat="server" Text="Điểm Đến"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox6" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel7" runat="server" Text="Ngày làm SLI"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox7" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel8" runat="server" Text="Ngày KT Hàng"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox8" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel9" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox9" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>

                </ul>
            </div>
            <div>
                <ul class="ultvhx">
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel10" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox10" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel11" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox11" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel12" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox12" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel13" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox13" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel14" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox14" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                </ul>
            </div>
            <div>
                <ul class="ultvhx">
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel15" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox15" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel16" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox16" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel17" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox17" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel18" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox18" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel19" runat="server" Text="Sẵn sàng?" class="tvhxlast"></dx:ASPxLabel>
                    </li>
                </ul>
            </div>
            <div>
                <ul class="ultvhx">
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel20" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox19" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel21" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox20" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel22" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox21" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel23" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox22" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                </ul>
            </div>
            <div>
                <ul class="ultvhx">
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel24" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox23" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                </ul>
            </div>
        </div>
        <div runat="server" id="tvhxav">
            <div>
                <ul class="ultvhx">
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel25" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox24" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel26" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox25" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel27" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox26" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel28" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox27" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel29" runat="server" Text="Đã xuất?" class="tvhxlast"></dx:ASPxLabel>
                    </li>
                </ul>
            </div>
            <div>
                <ul class="ultvhx">
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel30" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox28" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel31" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox29" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel32" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox30" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                    <li>
                        <dx:ASPxLabel ID="ASPxLabel33" runat="server" Text="ASPxLabel"></dx:ASPxLabel>
                        <dx:ASPxTextBox ID="ASPxTextBox31" runat="server" Width="170px"></dx:ASPxTextBox>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <script type="text/javascript">
        $(document).ready(function () {
            $("#taifileEI").click(function () {
                var userId = $("#username").attr("userid");
                if (userId == "7") {
                    var MAWB = $("#MainContent_ASPxtxtSoMaWB_I").val();
                    console.log(MAWB)
                    if (MAWB !== "" && MAWB !== null) {
                        var ajaxGet = { "get": MAWB };
                        jsonData = JSON.stringify({ ajaxGet });
                        $.ajax({
                            type: "POST",
                            url: "/TruyVanHangXuat.aspx/reFileExcel",
                            data: jsonData,
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            async: false,
                            //timeout: 120000,
                            success: function (responsive) {
                                d = responsive.d;
                                //console.log(d);
                                window.open("DownloadFile.aspx?Root=EI&Folder=BAOCAO&FileName=EI.xlsx");
                            },
                            error: function (request, status, error) {
                                console.log(request.responseText);
                            }
                        }).done(function () {
                        });
                    } else {
                        alert("Vui lòng nhập số MAWB để tiếp tục xuất file");
                    }
                    
                } else {
                    alert("Chỉ xuất file cho tài khoản EI các tài khoản khác không được thực hiện thao tác này!")
                }
                
            })
        });

    </script>

</asp:Content>
