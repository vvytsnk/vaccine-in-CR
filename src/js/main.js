$(document).ready(function () {
   $.ajax('https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/zakladni-prehled.json')
       .done((response) => {
           const data = response.data[0];
           const circleSection = $('.circle-section');

           circleSection.find('[js-voc]').text(
               data.vykazana_ockovani_celkem.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
           );

           const dateSplit = data.datum.split('-');

           circleSection.find('[js-date]').text(`${dateSplit[2]}.${dateSplit[1]}.${dateSplit[0]}`);
       });
});
