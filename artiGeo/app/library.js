'use strict'

module.exports = {

aritGeo: function(arr){
  if (arr.length === 0) {
    return 0;
  }

  var arithSequence = arr[1] - arr[0];
  var geoSequence = arr[1] / arr[0];
  var arithCount = 0;
  var geoCount = 0;

  for (var i = 0; i < arr.length - 1; i++) {
      if( arr[i + 1] - arr[i] === arithSequence ){
        arithCount++; //arith = true;
      }          
      if(arr[i + 1] / geoSequence === arr[i]){
        geoCount++; //geo = true;
      }
          
  }

  if(arithCount === arr.length - 1){
    return "Arithmetic";
  }
  else if(geoCount === arr.length - 1){
    return "Geometric";
  }
  else{ 
    return -1;
  }
}


}