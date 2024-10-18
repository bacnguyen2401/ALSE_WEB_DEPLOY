﻿var Matheodoi = "";
var tableLength;
var sdt = "";
var laixe = "";
var bks = "";
var ngayyeucautrahang = "";
var soseal = "";
var loaihinhxe = "";
$(document).ready(function () {
    const urlParams = new URLSearchParams(location.search);

    for (const [key, value] of urlParams) {
        Matheodoi = value;
    }

    Load();

    Click();
});

function Click() {
    $("#btn-print").click(function () {
        window.print()
    })
    $(".btn-save").click(function () {
        var list = [];
        for (var i = 0; i < tableLength; i++) {
            var rowData = {
                ID: $('#tablePOD tbody').find('tr:eq(' + i + ')').find('td:first').attr('attrId'),
                SoTMS: $('#tablePOD tbody').find('tr:eq(' + i + ')').find('td:eq(1)').text(),
                SoInvoice: $('#tablePOD tbody').find('tr:eq(' + i + ')').find('td:eq(2)').text(),
                HAWB: $('#tablePOD tbody').find('tr:eq(' + i + ')').find('td:eq(3)').text(),
                NCC: $('#tablePOD tbody').find('tr:eq(' + i + ')').find('td:eq(4)').text(),
                BU: $('#tablePOD tbody').find('tr:eq(' + i + ')').find('td:eq(5)').text(),
                Carton: $('#tablePOD tbody').find('tr:eq(' + i + ')').find('td:eq(6)').text(),
                Pallet: $('#tablePOD tbody').find('tr:eq(' + i + ')').find('td:eq(7)').text(),
                GW: $('#tablePOD tbody').find('tr:eq(' + i + ')').find('td:eq(8)').text(),
                DiaChiGiaoHang: $('#tablePOD tbody').find('tr:eq(' + i + ')').find('td:eq(9)').text(),
                NguoiNhanHang: $('#tablePOD tbody').find('tr:eq(' + i + ')').find('td:eq(10)').text(),
                SDTNguoiNhanHang: $('#tablePOD tbody').find('tr:eq(' + i + ')').find('td:eq(11)').text(),
                PCS: $('#tablePOD tbody').find('tr:eq(' + i + ')').find('td:eq(17)').text(),
                GhiChu: $('#tablePOD tbody').find('tr:eq(' + i + ')').find('td:eq(18)').text(),
            };
            list.push(rowData);
        }
        jsonData = JSON.stringify({ list });
        //console.log(jsonData)
        $.ajax({
            type: "POST",
            url: "CPNView.aspx/UpdateCPNMaTheoDoi",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                Swal.fire({
                    title: "Cập nhật",
                    text: "Cập nhật thành công",
                    type: 'success',
                    timer: 2000,
                })
                Load();
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        })
    })
}

