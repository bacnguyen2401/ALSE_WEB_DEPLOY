<%@ Page Title="BẢNG TIN CHẤM CÔNG" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="BangTin.aspx.cs" Inherits="ALSE.ChamCong.BangTin" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <link href="../css/custom/ChamCong-BangTin.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="header">
        <h2>PHÂN TÍCH TÌNH HÌNH SỬ DỤNG LAO ĐỘNG</h2>
    </div>

    <div class="body-chamcong">
        <div class="row">
            <div class="form-group col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon" id="">Ngày</span>
                    <input type="text" class="form-control input-sm datepicker input-chamcong-clear" id="input-start-date" />
                </div>
            </div>
            <div class="form-group col-sm-2">
                <button type="button" class="btn btn-sm btn-primary" id="btn-loc">Lọc</button>
            </div>
            <div class="form-group col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon" id="">Nơi làm việc</span>
                    <select class="form-control input-sm" id="sl-diadiem"></select>
                </div>
            </div>
        </div>
        <div class="table-chamcong">
            <table class="table table-bordered" id="table-show-chamcong">
                <thead>
                    <tr>
                        <td>#</td>
                        <td class="td-width">Họ Tên</td>
                        <td class="td-width">Phòng Ban</td>
                        <td class="td-width">Chức Danh</td>
                        <td>Giờ vào</td>
                        <td>Giờ ra</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                        <td>23</td>
                        <td>24</td>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>

    <script type="text/javascript" src="../js/custom/ChamCong-BangTin.js"></script>
</asp:Content>
