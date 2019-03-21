
var text = document.getElementById('texte_contenu');

$("#green").click(function(){
    $(text).removeClass('blue');
    $(text).addClass('green');});

$("#blue").click(function(){
    $(text).removeClass('green');
    $(text).addClass('blue');});

$("#bold").click(function(){
    $(text).addClass('gras');});

$("#ss_bold").click(function(){
    $(text).removeClass('gras');});

$("#italic").click(function(){
    $(text).toggleClass('italic');});