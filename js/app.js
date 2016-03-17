$(document).ready(function() {
    // Add item entered into text input to list when user clicks green button
    $('.add-item').click(function() {
        $('.list-area').prepend('<li><div class="box"><i class="fa fa-check"></i></div><p class="list-item">' + $('input').val() + '</p><div class="reorder btn"><i class="fa fa-bars"></i></div><button class="delete btn"><i class="fa fa-times"></i></button></li>');
        $('input').val("").focus();
    });
    // Remove this li parent and all children when user clicks red button
    $('ul').on('click', '.delete', function(event) {
        $(this).closest('li').remove();
    });
    // Check box and strike through list item on box click
    $('ul').on('click', '.box', function(event) {
        $(this).children('i').toggleClass('checked');
        $(this).siblings('p').toggleClass('done');
    });
    // Re order list items on click
   
    
    $("ul").sortable({
        disabled: true
    });

    $("ul").on("mousedown", ".reorder", function() {
        $("ul").sortable({
            axis: "y",
            disabled: false
        });

    });

    $("ul").on("mouseup", function() {
        $("ul").sortable({
            disabled: true
        });
    });
    
    
    
});