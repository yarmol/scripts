bookfinder.isbn = function(code) {
  var result = http().get("https://www.bookfinder.com.ua/search/"+code+"/all/relevance/1");
  var json = JSON.parse(result.body);
  return json.results;  
}


