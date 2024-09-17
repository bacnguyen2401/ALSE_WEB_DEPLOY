<%@ Page Title="NHẬP GTK" Language="C#" MasterPageFile="~/Site.Master" EnableViewState="false" AutoEventWireup="true" CodeBehind="NhapGTK.aspx.cs" Inherits="ALSE.NhapGTK" %>

<%@ Register Assembly="DevExpress.Web.v14.2" Namespace="DevExpress.Web" TagPrefix="dx" %>





<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
    <style type="text/css">
        

        .inp {
            width: 90px;
        }

        .vsan {
            visibility: hidden;
        }

        .btn-top {
            margin-bottom: 20px;
        }

        .tomau {
            background-color: red;
        }
        /*popup css*/
        .pcmCellCaption {
            white-space: nowrap;
            padding-top: 5px;
            vertical-align: top;
        }

        .pcmCellText {
            padding-left: 10px;
            padding-top: 2px;
        }

        .pcmCheckBox {
            padding-left: 6px;
            padding-bottom: 10px;
        }

        .pcmCreateAccount {
            text-align: right;
            padding-top: 8px;
            padding-bottom: 4px;
        }

        .pcmButton {
            padding-top: 10px;
            padding-bottom: 0px;
        }

        .pcmSideSpacer {
            width: 60px;
            height: 1px;
        }
    </style>
    <script type="text/javascript">
        function getng() {

        }

        function getdtnow() {
            var currentDate = new Date();

            var phut = currentDate.getMinutes();
            var gio = currentDate.getHours();
            var giay = currentDate.getSeconds();
            if (phut < 10) {
                phut = "0" + phut;
            }
            if (gio < 10) {
                gio = "0" + gio;
            }
            var gdate = currentDate.getDate();

            if (gdate < 10) {
                gdate = "0" + gdate;
            }
            var gmonth = (currentDate.getMonth() + 1);

            if (gmonth < 10) {
                gmonth = "0" + gmonth;
            }

            var datenow = gdate + "/" + gmonth + "/" + currentDate.getFullYear();
            var timenow = gio + ":" + phut;
            var dtnow = currentDate.getFullYear() + "/" + gmonth + "/" + gdate + " " + gio + ":" + phut + ":" + giay;
            return [datenow, timenow, dtnow];
        }

        $(document).ready(function () {
            $('#tbl1 tr').each(function () {
                var cvtgc = $(this).find('.tgc').text().replace(':', '');
                //console.log(cvtgc);
                if (cvtgc > 100) {
                    $(this).find('.tgc').addClass('tomau');
                }

            })
            var getdtxxx = getdtnow();
            $('.denngay').val(getdtxxx[0]);
            $('input.gionhap').mask('99:99');
            $('input.ngaynhap').mask('99/99/9999');
            $.contextMenu({
                selector: 'td.tgc',
                callback: function (key, options) {
                    var m = "clicked: " + key;
                    // window.console && console.log(m) || alert(key);

                    var dnn = $(this).closest('tr').find('.dnn').text();
                    var tkid = $(this).closest('tr').find('.dnn').attr('tkid');
                    var ntk = $(this).closest('tr').find('.ntk').text();
                    var gtk = $(this).closest('tr').find('.gtk').text();

                    if (key == 'edit') {
                        $('.cdid').val(tkid);
                        $('.sodnn').text(dnn);
                        $('.datecd-tb').val(ntk);
                        $('.timecd-tb').val(gtk);
                        popuptk.Show();

                    }
                },
                items: {
                    "edit": { name: "Edit/Delete", icon: "edit" },
                    

                }
            });

            $(".datepicker").datepicker({
                showWeek: true,
                firstDay: 1,
                changeMonth: true,
                changeYear: true
            });
            var gid = $('.gid').val();
            var table1;
            var view = getParameterByName('View');
            if (view == 1) {
                $('.tb-2').remove();
                $('.cotcuoi').remove();
                $('.btnluu').remove();
                table1 = $('#tbl1').DataTable({
                    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "iDisplayLength": -1
                });

            } else {
                if (gid != '1') {
                    $('.c-remove').remove();

                }
                table1 = $('#tbl1').DataTable({
                    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
                    "iDisplayLength": -1

                });
                
                $('.tungay').remove();
                $('.denngay').remove();
                $('.btnxem').remove();

            }
            // table1.page.len(-1).draw();
            //table2 = $('#tbl2').DataTable();

            //$('#tbl1').DataTable();
            $('#tbl1').on('click', '.getdt', function () {

                var getdt = getdtnow();

                var rowindex = $(this).attr('row-index');
                //alert(datenow + " " + "ngaynhap" + rowindex);
                //$(".ngaynhap" + rowindex).val(getdt[0]);

                //$(".gionhap" + rowindex).val(getdt[1]);
                var row = $(this).closest('tr').html();
                $('#tbl2').append($('<tr>' + row + '</tr>'));

                $("#tbl2 .getdt").text('Remove');
                $("#tbl2 .ntk" + rowindex).val(getdt[0]);

                $("#tbl2 .gtk" + rowindex).val(getdt[1]);
                $(this).parent().parent().remove();
                //table1
                //.row($(this).parents('tr'))
                //.remove()
                //.draw();
                $('input.gtk').mask('99:99');
                $('input.ntk').mask('99/99/9999');
                //$('#tbl1').DataTable({

                //});
                //table1.draw();
            })
            $('#tbl2').on("click", '.getdt', function () {
                var idx = $(this).attr('row-index');
                var idx1 = idx - 1;
                var row2 = $(this).closest('tr').html();
                //console.log(row2);
                //table1.row.add(row2).draw();
                //table1.row.add([$('dnn' + idx).val, $('tongkien' + idx).val, $('ngaynhap' + idx).val, $('gionhap' + idx).val, $('bksxenhap' + idx).val, $('daily' + idx).val, $('dnn' + idx)])
                $('#tbl1').append('<tr>' + row2 + '</tr>');

                $("#tbl1 .getdt" + idx).text('Get DT');
                //table1.draw();
                $(this).parent().parent().remove();

            })
            $('.cdidro').prop('readonly', true);
        })
        function luutable() {
            var ddl = '';
            $('#tbl2 tbody tr').each(function () {
                var gdt = getdtnow();
                var dnn = $(this).find('.dnn').text();
                var ngaynhap = $(this).find('.ntk').val();
                var nnn = ngaynhap.split('/');
                ngaynhap = nnn[2] + '/' + nnn[1] + '/' + nnn[0];
                var gionhap = $(this).find('.gtk').val();
                var uid = $('.uid').val();
               // alert(ngaynhap + ' '+ gionhap);
                
                if (ddl == '') {
                    ddl += "('" + dnn + "', '" + ngaynhap + "', '" + gionhap + "', '" + uid + "', '" + gdt[2] + "') ";
                }
                else {
                    ddl += ", ('" + dnn + "', '" + ngaynhap + "', '" + gionhap + "', '" + uid + "', '" + gdt[2] + "') ";
                }
            })
            $('.luutam').val(ddl);
        }
        function anhien(obj) {

            AddQueryString("View", obj);

            return false;
        }

        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                results = regex.exec(location.search);
            return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }
        var tableToExcel = (function () {
            var uri = 'data:application/vnd.ms-excel;base64,'
              , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines /></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
              , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
              , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
            return function (table, name) {
                if (!table.nodeType) table = document.getElementById(table)
                var ctx = { worksheet: name || 'Worksheet', table: table.innerHTML }
                window.location.href = uri + base64(format(template, ctx))
            }
        })()
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div class="btn-top">
        <button type="button" class="btn btn-success" onclick="window.location='TrangThaiHangXuat.aspx'">Back</button>

        <asp:Button ID="btnLuu" runat="server" Text="Lưu" CssClass="mani-btn btn btn-success btnluu" OnClick="btnLuu_Click" OnClientClick="luutable()" />
        <input type="button" onclick="anhien(1)" value="Xem Lịch Sử TK" class="mani-btn btn btn-primary" />
        <input type="button" onclick="anhien(0)" value="TK Chưa Có" class="mani-btn btn btn-info" />
        <input type="button" onclick="tableToExcel('tbl1', 'Tờ Khai')" value="Xuất Excel" class="mani-btn btn btn-info xuatex" />

        <asp:TextBox CssClass="uid vsan" ID="txt1" runat="server"></asp:TextBox>
        <asp:TextBox CssClass="luutam vsan" ID="txt2" TextMode="MultiLine" runat="server"></asp:TextBox>
        <asp:TextBox CssClass="gid vsan" ID="txt3" runat="server"></asp:TextBox>
    </div>
    <div class="btn-top">
        <asp:TextBox ID="txtTuNgay" runat="server" CssClass="datepicker tungay" placeholder="Từ Ngày"></asp:TextBox>
        <asp:TextBox ID="txtDenNgay" runat="server" CssClass="datepicker denngay" placeholder="Đến Ngày"></asp:TextBox>
        <asp:Button ID="btnXem" runat="server" Text="Xem" CssClass="mani-btn btn btn-success btnxem" OnClick="btnXem_Click" />
    </div>

    <div class="tb-ds tb-2 c-remove">
        <table class="table table-bordered table-hover tb-bg" id="tbl2">
            <thead>
                <tr>
                    <th>No</th>
                    <th>DNN</th>
                    <th>Pcs</th>
                    <th>Truck ID</th>
                    <th>Date IN</th>
                    <th>Time IN</th>

                    <th>Forwarder</th>

                    <th>Date CD</th>
                    <th>Time CD</th>
                    <th>Waiting Time</th>
                    <th></th>
                </tr>
            </thead>
        </table>
    </div>
    <div class="tb-ds tb-1">
        <table class="table table-bordered table-hover tb-bg" id="tbl1">
            <thead>
                <tr>
                    <th>No</th>
                    <th>DNN</th>
                    <th>Pcs</th>
                    <th>Truck ID</th>
                    <th>Date IN</th>
                    <th>Time IN</th>
                    <th>Forwarder</th>

                    <th class="c-remove">Date CD</th>
                    <th class="c-remove">Time CD</th>
                    <th>Waiting Time</th>
                    <th class="c-remove cotcuoi"></th>
                </tr>
            </thead>
            <asp:Literal ID="LiteralTable" runat="server"></asp:Literal>
        </table>

        <dx:ASPxPopupControl ID="popuptk" runat="server" CloseAction="CloseButton" CloseOnEscape="true" Modal="True"
            PopupHorizontalAlign="WindowCenter" PopupVerticalAlign="WindowCenter" ClientInstanceName="popuptk"
            HeaderText="Chỉnh sửa giờ tờ khai" AllowDragging="True" PopupAnimationType="None" EnableViewState="False">
            <ClientSideEvents PopUp="function(s, e) { ASPxClientEdit.ClearGroup('entryGroup'); tbLogin.Focus(); }" />
            <ContentCollection>
                <dx:PopupControlContentControl runat="server">
                    <dx:ASPxPanel ID="Panel1" runat="server" DefaultButton="btOK">
                        <PanelCollection>
                            <dx:PanelContent runat="server">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <td>CD ID</td>
                                            <td>DNN</td>
                                            <td>Date CD</td>
                                            <td>Time CD</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                             <td >
                                                 <asp:TextBox ID="txtCDID" runat="server" CssClass="cdid cdidro"></asp:TextBox>

                                             </td>
                                            <td >
                                                <asp:Label ID="lblDNN" runat="server" Text="" class="sodnn"></asp:Label>
                                            </td>

                                            <td class="datecd">

                                                <asp:TextBox ID="txtNgayTK" runat="server" CssClass="datepicker ngaynhap datecd-tb"></asp:TextBox>
                                            </td>
                                            <td class="timecd">

                                                <asp:TextBox ID="txtGioTK" runat="server" CssClass="gionhap timecd-tb"></asp:TextBox>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="4">
                                                <asp:Button ID="btnCapNhat" runat="server" Text="Update" CssClass="mani-btn btn btn-primary" OnClick="btnCapNhat_Click" />
                                                <asp:Button ID="btnDel" runat="server" Text="Delete" CssClass="mani-btn btn btn-success" OnClick="btnDel_Click" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </dx:PanelContent>
                        </PanelCollection>
                    </dx:ASPxPanel>
                </dx:PopupControlContentControl>
            </ContentCollection>
            <ContentStyle>
                <Paddings PaddingBottom="5px" />
            </ContentStyle>
        </dx:ASPxPopupControl>
</asp:Content>