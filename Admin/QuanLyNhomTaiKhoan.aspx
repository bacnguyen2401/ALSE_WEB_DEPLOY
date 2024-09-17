<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyNhomTaiKhoan.aspx.cs" Inherits="ALSE.Admin.QuanLyNhomTaiKhoan" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <link href="../css/custom/QuanLyNhomTaiKhoan.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-quanly-nhomtaikhoan">
        <table class="table table-bordered" id="tbl-nhom">
        <thead>
            <tr>
                <td>Tên Nhóm</td>
                <td>Diễn giải</td>
                <td>Thêm tài khoản</td>
                <td>Chức năng</td>
                
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    </div>
    
    <script src="../js/custom/QuanLyNhomTaiKhoan.js"></script>
</asp:Content>
