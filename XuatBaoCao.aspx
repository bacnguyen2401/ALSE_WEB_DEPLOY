<%@ Page Title="XUẤT BÁO CÁO" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" EnableViewState="false" CodeBehind="XuatBaoCao.aspx.cs" Inherits="ALSE.XuatBaoCao" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        .td-bg-red {
            background-color: red;
        }

        .col-lg-12 {
            min-width: 1200px;
            width: auto;
        }

        .td-dam {
            font-weight: bold;
        }

        .ddltenbc {
            width: 300px;
            float: left;
            margin-right: 20px;
        }

        .ddlfwd {
            width: 100px;
        }

        #sp-tungay {
            float: left;
            margin-right: 10px;
            margin-top: 5px;
        }

        .tungay {
            width: 150px;
            float: left;
            margin-right: 20px;
        }

        #sp-denngay {
            float: left;
            margin-right: 10px;
            margin-top: 5px;
        }

        .denngay {
            width: 150px;
            float: left;
            margin-right: 20px;
        }

        .div-menu {
            margin-top: 20px;
        }
        /*.KdataTablesXBC tbody tr:hover {
            background-color: red;
        }*/
    </style>
    <script type="text/javascript">
        var data_chart_sow = [];
        var ex = [];
        var im = [];
        var sow = [];
        var ex_i;
        var im_i;
        $(document).ready(function () {

            var gbaocao = getParameterByName("BaoCao");

            if (gbaocao == 5 || gbaocao == 6 || gbaocao == 7 || gbaocao == 8) {
                $(".tbl-tl").removeClass("KdataTablesXBC");

            }

            $('.KdataTablesXBC').DataTable({
                "responsive": true,
                "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                "iDisplayLength": -1,

            });
            var dt = new Date();
            var thang_now = dt.getMonth() + 1;
            var thang;
            var trongluong;
            var loai;

            $("#xbc-tbl-sow tbody tr").each(function () {
                thang = $(this).find(".thang").text();
                xuat = parseFloat($(this).find(".xuat").text());
                nhap = parseFloat($(this).find(".nhap").text());
                ex.push({ label: thang, y: xuat });
                im.push({ label: thang, y: nhap });


            })

        })


        //
        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        var tableToExcel = (function () {
            var uri = 'data:application/vnd.ms-excel;base64,'
                , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines /></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
                , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
                , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
            return function (table, name) {
                if (!table.nodeType) table = document.getElementById(table)
                var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
                window.location.href = uri + base64(format(template, ctx))
            }
        })()
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div style="width: 1170px; height: 110px; margin-bottom: 5px; background-color: white; padding-top: 10px; padding-left: 10px;">
        <asp:DropDownList ID="ddlTenBC" CssClass="ddltenbc form-control" runat="server">
            <asp:ListItem Value="1">Thống Kê Giám Sát</asp:ListItem>
            <asp:ListItem Value="2">Thống Kê Theo DEST</asp:ListItem>
            <asp:ListItem Value="11">Thống Kê Theo DEST(2)</asp:ListItem>
            <asp:ListItem Value="3">Thống Kê Thời Gian Chờ Xe</asp:ListItem>
            <asp:ListItem Value="4">Thống Kê SOP(IMP)</asp:ListItem>
            <asp:ListItem Value="17">Thống Kê SOP(IMP) - ALSC</asp:ListItem>
            <asp:ListItem Value="15">Thống Kê SOP(EXP)</asp:ListItem>
            <asp:ListItem Value="16">Thống Kê SOP(EXP) - ALSC</asp:ListItem>
            <asp:ListItem Value="5">SUM OF WEIGHT(FLT)</asp:ListItem>
            <asp:ListItem Value="6">Export cargo statistics according FWDs and DES</asp:ListItem>
            <asp:ListItem Value="7">Import cargo statistics according FWDs</asp:ListItem>
            <asp:ListItem Value="8">TRUCKING REPORT</asp:ListItem>
            <asp:ListItem Value="9">Thống Kê Sản Lượng Lưu Kho</asp:ListItem>
            <asp:ListItem Value="10">Thống Kê Sản Lượng Xuất Theo Mã Kho</asp:ListItem>
            <%--<asp:ListItem Value="HT-IMEXCO-HSD">(Hàng Thường) Thống Kê Hạn Sử dụng IMEXCO</asp:ListItem>--%>
        </asp:DropDownList>
        <span id="sp-tungay">Từ Ngày:</span>
        <asp:TextBox ID="txtTuNgay" runat="server" CssClass="tungay datepicker form-control"></asp:TextBox>
        <span id="sp-denngay">Đến Ngày:</span>
        <asp:TextBox ID="txtDenNgay" runat="server" CssClass="denngay datepicker form-control"></asp:TextBox>

        <asp:DropDownList ID="ddlFWD1" CssClass="ddlfwd form-control" runat="server">
            <asp:ListItem Value="ALL">ALL</asp:ListItem>
            <asp:ListItem Value="AGI">AGI</asp:ListItem>
            <asp:ListItem Value="ALP">ALP</asp:ListItem>
            <asp:ListItem Value="ALSDS">ALSDS</asp:ListItem>
            <asp:ListItem Value="APEX">APEX</asp:ListItem>
            <asp:ListItem Value="APEX.LENS">APEX.LENS</asp:ListItem>
            <asp:ListItem Value="APL">APL</asp:ListItem>
            <asp:ListItem Value="APL.ITM">APL.ITM</asp:ListItem>
            <asp:ListItem Value="APS">APS</asp:ListItem>
            <asp:ListItem Value="APX">APX</asp:ListItem>
            <asp:ListItem Value="APX.APL">APX.APL</asp:ListItem>
            <asp:ListItem Value="APX.ASUS">APX.ASUS</asp:ListItem>
            <asp:ListItem Value="APX.FH">APX.FH</asp:ListItem>
            <asp:ListItem Value="APX.FS">APX.FS</asp:ListItem>
            <asp:ListItem Value="APX.FUH">APX.FUH</asp:ListItem>
            <asp:ListItem Value="APX.GTK">APX.GTK</asp:ListItem>
            <asp:ListItem Value="APX.LIO">APX.LIO</asp:ListItem>
            <asp:ListItem Value="APX.TRI">APX.TRI</asp:ListItem>
            <asp:ListItem Value="BOL">BOL</asp:ListItem>
            <asp:ListItem Value="DAM">DAM</asp:ListItem>
            <asp:ListItem Value="DHL">DHL</asp:ListItem>
            <asp:ListItem Value="DHL.APL">DHL.APL</asp:ListItem>
            <asp:ListItem Value="DHL.CPL">DHL.CPL</asp:ListItem>
            <asp:ListItem Value="DHL.CPL.APL">DHL.CPL.APL</asp:ListItem>
            <asp:ListItem Value="DHL.CPL.FUN">DHL.CPL.FUN</asp:ListItem>
            <asp:ListItem Value="DHL.CPL.LXNA">DHL.CPL.LXNA</asp:ListItem>
            <asp:ListItem Value="DHL.CT">DHL.CT</asp:ListItem>
            <asp:ListItem Value="DHL.DELL">DHL.DELL</asp:ListItem>
            <asp:ListItem Value="DHL.ELT">DHL.ELT</asp:ListItem>
            <asp:ListItem Value="DHL.FN">DHL.FN</asp:ListItem>
            <asp:ListItem Value="DHL.FUHONG">DHL.FUHONG</asp:ListItem>
            <asp:ListItem Value="DHL.FUN">DHL.FUN</asp:ListItem>
            <asp:ListItem Value="DHL.FUN.CPL">DHL.FUN.CPL</asp:ListItem>
            <asp:ListItem Value="DHL.GG">DHL.GG</asp:ListItem>
            <asp:ListItem Value="DHL.HT">DHL.HT</asp:ListItem>
            <asp:ListItem Value="DHL.ICT">DHL.ICT</asp:ListItem>
            <asp:ListItem Value="DHL.ICT.NA">DHL.ICT.NA</asp:ListItem>
            <asp:ListItem Value="DHL.LG">DHL.LG</asp:ListItem>
            <asp:ListItem Value="DHL.LXNA">DHL.LXNA</asp:ListItem>
            <asp:ListItem Value="DHL.NK">DHL.NK</asp:ListItem>
            <asp:ListItem Value="DHL.NPI">DHL.NPI</asp:ListItem>
            <asp:ListItem Value="DHL.SGN">DHL.SGN</asp:ListItem>
            <asp:ListItem Value="DHL.WIS">DHL.WIS</asp:ListItem>
            <asp:ListItem Value="DHL.WNC">DHL.WNC</asp:ListItem>
            <asp:ListItem Value="DOL">DOL</asp:ListItem>
            <asp:ListItem Value="DRV">DRV</asp:ListItem>
            <asp:ListItem Value="DSV">DSV</asp:ListItem>
            <asp:ListItem Value="E&E">E&E</asp:ListItem>
            <asp:ListItem Value="EDI">EDI</asp:ListItem>
            <asp:ListItem Value="EFL">EFL</asp:ListItem>
            <asp:ListItem Value="EFL.PEO">EFL.PEO</asp:ListItem>
            <asp:ListItem Value="EI">EI</asp:ListItem>
            <asp:ListItem Value="ETL">ETL</asp:ListItem>
            <asp:ListItem Value="FDI">FDI</asp:ListItem>
            <asp:ListItem Value="FDI.DHL">FDI.DHL</asp:ListItem>
            <asp:ListItem Value="FDI.FS">FDI.FS</asp:ListItem>
            <asp:ListItem Value="FDI.HTNS">FDI.HTNS</asp:ListItem>
            <asp:ListItem Value="FDI.KGL">FDI.KGL</asp:ListItem>
            <asp:ListItem Value="FDI.KOR">FDI.KOR</asp:ListItem>
            <asp:ListItem Value="FDI.SEA">FDI.SEA</asp:ListItem>
            <asp:ListItem Value="FDI.TRUCK">FDI.TRUCK</asp:ListItem>
            <asp:ListItem Value="FDI.USCOM">FDI.USCOM</asp:ListItem>
            <asp:ListItem Value="GLS">GLS</asp:ListItem>
            <asp:ListItem Value="HTNS">HTNS</asp:ListItem>
            <asp:ListItem Value="IIF">IIF</asp:ListItem>
            <asp:ListItem Value="JDA.FS">JDA.FS</asp:ListItem>
            <asp:ListItem Value="JDS.FS">JDS.FS</asp:ListItem>
            <asp:ListItem Value="KGL.YY">KGL.YY</asp:ListItem>
            <asp:ListItem Value="KN">KN</asp:ListItem>
            <asp:ListItem Value="KN.AA">KN.AA</asp:ListItem>
            <asp:ListItem Value="KN.APL">KN.APL</asp:ListItem>
            <asp:ListItem Value="KN.CPL">KN.CPL</asp:ListItem>
            <asp:ListItem Value="KN.FN">KN.FN</asp:ListItem>
            <asp:ListItem Value="KN.FS">KN.FS</asp:ListItem>
            <asp:ListItem Value="KN.FUN">KN.FUN</asp:ListItem>
            <asp:ListItem Value="KN.FUN.CPL">KN.FUN.CPL</asp:ListItem>
            <asp:ListItem Value="KN.FUN.LXNA">KN.FUN.LXNA</asp:ListItem>
            <asp:ListItem Value="KN.FUYU">KN.FUYU</asp:ListItem>
            <asp:ListItem Value="KN.GEMTEK">KN.GEMTEK</asp:ListItem>
            <asp:ListItem Value="KN.GTK">KN.GTK</asp:ListItem>
            <asp:ListItem Value="KN.ICT">KN.ICT</asp:ListItem>
            <asp:ListItem Value="KN.ICTNA">KN.ICTNA</asp:ListItem>
            <asp:ListItem Value="KN.LG">KN.LG</asp:ListItem>
            <asp:ListItem Value="KN.LXNA">KN.LXNA</asp:ListItem>
            <asp:ListItem Value="KN.NEWEB">KN.NEWEB</asp:ListItem>
            <asp:ListItem Value="KN.WIS">KN.WIS</asp:ListItem>
            <asp:ListItem Value="KWE">KWE</asp:ListItem>
            <asp:ListItem Value="KWE.MPL">KWE.MPL</asp:ListItem>
            <asp:ListItem Value="KWE.MS">KWE.MS</asp:ListItem>
            <asp:ListItem Value="KWE.PEGATRON">KWE.PEGATRON</asp:ListItem>
            <asp:ListItem Value="KWE.PEO">KWE.PEO</asp:ListItem>
            <asp:ListItem Value="KWE.RAM">KWE.RAM</asp:ListItem>
            <asp:ListItem Value="MLD">MLD</asp:ListItem>
            <asp:ListItem Value="MRK.FS">MRK.FS</asp:ListItem>
            <asp:ListItem Value="MS">MS</asp:ListItem>
            <asp:ListItem Value="N/A">N/A</asp:ListItem>
            <asp:ListItem Value="PAN">PAN</asp:ListItem>
            <asp:ListItem Value="PEN">PEN</asp:ListItem>
            <asp:ListItem Value="PEO">PEO</asp:ListItem>
            <asp:ListItem Value="PGL">PGL</asp:ListItem>
            <asp:ListItem Value="PGS">PGS</asp:ListItem>
            <asp:ListItem Value="PT">PT</asp:ListItem>
            <asp:ListItem Value="PT.AGI">PT.AGI</asp:ListItem>
            <asp:ListItem Value="PT.CAT">PT.CAT</asp:ListItem>
            <asp:ListItem Value="PT.CNW">PT.CNW</asp:ListItem>
            <asp:ListItem Value="PT.DAM">PT.DAM</asp:ListItem>
            <asp:ListItem Value="PT.DEX">PT.DEX</asp:ListItem>
            <asp:ListItem Value="PT.DHL">PT.DHL</asp:ListItem>
            <asp:ListItem Value="PT.DSV">PT.DSV</asp:ListItem>
            <asp:ListItem Value="PT.ECL">PT.ECL</asp:ListItem>
            <asp:ListItem Value="PT.ESG">PT.ESG</asp:ListItem>
            <asp:ListItem Value="PT.FDI">PT.FDI</asp:ListItem>
            <asp:ListItem Value="PT.GEO">PT.GEO</asp:ListItem>
            <asp:ListItem Value="PT.HEL">PT.HEL</asp:ListItem>
            <asp:ListItem Value="PT.JAS">PT.JAS</asp:ListItem>
            <asp:ListItem Value="PT.K&N">PT.K&N</asp:ListItem>
            <asp:ListItem Value="PT.KLA">PT.KLA</asp:ListItem>
            <asp:ListItem Value="PT.KN">PT.KN</asp:ListItem>
            <asp:ListItem Value="PT.KWE">PT.KWE</asp:ListItem>
            <asp:ListItem Value="PT.MAERSK">PT.MAERSK</asp:ListItem>
            <asp:ListItem Value="PT.ML">PT.ML</asp:ListItem>
            <asp:ListItem Value="PT.MOR">PT.MOR</asp:ListItem>
            <asp:ListItem Value="PT.MTL">PT.MTL</asp:ListItem>
            <asp:ListItem Value="PT.PANA">PT.PANA</asp:ListItem>
            <asp:ListItem Value="PT.PGL">PT.PGL</asp:ListItem>
            <asp:ListItem Value="PT.PTV">PT.PTV</asp:ListItem>
            <asp:ListItem Value="PT.RHE">PT.RHE</asp:ListItem>
            <asp:ListItem Value="PT.ROY">PT.ROY</asp:ListItem>
            <asp:ListItem Value="PT.SCK">PT.SCK</asp:ListItem>
            <asp:ListItem Value="PT.SDV">PT.SDV</asp:ListItem>
            <asp:ListItem Value="PT.T&M">PT.T&M</asp:ListItem>
            <asp:ListItem Value="PT.TICO">PT.TICO</asp:ListItem>
            <asp:ListItem Value="PT.TSL">PT.TSL</asp:ListItem>
            <asp:ListItem Value="PT.VNT">PT.VNT</asp:ListItem>
            <asp:ListItem Value="PT.WOO">PT.WOO</asp:ListItem>
            <asp:ListItem Value="PTD">PTD</asp:ListItem>
            <asp:ListItem Value="PTI">PTI</asp:ListItem>
            <asp:ListItem Value="PTI.GEO">PTI.GEO</asp:ListItem>
            <asp:ListItem Value="PTM">PTM</asp:ListItem>
            <asp:ListItem Value="SCK">SCK</asp:ListItem>
            <asp:ListItem Value="SCK.ABB">SCK.ABB</asp:ListItem>
            <asp:ListItem Value="SCK.APL">SCK.APL</asp:ListItem>
            <asp:ListItem Value="SCK.FUN">SCK.FUN</asp:ListItem>
            <asp:ListItem Value="SCK.ICT">SCK.ICT</asp:ListItem>
            <asp:ListItem Value="SCK.MTP">SCK.MTP</asp:ListItem>
            <asp:ListItem Value="SCK.SEA">SCK.SEA</asp:ListItem>
            <asp:ListItem Value="SCK.TXN">SCK.TXN</asp:ListItem>
            <asp:ListItem Value="SCK.UNG">SCK.UNG</asp:ListItem>
            <asp:ListItem Value="SCK.WIS">SCK.WIS</asp:ListItem>
            <asp:ListItem Value="SF">SF</asp:ListItem>
            <asp:ListItem Value="SF. WNC">SF. WNC</asp:ListItem>
            <asp:ListItem Value="SF.ENL">SF.ENL</asp:ListItem>
            <asp:ListItem Value="SF.JD">SF.JD</asp:ListItem>
            <asp:ListItem Value="SF.MTL">SF.MTL</asp:ListItem>
            <asp:ListItem Value="SF.WNC">SF.WNC</asp:ListItem>
            <asp:ListItem Value="SF.WNL">SF.WNL</asp:ListItem>
            <asp:ListItem Value="SF.WWNC">SF.WWNC</asp:ListItem>
            <asp:ListItem Value="SMK">SMK</asp:ListItem>
            <asp:ListItem Value="SONHA">SONHA</asp:ListItem>
            <asp:ListItem Value="TMC">TMC</asp:ListItem>
            <asp:ListItem Value="TRIN">TRIN</asp:ListItem>
            <asp:ListItem Value="ULI">ULI</asp:ListItem>
            <asp:ListItem Value="UNILO">UNILO</asp:ListItem>
            <asp:ListItem Value="WNC">WNC</asp:ListItem>
            <asp:ListItem Value="WPL">WPL</asp:ListItem>
            <asp:ListItem Value="WWP">WWP</asp:ListItem>
        </asp:DropDownList>

        <div class="div-menu">
            <asp:Button ID="btnShow" runat="server" Text="Show" CssClass="mani-btn btn btn-success" OnClick="btnShow_Click" />
            <input type="button" onclick="tableToExcel('tbl1', 'Báo Cáo')" value="Xuất Excel" class="mani-btn btn btn-info xuatex" />
        </div>



    </div>


    <!-- TBL-->
    <div class="row">

        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>THỐNG KÊ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl1" class="KdataTablesXBC table table-striped table-bordered table-hover tbl-tl">

                            <asp:Literal ID="ltrTB" runat="server"></asp:Literal>
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
    <div class="xbc-hidden">
        <table id="xbc-tbl-sow">
            <tbody>
                <asp:Literal ID="ltrSOW" runat="server"></asp:Literal>

            </tbody>
        </table>

    </div>
</asp:Content>
