<%@ Page Title="BẢNG TỔNG HỢP DV ASG" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" EnableViewState="false" CodeBehind="BangTongHopDVASG.aspx.cs" Inherits="ALSE.BangTongHopDVASG" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <!-- TBL-->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <b>BẢNG TỔNG HỢP ĐÁNH GIÁ DỊCH VỤ ASG</b>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="truyvandvasg-left">
                        <form role="form">
                            <div class="form-group">
                                <label for="usr">Từ Ngày:</label>
                                <asp:TextBox ID="txtTuNgay" CssClass="form-control txttungay datepicker" runat="server"></asp:TextBox>
                                <label for="usr">Đến Ngày:</label>
                                <asp:TextBox ID="txtDenNgay" CssClass="form-control txtdenngay datepicker" runat="server"></asp:TextBox>
                            </div>
                        </form>
                    </div>
                    <div class="truyvandvasg-mid">
                        <asp:Button ID="btnTruyVan" CssClass="btn btn-info btn-truyvan" OnClick="btnTruyVan_Click" runat="server" Text="Truy Vấn >>" />
                        <div>
                            <input type="button" onclick="tableToExcel('tbl1', 'Tổng hợp dịch vụ ASG')" value="Tải Xuống" class="mani-btn btn btn-info btn-taixuong" />
                        </div>
                    </div>
                    <div style="width: 850px; float: right;" class="dataTable_wrapper truyvandnn-right">
                        <div id="truyvandvasg-tieude">
                            <p>KẾT QUẢ TRUY VẤN</p>
                        </div>
                        <table id="tbl1" class="table table-striped table-bordered table-hover tbl-truyvandvasg">
                            <thead>
                                <tr>
                                    <th>Stt</th>
                                    <th>Nội Dung</th>
                                    <th>Mr. Hữu</th>
                                    <th>Mr. Bảo</th>
                                    <th>Tổng</th>
                                </tr>
                            </thead>
                            <asp:Literal ID="ltrDVASG" runat="server"></asp:Literal>
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
</asp:Content>