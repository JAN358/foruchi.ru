(function ($) {

  $(document).ready(function () {

	var a, b, c;
	a = getRandomFloat(6,10);
	c = getRandomFloat(11,15);
	b = c - a;

	$('.addend_1').text(a);
	$('.addend_2').text(b);
	$('.answer').text(c);

	$("#form").click(function(){
		sendAjaxForm('result_form', 'ajax_form', 'assay.php');
		return false; 
	})

  });

  	function getRandomFloat(min, max) {
	  return Math.floor(Math.random() * (max - min)) + min;
	}

	function sendAjaxForm(result_form, ajax_form, url) {
	    $.ajax({
	        url:      url,
	        type:     "POST",
	        dataType: "html",
	        contentType: "application/json; charset=utf-8",
	        data: $("#"+ajax_form).serialize(),
	        success: function(response) {
	        	result = $.parseJSON(response);
	        	$('.out').html('Первый: '+result.addend1+'<br>Второй: '+result.addend1);
	    	},
	    	error: function(response) {
	            $('.out').html('Ошибка. Данные не отправлены.');
	    	}
	 	});
	}

}(jQuery));