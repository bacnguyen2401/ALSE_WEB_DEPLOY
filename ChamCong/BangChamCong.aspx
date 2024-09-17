<%@ Page Title="BẢNG CHẤM CÔNG" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="BangChamCong.aspx.cs" Inherits="ALSE.BangChamCong" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/BangChamCong.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="bcc-div">
        <div id="bcc-div-chonthoigian">
            <table>
                <tr>
                    <td>
                        <span>Chọn Năm</span>
                    </td>
                    <td>
                        <select id="bcc-sl-chonnam" class="form-control">
                        </select>
                    </td>
                    <td>
                        <span>Chọn Tháng</span>
                    </td>
                    <td>
                        <select id="bcc-sl-chonthang" class="form-control">
                        </select>
                    </td>
                    <td>
                        <input id="bcc-btn-xemcong" type="button" value="Xem Công" class="mani-btn btn btn-success" />
                    </td>
                    <td style="border-left: solid 1px; padding-left: 10px;"></td>
                    <td>
                        <span>Chọn Nhóm</span>
                    </td>
                    <td>
                        <select id="bcc-sl-chonnhom" class="form-control">
                            <option value="VSIP">VSIP</option>
                            <option value="Nội Bài">Nội Bài</option>
                            <option value="Yên Phong">Yên Phong</option>
                            <option value="Văn Phòng">Văn Phòng</option>
                        </select>
                    </td>
                    <td style="border-left: solid 1px; padding-left: 10px;"></td>
                    <td>
                        <input type="button" onclick="tableToExcel('bcc-tbl-bangcong', 'Bảng Chấm Công')" value="Xuất Excel" class="mani-btn btn btn-info btn-xuatexcel" id="btn-export-excel" />
                    </td>
                </tr>
                <tr class="bcc-tr-trangthai">
                    <td colspan="10">
                        <asp:Literal ID="ltrNVSaiCong" runat="server"></asp:Literal>
                    </td>
                </tr>
            </table>
        </div>
        <div id="bcc-div-bangcong">
            <table id="bcc-tbl-bangcong" class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th colspan="48" class="bcc-cangiua">
                            <p style="font-weight: bold; font-size: large" id="bcc-tenbang">
                                Bảng chấm công
                                                <asp:Literal ID="ltrGroup" runat="server"></asp:Literal>
                            </p>

                            <asp:Literal ID="LtrThangNam" runat="server"></asp:Literal>
                        </th>
                    </tr>
                    <tr>
                        <th class="tg-031e headcolbcc  bcc-cangiua" style="width: 30px;" rowspan="2">#</th>
                        <th class="tg-031e headcolbcc  bcc-cangiua" style="width: 180px;" rowspan="2">Họ tên</th>
                        <th class="tg-031e headcolbcc bcc-cangiua" style="width: 30px;" rowspan="2">Chức danh</th>
                        <th class="tg-031e headcolbcc  bcc-cangiua" style="font-size: 80%; width: 50px;" rowspan="2">Loại thời gian</th>
                        <th class="tg-s6z2 bcc-cangiua" colspan="31">Ngày Trong Tháng</th>
                        <th class="tg-s6z2 bcc-cangiua" colspan="12">Quy Ra Công</th>
                        <th class="tg-031e headcolbcc bcc-cangiua" style="width: 180px;" rowspan="2">Họ tên</th>
                    </tr>
                    <tr>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">1</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">2</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">3</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">4</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">5</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">6</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">7</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">8</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">9</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">10</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">11</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">12</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">13</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">14</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">15</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">16</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">17</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">18</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">19</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">20</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">21</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">22</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">23</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">24</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">25</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">26</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">27</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">28</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">29</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">30</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">31</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">Tổng Giờ Ngày Đêm</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">Tổng Công Ngày Đêm</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">Tổng Giờ</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">Tổng Công</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">Số Công Đi Học</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">Số Công Nghỉ Phép</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">Số Công Công Tác</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">Số Công Nghỉ Bù</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">Ốm</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">Thai Sản</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">TN & VR</td>
                        <td class="bcc-td-ngay bcc-td-kq bcc-cangiua">Chất lượng Lao Động</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Danh sách nhân viên chấm sai công</h4>
                    </div>
                    <div class="modal-body">
                        <table id="bcc-dsnv-chamsaicong" class="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <td>STT</td>
                                    <td>Tên Nhân Viên</td>
                                    <td>Ngày Chấm Sai</td>
                                    <td>Giờ Ca Ngày</td>
                                    <td>Giờ Ca Đêm</td>
                                    <td>Lý Do</td>
                                    <td>Tùy chọn</td>
                                </tr>
                            </thead>
                            <tbody>
                                <asp:Literal ID="ltrDSNVSAICONG" runat="server"></asp:Literal>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <%--end modal--%>
        <div id="bcc-div-dscong">
            <table id="bcc-tbl-dscong">
                <tbody>
                    <asp:Literal ID="ltrDscong" runat="server"></asp:Literal>
                </tbody>
            </table>
        </div>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/BangChamCong.js") %>
</asp:Content>