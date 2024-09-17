<%@ Page Title="QUẢN LÝ KHO THƯỜNG" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ReportQuanLyKhoThuong.aspx.cs" Inherits="ALSE.ReportQuanLyKhoThuong" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/report-quan-ly-kho-thuong.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-rqlkt">
        <div id="div-rqlkt-menu-button">
            <div class="row">
                <div class="form-group col-sm-2">
                    <div class="input-group div-thanhtoan-group">
                        <span class="input-group-addon" id="">Start Date</span>
                        <input type="text" class="form-control input-sm input-rqlkt-ngay datepicker input-thanhtoan-clear" id="input-rqlkt-start-date" />
                    </div>
                </div>
                <div class="form-group col-sm-2">
                    <div class="input-group div-thanhtoan-group">
                        <span class="input-group-addon" id="">End Date</span>
                        <input type="text" class="form-control input-sm input-rqlkt-ngay datepicker input-thanhtoan-clear" id="input-rqlkt-end-date" />
                    </div>
                </div>
                <div class="form-group col-sm-3 alse-display-none" id="div-rqlkt-customers">
                    <div class="input-group div-thanhtoan-group">
                        <span class="input-group-addon" id="">Customer</span>
                        <select class="form-control input-sm" id="select-rqlkt-customers">
                        </select>
                    </div>
                </div>
                <div class="form-group col-sm-2 display-none" id="div-rqlkt-customers-surtec">
                    <div class="input-group div-thanhtoan-group">
                        <span class="input-group-addon" id="">Customer</span>
                        <select class="form-control input-sm" id="select-rqlkt-customers-surtec">
                        </select>
                    </div>
                </div>

                <div class="form-group col-lg-5" id="div-khothuong-groupbutton">
                    <button type="button" class="input-rqlkt-show-data btn btn-primary btn-sm" value="Import">Import</button>
                    <button type="button" class="input-rqlkt-show-data btn btn-info btn-sm" value="Export">Export</button>
                    <button type="button" id="btn-Export-TKSLBH" class="input-rqlkt-show-data btn btn-info btn-sm display-none" value="Export-TKSLBH">Thống kê sản lượng bán hàng</button>

                    <button type="button" id="btn-hangthuong-storage" class="input-rqlkt-show-data btn btn-success btn-sm" value="Storage">Storage</button>
                    <button type="button" id="btn-hangthuong-storageexp" class="input-rqlkt-show-data btn btn-warning btn-sm" value="StorageEXP">Storage EXP</button>
                    <button type="button" id="btn-hangthuong-storageprojectexp" class="input-rqlkt-show-data btn btn-warning btn-sm" value="Storage_Project_EXP">Storage Project EXP</button>
                    <%--<span id="tooltip-storage"><i class="glyphicon glyphicon-info-sign"></i> Just choose End Date</span>--%>
                    <%--surtec--%>
                     <button type="button" id="btn-surtec-quaylai" class=" btn btn-primary btn-sm display-none" > Quay lại</button>
                    <button type="button" id="btn-surtec-thongke" class="input-rqlkt-show-data btn btn-warning btn-sm display-none" value="Export-Surtec-ThongKe">Thống Kê</button>
                   

                    <%--end surtec--%>

                </div>
            </div>
        </div>
        <div id="div-rqlkt-data">
            <div id="div-rqlkt-data-tieude">
                <span id="span-rqlkt-tieude"></span>

                <span id="span-rqlkt-ngay"></span>
            </div>
            <div id="div-rqlkt-thongke">
            </div>
            <div>
                <div class="form-check form-check-inline check-StorageProjectEXP">
                  <label class="form-check-label">
                    <input class="form-check-input radio-StorageProjectEXP" checked type="radio" name="inlineRadioOptionsStorageProjectEXP" id="inlineRadioPCS" value="pcs" /> PCS
                  </label>
                </div>
                <div class="form-check form-check-inline check-StorageProjectEXP">
                  <label class="form-check-label">
                    <input class="form-check-input radio-StorageProjectEXP" type="radio" name="inlineRadioOptionsStorageProjectEXP" id="inlineRadioKGS" value="kgs" /> KGS
                  </label>
                </div>
                <input type="button" onclick="tableToExcel('tbl-rqlkt', 'Báo cáo')" value="Xuất Excel" class="mani-btn btn btn-info btn-sm btn-xuatexcel" id="btn-export-excel" />
               <%-- <input type="button" onclick="fnExcelReport('tbl-rqlkt', 'Báo cáo')" value="Xuất Excel1" class="mani-btn btn btn-info btn-sm btn-xuatexcel" id="btn-export-excel1" />--%>
            </div>
            <div id="div-rqlkt-data-table">
            </div>
        </div>
    </div>
    <iframe id="txtArea1" style="display:none"></iframe>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/report-quan-ly-kho-thuong.js") %>

</asp:Content>