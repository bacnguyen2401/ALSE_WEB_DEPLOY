<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="KeHoachDetails.aspx.cs" Inherits="ALSE.KeHoachDetails" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/KeHoachDetails.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="loading">
        <img id="loading-image" src="images/loading.gif" alt="Loading..." />
    </div>
    <div class="container-button" style="margin-bottom: 10px;">
        <button type="button" class="btn btn-sm btn-primary btn-kehoach-list" value="DHL">Hiển thị hàng DHL</button>
        <button type="button" class="btn btn-sm btn-success btn-kehoach-list" value="EI">Hiển thị hàng EI</button>
        <button type="button" class="btn btn-sm btn-info btn-kehoach-list" value="EFL">Hiển thị hàng EFL</button>
        <button type="button" class="btn btn-sm btn-warning btn-kehoach-list" value="ALL">Hiển thị tất cả hàng trong kho</button>
        <input type="button" onclick="tableToExcel('tbl-chi-tiet-kehoach', 'Danh Sách ')" value="Excel Export" class="mani-btn btn btn-sm btn-primary btn-export-excel" />
        <%--<input type="button"value="Excel Export" class="mani-btn btn btn-sm btn-info btn-export-excel" />--%>
        <button type="button" class="btn btn-sm btn-success btn-print-kehoach">Print</button>
        <button type="button" class="btn btn-sm btn-info btn-in-tem-automatic">In tem tự động</button>
    </div>
    <!-- List view giao doc-->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>Danh sách chi tiết kế hoạch</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div id="tbl-chi-tiet-kehoach_filter" class="dataTables_filter">
                        <label>Search:<input type="search" id="input-search" class="ip-search" placeholder="" /></label>
                        <span>Tổng số kiện: <span class="color-red" id="totalSoKien"></span>Tổng trọng lượng: <span class="color-red" id="totalTrongLuong"></span></span>
                    </div>
                    <div class="dataTable_wrapper">
                        <table class="table table-bordered table-hover" id="tbl-chi-tiet-kehoach">
                            <thead class="thead-awb">
                                <tr>
                                    <td>MAWB</td>
                                    <td>HAWB</td>
                                    <td>Số Shipment</td>
                                    <td>Số DNN</td>
                                    <td>Số kiện</td>
                                    <td>Trọng lượng</td>
                                    <td>Kích thước</td>
                                    <td>Ngày giờ nhập</td>
                                    <td>Ngày giờ cân xong</td>
                                    <td>Vị trí</td>
                                    <td>FWD</td>
                                    <td>Ghi chú DNN</td>
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
    <!-- END List view giao doc-->

    <!-- Modal hiển thị chọn số lượng tem DHL -->
    <div class="modal fade" id="ModalDHL" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times </span></button>
                    <h4 class="modal-title text-align-center" id="">IN TEM DHL</h4>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class=" input-group">
                                    <span class="input-group-addon" id="">IP máy in</span>
                                    <input type="text" class="form-control" value="192.168.0.152" id="dhl-ip" />
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class=" input-group">
                                    <span class="input-group-addon" id="">Tên máy in</span>
                                    <input type="text" class="form-control" value="Zebra" id="dhl-ten" />
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class=" input-group">
                                    <span class="input-group-addon" id="">Số lượng tem in</span>
                                    <input type="text" class="form-control" value="2" id="dhl-soluong" />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-sm-6">
                                <div class=" input-group">
                                    <span class="input-group-addon" id="">Nhập số PLTID</span>
                                    <input type="text" class="form-control" id="dhl-pltid" />
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class=" input-group">
                                    <span class="input-group-addon" id="">Cập nhật vị trí</span>
                                    <input type="text" class="form-control" id="dhl-vitri" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="btn-print-dhl">Print</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/KeHoachDetails.js") %>
</asp:Content>
