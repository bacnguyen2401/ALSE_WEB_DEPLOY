var jsonData;
var ajaxGet;
var ajaxGet1;
var ajaxGet2;
var ajaxGet3;

$(document).ready(function () {
    fncLoad();
    fncClick();
    fncChange();
    fncModal();
});

function fncLoad() {

}

function fncClick() {
    $(".btn-chiho-kehoach").click(function () {
        $("#myModalViewChiHo").modal("show");
        $("#h4-chiho-view-tieude").empty().append("Thêm mới chi hộ");
    });
}

function fncChange() {

}

function fncModal() {

}