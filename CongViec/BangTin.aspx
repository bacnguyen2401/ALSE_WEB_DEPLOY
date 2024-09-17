<%@ Page Title="BẢNG TIN - ALSE CARGO" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="BangTin.aspx.cs" Inherits="ALSE.CongViec.BangTin" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/CongViec-BangTin.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-bangtin-main">

        <h3>QUẢN LÝ CÔNG VIỆC</h3>

        <div class="div-bangtin-deltail" id="div-detail-bangtin">
            <div class="row ">
                <div class="form-group col-sm-2">
                    <div class="input-group div-bangtin-group width-170px ">
                        <span class="input-group-addon" id="">Từ ngày</span>
                        <input type="text" class="form-control input-sm input-bangtin-ngay datepicker input-bangtin-clear" id="input-bangtin-tungay" />
                    </div>
                </div>
                <div class="form-group col-sm-2">
                    <div class="input-group div-bangtin-group width-170px">
                        <span class="input-group-addon" id="">Đến ngày</span>
                        <input type="text" class="form-control input-sm input-bangtin-ngay  datepicker input-bangtin-clear" id="input-bangtin-denngay" />
                    </div>
                </div>

                <div class="form-group col-sm-6" id="">
                    <input type="button" value="XEM" class="btn btn-sm btn-info" id="btn-bangtin-xem" />
                    <input type="button" value="BÁO CÁO" class="btn btn-sm btn-success" id="btn-bangtin-baocao" />
                    <%--<input type="button" value="Hướng Dẫn" class="btn btn-sm btn-warning" id="btn-bangtin-huongdan" />--%>
                    <label class="checkbox-inline">
                        <input type="checkbox" class="cb-bt" id="cb-all" value="all" />(<span id="span-congviec-tong"></span>) ALL</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" class="cb-bt cb-bt-child" checked id="cb-canhan" value="canhan" />(<span id="span-congviec-canhan"></span>) CÁ NHÂN</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" class="cb-bt cb-bt-child" id="cb-nhom" value="nhom" />(<span id="span-congviec-nhom"></span>) NHÓM</label>
                    <label class="checkbox-inline">
                        <input type="checkbox" class="cb-bt cb-bt-child" id="cb-phanviec" value="phanviec" />(<span id="span-congviec-phanviec"></span>) GIAO VIỆC</label>
                </div>
                <div class="form-group col-sm-2" id="">

                    <input type="button" value="THÊM" class="btn btn-sm btn-info" id="btn-bangtin-them" />
                    <input type="button" value="BÀN GIAO CA" class="btn btn-sm btn-success display-none" id="btn-bangtin-bangiaoca" />
                </div>
            </div>

            <div>
                <table class="table table-bordered tbl-bangtin" id="tbl-bangtin">
                    <thead>
                        <tr>
                            <td rowspan="2" class="td-stt">STT</td>
                            <td rowspan="2" class="td-trangthai">Trạng thái</td>
                            <td rowspan="2" class="td-ngaybatdau">Ngày bắt đầu</td>
                            <td rowspan="2" class="td-hanketthuc">Ngày kết thúc</td>
                            <td class="td-noidung">Nội dung</td>
                            <td rowspan="2" class="td-thuchien">Tiến độ</td>
                            <td rowspan="2" class="td-doituong">Đối tượng</td>
                            <td rowspan="2" class="td-chucnang">Chức năng</td>
                        </tr>
                        <tr>
                            <td>

                                <select class="form-control input-sm" id="select-bangtin-phanloai-loc">
                                    <option value="">--LỌC--</option>
                                    <option value="EXP">EXP</option>
                                    <option value="IMP">IMP</option>
                                    <option value="LOG">LOG</option>
                                    <option value="NWH">NWH</option>
                                </select>

                                <input type="text" class="form-control input-sm" id="input-noidung-timkiem" placeholder="Nhập nội dung" />
                                <input type="button" class="btn btn-sm btn-primary" value="Tìm kiếm" id="btn-noidung-timkiem" />
                            </td>
                        </tr>
                        <tr id="tr-tiendo">
                            <td colspan="8">Hướng dẫn: <span id="span-huongdan"></span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="myModalViewBangTin" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="h4-bangtin-view-tieude">THÊM CÔNG VIỆC MỚI</h4>
                </div>
                <div class="modal-body">

                    <%--Grid--%>
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-sm-3 has-error">
                                <div class="input-group div-bangtin-group">
                                    <span class="input-group-addon " id="">Ngày bắt đầu</span>
                                    <input type="text" class="form-control input-sm input-bangtin-clear datepicker" id="input-bangtin-ngaybatdau" />
                                    <input type="text" class="form-control input-sm input-bangtin-clear timepicker" id="input-bangtin-giobatdau" />
                                </div>
                            </div>
                            <div class="form-group col-sm-3 has-warning">
                                <div class="input-group div-bangtin-group">
                                    <span class="input-group-addon " id="">Ưu tiên</span>
                                    <select class="form-control input-sm" id="select-bangtin-uutien">
                                        <option value="Thấp">Thấp</option>
                                        <option value="Trung Bình">Trung bình</option>
                                        <option value="Cao">Cao</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-sm-4 has-warning">
                                <div class="input-group div-bangtin-group">
                                    <span class="input-group-addon " id="">% Hoàn thành</span>
                                    <select class="form-control input-sm" id="select-bangtin-hoanthanh">
                                        <option value="0">0</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="75">75</option>
                                        <option value="100">100</option>
                                    </select>
                                    <div class="input-group-addon">%</div>
                                </div>
                            </div>
                            <div class="form-group col-sm-2 has-warning">
                                <div class="input-group div-bangtin-group">
                                    <label>
                                        <input checked type="checkbox" id="cb-suanoidung" />
                                        Cho phép sửa nội dung
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">

                            <div class="form-group col-sm-3 has-error">
                                <div class="input-group div-bangtin-group">
                                    <span class="input-group-addon " id="">Hạn kết thúc</span>
                                    <input type="text" class="form-control input-sm input-bangtin-clear datepicker" id="input-bangtin-hanketthuc" />
                                    <input type="text" class="form-control input-sm input-bangtin-clear timepicker" id="input-bangtin-giohanketthuc" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4 has-success">
                                <div class="input-group div-bangtin-group">
                                    <span class="input-group-addon " id="">Đối tượng</span>
                                    <select class="form-control input-sm" id="select-bangtin-doituong">
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-sm-3 has-success">
                                <div class="input-group div-bangtin-group">
                                    <span class="input-group-addon " id="">Loại</span>
                                    <select class="form-control input-sm" id="select-bangtin-phanloai">
                                        <option value="">--CHỌN--</option>
                                        <option value="EXP">EXP</option>
                                        <option value="IMP">IMP</option>
                                        <option value="LOG">LOG</option>
                                        <option value="NWH">NWH</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-bangtin-group">
                                    <span class="input-group-addon span-textarea " id="">Nội Dung</span>
                                    <textarea id="textarea-noidung" data-provide="markdown" class="maso-change-clear form-control modal-textarea" cols="" rows="10"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <%--END Grid--%>
                <div class="modal-footer">

                    <button type="button" class="btn btn-success" bangtin-id="0" id="btn-bangtin-luu">LƯU CÔNG VIỆC</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">HỦY</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <!-- Modal -->
    <div class="modal fade" id="myModalViewCapNhat" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="h4-capnhat-view-tieude">CẬP NHẬT TIẾN ĐỘ</h4>
                </div>
                <div class="modal-body">

                    <%--Grid--%>
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-sm-4">
                                <div class="input-group div-bangtin-group">
                                    <span class="input-group-addon " id="">% Hoàn thành</span>
                                    <select class="form-control input-sm" id="select-bangtin-hoanthanh-capnhat">
                                        <option value="0">0</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="75">75</option>
                                        <option value="100">100</option>
                                    </select>
                                    <div class="input-group-addon">%</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-bangtin-group">
                                    <span class="input-group-addon span-textarea " id="">Nội dung</span>
                                    <textarea id="textarea-noidung-capnhat" readonly data-provide="markdown" class="maso-change-clear form-control modal-textarea" cols="" rows="7"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-bangtin-group">
                                    <span class="input-group-addon span-textarea " id="">Tiến độ</span>
                                    <textarea id="textarea-capnhat" data-provide="markdown" class="maso-change-clear form-control modal-textarea" cols="" rows="7"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <%--END Grid--%>
                <div class="modal-footer">

                    <button type="button" class="btn btn-danger display-none" thuchien-id="0" bangtin-id="0" id="btn-capnhat-xoa">XÓA</button>
                    <button type="button" class="btn btn-success" thuchien-id="0" bangtin-id="0" id="btn-capnhat-luu">CẬP NHẬT</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">HỦY</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <!-- Modal -->
    <div class="modal fade" id="myModalBanGiaoCa" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-md" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="h4-capnhat-view-tieude1">GỬI BÀN GIAO CA</h4>
                </div>
                <div class="modal-body">

                    <%--Grid--%>
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-sm-12 has-error">
                                <div class="input-group div-bangtin-group ">
                                    <span class="input-group-addon " id="">Bàn Giao Ca</span>
                                    <select class="form-control input-sm" id="select-bangiaoca">
                                        <option value="Ngày">Ca Ngày</option>
                                        <option value="Đêm">Ca Đêm</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12 has-warning">
                                <div class="input-group div-bangtin-group">
                                    <span class="input-group-addon " id="">NGƯỜI BÀN GIAO</span>
                                    <select class="form-control input-sm" id="select-bangiaoca-nguoibangiao">
                                        <option value="Đỗ Đình Hùng">Nguyễn Huy Long</option>
                                        <option value="Đỗ Đình Hùng">Đỗ Đình Hùng</option>
                                        <option value="Nguyễn Văn Quyết">Nguyễn Văn Quyết</option>
                                        <option value="Phạm Xuân Thành">Phạm Xuân Thành</option>
                                        <option value="Nguyễn Văn Quang">Nguyễn Văn Quang</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12 has-success">
                                <div class="input-group div-bangtin-group">
                                    <span class="input-group-addon " id="">NGƯỜI NHẬN CA</span>
                                    <select class="form-control input-sm" id="select-bangiaoca-nguoinhanca">
                                        <option value="Đỗ Đình Hùng">Nguyễn Huy Long</option>
                                        <option value="Đỗ Đình Hùng">Đỗ Đình Hùng</option>
                                        <option value="Nguyễn Văn Quyết">Nguyễn Văn Quyết</option>
                                        <option value="Phạm Xuân Thành">Phạm Xuân Thành</option>
                                       <option value="Nguyễn Văn Quang">Nguyễn Văn Quang</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <%--END Grid--%>
                <div class="modal-footer">

                    <button type="button" class="btn btn-success" id="btn-guibangiaoca">GỬI BÀN GIAO CA</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">HỦY</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/CongViec-BangTin.js") %>
</asp:Content>