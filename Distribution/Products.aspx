<%@ Page Title="PRODUCTS MANAGERMENT" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Products.aspx.cs" Inherits="ALSE.Distribution.Products" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
     <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/Distribution-Products.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
     <div>
        <p class="p-pagename">PRODUCTS MANAGERMENT</p>
    </div>
    <div>
         <div class="row">
           
            <div class="form-group col-sm-2">
               
                <button type="button" id="btn-products-them" class="btn btn-sm btn-warning">Thêm</button>
            </div>
            
        </div>
    </div>
    <div class="div-data"  id="div-data">

    </div>


    <%------------------%>
    <div class="modal fade" id="myModalProductsChangeStock" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalProductsChangeStock-Title"></h4>
                </div>
                <div class="modal-body">
                    <div>
                        <button type="button" id="btn-products-updateDO" class="btn btn-primary btn-sm">Lưu</button>
                        <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">Đóng</button>
                    </div>
                    <div>

                    </div>
                    <div id="spreadsheetChangeStock" class="spreadsheet-width-auto"></div>
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
    <%------------------%>
     <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/Distribution-Products.js") %>
</asp:Content>
