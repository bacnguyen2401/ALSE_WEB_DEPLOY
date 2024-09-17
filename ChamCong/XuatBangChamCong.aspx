<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="XuatBangChamCong.aspx.cs" Inherits="ALSE.ChamCong.XuatBangChamCong" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/ChamCong-XuatBangChamCong.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-xbc-header" class="text-align-center">
        <span class="color-white">XUẤT BÁO CÁO CHẤM CÔNG </span>
    </div>
    
    <div id="div-chonbaocao">
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
            <div class="col-sm-3">
                <div class="input-group">
                    <span class="input-group-addon" id="">Bộ phận</span>
                    <select class="form-control input-sm" id="select-xbc-bophan">
                        <option value="ALL">Tất cả</option>
                        <option value="VSIP">VSIP</option>
                        <option value="Văn Phòng">Văn Phòng</option>
                        <option value="Nội Bài">Nội Bài</option>
                        <option value="Yên Phong">Yên Phong</option>
                        <option value="Hải Phòng">Hải Phòng</option>
                        <option value="Quang Minh">Quang Minh</option>
                        <option value="Thái Nguyên">Thái Nguyên</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-2">
                <button type="button" class="btn btn-success btn-sm" id="btn-xbc-xuatbaocao">Xuất báo cáo</button>
            </div>
        </div>
    </div>
    <div id="div-danhsach">
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/ChamCong-XuatBangChamCong.js") %>
</asp:Content>