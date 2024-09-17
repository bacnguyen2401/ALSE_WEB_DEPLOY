<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyAPPLEXuatKho.aspx.cs" Inherits="ALSE.QuanLyAPPLEXuatKho" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyAPPLEXuatKho.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="div_quanlyapplexuatkho-main">
        <h3 class="div_quanlyapplexuatkho-main_title">Quản lý apple xuất kho</h3>
        <div class="div-div_quanlyapplexuatkho-details">
            <div class="row">
                <div class="form-group col-sm-2">
                    <input type="button" value="Ghép xe" class="btn btn-sm btn-info" id="btn-ghepxe" />
                </div>
            </div>
            <table class="table table-bordered" id="tbl_xuatkhoapple">
                <thead>
                    <tr>
                        <td>STT</td>
                        <td>DRIVER NAME</td>
                        <td>DRIVER ID</td>
                        <td>DRIVER TRUCK</td>
                        <td>PHONE</td>
                        <td>EXPORT DATETIME</td>
                        <td>CHỨC NĂNG</td>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>

    <%-- Modal thêm kế hoạch --%>
    <div id="modalGhepXe" class="modal fade in" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title">Ghép xe</h5>
                </div>

                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-4">
                            <div class="input-group">
                                <span class="input-group-addon" id="">SEARCH</span>
                                <input type="text" class="form-control input-sm" id="input-search" />
                                <div class="input-group-btn">
                                    <button type="button" id="btn-xem" class="btn btn-success btn-sm">XEM</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-3">
                            <div class="input-group">
                                <span class="input-group-addon" id="">BKS Xe Xuất</span>
                                <input type="text" class="form-control input-sm" id="input-bks" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Lái Xe</span>
                                <input type="text" class="form-control input-sm" id="input-laixe" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Ngày Xuất</span>
                                <input type="text" class="form-control datepicker input-sm" id="input-ngayxuat" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Giờ Xuất</span>
                                <input type="text" class="form-control timepicker input-sm" id="input-gioxuat" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-sm-3">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Số CMND</span>
                                <input type="text" class="form-control input-sm" id="input-cmnd" />
                            </div>
                        </div>


                        <div class="form-group col-sm-3">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Số điện thoại</span>
                                <input type="text" class="form-control input-sm" id="input-sdt" />
                            </div>
                        </div>
                    </div>


                    <div class="table-show-modal">
                        <table class="table table-bordered table-background-white" id="tbl-ghepxe">
                            <thead>
                                <tr>
                                    <td>
                                        <input type="checkbox" id="cb-print-all" class="td-checkbox" value="ALL" /></td>
                                    <td>No.</td>
                                    <td>PLTID</td>
                                    <td>PLT</td>
                                    <td>CTN</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                    <button type="button" id="btn-ghepxe-luu" class="btn btn-primary">Ghi</button>
                </div>
            </div>
        </div>
    </div>

    <%--Đây là phần HTML để in--%>
    <div class="div-tbl" style="width: 1050px" id="div-print">
        <table id="tg1" class="table table-hover tg">
            <thead>
                <tr>
                    <td class="tg-s6z2 nobd" colspan="7" style="font-size: x-large;">BÁO CÁO CHẤT XẾP</td>
                </tr>
                <tr>
                    <td class="tg-s6z2  nobd" colspan="7" style="font-size: x-large"></td>
                </tr>
                <tr>
                    <td class="tg-s6z2 auto-style2 nobd" colspan="7" style="font-size: x-large"><strong>Ngày&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsptháng&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbspnăm 2022</strong></td>
                </tr>
                <tr>
                    <td class="tg-s6z2 auto-style2 nobd" colspan="7" style="font-size: x-large"><strong>Biển số xe: <span class="txtBKS"></span></strong></td>
                </tr>
                <tr>
                    <td class="tg-s6z2 auto-style2 nobd" colspan="7" style="font-size: x-large"><strong>Tên lái xe: <span class="txtTenlaixe"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Số cmt/cccd: <span class="txtcmnd"></span></strong></td>
                </tr>
                <tr>
                    <td class="tg-s6z2 auto-style2 nobd" colspan="7" style="font-size: x-large"><strong>Giờ bắt đầu: <span class="txtNgayGio"></span></strong></td>
                </tr>
                <tr>
                    <td class="tg-s6z2 auto-style2 nobd" colspan="7" style="font-size: x-large"><strong>Tình trạng xe: <span class="txtTinhTrang"></span></strong></td>
                </tr>
                <tr>
                    <td class="auto-style2 nobd" colspan="7">&nbsp;</td>
                </tr>
                <tr class="auto-style3 bdbl">
                    <td class="ui-priority-primary bdbl">STT</td>
                    <td class="ui-priority-primary bdbl">PALLET ID</td>
                    <td class="ui-priority-primary bdbl">SỐ KIỆN</td>
                    <td class="ui-priority-primary bdbl">SỐ DN</td>
                    <td class="ui-priority-primary bdbl">SỐ CTN</td>
                    <td class="ui-priority-primary bdbl">ĐIỂM GIAO</td>
                    <td class="ui-priority-primary bdbl">GHI CHÚ</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tg-s6z2 auto-style2 nobd" colspan="7" style="font-size: x-large"><strong>Chúng tôi xác nhận về tình trạng hàng hóa không bất thường</strong></td>
                </tr>
                 <tr>
                    <td class="tg-s6z2 auto-style2 nobd" colspan="7" style="font-size: x-large"><strong>Tên nhân viên lái xe nâng: </strong></td>
                </tr>
                 <tr>
                    <td class="tg-s6z2 auto-style2 nobd" colspan="7" style="font-size: x-large"><strong>Nhân vien chụp ảnh: </strong></td>
                </tr>

                <tr class="auto-style3 kchuky">
                    <td class="ui-priority-primary bdbl " style="border: none!important;" colspan="9">&nbsp;</td>
                </tr>
                <tr class="auto-style3">
                    <td class="ui-priority-primary bdbl" colspan="5">Nhân viên xuất hàng<span class="txtTenKhoHang"></span></td>
                    <td class="ui-priority-primary bdbl" colspan="4">Nhân viên nhận hàng</td>
                </tr>
                <tr>
                    <td class="tg-031e bdbl" colspan="5">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <strong>
                            <br class="auto-style3" />
                           <%-- <span class="auto-style3">Nhận được lúc:.............. giờ, ngày.........................</span>--%></strong></td>
                    <td class="tg-031e bdbl" colspan="4"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyAPPLEXuatKho.js") %>
</asp:Content>
