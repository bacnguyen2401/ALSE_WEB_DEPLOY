<%@ Page Title="QUẢN LÝ LỖI" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyLoi.aspx.cs" Inherits="ALSE.QuanLyLoi" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/QuanLyLoi.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-quanlyloi-main">

        <h3>QUẢN LÝ LỖI</h3>

        <div class="div-quanlyloi-deltail" id="div-detail-quanlyloi">
            <div class="row ">
                <div class="form-group col-sm-2">
                    <div class="input-group div-quanlyloi-group width-170px ">
                        <span class="input-group-addon" id="">Từ ngày</span>
                        <input type="text" class="form-control input-sm input-quanlyloi-ngay datepicker input-quanlyloi-clear" id="input-quanlyloi-tungay" />
                    </div>
                </div>
                <div class="form-group col-sm-2">
                    <div class="input-group div-quanlyloi-group width-170px">
                        <span class="input-group-addon" id="">Đến ngày</span>
                        <input type="text" class="form-control input-sm input-quanlyloi-ngay  datepicker input-quanlyloi-clear" id="input-quanlyloi-denngay" />
                    </div>
                </div>

                <div class="form-group col-sm-6" id="">
                    <input type="button" value="Xem ghi nhận lỗi" class="btn btn-sm btn-info" id="btn-quanlyloi-xem" />
                    <input type="button" value="Báo cáo" class="btn btn-sm btn-success" id="btn-quanlyloi-baocao" />
                    <input type="button" value="Hướng Dẫn" class="btn btn-sm btn-warning" id="btn-quanlyloi-huongdan" />
                </div>
                <div class="form-group col-sm-2" id="">

                    <input type="button" value="Thêm ghi nhận lỗi" class="btn btn-sm btn-info" id="btn-quanlyloi-them" />
                </div>
            </div>

            <div>
                <table class="table table-bordered" id="tbl-quanlyloi-danhsach">
                    <thead>
                        <tr>
                            <td>STT</td>
                            <td>Trạng Thái</td>
                            <td>Ngày</td>
                            <td>Mã Số</td>
                            <td>Nội Dung</td>
                            <td>Bộ phận</td>
                            <td>Người Ghi Nhận</td>
                            <td>Ngày Tạo</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModalViewQuanLyLoi" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="h4-quanlyloi-view-tieude"></h4>
                </div>
                <div class="modal-body">
                    <div id="div-quanlyloi-group-button">
                        <div id="div-quanlyloi-button-chucnangkhac">
                        </div>

                        <div id="div-quanlyloi-button-luu">
                        </div>
                    </div>

                    <%--Grid--%>
                    <div class="grid">
                        <%--Khách hàng, loại hình, tháng, năm--%>
                        <div class="row">
                            <div class="form-group col-sm-12 has-warning">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon" id="span-quanlyloi-maso-modify">Mã Số</span>
                                    <select class="form-control input-sm" sua="0" id="select-quanlyloi-maso">
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-4 has-success">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon " id="">Bộ phận</span>
                                    <select class="form-control input-sm" id="select-quanlyloi-bophan">
                                        <option value="VSIP">VSIP</option>
                                        <option value="VSIPTaiLieu">- VSIP/ Tài liệu</option>
                                        <option value="VSIPKhaiThac">- VSIP/ Khai thác</option>
                                        <option value="VSIPXeNang">- VSIP/ Xe nâng</option>
                                        <option value="VSIPXepDo">- VSIP/ Xếp dỡ</option>
                                        <option value="VSIPThanhToan">- VSIP/ Thanh toán</option>
                                        <option value="TTHQ">TTHQ</option>
                                        <option value="TTHQCC">- TTTHQ/ Tờ Khai(CC)</option>
                                        <option value="TTHQTTHD">- TTHQ/ Hàng Nguy Hiểm(DG)</option>
                                        <option value="NBA">Tổ Nội Bài</option>
                                        <option value="NBAEXP">- Tổ Nội Bài/ Hàng Xuất </option>
                                        <option value="NBAIMP">- Tổ Nội Bài/ Hàng Nhập</option>
                                        <option value="HPH">Tổ Hải Phòng</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-sm-4 has-error">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon " id="">Ngày phát sinh</span>
                                    <input type="text" class="form-control input-sm input-quanlyloi-clear datepicker" id="input-quanlyloi-ngayphatsinh" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon span-textarea " id="">Nội Dung</span>
                                    <textarea id="textarea-noidung" data-provide="markdown" class="maso-change-clear form-control modal-textarea" cols="" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon span-textarea" id="">Vị trí và địa điểm phát sinh</span>
                                    <textarea id="textarea-vitriphatsinh" data-provide="markdown" class="maso-change-clear form-control modal-textarea" cols="" rows="2"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12 has-success">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon span-textarea" id="">Người vi phạm lỗi</span>
                                    <input type="text" class="form-control input-sm input-quanlyloi-disable-first input-quanlyloi-nhanvien input-quanlyloi-tagsinput input-quanlyloi-clear" id="input-quanlyloi-nguoiviphamloi" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12 has-success">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon span-textarea" id="">Cán bộ giám sát</span>
                                    <input type="text" class="form-control input-sm input-quanlyloi-disable-first input-quanlyloi-nhanvien input-quanlyloi-tagsinput input-quanlyloi-clear" id="input-quanlyloi-canbogiamsat" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12 has-success">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon span-textarea" id="">Người phát hiện</span>
                                    <input type="text" class="form-control input-sm input-quanlyloi-disable-first input-quanlyloi-nhanvien input-quanlyloi-tagsinput input-quanlyloi-clear" id="input-quanlyloi-nguoiphathien" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12 has-success">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon span-textarea" id="">Khách hàng vi phạm lỗi</span>
                                    <input type="text" class="maso-change-clear form-control input-sm input-quanlyloi-disable-first input-quanlyloi-ngay  input-quanlyloi-clear" id="input-quanlyloi-khachhangviphamloi" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon span-textarea" id="">Nguyên Nhân</span> <%--hoặc bộ phận--%>
                                    <textarea id="textarea-nguyennhan" data-provide="markdown" class="maso-change-clear form-control modal-textarea" cols="" rows="3"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon span-textarea" id="">Xử lý</span>
                                    <textarea id="textarea-xuly" data-provide="markdown" class="maso-change-clear form-control modal-textarea" cols="" rows="7"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon span-textarea" id="">Trách nhiệm xử lý</span>

                                    <input type="text" class="form-control input-sm input-quanlyloi-disable-first input-quanlyloi-nhanvien input-quanlyloi-tagsinput input-quanlyloi-clear" id="input-quanlyloi-trachnhiemxuly" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon span-textarea" id="">Trách nhiệm kiểm tra</span>

                                    <input type="text" class="form-control input-sm input-quanlyloi-disable-first input-quanlyloi-nhanvien input-quanlyloi-tagsinput input-quanlyloi-clear" id="input-quanlyloi-trachnhiemkiemtra" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon span-textarea" id="">Cá nhân/Đơn vị nhận báo cáo</span>
                                    <textarea id="textarea-canhandonvinhanbaocao" data-provide="markdown" class="maso-change-clear form-control modal-textarea" cols="" rows="2"></textarea>
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-quanlyloi-group">
                                    <span class="input-group-addon span-textarea" id="">Trách nhiệm theo dõi</span>

                                    <input type="text" class="form-control input-sm input-quanlyloi-disable-first input-quanlyloi-nhanvien input-quanlyloi-tagsinput input-quanlyloi-clear" id="input-quanlyloi-trachnhiemtheodoi" />
                                </div>
                            </div>
                        </div>

                        <%--Đính kèm--%>
                        <div class="row">

                            <div id="div-quanlyloi-dinhkem">
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
                        </div>
                        <%--END Đính kèm--%>
                    </div>
                </div>
                <%--END Grid--%>
                <div class="modal-footer">

                    <button type="button" class="btn btn-success" qllid="0" id="btn-quanlyloi-luu">Lưu</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Hủy</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <!-- Modal -->
    <div class="modal fade" id="myModalViewQuanLyLoiHuongDan" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">HƯỚNG DẪN QUẢN LÝ LỖI</h4>
                </div>
                <div class="modal-body">
                    <img alt="1" src="http://117.6.162.24/ImagesData/QUANLYLOI/HUONGDAN/2.jpg" />
                    <img alt="1" src="http://117.6.162.24/ImagesData/QUANLYLOI/HUONGDAN/1.jpg" />
                    
                </div>
                <%--END Grid--%>
                <div class="modal-footer">

                    <button type="button" class="btn btn-default" data-dismiss="modal">Hủy</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/QuanLyLoi.js") %>
</asp:Content>