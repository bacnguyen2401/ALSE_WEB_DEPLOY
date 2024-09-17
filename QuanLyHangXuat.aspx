<%@ Page Title="QUẢN LÝ HÀNG XUẤT" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyHangXuat.aspx.cs" Inherits="ALSE.QuanLyHangXuat" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <link href='https://fonts.googleapis.com/css?family=LibreBarcode39' rel='stylesheet'>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyHangXuat.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="loading" class="displaynone">
        <img id="loading-image" src="images/loading.gif" alt="Loading..." />
    </div>
    <div class="header-export">
        <table class="header-table-export">
            <%-- Header  --%>
            <tr>
                <td rowspan="2">
                    <div id='countdown' class="hx-vitri"></div>
                    <br />
                    <div class="hx-vitri">
                        <label id="ltrHXViTri">
                        </label>
                    </div>
                    <br />
                    <div class="hx-vitri" id="div-getkiemton">
                    </div>
                    <br />
                    <div class="hx-vitri">
                        <label id="div-saikienso">
                        </label>
                    </div>
                </td>
                <td>
                    <p class="title-export hx-vitri">EXPORT CARGO STATUS</p>
                </td>

                <%--<td>
                    <div style="width: 700px;">
                        <ul id="webTicker-noti" class="webtiker">
                        </ul>
                    </div>
                    <div style="width: 700px;">
                        <ul id="webTicker-mistake" class="webtiker">
                        </ul>
                    </div>
                </td>--%>
            </tr>
            <tr>
                <td colspan="2" class="text-center-button">

                    <a class="mani-btn btn btn-info btn-sm btn-printPage">Print</a>
                    <a class="mani-btn btn btn-success btn-sm btn-print-modal">Print EI</a>
                    <a href="InputExcelBookVsip.aspx" class="mani-btn btn btn-primary btn-sm">BOOKING VSIP</a>
                    <a href="#" class="mani-btn btn btn-info btn-sm" id="update-hawb">Update HAWB</a>
                    <%--<a href="InputExcelBook.aspx" class="mani-btn btn btn-info btn-sm">BOOKING HP</a>--%>
                    <a href="TruyVanHangXuat.aspx" class="mani-btn btn btn-success btn-sm">Truy Vấn Hàng Xuất</a>
                    <a href="DanhSachDNN.aspx" class="mani-btn btn btn-primary btn-sm">DS DNN</a>
                    <a href="TruyVanDNN.aspx" class="mani-btn btn btn-info btn-sm">Truy Vấn DNN</a>
                    <a href="XemCanDIM.aspx" class="mani-btn btn btn-success btn-sm">Tra Cứu HX</a>
                    <a href="QuanLyKhoHang.aspx" class="mani-btn btn btn-primary btn-sm">Storage</a>

                    <a href="QuanLyPhieuCan.aspx" class="mani-btn btn btn-info btn-sm">Phiếu Cân</a>
                    <a href="ViTri.aspx" class="mani-btn btn btn-success btn-sm">Vị Trí</a>
                    <a href="NhapGTK.aspx" class="mani-btn btn btn-primary btn-sm">Tờ Khai</a>

                    <a href="#" class="mani-btn btn btn-info btn-sm" id="abchx">Báo Cáo Sản Lượng</a>
                    <a href="#" class="mani-btn btn btn-success btn-sm" id="btn-chuyenbay">Chuyến bay</a>
                    <a href="KeHoachDetails.aspx" class="mani-btn btn btn-primary btn-sm">Chi tiết kế hoạch</a>
                    <a href="#" class="mani-btn btn btn-info btn-sm" id="btn-kehoach-view">Ý nghĩa màu kế hoạch</a>
                    <a href="QuanLyGiaoNhanDOC.aspx" class="mani-btn btn btn-success btn-sm">Giao DOC</a>
                    <a href="QuanLyInTem.aspx" class="mani-btn btn btn-primary btn-sm">Kế hoạch KUEHNE NAGEL</a>
                </td>
                <td></td>
                <td>
                    <%--<label class="checkbox-inline  lable-title color-white">WAREHOUSE: </label>--%>
                    <label class="checkbox-inline  lable-title color-white">WH: </label>
                    <%--<label class="checkbox-inline color-white">
                        <input type="checkbox" class="cb-makho" checked id="cb-makho-all" value="ALL" />ALL</label>
                    <label class="checkbox-inline color-white">
                        <input type="checkbox" class="cb-makho cb-makho-child" checked id="cb-makho-ALSC" value="ALSC" />ALSC</label>
                    <label class="checkbox-inline color-white">
                        <input type="checkbox" class="cb-makho cb-makho-child" checked id="cb-makho-NCTS" value="NCTS" />NCTS</label>
                    <label class="checkbox-inline color-white">
                        <input type="checkbox" class="cb-makho cb-makho-child" checked id="cb-makho-ACS" value="ACS" />ACS</label>--%>

                    <select class="form-select select-wh" id="select-wh">
                        <option selected value="ALL">ALL</option>
                        <option value="ACS">ACS</option>
                        <option value="ALSC">ALSC</option>
                        <option value="NCTS">NCTS</option>
                        <option value="MSF">MSF</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td colspan="3" id="td-getTTHX"></td>
                <td>
                    <input type="checkbox" id="show-booking" /><span style="color: white">Booking</span></td>
                <td>
                    <%--  <label class="checkbox-inline  lable-title color-white">LOC: </label>
                    <select class="cbx-c"  name="cars" id="cars">
                        <option value="show-vsip">VSIP</option>
                        <option value="show-hp">HP</option>
                        <option value="show-uli">ULI</option>
                        <option value="show-efl">EFL</option>
                        <option value="show-kwe">KWE</option>
                    </select>--%>
                    <label class="checkbox-inline  lable-title color-white">LOC: </label>
                    <%--<label class="checkbox-inline  lable-title color-white">LOCATION: </label>--%>
                    <%--<label class="checkbox-inline color-white">
                        <input type="checkbox" class="cbx-c" checked id="cbx-vsip" name="show-vsip" />VSIP</label>
                    <label class="checkbox-inline color-white">
                        <input type="checkbox" class="cbx-c" checked id="cbx-hp" name="show-hp" />HP</label>
                    <label class="checkbox-inline color-white">
                        <input type="checkbox" class="cbx-c" checked id="cbx-uli" name="show-uli" />ULI</label>
                    <label class="checkbox-inline color-white">
                        <input type="checkbox" class="cbx-c" checked id="cbx-efl" name="show-efl" />EFL</label>
                    <label class="checkbox-inline color-white">
                        <input type="checkbox" class="cbx-c" checked id="cbx-kwe" name="show-kwe" />KWE</label>--%>
                    <%--   <input type="checkbox" id="cbx-vsip" class="cbx-c " checked name="show-vsip" />
                        <span class="chx-name hx-vitri">VSIP</span>
                        <input type="checkbox" id="cbx-hp" class="cbx-c" checked name="show-hp" />
                        <span class="chx-name hx-vitri">HP</span>--%>

                    <select class="form-select select-wh" id="select-loc">
                        <option selected value="ALL">ALL</option>
                        <option value="VSIP">VSIP</option>
                        <option value="HPH">HPH</option>
                        <option value="BG">BG</option>
                        <option value="QM">QM</option>
                    </select>
                </td>
                <%--  <td>
                     <label class="checkbox-inline  lable-title color-white">FWDS: </label>
                </td>--%>
            </tr>
            <%-- table --%>
            <tr>
                <td colspan="4">
                    <table class="table table-bordered table-export">
                        <tr id="tr-loading">
                            <td colspan="29">Loading...
                            </td>
                        </tr>
                        <tr>
                            <td class="auto-style20" id="tesrt" colspan="3">ToTal:</td>
                            <td class="auto-style20" colspan="2">Include:</td>
                            <td class="auto-style20" colspan="2">MAWB:</td>
                            <%--<td class="auto-style20" colspan="2">Volume:</td>--%>

                            <td class="auto-style20" colspan="3" id="td-exp-today">Exp(ToDay):</td>
                            <td class="auto-style20" colspan="2">DHL:</td>
                            <td class="auto-style20" colspan="2">AGI:</td>
                            <td class="auto-style20" colspan="2">SCK:</td>
                            <td class="auto-style20" colspan="2">Google:</td>
                            <td class="auto-style20" colspan="2">PT:</td>
                            <td class="auto-style20" colspan="2">APX:</td>
                            <td class="auto-style20" colspan="3">Exp(Y'Day):</td>
                            <td class="auto-style20" colspan="3">In(Y'Day):</td>
                            <td class="auto-style20" colspan="3">In W.H:</td>
                        </tr>

                        <tr>
                            <td class="auto-style2 bn-data hx-value" id="bn-total-pcs"></td>
                            <td class="auto-style2 hp-data hx-value" id="hp-total-pcs"></td>
                            <td class="auto-style5"><span>Pcs</span></td>
                            <td class="auto-style2 bn-data hx-value" id="bn-include-skid"></td>
                            <td><span>skid</span></td>
                            <td class="auto-style2 bn-data hx-value" id="bn-mawb-pcs"></td>
                            <td class="auto-style5"><span>Pcs</span></td>
                            <%--<td class="auto-style2 bn-data hx-value" id="bn-volume-cbm">
                                </td>
                                <td>cbm</td>--%>

                            <td class="auto-style2 bn-data hx-value" id="bn-exptoday-pcs"></td>
                            <td class="auto-style2 hp-data hx-value" id="hp-exptoday-pcs"></td>
                            <td>Pcs</td>
                            <!--FWD-->
                            <td class="auto-style2 hx-value bn-data" id="dhl-pcs"></td>
                            <td>Pcs</td>
                            <td class="auto-style2 hx-value bn-data" id="agi-pcs"></td>
                            <td>Pcs</td>
                            <td class="auto-style2 hx-value bn-data" id="sck-pcs"></td>
                            <td>Pcs</td>
                            <td class="auto-style2 hx-value bn-data" id="google-pcs"></td>
                            <td>Pcs</td>
                            <td class="auto-style2 hx-value hp-data" id="pt-pcs"></td>
                            <td>Pcs</td>
                            <td class="auto-style2 hx-value hp-data" id="apx-pcs"></td>
                            <td>Pcs</td>
                            <td class="auto-style2 bn-data hx-value" id="bn-expyesterday-pcs"></td>
                            <td class="auto-style2 hp-data hx-value" id="hp-expyesterday-pcs"></td>
                            <td>Pcs</td>
                            <td class="auto-style2 bn-data hx-value" id="bn-inyesterday-pcs"></td>
                            <td class="auto-style2 hp-data hx-value" id="hp-inyesterday-pcs"></td>
                            <td>Pcs</td>
                            <td class="auto-style2 bn-data hx-value" id="bn-intoday-pcs"></td>
                            <td class="auto-style2 hp-data hx-value" id="hp-intoday-pcs"></td>
                            <td>Pcs</td>
                        </tr>
                        <tr>
                            <td class="auto-style2 bn-data hx-value" id="bn-total-kgs"></td>
                            <td class="auto-style2 hp-data hx-value" id="hp-total-kgs"></td>
                            <td class="auto-style4"><span>Kgs</span></td>
                            <td class="auto-style2 bn-data hx-value" id="bn-include-carton"></td>
                            <td><span>carton</span></td>
                            <td class="auto-style2 bn-data hx-value" id="bn-mawb-kgs"></td>
                            <td class="auto-style4"><span>Kgs</span></td>
                            <%--<td class="auto-style2">
                </td>--%>
                            <%--<td><span></span></td>--%>

                            <td class="auto-style2 bn-data hx-value" id="bn-exptoday-kgs"></td>
                            <td class="auto-style2 hp-data hx-value" id="hp-exptoday-kgs"></td>
                            <td><span>Kgs</span></td>
                            <!--FWD-->
                            <td class="auto-style2 hx-value bn-data" id="dhl-kgs"></td>
                            <td><span>Kgs</span></td>
                            <td class="auto-style2 hx-value bn-data" id="agi-kgs"></td>
                            <td><span>Kgs</span></td>
                            <td class="auto-style2 hx-value bn-data" id="sck-kgs"></td>
                            <td><span>Kgs</span></td>
                            <td class="auto-style2 hx-value bn-data" id="google-kgs"></td>
                            <td><span>Kgs</span></td>
                            <td class="auto-style2 hx-value hp-data" id="pt-kgs"></td>
                            <td><span>Kgs</span></td>
                            <td class="auto-style2 hx-value hp-data" id="apx-kgs"></td>
                            <td><span>Kgs</span></td>
                            <td class="auto-style2 bn-data hx-value" id="bn-expyesterday-kgs"></td>
                            <td class="auto-style2 hp-data hx-value" id="hp-expyesterday-kgs"></td>
                            <td><span>Kgs</span></td>
                            <td class="auto-style2 bn-data hx-value" id="bn-inyesterday-kgs"></td>
                            <td class="auto-style2 hp-data hx-value" id="hp-inyesterday-kgs"></td>
                            <td><span>Kgs</span></td>
                            <td class="auto-style2 bn-data hx-value" id="bn-intoday-kgs"></td>
                            <td class="auto-style2 hp-data hx-value" id="hp-intoday-kgs"></td>
                            <td><span>Kgs</span></td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    <div id="div-TrangThaiHangXuat" class="">
        <%-- Start table PLAN --%>
        <div id="div-Plan">
            <table class="table table-bordered grid-view tbl-header-fixed table-maxwidth-1024" id="tbl-Plan">
                <tbody>
                </tbody>
            </table>
        </div>
        <%-- Start table Booking --%>
        <div id="div-Booking">
            <table class="table table-bordered grid-view tbl-header-fixed table-maxwidth-1024" id="tbl-Booking">
                <tbody>
                </tbody>
            </table>
        </div>

        <%-- Start table PreAccept --%>
        <div id="div-PreAccept">
            <table class="table table-bordered grid-view tbl-header-fixed table-maxwidth-1024" id="tbl-PreAccept">
                <tbody>
                </tbody>
            </table>
        </div>

        <%-- Start table Accepted --%>
        <div id="div-Accepted">
            <table class="table table-bordered grid-view tbl-header-fixed table-maxwidth-1024" id="tbl-Accepted">
                <tbody>
                </tbody>
            </table>
        </div>

        <%-- Start table LoadOnTrucking --%>
        <div id="div-LoadOnTrucking">
            <table class="table table-bordered grid-view tbl-header-fixed table-maxwidth-1024" id="tbl-LoadOnTrucking">
                <tbody>
                </tbody>
            </table>
        </div>

        <%-- Start table TruckingToNBA --%>
        <div id="div-TruckingToNBA">
            <table class="table table-bordered grid-view tbl-custom tbl-header-fixed table-maxwidth-1024" id="tbl-TruckingToNBA">
                <tbody>
                </tbody>
            </table>
        </div>

        <%-- Start table AirPort --%>
        <div id="div-AirPort">
            <table class="table table-bordered grid-view tbl-custom tbl-header-fixed table-maxwidth-1024" id="tbl-AirPort">
                <tbody>
                </tbody>
            </table>
        </div>

        <%-- Start table ComPlete --%>
        <div id="div-Complete">
            <table class="table table-bordered grid-view tbl-custom tbl-header-fixed table-maxwidth-1024" id="tbl-Complete">
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
    <%--<table class="table table-bordered grid-view tbl-custom table-maxwidth-1024" id="header-fixed"></table>--%>

    <!-- Modal Báo cáo sản  lượng -->
    <div class="modal fade modal-fullscreen" id="modal-bcsl" role="dialog" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog">
            s<!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Báo cáo sản lượng</h4>
                    <div class="row">
                        <div class="form-group col-sm-6">
                            <label for="inputTuNgay" class="col-sm-3 control-label modal-style-padding">Từ ngày</label>
                            <div class="col-sm-9 modal-style-padding">
                                <input type="text" class="form-control" id="TuNgay" placeholder="dd/MM/yyyy" />
                            </div>
                        </div>
                        <div class="form-group col-sm-6">
                            <label for="inputDenNgay" class="col-sm-3 control-label modal-style-padding">Đến ngày</label>
                            <div class="col-sm-9 modal-style-padding">
                                <input type="text" class="form-control" id="DenNgay" placeholder="dd/MM/yyyy" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="inputDaiLy" class="col-sm-3 control-label modal-style-padding">Đại lý</label>
                                <div class="col-sm-9 modal-style-padding">
                                    <select class="form-control select2" id="selectDaiLy">
                                        <option selected="selected" value="ALL">ALL</option>
                                        <option value="AGI">AGI</option>
                                        <option value="DHL">DHL</option>
                                        <option value="SCK">SCK</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="inputBaoCao" class="col-sm-3 control-label modal-style-padding">Báo Cáo</label>
                                <div class="col-sm-9 modal-style-padding">
                                    <select class="form-control select2" id="selectBaoCao">
                                        <option selected="selected" value="0">Xuất</option>
                                        <option value="1">Nhập</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-body">
                    <table id="table-bao-cao-san-luong-xuat" class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Stt</th>
                                <th>Số Mawb</th>
                                <th>Số kiện</th>
                                <th>Trọng lượng</th>
                                <th>Chuyến bay</th>
                                <th>Ngày bay BK</th>
                                <th>Tên Hàng</th>
                                <th>BKS xe xuất</th>
                                <th>Ngày Xuất</th>
                                <th>Giờ Xuất</th>
                                <th>Mã PV</th>
                                <th>FWD</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" id="xemBaoCao">Xem báo cáo</button>
                </div>
            </div>
        </div>
    </div>
    <!--End  Modal Báo cáo sản  lượng -->

    <!-- modal---->
    <div class="modal fade " tabindex="-1" role="dialog" id="modal-changestatus">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Xác nhận chuyển trạng thái</h4>
                </div>
                <div class="modal-body">

                    <table class="table table-bordered" id="mo-table">
                        <tr>
                            <td>
                                <label class="control-label">Mawb</label></td>
                            <td>
                                <span class=" " id="mo-mawb"></span>
                            </td>
                            <td>
                                <label class="control-label">Số Kiện</label></td>
                            <td>
                                <span class=" " id="mo-sokien"></span>
                            </td>
                            <td>
                                <label class="control-label">Trọng Lượng</label></td>
                            <td>
                                <span class=" " id="mo-trongluong"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="control-label">Chuyến bay</label></td>
                            <td>
                                <span class=" " id="mo-chuyenbay"></span>
                            </td>
                            <td>
                                <label class="control-label">Ngày Bay</label></td>
                            <td>
                                <span class=" " id="mo-ngaybay"></span>
                            </td>
                            <td>
                                <label class="control-label">Giờ bay</label></td>
                            <td>
                                <span class=" " id="mo-giobay"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="control-label">CUT NBA</label></td>
                            <td>
                                <span class=" " id="mo-cutnba"></span>
                            </td>
                            <td>
                                <label class="control-label">CUT ALSE</label></td>
                            <td>
                                <span class=" " id="mo-cutalse"></span>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <label class="control-label">Điểm Đến</label></td>
                            <td>
                                <span class=" " id="mo-diemden"></span>
                            </td>
                            <td>
                                <label class="control-label">Ngày Làm SLI</label></td>
                            <td>
                                <span class=" " id="mo-ngaylamsli"></span>
                            </td>
                            <td>
                                <label class="control-label">Giờ Làm SLI</label></td>
                            <td>
                                <span class=" " id="mo-giolamsli"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="control-label">BKS Xe Xuất</label></td>
                            <td>
                                <span class=" " id="mo-bksxexuat"></span>
                            </td>
                            <td>
                                <label class="control-label">Ngày Xuất</label></td>
                            <td>
                                <span class=" " id="mo-ngayxuat"></span>
                            </td>
                            <td>
                                <label class="control-label">Giờ Xuất</label></td>
                            <td>
                                <span class=" " id="mo-gioxuat"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label class="control-label">Đại Lý</label></td>
                            <td>
                                <span class=" " id="mo-daily"></span>
                            </td>
                            <td>
                                <label class="control-label">Warehouse</label></td>
                            <td>
                                <span class=" " id="mo-wh"></span>
                            </td>
                            <td>
                                <label class="control-label">Ghi Chú</label></td>
                            <td>
                                <span class=" " id="mo-ghichu"></span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-info btn-changestatus" id="modal-btn-trucking" value="trucking">Trucking</button>
                    <button type="button" class="btn btn-success btn-changestatus" id="modal-btn-airport" value="airport">AirPort</button>
                    <button type="button" class="btn btn-primary btn-changestatus" id="modal-btn-complete" value="complete">Complete</button>
                    <%--<span id="sp-saveloading"><img src="http://preloaders.net/preloaders/5/Filled%20fading%20balls.gif" alt="loading" /></span>--%>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <!-- /.modal -->
    <!-------------------->
    <div class="modal fade" tabindex="-1" role="dialog" id="modal-updating">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">

                <div class="modal-body">
                    <span>
                        <img src="images/loading.gif" alt="loading" />
                        Đang cập nhật...</span>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div>
    <!-- /.modal -->

    <!-- Modal -->
    <div class="modal fade modal-fullscreen" id="myModalSanLuong" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">Thống kê sản lượng </h4>
                </div>
                <div class="modal-body modal-body-tksl">

                    <%-- <div>
                        <table class="table table-bordered table-hover" id="tbl-sanluongngay">
                            <thead>
                                <tr>
                                    <td rowspan="2"></td>
                                    <td colspan="2">VSIP</td>
                                    <td colspan="2">HPH</td>
                                </tr>
                                <tr>

                                    <td>Số Kiện</td>
                                    <td>Trọng Lượng</td>
                                    <td>Số Kiện</td>
                                    <td>Trọng Lượng</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SL Xuất Kho</td>
                                    <td id="sl-ngay-vsip-xuatkho-sokien"></td>
                                    <td id="sl-ngay-vsip-xuatkho-trongluong"></td>
                                    <td id="sl-ngay-hph-xuatkho-sokien"></td>
                                    <td id="sl-ngay-hph-xuatkho-trongluong"></td>
                                </tr>
                                <tr>

                                    <td>SL Nhập Kho</td>
                                    <td id="sl-ngay-vsip-nhapkho-sokien"></td>
                                    <td id="sl-ngay-vsip-nhapkho-trongluong"></td>
                                    <td id="sl-ngay-hph-nhapkho-sokien"></td>
                                    <td id="sl-ngay-hph-nhapkho-trongluong"></td>
                                </tr>
                                <tr>

                                    <td>SL Lưu Kho</td>
                                    <td id="sl-ngay-vsip-luukho-sokien"></td>
                                    <td id="sl-ngay-vsip-luukho-trongluong"></td>
                                    <td id="sl-ngay-hph-luukho-sokien"></td>
                                    <td id="sl-ngay-hph-luukho-trongluong"></td>
                                </tr>
                                <tr>

                                    <td>SL Xe</td>
                                    <td colspan="2" id="sl-ngay-vsip-xe"></td>

                                    <td colspan="2" id="sl-ngay-hph-xe"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table class="table table-bordered table-hover" id="tbl-sanluongthang">
                            <thead>
                                <tr>
                                    <td>Tháng</td>
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>VSIP</td>
                                    <td id="sl-thang-vsip-1"></td>
                                    <td id="sl-thang-vsip-2"></td>
                                    <td id="sl-thang-vsip-3"></td>
                                    <td id="sl-thang-vsip-4"></td>
                                    <td id="sl-thang-vsip-5"></td>
                                    <td id="sl-thang-vsip-6"></td>
                                    <td id="sl-thang-vsip-7"></td>
                                    <td id="sl-thang-vsip-8"></td>
                                    <td id="sl-thang-vsip-9"></td>
                                    <td id="sl-thang-vsip-10"></td>
                                    <td id="sl-thang-vsip-11"></td>
                                    <td id="sl-thang-vsip-12"></td>
                                </tr>
                                <tr>
                                    <td>HPH</td>
                                    <td id="sl-thang-hph-1"></td>
                                    <td id="sl-thang-hph-2"></td>
                                    <td id="sl-thang-hph-3"></td>
                                    <td id="sl-thang-hph-4"></td>
                                    <td id="sl-thang-hph-5"></td>
                                    <td id="sl-thang-hph-6"></td>
                                    <td id="sl-thang-hph-7"></td>
                                    <td id="sl-thang-hph-8"></td>
                                    <td id="sl-thang-hph-9"></td>
                                    <td id="sl-thang-hph-10"></td>
                                    <td id="sl-thang-hph-11"></td>
                                    <td id="sl-thang-hph-12"></td>
                                </tr>
                                <tr>
                                    <td>Tổng</td>
                                    <td id="sl-thang-tong-1"></td>
                                    <td id="sl-thang-tong-2"></td>
                                    <td id="sl-thang-tong-3"></td>
                                    <td id="sl-thang-tong-4"></td>
                                    <td id="sl-thang-tong-5"></td>
                                    <td id="sl-thang-tong-6"></td>
                                    <td id="sl-thang-tong-7"></td>
                                    <td id="sl-thang-tong-8"></td>
                                    <td id="sl-thang-tong-9"></td>
                                    <td id="sl-thang-tong-10"></td>
                                    <td id="sl-thang-tong-11"></td>
                                    <td id="sl-thang-tong-12"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>--%>

                    <div class="margin-botton-table">
                        <div id="date-tksl">
                            <div class="row">
                                <div class="col-sm-2">
                                    <div class=" input-group  width-200px">
                                        <span class="input-group-addon" id="">Chọn ngày</span>
                                        <input type="text" class="form-control datepicker" id="input-ngay-thongke" />
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <input type="button" class="btn btn-success" id="btn-loc-theo-ngay" value="Lọc" />
                                </div>
                            </div>
                        </div>
                        <table class="table table-bordered table-hover" id="tbl_slhx">
                            <thead>
                                <tr>
                                    <td colspan="3">Sản lượng hàng xuất</td>
                                    <td colspan="5">Khách hàng</td>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <table class="table table-bordered table-hover" id="tbl_slhx_year">
                            <thead>
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
    <%---------------------------%>
    <div class="modal fade" id="myModalViewHelp" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title text-align-center" id="h4-thanhtoan-view-tieude"></h4>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered table-hover" id="tbl-help">
                        <thead></thead>
                        <tbody></tbody>
                    </table>
                </div>

                <div class="modal-footer">

                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="myModalViewMawb" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h2 class="modal-title text-align-center" id="h4-view-mawb"></h2>
                </div>
                <div class="modal-body">
                    <h3 class="titleShowMAWB"></h3>
                    <table class="table table-bordered table-hover" id="tbl-view-mawb">
                        <thead id="thead-CanDim">
                            <tr class="style_Mawb_Hawb">
                                <td>DIMENSION</td>
                                <td>PCS</td>
                                <td>GW</td>
                                <td>VW</td>
                                <td>CW</td>
                                <td>CBM</td>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                    <div id="table-show-hawb">
                    </div>
                </div>

                <div class="modal-footer">
                    <div class="tbl-show-doc-issue">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" class="txtFontSize" id="cb-inlabel" name="vehicle1" value="" />
                                        <label for="vehicle1" class="txtFontSize">Đã in label</label>
                                    </td>
                                    <td>
                                        <input type="checkbox" class="txtFontSize" id="cb-dadantem" name="vehicle1" value="" />
                                        <label for="vehicle1" class="txtFontSize">Đã dán tem</label>
                                    </td>
                                    <td>
                                        <input type="checkbox" class="txtFontSize" id="cb-po" name="vehicle1" value="" />
                                        <label for="vehicle1" class="txtFontSize">Đã scan PO</label>
                                    </td>
                                    <td>
                                        <input type="checkbox" class="txtFontSize" id="cb-tokhai" name="vehicle1" value="" />
                                        <label for="vehicle1" class="txtFontSize">Có tờ khai</label>
                                    </td>
                                    <td>
                                        <input type="checkbox" id="cb-issueDOC" name="vehicle1" value="" />
                                        <label for="vehicle1" class="txtFontSize">Đã issue DOC</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="" id="tv-label"></label>
                                    </td>
                                    <td>
                                        <label for="" id="tv-tem"></label>
                                    </td>
                                    <td>
                                        <label for="" id="tv-po"></label>
                                    </td>
                                    <td>
                                        <label for="" id="tv-tokhai"></label>
                                    </td>
                                    <td>
                                        <label for="" id="tv-doc"></label>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button type="button" class="btn btn-success btn-chi-tiet-mawb" attrmawb="">Chi tiết</button>
                    <button type="button" class="btn btn-primary btn-taifile" attrmawb="">Tải file</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-info" id="modal-btn-intem" value="trucking" attrmawb="" attrdestmawb="" attrfwd="">In tem</button>
                    <a type="button" class="btn btn-warning btn-qll-sua" target="_blank" id="modal-btn-sua" value="trucking" attrmawb="" attrmatheodoi="" attrdestmawb="">Sửa Booking</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="modalChiTietMAWB" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">CHI TIẾT LÔ HÀNG</h4>
                </div>
                <div class="modal-body">
                    <div>
                        <div>Số MAWB: <span class="color-red title-mawb"></span></div>
                        <table class="table table-bordered table-hover" id="tbl-chi-tiet-mawb">
                            <thead class="thead-awb">
                                <tr>
                                    <td>No</td>
                                    <td>Số DNN</td>
                                    <td>Số HAWB</td>
                                    <td>Kiện số</td>
                                    <td>Số kiện</td>
                                    <td>Ngày giờ nhập</td>
                                    <td>Ngày giờ cân</td>
                                    <td>Trọng lượng</td>
                                    <td>Kích thước</td>
                                    <td>Vị trí</td>
                                    <td>FWD</td>
                                    <td>Ghi chú DNN</td>
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

    <!-- Modal show kế hoạch -->
    <div class="modal fade modal-fullscreen" id="modalKehoachMawb" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">CHI TIẾT KẾ HOẠCH</h4>
                    <input type="button" onclick="tableToExcel('tbl-chi-tiet-kehoach', 'Danh Sách ')" value="Excel Export" class="mani-btn btn btn-info" />
                </div>
                <div>
                    <div class="modal-body-wrapper">
                        <div class="modal-body">
                            <div class="button-kehoach">
                                <button type="button" class="btn btn-sm btn-primary btn-kehoach-list" value="DHL">Hiển thị hàng DHL</button>
                                <button type="button" class="btn btn-sm btn-success btn-kehoach-list" value="EI">Hiển thị hàng EI</button>
                                <button type="button" class="btn btn-sm btn-info btn-kehoach-list" value="EFL">Hiển thị hàng EFL</button>
                                <button type="button" class="btn btn-sm btn-warning btn-kehoach-list" value="ALL">Hiển thị tất cả hàng trong kho</button>
                            </div>
                            <table class="table table-bordered table-hover" id="tbl-chi-tiet-kehoach">
                                <thead class="thead-awb">
                                    <tr>
                                        <td>MAWB</td>
                                        <td>HAWB</td>
                                        <td>Số Shipment</td>
                                        <td>Số DNN</td>
                                        <td>Số kiện</td>
                                        <td>Trọng lượng</td>
                                        <td>Kích thước</td>
                                        <td>Ngày giờ nhập</td>
                                        <td>Ngày giờ cân xong</td>
                                        <td>Vị trí</td>
                                        <td>FWD</td>
                                        <td>Ghi chú DNN</td>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
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
    <div class="modal fade" id="myModalChuyenBay" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">DANH SÁCH CHUYẾN BAY</h4>
                </div>
                <div class="modal-body">
                    <div class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" id="btn-them-chuyenbay"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Thêm</button>
                    </div>
                    <div>
                        <table class="table table-bordered table-hover" id="tbl-chuyenbay">
                            <thead class="thead-awb">
                                <tr>
                                    <td>No</td>
                                    <td>DauAWB</td>
                                    <td>AirlinesName</td>
                                    <td>IATADesignator</td>
                                    <td>ICAODesignator</td>
                                    <td>_CountryTerritory</td>
                                    <td>XÓA</td>
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

    <div class="modal fade" id="myModalEditChuyenBay" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">CẬP NHẬT CHUYẾN BAY</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">Đầu AWB</span>
                                <input type="text" class="form-control " id="input-dau-AWB" />
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">AirlinesName</span>
                                <input type="text" class="form-control " id="input-AirlinesName" />
                            </div>
                        </div>

                        <div class="col-sm-4">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">IATADesignator</span>
                                <input type="text" class="form-control " id="input-IATADesignator" />
                            </div>
                        </div>



                    </div>
                    <div class="row margin-top10">
                        <div class="col-sm-6">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">ICAODesignator</span>
                                <input type="text" class="form-control " id="input-ICAODesignator" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">_CountryTerritory</span>
                                <input type="text" class="form-control " id="input-CountryTerritory" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-luu-awb">Lưu</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalPrintEI" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">Print EI</h4>
                </div>
                <div class="modal-body">
                    <div class="row" style="margin-bottom: 10px;">
                        <div class="col-sm-4">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">FLIGHT</span>
                                <input type="text" class="form-control " id="input-flight" />
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">DES_MAWB</span>
                                <input type="text" class="form-control " id="input-desmawbEI" />
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">DES_HAWB</span>
                                <input type="text" class="form-control " id="input-deshawbEI" />
                            </div>
                        </div>

                    </div>

                    <div class="row" style="margin-bottom: 10px;">
                        <div class="col-sm-4">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">MAWB</span>
                                <input type="text" class="form-control " id="input-mawbEi" />
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">HAWB</span>
                                <input type="text" class="form-control " id="input-hawbEi" />
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">SUB HOUSE</span>
                                <input type="text" class="form-control " id="input-subhouse" />
                            </div>
                        </div>

                    </div>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">MASTER PRIECE</span>
                                <input type="text" class="form-control " id="input-masterEi" />
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">HOUSE PRIECE</span>
                                <input type="text" class="form-control " id="input-houseEi" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-printEI" attrmawbei="">Print</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <%-- Modal Add Mawb--%>

    <div class="modal fade" id="modalEditHAWB" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lx" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Sửa HAWB</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-edithawb-luu" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheet" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <!-- Modal hiển thị ý nghĩa trạng thái -->
    <div class="modal fade" id="myModalViewTrangThaiKH" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times </span></button>
                    <h4 class="modal-title text-align-center" id="h4-kehoach-view-tieude"></h4>
                </div>
                <div class="modal-body">
                    <table class="table table-bordered table-hover" id="tbl-kehoach">
                        <thead></thead>
                        <tbody></tbody>
                    </table>
                </div>

                <div class="modal-footer">

                    <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal hiển thị chọn số lượng tem DHL -->
    <div class="modal fade" id="ModalDHL" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times </span></button>
                    <h4 class="modal-title text-align-center" id="">IN TEM DHL</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">IP máy in</span>
                                <input type="text" class="form-control" value="172.16.2.175" id="dhl-ip" />
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">Tên máy in</span>
                                <input type="text" class="form-control" value="Zebra" id="dhl-ten" />
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class=" input-group">
                                <span class="input-group-addon" id="">Số lượng tem in</span>
                                <input type="text" class="form-control" value="2" id="dhl-soluong" />
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                          <button type="button" class="btn btn-primary" id="btn-print-dhl" attrMAWBDHL="">Print</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <%-- In Label DHL--%>
    <div id="container-inlabel">
    </div>

    <div id="temIn">
    </div>

    <div id="temULI">
    </div>

    <div id="temULITrang">
    </div>

    <div id="temEI">
    </div>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyHangXuat.js") %>
</asp:Content>
