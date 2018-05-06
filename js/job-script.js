$('#submitBtn').click(function()
{
	// Deklarasi variabel untuk input value, label value, input status, kondisi pengisian
	var inputFields = [];
	var labelForId = [];
	var indexInput = 0;

	// Mendapatkan semua input form yg ada pada halaman html
	$('input').each(function()
	{
		inputLabelID = $(this).attr('id');
		
		// Mengecek input form telah terisi atau tidak
		if($(this).val() != "" && $(this).val() != undefined && $(this).val() != null && $(this).val() != 0)
		{
			// Menambahkan komponen didalam halaman html (Untuk menampilkan kondisi setelah melakukan Submit)
			$('div#notifSubmition').empty();
			$('#notifSubmition').append('<div class="notifSubmition col-sm-12"><h4 class="text-center">Data berhasil disimpan.</h4></div>');
			$('div.notifSubmition').addClass('notifSubmition notifSuccess');

			return false;
		}
		else
		{
			$('label.labelInput').each(function()
			{
				if($(this).text() == inputLabelID)
				{
					$('div#notifSubmition').empty();
					$('#notifSubmition').append('<div class="notifSubmition col-sm-12"><h4 class="text-center">' + $(this).text() + ' tidak boleh kosong.</h4></div>');
					$('div.notifSubmition').addClass('notifSubmition notifFailed');

					return false;
				}
			});
		}
	});

	// Mencetak pada console Browser
	console.log("Panjang Array : inputFields = " + inputFields.length);

	for(var num = 0; num < inputFields.length; num++)
	{
		var printInputFields = "#" + inputFields[num];
		console.log(inputFields[num] + " dengan label " + labelForId[num] + " : " + $(inputFields[num]).val());
	}
	// Mencetak pada console Browser 
});
