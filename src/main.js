import { Backend } from "./backend.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {
  let backend = new Backend();
  console.log('test', backend);
});
