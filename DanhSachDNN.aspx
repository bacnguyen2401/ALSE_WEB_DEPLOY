<%@ Page Title="DANH SÁCH DNN" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="DanhSachDNN.aspx.cs" Inherits="ALSE.DanhSachDNN" %>

<%@ Register Assembly="DevExpress.XtraReports.v14.2.Web"
    Namespace="DevExpress.XtraReports.Web" TagPrefix="dx" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        .style1 {
            width: 100%;
            height: 287px;
        }

        .style2 {
        }

        .style3 {
            height: 98px;
        }

        .style4 {
            height: 98px;
            width: 569px;
        }

        .KdataTablesDNN thead th {
            text-align: center;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div style="width: 1000px">
        <p style="font-size: 30px; text-align: center; color: white;" runat="server" id="txtDSDNN">Danh Sách DNN</p>
    </div>

    <div style="margin-bottom: 10px">
        <button type="button" class="btn btn-success" onclick="window.location='QuanLyKHVC.aspx'">Back</button>
        <input type="button" onclick="tableToExcel('dataTables-Dnn', 'Danh Sách ')" value="Excel Export" class="mani-btn btn btn-info xuatex" />
        
        <input type="button" onclick="anhien(1)" value="Xem DS DNN kiểu cũ" class="mani-btn btn btn-primary dnn-cu" runat="server" id="iDNNKC" />
        <input type="button" onclick="anhien(0)" value="Xem DS DNN kiểu mới" class="mani-btn btn btn-warning dnn-moi" runat="server" id="iDNNKM" />
        <input type="button" onclick="anhien1(0, 1)" value="Xem DS DNN tất cả đại lý" class="mani-btn btn btn-warning dnn-all" runat="server" id="iTCDL" />
    </div>
    <div class="div-view1">
        <dx:ASPxDocumentViewer ID="ASPxDocumentViewer1" runat="server" ReportTypeName="XtraReportDNN" ToolbarMode="Ribbon" Width="100%">
            <SettingsReportViewer PageByPage="False" />
        </dx:ASPxDocumentViewer>
    </div>

    <div class="row div-view0">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <asp:Literal ID="LiteralTinh" runat="server"></asp:Literal>
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <table class="KdataTablesDNN table table-striped table-bordered table-hover" id="dataTables-Dnn">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th runat="server" id="thSoShippment">Số Shippment</th>
                                    <th runat="server" id="thModel">Model</th>
                                    <th runat="server" id="thDNN">DNN</th>
                                    <th runat="server" id="thKienSo">Kiện Số</th>
                                    <th runat="server" id="thSoKien">Số Kiện</th>
                                    <th runat="server" id="thTrongLuong">Trọng Lượng</th>
                                    <th runat="server" id="thKichThuoc">Kích Thước</th>
                                    <th runat="server" id="thViTri">Vị Trí</th>
                                    <th runat="server" id="thSoKhoi">Số Khối</th>
                                    <th runat="server" id="thNgayNhap">Ngày Nhập</th>
                                    <th runat="server" id="thGioNhap">Giờ Nhập</th>
                                    <th id="thNgayCanXong">Ngày cân xong</th>
                                    <th id="thGioCanXong">Giờ cân xong</th>
                                    <th>FWD</th>
                                    <th runat="server" id="thGhiChuDNN">Ghi chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                <asp:Literal ID="LiteralDSDNN" runat="server"></asp:Literal>
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
    <%# Versioned.VersionedFiles.ScriptHelper.Render("js","../js/custom/DanhSachDNN.js") %>
</asp:Content>