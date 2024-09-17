<%@ Page Title="QUẢN LÝ LOGISTICS" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyLogistics.aspx.cs" Inherits="ALSE.QuanLyHangMaple" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%--<link href="css/select2.min.css" rel="stylesheet" />--%>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyLogistics.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-logistics-main">
        <table class="table-title display-none" border="0" id="div-main-action-menu">
            <tbody>
                <tr>
                    <td></td>
                    <td class="td-search">
                        <span class="title-ckeckbox">Khách Hàng :</span>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll" checked id="cb-all" value="all" />ALL</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-mpl" value="mpl" />MPL</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-sonha" value="sonha" />SONHA</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-smk" value="smk" />SMK</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-dth" value="dth" />DTH</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-sev" value="sev" />SEV</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-sika" value="sika" />SIKA</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-ei" value="ei" />EI</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-fdi" value="fdi" />FDI</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-peony" value="peony" />PEONY</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-att" value="att" />ATT</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-spe" value="spe" />SPE</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-wnc" value="wnc" />SF.WNC</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-ram" value="ram" />RAM</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-gtk" value="gtk" />GTK</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-apl" value="apl" />APL</label>
                         <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-jda" value="jusda" />JUSDA</label>
                         <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-dhl" value="dhlcpl" />DHL.CPL</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-other" value="other" />OTHER</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type="button" class="btn btn-primary btn-sm" id="btn-themkehoach">Thêm Kế Hoạch</button>
                        <button type="button" class="btn btn-success btn-sm btn-tailai" ngay="-35" id="btn-tailai">TẢI LẠI</button>
                        <button type="button" class="btn btn-success btn-sm btn-tailai" ngay="-60" id="btn-tailai60">TẢI LẠI 60 NGÀY</button>
                    </td>

                    <td class="td-search">
                        <span class="title-ckeckbox">Service :</span>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-service" checked id="cb-all-service" value="all" />ALL</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-service cb-service-child" checked id="service-cd" value="cd" />CD</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-service cb-service-child" checked id="service-truck" value="truck" />TRUCK</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-service cb-service-child" checked id="service-fcl" value="fcl" />FCL</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-service cb-service-child" checked id="service-lcl" value="lcl" />LCL</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-service cb-service-child" checked id="service-grc" value="gcr" />GCR</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="cb-service cb-service-child" checked id="service-other" value="otherservice" />OTHER</label>
                    </td>
                    <td>
                        <button type="button" class="btn btn-info btn-sm" id="btn-lockehoach">Lọc kế hoạch</button>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td class="td-search">
                        <span class="title-ckeckbox">Đơn vị vận tải :</span>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="ncc-qll" checked id="cb-all-ncc" value="all-ncc" />ALL</label>
                        <%-- <label class="checkbox-inline color-white">
                            <input type="checkbox" class="ncc-qll cb-qll-child" checked id="cb-fcl" value="fcl" />FCL</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="ncc-qll cb-qll-child" checked id="cb-lcl" value="lcl" />LCL</label>--%>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="ncc-qll cb-qll-child-dvvt" checked id="cb-anp" value="anp" />ANP</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="ncc-qll cb-qll-child-dvvt" checked id="cb-pcf" value="pcf" />PCF</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="ncc-qll cb-qll-child-dvvt" checked id="cb-aplus" value="aplus" />APLUS</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="ncc-qll cb-qll-child-dvvt" checked id="cb-tng" value="tng" />TNG</label>
                        <label class="checkbox-inline color-white">
                            <input type="checkbox" class="ncc-qll cb-qll-child-dvvt" checked id="cb-other-ncc" value="otherncc" />OTHER</label>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <button type="button" class="btn btn-info btn-sm" id="btn-bangkethang-logistic">Chất lượng vận tải</button>
                        <button type="button" class="btn btn-info btn-sm" id="btn-thongke-logistic">Thống kê LOG</button>
                    </td>
                    <td>
                        <div class="row">
                            <div class="col-sm-4">
                                <input type="text" class="form-control input-sm" id="input-bill" placeholder="Nhập BILL" />
                            </div>
                            <div class="col-sm-4">
                                <input type="text" class="form-control input-sm" id="input-cont" placeholder="Nhập CONT NO" />
                            </div>
                            <div class="col-sm-2">
                                <input type="button" class="btn btn-sm btn-warning" id="btn-logistics-timkiem" value="Tìm Kiếm" />
                            </div>
                        </div>
                    </td>
                    <td>
                        <button type="button" class="btn btn-primary btn-sm" id="btn-tt-kh">Thông tin khách hàng</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <%--    <div class="row col-lg-12 display-none" id="div-main-action-menu">
            <div class="col-sm-4">
                <button type="button" class="btn btn-primary btn-sm" id="btn-themkehoach">Thêm Kế Hoạch</button>
                <button type="button" class="btn btn-success btn-sm btn-tailai" ngay="-35" id="btn-tailai">TẢI LẠI</button>
                <button type="button" class="btn btn-success btn-sm btn-tailai" ngay="-60" id="btn-tailai60">TẢI LẠI 60 NGÀY</button>
            </div>

            <div class="col-sm-6" id="div-checkbox">
                <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-qll" checked id="cb-all" value="all" />ALL</label>
                <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-mpl" value="mpl" />MPL</label>
                <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-sonha" value="sonha" />SONHA</label>
                <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-smk" value="smk" />SMK</label>
                <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-dth" value="dth" />DTH</label>

                <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-sev" value="sev" />SEV</label>
                <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-sika" value="sika" />SIKA</label>
                <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-ei" value="ei" />EI</label>
                <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-fdi" value="fdi" />FDI</label>
                <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-qll cb-qll-child" checked id="cb-other" value="other" />OTHER</label>
            </div>
            <div class="col-sm-2">
                <button type="button" class="btn btn-info btn-sm" id="btn-lockehoach">Lọc kế hoạch</button>
            </div>
        </div>
        <div class="row margin-bottom-5px display-none" id="div-timkiem">
            <div class="col-sm-2">
            </div>
            <div class="col-sm-3">
                <input type="text" class="form-control input-sm" id="input-bill" placeholder="Nhập BILL" />
            </div>
            <div class="col-sm-3">
                <input type="text" class="form-control input-sm" id="input-cont" placeholder="Nhập CONT NO" />
            </div>
            <div class="col-sm-2">
                <input type="button" class="btn btn-sm btn-warning" id="btn-logistics-timkiem" value="Tìm Kiếm" />
            </div>
        </div>--%>
        <div class="row col-lg-12">
            <table class="table table-bordered" id="table-logistics-main">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>

    <div id="modalThemKeHoach" class="modal fade in" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-full">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title">Thêm kế hoạch</h5>
                </div>

                <div class="modal-body">
                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-themkehoach-luu" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheet" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>

                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <div id="modalKeHoach" class="modal fade in qllModal" tabindex="-1" role="dialog" kehoachid="" sovandon="" socontainer="">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title"></h5>
                </div>

                <div class="modal-body">
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Số vận đơn</span>
                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-SoVanDon" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Số container</span>

                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-SoContainer" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Số chì hãng tàu</span>
                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-SoChiHangTau" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Dịch vụ</span>

                                    <select class="form-control input-qll-clear" id="input-qll-KieuContainerLoaiVanChuyen"></select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Loại hình nhập xuất</span>

                                    <select class="form-control input-sm input-qll-clear" id="input-qll-LoaiHinhNhapXuat">
                                        <option value=""></option>
                                        <option value="IMP">IMP</option>
                                        <option value="EXP">EXP</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Loại hình vận chuyển</span>

                                    <select class="form-control input-sm input-qll-clear" id="input-qll-LoaiHinhVanChuyen">
                                        <option value=""></option>
                                        <option value="SEA">SEA</option>
                                        <option value="AIR">AIR</option>
                                        <option value="DOM">DOMESTIC</option>
                                        <option value="TRUCK">TRUCK</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-3">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Số kiện</span>
                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-SoKien" />
                                </div>
                            </div>
                            <div class="form-group col-sm-3">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Trọng lượng</span>
                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-TrongLuong" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">

                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ngày giờ gửi thông tin cont</span>
                                    <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayContDenNhaMay" />
                                    <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioContDenNhaMay" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Khách hàng</span>

                                    <select class="form-control input-qll-clear" id="input-qll-KhachHang"></select>
                                </div>
                            </div>
                            <div class="form-group col-sm-6">

                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ngày giờ Cont đến nhà máy</span>
                                    <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayContDenNhaMayThucTe" />
                                    <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioContDenNhaMayThucTe" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <%--<div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ngày giờ nhận kế hoạch</span>
                                    <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayNhanKeHoach" />
                                    <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioNhanKeHoach" />
                                </div>
                            </div>--%>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ngày giờ tàu đi hoặc đến</span>
                                    <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayTauDiHoacDen" />
                                    <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioTauDiHoacDen" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Tuyến</span>
                                    <input type="text" class="form-control  input-qll-clear " id="input-qll-Tuyen" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Nhà cung cấp vận tải</span>
                                    <input type="text" class="form-control input-qll-clear " id="input-qll-NhaCungCapVanTai" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Kho trả hàng</span>
                                    <input type="text" class="form-control  input-qll-clear " id="input-qll-khotrahang" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">GrossTare</span>
                                    <input type="text" class="form-control  input-sm input-qll-clear " id="input-qll-GrossTare" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ghi Chú</span>
                                    <input type="text" class="form-control  input-sm input-qll-clear " id="input-qll-GhiChuKH" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                    <button type="button" id="btn-kehoach-luu" class="btn btn-primary">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    </div>

    <div id="modalBanGiaoChungTu" class="modal fade in qllModal" tabindex="-1" role="dialog" bangiaochungtuid="" sovandon="" socontainer="">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title"></h5>
                </div>

                <div class="modal-body">
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ngày giờ nhận chứng từ</span>
                                    <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayNhanChungTu" />
                                    <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioNhanChungTu" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ngày giờ gửi chứng từ Hải Quan</span>
                                    <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayGuiChungTuHaiQuan" />
                                    <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioGuiChungTuHaiQuan" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ngày giờ gửi chứng từ cho đơn vị vận chuyển</span>
                                    <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayGuiChungTuChoDonViVanChuyen" />
                                    <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioGuiChungTuChoDonViVanChuyen" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Cập nhật thông tin cho các lô hàng cùng vận đơn</span>

                                    <input type="checkbox" class="form-control" id="cb-UpdateAllWithSameVanDon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
                    <button type="button" id="btn-bangiaochungtu-luu" class="btn btn-primary">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    </div>

    <div id="modalThongTinToKhai" class="modal fade in qllModal" tabindex="-1" role="dialog" thongtintokhaiid="" sovandon="" socontainer="">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title"></h5>
                </div>

                <div class="modal-body">
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Số tờ khai</span>
                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-SoToKhai" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Số hóa đơn</span>
                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-SoHoaDon" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Loại hình tờ khai</span>

                                    <select class="form-control input-qll-clear" id="input-qll-LoaiHinhToKhai">
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Luồng tờ khai</span>
                                    <select class="form-control input-qll-clear" id="select-qll-LuongToKhai">
                                        <option value=""></option>
                                        <option value="Xanh">Xanh</option>
                                        <option value="Vàng">Vàng</option>
                                        <option value="Đỏ">Đỏ</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ngày giờ hoàn thành Draft</span>
                                    <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayNhanYeuCau" />
                                    <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioNhanYeuCau" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ngày giờ đăng ký tờ khai</span>
                                    <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayDangKyToKhai" />
                                    <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioDangKyToKhai" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ngày giờ thông quan</span>
                                    <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayThongQuan" />
                                    <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioThongQuan" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Cập nhật thông tin tờ khai cho các lô hàng cùng vận đơn</span>

                                    <input type="checkbox" class="form-control" id="cb-UpdateAllWithSameVanDon-TTTK" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group ">
                                <table>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
                    <button type="button" id="btn-thongtintokhai-luu" class="btn btn-primary">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    </div>

    <div id="modalThuTucGiamSatHaiQuan" class="modal fade in qllModal" tabindex="-1" role="dialog" thutucgiamsathaiquanid="" sovandon="" socontainer="">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title"></h5>
                </div>

                <div class="modal-body">
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Đại lý giám sát Hải Quan</span>

                                    <select class="form-control input-qll-clear" id="input-qll-DaiLyGiamSatHaiQuan"></select>
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Khu vực giám sát Hải Quan</span>

                                    <select class="form-control input-qll-clear" id="input-qll-KhuVucGiamSatHaiQuan"></select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Người làm giám sát Hải Quan</span>

                                    <select class="form-control input-qll-clear" id="input-qll-NguoiLamGiamSatHaiQuan"></select>
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ngày giờ làm giám sát Hải Quan</span>
                                    <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayLamGiamSatHaiQuan" />
                                    <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioLamGiamSatHaiQuan" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ngày giờ kiểm hóa</span>
                                    <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayKiemHoa" />
                                    <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioKiemHoa" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Cập nhật thông tin cho các lô hàng cùng vận đơn</span>

                                    <input type="checkbox" class="form-control" id="cb-thutucgiamsathaiquan-capnhatcungvandon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                    <button type="button" id="btn-thutucgiamsathaiquan-luu" class="btn btn-primary">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    </div>

    <div id="modalThongTinVanChuyen" class="modal fade in qllModal" tabindex="-1" role="dialog" thongtinvanchuyenid="" sovandon="" socontainer="">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title"></h5>
                </div>

                <div class="modal-body">
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Đơn vị vận chuyển</span>

                                    <select class="form-control input-qll-clear" id="input-qll-DonViVanChuyen">
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Biển kiểm soát</span>
                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-BienKiemSoat" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-4">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Tên lái xe</span>
                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-TenLaiXe" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Chứng minh thư</span>
                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-ChungMinhThu" />
                                </div>
                            </div>
                            <div class="form-group col-sm-4">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Số điện thoại</span>
                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-SoDienThoai" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="form-group col-sm-10">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Cập nhật thông tin vận chuyển cho các lô:</span>
                                    <select id="select-capnhatthongtinvanchuyen" class=" form-control input-sm" style="width: 100%" name="states[]" multiple="multiple">
                                    </select>
                                </div>
                            </div>
                            <div class="form-group col-sm-2">
                                <button id="btn-CapNhatThongTinVanChuyenChoCacLo" type="button" class="btn btn-sm btn-danger">Cập nhật</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                    <button type="button" id="btn-thongtinvanchuyen-luu" class="btn btn-primary">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    </div>

    <div id="modalGiaoHang" class="modal fade in qllModal" tabindex="-1" role="dialog" giaohangid="" sovandon="" socontainer="">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title"></h5>
                </div>

                <div class="modal-body">
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Số biên bản</span>
                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-SoBienBan" disabled />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <button type="button" id="btn-CapNhatChungSoBienBan" class="btn btn-sm btn-danger">Cập nhật thông tin cho các lô chung SỐ BIÊN BẢN</button>
                            </div>
                        </div>
                        <%--<div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ngày giờ đến nhà máy</span>
                                    <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayDenNhaMay" />
                                    <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio"  id="input-qll-GioDenNhaMay" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ngày giờ giao hàng</span>
                                    <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayGiaoHang" />
                                    <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio"  id="input-qll-GioGiaoHang" />
                                </div>
                            </div>
                        </div>--%>
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Người nhận hàng</span>
                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-NguoiNhanHang" />
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Duyệt chứng từ</span>
                                    <input type="checkbox" class="form-control input-sm input-qll-clear " id="input-qll-DuyetChungTu" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="form-group col-sm-10">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Cập nhật thông tin giao hàng cho các lô hàng</span>
                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-Thongtingiaohang" />
                                </div>
                            </div>
                            <div class="form-group col-sm-1">
                                <button type="button" id="btn-CapNhatThongTinGiaoHang" class="btn btn-sm btn-danger">Cập nhật</button>
                            </div>

                        </div>
                        <div class="row">
                            <div class="form-group col-sm-12">
                                <div class="input-group div-qll-group">
                                    <span class="input-group-addon" id="">Ghi Chú</span>
                                    <input type="text" class="form-control input-sm input-qll-clear " id="input-qll-GhiChu" />
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <td>Ngày giờ yêu cầu</td>
                                        <td>Ngày giờ đến nhà máy</td>
                                        <td>Ngày giờ nhận hàng xong</td>
                                        <td>Ngày giờ trả hàng</td>
                                        <td>POD</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayYeuCau" />
                                            <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioYeuCau" />
                                        </td>
                                        <td>
                                            <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayDenNhaMay" />
                                            <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioDenNhaMay" />
                                        </td>
                                        <td>
                                            <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayDongHangXong" />
                                            <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioDongHangXong" />
                                        </td>
                                        <td>
                                            <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay" id="input-qll-NgayGiaoHang" />
                                            <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio" id="input-qll-GioGiaoHang" />
                                        </td>
                                        <td>
                                            <button type="button" class="btn btn-sm btn-success btn-upload">Tải ảnh</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <span class="glyphicon glyphicon-paperclip color-8c8c8c activity-icon"></span>
                            <span class="td-bold activity-text">Danh sách file đính kèm</span>
                            <div id="div-filedinhkem-list">
                                <table id="table-filedinhkem" class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <td>STT</td>
                                            <td>Ảnh</td>
                                            <td>Tên File</td>
                                            <td>Kích Thước</td>
                                            <td>Tải Xuống</td>
                                            <td>Xóa</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                    <button type="button" id="btn-giaohang-luu" class="btn btn-primary">Lưu thay đổi</button>
                </div>
            </div>
        </div>
    </div>

    <%-- Bacnq modal chi phí phát sinh --%>
    <div id="modalChiPhiPhatSinh" class="modal fade in qllModal" tabindex="-1" role="dialog" kehoachid="" chiphiphatsinhid="" sovandon="" socontainer="">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title"></h5>
                </div>

                <div class="modal-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <td>Các chi phí phát sinh</td>
                                <td>Vendor Truck chi phí</td>
                                <td>Khách Hàng Doanh Thu</td>
                                <td>Ghi Chú</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Phí lưu ca</td>
                                <td contenteditable='true' id="input-cpps-vdtphiluuca"></td>
                                <td contenteditable='true' id="input-cpps-khphiluuca"></td>
                                <td contenteditable='true' id="input-cpps-gcphiluuca"></td>
                            </tr>
                            <tr>
                                <td>Phí nộp CD không phơi</td>
                                <td contenteditable='true' id="input-cpps-vdtphinopcdkhongphoi"></td>
                                <td contenteditable='true' id="input-cpps-khphinopcdkhongphoi"></td>
                                <td contenteditable='true' id="input-cpps-gctphinopcdkhongphoi"></td>
                            </tr>
                            <tr>
                                <td>Kiểm hóa không hàng</td>
                                <td contenteditable='true' id="input-cpps-vdtkiemhoakhonghang"></td>
                                <td contenteditable='true' id="input-cpps-khkiemhoakhonghang"></td>
                                <td contenteditable='true' id="input-cpps-gckiemhoakhonghang"></td>
                            </tr>
                            <tr>
                                <td>Chi phí khác</td>
                                <td contenteditable='true' id="input-cpps-vdtchiphikhac"></td>
                                <td contenteditable='true' id="input-cpps-khchiphikhac"></td>
                                <td contenteditable='true' id="input-cpps-gcchiphikhac"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                    <button type="button" id="btn-chiphiphatsinh-luu" class="btn btn-primary">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>
    <%-- End Bacnq mmodal chi phí phát sinh --%>

    <%-- Bacnq modal hệ thống EI --%>
    <div id="modalHeThongEi" class="modal fade in qllModal" tabindex="-1" role="dialog" kehoachid="" chiphiphatsinhid="" sovandon="" socontainer="">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title"></h5>
                </div>

                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-6">
                            <div class="input-group div-qll-group">
                                <span class="input-group-addon" id="">Ngày giờ cập nhật hệ thống EI</span>
                                <input type="text" class="form-control datepicker input-sm input-qll-clear l-ngay hasDatepicker" id="input-qll-NgayhethongEI" />
                                <input type="text" class="form-control timepicker input-sm input-qll-clear l-gio ui-timepicker-input" id="input-qll-GiohethongEI" autocomplete="off" />
                            </div>
                        </div>
                        <div class="form-group col-sm-6">
                            <div class="input-group div-qll-group">
                                <span class="input-group-addon" id="">Ghi Chú</span>
                                <textarea id="textarea-hethongei" name="w3review" rows="3" cols="40">
                                     </textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                    <button type="button" id="btn-hethongei-luu" class="btn btn-primary">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>
    <%-- End Bacnq hệ thống EI --%>

    <div id="modalThaoLuan" class="modal fade in qllModal" tabindex="-1" role="dialog" binhluanid="">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title">Sửa thảo luận</h5>
                </div>

                <div class="modal-body">
                    <div class="grid">
                        <div class="row">
                            <div class="form-group col-lg-12">
                                <textarea id="textarea-sua-binhluan" data-provide="markdown" class="form-control modal-textarea" rows="10" placeholder="Viết bình luận"></textarea>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-sua-binhluan-luu" class="btn btn-primary">Lưu thay đổi</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="modalDanhGiaVendor" class="modal fade in qllModal" tabindex="-1" role="dialog" binhluanid="">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title">Đánh giá vendor</h5>
                </div>
                <div class="modal-body">
                    <div class="grid">
                        <table class="table table-bordered table-hover" id="tbl-danhgiavendor">
                            <thead>
                                <tr>
                                    <td>STT</td>
                                    <td>Nội dung</td>
                                    <td>Đánh giá</td>
                                    <td>Ghi chú</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-danhgia-vendor-luu" kehoachid="0" class="btn btn-primary">Lưu</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal lọc theo kế hoạch -->
    <div class="modal fade modal-fullscreen" id="ModalLocTheoKeHoach" role="dialog">
        <div class="modal-dialog modal-lg">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Lọc theo kế hoạch</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class=" input-group  width-300px">
                                <span class="input-group-addon" id="">Chọn ngày</span>
                                <input type="text" class="form-control datepicker" id="input-ngay-lockehoach" />
                                <div class="input-group-btn">
                                    <input type="button" class="btn btn-success" id="btn-lockehoach-theongay" value="Lọc" />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <input type="button" class="btn btn-info" id="btn-print-loctheongay" value="Kết xuất excel kế hoạch" />
                        </div>
                        <div class="col-sm-7 color-textfull">
                            <div>
                                <span>Khách hàng :</span>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-qll-kh" checked id="cb-all-kh" value="all-kh" />ALL</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-qll-kh cb-qll-child-kh" checked id="cb-mpl-kh" value="mpl" />MPL</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-qll-kh cb-qll-child-kh" checked id="cb-sonha-kh" value="sonha" />SONHA</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-qll-kh cb-qll-child-kh" checked id="cb-smk-kh" value="smk" />SMK</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-qll-kh cb-qll-child-kh" checked id="cb-dth-kh" value="dth" />DTH</label>

                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-qll-kh cb-qll-child-kh" checked id="cb-sev-kh" value="sev" />SEV</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-qll-kh cb-qll-child-kh" checked id="cb-sika-kh" value="sika" />SIKA</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-qll-kh cb-qll-child-kh" checked id="cb-ei-kh" value="ei" />EI</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-qll-kh cb-qll-child-kh" checked id="cb-fdi-kh" value="fdi-kh" />FDI</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-qll-kh cb-qll-child-kh" checked id="cb-peony-kh" value="peony" />PEONY</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-qll-kh cb-qll-child-kh" checked id="cb-spe-kh" value="spe" />SPE</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-qll-kh cb-qll-child-kh" checked id="cb-other-kh" value="other-kh" />OTHER</label>
                            </div>
                            <div>
                                <span>Đơn vị vận tải :</span>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-dvvt" checked id="cb-all-dvvt" value="all-dvvt" />ALL</label>
                                <%--  <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-dvvt cb-qll-child-kh" checked id="cb-fcl-dvvt" value="fcl" />FCL</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-dvvt cb-qll-child-kh" checked id="cb-lcl-dvvt" value="lcl" />LCL</label>--%>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-dvvt cb-qll-child-kh-dvvt" checked id="cb-anp-dvvt" value="anp" />ANP</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-dvvt cb-qll-child-kh-dvvt" checked id="cb-pcf-dvvt" value="pcf" />PCF</label>
                                <label class="checkbox-inline">
                                    <input type="checkbox" class="cb-dvvt cb-qll-child-kh-dvvt" checked id="cb-other-dvvt" value="other-vt" />OTHER</label>
                            </div>
                        </div>
                    </div>
                    <div class="table-appen">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal lọc theo kế hoạch -->
    <div class="modal fade modal-fullscreen" id="ModalThongTinKhacHang" role="dialog">
        <div class="modal-dialog modal-lg">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Thông tin khách hàng</h4>
                </div>
                <div class="modal-body">
                    <div id="show-thongtinkhachhang">
                    </div>

                </div>
            </div>
        </div>
    </div>

    <%-- Modal theêm thông tin khách hàng --%>
    <div class="modal fade" id="ModalThemThongTinKhacHang" role="dialog" data-backdrop="static">
        <div class="modal-dialog modal-lg">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Thêm thông tin khách hàng</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-4 has-success">
                            <div class="input-group">
                                <span class="input-group-addon " id="">Nhà máy</span>
                                <input type="text" class="form-control input-sm" id="txtNhaMay" />
                            </div>
                        </div>
                        <div class="form-group col-sm-4  has-success">
                            <div class="input-group ">
                                <span class="input-group-addon " id="">TT Xuất HĐ CSHT</span>
                                <input type="text" class="form-control input-sm" id="txtXuatCSHT" />
                            </div>
                        </div>
                        <div class="form-group col-sm-4  has-success">
                            <div class="input-group ">
                                <span class="input-group-addon " id="">Yêu cầu đặc biệt</span>
                                <input type="text" class="form-control input-sm" id="txtYeuCauDacBiet" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-6 has-success">
                            <div class="input-group">
                                <span class="input-group-addon " id="">Địa chỉ</span>
                                <textarea class="width-250" cols="1" rows="4" id="tara-DiaChi"></textarea>
                            </div>
                        </div>
                        <div class="form-group col-sm-6 has-success">
                            <div class="input-group">
                                <span class="input-group-addon " id="">TT Xuất HĐ Nâng Hạ</span>
                                <textarea class="width-250" cols="1" rows="4" id="tara-TTXuatHDNH"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                    <button type="button" id="btn-luu-khach-hang" class="btn btn-primary">Lưu</button>
                    <button type="button" id="btn-cap-nhat-khach-hang" attr-id="" class="btn btn-primary">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal chất lượng vendor vận tải-->
    <div class="modal fade" id="ModalVendor" data-backdrop="static" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Chất lượng VENDOR vận tải hàng</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">Từ ngày</span>
                                <input type="text" class="form-control datepicker " id="input-tungay-vendor" />
                                <%--hasDatepicker--%>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">Đến ngày</span>
                                <input type="text" class="form-control datepicker" id="input-denngay-vendor" />
                            </div>
                        </div>
                        <div class="form-group col-sm-3">
                            <div class="input-group div-qll-group">
                                <span class="input-group-addon" id="">Loại hình vc</span>
                                <select class="form-control input-sm input-qll-clear" id="select-loai-hinh-van-chuyen">
                                    <option value="0">Tất cả</option>
                                    <option value="SEA">SEA</option>
                                    <option value="AIR">AIR</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-qll-group">
                                <span class="input-group-addon" id="">Khách hàng</span>
                                <select class="form-control input-sm input-qll-clear" id="select-khachhang">
                                </select>
                            </div>
                        </div>
                        <%--<div class="col-sm-3">
                            <button type="button" class="btn btn-primary" id="btn-xemvendor">Xem</button>
                        </div>--%>
                    </div>
                    <div class="row">

                        <div class="form-group col-sm-5">
                            <div class="input-group div-qll-group">
                                <span class="input-group-addon" id="">Nhà cung cấp vận tải</span>
                                <select class="form-control input-sm input-qll-clear" id="select-nhacungcapvantai">
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <button type="button" class="btn btn-primary" id="btn-xemvendor">Xem</button>
                        </div>
                    </div>
                    <div id="table-vendor">
                        <table class="table table-bordered" id="tbl-vendor-vantai">
                            <thead>
                                <tr class="title-color">
                                    <td>STT</td>
                                    <td>Loại hình vận chuyển</td>
                                    <td>Khách hàng</td>
                                    <td>Vendor</td>
                                    <td>Tổng số xe</td>
                                    <td>Tổng xe về đúng giờ </td>
                                    <td>Tổng xe về muộn </td>
                                    <td>Tổng thời gian đến muộn</td>
                                    <td>Trung bình giờ xe đến muộn</td>
                                    <td>Tỉ lệ xe đến đúng giờ</td>
                                    <td>Tổng xe vendor phục vụ</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Thống kê sản lương LOGISTICS -->
    <div class="modal fade" id="ModalThongKeLOG" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Thống kê sản lượng Logistic</h4>
                </div>
                <div class="modal-body">
                    <div class="row" id="div-detail-thongke">
                        <div class="col-sm-3">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Tháng</span>
                                <select class="form-control input-sm input-thongke-ngay-change" id="select-thongke-thang">
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
                                <select class="form-control input-sm input-thongke-ngay-change" id="select-thongke-nam">
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
                        <%--    <div class="form-group col-sm-3">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Tên file</span>
                                <input type="text" class="form-control input-sm" value="LOG" id="input-thongke-tenfile" />
                            </div>
                        </div>--%>
                        <div class="col-sm-3">
                            <button type="button" class="btn btn-primary btn-sm" id="btn-thongke-excel">Thống kê LOGISTIC Excel</button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModalUpload" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">Upload File: <span id="span-upload-tilte" class="color-red font-weight-bold"></span></h4>
                </div>
                <div class="modal-body">
                    <div id="div-upload-btn" class="div-upload-group">
                        <label for="f_UploadImage" class="btn btn-success btn-sm">
                            <i class="glyphicon glyphicon-plus"></i>Chọn ảnh...
                        </label>
                        <a class="btn btn-primary btn-sm" id="a-upload-startupload"><i class="glyphicon glyphicon-upload"></i>Bắt đầu tải lên</a>
                        <a class="btn btn-danger btn-sm" id="a-upload-delete-all"><i class="glyphicon glyphicon-trash"></i>Xóa hết</a>
                        <input type="file" class="upload" id="f_UploadImage" multiple="multiple" accept="image/jpg, image/png, image/gif, image/jpeg" /><br />
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped active" role="progressbar"
                            aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 0%" id="div-upload-process-bar">
                            0%
                        </div>
                    </div>
                    <div id="div-upload-imgzone" class="div-upload-group">
                        <table class="table table-bordered table-responsive" id="tbl-upload-imgzone">
                            <thead>
                                <tr>
                                    <td>Trạng Thái</td>
                                    <td>Ảnh</td>
                                    <td>Tên File</td>
                                    <td>Kích Thước</td>
                                    <td>Xóa</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">

                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <%--<script src="js/select2.min.js"></script>--%>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyLogistics.js") %>
</asp:Content>
