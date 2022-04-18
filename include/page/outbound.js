// $(document).ready(function() {
//     flatpickr(".date_1", {
//         enableTime: false,
//         defaultDate: new Date().fp_incr(0),
//         dateFormat: "Y.m.d"
//     });
//     flatpickr(".date_2", {
//         enableTime: false,
//         defaultDate: "today",
//         dateFormat: "Y.m.d"
//     });
//     getOutbound();
//     var chart2;
// });

// function getOutbound() {
//     $(".outboundLoad .bxload").show();
//     $.ajax({
//         url: "https://sip1.clouds.mn/api/ezpay/outbound.php?sdate=" +
//             $(".date_1").val() +
//             "&edate=" +
//             $(".date_2").val(),
//         datatype: "JSON",
//         crossDomain: true,
//         type: "GET",
//         success: function(data) {
//             if (data.success) {
//                 chart2 = data.data_service;
//                 chartKpiO = data.data_kpi;
//                 var html = "";
//                 var html3 = "";
//                 var garsanNiitDuudlaga = "";
//                 var yrisanNiitDuudlaga = "";

//                 google.charts.load('current', {
//                     'packages': ['corechart']
//                 });
//                 google.charts.setOnLoadCallback(drawChart);

//                 function drawChart() {
//                     var data = google.visualization.arrayToDataTable([
//                         ['Task', 'Үйлчилсэн'],
//                         ['Амжилттай', chartKpiO[12001].answered],
//                         ['Амжилтгүй', chartKpiO[12001].not_answered],
//                     ]);
//                     // Optional; add a title and set the width and height of the chart
//                     var options = {
//                         'title': 'Дуудлагын нийт тоо: ' + chartKpiO[12001].counts,
//                         'width': 500,
//                         'height': 210,
//                         'fontSize': 17,
//                         'backgroundColor': '#F1F1F1',
//                         'fontName': "'Roboto Condensed', sans-serif",
//                     };
//                     // Display the chart inside the <div> element with id="piechart"
//                     var chart = new google.visualization.PieChart(document.getElementById('piechartOut'));
//                     chart.draw(data, options);
//                 }
//                 console.log("sssssssssssssssssss" + JSON.stringify(chartKpiO['12001'].counts));
//                 garsanNiitDuudlaga += "<tr>";
//                 garsanNiitDuudlaga += "<td>" + JSON.stringify(chartKpiO['12001'].counts) + "</td>";
//                 garsanNiitDuudlaga += "</tr>";
//                 $("#garsanDuudlaga").html(garsanNiitDuudlaga);
//                 console.log("sssssssssssssssssss=> " + JSON.stringify(chartKpiO['12001'].answered));
//                 yrisanNiitDuudlaga += "<tr>";
//                 yrisanNiitDuudlaga += "<td>" + JSON.stringify(chartKpiO['12001'].answered) + "</td>";
//                 yrisanNiitDuudlaga += "</tr>";
//                 $("#yrisanDuudlaga").html(yrisanNiitDuudlaga);
//                 html3 += "<tr>";
//                 html3 += "<td>" + data.data_service.call_count + "</td>";
//                 html3 += "<td>" + data.data_service.call_answered + "</td>";
//                 html3 += "<td>" + data.data_service.call_unanswered + "</td>";
//                 html3 += "<td>" + data.data_service.abandon_rate + "%" + "</td>";
//                 html3 += "<td>" + data.data_service.service_level + "%" + "</td>";
//                 html3 += "</tr>";
//                 $("#chart33").html(html3);

//                 $.each(data.data_calls, function(i, r) {
//                     console.log("data=-=============>" + data.data_calls);
//                     html += "<tr>";
//                     html += "<td>" + r.calldate + "</td>";
//                     html += "<td>" + r.src + "</td>";
//                     html += "<td>" + r.dst + "</td>";
//                     html += "<td>" + r.cnum + "</td>";
//                     html += "<td>" + r.duration + "</td>";
//                     html += "<td>" + r.billsec + "</td>";
//                     if (r.disposition == "ANSWERED") {
//                         html +=
//                             '<td>Амжилттай</td>';
//                     } else {
//                         html += '<td style="background:#f1f1f1"> Амжилтгүй </td>';
//                     }
//                     html += "</tr>";
//                 });
//                 $("#out_list").html(html);
//                 $(".outboundLoad .bxload").fadeOut(300);
//             }
//         },
//     });
// }