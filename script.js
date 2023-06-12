//variables
let nome = "";
let title = "";
let guide = "";
let weapon = "";
let map = "";

let msgTech = "";

//Main Path
$('#start').click(function(e){
    $('#card-0').addClass("hide");
    $('#card-1').removeClass("hide");
});
        
$('#next').click(function(e){
    $('#card-1').addClass("hide");
    $('#card-2').removeClass("hide");
});

$('#n1').click(function(e){
    $('#card-2').addClass("hide");
    $('#card-3').removeClass("hide");
});

$('#tech').click(function(e){
    title = "Garota de Programa"
    $('.card-main').addClass("hide");
    $('.card-tech').removeClass("hide");
});

$('#games').click(function(e){
    title = "Lady das Noites Mal Dormidas"
    $('.card-main').addClass("hide");
    $('.card-games').removeClass("hide");  
});

$('#movies').click(function(e){
    title = "The Blockbuster"
    $('.card-main').addClass("hide");
    $('.card-movies').removeClass("hide");
});

$('#music').click(function(e){
    title = "Mr. Replay Replay"
    $('.card-main').addClass("hide");
    $('.card-music').removeClass("hide");
});

$('#gift').click(function(e){
    title = "Present"
    $('.card-main').addClass("hide");
    $('.card-gift').removeClass("hide");
});

//Tech Path

$('#tech-n1').click(function(e){
  $('#card-tech-0').addClass("hide");
  $('#card-tech-1').removeClass("hide");
});

/*Guide Variables*/
$('#chrome').click(function(e){
  guide = "O Devorador de RAM"
});

$('#firefox').click(function(e){
  guide = "A Raposa Laranja"
});

$('#safari').click(function(e){
  guide = "A Bússula"
});

$('#ie').click(function(e){
  guide = "O Navegador \"Padrão\""
});

/*Weapon Variables*/
$('#python').click(function(e){
  weapon = "Carinhos"
});

$('#js').click(function(e){
  weapon = "Beijos"
});

$('#java').click(function(e){
  weapon = "Abraços"
});

$('#php').click(function(e){
  weapon = "Brincadeiras"
});

/*MAP Variables*/
$('#microsoft').click(function(e){
  map = "viajar para Santa Maria comer uma pizza da Santa Mania"
});

$('#apple').click(function(e){
  map = "ir comprar roupas novas nos shoppings"
});

$('#facebook').click(function(e){
  map = "ir no praça nova ou no royal assistir um cineminha"
});

$('#amazon').click(function(e){
  map = "viajar para Santa Maria comer o xis que tanto te falo e ainda não comemos (ou um BK :D)"
});

$('#tech-n2').click(function(e){
  $('#card-tech-1').addClass("hide");
  $('#card-tech-2').removeClass("hide");
});

$('#tech-n3').click(function(e){
  $('#card-tech-2').addClass("hide");
  $('#card-tech-3').removeClass("hide");
});

$('#tech-n4').click(function(e){
  $('#card-tech-3').addClass("hide");
  $('#card-tech-4').removeClass("hide");
});

$('#tech-n5').click(function(e){
  $('#card-tech-4').addClass("hide");
  $('#card-tech-5').removeClass("hide");
});

/*GAMES*/
$('#games-n1').click(function(e){
  $('#card-games-0').addClass("hide");
  $('#card-games-1').removeClass("hide");
});

$('#games-n2').click(function(e){
  $('#card-games-1').addClass("hide");
  $('#card-games-2').removeClass("hide");
});

/*MOVIES*/
$('#movies-n1').click(function(e){
  $('#card-movies-0').addClass("hide");
  $('#card-movies-1').removeClass("hide");
});

$('#movies-n2').click(function(e){
  $('#card-movies-1').addClass("hide");
  $('#card-movies-2').removeClass("hide");
});

/*MUSIC*/
$('#music-n1').click(function(e){
  $('#card-music-0').addClass("hide");
  $('#card-music-1').removeClass("hide");
});

$('#music-n2').click(function(e){
  $('#card-music-1').addClass("hide");
  $('#card-music-2').removeClass("hide");
});

/*GIFT*/
$('#gift-n1').click(function(e){
  $('#card-gift-0').addClass("hide");
  $('#card-gift-1').removeClass("hide");
});

//Display name from input 
var $jqName = $('.name');
var $jqValue = $('.jqValue');

$jqName.on('input', function(event){
  $jqValue.html($jqName.val());
  nome = $jqName.val();
});

//Msg Tech
var $tech = $('.tech');
$('#tech-finish').click(function(e){
  msgTech = "Como " + title + " você tem adquirido atributos importantes para se tornar a melhor namorada hacker do mundo. " + guide + " está ao seu lado caso precise de ajuda. " + "Sua maestria em " + weapon + " será de extrema importância para ajudar a concluir os desafios do dia a dia, cuidar de todos os bichos de casa, lidar com hordas de zumbis no left 4 dead, passar fases do crash, projetar nossa futura casa e todo o combo que deixa seu namorado que já é bem \"doido\", mais doido ainda hahaha. Em caso de crises de tédio, podemos " + map + ".";
  $('#card-tech-4').addClass("hide");
  $('#card-tech-5').removeClass("hide");
  $tech.html(msgTech);
});