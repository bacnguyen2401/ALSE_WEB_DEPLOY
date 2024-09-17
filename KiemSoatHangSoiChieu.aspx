<%@ Page Title="KIỂM SOÁT HÀNG SOI CHIẾU" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="KiemSoatHangSoiChieu.aspx.cs" Inherits="ALSE.KiemSoatHangSoiChieu" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div class="row">
        <div class="form-group col-lg-3 has-warning">
            <div class="input-group ">
                <span class="input-group-addon " id="">Ngày Gửi</span>
                <input type="text" class="form-control input-sm " id="input-thanhtoan-ngayguibangke-modify" />
            </div>
        </div>
        <div class="col-lg-9">
                <table class="table table-bordered;">
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>DNN</td>
                            <td>KIỆN SỐ</td>
                            <td>NGÀY</td>
                            <td>GIỜ</td>
                            <td>SK</td>
                            <td>TL</td>
                            <td>KÍCH THƯỚC</td>
                            <td>VỊ TRÍ</td>
                            <td>FWD</td>
                            <td>GHI CHÚ</td>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>

        </div>
    </div>
</asp:Content>