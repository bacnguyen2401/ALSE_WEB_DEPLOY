<%@ Page Title="CHÂM CÔNG | DS ĐI MUỘN" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="DiMuon.aspx.cs" Inherits="ALSE.ChamCong.DiMuon" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/QuanLyChamCong-DiMuon.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div>
        <h3>QUẢN LÝ NHÂN VIÊN ĐI LÀM MUỘN</h3>
        <div class="grid">
            <div class="row">

                <div class="form-group col-sm-2 has-success">
                    <div class="input-group div-dimuon-group">
                        <span class="input-group-addon" id="">Năm</span>
                        <select class="form-control input-sm width-150 select-dimuon" id="select-nam">
                            <option>2018</option>
                            <option>2019</option>
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                        </select>
                    </div>
                </div>
                <div class="form-group col-sm-2 has-success">
                    <div class="input-group div-dimuon-group">
                        <span class="input-group-addon" id="">Tháng</span>
                        <select class="form-control input-sm width-150 select-dimuon" id="select-thang">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                </div>
                <div class="form-group col-sm-2 has-success">
                    <input type="button" value="Xem" id="btn-xem" class="btn btn-sm btn-success" />
                </div>
                <div class="form-group col-sm-3" >
                    <div class="input-group">
                        <span class="input-group-addon" id="">Nơi làm việc</span>
                        <select class="form-control input-sm" id="select-noilamviec">
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid">
            <table class="table table-bordered  tbl-dimuon" id="tbl-dimuon">
                <thead>
                    <tr>
                        <td>Nơi làm việc</td>
                        <td>Bộ phận</td>
                        <td>Tên nhân viên</td>
                        <td>Giờ vào</td>

                        <td class="no-admin">Chức năng</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <h3>Đã Duyệt</h3>
            <table class="table table-bordered  tbl-dimuon" id="tbl-dimuon-daduyet">
                <thead>
                    <tr>
                        <td>Nơi làm việc</td>
                        <td>Bộ phận</td>
                        <td>Tên nhân viên</td>
                        <td>Giờ vào</td>
                        <td>Lý do</td>
                        <td>Cán bộ duyệt</td>
                        <td>Thời gian duyệt</td>
                        <td class="no-admin">Chức năng</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>

    <div class="modal fade" id="myModalCapNhat" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="h4-dimuon-view-tieude"></h4>
                </div>
                <div class="modal-body">
                    <%--Grid--%>
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-sm-4 has-success">
                                <input type="button" dimuon-id="0" value="Lưu" class="btn btn-sm btn-primary" id="btn-luu" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12 has-success">
                                <div class="input-group div-dimuon-group">
                                    <span class="input-group-addon " id="">Lý do</span>

                                    <select class="form-control input-sm " id="select-lydo">
                                        <option value="Đã thông báo">Đã thông báo</option>
                                        <option value="Không thông báo">Không thông báo</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-sm-12 has-success">
                                    <div class="input-group div-dimuon-group">
                                        <span class="input-group-addon " id="">Chi tiết</span>

                                        <input type="text" class="form-control input-sm " id="input-chitiet" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <%--END Grid--%>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Hủy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/QuanLyChamCong-DiMuon.js") %>
</asp:Content>
