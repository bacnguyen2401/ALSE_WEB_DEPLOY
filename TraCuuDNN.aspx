<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="TraCuuDNN.aspx.cs" Inherits="ALSE.TraCuuDNN" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/TraCuuDNN.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
     <script type="text/javascript">
        $(document).ready(function () {

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
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>TRUY VẤN DANH SÁCH DNN</b>
                    <asp:Literal ID="ltrTrial" runat="server"></asp:Literal>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="truyvandnn-left">

                        <div class="form-group">
                            <label for="usr">Nhập Danh Sách HAWB:</label>

                            <%--<dx:ASPxMemo ID="txtListDanhSachDNN" runat="server" CssClass="form-control txtlistdsdnn" Height="300px" Width="170px"></dx:ASPxMemo>--%>
                            <textarea rows="15" cols="20" id="ta-danhsach-dnn">
                                </textarea>
                        </div>

                    </div>
                    <div class="truyvandnn-mid">
                        <div>
                            <button id="btn-truyvan-dnn" type="button" class="btn btn-info  btn-kichthuoc-120">Truy Vấn</button>
                        </div>

                        
                        <div>
                            <input type="button" onclick="tableToExcel('tbl1', 'Truy Vấn Danh Sách HAWB')" value="Tải Xuống" class="mani-btn btn btn-info btn-taixuong btn-kichthuoc-120" />
                        </div>
                    </div>
                    <div style="margin-left: 370px " class="dataTable_wrapper truyvandnn-right">
                        <div id="tvdnnr-tieude">
                            <p>KẾT QUẢ TRUY VẤN</p>
                        </div>
                        <div id="totalPCSDNN"></div>
                        <table id="tbl1" style="width: 850px;" class="table table-striped table-bordered table-hover tbl-truyvandnn">
                            <thead>
                                <tr>
                                    <td>STT</td>
                                    <td>Số HAWB</td>
                                    <td>Số DNN</td>
                                    <td>Số SHIPMENT</td>
                                </tr>
                            </thead>
                            <tbody>
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
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/TraCuuDNN.js") %>
</asp:Content>
