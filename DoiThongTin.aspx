<%@ Page Title="ĐỔI THÔNG TIN" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="DoiThongTin.aspx.cs" Inherits="ALSE.DoiThongTin" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        #tbl-doithongtin {
            max-width: 800px;
        }
        #tbl-doithongtin tr td {
            border: none;
            text-align: left;
            

        }
        #span-matkhauthongbao {
            color: red;
            font-style:italic;
        }
        #tbl-doithongtin .border-matkhau:focus {
            border-color: red;
            outline: 0;
            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
            box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
        } 
    </style>
    <script type="text/javascript">
        function lbClientThayDoi_Click() {
           
            
            if ($(".txt-matkhaumoi").val() != $(".txt-xacnhanmatkhaumoi").val()) {
                $(".txt-xacnhanmatkhaumoi").addClass("border-matkhau");
                $(".txt-xacnhanmatkhaumoi").focus();
                $("#span-matkhauthongbao").text("Mật khẩu xác nhận không khớp!");
                return false;
            }
            //else {
            //    $("#dialog-confirm").dialog({
            //        resizable: false,
            //        modal: false,
            //        title: "Xác Nhận",
            //        height: 250,
            //        width: 400,
            //        buttons: {
            //            "Xác Nhận": function () {
            //                $(this).dialog('close');
            //                return true;
            //            },
            //            "Hủy": function () {
            //                $(this).dialog('close');
            //                return false;
            //            }
            //        }
            //    });
            //}
        }
        $(document).ready(function () {
            $(".txt-xacnhanmatkhaumoi").change(function () {
                $("#span-matkhauthongbao").text("");
                $(".txt-xacnhanmatkhaumoi").removeClass("border-matkhau");

            })

        })
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Đổi Thông Tin
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <div class="dataTable_wrapper">
                        <div>
                            <asp:LinkButton ID="lbThayDoi" runat="server" CssClass="btn btn-danger" OnClientClick="return lbClientThayDoi_Click()" OnClick="lbThayDoi_Click">
                                            Thay Đổi
                            </asp:LinkButton>
                            <asp:LinkButton ID="lbHuy" runat="server" CssClass="btn btn-success" OnClick="lbHuy_Click">
                                            Hủy
                            </asp:LinkButton>
                        </div>
                        <table class="table" id="tbl-doithongtin">

                            <tbody>
                                <tr>
                                    <td><span>ID</span></td>
                                    <td>
                                       
                                        <asp:TextBox ID="txtID" runat="server" CssClass="form-control"  ReadOnly="true"></asp:TextBox>
                                    </td>
                                    <td><span>Mã Nhân Viên</span></td>
                                    <td>
                                        <asp:TextBox ID="txtMaNhanVien" runat="server" CssClass="form-control"  ReadOnly="true"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>Tên Tài Khoản</span></td>
                                    <td>
                                        <asp:TextBox ID="txtTenTaiKhoan" runat="server" CssClass="form-control"  ReadOnly="true"></asp:TextBox>
                                    </td>
                                    <td><span>Tên Hiển Thị</span></td>
                                    <td>
                                        <asp:TextBox ID="txtTenNhanVien" runat="server" CssClass="form-control"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>Mật Khẩu Mới</span></td>
                                    <td>
                                        <asp:TextBox ID="txtMatKhauMoi" runat="server"  CssClass="form-control txt-matkhaumoi" TextMode="Password"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>Xác Nhận</span></td>
                                    <td>
                                        <asp:TextBox ID="txtXacNhanMatKhauMoi" runat="server" CssClass="form-control txt-xacnhanmatkhaumoi" TextMode="Password"></asp:TextBox>

                                    </td>
                                    

                                </tr>
                                <tr>
                                    <td></td>
                                    <td><span id="span-matkhauthongbao"></span></td>
                                    
                                    
                                </tr>
                            </tbody>
                        </table>
                        <div id="dialog-confirm"></div>
                    </div>
                    <!-- /.table-responsive -->
                </div>
                <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
        </div>
        <!-- /.col-lg-12 -->
    </div>
</asp:Content>