/* Kode JQuery */

$('#loginBtn').click(function login()
{
	// Lokasi file json
	var jsonLocation = "json/data.json";
	// Mengambil nilai username dari user
	var filledUsername = $('#username').val();
	// Mengambil nilai password dari user
	var filledPassword = $('#password').val();

	// Mendapatkan data admin dari file .json
	$.ajax(
	{
		url: jsonLocation,
		dataType: 'json',
		
		success: function(data)
		{
			// Mengambil nilai dari file json
			savedUsername = data.account.username;			// Auto Global variabel
			savedPassword = data.account.password;			// Auto Global variabel

			// Percabangan
			if (filledUsername == "" || filledPassword == "")
			{
				alert("Username dan Password tidak boleh kosong");
			}
			else
			{
				if (filledUsername == savedUsername && filledPassword == savedPassword)
				{
					window.location.href = "home.html";
				}
				else
				{
					if(filledUsername == savedUsername && filledPassword != savedPassword)
					{
						alert("Password yg dimasukkan salah");
					}
					else if(filledUsername != savedUsername)
					{
						alert("Username tidak terdaftar");
					}
				}
			}
			// Percabangan

		},

		error: function()
		{
			alert("Gagal memuat data pada");
		}
	});
	// Mendapatkan data admin dari file .json
});
/* Kode JQuery */



/* Script yg lain
$('#loginBtn').click(function login()
{
	$.ajax(
	{
		// Mendapatkan data admin dari file .json
		type: 'GET',
		url: jsonLocation,
		processData: true,
		data: {},
		dataType: "json",

		success: function (data)
		{
			processData(data);
		}

		error: function()
		{
			alert("Gagal memuat data !!");
		}
	});


	function processData(data)
	{
		// Lokasi file json
		jsonLocation = "http://localhost:8080/noe/json/data.json";
		// Mengambil nilai username dari user
		var filledUsername = $('#username').val();
		// Mengambil nilai password dari user
		var filledPassword = $('#password').val();
		// Mengambil nilai dari file json
		savedUsername = data.username;			// Auto Global variabel
		savedPassword = data.password;			// Auto Global variabel

		// Percabangan
		if (filledUsername == "" || filledPassword == "")
		{
			alert("Username dan Password tidak boleh kosong");
		}
		else
		{
			if (filledUsername == savedUsername && filledPassword == savedPassword)
			{
				window.location.href = "home.html";
			}
			else
			{
				if(filledUsername == savedUsername && filledPassword != savedPassword)
				{
					alert("Password yg dimasukkan salah");
				}
				else if(filledUsername != savedUsername)
				{
					alert("Username tidak terdaftar");
				}
			}
		}
		// Percabangan

	}
}

/* Script yg lain */