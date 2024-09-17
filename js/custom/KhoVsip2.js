var ajaxGet;
var jsonData;
var arrayTotalRack = [];

$(document).ready(function () {
    fncLoad();
    function init() {
        window.addEventListener("mousemove", function (e) {
            let x = e.clientX;
            let y = e.clientY;

            let node = document.getElementById("id-object");
            if (window.innerWidth - x < 150) {
                x = x - 150;
            } else {
                x = x + 20;
            }

            if (window.innerHeight - y < 150) {
                y = y - 150;
            } else {
                y = y
            }
            node.style.top = y + "px";
            node.style.left = x + "px";
        });
    }

    window.onload = init;

    window.addEventListener('mousemove', '');
})

function fncLoad() {
    ajaxGet = { "get": "" };
    jsonData = JSON.stringify({ ajaxGet });
    $.ajax({
        type: "POST",
        url: "KhoVsip2.aspx/reList",
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (responsive) {
            d = responsive.d;
            arrayTotalRack = d.locationTotal;
            var html_rack = "";
            $.each(d.warehouse, function (key, val) {

                if (val.warehouse == "Kho khô 10") {
                    item(val.TotalRack, "#khokho10", d.location10)
                }

                if (val.warehouse == "Kho khô 11") {
                    item(val.TotalRack, "#khokho11", d.location11)
                }

                if (val.warehouse == "Kho lạnh 12") {
                    item(val.TotalRack, "#kholanh", d.location12)
                }

                if (val.warehouse == "Kho mát 13") {
                    item(val.TotalRack, "#khomat13", d.location13)
                }
            })


        },
        error: function () {
            Swal.fire(
                'Có lỗi xảy ra!',
                'Thử lại hoặc liên hệ IT',
                'error'
            )
        }
    }).done(function () {
    })
}

//function mouseCoordinates(event) {

//    var xPos = event.clientX;

//    var yPos = event.clientY;

//    output.innerHTML = "Coordinate (X) : " + xPos + " " + "pixels <br>Coordinate (Y) : " + yPos + " " + "pixels";

//}

function mouseover(x, y, z, k) {
    //console.log(arrayTotalRack)
    const result = arrayTotalRack.filter((item) => item.Vitri.substring(0, 2) == x && item.Vitri.substring(3, 5) == y && item.Vitri.substring(6, 8) == z);
    //console.log(result)
    ////<% --  < div class="floor_floor__iopoD" > F4</div >
    ////                            <div class="floor_floor__iopoD">F3</div>
    ////                            <div class="floor_floor__iopoD">F2</div>
    ////                            <div class="floor_floor__iopoD">F1</div>--%>
    var html_item_rack = "";
    for (var i = 0; i < result.length; i++) {
        html_item_rack += " <div class=\"floor_floor__iopoD\">F" + (i + 1) +" Số kiện: " + result[i].SoKien + "</div>";
    }
    $(".item-rack").empty().append(html_item_rack);
    document.getElementById("id-object").style.display = "block";
}

function mouseout(x) {
    document.getElementById("id-object").style.display = "none";
}

function item(totalRack, id, array) {
    // Vòng lặp đầu tiên:
    // Gán Rack , Vitri , SoKien
    // Rack = Rack thì kiểm tra số kiện 
    var Rack = "";
    var ViTri = "";
    var SoKien = "";
    var SoTangOld = "";
    var html_item = "";
    var tomau = "";
    var countSoTang = 0;
    for (var i = 0; i <= (array.length - 1); i++) {
        if (i == 0) {
            tomau = "";
            html_item = "";
            Rack = array[i].Rack;
            ViTri = array[i].Vitri.substring(6, 8);
            SoKien = array[i].SoKien;
            SoTangOld = array[i].SoTang;
            if (SoKien != "") {
                countSoTang = 1;
            }
        } else {
            if (Rack == array[i].Rack) {
                if (ViTri == array[i].Vitri.substring(6, 8)) {
                    if (array[i].SoKien != "") {
                        countSoTang++;
                    }
                    Rack = array[i].Rack;
                    ViTri = array[i].Vitri.substring(6, 8);
                    ViTri2 = array[i].Vitri.substring(3, 5);
                    SoKien = array[i].SoKien;
                    SoTangOld = array[i].SoTang;
                } else {
                    if (parseInt(SoTangOld) == countSoTang) {
                        tomau = "backgroundRed"
                    }
                    if (countSoTang == 0) {
                        tomau = "backgroundWhite"
                    }
                    if (countSoTang < parseInt(SoTangOld) && countSoTang > 0) {
                        tomau = "backgroundYellow"
                    }

                    html_item += "<div onmouseover=\"mouseover(" + array[i].Vitri.substring(0, 2) + ", " + ViTri2 + ", " + ViTri + " , " + SoTangOld + ")\" onmouseout=\"mouseout(this)\" class=\"rack_rack_item__LIQ6Z " + tomau + "\">" + ViTri + "</div>";

                    Rack = array[i].Rack;
                    ViTri = array[i].Vitri.substring(6, 8);
                    ViTri2 = array[i].Vitri.substring(3, 5);
                    SoKien = array[i].SoKien;
                    SoTangOld = array[i].SoTang;
                    countSoTang = 0;
                    if (array[i].SoKien != "") {
                        countSoTang++;
                    }

                }
            } else {
                html_item += "<div onmouseover=\"mouseover(" + array[i].Vitri.substring(0, 2) + ", " + ViTri2 + ", " + ViTri + ", " + SoTangOld + ")\" onmouseout=\"mouseout(this)\" class=\"rack_rack_item__LIQ6Z " + tomau + "\">" + ViTri + "</div>";
                $(id + Rack).empty().append(html_item)
                html_item = "";
                Rack = array[i].Rack;
                ViTri = array[i].Vitri.substring(6, 8);
                ViTri2 = array[i].Vitri.substring(3, 5);
                SoKien = array[i].SoKien;
                SoTangOld = array[i].SoTang;
                countSoTang = 0;
                if (array[i].SoKien != "") {
                    countSoTang++;
                }
            }

            if (i == (array.length - 1)) {
                html_item += "<div onmouseover=\"mouseover(" + array[i].Vitri.substring(0, 2) + ", " + ViTri2 + ", " + ViTri + ", " + SoTangOld + ")\" onmouseout=\"mouseout(this)\" class=\"rack_rack_item__LIQ6Z " + tomau + "\">" + ViTri + "</div>";

                $(id + Rack).empty().append(html_item)
            }
        }
    }
}