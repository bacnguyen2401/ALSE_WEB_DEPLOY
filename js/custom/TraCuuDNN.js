var ajaxGet;
var jsonData;
var html_body;

$(document).ready(function () {
    fncClick();
});

function fncClick() {
    $("#btn-truyvan-dnn").click(function () {
        var _soHawb = $("#ta-danhsach-dnn").val().replace(/(?:\r\n|\r|\n)/g, "<**>");
        console.log(_soHawb)
        if (_soHawb === "") {
            alert("Vui lòng nhấp HAWB để tiếp tục công việc!");
        } else {
            ajaxGet = { "get": _soHawb };
            var jsonData = JSON.stringify({ ajaxGet });
            $.ajax({
                type: "POST",
                url: "TraCuuDNN.aspx/reDNNs",
                data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (responsive) {
                    d = responsive.d;
                    //console.log(d)
                    html_body = "";
                    $.each(d, function (key, val) {
                        html_body += "<tr>";
                        html_body += "<td>" + (key + 1) + "</td>";
                        html_body += "<td>" + val.SoHAWB +"</td>";
                        html_body += "<td>" + val.SoDNN +"</td>";
                        html_body += "<td>" + val.SoSHIPMENT +"</td>";
                        html_body += "</tr>";
                    });
                    $(".tbl-truyvandnn tbody").empty().append(html_body);
                },
                error: function (request, status, error) {
                    console.log(request.responseText);
                }
            }).done(function () {

            });
        }
    });
}