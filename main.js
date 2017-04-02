//Add in external javacript file
$(document).ready(function () { //checks if html is fully loaded

	$("#compute").on("click", function (e) {
		e.preventDefault();
		var mango = parseFloat($("#mango").val());

		var total = calculate(mango)

		$("#results").val(total);

	});


});


function calculate(mango) {

	return ((mango * .53) * ((.75 * 1.20) - .75))

};
