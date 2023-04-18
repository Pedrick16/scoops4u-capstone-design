$(document).ready(function () {
    $('#btn-print').on('click', function (e) {
        window.print()
        $('#btn-submit').removeAttr("disabled");
    })

})