$(document).ready(function($){

$("#green").click(function()
{
    $('li:first').text('Hello World');
});


$("#orange").click(function()
{
    var $addEnd=$('ul:eq(0) > li:eq(1)').text();
    $('ul:eq(0) > li:eq(1)').text($addEnd+'Ceci est un ajout.');
});  

$("#pink").click(function()
{
    $('ul:eq(0) > li:eq(2)').prepend('Ceci est un ajout.');
});

$("#blue").click(function()
{
    $('ul:eq(0)').append('<li>Je suis un nouvel li</li>');
    
});

$("#red").click(function()
{
    var $addUl=$('ul:eq(1)').html();
    //var $addUl=$('ul:eq(1)').clone();
    $('ul:eq(0)').prepend($addUl+'<p> </p>');

});

});
