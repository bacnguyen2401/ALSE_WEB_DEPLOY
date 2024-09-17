<%@ Page Title="ROUTE MANAGEMENT" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Route.aspx.cs" Inherits="ALSE.Distribution.Route" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/Distribution-Route.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div>
        <p class="p-pagename">Route Management</p>
    </div>
    <div>
        <button type="button" id="btn-route-ShowRoute" class="btn btn-sm btn-success">Route MGT</button>
        <button type="button" id="btn-route-UpdateRoute" class="btn btn-sm btn-primary">1. Update Route</button>
        <button type="button" id="btn-route-AutoRoute1" class="btn btn-sm btn-success">2. Auto route 1</button>
        <button type="button" id="btn-route-AutoRoute2" class="btn btn-sm btn-success">3. Auto route 2</button>
        <button type="button" id="btn-route-DownloadAutoRoute" class="btn btn-sm btn-warning">4. Download Auto route 1</button>
        <input type="checkbox" />
        <span class="color-white">Hiển thị tất cả</span>
        <input type="checkbox" />
        <span class="color-white">Chỉ hiển thị các lô hàng chưa xuất</span>
    </div>
    <div class="div-data">
        <table class="table table-bordered table-responsive" id="tbl-route">
            <thead>
                <tr>
                    <td></td>
                    <td>No</td>
                    <td>Big Route </td>
                    <td>Small Route </td>
                    <td>Plan Date </td>
                    <td>Plan Time </td>
                    <td>Order No</td>
                    <td>Po No </td>
                    <td>Delivery Require</td>
                    <td>Group Customer </td>
                    <td>Customer Code </td>
                    <td>Customer Name </td>
                    <td>Qty order</td>
                    <td>Qty PMT</td>
                    <td>Box Stock</td>
                    <td>PMT Stock</td>
                    <td>Box Receive</td>
                    <td>PMT Receive</td>
                    <td>Cbm </td>
                    <td>Route </td>
                    <td>City </td>
                    <td>Disrict</td>
                    <td>Route Type</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>

    <%------------------%>
    <div class="modal fade modalFullScreen" id="myModalRouteUpdateRoute" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalRouteUpdateRoute-Title"></h4>
                </div>
                <div class="modal-body">
                    <div>
                        <button type="button" id="btn-Route-SaveUpdateRoute" class="btn btn-primary btn-sm">Lưu</button>
                        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Đóng</button>
                    </div>

                    <div id="spreadsheetUpdateRoute" class="spreadsheet-width-auto"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%------------------%>

    <%------------------%>
    <div class="modal fade " id="myModalRouteUpdateTruck" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalRouteUpdateTruck-Title"></h4>
                </div>
                <div class="modal-body">
                    <div>
                        <button type="button" id="btn-Route-SaveUpdateTruck" class="btn btn-primary btn-sm">Lưu</button>
                        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Đóng</button>
                    </div>
                    <div>
                        
                         <div class="row">
                              <div class="form-group col-sm-12">
                                <div class="input-group ">
                                    <span class="input-group-addon" id="">Truck Vendor</span>
                                    <input type="text" class="form-control input-sm input-route  input-route-clear" id="input-route-TruckVendor" />
                                </div>
                            </div>
                         </div>
                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group ">
                                    <span class="input-group-addon" id="">Truck ID</span>
                                    <input type="text" class="form-control input-sm input-route  input-route-clear" id="input-route-TruckId" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group ">
                                    <span class="input-group-addon" id="">Truck Info</span>
                                    <input type="text" class="form-control input-sm input-route  input-route-clear" id="input-route-TruckInfo" />
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="form-group col-sm-12">
                                <div class="input-group ">
                                    <span class="input-group-addon" id="">Type Truck</span>
                                    <input type="text" class="form-control input-sm input-route  input-route-clear" id="input-route-TypeTruck" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group ">
                                    <span class="input-group-addon" id="">Remark</span>
                                    <input type="text" class="form-control input-sm input-route  input-route-clear" id="input-route-RemarkTruck" />
                                </div>
                            </div>
                        </div>
                        <div class="row" id="div-row-kehoachxeden">
                            <div class="form-group col-sm-2">                                
                                    <span class="input-group-addon" id="">Kế hoạch xe đến</span>                                
                             
                            </div>
                             <div class="form-group col-sm-4">
                                <div class="input-group ">
                                    <span class="input-group-addon" id="">Ngày</span>
                                    <input type="text" class="form-control input-sm input-route datepicker  input-route-clear" id="input-route-SmallRouteKeHoachXeDenNgay" />
                                </div>
                             
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group ">
                                    <span class="input-group-addon" id="">Giờ</span>
                                      <input type="text" class="form-control input-sm input-route timepicker input-route-clear" id="input-route-SmallRouteKeHoachXeDenGio" />
                                </div>
                               
                            </div>
                            
                           
                        </div>
                        <div class="row" id="div-row-thucxuattuvsip">
                            <div class="form-group col-sm-2">                                
                                    <span class="input-group-addon" id="">Thực xuất từ VSIP</span>                                
                             
                            </div>
                             <div class="form-group col-sm-4">
                                <div class="input-group ">
                                    <span class="input-group-addon" id="">Ngày</span>
                                    <input type="text" class="form-control input-sm input-route datepicker  input-route-clear" id="input-route-SmallRouteThucXuatTuVSIPNgay" />
                                </div>
                             
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group ">
                                    <span class="input-group-addon" id="">Giờ</span>
                                      <input type="text" class="form-control input-sm input-route timepicker input-route-clear" id="input-route-SmallRouteThucXuatTuVSIPGio" />
                                </div>
                               
                            </div>




                          
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    </div>
    <%------------------%>

    <%----------------modalFullScreen--%>
    <div class="modal fade modalFullScreen " id="myModalRouteUpdateReceive" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalRouteUpdateReceive-Title"></h4>
                </div>
                <div class="modal-body">
                    <div>
                        <button type="button" id="btn-Route-SaveUpdateReceive" UpdateType=""  SmallRoute="" BigRoute="" class="btn btn-primary btn-sm">Lưu</button>
                        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Đóng</button>
                    </div>
                    <div class="div-data">
                        <table class="table table-bordered table-responsive tbl-InputFullTd tbl-route-Receive" id="tbl-route-UpdateReceive-Info">                       
                             <tbody>
                                 <tr>
                                     <td class="text-align-left font-weight-bold">Người giao hàng tại nhà máy:</td>
                                     <td class="td-receive-input-info width-200px"><input id="inp-UpdateReceive-NguoiGiaoHang" type="text" class=""/></td>
                                 
                                     <td class="text-align-left font-weight-bold">Người nhận hàng tại nhà máy:</td>
                                     <td class="td-receive-input-info width-200px"><input id="inp-UpdateReceive-NguoiNhanHang" type="text" class=""/></td>
                                 </tr>
                                 <tr>
                                     <td class="text-align-left font-weight-bold">Ghi chú:</td>
                                     <td colspan="3"><input id="inp-UpdateReceive-Remark" type="text" class=""  /></td>
                                 </tr>
                            </tbody>
                        </table>
                        <table class="table table-bordered table-responsive tbl-InputFullTd tbl-route-Receive" id="tbl-route-UpdateDC-Info">                       
                             <tbody>
                                 <tr>
                                     <td class="text-align-left font-weight-bold">Ngày giờ nhận tại DC:</td>
                                     <td class="td-receive-input-info width-200px"><input id="inp-UpdateDC-NgayNhan" type="text" class="datepicker"/></td>
                                 
                                    
                                     <td class="td-receive-input-info width-200px"><input id="inp-UpdateDC-GioNhan" type="text" class="timepicker"/></td>
                                 </tr>

                                  <tr>
                                 <td class="text-align-left font-weight-bold">Người nhận hàng tại DC:</td>
                                     <td class="td-receive-input-info width-200px"  colspan="2"><input id="inp-UpdateDC-NguoiNhan" type="text" class=""/></td>
                                 </tr>
                                 <tr>
                                     <td class="text-align-left font-weight-bold">Ghi chú:</td>
                                     <td colspan="2"><input id="inp-UpdateDC-Remark" type="text" class=""  /></td>
                                 </tr>
                            </tbody>
                        </table>
                        <table class="table table-bordered table-responsive tbl-InputFullTd tbl-route-Receive" id="tbl-route-UpdateGiaoHang-Info">                       
                             <tbody>
                                 <tr>
                                     <td class="text-align-left font-weight-bold">Ngày giờ giao tại điểm giao:</td>
                                     <td class="td-receive-input-info width-200px"><input id="inp-UpdateGiaoHang-NgayGiao" type="text" class="datepicker"/></td>                                 
                                     
                                     <td class="td-receive-input-info width-200px"><input id="inp-UpdateGiaoHang-GioGiao" type="text" class="timepicker"/></td>
                                     <td class="td-receive-input-info width-200px"></td>
                                 </tr>
                                 <tr>
                                     <td class="text-align-left font-weight-bold">Người giao hàng tại điểm giao:</td>
                                     <td class="td-receive-input-info width-200px"><input id="inp-UpdateGiaoHang-NguoiGiaoHang" type="text" class=""/></td>
                                 
                                     <td class="text-align-left font-weight-bold">Người nhận hàng tại điểm giao:</td>
                                     <td class="td-receive-input-info width-200px"><input id="inp-UpdateGiaoHang-NguoiNhanHang" type="text" class=""/></td>
                                 </tr>
                                 <tr>
                                     <td class="text-align-left font-weight-bold">Ghi nhận bất thường:</td>
                                     <td colspan="3"><input id="inp-UpdateGiaoHang-GhiChuBatThuong" type="text" class=""  /></td>
                                 </tr>
                                 <tr>
                                     <td class="text-align-left font-weight-bold">Ghi chú:</td>
                                     <td colspan="3"><input id="inp-UpdateGiaoHang-GhiChu" type="text" class=""  /></td>
                                 </tr>
                            </tbody>
                        </table>
                        <table class="table table-bordered table-responsive tbl-InputFullTd tbl-route-Receive" id="tbl-route-UpdatePOD-Info">                       
                             <tbody>
                                 <tr>
                                     <td class="text-align-left font-weight-bold">Ngày giờ nhận POD:</td>
                                     <td class="td-receive-input-info width-200px"><input id="inp-UpdatePOD-NgayNhan" type="text" class="datepicker"/></td>                               
                                     <td class="td-receive-input-info width-200px"><input id="inp-UpdatePOD-GioNhan" type="text" class="timepicker"/></td>
                                    
                                 </tr>
                                
                            </tbody>
                        </table>

                        <table class="table table-bordered table-responsive" id="tbl-route-UpdateReceive">
                            <thead>
                                <tr>
                                    <td>No</td>
                                    <td>Status</td>     
                                    <td>Action</td>
                                    <td>Detail</td>
                                    <td>Order No</td>
                                    <td>Po No </td>
                                    <td>Box Receive</td>
                                    <td>PMT Receive</td>
                                    <td>Group Customer</td>
                                    <td>Customer Code</td>
                                    <td>Customer Name</td>
                                    <td>Qty order</td>
                                    <td>Qty PMT</td>
                                    <td>Box Stock</td>
                                    <td>PMT Stock</td>                                  
                                                                 
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <%-- <div id="spreadsheetUpdateReceive" class="spreadsheet-width-auto"></div>--%>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%------------------%>

    <%------------------%>
    <div class="modal fade modalFullScreen" id="myModalRouteUpdateReceive-Detail" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalRouteUpdateReceive-Detail-Title">Update Receive Detail</h4>
                </div>
                <div class="modal-body">
                    <div>
                        <button type="button" id="btn-Route-SaveUpdateReceive-Detail" SmallRoute="" BigRoute="" class="btn btn-primary btn-sm">Lưu</button>
                        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Đóng</button>
                    </div>
                    <div class="div-data">
                        <table class="table table-bordered table-responsive" id="tbl-Route-SaveUpdateReceive-Detail">
                            <thead>
                                <tr>
                                    <td>Order No</td>
                                    <td>Po No </td>
                                    <td>Group Customer</td>
                                    <td>Customer Code</td>
                                    <td>Customer Name</td>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                        <div id="spreadsheetUpdateReceive-Detail" class="spreadsheet-width-auto"></div>
                    </div>
                    
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%------------------%>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/Distribution-Route.js") %>
</asp:Content>