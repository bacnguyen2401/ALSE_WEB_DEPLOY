var Flt_Date = "";
var Flt_Time = "";
var destMawb = "";
var destHawb = "";
var estPcs = "";
var estGw = "";
var estGwVol = "";
var fwd = "";
var po = "";
var shipper = "";
var cnee = "";
var commodity = "";
var atadate = "";
var doDnn = "";
var modelNo = "";
var intemdhl = "";
var cipl = "";
var destTransit = "";
var remark = "";
var dataInputBooks = { items: [] };
var ajaxGet = { "get": "1" };
var jsonDataGet = JSON.stringify({ ajaxGet });

$(document).ready(function () {
    fncLoad();
    fncClick();
});

function fncLoad() {
    var qs_mawb = getParameterByName("MAWB");
    if (qs_mawb !== null && qs_mawb !== "") {
        $.ajax({
            type: "POST",
            url: "InputExcelBookVsip.aspx/reInputBookingsByID",
            data: jsonDataGet,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: ReBooksSuccess,
            error: ReBooksError

        })
        $("#btn-input").remove();
        $("#btn-delete").remove();
    }
    else {
        $("#btn-update").remove();
        $("#btn-delete").remove();
        var data = [
            ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
        ];
        $('#div-input').handsontable({
            data: data,
            minSpareRows: 100,
            renderAllRows: true,
            colWidths: [100, 100, 100, 100, 100, 120, 80, 100, 50, 50, 50, 50, 100, 100, 100, 100, 100, 50],
            colHeaders: true,
            colHeaders: [
                "MAWB"
                , "HAWB"
                , "PO"
                , "ONEHAND"
                , "INV/DNN"
                , "DN/PartNumber"
                , "C.Bay"
                , "N.Bay"
                , "G.Bay"
                , "PCS"
                , "DES.M"
                , "DES.H"
                , "Nhà Máy"
                , "Biển số xe"
                , "FWD"
                , "Ghi chú"
                , "Ngày KH"
                , "In tem"
            ],

            rowHeaders: true,
            contextMenu: false,
            cells: function (row, col) {
                var cellProperties = {};

                if (col === 0 || col == 1 || col == 6 || col == 7 || col == 8 || col == 9 || col == 10 || col == 11 || col == 14 || col == 16 || col == 17) {  // Cột A có index là 0
                    cellProperties.renderer = function (instance, td, row, col, prop, value, cellProperties) {
                        Handsontable.renderers.TextRenderer.apply(this, arguments);
                        td.style.backgroundColor = '#FFDDC1';  // Màu cam nhạt
                    };
                }

                return cellProperties;
            },
        });
    }
}

