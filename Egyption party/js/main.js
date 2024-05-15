$('#open').click(function(){
    if($('nav').css("left")=="0px"){
        $("nav").animate({'left':  `-=${$(".content").outerWidth(true)}`} , 500);
        $('.header .content').animate({"paddingLeft":"-280px"},500)
    }
    else{
        $('nav').animate({"left":"0px"},500)
        $('.header .content').animate({"paddingLeft":"280px"},500)
    }
})

$('.fa-xmark').click(function(){
    $("nav").animate({'left':  `-=${$(".content").outerWidth(true)}`} , 500);
    $('.header .content').animate({"paddingLeft":"-280px"},500)
})
let width = $(".colors").outerWidth(true);
$('.fa-gear').click(function(){
    if($('.gear').css("right")=="0px"){
        $('.gear').animate({'right': `-=${width}`} , 500);
    }
    else{
        $('.gear').animate({"right":"0px"},500)
    }
})
for(let i=0;i<4;i++){
    $('.singer-number').eq(i).click(function(){
        $('.singer-body').eq(i).slideToggle(500)
        $('.singer-body').eq(i).parent().siblings().find(".singer-body").slideUp(500);
    })
}

let chosenColor;
if(localStorage.getItem("colorC")==null){
    chosenColor='rgba(214, 46, 51,0.6)'
    localStorage.setItem("colorC",'rgba(214, 46, 51,0.6)')
}
else{
    chosenColor = localStorage.getItem("colorC")
    $('.arrow').css('background-color',chosenColor)
    $('#open').css('background-color',chosenColor)
    $('.icon').hover(function(){
        $(this).css('background-color',chosenColor)
    })
    $('.icon').mouseout(function(){
        $(this).css('background-color','transparent')
    })
    $('.change').css('background-color',chosenColor)
    $('.changec').css('color',chosenColor)

}
$('.colors span').click(function(e){
    chosenColor=$(e.target).css('background-color')
    localStorage.setItem("colorC",chosenColor)
    $('.arrow').css('background-color',chosenColor)
    $('#open').css('background-color',chosenColor)
    $('.icon').hover(function(){
        $(this).css('background-color',chosenColor)
    })
    $('.icon').mouseout(function(){
        $(this).css('background-color','transparent')
    })
    $('.change').css('background-color',chosenColor)
    $('.changec').css('color',chosenColor)
})

$('.arrow').click(function(){
    $('html,body').animate({'scrollTop':'0'},500)
})

let details = $("#open").offset().top;
$(window).scroll(function(){
    
    if($(window).scrollTop() > details -200)
    {
        $("#open").css('backgroundColor' , chosenColor);
        $("#open").css('padding' , '20px');
        $(".arrow").fadeIn(500);
    }
    else
    {
        $("#open").css('backgroundColor' , 'transparent');
        $("#open").css('padding' , '0px');
        $(".arrow").fadeOut(500);
    }
});

$('textarea').keyup(function(){
    if($('textarea').val().length < 100){
        $("#numberOfLetters").text(`${100-$('textarea').val().length}`)
        }else{
            $("#numberOfLetters").text(`your avaliable characters have finished`)
    }
})

$("a[href^='#'").click(function(e){
    let navlink=$(e.target).attr('href')
    let space=$(navlink).offset().top
    $('html, body').animate({"scrollTop":space}, 700);
})
function countDown(){
    var now = new Date()
    var eventDate=new Date(2024,8,9)

    var currentTime=now.getTime()
    var eventTime=eventDate.getTime()
    var remTime=eventTime - currentTime 

    var s=Math.floor(remTime/1000)
    var m= Math.floor(s/60)
    var h= Math.floor(m/60)
    var d=Math.floor(h/24)-30


    h %=24
    m %=60
    s %=60

    if(h<10){
        h="0"+h
    }
    else{h= 0 + h}
    if(m<10){
        m="0"+m
    }
    else{m= 0 + m}
    if(s<10){
        s="0"+s
    }
    else{s= 0 + s}

    $("#day").html(d + " D");    
    $("#hour").html(h + " h");    
    $("#minute").html(m + " m");    
    $("#second").html(s + " s");  

    setTimeout(countDown, 1000);
}
countDown();

$(document).ready(function(){
    $('#loading').fadeOut(1000)
    $('body').css('overflow-y','auto')
    $('#loading').remove()
})
