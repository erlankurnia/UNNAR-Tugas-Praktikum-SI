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

	// Mencetak pada console Browser
	console.log("Panjang Array : inputFields = " + inputFields.length);

	for(var num = 0; num < inputFields.length; num++)
	{
		var printInputFields = "#" + inputFields[num];
		console.log(inputFields[num] + " dengan label " + labelForId[num] + " : " + $(inputFields[num]).val());
	}
	/* Mencetak pada console Browser */

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