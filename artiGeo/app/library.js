'use strict'

module.exports = {

aritGeo: function(arr){
  if (arr.length === 0) {
    return 0;
  }

  var arithSequence = arr[1] - arr[0];
  var geoSequence = arr[1] / arr[0];
  var arith = false;
  var geo = false;

  for (var i = 0; i < arr.length - 1; i++) {
      if( arr[i + 1] - arr[i] === arithSequence )
          arith = true;
      if(arr[i + 1] / geoSequence === arr[i])
          geo = true;
  }

  if(arith === true)
    return "arithmetic";
  else if(geo === true)
    return "geometric";
  else
    return -1;
}


}