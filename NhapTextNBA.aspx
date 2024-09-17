<%@ Page Title="NHẬP TEXT NBA" Language="C#" AutoEventWireup="true" CodeBehind="NhapTextNBA.aspx.cs" Inherits="ALSE.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
    <script src="js/bootstrap.min.js" type="text/javascript"></script>
    <style type="text/css">
        #form1 {
            padding: 10px 10px;
        }

        .txtinp {
            width: 600px;
            height: 500px;
        }

        #textarea1 {
            width: 600px;
            height: 500px;
        }

        .btninp {
            margin-left: 10px;
        }

        #td-right {
            padding-left: 10px;
        }

        .nba-hidden {
            visibility: hidden;
        }
        #span-mess {
            color: red;
            font-size: large;
            font-weight: bold;
        }
    </style>
    <script type="text/javascript">

        $(document).ready(function () {

            $("#tblinp").on("click", ".txtinp", function () {
                $(this).text("");
                $("#span-mess").text("");
                $("#tbl-result thead tr").remove();
                $("#tbl-result tbody tr").remove();
            })

        })
        function gettext() {

        }
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <table id="tblinp">
            <tr>
                <td>
                    <asp:TextBox ID="txtInp" CssClass="txtinp" runat="server" TextMode="MultiLine"></asp:TextBox>
                </td>
                <td>
                    <asp:Button ID="btnInp" CssClass="btninp btn btn-info" runat="server" Text="GET" OnClientClick="gettext()" OnClick="btnInp_Click" />
                </td>
                <td id="td-right">
                    <span id="span-mess">
                        <asp:Literal ID="ltrMessenger" runat="server"></asp:Literal>
                    </span>

                    <table id="tbl-result" class="table table-striped table-hover table-bordered">
                        <thead>

                            <asp:Literal ID="ltrTHead" runat="server"></asp:Literal>
                        </thead>
                        <tbody>
                            <asp:Literal ID="ltrResult" runat="server"></asp:Literal>
                        </tbody>
                    </table>
                </td>
            </tr>
        </table>
    </form>
</body>
</html>