function fncClick() {
    $("#btn-close").click(function () {
        //window.history.back();
        window.location.href = "QuanLyHangXuat.aspx";
    })

    $("#btn-input").click(function () {
        var checkSame = false;
        var checkMAWB = false;
        var checkDatetime = false;
        var checkIntem = false;
        hawb = "";
        mawb = "";
        onehand = "";
        invdnn = "";
        partnumber = "";
        nhamay = "";
        biensoxe = "";
        flt_no = "";
        flt_date = "";
        flt_time = "";
        estpcs = "";
        destmawb = "";
        desthawb = "";
        fwd = "";
        remark = "";
        ngaykehoach = "";
        checkintem = "";
        dataInputBooks = { items: [] };
        $('#div-input table.htCore tbody tr').each(function () {
            //mawb = $(this).find('td:nth-child(2)').text().replace("-", "").split(" ").join('');
            mawb = removeSpecialChars($(this).find('td:nth-child(2)').text());
            hawb = $(this).find('td:nth-child(3)').text();
            po = $(this).find('td:nth-child(4)').text();
            onehand = $(this).find('td:nth-child(5)').text();
            invdnn = $(this).find('td:nth-child(6)').text();
            partnumber = $(this).find('td:nth-child(7)').text();
            flt_no = $(this).find('td:nth-child(8)').text();
            flt_date = dmy2ymd($(this).find('td:nth-child(9)').text());
            flt_time = $(this).find('td:nth-child(10)').text();
            estpcs = $(this).find('td:nth-child(11)').text().trim();
            destmawb = $(this).find('td:nth-child(12)').text();
            desthawb = $(this).find('td:nth-child(13)').text();
            nhamay = $(this).find('td:nth-child(14)').text();
            biensoxe = $(this).find('td:nth-child(15)').text();
            fwd = $(this).find('td:nth-child(16)').text();
            remark = $(this).find('td:nth-child(17)').text();
            ngaykehoach = dmy2ymd($(this).find('td:nth-child(18)').text());
            checkintem = $(this).find('td:nth-child(19)').text();

            if (mawb != "") {
                dataInputBooks.items.push(
                    {
                        "hawb": hawb,
                        "mawb": mawb,
                        "po": po,
                        "onehand": onehand,
                        "invdnn": invdnn,
                        "partnumber": partnumber,
                        "flt_no": flt_no,
                        "flt_date": flt_date,
                        "flt_time": flt_time,
                        "estpcs": estpcs,
                        "destmawb": destmawb,
                        "desthawb": desthawb,
                        "nhamay": nhamay,
                        "biensoxe": biensoxe,
                        "fwd": fwd,
                        "remark": remark,
                        "ngaykehoach": ngaykehoach,
                        "intemdhl": checkintem,
                        "ngaybaycheck": $(this).find('td:nth-child(9)').text() + " " + flt_time
                    }
                );
            }
        })

        for (var i = 0; i < dataInputBooks.items.length; i++) {
            //Kiểm tra mục in tem có đánh số 0 và 1 không
            if (dataInputBooks.items[i].intemdhl == "") {
                checkIntem = true;
                break;
            }

            // kiểm tra có đồng ý in tem không
            if (dataInputBooks.items[i].intemdhl == 1) {
                if (dataInputBooks.items[i].mawb.length != 11) {
                    checkMAWB = true;
                    break;
                }

                if ((parseInt(dataInputBooks.items[i].mawb.substring(3, 10)) % 7) != parseInt(dataInputBooks.items[i].mawb.substring(10, 11))) {
                    checkMAWB = true;
                    break;
                }


            }

            if (dataInputBooks.items[i].ngaybaycheck == "") {
                checkDatetime = true;
                break;
            } else {
                if (!isValidDateTime(dataInputBooks.items[i].ngaybaycheck)) {
                    checkDatetime = true;
                    break;
                }
            }
        }
        //console.log(checkIntem)
        //console.log(checkMAWB)
        //console.log(checkDatetime)

        if (checkIntem) {
            alert("Vui lòng nhập thông tin in tem là 0 hoặc 1 để có cho in tem!");
        } else {
            if (checkMAWB) {
                alert("Vui lòng nhập số MAWB đúng định dạng là số và có 11 kí tự!");
            } else {
                if (checkDatetime) {
                    alert("Vui lòng kiểm tra lại ngày bay nhập thiếu hoặc sai định dạng!")
                } else {
                    //var HAWBSame = "";
                    //for (var i = 0; i < dataInputBooks.items.length; i++) {
                    //    ajaxGet = { "get": dataInputBooks.items[i].hawb };
                    //    jsonData = JSON.stringify({ ajaxGet });

                    //    $.ajax({
                    //        type: "POST",
                    //        url: "InputExcelBookVsip.aspx/checkTrungHawb",
                    //        data: jsonData,
                    //        contentType: "application/json; charset=utf-8",
                    //        dataType: "json",
                    //        async: false,
                    //        success: function (res) {
                    //            //console.log((res))
                    //            if (res.d != "") {
                    //                HAWBSame += dataInputBooks.items[i].hawb + " ";
                    //                checkSame = true;
                    //            }
                    //        },
                    //        error: function (error) {
                    //            console.log((error))
                    //        }
                    //    })
                    //}

                    //if (checkSame) {
                    //    alert("Vui lòng kiểm tra hawb " + HAWBSame + " đã có trong cơ sở dữ liệu");
                    //} else {
                    var jsonData = JSON.stringify({ dataInputBooks });
                    //console.log(jsonData)

                    $.ajax({
                        type: "POST",
                        url: "InputExcelBookVsip.aspx/inputBookings",
                        data: jsonData,
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        async: false,
                        success: InputExcelBookingSuccess,
                        error: InputExcelBookingError
                    })
                    //}
                }
            }
        }
    });


    $("#btn-update").click(function () {
        hawb = "";
        mawb = "";
        onehand = "";
        invdnn = "";
        partnumber = "";
        nhamay = "";
        biensoxe = "";
        flt_no = "";
        flt_date = "";
        flt_time = "";
        estpcs = "";
        destmawb = "";
        desthawb = "";
        fwd = "";
        remark = "";
        ngaykehoach = "";
        intemdhl = "";
        var dataInputBooks = { items: [] };
        $('#div-input table.htCore tbody tr').each(function () {
            //mawb = $(this).find('td:nth-child(2)').text().replace("-", "").split(" ").join('');
            mawb = removeSpecialChars($(this).find('td:nth-child(2)').text());
            hawb = $(this).find('td:nth-child(3)').text();
            po = $(this).find('td:nth-child(4)').text();
            onehand = $(this).find('td:nth-child(5)').text();
            invdnn = $(this).find('td:nth-child(6)').text();
            partnumber = $(this).find('td:nth-child(7)').text();
            flt_no = $(this).find('td:nth-child(8)').text();
            flt_date = dmy2ymd($(this).find('td:nth-child(9)').text());
            flt_time = $(this).find('td:nth-child(10)').text();
            estpcs = $(this).find('td:nth-child(11)').text().trim();
            destmawb = $(this).find('td:nth-child(12)').text();
            desthawb = $(this).find('td:nth-child(13)').text();
            nhamay = $(this).find('td:nth-child(14)').text();
            biensoxe = $(this).find('td:nth-child(15)').text();
            fwd = $(this).find('td:nth-child(16)').text();
            remark = $(this).find('td:nth-child(17)').text();
            ngaykehoach = dmy2ymd($(this).find('td:nth-child(18)').text());
            intemdhl = $(this).find('td:nth-child(19)').text();


            if (mawb != "") {
                dataInputBooks.items.push(
                    {
                        "hawb": hawb,
                        "mawb": mawb,
                        "po": po,
                        "onehand": onehand,
                        "invdnn": invdnn,
                        "partnumber": partnumber,
                        "flt_no": flt_no,
                        "flt_date": flt_date,
                        "flt_time": flt_time,
                        "estpcs": estpcs,
                        "destmawb": destmawb,
                        "desthawb": desthawb,
                        "nhamay": nhamay,
                        "biensoxe": biensoxe,
                        "fwd": fwd,
                        "remark": remark,
                        "ngaykehoach": ngaykehoach,
                        "intemdhl": intemdhl,
                    }
                );
            }
        })

        //console.log(dataInputBooks)

        var ajaxGet = { "get": "" };
        var jsonData = JSON.stringify({ ajaxGet });
        $.ajax({
            type: "POST",
            url: "InputExcelBookVsip.aspx/deleteMaTheoDoi",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                if (d == "ok") {
                }
            },
            error: function () {
                Swal.fire(
                    'Có lỗi xảy ra!',
                    'Thử lại hoặc liên hệ IT',
                    'error'
                )
            }
        }).done(function () {
        });

        var jsonData = JSON.stringify({ dataInputBooks });
        $.ajax({
            type: "POST",
            url: "InputExcelBookVsip.aspx/inputBookings",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: InputExcelBookingSuccess,
            error: InputExcelBookingError
        })
        console.log("insert xong")
    });
}

