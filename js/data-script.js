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