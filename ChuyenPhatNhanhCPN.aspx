<%@ Page Title="Chuyển phát nhanh" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ChuyenPhatNhanhCPN.aspx.cs" Inherits="ALSE.ChuyenPhatNhanhCPN" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/ChuyenPhatNhanhCPN.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="cpn-header text-align-center">
        <h2 class="color-white">HÀNG CHUYỂN PHÁT NHANH</h2>
    </div>

    <div class="div-trangthaihangnhap-button">
        <button type="button" id="btn-taokehoach" class="mani-btn btn btn-success">Tạo kế hoạch</button>
        <button type="button" id="btn-ynghiacanhbaomau" class="mani-btn btn btn-success">Nút bấm 2</button>
        <button type="button" id="btn-showGTK" class="mani-btn btn btn-success">Nút bấm 3</button>
    </div>

    <div id="div-TrangThaiHangNhap">
        <%-- ARRIVAL NOTICE --%>
        <table class="table table-bordered hide-show-table arrivalnotice table-maxwidth-1024" id="tbl_ArrivalNotice">
            <thead id="thead-ArrivalNotice">
                <tr>
                    <th class="td-no">No.</th>
                    <th>STATUS</th>
                    <%--<th>MAWB</th>--%>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CBM</th>
                    <%--<th>FLT</th>--%>
                    <th>TB.DATE</th>
                    <th>TB.TIME</th>
                    <th>Receiving W.H</th>
                    <th>BU</th>
                    <th>TMS</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <%-- <th>PCS CD</th>
                    <th>G.W CD</th>
                    <th>PCS TRUE</th>
                    <th>LACK</th>--%>
                    <th>FWD</th>
                    <th>PIC</th>
                    <%--<th>W.H</th>--%>
                    <%--<th>LOCATION</th>--%>
                    <th>INVOICE</th>
                    <th>REMARK</th>
                    <%--<th>CNEE MAWB</th>--%>
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
                    <%--<th>MAWB</th>--%>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CBM</th>
                    <%--<th>FLT</th>--%>
                    <th>TB.DATE</th>
                    <th>TB.TIME</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>Receiving W.H</th>
                    <th>BU</th>
                    <th>TMS</th>
                    <%-- <th>PCS CD</th>
                    <th>G.W CD</th>
                    <th>PCS TRUE</th>
                    <th>LACK</th>--%>
                    <th>FWD</th>
                    <%--<th>W.H</th>--%>
                    <%--<th>LOCATION</th>--%>
                      <th>PIC</th>
                    <th>INVOICE</th>
                    <th>REMARK</th>
                    <%--<th>CNEE MAWB</th>--%>
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
                    <%--<th>MAWB</th>--%>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CBM</th>
                    <%--<th>FLT</th>--%>
                    <th>TB.DATE</th>
                    <th>TB.TIME</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>Receiving W.H</th>
                    <th>BU</th>
                    <th>TMS</th>
                    <th>TRUCK.D</th>
                    <th>TRUCK.T</th>
                    <th>TRUCK ID</th>
                    <%--  <th>PCS</th>
                    <th>G.W</th>--%>
                    <th>FWD</th>
                    <%--<th>W.H</th>--%>
                    <%--<th>LOCATION</th>--%>
                      <th>PIC</th>
                    <th>INVOICE</th>
                    <th>R.M</th>
                    <%--<th>CNEE MAWB</th>--%>
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
                    <%--<th>MAWB</th>--%>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CBM</th>
                    <%--<th>FLT</th>--%>
                    <th>TB.DATE</th>
                    <th>TB.TIME</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>Receiving W.H</th>
                    <th>BU</th>
                    <th>TMS</th>
                    <th>TRUCK.D</th>
                    <th>TRUCK.T</th>
                    <th>TRUCK ID</th>
                    <%-- <th>PCS</th>
                    <th>G.W</th>--%>
                    <th>FWD</th>
                    <%--<th>W.H</th>--%>
                    <%--<th>LOCATION</th>--%>
                      <th>PIC</th>
                    <th>INVOICE</th>
                    <th>R.M</th>
                    <%--<th>CNEE MAWB</th>--%>
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
                    <%--<th>MAWB</th>--%>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CBM</th>
                    <%--<th>FLT</th>--%>
                    <th>TB.DATE</th>
                    <th>TB.TIME</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>Receiving W.H</th>
                    <th>BU</th>
                    <th>TMS</th>
                    <th>TRUCK.D</th>
                    <th>TRUCK.T</th>
                    <th>TRUCK ID</th>
                    <%--    <th>PCS</th>
                    <th>G.W</th>--%>
                    <th>FWD</th>
                    <%--<th>W.H</th>--%>
                    <%--<th>LOCATION</th>--%>
                      <th>PIC</th>
                    <th>INVOICE</th>
                    <th>R.M</th>
                    <%--<th>CNEE MAWB</th>--%>
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
                    <%--<th>MAWB</th>--%>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CBM</th>
                    <%--<th>FLT</th>--%>
                    <th>TB.DATE</th>
                    <th>TB.TIME</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>Receiving W.H</th>
                    <th>BU</th>
                    <th>TMS</th>
                    <th>DATE IN</th>
                    <th>TIME IN</th>
                    <th>TRUCK ID</th>
                    <th>CODE</th>
                    <th>FWD</th>
                    <%--<th>W.H</th>--%>
                    <%--<th>LOCATION</th>--%>
                      <th>PIC</th>
                    <th>INVOICE</th>
                    <th>REMARK</th>
                    <%--<th>CNEE MAWB</th>--%>
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
                    <%--<th>MAWB</th>--%>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CBM</th>
                    <%--<th>FLT</th>--%>
                    <th>TB.DATE</th>
                    <th>TB.TIME</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>Receiving W.H</th>
                    <th>BU</th>
                    <th>TMS</th>
                    <th>STA.D</th>
                    <th>STA.T</th>
                    <th>CODE</th>
                    <th>FWD</th>
                    <%--<th>W.H</th>--%>
                    <%--<th>LOCATION</th>--%>
                      <th>PIC</th>
                    <th>INVOICE</th>
                    <th>REMARK</th>
                    <%--<th>CNEE MAWB</th>--%>
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
                    <%--<th>MAWB</th>--%>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CBM</th>
                    <%--<th>FLT</th>--%>
                    <th>TB.DATE</th>
                    <th>TB.TIME</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>Receiving W.H</th>
                    <th>BU</th>
                    <th>TMS</th>
                    <th>STA.D</th>
                    <th>STA.T</th>
                    <th>TRUCK ID</th>
                    <th>CODE</th>
                    <th>FWD</th>
                    <%--<th>W.H</th>--%>
                    <%--<th>LOCATION</th>--%>
                      <th>PIC</th>
                    <th>INVOICE</th>
                    <th>REMARK</th>
                    <%--<th>CNEE MAWB</th>--%>
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
                    <%--<th>MAWB</th>--%>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CBM</th>
                    <%--<th>FLT</th>--%>
                    <th>TB.DATE</th>
                    <th>TB.TIME</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>Receiving W.H</th>
                    <th>BU</th>
                    <th>TMS</th>
                    <th>FIN.D</th>
                    <th>FIN.T</th>
                    <th>TRUCK ID</th>
                    <th>CODE</th>
                    <th>FWD</th>
                    <%--<th>W.H</th>--%>
                    <%--<th>LOCATION</th>--%>
                    <th>INVOICE</th>
                    <th>REMARK</th>
                    <%--<th>CNEE MAWB</th>--%>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>


    <div class="modal fade" id="modalTaoKeHoach" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lx fullscreen" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">NHẬP THÔNG BÁO VÀ KẾ HOẠCH HÀNG ĐẾN</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">FWD</span>
                                <input type="text" class="form-control input-sm input-fwd" />
                            </div>
                        </div>


                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Ngày nhận thông báo</span>
                                <input type="text" class="form-control datepicker input-sm input-ngaynhantb" />
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Giờ nhận thông báo</span>
                                <input type="text" class="form-control timepicker input-sm input-gionhantb" />
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Chuyến bay</span>
                                <input type="text" disabled class="form-control input-sm input-chuyenbay" value="EP" />
                            </div>
                        </div>

                    </div>


                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-kehoach-luu" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheet" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/ChuyenPhatNhanhCPN.js") %>
</asp:Content>
