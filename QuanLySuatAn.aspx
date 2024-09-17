<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLySuatAn.aspx.cs" Inherits="ALSE.QuanLySuatAn" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLySuatAn.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="top1">
        <div style="width: 100%">
            <div style="width: 50%; float: left;">
                <p style="font-size: 30px; color: white;">QUẢN LÝ SUẤT ĂN</p>
                <div class="row ">
                    <div class="form-group col-sm-3">
                        <div class="input-group">
                            <span class="input-group-addon" id="">Ngày</span>
                            <input type="text" class="form-control datepicker input-sm " id="input-dangkisuatan-ngay" />
                        </div>
                    </div>

                    <div class="form-group col-sm-3">
                        <div class="input-group">
                            <span class="input-group-addon" id="">Bữa ăn</span>
                            <select class="form-control" id="select-buaan">
                                <option value="all">Tất cả</option>
                                <option value="Sáng">Sáng</option>
                                <option selected="selected" value="Trưa">Trưa</option>
                                <option value="Tối">Tối</option>
                                <option value="Đêm">Đêm</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-sm-2">
                        <div class="input-group-btn">
                            <button type="button" id="btn-xem" class="btn btn-primary btn-click">LỌC</button>
                        </div>
                    </div>
                    <div class="form-group col-sm-2">
                        <div class="input-group-btn">
                            <button type="button" id="btn-themsuatanmodal" class="btn btn-success btn-click">THÊM SUẤT ĂN</button>
                        </div>
                    </div>



                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="input-group ">
                            <span class="input-group-addon" id="">Tháng</span>
                            <select class="form-control input-sm" id="select-xbc-thang">
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

                    <div class="col-sm-3">
                        <div class="input-group">
                            <span class="input-group-addon" id="">Năm</span>
                            <select class="form-control input-sm" id="select-xbc-nam">
                                <option value="2015">2015</option>
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
                    <div class="form-group col-sm-2">
                        <div class="input-group-btn">
                            <button type="button" id="btn-xuatbangkesuatan" class="btn btn-click btn-danger ">Suất Đã Ăn</button>
                        </div>
                    </div>
                    <div class="form-group col-sm-2">
                        <div class="input-group-btn">
                            <button type="button" id="btn-xuatbangkesuatandangki" class="btn btn-click btn-info ">Suất Đăng Ki</button>
                        </div>
                    </div>
                </div>
            </div>

            <div style="width: 50%; float: right">
                <table class="table table-bordered table-background-white" id="tbl-thongkexuatan">
                    <thead>
                        <tr>
                            <td class="theadColor"></td>
                            <td class="theadColor">Số suất đăng ký</td>
                            <td class="theadColor">Số suất đăng ký muộn</td>
                            <td class="theadColor">Số suất đã ăn</td>
                            <td class="theadColor">Thời gian đăng ký</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="td-sang">
                        </tr>
                        <tr class="td-trua">
                        </tr>
                        <tr class="td-toi">
                        </tr>
                        <tr class="td-dem">
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


        <div>
            <table class="table table-bordered table-background-white tbl-suatan" id="">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>

    <%-- Modal thêm suất ăn --%>
    <div class="modal fade" id="modalThemSuatAn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel">QUẢN LÝ SUẤT ĂN</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>


                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-3">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Bữa ăn</span>
                                <select class="form-control" id="select-buaan_themsuatan">
                                    <option value="Sáng">Sáng</option>
                                    <option selected="selected" value="Trưa">Trưa</option>
                                    <option value="Tối">Tối</option>
                                    <option value="Đêm">Đêm</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Ngày đăng kí</span>
                                <input type="text" class="form-control datepicker input-sm " id="input-ngay-dangki" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group-btn">
                                <button type="button" id="btn-themsuatan" class="btn btn-success btn-sm">Thêm</button>
                            </div>
                        </div>
                    </div>
                    <div class="row ">
                        <div class="form-group col-sm-3">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Công ty</span>
                                <select class="form-control" id="select-congty">
                                    <option selected="selected" value=""></option>
                                    <option value="ALSE">ALSE</option>
                                    <option value="KH">Khách hàng</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group col-sm-4">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Phòng Ban</span>
                                <select class="form-control" id="select-phongban">
                                </select>
                            </div>
                        </div>



                        <div class="input-group-btn">
                            <button type="button" id="btn-loc" class="btn btn-primary btn-sm">Lọc</button>
                        </div>


                    </div>

                    <table class="table table-bordered table-background-white" id="tbl-shownhanvien">
                        <thead>
                            <tr>
                                <td class="theadColor">
                                    <input type="checkbox" id="cb-print-all" class="td-checkbox" value="ALL" />
                                </td>
                                <td class="theadColor">STT</td>
                                <td class="theadColor">Tên nhân viên</td>
                                <td class="theadColor">Số điện thoại</td>
                                <td class="theadColor">Ngày sinh</td>
                                <td class="theadColor">Chức danh</td>
                                <td class="theadColor">Công ty</td>
                                <td class="theadColor">Phòng ban</td>
                                <td class="theadColor">Bộ phận</td>
                                <td class="theadColor">Số lượng</td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <%-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Send message</button>--%>
                </div>
            </div>
        </div>
    </div>

    <%--Edit Suat An--%>
    <div class="modal fade" id="modalSuaSuatAn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Cập nhật suất ăn</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row ">
                        <div class="form-group col-sm-3">
                            <div class="input-group">
                                <div class="input-group">
                                    <span class="input-group-addon" id="">Số lượng suất DK</span>
                                    <input type="number" class="form-control input-sm " min="1" value="1" autocomplete="off" id="input-edit-soluong" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Bữa ăn</span>
                                <select class="form-control" id="select-edit-buaan">
                                    <option value="all">Tất cả</option>
                                    <option value="Sáng">Sáng</option>
                                    <option value="Trưa">Trưa</option>
                                    <option value="Tối">Tối</option>
                                    <option value="Đêm">Đêm</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group">
                                <div class="input-group">
                                    <span class="input-group-addon" id="">Thời gian DK</span>
                                    <input type="text" class="form-control datepicker input-sm " id="input-edit-thoigian" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group">
                                <div class="input-group">
                                    <span class="input-group-addon" id="">Ghi chú</span>
                                    <input type="text" class="form-control input-sm " id="input-edit-ghichu" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row ">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary btn-suasuatan" attrid="">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>

    <%-- Thống kê suất ăn --%>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLySuatAn.js") %>
</asp:Content>
