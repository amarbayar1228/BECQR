$(document).ready(function() {
    flatpickr(".date_1", {
        enableTime: false,
        defaultDate: new Date().fp_incr(0),
        dateFormat: "Y.m.d"
    });
    flatpickr(".date_2", {
        enableTime: false,
        defaultDate: "today",
        dateFormat: "Y.m.d"
    });

    getInbound();
});

var chart1;
var chartKpi;

function getInbound() {
    $(".inboundLoad .bxload").show();
    $.ajax({
        url: "https://sip1.clouds.mn/api/ezpay/inbound.php?sdate=" +
            $(".date_1").val() +
            "&edate=" +
            $(".date_2").val(),
        datatype: "JSON",
        crossDomain: true,
        type: "GET",
        success: function(data) {

            if (data.success) {
                chart1 = data.data_service;
                chartKpi = data.data_kpi
                var html6 = "";

                // // circle blue chart 
                // window.onload = function() {
                //     var can = document.getElementById('canvas33'),
                //         spanProcent = document.getElementById('procent'),
                //         c = can.getContext('2d');

                //     var posX = can.width / 2,
                //         posY = can.height / 2,
                //         fps = 1000 / 200,
                //         procent = 0,
                //         oneProcent = 360 / 100,
                //         result = oneProcent * 94;

                //     c.lineCap = 'round';
                //     arcMove();

                //     function arcMove() {
                //         var deegres = 0;
                //         var acrInterval = setInterval(function() {
                //             deegres += 1;
                //             c.clearRect(0, 0, can.width, can.height);
                //             procent = deegres / oneProcent;

                //             spanProcent.innerHTML = procent.toFixed();

                //             c.beginPath();
                //             c.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
                //             c.strokeStyle = '#b1b1b1';
                //             c.lineWidth = '10';
                //             c.stroke();

                //             c.beginPath();
                //             c.strokeStyle = '#3949AB';
                //             c.lineWidth = '10';
                //             c.arc(posX, posY, 70, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres));
                //             c.stroke();
                //             if (deegres >= result) clearInterval(acrInterval);
                //         }, fps);

                //     }
                // }

                // red blue google circle
                // var value1 = chart1.abandon_rate;
                // $(".chart").attr("data-percent", value1.toString());
                // $(function() {
                //     $('.chart').easyPieChart({});
                // });

                // google.charts.load('current', {
                //     'packages': ['corechart']
                // });
                // google.charts.setOnLoadCallback(drawChart);

                // function drawChart() {
                //     var data = google.visualization.arrayToDataTable([
                //         ['Task', 'Hours per Day'],
                //         ['Үйлчилсэн дуудлага', chart1.call_answered],
                //         ['Алдсан дуудлага', chart1.call_unanswered]
                //     ]);
                //     var options = {
                //         'title': 'Дуудлагын нийт тоо: ' + chart1.call_count,
                //         'width': 850,
                //         'height': 200,
                //         'fontSize': 15,
                //     };
                //     var chart = new google.visualization.PieChart(document.getElementById('piechart'));
                //     chart.draw(data, options);
                // }



                //**************************data_kpi Irsen duudlaga**********************
                html6 += "<td>" + JSON.stringify(chartKpi['12001'].counts) + "</td>";
                html6 += "</tr>";
                $("#counts").html(html6);

                // Dewshil
                console.log("haha" + chart1.service_level);
                var idUtga2 = '<span>' + chart1.service_level + '%</span>';
                $("#utga2").html(idUtga2);
                var idUtga = '<div class="progress-bar bg-white" role="progressbar" style="width:' + chart1.service_level + '% " aria-valuenow="' + chart1.service_level + '" aria-valuemin="0" aria-valuemax="100">' + chart1.service_level + ' </div>';
                $("#utga").html(idUtga);




            }
        },
    });
}