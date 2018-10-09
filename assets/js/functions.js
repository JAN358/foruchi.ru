(function ($) {

function getRandomFloat(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

  $(document).ready(function () {

	var a, b, c;
	a = getRandomFloat(6,10);
	c = getRandomFloat(11,15);
	b = c - a;

	$('.addend_1').text(a);
	$('.addend_2').text(b);
	$('.answer').text(c);

	$("#form").on( "submit", function( event ) {
	  event.preventDefault();
	  addend1 = $('input[name=addend1]').attr('value');
	  addend2 = $('input[name=addend2]').attr('value');
	  alert(addend1);
	  	$.ajax({
	    type: "POST",
	    url: "assay.php",
	    addend1: addend1,
	    addend2: addend2,
	    success: function(data) {
	          $('.out').text(data);
	       }
	    });   
	});

  });

}(jQuery));