function InputExcelBookingSuccess(response) {
    $("#div-input").handsontable('clear');
    alert(response.d);
    window.history.back();
}
function InputExcelBookingError(response) {
    console.log(response.d);
}

function ReBooksSuccess(responsive) {
    var d = responsive.d;
    console.log(d);

    var dataJson = d;
    //console.log(dataJson);

    $('#div-input').handsontable({
        data: dataJson,
        minSpareRows: 100,
        renderAllRows: true,
        colWidths: [100, 100, 100, 100, 100, 120, 80, 100, 50, 50, 50, 50, 100, 100, 100, 100, 100, 50],
        columns: [
            {
                data: "mawb",
                type: "text"
            },
            {
                data: "hawb",
                type: "text"
            },
            {
                data: "po",
                type: "text"
            },
            {
                data: "onehand",
                type: "text"
            },
            {
                data: "invdnn",
                type: "text"
            },
            {
                data: "partnumber",
                type: "text"
            },
            {
                data: "flt_no",
                type: "text"
            },
            {
                data: "flt_date",
                type: "text"
            },
            {
                data: "flt_time",
                type: "text"
            },
            {
                data: "estpcs",
                type: "text"
            },
            {
                data: "destmawb",
                type: "text"
            }
            ,
            {
                data: "desthawb",
                type: "text"
            }
            ,
            {
                data: "nhamay",
                type: "text"
            }
            ,
            {
                data: "biensoxe",
                type: "text"
            }
            ,
            {
                data: "fwd",
                type: "text"
            }
            ,
            {
                data: "remark",
                type: "text"
            }
            ,
            {
                data: "ngaykehoach",
                type: "text"
            }
            ,
            {
                data: "intemdhl",
                type: "text"
            }
        ],
        colHeaders: true,
        colHeaders: [
            "MAWB"
            , "HAWB"
            , "PO"
            , "ONEHAND"
            , "INV/DNN"
            , "DN/PartNumber"
            , "C.Bay"
            , "N.Bay"
            , "G.Bay"
            , "PCS"
            , "DES.M"
            , "DEST.H"
            , "Nhà Máy"
            , "Biển số xe"
            , "FWD"
            , "Ghi chú"
            , "Ngày kế hoạch"
            , "In tem"
        ],

        rowHeaders: true,
        contextMenu: false
    });

}

