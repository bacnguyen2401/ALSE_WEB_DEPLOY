<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="KhachHang.aspx.cs" Inherits="ALSE.Truck.QuanLyMaKhachHang" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css", "../css/custom/TruckKhachHang.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="margin-bottom-5px">
        <input type="button" class="btn btn-sm btn-primary" name="" value="Thêm Khách Hàng" id="btn-them" />       
    </div>
    <div class="padding-5px-10px background-color-white">
        <h3>QUẢN LÝ KHÁCH HÀNG</h3>
        <table class="table table-bordered" id="tbl-khachhang">
            <thead>
                <tr>
                    <td>STT</td>
                    <td>Mã KH</td>
                    <td>Tên Công Ty</td>
                    <td>Ghi chú</td>
                    <td colspan="2">Công cụ</td>
                 
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
      <div class="modal fade" id="myModalViewKhachHang" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="h4-khachhang-view-tieude"></h4>
                </div>
                <div class="modal-body">
                    <%--Grid--%>
                    <div class="grid">
                         <div class="row">
                            <div class="form-group col-sm-4 has-success">
                                <input type="button" khachhang-id="0" value="Lưu" class="btn btn-sm btn-primary" id="btn-luu" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-4 has-success">
                                <div class="input-group div-khachhang-group">
                                    <span class="input-group-addon " id="">Mã Khách Hàng</span>
                                    <input type="text" class="form-control input-sm " id="input-makh" />
                                </div>
                            </div>
                          <div class="form-group col-sm-8 has-success">
                                <div class="input-group div-khachhang-group">
                                    <span class="input-group-addon " id="">Mã Số Thuế</span>
                                    <input type="text" class="form-control input-sm " id="input-masothue" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12 has-success">
                                <div class="input-group div-khachhang-group">
                                    <span class="input-group-addon " id="">Tên Công Ty</span>
                                    <input type="text" class="form-control input-sm " id="input-tencongty" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12 has-success">
                                <div class="input-group div-khachhang-group">
                                    <span class="input-group-addon " id="">Địa Chỉ</span>
                                    <input type="text" class="form-control input-sm " id="input-diachi" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12 has-success">
                                <div class="input-group div-khachhang-group">
                                    <span class="input-group-addon " id="">Ghi Chú</span>
                                    <input type="text" class="form-control input-sm " id="input-ghichu" />
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

     <%# Versioned.VersionedFiles.ScriptHelper.Render("js", "../js/custom/TruckKhachHang.js") %>
</asp:Content>
