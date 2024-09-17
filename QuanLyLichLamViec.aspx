<%@ Page Title="QUẢN LÝ LỊCH LÀM VIỆC" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="QuanLyLichLamViec.aspx.cs" Inherits="ALSE.QuanLyLichLamViec" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <link href="css/quanlylichlamviec.css" rel="stylesheet" />
    
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
        <div class="k2016-row">
        <div class="k2016-col-md-12">
            <div class="k2016-card-box">
                <div>
                    <asp:Literal ID="ltrTieuDe" runat="server"></asp:Literal>
                </div>
    <div id="div-changdate" class="form-inline">
        <div class="form-group m-r-10">
            <label for="k2016-sl-chonnam">Chọn Năm</label>
            <select id="k2016-sl-chonnam" class="form-control k2016-pick-nam input-sm">
            </select>
        </div>
        <div class="form-group m-r-10">
            <label for="k2016-sl-chonthang">Chọn Tháng</label>
            <select id="k2016-sl-chonthang" class="form-control k2016-pick-thang input-sm">
            </select>
        </div>
        <div class="form-group m-r-10">
            <label for="k2016-sl-chonngay">Chọn Ngày</label>
            <select id="k2016-sl-chonngay" class="form-control k2016-pick-ngay input-sm">
            </select>
        </div>
        <div class="form-group m-r-10">
            <input type="checkbox" id="k2016-cbx-theongay"/>
            <label for="k2016-sl-canam">Theo Ngày</label>

            </div>
        <div class="form-group m-r-10">
            <input type="checkbox" id="k2016-cbx-canam"/>
            <label for="k2016-sl-canam">Cả Năm</label>

            </div>
        <button id="k2016-btn-doingay" class="btn btn-default waves-effect waves-light btn-sm btn-primary" type="button">
            Hiển Thị
                            <span class="m-l-5"><i class="fa fa-location-arrow"></i></span>
        </button>
    </div>
    <div>
        <table class="table table-bordered table-hover" id="tbl-dimuon-count">
            <thead>
                <tr>
                    
                    <td>#</td>
                    <td>Tên Nhân Viên</td>
                    <td>Số Lần Đi Muộn</td>
                    <td>Số ngày đi làm</td>
                    <td>Tỉ lệ</td>
                    <td>Bộ Phận</td>
                    <td>Nơi Làm Việc</td>
                </tr>
            </thead>
            <tbody>
                <asp:Literal ID="ltrCount" runat="server"></asp:Literal>

            </tbody>

        </table>

    </div>
                </div>
                </div>
                </div>
    <div class="k2016-hidden k2016-tiny">
        
        <table id="tbl-dimuon-chitiet">

            <tbody>
                <asp:Literal ID="ltrListDS" runat="server"></asp:Literal>
            </tbody>
        </table>
        <table id="tbl-dimuon-tongngay">

            <tbody>
                <asp:Literal ID="ltrTongNgay" runat="server"></asp:Literal>
            </tbody>
        </table>
        <table id="tbl-br-chitiet">
            <thead class="thead-ct">
                <tr>
                    <td>#</td>
                    <td>Ngày</td>
                    <td>Giờ</td>
                    <td>Lý Do</td>
                    <td>Cán Bộ Cho Phép</td>
                </tr>
            </thead>
        </table>
    </div>


    <script src="js/quanlylichlamviec.js" type="text/javascript"></script>
</asp:Content>