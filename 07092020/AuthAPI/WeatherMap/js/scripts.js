var request = new XMLHttpRequest();
var url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=7e2417bf60e3b954d1b71a042a463a89";
request.open('GET', url, true);

request.send();

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  console.log(data);
}
