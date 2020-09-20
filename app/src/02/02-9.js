function parse(qs) {
  var queryString = qs.substr(1); //queryString = 'banana=10&apple=20&orange=30'
  var chunks = qs.split('&');
  var result = {};
  for (var i = 0; i < chunks[i].length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0]; //key = 'banana'
    var value = parts[1]; //value = '10'
    result[key] = value; //result = { banana: '10'}
  }
  console.log(result);
}

parse('banana=10&apple=20&orange=30');

//추가
