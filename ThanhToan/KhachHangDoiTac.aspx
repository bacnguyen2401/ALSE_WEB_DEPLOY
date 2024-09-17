<%@ Page Title="KHÁCH HÀNG - ĐỐI TÁC - THANH TOÁN" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="KhachHangDoiTac.aspx.cs" Inherits="ALSE.ThanhToan.KhachHangDoiTac" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/thanhtoan-khachhangdoitac.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-thanhtoan-khachhangdoitac">

        <h3>Quản lý khách hàng - đối tác</h3>

        <input type="button" id="inp-khdt-thanhtoan" class="btn btn-success btn-sm inp-khdt-btn" value="Thanh Toán" />
        <input type="button" id="inp-khdt-them" class="btn btn-primary btn-sm  inp-khdt-btn" value="Thêm" />
        <table class="table table-bordered" id="tbl-khachhangdoitac">
            <thead>
                <tr>
                    <td>STT</td>
                    <td>Mã</td>
                    <td>Loại</td>
                    <td>Tên khách hàng - Đối tác</td>
                    <td>Chức năng</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    <div class="modal fade" id="myModalViewThanhToan-KHDT" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" khdt-id="">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="h4-khdt-title"></h4>
                </div>
                <div class="modal-body">

                    <div class="row">
                        <div class="form-group col-sm-4">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Mã</span>
                                <input type="text" class="form-control input-sm inp-clear" id="input-khdt-ten" />
                            </div>
                        </div>
                         <div class="form-group col-sm-4">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Loại</span>
                                <select class="form-control" id="select-khdt-loai">
                                    <option value="KH">Khách Hàng</option>
                                    <option value="DT">Đối tác</option>
                                </select>
                            </div>
                        </div>
                         <div class="form-group col-sm-4">
                            <div class="input-group">
                                <span class="input-group-addon" id="">SDT</span>
                               <input type="text" class="form-control input-sm inp-clear" id="input-khdt-sdt" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                         <div class="input-group">
                                <span class="input-group-addon" id="">Tên cty</span>
                                <input type="text" class="form-control input-sm inp-clear" id="input-khdt-tendaydu" />
                            </div>
                            </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">

                         <div class="input-group">
                                <span class="input-group-addon" id="">Địa chỉ</span>
                                <input type="text" class="form-control input-sm inp-clear" id="input-khdt-diachi" />
                            </div>
                            </div>
                    </div>
                    <div class="modal-footer">

                        <input type="button" class="btn btn-primary " id="inp-khdt-luu" value="Lưu" />
                        <button type="button" class="btn btn-default" data-dismiss="modal">Hủy</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/thanhtoan-khachhangdoitac.js") %>
</asp:Content>