<%@ Page Title="BÁO CÁO HẢI QUAN" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" EnableViewState="false" CodeBehind="ReportHaiQuan.aspx.cs" Inherits="ALSE.ReportHaiQuan" %>
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
            width: 250px;
            float: left;
            margin-right: 20px;
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
        }

        .div-menu {
            margin-top: 20px;
        }
        /*.KdataTablesXBC tbody tr:hover {
            background-color: red;
        }*/
    </style>
    <script type="text/javascript">
        $(document).ready(function () {
            $(".r-daily").remove();
            var gbaocao = getParameterByName("BaoCao");

            if (gbaocao == 12) {
                $(".r-ngaynhap").remove();

            }
            if (gbaocao == 13) {
                $(".r-ngayxuat").remove();

            }
            if (gbaocao == 14) {
                $(".r-ngayxuat").remove();

            }

            $('.KdataTablesXBC').DataTable({
                "responsive": true,
                "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                "iDisplayLength": -1,

            });
        })
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
    <div style="width: 1170px;height:110px;margin-bottom:5px;background-color: white; padding-top: 10px; padding-left: 10px;">
        
        <span id="sp-tungay">Từ Ngày:</span>
        <asp:TextBox ID="txtTuNgay" runat="server" CssClass="tungay datepicker form-control"></asp:TextBox>
        <span id="sp-denngay">Đến Ngày:</span>
        <asp:TextBox ID="txtDenNgay" runat="server" CssClass="denngay datepicker form-control"></asp:TextBox>
        <div class="div-menu">
            <asp:Button ID="btnNhap" runat="server" Text="Nhập" CssClass="mani-btn btn btn-success" OnClick="btnNhap_Click" />

            <asp:Button ID="btnXuat" runat="server" Text="Xuất" CssClass="mani-btn btn btn-success" OnClick="btnXuat_Click" />
            <asp:Button ID="btnTonKho" runat="server" Text="Tồn Kho" CssClass="mani-btn btn btn-success" OnClick="btnTonKho_Click" />
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
</asp:Content>
