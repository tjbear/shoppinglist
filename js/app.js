$(document).ready(function() {
    
    // Put focus on input box on load
    $('input').val("").focus();
    
    
    
    // Add item entered into text input to list when user clicks green button
    $('.add-item').click(function() {
        // Show error code if input empty
        if( $('input').val().trim().length == 0 ) {

            $('.error').css('display', 'block');
            
            $('input').val("").focus();
            
        }
        
        else {
        
            $('.list-area').prepend('<li><div class="box"><i class="fa fa-check"></i></div><p class="list-item">' + $('input').val() + '</p><button class="delete btn"><i class="fa fa-times"></i></button></li>');

            $('input').val("").focus();

            $('.error').css('display', 'none');
            
        };
        
    });
    
    
    
    // Remove list item when user clicks red button
    $('ul').on('click', '.delete', function(event) {
        $(this).closest('li').remove();
        $('input').focus();
    });
    
    
    
    // Toggle check box and strikethrough text on box click
    $('ul').on('click', '.box', function(event) {
        $(this).children('i').toggleClass('checked');
        $(this).siblings('p').toggleClass('done');
        $('input').focus();
    });
    
    
    
    // Re order list items on click
    $("ul").sortable({ axis: "y" });
    
    
    
    // Add Item Hover State
    $('.add-item').mouseenter(function() {
        $(this).css('background-color', 'rgb(46, 204, 113');
        $('i.fa-plus').css('color', 'rgb(0, 0, 0');
    })
    .mouseleave(function() {
        $(this).css('background-color', 'rgba(46, 204, 113, .7');
        $('i.fa-plus').css('color', 'rgba(0, 0, 0, .7');
    });
    
    
    
    // Delete Item Hover State
    $('ul').on('mouseenter', '.delete', function(event) {
        $(this).css('background-color', 'rgb(217, 30, 24)');
        $(this).children('i.fa-times').css('color', 'rgb(0, 0, 0');
    });
    
    $('ul').on('mouseleave', '.delete', function(event) {
        $(this).css('background-color', 'rgba(217, 30, 24, .7)');
        $(this).children('i.fa-times').css('color', 'rgba(0, 0, 0, .7');
    });
        
});

// Add item entered into text input to list when user presses Enter
$(document).keypress(function(e) {
    
    if(e.which == 13) {
        // Show error code if input empty
        if( $('input').val().trim().length == 0 ) {

            $('.error').css('display', 'block');
            
            $('input').val("").focus();
            
        }
        
        else {
        
            $('.list-area').prepend('<li><div class="box"><i class="fa fa-check"></i></div><p class="list-item">' + $('input').val() + '</p><div class="reorder btn"><i class="fa fa-bars"></i></div><button class="delete btn"><i class="fa fa-times"></i></button></li>');

            $('input').val("").focus();

            $('.error').css('display', 'none');
            
        };
    }
    
});