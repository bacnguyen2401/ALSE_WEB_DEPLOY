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
        <button type="button" id="btn-taokehoach" class="mani-btn btn btn-primary">Tạo kế hoạch</button>
        <button type="button" id="btn-capnhatchuyenxetheohawb" class="mani-btn btn btn-success">Cập nhật chuyến xe theo HAWB</button>
        <button type="button" id="btn-showGTK" class="mani-btn btn btn-warning">Nút bấm 3</button>
    </div>

    <div id="div-TrangThaiHangNhap">
        <table class="table table-bordered  table-maxwidth-1024" id="tbl_kehoach">
            <thead id="thead-ArrivalNotice">
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
                                <span class="input-group-addon" id="">Ngày thực tế</span>
                                <input type="text" class="form-control datepicker input-sm input-ngaythucte" />
                            </div>
                        </div>

                        <div class="form-group col-sm-2">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Giờ thực tế</span>
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
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/ChuyenPhatNhanh_V2.js") %>
</asp:Content>
