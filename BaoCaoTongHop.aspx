<%@ Page Title="BÁO CÁO TỔNG HỢP" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="BaoCaoTongHop.aspx.cs" Inherits="ALSE.BaoCao.TongHop" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        #tonghop-hidden {
            height: 10px;
            visibility: hidden;
            font-size: 0.5px;
        }

        #div-bcth {
            background-color: white;
            width: 100%;
            padding-top: 10px;
            padding-left: 5px;
        }

        #div-changeyear {
            margin-left: 10px;
        }

        h1 {
            text-align: center;
            font-weight: bold;
        }

        .tr-todam td {
            font-weight: bold;
        }

        .tr-todo td {
            color: red;
        }
    </style>
    
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-bcth">
        <div id="div-changeyear">
            <span>Change Year</span>
            <select id="bcth-sl-chonnam">
            </select>
        </div>
        <div id="div-tieude">
            <h1></h1>
        </div>
        <div>
            <h3>SUM OF WEIGHT (EXPORT AND IMPORT)</h3>
            <table id="tbl-bcth-sow" class="table table-bordered">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div id="chartsow" style="height: 500px; width: 100%;">
            </div>
        </div>
        <div>
            <h3>Export cargo statistics according FWDs</h3>
            <table id="tbl-bcth-ecsaf" class="table table-bordered">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div id="chartecsaf" style="height: 500px; width: 100%;">
            </div>
        </div>
        <div>
            <h3>Import cargo statistics according FWDs</h3>

            <table id="tbl-bcth-icsaf" class="table table-bordered">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div id="charticsaf" style="height: 500px; width: 100%;">
            </div>
        </div>
        <div id="div-bcth-ewh">
            <h3>Export cargo statistics according WH</h3>
            <table id="tbl-bcth-ewh" class="table table-bordered">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
            <span>Change month: </span>
            <select id="sl-ewh-thang">
                <option value="1">JAN</option>
                <option value="2">FEB</option>
                <option value="3">MAR</option>
                <option value="4">APR</option>
                <option value="5">MAY</option>
                <option value="6">JUN</option>
                <option value="7">JUL</option>
                <option value="8">AUG</option>
                <option value="9">SEP</option>
                <option value="10">OCT</option>
                <option value="11">NOV</option>
                <option value="12">DEC</option>
            </select>

            <div id="chartewh" style="height: 400px; width: 50%;">
            </div>
        </div>

        <div>
            <h3>Export cargo statistics according storage charge</h3>
            <table id="tbl-bcth-es" class="table table-bordered">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div id="chartes" style="height: 500px; width: 100%;">
            </div>
        </div>
        <div>
            <h3></h3>
            <table id="tbl-bcth-ea" class="table table-bordered">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div id="chartea" style="height: 500px; width: 100%;">
            </div>
        </div>
        <div>
            <h3></h3>
            <table id="tbl-bcth-ia" class="table table-bordered">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div id="chartia" style="height: 500px; width: 100%;">
            </div>
        </div>
        <div>
            <h3></h3>
            <table id="tbl-bcth-edyear" class="table table-bordered">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div id="chartedyear" style="height: 500px; width: 100%;">
            </div>
        </div>
        <div id="div-bcth-edmonth">
            <span>Change month: </span>
            <select id="sl-edmonth-thang">
                <option value="1">JAN</option>
                <option value="2">FEB</option>
                <option value="3">MAR</option>
                <option value="4">APR</option>
                <option value="5">MAY</option>
                <option value="6">JUN</option>
                <option value="7">JUL</option>
                <option value="8">AUG</option>
                <option value="9">SEP</option>
                <option value="10">OCT</option>
                <option value="11">NOV</option>
                <option value="12">DEC</option>
            </select>
            <h3></h3>
            <table id="tbl-bcth-edmonth" class="table table-bordered">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div id="chartedmonth" style="height: 500px; width: 100%;">
            </div>
        </div>
        <div id="tonghop-hidden">
            <table id="xbc-tbl-sow">
                <tbody>
                    <asp:Literal ID="ltrSOW" runat="server"></asp:Literal>
                </tbody>
            </table>
            <table id="xbc-tbl-ecsaf">
                <tbody>
                    <asp:Literal ID="ltrECSAF" runat="server"></asp:Literal>
                </tbody>
            </table>
            <table id="xbc-tbl-icsaf">
                <tbody>
                    <asp:Literal ID="ltrICSAF" runat="server"></asp:Literal>
                </tbody>
            </table>
            <table id="xbc-tbl-ewh">
                <tbody>
                    <asp:Literal ID="ltrEWH" runat="server"></asp:Literal>
                </tbody>
            </table>
            <table id="xbc-tbl-es">
                <tbody>
                    <asp:Literal ID="ltrES" runat="server"></asp:Literal>
                </tbody>
            </table>
            <table id="xbc-tbl-eaia">
                <tbody>
                    <asp:Literal ID="ltrEAIA" runat="server"></asp:Literal>
                </tbody>
            </table>
            <table id="xbc-tbl-edyear">
                <tbody>
                    <asp:Literal ID="ltrEDYEAR" runat="server"></asp:Literal>
                </tbody>
            </table>

            <table id="xbc-tbl-edmonth">
                <tbody>
                    <asp:Literal ID="ltrEDMONTH" runat="server"></asp:Literal>
                </tbody>
            </table>
        </div>
    </div>
    <script type="text/javascript">
        var bcth_nam;
        var thang_now;
        var ex = [];
        var im = [];
        var sow = [];
        //
        var agi = [];
        var dam = [];
        var dhl = [];
        var ei = [];
        var sck = [];
        var pt = [];
        //
        var agi_i = [];
        var dam_i = [];
        var dhl_i = [];
        var ei_i = [];

        //
        var acs = [];
        var alsc = [];
        var mfs = [];
        var ncts = [];
        var ewh = [];
        var ewh_tenthang;
        var edmonth_tenthang;
        //
        var es = [];
        //
        var ea = [];
        var ia = [];
        //
        var edyear = [];
        var edmonth = [];
        var bcth_tr = [];
        var check;
        var dt = new Date();
        var thang;
        var trongluong;
        var loai;
        var nhap;
        var xuat;
        var agi_w;
        var dam_w;
        var dhl_w;
        var ei_w;
        var sck_w;
        var pt_w;
        var ewh_ten;
        var ewh_value;
        var sow_tong_e = 0;
        var sow_tong_i = 0;
        $(document).ready(function () {

            check = 0;
            
            thang_now = dt.getMonth() + 1;
            
            bcth_nam = getParameterByName("Nam");

            if (bcth_nam == "") {
                bcth_nam = dt.getFullYear();
            }
            //sow_tong_e = parseFloat(sow_tong_e);
            //sow_tong_i = parseFloat(sow_tong_i);
            for (var sl = 2015; sl <= dt.getFullYear() ; sl++) {
                $("select#bcth-sl-chonnam").append("<option value=\"" + sl + "\">" + sl + "</option>");
            }
            $("select#bcth-sl-chonnam").val(bcth_nam);
            $("div#div-tieude h1").text("SYNTHESIS REPORT " + bcth_nam);
            $("div#div-bcth").on("change", "#bcth-sl-chonnam", function () {
                AddQueryString("Nam", $("select#bcth-sl-chonnam option:selected").val());
            })
            $("select#sl-ewh-thang").val(thang_now);
            $("select#sl-edmonth-thang").val(thang_now);
            $("#xbc-tbl-sow tbody tr").each(function () {
                if (check == 0) {
                    bcth_tr = [];
                    check = 1;
                }
                if ($(this).is(':first-child')) {
                    bcth_tr[0] = bcth_tr[0] + "<td>" + "No" + "</td>";
                    bcth_tr[1] = bcth_tr[1] + "<td>" + "Total EX" + "</td>";
                    bcth_tr[2] = bcth_tr[2] + "<td>" + "Total IM" + "</td>";
                    bcth_tr[3] = bcth_tr[3] + "<td>" + "Total" + "</td>";
                }
                thang = $(this).find(".thang").text();
                xuat = parseFloat($(this).find(".xuat").text());
                sow_tong_e = sow_tong_e + xuat;
                nhap = parseFloat($(this).find(".nhap").text());
                sow_tong_i = sow_tong_i + nhap;
                ex.push({ label: thang, y: xuat });
                im.push({ label: thang, y: nhap });
                bcth_tr[0] = bcth_tr[0] + "<td>" + thang + "</td>";
                bcth_tr[1] = bcth_tr[1] + "<td class=\"bcth-solieu\">" + xuat + "</td>";
                bcth_tr[2] = bcth_tr[2] + "<td class=\"bcth-solieu\">" + nhap + "</td>";
                bcth_tr[3] = bcth_tr[3] + "<td class=\"bcth-solieu\">" + (xuat + nhap) + "</td>";
                if ($(this).is(':last-child')) {
                    bcth_tr[0] += "<td>" + "GrandTotal" + "</td>";
                    bcth_tr[1] += "<td class=\"bcth-solieu\">" + sow_tong_e + "</td>";
                    bcth_tr[2] += "<td class=\"bcth-solieu\">" + sow_tong_i + "</td>";
                    bcth_tr[3] += "<td class=\"bcth-solieu\">" + (sow_tong_e + sow_tong_i) + "</td>";
                    for (var i = 0; i < bcth_tr.length; i++) {
                        $("#tbl-bcth-sow tbody").append("<tr>" + bcth_tr[i] + "</tr>");
                    }
                    check = 0;
                }

            })
            $("#xbc-tbl-edyear tbody tr").each(function () {
                des = $(this).find(".des").text();
                trongluong = parseFloat($(this).find(".trongluong").text());

                edyear.push({ label: des, y: trongluong });

            })
            $("#xbc-tbl-edmonth tbody tr").each(function () {
                des = $(this).find(".des").text();
                trongluong = parseFloat($(this).find(".trongluong").text());
                thang = $(this).find(".thang").text();
                if (parseInt(thang) == thang_now) {
                    edmonth.push({ label: des, y: trongluong });
                }

            })
            $("#xbc-tbl-eaia tbody tr").each(function () {
                cb = $(this).find(".cb").text();
                xuat = parseFloat($(this).find(".xuat").text());
                nhap = parseFloat($(this).find(".nhap").text());
                ea.push({ label: cb, y: xuat });
                ia.push({ label: cb, y: nhap });

            })
            var agi_w_tong = 0;
            var dam_w_tong = 0;
            var dhl_w_tong = 0;
            var ei_w_tong = 0;
            var sck_w_tong = 0;
            var pt_w_tong = 0;
            $("#xbc-tbl-ecsaf tbody tr").each(function () {
                thang = $(this).find(".thang").text();
                agi_w = parseFloat($(this).find(".agi").text());
                dam_w = parseFloat($(this).find(".dam").text());
                dhl_w = parseFloat($(this).find(".dhl").text());
                ei_w = parseFloat($(this).find(".ei").text());
                sck_w = parseFloat($(this).find(".sck").text());
                pt_w = parseFloat($(this).find(".pt").text());
                //
                if (check == 0) {
                    bcth_tr = [];
                    check = 1;
                }
                if ($(this).is(':first-child')) {
                    bcth_tr[0] = bcth_tr[0] + "<td>" + "FWDs" + "</td>";
                    bcth_tr[1] = bcth_tr[1] + "<td>" + "AGI" + "</td>";
                    bcth_tr[2] = bcth_tr[2] + "<td>" + "DAM" + "</td>";
                    bcth_tr[3] = bcth_tr[3] + "<td>" + "DHL" + "</td>";
                    bcth_tr[4] = bcth_tr[4] + "<td>" + "EI" + "</td>";
                    bcth_tr[5] = bcth_tr[5] + "<td>" + "SCK" + "</td>";
                    bcth_tr[6] = bcth_tr[6] + "<td>" + "PT" + "</td>";
                    bcth_tr[7] = bcth_tr[7] + "<td>" + "Total" + "</td>";
                }
                agi_w_tong = agi_w_tong + agi_w;
                dam_w_tong = dam_w_tong + dam_w;
                dhl_w_tong = dhl_w_tong + dhl_w;
                ei_w_tong = ei_w_tong + ei_w;
                sck_w_tong = sck_w_tong + sck_w;
                pt_w_tong = pt_w_tong + pt_w;
                bcth_tr[0] = bcth_tr[0] + "<td>" + thang + "</td>";
                bcth_tr[1] = bcth_tr[1] + "<td class=\"bcth-solieu\">" + agi_w + "</td>";
                bcth_tr[2] = bcth_tr[2] + "<td class=\"bcth-solieu\">" + dam_w + "</td>";
                bcth_tr[3] = bcth_tr[3] + "<td class=\"bcth-solieu\">" + dhl_w + "</td>";
                bcth_tr[4] = bcth_tr[4] + "<td class=\"bcth-solieu\">" + ei_w + "</td>";
                bcth_tr[5] = bcth_tr[5] + "<td class=\"bcth-solieu\">" + sck_w + "</td>";
                bcth_tr[6] = bcth_tr[6] + "<td class=\"bcth-solieu\">" + pt_w + "</td>";
                bcth_tr[7] = bcth_tr[7] + "<td class=\"bcth-solieu\">" + (agi_w + dam_w + dhl_w + ei_w + sck_w + pt_w) + "</td>";

                if ($(this).is(':last-child')) {
                    bcth_tr[0] = bcth_tr[0] + "<td>" + "GrandTotal" + "</td>";
                    bcth_tr[1] = bcth_tr[1] + "<td class=\"bcth-solieu\">" + agi_w_tong + "</td>";
                    bcth_tr[2] = bcth_tr[2] + "<td class=\"bcth-solieu\">" + dam_w_tong + "</td>";
                    bcth_tr[3] = bcth_tr[3] + "<td class=\"bcth-solieu\">" + dhl_w_tong + "</td>";
                    bcth_tr[4] = bcth_tr[4] + "<td class=\"bcth-solieu\">" + ei_w_tong + "</td>";
                    bcth_tr[5] = bcth_tr[5] + "<td class=\"bcth-solieu\">" + sck_w_tong + "</td>";
                    bcth_tr[6] = bcth_tr[6] + "<td class=\"bcth-solieu\">" + pt_w_tong + "</td>";
                    bcth_tr[7] = bcth_tr[7] + "<td class=\"bcth-solieu\">" + (agi_w_tong + dam_w_tong + dhl_w_tong + ei_w_tong + sck_w_tong + pt_w_tong) + "</td>";
                    for (var i = 0; i < bcth_tr.length; i++) {
                        $("#tbl-bcth-ecsaf tbody").append("<tr>" + bcth_tr[i] + "</tr>");
                    }
                    check = 0;
                }
                //
                agi.push({ label: thang, y: agi_w });
                dam.push({ label: thang, y: dam_w });
                dhl.push({ label: thang, y: dhl_w });
                ei.push({ label: thang, y: ei_w });
                sck.push({ label: thang, y: sck_w });
                pt.push({ label: thang, y: pt_w });

            })
            
            $("#xbc-tbl-icsaf tbody tr").each(function () {
                thang = $(this).find(".thang").text();
                agi_w = parseFloat($(this).find(".agi").text());
                dam_w = parseFloat($(this).find(".dam").text());
                dhl_w = parseFloat($(this).find(".dhl").text());
                ei_w = parseFloat($(this).find(".ei").text());

                //
                if (check == 0) {
                    bcth_tr = [];
                    check = 1;
                }
                if ($(this).is(':first-child')) {
                    agi_w_tong = 0;
                    dam_w_tong = 0;
                    dhl_w_tong = 0;
                    ei_w_tong = 0;
                    bcth_tr[0] += "<td>" + "FWDs" + "</td>";
                    bcth_tr[1] += "<td>" + "AGI" + "</td>";
                    bcth_tr[2] += "<td>" + "DAM" + "</td>";
                    bcth_tr[3] += "<td>" + "DHL" + "</td>";
                    bcth_tr[4] += "<td>" + "EI" + "</td>";

                    bcth_tr[5] = bcth_tr[5] + "<td>" + "Total" + "</td>";
                }
                agi_w_tong += agi_w;
                dam_w_tong += dam_w;
                dhl_w_tong += dhl_w;
                ei_w_tong += ei_w;

                bcth_tr[0] += "<td>" + thang + "</td>";
                bcth_tr[1] += "<td class=\"bcth-solieu\">" + agi_w.toFixed(2) + "</td>";
                bcth_tr[2] += "<td class=\"bcth-solieu\">" + dam_w.toFixed(2) + "</td>";
                bcth_tr[3] += "<td class=\"bcth-solieu\">" + dhl_w.toFixed(2) + "</td>";
                bcth_tr[4] += "<td class=\"bcth-solieu\">" + ei_w.toFixed(2) + "</td>";

                bcth_tr[5] += "<td>" + (agi_w + dam_w + dhl_w + ei_w).toFixed(2) + "</td>";

                if ($(this).is(':last-child')) {
                    
                    bcth_tr[0] += "<td>" + "GrandTotal" + "</td>";
                    bcth_tr[1] += "<td class=\"bcth-solieu\">" + agi_w_tong.toFixed(2) + "</td>";
                    bcth_tr[2] += "<td class=\"bcth-solieu\">" + dam_w_tong.toFixed(2) + "</td>";
                    bcth_tr[3] += "<td class=\"bcth-solieu\">" + dhl_w_tong.toFixed(2) + "</td>";
                    bcth_tr[4] += "<td class=\"bcth-solieu\">" + ei_w_tong.toFixed(2) + "</td>";

                    bcth_tr[5] += "<td>" + (agi_w_tong + dam_w_tong + dhl_w_tong + ei_w_tong).toFixed(2) + "</td>";
                    for (var i = 0; i < bcth_tr.length; i++) {
                        $("#tbl-bcth-icsaf tbody").append("<tr>" + bcth_tr[i] + "</tr>");
                    }
                    check = 0;
                }
                //
                agi_i.push({ label: thang, y: agi_w });
                dam_i.push({ label: thang, y: dam_w });
                dhl_i.push({ label: thang, y: dhl_w });
                ei_i.push({ label: thang, y: ei_w });

            })

            var es_thang = "";
            var es_amount = "";
            var es_sum = 0;
            $("#xbc-tbl-es tbody tr").each(function () {
                thang = $(this).find(".thang").text();
                var amount = parseFloat($(this).find(".amount").text());
                if ($(this).is(':first-child')) {
                    es_thang += "<td>" + "NO" + "</td>";
                    es_amount += "<td>" + "Amount" + "</td>";
                }
                es_sum = es_sum + amount;
                es_thang += "<td>" + thang + "</td>";
                es_amount += "<td class=\"bcth-solieu\">" + amount + "</td>";
                if ($(this).is(':last-child')) {
                    es_thang += "<td>" + "Total" + "</td>";
                    es_amount += "<td class=\"bcth-solieu\">" + es_sum + "</td>";

                    $("#tbl-bcth-es tbody").append("<tr>" + es_thang + "</tr>" + "<tr>" + es_amount + "</tr>");

                }
                es.push({ label: thang, y: amount });
            })

            $("#xbc-tbl-ewh tbody tr.thang-" + thang_now + " td").not(":first").each(function () {
                ewh_ten = $(this).attr("ten").toUpperCase();
                ewh_value = parseFloat($(this).text());
                ewh.push({ label: ewh_ten, y: ewh_value })
            })
            var acs = 0;
            var alsc = 0;
            var mfs = 0;
            var ncts = 0;
            var acs_tong = 0;
            var alsc_tong = 0;
            var mfs_tong = 0;
            var ncts_tong = 0;

            $("#xbc-tbl-ewh tbody tr").each(function () {
                thang = $(this).find(".thang").text();
                acs = getgiatrifloat($(this).find(".asc").text());
                alsc = getgiatrifloat($(this).find(".alsc").text());
                mfs = getgiatrifloat($(this).find(".mfs").text());
                ncts = getgiatrifloat($(this).find(".ncts").text());
                //
                if (check == 0) {
                    bcth_tr = [];
                    check = 1;
                }
                if ($(this).is(':first-child')) {

                    bcth_tr[0] = bcth_tr[0] + "<td>" + "WH\Weight" + "</td>";
                    bcth_tr[1] = bcth_tr[1] + "<td>" + "ACS" + "</td>";
                    bcth_tr[2] = bcth_tr[2] + "<td>" + "ALSC" + "</td>";
                    bcth_tr[3] = bcth_tr[3] + "<td>" + "MSF" + "</td>";
                    bcth_tr[4] = bcth_tr[4] + "<td>" + "NCTS" + "</td>";
                    bcth_tr[5] = bcth_tr[5] + "<td>" + "Total" + "</td>";
                }
                acs_tong = acs_tong + acs;
                alsc_tong = alsc_tong + alsc;
                mfs_tong = mfs_tong + mfs;
                ncts_tong = ncts_tong + ncts;

                bcth_tr[0] = bcth_tr[0] + "<td>" + thang + "</td>";
                bcth_tr[1] = bcth_tr[1] + "<td class=\"bcth-solieu\">" + acs + "</td>";
                bcth_tr[2] = bcth_tr[2] + "<td class=\"bcth-solieu\">" + alsc + "</td>";
                bcth_tr[3] = bcth_tr[3] + "<td class=\"bcth-solieu\">" + mfs + "</td>";
                bcth_tr[4] = bcth_tr[4] + "<td class=\"bcth-solieu\">" + ncts + "</td>";

                bcth_tr[5] = bcth_tr[5] + "<td class=\"bcth-solieu\">" + (acs + alsc + mfs + ncts) + "</td>";

                if ($(this).is(':last-child')) {
                    bcth_tr[0] = bcth_tr[0] + "<td>" + "GrandTotal" + "</td>";
                    bcth_tr[1] = bcth_tr[1] + "<td class=\"bcth-solieu\">" + acs_tong + "</td>";
                    bcth_tr[2] = bcth_tr[2] + "<td class=\"bcth-solieu\">" + alsc_tong + "</td>";
                    bcth_tr[3] = bcth_tr[3] + "<td class=\"bcth-solieu\">" + mfs_tong + "</td>";
                    bcth_tr[4] = bcth_tr[4] + "<td class=\"bcth-solieu\">" + ncts_tong + "</td>";

                    bcth_tr[5] = bcth_tr[5] + "<td class=\"bcth-solieu\">" + (acs_tong + alsc_tong + mfs_tong + ncts_tong) + "</td>";
                    for (var i = 0; i < bcth_tr.length; i++) {
                        $("#tbl-bcth-ewh tbody").append("<tr>" + bcth_tr[i] + "</tr>");
                    }
                    check = 0;
                }
                //
            })
            ewh_tenthang = $("#sl-ewh-thang option:selected").text();
            edmonth_tenthang = $("#sl-edmonth-thang option:selected").text();
            $("div#div-bcth-ewh").on("change", "#sl-ewh-thang", function () {

                var g_thang = $("#sl-ewh-thang").val();
                ewh_tenthang = $("#sl-ewh-thang option:selected").text();
                ewh = [];
                $("#xbc-tbl-ewh tbody tr.thang-" + g_thang + " td").not(":first").each(function () {
                    ewh_ten = $(this).attr("ten").toUpperCase();
                    ewh_value = parseFloat($(this).text());
                    ewh.push({ label: ewh_ten, y: ewh_value })
                })
                var chartewh = new CanvasJS.Chart("chartewh", {
                    theme: "theme1",
                    title: {
                        text: "Export cargo statistics according WH " + ewh_tenthang + "-" + bcth_nam,
                        fontSize: 30
                    },
                    exportEnabled: true,
                    animationEnabled: true,
                    animationDuration: 500,

                    toolTip: {
                        shared: true
                    },

                    legend: {
                        fontSize: 14,
                    },
                    data: [
                    {
                        type: "pie",
                        showInLegend: true,
                        toolTipContent: "{y} - #percent%",
                        indexLabel: "#percent%",
                        indexLabelPlacement: "outside",
                        percentFormatString: "#0.##",
                        yValueFormatString: "#,##,###.##",
                        legendText: "{label}",
                        dataPoints: ewh
                    }
                    ]
                });
                chartewh.render();

                return false;
            })

            $("div#div-bcth-edmonth").on("change", "#sl-edmonth-thang", function () {

                var g_thang = $("#sl-edmonth-thang").val();
                edmonth_tenthang = $("#sl-edmonth-thang option:selected").text();
                edmonth = [];
                $("#xbc-tbl-edmonth tbody tr").each(function () {
                    des = $(this).find(".des").text();
                    trongluong = parseFloat($(this).find(".trongluong").text());
                    thang = $(this).find(".thang").text();

                    if (parseInt(thang) == g_thang) {
                        edmonth.push({ label: des, y: trongluong });
                    }

                })
                var chartedmonth = new CanvasJS.Chart("chartedmonth", {

                    title: {
                        text: "EXPORT CARGO STATISTICS ACCORDING DESTINATION  " + edmonth_tenthang + "-" + bcth_nam,
                        fontSize: 30
                    },
                    animationEnabled: true,
                    animationDuration: 3000,
                    dataPointMaxWidth: 3,
                    toolTip: {
                        shared: true
                    },
                    exportEnabled: true,
                    axisX: {
                        labelAngle: -90,
                        labelFontSize: 7,
                        interval: 1
                    },
                    axisY: {
                        //valueFormatString: "#,##,###.##",
                        labelFontSize: 14,

                        //stripLines: [
                        //{
                        //    startValue: 0,
                        //    endValue: bc_cando_avg,
                        //    color: "#d8d8d8"
                        //}
                        //],
                    },
                    legend: {
                        fontSize: 14,
                    },
                    data: [
                    {
                        indexLabel: "{y}",
                        indexLabelPlacement: "outside",
                        indexLabelOrientation: "vertical",
                        indexLabelFontSize: 10,
                        indexLabelFontWeight: "bold",
                        indexLabelFontColor: "red",
                        type: "column",
                        name: "EXPORT",
                        dataPoints: edmonth
                    }
                    ]
                });
                chartedmonth.render();

                return false;
            })
            $("div#div-bcth table.table tr:first-child").addClass("tr-todam");
            $("div#div-bcth table.table tr:last-child").addClass("tr-todam tr-todo");
            $(".bcth-solieu").number(true);

        })

        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        window.onload = function () {
            bcth_nam = getParameterByName("Nam");
            if (bcth_nam == "") {
                bcth_nam = dt.getFullYear();
            }
            //canhang
            var chartsow = new CanvasJS.Chart("chartsow", {
                title: {
                    text: "SUM OF WEIGHT (EXPORT AND IMPORT) " + bcth_nam,
                    fontSize: 30
                },
                exportEnabled: true,
                animationEnabled: true,
                animationDuration: 2000,
                toolTip: {
                    shared: true
                },
                axisX: {
                    //labelAngle: -45,
                    labelFontSize: 14
                },
                axisY: {
                    valueFormatString: "#,##,###.##",
                    labelFontSize: 14,

                    //stripLines: [
                    //{
                    //    startValue: 0,
                    //    endValue: bc_cando_avg,
                    //    color: "#d8d8d8"
                    //}
                    //],
                },
                legend: {
                    fontSize: 14,
                },
                data: [
                {
                    indexLabel: "{y}",
                    indexLabelPlacement: "outside",
                    indexLabelFontSize: 14,
                    indexLabelFontWeight: "bold",
                    indexLabelFontColor: "red",

                    legendText: "EXPORT",
                    showInLegend: true,
                    type: "column",
                    name: "EXPORT",
                    dataPoints: ex
                },
                {
                    indexLabel: "{y}",
                    indexLabelPlacement: "outside",
                    indexLabelFontSize: 14,
                    indexLabelFontWeight: "bold",
                    indexLabelFontColor: "red",
                    legendText: "IMPORT",
                    showInLegend: true,
                    type: "column",
                    name: "IMPORT",
                    dataPoints: im
                }
                ]
            });
            var chartecsaf = new CanvasJS.Chart("chartecsaf", {

                title: {
                    text: "EXPORT CARGO STATISTICS ACCORDING FWDS " + bcth_nam,
                    fontSize: 30
                },
                animationEnabled: true,
                animationDuration: 3000,
                dataPointMaxWidth: 13,

                exportEnabled: true,
                toolTip: {
                    shared: true
                },
                axisX: {
                    //labelAngle: -45,
                    labelFontSize: 14
                },
                axisY: {
                    valueFormatString: "#,##,###.##",
                    labelFontSize: 14,

                    //stripLines: [
                    //{
                    //    startValue: 0,
                    //    endValue: bc_cando_avg,
                    //    color: "#d8d8d8"
                    //}
                    //],
                },
                legend: {
                    fontSize: 14,
                },
                data: [
                {
                    indexLabel: "{y}",
                    indexLabelPlacement: "outside",
                    indexLabelOrientation: "vertical",
                    indexLabelFontSize: 14,
                    indexLabelFontWeight: "bold",
                    indexLabelFontColor: "red",
                    indexLabelAngle: 90,
                    legendText: "AGI",
                    showInLegend: true,
                    type: "column",
                    name: "AGI",
                    dataPoints: agi
                },
               {
                   indexLabel: "{y}",
                   indexLabelPlacement: "outside",
                   indexLabelOrientation: "vertical",
                   indexLabelFontSize: 14,
                   indexLabelFontWeight: "bold",
                   indexLabelFontColor: "red",
                   legendText: "DAM",
                   showInLegend: true,
                   type: "column",
                   name: "DAM",
                   dataPoints: dam
               },
               {
                   indexLabel: "{y}",
                   indexLabelPlacement: "outside",
                   indexLabelOrientation: "vertical",
                   indexLabelFontSize: 14,
                   indexLabelFontWeight: "bold",
                   indexLabelFontColor: "red",
                   legendText: "DHL",
                   showInLegend: true,
                   type: "column",
                   name: "DHL",
                   dataPoints: dhl
               },
               {
                   indexLabel: "{y}",
                   indexLabelPlacement: "outside",
                   indexLabelOrientation: "vertical",
                   indexLabelFontSize: 14,
                   indexLabelFontWeight: "bold",
                   indexLabelFontColor: "red",
                   legendText: "EI",
                   showInLegend: true,
                   type: "column",
                   name: "EI",
                   dataPoints: ei
               },
               {
                   indexLabel: "{y}",
                   indexLabelPlacement: "outside",
                   indexLabelOrientation: "vertical",
                   indexLabelFontSize: 14,
                   indexLabelFontWeight: "bold",
                   indexLabelFontColor: "red",
                   legendText: "SCK",
                   showInLegend: true,
                   type: "column",
                   name: "SCK",
                   dataPoints: sck
               }
               ,
               {
                   indexLabel: "{y}",
                   indexLabelPlacement: "outside",
                   indexLabelOrientation: "vertical",
                   indexLabelFontSize: 14,
                   indexLabelFontWeight: "bold",
                   indexLabelFontColor: "red",
                   legendText: "PT",
                   showInLegend: true,
                   type: "column",
                   name: "PT",
                   dataPoints: pt
               }
                ]
            });
            var charticsaf = new CanvasJS.Chart("charticsaf", {

                title: {
                    text: "IMPORT CARGO STATISTICS ACCORDING FWDS " + thang_now + "-" + bcth_nam,
                    fontSize: 30
                },
                animationEnabled: true,
                animationDuration: 3000,
                dataPointMaxWidth: 13,
                exportEnabled: true,
                toolTip: {
                    shared: true
                },
                axisX: {
                    //labelAngle: -45,
                    labelFontSize: 14
                },
                axisY: {
                    valueFormatString: "#,##,###.##",
                    labelFontSize: 14,

                    //stripLines: [
                    //{
                    //    startValue: 0,
                    //    endValue: bc_cando_avg,
                    //    color: "#d8d8d8"
                    //}
                    //],
                },
                legend: {
                    fontSize: 14,
                },
                data: [
                {
                    indexLabel: "{y}",
                    indexLabelPlacement: "outside",
                    indexLabelOrientation: "vertical",
                    indexLabelFontSize: 14,
                    indexLabelFontWeight: "bold",
                    indexLabelFontColor: "red",
                    indexLabelAngle: 90,
                    legendText: "AGI",
                    showInLegend: true,
                    type: "column",
                    name: "AGI",
                    dataPoints: agi_i
                },
               //{
               //    indexLabel: "{y}",
               //    indexLabelPlacement: "outside",
               //    indexLabelOrientation: "vertical",
               //    indexLabelFontSize: 14,
               //    indexLabelFontWeight: "bold",
               //    indexLabelFontColor: "red",
               //    legendText: "DAM",
               //    showInLegend: true,
               //    type: "column",
               //    name: "DAM",
               //    dataPoints: dam_i
               //},
               {
                   indexLabel: "{y}",
                   indexLabelPlacement: "outside",
                   indexLabelOrientation: "vertical",
                   indexLabelFontSize: 14,
                   indexLabelFontWeight: "bold",
                   indexLabelFontColor: "red",
                   legendText: "DHL",
                   showInLegend: true,
                   type: "column",
                   name: "DHL",
                   dataPoints: dhl_i
               },
               {
                   indexLabel: "{y}",
                   indexLabelPlacement: "outside",
                   indexLabelOrientation: "vertical",
                   indexLabelFontSize: 14,
                   indexLabelFontWeight: "bold",
                   indexLabelFontColor: "red",
                   legendText: "EI",
                   showInLegend: true,
                   type: "column",
                   name: "EI",
                   dataPoints: ei_i
               }
                ]
            });
            var chartewh = new CanvasJS.Chart("chartewh", {
                theme: "theme1",
                title: {
                    text: "Export cargo statistics according WH " + ewh_tenthang + "-" + bcth_nam,
                    fontSize: 30
                },
                exportEnabled: true,
                animationEnabled: true,
                animationDuration: 1000,

                toolTip: {
                    shared: true
                },

                legend: {
                    fontSize: 14,
                },
                data: [
                {
                    type: "pie",
                    showInLegend: true,
                    toolTipContent: "{y} - #percent%",
                    indexLabel: "#percent%",
                    indexLabelPlacement: "outside",
                    percentFormatString: "#0.##",
                    yValueFormatString: "#,##,###.##",
                    legendText: "{label}",
                    dataPoints: ewh
                }
                ]
            });

            //
            var chartes = new CanvasJS.Chart("chartes", {

                title: {
                    text: "EXPORT CARGO STATISTICS ACCORDING STORAGE CHARGE " + bcth_nam,
                    fontSize: 30
                },
                exportEnabled: true,
                animationEnabled: true,
                animationDuration: 3000,
                //dataPointMaxWidth: 13,
                toolTip: {
                    shared: true
                },
                axisX: {
                    //labelAngle: -45,
                    labelFontSize: 14
                },
                axisY: {
                    //valueFormatString: "#,##,###.##",
                    labelFontSize: 14,

                    //stripLines: [
                    //{
                    //    startValue: 0,
                    //    endValue: bc_cando_avg,
                    //    color: "#d8d8d8"
                    //}
                    //],
                },
                legend: {
                    fontSize: 14,
                },
                data: [
                {
                    indexLabel: "{y}",
                    indexLabelPlacement: "outside",
                    indexLabelFontSize: 14,
                    indexLabelFontWeight: "bold",
                    indexLabelFontColor: "red",
                    type: "column",
                    name: "STORAGE",
                    dataPoints: es
                }
                ]
            });

            var chartea = new CanvasJS.Chart("chartea", {

                title: {
                    text: "EXPORT CARGO STATISTICS ACCORDING AIRLINES " + bcth_nam,
                    fontSize: 30
                },
                exportEnabled: true,
                animationEnabled: true,
                animationDuration: 3000,
                dataPointMaxWidth: 10,
                toolTip: {
                    shared: true
                },
                axisX: {
                    //labelAngle: -45,
                    labelFontSize: 14
                },
                axisY: {
                    //valueFormatString: "#,##,###.##",
                    labelFontSize: 14,

                    //stripLines: [
                    //{
                    //    startValue: 0,
                    //    endValue: bc_cando_avg,
                    //    color: "#d8d8d8"
                    //}
                    //],
                },
                legend: {
                    fontSize: 14,
                },
                data: [
                {
                    indexLabel: "{y}",
                    indexLabelPlacement: "outside",
                    indexLabelOrientation: "vertical",
                    indexLabelFontSize: 14,
                    indexLabelFontWeight: "bold",
                    indexLabelFontColor: "red",
                    type: "column",
                    name: "EXPORT",
                    dataPoints: ea
                }
                ]
            });
            //
            var chartia = new CanvasJS.Chart("chartia", {

                title: {
                    text: "IMPORT CARGO STATISTICS ACCORDING AIRLINES " + bcth_nam,
                    fontSize: 30
                },
                exportEnabled: true,
                animationEnabled: true,
                animationDuration: 3000,
                dataPointMaxWidth: 10,
                toolTip: {
                    shared: true
                },
                axisX: {
                    //labelAngle: -45,
                    labelFontSize: 14
                },
                axisY: {
                    //valueFormatString: "#,##,###.##",
                    labelFontSize: 14,

                    //stripLines: [
                    //{
                    //    startValue: 0,
                    //    endValue: bc_cando_avg,
                    //    color: "#d8d8d8"
                    //}
                    //],
                },
                legend: {
                    fontSize: 14,
                },
                data: [
                {
                    indexLabel: "{y}",
                    indexLabelPlacement: "outside",
                    indexLabelOrientation: "vertical",
                    indexLabelFontSize: 14,
                    indexLabelFontWeight: "bold",
                    indexLabelFontColor: "red",
                    type: "column",
                    name: "IMPORT",
                    dataPoints: ia
                }
                ]
            });
            //
            var chartedyear = new CanvasJS.Chart("chartedyear", {

                title: {
                    text: "EXPORT CARGO STATISTICS ACCORDING DESTINATION " + bcth_nam,
                    fontSize: 30
                },
                exportEnabled: true,
                animationEnabled: true,
                animationDuration: 3000,
                dataPointMaxWidth: 5,
                toolTip: {
                    shared: true
                },
                axisX: {
                    labelAngle: -90,
                    labelFontSize: 9,
                    interval: 1
                },
                axisY: {
                    //valueFormatString: "#,##,###.##",
                    labelFontSize: 14,

                    //stripLines: [
                    //{
                    //    startValue: 0,
                    //    endValue: bc_cando_avg,
                    //    color: "#d8d8d8"
                    //}
                    //],
                },
                legend: {
                    fontSize: 14,
                },
                data: [
                {
                    indexLabel: "{y}",
                    indexLabelPlacement: "outside",
                    indexLabelOrientation: "vertical",
                    indexLabelFontSize: 9,
                    //indexLabelFontWeight: "bold",
                    indexLabelFontColor: "red",
                    type: "column",
                    name: "EXPORT",
                    dataPoints: edyear
                }
                ]
            });
            var chartedmonth = new CanvasJS.Chart("chartedmonth", {

                title: {
                    text: "EXPORT CARGO STATISTICS ACCORDING DESTINATION  " + edmonth_tenthang + "-" + bcth_nam,
                    fontSize: 30
                },
                exportEnabled: true,
                animationEnabled: true,
                animationDuration: 3000,
                dataPointMaxWidth: 7,
                toolTip: {
                    shared: true
                },
                axisX: {
                    labelAngle: -90,
                    labelFontSize: 12,
                    interval: 1
                },
                axisY: {
                    //valueFormatString: "#,##,###.##",
                    labelFontSize: 14,

                    //stripLines: [
                    //{
                    //    startValue: 0,
                    //    endValue: bc_cando_avg,
                    //    color: "#d8d8d8"
                    //}
                    //],
                },
                legend: {
                    fontSize: 14,
                },
                data: [
                {
                    indexLabel: "{y}",
                    indexLabelPlacement: "outside",
                    indexLabelOrientation: "vertical",
                    indexLabelFontSize: 12,
                    //indexLabelFontWeight: "bold",
                    indexLabelFontColor: "red",
                    type: "column",
                    name: "EXPORT",
                    dataPoints: edmonth
                }
                ]
            });
            chartsow.render();
            chartecsaf.render();
            charticsaf.render();
            chartewh.render();
            chartes.render();
            chartea.render();
            chartia.render();
            chartedyear.render();
            chartedmonth.render();
        }
        function getgiatrifloat(text) {
            var v = 0;
            if (text != "") {
                v = parseFloat(text);
            }
            return v;
        }
    </script>
</asp:Content>