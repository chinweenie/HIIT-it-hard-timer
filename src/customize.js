//set button id on click to hide first modal
$("#customizable-holder").on("click", function () {
    $("#modal1").modal('show');
})

$("#next").on("click", function () {
    $('#modal1').modal('hide');
});
//trigger next modal
$("#next").on("click", function () {
    $('#modal2').modal('show');
});

