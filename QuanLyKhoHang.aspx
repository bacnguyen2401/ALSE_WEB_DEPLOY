<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyKhoHang.aspx.cs" Inherits="ALSE.QuanLyKhoNhap" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyKhoNhap.css") %>
    <link rel="Stylesheet" href="https://cdn.datatables.net/1.10.24/css/jquery.dataTables.min.css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-qlkn">
        <div id="div-qlkn-menu-button">
            <div class="row">
                <div class="form-group col-sm-2">
                    <div class="input-group div-thanhtoan-group">
                        <span class="input-group-addon" id="">Start Date</span>
                        <input type="text" class="form-control input-sm input-qlkn-ngay datepicker input-thanhtoan-clear" id="input-qlkn-start-date" />
                    </div>
                </div>
                <div class="form-group col-sm-2">
                    <div class="input-group div-thanhtoan-group">
                        <span class="input-group-addon" id="">End Date</span>
                        <input type="text" class="form-control input-sm input-qlkn-ngay datepicker input-thanhtoan-clear" id="input-qlkn-end-date" />
                    </div>
                </div>
                <%--   <div class="form-group col-sm-3" id="div-qlkn-customers">
                    <div class="input-group div-thanhtoan-group">
                        <span class="input-group-addon" id="">Customer</span>
                        <select class="form-control input-sm" id="select-qlkn-customers">
                        </select>
                    </div>
                </div>--%>

                <%--   <div class="form-group col-sm-3" id="div-qlkn-text">
                    <div class="input-group div-thanhtoan-group">
                        <span class="input-group-addon" id="">Tên file</span>
                        <input type="text" class="form-control input-sm" id="text_ngaygio" />
                    </div>
                </div>--%>

                <div class="form-group col-lg-8" id="div-khothuong-groupbutton">
                    <button type="button" class="input-qlkn-show-data btn btn-primary btn-sm" value="Import">Import</button>
                    <button type="button" class="input-qlkn-show-data btn btn-info btn-sm" value="Export">Export</button>
                    <%--<button type="button" id="btn-Export-TKSLBH" class="input-qlkn-show-data btn btn-info btn-sm display-none" value="Export-TKSLBH">Thống kê sản lượng bán hàng</button>--%>
                    <button type="button" id="btn-hangthuong-storage" class="input-qlkn-show-data btn btn-success btn-sm" value="Storage">Storage</button>
                    <button type="button" class="btn btn-warning btn-sm" id="taiExcel" value="">Export Excel</button>
                    <button type="button" class="btn btn-warning btn-sm" id="searchTheoDNN" value="">List DNN</button>
                    <button type="button" class="btn btn-info btn-sm" id="taiExcelTable" value="">Export Table Excel</button>
                    <button type="button" class="btn btn-danger btn-sm" id="themExcelProductCode" value="">Update Product Code</button>
                    <button type="button" class="btn btn-danger btn-sm" id="themExcelQty" value="">Update Qty</button>
                    <%--<button type="button" id="btn-hangthuong-storageexp" class="input-qlkn-show-data btn btn-warning btn-sm" value="StorageEXP">Storage EXP</button>--%>
                    <%--<button type="button" id="btn-hangthuong-storageprojectexp" class="input-qlkn-show-data btn btn-warning btn-sm" value="Storage_Project_EXP">Storage Project EXP</button>--%>
                    <%--<span id="tooltip-storage"><i class="glyphicon glyphicon-info-sign"></i> Just choose End Date</span>
                    <%--surtec--%>
                    <%-- <button type="button" id="btn-surtec-quaylai" class=" btn btn-primary btn-sm display-none">Quay lại</button>
                    <button type="button" id="btn-surtec-thongke" class="input-qlkn-show-data btn btn-warning btn-sm display-none" value="Export-Surtec-ThongKe">Thống Kê</button>--%>


                    <%--end surtec--%>
                </div>
            </div>
        </div>
        <div class="row" id="truyvan-dnn">
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
                                <label for="usr">Nhập Danh Sách DNN:</label>
                                <%--<dx:ASPxMemo ID="txtListDanhSachDNN" runat="server" CssClass="form-control txtlistdsdnn" Height="300px" Width="170px"></dx:ASPxMemo>--%>
                                <textarea rows="15" cols="20" id="ta-danhsach-dnn">
                                </textarea>
                            </div>

                        </div>
                        <div class="truyvandnn-mid">
                            <div>
                                <%--<asp:Button ID="btnTruyVan" CssClass="btn btn-info btn-truyvan btn-kichthuoc-120" OnClick="btnTruyVan_Click" runat="server" Text="Truy Vấn >>" />--%>
                                <button id="btn-truyvan-dnn" type="button" class="btn btn-info  btn-kichthuoc-120">Truy Vấn</button>
                            </div>

                            <%--<div>--%>
                            <%--<asp:Button ID="btnTruyVanChiTiet" CssClass="btn btn-info btn-truyvan-chitiet btn-kichthuoc-120" OnClick="btnTruyVanChiTiet_Click" runat="server" Text="TV Chi Tiết >>" />--%>
                            <%--<button id="btn-truyvanchitiet-dnn" type="button" class="btn btn-info  ">Truy Vấn Chi Tiết</button>
                        </div>--%>

                            <%-- <div>
                            <input type="button" onclick="tableToExcel('tbl1', 'Truy Vấn Danh Sách DNN')" value="Tải Xuống" class="mani-btn btn btn-info btn-taixuong btn-kichthuoc-120" />
                        </div>--%>
                        </div>
                        <div style="float: left;" class="dataTable_wrapper truyvandnn-right">
                            <div id="tvdnnr-tieude">
                                <p>KẾT QUẢ TRUY VẤN</p>
                            </div>
                            <table id="tbl1" class="table table-striped table-bordered table-hover tbl-truyvandnn">
                                <thead>
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
        <div id="title-show-khohang">
        </div>
        <div>
            <span id="show-pcs"></span>
        </div>
        <div class="colorWeight">
            <span>KHO 1: <span id="tongK1"></span> (SF.WNC: <span id="idwncK1"></span>       SF.WNL: <span id="idwnlK1"></span></span>) <br />
            <span>KHO 2: <span id="tongK2"></span> (SF.WNC: <span id="idwncK2"></span>       SF.WNL: <span id="idwnlK2"></span></span>)
        </div>
        <div id="table-show">
        </div>
    </div>

    <%--Modal thêm product code--%>
    <div id="modalThemProductCode" class="modal fade in" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-full">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title">Thêm Product Code</h5>
                </div>

                <div class="modal-body">
                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-ProductCode-luu" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheet" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>

                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <%--Modal update Quantity--%>
    <div id="modalQuantity" class="modal fade in" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-full">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title">Update Quantity</h5>
                </div>

                <div class="modal-body">
                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-ProductCode-luuQty" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheetQuantity" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>

                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>


    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyKhoNhap.js") %>
</asp:Content>
