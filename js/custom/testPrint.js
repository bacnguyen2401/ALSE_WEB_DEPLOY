$(document).ready(function () {
    fncClick();
    fncAction();
})

function fncClick() {

    $(".btn-modal2").click(function () {
        $("#modal1").modal("hide");
        $("#modal2").modal("show");
    })

    $(".btn-modal").click(function () {
        $("#modal1").modal("show");
    })
}

function fncAction() {
    // Modal them chung tu hide
    $('#modal2').on('hide.bs.modal', function () {

        $("#modal1").modal("show");
    });
}