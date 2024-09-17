<%@ Page Title="KIỂM SOÁT HÀNG SOI CHIẾU" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="KiemSoatHSC.aspx.cs" Inherits="ALSE.KiemSoatHSC" EnableEventValidation="true" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        .txtnhapdnn {
            width: 200px;
            float: left;
            margin-right: 20px;
        }

        .dataTables_length {
            visibility: hidden;
        }

        .dataTables_filter {
            visibility: hidden;
        }

        .dataTables_info {
            visibility: hidden;
        }

        .dataTables_paginate paging_simple_numbers {
            visibility: hidden;
        }

        .div-nhapdnn-left {
            float: left;
            width: 300px;
            
        }
        #div-nhapdnn {
            margin-top: -10px;
        }
        .div-nhapdnn-right {
            margin-top: -50px;
            width: 900px;
            float: right;
        }
            .div-nhapdnn-right p {
                font-size:x-large;
                font-weight: bold;
                text-align: center;
            }
        .todam-dnn {
            font-weight: bold;
            font-size: large;
        }

        .div-btn-top {
            margin-bottom: 10px;
        }

        #div-nhapngay input {
            margin-bottom: 5px;
            /*margin-top: 10px*/
        }
        .txttungay {
            width: 190px;
            float: left;
            margin-right: 10px;

        }
        .right-40 {
            margin-top: -40px;

        }
        @media print {
            .panel-heading {
                visibility: hidden;
            }
            .div-nhapdnn-left {
                visibility:hidden;
            }
            #footer {
                visibility:hidden;

            } 
            #tbl-dnn_paginate {
                visibility:hidden;

            }
            .div-nhapdnn-right {
                width: 1000px;
                margin-top: -160px;
            }
            .div-btn-top {
                visibility:hidden;

            }
            .panel-default {
                border-color: white;
            }
            #tbl-dnn {
                border: solid 1px #000000;
            }
        }
    </style>
    <script type="text/javascript">
        var date;
        $(document).ready(function () {
            var view = getParameterByName('View');

            if (view != 1) {
                $(".btn-nhapdnn").remove();
                $("#div-nhapngay").remove();
                $(".btn-xuatexcel").remove();
                $(".btn-intbl").remove();
                
                $(".div-nhapdnn-right").addClass("right-40");

            } else {

                $(".btn-lochitiet").remove();
                $("#div-nhapdnn").remove();

            }
            $(".txtnhapngay").datepicker();
            $("#tbl-dnn_length").remove();
            $("#tbl-dnn_filter").remove();
            var currentDate = new Date();

            var gdate = currentDate.getDate();
            if (gdate < 10) {
                gdate = "0" + gdate;
            }
            var gydate = ydate.getDate();
            if (gydate < 10) {
                gydate = "0" + gydate;
            }

            date = currentDate.getFullYear() + "/" + (currentDate.getMonth() + 1) + "/" + gdate;
            
            
        })
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
        function themngay() {
            
            var tungay = $(".txttungay").val().split("/");
            //var denngay = $(".txtdenngay").val().split("/");

            //if ($(".txttungay").text() == null) {
            //    tungay = date;
            //}
            //if ($(".txtdenngay").val() == undefined) {
            //    denngay = date;
            //}
            var tungayx = tungay[2] + "/" + tungay[1] + "/" + tungay[0];
            //var denngayx = denngay[2] + "/" + denngay[1] + "/" + denngay[0];
            if (tungayx == "undefined/undefined/") {
                tungayx = date;
            }
            AddQueryString("View", 1);

            AddQueryString("TuNgay", tungayx);
            AddQueryString("DenNgay", tungayx);
            return false;

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
    <!--BCC-->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>KIỂM SOÁT HÀNG SOI CHIẾU&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
                    <input type="button" class="btn btn-info btn-lochitiet" onclick="anhien(1)" value="+ In Danh Sách Hàng Soi Chiếu" />
                    
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="div-btn-top">
                        
                        <input type="button" class="btn btn-warning btn-nhapdnn" onclick="anhien(0)" value="Nhập DNN" />
                        <input type="button" onclick="tableToExcel('tbl-dnn', 'Danh Sách DNN Soi Chiếu')" value="Xuất Excel" class="mani-btn btn btn-info btn-xuatexcel" />
                        
                        <button type="button" class="btn btn-danger btn-intbl" onclick="window.print()">
                            <span class="glyphicon glyphicon-print" aria-hidden="true"></span> In BC
                        </button>
                        

                    </div>
                    <div id="div-nhapdnn" class=" div-nhapdnn-left">
                        <%-- <form class="form-inline" role="form">--%>
                        <p>Input DNN:</p>
                        <asp:TextBox ID="txtNhapDNN" CssClass="form-control txtnhapdnn" runat="server"></asp:TextBox>
                        <asp:Button ID="btnNhapDNN" CssClass="btn btn-danger" OnClick="btnNhapDNN_Click" runat="server" Text="Go" />
                        <%--</form>--%>
                    </div>
                    <div id="div-nhapngay" class=" div-nhapdnn-left">
                        <p>Chọn ngày:</p>
                        <input type="text" placeholder="dd/MM/yyyy" class="form-control txttungay txtnhapngay" />
                        <%--<input type="text" class="form-control txtdenngay txtnhapngay" />--%>
                        <input type="button" class="btn btn-success btn-timngay" value="Go" onclick="themngay()" />
                    </div>
                    <div class="div-nhapdnn-right">
                    <p><asp:Literal ID="ltrTenBaoCao" runat="server"></asp:Literal></p>

                        <table id="tbl-dnn" class="KdataTables table table-striped table-bordered table-hover tbl-nhapdnn">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>DNN</th>
                                    <th>Kiện Số</th>
                                    <th>Ngày</th>
                                    <th>Giờ</th>
                                    <th>SK</th>
                                    <th>TL</th>
                                    <th>Kích Thước</th>
                                    <th>Vị Trí</th>
                                    <th>FWD</th>
                                    <th>Ghi Chú</th>
                                </tr>
                            </thead>
                            <asp:Literal ID="ltrNhapDNN" runat="server"></asp:Literal>
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
    <!-- END BCC-->
</asp:Content>