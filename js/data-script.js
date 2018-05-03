$('#submitBtn').click(function()
{
	var inputFields = [];
	var inputFilled = [];
	var labelForId = [];
	var indexInput = 0;

	$('input').each(function()
	{
		inputFields[indexInput] = $(this).attr('id');
		indexInput++;
	});

	indexInput = 0;
	$('label.labelInput').each(function()
	{
		labelForId[indexInput] = $(this).text();
		indexInput++;
	});

	console.log("Panjang Array : inputFields = " + inputFields.length + " dan inputFilled = " + inputFilled.length);
	
	for(var num = 0; num < inputFields.length; num++)
	{
		console.log(inputFields[num] + " dengan label " + labelForId[num] + " : " + inputFilled[num]);
	}

	for(var indexNum = 0; indexNum < inputFields.length; indexNum++)
	{
		inputId = $(inputFields[indexNum]).attr('id');

		if($(inputFields[indexNum]).val() == "" || $(inputFields[indexNum]).val() == 0 || $(inputFields[indexNum]).val() == null)
		{
			var filledCondition;
			for(var num = 0; num < inputFields.length; num++)
			{
				// Mendapatkan nilai true/false pada tiap form input yang terisi/tidak
				if ($("input." + inputId).val() == "")
				{
					inputFilled[num] = false;
				}
				else
				{
					inputFilled[num] = true;
				}

				// Membandingkan semua form input dengan kondisi '&&'(Tiap kondisi harus bernilai benar)
				if (num == 1)
				{
					filledCondition = inputFilled[num];
				}
				else
				{
					filledCondition = inputFilled[num] && inputFilled[num-1];
				}
			}

			if(!filledCondition)
			{
				$('div#notifSubmition').empty();
				$('#notifSubmition').append('<div class="notifSubmition col-sm-12"><h4 class="text-center">' + labelForId[indexNum] + ' tidak boleh kosong.</h4></div>');
				$('div.notifSubmition').addClass('notifSubmition notifFailed');

				return false;
			}
		}
		else if ($(inputFields[indexNum]).val() != "" || $(inputFields[indexNum]).val() != 0 || $(inputFields[indexNum]).val() != null)
		{
			var filledCondition;
			for(var num = 0; num < inputFields.length; num++)
			{
				// Mendapatkan nilai true/false pada tiap form input yang terisi/tidak
				if ($("input." + inputId).val() == "")
				{
					inputFilled[num] = false;
				}
				else
				{
					inputFilled[num] = true;
				}

				// Membandingkan semua form input dengan kondisi '&&'(Tiap kondisi harus bernilai benar)
				if (num == 1)
				{
					filledCondition = inputFilled[num];
				}
				else
				{
					filledCondition = inputFilled[num] && inputFilled[num-1];
				}
			}

			if(filledCondition)
			{
				$('div#notifSubmition').empty();
				$('#notifSubmition').append('<div class="notifSubmition col-sm-12"><h4 class="text-center">Data berhasil disimpan.</h4></div>');
				$('div.notifSubmition').addClass('notifSubmition notifSuccess');

				return false;
			}
		}	
	}

});