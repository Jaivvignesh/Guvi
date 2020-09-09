var request = new XMLHttpRequest()
var url_string = 'http://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';
request.open('GET',url_string , true) 
request.send();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
    }
  };
