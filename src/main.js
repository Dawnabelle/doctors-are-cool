import { Backend } from "./backend.js";
import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {

  let backend = new Backend();
  console.log(backend);

  // handler form input
  $('.doctor-form').on('submit', function(e){
    e.preventDefault();
    let doctorName = $('input[name="doctor"]').val() || '';
    let ailment = $('input[name="ailment"]').val() || '';

    // make a request from better doctor API
    backend.request(doctorName, ailment, function(data){

      console.log(data);

    });
  });

});
