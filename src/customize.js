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

$(".close-modal").on("click", function () {
    $("#search-exercise").val("");
    $("#rounds").val(0);
    $(".exercise-img").attr("class", "exercise-img"); 
});




