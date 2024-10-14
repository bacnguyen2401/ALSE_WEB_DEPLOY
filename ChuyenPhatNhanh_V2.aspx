<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ChuyenPhatNhanh_V2.aspx.cs" Inherits="ALSE.ChuyenPhatNhanh_V2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/ChuyenPhatNhanh_V2.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <%--Băc thêm mới--%>
    <div class="cpn-header text-align-center">
        <h2 class="color-white">HÀNG CHUYỂN PHÁT NHANH</h2>
    </div>

    <div class="div-trangthaihangnhap-button">
        <button type="button" id="btn-taokehoach" class="mani-btn btn btn-primary">1. Tạo kế hoạch</button>
        <button type="button" id="btn-capnhatthongtin" class="mani-btn btn btn-warning">2. Cập nhật thông tin giao hàng</button>
        <button type="button" id="btn-capnhatchuyenxetheohawb" class="mani-btn btn btn-info">3. Tạo chuyến xe CPN theo HAWB</button>
        <button type="button" id="btn-quanlychuyenxe" class="mani-btn btn btn-success">4. Quản lý chuyến xe</button>
        <button type="button" id="btn-chuyenkvgiamsat" class="mani-btn btn btn-primary">5. Cập nhật hàng qua KV giám sát</button>
        <button type="button" id="btn-truyvan" class="mani-btn btn btn-primary">6. Truy vấn</button>
        <button type="button" id="btn-baocao" class="mani-btn btn btn-primary">7. Báo cáo</button>

    </div>
    <div id="div-TrangThaiHangNhap">
        <%--Kế hoạch--%>
        <table class="table table-bordered  table-maxwidth-1024 tbl_click" id="tbl_kehoach">
            <thead class="thead-ArrivalNotice">
                <tr>
                    <th class="td-no">No.</th>
                    <th>STATUS</th>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CBM</th>
                    <th>TB.DATE</th>
                    <th>TB.TIME</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>TMS</th>
                    <th>INVOICE</th>
                    <th>BU</th>
                    <th>KHO GIAO HÀNG</th>
                    <th>FWD</th>
                    <th>Kho CPN</th>
                    <th>CD No</th>
                    <th>REMARK</th>
                    <th>FUNCTION</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>

        <table class="table table-bordered  table-maxwidth-1024 tbl_click" id="tbl_chuyenxe">
            <thead class="thead-ArrivalNotice">
                <tr>
                    <th class="td-no">No.</th>
                    <th>STATUS</th>
                    <th>HAWB</th>
                    <th>PCS</th>
                    <th>G.W</th>
                    <th>CBM</th>
                    <th>TB.DATE</th>
                    <th>TB.TIME</th>
                    <th>ORDER.D</th>
                    <th>ORDER.T</th>
                    <th>TRUCK.D</th>
                    <th>TRUCK.T</th>
                    <th>TRUCK ID</th>
                    <th>TMS</th>
                    <th>INVOICE</th>
                    <th>BU</th>
                    <th>KHO GIAO HÀNG</th>
                    <th>FWD</th>
                    <th>Kho CPN</th>
                    <th>CD No</th>
                    <th>REMARK</th>
                    <th>FUNCTION</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>


    <div class="modal fade" id="modalTaoKeHoach" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lx fullscreen" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">NHẬP THÔNG BÁO VÀ KẾ HOẠCH HÀNG ĐẾN</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">FWD</span>
                                <input type="text" class="form-control input-sm input-fwd" />
                            </div>
                        </div>


                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Ngày nhận thông báo</span>
                                <input type="text" class="form-control datepicker input-sm input-ngaynhantb" />
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Giờ nhận thông báo</span>
                                <input type="text" class="form-control timepicker input-sm input-gionhantb" />
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Chuyến bay</span>
                                <input type="text" disabled class="form-control input-sm input-chuyenbay" value="EP" />
                            </div>
                        </div>

                    </div>


                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-kehoach-luu" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheet" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="modalCapNhatHAWB" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg fullscreen " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times </span></button>
                    <h4 class="modal-title" id="">CẬP NHẬT CHUYẾN XE THEO HAWB</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Mã theo dõi</span>
                                <input type="text" class="form-control input-sm input-matheodoi" disabled/>
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Ngày giao xong</span>
                                <input type="text" class="form-control datepicker input-sm input-ngaygiaoxong" />
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Giờ giao xong</span>
                                <input type="text" class="form-control timepicker input-sm input-giogiaoxong" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">BKS</span>
                                <input type="text" class="form-control input-sm input-bks" list="sltBKSXe" />
                                <datalist class="nobdInput" id="sltBKSXe">
                                </datalist>
                            </div>
                        </div>
                        <div class="form-group col-sm-2">
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

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Đơn vị vận tải</span>
                                <input type="text" class="form-control input-sm input-donvivantai" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Số seal</span>
                                <input type="text" class="form-control input-sm input-seal" />
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Số niêm phong</span>
                                <input type="text" class="form-control input-sm input-niemphong" />
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Đơn điều phối</span>
                                <input type="text" class="form-control input-sm input-dondieuphoi" />
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Ngày giao hàng</span> <%-- ngày thực tế --%>
                                <input type="text" class="form-control datepicker input-sm input-ngaythucte" />
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Giờ giao hàng</span>
                                <input type="text" class="form-control timepicker input-sm input-giothucte" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-capnhathawb" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheetGiaoHang" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>


    <div class="modal fade" id="modalCapNhatThongTinGiaoHang" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg fullscreen " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times </span></button>
                    <h4 class="modal-title" id="">CẬP NHẬT THÔNG TIN GIAO HÀNG</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-capnhatthongtingiaohang" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheetThongTinGiaoHang" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalCPNCapNhat" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">CẬP NHẬT THÔNG TIN CHUYỂN PHÁT NHANH</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">FWD</span>
                                <input type="text" class="form-control input-sm input-capnhat-fwd" />
                            </div>
                        </div>


                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">CD No</span>
                                <input type="text" class="form-control input-sm input-capnhat-cdno" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Ngày thông báo</span>
                                <input type="text" class="form-control datepicker input-sm input-capnhat-ngaynhanthongbao" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Giờ thông báo</span>
                                <input type="text" class="form-control timepicker input-sm input-capnhat-gionhanthongbao" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">HAWB</span>
                                <input type="text" class="form-control input-sm input-capnhat-hawb" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">PCS</span>
                                <input type="text" class="form-control input-sm input-capnhat-pcs" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">GW</span>
                                <input type="text" class="form-control input-sm input-capnhat-gw" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">CBM</span>
                                <input type="text" class="form-control input-sm input-capnhat-cbm" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">TMS</span>
                                <input type="text" class="form-control input-sm input-capnhat-tms" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">INVOICE</span>
                                <input type="text" class="form-control input-sm input-capnhat-invoice" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">BU</span>
                                <input type="text" class="form-control input-sm input-capnhat-bu" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">KHO GIAO HÀNG</span>
                                <input type="text" class="form-control input-sm input-capnhat-khogiaohang" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">KHO CPN</span>
                                <input type="text" class="form-control input-sm input-capnhat-khocpn" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">PIC</span>
                                <input type="text" class="form-control input-sm input-capnhat-pic" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Ngày trả hàng</span>
                                <input type="text" class="form-control datepicker  input-sm input-capnhat-ngayyctrahang" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Giờ trả hàng</span>
                                <input type="text" class="form-control timepicker input-sm input-capnhat-gioyctrahang" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">BKS</span>
                                <input type="text" class="form-control input-sm input-capnhat-bks" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Tên LX</span>
                                <input type="text" class="form-control input-sm input-capnhat-tenlaixe" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">SĐT</span>
                                <input type="text" class="form-control input-sm input-capnhat-sdt" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Số CMND</span>
                                <input type="text" class="form-control input-sm input-capnhat-cmnd" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Số seal</span>
                                <input type="text" class="form-control input-sm input-capnhat-seal" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Tải trọng</span>
                                <input type="text" class="form-control input-sm input-capnhat-taitrong" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Ngày thực tế</span>
                                <input type="text" class="form-control datepicker  input-sm input-capnhat-ngaythucte" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Giờ thực tế</span>
                                <input type="text" class="form-control timepicker input-sm input-capnhat-giothucte" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-sm-4">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Nhà cung cấp</span>
                                <input type="text" class="form-control input-sm input-capnhat-ncc" />
                            </div>
                        </div>

                        <div class="form-group col-sm-8">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Ghi chú</span>
                                <input type="text" class="form-control input-sm input-capnhat-ghichu" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" attrid="" id="btn-kehoach-capnhat" class="btn btn-warning">Cập nhật</button>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/ChuyenPhatNhanh_V2.js") %>
</asp:Content>