function ReBooksError(responsive) {
    console.log(responsive.d)
}


function tachMAWB(inputMAWB) {
    var result = ""

    var strMAWBDau = inputMAWB.substring(0, 3);
    var strMAWBGiua = inputMAWB.substring(3, 7);
    var strMAWBCuoi = inputMAWB.substring(7, 11);
    result = strMAWBDau + "-" + strMAWBGiua + " " + strMAWBCuoi;
    return result;
}

function removeSpecialChars(str) {
    return str.replace(/[-_.@#+,()]/g, '');
}

function isValidDateTime(str) {
    // Định dạng regex cho dd/MM/YYYY HH:mm
    const regex = /^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/\d{4} ([0-1][0-9]|2[0-3]):([0-5][0-9])$/;

    // Kiểm tra chuỗi có khớp với regex không
    if (!regex.test(str)) {
        return false;
    }

    // Tạo đối tượng Date từ chuỗi đầu vào
    const [day, month, year, hours, minutes] = str.split(/[/\s:]/).map(Number);
    const date = new Date(year, month - 1, day, hours, minutes);

    // Kiểm tra tính hợp lệ của Date
    if (
        date.getFullYear() !== year ||
        date.getMonth() + 1 !== month ||
        date.getDate() !== day ||
        date.getHours() !== hours ||
        date.getMinutes() !== minutes
    ) {
        return false;
    }

    return true;
}