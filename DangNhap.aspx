<%@ Page Title="ĐĂNG NHẬP" Language="C#" AutoEventWireup="true" CodeBehind="DangNhap.aspx.cs" Inherits="ALSE.DangNhap" %>

<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <title>Đăng Nhập</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="css/bootstrap-responsive.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        body {
            padding-top: 40px;
            padding-bottom: 40px;
            background-color: #f5f5f5;
            background-image: url('images/597997-1680x1050.jpg');
            background-position: left center;
        }

        .form-signin {
            max-width: 400px;
            padding: 19px 29px 29px;
            margin: 100px auto;
            background-color: #fff;
            border: 1px solid #e5e5e5;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);
            -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);
            box-shadow: 0 1px 2px rgba(0,0,0,.05);
        }

            .form-signin .form-signin-heading,
            .form-signin .checkbox {
                margin-bottom: 10px;
                padding-left: 20px;
            }

        .dangnhap {
            text-align: center;
        }

        .form-signin input[type="text"],
        .form-signin input[type="password"] {
            font-size: 16px;
            height: auto;
            margin-bottom: 15px;
            padding: 7px 9px;
        }
    </style>
</head>
<body>

    <div class="container">

        <form class="form-signin" runat="server">
            <h2 class="form-signin-heading dangnhap">ĐĂNG NHẬP</h2>

            <asp:TextBox ID="taikhoan" class="input-block-level" runat="server" placeholder="Tên tài khoản"></asp:TextBox>

            <asp:TextBox ID="matkhau" class="input-block-level" runat="server"
                placeholder="Mật khẩu" TextMode="Password"></asp:TextBox>
            <asp:Label ID="lbAlert" runat="server" Text=""></asp:Label>
            <label class="checkbox">
                <dx:ASPxCheckBox ID="cbRememberMe" Text="Ghi Nhớ" runat="server"></dx:ASPxCheckBox>
            </label>
            <asp:Button class="btn btn-large btn-info" ID="btnDangNhap" runat="server"
                Text="Đăng Nhập" OnClick="btnDangNhap_Click" />
        </form>
    </div>
</body>
</html>