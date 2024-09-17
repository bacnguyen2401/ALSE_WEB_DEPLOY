
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
    var gdate = new Date();
    $("#select-xbc-thang").val(gdate.getMonth() + 1);
    $("#select-xbc-nam").val(gdate.getFullYear());
}
function fncClick() {
    $("#btn-xbc-xuatbaocao").click(function () {
        
        var xbc_thang = $("#select-xbc-thang").val();
        var xbc_nam = $("#select-xbc-nam").val();
        var xbc_bophan = $("#select-xbc-bophan").val();
      

        // BEGIN AJAX LOAD 
        //TODO 1.
        //TODO 2.
        //TODO 3.
        ajaxGet3 = { "get1": xbc_thang, "get2": xbc_nam, "get3": xbc_bophan };
        jsonData = JSON.stringify({ ajaxGet3 });
        $.ajax({
            type: "POST",
            url: "XuatBangChamCong.aspx/XuatBangCong",
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (responsive) {
                d = responsive.d;
                var tenfile = "BangChamCong_" + xbc_bophan + "_Thang_" + xbc_thang + "_Nam_" + xbc_nam;
                window.open("../DownloadFile.aspx?Root=ChamCong&Folder=BaoCao&FileName=" + tenfile+ ".xlsx");
                
            },
            error: function (request, status, error) {
                console.log(request.responseText);
            }
        }).done(function () {

        });
    /// END AJAX LOAD


    })
}
function fncChange() {

}
