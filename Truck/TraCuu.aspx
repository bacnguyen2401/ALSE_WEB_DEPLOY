<%@ Page Title="TRA CỨU CƯỚC VẬN TẢI - CARGO" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="TraCuu.aspx.cs" Inherits="ALSE.Truck.TraCuu" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/TruckTraCuu.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div>
        <input type="button" class="btn btn-sm btn-primary display-none" name="" value="Quản lý giá mua" id="btn-quanly-giamua" />
        <input type="button" class="btn btn-sm btn-warning display-none" name="" value="Quản lý giá bán" id="btn-quanly-giaban" />
        <input type="button" class="btn btn-sm btn-success" name="" value="Quản lý mã khách hàng" id="btn-quanly-makhachhang" />
        <input type="button" class="btn btn-sm btn-primary" name="" value="Quản lý tuyến" id="btn-quanly-tuyen" />
        <input type="button" class="btn btn-sm btn-primary" name="" value="Đánh giá Vendor Trucking (KPI)" id="btn-danhgia-vendor-trucking" />
    </div>

    <div id="div-tracuu">
        <h3>TRA CỨU CƯỚC VẬN TẢI</h3>
        <div class="grid">
            <div class="row">

                <div class="form-group col-sm-4 has-success">
                    <div class="input-group div-tracuu-group">
                        <span class="input-group-addon" id="">Thành phố xuất phát</span>
                        <select class="form-control input-sm width-150 select-tracuu" id="select-tracuu-diemxuatphat-thanhpho">
                        </select>
                    </div>
                </div>
                <div class="form-group col-sm-4 has-success">
                    <div class="input-group div-tracuu-group">
                        <span class="input-group-addon" id="">Điểm xuất phát</span>
                        <select class="form-control input-sm width-150 select-tracuu" id="select-tracuu-diemxuatphat">
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-sm-4 has-success">
                    <div class="input-group div-tracuu-group">
                        <span class="input-group-addon" id="">Thành phố đến</span>
                        <select class="form-control input-sm width-150 select-tracuu" id="select-tracuu-diemden-thanhpho">
                        </select>
                    </div>
                </div>
                <div class="form-group col-sm-4 has-success">
                    <div class="input-group div-tracuu-group">
                        <span class="input-group-addon" id="">Điểm đến</span>
                        <select class="form-control input-sm width-150" id="select-tracuu-diemden">
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-sm-3 has-warning">
                    <div class="input-group div-tracuu-group">
                        <span class="input-group-addon" id="">Khách hàng</span>
                        <select class="form-control input-sm width-120" id="select-tracuu-khachhang">
                        </select>
                    </div>
                </div>
                <div class="form-group col-sm-3 has-warning">
                    <div class="input-group div-tracuu-group">
                        <span class="input-group-addon" id="">Loại xe</span>
                        <select class="form-control input-sm width-120" id="select-tracuu-loaixe">
                            <%--Equipment Type--%>
                        </select>
                    </div>
                </div>
                <%-- <div class="form-group col-sm-2">
                    <div class="input-group div-tracuu-group">
                        <span class="input-group-addon" id="">Tải trọng</span>
                        <select class="form-control input-sm" id="select-tracuu-taitrong">
                        </select>
                    </div>
                </div>--%>
                <div class="form-group col-sm-3 has-warning">
                    <div class="input-group div-tracuu-group">
                        <span class="input-group-addon" id="">Thể tích</span>
                        <select class="form-control input-sm width-120" id="select-tracuu-thetich">
                        </select>
                    </div>
                </div>
                <div class="form-group col-sm-3 has-warning">
                    <div class="input-group div-tracuu-group">
                        <span class="input-group-addon" id="">Đơn vị vận tải</span>
                        <select class="form-control input-sm width-120 " id="select-tracuu-donvivantai">
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <input type="button" name="name" value="TRA CỨU" id="btn-tracuu" class="btn btn-sm btn-warning" disabled/>
                <input type="button" name="name" value="ĐẶT LẠI" id="btn-tracuu-datlai" class="btn btn-sm btn-primary" />
            </div>
            <div class="row-tracuu">

                <table class="table table-bordered tbl-giamua" id="tbl-giamua-dabao">
                    <thead>
                        <tr>
                            <th>Lane</th>
                      <%--      <th class="giamua-origin">Origin</th>
                            <th class="giamua-origin-city">Org City</th>
                            <th class="giamua-destination">Destination</th>
                            <th class="giamua-destination-city">Dest City</th>--%>
                            <th>Equipment Type</th>
                            <th>Mode</th>
                            <th>Service Type </th>
                            <th>Service Group</th>
                            <th>Lead time (m)</th>
                            <th>Vol  </th>
                            <th>Weight (kg)</th>
                            <th>Dim of Truck box (m)  </th>
                            <th>Vendor code </th>
                            <th>Giá bán</th>
                            <th>Free detention (h)</th>
                            <th>Detention cost (h)  </th>
                            <th class="giamua-maximum-dention-cost">Max detention cost (day)  </th>
                            <th>Handling cost</th>
                            <th>CD supervision cost</th>
                            <th class="giamua-customs-supervise-cost-redcd">CD supervision cost (red)</th>
                            <th>Loading/Unloading cost (ton) </th>
                            <th class="giamua-remark">Remark </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <div class="row-tracuu">
                <table class="table table-bordered tbl-giamua" id="tbl-giamua">
                    <thead>
                        <tr>
                            <th>Lane  </th>                           
                           <%-- <th class="giamua-origin">Origin </th>
                            <th class="giamua-origin-city">Org City  </th>
                            <th class="giamua-destination">Destination  </th>
                            <th class="giamua-destination-city">Dest City</th>--%>
                            <th>Equipment Type  </th>                         
                            <th>Mode</th>
                            <th>Service Type </th>
                            <th>Service Group</th>
                            <th>Lead time (m)</th>
                            <th>Vol  </th>
                            <th>Weight (kg)</th>
                            <th>Dim of Truck box (m)  </th>
                            <th>Vendor code </th>
                            <th>Giá bán</th>
                            <th>Free detention (h)</th>
                            <th>Detention cost (h)  </th>
                            <th class="giamua-maximum-dention-cost">Max detention cost (day)  </th>
                            <th>Handling cost</th>
                            <th>CD supervision cost</th>
                            <th class="giamua-customs-supervise-cost-redcd">CD supervision cost (red)</th>
                            <th>Loading/Unloading cost (ton) </th>
                            <th class="giamua-remark">Remark </th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/TruckTraCuu.js") %>
</asp:Content>