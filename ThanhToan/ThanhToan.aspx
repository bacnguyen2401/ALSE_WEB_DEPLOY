<%@ Page Title="THANH TOÁN" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ThanhToan.aspx.cs" Inherits="ALSE.ThanhToan.ThanhToan" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/thanhtoan-thanhtoan.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-thanhtoan">
        <div id="div-thanhtoan-button">
            <div class="row">
                <div class="col-sm-2">
                    <div class="input-group ">
                        <span class="input-group-addon" id="">Tháng</span>
                        <select class="form-control input-sm" id="select-thanhtoan-thang">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="input-group">
                        <span class="input-group-addon" id="">Năm</span>
                        <select class="form-control input-sm" id="select-thanhtoan-nam">
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                        </select>
                    </div>
                </div>
                <div class="col-sm-4">
                    <button type="button" id="btn-quanly-doanhthu" class="btn btn-success btn-sm">Doanh thu</button>
                    <button type="button" id="btn-quanly-chiphi" class="btn btn-primary btn-sm">Chi phi</button>
                    <button type="button" id="btn-quanly-chiho" class="btn btn-warning btn-sm">Chi hộ</button>
                    <button type="button" id="btn-quanly-showThongKe" class="btn btn-danger btn-sm">Thống kê</button>
                </div>

                <div class="col-sm-4">
                    <button type="button" id="btn-quanly-khdt" class="btn btn-success btn-sm">Khách hàng/Đối tác</button>

                    <button type="button" id="btn-quanly-baocao" class="btn btn-primary btn-sm">Bảng kê thanh toán</button>
                </div>
            </div>
        </div>
        <div id="div-thanhtoan-body">
            <p id="p-thanhtoan-tieude"></p>
            <div>
                <table class="table table-bordered" id="tbl-thanhtoan-tonghop">
                    <thead >
                        <tr>
                            <td>Loại Hình</td>
                            <td>Xuất</td>
                            <td>Nhập</td>
                            <td>Logistics</td>
                            <td>Thuê Kho</td>
                            <td>Mở Tờ Khai</td>
                            <td>Hàng Nguy Hiểm</td>
                            <td>Thuê Phòng</td>
                            <td>Thuê Xe</td>
                            <td>Khác</td>
                            <td>Tổng</td>
                            <td>Chi hộ</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <div id="div-button-table">
            </div>
            <table class="table table-bordered tbl-thanhtoan" id="">
                <thead class="postionSticky"> 
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="myModalViewThanhToan" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="h4-thanhtoan-view-tieude"></h4>
                </div>
                <div class="modal-body">
                    <div id="div-thanhtoan-group-button">
                        <div id="div-thanhtoan-button-chucnangkhac">
                        </div>

                        <div id="div-thanhtoan-button-luu">
                        </div>
                    </div>

                    <%--Grid--%>
                    <div class="grid">
                        <%--Khách hàng, loại hình, tháng, năm--%>
                        <div class="row">
                            <div class="form-group col-sm-3">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon" id="span-thanhtoan-khachhang-modify"></span>
                                    <select class="form-control input-sm" id="select-thanhtoan-khachhang-modify">
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-sm-3">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon" id="">Loại Hình</span>
                                    <select class="form-control input-sm" id="select-thanhtoan-loaihinh-modify">
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-sm-3">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon" id="">Tháng</span>
                                    <select class="form-control input-sm" id="select-thanhtoan-thang-modify">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-sm-3">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon" id="">Năm</span>
                                    <select class="form-control input-sm" id="select-thanhtoan-nam-modify">
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <%--END Khách hàng, loại hình, tháng, năm--%>
                        <%--Kỳ, Ngày Bắt Đầu, Ngày Kết Thúc--%>
                        <div class="row">
                            <div class="form-group col-sm-2">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon" id="">Kỳ</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-clear input-thanhtoan-number" id="input-thanhtoan-ky-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon" id="">Ngày Bắt Đầu Kỳ</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-ngay datepicker input-thanhtoan-clear" id="input-thanhtoan-ngaybdky-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon" id="">Ngày Kết Thúc Kỳ</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-ngay datepicker input-thanhtoan-clear" id="input-thanhtoan-ngayktky-modify" />
                                </div>
                            </div>
                        </div>
                        <%--END Kỳ, Ngày Bắt Đầu, Ngày Kết Thúc--%>
                        <%--Sản Lượng, Giá Trị--%>
                        <div class="row">
                            <div class="form-group col-sm-4">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon" id="">Sản Lượng</span>
                                    <input type="text" class="form-control input-thanhtoan-sanluong input-thanhtoan-number input-thanhtoan-clear" id="input-thanhtoan-sanluong-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon" id="">Giá Trị</span>
                                    <input type="text" class="form-control input-thanhtoan-giatri input-thanhtoan-number input-thanhtoan-clear" id="input-thanhtoan-giatri-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4 doanhthu-hide">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon" id="">Giá Trị ST</span>
                                    <input type="text" class="form-control input-thanhtoan-giatri-sauthue input-thanhtoan-number input-thanhtoan-clear" id="input-thanhtoan-giatri-sauthue-modify" />
                                </div>
                            </div>
                            
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6 chiphi-hide">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon" id="">Chi Hộ</span>
                                    <input type="text" class="form-control input-thanhtoan-chiho input-thanhtoan-number input-thanhtoan-clear" id="input-thanhtoan-chiho-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6 chiphi-hide">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon" id="">Số SO</span>
                                    <input type="text" class="form-control input-thanhtoan-soso  input-thanhtoan-clear" id="input-thanhtoan-soso-modify" />
                                </div>
                            </div>
                        </div>
                        <%--END Sản Lượng, Giá Trị--%>
                        <%--checkbox1--%>
                        <div class="has-warning chiphi-hide">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="checkboxSuccess-guibangke" class="input-thanhtoan-checkbox" value="guibangke" />
                                    Đã gửi bản kê
                                </label>
                            </div>
                        </div>
                        <%--END checkbox1--%>
                        <%--Gửi bản kê--%>
                        <div class="row chiphi-hide">
                            <div class="form-group col-sm-4 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Ngày Gửi</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-ngay input-guibangke datepicker input-thanhtoan-clear" id="input-thanhtoan-ngayguibangke-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-3 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-gio-bangke" id="">Giờ Gửi</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-gio input-guibangke timepicker-thanhtoan input-thanhtoan-clear" id="input-thanhtoan-gioguibangke-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-5 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Người Gửi</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-nguoi input-guibangke input-thanhtoan-clear" id="input-thanhtoan-nguoiguibangke-modify" />
                                </div>
                            </div>
                        </div>
                        <%--END Gửi bản kê--%>
                        <%--checkbox1--%>
                        <div class="has-warning">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="checkboxSuccess-xacnhanbangke" class="input-thanhtoan-checkbox" value="xacnhanbangke" />
                                    Đã xác nhận bảng kê
                                </label>
                            </div>
                        </div>
                        <%--END checkbox1--%>
                        <%--Xác Nhận Bản Kê--%>
                        <div class="row">
                            <div class="form-group col-sm-4 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Ngày Xác Nhận</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-ngay input-xacnhanbangke datepicker input-thanhtoan-clear" id="input-thanhtoan-ngayxacnhanbangke-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-3 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon  span-gio-bangke" id="">Giờ Xác Nhận</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-gio input-xacnhanbangke timepicker-thanhtoan input-thanhtoan-clear" id="input-thanhtoan-gioxacnhanbangke-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-5 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Người Xác Nhận</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-nguoi input-xacnhanbangke input-thanhtoan-clear" id="input-thanhtoan-nguoixacnhanbangke-modify" />
                                </div>
                            </div>
                        </div>
                        <%--END Xác Nhận Bản Kê--%>
                        <%--checkbox1--%>
                        <div class="has-warning doanhthu-hide">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="checkboxSuccess-danhanhoadongoc" class="input-thanhtoan-checkbox" value="danhanhoadongoc" />
                                    Đã nhận hóa đơn gốc
                                </label>
                            </div>
                        </div>
                        <%--END checkbox1--%>
                        <%--đã Nhận hóa đơn gốc--%>
                        <div class="row doanhthu-hide">
                            <div class="form-group col-sm-4 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Ngày nhận hóa đơn</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-ngay input-danhanhoadongoc datepicker input-thanhtoan-clear" id="input-thanhtoan-ngaydanhanhoadongoc-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-3 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon  span-gio-bangke" id="">Giờ nhận hóa đơn</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-gio input-danhanhoadongoc timepicker-thanhtoan input-thanhtoan-clear" id="input-thanhtoan-giodanhanhoadongoc-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-5 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Người nhận hóa đơn</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-nguoi input-danhanhoadongoc input-thanhtoan-clear" id="input-thanhtoan-nguoidanhanhoadongoc-modify" />
                                </div>
                            </div>
                        </div>
                        <div class="row doanhthu-hide">

                            <div class="form-group col-sm-4 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon  span-gio-bangke" id="">Số hóa đơn</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first  input-danhanhoadongoc  input-thanhtoan-clear" id="input-thanhtoan-danhanhoadongoc-sohoadon-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Loại thanh toán</span>
                                    <select class="form-control input-sm input-thanhtoan-disable-first  input-danhanhoadongoc" id="select-danhanhoadongoc-loaithanhtoan-modify">
                                        <option value="Chuyển khoản">Chuyển khoản</option>
                                        <option value="Tiền mặt">Tiền mặt</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-sm-4 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon  span-gio-bangke" id="">Người chi trả</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first  input-danhanhoadongoc  input-thanhtoan-clear" id="input-thanhtoan-danhanhoadongoc-nguoichitra-modify" />
                                </div>
                            </div>
                        </div>
                        <%--END đã Nhận hóa đơn gốc--%>
                        <%--checkbox1--%>
                        <div class="has-warning doanhthu-hide">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="checkboxSuccess-chuyenketoan" class="input-thanhtoan-checkbox" value="chuyenketoan" />
                                    Đã chuyển kế toán
                                </label>
                            </div>
                        </div>
                        <%--END checkbox1--%>
                        <%--Chuyển kế toán--%>
                        <div class="row doanhthu-hide"><%--bắc thay thế chiphi-hide--%>
                            <div class="form-group col-sm-4 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Ngày Chuyển</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-ngay input-chuyenketoan datepicker input-thanhtoan-clear" id="input-thanhtoan-ngaychuyenketoan-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-5 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Người Chuyển</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-nguoi input-chuyenketoan input-thanhtoan-clear" id="input-thanhtoan-nguoichuyenketoan-modify" />
                                </div>
                            </div>
                        </div>
                        <%--Chuyển kế toán--%>
                        <%--checkbox1--%>
                        <div class="has-warning doanhthu-hide">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="checkboxSuccess-dachuyenhoadonketoan" class="input-thanhtoan-checkbox" value="dachuyenhoadonketoan" />
                                    Đã chuyển hóa đơn kế toán
                                </label>
                            </div>
                        </div>
                        <%--END checkbox1--%>
                        <%--Đã chuyển hóa đơn kế toán--%>
                        <div class="row doanhthu-hide">
                            <div class="form-group col-sm-4 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Ngày Chuyển</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-ngay input-dachuyenhoadonketoan datepicker input-thanhtoan-clear" id="input-thanhtoan-ngaydachuyenhoadonketoan-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-3 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon  span-gio-bangke" id="">Giờ Chuyển</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-gio input-dachuyenhoadonketoan timepicker-thanhtoan input-thanhtoan-clear" id="input-thanhtoan-giodachuyenhoadonketoan-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-5 has-warning">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Người Chuyển</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-nguoi input-dachuyenhoadonketoan input-thanhtoan-clear" id="input-thanhtoan-nguoidachuyenhoadonketoan-modify" />
                                </div>
                            </div>
                        </div>
                        <%--Đã chuyển hóa đơn kế toán--%>
                        <%--checkbox1--%>
                        <div class="has-success chiphi-hide">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="checkboxSuccess-phathanh" class="input-thanhtoan-checkbox" value="phathanh" />
                                    Đã xuất hóa đơn
                                </label>
                            </div>
                        </div>
                        <%--END checkbox1--%>
                        <%--xuất hóa đơn--%>
                        <div class="row chiphi-hide">
                            <div class="form-group col-sm-4 has-success">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Số HĐ</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-nguoi input-phathanh input-thanhtoan-clear" id="input-thanhtoan-sohoadon-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4 has-success">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Ngày Xuất</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-ngay input-phathanh datepicker input-thanhtoan-clear" id="input-thanhtoan-ngayphathanh-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4 has-success">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Người Xuất</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-nguoi input-phathanh input-thanhtoan-clear" id="input-thanhtoan-nguoiphathanh-modify" />
                                </div>
                            </div>
                        </div>
                        <%--xuất hóa đơn--%>
                        <%--checkbox1--%>
                        <div class="has-success chiphi-hide">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="checkboxSuccess-chuyenphat" class="input-thanhtoan-checkbox" value="chuyenphat" />
                                    Đã chuyển hóa đơn
                                </label>
                            </div>
                        </div>
                        <%--END checkbox1--%>
                        <%--Chuyển hóa đơn--%>
                        <div class="row chiphi-hide">
                            <div class="form-group col-sm-4 has-success">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Ngày Chuyển</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-ngay input-chuyenphat datepicker input-thanhtoan-clear" id="input-thanhtoan-ngaychuyenphat-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-5 has-success">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Người Chuyển</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-nguoi input-chuyenphat input-thanhtoan-clear" id="input-thanhtoan-nguoichuyenphat-modify" />
                                </div>
                            </div>
                        </div>
                        <%--Chuyển hóa đơn--%>

                        <%--checkbox1--%>
                        <div class="has-success">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" id="checkboxSuccess-thanhtoan" class="input-thanhtoan-checkbox" value="thanhtoan" />
                                    Đã thanh toán
                                </label>
                            </div>
                        </div>
                        <%--END checkbox1--%>
                        <%--Thanh Toán--%>
                        <div class="row">
                            <div class="form-group col-sm-4 has-success">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="">Ngày TT</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-ngay input-thanhtoan datepicker input-thanhtoan-clear" id="input-thanhtoan-ngaythanhtoan-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-5 has-success">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon span-ngaygio-bangke" id="span-dathanhtoan-nguoi">Người TT</span>
                                    <input type="text" class="form-control input-sm input-thanhtoan-disable-first input-thanhtoan-nguoi input-thanhtoan input-thanhtoan-clear" id="input-thanhtoan-nguoithanhtoan-modify" />
                                </div>
                            </div>
                        </div>
                        <%--Thanh Toán--%>

                        <%--Ghi chú--%>
                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-thanhtoan-group">
                                    <span class="input-group-addon" id="">Ghi Chú</span>
                                    <input type="text" class="form-control input-thanhtoan-clear" id="input-thanhtoan-ghichu-modify" />
                                </div>
                            </div>
                        </div>
                        <%--END Ghi chú--%>

                        <%--Đính kèm--%>
                        <div class="row">
                            <%--<div class="form-group col-sm-10">
                                <div class="input-group div-thanhtoan-group">--%>
                            <div id="div-thanhtoan-dinhkem">
                                <span class="glyphicon glyphicon-paperclip color-8c8c8c activity-icon"></span>
                                <span class="td-bold activity-text">Danh sách file đính kèm</span>
                                <div id="div-filedinhkem-list">
                                    <table id="table-filedinhkem" class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <td></td>
                                                <td>Ảnh</td>
                                                <td>Tên File</td>
                                                <td>Kích Thước</td>
                                                <td>Tải Xuống</td>
                                                <td>Xóa</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <%--    </div>
                            </div>--%>
                        </div>
                        <%--END Đính kèm--%>
                    </div>
                    <%--END Grid--%>
                    <div class="modal-footer">

                        <button type="button" class="btn btn-default" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModalUpload" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">Upload File: <span id="span-upload-tilte" class="color-red font-weight-bold"></span></h4>
                </div>
                <div class="modal-body">
                    <div id="div-upload-btn" class="div-upload-group">
                        <label for="f_UploadImage" class="btn btn-success btn-sm">
                            <i class="glyphicon glyphicon-plus"></i>Chọn file...
                        </label>
                        <a class="btn btn-primary btn-sm" id="a-upload-startupload"><i class="glyphicon glyphicon-upload"></i>Bắt đầu tải lên</a>
                        <a class="btn btn-danger btn-sm" id="a-upload-delete-all"><i class="glyphicon glyphicon-trash"></i>Xóa hết</a>
                        <input type="file" class="upload" id="f_UploadImage" multiple="multiple" accept="image/jpg, image/png, image/gif, image/jpeg,application/pdf,application/msword,
  application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" /><br />
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped active" role="progressbar"
                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 0%" id="div-upload-process-bar">
                            0%
                        </div>
                    </div>
                    <div id="div-upload-imgzone" class="div-upload-group">
                        <table class="table table-bordered table-responsive" id="tbl-upload-imgzone">
                            <thead>
                                <tr>
                                    <td>Trạng Thái</td>
                                    <td>Ảnh</td>
                                    <td>Tên File</td>
                                    <td>Kích Thước</td>
                                    <td>Xóa</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">

                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="myModalViewThanhToan-CongNo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id=""><span id="span-congno-tenthongke"></span><span id="span-congno-nam"></span></h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Loại Báo cáo</span>
                                <select class="form-control input-sm" id="select-thanhtoan-thongke-loaithanhtoan">
                                    <option value="CN">Công nợ</option>
                                    <option value="DT">Công nợ đã thu</option>
                                    <option value="DTT">Doanh Thu</option>
                                    <option value="CP">Chi Phí</option>
                                    <option value="CH">Chi Hộ</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Loại Hình</span>
                                <select class="form-control input-sm" id="select-thanhtoan-thongke-loaihinh">
                                  
                                </select>
                            </div>
                        </div>
                  <%--      <div class="col-sm-2">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Tháng</span>
                                <select class="form-control input-sm" id="select-thanhtoan-thongke-thang">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                        </div>--%>
                        <div class="col-sm-2">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Năm</span>
                                <select class="form-control input-sm" id="select-thanhtoan-thongke-nam">
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <button type="button" id="btn-thanhtoan-thongke" loaithongke="CN" tenthongke="THỐNG KÊ CÔNG NỢ " class="btn btn-success btn-sm">Thống Kê</button>
                        </div>
                    </div>

                    <table class="table table-bordered" id="tbl-congno">
                        <thead>
                            <tr>
                                <td rowspan="2">Khách Hàng</td>
                                <td rowspan="2" id="td-namtruoc"></td>
                                <td colspan="12" id="td-namchon"></td>
                                <td rowspan="2">Tổng</td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>

                    <div class="modal-footer">

                        <button type="button" class="btn btn-default" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <%------------------%>
    <div class="modal fade" id="myModalNewThanhToan" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalNewThanhToan-Title">Thêm mới</h4>
                </div>
                <div class="modal-body">
                    <div>
                        <button type="button" id="inp-fire" class="btn btn-primary btn-sm">Lưu</button>
                        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Đóng</button>
                    </div>
                    <div id="spreadsheet" class="spreadsheet-width-auto"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%------------------%>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/thanhtoan-thanhtoan.js") %>
</asp:Content>