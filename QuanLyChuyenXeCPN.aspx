<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyChuyenXeCPN.aspx.cs" Inherits="ALSE.QuanLyChuyenXeCPN" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyChuyenXeCPN.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="cpn-header text-align-center">
        <h2 class="color-white">QUẢN LÝ CHUYẾN XE CHUYỂN PHÁT NHANH</h2>
    </div>
    <div class="radio-button">
        <div>
            <input type="radio" id="all" class="change-data-radio" name="fav_language" value="tatca" />
            <label class="title-radio" for="all">Tất Cả</label>&nbsp;&nbsp;&nbsp;
        </div>
        <div>
            <input type="radio" id="chuahoanthanh" class="change-data-radio" name="fav_language" value="" checked />
            <label class="title-radio" for="chuahoanthanh">Chưa Hoàn Thành</label>&nbsp;&nbsp;&nbsp;
        </div>
        <div>
            <input type="radio" id="hoanthanh" class="change-data-radio" name="fav_language" value="hoanthanh" />
            <label class="title-radio" for="hoanthanh">Đã Hoàn Thành</label>
        </div>
    </div>

    <div class="table-chuyenxecpn">
        <table class="table table-bordered background-color-white">
            <thead>
                <tr class="backgroudColor-red">
                    <td>STT</td>
                    <td>Mã theo dõi</td>
                    <td>BKS xe giao</td>
                    <td>Ngày giao</td>
                    <td>Giờ giao</td>
                    <td>Tải trọng</td>
                    <td>Đơn vị vận tải</td>
                    <td>Số niêm phong</td>
                    <td>Ngày giao xong</td>
                    <td>Giờ giao xong</td>
                    <td>Số đơn điều phối</td>
                    <td>Người tạo</td>
                    <td>Ngày tạo</td>
                    <td>Chức năng</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>TD001</td>
                    <td>51A-12345</td>
                    <td>16/10/2024</td>
                    <td>08:30</td>
                    <td>10 Tấn</td>
                    <td>Công ty Vận Tải ABC</td>
                    <td>NP123456</td>
                    <td>16/10/2024</td>
                    <td>11:00</td>
                    <td>DP001</td>
                    <td>Nguyễn Văn A</td>
                    <td>15/10/2024</td>
                    <td>
                        <button class="btn btn-primary">Chỉnh sửa</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>TD002</td>
                    <td>29B-67890</td>
                    <td>16/10/2024</td>
                    <td>09:00</td>
                    <td>15 Tấn</td>
                    <td>Công ty Vận Tải XYZ</td>
                    <td>NP654321</td>
                    <td>16/10/2024</td>
                    <td>13:00</td>
                    <td>DP002</td>
                    <td>Trần Thị B</td>
                    <td>15/10/2024</td>
                    <td>
                        <button class="btn btn-primary">Chỉnh sửa</button></td>
                </tr>
            </tbody>
        </table>
    </div>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyChuyenXeCPN.js") %>
</asp:Content>
