(function ($) {

  $(document).ready(function () {

	var a, b, c;
	a = getRandomFloat(6,10);
	c = getRandomFloat(11,15);
	b = c - a;

	$('.addend_1').text(a);
	$('.addend_2').text(b);
	$('.answer').text(c);

	$("#ajax_form").click(function(){
		sendAjaxForm('result_form', 'ajax_form', 'assay.php');
		return false; 
	})

  });

}(jQuery));

function getRandomFloat(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function sendAjaxForm(result_form, ajax_form, url) {
	var data = $("#"+ajax_form).serialize();
    $.ajax({
        url:      url,
        type:     "POST",
        dataType: "html",
        data: data,
        success: function(response) {
        	result = jQuery.parseJSON(response);
        	$('.out').html('Первый: '+result.addend1+'<br>Второй: '+result.addend2);
    	},
    	error: function(response) {
            $('.out').html('Ошибка. Данные не отправлены.');
    	}
 	});
};