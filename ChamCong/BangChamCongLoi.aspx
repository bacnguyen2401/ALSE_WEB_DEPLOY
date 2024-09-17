<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="BangChamCongLoi.aspx.cs" Inherits="ALSE.ChamCong.BangChamCongLoi" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
      <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/BangChamCongLoi.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <!-- Phần Menu chung-->
    <div class="row">
        <div class="form-group col-lg-6">
            <h4 style="color: white; text-align: left"; font-weight: bold">CHẤM CÔNG LỖI</h4>
        </div>
    </div>

    <!-- Hết phần Menu chung-->
    <div id="div-rqlkt">
        <div id="div-rqlkt-menu-button">
            <div class="row">
                <div class="form-group col-sm-2">
                    <div class="input-group div-thanhtoan-group">
                        <span class="input-group-addon" id="">Tháng:</span>
                        <select class="form-control input-sm" id="select-ctc-thang-show">
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
                <div class="form-group col-sm-2">
                    <div class="input-group div-thanhtoan-group">
                        <span class="input-group-addon" id="">Năm:</span>
                        <select class="form-control input-sm" id="select-ctc-nam-show">
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
                <div class="form-group col-lg-2" id="div-khothuong-groupbutton">
                    <button type="button" class="input-rqlkt-show-data btn btn-primary btn-sm" id="btn_Loc" value="Import">LỌC</button>
                </div>
            </div>
        </div>
    </div>
    <div id="div-rqlkt-data">
        <div id="div-chamcongloi-data-table"></div>
    </div>

      <%------------------%>
    <div class="modal fade" id="myModalChiTietCong" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalChiTietCong-Title">CHI TIẾT CÔNG <span id="span-chitietcong-tennhanvien"></span>THÁNG <span id="span-chitietcong-thang"></span>NĂM <span id="span-chitietcong-nam"></span></h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-2">
                            <button type="button" class="btn btn-danger btn-sm" id="btn-ctc-thenchamcong">+ Thêm chấm công</button>
                        </div>
                        <div class="col-sm-2"></div>
                        <div class="col-sm-3">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Tháng</span>
                                <select class="form-control input-sm" id="select-ctc-thang">
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
                                <select class="form-control input-sm" id="select-ctc-nam">
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <button type="button" class="btn btn-success btn-sm" id="btn-ctc-xemchamcong">Xem chấm công</button>
                        </div>
                    </div>

                    <div class="font-weight-bold">
                        <span>TỔNG CÔNG:</span>
                        <span id="span-tongcong-tieng"></span>
                        <span>= </span>
                        <span id="span-tongcong"></span>
                    </div>
                    <div>
                        <p class="span-thoigiannghi">Thời gian nghỉ: Ca ngày chấm vào trước 12h và chấm ra sau 13h30. Ca đêm chấm vào trước 22h và chấm ra sau 23h.</p>
                        <p class="span-thoigiannghi">Trường hợp ca làm việc >= 9 tiếng nhưng nằm ngoài thời gian nghỉ cố định(12h-13h30 và 22h-23h) sẽ bị trừ 1 tiếng</p>
                    </div>

                    <table id="tbl-chitietcong" class="table table-bordered">
                        <thead>
                            <tr>

                                <td>Ca làm việc</td>
                                <td>Vào</td>
                                <td>Ra</td>
                                <td colspan="3">Thời gian làm việc</td>
                                <td colspan="2">Thời gian nghỉ</td>
                                <td colspan="3">Công(tiếng)</td>
                                <td>Ghi chú</td>
                            </tr>
                            <tr id="tr-danhso">
                                <td>(1)</td>
                                <td>(2)</td>
                                <td>(3)</td>
                                <td>(4)</td>
                                <td>(5)</td>
                                <td>(6) = (4) + (5)</td>
                                <td>(7) = 12h->13h30</td>
                                <td>(8) = 22h->23h</td>
                                <td>(9) = (4) -(7)</td>
                                <td>(10) = (5) - (8)</td>
                                <td>(11) = (9) + (10)</td>
                                <td>(12)</td>
                            </tr>
                            <tr>

                                <td></td>
                                <td></td>
                                <td></td>
                                <td id="td-tongthoigianlamviec-ngay">Ngày</td>
                                <td id="td-tongthoigianlamviec-dem">Đêm</td>
                                <td id="td-tongthoigianlamviec">Tổng</td>
                                <td id="td-tongthoigiannghi-ngay">Ngày</td>
                                <td id="td-tongthoigiannghi-dem">Đêm</td>
                                <td id="td-tongcong-ngay">Ngày</td>
                                <td id="td-tongcong-dem">Đêm</td>
                                <td id="td-tongcong">Tổng</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                    <h4>LOG</h4>
                    <table id="tbl-chitietcong-log" class="table table-bordered">
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Ngày sửa</td>
                                <td>Người sửa</td>
                                <td>Nội dung</td>
                                <td>Lý do</td>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <%------------------%>
    <div class="modal fade" id="myModalThemSuaCong" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalThemSuaCong-Title"></h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-6">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Ngày giờ chấm công</span>
                                <input type="text" class="form-control datepicker input-sm input-tsc-ngay" id="input-tsc-ngaychamcong" />
                                <input type="text" class="form-control timepicker  input-sm input-tsc-gio" id="input-tsc-giochamcong" />
                            </div>
                        </div>
                        <div class="form-group col-sm-6">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Loại chấm công</span>
                                <select class="form-control  input-sm" id="select-tsc-loaichamcong">
                                    <option value="0">Vào</option>
                                    <option value="1">Ra</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group ">
                                <span class="input-group-addon" id="">Lý do</span>
                                <input type="text" class="form-control  input-sm" id="input-tsc-lydo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-danger btn-tsc" id="btn-tsc-xoa">XÓA</button>
                    <button type="button" class="btn btn-sm btn-primary btn-tsc" id="btn-tsc-luu">LƯU</button>
                </div>
            </div>
        </div>
    </div>

      <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/BangChamCongLoi.js") %>
</asp:Content>
