var jsonData;
var ajaxGet2;

$(document).ready(function () {
    fncClick();
})

function fncClick() {
    $("#btn-update-fwd").click(function () {
        var hawb = $("#input-hawb").val();
        var fwd =  $("#input-fwd").val();

        if (validate(hawb, fwd)) {
            ajaxGet2 = { "get1": hawb, "get2": fwd };
            jsonData = JSON.stringify({ ajaxGet2 });

            $.ajax({
                type: "POST",
                url: "UpdateFWD.aspx/UpdateFWDByHawb",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (resposive) {
                    if (resposive.d == "ok") {
                        alert("Update thành công");
                        $("#input-hawb").val("");
                        $("#input-fwd").val("");
                    } else {
                        alert("Lỗi vui lòng liên hệ IT");
                    }
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {
            });
        } else {
            alert("Vui lòng nhập HAWB và FWD");
        }
    });
}

function validate(hawb, fwd) {
    var check = true;
    if (hawb == "" || fwd == "") {
        return check = false
    }
    return check;
}