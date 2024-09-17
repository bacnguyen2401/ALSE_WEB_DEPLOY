<%@ Page Title="BẢNG CHẤM CÔNG USER" Language="C#" MasterPageFile="~/Site.Master"  AutoEventWireup="true" CodeBehind="NhanVien.aspx.cs" Inherits="ALSE.BCCwU"   EnableViewState="false"%>

<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        body {
            background-color: white;
            width: 700px;
        }

        .div-tbl {
            position: absolute;
            background-color: white;
            width: 600px;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
        }

        .td-red {
            color: red;
            font-weight: bold;
        }
        

        .mau0 {
            background-color: #FF9966;
        }

        .mau1 {
            background-color: #99FFCC;
        }

        #ChonThang, #chonnam {
            width: 80px;
           
            margin-left: 15px;
            margin-right: 15px;
        }

        .div-chonthang {
            margin-top: 15px;
        }

        .lbluid {
            visibility: hidden;
        }
    </style>
    <script type="text/javascript">
        var chonthang;
        var q_dt = new Date();
        var q_thang = "";
        var q_nam = "";
        $(document).ready(function () {
            q_thang = getParameterByName("Thang");
            q_nam = getParameterByName("Nam");
            
            for (var xy = 2015; xy <= q_dt.getFullYear() ; xy++) {
                $("#chonnam").append("<option value=\"" + xy + "\">" + xy + "</option>");
            }
            if ( q_thang == "") {
                q_nam = q_dt.getFullYear();
                 q_thang= (q_dt.getMonth() + 1);
            }
            $("#ChonThang").val(q_thang);
            $("#chonnam").val(q_nam);
            $("#sp-thangnam").text("THÁNG " + q_thang + " NĂM " + q_nam);
            $('.KdataTablesBCCwU').DataTable({
                "responsive": true,
                "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                "iDisplayLength": -1,
                //"order": [[6, "desc"], [9, "desc"]]
            });

            // remove tạm thời thêm chấm công khác 2015-10-08
            $(".btn-xemchamcongkhac").remove();
            // remove tạm thời thêm chấm công khác 2015-10-08

            $(".navbar").remove();
            $("#footer").remove();
            $(".dataTables_length").remove();
            $(".dataTables_filter").remove();
            $(".dataTables_info").remove();
            $(".dataTables_paginate").remove();
            var view = getParameterByName('View');
            if (view == 1) {
                $(".tbl-chamcong").remove();
                $(".btn-suachamcong").remove();
            } else {
                $(".btn-xemchamcong").remove();
                $(".tbl-dschamcong").remove();

            }
            $(".tbl-dschamcong").on("click", ".popdel", function () {
                var getio = $(this).parent().parent().find(".g-io").attr("io");
                var delgetioid = $(this).parent().parent().find(".g-io").attr("getioid");
                var deltennv = $(this).parent().parent().find(".g-io").attr("tennv");
                var delgiocc = $(this).parent().parent().find(".g-io").attr("ngaygio");
                //console.log(delgetioid + "" + deltennv);
                $(".delgetioid").val(delgetioid);
                $(".deltennv").text(deltennv);
                $(".delgiocc").text(delgiocc);

                $(".delio").val(getio);

                popupdelete.Show();

            })
            var xgetdtnow = getdtnow();
            $(".txtngay").val(xgetdtnow[0]);
            $(".txtgio").val(xgetdtnow[1]);
            $(".txtngay").mask("99/99/9999");
            $(".txtgio").mask("99:99");
            anbtn();

        })
        function anbtn() {

            var arr = ["1", "8", "12", "94"];
            var uid = $(".lbluid").text();
            //console.log(uid);
            if (jQuery.inArray(uid, arr) == -1) {
                $(".btn-suachamcong").remove();
            }
        }
        function getdtnow() {
            var currentDate = new Date();

            var phut = currentDate.getMinutes();
            var gio = currentDate.getHours();
            var giay = currentDate.getSeconds();
            if (phut < 10) {
                phut = "0" + phut;
            }
            if (gio < 10) {
                gio = "0" + gio;
            }
            var gdate = currentDate.getDate();

            if (gdate < 10) {
                gdate = "0" + gdate;
            }
            var gmonth = (currentDate.getMonth() + 1);

            if (gmonth < 10) {
                gmonth = "0" + gmonth;
            }

            var datenow = gdate + "/" + gmonth + "/" + currentDate.getFullYear();
            var timenow = gio + ":" + phut;
            var dtnow = currentDate.getFullYear() + "/" + gmonth + "/" + gdate + " " + gio + ":" + phut + ":" + giay;
            return [datenow, timenow, dtnow];
        }
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        function anhien(obj) {

            AddQueryString("View", obj);

            return false;
        }
        function showthemcc() {

            popupthemcc.Show();
        }
        function showthemcckhac() {

            popupthemcckhac.Show();
        }
        function chonthang() {
            AddQueryString("Nam", $("#chonnam").val());
            AddQueryString("Thang", $("#ChonThang").val());
            

        }
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div class="div-tbl">

        <div style="width: 600px; margin-top: 20px">
            <p style="font-size: 30px; text-align: center; color: black;">CHI TIẾT CÔNG <span id="sp-thangnam"></span></p>
        </div>
        <div style="margin-bottom: 10px">
            <input type="button" onclick="anhien(1)" value="Sửa chấm công" class="mani-btn btn btn-primary btn-suachamcong" />
            <input type="button" onclick="anhien(0)" value="Xem chấm công" class="mani-btn btn btn-primary btn-xemchamcong" />
            <input type="button" onclick="showthemcc()" value="Thêm chấm công" class="mani-btn btn btn-primary btn-xemchamcong" />
            <input type="button" onclick="showthemcckhac()" value="Thêm chấm công khác" class="mani-btn btn btn-primary btn-xemchamcongkhac" />

            <div class="div-chonthang">
                <table>
                    <tr>
                        <td>
                            Chọn Năm:
                        </td>
                        <td>
                            <select id="chonnam" class="form-control">
                    
                    
                
                </select>
                        </td>
                        <td>
                            Chọn Tháng:
                        </td>
                        <td>
                            <select id="ChonThang" class="form-control">
                    
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                        </td>
                        <td>
                            <input type="button" onclick="chonthang()" value="Xem" class="mani-btn btn btn-danger btn-chonthang" />
                        </td>
                        
                    </tr>
                </table>
                
                
                
            </div>
        </div>
        <div>
            <table class="table table-striped table-bordered ">
                <tbody>
                    <tr>
                        <td rowspan="2">
                            <asp:Label ID="lblNVID" runat="server" Text=""></asp:Label></td>
                        <td colspan="2" class="td-red">
                            <asp:Label ID="lblTenNV" runat="server" Text=""></asp:Label></td>
                        <td colspan="3">
                            <asp:Label ID="lblPhong" runat="server" Text=""></asp:Label></td>
                    </tr>
                    <tr>
                        <td>
                            <asp:Label ID="lblSex" runat="server" Text=""></asp:Label></td>
                        <td>
                            <asp:Label ID="lblDoB" runat="server" Text=""></asp:Label></td>
                        <td>
                            <asp:Label ID="lblChucDanh" runat="server" Text=""></asp:Label></td>
                        <td>
                            <asp:Label ID="lblGhiChu" runat="server" Text=""></asp:Label></td>
                        <td>
                            <asp:Label ID="lblSDT" runat="server" Text=""></asp:Label></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <table class="table table-striped table-bordered table-hover tbl-chamcong">
                <thead>
                    <tr>
                        <td rowspan="2">STT</td>
                        <td rowspan="2">Ca</td>
                        <td colspan="2">Giờ</td>

                        <td rowspan="2">Ngày</td>
                        <td rowspan="2">Đêm</td>
                        <td rowspan="2">TG</td>
                        <td rowspan="2">Ghi Chú</td>
                    </tr>
                    <tr>

                        <td>BĐ</td>
                        <td>KT</td>
                    </tr>
                </thead>
                <tbody>
                    <asp:Literal ID="LiteralCCwU" runat="server"></asp:Literal>
                </tbody>
            </table>
        </div>
        <div>
            <table class="KdataTables table  table-bordered  tbl-dschamcong">
                <thead>

                    <tr>

                        <td>Ngày</td>
                        <td>Giờ</td>
                        <td>Loại</td>
                        <td>Sửa/Xóa</td>
                    </tr>
                </thead>
                <tbody>
                    <asp:Literal ID="LiteralDSCCwU" runat="server"></asp:Literal>
                </tbody>
            </table>
            <asp:Label ID="lblUID" CssClass="lbluid" runat="server" Text=""></asp:Label>
        </div>
    </div>

    <dx:ASPxPopupControl ID="popupdelete" runat="server" CloseAction="CloseButton" CloseOnEscape="true" Modal="True"
        PopupHorizontalAlign="WindowCenter" PopupVerticalAlign="WindowCenter" ClientInstanceName="popupdelete"
        HeaderText="Sửa/Xóa Chấm Công" AllowDragging="True" PopupAnimationType="None" EnableViewState="False" Width="500px">

        <ContentCollection>
            <dx:PopupControlContentControl runat="server">
                <dx:ASPxPanel ID="ASPxPanel1" runat="server" DefaultButton="btOK">
                    <PanelCollection>
                        <dx:PanelContent runat="server">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <td colspan="2">Sửa/Xóa Chấm Công:</td>
                                    </tr>
                                    <tr>
                                        <td>Chấm Công ID</td>
                                        <td>Tên Nhân Viên</td>
                                        <td>Giờ Chấm</td>
                                        <td>Loại</td>
                                    </tr>
                                </thead>

                                <tr>

                                    <td>

                                        <asp:TextBox ID="txtdelGetIOID" CssClass="delgetioid" runat="server" Width="30px"></asp:TextBox>
                                    </td>
                                    <td>

                                        <asp:Label runat="server" ID="txttennv" CssClass="deltennv"></asp:Label>
                                    </td>
                                    <td>
                                        <asp:Label runat="server" ID="delgiocc" CssClass="delgiocc"></asp:Label>
                                    </td>
                                    <td>
                                        <asp:DropDownList ID="ddlIO" CssClass="delio" runat="server">
                                            <asp:ListItem Value="0">Vào</asp:ListItem>
                                            <asp:ListItem Value="1">Ra</asp:ListItem>
                                        </asp:DropDownList>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <asp:Button ID="btnSua" OnClick="btnSua_Click" OnClientClick="return confirm('Xác nhận sửa?');" class="btn btn-success" runat="server" Text="Sửa" />
                                    </td>
                                    <td>
                                        <asp:Button ID="btnXoa" OnClick="btnXoa_Click" OnClientClick="return confirm('Xác nhận xóa?');" class="btn btn-success" runat="server" Text="Xóa" />
                                    </td>

                                    <td>
                                        <asp:Button ID="btnHuyXoa" OnClick="btnHuyXoa_Click" class="btn btn-warning" runat="server" Text="Hủy" />
                                    </td>
                                </tr>
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

    <dx:ASPxPopupControl ID="popupthemcc" runat="server" CloseAction="CloseButton" CloseOnEscape="true" Modal="True"
        PopupHorizontalAlign="WindowCenter" PopupVerticalAlign="WindowCenter" ClientInstanceName="popupthemcc"
        HeaderText="Thêm Chấm Công" AllowDragging="True" PopupAnimationType="None" EnableViewState="False">

        <ContentCollection>
            <dx:PopupControlContentControl runat="server">
                <dx:ASPxPanel ID="Panel1" runat="server" DefaultButton="btOK">
                    <PanelCollection>
                        <dx:PanelContent runat="server">
                            <table>
                                <tr>

                                    <td>Ngày</td>
                                    <td>Giờ</td>
                                    <td>Loại</td>
                                </tr>
                                <tr>
                                    <td>
                                        <asp:TextBox ID="txtNgay" CssClass="txtngay" placeholder="Ngày/Tháng/Năm" runat="server"></asp:TextBox></td>
                                    <td>
                                        <asp:TextBox ID="txtGio" CssClass="txtgio" placeholder="Giờ:Phút" runat="server"></asp:TextBox></td>
                                    <td>
                                        <asp:DropDownList ID="ddlThemCC" CssClass="ddlThemCC" runat="server">
                                            <asp:ListItem Value="0">Vào</asp:ListItem>
                                            <asp:ListItem Value="1">Ra</asp:ListItem>
                                        </asp:DropDownList>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <asp:Button ID="btnThem" OnClick="btnThem_Click" OnClientClick="return confirm('Xác nhận thêm?');" class="btn btn-success" runat="server" Text="Thêm" /></td>
                                    <td></td>
                                    <td>
                                        <asp:Button ID="btnHuyThem" OnClick="btnHuyThem_Click" class="btn btn-warning" runat="server" Text="Hủy" /></td>
                                </tr>
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

    <dx:ASPxPopupControl ID="popupthemcckhac" runat="server" CloseAction="CloseButton" CloseOnEscape="true" Modal="True"
        PopupHorizontalAlign="WindowCenter" PopupVerticalAlign="WindowCenter" ClientInstanceName="popupthemcckhac"
        HeaderText="Thêm Chấm Công Khác" AllowDragging="True" PopupAnimationType="None" EnableViewState="False">

        <ContentCollection>
            <dx:PopupControlContentControl runat="server">
                <dx:ASPxPanel ID="ASPxPanel2" runat="server" DefaultButton="btOK">
                    <PanelCollection>
                        <dx:PanelContent runat="server">
                            <table>
                                <tr>
                                    <td>Loại</td>
                                    <td>Ngày</td>
                                    <td>Giờ</td>
                                </tr>
                                <tr>
                                    <td rowspan="2">
                                        <asp:DropDownList ID="ddlDSCCKhac" CssClass="ddldscckhac" runat="server">
                                        </asp:DropDownList>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtNgayKhac1" CssClass="txtngay" placeholder="Ngày/Tháng/Năm" runat="server"></asp:TextBox>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtGioKhac1" CssClass="txtgio" placeholder="Giờ:Phút" runat="server"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <asp:TextBox ID="txtNgayKhac2" CssClass="txtngay" placeholder="Ngày/Tháng/Năm" runat="server"></asp:TextBox>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txtGioKhac2" CssClass="txtgio" placeholder="Giờ:Phút" runat="server"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <asp:Button ID="Button1" OnClick="btnThem_Click" OnClientClick="return confirm('Xác nhận thêm?');" class="btn btn-success" runat="server" Text="Thêm" /></td>
                                    <td></td>
                                    <td>
                                        <asp:Button ID="Button2" OnClick="btnHuyThem_Click" class="btn btn-warning" runat="server" Text="Hủy" /></td>
                                </tr>
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