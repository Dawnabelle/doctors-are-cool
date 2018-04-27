import $ from 'jquery';

class Backend {

  constructor() {
    this.key = process.env.exports.apiKey;
  }

  request() {

    // make an ajax request
    $.get({
      url: 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=18807be3061c0f30d9dfd528469f3b49',
      success: function(data){
        console.log(data);
      }
    });
  }
}

export { Backend };
