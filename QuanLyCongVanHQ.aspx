<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyCongVanHQ.aspx.cs" Inherits="ALSE.QuanLyCongVanHQ" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyCongVanHQ.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1>DANH SÁCH CÔNG VĂN HẢI QUAN</h1>
    <div class="margin-bottom-5px">
        <div class="row">
            <div class="col-sm-2" id="div-button-left">
                <button type="button" class="btn btn-primary btn-sm" itemId="" id="btn-danhsach-them">+ THÊM CÔNG VĂN</button>
            </div>
            <div class="col-sm-2">
                <div class="input-group ">
                    <span class="input-group-addon" id="">Tháng</span>
                    <select class="form-control input-sm" id="select-danhsach-thang">
                        <option value="1">01</option>
                        <option value="2">02</option>
                        <option value="3">03</option>
                        <option value="4">04</option>
                        <option value="5">05</option>
                        <option value="6">06</option>
                        <option value="7">07</option>
                        <option value="8">08</option>
                        <option value="9">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-2">
                <div class="input-group">
                    <span class="input-group-addon" id="">Năm</span>
                    <select class="form-control input-sm" id="select-danhsach-nam">

                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                    </select>
                </div>
            </div>
            <div class="col-sm-2">
                <button type="button" class="btn btn-warning btn-sm" id="btn-xem">XEM</button>
            </div>
            <div class="col-sm-4" id="div-button-right">
                <button type="button" class="btn btn-warning btn-sm" id="btn-congvan">3. CÔNG VĂN</button>
                <button type="button" class="btn btn-danger btn-sm" id="btn-kho">2. KHO</button>
                <button type="button" class="btn btn-success btn-sm" id="btn-khachhang">1. KHÁCH HÀNG</button>
            </div>
        </div>
    </div>
    <div class="background-color-white">
        <table id="tbl-danhsach" class="table table-bordered table-responsive">
            <thead>
                <tr>
                    <td>#</td>
                    <td>Ngày CV</td>
                    <td>Khách hàng</td>
                    <td>Công ty sửa</td>
                    <td>MAWB</td>
                    <td>HAWB</td>
                    <td>Chức năng</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
    <%-------Danh Sach Them-----------%>
    <div class="modal fade" id="modal-danhsach-them" role="dialog" aria-labelledby="myModalLabel"  data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="modal-danhsach-them-tieude">Thêm mới</h4>
                </div>
                <div class="modal-body">
                   <div class="margin-bottom-5px">
                        <button type="button" itemId="" class="btn btn-primary btn-sm" id="btn-danhsach-them-luu">LƯU</button>
                        <button type="button" class="btn btn-default btn-sm" id="btn-danhsach-them-huy"  data-dismiss="modal">HỦY</button>
                    </div>
                      <div>
                         
                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-danhsach-them-group">
                                    <span class="input-group-addon" id="">Tên Công Văn</span>
                                    <select class="form-control input-sm" id="select-danhsach-them-congvan-modify"">
                                      
                                    </select>
                                </div>
                            </div>
                        </div>
                          <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-danhsach-them-group">
                                    <span class="input-group-addon" id="">Ngày trên công văn</span>
                                    <input type="text" class="form-control input-sm input-danhsach-them-clear datepicker input-danhsach-them-number" id="input-danhsach-them-ngaygiocongvan-modify" />
                                </div>
                            </div>
                        </div>
                           <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-danhsach-them-group">
                                    <span class="input-group-addon" id="">Đại lý</span>
                                    <select class="form-control input-sm" id="select-danhsach-them-khachhanggui-modify">
                                      
                                    </select>
                                </div>
                            </div>
                              
                        </div>
                          <div class="row">
                            
                               <div class="form-group col-sm-12">
                                <div class="input-group div-danhsach-them-group">
                                    <span class="input-group-addon" id="">Khách hàng</span>
                                     <select class="form-control input-sm" id="select-danhsach-them-khachhangsua-modify">
                                      
                                    </select>
                                </div>
                            </div>
                        </div>
                          <div class="row">
                               <div class="form-group col-sm-6">
                                <div class="input-group div-danhsach-them-group">
                                    <span class="input-group-addon" id="">Số MAWB</span>
                                    <input type="text" class="form-control input-sm input-danhsach-them-clear input-danhsach-them-number" id="input-danhsach-them-somawb-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-danhsach-them-group">
                                    <span class="input-group-addon" id="">Số HAWB</span>
                                    <input type="text" class="form-control input-sm input-danhsach-them-clear input-danhsach-them-number" id="input-danhsach-them-sohawb-modify" />
                                </div>
                            </div>
                             
                        </div>
                          <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-danhsach-them-group">
                                    <span class="input-group-addon" id="">Nội dung</span>
                                    <input type="text" class="form-control input-sm input-danhsach-them-clear input-danhsach-them-number" id="input-danhsach-them-noidung-modify" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%------------------%>
    <%-------Quản lý Khách hàng-----------%>
    <div class="modal fade" id="modal-khachhang" role="dialog" aria-labelledby="myModalLabel" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="modal-khachhang-tieude">QUẢN LÝ KHÁCH HÀNG</h4>
                </div>
                <div class="modal-body">
                    <div class="margin-bottom-5px">
                        <button type="button" class="btn btn-primary btn-sm" id="btn-khachhang-them">+ THÊM KHÁCH HÀNG</button>
                    </div>
                    <div>
                        <table class="table table-bordered table-responsive" id="tbl-khachhang">
                            <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Mã Khách Hàng</td>
                                    <td>Khách Hàng</td>
                                    <td>Địa Chỉ</td>
                                    <td>Chức năng</td>
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
    <div class="modal fade" id="modal-khachhang-them" role="dialog" aria-labelledby="myModalLabel" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="modal-khachhang-them-tieude">THÊM MỚI KHÁCH HÀNG</h4>
                </div>
                <div class="modal-body">
                    <div class="margin-bottom-5px">
                        <button type="button" itemId="" class="btn btn-primary btn-sm" id="btn-khachhang-them-luu">LƯU</button>
                        <button type="button" class="btn btn-default btn-sm" id="btn-khachhang-them-huy"  data-dismiss="modal">HỦY</button>
                    </div>
                      <div>
                         <div class="row">
                            <div class="form-group col-sm-4">
                                <div class="input-group div-khachhang-them-group">
                                    <span class="input-group-addon" id="">Mã Khách Hàng</span>
                                    <input type="text" class="form-control input-sm input-khachhang-them-clear input-khachhang-them-number" id="input-khachhang-them-makhachhang-modify" />
                                </div>
                            </div>
                            <div class="form-group col-sm-8">
                                <div class="input-group div-khachhang-them-group">
                                    <span class="input-group-addon" id="">Tên Khách Hàng</span>
                                    <input type="text" class="form-control input-sm input-khachhang-them-clear input-khachhang-them-number" id="input-khachhang-them-khachhang-modify" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-khachhang-them-group">
                                    <span class="input-group-addon" id="">Địa chỉ</span>
                                    <input type="text" class="form-control input-sm input-khachhang-them-clear input-khachhang-them-number" id="input-khachhang-them-diachi-modify" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%------------------%>
    <%-------Quản lý Kho-----------%>
    <div class="modal fade" id="modal-kho" role="dialog" aria-labelledby="myModalLabel" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="modal-kho-tieude">QUẢN LÝ KHO</h4>
                </div>
                <div class="modal-body">
                    <div class="margin-bottom-5px">
                        <button type="button" class="btn btn-primary btn-sm" id="btn-kho-them">+ THÊM KHO</button>
                    </div>
                    <div>

                        <table class="table table-bordered table-responsive" id="tbl-kho">
                            <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Mã Kho</td>
                                    <td>Tên Kho</td>
                                    <td>Chức năng</td>
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
     <div class="modal fade" id="modal-kho-them" role="dialog" aria-labelledby="myModalLabel" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="modal-kho-them-tieude">THÊM MỚI KHÁCH HÀNG</h4>
                </div>
                <div class="modal-body">
                    <div class="margin-bottom-5px">
                        <button type="button" class="btn btn-primary btn-sm" itemId="" id="btn-kho-them-luu">LƯU</button>
                        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal" id="btn-kho-them-huy">HỦY</button>
                    </div>
                    <div>
                         <div class="row">
                            <div class="form-group col-sm-4">
                                <div class="input-group div-kho-them-group">
                                    <span class="input-group-addon" id="">Mã Kho</span>
                                    <input type="text" class="form-control input-sm input-kho-them-clear input-kho-them-number" id="input-kho-them-makho-modify" />
                                </div>
                            </div>
                         
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-kho-them-group">
                                    <span class="input-group-addon" id="">Tên Kho</span>
                                    <input type="text" class="form-control input-sm input-kho-them-clear input-kho-them-number" id="input-kho-them-tenkho-modify" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%------------------%>
    <%-------Quản lý Công văn-----------%>
    <div class="modal fade" id="modal-congvan" role="dialog" aria-labelledby="myModalLabel" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="modal-congvan-tieude">QUẢN LÝ CÔNG VĂN</h4>
                </div>
                <div class="modal-body">
                    <div class="margin-bottom-5px">
                        <button type="button" class="btn btn-primary btn-sm" id="btn-congvan-them">+ THÊM CÔNG VĂN</button>
                    </div>
                    <div>
                        <table class="table table-bordered table-responsive" id="tbl-congvan">
                            <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Công văn</td>
                                    <td>Chức năng</td>
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
     <div class="modal fade" id="modal-congvan-them" role="dialog" aria-labelledby="myModalLabel" data-keyboard="false" data-backdrop="static">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="modal-congvan-them-tieude">THÊM MỚI CÔNG VĂN</h4>
                </div>
                <div class="modal-body">
                    <div class="margin-bottom-5px">
                        <button type="button" itemId="" class="btn btn-primary btn-sm" id="btn-congvan-them-luu">LƯU</button>
                        <button type="button" class="btn btn-default btn-sm" id="btn-congvan-them-huy"  data-dismiss="modal">HỦY</button>
                    </div>
                      <div>
                         
                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-congvan-them-group">
                                    <span class="input-group-addon" id="">Công Văn</span>
                                    <input type="text" class="form-control input-sm input-congvan-them-clear input-congvan-them-number" id="input-congvan-them-congvan-modify" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%------------------%>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyCongVanHQ.js") %>
</asp:Content>