<%@ Page Title="KẾ HOẠCH LẤY HÀNG" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="KeHoachLayHang.aspx.cs" Inherits="ALSE.KeHoachTraHang" %>

<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <link href="css/print.min.css" rel="stylesheet" />
    <style type="text/css">
        .txt1 {
            float: left;
            margin-right: 20px;
        }

        .btnn-x {
            width: 100px;
        }

        .btnn-in {
            width: 100px;
        }

        .cb-date {
            height: 34px;
        }

        .khthse {
            margin-bottom: 10px;
        }

        .headergrid {
            height: 30px;
        }

        .tg {
            background-color: white;
            font-family: 'Times New Roman';
        }

        .auto-style2 {
            text-align: left;
            font-size: large;
        }

        .auto-style3 {
            font-size: large;
        }

        .div-tbl {
            display: none;
        }

        #tbl-kehoachlayhang td {
            font-size: 90%;
        }

        .td-MAWB, td-HAWB {
            width: 109px;
        }

        .tr-print {
            display: none;
        }

        #btn-kehoachlayhang-xem {
            width: 100px;
        }

        #tbl-kehoachlayhang thead {
            font-weight: bold;
        }

        .title-font {
            font-weight: bold;
        }

        @media print {
            .tg thead td.nobd {
                border-color: white !important;
            }

            .tg thead td.bdbl {
                border: 1px solid !important;
            }

            .tg tbody td.bdbl {
                border: 1px solid !important;
            }

            #footer {
                display: none !important;
            }

            tr.kchuky {
                page-break-after: always;
            }

            .div-tbl {
                display: block;
            }

            .top1 {
                display: none;
            }
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="top1">
        <div style="width: 100%">
            <p style="font-size: 30px; text-align: center; color: white;">KẾ HOẠCH LẤY HÀNG</p>
        </div>

        <div class="row ">
            <div class="form-group col-sm-3">
                <%-- <div class="input-group div-thanhtoan-baocao-group width-170px ">
                    <span class="input-group-addon" id="">Ngày</span>
                    <input type="text" class="form-control input-sm  datepicker " id="input-kehoachlayhang-ngay" />
                    <span class="input-group-btn">
                      <button type="button" class="btn btn-info btn-flat">Go!</button>
                    </span>
                </div>
                <div>
                    <button type="button" id="btn-kehoachlayhang-xem" class="btn btn-success btn-sm ">XEM</button>
                </div>--%>
                <div class="input-group">
                    <span class="input-group-addon" id="">Ngày</span>
                    <input type="text" class="form-control datepicker input-sm " id="input-kehoachlayhang-ngay"" />
                    <div class="input-group-btn">
                        <button type="button" id="btn-kehoachlayhang-xem" class="btn btn-success btn-sm">XEM</button>
                    </div>
                </div>
            </div>
            <div class="form-group col-sm-2">
                <button type="button" id="btn-kehoachlayhang-in" class="btn btn-warning  btn-sm">IN (Những lô đã được check)</button>
            </div>
        </div>
        <div>
            <div class="col-sm-12" id="div-checkbox">
            </div>
            <div class="col-sm-12" id="div-checkbox-makho">
                <label class="checkbox-inline color-white title-font">WAREHOUSE: </label>
                <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-makho" checked id="cb-makho-all" value="ALL" />ALL</label>
                <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-makho cb-makho-child" checked id="cb-makho-ALSC" value="ALSC" />ALSC</label>
                <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-makho cb-makho-child" checked id="cb-makho-NCTS" value="NCTS" />NCTS</label>
                <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-makho cb-makho-child" checked id="cb-makho-ACS" value="ACS" />ACS</label>
                 <label class="checkbox-inline color-white">
                    <input type="checkbox" class="cb-makho cb-makho-child" checked id="cb-makho-CPN" value="CPN" />CPN</label>
            </div>
        </div>
        <div>
            <table class="table table-bordered table-background-white" id="tbl-kehoachlayhang">
                <thead>
                    <tr>
                        <td>
                            <input type="checkbox" id="cb-print-all" class="td-checkbox" value="ALL" /></td>
                        <td>No.</td>
                        <td>MAWB</td>
                        <td>HAWB</td>
                        <td>Số kiện</td>
                        <td>Gross Weight</td>
                        <td>Chuyến bay đến</td>
                        <td>Ngày đến</td>
                        <td>Giờ đến</td>
                        <td>Tên hàng</td>
                        <td>FWDS</td>
                        <td>Ghi chú</td>
                        <td>Ngày yêu cầu trả hàng</td>
                        <td>Giờ yêu cầu trả hàng</td>
                        <td>DV Trả hàng</td>
                        <td>Mã kho</td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
    <%--Đây phần html để in đ--%>
    <div class="div-tbl" style="width: 1050px" id="div-print">
        <table id="tg1" class="table table-hover tg">
            <thead>
                <tr>
                    <td class="tg-s6z2 nobd" colspan="9" style="font-size: x-large;">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM<br />
                        ĐỘC LẬP – TỰ DO – HẠNH PHÚC</td>
                </tr>
                <tr>
                    <td class="tg-s6z2 nobd" colspan="9" style="font-size: x-large">---o0o---</td>
                </tr>
                <tr>
                    <td class="tg-s6z2 nobd" colspan="9" style="font-size: x-large"><strong>GIẤY ĐỀ NGHỊ CHUYỂN HÀNG VỀ<br />
                        KHO HÀNG ALS ĐÔNG HÀ NỘI (ALSE)</strong></td>
                </tr>
                <tr>
                    <td class="tg-031e nobd"></td>
                    <td class="tg-031e nobd">Kính gửi :</td>
                    <td class="auto-style2 nobd" colspan="5" rowspan="2">- Hải quan Nội Bài<br />
                        - <%--Kho hàng Nội Bài--%> <span id="span-ben-de-nghi"></span></td>
                    <td class="tg-031e nobd"></td>
                    <td class="tg-031e nobd"></td>
                </tr>
                <tr>
                    <td class="tg-031e nobd" style="height: 15px"></td>
                    <td class="tg-031e nobd" style="height: 15px"></td>
                    <td class="tg-031e nobd" style="height: 15px"></td>
                    <td class="tg-031e nobd" style="height: 15px"></td>
                </tr>
                <tr>
                    <td class="auto-style2 nobd" colspan="9"><strong>Bên đề nghị: Công ty Cổ phần ALS Đông Hà Nội (ALSE)<br />
                    </strong>Địa chỉ: Số 10, Đường 5, KCN VSIP, Phù Chẩn, Từ Sơn, Bắc Ninh.<br />
                        Số điện thoại: 0915600325.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; E-mail: import.alse@als.com.vn</td>
                </tr>
                <tr>
                    <td class="auto-style2 nobd" colspan="9"><strong>Nội dung đề nghị :<br />
                    </strong>Chúng tôi xin đề nghị Quý cơ quan chuyển các lô hàng có chi tiết như sau về kho <strong>ALS Đông Hà Nội</strong>.</td>
                </tr>
                <tr>
                    <td class="auto-style2 nobd" colspan="9">&nbsp;</td>
                </tr>
                <tr class="auto-style3 bdbl">
                    <td class="ui-priority-primary bdbl">STT</td>
                    <td class="ui-priority-primary bdbl">SỐ MAWB</td>
                    <td class="ui-priority-primary bdbl">SỐ HAWB</td>
                    <td class="ui-priority-primary bdbl">SỐ KIỆN</td>
                    <td class="ui-priority-primary bdbl">SỐ CÂN</td>
                    <td class="ui-priority-primary bdbl">CHUYẾN BAY</td>
                    <td class="ui-priority-primary bdbl">NGÀY ĐẾN</td>
                    <td class="ui-priority-primary bdbl">GIỜ ĐẾN</td>
                    <td class="ui-priority-primary bdbl">GHI CHÚ</td>
                </tr>
            </thead>
            <tbody>
                <tr class="auto-style3 kchuky">
                    <td class="ui-priority-primary bdbl " style="border: none!important;" colspan="9">&nbsp;</td>
                </tr>
                <tr class="auto-style3">
                    <td class="ui-priority-primary bdbl" colspan="5">Xác nhận của kho <%--Nội Bài--%><span class="txtTenKhoHang"></span></td>
                    <td class="ui-priority-primary bdbl" colspan="4">Ngày <span id="span-ngay"></span>tháng <span id="span-thang"></span>năm 2019</td>
                </tr>
                <tr>
                    <td class="tg-031e bdbl" colspan="5">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <strong>
                            <br class="auto-style3" />
                            <span class="auto-style3">Nhận được lúc:.............. giờ, ngày.........................</span></strong></td>
                    <td class="tg-031e bdbl" colspan="4"></td>
                </tr>
            </tbody>
        </table>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/KeHoachLayHang.js") %>
</asp:Content>
