<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="DanhSachVatTu.aspx.cs" Inherits="ALSE.DanhSachVatTu.DanhSachVatTu" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/DanhSachVatTu.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-danhsachvattu">
        <div id="div-danhsachvattu-button">
            <div id="div-danhsachvattu-title">
                <h2 class="text-center">Quản lý vật tư</h2>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <button type="button" id="btn-danhsachvattu-excel" class="btn btn-primary">Thêm vật tư Excel</button>
                    <button type="button" id="btn-danhsachvattu" class="btn btn-primary">Thêm vật tư</button>
                </div>
            </div>
        </div>
    </div>
    <div id="div-danhsachvattu-body">
        <div>
            <table class="table table-bordered" id="tbl-danhsachvattu">
                <thead>
                    <tr>
                        <td>STT</td>
                        <td>Mã vật tư</td>
                        <td>Tên vật tư</td>
                        <td>Đơn vị tính</td>
                        <td>Trọng lượng</td>
                        <td>Kích thước</td>
                        <td>Thông số khác</td>
                        <td>Số lượng tồn kho</td>
                        <td>Ảnh</td>
                        <td>Chức năng</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
    <%--Modal thêm sửa vật tư--%>
    <div class="modal fade" id="div-modal-themsua-danhsachvattu" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title modal-title-1"></h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-4 has-success">
                            <div class="input-group">
                                <span class="input-group-addon " id="">Mã vật tư</span>
                                <input type="text" class="form-control input-sm" id="txtMavattu" />
                            </div>
                            <div id="error-Mavattu" class="has-danger">
                            </div>
                        </div>
                        <div class="form-group col-sm-4  has-success">
                            <div class="input-group ">
                                <span class="input-group-addon " id="">Tên vật tư</span>
                                <input type="text" class="form-control input-sm" id="txtTenvattu" />
                            </div>
                            <div id="error-Tenvattu" class="has-danger">
                            </div>
                        </div>
                        <div class="form-group col-sm-4  has-success">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Đơn vị tính</span>
                                <select class="form-control input-sm" id="select-Donvitinh">
                                    <option value="cái">Cái</option>
                                    <option value="cuộn">Cuộn</option>
                                    <option value="gói">Gói</option>
                                    <option value="bọc">Bọc</option>
                                    <option value="chiếc">Chiếc</option>
                                    <option value="chai">Chai</option>
                                    <option value="lọ">Lọ</option>
                                    <option value="bao">Bao</option>
                                    <option value="túi">Túi</option>
                                    <option value="quả">Quả</option>
                                    <option value="chiếc">Chiếc</option>
                                    <option value="quyển">Quyển</option>
                                    <option value="bộ">Bộ</option>
                                    <option value="bình">Bình</option>
                                    <option value="can">Can</option>
                                    <option value="hộp">Hộp</option>
                                    <option value="kg">Kg</option>
                                    <option value="viên">Viên</option>
                                    <option value="vỉ">Vỉ</option>
                                    <option value="quyển">Quyển</option>
                                    <option value="tập">Tập</option>
                                    <option value="thùng">Thùng</option>
                                    <option value="ram">Ram</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-4 has-success">
                            <div class="input-group">
                                <span class="input-group-addon " id="">Trọng lượng</span>
                                <input type="text" class="form-control input-sm" id="txtTrongluong" />
                            </div>
                        </div>
                        <div class="form-group col-sm-4  has-success">
                            <div class="input-group ">
                                <span class="input-group-addon " id="">Kích thước</span>
                                <input type="text" class="form-control input-sm" id="txtKichthuoc" />
                            </div>
                        </div>
                        <div class="form-group col-sm-4  has-success">
                            <div class="input-group ">
                                <span class="input-group-addon " id="">Thông số khác</span>
                                <input type="text" class="form-control input-sm" id="txtThongsokhac" />
                            </div>
                        </div>
                        <div class="form-group col-sm-4  has-success">
                            <div class="input-group ">
                                <span class="input-group-addon " id="">Số lượng tồn</span>
                                <input type="text" class="form-control input-sm" id="txtSoLuongTon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-info" id="btn-AddNew">Thêm mới</button>
                    <button type="button" class="btn btn-success" id="btn-Update" data-update="">Cập nhật</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>



    <%--Modal excel--%>
    <div class="modal fade modal-fullscreen" id="modalVattuExcel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">Thêm vật tư </h4>
                </div>
                <div class="modal-body">

                    <div id="spreadsheet" class="spreadsheet-width-auto spreadsheet-height-350"></div>
                    <%--class="spreadsheet-width-auto spreadsheet-height-400"--%>
                </div>
                <div class="modal-footer">
                    <div class="row">
                        <button type="button" id="btn-themvattu-luu" class="btn btn-primary">Thêm mới</button>
                        <%--<button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>--%>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <%---------------------------%>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/DanhSachVatTu.js") %>
</asp:Content>
