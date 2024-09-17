<%@ Page Title="QUẢN LÝ BÁO CÁO NGÀY" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="QuanLyBaoCaoNgay.aspx.cs" Inherits="ALSE.BaoCaoNgay" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    
    <%# Versioned.VersionedFiles.ScriptHelper.Render("css","css/custom/QuanLyBaoCaoNgay.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div id="div-baocaongay-main">
        <div id="div-baocaongay-main-head">
            <h3 class="text-center">QUẢN LÝ BÁO CÁO NGÀY</h3>

        </div>
         <div id="div-baocaongay-main-body">
            <table id="table-baocaongay" class="table table-bordered">
                <thead>
                   
                </thead>
                <tbody></tbody>
            </table>

        </div>


    </div>
    <div id="modalCEBaoCao" class="modal fade in qllModal" tabindex="-1" role="dialog" ngaybaocao="" baocaoid="" maubaocaoid="">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h5 class="modal-title">Báo cáo ngày <span id="span-tenbaocao"></span></h5>
                </div>

                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-sm-6">
                            <span id="">Ngày báo cáo: </span>
                            <span id="span-ngaybaocao"></span>
                        </div>
                        <div class="form-group col-sm-6">
                            <span id="">Người báo cáo: </span>
                            <span id="span-nguoibaocao"></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-12">
                            <textarea name="editor1" id="editor1" rows="15" cols="80">
                                This is my textarea to be replaced with CKEditor.
                            </textarea>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-link" data-dismiss="modal">Đóng</button>
                    <button type="button" id="btn-baocao-luu" class="btn btn-primary">Lưu báo cáo</button>
                </div>
            </div>
        </div>
    </div>


            <script type="text/javascript" src="Extensions/ckeditor/ckeditor.js"></script>

        <%# Versioned.VersionedFiles.ScriptHelper.Render("js","js/custom/QuanLyBaoCaoNgay.js") %>
</asp:Content>
