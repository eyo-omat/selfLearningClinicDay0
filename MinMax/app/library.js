'use strict'

module.exports = {

findMinMax: function(list){
    var maxValue = list [0];
    var minValue = list [0];
    var minMaxArray = [];

    for (var i = 0; i < list.length; i++) {
       	if (list[i] > maxValue){
    		maxValue = list[i];
		}
    	if (list[i] < minValue){
    		minValue = list[i];
		}
	}
	if(minValue === maxValue){
    	minMaxArray.push(minValue);
    	return minMaxArray;
    }else {
    	minMaxArray.push(minValue, maxValue);
        return minMaxArray;
	}
        
}
}