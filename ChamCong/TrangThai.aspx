<%@ Page Title="CHẤM CÔNG | TRẠNG THÁI" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="TrangThai.aspx.cs" Inherits="ALSE.BCC" %>

<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/ChamCong-TrangThai.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div style="margin-bottom: 10px;">
        <input type="button" onclick="window.location = 'XuatBangChamCong.aspx'" value="Bảng Chấm Công" class="mani-btn btn btn-warning btnbcc" />

        <input type="button" onclick="window.location = 'BangChamCongLoi.aspx'" value="Chấm Công Lỗi" class="mani-btn btn btn-danger" />

        <input type="button" onclick="window.location = 'DiMuon.aspx'" value="DS Đi Muộn" class="mani-btn btn btn-danger btndsdimuon" />

        <input type="button" onclick="window.location = 'BangTin.aspx'" value="Phân tích công" class="mani-btn btn btn-primary btnphantichcong" />
    </div>
    <!-- Trực đội/Trực ca-->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>TRỰC ĐỘI/TRỰC CA</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl-trangthai-trucca" class="table table-bordered tbl-chamcong-trangthai">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END Trực đội/Trực ca-->
    <!-- Tài Liệu-->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>TÀI LIỆU</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl-trangthai-tailieu" class="table table-bordered tbl-chamcong-trangthai">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END Tài Liệu-->
    <!-- Khai thác-->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>KHAI THÁC</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl-trangthai-khaithac" class="table table-bordered tbl-chamcong-trangthai">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END Khai thác--->
    <!-- Xe nâng-->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>XE NÂNG</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl-trangthai-xenang" class="table table-bordered tbl-chamcong-trangthai">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END Xe nâng-->

    <!-- Handling Vsip-->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>HANDLING VSIP</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl-trangthai-handlingvsip" class="table table-bordered tbl-chamcong-trangthai">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END Handling Vsip-->

    <!-- Bốc xếp-->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>BỐC XẾP</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl-trangthai-bocxep" class="table table-bordered tbl-chamcong-trangthai">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END Xe nâng-->
    <!-- Nội bài -->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>NỘI BÀI</b>
                    <button id="btn-kpi-noibai" type="button" class="btn btn-primary btn-sm">Xem KPI</button>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl-trangthai-noibai" class="table table-bordered tbl-chamcong-trangthai">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END nội bài-->
    <!-- Quang Minh -->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>Quang Minh</b>
                    <%-- <button id="btn-kpi-noibai" type="button" class="btn btn-primary btn-sm">Xem KPI</button>--%>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl-trangthai-quangminh" class="table table-bordered tbl-chamcong-trangthai">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END Quang Minh-->
    <!-- Yên phong-->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>YÊN PHONG</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl-trangthai-yenphong" class="table table-bordered tbl-chamcong-trangthai">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END yên phong-->
    <!-- Hải Phòng-->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>HẢI PHÒNG</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl-trangthai-haiphong" class="table table-bordered tbl-chamcong-trangthai">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END Hải Phòng-->

    <!-- Thái Nguyên-->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>Thái Nguyên</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl-trangthai-thainguyen" class="table table-bordered tbl-chamcong-trangthai">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END Thái Nguyên-->

    <!-- Văn phòng-->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>VĂN PHÒNG</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl-trangthai-vanphong" class="table table-bordered tbl-chamcong-trangthai">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END Xe nâng-->

    <!-- Thời vụ-->
    <div class="row div-row-trangthai">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>THỜI VỤ</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table id="tbl-trangthai-thoivu" class="table table-bordered tbl-chamcong-trangthai">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END Xe nâng-->
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
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
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

    <div class="modal fade" id="myModalKPI" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">KPI TỔ NỘI BÀI </h4>
                </div>
                <div class="modal-body">
                    <div id="div-kpi-button">
                        <div class="row">
                            <div class="col-sm-2">
                                <div class="input-group ">
                                    <span class="input-group-addon" id="">Tháng</span>
                                    <select class="form-control input-sm" id="select-kpi-thang">
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
                            <div class="col-sm-2">
                                <div class="input-group">
                                    <span class="input-group-addon" id="">Năm</span>
                                    <select class="form-control input-sm" id="select-kpi-nam">
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

                            <div class="col-sm-4">
                                <button type="button" id="" class="btn btn-success btn-sm btn-kpi-xem">HIỂN THỊ</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table class="table table-bordered table-hover" id="tbl-kpi">
                            <thead>
                                <tr>
                                    <td rowspan="3">STT</td>
                                    <td></td>

                                    <td colspan="5">Hàng Xuất & LG</td>
                                    <td colspan="2">Hàng Nhập</td>
                                    <td>Hàng LG</td>
                                    <td></td>
                                    <td></td>

                                </tr>
                                <tr>
                                    <td rowspan="2">Họ tên</td>
                                    <td>Tài liệu</td>
                                    <td>Chụp ảnh</td>
                                    <td>Check hàng</td>
                                    <td>Cầy hàng</td>
                                    <td>Giao Doc</td>
                                    <td>Tài liệu</td>
                                    <td>Khai thác</td>
                                    <td>Làm Doc</td>
                                    <td>Giao TK VCĐL</td>
                                    <td>Hàng DG</td>
                                </tr>
                                <tr>

                                    <td>MAWB</td>
                                    <td>PCS</td>
                                    <td>KG</td>
                                    <td>KG</td>
                                    <td>DOC</td>
                                    <td>HAWB</td>
                                    <td>Số kiện</td>
                                    <td>MAWB</td>
                                    <td>TK Airline</td>
                                    <td>MAWB</td>
                                </tr>

                            </thead>
                            <tbody>
                            </tbody>
                        </table>

                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/ChamCong-TrangThai.js") %>
</asp:Content>
