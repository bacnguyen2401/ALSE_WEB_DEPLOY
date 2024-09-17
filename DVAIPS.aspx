<%@ Page Title="Đánh giá phục vụ AIPS" Language="C#" EnableEventValidation="false" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="DVAIPS.aspx.cs" Inherits="ALSE.DVAIPS" %>

<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        .dvaips-left {
            float: left;
            width: 270px;
            margin-right: 20px;
        }
        .dvaips-right {
            float: right;
            width: 880px;
        }
        .tbl-dvaips {
            width: 700px;
            float: right;
        }

        .panel {
            min-width: 930px;
        }

        .dvaipsid {
            visibility: hidden;
            height: 1px;
        }

        .tm-red {
            background-color: red;
        }

        .ul-tgyc li {
            display: inline-block;
        }

        .ul-tgyc {
            list-style-type: none;
            padding: 0;
        }

        .txt-tg-w-d {
            width: 120px;
        }

        .txt-tg-w-t {
            width: 80px;
        }

        .gtgyc, .gtgxd {
            width: 80px;
        }

        .ghichu {
            max-width: 270px;
            max-height: 100px;
        }
        .btncapnhat, #btnhuy {
            visibility: hidden;
        }
        /*Only Firefox*/
        @-moz-document url-prefix() {
            .settg {
            margin-top: -26px;
        }
        /*END Only Firefox*/
        }
        
    </style>
    <script type="text/javascript">
        var today = new Date();
        var yearn = today.getFullYear();
        var monthn = today.getMonth() + 1;
        if (monthn < 10) {
            monthn = "0" + monthn;
        }
        var dayn = today.getDate();
        if (dayn < 10) {
            dayn = "0" + dayn;
        }
        var hourn = today.getHours();
        var minuten = today.getMinutes();
        var dmy = dayn + "/" + monthn + "/" + yearn;
        var hm = hourn + ":" + minuten;
        $(document).ready(function () {
            
           
            
            //alert(yearn);
            $(".thoigianyeucau").mask("99/99/" + yearn);
            $(".thoigianyeucautime").mask("99:99");
            $(".thoigianxeden").mask("99/99/" + yearn);
            $(".thoigianxedentime").mask("99:99");

            $(".tbl-dvaips").on("click", ".btn-sua", function () {
                var gdvaipsid = $(this).parent().parent().find(".gbks").attr("dvaipsid");
                var gbks = $(this).parent().parent().find(".gbks").text().trim();
                var gtgyc = $(this).parent().parent().find(".gtgyc").text();
                var gtgxd = $(this).parent().parent().find(".gtgxd").text();
                var gldid = $(this).parent().parent().find(".gld").attr("ldid");
                var gcbid = $(this).parent().parent().find(".gcb").attr("cbid");
                var gtgc = $(this).parent().parent().find(".gtgc").text();
                var ggc = $(this).parent().parent().find(".ggc").text();

                $(".dvaipsid").val(gdvaipsid);
                $(".bienkiemsoat").val(gbks);
                $(".thoigianyeucau").val(gtgyc.split(" ")[0] + "/" + yearn);
                $(".thoigianyeucautime").val(gtgyc.split(" ")[1]);
                $(".thoigianxeden").val(gtgxd.split(" ")[0] + "/" + yearn);
                $(".thoigianxedentime").val(gtgxd.split(" ")[1]);
                $(".lydo").val(gldid);
                $(".canbo").val(gcbid);
                $(".ghichu").val(ggc);
                $(".btnthem").css("visibility", "hidden");
                $(".btncapnhat").css("visibility", "visible");
                $("#btnhuy").css("visibility", "visible");
            })
            $(".tbl-dvaips").on("click", ".btn-xoa", function () {
                var gdvaipsid = $(this).parent().parent().find(".gbks").attr("dvaipsid");
                $(".dvaipsid").val(gdvaipsid);
                popupxoa.Show();
            })
           
        })
        
        function settgyc() {
            var today = new Date();
            var yearn = today.getFullYear();
            var monthn = today.getMonth() + 1;
            if (monthn < 10) {
                monthn = "0" + monthn;
            }
            var dayn = today.getDate();
            if (dayn < 10) {
                dayn = "0" + dayn;
            }
            var hourn = today.getHours();
            if (hourn < 10) {
                hourn = "0" + hourn;
            }
            var minuten = today.getMinutes();
            if (minuten < 10) {
                minuten = "0" + minuten;
            }
            var dmy = dayn + "/" + monthn + "/" + yearn;
            var hm = hourn + ":" + minuten;
            $(".thoigianyeucau").val(dmy);
            $(".thoigianyeucautime").val(hm);
        }
        function settgxd() {
            var today = new Date();
            var yearn = today.getFullYear();
            var monthn = today.getMonth() + 1;
            if (monthn < 10) {
                monthn = "0" + monthn;
            }
            var dayn = today.getDate();
            if (dayn < 10) {
                dayn = "0" + dayn;
            }
            var hourn = today.getHours();
            var minuten = today.getMinutes();
            var dmy = dayn + "/" + monthn + "/" + yearn;
            var hm = hourn + ":" + minuten;
            $(".thoigianxeden").val(dmy);
            $(".thoigianxedentime").val(hm);
        }
        function btnhuy() {
            $(".dvaipsid").val("");
            $(".bienkiemsoat").val("");
            $(".thoigianyeucau").val("");
            $(".thoigianyeucautime").val("");
            $(".thoigianxeden").val("");
            $(".thoigianxedentime").val("");
            $(".lydo").val("");
            $(".canbo").val("");
            $(".ghichu").val("");
            $(".btnthem").css("visibility", "visible");
            $(".btncapnhat").css("visibility", "hidden");
            $("#btnhuy").css("visibility", "hidden");
        }
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <!-- TBL-->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>THỐNG KÊ</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dvaips-left">
                        <form role="form">
                            
                            
                            <div class="form-group">
                                <label for="usr">Biển Kiểm Soát:</label>
                                <asp:TextBox CssClass="dvaipsid form-control" ID="txtDVAIPSID" runat="server"></asp:TextBox>

                                <asp:TextBox CssClass="bienkiemsoat form-control" ID="txtBienKiemSoat" runat="server"></asp:TextBox>
                            </div>
                            <div class="form-group">
                                <label for="usr">Thời Gian Yêu Cầu:</label>
                                <ul class="ul-tgyc">
                                    <li>
                                        <asp:TextBox placeholder="dd/mm/yyyy" CssClass="txt-tg-w-d thoigianyeucau form-control" ID="txtThoiGianYeuCau" runat="server"></asp:TextBox>
                                    </li>

                                    <li>
                                        <asp:TextBox placeholder="hh:mm" CssClass="txt-tg-w-t thoigianyeucautime form-control" ID="txtThoiGianYeuCauTime" runat="server"></asp:TextBox>
                                    </li>
                                    <li>
                                        <span id="settgyc" class="btn btn-default settg" onclick="settgyc()">Get</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="form-group">
                                <label for="usr">Thời Gian Xe Đến:</label>
                                <ul class="ul-tgyc">
                                    <li>
                                        <asp:TextBox placeholder="dd/mm/yyyy" CssClass="txt-tg-w-d thoigianxeden form-control" ID="txtThoiGianXeDen" runat="server"></asp:TextBox>
                                    </li>

                                    <li>

                                        <asp:TextBox placeholder="hh:mm" CssClass="txt-tg-w-t thoigianxedentime form-control" ID="txtThoiGianXeDenTime" runat="server"></asp:TextBox>
                                    </li>
                                     <li>
                                        <span id="settgxd" class="btn btn-default settg" onclick="settgxd()">Get</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="form-group">
                                <label for="usr">Lý Do:</label>
                                <asp:DropDownList CssClass="lydo form-control" ID="ddlLyDo" runat="server" DataSourceID="SqlDataSourceLyDoAIPS" DataTextField="TenLyDo" DataValueField="LyDoID"></asp:DropDownList>
                                <asp:SqlDataSource runat="server" ID="SqlDataSourceLyDoAIPS" ConnectionString='<%$ ConnectionStrings:CARGOConnectionString %>' SelectCommand="SELECT [LyDoID], [TenLyDo] FROM [WebAIPSLyDo]"></asp:SqlDataSource>
                            </div>
                            <div class="form-group">
                                <label for="usr">Cán Bộ AIPS:</label>

                                <asp:DropDownList CssClass="canbo form-control" ID="ddlCanBo" runat="server" DataTextField="TenCanBoAIPS" DataValueField="CanBoAIPSID" DataSourceID="SqlDataSourceCanBo"></asp:DropDownList>
                                <asp:SqlDataSource runat="server" ID="SqlDataSourceCanBo" ConnectionString='<%$ ConnectionStrings:CARGOConnectionString %>' SelectCommand="SELECT [CanBoAIPSID], [TenCanBoAIPS] FROM [WebAIPSCanBo]"></asp:SqlDataSource>
                            </div>
                            <div class="form-group">
                                <label for="pwd">Ghi Chú:</label>
                                <asp:TextBox CssClass="ghichu form-control" ID="txtGhiChu" TextMode="MultiLine" runat="server"></asp:TextBox>
                            </div>
                            <div class="form-group">
                                <asp:Button ID="btnThem" OnClick="btnThem_Click" CssClass="btnthem btn btn-warning" runat="server" Text="Thêm" AccessKey="+" />
                                <asp:Button ID="btnCapNhat" OnClick="btnCapNhat_Click" CssClass="btncapnhat btn btn-danger" runat="server" Text="Cập Nhật" />
                                <span id="btnhuy" onclick="btnhuy()" class="btn btn-danger">Hủy</span>
                                <p style="color: red; font-style:italic;">*Tip: "Alt +" Để thêm nhanh(không cần dùng chuột click)</p>
                            </div>
                        </form>
                    </div>
                    <div class="dataTable_wrapper dvaips-right">
                        <table id="tbl1" class="KdataTables table  table-bordered  tbl-dvaips">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>BKS</th>
                                    <th>TG YC</th>
                                    <th>TG XĐ</th>
                                    <th>Lý Do</th>
                                    <th>CB AIPS</th>
                                    <th>Tổng TG</th>
                                    <th>Ghi Chú</th>

                                    <th>Sửa</th>
                                    <th>Xóa</th>
                                </tr>
                            </thead>
                            <asp:Literal ID="ltrDVAIPS" runat="server"></asp:Literal>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END TBL-->

    <dx:ASPxPopupControl ID="popupxoa" runat="server" CloseAction="CloseButton" CloseOnEscape="true" Modal="True"
        PopupHorizontalAlign="WindowCenter" PopupVerticalAlign="WindowCenter" ClientInstanceName="popupxoa"
        HeaderText="Xóa BKS" AllowDragging="True" PopupAnimationType="None" EnableViewState="False" Width="300px">
        <%-- <ClientSideEvents PopUp="function(s, e) { ASPxClientEdit.ClearGroup('entryGroup'); tbLogin.Focus(); }" />--%>
        <ContentCollection>
            <dx:PopupControlContentControl runat="server">
                <dx:ASPxPanel ID="ASPxPanel1" runat="server" DefaultButton="btOK">
                    <PanelCollection>
                        <dx:PanelContent runat="server">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <td colspan="2">Xác nhận xóa BKS:</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <asp:Button ID="btnXoaBKS" CssClass="btn btn-warning" OnClick="btnXoaBKS_Click" runat="server" Text="Xóa"></asp:Button></td>
                                    </tr>
                                </thead>
                            </table>
                        </dx:PanelContent>
                    </PanelCollection>
                </dx:ASPxPanel>
            </dx:PopupControlContentControl>
        </ContentCollection>
        <ContentStyle>
            <Paddings PaddingBottom="5px" />
        </ContentStyle>
    </dx:ASPxPopupControl>
</asp:Content>