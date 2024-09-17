<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ThongBao.ascx.cs" Inherits="ALSE.UC.ThongBao" %>

<div id="uc-thongbao">

    <asp:ScriptManager ID="ScriptManagerUCTB" runat="server"></asp:ScriptManager>
        <asp:Timer ID="TimerUCTB" runat="server" OnTick="TimerUCTB_Tick" Interval="300000"></asp:Timer>
        <asp:UpdatePanel ID="UpdatePanelUCTB" runat="server">
            <ContentTemplate>
                <div class="slide-uctb">
                    <asp:Literal ID="LiteralUCTB" runat="server"></asp:Literal>
                    
                </div>                
            </ContentTemplate>
        </asp:UpdatePanel>
     <script type="text/javascript">
         $(document).ready(function () {
             $(".slide-uctb ul").css('visibility', 'visible');
             $('#fade').list_ticker({
                 speed: 2000,
                 effect: 'fade'
             });
             $('.slide').list_ticker({
                 speed: 5000,
                 effect: 'slide'
             });
         })
    </script>
</div>

