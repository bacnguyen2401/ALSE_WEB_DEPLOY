<%@ Page Title="" Language="C#" MasterPageFile="~/KhaiBaoYTe/KhaiBaoYTe.Master" AutoEventWireup="true" CodeBehind="QuanLyKhaiBao.aspx.cs" Inherits="ALSE.KhaiBaoYTe.QuanLyKhaiBao" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="css/QuanLyKhaiBao.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div>
        <h1 style="text-align:center;">DANH SÁCH NHỮNG NGƯỜI ĐÃ KHAI BÁO Y TẾ</h1>
    </div>
    <div>
        <table id="tbl-QuanLyKhaiBao" class="table table-bordered table-responsive">
            <thead>
                <tr>
                    <td rowspan="2">#</td>
                    <td rowspan="2">Ngày khai báo</td>
                    <td class="td-hoten" rowspan="2">Họ tên</td>
                    <td rowspan="2">Năm sinh</td>
                    <td rowspan="2">Công ty</td>
                    <td rowspan="2">Số điện thoại</td>
                    <td class="td-quoctich" rowspan="2">Quốc tịch</td>
                    <td colspan="6">Dấu hiệu</td>
                    <td colspan="4">Tiếp xúc</td>
                </tr>
                <tr>
                    <td>Sốt</td>
                    <td>Ho</td>
                    <td>Khó thở</td>
                    <td>Viêm phổi</td>
                    <td>Đau hỏng</td>
                    <td>Mệt mỏi</td>
                    <td>Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</td>
                    <td>Người từ nước có bệnh COVID-19</td>
                    <td>Người có biểu hiện (Sốt, ho, khó thở , Viêm phổi)?</td>
                    <td>Người đi về từ vùng dịch (Bạch Mai…)?</td>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
    <script type="text/javascript" src="js/QuanLyKhaiBao.js?20200401001"></script>
</asp:Content>
