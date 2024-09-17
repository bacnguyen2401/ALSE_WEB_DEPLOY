<%@ Page Title="NHẬP ĐẠI LÝ" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="NhapDaiLy.aspx.cs" Inherits="ALSE.NhapDaiLy" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">



    <style type="text/css">
        /*body {background: white; margin: 20px;}
    h2 {margin: 20px 0;}*/
        .txt1 {
            visibility: hidden;
        }
        .txtedit {
            visibility: hidden;
        }
        .txtgn {
            visibility : hidden;
        }
        .manifest {
            background-color: white;
            padding-left: 20px;
            height: 100%;
            border-radius: 5px;
            padding-top: 10px;
        }
        .mani-btn {
            margin-bottom: 10px;
            width: 70px;
        }
        .div-btn {
            width: 100%;
            border-bottom: solid 1px #808080;
            margin-bottom: 10px;
        }
        #iptb {
            background-color: white;
            width: 800px;
            height: 100px;
            
            border-radius: 3px;
            margin-bottom: 20px;
        }

            #iptb table tr {
                height: 30px;
            }
        .dxflInternalEditorTable {
           
        }
    </style>

    <script type="text/javascript">
       
        $(document).ready(function () {
            
            $('input.dd_mm_yyyy').formance('format_dd_mm_yyyy');
            $('input.dd_mm_yyyy').formance('validate_dd_mm_yyyy');
            
            $(".droptabs").droptabs();

            var data = [
              ["", "", "", "", "", "", "", ""],
            ];
            //var data2 = [
            //  ["", ""],
            //];
            
            //var data2 = $('.txt1').val();
            //console.log($('#example'));

            //$('#example2').handsontable({
            //    data: data2,
            //    minSpareRows: 10,
            //    colWidths: [100, 100],
            //    colHeaders: true,
            //    colHeaders: ["HAWB", "DNN"],
            //    rowHeaders: true,
            //    contextMenu: false
            //});

            $('#example').handsontable({
                data: data,
                minSpareRows: 10,
                colWidths: [130, 100, 100, 100, 100, 100, 100, 100],
                colHeaders: true,
                colHeaders: ["MAWB", "HAWB", "DNN", "ESTPLT", "DEST", "FLIGHT NO", "FLT. DATE", "FLT. TIME"],
                rowHeaders: true,
                contextMenu: false
            });


            function bindDumpButton() {
                $('body').on('click', 'button[name=dump]', function () {
                    var dump = $(this).data('dump');
                    var $container = $(dump);
                    console.log('data of ' + dump, $container.handsontable('getData'));
                });
            }
            bindDumpButton();
            var xxx = $('#username').text().trim();
            console.log(xxx);
            $('input#MainContent_TIME').mask("99:99");
            $('input#MainContent_MAWB').mask("999 - 9999 9999");
            $('input#MainContent_DEST').mask("aaa");

            $("#MainContent_ESTPLT").keypress(function (e) {
                //if the letter is not digit then display error and don't type anything
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                    //display error message
                    //$("#errmsg").html("Digits Only").show().fadeOut("slow");
                    return false;
                }
            });
           
        });

        function ReloadHandOnTable() {
            var data2 = eval($('.txtedit').val());
            
            $('#example2').handsontable({
                data: data2,
                minSpareRows: 10,
                colWidths: [100, 100],
                colHeaders: true,
                colHeaders: ["HAWB", "DNN"],
                rowHeaders: true,
                contextMenu: false
            });
        }

        function gettable() {
            var thchuoi = '';
            var gn = $(".txtgn").val();
            $('#example table.htCore tr').each(function () {
                var chuoirow = "('" + $(this).find('td:nth-child(2)').text() + "', "
                    + "'" + $(this).find('td:nth-child(3)').text() + "', "
                    + "'" + $(this).find('td:nth-child(4)').text() + "', "
                    + "'" + $(this).find('td:nth-child(6)').text() + "', "
                    + "'" + $(this).find('td:nth-child(7)').text() + "', "
                    + "'" + $(this).find('td:nth-child(8)').text() + "',"
                    + "'" + $(this).find('td:nth-child(9)').text() + "',"
                   + "'" + gn + "',"
                + "'" + $(this).find('td:nth-child(5)').text() + "')"
                    ;


                //+ "', "
                //    + $('#username').text().trim()
                //console.log($(this).html());
                //alert(chuoirow);
                if ($(this).find('td:nth-child(2)').text() != '') {
                    if (thchuoi == '') {

                        thchuoi = chuoirow;
                        //alert(thchuoi);
                    } else {
                        thchuoi = thchuoi + ', ' + chuoirow;
                    }
                }

            });
            //alert($('#example table.htCore tr td:first').val());
            $('.txt1').val(thchuoi);
        };

        function gettable2() {
            var thchuoi1 = '';
            var estplt = $("#MainContent_ESTPLT").val();
            var mawb = $("#MainContent_MAWB").val().replace(/ /g, '').replace(/-/g, '');
            var flight = $("#MainContent_FLIGHT").val();
            var dest = $("#MainContent_DEST").val();
            var dateold = $("#MainContent_DATE").val();
            var datenew = dateold.replace(/ /g, '');
            var date = datenew.substring(6, 10) + '/' + datenew.substring(3, 5) + '/' + datenew.substring(0, 2);
            var time = $("#MainContent_TIME").val();
            var gn = $(".txtgn").val();
            //alert(gn);


            $('#example2 table.htCore tr').each(function () {
                var chuoirow1 = "('" + mawb + "', "
                    + "'" + $(this).find('td:nth-child(2)').text() + "', "
                    + "'" + $(this).find('td:nth-child(3)').text() + "', "
                    + "'" + dest + "', "
                    + "'" + flight + "', "
                    + "'" + date + "', "
                    + "'" + time + "', "
                    + "'" + estplt + "', "
                    + "'" + gn
                    + "')";

                //+ "', "
                //    + $('#username').text().trim()
                //console.log($(this).html());
                if ($(this).find('td:nth-child(2)').text() != '') {
                    if (thchuoi1 == '') {

                        thchuoi1 = chuoirow1;
                        
                    } else {
                        thchuoi1 = thchuoi1 + ', ' + chuoirow1;


                    }


                }


            });
            //alert(thchuoi1);
            $('.txt1').val(thchuoi1);
        };
        //function getth() {
        //    if ($("#MAWB").val() != null) {    
        //        gettable2();
        //    } else {
        //        //($("#MAWB").val() == null) & ($('#example table.htCore tr td:first').val() != null)
        //        gettable();
        //    }

        //}
    </script>

