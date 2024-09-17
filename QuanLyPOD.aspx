<%@ Page Title="Quản lý POD" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyPOD.aspx.cs" Inherits="ALSE.QuanLyPOD" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyPOD.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="title-header-refresh">
        <div class="title">
            <p class="title-header">QUẢN LÝ POD</p>
        </div>
        <div class=" row">
            <div class="form-group col-sm-8 div-action">
                <div>
                    <button type="button" id="btn-capnhatgiaohang" class="mani-btn btn btn-info">Tạo POD</button>
                    <button type="button" id="btn-capnhatTMS" class="mani-btn btn btn-success">Cập nhật số TMS</button>
                    <button type="button" id="btn-xuatbangkeGTT" class="mani-btn btn btn-danger">Xuất bảng kê</button>
                    <button type="button" id="btn-xuatbaocao" class="mani-btn btn btn-warning">Xuất báo cáo</button>
                    <button type="button" id="btn-truck" class="mani-btn btn btn-info">Truck POD</button>
                    <button type="button" id="btn-guimail" class="mani-btn btn btn-success">Gửi báo cáo giao hàng</button>
                    <button type="button" id="btn-thongtinkho" class="mani-btn btn btn-info">Thông tin kho</button>
                </div>

                <%--<button type="button" id="btn-podhoanthanh" class="mani-btn btn btn-primary">POD đã hoàn thành</button>--%>
                <div class="radio-button">
                    <div>
                        <input type="radio" id="all" class="change-data-radio" name="fav_language" value="tatca">
                        <label class="title-radio" for="all">Tất Cả</label>&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                        <input type="radio" id="chuahoanthanh" class="change-data-radio" name="fav_language" value="" checked>
                        <label class="title-radio" for="chuahoanthanh">Chưa Hoàn Thành</label>&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                        <input type="radio" id="hoanthanh" class="change-data-radio" name="fav_language" value="hoanthanh">
                        <label class="title-radio" for="hoanthanh">Đã Hoàn Thành</label>
                    </div>
                </div>



            </div>

            <div class="form-group col-sm-2">
                <div class="input-group div-dgr-baocao-group width-170px ">
                    <span class="input-group-addon" id="">Từ ngày</span>
                    <input type="text" class="form-control input-sm datepicker" id="input-baocao-tu-ngay" />
                </div>
            </div>

            <div class="form-group col-sm-2">
                <div class="input-group div-dgr-baocao-group width-170px ">
                    <span class="input-group-addon" id="">Đến ngày</span>
                    <input type="text" class="form-control input-sm datepicker" id="input-baocao-den-ngay" />
                </div>
            </div>
            <%--      <div class="form-group col-sm-3">
                    <div class="input-group">
                        <span class="input-group-addon" id="">Dịch vụ</span>
                        <select id="select-dichvu" class="form-control input-sm pod-data-change">
                            <option value="">1. Chưa hoàn thành</option>
                            <option value="hoanthanh">2. Đã hoàn thành</option>
                        </select>
                    </div>
                </div>--%>
        </div>
    </div>

    <div class="tbl-table">
        <table class="table table-bordered table-width" id="tbl_POD">
            <thead id="thead-POD">
                <tr>
                    <td>STT</td>
                    <td>Số POD</td>
                    <td>Ngày giao</td>
                    <td>Giờ giao</td>
                    <%-- <td>Ngày</td>
                    <td>Giờ</td>--%>
                    <td>BKS</td>
                    <td>Tải Trọng</td>
                    <td>Số Đơn điều phối</td>
                    <td>Người tạo</td>
                    <td>Ngày tạo</td>
                    <td>Người sửa</td>
                    <td>Ngày sửa</td>
                    <td>Chức năng</td>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>

    <div class="inPOD">
        <table class="table table-bordered my-table" id="tablePOD">
            <thead>
                <tr>
                    <td class="nobd  ClassfontSize8" style="padding: 0px" colspan="23">
                        <img width="30" height="20" src="images/OPS/logo.png" />ALSE  Ha Noi Joint Stock Company<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp Head office: No 10,  Road 5, VSIP Bac Ninh Industrial Zone, Phu Chan , Tu Son, Bac Ninh Province, Viet Nam </td>
                </tr>
                <%-- <tr>
                    <td class="nobd ClassfontSize8" style="padding: 0px" colspan="23">承运商公司地址 Địa chỉ công ty vận chuyển: Số 10, Đường 5, KCN Vsip Bắc Ninh, phường Phù Chẩn, Thị xã Từ Sơn, tỉnh Bắc Ninh, VN</td>
                </tr>--%>
                <tr>
                    <td class="nobd" style="font-size: small; padding: 0px" colspan="23">派送签收单
                        <br />
                        <b>Biên bản giao nhận hàng hóa</b></td>
                </tr>
                <tr>
                    <td class="nobd nobdTop" style="font-size: small; padding: 0px" colspan="23">货物详细信息<br />
                        Thông tin chi tiết hàng hóa</td>
                </tr>
                <tr class="trColor">
                    <td class="nobodyTop ClassfontSize8" style="text-align: center; vertical-align: middle;" rowspan="2">TT</td>
                    <td class="nobodyTop ClassfontSize8" style="text-align: center; vertical-align: middle;" rowspan="2">业务编号 Số Invoice</td>
                    <td class="nobodyTop ClassfontSize8" style="text-align: center; vertical-align: middle;" rowspan="2">提运单号<br />
                        Số Vận đơn</td>
                    <td class="nobodyTop ClassfontSize8" style="text-align: center; vertical-align: middle;" rowspan="2">供应商<br />
                        Nhà cung<br />
                        cấp</td>
                    <td class="nobodyTop ClassfontSize8" style="text-align: center; vertical-align: middle;" rowspan="2">BU-项目</td>
                    <td class="nobodyTop ClassfontSize8" style="text-align: center; vertical-align: middle;" colspan="4">件数 số kiện</td>
                    <td class="nobodyTop ClassfontSize8" rowspan="2">体积m³<br />
                        Thể tích</td>
                    <td class="nobodyTop ClassfontSize8" rowspan="2">计费重㎏<br />
                        Trọng lượng tính
                        <br />
                        phí</td>
                    <td class="nobodyTop ClassfontSize8" rowspan="2">毛重㎏<br />
                        Trọng  lượng </td>
                    <td class="nobodyTop ClassfontSize8" rowspan="2">车型<br />
                        Loại xe </td>
                    <td class="nobodyTop ClassfontSize8" rowspan="2">送货地址<br />
                        Địa chỉ giao hàng </td>
                    <td class="nobodyTop ClassfontSize8" rowspan="2">货物接收人<br />
                        Người nhận hàng </td>
                    <td class="nobodyTop ClassfontSize8" rowspan="2">接收人联系电话<br />
                        SĐT người nhận  </td>
                    <td class="nobodyTop ClassfontSize8" rowspan="2">需求送货时间<br />
                        Thời gian yêu cầu giao hàng</td>
                    <td class="nobodyTop ClassfontSize8" style="text-align: center; vertical-align: middle;" colspan="4">签收<br />
                        Người nhận ký tên</td>
                    <td class="nobodyTop ClassfontSize8" rowspan="2">备注<br />
                        Ghi chú</td>
                </tr>
                <tr class="trColor">
                    <td class="ClassfontSize8">箱数
                        <br />
                        Carton</td>
                    <td class="ClassfontSize8">托数
                        <br />
                        Pallet</td>
                    <td class="ClassfontSize8">裸装</td>
                    <td class="ClassfontSize8">其他</td>
                    <td class="ClassfontSize8">收货人姓名  Họ tên</td>
                    <td class="ClassfontSize8">收货人工号
                        <br />
                        Mã số thẻ</td>
                    <td class="ClassfontSize8">收货日期&时间<br />
                        Ngày giờ ký nhận</td>
                    <td class="ClassfontSize8">件数<br />
                        Số kiện</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="ClassfontSize8" rowspan="2">车辆<br />
                        信息<br />
                        Thông<br />
                        tin xe</td>
                    <td class="ClassfontSize8" colspan="3" rowspan="2">物流供方名称：<input value="ALSE" class="nobd nobdInput" style="width: 70px" type="text" /><br />
                        Tên FWD vận chuyển</td>
                    <td class="ClassfontSize8" colspan="3" rowspan="2">车牌号：
                        <%--<input value="29C-93.863" class="nobd" style="width: 60px" type="text" />--%>
                        <input class="nobdInput" id="txtChange" type="text" list="sltBKS" />
                        <datalist class="nobdInput" id="sltBKS">
                        </datalist>
                        <%--  <select class="nobd" id="sltBKS">
                            
                        </select>--%>
                        <br />

                        Số xe</td>
                    <td class="ClassfontSize8" colspan="5" rowspan="2">司机姓名：
                        <input id="txtnhanvien" value="" class="nobd nobdInput" style="width: 100px" type="text" /><br />
                        Tên</td>
                    <td class="ClassfontSize8" colspan="3" rowspan="2">电话：<input id="txtsodienthoai" value="" class="nobd nobdInput" style="width: 60px" type="text" /><br />
                        SĐT</td>
                    <td class="ClassfontSize8" colspan="4" rowspan="2">提货司机签字:<input class="nobd nobdInput" style="width: 60px" type="text" /><br />
                        Lái
                        <br />
                        xe lấy
                        <br />
                        hàng
                        <br />
                        kí tên</td>
                    <td class="ClassfontSize8" colspan="4" rowspan="2">提货日期：<input class="nobd txtngaylayhang nobdInput" style="width: 60px" type="text" /><br />
                        Ngày lấy 
                        <br />
                        hàng
                    </td>
                </tr>
                <tr>
                </tr>
                <tr>
                    <td class="ClassfontSize8" rowspan="2">异常<br />
                        Bất<br />
                        thường</td>
                    <td class="ClassfontSize8" rowspan="2" colspan="10">提示：在提货时请核对货物数量，如有质量问题或数量差异，请在下方注明（否则视为完好）。谢谢！<br />
                        提货异常描述：<br />
                        Cảnh báo:  Khi  lấy hàng phải đối chiếu số lượng hàng, nếu như có vấn đề về chất lượng hoặc số lượng thiếu,<br />
                        Hãy điền rõ thông tin vào cột ghi chú trong bảng(nếu không sẽ nhầm là đầy đủ).Cảm ơn
                        <br />
                        Miêu tả sự bất thường khi lấy hàng:
                    </td>
                    <td class="ClassfontSize8" rowspan="2" colspan="12">异常日期：<br />
                        Ngày phát sinh bất thường:</td>
                </tr>
                <tr>
                </tr>
            </tbody>
        </table>
    </div>

    <%-- Modal --%>
    <%-- Modal cập nhật giao hàng--%>

    <div class="modal fade" id="modalCapNhatGiaoHang" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg fullscreen " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times </span></button>
                    <h4 class="modal-title" id=""></h4>
                </div>
                <div class="modal-body">
                    <div class="row">
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

                        <%--     <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Ngày</span>
                                <input type="text" class="form-control input-sm input-ngay" />
                            </div>
                        </div>

                        <div class="form-group col-sm-3">
                            <div class="input-group div-thanhtoan-group">
                                <span class="input-group-addon" id="">Giờ</span>
                                <input type="text" class="form-control input-sm input-gio" />
                            </div>
                        </div>--%>
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
                    </div>
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

    <%-- Modal cập số TMS--%>

    <div class="modal fade" id="modalCapNhatSoTMS" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times </span></button>
                    <h4 class="modal-title" id="">Cập nhật số TMS</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                        <button type="button" id="btn-capnhatsotms-luu" class="btn btn-primary">Lưu</button>
                    </div>
                    <div id="spreadsheetSoTMS" class="spreadsheet-width-auto spreadsheet-height-400"></div>
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
                                <td>Địa chỉ giao hàng</td>
                                <td>Số điện thoại</td>
                                <td>Người nhận</td>
                                <td>Số BU</td>
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
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary" attrid="" id="btn-luukho">Lưu</button>
                </div>
            </div>
        </div>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyPOD.js") %>
</asp:Content>
