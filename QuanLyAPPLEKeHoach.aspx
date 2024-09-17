<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyAPPLEKeHoach.aspx.cs" Inherits="ALSE.QuanLyAPPLEKeHoach" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyAPPLEKeHoach.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="div_quanlyapple-main">
        <h3 class="div_quanlyapple-main_title">Quản lý apple kế hoạch</h3>
        <div class="div-div_quanlyapple-details">
            <div class="row">
                <div class="form-group col-sm-2">
                    <input type="button" value="Thêm kế hoạch" class="btn btn-sm btn-info" id="btn-themkehoach" />
                </div>
            </div>
            <table class="table table-bordered" id="tbl_kehoachapple">
                <thead>
                    <tr>
                        <td>STT</td>
                        <td>Số HAWB</td>
                        <td>Tên người nhận</td>
                        <td>Sô DN</td>
                        <td>SL Pallets</td>
                        <td>Trọng lượng KH</td>
                        <td>Trọng lượng TT</td>
                        <td>SL CTN KH</td>
                        <td>SL CTN TT</td>
                        <td>Tình trạng</td>
                        <td>Ngày dự kiến <br /> hàng về</td>
                        <td>BKS</td>
                        <td>Tên lái xe</td>
                        <td>CMT/CCCD lxe</td>
                        <td>Tên phụ xe</td>
                        <td>CMT/CCCD phụ xe</td>
                        <td>CHỨC NĂNG</td>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>

   <%-- Modal thêm kế hoạch --%>
    <div id="modalThemKeHoach" class="modal fade in" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-full">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title">Thêm kế hoạch</h5>
                </div>

                <div class="modal-body">
                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-themkehoach-luu" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheet" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>

                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyAPPLEKeHoach.js") %>
</asp:Content>
