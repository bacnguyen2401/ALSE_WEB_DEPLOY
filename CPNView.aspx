<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="CPNView.aspx.cs" Inherits="ALSE.CPNView" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/CPNView.css") %>
    <div class="btn-print" style="margin-bottom:5px">
        <button type="button" class="btn btn-sm btn-primary btn-save">SAVE</button>
        <button type="button" class="btn btn-sm btn-info " id="btn-print">PRINT</button>
    </div>

    <div class="inPOD">
        <table class="table table-bordered my-table" id="tablePOD">
            <thead>
                <tr>
                    <td class="nobd  ClassfontSize8" style="padding: 0px" colspan="23">
                        <%--<img width="30" height="20" src="images/OPS/logo.png" />--%>
                    承运商公司名称 Tên công ty vận chuyển: Công ty cổ phần ALS Đông Hà Nội<br />
                        <%--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp--%> 
                    承运商公司地址 Địa chỉ công ty vận chuyển: Số 10, Đường 5, KCN Vsip Bắc Ninh, phường Phù Chẩn, TP Từ Sơn, tỉnh Bắc Ninh, VN</td>
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
                    <td class="nobodyTop ClassfontSize8" style="text-align: center; vertical-align: middle;" rowspan="2">物流订单号
                        <br />
                        Số TMS</td>
                    <td class="nobodyTop ClassfontSize8" style="text-align: center; vertical-align: middle;" rowspan="2">业务编号 Số Invoice</td>
                    <td class="nobodyTop ClassfontSize8" style="text-align: center; vertical-align: middle;" rowspan="2">提运单号<br />
                        Số Vận đơn</td>
                    <td class="nobodyTop ClassfontSize8" style="text-align: center; vertical-align: middle;" rowspan="2">供应商<br />
                        Nhà cung<br />
                        cấp</td>
                    <td class="nobodyTop ClassfontSize8" style="text-align: center; vertical-align: middle;" rowspan="2">BU-项目</td>
                    <td class="nobodyTop ClassfontSize8" style="text-align: center; vertical-align: middle;" colspan="2">件数 số kiện</td>
                    <%-- <td class="nobodyTop ClassfontSize8" rowspan="2">体积m³<br />
                    Thể tích</td>
                <td class="nobodyTop ClassfontSize8" rowspan="2">计费重㎏<br />
                    Trọng lượng tính
                    <br />
                    phí</td>--%>
                    <td class="nobodyTop ClassfontSize8" rowspan="2">毛重㎏<br />
                        Trọng  lượng </td>
                    <%--<td class="nobodyTop ClassfontSize8" rowspan="2">车型<br />
                    Loại hình xe </td>--%>
                    <%-- <td class="nobodyTop ClassfontSize8" rowspan="2">车型<br />
                    Loại xe </td>--%>
                    <td class="nobodyTop ClassfontSize8" rowspan="2">送货地址<br />
                        Địa chỉ giao hàng </td>
                    <td class="nobodyTop ClassfontSize8" rowspan="2">货物接收人<br />
                        Người nhận hàng </td>
                    <td class="nobodyTop ClassfontSize8" rowspan="2">接收人联系电话<br />
                        SĐT người nhận  </td>
                    <td class="nobodyTop ClassfontSize8" rowspan="2">需求送货时间<br />
                        Thời gian yêu cầu giao hàng</td>

                    <td class="nobodyTop ClassfontSize8" style="text-align: center; vertical-align: middle;" colspan="5">签收<br />
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
                    <%--<td class="ClassfontSize8">裸装</td>
                <td class="ClassfontSize8">其他</td>--%>
                    <td class="ClassfontSize8">收货仓库  Kho nhận hàng</td>
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

    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/CPNView.js") %>
</asp:Content>