</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="manifest">
        <div style="width: 800px">
            <p style="font-size: 30px; text-align: left;">INPUT CARGO MANIFEST</p>
        </div>

        <ul class="nav nav-tabs droptabs">
            <li class="active always-visible"><a href="#onlymawb" data-toggle="tab">INPUT ONE MAWB</a></li>
            <li><a href="#listmawb" data-toggle="tab">INPUT MULTIPLE MAWB</a></li>

        </ul>
        <div class="row-fluid ">
            <div class="row-fluid">
                <div class="tab-content span4">
                    <div class="tab-pane active" id="onlymawb">
                        <div style="margin-bottom: 30px">

                            <p style="font-size: 15px; text-align: left;">Application for only one MAWB</p>
                            <div id="iptb">
                                <div class="div-btn">
                                 <asp:Button ID="Button2" runat="server" Text="SAVE" OnClientClick="gettable2()" OnClick="Button2_Click" CssClass="mani-btn btn btn-primary"/>
                                 <asp:Button ID="Button3" runat="server" Text="UPDATE" OnClientClick="gettable2()" OnClick="Button3_Click" CssClass="mani-btn btn btn-primary" Width="92px"/>
                                 </div>
                                <table class="dxflInternalEditorTable">
                                    <tr>
                                        <td>MAWB:</td>
                                        <td>
                                            <input id="MAWB" type="text" runat="server" tabindex="21" /></td>
                                        <td>DEST:</td>
                                        <td>
                                            <input id="DEST" type="text" runat="server" tabindex="22"  /></td>
                                        <td>FLIGHT:</td>
                                        <td>
                                            <input id="FLIGHT" type="text" runat="server" tabindex="23"  /></td>
                                    </tr>
                                    <tr>
                                        <td>DATE:</td>
                                        <td>
                                            <input id="DATE" class="dd_mm_yyyy" type="text"  runat="server" placeholder="DD / MM / YYYY" tabindex="24"  /></td>
                                        <td>TIME:</td>
                                        <td>
                                            <input id="TIME"  placeholder="HH:MM"  type="text"   runat="server" tabindex="25" /></td>
                                        <td>EST FLT:</td>
                                        <td>
                                            <input id="ESTPLT" type="text"  runat="server" tabindex="26"/></td>
                                    </tr>
                                </table>

                            </div>
                            <div id="example2" class="handsontable"></div>
                           
                        </div>


                    </div>
                    <div class="tab-pane" id="listmawb">

                        <div>
                            <p style="font-size: 15px; text-align: left;">Application for multiple MAWB</p>
                            <div class="div-btn">
                                <asp:Button ID="Button1" runat="server" Text="SAVE" OnClientClick="gettable()" OnClick="Button1_Click" CssClass="mani-btn btn btn-primary" />
                            </div>
                            <div id="example" class="handsontable"></div>
                            
                            <asp:TextBox ID="TextBoxDT" runat="server" TextMode="MultiLine" CssClass="txt1"></asp:TextBox>
                            <asp:TextBox ID="TextBoxEDIT" runat="server" CssClass="txtedit"></asp:TextBox>
                            <asp:TextBox ID="TextBoxGN" runat="server" CssClass="txtgn"></asp:TextBox>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</asp:Content>
