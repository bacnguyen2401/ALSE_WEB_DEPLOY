<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="PopupTTHX.ascx.cs" Inherits="ALSE.Control.PopupTTHX" %>
<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>

<style type="text/css">
    .auto-style1 {
        width: 140px;
    }

    .auto-style3 {
        width: 169px;
    }

    .auto-style4 {
        width: 159px;
    }
</style>
<script type="text/javascript">
</script>
<dx:ASPxPopupControl ID="ASPxPopupControl1" runat="server" Height="275px" Width="549px" Modal="True" ClientInstanceName="popuptthx" HeaderText="Cập nhật" PopupHorizontalAlign="Center" PopupVerticalAlign="Middle" AllowDragging="True" Left="200" Top="30">
    <ContentCollection>
        <dx:PopupControlContentControl runat="server">
            <table class="dxflInternalEditorTable">
                <tr>
                    <td class="auto-style1">&nbsp;</td>
                    <td class="auto-style4">&nbsp;</td>
                    <td></td>
                    <td class="auto-style3">&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td class="auto-style1">MAWB</td>
                    <td class="auto-style4">&nbsp;</td>
                    <td class="auto-style3">
                        <asp:TextBox ID="txtMAWB" runat="server" Width="158px" name="txtmawb"></asp:TextBox>
                    </td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td class="auto-style1">&nbsp;</td>
                    <td class="auto-style4">&nbsp;</td>
                    <td class="auto-style3">&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td class="auto-style1">
                        <asp:Label ID="Label1" runat="server" Text="Đã Giao Hàng"></asp:Label>
                    </td>
                    <td class="auto-style4">
                        <asp:CheckBox ID="ckbDaGiaoHang" runat="server" Width="30px" />
                    </td>
                    <td class="auto-style3">
                        <asp:TextBox ID="txtNgayGiaoHang" runat="server" Width="156px"></asp:TextBox>
                    </td>
                    <td>
                        <asp:TextBox ID="txtGioGiaoHang" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style1">&nbsp;</td>
                    <td class="auto-style4">&nbsp;</td>
                    <td class="auto-style3">&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td class="auto-style1">
                        <asp:Label ID="Label2" runat="server" Text="Đã Giao DOC"></asp:Label>
                    </td>
                    <td class="auto-style4">
                        <asp:CheckBox ID="ckbDaGiaoDOC" runat="server" Width="30px" />
                    </td>
                    <td class="auto-style3">
                        <asp:TextBox ID="txtNgayGiaoDOC" runat="server" Width="156px"></asp:TextBox>
                    </td>
                    <td>
                        <asp:TextBox ID="txtGioGiaoDOC" runat="server"></asp:TextBox>
                    </td>
                </tr>
                <tr>
                    <td class="auto-style1">&nbsp;</td>
                    <td class="auto-style4">&nbsp;</td>
                    <td class="auto-style3">&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td class="auto-style1">&nbsp;</td>
                    <td class="auto-style4">&nbsp;</td>
                    <td class="auto-style3">&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td class="auto-style1">
                        <asp:Button ID="btncapnhat" runat="server" Text="Cập nhật" OnClick="btncapnhat_Click" />
                    </td>
                    <td class="auto-style4">&nbsp;</td>
                    <td class="auto-style3">&nbsp;</td>
                    <td>&nbsp;</td>
                </tr>
            </table>
        </dx:PopupControlContentControl>
    </ContentCollection>
</dx:ASPxPopupControl>