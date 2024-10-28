<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyChuyenXeCPN.aspx.cs" Inherits="ALSE.QuanLyChuyenXeCPN" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyChuyenXeCPN.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="cpn-header text-align-center">
        <h2 class="color-white">QUẢN LÝ CHUYẾN XE CHUYỂN PHÁT NHANH</h2>
    </div>

    <div class="div-trangthaihangnhap-button">
        <button type="button" id="btn-truckpod" class="mani-btn btn btn-primary">1. Truck POD</button>
        <button type="button" id="btn-thongtinkho" class="mani-btn btn btn-warning">2. Thông tin kho</button>
    </div>

    <div class="radio-button">
        <div>
            <input type="radio" id="all" class="change-data-radio" name="fav_language" value="tatca" />
            <label class="title-radio" for="all">Tất Cả</label>&nbsp;&nbsp;&nbsp;
        </div>
        <div>
            <input type="radio" id="chuahoanthanh" class="change-data-radio" name="fav_language" value="" checked />
            <label class="title-radio" for="chuahoanthanh">Chưa Hoàn Thành</label>&nbsp;&nbsp;&nbsp;
        </div>
        <div>
            <input type="radio" id="hoanthanh" class="change-data-radio" name="fav_language" value="hoanthanh" />
            <label class="title-radio" for="hoanthanh">Đã Hoàn Thành</label>
        </div>
    </div>

   <%-- <div>
        <label>Search:<input type="search" id="input-search" class="ip-search" placeholder="" /></label>
    </div>--%>

    <div class="table-chuyenxecpn">
        <table class="table table-bordered background-color-white" id="tbl_chuyenxecpn">
            <thead>
                <tr class="backgroudColor-red">
                    <td>STT</td>
                    <td>Mã theo dõi</td>
                    <td>BKS xe giao</td>
                    <td>Ngày giao</td>
                    <td>Giờ giao</td>
                    <td>Tải trọng</td>
                    <td>Đơn vị vận tải</td>
                    <td>Số niêm phong</td>
                    <td>Ngày giao xong</td>
                    <td>Giờ giao xong</td>
                    <td>Số đơn điều phối</td>
                    <td>Người tạo</td>
                    <td>Ngày tạo</td>
                    <td>Chức năng</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>


    <%-- Modal cập nhật giao hàng--%>

    <div class="modal fade" id="modalCapNhatGiaoHang" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg fullscreen " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times </span></button>
                    <h4 class="modal-title" id=""></h4>
                </div>
                <div class="modal-body">
                    <%--  <div class="row">
                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Số POD</span>
                                <input type="text" disabled class="form-control input-sm input-pod" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Số Đơn Điều Phôi</span>
                                <input type="text" class="form-control input-sm input-dondieuphoi" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">BKS</span>
                                <input type="text" class="form-control input-sm input-bks" list="sltBKSXe" />
                                <datalist class="nobdInput" id="sltBKSXe">
                                </datalist>
                            </div>
                        </div>
                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Tên LX</span>
                                <input type="text" class="form-control input-sm input-laixe" />
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">SĐT</span>
                                <input type="text" class="form-control input-sm input-sdt" />
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Số CMND</span>
                                <input type="text" class="form-control input-sm input-cmnd" />
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Tải trọng</span>
                                <input type="text" class="form-control input-sm input-taitrong" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Số seal</span>
                                <input type="text" class="form-control input-sm input-seal" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Ngày giao hàng</span>
                                <input type="text" class="form-control datepicker input-sm input-ngaygiaohang" />
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Giờ giao hàng</span>
                                <input type="text" class="form-control timepicker input-sm input-giogiaohang" />
                            </div>
                        </div>
                    </div>--%>
                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-capnhatgiaohang-luu" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheetGiaoHang" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="modalDuyetChuyenXe" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times </span></button>
                    <h4 class="modal-title" id="">DUYỆT CHUYẾN XE GIAO HÀNG</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-6">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Ngày giao hàng</span>
                                <input type="text" class="form-control datepicker input-sm input-ngaygiaohang" />
                            </div>
                        </div>

                        <div class="form-group col-sm-6">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Giờ giao hàng</span>
                                <input type="text" class="form-control timepicker input-sm input-giogiaohang" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-sm-6">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Ngày giao hàng xong</span>
                                <input type="text" class="form-control datepicker input-sm input-ngaygiaohangxong" />
                            </div>
                        </div>

                        <div class="form-group col-sm-6">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Giờ giao hàng xong</span>
                                <input type="text" class="form-control timepicker input-sm input-giogiaohangxong" />
                            </div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="form-group col-sm-6">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Người nhận</span>
                                <input type="text" class="form-control input-sm input-nguoinhan" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-duyet-quanlyxe" attrmatheodoi="" class="btn btn-primary">Duyệt</button>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <!-- Modal  Truck-->
    <div class="modal fade" id="ModalTruck" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">

                    <h5 class="modal-title" id="exampleModalLabel">TRUCK DRIVER</h5>
                    <button type="button" class="btn btn-primary" id="btn-themlaixe">Thêm lái xe</button>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered" id="tbl-truckpod">
                        <thead>
                            <tr>
                                <td>STT</td>
                                <td>Họ và tên</td>
                                <td>Biển kiểm soát</td>
                                <td>Số điện thoại</td>
                                <td>CMND</td>
                                <td>Tải Trọng</td>
                                <td>Chức năng</td>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal  Add Truck-->
    <div class="modal fade" id="ModalAddTruck" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="">ADD TRUCK DRIVER</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-6">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">Tên lái xe</span>
                                <input type="text" class="form-control " id="input-laixe" />
                            </div>
                        </div>
                        <div class="form-group col-sm-6">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">BKS</span>
                                <input type="text" class="form-control " id="input-bks" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-sm-6">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">Số điên thoại</span>
                                <input type="text" class="form-control " id="input-sdt" />
                            </div>
                        </div>
                        <div class="form-group col-sm-6">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">CMND/CCCD</span>
                                <input type="text" class="form-control " id="input-cmnd" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-6">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">Tải Trọng</span>
                                <input type="text" class="form-control " id="input-taitrong" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" attrid="" id="btn-luu">Lưu</button>
                </div>
            </div>
        </div>
    </div>

    <%-- Modal Thông tin kho --%>
    <div id="modalThongTinKho" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">

                    <h5 class="modal-title" id="exampleKho">THÔNG TIN KHO</h5>
                    <button type="button" class="btn btn-primary" id="btn-themkho">Thêm Kho</button>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered" id="tbl-thongtinkho">
                        <thead>
                            <tr>
                                <td>STT</td>
                                <td>Số BU</td>
                                <td>Kho giao hàng</td>
                                <td>Thời gian nhận hàng</td>
                                <td>Người nhận</td>
                                <td>Số điện thoại</td>
                                <td>Chức năng</td>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal  Add Truck-->
    <div class="modal fade" id="ModalAddKho" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="">ADD KHO</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">Địa chỉ giao hàng</span>
                                <input type="text" class="form-control " id="input-diachigiaohang" />
                            </div>
                        </div>
                        <div class="form-group col-sm-12">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">Người nhận</span>
                                <input type="text" class="form-control " id="input-nguoinhan" />
                            </div>
                        </div>
                        <div class="form-group col-sm-12">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">Số điên thoại</span>
                                <input type="text" class="form-control " id="input-sdtkho" />
                            </div>
                        </div>
                        <div class="form-group col-sm-12">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">Số BU</span>
                                <input type="text" class="form-control " id="input-soBU" />
                            </div>
                        </div>

                        <div class="form-group col-sm-12">
                            <div class="input-group div-nhanvien-group">
                                <span class="input-group-addon" id="">Thời gian nhận hàng</span>
                                <input type="text" class="form-control " id="input-thoigiannhanhang" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" attrid="" id="btn-luukho">Lưu</button>
                </div>
            </div>
        </div>
    </div>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyChuyenXeCPN.js") %>
</asp:Content>
