var arrTempData = {};
$(document).ready(function () {
    $("#pdfFile").change(function (e) {
        //console.log(e.target.files)
        arrTempData = {};
        var count_item = 1;
        $.each(e.target.files, function (item, val) {
            arrTempData["file" + count_item] = val;
        })
    })

    $("#uploadPDF").click(function () {
        var formData = new FormData();
        //var fileInput = document.getElementById('pdfFile');
        //var file = fileInput.files[0];
        for (var val in arrTempData) {
            formData.append("file", arrTempData[val]);
        }

        console.log("Tới đây")
        console.log(formData)
        //formData.append('pdfFile', file);

        $.ajax({
            //url: 'inlabel.aspx/ProcessPdf',
            type: "POST",
            url: "AjaxReadFilePDF.ashx",
            data: formData,
            contentType: false,
            processData: false,
            async: false,
            success: function (response) {
                alert("Thêm mới kế hoạch thành công")
            },
            error: function (xhr, status, error) {
                alert('Error: ' + error);
                console.log("Tới đây 2")
            }
        });
    });
});