<%@ Page Title="VỊ TRÍ" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true"  EnableViewState="false" CodeBehind="ViTri.aspx.cs" Inherits="ALSE.ViTri" %>

<%@ Register Assembly="DevExpress.Web.ASPxHtmlEditor.v14.2" Namespace="DevExpress.Web.ASPxHtmlEditor" TagPrefix="dx" %>

<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>

<%@ Register Assembly="DevExpress.XtraCharts.v14.2.Web" Namespace="DevExpress.XtraCharts.Web" TagPrefix="dxchartsui" %>
<%@ Register Assembly="DevExpress.XtraCharts.v14.2" Namespace="DevExpress.XtraCharts" TagPrefix="cc1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        .column {
            position: absolute;
            width: 40px;
            bottom: 0;
            background-color: #003366;
            margin-left: 5%;
        }

            .column div {
                margin-top: -20px;
                height: 20px;
            }

        .grafico {
            position: relative;
            height: 200px;
            /*border-left: 2px solid #000000;
            border-bottom: 2px solid #000000;*/
            margin-top: 20px;
            background-color: white;
            width: 1112px;
        }
        /*.keongang{
            overflow-x:scroll;
            width: 1155px;
            background-color: white;
        }*/
        #khoA {
            visibility: hidden;
        }

        #khoB {
            visibility: hidden;
        }

        .demso {
            width: 100%;
            height: 30px;
            background-color: white;
        }

        .vtk {
            width: 30%;
            background-color: white;
            padding-left: 20px;
            margin-top: 5px;
        }
    </style>

    <script type="text/javascript">
        function AutoRefresh(t) {
            setTimeout("location.reload(true);", t);
        }
        function viewGraph() {
            $('.column').css('height', '0');
            $('table#khoA tr').each(function (index) {

                var ha = $(this).children('td').eq(1).text();
                var cot = $(this).children('td').eq(0).text();
                //$('#col' + index).text('A1');
                $('#col' + index).animate({ height: ha }, 1500).html("<div style=\"text-align: center;\">" + ha + "</div>");

            });

            $('table#khoB tr').each(function (index) {

                var ha = $(this).children('td').eq(1).text();

                $('#colB' + index).animate({ height: ha }, 1500).html("<div style=\"text-align: center;\">" + ha + "</div>");
                //console.log(index + '   ' + ha);
            });
        }
        $(document).ready(function () {
            viewGraph();
            setInterval(Freload, 300000);
            var view = getParameterByName('View');
            console.log(view);
            if (view == 1) {
                $('.andiv').remove();

            }
            else {
                $('.andiv2').remove();

            }
        });
        function Freload() {
            location.reload();
        }
        function anhien(obj) {

            AddQueryString("View", obj);

            return false;
        }
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        //setInterval(Freload(), 10000);
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div style="margin-bottom: 20px;">
        <button type="button" class="btn btn-success" onclick="window.location='TrangThaiHangXuat.aspx'">Back</button>
        <input type="button" onclick="anhien(1)" value="DNN khác Vị Trí" class="mani-btn btn btn-primary" />
        <input type="button" onclick="anhien(0)" value="Thống Kê Vị Trí" class="mani-btn btn btn-info" />
    </div>
    <div class="andiv2">
        <div style="width: 100%">
            <p style="font-size: 30px; text-align: center; color: white;">DNN KHÁC VỊ TRÍ</p>
        </div>
        <table id="tbl1" class="table table-bordered table-hover tb-bg">
            <thead>
                <tr>
                    <td>DNN
                    </td>
                    <td>Vị Trí
                    </td>
                    <td>Số Kiện
                    </td>
                </tr>
            </thead>
            <tbody>
                <asp:Literal ID="LiteralVT" runat="server"></asp:Literal>
            </tbody>
        </table>
    </div>

    <div class="andiv">

        <button onclick="Freload()">Reload page</button>
        <%--<dx:ASPxTimer ID="ASPxTimer1" runat="server"></dx:ASPxTimer>--%>
        <div style="width: 100%">
            <p style="font-size: 30px; text-align: center; color: white;">THỐNG KÊ VỊ TRÍ</p>
        </div>
        <div style="margin-bottom: 10px">

            <table class="tablehx" style="width: 1155px; background-color: white; height: 90px; border: solid 1px; padding: 3px;">
                <tr>
                    <td class="auto-style20" colspan="2">ToTal:</td>
                    <td class="auto-style20" colspan="2">Include:</td>
                    <td class="auto-style20" colspan="2">MAWB:</td>
                    <td class="auto-style20" colspan="2">Volume:</td>
                    <td class="auto-style20" colspan="2">
                        <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/DoThiXuatHang.aspx">Exp(Y'Day):</asp:HyperLink></td>
                    <td class="auto-style20" colspan="2">Exp(ToDay):</td>
                    <td class="auto-style20" colspan="2">DHL:</td>
                    <td class="auto-style20" colspan="2">AGI:</td>
                    <td class="auto-style20" colspan="2">SCK:</td>
                    <td class="auto-style20" colspan="2">EI:</td>
                    <td class="auto-style20" colspan="2">DAM:</td>
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
                        <dx:ASPxLabel ID="ASPxLabel1" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                    </td>
                    <td>Pcs</td>
                    <!--FWD-->
                    <td class="auto-style2">
                        <dx:ASPxLabel ID="ASPxLabelDHLpcs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                    </td>
                    <td>Pcs</td>
                    <td class="auto-style2">
                        <dx:ASPxLabel ID="ASPxLabelAGIpcs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                    </td>
                    <td>Pcs</td>
                    <td class="auto-style2">
                        <dx:ASPxLabel ID="ASPxLabelSCKpcs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                    </td>
                    <td>Pcs</td>
                    <td class="auto-style2">
                        <dx:ASPxLabel ID="ASPxLabelEIpcs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                    </td>
                    <td>Pcs</td>
                    <td class="auto-style2">
                        <dx:ASPxLabel ID="ASPxLabelDAMpcs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                    </td>
                    <td>Pcs</td>
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
                    <td class="auto-style2">
                        <dx:ASPxLabel ID="ASPxLabelDHLkgs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                    </td>
                    <td><span>Kgs</span></td>
                    <td class="auto-style2">
                        <dx:ASPxLabel ID="ASPxLabelAGIkgs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                    </td>
                    <td><span>Kgs</span></td>
                    <td class="auto-style2">
                        <dx:ASPxLabel ID="ASPxLabelSCKkgs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                    </td>
                    <td><span>Kgs</span></td>
                    <td class="auto-style2">
                        <dx:ASPxLabel ID="ASPxLabelEIkgs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                    </td>
                    <td><span>Kgs</span></td>
                    <td class="auto-style2">
                        <dx:ASPxLabel ID="ASPxLabelDAMkgs" runat="server" Text="" Font-Bold="True"></dx:ASPxLabel>
                    </td>
                    <td><span>Kgs</span></td>
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
        <div class="keongang">
            <div class="grafico">

                <div style="width: 100%">
                    <p style="font-size: 30px; text-align: center;">KHO A - KHO CHỨA HÀNG ĐÃ SOI CHIẾU</p>
                </div>
                <div id="col0" style="left: -30px; " class="column"></div>
                <div id="col1" style="left: 10px;" class="column"></div>
                <div id="col2" style="left: 50px;" class="column"></div>
                <div id="col3" style="left: 90px;" class="column"></div>
                <div id="col4" style="left: 130px;" class="column"></div>
                <div id="col5" style="left: 170px; " class="column"></div>
                <div id="col6" style="left: 210px; ;" class="column"></div>
                <div id="col7" style="left: 250px;" class="column"></div>
                <div id="col8" style="left: 290px;" class="column"></div>
                <div id="col9" style="left: 330px; " class="column"></div>
                <div id="col10" style="left: 370px;" class="column"></div>
                <div id="col11" style="left: 410px;" class="column"></div>
                <div id="col12" style="left: 450px;" class="column"></div>
                <div id="col13" style="left: 490px; " class="column"></div>
                <div id="col14" style="left: 530px; " class="column"></div>
                <div id="col15" style="left: 570px;" class="column"></div>
                <div id="col16" style="left: 610px;" class="column"></div>
                <div id="col17" style="left: 650px; " class="column"></div>
                <div id="col18" style="left: 690px; " class="column"></div>
                <div id="col19" style="left: 730px;" class="column"></div>
                <div id="col20" style="left: 770px;" class="column"></div>
                <div id="col21" style="left: 810px; " class="column"></div>
                <div id="col22" style="left: 850px; " class="column"></div>
                <div id="col23" style="left: 890px; " class="column"></div>
                <div id="col24" style="left: 930px; " class="column"></div>
                <div id="col25" style="left: 970px; " class="column"></div>

                <%-- <div id="col0" style="left: -30px; background-color: red;" class="column"></div>
            <div id="col1" style="left: 10px;" class="column"></div>

            <div id="col2" style="left: 90px; background-color: red;" class="column"></div>
            <div id="col3" style="left: 130px;" class="column"></div>

            <div id="col4" style="left: 210px;" class="column"></div>
            <div id="col5" style="left: 250px; background-color: red;" class="column"></div>

            <div id="col6" style="left: 330px; background-color: red;" class="column"></div>
            <div id="col7" style="left: 370px;" class="column"></div>

            <div id="col8" style="left: 450px;" class="column"></div>
            <div id="col9" style="left: 490px; background-color: red;" class="column"></div>

            <div id="col10" style="left: 570px; background-color: red;" class="column"></div>
            <div id="col11" style="left: 650px;" class="column"></div>

            <div id="col12" style="left: 730px;" class="column"></div>
            <div id="col13" style="left: 770px; background-color: red;" class="column"></div>

            <div id="col14" style="left: 850px; background-color: red;" class="column"></div>
            <div id="col15" style="left: 890px;" class="column"></div>

            <div id="col16" style="left: 970px;" class="column"></div>
            <div id="col17" style="left: 1010px; background-color: red;" class="column"></div>

            <div id="col18" style="left: 1090px; background-color: red;" class="column"></div>
            <div id="col19" style="left: 1130px;" class="column"></div>

            <div id="col20" style="left: 1210px;" class="column"></div>
            <div id="col21" style="left: 1250px; background-color: red;" class="column"></div>

            <div id="col22" style="left: 1330px; background-color: red;" class="column"></div>
            <div id="col23" style="left: 1370px; background-color: red;" class="column"></div>

            <div id="col24" style="left: 1450px; background-color: red;" class="column"></div>

            <div id="col25" style="left: 1530px; background-color: red;" class="column"></div>--%>
            </div>

            <div class="canc"></div>
            <%-- <div class="demso">
        <span style="margin-left:37px ">A0</span>
        <span style="margin-left:67px ">A0</span>
    </div>--%>
            <div>
                <img src="images/khoAa2.jpg" style="margin-top: -1px;" />
            </div>
            <%--<div style="height:1px; width: 1700px; background-color: black; margin-top: 20px;">
            </div>--%>
            <div class="grafico">

                <div style="width: 100%">
                    <p style="font-size: 30px; text-align: center;">KHO B - KHO CHỨA HÀNG CHƯA SOI CHIẾU</p>
                </div>
                <div id="colB0" style="left: -30px; background-color: red;" class="column"></div>
                <div id="colB1" style="left: 10px;" class="column"></div>

                <div id="colB2" style="left: 50px; background-color: red;" class="column"></div>
                <div id="colB3" style="left: 90px;" class="column"></div>

                <div id="colB4" style="left: 130px;" class="column"></div>
                <div id="colB5" style="left: 170px; background-color: red;" class="column"></div>

                <div id="colB6" style="left: 210px; background-color: red;" class="column"></div>
                <div id="colB7" style="left: 250px;" class="column"></div>

                <div id="colB8" style="left: 290px;" class="column"></div>
                <div id="colB9" style="left: 330px; background-color: red;" class="column"></div>

                <div id="colB10" style="left: 370px; background-color: red;" class="column"></div>
                <div id="colB11" style="left: 410px;" class="column"></div>

                <div id="colB12" style="left: 450px;" class="column"></div>
                <div id="colB13" style="left: 490px; background-color: red;" class="column"></div>

                <div id="colB14" style="left: 530px; background-color: red;" class="column"></div>
                <div id="colB15" style="left: 570px;" class="column"></div>

                <div id="colB16" style="left: 610px;" class="column"></div>
                <div id="colB17" style="left: 650px; background-color: red;" class="column"></div>

                <div id="colB18" style="left: 690px; background-color: red;" class="column"></div>
                <div id="colB19" style="left: 730px;" class="column"></div>

                <div id="colB20" style="left: 770px;" class="column"></div>
                <div id="colB21" style="left: 810px; background-color: red;" class="column"></div>

                <div id="colB22" style="left: 850px; background-color: red;" class="column"></div>
                <div id="colB23" style="left: 890px; background-color: red;" class="column"></div>

                <div id="colB24" style="left: 930px; background-color: red;" class="column"></div>

                <div id="colB25" style="left: 970px; background-color: red;" class="column"></div>
                <div id="colB26" style="left: 1010px; background-color: red;" class="column"></div>

                <%--<div id="colB0" style="left: -30px; background-color: red;" class="column"></div>
            <div id="colB1" style="left: 10px;" class="column"></div>

            <div id="colB2" style="left: 90px; background-color: red;" class="column"></div>
            <div id="colB3" style="left: 130px;" class="column"></div>

            <div id="colB4" style="left: 210px;" class="column"></div>
            <div id="colB5" style="left: 250px; background-color: red;" class="column"></div>

            <div id="colB6" style="left: 330px; background-color: red;" class="column"></div>
            <div id="colB7" style="left: 370px;" class="column"></div>

            <div id="colB8" style="left: 450px;" class="column"></div>
            <div id="colB9" style="left: 490px; background-color: red;" class="column"></div>

            <div id="colB10" style="left: 570px; background-color: red;" class="column"></div>
            <div id="colB11" style="left: 650px;" class="column"></div>

            <div id="colB12" style="left: 730px;" class="column"></div>
            <div id="colB13" style="left: 770px; background-color: red;" class="column"></div>

            <div id="colB14" style="left: 850px; background-color: red;" class="column"></div>
            <div id="colB15" style="left: 890px;" class="column"></div>

            <div id="colB16" style="left: 970px;" class="column"></div>
            <div id="colB17" style="left: 1010px; background-color: red;" class="column"></div>

            <div id="colB18" style="left: 1090px; background-color: red;" class="column"></div>
            <div id="colB19" style="left: 1130px;" class="column"></div>

            <div id="colB20" style="left: 1210px;" class="column"></div>
            <div id="colB21" style="left: 1250px; background-color: red;" class="column"></div>

            <div id="colB22" style="left: 1330px; background-color: red;" class="column"></div>
            <div id="colB23" style="left: 1370px; background-color: red;" class="column"></div>

            <div id="colB24" style="left: 1450px; background-color: red;" class="column"></div>

            <div id="colB25" style="left: 1530px; background-color: red;" class="column"></div>
            <div id="colB26" style="left: 1570px; background-color: red;" class="column"></div>--%>
            </div>

            <div class="canc"></div>
            <div>
                <img src="images/khoB2.jpg" style="margin-top: -1px;" />
            </div>
            <div class="vtk">

                <dx:ASPxLabel ID="ASPxLabelViTri" runat="server" Text=""></dx:ASPxLabel>
            </div>
        </div>

        <asp:Literal ID="LiteralTable" runat="server"></asp:Literal>
    </div>
</asp:Content>