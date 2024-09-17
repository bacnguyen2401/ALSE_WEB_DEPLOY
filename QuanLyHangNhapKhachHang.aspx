<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyHangNhapKhachHang.aspx.cs" Inherits="ALSE.QuanLyHangNhapKhachHang" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
       <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyHangNhapKhachHang.css") %>
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
        </div>
    </div>
    <div class="div-trangthaihangnhap-button">
        <%--<a href="KeHoachLayHang.aspx" class="mani-btn btn btn-primary">Kế Hoạch Lấy Hàng</a>--%>
        <button type="button" id="btn-ynghiatrangthai" class="mani-btn btn btn-success">Ý NGHĨA TRẠNG THÁI</button>
      <%--  <button type="button" id="btn-ynghiacanhbaomau" class="mani-btn btn btn-success">Ý NGHĨA CẢNH BÁO MÀU</button>
        <button type="button" id="btn-showGTK" class="mani-btn btn btn-success">GTT & GTV</button>
        <button type="button" id="btn-showPOD" class="mani-btn btn btn-primary">POD</button>
        <button type="button" id="btn-capnhatgiaohang" class="mani-btn btn btn-info">Cập nhật thông tin giao hàng</button>--%>
    </div>
    <div class="div-ThongKeHangNhap">
        <%--<table class="table table-bordered tablehx" id="tbl-ThongKeHangNhap">
            <tr>
                <td class="text-center" colspan="2">Total Arrival Notice:</td>
                <td class="text-center" colspan="2">Plan Tomorrow:</td>
                <td class="text-center" colspan="2">Plan Today:</td>
                <td class="text-center" colspan="2">ALSE WH:</td>
                <td class="text-center" colspan="2">Clear CD:</td>
                <td class="text-center" colspan="2">Delivering:</td>
                <td class="text-center" colspan="2">--%>
                    <%--<asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/DoThiNhapHang.aspx">In ALSE Y'Day</asp:HyperLink>--%>
                  <%--  <a href="/DoThiNhapHang.aspx">In ALSE Y'Day</a>
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
        </table>--%>
    </div>
    <div class="col-sm-12" id="div-checkbox">
    </div>
    <div class="col-sm-12" id="div-checkbox-makho">
        <label class="checkbox-inline  lable-title">WAREHOUSE: </label>
        <label class="checkbox-inline color-white">
            <input type="checkbox" class="cb-makho" checked id="cb-makho-all" value="ALL" />ALL</label>
        <label class="checkbox-inline color-white">
            <input type="checkbox" class="cb-makho cb-makho-child" checked id="cb-makho-ALSC" value="ALSC" />ALSC</label>
        <label class="checkbox-inline color-white">
            <input type="checkbox" class="cb-makho cb-makho-child" checked id="cb-makho-NCTS" value="NCTS" />NCTS</label>
        <label class="checkbox-inline color-white">
            <input type="checkbox" class="cb-makho cb-makho-child" checked id="cb-makho-ACS" value="ACS" />ACS</label>
         <label class="checkbox-inline color-white">
            <input type="checkbox" class="cb-makho cb-makho-child" checked id="cb-makho-CPN" value="CPN" />CPN</label>
    </div>
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
                    <th>REMARK</th>
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
                    <th>REMARK</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <%-- Loading on truck --%>
        <table class="table table-bordered hide-show-table loadingontruck table-maxwidth-1024" id="tbl-LoadingOnTruck">
            <thead id="thead-LoadingOnTruck">
                <tr>
                    <th class="td-no">No.</th>
                    <th>STATUS</th>
                    <th>MAWB</th>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
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
                    <th>R.M</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        <%-- TRUCKING ALSE --%>
        <table class="table table-bordered hide-show-table truckingalse table-maxwidth-1024" id="tbl_TruckingAlse">
            <thead id="thead-TruckingAlse">
                <tr>
                    <th class="td-no">No.</th>
                    <th>STATUS</th>
                    <th>MAWB</th>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
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
                    <th>R.M</th>
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
                    <th>REMARK</th>
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
                    <th>REMARK</th>
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
                    <th>REMARK</th>
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
                    <th>REMARK</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
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
       <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyHangNhapKhachHang.js") %>
</asp:Content>
