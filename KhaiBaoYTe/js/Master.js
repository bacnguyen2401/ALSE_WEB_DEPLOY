function convertDate(date) {
    var returnDate = [];
    var arr_date = ["", "01/01/1900 12:00:00 AM", "1/1/1900 12:00:00 AM", "01/01/1900 00:00:00", "01/01/1900 00:00", "1/1/1900 00:00:00"];
    if ($.inArray(date, arr_date) == -1) {
        var cD = new Date(date);
        returnDate[0] = cD.getFullYear() + "/" + convert2chuso(cD.getMonth() + 1) + "/" + convert2chuso(cD.getDate());
        returnDate[1] = convert2chuso(cD.getDate()) + "/" + convert2chuso(cD.getMonth() + 1) + "/" + cD.getFullYear();
        returnDate[2] = convert2chuso(cD.getDate()) + "/" + convert2chuso(cD.getMonth() + 1) + " " + convert2chuso(cD.getHours()) + ":" + convert2chuso(cD.getMinutes());
        returnDate[3] = convert2chuso(cD.getHours()) + ":" + convert2chuso(cD.getMinutes());
        returnDate[4] = convert2chuso(cD.getDate()) + "/" + convert2chuso(cD.getMonth() + 1);
        returnDate[5] = convert2chuso(cD.getDate()) + "/" + convert2chuso(cD.getMonth() + 1) + "/" + cD.getFullYear() + " " + convert2chuso(cD.getHours()) + ":" + convert2chuso(cD.getMinutes());
        returnDate[6] = cD.getFullYear() + "" + convert2chuso(cD.getMonth() + 1) + "" + convert2chuso(cD.getDate());
        returnDate[7] = convert2chuso(cD.getDate()) + "-" + convert2chuso(cD.getMonth() + 1) + "-" + cD.getFullYear();
        returnDate[8] = convert2chuso(cD.getDate()) + "_" + convert2chuso(cD.getMonth() + 1) + "_" + cD.getFullYear();
        returnDate[9] = convert2chuso(cD.getDate()) + "/" + convert2chuso(cD.getMonth() + 1) + "/" + cD.getFullYear().toString().substr(-2);
        returnDate[10] = convert2chuso(cD.getMonth() + 1) + "/" + convert2chuso(cD.getDate()) + "/" + cD.getFullYear();
    } else {
        returnDate = ["", "", "", "", "", "", "", "", "", ""];
    }

    return returnDate;

    // [0] : yyyy/MM/dd
    // [1] : dd/MM/yyyy
    // [2] : dd/MM hh:mm
}
///
function convert2chuso(num) {
    var reNum = "";
    if (num < 10) {
        reNum = "0" + num.toString();
    }
    else {
        reNum = num.toString();
    }

    return reNum;
}
// hiển thị icon font awesome
function showIcon(data) {
    var iconShow = "";

    if (data == "True") {
        iconShow += "<i class=\"fa fa-check-circle text-success\"></i>";
    } else {
        iconShow += "<i class=\"fa fa-ban text-danger\"></i>";
    }

    return iconShow;
}