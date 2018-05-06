/*
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

	// Mencetak pada console Browser
	console.log("Panjang Array : inputFields = " + inputFields.length + " dan inputFilled = " + inputFilled.length);

	for(var num = 0; num < inputFields.length; num++)
	{
		console.log(inputFields[num] + " dengan label " + labelForId[num] + " : " + inputFilled[num]);
	}
	// Mencetak pada console Browser

	for(var indexNum = 0; indexNum < inputFields.length; indexNum++)
	{
		if($(inputFields[indexNum]).val() == "" || $(inputFields[indexNum]).val() == undefined || $(inputFields[indexNum]).val() == null || $(inputFields[indexNum]).val() == 0)
		{
			var filledCondition;

			// Mendapatkan nilai true/false pada tiap form input yang terisi/tidak
			if ($(inputFields[indexNum]).val() == "" || $(inputFields[indexNum]).val() == undefined || $(inputFields[indexNum]).val() == null || $(inputFields[indexNum]).val() == 0)
			{
				inputFilled[indexNum] = false;
				console.log("Masuk dikondisi if pertama didalam if yg didalam for");
			}
			else
			{
				inputFilled[indexNum] = true;
				console.log("Masuk dikondisi else pertama didalam if yg didalam for");
			}

			// Membandingkan semua form input dengan kondisi '&&'(Tiap kondisi harus bernilai benar)
			if (indexNum == 0)
			{
				filledCondition = inputFilled[indexNum];
				console.log("Masuk dikondisi if kedua didalam if yg didalam for");
			}
			else
			{
				filledCondition = inputFilled[indexNum] && inputFilled[indexNum-1];
				console.log("Masuk dikondisi else kedua didalam if yg didalam for");
			}

			if(!filledCondition)
			{
				$('div#notifSubmition').empty();
				$('#notifSubmition').append('<div class="notifSubmition col-sm-12"><h4 class="text-center">' + labelForId[indexNum] + ' tidak boleh kosong.</h4></div>');
				$('div.notifSubmition').addClass('notifSubmition notifFailed');

				return false;
			}
		}
		else if ($(inputFields[indexNum]).val() != "" || $(inputFields[indexNum]).val() != undefined || $(inputFields[indexNum]).val() != null || $(inputFields[indexNum]).val() != 0)
		{
			var filledCondition;

			// Mendapatkan nilai true/false pada tiap form input yang terisi/tidak
			if ($(inputFields[indexNum]).val() == "")
			{
				inputFilled[indexNum] = false;
			}
			else
			{
				inputFilled[indexNum] = true;
			}

			// Membandingkan semua form input dengan kondisi '&&'(Tiap kondisi harus bernilai benar)
			if (indexNum == 1)
			{
				filledCondition = inputFilled[indexNum];
			}
			else
			{
				filledCondition = inputFilled[indexNum] && inputFilled[indexNum-1];
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


/* Percobaan 2 


$('#submitBtn').click(function()
{
	// Deklarasi variabel untuk input value, label value, input status, kondisi pengisian
	var inputFields = [];
	var inputFilled = [];
	var labelForId = [];
	var indexInput = 0;
	var filledCondition;

	// Mendapatkan semua input form yg ada pada halaman html
	$('input').each(function()
	{
		inputFields[indexInput] = $(this).attr('id');
		indexInput++;
	});

	// Mendapatkan label yg terhubung dengan input form
	indexInput = 0;
	$('label.labelInput').each(function()
	{
		labelForId[indexInput] = $(this).text();
		indexInput++;
	});

	// Mencetak pada console Browser 
	console.log("Panjang Array : inputFields = " + inputFields.length + " dan inputFilled = " + inputFilled.length);

	for(var num = 0; num < inputFields.length; num++)
	{
		console.log(inputFields[num] + " dengan label " + labelForId[num] + " : " + inputFilled[num]);
	}
	// Mencetak pada console Browser 

	for(var indexNum = 0; indexNum < inputFields.length; indexNum++)
	{
		// Mengecek input form telah terisi atau tidak
		if($(inputFields[indexNum]).val() == "" || $(inputFields[indexNum]).val() == undefined || $(inputFields[indexNum]).val() == null || $(inputFields[indexNum]).val() == 0)
		{
			inputFilled[indexNum] = false;
		}
		else
		{
			inputFilled[indexNum] = true;
		}

		// Membandingkan semua input form dengan kondisi '&&'(Tiap kondisi harus bernilai benar untuk menghasilkan nilai benar)
		for(var num = 0; num < inputFields.length; num++)
		{
			if (num == 0)
			{
				filledCondition = inputFilled[num];
				console.log("Index 0 Bernilai : " + filledCondition);
			}
			else
			{
				filledCondition = inputFilled[num] && inputFilled[num - 1];
				console.log("Index " + num +" Bernilai : " + filledCondition);
			}
		}

		// Menambahkan komponen didalam halaman html (Untuk menampilkan kondisi setelah melakukan Submit)
		if(filledCondition)
		{
			$('div#notifSubmition').empty();
			$('#notifSubmition').append('<div class="notifSubmition col-sm-12"><h4 class="text-center">Data berhasil disimpan.</h4></div>');
			$('div.notifSubmition').addClass('notifSubmition notifSuccess');

			return false;
		}
		else
		{
			$('div#notifSubmition').empty();
			$('#notifSubmition').append('<div class="notifSubmition col-sm-12"><h4 class="text-center">' + labelForId[indexNum] + ' tidak boleh kosong.</h4></div>');
			$('div.notifSubmition').addClass('notifSubmition notifFailed');

			return false;
		}

	}
});


/* Percobaan 3 


$('#submitBtn').click(function()
{
	// Deklarasi variabel untuk input value, label value, input status, kondisi pengisian
	var inputFields = [];
	var labelForId = [];
	var indexInput = 0;

	// Mendapatkan semua input form yg ada pada halaman html
	$('input').each(function()
	{
		inputFields[indexInput] = $(this).attr('id');
		indexInput++;
	});

	// Mendapatkan label yg terhubung dengan input form
	indexInput = 0;
	$('label.labelInput').each(function()
	{
		labelForId[indexInput] = $(this).text();
		indexInput++;
	});

	// Mencetak pada console Browser
	console.log("Panjang Array : inputFields = " + inputFields.length);

	for(var num = 0; num < inputFields.length; num++)
	{
		var printInputFields = "#" + inputFields[num];
		console.log(inputFields[num] + " dengan label " + labelForId[num] + " : " + $(inputFields[num]).val());
	}
	// Mencetak pada console Browser 

	for(var indexNum = 0; indexNum < inputFields.length; indexNum++)
	{
		// Mengecek input form telah terisi atau tidak
		if($(inputFields[indexNum]).val() != "" || $(inputFields[indexNum]).val() != undefined || $(inputFields[indexNum]).val() != null || $(inputFields[indexNum]).val() != 0)
		{
			if (indexNum == inputFields.length - 1)
			{
				// Menambahkan komponen didalam halaman html (Untuk menampilkan kondisi setelah melakukan Submit)
				$('div#notifSubmition').empty();
				$('#notifSubmition').append('<div class="notifSubmition col-sm-12"><h4 class="text-center">Data berhasil disimpan.</h4></div>');
				$('div.notifSubmition').addClass('notifSubmition notifSuccess');

				return false;
			}
			else
			{
				continue;
			}
		}
		else
		{
			$('div#notifSubmition').empty();
			$('#notifSubmition').append('<div class="notifSubmition col-sm-12"><h4 class="text-center">' + labelForId[indexNum] + ' tidak boleh kosong.</h4></div>');
			$('div.notifSubmition').addClass('notifSubmition notifFailed');

			return false;
		}
	}
});

/* Percobaan 4 */


$('#submitBtn').click(function()
{
	// Deklarasi variabel untuk input value, label value, input status, kondisi pengisian
	var inputFields = [];
	var labelForId = [];
	var indexInput = 0;

	// Mendapatkan semua input form yg ada pada halaman html
	$('input').each(function()
	{
		// Mengecek input form telah terisi atau tidak
		if($(this).val() != "" && $(this).val() != undefined && $(this).val() != null && $(this).val() != 0)
		{
			// Menambahkan komponen didalam halaman html (Untuk menampilkan kondisi setelah melakukan Submit)
			$('div#notifSubmition').empty();
			$('#notifSubmition').append('<div class="notifSubmition col-sm-12"><h4 class="text-center">Data berhasil disimpan.</h4></div>');
			$('div.notifSubmition').addClass('notifSubmition notifSuccess');
		}
		else
		{
			$('div#notifSubmition').empty();
			$('#notifSubmition').append('<div class="notifSubmition col-sm-12"><h4 class="text-center">Semua Form harus tersisi.</h4></div>');
			$('div.notifSubmition').addClass('notifSubmition notifFailed');
		}
	});
});