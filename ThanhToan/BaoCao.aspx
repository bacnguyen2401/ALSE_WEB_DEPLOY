<%@ Page Title="BÁO CÁO - THANH TOÁN" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="BaoCao.aspx.cs" Inherits="ALSE.ThanhToan.BaoCao" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/thanhtoan-baocao.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="row" id="div-row-button">
        <input type="button" id="baocao-hangkhong" class="btn btn-sm btn-primary" value="1. Dịch vụ hàng không kéo dài" />
        <input type="button" id="baocao-hangthuong" class="btn btn-sm btn-warning" value="2. Dịch vụ kho thường" />
        <input type="button" id="baocao-dgr" class="btn btn-sm btn-success" value="3. Dịch vụ khai báo DGR" />
        <input type="button" id="baocao-logistics" class="btn btn-sm btn-danger" value="4. Dịch vụ Logistics" />
        <input type="button" id="baocao-chitietvantai" class="btn btn-sm btn-primary" value="5. Bảng kê chi tiết vận tải" />
    </div>
    <div class="div-thanhtoan-deltail" id="div-detail-hangkhong">
        <h2>XUẤT BÁO CÁO HÀNG KHÔNG</h2>
        <div class="row ">
            <div class="form-group col-sm-3">
                <div class="input-group div-thanhtoan-baocao-group width-170px ">
                    <span class="input-group-addon" id="">Từ ngày</span>
                    <input type="text" class="form-control input-sm input-baocao-hangkhong-ngay datepicker input-thanhtoan-baocao-clear hangkhong-data-change" id="input-baocao-hangkhong-tu-ngay" />
                </div>
            </div>
            <div class="form-group col-sm-3">
                <div class="input-group div-thanhtoan-baocao-group width-170px">
                    <span class="input-group-addon" id="">Đến ngày</span>
                    <input type="text" class="form-control input-sm input-baocao-hangkhong-ngay  datepicker input-thanhtoan-baocao-clear hangkhong-data-change" id="input-baocao-hangkhong-den-ngay" />
                </div>
            </div>
            <div class="form-group col-sm-6 has-success">
                <div class="input-group div-thanhtoan-baocao-group width-600px">
                    <span class="input-group-addon" id="">Khách hàng</span>
                    <select id="select-hangkhong-khachhang" class="form-control input-sm hangkhong-data-change">
                        <option value="SMK">1. SUMIKA</option>
                        <option value="SMK.HP">2. SUMIKA HP</option>
                        <option value="DRV">3. DreamTech</option>
                        <option value="SF.MTL">4. SF.MTL</option>
                        <option value="KNT.ITM">5. KNT.ITM</option>
                        <option value="ATT.ITM">6. ATT.ITM</option>
                        <option value="SF.WNC">7. SF.WNC</option>
                        <option value="ULI">8. UNIQUE</option>
                        <option value="EFL">9. EFL</option>
                        <option value="GTT">10. GTT vs GTK</option>
                        <option value="FDI">11. FDI</option>
                        <option value="LUX">12. LUX</option>
                        <option value="APL.ITM">13. APL.ITM</option>
                        <option value="KWE">14. KWE</option>
                        <option value="JD.FS">15. JD.FS</option>
                        <option value="KN">16. KN</option>
                        <option value="KN.LG">17. KN.LG</option>
                        <option value="GUH">18. GUH</option>
                        <option value="MAX.ITM">19. MAX.ITM</option>
                        <option value="CNC.ITM">20. CNC.ITM</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="form-group col-sm-6">
                <div class="input-group div-thanhtoan-baocao-group width-600px">
                    <span class="input-group-addon" id="">Tên file</span>
                    <input type="text" class="form-control input-sm input-baocao-hangkhong-ngay input-thanhtoan-baocao-clear" value="BC_HANGKHONG_" id="input-baocao-hangkhong-tenfile" />
                </div>
            </div>
            <div class="form-group col-sm-3" id="div-thanhtoan-baocao-groupbutton-hangkhong">
                <button type="button" class=" btn btn-primary btn-sm" id="btn-baocao-hangkhong-taobaocao" value="">Kiết xuất bảng kê hàng không</button>
            </div>
            <%--  <div class="form-group col-sm-3" id="">
                <span id="span-text-taobaocao-hangkhong" class="color-red">Đang tạo báo cáo. Vui lòng đợi....</span>
            </div>--%>
        </div>
        <div>
            <table class="table table-bordered" id="tbl-danhsach-baocao-hangkhong">
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
    <div class="div-thanhtoan-deltail" id="div-detail-hangthuong">
        <h2>XUẤT BÁO CÁO HÀNG THƯỜNG</h2>
        <div class="row ">
            <div class="form-group col-sm-3">
                <div class="input-group div-thanhtoan-baocao-group width-170px ">
                    <span class="input-group-addon" id="">Từ ngày</span>
                    <input type="text" class="form-control input-sm input-baocao-hangthuong-ngay datepicker input-thanhtoan-baocao-clear hangthuong-data-change" id="input-baocao-hangthuong-tu-ngay" />
                </div>
            </div>
            <div class="form-group col-sm-3">
                <div class="input-group div-thanhtoan-baocao-group width-170px">
                    <span class="input-group-addon" id="">Đến ngày</span>
                    <input type="text" class="form-control input-sm input-baocao-hangthuong-ngay  datepicker input-thanhtoan-baocao-clear hangthuong-data-change" id="input-baocao-hangthuong-den-ngay" />
                </div>
            </div>
            <div class="form-group col-sm-6 has-success">
                <div class="input-group div-thanhtoan-baocao-group width-600px">
                    <span class="input-group-addon" id="">Khách hàng</span>
                    <select id="select-hangthuong-khachhang" class="form-control input-sm hangthuong-data-change">
                    </select>
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="form-group col-sm-6">
                <div class="input-group div-thanhtoan-baocao-group width-600px">
                    <span class="input-group-addon" id="">Tên file</span>
                    <input type="text" class="form-control input-sm input-baocao-hangthuong-ngay input-thanhtoan-baocao-clear" value="BC_HANGTHUONG_" id="input-baocao-hangthuong-tenfile" />
                </div>
            </div>
            <div class="form-group col-sm-3" id="div-thanhtoan-baocao-groupbutton">
                <button type="button" class=" btn btn-primary btn-sm" id="btn-baocao-hangthuong-taobaocao" value="">Kiết xuất bảng kê kho thường</button>
            </div>
            <div class="form-group col-sm-3" id="">
                <span id="span-text-taobaocao" class="color-red">Đang tạo báo cáo. Vui lòng đợi....</span>
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

    <div class="div-thanhtoan-deltail" id="div-detail-dgr">
        <h2>XUẤT BÁO CÁO DGR</h2>
        <div class="row ">
            <div class="form-group col-sm-3">
                <div class="input-group div-dgr-baocao-group width-170px ">
                    <span class="input-group-addon" id="">Từ ngày</span>
                    <input type="text" class="form-control input-sm input-baocao-dgr-ngay datepicker input-thanhtoan-baocao-clear dgr-data-change" id="input-baocao-dgr-tu-ngay" />
                </div>
            </div>
            <div class="form-group col-sm-3">
                <div class="input-group div-dgr-baocao-group width-170px">
                    <span class="input-group-addon" id="">Đến ngày</span>
                    <input type="text" class="form-control input-sm input-baocao-dgr-ngay  datepicker input-dgr-baocao-clear dgr-data-change" id="input-baocao-dgr-den-ngay" />
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="form-group col-sm-6">
                <div class="input-group div-dgr-baocao-group width-600px">
                    <span class="input-group-addon" id="">Tên file</span>
                    <input type="text" class="form-control input-sm input-baocao-dgr-ngay input-thanhtoan-baocao-clear" value="BC_DGR_" id="input-baocao-dgr-tenfile" />
                </div>
            </div>
            <div class="form-group col-sm-3" id="div-dgr-baocao-groupbutton">
                <button type="button" class=" btn btn-primary btn-sm" id="btn-baocao-dgr-taobaocao" value="">Kiết xuất bảng kê DGR</button>
            </div>
            <div class="form-group col-sm-3" id="">
                <%--<span id="span-text-taobaocao-dgr" class="color-red">Đang tạo báo cáo. Vui lòng đợi....</span>--%>
            </div>
        </div>
        <div>
            <table class="table table-bordered" id="tbl-danhsach-baocao-dgr">
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

    <div class="div-thanhtoan-deltail" id="div-detail-logistics">
        <h2>XUẤT BÁO CÁO LOGISTICS</h2>
        <div class="row ">
            <div class="form-group col-sm-3">
                <div class="input-group div-thanhtoan-baocao-group width-170px ">
                    <span class="input-group-addon" id="">Từ ngày</span>
                    <input type="text" class="form-control input-sm input-baocao-logistics-ngay datepicker input-thanhtoan-baocao-clear logistics-data-change" id="input-baocao-logistics-tu-ngay" />
                </div>
            </div>
            <div class="form-group col-sm-3">
                <div class="input-group div-thanhtoan-baocao-group width-170px">
                    <span class="input-group-addon" id="">Đến ngày</span>
                    <input type="text" class="form-control input-sm input-baocao-logistics-ngay  datepicker input-thanhtoan-baocao-clear logistics-data-change" id="input-baocao-logistics-den-ngay" />
                </div>
            </div>
            <div class="form-group col-sm-6 has-success">
                <div class="input-group div-thanhtoan-baocao-group width-600px">
                    <span class="input-group-addon" id="">Khách hàng</span>
                    <select id="select-logistics-khachhang" class="form-control input-sm logistics-data-change">
                        <option value="MPL">1. Maple</option>
                        <option value="GAOQI">2. GAOQI</option>
                        <option value="SONHA">3.Sơn Hà</option>
                        <option value="EI">4. EI</option>
                        <option value="EI.SEA">5. EI.SEA</option>
                        <option value="EI.AIR">6. EI.AIR</option>
                        <option value="EI.TRUCK">7. EI.TRUCK</option>
                        <option value="KN.WNC">8. KN.WNC</option>
                        <option value="AIC">9. AIC</option>
                        <option value="DRE">10. DRE</option>
                        <option value="RAM">11. RAM</option>
                        <option value="APL">12. APL</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row ">
            <div class="form-group col-sm-6">
                <div class="input-group div-thanhtoan-baocao-group width-600px">
                    <span class="input-group-addon" id="">Tên file</span>
                    <input type="text" class="form-control input-sm input-baocao-logistics-ngay input-thanhtoan-baocao-clear" value="BC_LOGISTICS_" id="input-baocao-logistics-tenfile" />
                </div>
            </div>
            <div class="form-group col-sm-3" id="div-thanhtoan-baocao-groupbutton-logistics">
                <button type="button" class=" btn btn-primary btn-sm" id="btn-baocao-logistics-taobaocao" value="">Kiết xuất bảng kê logistic</button>
            </div>
            <div class="form-group col-sm-3" id="">
            </div>
        </div>
        <div>
            <table class="table table-bordered" id="tbl-danhsach-baocao-logistics">
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
    <div class="div-thanhtoan-deltail" id="div-detail-chitietvantai">
        <h2>BẢNG KÊ CHI TIẾT VẬN TẢI</h2>
        <div class="row ">
            <div class="form-group col-sm-3">
                <div class="input-group div-thanhtoan-baocao-group width-170px ">
                    <span class="input-group-addon" id="">Từ ngày</span>
                    <input type="text" class="form-control input-sm input-baocao-chitietvantai-ngay datepicker input-thanhtoan-baocao-clear chitietvantai-data-change" id="input-baocao-chitietvantai-tu-ngay" />
                </div>
            </div>
            <div class="form-group col-sm-3">
                <div class="input-group div-thanhtoan-baocao-group width-170px">
                    <span class="input-group-addon" id="">Đến ngày</span>
                    <input type="text" class="form-control input-sm input-baocao-chitietvantai-ngay  datepicker input-thanhtoan-baocao-clear chitietvantai-data-change" id="input-baocao-chitietvantai-den-ngay" />
                </div>
            </div>
            <div class="form-group col-sm-3 has-success">
                <div class="input-group div-thanhtoan-baocao-group">
                    <span class="input-group-addon" id="">Dịch vụ</span>
                    <select id="select-chitietvantai-dichvu" class="form-control input-sm chitietvantai-data-change">
                        <option value="ALL">1. Tất cả</option>
                        <option value="IMP">2. Nhập</option>
                        <option value="EXP">3. Xuất</option>
                        <option value="NWH">4. NWH</option>
                        <option value="LOG">5. Logistics</option>

                    </select>
                </div>
            </div>
            <div class="form-group col-sm-3 has-success">
                <div class="input-group div-thanhtoan-baocao-group">
                    <span class="input-group-addon" id="">Nhà cung cấp vận tải</span>
                    <select id="select-chitietvantai-nhacungcap" class="form-control input-sm chitietvantai-data-change">
                        <option value="ALL">1. Tất cả</option>
                        <option value="ANP">2. ANP</option>
                        <option value="BMI">3. BMI</option>
                        <option value="DA">4. DA</option>
                        <option value="PCF">5. PCF</option>
                        <option value="VTC">6. VTC</option>
                        <option value="ASG">7. ASG</option>
                        <option value="GRE">8. GRE</option>
                        <option value="ALSE">9. ALSE</option>
                        <option value="PEONY">10. PEONY</option>
                        <option value="PG">11. PG</option>
                    </select>
                </div>
            </div>

        </div>
        <div class="row ">
            <div class="form-group col-sm-6">
                <div class="input-group div-thanhtoan-baocao-group">
                    <span class="input-group-addon" id="">Tên file</span>
                    <input type="text" class="form-control input-sm input-baocao-chitietvantai-ngay input-thanhtoan-baocao-clear" value="BC_KIEMSOATVANTAI_" id="input-baocao-chitietvantai-tenfile" />
                </div>
            </div>
            <div class="form-group col-sm-3" id="div-thanhtoan-baocao-groupbutton-chitietvantai">
                <button type="button" class=" btn btn-primary btn-sm" id="btn-baocao-chitietvantai-taobaocao" value="">Kiết xuất bảng kê kiểm soát vận tải</button>
            </div>
            <div class="form-group col-sm-3" id="">
            </div>
        </div>
        <div>
            <table class="table table-bordered" id="tbl-danhsach-baocao-chitietvantai">
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
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/thanhtoan-baocao.js") %>
</asp:Content>
