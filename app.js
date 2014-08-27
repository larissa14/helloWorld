/**
 * Created by tzhbala4 on 27.08.2014.
 */
console.info('hello');

$( 'h2' ).addClass( 'jquery-title' );

$( 'button' ).on( 'click', function(  ){

    var $box = $( '#box');

    if($box.hasClass('small-box') ){
    $box.removeClass( 'small-box')
        .addClass( 'big-box' )}
    else{
        $box.removeClass( 'big-box')
            .addClass( 'small-box' )}

});