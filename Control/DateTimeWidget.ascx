<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="DateTimeWidget.ascx.cs" Inherits="ALSE.Control.DateTimeWidget" %>

<script type="text/javascript">
    // <![CDATA[
    function PrepareTimeValue(value) {
        if (value < 10)
            value = "0" + value;
        return value;
    }
    function UpdateTime(s, e) {
        var dateTime = new Date();
        var timeString = PrepareTimeValue(dateTime.getHours()) + ":" + PrepareTimeValue(dateTime.getMinutes()) + ":" +
            PrepareTimeValue(dateTime.getSeconds());
        timeLabel.SetText(timeString);
    }
    // ]]>
</script>
<dx:aspxtimer runat="server" id="Timer" clientinstancename="timer" interval="1000">
    <ClientSideEvents Init="UpdateTime" Tick="UpdateTime" />
</dx:aspxtimer>
<div class="timeContainer">
    <dx:aspxlabel runat="server" id="TimeLabel" clientinstancename="timeLabel" font-bold="true"
        font-size="X-Large">
    </dx:aspxlabel>
</div>
<div class="dateContainer">
    <dx:aspxlabel runat="server" id="DateLabel" clientinstancename="dateLabel" font-size="14px">
    </dx:aspxlabel>
</div>