function Load() {
    ajaxGet = { "get": Matheodoi };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "CPNView.aspx/reCPNMaTheoDoi",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            tableLength = d.length;
            html_tbody = "";

            $.each(d, function (key, val) {
                html_tbody += "<tr>";
                html_tbody += "<td  attrId=\"" + val.Id + "\" class=\"ClassfontSize8 textleft\">" + (key + 1) + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textDam font-size12\">" + val.SoTMS + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textDam font-size12\">" + val.SoInvoice + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textDam font-size12\">" + val.HAWB + "</td>";
                html_tbody += "<td contenteditable class=\"ClassfontSize8 textleft textwidth1 \">" + val.NCC + "</td>";
                html_tbody += "<td contenteditable class=\"ClassfontSize8 textleft\">" + val.BU + "</td>";
                html_tbody += "<td contenteditable   class=\"ClassfontSize8 textleft textDam font-size12\">" + val.Carton + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textDam font-size12\">" + val.Pallet + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 \">" + val.GW + "</td>";
                //html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\"></td>";
                //html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\"></td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\">" + val.DiaChiGiaoHang + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\">" + val.NguoiNhanHang + "</td>";
                html_tbody += "<td contenteditable class=\"ClassfontSize8 textleft tdwidth50\">" + val.SDTNguoiNhanHang + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textwidthNgayGiao\">" + convertDate(val.NgayGioThucTe)[4] + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textwidthMathe\"></td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textwidth\"></td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textwidthMathe\"></td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textNone\"></td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft textwidthSoKien\">" + val.PCS + "</td>";
                html_tbody += "<td contenteditable  class=\"ClassfontSize8 textleft\">" + val.GhiChu + "</td>";
                html_tbody += "</tr>";

                sdt = val.SDT;
                laixe = val.TenLaiXe;
                bks = val.BKSXe;
                soseal = val.SoSeal;
                loaihinhxe = val.TaiTrong;
                ngayyeucautrahang = convertDate(val.NgayGioThucTe)[1];
            });

            html_tbody += "<tr>";
            html_tbody += "<td class=\"ClassfontSize8\" rowspan=\"2\">车辆<br />";
            html_tbody += "信息<br />";
            html_tbody += "Thông<br />";
            html_tbody += "tin xe</td>";
            html_tbody += "<td class=\"ClassfontSize8\" colspan=\"3\" rowspan=\"2\">物流供方名称：<input value=\"ALSE\" class=\"nobdInput\" style=\"width: 70px\" type=\"text\" /><br />";
            html_tbody += "Tên FWD vận chuyển</td>";
            html_tbody += "<td class=\"ClassfontSize8\" colspan=\"3\" rowspan=\"2\">车牌号：</br>";
            //html_tbody += "<select class=\"nobd selectchange\">" + html_selectBKS + "</select ><br />";
            html_tbody += "Số xe: ";
            html_tbody += "<input value=\"" + bks + "\"  class=\"nobdInput\"  id=\"txtChange\" type=\"text\" list=\"sltBKS\" />";
            //html_tbody += "<datalist class=\"nobdInput\" id=\"sltBKS\">";
            ////html_tbody += html_selectBKS;
            //html_tbody += "</datalist>";

            html_tbody += "Loại hình xe: " + loaihinhxe + "</td > ";
            html_tbody += "<td class=\"ClassfontSize8\" colspan=\"3\" rowspan=\"2\">司机姓名：";
            html_tbody += "<input id=\"txtnhanvien\" value=\"" + laixe + "\" class=\"nobdInput\" style=\"width: 100px\" type=\"text\" /><br />";
            html_tbody += "Tên</td>";
            html_tbody += "<td class=\"ClassfontSize8\" colspan=\"3\" rowspan=\"2\">电话：<input id=\"txtsodienthoai\" class=\"nobdInput\" value=\"" + sdt + "\" style=\"width: 60px\" type=\"text\" /><br />";
            html_tbody += "SĐT</td>";
            html_tbody += "<td class=\"ClassfontSize8\" colspan=\"4\" rowspan=\"2\">提货司机签字:<input class=\"nobdInput\" style=\"width: 60px\" type=\"text\" /><br />";
            html_tbody += "Lái";
            html_tbody += "<br />";
            html_tbody += "xe lấy";
            html_tbody += "<br />";
            html_tbody += "hàng";
            html_tbody += "<br />";
            html_tbody += "kí tên</td>";
            html_tbody += "<td class=\"ClassfontSize8\" colspan=\"4\" rowspan=\"2\">提货日期：<input class=\"nobdInput txtngaylayhang\" value=\"" + ngayyeucautrahang + "\" style=\"width: 60px\" type=\"text\" /><br />";
            html_tbody += "Ngày lấy ";
            html_tbody += "<br />";
            html_tbody += "hàng";
            html_tbody += "</td>";
            html_tbody += "</tr>";
            html_tbody += "<tr>";
            html_tbody += "</tr>";
            html_tbody += "<tr>";
            html_tbody += "<td class=\"ClassfontSize8\" rowspan=\"2\">异常<br />";
            html_tbody += "Bất<br />";
            html_tbody += "thường</td>";
            html_tbody += "<td class=\"ClassfontSize8\" rowspan=\"2\" colspan=\"10\">提示：在提货时请核对货物数量，如有质量问题或数量差异，请在下方注明（否则视为完好）。谢谢！<br />";
            html_tbody += "提货异常描述：<br />";
            html_tbody += "Cảnh báo:  Khi  lấy hàng phải đối chiếu số lượng hàng, nếu như có vấn đề về chất lượng hoặc số lượng thiếu, ";
            html_tbody += "Hãy điền rõ thông tin vào cột ghi chú trong bảng(nếu không sẽ nhầm là đầy đủ).Cảm ơn";
            html_tbody += "<br/>";
            html_tbody += "Miêu tả sự bất thường khi lấy hàng:</td>";
            html_tbody += "<td class=\"ClassfontSize8\" rowspan=\"2\" colspan=\"12\">异常日期：<br />";
            html_tbody += "Ngày phát sinh bất thường:</td>";
            html_tbody += "</tr>";
            html_tbody += "<tr>";
            html_tbody += "</tr>";
            html_tbody += "<tr>";
            html_tbody += "<td colspan=\"1\">STT</td>";
            html_tbody += "<td colspan=\"2\">铅封号码 số chì</td>";
            html_tbody += "<td colspan=\"6\">检查人员签名 tên người kiểm tra</td>";
            html_tbody += "<td colspan=\"4\">工号 mã nhân viên</td>";
            html_tbody += "<td colspan=\"4\">仓址 kho</td>";
            html_tbody += "<td colspan=\"4\">备注 ghi chú</td>";
            html_tbody += "</tr>";
            html_tbody += "<tr>";
            html_tbody += "<td colspan=\"1\">1</td>";
            html_tbody += "<td colspan=\"2\">" + soseal + "</td>";
            html_tbody += "<td colspan=\"6\"></td>";
            html_tbody += "<td colspan=\"4\"></td>";
            html_tbody += "<td colspan=\"4\"></td>";
            html_tbody += "<td colspan=\"4\"></td>";
            html_tbody += "</tr>";
            html_tbody += "</tr>";
            html_tbody += "<tr>";
            html_tbody += "<td colspan=\"1\"></td>";
            html_tbody += "<td colspan=\"2\"></td>";
            html_tbody += "<td colspan=\"6\"></td>";
            html_tbody += "<td colspan=\"4\"></td>";
            html_tbody += "<td colspan=\"4\"></td>";
            html_tbody += "<td colspan=\"4\"></td>";
            html_tbody += "</tr>";
            html_tbody += "</tr>";
            html_tbody += "<tr>";
            html_tbody += "<td colspan=\"1\"></td>";
            html_tbody += "<td colspan=\"2\"></td>";
            html_tbody += "<td colspan=\"6\"></td>";
            html_tbody += "<td colspan=\"4\"></td>";
            html_tbody += "<td colspan=\"4\"></td>";
            html_tbody += "<td colspan=\"4\"></td>";
            html_tbody += "</tr>";
            html_tbody += "<tr>";
            html_tbody += "<td colspan=\"1\"></td>";
            html_tbody += "<td colspan=\"2\"></td>";
            html_tbody += "<td colspan=\"6\"></td>";
            html_tbody += "<td colspan=\"4\"></td>";
            html_tbody += "<td colspan=\"4\"></td>";
            html_tbody += "<td colspan=\"4\"></td>";
            html_tbody += "</tr>";

            //$("#tablePOD tbody").prepend(html_tbody);
            $("#tablePOD tbody").empty().append(html_tbody);
        },
        error: function () {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Danh sách hàng chưa được lưu. Thử lại hoặc liên hệ IT',
                'error'
            )
        }
    }).done(function () {
    })
}