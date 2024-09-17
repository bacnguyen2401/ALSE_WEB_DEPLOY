<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="OPS.aspx.cs" Inherits="ALSE.OPS" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/OPS.css") %>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/printLabel.css") %>
    <link href="css/print.min.css" rel="stylesheet" />
    <link href="//rawgithub.com/indrimuska/jquery-editable-select/master/dist/jquery-editable-select.min.css" rel="stylesheet">
    <%-- <style type="text/css" media="print">
        .print_blue {
            color: blue;
        }
    </style>--%>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <%--  <span id="to_change">This is black text.</span>
    <a href="#" onclick="jQuery('#to_change').addClass('print_blue');return false">Click here</a>
    to change it to blue for printing.--%>
    <div id="loading" class="displaynone">
        <img id="loading-image" src="images/loading.gif" alt="Loading..." />
    </div>
    <div id="div-ops">
        <div id="div-ops-top">
            <div id="div-top-tieude">
                <span id="span-tieude-tentieude"></span>
            </div>
            <div id="div-top-menu-button">
                <div class="div-top-menu-button_left">
                    <a class="btn btn-success btn-sm" id="btn-Mawb">ADD MAWB</a>
                    <a class="btn btn-success btn-sm" id="btn-config">CONFIG</a>
                    <a class="btn btn-success btn-sm" id="btn-Storage">STORAGE</a>
                    <a class="btn btn-info btn-sm" id="btn-multipleLabel">MULTIPLE LABEL</a>
                    <a class="btn btn-danger btn-sm" id="btn-uploadshow">Upload Excel</a>
                </div>
                <div class="div-top-menu-button_right">
                    <span>Chọn FWD 
                    </span>
                    <select class="changeSelectFWD">
                        <option value="DHL.SEV">DHL.SEV
                        </option>
                        <option value="DHL.SEVT">DHL.SEVT
                        </option>
                    </select>
                    <span>Chọn ngày sắp xếp
                    </span>
                    <select class="changeSelectDatetime">
                        <option value="ngaytao">Ngày tạo
                        </option>
                        <option value="ngaybay">Ngày bay
                        </option>
                    </select>
                    <span>Chọn ngày lọc
                    </span>
                    <select class="changeSelectNgayHeThong">
                        <option value="tatca">Tất cả
                        </option>
                        <option value="ngayloc">Ngày hệ thống
                        </option>
                    </select>
                </div>
            </div>
            <div id="div-header" class="text-center">
                <span id="span-menu-button-tieude">DHL HANDLING OPERATION</span>
                <span style="float: right;">
                    <label class="lable-title color-white">NGÀY: </label>
                    <input type="text" class="datepicker txtNgayLoc" />
                    <button type="button" class="btn btn-sm btn-success btn-locngay">LỌC</button>
                    <label class="checkbox-inline  lable-title color-white">WH: </label>
                    <select class="form-select select-wh" id="select-wh">
                        <option selected value="ALL">ALL</option>
                        <option value="ACS">ACS</option>
                        <option value="ALSC">ALSC</option>
                        <option value="NCTS">NCTS</option>
                        <option value="MSF">MSF</option>
                    </select>

                    <label class="checkbox-inline  lable-title color-white">FWD: </label>
                    <select class="form-select select-wh" id="select-loc">
                    </select>
                </span>
            </div>
        </div>
    </div>
    <div id="div-ops-mid">
        <table id="table-ops-status" class="table table-bordered">
            <thead>
            </thead>
            <tbody>
            </tbody>
        </table>

    </div>

    <%-- Modal  --%>

    <div class="modal fade" id="modalConfig" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg fullscreen " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                </div>
                <div class="modal-body">
                    <a class="btn btn-primary btn-sm btn-listconsignee">LIST CONSIGNEE AND SHIPPER</a>
                    <a class="btn btn-success btn-sm btn-listdest">LIST DESTINATION</a>
                    <a class="btn btn-info btn-sm btn-listcommodity">LIST COMMODITY</a>
                    <a class="btn btn-warning btn-sm btn-model-pi">LIST MODEL/PI</a>
                </div>
                <br />
                <div class="modal-body">
                    <%--<a class="btn btn-primary btn-sm">LIST AIRLINE REQUIRE SPECIAL FORM</a>--%>
                    <a class="btn btn-primary btn-sm btn-flightno-des">LIST FLIGHTNO DES</a>
                    <a class="btn btn-info btn-sm btn-airline">LIST AIRLINE/ DES NOT ISSUE MAWB</a>
                    <a class="btn btn-danger btn-sm btn-doc">LIST DOC</a>
                </div>
                <br />
                <div class="modal-body">
                    <a class="btn btn-warning btn-sm">LIST AIRLINE MUST SHOW DIM ON AWB</a>
                    <a class="btn btn-success btn-sm">LIST AIRLINE DON'T SHOW HS CODE</a>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <%--<button type="button" class="btn btn-primary">Save changes</button>--%>
                </div>
            </div>
        </div>
    </div>

    <%-- Modal Storage--%>

    <div class="modal fade" id="modalStorage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg fullscreen " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Modal title</h4>
                </div>
                <div class="modal-body">
                    <img src="images/imageStorage.PNG" />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <%-- Modal Add Mawb--%>

    <div class="modal fade" id="modalAddMawb" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog  fullscreen " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title">Thêm MAWB</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-themMawb-luu" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheet" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                    <%--<div id="div-input" class="handsontable"></div>--%>
                </div>
                <div class="modal-footer">
                    <%-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>--%>
                </div>
            </div>
        </div>
    </div>
    <%-- Modal cập nhật SR--%>

    <div class="modal fade" id="modalSR" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="modelTitleSR"></h4>
                </div>
                <div class="modal-body">
                    <%--<img src="images/imageSuaSR.PNG" />--%>
                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-capnhat-SR-luu" attr-idkehoach="" attr-somawb="" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheetSR" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <%-- Modal Sửa kế hoạch--%>

    <div class="modal fade" id="modalSuaKeHoach" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg fullscreen " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="modalTitleSuaKeHoach">Modal title</h4>
                </div>
                <div class="modal-body">
                    <%--<img src="images/imageSuaSR.PNG" />--%>
                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-capnhat-suakehoach-luu" attr-idkehoach="" attr-somawb="" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheetSuaKeHoach" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>
                <div class="modal-footer">
                    <%-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>--%>
                </div>
            </div>
        </div>
    </div>

    <%-- Modal Cập nhật hàng thực tê--%>

    <div class="modal fade" id="modalSCapNhatHangThucTe" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg fullscreen " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="modalTitleCapNhatHangThucTe">Modal title</h4>
                </div>
                <div class="modal-body">
                    <%--<img src="images/imageSuaSR.PNG" />--%>
                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-capnhat-HangThucTe-luu" attr-idkehoach="" attr-somawb="" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheetCapNhatHangThucTe" class="spreadsheet-width-auto spreadsheet-height-400"></div>
                </div>
                <div class="modal-footer">
                    <%--  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>--%>
                </div>
            </div>
        </div>
    </div>

    <%-- Modal Hiển thị địa chỉ CNEE--%>

    <div class="modal fade" id="modalShowCNEE" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg fullscreen " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id=""></h4>
                </div>
                <div class="modal-body">
                    <table id="tableCNEE" class="table table-bordered">
                        <thead></thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" attrcom="" attrmawb="" class="btn btn-primary btn-chonCNEE">Chọn</button>
                </div>
            </div>
        </div>
    </div>

    <%-- Modal Hiển thị duyệt MST--%>

    <div class="modal fade" id="modalDuyetMST" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-sm" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">Cập nhật Mã Số Thuế</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Chứng nhận</span>
                                <input type="text" class="form-control input-sm " id="input-chungnhan" />
                            </div>
                        </div>

                        <div class="form-group col-sm-12">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Mã số thuê</span>
                                <input type="text" class="form-control input-sm " id="input-masothue" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" attrmawb="" class="btn btn-primary btn-capnhatMST">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="ModalFWD" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title" id="exampleModalLabel">Vui lòng chọn FWD để bắt đầu phiên làm việc</h3>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3>Chọn FWD:</h3>
                            <div class="form-group show-radio">
                            </div>
                        </div>

                        <div class="col-lg-12">
                              <h3>Chọn ngày sắp xếp:</h3>
                            <div class="form-group show-datetimesort">
                                <div class="custom-control custom-radio ">
                                    <input class="custom-control-input " type="radio" id="customRadioDatime1" name="RadioFWDDate" value="ngaytao" />
                                    <label for="customRadioDatime1" class="custom-control-label ">Ngày tạo</label>
                                </div>
                                <div class="custom-control custom-radio ">
                                    <input class="custom-control-input" type="radio" id="customRadioDatime2" name="RadioFWDDate" value="ngaybay" />
                                    <label for="customRadioDatime2" class="custom-control-label ">Ngày bay</label>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12">
                              <h3>Chọn ngày lọc:</h3>
                            <div class="form-group show-datetimesort">
                                <div class="custom-control custom-radio ">
                                    <input class="custom-control-input " type="radio" id="customNgay" name="RadioNgay" value="tatca" />
                                    <label for="customNgay" class="custom-control-label ">Tất cả</label>
                                </div>
                                <div class="custom-control custom-radio ">
                                    <input class="custom-control-input" type="radio" id="customNgay2" name="RadioNgay" value="ngayloc" />
                                    <label for="customNgay2" class="custom-control-label ">Ngày hệ thống</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary btn-TiepTuc">Tiếp tục</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal DOC  -->
    <div class="modal fade" id="myModalDOC" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg fullscreen" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">DANH SÁCH DOC</h4>
                </div>
                <div class="modal-body">
                    <div class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" id="btn-doc-them"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Thêm</button>
                    </div>
                    <div>
                        <table class="table table-bordered table-hover" id="tbl-doc">
                            <thead>
                                <tr>
                                    <td>FWD</td>
                                    <td>CODE_3_SO</td>
                                    <td>CODE_2_CHU</td>
                                    <td>ISSUE_MAWB</td>
                                    <td>FORM_PIN</td>
                                    <td>FORM_CSD_EU</td>
                                    <td>FORM_US</td>
                                    <td>FORM_OTHER_1</td>
                                    <td>FORM_OTHER_2</td>
                                    <td>FORM_OTHER_3</td>
                                    <td>REMARK</td>
                                    <td>NguoiTao</td>
                                    <td>NguoiSua</td>
                                    <td>DELETE</td>
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


    <!-- Modal AIRLINE  -->
    <div class="modal fade" id="myModalAIRLINE" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">DANH SÁCH AIRLINE</h4>
                </div>
                <div class="modal-body">
                    <div class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" id="btn-airline-them"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Thêm</button>
                    </div>
                    <div>
                        <table class="table table-bordered table-hover" id="tbl-airline">
                            <thead>
                                <tr>
                                    <td>Airline_Code</td>
                                    <td>Airline_Name</td>
                                    <td>Airline_Add</td>
                                    <td>Airline_Acc_No</td>
                                    <td>Airline_IATA_Code</td>
                                    <td>REMARK</td>
                                    <td>NguoiTao</td>
                                    <td>NguoiSua</td>
                                    <td>DELETE</td>
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

    <!-- Modal FLT DES  -->
    <div class="modal fade" id="myModalFLIGHTNO" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">DANH SÁCH FLIGHTNO</h4>
                </div>
                <div class="modal-body">
                    <div class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" id="btn-flightno-them"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Thêm</button>
                    </div>
                    <div>
                        <table class="table table-bordered table-hover" id="tbl-flightno">
                            <thead>
                                <tr>
                                    <td>FLTNO</td>
                                    <td>DEST</td>
                                    <td>REMARK</td>
                                    <td>NguoiTao</td>
                                    <td>NguoiSua</td>
                                    <td>DELETE</td>
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

    <!-- Modal COMMODITY  -->
    <div class="modal fade" id="myModalCOMMODITY" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">DANH SÁCH COMMODITY</h4>
                </div>
                <div class="modal-body">
                    <div class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" id="btn-commodity-them"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Thêm</button>
                    </div>
                    <div>
                        <table class="table table-bordered table-hover" id="tbl-commodity">
                            <thead>
                                <tr>
                                    <td>MODEL</td>
                                    <td>COMMODITY</td>
                                    <td>FWD</td>
                                    <td>REMARK</td>
                                    <td>NguoiTao</td>
                                    <td>NguoiSua</td>
                                    <td>DELETE</td>
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

    <!-- Modal MODEL  -->
    <div class="modal fade" id="myModalMODEL" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">DANH SÁCH MODEL PI</h4>
                </div>
                <div class="modal-body">
                    <div class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" id="btn-model-them"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Thêm</button>
                    </div>
                    <div>
                        <table class="table table-bordered table-hover" id="tbl-model">
                            <thead>
                                <tr>
                                    <td>MODEL</td>
                                    <td>PACKING_INSTRUCTION</td>
                                    <td>SECTION</td>
                                    <td>REMARK</td>
                                    <td>DELETE</td>
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

    <!-- Modal DES  -->
    <div class="modal fade" id="myModalDEST" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">DANH SÁCH DEST</h4>
                </div>
                <div class="modal-body">
                    <div class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" id="btn-dest-them"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Thêm</button>
                    </div>
                    <div>
                        <table class="table table-bordered table-hover" id="tbl-dest">
                            <thead>
                                <tr>
                                    <td>PORT</td>
                                    <td>DESTMAWB</td>
                                    <td>DESTHAWB</td>
                                    <td>Người tạo</td>
                                    <td>Người sửa</td>
                                    <td>DELETE</td>
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

    <!-- Modal CNEE và SHIPPER -->
    <div class="modal fade" id="myModalCNEESHIPPER" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg fullscreen" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">DANH SÁCH CNEE SHIPPER</h4>
                </div>
                <div class="modal-body">
                    <div class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" id="btn-cnee-them"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Thêm</button>
                    </div>
                    <div>
                        <table class="table table-bordered table-hover" id="tbl-cneeshipper">
                            <thead>
                                <tr>
                                    <td>DESTMAWB</td>
                                    <td>DESTHAWB</td>
                                    <td>DESTCODE</td>
                                    <td>SHIPPER</td>
                                    <td>SHIPPER_Add</td>
                                    <td>SHIPPER_Tax_No</td>
                                    <td>CNEE</td>
                                    <td>CNEE_Add</td>
                                    <%--  <td>CNEE_Tax_No</td>
                                    <td>NOTIFY</td>
                                    <td>NOTIFY_Add</td>--%>
                                    <td>COMMODITY</td>
                                    <td>Người tạo</td>
                                    <td>Người sửa</td>
                                    <td>DELETE</td>
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
    <%-- Thêm sửa CNEE SHIPPER --%>
    <div class="modal fade" id="myModalCNEESHIPPER-Edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">THÊM/SỬA CNEE SHIPPER</h4>
                </div>
                <div class="modal-body">
                    <div id="div-pin-edit-button" class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" btn-idcnee="" id="btn-cnee-edit-luu">
                            <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                            Lưu</button>
                    </div>
                    <div>
                        <table class="table table-bordered" id="tbl-dgrpin-edit">

                            <tbody>
                                <tr>
                                    <td>DESTMAWB</td>
                                    <td>
                                        <input type="text" class="form-control input-cnee-clear" id="input-dest-mawb" /></td>
                                    <td>DESTHAWB</td>
                                    <td>
                                        <input type="text" class="form-control input-cnee-clear" id="input-dest-hawb" /></td>

                                    <td>DESTCODE</td>
                                    <td>
                                        <input type="text" class="form-control input-cnee-clear" id="input-dest-code" /></td>
                                </tr>
                                <tr>
                                    <td>SHIPPER</td>
                                    <td>
                                        <input type="text" class="form-control input-cnee-clear" id="input-shipper" /></td>

                                    <td>SHIPPER_Add</td>
                                    <td>
                                        <input type="text" class="form-control input-cnee-clear" id="input-shipper-add" /></td>

                                    <td>SHIPPER_Tax_No</td>
                                    <td>
                                        <input type="text" class="form-control input-cnee-clear" id="input-shipper-tax" /></td>
                                </tr>

                                <tr>
                                    <td>CNEE</td>
                                    <td>
                                        <input type="text" class="form-control input-cnee-clear" id="input-cnee" /></td>

                                    <td>CNEE_Add</td>
                                    <td>
                                        <input type="text" class="form-control input-cnee-clear" id="input-cnee-add" /></td>

                                    <td>CNEE_Tax_No</td>
                                    <td>
                                        <input type="text" class="form-control input-cnee-clear" id="input-cnee-tax" /></td>
                                </tr>

                                <tr>
                                    <td>NOTIFY</td>
                                    <td>
                                        <input type="text" class="form-control input-cnee-clear" id="input-notify" /></td>

                                    <td>NOTIFY_Add</td>
                                    <td>
                                        <input type="text" class="form-control input-cnee-clear" id="input-notify-add" /></td>

                                    <td>COMMODITY</td>
                                    <td>
                                        <input type="text" class="form-control input-cnee-clear" id="input-commodity" /></td>
                                </tr>
                                <tr>
                                    <td>FWD</td>
                                    <td colspan="5">
                                        <input type="text" class="form-control input-cnee-clear" id="input-fwd" /></td>
                                </tr>
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

    <%-- Thêm sửa DEST --%>
    <div class="modal fade" id="myModalDEST-Edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">THÊM/SỬA DESTINATION</h4>
                </div>
                <div class="modal-body">
                    <div id="div-dest-edit-button" class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" btn-iddest="" id="btn-dest-edit-luu">
                            <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                            Lưu</button>
                    </div>
                    <div>
                        <table class="table table-bordered" id="tbl-dest-edit">
                            <tbody>
                                <tr>
                                    <td>PORT</td>
                                    <td>
                                        <input type="text" class="form-control input-dest-clear" id="input-port" /></td>
                                    <td>DESTMAWB</td>
                                    <td>
                                        <input type="text" class="form-control input-dest-clear" id="input-destmawb" /></td>
                                    <td>DESTHAWB</td>
                                    <td>
                                        <input type="text" class="form-control input-dest-clear" id="input-desthawb" /></td>
                                    <td>FWD</td>
                                    <td>
                                        <input type="text" class="form-control input-dest-clear" id="input-dest-fwd" /></td>
                                </tr>
                                <tr>
                                    <td>REMARK</td>
                                    <td colspan="7">
                                        <input type="text" class="form-control input-dest-clear" id="input-remark" /></td>
                                </tr>
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

    <%-- Thêm sửa MODEL --%>
    <div class="modal fade" id="myModalMODEL-Edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-content">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">THÊM/SỬA MODEL PI</h4>
                </div>
                <div class="modal-body">
                    <div id="div-model-edit-button" class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" btn-idmodel="" id="btn-model-edit-luu">
                            <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                            Lưu</button>
                    </div>
                    <div>
                        <table class="table table-bordered" id="tbl-model-edit">
                            <tbody>
                                <tr>
                                    <td>MODEL</td>
                                    <td>
                                        <input type="text" class="form-control input-model-clear" id="input-model" /></td>
                                    <td>PACKING_INSTRUCTION</td>
                                    <td>
                                        <input type="text" class="form-control input-model-clear" id="input-packingintruction" /></td>
                                    <td>SECTION</td>
                                    <td>
                                        <input type="text" class="form-control input-model-clear" id="input-section" /></td>
                                    <td>FWD</td>
                                    <td>
                                        <input type="text" class="form-control input-model-clear" id="input-model-fwd" /></td>
                                </tr>
                                <tr>
                                    <td>REMARK</td>
                                    <td colspan="7">
                                        <input type="text" class="form-control input-model-clear" id="input-remark-model" /></td>
                                </tr>
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

    <%-- Thêm sửa COMMODITY --%>
    <div class="modal fade" id="myModalCOMMODITY-Edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">THÊM/SỬA COMMODITY</h4>
                </div>
                <div class="modal-body">
                    <div id="div-commodity-edit-button" class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" btn-idcommodity="" id="btn-commodity-edit-luu">
                            <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                            Lưu</button>
                    </div>
                    <div>
                        <table class="table table-bordered" id="tbl-commodity-edit">
                            <tbody>
                                <tr>
                                    <td>MODEL</td>
                                    <td>
                                        <input type="text" class="form-control input-commodity-clear" id="input-model-commodity" /></td>
                                    <td>COMMODITY</td>
                                    <td>
                                        <input type="text" class="form-control input-commodity-clear" id="input-commodity-r" /></td>
                                    <td>FWD</td>
                                    <td>
                                        <input type="text" class="form-control input-commodity-clear" id="input-commodity-fwd" /></td>
                                </tr>
                                <tr>
                                    <td>REMARK</td>
                                    <td colspan="5">
                                        <input type="text" class="form-control input-commodity-clear" id="input-remark-commodity" /></td>
                                </tr>
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

    <%-- Thêm sửa FLTNO --%>
    <div class="modal fade" id="myModalFLIGHTNO-Edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">THÊM/SỬA FLIGHT NO</h4>
                </div>
                <div class="modal-body">
                    <div id="div-fltno-edit-button" class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" btn-idfltno="" id="btn-fltno-edit-luu">
                            <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                            Lưu</button>
                    </div>
                    <div>
                        <table class="table table-bordered" id="tbl-fltno-edit">
                            <tbody>
                                <tr>
                                    <td>FLTNO</td>
                                    <td>
                                        <input type="text" class="form-control input-fltno-clear" id="input-fltno" /></td>
                                    <td>DEST</td>
                                    <td>
                                        <input type="text" class="form-control input-fltno-clear" id="input-dest" /></td>
                                </tr>
                                <tr>
                                    <td>REMARK</td>
                                    <td colspan="3">
                                        <input type="text" class="form-control input-fltno-clear" id="input-remark-flt" /></td>
                                </tr>
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

    <%-- Thêm sửa AIRLINE --%>
    <div class="modal fade" id="myModalAIRLINE-Edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">THÊM/SỬA AIRLINE</h4>
                </div>
                <div class="modal-body">
                    <div id="div-airline-edit-button" class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" btn-idairline="" id="btn-airline-edit-luu">
                            <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                            Lưu</button>
                    </div>
                    <div>
                        <table class="table table-bordered" id="tbl-airline-edit">
                            <tbody>
                                <tr>
                                    <td>Airline_Code</td>
                                    <td>
                                        <input type="text" class="form-control input-airline-clear" id="input-airlinecode" /></td>
                                    <td>Airline_Name</td>
                                    <td>
                                        <input type="text" class="form-control input-airline-clear" id="input-airlinename" /></td>
                                    <td>Airline_Add</td>
                                    <td>
                                        <input type="text" class="form-control input-airline-clear" id="input-airlineadd" /></td>
                                </tr>
                                <tr>
                                    <td>Airline_Acc_No</td>
                                    <td>
                                        <input type="text" class="form-control input-airline-clear" id="input-airlineacc" /></td>
                                    <td>Airline_IATA_Code</td>
                                    <td>
                                        <input type="text" class="form-control input-airline-clear" id="input-airlineiata" /></td>
                                    <td colspan="6"></td>
                                </tr>
                                <tr>
                                    <td>REMARK</td>
                                    <td colspan="6">
                                        <input type="text" class="form-control input-airline-clear" id="input-remark-airline" /></td>
                                </tr>
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


    <%-- Thêm sửa DOC --%>
    <div class="modal fade" id="myModalDOC-Edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">THÊM/SỬA DOC</h4>
                </div>
                <div class="modal-body">
                    <div id="div-doc-edit-button" class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" btn-iddoc="" id="btn-doc-edit-luu">
                            <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                            Lưu</button>
                    </div>
                    <div>
                        <table class="table table-bordered" id="tbl-doc-edit">
                            <tbody>
                                <tr>
                                    <td>FWD</td>
                                    <td>
                                        <input type="text" class="form-control input-doc-clear" id="input-doc-fwd" /></td>
                                    <td>CODE_3_SO</td>
                                    <td>
                                        <input type="text" class="form-control input-doc-clear" id="input-doc-code3" /></td>
                                    <td>CODE_2_CHU</td>
                                    <td>
                                        <input type="text" class="form-control input-doc-clear" id="input-doc-code2" /></td>
                                </tr>
                                <tr>
                                    <td>ISSUE_MAWB</td>
                                    <td>
                                        <input type="text" class="form-control input-doc-clear" id="input-doc-issuemawb" /></td>
                                    <td>FORM_PIN</td>
                                    <td>
                                        <input type="text" class="form-control input-doc-clear" id="input-doc-pin" /></td>
                                    <td>FORM_CSD_EU</td>
                                    <td>
                                        <input type="text" class="form-control input-doc-clear" id="input-doc-csd" /></td>
                                </tr>
                                <tr>
                                    <td>FORM_US</td>
                                    <td>
                                        <input type="text" class="form-control input-doc-clear" id="input-doc-formus" /></td>
                                    <td>FORM_OTHER_1</td>
                                    <td>
                                        <input type="text" class="form-control input-doc-clear" id="input-doc-other1" /></td>
                                    <td>FORM_OTHER_2</td>
                                    <td>
                                        <input type="text" class="form-control input-doc-clear" id="input-doc-other2" /></td>
                                </tr>
                                <tr>
                                    <td>FORM_OTHER_3</td>
                                    <td>
                                        <input type="text" class="form-control input-doc-clear" id="input-doc-other3" /></td>
                                    <td>REMARK</td>
                                    <td>
                                        <input type="text" class="form-control input-doc-clear" id="input-doc-mark" /></td>
                                </tr>
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

    <!-- Modal -->
    <div class="modal fade" id="ModalMutipleLabel" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="">MULTIPLE LABEL</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="multipleLabel">
                        <table class="table table-bordered tbl-multipleLabel">
                            <thead>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary print-multipleLabel">Print</button>
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
                    <h4 class="modal-title" id="">Upload Excel: <span id="span-upload-tilte" class="color-red font-weight-bold"></span></h4>
                </div>
                <div class="modal-body">
                    <div id="div-upload-btn" class="div-upload-group">
                        <label for="f_UploadImage" class="btn btn-success btn-sm">
                            <i class="glyphicon glyphicon-plus"></i>Chọn tệp...
                        </label>
                        <a class="btn btn-primary btn-sm" id="a-upload-startupload"><i class="glyphicon glyphicon-upload"></i>Bắt đầu tải lên</a>
                        <a class="btn btn-danger btn-sm" id="a-upload-delete-all"><i class="glyphicon glyphicon-trash"></i>Xóa hết</a>
                        <input type="file" class="upload" id="f_UploadImage" multiple="multiple" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" /><br />
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


    <%-- In Label--%>
    <div id="container-inlabel">
    </div>
    <%-- In MNF --%>
    <div id="inMNF">
        <div id="id-inMNF-table">
            <table class="table table-bordered table-mnf">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>

    <%-- IN SLI NCTS --%>
    <div class="inSLINCTS">
        <%--id="inSLINCTS"--%>
        <%-- <div class="page">
            <table class="table table-bordered inSLINCTS">
                <thead></thead>
                <tbody>
                </tbody>
            </table>
        </div>--%>
    </div>

    <%-- In form Ali --%>
    <div id="informAirline">
    </div>

    <script src="//rawgithub.com/indrimuska/jquery-editable-select/master/dist/jquery-editable-select.min.js"></script>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/OPS.js") %>
</asp:Content>
