import { Backend } from "./backend.js";
import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {

  let backend = new Backend();

  // handler form input
  $('.doctor-form').on('submit', function(e){
    e.preventDefault();
    $('.results').show();
    let doctorName = $('input[name="doctor"]').val() || '';
    let ailment = $('input[name="ailment"]').val() || '';

    // make a request from better doctor API
    backend.request(doctorName, ailment, function(data){
      let resultElm = $('.your-results');

      // clear previous results
      resultElm.html('');

      // account for error
      if ('status' in data) {
        resultElm.html("I'm sorry... I'm so, so sorry. Error: " + data.status + ": " + data.statusText);
      }

      // when no results, output message
      else if (!data.meta.total) {
        resultElm.html("I'm sorry... I'm so, so sorry. Your query returned no results.");
      }

      // when results contain doctors
      else if (data.meta.total > 0) {
        let resultString = "";

      // iterate over results to form output resultString
      $.each(data.data, function(idx, doctor){
        let firstName = doctor.profile.first_name || "";
        let lastName = doctor.profile.last_name || "";
        let addressStreet = doctor.practices[0].visit_address.street || "";
        let addressCity = doctor.practices[0].visit_address.city || "";
        let addressState = doctor.practices[0].visit_address.state || "";
        let addressZip = doctor.practices[0].visit_address.zip || "";
        let address = addressStreet + ', ' + addressCity + ', ' + addressState + ', ' + addressZip || "";
        let phoneNumber = doctor.practices[0].phones[0].number || "";
        let website = doctor.practices[0].website || "";
        let newPatients = doctor.practices[0].accepts_new_patients || "";

        // test if doctor accepts new patients and replace with corresponding answer
        if (newPatients) {
          newPatients = "Yes";
        } else {
          newPatients = "No";
        }
        // build result string
        resultString +=
          '<p class="doctor-item">' +
          firstName + ' ' + lastName + ' | ' +
          phoneNumber + ' | ' +
          address + ' | ' +
          website + ' | ' +
          'Accepting new patients? ' + newPatients +
          '</p>';

      });

        // output the restult to html
        resultElm.html(resultString);
      }

    });
  });

});
