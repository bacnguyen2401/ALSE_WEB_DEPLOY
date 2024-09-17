
var html_thead = "";
var html_tbody = "";
var ajaxGet;
var d;
$(document).ready(function () {
    fncChange();
    fncClick();
    fncLoad();
})

function fncLoad() {
    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function () {
        if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function () {
        $timeline_block.each(function () {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
   
}
function fncClick() {
    $("#btnSubmit").click(function () {
        khaiBao = {
            Id: "",
            NgayKhaiBao: "2020-04-01",
            NhanVienId: "",
            HoTen: $("#inpHoTen").val(),
            NamSinh: $("#inpNamSinh").val(),
            GioiTinh: $("input[name='customRadioInline1']:checked").val(),
            CongTy: $("#inpCongTy").val(),
            CMT_HoChieu: $("#inpCmtHoChieu").val(),
            QuocTich: $("#inpQuocTich").val(),
            SDT: $("#inpSoDienThoai").val(),
            DiaChiThuongTru: $("#inpDiaChiThuongTru").val(),
            DauHieu1: ($("#qDauHieuCheck1").is(":checked")?"1":"0"),
            DauHieu2: ($("#qDauHieuCheck2").is(":checked")?"1":"0"),
            DauHieu3: ($("#qDauHieuCheck3").is(":checked")?"1":"0"),
            DauHieu4: ($("#qDauHieuCheck4").is(":checked")?"1":"0"),
            DauHieu5: ($("#qDauHieuCheck5").is(":checked")?"1":"0"),
            DauHieu6: ($("#qDauHieuCheck6").is(":checked")?"1":"0"),
            TiepXuc1: ($("#qTiepXucCheck1").is(":checked")     ?"1":"0"),
            TiepXuc2: ($("#qTiepXucCheck2").is(":checked")     ?"1":"0"),
            TiepXuc3: ($("#qTiepXucCheck3").is(":checked")     ?"1":"0"),
            TiepXuc4: ($("#qTiepXucCheck4").is(":checked") ? "1" : "0"),
            NgayTao: ""
        }
        jsonData = JSON.stringify({ khaiBao });

        console.log(jsonData);
        $.ajax({
            type: "POST",
            url: "Default.aspx/IKhaiBao",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                console.log(d);
                if (d == "OK") {
                    alert("Cám ơn bạn đã gửi thông tin!");
                } else {
                    alert("Có lỗi xảy ra! Vui lòng nhập lại!");
                }
              
               
            },
            error: function (request, status, error) {
                alert("Có lỗi xảy ra! Vui lòng tải lại trang!");
                console.log(request.responseText);
            }
        }).done(function () {

        });
        /// END AJAX LOAD

    })
}
function fncChange() {
    $("#qCamKetCheck1").change(function () {
        if ($(this).is(":checked")) {
            $("#btnSubmit").show();
        } else {
            $("#btnSubmit").hide();
        }
    })
}
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        // document.getElementById("nextBtn").innerHTML = "Submit";
        $("#nextBtn").hide();
        //$("#btnSubmit").prop('disabled', true);
        if ($(this).is(":checked")) {
            $("#btnSubmit").show();
        }

    } else {
        $("#nextBtn").show();
        $("#btnSubmit").hide();
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}



function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    //return valid; // return the valid status
    return true;
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

