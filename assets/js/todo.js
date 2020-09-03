$("#container").on("click", ".text", function() {
    $(this).toggleClass("completed");
});

$("#container").on("click", ".trash", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        if($(this).val !== "") {
            let todoItem = $(this).val();
            $(this).val("");
            $("#list").prepend('<div class="entry"><div class="trash"><i class="far fa-trash-alt" aria-hidden="true"></i></div><div class="text"> ' + todoItem + '</div></div>');
            trash();
        }
    }
});

$(".fa-edit").on("click", function() {
    $("input[type='text']").fadeToggle();
});

function trash() {
    let entryHeight = $(".entry").first().css("height");
    $(".trash").first().css("lineHeight", entryHeight);
}