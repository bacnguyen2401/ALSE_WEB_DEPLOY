<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="TruyVanPO.aspx.cs" Inherits="ALSE.TruyVanPO" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
      <%# Versioned.VersionedFiles.ScriptHelper.Render("css","../css/custom/TruyVanPo.css") %>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <!-- TBL-->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>TRUY VẤN DANH SÁCH DNN</b>
                    <asp:Literal ID="ltrTrial" runat="server"></asp:Literal>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="truyvandnn-left">
                        
                            <div class="form-group">
                                <label for="usr">Nhập Danh Sách DNN:</label>

                                <%--<dx:ASPxMemo ID="txtListDanhSachDNN" runat="server" CssClass="form-control txtlistdsdnn" Height="300px" Width="170px"></dx:ASPxMemo>--%>
                                <textarea rows="15" cols="20" id="ta-danhsach-dnn">
                                </textarea>
                            </div>
                       
                    </div>
                    <div class="truyvandnn-mid">
                        <div>
                            <%--<asp:Button ID="btnTruyVan" CssClass="btn btn-info btn-truyvan btn-kichthuoc-120" OnClick="btnTruyVan_Click" runat="server" Text="Truy Vấn >>" />--%>
                            <button id="btn-truyvan-dnn" type="button" class="btn btn-info  btn-kichthuoc-120">Truy Vấn</button>
                        </div>
                    </div>
                    <div style="width: 850px; float: right;" class="dataTable_wrapper truyvandnn-right">
                        <div id="tvdnnr-tieude">
                            <p>KẾT QUẢ TRUY VẤN</p>
                        </div>
                        <table id="tbl1" style="width: 850px;" class="table table-striped table-bordered table-hover tbl-truyvandnn">
                            <thead>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- END TBL-->
      <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/TruyVanPo.js") %>
</asp:Content>
