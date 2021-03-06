import $ from 'jquery';

class Backend {

  constructor() {
    this.apiKey = process.env.exports.apiKey;
  }
  // main api request handler
  request( doctorName, ailment, callback ) {

    // make an ajax request
    $.get({
      url: 'https://api.betterdoctor.com/2016-03-01/doctors?last_name=' + doctorName + '&query=' + ailment + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + this.apiKey,
      success: function(data){
        callback(data);
      },
      error: function(data){
        callback(data);
      }
    });
  }
}

export { Backend };
