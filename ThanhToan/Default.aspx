<%@ Page Title="QUẢN LÝ THANH TOÁN" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="ALSE.ThanhToan.Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        #div-thanhtoan-main {
            border-radius: 1em;
            width: 100%;
            height: 100%;
            min-height: 100%;
            overflow: hidden;
        }

        #div-thanhtoan-main-header {
            background: #3A3A3C;
            height: 3em;
            text-align: center;
            border-top-left-radius: 1em;
            border-top-right-radius: 1em;
        }

            #div-thanhtoan-main-header h3 {
                color: white;
                line-height: 2.5em;
                font-size: 1.333em;
            }

        #div-thanhtoan-main-button {
            box-shadow: inset 0 5px 5px -5px #222222;
            background: #C15342;
            height: 100px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-thanhtoan-main">
        <div id="div-thanhtoan-main-header">
            <h3>CHỨC NĂNG</h3>
        </div>
        <div id="div-thanhtoan-main-button">
            <div class="form-group col-sm-4">
                <input type="button"  class="btn btn-default " id="inp-chucnang-thanhtoan" value="THANH TOÁN" />
            </div>
            <div class="form-group col-sm-4">
                <input type="button"  class="btn btn-default " id="inp-chucnang-khdt" value="KHÁCH HÀNG - ĐỐI TÁC" />
            </div>
            <div class="form-group col-sm-4">
                <input type="button"  class="btn btn-default " id="inp-chucnang-baocao" value="BÁO CÁO" />
            </div>
        </div>
    </div>
    <script type="text/javascript">
        $(document).ready(function () {
            //window.location.href = "./ThanhToan.aspx";
            //$("#inp-chucnang-thanhtoan").click(function () {
            //    window.location.href = "./ThanhToan.aspx";
            //})
            //$("#inp-chucnang-khdt").click(function () {
            //    window.location.href = "./KhachHangDoiTac.aspx";
            //})
            //$("#inp-chucnang-baocao").click(function () {
            //    window.location.href = "./BaoCao.aspx";
            //})
        })
    </script>
</asp:Content>