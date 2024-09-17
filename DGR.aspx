<%@ Page Title="DGR" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="DGR.aspx.cs" Inherits="ALSE.DGR" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/dgr.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-dgr">
        <div id="div-dgr-top">
            <div id="div-top-tieude">
                <span id="span-tieude-tentieude"></span>
            </div>
            <div id="div-top-menu-button">
                <%--<a class="btn btn-success btn-sm" id="a-menu-button-them-mawb">ADD MAWB</a>--%>
                <a class="btn btn-success btn-sm" id="a-menu-button-them-mawb-new">ADD MAWB</a>
                <a class="btn btn-success btn-sm" id="a-menu-button-quanly-dgrpin">Quản lý PIN</a>
                <%--<a class="btn btn-warning btn-sm" id="a-menu-button-quanly-baocao">Báo Cáo</a>--%>
                <%--<a class="btn btn-success btn-sm" id="a-menu-button-thongke-sanluong-DG">Thống kê sản lượng DG</a>--%>
            </div>
            <div id="div-header" class="text-center">
                <span id="span-menu-button-tieude">HANDLING DANGEROUS GOODS</span>
            </div>
        </div>
        <div id="div-dgr-mid">
            <table id="table-mid-status" class="table table-bordered">
                <thead>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div id="div-print">
                <h1>DANGEROUS GOOD MANIFEST</h1>
                <table class="table" id="table-print-sameinf">
                    <tr>
                        <td class="td-sameinf-name">AWB:</td>
                        <td id="print-awb" class="td-sameinf t-checkbox">
                            <input class="i-checkbox" type="checkbox" />
                        </td>
                        <td class="td-sameinf-name">FLIGHT:</td>
                        <td id="print-flight" class="td-sameinf t-checkbox">
                            <input class="i-checkbox" type="checkbox" /></td>
                        <td class="td-sameinf-name">DATE:</td>
                        <td id="print-date" class="td-sameinf t-checkbox">
                            <input class="i-checkbox" type="checkbox" /></td>
                        <td class="td-sameinf-name">DEST:</td>
                        <td id="print-dest" class="td-sameinf t-checkbox">
                            <input class="i-checkbox" type="checkbox" /></td>
                        <td class="td-sameinf-name">AGENT:</td>
                        <td id="print-agent" class="td-sameinf t-checkbox">
                            <input class="i-checkbox" type="checkbox" /></td>
                    </tr>
                </table>
                <table id="table-print" class="table ">
                    <thead>
                        <tr>
                            <td>No</td>

                            <td>D/O</td>
                            <td>MODEL</td>
                            <td>WH</td>
                            <td>O.P</td>
                            <td>PLT</td>
                            <td>CTNS</td>
                            <td>N.W/CTNS</td>
                            <td>N.W/PLTS</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>

                <table class="table table-bordered" id="table-print-checklist">
                    <tbody>
                        <tr>
                            <td></td>
                            <td class="td-checklist-checkbox">YES</td>
                            <td class="td-checklist-checkbox">NO </td>
                            <td class="td-checklist-tieude">PHẦN KIỂM TRA CỦA VỊ TRÍ CHECK HÀNG</td>
                        </tr>
                        <tr>

                            <td colspan="4" class="td-checklist-tieudemuc">KIỂM TRA SỐ LƯỢNG, BAO BÌ KIỆN HÀNG</td>
                        </tr>
                        <tr>
                            <td>1</td>

                            <td></td>
                            <td></td>
                            <td class="td-checklist-noidung">Đóng gói của kiện hàng tuân thủ theo Packing Instruction PI965 và không bị rách, thủng, móp, méo hay bất kỳ bất thường nào khác</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>

                            <td class="td-checklist-noidung">Mỗi package có Net weight (Net Quantity) không quá 10kg</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>

                            <td class="td-checklist-noidung">Số kiện thể hiện trên Manifest khớp với số lượng hàng thực tế</td>
                        </tr>
                        <tr>

                            <td colspan="4" class="td-checklist-tieudemuc">KHỚP THÔNG TIN GIỮA MANIFEST VÀ KIỆN HÀNG</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td class="td-checklist-noidung">DO, Model tương ứng khớp giữa Manifest và kiện hàng</td>
                        </tr>
                        <tr>
                            <td colspan="4" class="td-checklist-tieudemuc">TEM UN</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td class="td-checklist-noidung">Có dòng chữ “UN3480” hoặc “UN 3480”</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td class="td-checklist-noidung">Có tên hàng “LITHIUM-ION BATTERIES”</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td class="td-checklist-noidung">Đã điền số NET WEIGHT trên tem UN và khớp với Manifest</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td class="td-checklist-noidung">Tem pin lithium có số điện thoại liên hệ trong trường hợp khẩn cấp “+ 82 2 541 3000”</td>
                        </tr>

                        <tr>
                            <td colspan="4" class="td-checklist-tieudemuc">DÁN NHÃN</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td class="td-checklist-noidung">Có tem Class 9 theo đúng tiêu chuẩn, không bị rách hay tem khác dán đề</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td class="td-checklist-noidung">Có tem CAO theo đúng tiêu chuẩn, không bị rách hay tem khác dán đè </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                            <td></td>
                            <td class="td-checklist-noidung">Có tem Pin Lithium Ion theo đúng tiêu chuẩn,  không bị rách hay tem khác dán đè</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                            <td></td>
                            <td class="td-checklist-noidung">Tất cả các tem đều đúng kích thước, cùng chiều kiện hàng và cùng nằm trên 1 mặt phẳng</td>
                        </tr>
                        <tr>
                            <td colspan="4" class="td-checklist-tieudemuc">HÀNG OVERPACK</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td class="td-checklist-noidung">Có tem “OVERPACK” trên tất cả các kiện Overpack</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td class="td-checklist-noidung">Nếu có hơn một kiện Overpack, trên mỗi kiện Overpack phải có số định danh cho Overpack đó khớp với trên Manifest</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table " id="table-print-sign">

                    <tr>
                        <td>Giờ bắt đầu check: .................
                            <br />

                            Giờ kết thúc check: .................
                        </td>
                        <td>Nhân viên check hàng
                            <br />
                            (Ký, ghi rõ họ tên)</td>

                        <td>Nhân viên tài liệu
                            <br />
                            (Ký, ghi rõ họ tên)</td>
                    </tr>
                </table>
            </div>
        </div>
        <div id="div-dgr-bot">
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModalActivity" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabelActivity"></h4>
                </div>
                <div class="modal-body">
                    <div id="modal-div-left" class="modal-div-left">

                        <div id="left-div-status">
                        </div>
                        <div id="left-div-noidung">
                            <div id="left-div-noidung-cu">
                                <%--<span class="glyphicon glyphicon-align-left color-8c8c8c"></span>
                                <a id="left-a-chinhsuanoidung" class="color-8c8c8c">Chỉnh sửa nội dung...</a>--%>
                                <div id="div-noidung"></div>
                            </div>
                        </div>

                        <div id="left-div-checklist">

                            <span class="glyphicon glyphicon-check color-8c8c8c activity-icon"></span>
                            <span class="td-bold activity-text">Checklist</span>
                            <div id="div-checklist-list">
                            </div>
                        </div>
                        <div id="left-div-filedinhkem">
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
                        <div id="left-div-binhluan">
                            <span class="glyphicon glyphicon-comment color-8c8c8c activity-icon" id="body-binhluan-icon"></span>
                            <span id="left-span-them-binhluan" class="td-bold activity-text">Thêm bình luận</span>
                            <table id="left-table-binhluan-box">
                                <tr>
                                    <td id="left-table-tr-td-avatar">
                                        <img src="https://trello-avatars.s3.amazonaws.com/b7ad56af011c4a108ae2e8c2b3295a4a/30.png" />
                                    </td>
                                    <td>
                                        <textarea id="left-textarea-binhluan" data-provide="markdown" class="form-control modal-textarea" rows="2" placeholder="Viết bình luận"></textarea>
                                        <input type="button" class="btn btn-default btn-sm" id="btn-gui-binhluan" value="Gửi" />
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div id="left-div-hanhdong">
                            <span class="glyphicon glyphicon-list color-8c8c8c activity-icon" id="body-hanhdong-icon"></span>
                            <span id="left-h4-hanhdong" class="td-bold activity-text">Activity</span>
                            <span id="span-hide-hanhdong-khac" class="td-underline-hover td-pointer">Show comments only</span>
                            <span id="span-showall-hanhdong" class="td-underline-hover td-pointer">Show all</span>
                            <div id="left-div-hanhdong-box">
                            </div>
                        </div>
                    </div>

                    <div id="modal-div-right" class="modal-div-right">
                        <h4>Tool</h4>
                        <ul>
                            <li><a class="btn btn-default"><i class="glyphicon glyphicon-user"></i>Thành Viên</a></li>
                            <li><a class="btn btn-default"><i class="glyphicon glyphicon-tag"></i>Thẻ</a></li>
                            <li><a class="btn btn-default"><i class="glyphicon glyphicon-time"></i>Hẹn Giờ</a></li>
                            <li><a class="btn btn-default" id="a-btn-attachfile"><i class="glyphicon glyphicon-paperclip"></i>Đính Kèm</a></li>
                        </ul>
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModalInputMawb" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabelInputMawb"></h4>
                </div>
                <div class="modal-body">
                    <button type="button" id="btn-input-luu" class="btn btn-primary btn-sm">Save changes</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <div id="div-input" class="dataTable">
                    </div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="myModalInputMawbNew" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabelInputMawbNew"></h4>
                </div>
                <div class="modal-body">
                    <button type="button" id="btn-input-luu-new" class="btn btn-primary btn-sm">Save changes</button>
                    <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Close</button>
                    <div id="div-samedata">
                        <table class="table table-responsive" id="tbl-samedata">
                            <tbody>
                                <tr>
                                    <td>MAWB</td>
                                    <td>
                                        <input type="text" class="form-control input-new-clear input-width-150px" id="input-mawb-new" /></td>
                                    <td>DEST</td>
                                    <td>
                                        <input type="text" class="form-control input-new-clear input-width-100px" id="input-dest-new" /></td>
                                    <td>FWD</td>
                                    <td>
                                        <input type="text" class="form-control input-new-clear input-width-100px" id="input-fwd-new" /></td>
                                </tr>
                                <tr>
                                    <td>FLT</td>
                                    <td>
                                        <input type="text" class="form-control input-new-clear input-width-100px" id="input-flt-new" /></td>
                                    <td>FLT DATE</td>
                                    <td>
                                        <input type="text" class="form-control input-new-clear input-width-100px" id="input-fltdate-new" /></td>
                                    <td>FLT TIME</td>
                                    <td>
                                        <input type="text" class="form-control input-new-clear input-width-100px" id="input-flttime-new" /></td>
                                </tr>
                                <tr>
                                    <td>REMARK</td>
                                    <td colspan="5">

                                        <textarea rows="5" cols="10" class="form-control" id="textarea-remark-new"></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="div-input-new" class="dataTable"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="myModalConfirmMNF" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog " role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">Confirm Send MNF</h4>
                </div>
                <div class="modal-body">
                    <div>
                        <button type="button" class="btn btn-default btn-sm" id="btn-caidat-nangcao">
                            <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>Cài đặt nâng cao
                        </button>
                    </div>
                    <div id="div-before-send">
                        <div>
                            <input type="button" class="btn btn-primary btn-sm" value="Check all" id="input-emaillist-checkall" />
                            <input type="button" class="btn btn-primary btn-sm" value="UnCheck all" id="input-emaillist-uncheckall" />
                        </div>
                        <div id="before-send-emaillist">
                        </div>
                        <div id="before-send-checkdone">
                            <span>Cấu hình </span>
                            <div class="checkbox">
                                <label class="font-weight-bold">
                                    <input type="checkbox" value="checkdone" id="input-checkbox-checkdone" />Check Done</label>
                            </div>
                        </div>
                    </div>
                    <div id="div-alert-msg">

                        <table class="table">
                            <tbody>
                                <tr class="tr-msg-khongloi tr-msg-hide">
                                    <td colspan="2" id="td-msg-comfirm-sendmsg">Bạn có chắc chắn muốn gửi Manifest MAWB:
                                        <span class="color-red font-weight-bold font-size-13pt" id="td-msg-comfirm-sendmsg-mawb"></span>
                                        ?
                                    </td>
                                </tr>
                                <tr class="tr-msg-loi tr-msg-hide" id="tr-msg-checklist">
                                    <td>Kiểm tra checklist:</td>
                                    <td id="td-msg-kiemtra-checklist" class="color-red font-weight-bold font-size-13pt"></td>
                                </tr>
                                <tr class="tr-msg-loi tr-msg-hide" id="tr-msg-watthour">
                                    <td>Kiểm tra Watt Hour:</td>
                                    <td id="td-msg-kiemtra-watthour" class="color-red font-weight-bold font-size-13pt"></td>
                                </tr>
                                <tr class="tr-msg-loi tr-msg-hide" id="tr-msg-model">
                                    <td>Kiểm tra Model:</td>
                                    <td id="td-msg-kiemtra-model" class="color-red font-weight-bold font-size-13pt"></td>
                                </tr>
                                <tr class="tr-msg-loi tr-msg-kiemtra tr-msg-hide">
                                    <td colspan="2" id="td-msg-kiemtra-netweightctns" class="td-msg-hide color-red font-weight-bold font-size-13pt">NET WEIGHT PER CATONS QUÁ 10 KG. ĐỀ NGHỊ KIỂM TRA LẠI!
                                    </td>
                                </tr>
                                <tr class="tr-msg-loi tr-msg-kiemtra tr-msg-hide">

                                    <td colspan="2" id="td-msg-kiemtra-dinhkem" class="td-msg-hide color-red font-weight-bold font-size-13pt">BẠN CHƯA ĐÍNH KÈM FILE, BẠN CÓ MUỐN GỬI TIẾP KO?
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div id="div-cmnf-listmnf">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default btn-warning" id="btn-sendmnf-comfirm">SEND</button>
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
    <!-- Modal -->
    <div class="modal fade" id="myModalDGRPIN" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">DANH SÁCH PIN</h4>
                </div>
                <div class="modal-body">
                    <div class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" id="btn-dgrpin-them"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>Thêm</button>
                    </div>
                    <div>
                        <table class="table table-bordered table-hover" id="tbl-dgrpin">
                            <thead>
                                <tr>
                                    <td>No</td>
                                    <td>MATERIAL CODE</td>
                                    <td>MODEL NAME</td>
                                    <td>WATT HOUR</td>
                                    <td>DESCRIPTION</td>
                                    <td>CAPACITY MAH</td>
                                    <td>WEIGHT GRAM</td>
                                    <td>REMARK</td>
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

    <div class="modal fade" id="myModalDGRPIN-Edit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="">THÊM/SỬA PIN</h4>
                </div>
                <div class="modal-body">
                    <div id="div-pin-edit-button" class="div-pin-button">
                        <button type="button" class="btn btn-sm btn-primary" id="btn-dgrpin-edit-luu">
                            <span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                            Lưu</button>
                    </div>
                    <div>
                        <table class="table table-bordered" id="tbl-dgrpin-edit">

                            <tbody>
                                <tr>
                                    <td>MATERIAL CODE</td>
                                    <td>
                                        <input type="text" class="form-control input-dgrpin-clear" id="input-material-code" /></td>
                                    <td>MODEL NAME</td>
                                    <td>
                                        <input type="text" class="form-control input-dgrpin-clear" id="input-model-name" /></td>

                                    <td>WATT HOUR</td>
                                    <td>
                                        <input type="text" class="form-control input-dgrpin-clear" id="input-watt-hour" /></td>
                                </tr>
                                <tr>
                                    <td>DESCRIPTION</td>
                                    <td>
                                        <input type="text" class="form-control input-dgrpin-clear" id="input-description" /></td>

                                    <td>CAPACITY MAH</td>
                                    <td>
                                        <input type="text" class="form-control input-dgrpin-clear" id="input-capacity-mah" /></td>

                                    <td>WEIGHT GRAM</td>
                                    <td>
                                        <input type="text" class="form-control input-dgrpin-clear" id="input-weight-gram" /></td>
                                </tr>
                                <tr>
                                    <td>REMARK</td>
                                    <td colspan="5">
                                        <input type="text" class="form-control input-dgrpin-clear" id="input-remark" /></td>
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

    <%------------------%>
    <div class="modal fade" id="myModalNewDGR" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalNewDGR-Title">Thêm mới</h4>
                </div>
                <div class="modal-body">
                    <div>
                        <button type="button" id="inp-fire" class="btn btn-primary btn-sm">Lưu</button>
                        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Đóng</button>
                    </div>
                    <div id="spreadsheet" class="spreadsheet-width-auto"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%------------------%>
    <div class="modal fade" id="myModalNewDGR-Edit" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalNewDGR-Edit-Title">Chỉnh sửa</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-lg-12">
                            <button type="button" id="btn-new-dgr-luu" class="btn btn-primary btn-sm">Lưu</button>
                            <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Đóng</button>
                        </div>
                    </div>

                    <div class="row">
                        <div class="form-group col-lg-4">
                            <div class="input-group div-dgr-edit-group">
                                <span class="input-group-addon" id="">MAWB</span>
                                <input type="text" class="form-control input-sm  input-dgr-edit-clear" id="input-dgr-edit-mawb" />
                            </div>
                        </div>
                        <div class="form-group col-lg-4">
                            <div class="input-group div-dgr-edit-group">
                                <span class="input-group-addon" id="">DEST</span>
                                <input type="text" class="form-control input-sm  input-dgr-edit-clear" id="input-dgr-edit-dest" />
                            </div>
                        </div>
                        <div class="form-group col-lg-4">
                            <div class="input-group div-dgr-edit-group">
                                <span class="input-group-addon" id="">FWD</span>
                                <input type="text" class="form-control input-sm  input-dgr-edit-clear" id="input-dgr-edit-fwd" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-lg-4">
                            <div class="input-group div-dgr-edit-group">
                                <span class="input-group-addon" id="">FLT</span>
                                <input type="text" class="form-control input-sm input-dgr-edit-clear" id="input-dgr-edit-flt" />
                            </div>
                        </div>
                        <div class="form-group col-lg-4">
                            <div class="input-group div-dgr-edit-group">
                                <span class="input-group-addon" id="">FLT Date</span>
                                <input type="text" class="form-control input-sm  input-dgr-edit-clear" id="input-dgr-edit-flt-date" />
                            </div>
                        </div>
                        <div class="form-group col-lg-4">
                            <div class="input-group div-dgr-edit-group">
                                <span class="input-group-addon" id="">FLT Time</span>
                                <input type="text" class="form-control input-sm  input-dgr-edit-clear" id="input-dgr-edit-flt-time" />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-lg-3">
                            <label for="comment">Remark:</label>
                        </div>
                        <div class="form-group col-lg-9">

                            <textarea class="form-control" rows="2" id="input-dgr-edit-remark"></textarea>
                        </div>
                    </div>
                    <div id="spreadsheet-edit" class="spreadsheet-width-auto"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="myModalBaoCao" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalBaoCao-Title">Báo cáo DGR</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-3">
                            <div class="input-group div-dgr-group width-170px ">
                                <span class="input-group-addon" id="">Từ ngày</span>
                                <input type="text" class="form-control input-sm input-dgr-ngay datepicker input-dgr-clear" id="input-dgr-tu-ngay" />
                            </div>
                        </div>
                        <div class="form-group col-sm-3">
                            <div class="input-group div-dgr-group width-170px">
                                <span class="input-group-addon" id="">Đến ngày</span>
                                <input type="text" class="form-control input-sm input-dgr-ngay  datepicker input-dgr-clear" id="input-dgr-den-ngay" />
                            </div>
                        </div>
                        <div class="form-group col-sm-3">
                            <div class="input-group div-dgr-group width-300px">
                                <span class="input-group-addon" id="">Tên file</span>
                                <input type="text" class="form-control input-sm input-dgr-ngay  input-dgr-clear" value="HCS_ALSE_ALST_" id="input-dgr-tenfile" />
                            </div>
                        </div>
                        <div class="form-group col-sm-3" id="div-dgr-groupbutton">
                            <button type="button" class=" btn btn-primary btn-sm" id="btn-dgr-taobaocao" value="">Tạo báo cáo</button>
                        </div>
                    </div>
                    <div>
                        <table class="table table-bordered" id="tbl-danhsach-baocao">
                            <thead>
                                <tr>
                                    <td>STT</td>
                                    <td>Báo cáo</td>
                                    <td>Người tạo</td>
                                    <td>Ngày tạo</td>
                                    <td>Tùy chọn</td>
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

    <%--Modal thống kê sản lượng DG--%>
    <div class="modal fade" id="thongKeSanLuongDG" role="dialog">
        <div class="modal-dialog modal-lg">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Thống kê sản lượng DG</h4>
                </div>
                <div class="modal-body">
                    <div class="row" id="select-year" >
                        <div class="col-sm-3">
                            <div class="input-group">
                                <span class="input-group-addon" id="">Năm</span>
                                <select class="form-control input-sm" id="select-tkslDG-nam">
                                    <option value="2015">2015</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023" selected>2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <button type="button" class="btn btn-success btn-sm" id="btn-tkslDG">Lọc</button>
                        </div>
                    </div>
                    <table id="table-thong-ke-san-luong-DG" class="table table-bordered">
                        <thead>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>

        </div>
    </div>

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/dgr.js") %>
</asp:Content>
