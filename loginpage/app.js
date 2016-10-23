$( document ).ready(function() {

	$('#form-tabs a[href="#login"]').tab('show');

	$(':input', '#registration-form').each(function() {
		
		var value=$.trim($(this).val());

		if(value.length==0)
		{
			$( this ).focus();
			return false;
		}

	});

});

$("#i-agree").click(function(){
	$("#term_agree").prop("checked", true);
	$('#terms').modal('hide');
});