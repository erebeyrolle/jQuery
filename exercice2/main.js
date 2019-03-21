var text = document.getElementById('texte_contenu');

var button = document.getElementById('green');
button.addEventListener("click", function(){
    text.style.color = "green";
});

var button = document.getElementById('blue');
button.addEventListener("click", function(){
        text.style.color = "blue";
});

$("#orange").click(function(){
    $(text).css('color','orange');});


$("#noir").on('click',black);
function black(){
    $(text).css('color','black');
}

$("#violet").on('click',function(){
    $(text).css('color','violet');});
