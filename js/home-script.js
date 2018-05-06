$('button').click(function()
{
	/* Fungsi Button Pada Home */
	var idPage = $(this).attr('id');

	if(idPage == "jobBtn")
	{
		window.location.href = "data/job.html";
	}
	else if(idPage == "employBtn")
	{
		window.location.href = "data/employee.html";
	}
	else if (idPage == "departBtn")
	{
		window.location.href = "data/department.html";
	}
	/* Fungsi Button Pada Home */

});

