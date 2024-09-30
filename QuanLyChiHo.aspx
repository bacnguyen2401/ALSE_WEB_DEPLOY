<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyChiHo.aspx.cs" Inherits="ALSE.QuanLyChiHo" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyChiHo.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div class="main-chiho">
        <div class="color-white text-align-center main-chiho-header">
            <h2>QUẢN LÝ CHI HỘ</h2>
        </div>
    </div>

    <div class="chiho-button margin-bottom-5px">
        <button type="button" class="btn btn-primary btn-chiho-kehoach">Thêm chi hộ</button>
        <button type="button" class="btn btn-info btn-chiho-kehoach-excel">Thêm chi hộ excel</button>
        <a href="QuanLyChiHoNCC.aspx" type="button" class="btn btn-success btn-chiho-ncc">Nhà cung cấp</a>
    </div>

    <div class="main-chiho-body">
        <table class="table table-bordered" id="tbl-chiho">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>NCU</td>
                    <td>Loại hình</td>
                    <td>Ngày CK</td>
                    <td>Khách hàng</td>
                    <td>AWB/BILL</td>
                    <td>Ký hiệu HĐ</td>
                    <td>Số HĐ</td>
                    <td>Ngày HĐ</td>
                    <td>Tên người bán</td>
                    <td>Số trước thuế</td>
                    <td>Thành tiền</td>
                    <td>Check</td>
                    <td>Ghi chú</td>
                    <td>Trạng thái DNTT</td>
                    <td>Trạng thái đối chiếu khách</td>
                    <td>ID nhập</td>
                    <td>Chức năng</td>
                </tr>
            </thead>
            <tbody>
                <!-- Thêm nhiều hàng hơn theo cách tương tự -->
            </tbody>
        </table>
    </div>


    <div class="modal fade" id="myModalViewChiHo" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="h4-chiho-view-tieude"></h4>
                </div>
                <div class="modal-body">
                    <div id="div-chiho-group-button">
                        <div id="div-chiho-button-chucnangkhac">
                        </div>

                        <div id="div-chiho-button-luu">
                        </div>
                    </div>

                    <%--Grid--%>
                    <div class="grid">
                        <%--NCU, loại hình , ngày chuyển khoản--%>
                        <div class="row">
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">NCC</span>
                                    <input type="text" class="form-control input-sm input-chiho-clear" id="input-chiho-ncu" list="sltNCC" />
                                    <datalist class="nobdInput" id="sltNCC">
                                    </datalist>
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="span-chiho-loaihinh-modify">Loại hình</span>
                                    <select class="form-control input-sm" id="select-chiho-loaihinh">
                                        <option value="IMP">IMPORT</option>
                                        <option value="EXP">EXPORT</option>
                                        <option value="TRUCK">TRUCK</option>
                                        <%-- <option>Phí chứng từ hàng nhập</option>
                                        <option>Phí an ninh soi chiếu</option>
                                        <option>Phí nâng hạ</option>
                                        <option>Phí cơ sở hạ tầng</option>
                                        <option>Phí local charge</option>
                                        <option>Phí THC</option>
                                        <option>Phí lưu kho</option>--%>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Ngày chuyển khoản</span>
                                    <input type="text" class="form-control input-sm input-chiho-ngay datepicker input-chiho-clear" id="input-chiho-ngaychuyenkhoan" />
                                </div>
                            </div>
                            <%-- <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Ngày Kết Thúc Kỳ</span>
                                    <input type="text" class="form-control input-sm input-chiho-ngay datepicker input-chiho-clear" id="input-chiho-ngayktky-modify" />
                                </div>
                            </div>--%>
                        </div>
                        <%--Ký hiệu hợp đồng , số HĐ , Ngày HĐ --%>
                        <div class="row">
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Ký hiệu HĐ</span>
                                    <input type="text" class="form-control input-sm input-chiho-clear" id="input-chiho-kihieuhd" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Số HĐ</span>
                                    <input type="text" class="form-control input-sm input-chiho-clear" id="input-chiho-sohd" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Ngày HĐ</span>
                                    <input type="text" class="form-control input-sm input-chiho-ngay datepicker input-chiho-clear" id="input-chiho-ngayhd" />
                                </div>
                            </div>
                        </div>
                        <%--END Ký hiệu hợp đồng , số HĐ , Ngày HĐ --%>

                        <%--Tên người bán , số tiền thuế , thành tiền--%>
                        <div class="row">
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Tên người bán</span>
                                    <input type="text" class="form-control input-chiho-clear" id="input-chiho-tennguoiban" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Số tiền thuế</span>
                                    <input type="text" class="form-control input-thanhtoan-number input-chiho-clear" id="input-chiho-sotienthue" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Thành tiền</span>
                                    <input type="text" class="form-control input-thanhtoan-number input-chiho-clear" id="input-chiho-thanhtien" />
                                </div>
                            </div>
                        </div>
                        <%--END Tên người bán , số tiền thuế , thành tiền--%>

                        <%--Khách hàng , AWB/BILL , check--%>
                        <div class="row">
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Khách hàng</span>
                                    <input type="text" class="form-control input-chiho-clear" id="input-chiho-khachhang" list="sltKhachHang" />
                                    <datalist class="nobdInput" id="sltKhachHang">
                                    </datalist>
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">AWB/BILL</span>
                                    <input type="text" class="form-control input-chiho-clear" id="input-chiho-awbbill" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Check</span>
                                    <input type="text" class="form-control input-chiho-clear" id="input-chiho-check" />
                                </div>
                            </div>
                        </div>
                        <%--END Khách hàng , AWB/BILL ,check--%>

                        <%--Trạng thái DNTT , Trạng thái đối chiếu khách , ID nhập--%>
                        <div class="row">
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Trạng thái DNTT</span>
                                    <input type="text" class="form-control input-chiho-clear" id="input-chiho-tt-dntt" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Trạng thái đối chiếu khách</span>
                                    <input type="text" class="form-control input-chiho-clear" id="input-chiho-tt-dck" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">ID nhập</span>
                                    <input type="text" class="form-control input-chiho-clear" id="input-chiho-idnhap" />
                                </div>
                            </div>
                        </div>
                        <%--END Trạng thái DNTT , Trạng thái đối chiếu khách , ID nhập--%>

                        <%--Ghi chú--%>
                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-chiho-group">
                                    <span class="input-group-addon" id="">Ghi Chú</span>
                                    <input type="text" class="form-control input-chiho-clear" id="input-chiho-ghichu" />
                                </div>
                            </div>
                        </div>
                        <%--END Ghi chú--%>
                    </div>
                    <%--END Grid--%>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="btn-luu-chiho">Lưu</button>
                        <button type="button" class="btn btn-warning" id="btn-capnhat-chiho" attrid="">Cập nhật</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="modalQuanLyChiHoExcel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">THÊM MỚI CHI HỘ</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-chiho-excel-luu" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheet" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>


    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyChiHo.js") %>
</asp:Content>
