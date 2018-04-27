import { Backend } from "./backend.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {

  $('#doctor-form').on('submit', function(e){
    e.preventDefault();

    let backend = new Backend();
    console.log(backend);

    console.log('it worked');
  });

  // make a request from better doctor api
  // backend.request('headache', 'Gao');
});
