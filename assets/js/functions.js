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
	  addend1 = $('input[name=addend1]').value();
	  addend2 = $('input[name=addend2]').value();
	  	$.ajax({
	    type: "POST",
	    url: "assay.php",
	    addend1: addend1,
	    addend2: addend2,
	    success: function(addend1,addend2) {
	          $('.out').text(data);
	       }
	    });   
	});

  });

}(jQuery));