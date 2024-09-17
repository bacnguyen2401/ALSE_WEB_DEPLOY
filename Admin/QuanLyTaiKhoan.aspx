<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyTaiKhoan.aspx.cs" Inherits="ALSE.Admin.QuanLyTaiKhoan" %>

<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="row col-lg-12">
        <button class="btn btn-sm btn-success" type="button" id="btn-taikhoan-them"><i class="glyphicon glyphicon-plus"></i>Thêm tài khoản mới</button>
    </div>
    <div class="row col-lg-12">

        <table class="table table-bordered table-background-white" id="tbl-danhsach-taikhoan">
            <thead>
                <tr>
                    <th>No.</th>                    
                    <th>UID</th>
                    <th>Tài khoản</th>
                    <th>Tên</th>
                    <th>Nhóm</th>
                    <th>Chức năng</th>
                    
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>


    <div id="modalTaiKhoan" class="modal fade in qllModal" tabindex="-1" role="dialog"  >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title"></h5>
                </div>

                <div class="modal-body">
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-taikhoan-group">
                                    <span class="input-group-addon" id="">Tên tài khoản</span>
                                    <input type="text" class="form-control input-sm input-taikhoan-clear" id="input-taikhoan-tentaikhoan" />
                                </div>
                            </div>                            
                        </div>
                        <div class="row div-taikhoan-them">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-taikhoan-group">
                                    <span class="input-group-addon" id="">Mật khẩu</span>                                   
                                    <input type="text" class="form-control input-sm input-taikhoan-clear input-taikhoan-matkhau" id="input-taikhoan-matkhau" />
                                    
                                </div>
                            </div>      
                                
                        </div>
                      <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-taikhoan-group">
                                    <span class="input-group-addon" id="">Tên hiển thị</span>
                                    <input type="text" class="form-control input-sm input-taikhoan-clear" id="input-taikhoan-tenhienthi" />
                                </div>
                            </div>                            
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-taikhoan-group">
                                    <span class="input-group-addon" id="">Nhóm</span>                                   
                                    <select id="select-NhomTaiKhoan" class="form-control">

                                    </select>
                                </div>
                            </div>                            
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-taikhoan-group">
                                    <span class="input-group-addon" id="">Hồ sơ nhân sự</span>                                   
                                    <select id="select-HoSoNhanSu" class="form-control">

                                    </select>
                                </div>
                            </div>                            
                        </div>
                        <div class="row div-taikhoan-sua">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-taikhoan-group">
                                    <span class="input-group-addon" id="">Đổi mật khẩu</span>                                   
                                     <input type="checkbox" class="form-control input-sm input-taikhoan-clear " id="input-taikhoan-DoiMatKhau" />

                                   
                                </div>
                            </div>                            
                        </div>
                        <div class="row div-taikhoan-sua">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-taikhoan-group">
                                    <span class="input-group-addon" id="">Mật khẩu mới</span>                                   
                                    <input type="text" class="form-control input-sm input-taikhoan-clear input-taikhoan-matkhaumoi" id="input-taikhoan-matkhaumoi" />
                                    
                                </div>
                            </div>      
                            <div class="form-group col-sm-6">
                                <div class="input-group div-taikhoan-group">
                                    <span class="input-group-addon" id="">Nhập lại mật khẩu mới</span>                                   
                                    <input type="text" class="form-control input-sm input-taikhoan-clear input-taikhoan-matkhaumoi" id="input-taikhoan-nhaplaimatkhaumoi" />
                                    
                                </div>
                            </div>     
                        </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                    <button type="button" id="btn-taikhoan-luu" class="btn btn-primary">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    </div>
    </div>




    <script type="text/javascript" src="../js/custom/QuanLyTaiKhoan.js"></script>
</asp:Content>