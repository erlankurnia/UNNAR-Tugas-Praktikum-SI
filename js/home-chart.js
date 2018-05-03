/* Chart */

var chart = null;
var dataPoints = [];

window.onload = function() 
{

  chart = new CanvasJS.Chart("chartContainer", 
  {
    animationEnabled: true,
    theme: "light2",
    title: 
    {
      text: "Pegawai per Departemen"
    },
    axisY: 
    {
      title: "Pegawai",
      titleFontSize: 24
    },
    data: 
    [{
      type: "column",
      yValueFormatString: "#,### Pegawai",
      dataPoints: dataPoints
    }]
  });

  $.getJSON("json/data-chart.json?callback=?", callback);
}

function callback(data) 
{
  for (var i = 0; i < data.ppd.length; i++) 
  {
    dataPoints.push(
    {
      label: data.ppd[i].departemen,
      y: data.ppd[i].pegawai
    });
  }
  chart.render(); 
}

/* Chart */
