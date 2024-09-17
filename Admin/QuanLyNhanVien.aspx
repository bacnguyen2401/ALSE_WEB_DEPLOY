<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyNhanVien.aspx.cs" Inherits="ALSE.Admin.QuanLyNhanVien" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/QuanLyNhanvien.css") %>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-QuanLyNhanVien">
        <div id="div-QuanLyNhanVien-Head">

        </div>
        <div id="div-QuanLyNhanVien-Body">
            <div>
                <input type="button" value="Thêm Nhân Viên" class="btn btn-primary"  id="btn-QuanLyNhanVien-Them"/>
            </div>
            <table class="table table-bordered" id="tbl-QuanLyNhanVien">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Chấm Công Id</th>
                        <th>Họ Tên</th>
                        <th>Id</th>
                        <th>Id</th>
                        <th>Id</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>


    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/QuanLyNhanvien.js") %>

</asp:Content>
