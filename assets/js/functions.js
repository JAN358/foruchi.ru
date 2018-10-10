(function ($) {

  $(document).ready(function () {

    $('inpyt[type=text]').mask("9?9", {placeholder: ""});

    var a, b, c, m, d, vt, ot, addot, endadd;
    a = getRandomFloat(6,10);
    c = getRandomFloat(11,15);
    b = c - a;
    m = 40;
    $('.addend_1').text(a);
    $('.addend_2').text(b);
    $('.answer input').hide();
    $('input#addend2').hide();
    $('.graph_addend2').hide();
    $('#addend1').focus();

    vt = a * m;
    $('.wrap_addend1').css('width', vt);
    d = (Math.sqrt((Math.pow(vt, 2))/2));
    ot = (vt - d)/2;
    addot = vt;
    $('.graph_addend1 .graph').css({'width':d - 6,'height':d - 6,'bottom':-vt/2 + ot,'left':ot + m - 6});

    vt = b * m;
    $('.wrap_addend2').css('width', vt);
    d = (Math.sqrt((Math.pow(vt, 2))/2));
    ot = (vt - d)/2;
    $('.graph_addend2 .graph').css({'width':d - 6,'height':d - 6,'bottom':-vt/2 + ot, 'left':addot});

    $('#otvet').attr('value', c);
    $('#otvet').attr('class', ot + m  - 12);

    $(".button").click(function(){
        sendAjaxForm('result_form', 'ajax_form', 'assay.php');
        return false; 
    });

    $("#addend1").keypress(function(e){
       if(e.keyCode==13){
       sendAjaxForm('result_form', 'ajax_form', 'assay.php');
       return false; 
       }
     });
    $("#addend2").keypress(function(e){
       if(e.keyCode==13){
       sendAjaxForm('result_form', 'ajax_form', 'assay.php');
       return false; 
       }
     });
    $("#answer").keypress(function(e){
       if(e.keyCode==13){
       sendAjaxForm('result_form', 'ajax_form', 'assay.php');
       return false; 
       }
     });

  });

}(jQuery));

function getRandomFloat(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function sendAjaxForm(result_form, ajax_form, url) {
	var data = $("#"+ajax_form).serialize();
    var a, b, c;
    a = $('.addend_1').text();
    b = $('.addend_2').text();
    c = $('#otvet').attr('value');
    pol = parseInt($('.graph_addend2 .graph').css('left')) + parseInt($('#otvet').attr('class'));
    $.ajax({
        url:      url,
        type:     "POST",
        dataType: "html",
        data: data,
        success: function(response) {
        	result = $.parseJSON(response);
            if($('#otvet').attr('placeholder') == 1){
                if(result.addend1 == a){
                    $('.out').html('Верно!');
                    $('input#addend2').show();
                    $('.graph_addend2').show();
                    $('.graph_addend2 .graph').css({'left': pol});
                    $('input#addend1').attr('disabled', 'disabled');
                    $('#otvet').attr('placeholder', 2);
                    $('input#addend1').removeClass('error_inp');
                    $('input#addend1').removeClass('error_bor');
                    $('#addend2').focus();
                } else if(result.addend1 ==''){
                    $('.out').html('Введите ответ!');
                    $('input#addend1').addClass('error_bor'); 
                    $('input#addend1').removeClass('error_inp'); 
                    $("input#addend1").focus();
                } else{
                     $('input#addend1').addClass('error_inp'); 
                     $('input#addend1').removeClass('error_bor'); 
                    $('.out').html('Не верно!');
                }

            } else if($('#otvet').attr('placeholder') == 2){
                if(result.addend2 == b){
                    $('.out').html('Верно!');
                    $('.answer input').show();
                    $('.answer .qwest').hide();
                    $('input#addend2').attr('disabled', 'disabled');
                    $('#otvet').attr('placeholder', 3);
                    $('input#addend2').removeClass('error_inp');
                    $('#answer').focus();
                } else if(result.addend2==''){
                    $('.out').html('Введите ответ!');
                    $('input#addend2').addClass('error_bor'); 
                    $('input#addend2').removeClass('error_inp');
                    $("input#addend2").focus();
                } else{
                    $('input#addend2').addClass('error_inp'); 
                    $('input#addend2').removeClass('error_bor');
                    $('.out').html('Не верно!');
                } 
            } else if($('#otvet').attr('placeholder') == 3){
                if(result.answer == c){
                    $('input#answer').removeClass('error_inp');
                    $('input#answer').attr('disabled', 'disabled');
                    $('input[type=button]').hide();
                    $('.out').html('Поздравляем! Вы справились с заданием!');                    
                } else if(result.answer==''){
                    $('.out').html('Введите ответ!');
                    $('input#answer').addClass('error_bor'); 
                    $('input#answer').removeClass('error_inp');
                     $("input#answer").focus();
                } else{
                    $('input#answer').addClass('error_inp'); 
                    $('input#answer').removeClass('error_bor');
                    $('.out').html('Не верно!');
                }
            }
    	},
    	error: function(response) {
            $('.out').html('Ошибка. Данные не отправлены.');
    	}
 	});
};