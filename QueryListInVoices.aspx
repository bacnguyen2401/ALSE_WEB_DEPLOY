<%@ Page Title="QUERY LIST INVOICE" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="QueryListInVoices.aspx.cs" Inherits="ALSE.TruyVanInvoice"  EnableEventValidation="false" %>

<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">

    <style type="text/css">
        .truyvandnn-left {
            float: left;
            width: 180px;
            margin-right: 10px;
        }

        .tbl-truyvandnn {
            width: 700px;
        }

        .truyvandnn-mid {
            float: left;
        }

        .panel {
            min-width: 1000px;
        }

        #tvdnnr-tieude {
            text-align: center;
            font-weight: bold;
            font-size: large;
        }

        .btn-truyvan {
            margin-top: 40px;
            margin-bottom: 10px;
        }

        .txtlistdsdnn {
            margin-top: 10px;
        }

        .btn-taixuong {
            width: 103px;
        }

        #tvdnnr-tieude {
            width: 700px;
        }

        #tbl1 thead tr th {
            text-align: center;
        }

        .truyvandnn-mid div {
            margin-bottom: 10px;
        }

        .btn-kichthuoc-120 {
            width: 120px;
        }
        .tbl-truyvandnn tbody tr td{
            font-size: 10pt;
        }
            #tr-qs-total td{
        color: red;
        font-weight: bold;
        font-size: 14pt;
    }

    </style>
    <script type="text/javascript">
        $(document).ready(function () {
             if ($("#username").attr("wugroup") != "1" && $("#username").attr("wugroup") != "4") {
        $("#thNgayCanXong").remove();
        $("#thGioCanXong").remove();
    }
        })
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
    <!-- TBL-->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>QUERY LIST INVOICES</b>
                    <asp:Literal ID="ltrTrial" runat="server"></asp:Literal>
                </div>
                
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="truyvandnn-left">
                        <form role="form">
                            <div class="form-group">
                                <label for="usr">INVOICES ENTRY LIST:</label>

                                <dx:aspxmemo id="txtListDanhSachDNN" runat="server" cssclass="form-control txtlistdsdnn" height="300px" width="170px"></dx:aspxmemo>

                            </div>
                        </form>
                    </div>
                    <div class="truyvandnn-mid">
                        <div>
                            <asp:Button ID="btnTruyVan" CssClass="btn btn-info btn-truyvan btn-kichthuoc-120" OnClick="btnTruyVan_Click" runat="server" Text="Check >>" />
                        </div>


                        <div>
                            <input type="button" onclick="tableToExcel('tbl1', 'Query results from Invoice list')" value="Excel Export" class="mani-btn btn btn-info btn-taixuong btn-kichthuoc-120" />
                        </div>
                    </div>
                    <div style="width: 850px; float: right;" class="dataTable_wrapper truyvandnn-right">
                        <div id="tvdnnr-tieude">
                            <p>QUERY RESULTS</p>
                        </div>
                        <table id="tbl1" style="width: 850px;" class="table table-striped table-bordered table-hover tbl-truyvandnn">
                           
                            <thead>
                                <tr>
                                     <th>#</th>
                                    <th runat="server" id="thSoShippment">INVOICE</th>
                                    <th runat="server" id="thModel">MODEL</th>
                                    <th runat="server" id="thDNN">PALLET ID</th>
                                    <th runat="server" id="thKienSo">GW</th>
                                    <th runat="server" id="thSoKien">DIM</th>
                                    <th runat="server" id="thTrongLuong">VOL</th>
                                    <th runat="server" id="thKichThuoc">DATE CRT</th>
                                    <th runat="server" id="thViTri">TIME CRT</th>      
                                        <th id="thNgayCanXong">Ngày cân xong</th>
                                    <th id="thGioCanXong">Giờ cân xong</th>
                                    <th>FWD</th>
                                </tr>
                            </thead>
                            <tbody>

                            <asp:Literal ID="ltrTVDNN" runat="server"></asp:Literal>
                                </tbody>
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