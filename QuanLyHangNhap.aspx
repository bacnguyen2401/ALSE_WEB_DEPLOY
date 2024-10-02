<%@ Page Title="QUẢN LÝ HÀNG NHẬP" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyHangNhap.aspx.cs" Inherits="ALSE.QuanLyHangNhap" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyHangNhap.css") %>

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
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="title-header-refresh">
        <div class="title">
            <p class="title-header">IMPORT CARGO STATUS</p>
        </div>
        <div style="float: left">
            <button type="button" class="btn btn-primary btn-sm" id="btn-refresh">
                Refresh
            </button>
            <div id='countdown'></div>
            <div>
                <label id="div-kiemton"></label>
            </div>
        </div>
    </div>
    <div class="div-trangthaihangnhap-button">
        <a href="KeHoachLayHang.aspx" class="mani-btn btn btn-primary">Kế Hoạch Lấy Hàng</a>
        <button type="button" id="btn-ynghiatrangthai" class="mani-btn btn btn-info">Ý NGHĨA TRẠNG THÁI</button>
        <button type="button" id="btn-ynghiacanhbaomau" class="mani-btn btn btn-success">Ý NGHĨA CẢNH BÁO MÀU</button>
        <button type="button" id="btn-showGTK" class="mani-btn btn btn-primary">GOERTEK</button>
        <%--    <button type="button" id="btn-showPOD" class="mani-btn btn btn-primary">POD</button>
        <button type="button" id="btn-capnhatgiaohang" class="mani-btn btn btn-info">Cập nhật thông tin giao hàng</button>--%>
        <a href="QuanLyPOD.aspx" id="" class="mani-btn btn btn-info">Quản lý POD</a>
        <button type="button" id="btn-HQGS" class="mani-btn btn btn-success">Hải quan giám sát</button>
        <a href="QuanLyCongVanHQ.aspx" id="btn-CVHQ" class="mani-btn btn btn-primary">Công văn HQ</a>
        <a href="#" id="btn-guiXML" class="mani-btn btn btn-info">Hiển thị lô hàng gửi XML</a>
        <a href="#" id="btn-baocaoHQ" class="mani-btn btn btn-success">Báo cáo HQ</a>
        <a href="#" id="btn-kiemton" class="mani-btn btn btn-primary"> DS hàng lưu kho</a>
    </div>
    <div class="div-ThongKeHangNhap">
        <table class="table table-bordered tablehx" id="tbl-ThongKeHangNhap">
            <tr>
                <td class="text-center" colspan="2">Total Arrival Notice:</td>
                <td class="text-center" colspan="2">Plan Tomorrow:</td>
                <td class="text-center" colspan="2">Plan Today:</td>
                <td class="text-center" colspan="2">ALSE WH:</td>
                <td class="text-center" colspan="2">Clear CD:</td>
                <td class="text-center" colspan="2">Delivering:</td>
                <td class="text-center" colspan="2">
                    <%--<asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/DoThiNhapHang.aspx">In ALSE Y'Day</asp:HyperLink>--%>
                    <a href="/DoThiNhapHang.aspx">In ALSE Y'Day</a>
                </td>
                <td class="text-center" colspan="2">In ALSE Today</td>
                <td class="text-center" colspan="2">Out ALSE Y'Day</td>
                <td class="text-center" colspan="2">Out ALSE Today</td>
            </tr>
            <tr>
                <td id="shptArrival" class="font-weight-css"></td>
                <td>Shpt</td>
                <td id="shptPlan" class="font-weight-css"></td>
                <td>Shpt</td>
                <td id="shptPlanToDay" class="font-weight-css"></td>
                <td>Shpt</td>
                <td id="shptAlse" class="font-weight-css"></td>
                <td>Shpt</td>
                <td id="shptClear" class="font-weight-css"></td>
                <td>Shpt</td>
                <td id="shptDelivering" class="font-weight-css"></td>
                <td>Shpt</td>
                <td id="shptAlseYDayIn" class="font-weight-css"></td>
                <td>Shpt</td>
                <td id="shptAlseToDayIn" class="font-weight-css"></td>
                <td>Shpt</td>
                <td id="shptAlseYDayOut" class="font-weight-css"></td>
                <td>Shpt</td>
                <td id="shptAlseToDayOut" class="font-weight-css"></td>
                <td>Shpt</td>
            </tr>
            <tr>
                <td id="PcsArrival" class="font-weight-css"></td>
                <td>Pcs</td>
                <td id="PcsPlan" class="font-weight-css"></td>
                <td>Pcs</td>
                <td id="PcsPlanToDay" class="font-weight-css"></td>
                <td>Pcs</td>
                <td id="PcsAlse" class="font-weight-css"></td>
                <td>Pcs</td>
                <td id="PcsClear" class="font-weight-css"></td>
                <td>Pcs</td>
                <td id="PcsDelivering" class="font-weight-css"></td>
                <td>Pcs</td>
                <td id="PcsAlseYDayIn" class="font-weight-css"></td>
                <td>Pcs</td>
                <td id="PcsAlseToDayIn" class="font-weight-css"></td>
                <td>Pcs</td>
                <td id="PcsAlseYDayOut" class="font-weight-css"></td>
                <td>Pcs</td>
                <td id="PcsAlseToDayOut" class="font-weight-css"></td>
                <td>Pcs</td>
            </tr>
            <tr>
                <td id="KgsArrival" class="font-weight-css"></td>
                <td>Kgs</td>
                <td id="KgsPlan" class="font-weight-css"></td>
                <td>Kgs</td>
                <td id="KgsPlanToDay" class="font-weight-css"></td>
                <td>Kgs</td>
                <td id="KgsAlse" class="font-weight-css"></td>
                <td>Kgs</td>
                <td id="KgsClear" class="font-weight-css"></td>
                <td>Kgs</td>
                <td id="KgsDelivering" class="font-weight-css"></td>
                <td>Kgs</td>
                <td id="KgsAlseYDayIn" class="font-weight-css"></td>
                <td>Kgs</td>
                <td id="KgsAlseToDayIn" class="font-weight-css"></td>
                <td>Kgs</td>
                <td id="KgsAlseYDayOut" class="font-weight-css"></td>
                <td>Kgs</td>
                <td id="KgsAlseToDayOut" class="font-weight-css"></td>
                <td>Kgs</td>
            </tr>
        </table>
    </div>
    <div class="col-sm-12" id="div-checkbox">
    </div>
    <div class="col-sm-12" id="div-checkbox-makho">
        <label class="checkbox-inline  lable-title">WAREHOUSE: </label>
        <label class="checkbox-inline color-white">
            <input type="checkbox" class="cb-makho" checked="checked" id="cb-makho-all" value="ALL" />ALL</label>
        <label class="checkbox-inline color-white">
            <input type="checkbox" class="cb-makho cb-makho-child" checked="checked"  id="cb-makho-ALSC" value="ALSC" />ALSC</label>
        <label class="checkbox-inline color-white">
            <input type="checkbox" class="cb-makho cb-makho-child" checked="checked"  id="cb-makho-NCTS" value="NCTS" />NCTS</label>
        <label class="checkbox-inline color-white">
            <input type="checkbox" class="cb-makho cb-makho-child" checked="checked"  id="cb-makho-ACS" value="ACS" />ACS</label>
        <label class="checkbox-inline color-white">
            <input type="checkbox" class="cb-makho cb-makho-child" checked="checked"  id="cb-makho-CPN" value="CPN" />CPN</label>
    </div>
    <%-- <div class="col-sm-12" id="div-checkbox-hq">
        <label class="checkbox-inline  lable-title">SERVICE: </label>
        <label class="checkbox-inline color-white">
            <input type="checkbox" class="cb-hq" checked id="cb-hq-all" value="ALL" />ALL</label>
        <label class="checkbox-inline color-white">
            <input type="checkbox" class="cb-hq cb-hq-child" checked id="cb-hq-true" value="HQGS" />HQGS</label>
         <label class="checkbox-inline color-white">
            <input type="checkbox" class="cb-hq cb-hq-child" checked id="cb-do-true" value="DO" />DO</label>
    </div>--%>
    <div id="div-TrangThaiHangNhap">
        <%-- ARRIVAL NOTICE --%>
        <table class="table table-bordered hide-show-table arrivalnotice table-maxwidth-1024" id="tbl_ArrivalNotice">
            <thead id="thead-ArrivalNotice">
                <tr>
                    <th class="td-no">No.</th>
                    <th>STATUS</th>
                    <th>MAWB</th>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CW</th>
                    <th>FLT</th>
                    <th>FLT.DATE</th>
                    <th>FLT.T</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>PCS CD</th>
                    <th>G.W CD</th>
                    <th>PCS TRUE</th>
                    <th>LACK</th>
                    <th>FWD</th>
                    <th>W.H</th>
                    <th>LOCATION</th>
                    <th>INVOICE</th>
                    <th>REMARK</th>
                    <th>CNEE MAWB</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <%-- DELYVERY PLAN --%>
        <table class="table table-bordered hide-show-table delyveryplan table-maxwidth-1024" id="tbl_DelyvryPlan">
            <thead id="thead-DelyvryPlan">
                <tr>
                    <th class="td-no">No.</th>
                    <th>STATUS</th>
                    <th>MAWB</th>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CW</th>
                    <th>FLT</th>
                    <th>FLT.DATE</th>
                    <th>FLT.T</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>PCS CD</th>
                    <th>G.W CD</th>
                    <th>PCS TRUE</th>
                    <th>LACK</th>
                    <th>FWD</th>
                    <th>W.H</th>
                    <th>LOCATION</th>
                    <th>INVOICE</th>
                    <th>REMARK</th>
                    <th>CNEE MAWB</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <%-- Loading on truck --%>
        <table class="table table-bordered hide-show-table loadingontruck table-maxwidth-1024" id="tbl-CargoReady">
            <thead id="thead-CargoReady">
                <tr>
                    <th class="td-no">No.</th>
                    <th>STATUS</th>
                    <th>MAWB</th>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CW</th>
                    <th>FLT</th>
                    <th>FLT.D</th>
                    <th>FLT.T</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>TRUCK.D</th>
                    <th>TRUCK.T</th>
                    <th>TRUCK ID</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>FWD</th>
                    <th>W.H</th>
                    <th>LOCATION</th>
                    <th>INVOICE</th>
                    <th>R.M</th>
                    <th>CNEE MAWB</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <%-- Loading ON Truck  --%>
        <table class="table table-bordered hide-show-table truckingalse table-maxwidth-1024" id="tbl_LoadingOnTruck">
            <thead id="thead-LoadingOnTruck">
                <tr>
                    <th class="td-no">No.</th>
                    <th>STATUS</th>
                    <th>MAWB</th>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CW</th>
                    <th>FLT</th>
                    <th>FLT.D</th>
                    <th>FLT.T</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>TRUCK.D</th>
                    <th>TRUCK.T</th>
                    <th>TRUCK ID</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>FWD</th>
                    <th>W.H</th>
                    <th>LOCATION</th>
                    <th>INVOICE</th>
                    <th>R.M</th>
                    <th>CNEE MAWB</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>

        <%-- Trucking ALSE  --%>
        <table class="table table-bordered hide-show-table truckingalse table-maxwidth-1024" id="tbl_TruckingAlse">
            <thead id="thead-TruckingAlse">
                <tr>
                    <th class="td-no">No.</th>
                    <th>STATUS</th>
                    <th>MAWB</th>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CW</th>
                    <th>FLT</th>
                    <th>FLT.D</th>
                    <th>FLT.T</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>TRUCK.D</th>
                    <th>TRUCK.T</th>
                    <th>TRUCK ID</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>FWD</th>
                    <th>W.H</th>
                    <th>LOCATION</th>
                    <th>INVOICE</th>
                    <th>R.M</th>
                    <th>CNEE MAWB</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <%-- ALSE WAREHOUSE --%>
        <table class="table table-bordered hide-show-table alsewarehouse table-maxwidth-1024" id="tbl_AlseWarehouse">
            <thead id="thead-AlseWarehouse">
                <tr>
                    <th class="td-no">No.</th>
                    <th>STATUS</th>
                    <th>MAWB</th>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CW</th>
                    <th>FLT</th>
                    <th>FLT.D</th>
                    <th>FLT.T</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>DATE IN</th>
                    <th>TIME IN</th>
                    <th>TRUCK ID</th>
                    <th>CODE</th>
                    <th>FWD</th>
                    <th>W.H</th>
                    <th>LOCATION</th>
                    <th>INVOICE</th>
                    <th>REMARK</th>
                    <th>CNEE MAWB</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <%-- CLEAR CUSTOM --%>
        <table class="table table-bordered hide-show-table clearcustom table-maxwidth-1024" id="tbl_ClearCustom">
            <thead id="thead-ClearCustom">
                <tr>
                    <th class="td-no">No.</th>
                    <th>STATUS</th>
                    <th>MAWB</th>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CW</th>
                    <th>FLT</th>
                    <th>FLT.D</th>
                    <th>FLT.T</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>STA.D</th>
                    <th>STA.T</th>
                    <th>CODE</th>
                    <th>FWD</th>
                    <th>W.H</th>
                    <th>LOCATION</th>
                    <th>INVOICE</th>
                    <th>REMARK</th>
                    <th>CNEE MAWB</th>
                    <%-- <th>STA.D</th>
                    <th>STA.T</th>--%>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <%-- DELYVERING --%>
        <table class="table table-bordered hide-show-table delyvering table-maxwidth-1024" id="tbl_Delyvering">
            <thead id="thead-Delyvering">
                <tr>
                    <th class="td-no">No.</th>
                    <th>STATUS</th>
                    <th>MAWB</th>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CW</th>
                    <th>FLT</th>
                    <th>FLT.D</th>
                    <th>FLT.T</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>STA.D</th>
                    <th>STA.T</th>
                    <th>TRUCK ID</th>
                    <th>CODE</th>
                    <th>FWD</th>
                    <th>W.H</th>
                    <th>LOCATION</th>
                    <th>INVOICE</th>
                    <th>REMARK</th>
                    <th>CNEE MAWB</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <%-- COMPLETE --%>
        <table class="table table-bordered hide-show-table complete table-maxwidth-1024" id="tbl_Complete">
            <thead id="thead-Complete">
                <tr>
                    <th class="td-no">No.</th>
                    <th>STATUS</th>
                    <th>MAWB</th>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CW</th>
                    <th>FLT</th>
                    <th>FLT.D</th>
                    <th>FLT.T</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>FIN.D</th>
                    <th>FIN.T</th>
                    <th>TRUCK ID</th>
                    <th>CODE</th>
                    <th>FWD</th>
                    <th>W.H</th>
                    <th>LOCATION</th>
                    <th>INVOICE</th>
                    <th>REMARK</th>
                    <th>CNEE MAWB</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>

    <div class="label-qrcode">
        <div id="qrcode"></div>
        <div class="information">
            <div class="information-mawb"></div>
            <div class="information-hawb"></div>
            <div class="information-pcs"></div>
        </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="myModalViewHelp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times </span></button>
                    <h4 class="modal-title text-align-center" id="h4-thanhtoan-view-tieude"></h4>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered table-hover" id="tbl-help">
                        <thead></thead>
                        <tbody></tbody>
                    </table>
                </div>

                <div class="modal-footer">

                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>
    <%-- Modal Hiển thị địa chỉ GTK--%>

    <div class="modal fade" id="modalShowGTK" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg fullscreen " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times </span></button>

                    <div class="row">
                        <div class="form-group col-sm-3">
                            <button type="button" class="btn btn-sm btn-danger" id="btn-sendMail">Gửi mail</button>
                            <input type="button" onclick="tableToExcel('tableGTK', 'GTTvsGTV')" value="Tải Xuống" class="mani-btn btn-sm btn-info btn-taixuong btn-kichthuoc-120" />
                        </div>
                        <div class="form-group col-sm-3">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">Từ ngày</span>
                                <input type="text" class="form-control datepicker" id="input-tungayloc" />
                            </div>
                        </div>
                        <div class="form-group col-sm-3">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">Đến ngày</span>
                                <input type="text" class="form-control datepicker" id="input-denngayloc" />
                            </div>
                        </div>
                        <div class="form-group col-sm-1">
                            <button type="button" class="btn btn-sm btn-danger" id="btn-Loc">Lọc</button>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <table id="tableGTK" class="table table-bordered">
                        <thead>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <%--  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary btn-chonCNEE">Chọn</button>--%>
                </div>
            </div>
        </div>
    </div>


    <%-- Modal Hiển thị POD--%>

    <div class="modal fade" id="modalShowPOD" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg fullscreen " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times </span></button>
                    <h4 class="modal-title" id=""></h4>
                </div>
                <div class="modal-body">
                    <table id="tablePOD" class="table table-bordered  ">
                        <thead>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <%--  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary btn-chonCNEE">Chọn</button>--%>
                </div>
            </div>
        </div>
    </div>

    <%-- Modal cập nhật giao hàng--%>

    <div class="modal fade" id="modalCapNhatGiaoHang" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg fullscreen " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times </span></button>
                    <h4 class="modal-title" id=""></h4>
                </div>
                <div class="modal-body">

                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-capnhatgiaohang-luu" attr-idkehoach="" attr-somawb="" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheetGiaoHang" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>
                <div class="modal-footer">
                    <%--  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary btn-chonCNEE">Chọn</button>--%>
                </div>
            </div>
        </div>
    </div>
    <%-- Modal sửa kế hoạch giao hàng --%>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-nhanvien-group">
                                    <span class="input-group-addon" id="">Ngày giao hàng</span>
                                    <input type="text" class="datepicker  form-control " id="input-ngaygiao" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-nhanvien-group">
                                    <span class="input-group-addon" id="">Giờ giao hàng</span>
                                    <input type="text" class="timerpicker  form-control " id="input-giogiao" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-nhanvien-group">
                                    <span class="input-group-addon" id="">Người nhận hàng</span>
                                    <input type="text" class="datepicker  form-control " id="input-nguoinhanhang" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-nhanvien-group">
                                    <span class="input-group-addon" id="">Địa chỉ giao hàng</span>
                                    <input type="text" class="timerpicker  form-control " id="input-diachigiaohang" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-nhanvien-group">
                                    <span class="input-group-addon" id="">Số điện thoại</span>
                                    <input type="text" class="datepicker  form-control " id="input-sodienthoai" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-nhanvien-group">
                                    <span class="input-group-addon" id="">BU</span>
                                    <input type="text" class="timerpicker  form-control " id="input-bu" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" attrinv="" id="btnCapNhatNgayGio">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>

    <%-- Modal Hải quan giám sát --%>
    <!-- Modal -->
    <div class="modal fade" id="modalHQGS" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel1">Kết xuất hải quan giám sát</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <%--<div class="form-group col-sm-3">
                            <button type="button" class="btn btn-sm btn-danger" id="btn-sendMail">Gửi mail</button>
                            <input type="button" onclick="tableToExcel('tableGTK', 'GTTvsGTV')" value="Tải Xuống" class="mani-btn btn-sm btn-info btn-taixuong btn-kichthuoc-120" />
                        </div>--%>
                        <div class="form-group col-sm-5">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">Từ ngày</span>
                                <input type="text" class="form-control datepicker" id="input-tungaylocHQGS" />
                            </div>
                        </div>
                        <div class="form-group col-sm-5">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">Đến ngày</span>
                                <input type="text" class="form-control datepicker" id="input-denngaylocHQGS" />
                            </div>
                        </div>
                        <div class="form-group col-sm-1">
                            <button type="button" class="btn btn-sm btn-danger" id="btn-LocHQGS">Lọc</button>
                        </div>
                        <div class="form-group col-sm-1">
                            <input type="button" onclick="tableToExcel('tbl-HQGS', 'HQGS')" value="Tải" class="mani-btn btn-sm btn-info btn-taixuong btn-kichthuoc-120" />
                        </div>
                    </div>

                    <table class="table table-bordered" id="tbl-HQGS">
                        <thead>
                            <tr class="tr-HQGS">
                                <td>FWD</td>
                                <td>Số lượng HAWB</td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <%--  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>--%>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade bd-example-modal-lg" id="modalShowImg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="">IMAGES</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div id="div-filedinhkem-list">
                        <table id="table-filedinhkem" class="table table-bordered">
                            <thead>
                                <tr>
                                    <td>STT</td>
                                    <td>Ảnh</td>
                                    <td>Tên File</td>
                                    <td>Kích Thước</td>
                                    <td>Xem ảnh</td>
                                    <td>Tải Xuống</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%-- Modal điện XML --%>
    <div class="modal fade bd-example-modal-lg" id="modalShowXML" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="">Thông tin gửi điện XML</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table id="tbl-dienXML" class="table table-bordered">
                        <thead>
                            <tr>
                                <td>STT</td>
                                <td>MAWB</td>
                                <td>HAWB</td>
                                <td>Tiêu đề</td>
                                <td>Ngày cập nhật</td>
                                <td>Đã gửi</td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="modalBaoCaoHQ" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="">Báo cáo hải quan</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-5">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">Từ ngày</span>
                                <input type="text" class="form-control datepicker" id="input-tungayBaoCaoHQ" />
                            </div>
                        </div>
                        <div class="form-group col-sm-5">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">Đến ngày</span>
                                <input type="text" class="form-control datepicker" id="input-denngayBaoCaoHQ" />
                            </div>
                        </div>
                        <div class="form-group col-sm-1">
                            <button type="button" class="btn btn-sm btn-danger" id="btn-BaoCaoHQ">Tài file</button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <%--Đây phần html để in đ--%>
    <div class="main-luukho" style="width: 1050px" id="div-print">
        <h2>Danh sách hàng lưu kho</h2>
        <table class="table table-bordered" id="main-luukho-table">
            <thead>
                <tr>
                    <td>No.</td>
                    <td>MAWB</td>
                    <td>HAWB</td>
                    <td>PCS</td>
                    <td>G.W </td>
                    <td>FWD</td>
                </tr>
            </thead>
           <tbody></tbody>
        </table>
        <div class="main-luukho-chuky">
            <div>Nhân viên kiểm tồn</div>
            <div>(Ký ghi rõ họ tên)</div>
        </div>
    </div>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyHangNhap.js") %>
</asp:Content>
