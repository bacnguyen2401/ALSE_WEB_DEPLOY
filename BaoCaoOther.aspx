<%@ Page Title="Báo cáo khác" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="BaoCaoOther.aspx.cs" Inherits="ALSE.BaoCaoOther" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/BaoCaoOther.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="main-report">
        <div class="color-white text-align-center main-report-header">
            <h2>BÁO CÁO KHÁC</h2>
        </div>
        <div class="main-report-body">
            <div class="main-report-body-deltail">
                <div class="row">
                    <div class="form-group col-sm-3">
                        <div class="input-group">
                            <span class="input-group-addon" id="">Từ ngày</span>
                            <input type="text" class="form-control datepicker" id="input-report-tu-ngay" />
                        </div>
                    </div>
                    <div class="form-group col-sm-3">
                        <div class="input-group">
                            <span class="input-group-addon" id="">Đến ngày</span>
                            <input type="text" class="form-control datepicker" id="input-report-den-ngay" />
                        </div>
                    </div>
                    <div class="form-group col-sm-3 has-success">
                        <div class="input-group">
                            <span class="input-group-addon" id="">Dịch vụ</span>
                            <select id="select-report-other" class="form-control input-sm other-data-change">
                                <option value="DHL">1. DHL</option>
                                <option value="JUSDA">2. JUSDA</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group col-sm-3">
                        <button type="button" class="btn btn-primary btn-export-report">Xuất báo cáo</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/BaoCaoOther.js") %>
</asp:Content>
